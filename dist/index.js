import { defineComponent as R, computed as O, openBlock as l, createElementBlock as r, unref as a, toDisplayString as y, createCommentVNode as T, ref as $, withDirectives as D, createElementVNode as i, isRef as U, withModifiers as L, vModelText as H, Fragment as N, renderList as K, reactive as W, normalizeStyle as P, pushScopeId as F, popScopeId as J, defineCustomElement as j } from "vue";
const G = ["href"], Q = /* @__PURE__ */ R({
  __name: "ontology-annotation.ce",
  props: {
    annotation: null
  },
  setup(t) {
    const m = t, b = O(() => m.annotation ? m.annotation.split("	")[0] : ""), e = O(() => m.annotation ? m.annotation.split("	")[2] : ""), n = O(() => m.annotation ? m.annotation.split("	")[1] : "");
    return (s, C) => t.annotation && t.annotation != "" ? (l(), r("a", {
      key: 0,
      href: a(e),
      target: "_blank"
    }, y(a(n)) + ": " + y(a(b)), 9, G)) : T("", !0);
  }
}), X = { class: "auto-search-wrapper" }, Y = { key: 0 }, Z = ["onInput", "placeholder"], ee = { key: 1 }, te = {
  key: 2,
  class: "auto-results-wrapper auto-is-active"
}, oe = {
  tabindex: "0",
  role: "listbox"
}, ae = ["onClick"], ne = ["innerHTML"], le = ["innerHTML"], re = {
  key: 3,
  type: "button",
  "aria-label": "clear the search query"
}, ie = /* @__PURE__ */ R({
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
  setup(t, { emit: m }) {
    const b = t;
    let e = $(""), n = $([]);
    async function s() {
      if (e.value === "")
        return n.value = [], [];
      let f = e.value.indexOf(":"), h = "", d = null;
      f < 0 ? (h = b.ontologies, d = e.value) : (d = e.value.split(":")[1], h = e.value.split(":")[0]);
      const v = "https://service.tib.eu/ts4tib/api/select?q=", E = encodeURI(
        "&ontology=" + h + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      (await fetch(`${v}${d}${E}`)).json().then((o) => {
        n.value = o.response.docs;
      });
    }
    function C(f) {
      return e.value ? f.replace(new RegExp(e.value, "gi"), (h) => '<span class="highlightText">' + h + "</span>") : f;
    }
    function c(f) {
      return f ? f.join("") : "";
    }
    let p = $(null);
    const w = O(() => p.value ? b.format && b.format == "json" ? p.value : p.value ? p.value.label + "	" + p.value.ontology_prefix + "	" + p.value.iri + "	" + p.value.type : "" : null), u = (f) => {
      p.value = f, e.value = f.label, m("change", w.value), n.value = [];
    };
    return (f, h) => (l(), r("div", X, [
      t.label ? (l(), r("label", Y, y(t.label), 1)) : T("", !0),
      D(i("input", {
        type: "text",
        id: "search",
        "onUpdate:modelValue": h[0] || (h[0] = (d) => U(e) ? e.value = d : e = d),
        onInput: L(s, ["stop"]),
        placeholder: t.placeholder,
        autocomplete: "off"
      }, null, 40, Z), [
        [H, a(e)]
      ]),
      t.info && a(n).length == 0 ? (l(), r("p", ee, y(t.info), 1)) : (l(), r("div", te, [
        i("ul", oe, [
          (l(!0), r(N, null, K(a(n), (d) => (l(), r("li", {
            key: d.short_label,
            role: "option",
            tabindex: "-1",
            "aria-selected": "false",
            "aria-setsize": "3",
            "aria-posinset": "0",
            onClick: (v) => u(d)
          }, [
            i("p", {
              innerHTML: C(d.label)
            }, null, 8, ne),
            i("p", null, [
              i("small", {
                innerHTML: c(d.description)
              }, null, 8, le)
            ]),
            i("small", null, y(d.ontology_prefix) + ":" + y(d.iri), 1)
          ], 8, ae))), 128))
        ])
      ])),
      a(e) != "" && a(n).length > 0 ? (l(), r("button", re)) : T("", !0)
    ]));
  }
}), se = `[data-v-d4fc57ea]:root{--close-button: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'/%3E%3C/svg%3E");--loupe-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23929292' d='M16.041 15.856a.995.995 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.971 6.971 0 0 1-1.959 4.856zm5.666 4.437-3.675-3.675A8.967 8.967 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.967 8.967 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414z'/%3E%3C/svg%3E")}.auto-search-wrapper[data-v-d4fc57ea]{display:block;position:relative;width:100%}.auto-search-wrapper p[data-v-d4fc57ea]{margin:0;padding:0;font-size:1.1em}.auto-search-wrapper p .highlightText[data-v-d4fc57ea]{font-weight:700}.auto-search-wrapper input[data-v-d4fc57ea]{border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;font-size:16px;padding:12px 45px 12px 10px;width:100%}.auto-search-wrapper input[data-v-d4fc57ea]:focus{border:1px solid #858585;outline:none}.auto-search-wrapper input[data-v-d4fc57ea]::-ms-clear{display:none}.auto-search-wrapper ul[data-v-d4fc57ea]{list-style:none;margin:0;overflow:auto;padding:0}.auto-search-wrapper ul li[data-v-d4fc57ea]{cursor:pointer;margin:0;overflow:hidden;padding:10px;position:relative;border:1px dotted #f1f1f2}.auto-search-wrapper ul li[data-v-d4fc57ea]:hover{background-color:#f1f1f2}.auto-search-wrapper ul li[data-v-d4fc57ea]:not(:last-child){border-top:none}.auto-search-wrapper ul li[disabled][data-v-d4fc57ea]{background:#ececec;opacity:.5;pointer-events:none}.auto-search-wrapper .auto-expanded[data-v-d4fc57ea]{border:1px solid #858585;outline:none}.auto-search-wrapper.loupe[data-v-d4fc57ea]:before{filter:invert(60%)}.auto-is-loading[data-v-d4fc57ea]:after{animation:auto-spinner-d4fc57ea .6s linear infinite;border-color:#d9d9d9 grey grey #d9d9d9;border-radius:50%;border-style:solid;border-width:2px;bottom:0;box-sizing:border-box;content:"";height:20px;margin:auto;position:absolute;right:10px;top:0;width:20px}.auto-is-loading .auto-clear[data-v-d4fc57ea]{display:none}@keyframes auto-spinner-d4fc57ea{to{transform:rotate(1turn)}}li.loupe[data-v-d4fc57ea]:before{bottom:auto;top:15px}.loupe input[data-v-d4fc57ea]{padding:12px 45px 12px 35px}.loupe[data-v-d4fc57ea]:before{background-image:var(--loupe-icon);bottom:0;content:"";height:17px;left:10px;margin:auto;position:absolute;top:0;width:17px}.auto-selected[data-v-d4fc57ea]:before{opacity:1}.auto-clear[data-v-d4fc57ea]{align-items:center;background-color:transparent;border:none;bottom:0;cursor:pointer;display:flex;height:auto;justify-content:center;margin:auto;position:absolute;right:0;top:0;width:40px}.auto-clear[data-v-d4fc57ea]:before{content:var(--close-button);height:24px;line-height:100%;width:24px}.auto-clear span[data-v-d4fc57ea]{display:none}.auto-results-wrapper[data-v-d4fc57ea]{background-color:#fff;border:1px solid #858585;border-top:none;box-sizing:border-box;display:none;overflow:hidden}.auto-results-wrapper ul>.loupe[data-v-d4fc57ea]{padding-left:40px}.auto-results-wrapper.auto-is-active[data-v-d4fc57ea]{display:block;margin-top:-1px;position:absolute;width:100%;z-index:99999}.auto-selected[data-v-d4fc57ea]{background-color:#e6e6e6}.auto-selected+li[data-v-d4fc57ea]:before{border-top:none}.auto-error[data-v-d4fc57ea]{border:1px solid #ff3838}.auto-error[data-v-d4fc57ea]::placeholder{color:#f66;opacity:1}.hidden[data-v-d4fc57ea]{display:none}
`, B = (t, m) => {
  const b = t.__vccOpts || t;
  for (const [e, n] of m)
    b[e] = n;
  return b;
}, ue = /* @__PURE__ */ B(ie, [["styles", [se]], ["__scopeId", "data-v-d4fc57ea"]]), de = (t) => (F("data-v-8eeb146b"), t = t(), J(), t), ce = { key: 0 }, pe = {
  key: 0,
  class: "contextmenu-item"
}, fe = { key: 1 }, ve = ["onClickCapture"], ge = ["innerHTML"], he = { class: "iri" }, xe = {
  key: 0,
  style: { float: "right" }
}, me = /* @__PURE__ */ de(() => /* @__PURE__ */ i("i", null, "...loading", -1)), be = [
  me
], ye = { key: 0 }, we = /* @__PURE__ */ R({
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
  setup(t, { emit: m }) {
    const b = t;
    let e = $("");
    const n = O(() => e.value ? b.format && b.format == "json" ? {
      text: e.value,
      ontology: p
    } : e.value + `
$$$$
` + p.map(
      (o) => o.ontology.type[0] + "	" + o.ontology.ontology_prefix + " " + o.context.start + " " + o.context.end + "	" + o.ontology.label + "	" + o.ontology.iri
    ).join(`
`) : null);
    let s = $(""), C = $(!1), c = $([]), p = W([]);
    const w = /* @__PURE__ */ new WeakMap();
    let u = $({ x: -1e3, y: 0, start: -1, end: -1 });
    function f(o) {
      e.value = o.target.innerText, m("change", n.value);
    }
    function h(o) {
      let _ = { ontology: o, context: u.value };
      p.push(_), u.value = { x: -1e3, y: 0, start: -1, end: -1 }, c.value = [], s.value = "", m("change", n.value);
    }
    function d(o) {
      if (s.value = "", window.getSelection) {
        var _ = window.getSelection();
        console.log(_), s.value = _?.toString(), s.value && s.value != "" ? (c.value = [], u.value = { x: -1e3, y: 0, start: -1, end: -1 }, E(_), M(o)) : (u.value = { x: -1e3, y: 0, start: -1, end: -1 }, c.value = []);
      }
    }
    function v(o) {
      return s.value ? o.replace(new RegExp(s.value, "gi"), (_) => '<span class="highlightText">' + _ + "</span>") : o;
    }
    function E(o, _ = !0) {
      if (!o?.rangeCount)
        return null;
      let g = o.getRangeAt(0).cloneRange();
      if (console.log(g.getClientRects()), !g.getClientRects)
        return null;
      g.collapse(_);
      let S = g.getClientRects();
      if (S.length <= 0)
        u.value.x = 0, u.value.y = 0;
      else {
        let q = S[0];
        u.value.start = o.anchorOffset, u.value.end = o.focusOffset, u.value.x = q.x, u.value.y = q.y + S[0]?.height;
      }
    }
    async function M(o) {
      if (s.value === "")
        return c.value = [], [];
      let _ = s.value.indexOf(":"), g = "", S = null;
      _ < 0 ? (g = b.ontologies, S = s.value) : (S = s.value.split(":")[1], g = s.value.split(":")[0]);
      const q = o.currentTarget, A = w.get(q);
      A && A.abort();
      const z = new AbortController();
      w.set(q, z);
      const k = "https://service.tib.eu/ts4tib/api/select?q=", x = encodeURI(
        "&ontology=" + g + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      C.value = !0, (await fetch(`${k}${S}${x}`, { signal: z.signal })).json().then((V) => {
        w.delete(q), c.value = V.response.docs, C.value = !1;
      });
    }
    return (o, _) => (l(), r("div", null, [
      t.label ? (l(), r("label", ce, y(t.label), 1)) : T("", !0),
      i("div", null, [
        i("div", {
          onMouseup: d,
          onKeyup: d,
          onInput: f,
          class: "vc_textarea",
          contenteditable: "true"
        }, y(a(e)), 33),
        i("div", {
          class: "contextmenu",
          style: P("left:" + a(u).x + "px; top:" + a(u).y + "px")
        }, [
          a(c).length == 0 && !a(C) ? (l(), r("div", pe, "No matches found")) : (l(), r("div", fe, [
            (l(!0), r(N, null, K(a(c), (g) => (l(), r("div", {
              class: "contextmenu-item",
              key: g.short_label,
              role: "option",
              tabindex: "-1",
              "aria-selected": "false",
              "aria-setsize": "3",
              "aria-posinset": "0",
              onClickCapture: L((S) => h(g), ["stop", "prevent"])
            }, [
              i("p", {
                innerHTML: v(g.label)
              }, null, 8, ge),
              i("small", he, y(g.ontology_prefix) + ":" + y(g.iri), 1)
            ], 40, ve))), 128))
          ]))
        ], 4)
      ]),
      i("div", null, [
        a(C) ? (l(), r("div", xe, be)) : T("", !0),
        i("div", null, [
          t.info ? (l(), r("span", ye, y(t.info), 1)) : T("", !0)
        ])
      ])
    ]));
  }
}), _e = `.vc_textarea[data-v-8eeb146b]{min-height:100px;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;padding:12px 45px 12px 10px;width:100%}#mainInput[data-v-8eeb146b]{background:transparent;color:#000;opacity:1}.contextmenu[data-v-8eeb146b]{position:absolute;background:#ffffff;color:#000;margin-top:5px;border:1px solid #f1f1f2;box-shadow:0 .5rem 1.5rem #0003;border-radius:.2rem;width:15rem;max-width:calc(100vw - 2rem);max-height:300px;overflow-y:scroll;overflow-x:hidden;z-index:100}.contextmenu .contextmenu-item[data-v-8eeb146b]{border-bottom:1px solid #c3c3c3;padding:8px}.contextmenu .contextmenu-item[data-v-8eeb146b]:hover{cursor:pointer;background-color:#f1f1f2}.contextmenu .contextmenu-item p[data-v-8eeb146b]{margin:0;padding:0}.contextmenu .contextmenu-item .iri[data-v-8eeb146b]{margin:0;width:15rem;white-space:nowrap;text-overflow:ellipsis;word-wrap:break-word;padding:0}
`, ke = /* @__PURE__ */ B(we, [["styles", [_e]], ["__scopeId", "data-v-8eeb146b"]]), $e = { key: 0 }, Se = ["onKeyup", "onChange"], Te = { key: 1 }, Ce = { key: 2 }, qe = { key: 3 }, Ie = /* @__PURE__ */ R({
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
  setup(t, { emit: m }) {
    const b = t;
    let e = $(""), n = $(""), s = -1, C = 100, c = 0, p = $([]), w = "", u = "", f = !1, h = $([]), d = $([]), v = $(null);
    const E = O(() => v.value ? v.value ? v.value.label + "	" + v.value.ontology_prefix + "	" + v.value.iri + "	" + v.value.type : "" : null), M = O(() => e.value ? b.format && b.format == "json" ? {
      text: e.value,
      ontology: h.value
    } : e.value + `
$$$$
` + h.value.join(`
`) : null);
    async function o(k) {
      if (e.value == "") {
        n.value = "";
        return;
      }
      if (s > -1 && clearTimeout(s), k.key == "ArrowDown") {
        c == 9 && g(), c += 1, z(), k.preventDefault();
        return;
      } else if (k.key == "ArrowUp") {
        c == 0 && g(), c -= 1, z(), k.preventDefault();
        return;
      } else if (k.key == "ArrowRight")
        k.preventDefault(), q();
      else if (e.value) {
        let x = e.value.split(" ");
        x.length > 1 ? (w = x.slice(-1)[0], u = x.slice(-2).join(" ")) : (w = x[0], u = w), w == "" && (f = !1, v.value = null, n.value = e.value), f && (w = u), S();
      }
    }
    function _() {
      m("change", M.value);
    }
    function g() {
      f = !0, w = u, c = 0, S();
    }
    function S() {
      s = setTimeout(function() {
        A();
      }, C);
    }
    function q() {
      e.value = n.value, h.value.push(E.value), d.value.push(v.value);
    }
    async function A() {
      const k = "https://service.tib.eu/ts4tib/api/select?q=", x = encodeURI("&obsoletes=false&local=false&rows=10");
      (await fetch(`${k}${w}${x}`)).json().then((V) => {
        p.value = V.response.docs, p.value.length > 0 && (c = 0, z());
      });
    }
    function z() {
      let k = "";
      if (v.value) {
        v.value = p.value[c], k = v.value.label;
        let x = k.toLowerCase().replace(w, "");
        x != null && (n.value = e.value + x);
      }
    }
    return (k, x) => (l(), r("div", null, [
      t.label ? (l(), r("label", $e, y(t.label), 1)) : T("", !0),
      i("div", null, [
        D(i("textarea", {
          "onUpdate:modelValue": x[0] || (x[0] = (I) => U(n) ? n.value = I : n = I),
          id: "autocomplete",
          type: "text",
          class: "vc_textarea",
          line: "10"
        }, null, 512), [
          [H, a(n)]
        ]),
        D(i("textarea", {
          id: "mainInput",
          onKeyup: L(o, ["stop"]),
          onChange: L(_, ["stop"]),
          "onUpdate:modelValue": x[1] || (x[1] = (I) => U(e) ? e.value = I : e = I),
          type: "text",
          class: "vc_textarea"
        }, null, 40, Se), [
          [H, a(e)]
        ])
      ]),
      t.info && a(p).length == 0 ? (l(), r("p", Te, y(t.info), 1)) : T("", !0),
      a(v) ? (l(), r("span", Ce, [
        i("code", null, [
          i("pre", null, y(a(E)), 1)
        ])
      ])) : T("", !0),
      a(h) && a(h).length > 0 ? (l(), r("span", qe, [
        i("code", null, [
          i("pre", null, y(a(M)), 1)
        ])
      ])) : T("", !0)
    ]));
  }
}), Oe = `.vc_textarea[data-v-8694d5ed]{min-height:100px;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;padding:12px 45px 12px 10px;width:100%}#mainInput[data-v-8694d5ed]{background:transparent;color:#000;opacity:100}#autocomplete[data-v-8694d5ed]{position:absolute;box-sizing:border-box;cursor:text;pointer-events:none;color:#000;opacity:.6;background:transparent}
`, Ee = /* @__PURE__ */ B(Ie, [["styles", [Oe]], ["__scopeId", "data-v-8694d5ed"]]), ze = j(Q), Me = j(ue), Ae = j(ke), Le = j(Ee);
customElements.define("ontology-annotation", ze);
customElements.define("ontology-autocomplete", Me);
customElements.define("ontology-annotate", Ae);
customElements.define("ontology-compose", Le);
export {
  Ae as OntologyAnnotate,
  ze as OntologyAnnotation,
  Me as OntologyAutoComplete,
  Le as OntologyCompose
};
//# sourceMappingURL=index.js.map
