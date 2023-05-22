import{a3 as E,d as j,l as I,o as d,c as u,t as k,b as r,C as z,h as _,a4 as O,a5 as U,z as v,a2 as B,a0 as A,F as V,L as N,a6 as Y,p as Z,H as G,M as J,N as P}from"./framework.5904c5cc.js";const Q=["href"],X=j({__name:"ontology-term-annotation.ce",props:{annotation:null},setup(e){const c=e,y=I(()=>c.annotation?c.annotation.split("	")[0]:""),t=I(()=>c.annotation?c.annotation.split("	")[2]:""),a=I(()=>c.annotation?c.annotation.split("	")[1]:"");return($,C)=>e.annotation&&e.annotation!=""?(d(),u("a",{key:0,href:r(t),target:"_blank"},k(r(a))+": "+k(r(y)),9,Q)):z("",!0)}}),ee=["innerHTML"],te=j({__name:"ontology-text-annotation.ce",props:{annotation:null},setup(e){const c=e,y=I(()=>c.annotation?c.annotation.split("$$$$")[0]:""),t=I(()=>{let a=`${y.value}`,$=c.annotation?c.annotation.split("$$$$")[1].split(/\r?\n/).filter(n=>n):[],C=[];return $.forEach(n=>{let o=n.split("	"),g=o[1].split(" "),s={};s.value=a.substring(parseInt(g[1]),parseInt(g[2])),s.class=o[0],s.ontology=g[0],s.ontology_term=o[2],s.iri=o[3],C.push(s)}),C.forEach(n=>{a=a.replace(n.value,'<span class="o_term"><a target="_blank" href='+n.iri+">"+n.value+"</a></span>")}),a});return(a,$)=>(d(),u("div",{innerHTML:r(t)},null,8,ee))}}),ae=`.o_term[data-v-922a42fb]{background-color:#cdcdcd;border-radius:4px;padding:1px 3px}
`,H=(e,c)=>{const y=e.__vccOpts||e;for(const[t,a]of c)y[t]=a;return y},oe=H(te,[["styles",[ae]],["__scopeId","data-v-922a42fb"]]),ne={class:"auto-search-wrapper"},le={key:0},re=["onInput","placeholder"],ie={key:1},de={key:2,class:"auto-results-wrapper auto-is-active"},ue={tabindex:"0",role:"listbox"},se=["onClick"],pe=["innerHTML"],ce=["innerHTML"],fe={key:3,type:"button","aria-label":"clear the search query"},ve=j({__name:"ontology-autocomplete.ce",props:{label:{type:String,required:!1,default:""},info:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},ontologies:{type:String,required:!1,default:""},format:{type:String,required:!1,default:"text"}},emits:["change"],setup(e,{emit:c}){const y=e;let t=_(""),a=_([]);async function $(){if(t.value==="")return a.value=[],[];let x=t.value.indexOf(":"),h="",m=null;x<0?(h=y.ontologies,m=t.value):(m=t.value.split(":")[1],h=t.value.split(":")[0]);const w="https://service.tib.eu/ts4tib/api/select?q=",q=encodeURI("&ontology="+h+"&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10");(await fetch(`${w}${m}${q}`)).json().then(M=>{a.value=M.response.docs})}function C(x){return t.value?x.replace(new RegExp(t.value,"gi"),h=>'<span class="highlightText">'+h+"</span>"):x}function n(x){return x?x.join(""):""}let o=_(null);const g=I(()=>o.value?y.format&&y.format=="json"?o.value:o.value?o.value.label+"	"+o.value.ontology_prefix+"	"+o.value.iri+"	"+o.value.type:"":null),s=x=>{o.value=x,t.value=x.label,c("change",g.value),a.value=[]};return(x,h)=>(d(),u("div",ne,[e.label?(d(),u("label",le,k(e.label),1)):z("",!0),O(v("input",{type:"text",id:"search","onUpdate:modelValue":h[0]||(h[0]=m=>B(t)?t.value=m:t=m),onInput:A($,["stop"]),placeholder:e.placeholder,autocomplete:"off"},null,40,re),[[U,r(t)]]),e.info&&r(a).length==0?(d(),u("p",ie,k(e.info),1)):(d(),u("div",de,[v("ul",ue,[(d(!0),u(V,null,N(r(a),m=>(d(),u("li",{key:m.short_label,role:"option",tabindex:"-1","aria-selected":"false","aria-setsize":"3","aria-posinset":"0",onClick:w=>s(m)},[v("p",{innerHTML:C(m.label)},null,8,pe),v("p",null,[v("small",{innerHTML:n(m.description)},null,8,ce)]),v("small",null,k(m.ontology_prefix)+":"+k(m.iri),1)],8,se))),128))])])),r(t)!=""&&r(a).length>0?(d(),u("button",fe)):z("",!0)]))}}),ge=`[data-v-d4fc57ea]:root{--close-button: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'/%3E%3C/svg%3E");--loupe-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23929292' d='M16.041 15.856a.995.995 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.971 6.971 0 0 1-1.959 4.856zm5.666 4.437-3.675-3.675A8.967 8.967 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.967 8.967 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414z'/%3E%3C/svg%3E")}.auto-search-wrapper[data-v-d4fc57ea]{display:block;position:relative;width:100%}.auto-search-wrapper p[data-v-d4fc57ea]{margin:0;padding:0;font-size:1.1em}.auto-search-wrapper p .highlightText[data-v-d4fc57ea]{font-weight:700}.auto-search-wrapper input[data-v-d4fc57ea]{border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;font-size:16px;padding:12px 45px 12px 10px;width:100%}.auto-search-wrapper input[data-v-d4fc57ea]:focus{border:1px solid #858585;outline:none}.auto-search-wrapper input[data-v-d4fc57ea]::-ms-clear{display:none}.auto-search-wrapper ul[data-v-d4fc57ea]{list-style:none;margin:0;overflow:auto;padding:0}.auto-search-wrapper ul li[data-v-d4fc57ea]{cursor:pointer;margin:0;overflow:hidden;padding:10px;position:relative;border:1px dotted #f1f1f2}.auto-search-wrapper ul li[data-v-d4fc57ea]:hover{background-color:#f1f1f2}.auto-search-wrapper ul li[data-v-d4fc57ea]:not(:last-child){border-top:none}.auto-search-wrapper ul li[disabled][data-v-d4fc57ea]{background:#ececec;opacity:.5;pointer-events:none}.auto-search-wrapper .auto-expanded[data-v-d4fc57ea]{border:1px solid #858585;outline:none}.auto-search-wrapper.loupe[data-v-d4fc57ea]:before{filter:invert(60%)}.auto-is-loading[data-v-d4fc57ea]:after{animation:auto-spinner-d4fc57ea .6s linear infinite;border-color:#d9d9d9 grey grey #d9d9d9;border-radius:50%;border-style:solid;border-width:2px;bottom:0;box-sizing:border-box;content:"";height:20px;margin:auto;position:absolute;right:10px;top:0;width:20px}.auto-is-loading .auto-clear[data-v-d4fc57ea]{display:none}@keyframes auto-spinner-d4fc57ea{to{transform:rotate(1turn)}}li.loupe[data-v-d4fc57ea]:before{bottom:auto;top:15px}.loupe input[data-v-d4fc57ea]{padding:12px 45px 12px 35px}.loupe[data-v-d4fc57ea]:before{background-image:var(--loupe-icon);bottom:0;content:"";height:17px;left:10px;margin:auto;position:absolute;top:0;width:17px}.auto-selected[data-v-d4fc57ea]:before{opacity:1}.auto-clear[data-v-d4fc57ea]{align-items:center;background-color:transparent;border:none;bottom:0;cursor:pointer;display:flex;height:auto;justify-content:center;margin:auto;position:absolute;right:0;top:0;width:40px}.auto-clear[data-v-d4fc57ea]:before{content:var(--close-button);height:24px;line-height:100%;width:24px}.auto-clear span[data-v-d4fc57ea]{display:none}.auto-results-wrapper[data-v-d4fc57ea]{background-color:#fff;border:1px solid #858585;border-top:none;box-sizing:border-box;display:none;overflow:hidden}.auto-results-wrapper ul>.loupe[data-v-d4fc57ea]{padding-left:40px}.auto-results-wrapper.auto-is-active[data-v-d4fc57ea]{display:block;margin-top:-1px;position:absolute;width:100%;z-index:99999}.auto-selected[data-v-d4fc57ea]{background-color:#e6e6e6}.auto-selected+li[data-v-d4fc57ea]:before{border-top:none}.auto-error[data-v-d4fc57ea]{border:1px solid #ff3838}.auto-error[data-v-d4fc57ea]::placeholder{color:#f66;opacity:1}.hidden[data-v-d4fc57ea]{display:none}
`,xe=H(ve,[["styles",[ge]],["__scopeId","data-v-d4fc57ea"]]),he=e=>(J("data-v-72d4acfd"),e=e(),P(),e),be=["id"],ye={key:0,class:"o_annotate_label"},me={key:1},we={key:2},_e={key:0,class:"contextmenu_item"},ke={key:1},Se=["onClickCapture"],$e=["innerHTML"],Ce={key:0,style:{float:"right"}},ze=he(()=>v("i",null,"...loading",-1)),Te=[ze],Ie={key:0},qe=j({__name:"ontology-annotate.ce",props:{label:{type:String,required:!1,default:""},info:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},ontologies:{type:String,required:!1,default:""},format:{type:String,required:!1,default:"text"}},emits:["change"],setup(e,{emit:c}){const y=e,t=(Math.random()+1).toString(36).substring(7),a=_(null),$=_(!1);let C=_(""),n=_({x:-1e3,y:0,start:-1,end:-1}),o=_(""),g=_(!1),s=_([]),x=Y([]);const h=new WeakMap,m=I(()=>"left:"+n.value.x+"px; top:"+n.value.y+"px"),w=I(()=>{var b;let l=$?(b=a.value)==null?void 0:b.value:C.value;return l?y.format&&y.format=="json"?{text:l,ontology:x}:l+`
$$$$
`+x.map(i=>i.ontology.type[0]+"	"+i.ontology.ontology_prefix+" "+i.context.start+" "+i.context.end+"	"+i.ontology.label+"	"+i.ontology.iri).join(`
`):null});Z(()=>{var l=document.getElementsByTagName("ontology-annotate")[0];l!=null&&l.shadowRoot&&($.value=!0)});function q(l){C.value=l.target.innerText,c("change",w.value)}function M(l){var i,S;let b={ontology:{},context:{}};if(!$)b={ontology:l,context:n.value};else if(a){let p={x:0,y:0,start:(i=a.value)==null?void 0:i.selectionStart,end:(S=a.value)==null?void 0:S.selectionEnd};b={ontology:l,context:p}}x.push(b),s.value=[],o.value="",c("change",w.value)}function L(l){if(o.value="",window.getSelection){var b=window.getSelection();o.value=b==null?void 0:b.toString(),o.value&&o.value!=""?(s.value=[],D(b),R(l)):(n.value={x:-1e3,y:0,start:-1,end:-1},s.value=[])}}function D(l,b=!0){var p;if(!(l!=null&&l.rangeCount))return null;let i=l.getRangeAt(0).cloneRange();if(!i.getClientRects)return null;i.collapse(b);let S=i.getClientRects();if(S.length<=0)n.value.x=0,n.value.y=0;else{let f=S[0];n.value.start=l.anchorOffset,n.value.end=l.focusOffset,n.value.x=f.x,n.value.y=f.y+((p=S[0])==null?void 0:p.height)}}async function R(l){if(o.value==="")return s.value=[],[];let b=o.value.indexOf(":"),i="",S=null;b<0?(i=y.ontologies,S=o.value):(S=o.value.split(":")[1],i=o.value.split(":")[0]);const p=l.currentTarget,f=h.get(p);f&&f.abort();const T=new AbortController;h.set(p,T);const K="https://service.tib.eu/ts4tib/api/select?q=",W=encodeURI("&ontolog-y="+i+"&fieldList=iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type&obsoletes=false&local=false&rows=10");g.value=!0,(await fetch(`${K}${S}${W}`,{signal:T.signal})).json().then(F=>{h.delete(p),s.value=F.response.docs,g.value=!1})}return(l,b)=>(d(),u("div",{id:"o_annotate_wrapper_"+r(t),class:"o_annotate_wrapper"},[e.label?(d(),u("label",ye,k(e.label),1)):z("",!0),$.value?(d(),u("div",we,[v("textarea",{ref_key:"o_annotate_textarea",ref:a,onMouseup:L,onKeyup:L,onInput:q,class:"o_annotate_textarea"},k(r(C)),545)])):(d(),u("div",me,[v("div",{onMouseup:L,onKeyup:L,onInput:q,class:"o_annotate_textarea",ref:"o_annotate_div",contenteditable:"true"},k(r(C)),545)])),r(o)!=""?(d(),u("div",{key:3,class:"contextmenu",style:G(r(m))},[r(s).length==0&&!r(g)?(d(),u("div",_e,"No matches found")):(d(),u("div",ke,[(d(!0),u(V,null,N(r(s),i=>(d(),u("div",{class:"contextmenu_item",key:i.short_label,role:"option",tabindex:"_1",aria_selected:"false",aria_setsize:"3",aria_posinset:"0",onClickCapture:A(S=>M(i),["stop","prevent"])},[v("p",{innerHTML:i.label},null,8,$e),v("small",null,k(i.ontology_prefix)+":"+k(i.short_form),1)],40,Se))),128))]))],4)):z("",!0),v("div",null,[r(g)?(d(),u("div",Ce,Te)):z("",!0),v("div",null,[e.info?(d(),u("span",Ie,k(e.info),1)):z("",!0)])])],8,be))}}),Me=`.o_annotate_textarea[data-v-72d4acfd]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border_box;padding:12px 10px;resize:none}#mainInput[data-v-72d4acfd]{background:transparent;color:#000;opacity:1}.contextmenu[data-v-72d4acfd]{position:absolute;top:0;right:0;background:#ffffff;color:#000;border:1px solid #f1f1f2;width:15rem;max-width:calc(100vw _ 2rem);max-height:300px;overflow-y:scroll;overflow-x:hidden;z-index:100;box-shadow:0 .5rem 1.5rem #0003;border-radius:.2rem}.contextmenu .contextmenu_item[data-v-72d4acfd]{border-bottom:1px solid #c3c3c3;padding:8px}.contextmenu .contextmenu_item[data-v-72d4acfd]:hover{cursor:pointer;background-color:#f1f1f2}.contextmenu .contextmenu_item p[data-v-72d4acfd]{margin:0;padding:0}.contextmenu .contextmenu_item .iri[data-v-72d4acfd]{margin:0;width:15rem;white-space:nowrap;text-overflow:ellipsis;word-wrap:break_word;padding:0}
`,Le=H(qe,[["styles",[Me]],["__scopeId","data-v-72d4acfd"]]),Ee={key:0},je=["onKeyup","onChange"],Re={key:1},Ae={key:2},He={key:3},De=j({__name:"ontology-compose.ce",props:{label:{type:String,required:!1,default:""},info:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},format:{type:String,required:!1,default:"text"}},emits:["change"],setup(e,{emit:c}){const y=e;let t=_(""),a=_(""),$=-1,C=100,n=0,o=_([]),g="",s="",x=!1,h=_([]),m=_([]),w=_(null);const q=I(()=>w.value?w.value?w.value.label+"	"+w.value.ontology_prefix+"	"+w.value.iri+"	"+w.value.type:"":null),M=I(()=>t.value?y.format&&y.format=="json"?{text:t.value,ontology:h.value}:t.value+`
$$$$
`+h.value.join(`
`):null);async function L(p){if(t.value==""){a.value="";return}if($>-1&&clearTimeout($),p.key=="ArrowDown"){n==9&&R(),n+=1,S(),p.preventDefault();return}else if(p.key=="ArrowUp"){n==0&&R(),n-=1,S(),p.preventDefault();return}else if(p.key=="ArrowRight")p.preventDefault(),b();else if(t.value){let f=t.value.split(" ");f.length>1?(g=f.slice(-1)[0],s=f.slice(-2).join(" ")):(g=f[0],s=g),g==""&&(x=!1,w.value=null,a.value=t.value),x&&(g=s),l()}}function D(){c("change",M.value)}function R(){x=!0,g=s,n=0,l()}function l(){$=setTimeout(function(){i()},C)}function b(){t.value=a.value,h.value.push(q.value),m.value.push(w.value)}async function i(){const p="https://service.tib.eu/ts4tib/api/select?q=",f=encodeURI("&obsoletes=false&local=false&rows=10");(await fetch(`${p}${g}${f}`)).json().then(T=>{o.value=T.response.docs,o.value.length>0&&(n=0,S())})}function S(){let p="";w.value=o.value[n],p=w.value.label;let f=p.toLowerCase().replace(g,"");f!=null&&(a.value=t.value+f)}return(p,f)=>(d(),u("div",null,[e.label?(d(),u("label",Ee,k(e.label),1)):z("",!0),v("div",null,[O(v("textarea",{"onUpdate:modelValue":f[0]||(f[0]=T=>B(a)?a.value=T:a=T),id:"autocomplete",type:"text",class:"o_annotate_textarea",line:"10"},null,512),[[U,r(a)]]),O(v("textarea",{id:"mainInput",onKeyup:A(L,["stop"]),onChange:A(D,["stop"]),"onUpdate:modelValue":f[1]||(f[1]=T=>B(t)?t.value=T:t=T),type:"text",class:"o_annotate_textarea"},null,40,je),[[U,r(t)]])]),e.info&&r(o).length==0?(d(),u("p",Re,k(e.info),1)):z("",!0),r(w)?(d(),u("span",Ae,[v("code",null,[v("pre",null,k(r(q)),1)])])):z("",!0),r(h)&&r(h).length>0?(d(),u("span",He,[v("code",null,[v("pre",null,k(r(M)),1)])])):z("",!0)]))}}),Oe=`.o_annotate_textarea[data-v-030af0eb]{min-height:100px;width:100%;border:1px solid #d7d7d7;box-shadow:none;box-sizing:border-box;padding:12px 10px;resize:none}#mainInput[data-v-030af0eb]{background:transparent;color:#000;opacity:100}#autocomplete[data-v-030af0eb]{position:absolute;box-sizing:border-box;cursor:text;pointer-events:none;color:#000;opacity:.6;background:transparent}
`,Ue=H(De,[["styles",[Oe]],["__scopeId","data-v-030af0eb"]]),Be=E(X),Ve=E(oe),Ne=E(xe),Ke=E(Le),We=E(Ue);if(typeof window<"u"){let e=window.customElements;e.define("ontology-term-annotation",Be),e.define("ontology-text-annotation",Ve),e.define("ontology-autocomplete",Ne),e.define("ontology-annotate",Ke),e.define("ontology-compose",We)}
