import { createElementBlock as r, openBlock as s } from "vue";
const _ = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, l = {};
function f(t, e) {
  return s(), r("h1", null, "Hello from test component");
}
const p = /* @__PURE__ */ _(l, [["render", f]]);
export {
  p as TestComponent
};
