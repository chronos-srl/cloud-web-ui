export interface PagedResponse<T> extends Pagination {
  totalItems: number
  totalPages: number
  items: T[]
}

export function createEmptyPagedResponse<T>(): PagedResponse<T> {
  return {
    items: [], page: 0, perPage: 0, totalItems: 0, totalPages: 0
  }
}

export interface Pagination {
  page: number
  perPage: number
}


export class PagedFilter implements Pagination {
  public page = 1;
  public perPage = 10;
  public filters: any = {};

  fromPagination(pagination: Pagination): PagedFilter {
    this.page = pagination.page;
    this.perPage = pagination.perPage;
    return this;
  }
}
