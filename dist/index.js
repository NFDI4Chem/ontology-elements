import { defineComponent as L, computed as O, openBlock as l, createElementBlock as r, unref as n, toDisplayString as b, createCommentVNode as T, ref as m, withDirectives as V, createElementVNode as d, isRef as U, withModifiers as A, vModelText as B, Fragment as N, renderList as K, reactive as F, onMounted as J, normalizeStyle as G, pushScopeId as Q, popScopeId as X, defineCustomElement as R } from "vue";
const Y = ["href"], Z = /* @__PURE__ */ L({
  __name: "ontology-annotation.ce",
  props: {
    annotation: null
  },
  setup(e) {
    const y = e, _ = O(() => y.annotation ? y.annotation.split("	")[0] : ""), t = O(() => y.annotation ? y.annotation.split("	")[2] : ""), o = O(() => y.annotation ? y.annotation.split("	")[1] : "");
    return (S, C) => e.annotation && e.annotation != "" ? (l(), r("a", {
      key: 0,
      href: n(t),
      target: "_blank"
    }, b(n(o)) + ": " + b(n(_)), 9, Y)) : T("", !0);
  }
}), ee = { class: "auto-search-wrapper" }, te = { key: 0 }, oe = ["onInput", "placeholder"], ae = { key: 1 }, ne = {
  key: 2,
  class: "auto-results-wrapper auto-is-active"
}, le = {
  tabindex: "0",
  role: "listbox"
}, re = ["onClick"], ie = ["innerHTML"], se = ["innerHTML"], ue = {
  key: 3,
  type: "button",
  "aria-label": "clear the search query"
}, de = /* @__PURE__ */ L({
  __name: "ontology-autocomplete.ce",
  props: {
    label: {
      type: String,
      required: !1,
      default: ""
    },
    info: {
      type: String,
      required: !1,
      default: ""
    },
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    ontologies: {
      type: String,
      required: !1,
      default: ""
    },
    format: {
      type: String,
      required: !1,
      default: "text"
    }
  },
  emits: ["change"],
  setup(e, { emit: y }) {
    const _ = e;
    let t = m(""), o = m([]);
    async function S() {
      if (t.value === "")
        return o.value = [], [];
      let c = t.value.indexOf(":"), f = "", g = null;
      c < 0 ? (f = _.ontologies, g = t.value) : (g = t.value.split(":")[1], f = t.value.split(":")[0]);
      const v = "https://service.tib.eu/ts4tib/api/select?q=", I = encodeURI(
        "&ontology=" + f + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      (await fetch(`${v}${g}${I}`)).json().then((M) => {
        o.value = M.response.docs;
      });
    }
    function C(c) {
      return t.value ? c.replace(new RegExp(t.value, "gi"), (f) => '<span class="highlightText">' + f + "</span>") : c;
    }
    function s(c) {
      return c ? c.join("") : "";
    }
    let a = m(null);
    const w = O(() => a.value ? _.format && _.format == "json" ? a.value : a.value ? a.value.label + "	" + a.value.ontology_prefix + "	" + a.value.iri + "	" + a.value.type : "" : null), k = (c) => {
      a.value = c, t.value = c.label, y("change", w.value), o.value = [];
    };
    return (c, f) => (l(), r("div", ee, [
      e.label ? (l(), r("label", te, b(e.label), 1)) : T("", !0),
      V(d("input", {
        type: "text",
        id: "search",
        "onUpdate:modelValue": f[0] || (f[0] = (g) => U(t) ? t.value = g : t = g),
        onInput: A(S, ["stop"]),
        placeholder: e.placeholder,
        autocomplete: "off"
      }, null, 40, oe), [
        [B, n(t)]
      ]),
      e.info && n(o).length == 0 ? (l(), r("p", ae, b(e.info), 1)) : (l(), r("div", ne, [
        d("ul", le, [
          (l(!0), r(N, null, K(n(o), (g) => (l(), r("li", {
            key: g.short_label,
            role: "option",
            tabindex: "-1",
            "aria-selected": "false",
            "aria-setsize": "3",
            "aria-posinset": "0",
            onClick: (v) => k(g)
          }, [
            d("p", {
              innerHTML: C(g.label)
            }, null, 8, ie),
            d("p", null, [
              d("small", {
                innerHTML: s(g.description)
              }, null, 8, se)
            ]),
            d("small", null, b(g.ontology_prefix) + ":" + b(g.iri), 1)
          ], 8, re))), 128))
        ])
      ])),
      n(t) != "" && n(o).length > 0 ? (l(), r("button", ue)) : T("", !0)
    ]));
  }
}), ce = `[data-v-d4fc57ea]:root{--close-button: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'/%3E%3C/svg%3E");--loupe-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23929292' d='M16.041 15.856a.995.995 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.971 6.971 0 0 1-1.959 4.856zm5.666 4.437-3.675-3.675A8.967 8.967 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.967 8.967 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414z'/%3E%3C/svg%3E")}.auto-search-wrapper[data-v-d4fc57ea]{display:block;position:relative;width:100%}.auto-search-wrapper p[data-v-d4fc57ea]{margin:0;padding:0;font-size:1.1em}.auto-search-wrapper p .highlightText[data-v-d4fc57ea]{font-weight:700}.auto-search-wrapper input[data-v-d4fc57ea]{border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;font-size:16px;padding:12px 45px 12px 10px;width:100%}.auto-search-wrapper input[data-v-d4fc57ea]:focus{border:1px solid #858585;outline:none}.auto-search-wrapper input[data-v-d4fc57ea]::-ms-clear{display:none}.auto-search-wrapper ul[data-v-d4fc57ea]{list-style:none;margin:0;overflow:auto;padding:0}.auto-search-wrapper ul li[data-v-d4fc57ea]{cursor:pointer;margin:0;overflow:hidden;padding:10px;position:relative;border:1px dotted #f1f1f2}.auto-search-wrapper ul li[data-v-d4fc57ea]:hover{background-color:#f1f1f2}.auto-search-wrapper ul li[data-v-d4fc57ea]:not(:last-child){border-top:none}.auto-search-wrapper ul li[disabled][data-v-d4fc57ea]{background:#ececec;opacity:.5;pointer-events:none}.auto-search-wrapper .auto-expanded[data-v-d4fc57ea]{border:1px solid #858585;outline:none}.auto-search-wrapper.loupe[data-v-d4fc57ea]:before{filter:invert(60%)}.auto-is-loading[data-v-d4fc57ea]:after{animation:auto-spinner-d4fc57ea .6s linear infinite;border-color:#d9d9d9 grey grey #d9d9d9;border-radius:50%;border-style:solid;border-width:2px;bottom:0;box-sizing:border-box;content:"";height:20px;margin:auto;position:absolute;right:10px;top:0;width:20px}.auto-is-loading .auto-clear[data-v-d4fc57ea]{display:none}@keyframes auto-spinner-d4fc57ea{to{transform:rotate(1turn)}}li.loupe[data-v-d4fc57ea]:before{bottom:auto;top:15px}.loupe input[data-v-d4fc57ea]{padding:12px 45px 12px 35px}.loupe[data-v-d4fc57ea]:before{background-image:var(--loupe-icon);bottom:0;content:"";height:17px;left:10px;margin:auto;position:absolute;top:0;width:17px}.auto-selected[data-v-d4fc57ea]:before{opacity:1}.auto-clear[data-v-d4fc57ea]{align-items:center;background-color:transparent;border:none;bottom:0;cursor:pointer;display:flex;height:auto;justify-content:center;margin:auto;position:absolute;right:0;top:0;width:40px}.auto-clear[data-v-d4fc57ea]:before{content:var(--close-button);height:24px;line-height:100%;width:24px}.auto-clear span[data-v-d4fc57ea]{display:none}.auto-results-wrapper[data-v-d4fc57ea]{background-color:#fff;border:1px solid #858585;border-top:none;box-sizing:border-box;display:none;overflow:hidden}.auto-results-wrapper ul>.loupe[data-v-d4fc57ea]{padding-left:40px}.auto-results-wrapper.auto-is-active[data-v-d4fc57ea]{display:block;margin-top:-1px;position:absolute;width:100%;z-index:99999}.auto-selected[data-v-d4fc57ea]{background-color:#e6e6e6}.auto-selected+li[data-v-d4fc57ea]:before{border-top:none}.auto-error[data-v-d4fc57ea]{border:1px solid #ff3838}.auto-error[data-v-d4fc57ea]::placeholder{color:#f66;opacity:1}.hidden[data-v-d4fc57ea]{display:none}
`, H = (e, y) => {
  const _ = e.__vccOpts || e;
  for (const [t, o] of y)
    _[t] = o;
  return _;
}, pe = /* @__PURE__ */ H(de, [["styles", [ce]], ["__scopeId", "data-v-d4fc57ea"]]), fe = (e) => (Q("data-v-bc5db457"), e = e(), X(), e), ve = ["id"], ge = {
  key: 0,
  class: "o_annotate_label"
}, he = { key: 1 }, xe = { key: 2 }, me = {
  key: 0,
  class: "contextmenu_item"
}, be = { key: 1 }, ye = ["onClickCapture"], _e = ["innerHTML"], we = {
  key: 0,
  style: { float: "right" }
}, ke = /* @__PURE__ */ fe(() => /* @__PURE__ */ d("i", null, "...loading", -1)), $e = [
  ke
], Se = { key: 0 }, Te = /* @__PURE__ */ L({
  __name: "ontology-annotate.ce",
  props: {
    label: {
      type: String,
      required: !1,
      default: ""
    },
    info: {
      type: String,
      required: !1,
      default: ""
    },
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    ontologies: {
      type: String,
      required: !1,
      default: ""
    },
    format: {
      type: String,
      required: !1,
      default: "text"
    }
  },
  emits: ["change"],
  setup(e, { emit: y }) {
    const _ = e, t = (Math.random() + 1).toString(36).substring(7), o = m(null), S = m(!1);
    let C = m(""), s = m({ x: -1e3, y: 0, start: -1, end: -1 }), a = m(""), w = m(!1), k = m([]), c = F([]);
    const f = /* @__PURE__ */ new WeakMap(), g = O(() => "left:" + s.value.x + "px; top:" + s.value.y + "px"), v = O(() => {
      let i = S ? o.value?.value : C.value;
      return i ? _.format && _.format == "json" ? {
        text: i,
        ontology: c
      } : i + `
$$$$
` + c.map(
        (u) => u.ontology.type[0] + "	" + u.ontology.ontology_prefix + " " + u.context.start + " " + u.context.end + "	" + u.ontology.label + "	" + u.ontology.iri
      ).join(`
`) : null;
    });
    J(() => {
      var i = document.getElementsByTagName("ontology-annotate")[0];
      i?.shadowRoot && (S.value = !0);
    });
    function I(i) {
      C.value = i.target.innerText, y("change", v.value);
    }
    function z(i) {
      let u = {
        ontology: {},
        context: {}
      };
      if (!S)
        u = { ontology: i, context: s.value };
      else if (o) {
        let h = { x: 0, y: 0, start: o.value?.selectionStart, end: o.value?.selectionEnd };
        u = { ontology: i, context: h };
      }
      c.push(u), k.value = [], a.value = "", y("change", v.value);
    }
    function M(i) {
      if (a.value = "", window.getSelection) {
        var u = window.getSelection();
        a.value = u?.toString(), a.value && a.value != "" ? (k.value = [], j(u), E(i)) : (s.value = { x: -1e3, y: 0, start: -1, end: -1 }, k.value = []);
      }
    }
    function j(i, u = !0) {
      if (!i?.rangeCount)
        return null;
      let h = i.getRangeAt(0).cloneRange();
      if (!h.getClientRects)
        return null;
      h.collapse(u);
      let $ = h.getClientRects();
      if ($.length <= 0)
        s.value.x = 0, s.value.y = 0;
      else {
        let p = $[0];
        s.value.start = i.anchorOffset, s.value.end = i.focusOffset, s.value.x = p.x, s.value.y = p.y + $[0]?.height;
      }
    }
    async function E(i) {
      if (a.value === "")
        return k.value = [], [];
      let u = a.value.indexOf(":"), h = "", $ = null;
      u < 0 ? (h = _.ontologies, $ = a.value) : ($ = a.value.split(":")[1], h = a.value.split(":")[0]);
      const p = i.currentTarget, x = f.get(p);
      x && x.abort();
      const q = new AbortController();
      f.set(p, q);
      const D = "https://service.tib.eu/ts4tib/api/select?q=", W = encodeURI(
        "&ontolog-y=" + h + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      w.value = !0, (await fetch(`${D}${$}${W}`, { signal: q.signal })).json().then((P) => {
        f.delete(p), k.value = P.response.docs, w.value = !1;
      });
    }
    return (i, u) => (l(), r("div", {
      id: "o_annotate_wrapper_" + n(t),
      class: "o_annotate_wrapper"
    }, [
      e.label ? (l(), r("label", ge, b(e.label), 1)) : T("", !0),
      S.value ? (l(), r("div", xe, [
        d("textarea", {
          ref_key: "o_annotate_textarea",
          ref: o,
          onMouseup: M,
          onKeyup: M,
          onInput: I,
          class: "o_annotate_textarea"
        }, b(n(C)), 545)
      ])) : (l(), r("div", he, [
        d("div", {
          onMouseup: M,
          onKeyup: M,
          onInput: I,
          class: "o_annotate_textarea",
          ref: "o_annotate_div",
          contenteditable: "true"
        }, b(n(C)), 545)
      ])),
      n(a) != "" ? (l(), r("div", {
        key: 3,
        class: "contextmenu",
        style: G(n(g))
      }, [
        n(k).length == 0 && !n(w) ? (l(), r("div", me, "No matches found")) : (l(), r("div", be, [
          (l(!0), r(N, null, K(n(k), (h) => (l(), r("div", {
            class: "contextmenu_item",
            key: h.short_label,
            role: "option",
            tabindex: "_1",
            aria_selected: "false",
            aria_setsize: "3",
            aria_posinset: "0",
            onClickCapture: A(($) => z(h), ["stop", "prevent"])
          }, [
            d("p", {
              innerHTML: h.label
            }, null, 8, _e),
            d("small", null, b(h.ontology_prefix) + ":" + b(h.short_form), 1)
          ], 40, ye))), 128))
        ]))
      ], 4)) : T("", !0),
      d("div", null, [
        n(w) ? (l(), r("div", we, $e)) : T("", !0),
        d("div", null, [
          e.info ? (l(), r("span", Se, b(e.info), 1)) : T("", !0)
        ])
      ])
    ], 8, ve));
  }
}), Ce = `.o_annotate_textarea[data-v-bc5db457]{min-height:100px;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border_box;padding:12px 45px 12px 10px;width:100%}#mainInput[data-v-bc5db457]{background:transparent;color:#000;opacity:1}.contextmenu[data-v-bc5db457]{position:absolute;top:0;right:0;background:#ffffff;color:#000;border:1px solid #f1f1f2;width:15rem;max-width:calc(100vw _ 2rem);max-height:300px;overflow-y:scroll;overflow-x:hidden;z-index:100;box-shadow:0 .5rem 1.5rem #0003;border-radius:.2rem}.contextmenu .contextmenu_item[data-v-bc5db457]{border-bottom:1px solid #c3c3c3;padding:8px}.contextmenu .contextmenu_item[data-v-bc5db457]:hover{cursor:pointer;background-color:#f1f1f2}.contextmenu .contextmenu_item p[data-v-bc5db457]{margin:0;padding:0}.contextmenu .contextmenu_item .iri[data-v-bc5db457]{margin:0;width:15rem;white-space:nowrap;text-overflow:ellipsis;word-wrap:break_word;padding:0}
`, qe = /* @__PURE__ */ H(Te, [["styles", [Ce]], ["__scopeId", "data-v-bc5db457"]]), Me = { key: 0 }, Oe = ["onKeyup", "onChange"], Ie = { key: 1 }, ze = { key: 2 }, Ee = { key: 3 }, Ae = /* @__PURE__ */ L({
  __name: "ontology-compose.ce",
  props: {
    label: {
      type: String,
      required: !1,
      default: ""
    },
    info: {
      type: String,
      required: !1,
      default: ""
    },
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    format: {
      type: String,
      required: !1,
      default: "text"
    }
  },
  emits: ["change"],
  setup(e, { emit: y }) {
    const _ = e;
    let t = m(""), o = m(""), S = -1, C = 100, s = 0, a = m([]), w = "", k = "", c = !1, f = m([]), g = m([]), v = m(null);
    const I = O(() => v.value ? v.value ? v.value.label + "	" + v.value.ontology_prefix + "	" + v.value.iri + "	" + v.value.type : "" : null), z = O(() => t.value ? _.format && _.format == "json" ? {
      text: t.value,
      ontology: f.value
    } : t.value + `
$$$$
` + f.value.join(`
`) : null);
    async function M(p) {
      if (t.value == "") {
        o.value = "";
        return;
      }
      if (S > -1 && clearTimeout(S), p.key == "ArrowDown") {
        s == 9 && E(), s += 1, $(), p.preventDefault();
        return;
      } else if (p.key == "ArrowUp") {
        s == 0 && E(), s -= 1, $(), p.preventDefault();
        return;
      } else if (p.key == "ArrowRight")
        p.preventDefault(), u();
      else if (t.value) {
        let x = t.value.split(" ");
        x.length > 1 ? (w = x.slice(-1)[0], k = x.slice(-2).join(" ")) : (w = x[0], k = w), w == "" && (c = !1, v.value = null, o.value = t.value), c && (w = k), i();
      }
    }
    function j() {
      y("change", z.value);
    }
    function E() {
      c = !0, w = k, s = 0, i();
    }
    function i() {
      S = setTimeout(function() {
        h();
      }, C);
    }
    function u() {
      t.value = o.value, f.value.push(I.value), g.value.push(v.value);
    }
    async function h() {
      const p = "https://service.tib.eu/ts4tib/api/select?q=", x = encodeURI("&obsoletes=false&local=false&rows=10");
      (await fetch(`${p}${w}${x}`)).json().then((D) => {
        a.value = D.response.docs, a.value.length > 0 && (s = 0, $());
      });
    }
    function $() {
      let p = "";
      if (v.value) {
        v.value = a.value[s], p = v.value.label;
        let x = p.toLowerCase().replace(w, "");
        x != null && (o.value = t.value + x);
      }
    }
    return (p, x) => (l(), r("div", null, [
      e.label ? (l(), r("label", Me, b(e.label), 1)) : T("", !0),
      d("div", null, [
        V(d("textarea", {
          "onUpdate:modelValue": x[0] || (x[0] = (q) => U(o) ? o.value = q : o = q),
          id: "autocomplete",
          type: "text",
          class: "vc_textarea",
          line: "10"
        }, null, 512), [
          [B, n(o)]
        ]),
        V(d("textarea", {
          id: "mainInput",
          onKeyup: A(M, ["stop"]),
          onChange: A(j, ["stop"]),
          "onUpdate:modelValue": x[1] || (x[1] = (q) => U(t) ? t.value = q : t = q),
          type: "text",
          class: "vc_textarea"
        }, null, 40, Oe), [
          [B, n(t)]
        ])
      ]),
      e.info && n(a).length == 0 ? (l(), r("p", Ie, b(e.info), 1)) : T("", !0),
      n(v) ? (l(), r("span", ze, [
        d("code", null, [
          d("pre", null, b(n(I)), 1)
        ])
      ])) : T("", !0),
      n(f) && n(f).length > 0 ? (l(), r("span", Ee, [
        d("code", null, [
          d("pre", null, b(n(z)), 1)
        ])
      ])) : T("", !0)
    ]));
  }
}), Le = `.vc_textarea[data-v-e52a6af8]{min-height:100px;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;padding:12px 45px 12px 10px;width:100%}#mainInput[data-v-e52a6af8]{background:transparent;color:#000;opacity:100}#autocomplete[data-v-e52a6af8]{position:absolute;box-sizing:border-box;cursor:text;pointer-events:none;color:#000;opacity:.6;background:transparent}
`, Re = /* @__PURE__ */ H(Ae, [["styles", [Le]], ["__scopeId", "data-v-e52a6af8"]]), je = R(Z), De = R(pe), Ve = R(qe), Ue = R(Re);
if (typeof window < "u") {
  let e = window.customElements;
  e.define("ontology-annotation", je), e.define("ontology-autocomplete", De), e.define("ontology-annotate", Ve), e.define("ontology-compose", Ue);
}
export {
  Ve as OntologyAnnotate,
  je as OntologyAnnotation,
  De as OntologyAutoComplete,
  Ue as OntologyCompose
};
//# sourceMappingURL=index.js.map
