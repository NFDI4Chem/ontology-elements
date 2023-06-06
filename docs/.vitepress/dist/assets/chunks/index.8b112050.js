import{a3 as L,d as j,l as M,o as s,c as d,t as S,b as r,C,h as k,w as G,p as V,a4 as D,a5 as U,z as b,a2 as B,a0 as H,n as J,F as N,L as K,a6 as Q,H as X,M as Y,N as Z}from"./framework.5904c5cc.js";const ee=["href"],te=j({__name:"ontology-term-annotation.ce",props:{annotation:null},setup(t){const f=t,g=M(()=>f.annotation?f.annotation.split("	")[0]:""),i=M(()=>f.annotation?f.annotation.split("	")[2]:""),e=M(()=>f.annotation?f.annotation.split("	")[1]:"");return(h,x)=>t.annotation&&t.annotation!=""?(s(),d("a",{key:0,href:r(i),target:"_blank"},S(r(e))+": "+S(r(g)),9,ee)):C("",!0)}}),ae=["innerHTML"],oe=j({__name:"ontology-text-annotation.ce",props:{annotation:null},setup(t){const f=t,g=M(()=>f.annotation?f.annotation.split("$$$$")[0]:""),i=M(()=>{let e=`${g.value}`,h=f.annotation?f.annotation.split("$$$$")[1].split(/\r?\n/).filter(a=>a):[],x=[];return h.forEach(a=>{let p=a.split("	"),m=p[1].split(" "),c={};c.value=e.substring(parseInt(m[1]),parseInt(m[2])),c.class=p[0],c.ontology=m[0],c.ontology_term=p[2],c.iri=p[3],x.push(c)}),x.forEach(a=>{e=e.replace(a.value,'<span class="o_term"><a target="_blank" href='+a.iri+">"+a.value+"</a></span>")}),e});return(e,h)=>(s(),d("div",{innerHTML:r(i)},null,8,ae))}}),ne=`.o_term[data-v-922a42fb]{background-color:#cdcdcd;border-radius:4px;padding:1px 3px}
`,O=(t,f)=>{const g=t.__vccOpts||t;for(const[i,e]of f)g[i]=e;return g},le=O(oe,[["styles",[ne]],["__scopeId","data-v-922a42fb"]]),re={class:"auto-search-wrapper"},ie={key:0},ue=["onInput","placeholder"],se={key:1},de={key:2,class:"auto-results-wrapper auto-is-active"},pe={tabindex:"0",role:"listbox"},ce=["onClick"],ve=["innerHTML"],fe=["innerHTML"],ge={key:3,type:"button","aria-label":"clear the search query"},xe=j({__name:"ontology-autocomplete.ce",props:{label:{type:String,required:!1,default:""},info:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},ontologies:{type:String,required:!1,default:""},value:{type:String,required:!1,default:""},styling:{type:String,required:!1,default:""},format:{type:String,required:!1,default:"text"}},emits:["change"],setup(t,{emit:f}){const g=t,i=o=>{o==""?(x.value=null,e.value=""):(x.value=o,e.value=o.label,f("change",a.value),h.value=[])};let e=k(""),h=k([]),x=k(null);const a=M(()=>x.value?g.format&&g.format=="json"?x.value:x.value?x.value.label+"	"+x.value.ontology_prefix+"	"+x.value.iri+"	"+x.value.type:"":null);G(()=>g.value,(o,w)=>{i(c(o))}),V(()=>{g.value!=""&&i(c(g.value))});async function p(){if(e.value==="")return h.value=[],[];let o=e.value.indexOf(":"),w="",n=null;o<0?(w=g.ontologies,n=e.value):(n=e.value.split(":")[1],w=e.value.split(":")[0]);const T="https://service.tib.eu/ts4tib/api/select?q=",E=encodeURI("&ontology="+w+"&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10");(await fetch(`${T}${n}${E}`)).json().then(q=>{h.value=q.response.docs})}function m(o){return e.value?o.replace(new RegExp(e.value,"gi"),w=>'<span class="highlightText">'+w+"</span>"):o}function c(o){if(!o||o=="")return"";const w=o.split("	");return{label:w[0],iri:w[2],ontology_prefix:w[1],type:w[3]}}function I(o){return o?o.join(""):""}return(o,w)=>(s(),d("div",re,[t.label?(s(),d("label",ie,S(t.label),1)):C("",!0),D(b("input",{type:"text",id:"search","onUpdate:modelValue":w[0]||(w[0]=n=>B(e)?e.value=n:e=n),onInput:H(p,["stop"]),placeholder:t.placeholder,class:J(t.styling),autocomplete:"off"},null,42,ue),[[U,r(e)]]),t.info&&r(h).length==0?(s(),d("p",se,S(t.info),1)):(s(),d("div",de,[b("ul",pe,[(s(!0),d(N,null,K(r(h),n=>(s(),d("li",{key:n.short_label,role:"option",tabindex:"-1","aria-selected":"false","aria-setsize":"3","aria-posinset":"0",onClick:T=>i(n)},[b("p",{innerHTML:m(n.label)},null,8,ve),b("p",null,[b("small",{innerHTML:I(n.description)},null,8,fe)]),b("small",null,S(n.ontology_prefix)+":"+S(n.iri),1)],8,ce))),128))])])),r(e)!=""&&r(h).length>0?(s(),d("button",ge)):C("",!0)]))}}),ye=`[data-v-6c6ee054]:root{--close-button: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'/%3E%3C/svg%3E");--loupe-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23929292' d='M16.041 15.856a.995.995 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.971 6.971 0 0 1-1.959 4.856zm5.666 4.437-3.675-3.675A8.967 8.967 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.967 8.967 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414z'/%3E%3C/svg%3E")}.auto-search-wrapper[data-v-6c6ee054]{display:block;position:relative;width:100%}.auto-search-wrapper p[data-v-6c6ee054]{margin:0;padding:0;font-size:1.1em}.auto-search-wrapper p .highlightText[data-v-6c6ee054]{font-weight:700}.auto-search-wrapper input[data-v-6c6ee054]{border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;font-size:16px;padding:12px 45px 12px 10px;width:100%}.auto-search-wrapper input[data-v-6c6ee054]:focus{border:1px solid #858585;outline:none}.auto-search-wrapper input[data-v-6c6ee054]::-ms-clear{display:none}.auto-search-wrapper ul[data-v-6c6ee054]{list-style:none;margin:0;overflow:auto;padding:0}.auto-search-wrapper ul li[data-v-6c6ee054]{cursor:pointer;margin:0;overflow:hidden;padding:10px;position:relative;border:1px dotted #f1f1f2}.auto-search-wrapper ul li[data-v-6c6ee054]:hover{background-color:#f1f1f2}.auto-search-wrapper ul li[data-v-6c6ee054]:not(:last-child){border-top:none}.auto-search-wrapper ul li[disabled][data-v-6c6ee054]{background:#ececec;opacity:.5;pointer-events:none}.auto-search-wrapper .auto-expanded[data-v-6c6ee054]{border:1px solid #858585;outline:none}.auto-search-wrapper.loupe[data-v-6c6ee054]:before{filter:invert(60%)}.auto-is-loading[data-v-6c6ee054]:after{animation:auto-spinner-6c6ee054 .6s linear infinite;border-color:#d9d9d9 grey grey #d9d9d9;border-radius:50%;border-style:solid;border-width:2px;bottom:0;box-sizing:border-box;content:"";height:20px;margin:auto;position:absolute;right:10px;top:0;width:20px}.auto-is-loading .auto-clear[data-v-6c6ee054]{display:none}@keyframes auto-spinner-6c6ee054{to{transform:rotate(1turn)}}li.loupe[data-v-6c6ee054]:before{bottom:auto;top:15px}.loupe input[data-v-6c6ee054]{padding:12px 45px 12px 35px}.loupe[data-v-6c6ee054]:before{background-image:var(--loupe-icon);bottom:0;content:"";height:17px;left:10px;margin:auto;position:absolute;top:0;width:17px}.auto-selected[data-v-6c6ee054]:before{opacity:1}.auto-clear[data-v-6c6ee054]{align-items:center;background-color:transparent;border:none;bottom:0;cursor:pointer;display:flex;height:auto;justify-content:center;margin:auto;position:absolute;right:0;top:0;width:40px}.auto-clear[data-v-6c6ee054]:before{content:var(--close-button);height:24px;line-height:100%;width:24px}.auto-clear span[data-v-6c6ee054]{display:none}.auto-results-wrapper[data-v-6c6ee054]{background-color:#fff;border:1px solid #858585;border-top:none;box-sizing:border-box;display:none;overflow:hidden}.auto-results-wrapper ul>.loupe[data-v-6c6ee054]{padding-left:40px}.auto-results-wrapper.auto-is-active[data-v-6c6ee054]{display:block;margin-top:-1px;position:absolute;width:100%;z-index:99999}.auto-selected[data-v-6c6ee054]{background-color:#e6e6e6}.auto-selected+li[data-v-6c6ee054]:before{border-top:none}.auto-error[data-v-6c6ee054]{border:1px solid #ff3838}.auto-error[data-v-6c6ee054]::placeholder{color:#f66;opacity:1}.hidden[data-v-6c6ee054]{display:none}
`,be=O(xe,[["styles",[ye]],["__scopeId","data-v-6c6ee054"]]),he=t=>(Y("data-v-72d4acfd"),t=t(),Z(),t),me=["id"],we={key:0,class:"o_annotate_label"},_e={key:1},ke={key:2},Se={key:0,class:"contextmenu_item"},$e={key:1},Ce=["onClickCapture"],ze=["innerHTML"],Me={key:0,style:{float:"right"}},Ie=he(()=>b("i",null,"...loading",-1)),Te=[Ie],qe={key:0},Ee=j({__name:"ontology-annotate.ce",props:{label:{type:String,required:!1,default:""},info:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},ontologies:{type:String,required:!1,default:""},format:{type:String,required:!1,default:"text"}},emits:["change"],setup(t,{emit:f}){const g=t,i=(Math.random()+1).toString(36).substring(7),e=k(null),h=k(!1);let x=k(""),a=k({x:-1e3,y:0,start:-1,end:-1}),p=k(""),m=k(!1),c=k([]),I=Q([]);const o=new WeakMap,w=M(()=>"left:"+a.value.x+"px; top:"+a.value.y+"px"),n=M(()=>{var _;let l=h?(_=e.value)==null?void 0:_.value:x.value;return l?g.format&&g.format=="json"?{text:l,ontology:I}:l+`
$$$$
`+I.map(u=>u.ontology.type[0]+"	"+u.ontology.ontology_prefix+" "+u.context.start+" "+u.context.end+"	"+u.ontology.label+"	"+u.ontology.iri).join(`
`):null});V(()=>{var l=document.getElementsByTagName("ontology-annotate")[0];l!=null&&l.shadowRoot&&(h.value=!0)});function T(l){x.value=l.target.innerText,f("change",n.value)}function E(l){var u,$;let _={ontology:{},context:{}};if(!h)_={ontology:l,context:a.value};else if(e){let v={x:0,y:0,start:(u=e.value)==null?void 0:u.selectionStart,end:($=e.value)==null?void 0:$.selectionEnd};_={ontology:l,context:v}}I.push(_),c.value=[],p.value="",f("change",n.value)}function q(l){if(p.value="",window.getSelection){var _=window.getSelection();p.value=_==null?void 0:_.toString(),p.value&&p.value!=""?(c.value=[],A(_),R(l)):(a.value={x:-1e3,y:0,start:-1,end:-1},c.value=[])}}function A(l,_=!0){var v;if(!(l!=null&&l.rangeCount))return null;let u=l.getRangeAt(0).cloneRange();if(!u.getClientRects)return null;u.collapse(_);let $=u.getClientRects();if($.length<=0)a.value.x=0,a.value.y=0;else{let y=$[0];a.value.start=l.anchorOffset,a.value.end=l.focusOffset,a.value.x=y.x,a.value.y=y.y+((v=$[0])==null?void 0:v.height)}}async function R(l){if(p.value==="")return c.value=[],[];let _=p.value.indexOf(":"),u="",$=null;_<0?(u=g.ontologies,$=p.value):($=p.value.split(":")[1],u=p.value.split(":")[0]);const v=l.currentTarget,y=o.get(v);y&&y.abort();const z=new AbortController;o.set(v,z);const F="https://service.tib.eu/ts4tib/api/select?q=",P=encodeURI("&ontolog-y="+u+"&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10");m.value=!0,(await fetch(`${F}${$}${P}`,{signal:z.signal})).json().then(W=>{o.delete(v),c.value=W.response.docs,m.value=!1})}return(l,_)=>(s(),d("div",{id:"o_annotate_wrapper_"+r(i),class:"o_annotate_wrapper"},[t.label?(s(),d("label",we,S(t.label),1)):C("",!0),h.value?(s(),d("div",ke,[b("textarea",{ref_key:"o_annotate_textarea",ref:e,onMouseup:q,onKeyup:q,onInput:T,class:"o_annotate_textarea"},S(r(x)),545)])):(s(),d("div",_e,[b("div",{onMouseup:q,onKeyup:q,onInput:T,class:"o_annotate_textarea",ref:"o_annotate_div",contenteditable:"true"},S(r(x)),545)])),r(p)!=""?(s(),d("div",{key:3,class:"contextmenu",style:X(r(w))},[r(c).length==0&&!r(m)?(s(),d("div",Se,"No matches found")):(s(),d("div",$e,[(s(!0),d(N,null,K(r(c),u=>(s(),d("div",{class:"contextmenu_item",key:u.short_label,role:"option",tabindex:"_1",aria_selected:"false",aria_setsize:"3",aria_posinset:"0",onClickCapture:H($=>E(u),["stop","prevent"])},[b("p",{innerHTML:u.label},null,8,ze),b("small",null,S(u.ontology_prefix)+":"+S(u.short_form),1)],40,Ce))),128))]))],4)):C("",!0),b("div",null,[r(m)?(s(),d("div",Me,Te)):C("",!0),b("div",null,[t.info?(s(),d("span",qe,S(t.info),1)):C("",!0)])])],8,me))}}),Le=`.o_annotate_textarea[data-v-72d4acfd]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border_box;padding:12px 10px;resize:none}#mainInput[data-v-72d4acfd]{background:transparent;color:#000;opacity:1}.contextmenu[data-v-72d4acfd]{position:absolute;top:0;right:0;background:#ffffff;color:#000;border:1px solid #f1f1f2;width:15rem;max-width:calc(100vw _ 2rem);max-height:300px;overflow-y:scroll;overflow-x:hidden;z-index:100;box-shadow:0 .5rem 1.5rem #0003;border-radius:.2rem}.contextmenu .contextmenu_item[data-v-72d4acfd]{border-bottom:1px solid #c3c3c3;padding:8px}.contextmenu .contextmenu_item[data-v-72d4acfd]:hover{cursor:pointer;background-color:#f1f1f2}.contextmenu .contextmenu_item p[data-v-72d4acfd]{margin:0;padding:0}.contextmenu .contextmenu_item .iri[data-v-72d4acfd]{margin:0;width:15rem;white-space:nowrap;text-overflow:ellipsis;word-wrap:break_word;padding:0}
`,je=O(Ee,[["styles",[Le]],["__scopeId","data-v-72d4acfd"]]),Re={key:0},He=["onKeyup","onChange"],Oe={key:1},Ae={key:2},De={key:3},Ue=j({__name:"ontology-compose.ce",props:{label:{type:String,required:!1,default:""},info:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},format:{type:String,required:!1,default:"text"}},emits:["change"],setup(t,{emit:f}){const g=t;let i=k(""),e=k(""),h=-1,x=100,a=0,p=k([]),m="",c="",I=!1,o=k([]),w=k([]),n=k(null);const T=M(()=>n.value?n.value?n.value.label+"	"+n.value.ontology_prefix+"	"+n.value.iri+"	"+n.value.type:"":null),E=M(()=>i.value?g.format&&g.format=="json"?{text:i.value,ontology:o.value}:i.value+`
$$$$
`+o.value.join(`
`):null);async function q(v){if(i.value==""){e.value="";return}if(h>-1&&clearTimeout(h),v.key=="ArrowDown"){a==9&&R(),a+=1,$(),v.preventDefault();return}else if(v.key=="ArrowUp"){a==0&&R(),a-=1,$(),v.preventDefault();return}else if(v.key=="ArrowRight")v.preventDefault(),_();else if(i.value){let y=i.value.split(" ");y.length>1?(m=y.slice(-1)[0],c=y.slice(-2).join(" ")):(m=y[0],c=m),m==""&&(I=!1,n.value=null,e.value=i.value),I&&(m=c),l()}}function A(){f("change",E.value)}function R(){I=!0,m=c,a=0,l()}function l(){h=setTimeout(function(){u()},x)}function _(){i.value=e.value,o.value.push(T.value),w.value.push(n.value)}async function u(){const v="https://service.tib.eu/ts4tib/api/select?q=",y=encodeURI("&obsoletes=false&local=false&rows=10");(await fetch(`${v}${m}${y}`)).json().then(z=>{p.value=z.response.docs,p.value.length>0&&(a=0,$())})}function $(){let v="";n.value=p.value[a],v=n.value.label;let y=v.toLowerCase().replace(m,"");y!=null&&(e.value=i.value+y)}return(v,y)=>(s(),d("div",null,[t.label?(s(),d("label",Re,S(t.label),1)):C("",!0),b("div",null,[D(b("textarea",{"onUpdate:modelValue":y[0]||(y[0]=z=>B(e)?e.value=z:e=z),id:"autocomplete",type:"text",class:"o_annotate_textarea",line:"10"},null,512),[[U,r(e)]]),D(b("textarea",{id:"mainInput",onKeyup:H(q,["stop"]),onChange:H(A,["stop"]),"onUpdate:modelValue":y[1]||(y[1]=z=>B(i)?i.value=z:i=z),type:"text",class:"o_annotate_textarea"},null,40,He),[[U,r(i)]])]),t.info&&r(p).length==0?(s(),d("p",Oe,S(t.info),1)):C("",!0),r(n)?(s(),d("span",Ae,[b("code",null,[b("pre",null,S(r(T)),1)])])):C("",!0),r(o)&&r(o).length>0?(s(),d("span",De,[b("code",null,[b("pre",null,S(r(E)),1)])])):C("",!0)]))}}),Be=`.o_annotate_textarea[data-v-030af0eb]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;padding:12px 10px;resize:none}#mainInput[data-v-030af0eb]{background:transparent;color:#000;opacity:100}#autocomplete[data-v-030af0eb]{position:absolute;box-sizing:border-box;cursor:text;pointer-events:none;color:#000;opacity:.6;background:transparent}
`,Ve=O(Ue,[["styles",[Be]],["__scopeId","data-v-030af0eb"]]),Ne=L(te),Ke=L(le),Fe=L(be),Pe=L(je),We=L(Ve);if(typeof window<"u"){let t=window.customElements;t.define("ontology-term-annotation",Ne),t.define("ontology-text-annotation",Ke),t.define("ontology-autocomplete",Fe),t.define("ontology-annotate",Pe),t.define("ontology-compose",We)}
