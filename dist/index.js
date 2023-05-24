import { defineComponent as L, computed as C, openBlock as i, createElementBlock as s, unref as l, toDisplayString as $, createCommentVNode as S, ref as k, watch as J, onMounted as N, withDirectives as H, createElementVNode as v, isRef as U, withModifiers as j, normalizeClass as G, vModelText as B, Fragment as K, renderList as W, reactive as Q, normalizeStyle as X, pushScopeId as Y, popScopeId as Z, defineCustomElement as A } from "vue";
const ee = ["href"], te = /* @__PURE__ */ L({
  __name: "ontology-term-annotation.ce",
  props: {
    annotation: null
  },
  setup(e) {
    const p = e, f = C(() => p.annotation ? p.annotation.split("	")[0] : ""), r = C(() => p.annotation ? p.annotation.split("	")[2] : ""), t = C(() => p.annotation ? p.annotation.split("	")[1] : "");
    return (h, m) => e.annotation && e.annotation != "" ? (i(), s("a", {
      key: 0,
      href: l(r),
      target: "_blank"
    }, $(l(t)) + ": " + $(l(f)), 9, ee)) : S("", !0);
  }
}), oe = ["innerHTML"], ne = /* @__PURE__ */ L({
  __name: "ontology-text-annotation.ce",
  props: {
    annotation: null
  },
  setup(e) {
    const p = e, f = C(() => p.annotation ? p.annotation.split("$$$$")[0] : ""), r = C(() => {
      let t = `${f.value}`, h = p.annotation ? p.annotation.split("$$$$")[1].split(/\r?\n/).filter((n) => n) : [], m = [];
      return h.forEach((n) => {
        let u = n.split("	"), x = u[1].split(" "), c = {};
        c.value = t.substring(parseInt(x[1]), parseInt(x[2])), c.class = u[0], c.ontology = x[0], c.ontology_term = u[2], c.iri = u[3], m.push(c);
      }), m.forEach((n) => {
        t = t.replace(
          n.value,
          '<span class="o_term"><a target="_blank" href=' + n.iri + ">" + n.value + "</a></span>"
        );
      }), t;
    });
    return (t, h) => (i(), s("div", { innerHTML: l(r) }, null, 8, oe));
  }
}), ae = `.o_term[data-v-922a42fb]{background-color:#cdcdcd;border-radius:4px;padding:1px 3px}
`, R = (e, p) => {
  const f = e.__vccOpts || e;
  for (const [r, t] of p)
    f[r] = t;
  return f;
}, le = /* @__PURE__ */ R(ne, [["styles", [ae]], ["__scopeId", "data-v-922a42fb"]]), re = { class: "auto-search-wrapper" }, ie = { key: 0 }, se = ["onInput", "placeholder"], ue = { key: 1 }, de = {
  key: 2,
  class: "auto-results-wrapper auto-is-active"
}, ce = {
  tabindex: "0",
  role: "listbox"
}, pe = ["onClick"], fe = ["innerHTML"], ge = ["innerHTML"], ve = {
  key: 3,
  type: "button",
  "aria-label": "clear the search query"
}, he = /* @__PURE__ */ L({
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
    modelValue: {
      type: String,
      required: !1,
      default: ""
    },
    styling: {
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
  setup(e, { emit: p }) {
    const f = e, r = (a) => {
      m.value = a, t.value = a.label, p("change", n.value), h.value = [];
    };
    let t = k(""), h = k([]), m = k(null);
    const n = C(() => m.value ? f.format && f.format == "json" ? m.value : m.value ? m.value.label + "	" + m.value.ontology_prefix + "	" + m.value.iri + "	" + m.value.type : "" : null);
    J(
      () => f.modelValue,
      (a, _) => {
        r(c(a));
      }
    ), N(() => {
      f.modelValue != "" && r(c(f.modelValue));
    });
    async function u() {
      if (t.value === "")
        return h.value = [], [];
      let a = t.value.indexOf(":"), _ = "", o = null;
      a < 0 ? (_ = f.ontologies, o = t.value) : (o = t.value.split(":")[1], _ = t.value.split(":")[0]);
      const M = "https://service.tib.eu/ts4tib/api/select?q=", z = encodeURI(
        "&ontology=" + _ + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      (await fetch(`${M}${o}${z}`)).json().then((E) => {
        h.value = E.response.docs;
      });
    }
    function x(a) {
      return t.value ? a.replace(new RegExp(t.value, "gi"), (_) => '<span class="highlightText">' + _ + "</span>") : a;
    }
    function c(a) {
      if (!a)
        return null;
      const _ = a.split("	");
      return {
        label: _[0],
        iri: _[2],
        ontology_prefix: _[1],
        type: _[3]
      };
    }
    function O(a) {
      return a ? a.join("") : "";
    }
    return (a, _) => (i(), s("div", re, [
      e.label ? (i(), s("label", ie, $(e.label), 1)) : S("", !0),
      H(v("input", {
        type: "text",
        id: "search",
        "onUpdate:modelValue": _[0] || (_[0] = (o) => U(t) ? t.value = o : t = o),
        onInput: j(u, ["stop"]),
        placeholder: e.placeholder,
        class: G(e.styling),
        autocomplete: "off"
      }, null, 42, se), [
        [B, l(t)]
      ]),
      e.info && l(h).length == 0 ? (i(), s("p", ue, $(e.info), 1)) : (i(), s("div", de, [
        v("ul", ce, [
          (i(!0), s(K, null, W(l(h), (o) => (i(), s("li", {
            key: o.short_label,
            role: "option",
            tabindex: "-1",
            "aria-selected": "false",
            "aria-setsize": "3",
            "aria-posinset": "0",
            onClick: (M) => r(o)
          }, [
            v("p", {
              innerHTML: x(o.label)
            }, null, 8, fe),
            v("p", null, [
              v("small", {
                innerHTML: O(o.description)
              }, null, 8, ge)
            ]),
            v("small", null, $(o.ontology_prefix) + ":" + $(o.iri), 1)
          ], 8, pe))), 128))
        ])
      ])),
      l(t) != "" && l(h).length > 0 ? (i(), s("button", ve)) : S("", !0)
    ]));
  }
}), me = `[data-v-c1d76900]:root{--close-button: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'/%3E%3C/svg%3E");--loupe-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23929292' d='M16.041 15.856a.995.995 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.971 6.971 0 0 1-1.959 4.856zm5.666 4.437-3.675-3.675A8.967 8.967 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.967 8.967 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414z'/%3E%3C/svg%3E")}.auto-search-wrapper[data-v-c1d76900]{display:block;position:relative;width:100%}.auto-search-wrapper p[data-v-c1d76900]{margin:0;padding:0;font-size:1.1em}.auto-search-wrapper p .highlightText[data-v-c1d76900]{font-weight:700}.auto-search-wrapper input[data-v-c1d76900]{border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;font-size:16px;padding:12px 45px 12px 10px;width:100%}.auto-search-wrapper input[data-v-c1d76900]:focus{border:1px solid #858585;outline:none}.auto-search-wrapper input[data-v-c1d76900]::-ms-clear{display:none}.auto-search-wrapper ul[data-v-c1d76900]{list-style:none;margin:0;overflow:auto;padding:0}.auto-search-wrapper ul li[data-v-c1d76900]{cursor:pointer;margin:0;overflow:hidden;padding:10px;position:relative;border:1px dotted #f1f1f2}.auto-search-wrapper ul li[data-v-c1d76900]:hover{background-color:#f1f1f2}.auto-search-wrapper ul li[data-v-c1d76900]:not(:last-child){border-top:none}.auto-search-wrapper ul li[disabled][data-v-c1d76900]{background:#ececec;opacity:.5;pointer-events:none}.auto-search-wrapper .auto-expanded[data-v-c1d76900]{border:1px solid #858585;outline:none}.auto-search-wrapper.loupe[data-v-c1d76900]:before{filter:invert(60%)}.auto-is-loading[data-v-c1d76900]:after{animation:auto-spinner-c1d76900 .6s linear infinite;border-color:#d9d9d9 grey grey #d9d9d9;border-radius:50%;border-style:solid;border-width:2px;bottom:0;box-sizing:border-box;content:"";height:20px;margin:auto;position:absolute;right:10px;top:0;width:20px}.auto-is-loading .auto-clear[data-v-c1d76900]{display:none}@keyframes auto-spinner-c1d76900{to{transform:rotate(1turn)}}li.loupe[data-v-c1d76900]:before{bottom:auto;top:15px}.loupe input[data-v-c1d76900]{padding:12px 45px 12px 35px}.loupe[data-v-c1d76900]:before{background-image:var(--loupe-icon);bottom:0;content:"";height:17px;left:10px;margin:auto;position:absolute;top:0;width:17px}.auto-selected[data-v-c1d76900]:before{opacity:1}.auto-clear[data-v-c1d76900]{align-items:center;background-color:transparent;border:none;bottom:0;cursor:pointer;display:flex;height:auto;justify-content:center;margin:auto;position:absolute;right:0;top:0;width:40px}.auto-clear[data-v-c1d76900]:before{content:var(--close-button);height:24px;line-height:100%;width:24px}.auto-clear span[data-v-c1d76900]{display:none}.auto-results-wrapper[data-v-c1d76900]{background-color:#fff;border:1px solid #858585;border-top:none;box-sizing:border-box;display:none;overflow:hidden}.auto-results-wrapper ul>.loupe[data-v-c1d76900]{padding-left:40px}.auto-results-wrapper.auto-is-active[data-v-c1d76900]{display:block;margin-top:-1px;position:absolute;width:100%;z-index:99999}.auto-selected[data-v-c1d76900]{background-color:#e6e6e6}.auto-selected+li[data-v-c1d76900]:before{border-top:none}.auto-error[data-v-c1d76900]{border:1px solid #ff3838}.auto-error[data-v-c1d76900]::placeholder{color:#f66;opacity:1}.hidden[data-v-c1d76900]{display:none}
`, xe = /* @__PURE__ */ R(he, [["styles", [me]], ["__scopeId", "data-v-c1d76900"]]), ye = (e) => (Y("data-v-72d4acfd"), e = e(), Z(), e), _e = ["id"], be = {
  key: 0,
  class: "o_annotate_label"
}, we = { key: 1 }, ke = { key: 2 }, $e = {
  key: 0,
  class: "contextmenu_item"
}, Te = { key: 1 }, Se = ["onClickCapture"], Ce = ["innerHTML"], Oe = {
  key: 0,
  style: { float: "right" }
}, qe = /* @__PURE__ */ ye(() => /* @__PURE__ */ v("i", null, "...loading", -1)), Me = [
  qe
], Ie = { key: 0 }, ze = /* @__PURE__ */ L({
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
  setup(e, { emit: p }) {
    const f = e, r = (Math.random() + 1).toString(36).substring(7), t = k(null), h = k(!1);
    let m = k(""), n = k({ x: -1e3, y: 0, start: -1, end: -1 }), u = k(""), x = k(!1), c = k([]), O = Q([]);
    const a = /* @__PURE__ */ new WeakMap(), _ = C(() => "left:" + n.value.x + "px; top:" + n.value.y + "px"), o = C(() => {
      let d = h ? t.value?.value : m.value;
      return d ? f.format && f.format == "json" ? {
        text: d,
        ontology: O
      } : d + `
$$$$
` + O.map(
        (g) => g.ontology.type[0] + "	" + g.ontology.ontology_prefix + " " + g.context.start + " " + g.context.end + "	" + g.ontology.label + "	" + g.ontology.iri
      ).join(`
`) : null;
    });
    N(() => {
      var d = document.getElementsByTagName("ontology-annotate")[0];
      d?.shadowRoot && (h.value = !0);
    });
    function M(d) {
      m.value = d.target.innerText, p("change", o.value);
    }
    function z(d) {
      let g = {
        ontology: {},
        context: {}
      };
      if (!h)
        g = { ontology: d, context: n.value };
      else if (t) {
        let b = {
          x: 0,
          y: 0,
          start: t.value?.selectionStart,
          end: t.value?.selectionEnd
        };
        g = { ontology: d, context: b };
      }
      O.push(g), c.value = [], u.value = "", p("change", o.value);
    }
    function I(d) {
      if (u.value = "", window.getSelection) {
        var g = window.getSelection();
        u.value = g?.toString(), u.value && u.value != "" ? (c.value = [], E(g), V(d)) : (n.value = { x: -1e3, y: 0, start: -1, end: -1 }, c.value = []);
      }
    }
    function E(d, g = !0) {
      if (!d?.rangeCount)
        return null;
      let b = d.getRangeAt(0).cloneRange();
      if (!b.getClientRects)
        return null;
      b.collapse(g);
      let T = b.getClientRects();
      if (T.length <= 0)
        n.value.x = 0, n.value.y = 0;
      else {
        let y = T[0];
        n.value.start = d.anchorOffset, n.value.end = d.focusOffset, n.value.x = y.x, n.value.y = y.y + T[0]?.height;
      }
    }
    async function V(d) {
      if (u.value === "")
        return c.value = [], [];
      let g = u.value.indexOf(":"), b = "", T = null;
      g < 0 ? (b = f.ontologies, T = u.value) : (T = u.value.split(":")[1], b = u.value.split(":")[0]);
      const y = d.currentTarget, w = a.get(y);
      w && w.abort();
      const q = new AbortController();
      a.set(y, q);
      const D = "https://service.tib.eu/ts4tib/api/select?q=", P = encodeURI(
        "&ontolog-y=" + b + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      x.value = !0, (await fetch(`${D}${T}${P}`, { signal: q.signal })).json().then((F) => {
        a.delete(y), c.value = F.response.docs, x.value = !1;
      });
    }
    return (d, g) => (i(), s("div", {
      id: "o_annotate_wrapper_" + l(r),
      class: "o_annotate_wrapper"
    }, [
      e.label ? (i(), s("label", be, $(e.label), 1)) : S("", !0),
      h.value ? (i(), s("div", ke, [
        v("textarea", {
          ref_key: "o_annotate_textarea",
          ref: t,
          onMouseup: I,
          onKeyup: I,
          onInput: M,
          class: "o_annotate_textarea"
        }, $(l(m)), 545)
      ])) : (i(), s("div", we, [
        v("div", {
          onMouseup: I,
          onKeyup: I,
          onInput: M,
          class: "o_annotate_textarea",
          ref: "o_annotate_div",
          contenteditable: "true"
        }, $(l(m)), 545)
      ])),
      l(u) != "" ? (i(), s("div", {
        key: 3,
        class: "contextmenu",
        style: X(l(_))
      }, [
        l(c).length == 0 && !l(x) ? (i(), s("div", $e, "No matches found")) : (i(), s("div", Te, [
          (i(!0), s(K, null, W(l(c), (b) => (i(), s("div", {
            class: "contextmenu_item",
            key: b.short_label,
            role: "option",
            tabindex: "_1",
            aria_selected: "false",
            aria_setsize: "3",
            aria_posinset: "0",
            onClickCapture: j((T) => z(b), ["stop", "prevent"])
          }, [
            v("p", {
              innerHTML: b.label
            }, null, 8, Ce),
            v("small", null, $(b.ontology_prefix) + ":" + $(b.short_form), 1)
          ], 40, Se))), 128))
        ]))
      ], 4)) : S("", !0),
      v("div", null, [
        l(x) ? (i(), s("div", Oe, Me)) : S("", !0),
        v("div", null, [
          e.info ? (i(), s("span", Ie, $(e.info), 1)) : S("", !0)
        ])
      ])
    ], 8, _e));
  }
}), Ee = `.o_annotate_textarea[data-v-72d4acfd]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border_box;padding:12px 10px;resize:none}#mainInput[data-v-72d4acfd]{background:transparent;color:#000;opacity:1}.contextmenu[data-v-72d4acfd]{position:absolute;top:0;right:0;background:#ffffff;color:#000;border:1px solid #f1f1f2;width:15rem;max-width:calc(100vw _ 2rem);max-height:300px;overflow-y:scroll;overflow-x:hidden;z-index:100;box-shadow:0 .5rem 1.5rem #0003;border-radius:.2rem}.contextmenu .contextmenu_item[data-v-72d4acfd]{border-bottom:1px solid #c3c3c3;padding:8px}.contextmenu .contextmenu_item[data-v-72d4acfd]:hover{cursor:pointer;background-color:#f1f1f2}.contextmenu .contextmenu_item p[data-v-72d4acfd]{margin:0;padding:0}.contextmenu .contextmenu_item .iri[data-v-72d4acfd]{margin:0;width:15rem;white-space:nowrap;text-overflow:ellipsis;word-wrap:break_word;padding:0}
`, Le = /* @__PURE__ */ R(ze, [["styles", [Ee]], ["__scopeId", "data-v-72d4acfd"]]), Ae = { key: 0 }, Ve = ["onKeyup", "onChange"], je = { key: 1 }, Re = { key: 2 }, De = { key: 3 }, He = /* @__PURE__ */ L({
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
  setup(e, { emit: p }) {
    const f = e;
    let r = k(""), t = k(""), h = -1, m = 100, n = 0, u = k([]), x = "", c = "", O = !1, a = k([]), _ = k([]), o = k(null);
    const M = C(() => o.value ? o.value ? o.value.label + "	" + o.value.ontology_prefix + "	" + o.value.iri + "	" + o.value.type : "" : null), z = C(() => r.value ? f.format && f.format == "json" ? {
      text: r.value,
      ontology: a.value
    } : r.value + `
$$$$
` + a.value.join(`
`) : null);
    async function I(y) {
      if (r.value == "") {
        t.value = "";
        return;
      }
      if (h > -1 && clearTimeout(h), y.key == "ArrowDown") {
        n == 9 && V(), n += 1, T(), y.preventDefault();
        return;
      } else if (y.key == "ArrowUp") {
        n == 0 && V(), n -= 1, T(), y.preventDefault();
        return;
      } else if (y.key == "ArrowRight")
        y.preventDefault(), g();
      else if (r.value) {
        let w = r.value.split(" ");
        w.length > 1 ? (x = w.slice(-1)[0], c = w.slice(-2).join(" ")) : (x = w[0], c = x), x == "" && (O = !1, o.value = null, t.value = r.value), O && (x = c), d();
      }
    }
    function E() {
      p("change", z.value);
    }
    function V() {
      O = !0, x = c, n = 0, d();
    }
    function d() {
      h = setTimeout(function() {
        b();
      }, m);
    }
    function g() {
      r.value = t.value, a.value.push(M.value), _.value.push(o.value);
    }
    async function b() {
      const y = "https://service.tib.eu/ts4tib/api/select?q=", w = encodeURI("&obsoletes=false&local=false&rows=10");
      (await fetch(`${y}${x}${w}`)).json().then((D) => {
        u.value = D.response.docs, u.value.length > 0 && (n = 0, T());
      });
    }
    function T() {
      let y = "";
      o.value = u.value[n], y = o.value.label;
      let w = y.toLowerCase().replace(x, "");
      w != null && (t.value = r.value + w);
    }
    return (y, w) => (i(), s("div", null, [
      e.label ? (i(), s("label", Ae, $(e.label), 1)) : S("", !0),
      v("div", null, [
        H(v("textarea", {
          "onUpdate:modelValue": w[0] || (w[0] = (q) => U(t) ? t.value = q : t = q),
          id: "autocomplete",
          type: "text",
          class: "o_annotate_textarea",
          line: "10"
        }, null, 512), [
          [B, l(t)]
        ]),
        H(v("textarea", {
          id: "mainInput",
          onKeyup: j(I, ["stop"]),
          onChange: j(E, ["stop"]),
          "onUpdate:modelValue": w[1] || (w[1] = (q) => U(r) ? r.value = q : r = q),
          type: "text",
          class: "o_annotate_textarea"
        }, null, 40, Ve), [
          [B, l(r)]
        ])
      ]),
      e.info && l(u).length == 0 ? (i(), s("p", je, $(e.info), 1)) : S("", !0),
      l(o) ? (i(), s("span", Re, [
        v("code", null, [
          v("pre", null, $(l(M)), 1)
        ])
      ])) : S("", !0),
      l(a) && l(a).length > 0 ? (i(), s("span", De, [
        v("code", null, [
          v("pre", null, $(l(z)), 1)
        ])
      ])) : S("", !0)
    ]));
  }
}), Ue = `.o_annotate_textarea[data-v-030af0eb]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;padding:12px 10px;resize:none}#mainInput[data-v-030af0eb]{background:transparent;color:#000;opacity:100}#autocomplete[data-v-030af0eb]{position:absolute;box-sizing:border-box;cursor:text;pointer-events:none;color:#000;opacity:.6;background:transparent}
`, Be = /* @__PURE__ */ R(He, [["styles", [Ue]], ["__scopeId", "data-v-030af0eb"]]), Ne = A(te), Ke = A(le), We = A(xe), Pe = A(Le), Fe = A(Be);
if (typeof window < "u") {
  let e = window.customElements;
  e.define("ontology-term-annotation", Ne), e.define("ontology-text-annotation", Ke), e.define("ontology-autocomplete", We), e.define("ontology-annotate", Pe), e.define("ontology-compose", Fe);
}
export {
  Pe as OntologyAnnotate,
  We as OntologyAutoComplete,
  Fe as OntologyCompose,
  Ne as OntologyTermAnnotation,
  Ke as OntologyTextAnnotation
};
//# sourceMappingURL=index.js.map
