import { defineComponent as L, computed as C, openBlock as i, createElementBlock as s, unref as l, toDisplayString as $, createCommentVNode as S, ref as k, watch as J, onMounted as N, withDirectives as H, createElementVNode as h, isRef as U, withModifiers as R, normalizeClass as G, vModelText as B, Fragment as K, renderList as W, reactive as Q, normalizeStyle as X, pushScopeId as Y, popScopeId as Z, defineCustomElement as A } from "vue";
const ee = ["href"], te = /* @__PURE__ */ L({
  __name: "ontology-term-annotation.ce",
  props: {
    annotation: null
  },
  setup(t) {
    const p = t, f = C(() => p.annotation ? p.annotation.split("	")[0] : ""), r = C(() => p.annotation ? p.annotation.split("	")[2] : ""), e = C(() => p.annotation ? p.annotation.split("	")[1] : "");
    return (x, v) => t.annotation && t.annotation != "" ? (i(), s("a", {
      key: 0,
      href: l(r),
      target: "_blank"
    }, $(l(e)) + ": " + $(l(f)), 9, ee)) : S("", !0);
  }
}), oe = ["innerHTML"], ne = /* @__PURE__ */ L({
  __name: "ontology-text-annotation.ce",
  props: {
    annotation: null
  },
  setup(t) {
    const p = t, f = C(() => p.annotation ? p.annotation.split("$$$$")[0] : ""), r = C(() => {
      let e = `${f.value}`, x = p.annotation ? p.annotation.split("$$$$")[1].split(/\r?\n/).filter((n) => n) : [], v = [];
      return x.forEach((n) => {
        let u = n.split("	"), y = u[1].split(" "), d = {};
        d.value = e.substring(parseInt(y[1]), parseInt(y[2])), d.class = u[0], d.ontology = y[0], d.ontology_term = u[2], d.iri = u[3], v.push(d);
      }), v.forEach((n) => {
        e = e.replace(
          n.value,
          '<span class="o_term"><a target="_blank" href=' + n.iri + ">" + n.value + "</a></span>"
        );
      }), e;
    });
    return (e, x) => (i(), s("div", { innerHTML: l(r) }, null, 8, oe));
  }
}), ae = `.o_term[data-v-922a42fb]{background-color:#cdcdcd;border-radius:4px;padding:1px 3px}
`, V = (t, p) => {
  const f = t.__vccOpts || t;
  for (const [r, e] of p)
    f[r] = e;
  return f;
}, le = /* @__PURE__ */ V(ne, [["styles", [ae]], ["__scopeId", "data-v-922a42fb"]]), re = { class: "auto-search-wrapper" }, ie = { key: 0 }, se = ["onInput", "placeholder"], ue = { key: 1 }, ce = {
  key: 2,
  class: "auto-results-wrapper auto-is-active"
}, de = {
  tabindex: "0",
  role: "listbox"
}, pe = ["onClick"], fe = ["innerHTML"], ve = ["innerHTML"], ge = {
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
    value: {
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
  setup(t, { emit: p }) {
    const f = t, r = (a) => {
      a == "" ? (v.value = null, e.value = "") : (v.value = a, e.value = a.label, p("change", n.value), x.value = []);
    };
    let e = k(""), x = k([]), v = k(null);
    const n = C(() => v.value ? f.format && f.format == "json" ? v.value : v.value ? v.value.label + "	" + v.value.ontology_prefix + "	" + v.value.iri + "	" + v.value.type : "" : null);
    J(
      () => f.value,
      (a, _) => {
        r(d(a));
      }
    ), N(() => {
      f.value != "" && r(d(f.value));
    });
    async function u() {
      if (e.value === "")
        return x.value = [], [];
      let a = e.value.indexOf(":"), _ = "", o = null;
      a < 0 ? (_ = f.ontologies, o = e.value) : (o = e.value.split(":")[1], _ = e.value.split(":")[0]);
      const M = "https://service.tib.eu/ts4tib/api/select?q=", z = encodeURI(
        "&ontology=" + _ + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      (await fetch(`${M}${o}${z}`)).json().then((E) => {
        x.value = E.response.docs;
      });
    }
    function y(a) {
      return e.value ? a.replace(new RegExp(e.value, "gi"), (_) => '<span class="highlightText">' + _ + "</span>") : a;
    }
    function d(a) {
      if (!a || a == "")
        return "";
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
      t.label ? (i(), s("label", ie, $(t.label), 1)) : S("", !0),
      H(h("input", {
        type: "text",
        id: "search",
        "onUpdate:modelValue": _[0] || (_[0] = (o) => U(e) ? e.value = o : e = o),
        onInput: R(u, ["stop"]),
        placeholder: t.placeholder,
        class: G(t.styling),
        autocomplete: "off"
      }, null, 42, se), [
        [B, l(e)]
      ]),
      t.info && l(x).length == 0 ? (i(), s("p", ue, $(t.info), 1)) : (i(), s("div", ce, [
        h("ul", de, [
          (i(!0), s(K, null, W(l(x), (o) => (i(), s("li", {
            key: o.short_label,
            role: "option",
            tabindex: "-1",
            "aria-selected": "false",
            "aria-setsize": "3",
            "aria-posinset": "0",
            onClick: (M) => r(o)
          }, [
            h("p", {
              innerHTML: y(o.label)
            }, null, 8, fe),
            h("p", null, [
              h("small", {
                innerHTML: O(o.description)
              }, null, 8, ve)
            ]),
            h("small", null, $(o.ontology_prefix) + ":" + $(o.iri), 1)
          ], 8, pe))), 128))
        ])
      ])),
      l(e) != "" && l(x).length > 0 ? (i(), s("button", ge)) : S("", !0)
    ]));
  }
}), xe = `[data-v-6c6ee054]:root{--close-button: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'/%3E%3C/svg%3E");--loupe-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23929292' d='M16.041 15.856a.995.995 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.971 6.971 0 0 1-1.959 4.856zm5.666 4.437-3.675-3.675A8.967 8.967 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.967 8.967 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414z'/%3E%3C/svg%3E")}.auto-search-wrapper[data-v-6c6ee054]{display:block;position:relative;width:100%}.auto-search-wrapper p[data-v-6c6ee054]{margin:0;padding:0;font-size:1.1em}.auto-search-wrapper p .highlightText[data-v-6c6ee054]{font-weight:700}.auto-search-wrapper input[data-v-6c6ee054]{border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;font-size:16px;padding:12px 45px 12px 10px;width:100%}.auto-search-wrapper input[data-v-6c6ee054]:focus{border:1px solid #858585;outline:none}.auto-search-wrapper input[data-v-6c6ee054]::-ms-clear{display:none}.auto-search-wrapper ul[data-v-6c6ee054]{list-style:none;margin:0;overflow:auto;padding:0}.auto-search-wrapper ul li[data-v-6c6ee054]{cursor:pointer;margin:0;overflow:hidden;padding:10px;position:relative;border:1px dotted #f1f1f2}.auto-search-wrapper ul li[data-v-6c6ee054]:hover{background-color:#f1f1f2}.auto-search-wrapper ul li[data-v-6c6ee054]:not(:last-child){border-top:none}.auto-search-wrapper ul li[disabled][data-v-6c6ee054]{background:#ececec;opacity:.5;pointer-events:none}.auto-search-wrapper .auto-expanded[data-v-6c6ee054]{border:1px solid #858585;outline:none}.auto-search-wrapper.loupe[data-v-6c6ee054]:before{filter:invert(60%)}.auto-is-loading[data-v-6c6ee054]:after{animation:auto-spinner-6c6ee054 .6s linear infinite;border-color:#d9d9d9 grey grey #d9d9d9;border-radius:50%;border-style:solid;border-width:2px;bottom:0;box-sizing:border-box;content:"";height:20px;margin:auto;position:absolute;right:10px;top:0;width:20px}.auto-is-loading .auto-clear[data-v-6c6ee054]{display:none}@keyframes auto-spinner-6c6ee054{to{transform:rotate(1turn)}}li.loupe[data-v-6c6ee054]:before{bottom:auto;top:15px}.loupe input[data-v-6c6ee054]{padding:12px 45px 12px 35px}.loupe[data-v-6c6ee054]:before{background-image:var(--loupe-icon);bottom:0;content:"";height:17px;left:10px;margin:auto;position:absolute;top:0;width:17px}.auto-selected[data-v-6c6ee054]:before{opacity:1}.auto-clear[data-v-6c6ee054]{align-items:center;background-color:transparent;border:none;bottom:0;cursor:pointer;display:flex;height:auto;justify-content:center;margin:auto;position:absolute;right:0;top:0;width:40px}.auto-clear[data-v-6c6ee054]:before{content:var(--close-button);height:24px;line-height:100%;width:24px}.auto-clear span[data-v-6c6ee054]{display:none}.auto-results-wrapper[data-v-6c6ee054]{background-color:#fff;border:1px solid #858585;border-top:none;box-sizing:border-box;display:none;overflow:hidden}.auto-results-wrapper ul>.loupe[data-v-6c6ee054]{padding-left:40px}.auto-results-wrapper.auto-is-active[data-v-6c6ee054]{display:block;margin-top:-1px;position:absolute;width:100%;z-index:99999}.auto-selected[data-v-6c6ee054]{background-color:#e6e6e6}.auto-selected+li[data-v-6c6ee054]:before{border-top:none}.auto-error[data-v-6c6ee054]{border:1px solid #ff3838}.auto-error[data-v-6c6ee054]::placeholder{color:#f66;opacity:1}.hidden[data-v-6c6ee054]{display:none}
`, ye = /* @__PURE__ */ V(he, [["styles", [xe]], ["__scopeId", "data-v-6c6ee054"]]), me = (t) => (Y("data-v-72d4acfd"), t = t(), Z(), t), _e = ["id"], be = {
  key: 0,
  class: "o_annotate_label"
}, we = { key: 1 }, ke = { key: 2 }, $e = {
  key: 0,
  class: "contextmenu_item"
}, Te = { key: 1 }, Se = ["onClickCapture"], Ce = ["innerHTML"], Oe = {
  key: 0,
  style: { float: "right" }
}, qe = /* @__PURE__ */ me(() => /* @__PURE__ */ h("i", null, "...loading", -1)), Me = [
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
  setup(t, { emit: p }) {
    const f = t, r = (Math.random() + 1).toString(36).substring(7), e = k(null), x = k(!1);
    let v = k(""), n = k({ x: -1e3, y: 0, start: -1, end: -1 }), u = k(""), y = k(!1), d = k([]), O = Q([]);
    const a = /* @__PURE__ */ new WeakMap(), _ = C(() => "left:" + n.value.x + "px; top:" + n.value.y + "px"), o = C(() => {
      let c = x ? e.value?.value : v.value;
      return c ? f.format && f.format == "json" ? {
        text: c,
        ontology: O
      } : c + `
$$$$
` + O.map(
        (g) => g.ontology.type[0] + "	" + g.ontology.ontology_prefix + " " + g.context.start + " " + g.context.end + "	" + g.ontology.label + "	" + g.ontology.iri
      ).join(`
`) : null;
    });
    N(() => {
      var c = document.getElementsByTagName("ontology-annotate")[0];
      c?.shadowRoot && (x.value = !0);
    });
    function M(c) {
      v.value = c.target.innerText, p("change", o.value);
    }
    function z(c) {
      let g = {
        ontology: {},
        context: {}
      };
      if (!x)
        g = { ontology: c, context: n.value };
      else if (e) {
        let b = {
          x: 0,
          y: 0,
          start: e.value?.selectionStart,
          end: e.value?.selectionEnd
        };
        g = { ontology: c, context: b };
      }
      O.push(g), d.value = [], u.value = "", p("change", o.value);
    }
    function I(c) {
      if (u.value = "", window.getSelection) {
        var g = window.getSelection();
        u.value = g?.toString(), u.value && u.value != "" ? (d.value = [], E(g), j(c)) : (n.value = { x: -1e3, y: 0, start: -1, end: -1 }, d.value = []);
      }
    }
    function E(c, g = !0) {
      if (!c?.rangeCount)
        return null;
      let b = c.getRangeAt(0).cloneRange();
      if (!b.getClientRects)
        return null;
      b.collapse(g);
      let T = b.getClientRects();
      if (T.length <= 0)
        n.value.x = 0, n.value.y = 0;
      else {
        let m = T[0];
        n.value.start = c.anchorOffset, n.value.end = c.focusOffset, n.value.x = m.x, n.value.y = m.y + T[0]?.height;
      }
    }
    async function j(c) {
      if (u.value === "")
        return d.value = [], [];
      let g = u.value.indexOf(":"), b = "", T = null;
      g < 0 ? (b = f.ontologies, T = u.value) : (T = u.value.split(":")[1], b = u.value.split(":")[0]);
      const m = c.currentTarget, w = a.get(m);
      w && w.abort();
      const q = new AbortController();
      a.set(m, q);
      const D = "https://service.tib.eu/ts4tib/api/select?q=", P = encodeURI(
        "&ontolog-y=" + b + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      y.value = !0, (await fetch(`${D}${T}${P}`, { signal: q.signal })).json().then((F) => {
        a.delete(m), d.value = F.response.docs, y.value = !1;
      });
    }
    return (c, g) => (i(), s("div", {
      id: "o_annotate_wrapper_" + l(r),
      class: "o_annotate_wrapper"
    }, [
      t.label ? (i(), s("label", be, $(t.label), 1)) : S("", !0),
      x.value ? (i(), s("div", ke, [
        h("textarea", {
          ref_key: "o_annotate_textarea",
          ref: e,
          onMouseup: I,
          onKeyup: I,
          onInput: M,
          class: "o_annotate_textarea"
        }, $(l(v)), 545)
      ])) : (i(), s("div", we, [
        h("div", {
          onMouseup: I,
          onKeyup: I,
          onInput: M,
          class: "o_annotate_textarea",
          ref: "o_annotate_div",
          contenteditable: "true"
        }, $(l(v)), 545)
      ])),
      l(u) != "" ? (i(), s("div", {
        key: 3,
        class: "contextmenu",
        style: X(l(_))
      }, [
        l(d).length == 0 && !l(y) ? (i(), s("div", $e, "No matches found")) : (i(), s("div", Te, [
          (i(!0), s(K, null, W(l(d), (b) => (i(), s("div", {
            class: "contextmenu_item",
            key: b.short_label,
            role: "option",
            tabindex: "_1",
            aria_selected: "false",
            aria_setsize: "3",
            aria_posinset: "0",
            onClickCapture: R((T) => z(b), ["stop", "prevent"])
          }, [
            h("p", {
              innerHTML: b.label
            }, null, 8, Ce),
            h("small", null, $(b.ontology_prefix) + ":" + $(b.short_form), 1)
          ], 40, Se))), 128))
        ]))
      ], 4)) : S("", !0),
      h("div", null, [
        l(y) ? (i(), s("div", Oe, Me)) : S("", !0),
        h("div", null, [
          t.info ? (i(), s("span", Ie, $(t.info), 1)) : S("", !0)
        ])
      ])
    ], 8, _e));
  }
}), Ee = `.o_annotate_textarea[data-v-72d4acfd]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border_box;padding:12px 10px;resize:none}#mainInput[data-v-72d4acfd]{background:transparent;color:#000;opacity:1}.contextmenu[data-v-72d4acfd]{position:absolute;top:0;right:0;background:#ffffff;color:#000;border:1px solid #f1f1f2;width:15rem;max-width:calc(100vw _ 2rem);max-height:300px;overflow-y:scroll;overflow-x:hidden;z-index:100;box-shadow:0 .5rem 1.5rem #0003;border-radius:.2rem}.contextmenu .contextmenu_item[data-v-72d4acfd]{border-bottom:1px solid #c3c3c3;padding:8px}.contextmenu .contextmenu_item[data-v-72d4acfd]:hover{cursor:pointer;background-color:#f1f1f2}.contextmenu .contextmenu_item p[data-v-72d4acfd]{margin:0;padding:0}.contextmenu .contextmenu_item .iri[data-v-72d4acfd]{margin:0;width:15rem;white-space:nowrap;text-overflow:ellipsis;word-wrap:break_word;padding:0}
`, Le = /* @__PURE__ */ V(ze, [["styles", [Ee]], ["__scopeId", "data-v-72d4acfd"]]), Ae = { key: 0 }, je = ["onKeyup", "onChange"], Re = { key: 1 }, Ve = { key: 2 }, De = { key: 3 }, He = /* @__PURE__ */ L({
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
  setup(t, { emit: p }) {
    const f = t;
    let r = k(""), e = k(""), x = -1, v = 100, n = 0, u = k([]), y = "", d = "", O = !1, a = k([]), _ = k([]), o = k(null);
    const M = C(() => o.value ? o.value ? o.value.label + "	" + o.value.ontology_prefix + "	" + o.value.iri + "	" + o.value.type : "" : null), z = C(() => r.value ? f.format && f.format == "json" ? {
      text: r.value,
      ontology: a.value
    } : r.value + `
$$$$
` + a.value.join(`
`) : null);
    async function I(m) {
      if (r.value == "") {
        e.value = "";
        return;
      }
      if (x > -1 && clearTimeout(x), m.key == "ArrowDown") {
        n == 9 && j(), n += 1, T(), m.preventDefault();
        return;
      } else if (m.key == "ArrowUp") {
        n == 0 && j(), n -= 1, T(), m.preventDefault();
        return;
      } else if (m.key == "ArrowRight")
        m.preventDefault(), g();
      else if (r.value) {
        let w = r.value.split(" ");
        w.length > 1 ? (y = w.slice(-1)[0], d = w.slice(-2).join(" ")) : (y = w[0], d = y), y == "" && (O = !1, o.value = null, e.value = r.value), O && (y = d), c();
      }
    }
    function E() {
      p("change", z.value);
    }
    function j() {
      O = !0, y = d, n = 0, c();
    }
    function c() {
      x = setTimeout(function() {
        b();
      }, v);
    }
    function g() {
      r.value = e.value, a.value.push(M.value), _.value.push(o.value);
    }
    async function b() {
      const m = "https://service.tib.eu/ts4tib/api/select?q=", w = encodeURI("&obsoletes=false&local=false&rows=10");
      (await fetch(`${m}${y}${w}`)).json().then((D) => {
        u.value = D.response.docs, u.value.length > 0 && (n = 0, T());
      });
    }
    function T() {
      let m = "";
      o.value = u.value[n], m = o.value.label;
      let w = m.toLowerCase().replace(y, "");
      w != null && (e.value = r.value + w);
    }
    return (m, w) => (i(), s("div", null, [
      t.label ? (i(), s("label", Ae, $(t.label), 1)) : S("", !0),
      h("div", null, [
        H(h("textarea", {
          "onUpdate:modelValue": w[0] || (w[0] = (q) => U(e) ? e.value = q : e = q),
          id: "autocomplete",
          type: "text",
          class: "o_annotate_textarea",
          line: "10"
        }, null, 512), [
          [B, l(e)]
        ]),
        H(h("textarea", {
          id: "mainInput",
          onKeyup: R(I, ["stop"]),
          onChange: R(E, ["stop"]),
          "onUpdate:modelValue": w[1] || (w[1] = (q) => U(r) ? r.value = q : r = q),
          type: "text",
          class: "o_annotate_textarea"
        }, null, 40, je), [
          [B, l(r)]
        ])
      ]),
      t.info && l(u).length == 0 ? (i(), s("p", Re, $(t.info), 1)) : S("", !0),
      l(o) ? (i(), s("span", Ve, [
        h("code", null, [
          h("pre", null, $(l(M)), 1)
        ])
      ])) : S("", !0),
      l(a) && l(a).length > 0 ? (i(), s("span", De, [
        h("code", null, [
          h("pre", null, $(l(z)), 1)
        ])
      ])) : S("", !0)
    ]));
  }
}), Ue = `.o_annotate_textarea[data-v-030af0eb]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;padding:12px 10px;resize:none}#mainInput[data-v-030af0eb]{background:transparent;color:#000;opacity:100}#autocomplete[data-v-030af0eb]{position:absolute;box-sizing:border-box;cursor:text;pointer-events:none;color:#000;opacity:.6;background:transparent}
`, Be = /* @__PURE__ */ V(He, [["styles", [Ue]], ["__scopeId", "data-v-030af0eb"]]), Ne = A(te), Ke = A(le), We = A(ye), Pe = A(Le), Fe = A(Be);
if (typeof window < "u") {
  let t = window.customElements;
  t.define("ontology-term-annotation", Ne), t.define("ontology-text-annotation", Ke), t.define("ontology-autocomplete", We), t.define("ontology-annotate", Pe), t.define("ontology-compose", Fe);
}
export {
  Pe as OntologyAnnotate,
  We as OntologyAutoComplete,
  Fe as OntologyCompose,
  Ne as OntologyTermAnnotation,
  Ke as OntologyTextAnnotation
};
//# sourceMappingURL=index.js.map
