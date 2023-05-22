import { defineComponent as E, computed as q, openBlock as r, createElementBlock as i, unref as l, toDisplayString as k, createCommentVNode as C, ref as w, withDirectives as H, createElementVNode as p, isRef as U, withModifiers as R, vModelText as B, Fragment as N, renderList as K, reactive as F, onMounted as J, normalizeStyle as G, pushScopeId as Q, popScopeId as X, defineCustomElement as L } from "vue";
const Y = ["href"], Z = /* @__PURE__ */ E({
  __name: "ontology-term-annotation.ce",
  props: {
    annotation: null
  },
  setup(e) {
    const c = e, x = q(() => c.annotation ? c.annotation.split("	")[0] : ""), t = q(() => c.annotation ? c.annotation.split("	")[2] : ""), o = q(() => c.annotation ? c.annotation.split("	")[1] : "");
    return ($, T) => e.annotation && e.annotation != "" ? (r(), i("a", {
      key: 0,
      href: l(t),
      target: "_blank"
    }, k(l(o)) + ": " + k(l(x)), 9, Y)) : C("", !0);
  }
}), ee = ["innerHTML"], te = /* @__PURE__ */ E({
  __name: "ontology-text-annotation.ce",
  props: {
    annotation: null
  },
  setup(e) {
    const c = e, x = q(() => c.annotation ? c.annotation.split("$$$$")[0] : ""), t = q(() => {
      let o = `${x.value}`, $ = c.annotation ? c.annotation.split("$$$$")[1].split(/\r?\n/).filter((n) => n) : [], T = [];
      return $.forEach((n) => {
        let a = n.split("	"), f = a[1].split(" "), u = {};
        u.value = o.substring(parseInt(f[1]), parseInt(f[2])), u.class = a[0], u.ontology = f[0], u.ontology_term = a[2], u.iri = a[3], T.push(u);
      }), T.forEach((n) => {
        o = o.replace(n.value, '<span class="o_term"><a target="_blank" href=' + n.iri + ">" + n.value + "</a></span>");
      }), o;
    });
    return (o, $) => (r(), i("div", { innerHTML: l(t) }, null, 8, ee));
  }
}), oe = `.o_term[data-v-6b855a10]{background-color:#cdcdcd;border-radius:4px;padding:1px 3px}
`, j = (e, c) => {
  const x = e.__vccOpts || e;
  for (const [t, o] of c)
    x[t] = o;
  return x;
}, ae = /* @__PURE__ */ j(te, [["styles", [oe]], ["__scopeId", "data-v-6b855a10"]]), ne = { class: "auto-search-wrapper" }, le = { key: 0 }, re = ["onInput", "placeholder"], ie = { key: 1 }, se = {
  key: 2,
  class: "auto-results-wrapper auto-is-active"
}, ue = {
  tabindex: "0",
  role: "listbox"
}, ce = ["onClick"], de = ["innerHTML"], pe = ["innerHTML"], fe = {
  key: 3,
  type: "button",
  "aria-label": "clear the search query"
}, ve = /* @__PURE__ */ E({
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
  setup(e, { emit: c }) {
    const x = e;
    let t = w(""), o = w([]);
    async function $() {
      if (t.value === "")
        return o.value = [], [];
      let v = t.value.indexOf(":"), h = "", m = null;
      v < 0 ? (h = x.ontologies, m = t.value) : (m = t.value.split(":")[1], h = t.value.split(":")[0]);
      const y = "https://service.tib.eu/ts4tib/api/select?q=", O = encodeURI(
        "&ontology=" + h + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      (await fetch(`${y}${m}${O}`)).json().then((I) => {
        o.value = I.response.docs;
      });
    }
    function T(v) {
      return t.value ? v.replace(new RegExp(t.value, "gi"), (h) => '<span class="highlightText">' + h + "</span>") : v;
    }
    function n(v) {
      return v ? v.join("") : "";
    }
    let a = w(null);
    const f = q(() => a.value ? x.format && x.format == "json" ? a.value : a.value ? a.value.label + "	" + a.value.ontology_prefix + "	" + a.value.iri + "	" + a.value.type : "" : null), u = (v) => {
      a.value = v, t.value = v.label, c("change", f.value), o.value = [];
    };
    return (v, h) => (r(), i("div", ne, [
      e.label ? (r(), i("label", le, k(e.label), 1)) : C("", !0),
      H(p("input", {
        type: "text",
        id: "search",
        "onUpdate:modelValue": h[0] || (h[0] = (m) => U(t) ? t.value = m : t = m),
        onInput: R($, ["stop"]),
        placeholder: e.placeholder,
        autocomplete: "off"
      }, null, 40, re), [
        [B, l(t)]
      ]),
      e.info && l(o).length == 0 ? (r(), i("p", ie, k(e.info), 1)) : (r(), i("div", se, [
        p("ul", ue, [
          (r(!0), i(N, null, K(l(o), (m) => (r(), i("li", {
            key: m.short_label,
            role: "option",
            tabindex: "-1",
            "aria-selected": "false",
            "aria-setsize": "3",
            "aria-posinset": "0",
            onClick: (y) => u(m)
          }, [
            p("p", {
              innerHTML: T(m.label)
            }, null, 8, de),
            p("p", null, [
              p("small", {
                innerHTML: n(m.description)
              }, null, 8, pe)
            ]),
            p("small", null, k(m.ontology_prefix) + ":" + k(m.iri), 1)
          ], 8, ce))), 128))
        ])
      ])),
      l(t) != "" && l(o).length > 0 ? (r(), i("button", fe)) : C("", !0)
    ]));
  }
}), ge = `[data-v-d4fc57ea]:root{--close-button: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'/%3E%3C/svg%3E");--loupe-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23929292' d='M16.041 15.856a.995.995 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.971 6.971 0 0 1-1.959 4.856zm5.666 4.437-3.675-3.675A8.967 8.967 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.967 8.967 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414z'/%3E%3C/svg%3E")}.auto-search-wrapper[data-v-d4fc57ea]{display:block;position:relative;width:100%}.auto-search-wrapper p[data-v-d4fc57ea]{margin:0;padding:0;font-size:1.1em}.auto-search-wrapper p .highlightText[data-v-d4fc57ea]{font-weight:700}.auto-search-wrapper input[data-v-d4fc57ea]{border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;font-size:16px;padding:12px 45px 12px 10px;width:100%}.auto-search-wrapper input[data-v-d4fc57ea]:focus{border:1px solid #858585;outline:none}.auto-search-wrapper input[data-v-d4fc57ea]::-ms-clear{display:none}.auto-search-wrapper ul[data-v-d4fc57ea]{list-style:none;margin:0;overflow:auto;padding:0}.auto-search-wrapper ul li[data-v-d4fc57ea]{cursor:pointer;margin:0;overflow:hidden;padding:10px;position:relative;border:1px dotted #f1f1f2}.auto-search-wrapper ul li[data-v-d4fc57ea]:hover{background-color:#f1f1f2}.auto-search-wrapper ul li[data-v-d4fc57ea]:not(:last-child){border-top:none}.auto-search-wrapper ul li[disabled][data-v-d4fc57ea]{background:#ececec;opacity:.5;pointer-events:none}.auto-search-wrapper .auto-expanded[data-v-d4fc57ea]{border:1px solid #858585;outline:none}.auto-search-wrapper.loupe[data-v-d4fc57ea]:before{filter:invert(60%)}.auto-is-loading[data-v-d4fc57ea]:after{animation:auto-spinner-d4fc57ea .6s linear infinite;border-color:#d9d9d9 grey grey #d9d9d9;border-radius:50%;border-style:solid;border-width:2px;bottom:0;box-sizing:border-box;content:"";height:20px;margin:auto;position:absolute;right:10px;top:0;width:20px}.auto-is-loading .auto-clear[data-v-d4fc57ea]{display:none}@keyframes auto-spinner-d4fc57ea{to{transform:rotate(1turn)}}li.loupe[data-v-d4fc57ea]:before{bottom:auto;top:15px}.loupe input[data-v-d4fc57ea]{padding:12px 45px 12px 35px}.loupe[data-v-d4fc57ea]:before{background-image:var(--loupe-icon);bottom:0;content:"";height:17px;left:10px;margin:auto;position:absolute;top:0;width:17px}.auto-selected[data-v-d4fc57ea]:before{opacity:1}.auto-clear[data-v-d4fc57ea]{align-items:center;background-color:transparent;border:none;bottom:0;cursor:pointer;display:flex;height:auto;justify-content:center;margin:auto;position:absolute;right:0;top:0;width:40px}.auto-clear[data-v-d4fc57ea]:before{content:var(--close-button);height:24px;line-height:100%;width:24px}.auto-clear span[data-v-d4fc57ea]{display:none}.auto-results-wrapper[data-v-d4fc57ea]{background-color:#fff;border:1px solid #858585;border-top:none;box-sizing:border-box;display:none;overflow:hidden}.auto-results-wrapper ul>.loupe[data-v-d4fc57ea]{padding-left:40px}.auto-results-wrapper.auto-is-active[data-v-d4fc57ea]{display:block;margin-top:-1px;position:absolute;width:100%;z-index:99999}.auto-selected[data-v-d4fc57ea]{background-color:#e6e6e6}.auto-selected+li[data-v-d4fc57ea]:before{border-top:none}.auto-error[data-v-d4fc57ea]{border:1px solid #ff3838}.auto-error[data-v-d4fc57ea]::placeholder{color:#f66;opacity:1}.hidden[data-v-d4fc57ea]{display:none}
`, he = /* @__PURE__ */ j(ve, [["styles", [ge]], ["__scopeId", "data-v-d4fc57ea"]]), xe = (e) => (Q("data-v-aaa7ce3e"), e = e(), X(), e), me = ["id"], ye = {
  key: 0,
  class: "o_annotate_label"
}, _e = { key: 1 }, be = { key: 2 }, we = {
  key: 0,
  class: "contextmenu_item"
}, ke = { key: 1 }, $e = ["onClickCapture"], Te = ["innerHTML"], Se = {
  key: 0,
  style: { float: "right" }
}, Ce = /* @__PURE__ */ xe(() => /* @__PURE__ */ p("i", null, "...loading", -1)), qe = [
  Ce
], Me = { key: 0 }, Ie = /* @__PURE__ */ E({
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
  setup(e, { emit: c }) {
    const x = e, t = (Math.random() + 1).toString(36).substring(7), o = w(null), $ = w(!1);
    let T = w(""), n = w({ x: -1e3, y: 0, start: -1, end: -1 }), a = w(""), f = w(!1), u = w([]), v = F([]);
    const h = /* @__PURE__ */ new WeakMap(), m = q(() => "left:" + n.value.x + "px; top:" + n.value.y + "px"), y = q(() => {
      let s = $ ? o.value?.value : T.value;
      return s ? x.format && x.format == "json" ? {
        text: s,
        ontology: v
      } : s + `
$$$$
` + v.map(
        (d) => d.ontology.type[0] + "	" + d.ontology.ontology_prefix + " " + d.context.start + " " + d.context.end + "	" + d.ontology.label + "	" + d.ontology.iri
      ).join(`
`) : null;
    });
    J(() => {
      var s = document.getElementsByTagName("ontology-annotate")[0];
      s?.shadowRoot && ($.value = !0);
    });
    function O(s) {
      T.value = s.target.innerText, c("change", y.value);
    }
    function z(s) {
      let d = {
        ontology: {},
        context: {}
      };
      if (!$)
        d = { ontology: s, context: n.value };
      else if (o) {
        let _ = { x: 0, y: 0, start: o.value?.selectionStart, end: o.value?.selectionEnd };
        d = { ontology: s, context: _ };
      }
      v.push(d), u.value = [], a.value = "", c("change", y.value);
    }
    function I(s) {
      if (a.value = "", window.getSelection) {
        var d = window.getSelection();
        a.value = d?.toString(), a.value && a.value != "" ? (u.value = [], D(d), A(s)) : (n.value = { x: -1e3, y: 0, start: -1, end: -1 }, u.value = []);
      }
    }
    function D(s, d = !0) {
      if (!s?.rangeCount)
        return null;
      let _ = s.getRangeAt(0).cloneRange();
      if (!_.getClientRects)
        return null;
      _.collapse(d);
      let S = _.getClientRects();
      if (S.length <= 0)
        n.value.x = 0, n.value.y = 0;
      else {
        let g = S[0];
        n.value.start = s.anchorOffset, n.value.end = s.focusOffset, n.value.x = g.x, n.value.y = g.y + S[0]?.height;
      }
    }
    async function A(s) {
      if (a.value === "")
        return u.value = [], [];
      let d = a.value.indexOf(":"), _ = "", S = null;
      d < 0 ? (_ = x.ontologies, S = a.value) : (S = a.value.split(":")[1], _ = a.value.split(":")[0]);
      const g = s.currentTarget, b = h.get(g);
      b && b.abort();
      const M = new AbortController();
      h.set(g, M);
      const V = "https://service.tib.eu/ts4tib/api/select?q=", W = encodeURI(
        "&ontolog-y=" + _ + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      f.value = !0, (await fetch(`${V}${S}${W}`, { signal: M.signal })).json().then((P) => {
        h.delete(g), u.value = P.response.docs, f.value = !1;
      });
    }
    return (s, d) => (r(), i("div", {
      id: "o_annotate_wrapper_" + l(t),
      class: "o_annotate_wrapper"
    }, [
      e.label ? (r(), i("label", ye, k(e.label), 1)) : C("", !0),
      $.value ? (r(), i("div", be, [
        p("textarea", {
          ref_key: "o_annotate_textarea",
          ref: o,
          onMouseup: I,
          onKeyup: I,
          onInput: O,
          class: "o_annotate_textarea"
        }, k(l(T)), 545)
      ])) : (r(), i("div", _e, [
        p("div", {
          onMouseup: I,
          onKeyup: I,
          onInput: O,
          class: "o_annotate_textarea",
          ref: "o_annotate_div",
          contenteditable: "true"
        }, k(l(T)), 545)
      ])),
      l(a) != "" ? (r(), i("div", {
        key: 3,
        class: "contextmenu",
        style: G(l(m))
      }, [
        l(u).length == 0 && !l(f) ? (r(), i("div", we, "No matches found")) : (r(), i("div", ke, [
          (r(!0), i(N, null, K(l(u), (_) => (r(), i("div", {
            class: "contextmenu_item",
            key: _.short_label,
            role: "option",
            tabindex: "_1",
            aria_selected: "false",
            aria_setsize: "3",
            aria_posinset: "0",
            onClickCapture: R((S) => z(_), ["stop", "prevent"])
          }, [
            p("p", {
              innerHTML: _.label
            }, null, 8, Te),
            p("small", null, k(_.ontology_prefix) + ":" + k(_.short_form), 1)
          ], 40, $e))), 128))
        ]))
      ], 4)) : C("", !0),
      p("div", null, [
        l(f) ? (r(), i("div", Se, qe)) : C("", !0),
        p("div", null, [
          e.info ? (r(), i("span", Me, k(e.info), 1)) : C("", !0)
        ])
      ])
    ], 8, me));
  }
}), Oe = `.o_annotate_textarea[data-v-aaa7ce3e]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border_box;padding:12px 10px;resize:none}#mainInput[data-v-aaa7ce3e]{background:transparent;color:#000;opacity:1}.contextmenu[data-v-aaa7ce3e]{position:absolute;top:0;right:0;background:#ffffff;color:#000;border:1px solid #f1f1f2;width:15rem;max-width:calc(100vw _ 2rem);max-height:300px;overflow-y:scroll;overflow-x:hidden;z-index:100;box-shadow:0 .5rem 1.5rem #0003;border-radius:.2rem}.contextmenu .contextmenu_item[data-v-aaa7ce3e]{border-bottom:1px solid #c3c3c3;padding:8px}.contextmenu .contextmenu_item[data-v-aaa7ce3e]:hover{cursor:pointer;background-color:#f1f1f2}.contextmenu .contextmenu_item p[data-v-aaa7ce3e]{margin:0;padding:0}.contextmenu .contextmenu_item .iri[data-v-aaa7ce3e]{margin:0;width:15rem;white-space:nowrap;text-overflow:ellipsis;word-wrap:break_word;padding:0}
`, ze = /* @__PURE__ */ j(Ie, [["styles", [Oe]], ["__scopeId", "data-v-aaa7ce3e"]]), Ee = { key: 0 }, Le = ["onKeyup", "onChange"], Ae = { key: 1 }, Re = { key: 2 }, je = { key: 3 }, De = /* @__PURE__ */ E({
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
  setup(e, { emit: c }) {
    const x = e;
    let t = w(""), o = w(""), $ = -1, T = 100, n = 0, a = w([]), f = "", u = "", v = !1, h = w([]), m = w([]), y = w(null);
    const O = q(() => y.value ? y.value ? y.value.label + "	" + y.value.ontology_prefix + "	" + y.value.iri + "	" + y.value.type : "" : null), z = q(() => t.value ? x.format && x.format == "json" ? {
      text: t.value,
      ontology: h.value
    } : t.value + `
$$$$
` + h.value.join(`
`) : null);
    async function I(g) {
      if (t.value == "") {
        o.value = "";
        return;
      }
      if ($ > -1 && clearTimeout($), g.key == "ArrowDown") {
        n == 9 && A(), n += 1, S(), g.preventDefault();
        return;
      } else if (g.key == "ArrowUp") {
        n == 0 && A(), n -= 1, S(), g.preventDefault();
        return;
      } else if (g.key == "ArrowRight")
        g.preventDefault(), d();
      else if (t.value) {
        let b = t.value.split(" ");
        b.length > 1 ? (f = b.slice(-1)[0], u = b.slice(-2).join(" ")) : (f = b[0], u = f), f == "" && (v = !1, y.value = null, o.value = t.value), v && (f = u), s();
      }
    }
    function D() {
      c("change", z.value);
    }
    function A() {
      v = !0, f = u, n = 0, s();
    }
    function s() {
      $ = setTimeout(function() {
        _();
      }, T);
    }
    function d() {
      t.value = o.value, h.value.push(O.value), m.value.push(y.value);
    }
    async function _() {
      const g = "https://service.tib.eu/ts4tib/api/select?q=", b = encodeURI("&obsoletes=false&local=false&rows=10");
      (await fetch(`${g}${f}${b}`)).json().then((V) => {
        a.value = V.response.docs, a.value.length > 0 && (n = 0, S());
      });
    }
    function S() {
      let g = "";
      y.value = a.value[n], g = y.value.label;
      let b = g.toLowerCase().replace(f, "");
      b != null && (o.value = t.value + b);
    }
    return (g, b) => (r(), i("div", null, [
      e.label ? (r(), i("label", Ee, k(e.label), 1)) : C("", !0),
      p("div", null, [
        H(p("textarea", {
          "onUpdate:modelValue": b[0] || (b[0] = (M) => U(o) ? o.value = M : o = M),
          id: "autocomplete",
          type: "text",
          class: "o_annotate_textarea",
          line: "10"
        }, null, 512), [
          [B, l(o)]
        ]),
        H(p("textarea", {
          id: "mainInput",
          onKeyup: R(I, ["stop"]),
          onChange: R(D, ["stop"]),
          "onUpdate:modelValue": b[1] || (b[1] = (M) => U(t) ? t.value = M : t = M),
          type: "text",
          class: "o_annotate_textarea"
        }, null, 40, Le), [
          [B, l(t)]
        ])
      ]),
      e.info && l(a).length == 0 ? (r(), i("p", Ae, k(e.info), 1)) : C("", !0),
      l(y) ? (r(), i("span", Re, [
        p("code", null, [
          p("pre", null, k(l(O)), 1)
        ])
      ])) : C("", !0),
      l(h) && l(h).length > 0 ? (r(), i("span", je, [
        p("code", null, [
          p("pre", null, k(l(z)), 1)
        ])
      ])) : C("", !0)
    ]));
  }
}), Ve = `.o_annotate_textarea[data-v-f73143e2]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;padding:12px 10px;resize:none}#mainInput[data-v-f73143e2]{background:transparent;color:#000;opacity:100}#autocomplete[data-v-f73143e2]{position:absolute;box-sizing:border-box;cursor:text;pointer-events:none;color:#000;opacity:.6;background:transparent}
`, He = /* @__PURE__ */ j(De, [["styles", [Ve]], ["__scopeId", "data-v-f73143e2"]]), Ue = L(Z), Be = L(ae), Ne = L(he), Ke = L(ze), We = L(He);
if (typeof window < "u") {
  let e = window.customElements;
  e.define("ontology-term-annotation", Ue), e.define("ontology-text-annotation", Be), e.define("ontology-autocomplete", Ne), e.define("ontology-annotate", Ke), e.define("ontology-compose", We);
}
export {
  Ke as OntologyAnnotate,
  Ne as OntologyAutoComplete,
  We as OntologyCompose,
  Ue as OntologyTermAnnotation,
  Be as OntologyTextAnnotation
};
//# sourceMappingURL=index.js.map
