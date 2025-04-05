import {type Ref, ref} from "vue";
import {EmitFn} from "@vue/runtime-core";

export function extraLiValue(li: HTMLElement): string {
  const value = li.dataset.value

  if (!value) {
    throw new Error('Missing [data-value] attribute')
  }

  return value
}

export function extractLiText(li: HTMLElement): string {
  const value = li.querySelector('.text-value')?.textContent
  if (value) {
    return value
  }

  return li.textContent!
}

export function queryElementWithValue(parent: HTMLElement, value: string): HTMLElement | undefined {
  const element = parent.querySelector(`[data-value="${value}"]`) as HTMLElement
  if (element) {
    return element!
  }
}

const selectedClassName = "selected";

export interface DetailsSelectOptions {
  summaryText?: string;
  emits?: Function
}

export function useDetailsSelect(parent: Readonly<Ref<HTMLDetailsElement | null>>, model: any, options: DetailsSelectOptions = {}) {
  const summaryText = ref(options.summaryText)
  const isPlaceholder = ref(true)


  function selectFromModel() {
    if (model.value === undefined || model.value === null) {
      return
    }

    const li = queryElementWithValue(parent.value!, model.value.toString())
    if (li) {
      setSelected(li)
    }
  }

  async function handleSelectItem(event: any) {
    const li = event.target.closest('li') as HTMLElement
    if (!li) {
      console.warn('cannot find li element')
      return
    }

    setSelected(li)
    model.value = extraLiValue(li)
    // handle redraw complete
    setTimeout(() => parent.value!.open = false, 10)

    if (options.emits) {
      options.emits('change', model.value)
    }
  }

  function setSelected(el: HTMLElement) {
    parent.value!.querySelectorAll("li").forEach(el => el.classList.remove(selectedClassName))
    el.classList.add(selectedClassName)
    summaryText.value = extractLiText(el)
    isPlaceholder.value = false
  }

  return {
    summaryText,
    selectFromModel,
    handleSelectItem,
    isPlaceholder
  }
}
