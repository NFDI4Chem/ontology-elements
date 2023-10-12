import { defineComponent as M, computed as z, openBlock as r, createElementBlock as i, unref as d, toDisplayString as m, createCommentVNode as T, ref as y, watch as P, onMounted as F, withDirectives as D, createElementVNode as f, isRef as V, withModifiers as U, normalizeClass as W, vModelText as H, Fragment as B, renderList as N, reactive as ee, normalizeStyle as te, pushScopeId as J, popScopeId as G, createVNode as Q, defineCustomElement as A } from "vue";
const oe = ["href"], ae = /* @__PURE__ */ M({
  __name: "ontology-term-annotation.ce",
  props: {
    annotation: null
  },
  setup(e) {
    const g = e, v = z(() => g.annotation ? g.annotation.split("	")[0] : ""), a = z(() => g.annotation ? g.annotation.split("	")[2] : ""), o = z(() => g.annotation ? g.annotation.split("	")[1] : "");
    return (u, n) => e.annotation && e.annotation != "" ? (r(), i("a", {
      key: 0,
      href: d(a),
      target: "_blank"
    }, m(d(o)) + ": " + m(d(v)), 9, oe)) : T("", !0);
  }
}), ne = ["innerHTML"], le = /* @__PURE__ */ M({
  __name: "ontology-text-annotation.ce",
  props: {
    annotation: null
  },
  setup(e) {
    const g = e, v = z(() => g.annotation ? g.annotation.split("$$$$")[0] : ""), a = z(() => {
      let o = `${v.value}`, u = g.annotation ? g.annotation.split("$$$$")[1].split(/\r?\n/).filter((l) => l) : [], n = [];
      return u.forEach((l) => {
        let c = l.split("	"), x = c[1].split(" "), h = {};
        h.value = o.substring(parseInt(x[1]), parseInt(x[2])), h.class = c[0], h.ontology = x[0], h.ontology_term = c[2], h.iri = c[3], n.push(h);
      }), n.forEach((l) => {
        o = o.replace(
          l.value,
          '<span class="o_term"><a target="_blank" href=' + l.iri + ">" + l.value + "</a></span>"
        );
      }), o;
    });
    return (o, u) => (r(), i("div", { innerHTML: d(a) }, null, 8, ne));
  }
}), re = `.o_term[data-v-922a42fb]{background-color:#cdcdcd;border-radius:4px;padding:1px 3px}
`, R = (e, g) => {
  const v = e.__vccOpts || e;
  for (const [a, o] of g)
    v[a] = o;
  return v;
}, ie = /* @__PURE__ */ R(le, [["styles", [re]], ["__scopeId", "data-v-922a42fb"]]), se = { class: "auto-search-wrapper" }, de = { key: 0 }, ue = ["onInput", "placeholder"], ce = { key: 1 }, pe = {
  key: 2,
  class: "auto-results-wrapper auto-is-active"
}, fe = {
  tabindex: "0",
  role: "listbox"
}, ve = ["onClick"], ge = ["innerHTML"], he = ["innerHTML"], be = {
  key: 3,
  type: "button",
  "aria-label": "clear the search query"
}, ye = /* @__PURE__ */ M({
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
  setup(e, { emit: g }) {
    const v = e, a = (p) => {
      p == "" ? (n.value = null, o.value = "") : (n.value = p, o.value = p.label, g("change", l.value), u.value = []);
    };
    let o = y(""), u = y([]), n = y(null);
    const l = z(() => n.value ? v.format && v.format == "json" ? n.value : n.value ? n.value.label + "	" + n.value.ontology_prefix + "	" + n.value.iri + "	" + n.value.type : "" : null);
    P(
      () => v.value,
      (p, s) => {
        a(h(p));
      }
    ), F(() => {
      v.value != "" && a(h(v.value));
    });
    async function c() {
      if (o.value === "")
        return u.value = [], [];
      let p = o.value.indexOf(":"), s = "", t = null;
      p < 0 ? (s = v.ontologies, t = o.value) : (t = o.value.split(":")[1], s = o.value.split(":")[0]);
      const _ = "https://service.tib.eu/ts4tib/api/select?q=", C = encodeURI(
        "&ontology=" + s + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      (await fetch(`${_}${t}${C}`)).json().then((L) => {
        u.value = L.response.docs;
      });
    }
    function x(p) {
      return o.value ? p.replace(new RegExp(o.value, "gi"), (s) => '<span class="highlightText">' + s + "</span>") : p;
    }
    function h(p) {
      if (!p || p == "")
        return "";
      const s = p.split("	");
      return {
        label: s[0],
        iri: s[2],
        ontology_prefix: s[1],
        type: s[3]
      };
    }
    function O(p) {
      return p ? p.join("") : "";
    }
    return (p, s) => (r(), i("div", se, [
      e.label ? (r(), i("label", de, m(e.label), 1)) : T("", !0),
      D(f("input", {
        type: "text",
        id: "search",
        "onUpdate:modelValue": s[0] || (s[0] = (t) => V(o) ? o.value = t : o = t),
        onInput: U(c, ["stop"]),
        placeholder: e.placeholder,
        class: W(e.styling),
        autocomplete: "off"
      }, null, 42, ue), [
        [H, d(o)]
      ]),
      e.info && d(u).length == 0 ? (r(), i("p", ce, m(e.info), 1)) : (r(), i("div", pe, [
        f("ul", fe, [
          (r(!0), i(B, null, N(d(u), (t) => (r(), i("li", {
            key: t.short_label,
            role: "option",
            tabindex: "-1",
            "aria-selected": "false",
            "aria-setsize": "3",
            "aria-posinset": "0",
            onClick: (_) => a(t)
          }, [
            f("p", {
              innerHTML: x(t.label)
            }, null, 8, ge),
            f("p", null, [
              f("small", {
                innerHTML: O(t.description)
              }, null, 8, he)
            ]),
            f("small", null, m(t.ontology_prefix) + ":" + m(t.iri), 1)
          ], 8, ve))), 128))
        ])
      ])),
      d(o) != "" && d(u).length > 0 ? (r(), i("button", be)) : T("", !0)
    ]));
  }
}), xe = `[data-v-7c727e76]:root{--close-button: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'/%3E%3C/svg%3E");--loupe-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23929292' d='M16.041 15.856a.995.995 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.971 6.971 0 0 1-1.959 4.856zm5.666 4.437-3.675-3.675A8.967 8.967 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.967 8.967 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414z'/%3E%3C/svg%3E")}.auto-search-wrapper[data-v-7c727e76]{display:block;position:relative;width:100%}.auto-search-wrapper p[data-v-7c727e76]{margin:0;padding:0;font-size:1.1em}.auto-search-wrapper p .highlightText[data-v-7c727e76]{font-weight:700}.auto-search-wrapper input[data-v-7c727e76]{border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;font-size:16px;padding:12px 45px 12px 10px;width:100%}.auto-search-wrapper input[data-v-7c727e76]:focus{border:1px solid #d7d7d7;outline:none}.auto-search-wrapper input[data-v-7c727e76]::-ms-clear{display:none}.auto-search-wrapper ul[data-v-7c727e76]{list-style:none;margin:0;overflow:auto;padding:0}.auto-search-wrapper ul li[data-v-7c727e76]{cursor:pointer;margin:0;overflow:hidden;padding:10px;position:relative;border:1px dotted #f1f1f2}.auto-search-wrapper ul li[data-v-7c727e76]:hover{background-color:#f1f1f2}.auto-search-wrapper ul li[data-v-7c727e76]:not(:last-child){border-top:none}.auto-search-wrapper ul li[disabled][data-v-7c727e76]{background:#ececec;opacity:.5;pointer-events:none}.auto-search-wrapper .auto-expanded[data-v-7c727e76]{border:1px solid #d7d7d7;outline:none}.auto-search-wrapper.loupe[data-v-7c727e76]:before{filter:invert(60%)}.auto-is-loading[data-v-7c727e76]:after{animation:auto-spinner-7c727e76 .6s linear infinite;border-color:#d9d9d9 grey grey #d9d9d9;border-radius:50%;border-style:solid;border-width:2px;bottom:0;box-sizing:border-box;content:"";height:20px;margin:auto;position:absolute;right:10px;top:0;width:20px}.auto-is-loading .auto-clear[data-v-7c727e76]{display:none}@keyframes auto-spinner-7c727e76{to{transform:rotate(1turn)}}li.loupe[data-v-7c727e76]:before{bottom:auto;top:15px}.loupe input[data-v-7c727e76]{padding:12px 45px 12px 35px}.loupe[data-v-7c727e76]:before{background-image:var(--loupe-icon);bottom:0;content:"";height:17px;left:10px;margin:auto;position:absolute;top:0;width:17px}.auto-selected[data-v-7c727e76]:before{opacity:1}.auto-clear[data-v-7c727e76]{align-items:center;background-color:transparent;border:none;bottom:0;cursor:pointer;display:flex;height:auto;justify-content:center;margin:auto;position:absolute;right:0;top:0;width:40px}.auto-clear[data-v-7c727e76]:before{content:var(--close-button);height:24px;line-height:100%;width:24px}.auto-clear span[data-v-7c727e76]{display:none}.auto-results-wrapper[data-v-7c727e76]{background-color:#fff;border:1px solid #d7d7d7;border-top:none;box-sizing:border-box;display:none;overflow:hidden}.auto-results-wrapper ul>.loupe[data-v-7c727e76]{padding-left:40px}.auto-results-wrapper.auto-is-active[data-v-7c727e76]{display:block;margin-top:-1px;position:absolute;width:100%;z-index:99999}.auto-selected[data-v-7c727e76]{background-color:#e6e6e6}.auto-selected+li[data-v-7c727e76]:before{border-top:none}.auto-error[data-v-7c727e76]{border:1px solid #ff3838}.auto-error[data-v-7c727e76]::placeholder{color:#f66;opacity:1}.hidden[data-v-7c727e76]{display:none}
`, me = /* @__PURE__ */ R(ye, [["styles", [xe]], ["__scopeId", "data-v-7c727e76"]]), _e = (e) => (J("data-v-72d4acfd"), e = e(), G(), e), we = ["id"], ke = {
  key: 0,
  class: "o_annotate_label"
}, $e = { key: 1 }, Se = { key: 2 }, Te = {
  key: 0,
  class: "contextmenu_item"
}, Ce = { key: 1 }, qe = ["onClickCapture"], Oe = ["innerHTML"], ze = {
  key: 0,
  style: { float: "right" }
}, Ie = /* @__PURE__ */ _e(() => /* @__PURE__ */ f("i", null, "...loading", -1)), Ee = [
  Ie
], Me = { key: 0 }, Le = /* @__PURE__ */ M({
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
  setup(e, { emit: g }) {
    const v = e, a = (Math.random() + 1).toString(36).substring(7), o = y(null), u = y(!1);
    let n = y(""), l = y({ x: -1e3, y: 0, start: -1, end: -1 }), c = y(""), x = y(!1), h = y([]), O = ee([]);
    const p = /* @__PURE__ */ new WeakMap(), s = z(() => "left:" + l.value.x + "px; top:" + l.value.y + "px"), t = z(() => {
      let b = u ? o.value?.value : n.value;
      return b ? v.format && v.format == "json" ? {
        text: b,
        ontology: O
      } : b + `
$$$$
` + O.map(
        (w) => w.ontology.type[0] + "	" + w.ontology.ontology_prefix + " " + w.context.start + " " + w.context.end + "	" + w.ontology.label + "	" + w.ontology.iri
      ).join(`
`) : null;
    });
    F(() => {
      var b = document.getElementsByTagName("ontology-annotate")[0];
      b?.shadowRoot && (u.value = !0);
    });
    function _(b) {
      n.value = b.target.innerText, g("change", t.value);
    }
    function C(b) {
      let w = {
        ontology: {},
        context: {}
      };
      if (!u)
        w = { ontology: b, context: l.value };
      else if (o) {
        let $ = {
          x: 0,
          y: 0,
          start: o.value?.selectionStart,
          end: o.value?.selectionEnd
        };
        w = { ontology: b, context: $ };
      }
      O.push(w), h.value = [], c.value = "", g("change", t.value);
    }
    function I(b) {
      if (c.value = "", window.getSelection) {
        var w = window.getSelection();
        c.value = w?.toString(), c.value && c.value != "" ? (h.value = [], L(w), j(b)) : (l.value = { x: -1e3, y: 0, start: -1, end: -1 }, h.value = []);
      }
    }
    function L(b, w = !0) {
      if (!b?.rangeCount)
        return null;
      let $ = b.getRangeAt(0).cloneRange();
      if (!$.getClientRects)
        return null;
      $.collapse(w);
      let q = $.getClientRects();
      if (q.length <= 0)
        l.value.x = 0, l.value.y = 0;
      else {
        let k = q[0];
        l.value.start = b.anchorOffset, l.value.end = b.focusOffset, l.value.x = k.x, l.value.y = k.y + q[0]?.height;
      }
    }
    async function j(b) {
      if (c.value === "")
        return h.value = [], [];
      let w = c.value.indexOf(":"), $ = "", q = null;
      w < 0 ? ($ = v.ontologies, q = c.value) : (q = c.value.split(":")[1], $ = c.value.split(":")[0]);
      const k = b.currentTarget, S = p.get(k);
      S && S.abort();
      const E = new AbortController();
      p.set(k, E);
      const K = "https://service.tib.eu/ts4tib/api/select?q=", Y = encodeURI(
        "&ontolog-y=" + $ + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      x.value = !0, (await fetch(`${K}${q}${Y}`, { signal: E.signal })).json().then((Z) => {
        p.delete(k), h.value = Z.response.docs, x.value = !1;
      });
    }
    return (b, w) => (r(), i("div", {
      id: "o_annotate_wrapper_" + d(a),
      class: "o_annotate_wrapper"
    }, [
      e.label ? (r(), i("label", ke, m(e.label), 1)) : T("", !0),
      u.value ? (r(), i("div", Se, [
        f("textarea", {
          ref_key: "o_annotate_textarea",
          ref: o,
          onMouseup: I,
          onKeyup: I,
          onInput: _,
          class: "o_annotate_textarea"
        }, m(d(n)), 545)
      ])) : (r(), i("div", $e, [
        f("div", {
          onMouseup: I,
          onKeyup: I,
          onInput: _,
          class: "o_annotate_textarea",
          ref: "o_annotate_div",
          contenteditable: "true"
        }, m(d(n)), 545)
      ])),
      d(c) != "" ? (r(), i("div", {
        key: 3,
        class: "contextmenu",
        style: te(d(s))
      }, [
        d(h).length == 0 && !d(x) ? (r(), i("div", Te, "No matches found")) : (r(), i("div", Ce, [
          (r(!0), i(B, null, N(d(h), ($) => (r(), i("div", {
            class: "contextmenu_item",
            key: $.short_label,
            role: "option",
            tabindex: "_1",
            aria_selected: "false",
            aria_setsize: "3",
            aria_posinset: "0",
            onClickCapture: U((q) => C($), ["stop", "prevent"])
          }, [
            f("p", {
              innerHTML: $.label
            }, null, 8, Oe),
            f("small", null, m($.ontology_prefix) + ":" + m($.short_form), 1)
          ], 40, qe))), 128))
        ]))
      ], 4)) : T("", !0),
      f("div", null, [
        d(x) ? (r(), i("div", ze, Ee)) : T("", !0),
        f("div", null, [
          e.info ? (r(), i("span", Me, m(e.info), 1)) : T("", !0)
        ])
      ])
    ], 8, we));
  }
}), je = `.o_annotate_textarea[data-v-72d4acfd]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border_box;padding:12px 10px;resize:none}#mainInput[data-v-72d4acfd]{background:transparent;color:#000;opacity:1}.contextmenu[data-v-72d4acfd]{position:absolute;top:0;right:0;background:#ffffff;color:#000;border:1px solid #f1f1f2;width:15rem;max-width:calc(100vw _ 2rem);max-height:300px;overflow-y:scroll;overflow-x:hidden;z-index:100;box-shadow:0 .5rem 1.5rem #0003;border-radius:.2rem}.contextmenu .contextmenu_item[data-v-72d4acfd]{border-bottom:1px solid #c3c3c3;padding:8px}.contextmenu .contextmenu_item[data-v-72d4acfd]:hover{cursor:pointer;background-color:#f1f1f2}.contextmenu .contextmenu_item p[data-v-72d4acfd]{margin:0;padding:0}.contextmenu .contextmenu_item .iri[data-v-72d4acfd]{margin:0;width:15rem;white-space:nowrap;text-overflow:ellipsis;word-wrap:break_word;padding:0}
`, Ae = /* @__PURE__ */ R(Le, [["styles", [je]], ["__scopeId", "data-v-72d4acfd"]]), Re = { key: 0 }, Ve = ["onKeyup", "onChange"], Ue = { key: 1 }, De = { key: 2 }, He = { key: 3 }, Be = /* @__PURE__ */ M({
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
  setup(e, { emit: g }) {
    const v = e;
    let a = y(""), o = y(""), u = -1, n = 100, l = 0, c = y([]), x = "", h = "", O = !1, p = y([]), s = y([]), t = y(null);
    const _ = z(() => t.value ? t.value ? t.value.label + "	" + t.value.ontology_prefix + "	" + t.value.iri + "	" + t.value.type : "" : null), C = z(() => a.value ? v.format && v.format == "json" ? {
      text: a.value,
      ontology: p.value
    } : a.value + `
$$$$
` + p.value.join(`
`) : null);
    async function I(k) {
      if (a.value == "") {
        o.value = "";
        return;
      }
      if (u > -1 && clearTimeout(u), k.key == "ArrowDown") {
        l == 9 && j(), l += 1, q(), k.preventDefault();
        return;
      } else if (k.key == "ArrowUp") {
        l == 0 && j(), l -= 1, q(), k.preventDefault();
        return;
      } else if (k.key == "ArrowRight")
        k.preventDefault(), w();
      else if (a.value) {
        let S = a.value.split(" ");
        S.length > 1 ? (x = S.slice(-1)[0], h = S.slice(-2).join(" ")) : (x = S[0], h = x), x == "" && (O = !1, t.value = null, o.value = a.value), O && (x = h), b();
      }
    }
    function L() {
      g("change", C.value);
    }
    function j() {
      O = !0, x = h, l = 0, b();
    }
    function b() {
      u = setTimeout(function() {
        $();
      }, n);
    }
    function w() {
      a.value = o.value, p.value.push(_.value), s.value.push(t.value);
    }
    async function $() {
      const k = "https://service.tib.eu/ts4tib/api/select?q=", S = encodeURI("&obsoletes=false&local=false&rows=10");
      (await fetch(`${k}${x}${S}`)).json().then((K) => {
        c.value = K.response.docs, c.value.length > 0 && (l = 0, q());
      });
    }
    function q() {
      let k = "";
      t.value = c.value[l], k = t.value.label;
      let S = k.toLowerCase().replace(x, "");
      S != null && (o.value = a.value + S);
    }
    return (k, S) => (r(), i("div", null, [
      e.label ? (r(), i("label", Re, m(e.label), 1)) : T("", !0),
      f("div", null, [
        D(f("textarea", {
          "onUpdate:modelValue": S[0] || (S[0] = (E) => V(o) ? o.value = E : o = E),
          id: "autocomplete",
          type: "text",
          class: "o_annotate_textarea",
          line: "10"
        }, null, 512), [
          [H, d(o)]
        ]),
        D(f("textarea", {
          id: "mainInput",
          onKeyup: U(I, ["stop"]),
          onChange: U(L, ["stop"]),
          "onUpdate:modelValue": S[1] || (S[1] = (E) => V(a) ? a.value = E : a = E),
          type: "text",
          class: "o_annotate_textarea"
        }, null, 40, Ve), [
          [H, d(a)]
        ])
      ]),
      e.info && d(c).length == 0 ? (r(), i("p", Ue, m(e.info), 1)) : T("", !0),
      d(t) ? (r(), i("span", De, [
        f("code", null, [
          f("pre", null, m(d(_)), 1)
        ])
      ])) : T("", !0),
      d(p) && d(p).length > 0 ? (r(), i("span", He, [
        f("code", null, [
          f("pre", null, m(d(C)), 1)
        ])
      ])) : T("", !0)
    ]));
  }
}), Ne = `.o_annotate_textarea[data-v-030af0eb]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;padding:12px 10px;resize:none}#mainInput[data-v-030af0eb]{background:transparent;color:#000;opacity:100}#autocomplete[data-v-030af0eb]{position:absolute;box-sizing:border-box;cursor:text;pointer-events:none;color:#000;opacity:.6;background:transparent}
`, Ke = /* @__PURE__ */ R(Be, [["styles", [Ne]], ["__scopeId", "data-v-030af0eb"]]), Fe = (e) => (J("data-v-3f293147"), e = e(), G(), e), We = {
  key: 0,
  tabindex: "0",
  role: "listbox"
}, Pe = /* @__PURE__ */ Fe(() => /* @__PURE__ */ f("br", null, null, -1)), Je = { style: { "padding-left": "22px", color: "#858484" } }, Ge = { key: 0 }, Qe = {
  tabindex: "0",
  role: "listbox"
}, Xe = {
  role: "option",
  tabindex: "-1",
  "aria-selected": "false",
  "aria-setsize": "3",
  "aria-posinset": "0"
}, Ye = /* @__PURE__ */ M({
  __name: "ontology-tree.ce",
  props: {
    doc: {
      type: Object,
      required: !0,
      default: {}
    }
  },
  emits: ["selected"],
  setup(e, { emit: g }) {
    const v = e;
    y("");
    const a = (u) => {
      u && g("selected", u);
    };
    async function o(u) {
      const n = u._links.children.href;
      (await fetch(`${n}`)).json().then((c) => {
        v.doc.children = c._embedded.terms;
      });
    }
    return (u, n) => e.doc ? (r(), i("span", We, [
      (r(), i("li", {
        key: e.doc.label,
        role: "option",
        tabindex: "-1",
        "aria-selected": "false",
        "aria-setsize": "3",
        "aria-posinset": "0"
      }, [
        f("span", {
          onClick: n[0] || (n[0] = (l) => o(e.doc)),
          class: W([e.doc.has_children ? "caret" : "nocaret"])
        }, null, 2),
        f("span", {
          style: { "text-transform": "capitalize" },
          onClick: n[1] || (n[1] = (l) => a(e.doc))
        }, m(e.doc.label), 1),
        Pe,
        f("p", Je, [
          f("small", null, m(e.doc.ontology_prefix) + ":" + m(e.doc.iri), 1)
        ]),
        e.doc.children && e.doc.children.length > 0 ? (r(), i("span", Ge, [
          f("ul", Qe, [
            (r(!0), i(B, null, N(e.doc.children, (l) => (r(), i("span", Xe, [
              Q(X, {
                onSelected: n[2] || (n[2] = (c) => a(c)),
                doc: l
              }, null, 8, ["doc"])
            ]))), 256))
          ])
        ])) : T("", !0)
      ]))
    ])) : T("", !0);
  }
}), Ze = `ul[data-v-3f293147]{padding-left:10px!important}li[data-v-3f293147]{border:none!important}.nocaret[data-v-3f293147]{margin-right:23px}.caret[data-v-3f293147]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.caret[data-v-3f293147]:before{content:"⇢";color:#000;display:inline-block;margin-right:6px}.caret-down[data-v-3f293147]:before{-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg)}.nested[data-v-3f293147]{display:none}.active[data-v-3f293147]{display:block}
`, X = /* @__PURE__ */ R(Ye, [["styles", [Ze]], ["__scopeId", "data-v-3f293147"]]), et = { class: "auto-search-wrapper" }, tt = { key: 0 }, ot = ["onInput", "placeholder"], at = {
  key: 1,
  class: "auto-results-wrapper auto-is-active"
}, nt = {
  tabindex: "0",
  role: "listbox"
}, lt = {
  role: "option",
  tabindex: "-1",
  "aria-selected": "false",
  "aria-setsize": "3",
  "aria-posinset": "0"
}, rt = { key: 2 }, it = {
  key: 3,
  type: "button",
  "aria-label": "clear the search query"
}, st = /* @__PURE__ */ M({
  __name: "ontology-select.ce",
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
    ontology: {
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
  setup(e, { emit: g }) {
    const v = e;
    let a = y(""), o = y([]), u = y([]), n = y(null), l = y(!1);
    const c = (s) => {
      s == "" ? (n.value = null, a.value = "") : (n.value = s, a.value = s.label, g("change", x.value), u.value = [], l.value = !1);
    }, x = z(() => n.value ? (console.log(n.value.type), v.format && v.format == "json" ? n.value : n.value ? n.value.label + "	" + n.value.ontology_prefix + "	" + n.value.iri + "	" + (n.value.type ? n.value.type : "") : "") : null);
    P(
      () => v.value,
      (s) => {
        c(p(s));
      }
    ), F(() => {
      h();
    });
    async function h() {
      const s = "https://service.tib.eu/ts4tib/api/ontologies/", t = encodeURI("/terms/roots?includeObsoletes=false");
      (await fetch(`${s}${v.ontology}${t}`)).json().then((C) => {
        o.value = C._embedded.terms;
      });
    }
    async function O() {
      if (a.value === "")
        return u.value = [], [];
      let s = a.value.indexOf(":"), t = "", _ = null;
      s < 0 ? (t = v.ontology, _ = a.value) : (_ = a.value.split(":")[1], t = a.value.split(":")[0]);
      const C = "https://service.tib.eu/ts4tib/api/select?q=", I = encodeURI(
        "&ontology=" + t + "&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10"
      );
      (await fetch(`${C}${_}${I}`)).json().then((j) => {
        u.value = j.response.docs;
      });
    }
    function p(s) {
      if (!s || s == "")
        return "";
      const t = s.split("	");
      return {
        label: t[0],
        iri: t[2],
        ontology_prefix: t[1],
        type: t[3]
      };
    }
    return (s, t) => (r(), i("div", et, [
      e.label ? (r(), i("label", tt, m(e.label), 1)) : T("", !0),
      D(f("input", {
        type: "text",
        id: "search",
        "onUpdate:modelValue": t[0] || (t[0] = (_) => V(a) ? a.value = _ : a = _),
        onInput: U(O, ["stop"]),
        onFocusin: t[1] || (t[1] = (_) => V(l) ? l.value = !0 : l = !0),
        placeholder: e.placeholder,
        class: W(e.styling),
        autocomplete: "off"
      }, null, 42, ot), [
        [H, d(a)]
      ]),
      d(o).length > 0 && d(l) ? (r(), i("div", at, [
        f("ul", nt, [
          (r(!0), i(B, null, N(d(o), (_) => (r(), i("span", lt, [
            Q(X, {
              doc: _,
              onSelected: t[2] || (t[2] = (C) => c(C))
            }, null, 8, ["doc"])
          ]))), 256))
        ])
      ])) : (r(), i("div", rt, [
        f("p", null, m(e.info), 1)
      ])),
      d(a) != "" && d(u).length > 0 ? (r(), i("button", it)) : T("", !0)
    ]));
  }
}), dt = `[data-v-2313ef2f]:root{--close-button: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'/%3E%3C/svg%3E");--loupe-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23929292' d='M16.041 15.856a.995.995 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.971 6.971 0 0 1-1.959 4.856zm5.666 4.437-3.675-3.675A8.967 8.967 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.967 8.967 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414z'/%3E%3C/svg%3E")}ul[data-v-2313ef2f],#myUL[data-v-2313ef2f]{list-style-type:none;padding-left:10px}#myUL[data-v-2313ef2f]{margin:0;padding:0}.caret[data-v-2313ef2f]:before{content:"▶";color:#000;display:inline-block;margin-right:6px}.auto-search-wrapper[data-v-2313ef2f]{display:block;position:relative;width:100%}.auto-search-wrapper p[data-v-2313ef2f]{margin:0;padding:0;font-size:1.1em}.auto-search-wrapper p .highlightText[data-v-2313ef2f]{font-weight:700}.auto-search-wrapper input[data-v-2313ef2f]{border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;font-size:16px;padding:12px 45px 12px 10px;width:100%}.auto-search-wrapper input[data-v-2313ef2f]:focus{border:1px solid #d7d7d7;outline:none}.auto-search-wrapper input[data-v-2313ef2f]::-ms-clear{display:none}.auto-search-wrapper ul[data-v-2313ef2f]{list-style:none;margin:0;overflow:auto;padding:0}.auto-search-wrapper ul li[data-v-2313ef2f]{cursor:pointer;margin:0;overflow:hidden;padding:10px;position:relative;border:1px dotted #f1f1f2}.auto-search-wrapper ul li[data-v-2313ef2f]:hover{background-color:#f1f1f2}.auto-search-wrapper ul li[data-v-2313ef2f]:not(:last-child){border-top:none}.auto-search-wrapper ul li[disabled][data-v-2313ef2f]{background:#ececec;opacity:.5;pointer-events:none}.auto-search-wrapper .auto-expanded[data-v-2313ef2f]{border:1px solid #d7d7d7;outline:none}.auto-search-wrapper.loupe[data-v-2313ef2f]:before{filter:invert(60%)}.auto-is-loading[data-v-2313ef2f]:after{animation:auto-spinner-2313ef2f .6s linear infinite;border-color:#d9d9d9 grey grey #d9d9d9;border-radius:50%;border-style:solid;border-width:2px;bottom:0;box-sizing:border-box;content:"";height:20px;margin:auto;position:absolute;right:10px;top:0;width:20px}.auto-is-loading .auto-clear[data-v-2313ef2f]{display:none}@keyframes auto-spinner-2313ef2f{to{transform:rotate(1turn)}}li.loupe[data-v-2313ef2f]:before{bottom:auto;top:15px}.loupe input[data-v-2313ef2f]{padding:12px 45px 12px 35px}.loupe[data-v-2313ef2f]:before{background-image:var(--loupe-icon);bottom:0;content:"";height:17px;left:10px;margin:auto;position:absolute;top:0;width:17px}.auto-selected[data-v-2313ef2f]:before{opacity:1}.auto-clear[data-v-2313ef2f]{align-items:center;background-color:transparent;border:none;bottom:0;cursor:pointer;display:flex;height:auto;justify-content:center;margin:auto;position:absolute;right:0;top:0;width:40px}.auto-clear[data-v-2313ef2f]:before{content:var(--close-button);height:24px;line-height:100%;width:24px}.auto-clear span[data-v-2313ef2f]{display:none}.auto-results-wrapper[data-v-2313ef2f]{background-color:#fff;border:1px solid #d7d7d7;border-top:none;box-sizing:border-box;display:none;overflow:hidden}.auto-results-wrapper ul>.loupe[data-v-2313ef2f]{padding-left:40px}.auto-results-wrapper.auto-is-active[data-v-2313ef2f]{display:block;margin-top:-1px;position:absolute;width:100%;z-index:99999}.auto-selected[data-v-2313ef2f]{background-color:#e6e6e6}.auto-selected+li[data-v-2313ef2f]:before{border-top:none}.auto-error[data-v-2313ef2f]{border:1px solid #ff3838}.auto-error[data-v-2313ef2f]::placeholder{color:#f66;opacity:1}.hidden[data-v-2313ef2f]{display:none}.icon[data-v-2313ef2f]{height:1em;width:1em;margin-bottom:2px;cursor:pointer;fill:#d7d7d7}.icon[data-v-2313ef2f]:hover{fill:#666}.caret[data-v-2313ef2f]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.caret[data-v-2313ef2f]:before{content:"⇢";color:#000;display:inline-block;margin-right:6px}.caret-down[data-v-2313ef2f]:before{-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg)}.nested[data-v-2313ef2f]{display:none}.active[data-v-2313ef2f]{display:block}
`, ut = /* @__PURE__ */ R(st, [["styles", [dt]], ["__scopeId", "data-v-2313ef2f"]]), ct = A(ae), pt = A(ie), ft = A(me), vt = A(Ae), gt = A(Ke), ht = A(ut);
if (typeof window < "u") {
  let e = window.customElements;
  e.define("ontology-term-annotation", ct), e.define("ontology-text-annotation", pt), e.define("ontology-autocomplete", ft), e.define("ontology-annotate", vt), e.define("ontology-compose", gt), e.define("ontology-select", ht);
}
export {
  vt as OntologyAnnotate,
  ft as OntologyAutoComplete,
  gt as OntologyCompose,
  ht as OntologySelect,
  ct as OntologyTermAnnotation,
  pt as OntologyTextAnnotation
};
//# sourceMappingURL=index.js.map
