import{r as v,g as Ar}from"./index-C5e9SFkp.js";import{j as B,r as tt}from"./index-Cws_IRuu.js";import{w as Ee,b as Qt,k as Ve,q as I,l as Rr,A as d,d as H,e as rt,u as Be,T as Pr,L as Dr,j as ze,c as nt,t as pe,r as Jt,C as Br,a as je,o as ot,p as Zt,s as Qe,i as Mr,v as Tr,x as Lr,m as Ge,h as Wr}from"./useConsolidatedRef-FEYVq0tu.js";import{_ as St}from"./iframe-D5cjZ3_e.js";const Fr=e=>e.replace(/^-+/g,"").replace(/-+(.)?/g,(t,r)=>r.toUpperCase()),Me=(e,t)=>r=>{const n=`${r??""}:${e}:`,o=Object.fromEntries(t.map(i=>[Fr(i),`${n}${i}`]));return o.root=n,o},Ir=(e,t,r)=>{const n=`pega-${e}`;return Object.entries(r??{}).reduce((o,[i,s])=>(typeof s=="string"?o.push(`${n}-${i}-${s}`):s===!0&&o.push(`${n}-${i}`),o),t?[t,n]:[n]).join(" ")},er=()=>`_${Math.random().toString(36).slice(2,11)}`,Ae=(e=document)=>{let t=e.activeElement;return t?(t.tagName.toLowerCase()==="iframe"&&t.contentDocument&&(t=Ae(t.contentDocument)??t),t.shadowRoot&&(t=Ae(t.shadowRoot)??t),t):null};var _t;Ee&&((_t=window.cosmos).popoverMap??(_t.popoverMap=new WeakMap));const ie=Ee?window.cosmos.popoverMap:new WeakMap,zr=e=>{const t=e.getRootNode();return!(t instanceof Document)&&!(t instanceof DocumentFragment)?[]:[...e.querySelectorAll("[data-popover-target]")].flatMap(n=>ie.has(n)?[...ie.get(n)].map(s=>t.querySelector(`[data-popover-id="${s.replace(/"/g,'\\"')}"]`)).flatMap(s=>s?[s,...zr(s)]:[]):[])},Hr=Object.prototype.toString(),qr=(e,...t)=>{if(t.length===0||!e||typeof e!="object"&&typeof e!="function")return!1;if(t.some(o=>e instanceof o))return!0;const r=new Set(t.flatMap(o=>{const i=Object.prototype.toString.call(o.prototype);return i===Hr&&o.prototype!==Object.prototype?[]:i}));if(r.size===0)return!1;let n=e;for(;n;){if(r.has(Object.prototype.toString.call(n)))return!0;n=Object.getPrototypeOf(n)}return!1},Vr=(e,t)=>Object.hasOwn(e,t),Nr='a[href], button, input, textarea, select, details, video[controls], audio[controls], [tabindex]:not([tabindex="-1"])',Ct=(e,{includeActiveEl:t=!1}={})=>{const r=er();let n=r,o=null;const i=Vr(e,"current")?e.current:e;if(!i)return[];let s=Nr;t&&(o=Ae(),o&&(n=o.id||r,o.id=n,s=`${s}, [id="${n}"]`));const c=[...i.querySelectorAll(s)].filter(a=>a instanceof HTMLElement&&(a.id===n||!a.hasAttribute("disabled")&&a.getAttribute("tabindex")!=="-1"&&!a.closest("[inert]")));return(o==null?void 0:o.id)===r&&o.removeAttribute("id"),c},jt=(e,t)=>{const r=e.getBoundingClientRect(),n=t.getBoundingClientRect(),o=r.x-n.x,i=r.y-n.y;return{x:o,y:i}},Xr=()=>{const e=document.createElement("div"),t="50px";let r=0;return e.style.position="absolute",e.style.top=`-${t}`,e.style.width=t,e.style.height=t,e.style.overflow="scroll",document.body.appendChild(e),r=e.offsetWidth-e.clientWidth,document.body.removeChild(e),r},Ur=({x:e,y:t},r)=>e>=r.left&&e<=r.right&&t>=r.top&&t<=r.bottom,he={primary:!1,secondary:!1,auxillary:!1,fourth:!1,fifth:!1};if(Qt){const e=({buttons:t})=>{he.primary=!!(t&1),he.secondary=!!(t&2),he.auxillary=!!(t&4),he.fourth=!!(t&8),he.fifth=!!(t&16)};document.addEventListener("mousedown",e),document.addEventListener("mouseup",e),document.addEventListener("drop",e)}const Yr=e=>e.flatMap(t=>{if(!t)return[];const r=qr(t,EventTarget)?t:t.current;return r?[r]:[]}),Gr=e=>(e=e??document.body,e.offsetWidth),Je=e=>[e.scrollWidth>e.clientWidth,e.scrollHeight>e.clientHeight],tr=(e,t)=>(e.getTestIds=t,e),Te=()=>{const e=Ee?window.cosmos.configurationContext??Ve:Ve;return v.useContext(e)},Kr=(e,t)=>{const r=v.useRef(!1);v.useEffect(()=>{if(r.current)return e();r.current=!0},t)},it=()=>Te().themeMachine.theme;function Oe(e,t,{target:r=document,eventOptions:n,dependencies:o=[]}={}){v.useEffect(()=>{const[i]=Yr([r]);if(i)return i.addEventListener(e,t,n),()=>{i.removeEventListener(e,t,n)}},[e,r,t,n,...o])}const Lo=(e,t=!0,r=[],n=!0)=>{const o=v.useCallback(i=>{if(e!=null&&e.current&&i.key==="Tab"){const s=Ct(e),{0:c,[s.length-1]:a}=s,l=Ae();if((l===e.current||!e.current.contains(l)||e.current.contains(l)&&!s.includes(l))&&n)if(i.preventDefault(),l){const f=Ct(e,{includeActiveEl:!0}),p=f.findIndex(g=>g===l);if(p!==-1)if(i.shiftKey){const g=(p-1+f.length)%f.length;f[g].focus()}else f[(p+1)%f.length].focus();else i.shiftKey?a==null||a.focus():c==null||c.focus()}else i.shiftKey?a==null||a.focus():c==null||c.focus();else i.shiftKey&&l===c?(i.preventDefault(),a==null||a.focus()):!i.shiftKey&&l===a&&(i.preventDefault(),c==null||c.focus())}},r);Oe("keydown",o,{target:t?void 0:e})},_r=(e,t)=>{const r=new Intl.PluralRules(t),n=new Intl.PluralRules(t,{type:"ordinal"});return((o,i=[],s)=>{let c=e[o];if(!c)return`!unknown key: ${o}`;const a=[];if(typeof c=="object"){const l=((s==null?void 0:s.pluralType)==="ordinal"?n:r).select((s==null?void 0:s.count)||0);c=c[l]}return c.split(/\{(\d+)\}/g).forEach((l,u)=>{const f=u%2?i[Number(l)]:l;f!==void 0&&f!==""&&a.push(f)}),a.every(l=>typeof l=="string"||typeof l=="number")?a.join("").trim():a.map((l,u)=>B.jsx(v.Fragment,{children:l},u))})},Qr=()=>{const{translations:e,locale:t}=Te();return v.useMemo(()=>_r(e,t),[e,t])},At=v.createContext({announce:()=>{},announcePolite:()=>{},announceAssertive:()=>{},initialized:!1}),Jr=()=>{const e=Ee?window.cosmos.liveLogContext??At:At;return v.useContext(e)},at=()=>v.useRef(er()).current,Zr=(e,t=!0)=>{const r=at();return v.useEffect(()=>{if(!(!e||!t))return ie.has(e)||ie.set(e,new Set),e.toggleAttribute("data-popover-target",!0),ie.get(e).add(r),()=>{ie.has(e)&&(ie.get(e).delete(r),ie.get(e).size===0&&(ie.delete(e),e.removeAttribute("data-popover-target")))}},[t,e,r]),r},rr=(e,t)=>{const{testIds:r}=Te();return v.useMemo(()=>r?typeof e=="object"&&e?e:t(e):{},[r,e,t])};var Rt=function(t){return t.reduce(function(r,n){var o=n[0],i=n[1];return r[o]=i,r},{})},Pt=typeof window<"u"&&window.document&&window.document.createElement?v.useLayoutEffect:v.useEffect,V="top",G="bottom",K="right",N="left",st="auto",Le=[V,G,K,N],ye="start",Re="end",en="clippingParents",nr="viewport",ke="popper",tn="reference",Dt=Le.reduce(function(e,t){return e.concat([t+"-"+ye,t+"-"+Re])},[]),or=[].concat(Le,[st]).reduce(function(e,t){return e.concat([t,t+"-"+ye,t+"-"+Re])},[]),rn="beforeRead",nn="read",on="afterRead",an="beforeMain",sn="main",cn="afterMain",ln="beforeWrite",un="write",fn="afterWrite",dn=[rn,nn,on,an,sn,cn,ln,un,fn];function re(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function me(e){var t=U(e).Element;return e instanceof t||e instanceof Element}function Y(e){var t=U(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ct(e){if(typeof ShadowRoot>"u")return!1;var t=U(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function pn(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},i=t.elements[r];!Y(i)||!re(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(s){var c=o[s];c===!1?i.removeAttribute(s):i.setAttribute(s,c===!0?"":c)}))})}function vn(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],i=t.attributes[n]||{},s=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),c=s.reduce(function(a,l){return a[l]="",a},{});!Y(o)||!re(o)||(Object.assign(o.style,c),Object.keys(i).forEach(function(a){o.removeAttribute(a)}))})}}const mn={name:"applyStyles",enabled:!0,phase:"write",fn:pn,effect:vn,requires:["computeStyles"]};function te(e){return e.split("-")[0]}var ve=Math.max,Ne=Math.min,we=Math.round;function Ze(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ir(){return!/^((?!chrome|android).)*safari/i.test(Ze())}function $e(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&Y(e)&&(o=e.offsetWidth>0&&we(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&we(n.height)/e.offsetHeight||1);var s=me(e)?U(e):window,c=s.visualViewport,a=!ir()&&r,l=(n.left+(a&&c?c.offsetLeft:0))/o,u=(n.top+(a&&c?c.offsetTop:0))/i,f=n.width/o,p=n.height/i;return{width:f,height:p,top:u,right:l+f,bottom:u+p,left:l,x:l,y:u}}function lt(e){var t=$e(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function ar(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&ct(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ae(e){return U(e).getComputedStyle(e)}function gn(e){return["table","td","th"].indexOf(re(e))>=0}function le(e){return((me(e)?e.ownerDocument:e.document)||window.document).documentElement}function Xe(e){return re(e)==="html"?e:e.assignedSlot||e.parentNode||(ct(e)?e.host:null)||le(e)}function Bt(e){return!Y(e)||ae(e).position==="fixed"?null:e.offsetParent}function hn(e){var t=/firefox/i.test(Ze()),r=/Trident/i.test(Ze());if(r&&Y(e)){var n=ae(e);if(n.position==="fixed")return null}var o=Xe(e);for(ct(o)&&(o=o.host);Y(o)&&["html","body"].indexOf(re(o))<0;){var i=ae(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function We(e){for(var t=U(e),r=Bt(e);r&&gn(r)&&ae(r).position==="static";)r=Bt(r);return r&&(re(r)==="html"||re(r)==="body"&&ae(r).position==="static")?t:r||hn(e)||t}function ut(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Se(e,t,r){return ve(e,Ne(t,r))}function bn(e,t,r){var n=Se(e,t,r);return n>r?r:n}function sr(){return{top:0,right:0,bottom:0,left:0}}function cr(e){return Object.assign({},sr(),e)}function lr(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var yn=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,cr(typeof t!="number"?t:lr(t,Le))};function wn(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,s=r.modifiersData.popperOffsets,c=te(r.placement),a=ut(c),l=[N,K].indexOf(c)>=0,u=l?"height":"width";if(!(!i||!s)){var f=yn(o.padding,r),p=lt(i),g=a==="y"?V:N,h=a==="y"?G:K,b=r.rects.reference[u]+r.rects.reference[a]-s[a]-r.rects.popper[u],m=s[a]-r.rects.reference[a],x=We(i),E=x?a==="y"?x.clientHeight||0:x.clientWidth||0:0,S=b/2-m/2,w=f[g],k=E-p[u]-f[h],$=E/2-p[u]/2+S,C=Se(w,$,k),A=a;r.modifiersData[n]=(t={},t[A]=C,t.centerOffset=C-$,t)}}function $n(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||ar(t.elements.popper,o)&&(t.elements.arrow=o))}const xn={name:"arrow",enabled:!0,phase:"main",fn:wn,effect:$n,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function xe(e){return e.split("-")[1]}var En={top:"auto",right:"auto",bottom:"auto",left:"auto"};function kn(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:we(r*o)/o||0,y:we(n*o)/o||0}}function Mt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,s=e.offsets,c=e.position,a=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,f=e.isFixed,p=s.x,g=p===void 0?0:p,h=s.y,b=h===void 0?0:h,m=typeof u=="function"?u({x:g,y:b}):{x:g,y:b};g=m.x,b=m.y;var x=s.hasOwnProperty("x"),E=s.hasOwnProperty("y"),S=N,w=V,k=window;if(l){var $=We(r),C="clientHeight",A="clientWidth";if($===U(r)&&($=le(r),ae($).position!=="static"&&c==="absolute"&&(C="scrollHeight",A="scrollWidth")),$=$,o===V||(o===N||o===K)&&i===Re){w=G;var O=f&&$===k&&k.visualViewport?k.visualViewport.height:$[C];b-=O-n.height,b*=a?1:-1}if(o===N||(o===V||o===G)&&i===Re){S=K;var y=f&&$===k&&k.visualViewport?k.visualViewport.width:$[A];g-=y-n.width,g*=a?1:-1}}var R=Object.assign({position:c},l&&En),P=u===!0?kn({x:g,y:b},U(r)):{x:g,y:b};if(g=P.x,b=P.y,a){var M;return Object.assign({},R,(M={},M[w]=E?"0":"",M[S]=x?"0":"",M.transform=(k.devicePixelRatio||1)<=1?"translate("+g+"px, "+b+"px)":"translate3d("+g+"px, "+b+"px, 0)",M))}return Object.assign({},R,(t={},t[w]=E?b+"px":"",t[S]=x?g+"px":"",t.transform="",t))}function On(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,s=i===void 0?!0:i,c=r.roundOffsets,a=c===void 0?!0:c,l={placement:te(t.placement),variation:xe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Mt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Mt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Sn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:On,data:{}};var Ie={passive:!0};function Cn(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=o===void 0?!0:o,s=n.resize,c=s===void 0?!0:s,a=U(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",r.update,Ie)}),c&&a.addEventListener("resize",r.update,Ie),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",r.update,Ie)}),c&&a.removeEventListener("resize",r.update,Ie)}}const jn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Cn,data:{}};var An={left:"right",right:"left",bottom:"top",top:"bottom"};function He(e){return e.replace(/left|right|bottom|top/g,function(t){return An[t]})}var Rn={start:"end",end:"start"};function Tt(e){return e.replace(/start|end/g,function(t){return Rn[t]})}function ft(e){var t=U(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function dt(e){return $e(le(e)).left+ft(e).scrollLeft}function Pn(e,t){var r=U(e),n=le(e),o=r.visualViewport,i=n.clientWidth,s=n.clientHeight,c=0,a=0;if(o){i=o.width,s=o.height;var l=ir();(l||!l&&t==="fixed")&&(c=o.offsetLeft,a=o.offsetTop)}return{width:i,height:s,x:c+dt(e),y:a}}function Dn(e){var t,r=le(e),n=ft(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=ve(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=ve(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-n.scrollLeft+dt(e),a=-n.scrollTop;return ae(o||r).direction==="rtl"&&(c+=ve(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:c,y:a}}function pt(e){var t=ae(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function ur(e){return["html","body","#document"].indexOf(re(e))>=0?e.ownerDocument.body:Y(e)&&pt(e)?e:ur(Xe(e))}function Ce(e,t){var r;t===void 0&&(t=[]);var n=ur(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=U(n),s=o?[i].concat(i.visualViewport||[],pt(n)?n:[]):n,c=t.concat(s);return o?c:c.concat(Ce(Xe(s)))}function et(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Bn(e,t){var r=$e(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Lt(e,t,r){return t===nr?et(Pn(e,r)):me(t)?Bn(t,r):et(Dn(le(e)))}function Mn(e){var t=Ce(Xe(e)),r=["absolute","fixed"].indexOf(ae(e).position)>=0,n=r&&Y(e)?We(e):e;return me(n)?t.filter(function(o){return me(o)&&ar(o,n)&&re(o)!=="body"}):[]}function Tn(e,t,r,n){var o=t==="clippingParents"?Mn(e):[].concat(t),i=[].concat(o,[r]),s=i[0],c=i.reduce(function(a,l){var u=Lt(e,l,n);return a.top=ve(u.top,a.top),a.right=Ne(u.right,a.right),a.bottom=Ne(u.bottom,a.bottom),a.left=ve(u.left,a.left),a},Lt(e,s,n));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function fr(e){var t=e.reference,r=e.element,n=e.placement,o=n?te(n):null,i=n?xe(n):null,s=t.x+t.width/2-r.width/2,c=t.y+t.height/2-r.height/2,a;switch(o){case V:a={x:s,y:t.y-r.height};break;case G:a={x:s,y:t.y+t.height};break;case K:a={x:t.x+t.width,y:c};break;case N:a={x:t.x-r.width,y:c};break;default:a={x:t.x,y:t.y}}var l=o?ut(o):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case ye:a[l]=a[l]-(t[u]/2-r[u]/2);break;case Re:a[l]=a[l]+(t[u]/2-r[u]/2);break}}return a}function Pe(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,i=r.strategy,s=i===void 0?e.strategy:i,c=r.boundary,a=c===void 0?en:c,l=r.rootBoundary,u=l===void 0?nr:l,f=r.elementContext,p=f===void 0?ke:f,g=r.altBoundary,h=g===void 0?!1:g,b=r.padding,m=b===void 0?0:b,x=cr(typeof m!="number"?m:lr(m,Le)),E=p===ke?tn:ke,S=e.rects.popper,w=e.elements[h?E:p],k=Tn(me(w)?w:w.contextElement||le(e.elements.popper),a,u,s),$=$e(e.elements.reference),C=fr({reference:$,element:S,placement:o}),A=et(Object.assign({},S,C)),O=p===ke?A:$,y={top:k.top-O.top+x.top,bottom:O.bottom-k.bottom+x.bottom,left:k.left-O.left+x.left,right:O.right-k.right+x.right},R=e.modifiersData.offset;if(p===ke&&R){var P=R[o];Object.keys(y).forEach(function(M){var L=[K,G].indexOf(M)>=0?1:-1,D=[V,G].indexOf(M)>=0?"y":"x";y[M]+=P[D]*L})}return y}function Ln(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,s=r.padding,c=r.flipVariations,a=r.allowedAutoPlacements,l=a===void 0?or:a,u=xe(n),f=u?c?Dt:Dt.filter(function(h){return xe(h)===u}):Le,p=f.filter(function(h){return l.indexOf(h)>=0});p.length===0&&(p=f);var g=p.reduce(function(h,b){return h[b]=Pe(e,{placement:b,boundary:o,rootBoundary:i,padding:s})[te(b)],h},{});return Object.keys(g).sort(function(h,b){return g[h]-g[b]})}function Wn(e){if(te(e)===st)return[];var t=He(e);return[Tt(e),t,Tt(t)]}function Fn(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,s=r.altAxis,c=s===void 0?!0:s,a=r.fallbackPlacements,l=r.padding,u=r.boundary,f=r.rootBoundary,p=r.altBoundary,g=r.flipVariations,h=g===void 0?!0:g,b=r.allowedAutoPlacements,m=t.options.placement,x=te(m),E=x===m,S=a||(E||!h?[He(m)]:Wn(m)),w=[m].concat(S).reduce(function(ne,q){return ne.concat(te(q)===st?Ln(t,{placement:q,boundary:u,rootBoundary:f,padding:l,flipVariations:h,allowedAutoPlacements:b}):q)},[]),k=t.rects.reference,$=t.rects.popper,C=new Map,A=!0,O=w[0],y=0;y<w.length;y++){var R=w[y],P=te(R),M=xe(R)===ye,L=[V,G].indexOf(P)>=0,D=L?"width":"height",j=Pe(t,{placement:R,boundary:u,rootBoundary:f,altBoundary:p,padding:l}),W=L?M?K:N:M?G:V;k[D]>$[D]&&(W=He(W));var X=He(W),_=[];if(i&&_.push(j[P]<=0),c&&_.push(j[W]<=0,j[X]<=0),_.every(function(ne){return ne})){O=R,A=!1;break}C.set(R,_)}if(A)for(var J=h?3:1,Q=function(q){var fe=w.find(function(oe){var Z=C.get(oe);if(Z)return Z.slice(0,q).every(function(T){return T})});if(fe)return O=fe,"break"},se=J;se>0;se--){var ue=Q(se);if(ue==="break")break}t.placement!==O&&(t.modifiersData[n]._skip=!0,t.placement=O,t.reset=!0)}}const In={name:"flip",enabled:!0,phase:"main",fn:Fn,requiresIfExists:["offset"],data:{_skip:!1}};function Wt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ft(e){return[V,K,G,N].some(function(t){return e[t]>=0})}function zn(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,s=Pe(t,{elementContext:"reference"}),c=Pe(t,{altBoundary:!0}),a=Wt(s,n),l=Wt(c,o,i),u=Ft(a),f=Ft(l);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const Hn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:zn};function qn(e,t,r){var n=te(e),o=[N,V].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,s=i[0],c=i[1];return s=s||0,c=(c||0)*o,[N,K].indexOf(n)>=0?{x:c,y:s}:{x:s,y:c}}function Vn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=o===void 0?[0,0]:o,s=or.reduce(function(u,f){return u[f]=qn(f,t.rects,i),u},{}),c=s[t.placement],a=c.x,l=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=s}const Nn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Vn};function Xn(e){var t=e.state,r=e.name;t.modifiersData[r]=fr({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Un={name:"popperOffsets",enabled:!0,phase:"read",fn:Xn,data:{}};function Yn(e){return e==="x"?"y":"x"}function Gn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=o===void 0?!0:o,s=r.altAxis,c=s===void 0?!1:s,a=r.boundary,l=r.rootBoundary,u=r.altBoundary,f=r.padding,p=r.tether,g=p===void 0?!0:p,h=r.tetherOffset,b=h===void 0?0:h,m=Pe(t,{boundary:a,rootBoundary:l,padding:f,altBoundary:u}),x=te(t.placement),E=xe(t.placement),S=!E,w=ut(x),k=Yn(w),$=t.modifiersData.popperOffsets,C=t.rects.reference,A=t.rects.popper,O=typeof b=="function"?b(Object.assign({},t.rects,{placement:t.placement})):b,y=typeof O=="number"?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if($){if(i){var M,L=w==="y"?V:N,D=w==="y"?G:K,j=w==="y"?"height":"width",W=$[w],X=W+m[L],_=W-m[D],J=g?-A[j]/2:0,Q=E===ye?C[j]:A[j],se=E===ye?-A[j]:-C[j],ue=t.elements.arrow,ne=g&&ue?lt(ue):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:sr(),fe=q[L],oe=q[D],Z=Se(0,C[j],ne[j]),T=S?C[j]/2-J-Z-fe-y.mainAxis:Q-Z-fe-y.mainAxis,F=S?-C[j]/2+J+Z+oe+y.mainAxis:se+Z+oe+y.mainAxis,z=t.elements.arrow&&We(t.elements.arrow),ee=z?w==="y"?z.clientTop||0:z.clientLeft||0:0,ge=(M=R==null?void 0:R[w])!=null?M:0,Or=W+T-ge-ee,Sr=W+F-ge,bt=Se(g?Ne(X,Or):X,W,g?ve(_,Sr):_);$[w]=bt,P[w]=bt-W}if(c){var yt,Cr=w==="x"?V:N,jr=w==="x"?G:K,de=$[k],Fe=k==="y"?"height":"width",wt=de+m[Cr],$t=de-m[jr],Ye=[V,N].indexOf(x)!==-1,xt=(yt=R==null?void 0:R[k])!=null?yt:0,Et=Ye?wt:de-C[Fe]-A[Fe]-xt+y.altAxis,kt=Ye?de+C[Fe]+A[Fe]-xt-y.altAxis:$t,Ot=g&&Ye?bn(Et,de,kt):Se(g?Et:wt,de,g?kt:$t);$[k]=Ot,P[k]=Ot-de}t.modifiersData[n]=P}}const Kn={name:"preventOverflow",enabled:!0,phase:"main",fn:Gn,requiresIfExists:["offset"]};function _n(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Qn(e){return e===U(e)||!Y(e)?ft(e):_n(e)}function Jn(e){var t=e.getBoundingClientRect(),r=we(t.width)/e.offsetWidth||1,n=we(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Zn(e,t,r){r===void 0&&(r=!1);var n=Y(t),o=Y(t)&&Jn(t),i=le(t),s=$e(e,o,r),c={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!r)&&((re(t)!=="body"||pt(i))&&(c=Qn(t)),Y(t)?(a=$e(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=dt(i))),{x:s.left+c.scrollLeft-a.x,y:s.top+c.scrollTop-a.y,width:s.width,height:s.height}}function eo(e){var t=new Map,r=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function o(i){r.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(c){if(!r.has(c)){var a=t.get(c);a&&o(a)}}),n.push(i)}return e.forEach(function(i){r.has(i.name)||o(i)}),n}function to(e){var t=eo(e);return dn.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function ro(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function no(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var It={placement:"bottom",modifiers:[],strategy:"absolute"};function zt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function oo(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,i=o===void 0?It:o;return function(c,a,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},It,i),modifiersData:{},elements:{reference:c,popper:a},attributes:{},styles:{}},f=[],p=!1,g={state:u,setOptions:function(x){var E=typeof x=="function"?x(u.options):x;b(),u.options=Object.assign({},i,u.options,E),u.scrollParents={reference:me(c)?Ce(c):c.contextElement?Ce(c.contextElement):[],popper:Ce(a)};var S=to(no([].concat(n,u.options.modifiers)));return u.orderedModifiers=S.filter(function(w){return w.enabled}),h(),g.update()},forceUpdate:function(){if(!p){var x=u.elements,E=x.reference,S=x.popper;if(zt(E,S)){u.rects={reference:Zn(E,We(S),u.options.strategy==="fixed"),popper:lt(S)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(y){return u.modifiersData[y.name]=Object.assign({},y.data)});for(var w=0;w<u.orderedModifiers.length;w++){if(u.reset===!0){u.reset=!1,w=-1;continue}var k=u.orderedModifiers[w],$=k.fn,C=k.options,A=C===void 0?{}:C,O=k.name;typeof $=="function"&&(u=$({state:u,options:A,name:O,instance:g})||u)}}}},update:ro(function(){return new Promise(function(m){g.forceUpdate(),m(u)})}),destroy:function(){b(),p=!0}};if(!zt(c,a))return g;g.setOptions(l).then(function(m){!p&&l.onFirstUpdate&&l.onFirstUpdate(m)});function h(){u.orderedModifiers.forEach(function(m){var x=m.name,E=m.options,S=E===void 0?{}:E,w=m.effect;if(typeof w=="function"){var k=w({state:u,name:x,instance:g,options:S}),$=function(){};f.push(k||$)}})}function b(){f.forEach(function(m){return m()}),f=[]}return g}}var io=[jn,Un,Sn,mn,Nn,In,Kn,xn,Hn],ao=oo({defaultModifiers:io}),Ke,Ht;function so(){if(Ht)return Ke;Ht=1;var e=typeof Element<"u",t=typeof Map=="function",r=typeof Set=="function",n=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(i,s){if(i===s)return!0;if(i&&s&&typeof i=="object"&&typeof s=="object"){if(i.constructor!==s.constructor)return!1;var c,a,l;if(Array.isArray(i)){if(c=i.length,c!=s.length)return!1;for(a=c;a--!==0;)if(!o(i[a],s[a]))return!1;return!0}var u;if(t&&i instanceof Map&&s instanceof Map){if(i.size!==s.size)return!1;for(u=i.entries();!(a=u.next()).done;)if(!s.has(a.value[0]))return!1;for(u=i.entries();!(a=u.next()).done;)if(!o(a.value[1],s.get(a.value[0])))return!1;return!0}if(r&&i instanceof Set&&s instanceof Set){if(i.size!==s.size)return!1;for(u=i.entries();!(a=u.next()).done;)if(!s.has(a.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(s)){if(c=i.length,c!=s.length)return!1;for(a=c;a--!==0;)if(i[a]!==s[a])return!1;return!0}if(i.constructor===RegExp)return i.source===s.source&&i.flags===s.flags;if(i.valueOf!==Object.prototype.valueOf&&typeof i.valueOf=="function"&&typeof s.valueOf=="function")return i.valueOf()===s.valueOf();if(i.toString!==Object.prototype.toString&&typeof i.toString=="function"&&typeof s.toString=="function")return i.toString()===s.toString();if(l=Object.keys(i),c=l.length,c!==Object.keys(s).length)return!1;for(a=c;a--!==0;)if(!Object.prototype.hasOwnProperty.call(s,l[a]))return!1;if(e&&i instanceof Element)return!1;for(a=c;a--!==0;)if(!((l[a]==="_owner"||l[a]==="__v"||l[a]==="__o")&&i.$$typeof)&&!o(i[l[a]],s[l[a]]))return!1;return!0}return i!==i&&s!==s}return Ke=function(s,c){try{return o(s,c)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Ke}var co=so();const lo=Ar(co);var uo=[],fo=function(t,r,n){n===void 0&&(n={});var o=v.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||uo},s=v.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),c=s[0],a=s[1],l=v.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(g){var h=g.state,b=Object.keys(h.elements);tt.flushSync(function(){a({styles:Rt(b.map(function(m){return[m,h.styles[m]||{}]})),attributes:Rt(b.map(function(m){return[m,h.attributes[m]]}))})})},requires:["computeStyles"]}},[]),u=v.useMemo(function(){var p={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[l,{name:"applyStyles",enabled:!1}])};return lo(o.current,p)?o.current||p:(o.current=p,p)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),f=v.useRef();return Pt(function(){f.current&&f.current.setOptions(u)},[u]),Pt(function(){if(!(t==null||r==null)){var p=n.createPopper||ao,g=p(t,r,u);return f.current=g,function(){g.destroy(),f.current=null}}},[t,r,n.createPopper]),{state:f.current?f.current.state:null,styles:c.styles,attributes:c.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}};const po=v.createContext({checkActive:()=>!0,setActive:()=>{},popovers:{}}),be=I.div`
  background-color: inherit;

  ::before {
    content: '';
    display: block;
    position: absolute;
    inset: -0.25rem;
    background-color: inherit;
    transform: rotate(45deg);
  }
`;be.defaultProps=H;const vt=I.div(({theme:{base:{"border-radius":e,"z-index":{popover:t,backdrop:r},shadow:{high:n},palette:o},components:{card:{background:i,"foreground-color":s},"form-control":{"border-radius":c}}},portal:a,offset:l})=>{const{backgroundColor:u}=Rr(i,s);return d`
      /*
        Margin should never be used with Popper.
        https://popper.js.org/docs/v2/migration-guide/#4-remove-all-css-margins
      */
      margin: 0 !important;
      z-index: ${a?r-1:t};
      background: ${u};
      border-radius: calc(${c} * ${e});
      box-shadow: ${n};
      color: ${o["foreground-color"]};

      @media (forced-colors: active) {
        border: 0.0625rem solid transparent;
      }

      &[data-popper-reference-hidden='true'] {
        visibility: hidden;
        pointer-events: none;
      }

      &[data-popper-placement^='top'] {
        > ${be} {
          top: calc(100%);

          ::before {
            border-bottom-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${l}px;
          bottom: -${l}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='bottom'] {
        > ${be} {
          bottom: calc(100%);

          ::before {
            border-top-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${l}px;
          top: -${l}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='right'] {
        > ${be} {
          right: calc(100%);

          ::before {
            border-bottom-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${l}px;
          left: -${l}px;
          top: 0;
          bottom: 0;
        }
      }

      &[data-popper-placement^='left'] {
        > ${be} {
          left: calc(100%);

          ::before {
            border-top-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${l}px;
          right: -${l}px;
          top: 0;
          bottom: 0;
        }
      }
    `});vt.defaultProps=H;const qt=Qt?Xr():0,vo=Object.freeze({name:"placeAndContain",enabled:!0,phase:"beforeWrite",requires:["computeStyles","offset"],fn:({state:e})=>{var O,y,R,P,M,L;const[t,r]=e.placement.split("-"),n={top:0,bottom:0,right:0,left:0},o=(y=(O=e.orderedModifiers.find(({name:D})=>D==="preventOverflow"))==null?void 0:O.options)==null?void 0:y.padding;typeof o=="number"?(n.top=o,n.bottom=o,n.right=o,n.left=o):o&&(n.top=o.top??n.top,n.bottom=o.bottom??n.bottom,n.right=o.right??n.right,n.left=o.left??n.left);const i=document.documentElement.clientWidth,s=document.documentElement.clientHeight,c=e.rects.reference,a=c.x,l=a+c.width,u=c.y,f=u+c.height,p=(a+l)/2,g=(u+f)/2,h=p<i/2,b=g<s/2,m=((P=(R=e.modifiersData.offset)==null?void 0:R[e.placement])==null?void 0:P.x)??0,x=((L=(M=e.modifiersData.offset)==null?void 0:M[e.placement])==null?void 0:L.y)??0;let E=null,S=null;const k=[...e.elements.popper.children].flatMap(D=>{const j=D.querySelectorAll("[data-popover-scroll-el]");return j.length>0?[...j]:D}).reduce((D,j)=>j===e.elements.arrow?D:Je(j)[0]?D+j.scrollHeight+qt:D+j.scrollHeight,0),$=Math.max(e.elements.popper.scrollHeight,k),C=Math.max(e.elements.popper.scrollWidth,...Array.from(e.elements.popper.children).map(D=>D===e.elements.arrow?-1/0:Je(D)[1]?D.scrollWidth+qt:D.scrollWidth));let A=t;t==="bottom"?(S=s-f-x-n.bottom,f+x+$+n.bottom>s&&(A=b?"bottom":"top")):t==="top"?(S=u+x-n.top,u+x-$+n.top<0&&(A=b?"bottom":"top")):t==="left"?(E=a+m-n.left,a+m-C+n.left<0&&(A=h?"right":"left")):t==="right"&&(E=i-l-m-n.right,l+m+C+n.right>i&&(A=h?"right":"left")),(A==="left"||A==="right")&&(S=s-n.top-n.bottom),e.elements.popper.style.maxHeight=`${S}px`,e.elements.popper.style.maxWidth=E!==null?`${E}px`:"",A=`${A}${r?`-${r}`:""}`,e.placement!==A&&(e.placement=A,e.reset=!0)}}),mo={none:0,short:500,long:1e3},go=v.forwardRef(function({show:t=!0,portal:r=!0,target:n,placement:o="bottom",strategy:i="fixed",style:s,modifiers:c=[],arrow:a=!1,groupId:l,showDelay:u="none",hideDelay:f="none",hideOnTargetHidden:p=!1,children:g,onHide:h,onShow:b,...m},x){const{portalTarget:E}=Te(),{checkActive:S,setActive:w,popovers:k}=v.useContext(po),[$,C]=rt(),A=Be(x,C),O=v.useRef(null),y=v.useRef(),R=v.useRef(null),[P,M]=v.useState(t),L=v.useRef(),D=at(),j=n instanceof Element?n:n==null?void 0:n.contextElement,W=typeof r=="boolean"?E:r,X=v.useMemo(()=>{var F;const T=!!((F=c.slice().reverse().find(z=>z.name==="flip"&&z.enabled!==void 0))!=null&&F.enabled);return[{name:"computeStyles",options:{gpuAcceleration:!1}},{name:"offset",options:{offset:[0,a?5.5:2]}},{name:"hide",enabled:p},{name:"arrow",enabled:a,options:{element:O.current,padding:7}},{name:"preventOverflow",options:{tether:!c.find(z=>z.name==="sameWidth"||"fitToContent"),padding:16}},{...vo,enabled:!T},...c]},[a,p,c]),_=v.useMemo(()=>{var F,z;const T=[...X].reverse().find(ee=>ee.name==="offset"&&ee.enabled!==!1);return Array.isArray((F=T==null?void 0:T.options)==null?void 0:F.offset)?((z=T==null?void 0:T.options)==null?void 0:z.offset[1])??0:0},[X]),{styles:J,attributes:Q,forceUpdate:se}=fo(n,$,{placement:o,strategy:i,modifiers:X});se&&(y.current=se);const[ue]=v.useState(()=>new AbortController),[ne]=v.useState(()=>new WeakSet),[q]=v.useState(()=>new ResizeObserver(T=>{var z;let F=!1;for(const{target:ee}of T)ne.has(ee)?F||(F=!0,ue.signal.aborted||(z=y.current)==null||z.call(y)):ne.add(ee)}));v.useEffect(()=>()=>{ue.abort(),q.disconnect()},[]),v.useEffect(()=>{if($)return q.observe($),()=>{q.unobserve($)}},[$]),v.useEffect(()=>{if(j)return q.observe(j),()=>{q.unobserve(j)}},[j]),v.useLayoutEffect(()=>{j?R.current=jt(j,document.documentElement):R.current=null},[j]),v.useEffect(()=>{if(!P||!j)return;const T=new AbortController;let F;T.signal.addEventListener("aborted",()=>{cancelAnimationFrame(F)});const z=()=>{var ee;if(R.current){const ge=jt(j,document.documentElement);(R.current.x!==ge.x||R.current.y!==ge.y)&&(R.current=ge,(ee=y.current)==null||ee.call(y))}T.signal.aborted||(F=requestAnimationFrame(z))};return F=requestAnimationFrame(z),()=>{T.abort()}},[P,j]),v.useEffect(()=>{var T;l&&t&&w(D,l),Ee?(L.current&&clearTimeout(L.current),L.current=window.setTimeout(()=>{var F;M(t),t&&((F=y.current)==null||F.call(y))},mo[t?u:f])):(M(t),t&&((T=y.current)==null||T.call(y)))},[t]),v.useEffect(()=>()=>clearTimeout(L.current),[]),Kr(()=>{P?b==null||b():h==null||h()},[P]),v.useEffect(()=>{l&&k[l]&&k[l]!==D&&M(!1)},[l?k[l]:void 0]);const fe=Zr(j,!!r),oe=v.useCallback(T=>{if(j&&r){const F=new Event(T.type.startsWith("popover:")?T.type:`popover:${T.type}`,{bubbles:!0,cancelable:!0});j.dispatchEvent(F)}},[j,r]);Oe("focusout",oe,{target:A}),Oe("popover:focusout",oe,{target:A}),Oe("focusin",oe,{target:A}),Oe("popover:focusin",oe,{target:A});const Z=B.jsxs(vt,{...m,"data-popover-id":fe,portal:!!(r&&W),offset:_,ref:A,style:{...s,...J.popper},...Q.popper,children:[a&&B.jsx(be,{ref:O,style:{...J.arrow}}),g]});return!n||!P||l&&!S(D,l)?null:r&&W?tt.createPortal(Z,W):Z}),ho=({children:e,theme:t})=>{const r=Ee?window.cosmos.configurationContext??Ve:Ve,n=v.useContext(r),o=new Pr({theme:t,parent:n.themeMachine});return B.jsx(r.Provider,{value:{...n,themeMachine:o},children:B.jsx(Dr,{theme:o.theme,children:e})})},dr=Me("tooltip",[]),pr=I.div(({theme:e})=>{const t=nt(e.base["font-size"],e.base["font-scale"]);return d`
    background-color: ${e.components.tooltip["background-color"]};
    color: ${e.components.tooltip["foreground-color"]};
    font-size: ${t.xxs};
    max-width: 40ch;
    padding: ${e.base.spacing};
    white-space: pre-line;
    word-break: break-word;
  `});pr.defaultProps=H;const bo=v.forwardRef(function({testId:t,children:r,target:n,ignoredElements:o=[],showDelay:i="short",hideDelay:s="long",placement:c="top",describeTarget:a=!0,smart:l,groupId:u="tooltip",...f},p){const g=at(),[h,b]=v.useState(!1),[m,x]=v.useState(!1),E=Be(p),S=v.useRef(null),w=rr(t,dr),k=typeof r=="string"||Array.isArray(r)&&r.every(O=>typeof O=="string"),$=v.useCallback(({target:O})=>{S.current=O,!(O===E.current||O===n)&&b(!1)},[n]);v.useEffect(()=>{if(!n)return;const O=()=>{const D=j=>{if(Je(j).some(Boolean)&&!["absolute","fixed"].includes(window.getComputedStyle(j).position))return!0;for(const W of j.children)if(D(W))return!0;return!1};b(l?D(n):!0)},y=()=>{O()},R=()=>{(!S.current||S.current!==E.current)&&b(!1),S.current=null},P=()=>{o.some(D=>D==null?void 0:D.matches(":hover"))||he.primary||O()},M=()=>{Ae()!==n&&b(!1)},L=({key:D})=>{D==="Escape"&&h&&(x(!0),b(!1))};return document.addEventListener("keydown",L),document.addEventListener("mousedown",$),n.addEventListener("focusin",y),n.addEventListener("focusout",R),n.addEventListener("mouseenter",P),n.addEventListener("mouseleave",M),()=>{document.removeEventListener("keydown",L),document.removeEventListener("mousedown",$),n.removeEventListener("focusin",y),n.removeEventListener("focusout",R),n.removeEventListener("mouseenter",P),n.removeEventListener("mouseleave",M)}},[n,$,l,h]),v.useEffect(()=>{if(n&&a&&h){const O=n.getAttribute("aria-describedby");n.setAttribute("aria-describedby",O?`${O} ${g}`:g)}else if(n){const O=n.getAttribute("aria-describedby");if(O)if(O===g)n.removeAttribute("aria-describedby");else{const y=O.replace(new RegExp(`(?:^|\\s+)${g}`),"");n.setAttribute("aria-describedby",y)}}},[a,n,h]),v.useEffect(()=>{!h&&m&&x(!1)},[h,m]);const C=it(),A={base:{palette:{"primary-background":C.components.tooltip["background-color"],"foreground-color":C.components.tooltip["foreground-color"],interactive:ze(C.base.palette.interactive,C.components.tooltip["background-color"])}}};return B.jsx(ho,{theme:A,children:B.jsx(go,{"data-testid":w.root,id:g,groupId:u,...f,show:h,showDelay:m?"none":i,hideDelay:m?"none":s,onMouseOver:()=>{b(!0)},onMouseOut:()=>{b(!1)},strategy:"fixed",as:pr,role:k?"tooltip":"dialog",target:n,arrow:!0,placement:c,onMouseDown:$,hideOnTargetHidden:!0,ref:E,children:r})})}),yo=tr(bo,dr),vr=I.span(e=>{const{variant:t,status:r,theme:{base:{"font-size":n,"font-scale":o,"font-family":i,palette:{"foreground-color":s,urgent:c,warn:a,success:l},transparency:{"transparent-2":u}},components:{text:f}}}=e;let p;r&&(p={error:c,warning:a,success:l}[r]),t==="secondary"&&(p=pe(()=>Jt(p??s,u)));const g=nt(n,o);return d`
    font-size: ${g[f[t]["font-size"]]};
    font-weight: ${f[t]["font-weight"]};
    font-family: ${f[t]["font-family"]||i};
    color: ${p};
  `});vr.defaultProps=H;const wo=v.forwardRef(function({variant:t="primary",as:r,...n},o){return!r&&/h\d/i.test(t)&&(r=t),B.jsx(vr,{ref:o,variant:t,as:r,...n})}),qe=e=>["between","around","evenly"].includes(e)?`space-${e}`:["start","end"].includes(e)?`flex-${e}`:e,$o=e=>{if(!Array.isArray(e))return[e,e,e,e];switch(e.length){case 1:return[e[0],e[0],e[0],e[0]];case 2:return[e[0],e[1],e[0],e[1]];case 3:return[e[0],e[1],e[2],e[1]];case 4:return e;default:return[void 0,void 0,void 0,void 0]}},Vt=(e,t)=>{if(!e)return"";if(e===!0)return d`
      display: flex;
    `;const r=$o(e.pad);if(e&&typeof e=="object"){const n=!e.direction||e.direction.includes("row"),o=e.direction&&e.direction.includes("reverse");return d`
      display: ${e.inline?"inline-flex":"flex"};

      ${r[0]!==void 0&&d`
        padding-block-start: calc(${r[0]} * ${t});
      `}
      ${r[1]!==void 0&&d`
        padding-inline-end: calc(${r[1]} * ${t});
      `}

        ${r[2]!==void 0&&d`
        padding-block-end: calc(${r[2]} * ${t});
      `}

        ${r[3]!==void 0&&d`
        padding-inline-start: calc(${r[3]} * ${t});
      `}

      ${e.direction&&d`
        flex-direction: ${e.direction};
      `}

      ${e.justify&&d`
        justify-content: ${qe(e.justify)};
      `}

      ${e.wrap&&d`
        flex-wrap: ${e.wrap};
      `}

      ${e.alignItems&&d`
        align-items: ${qe(e.alignItems)};
      `}

      ${e.alignContent&&d`
        align-content: ${qe(e.alignContent)};
      `}

      ${e.itemGap&&d`
          > * {
            margin-${n?"inline-start":"block-start"}: calc(${e.itemGap} * ${i=>i.theme.base.spacing});
            ${o?":last-child":":first-child"} {
              margin-${n?"inline-start":"block-start"}: 0;
            }
          }
        `}

      ${e.gap!==void 0&&d`
        gap: calc(${e.gap} * ${i=>i.theme.base.spacing});
      `}

      ${e.colGap!==void 0&&d`
        column-gap: calc(${e.colGap} * ${i=>i.theme.base.spacing});
      `}

      ${e.rowGap!==void 0&&d`
        row-gap: calc(${e.rowGap} * ${i=>i.theme.base.spacing});
      `}
    `}},Nt=e=>d`
    ${e&&d`
      max-width: 100%;
      min-width: 0;

      ${e.grow!==void 0&&d`
        flex-grow: ${e.grow};
      `}

      ${e.shrink!==void 0&&d`
        flex-shrink: ${e.shrink};
      `}

      ${e.alignSelf&&d`
        align-self: ${qe(e.alignSelf)};
      `}

      ${e.basis&&d`
        flex-basis: ${e.basis};
      `}
    `}
  `,xo=["xs","sm","md","lg","xl"],mr=I.div(({container:e,item:t,theme:{base:{breakpoints:r,spacing:n}},xs:o,sm:i,md:s,lg:c,xl:a})=>{const l={xs:o,sm:i,md:s,lg:c,xl:a};return d`
      ${Vt(e,n)}
      ${Nt(t)}

    ${xo.map(u=>{var f,p;return l[u]&&d`
            @media screen and (min-width: ${r[u]}) {
              ${Vt((f=l[u])==null?void 0:f.container,n)}
              ${Nt((p=l[u])==null?void 0:p.item)}
            }
          `})}
    `});mr.defaultProps=H;const mt=v.forwardRef(function(t,r){return B.jsx(mr,{...t,ref:r})}),Xt=Me("backdrop",[]),Eo={slow:2,medium:1,fast:.5,none:0},gt=I(mt)(e=>{const{theme:{base:t}}=e,{opacity:r,alpha:n,variant:o,position:i}=e,s=`max(calc(${Eo[e.transitionSpeed]} * ${t.animation.speed}), 1ms)`;return d`
      position: ${i};
      z-index: ${i==="fixed"?t["z-index"].backdrop:t["z-index"].popover+1};
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: inherit;
      opacity: ${r};
      transition-property: opacity;
      transition-timing-function: ${e.theme.base.animation.timing.ease};
      /* stylelint-disable declaration-block-no-duplicate-properties */
      transition-duration: 1ms;
      transition-duration: ${s};
      /* stylelint-enable declaration-block-no-duplicate-properties */

      ${o==="dark"&&d`
        background: rgba(0, 0, 0, ${n});
      `}

      ${o==="light"&&d`
        background: rgba(255, 255, 255, ${n});
      `}
    `});gt.defaultProps=H;const ko=tr(v.forwardRef(function({testId:t,children:r,container:n,open:o=!1,variant:i="dark",transitionSpeed:s="medium",alpha:c=.6,position:a="fixed",onBeforeTransitionIn:l,onAfterTransitionIn:u,onBeforeTransitionOut:f,onAfterTransitionOut:p,...g},h){const b=rr(t,Xt),[m,x]=v.useState("closed"),[E,S]=rt(),w=Be(h,S),k=v.useCallback($=>{if($.propertyName!=="opacity"||$.target!==$.currentTarget)return;let C;m==="closing"?(C="closed",p==null||p()):(C="open",u==null||u()),x(C)},[m,p,u]);return v.useEffect(()=>{o?(m==="closed"||m==="closing")&&(l==null||l(),Gr(),x("opening")):(m==="open"||m==="opening")&&(f==null||f(),x("closing"))},[o]),v.useEffect(()=>{if(!w.current)return;const $=window.getComputedStyle(w.current).opacity;m==="closing"&&$==="0"&&(p==null||p(),x("closed")),m==="opening"&&$==="1"&&(u==null||u(),x("open"))},[m]),!o&&m==="closed"?null:B.jsx(Br,{portalTarget:E??void 0,children:B.jsx(gt,{"data-testid":b.root,container:{justify:"center",alignItems:"center",...n},transitionSpeed:s,opacity:m==="opening"||m==="open"?1:0,alpha:c,variant:i,position:a,onTransitionEnd:k,ref:w,...g,children:r})})}),Xt),gr=I(ko)(()=>d`
    border-radius: inherit;
  `);gr.defaultProps=H;const Ue=I.div(({theme:e})=>d`
    &:focus-visible {
      box-shadow: ${e.components.button["focus-shadow"]};
      outline: none;
      border-radius: calc(9999 * ${e.base["border-radius"]});
    }
  `);Ue.defaultProps=H;const ht=I(Ue)(({theme:e,placement:t,determinate:r})=>{const n=t==="inline"?"1em":"2rem",o=ot(e.base.palette["foreground-color"])>.5?e.base.colors.gray["extra-dark"]:e.base.colors.gray.light;return d`
    position: relative;

    svg {
      display: block;
      width: ${n};
      height: ${n};

      circle {
        fill: transparent;
        stroke: ${o};
        stroke-width: 2;
        r: 45%;
        cx: 50%;
        cy: 50%;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;

        &:nth-child(2) {
          stroke: ${e.components.progress["progress-color"]};
          transition: stroke-dashoffset calc(0.5 * ${e.base.animation.speed})
            ${e.base.animation.timing.ease};

          ${!r&&d`
            @keyframes LoadingRing {
              0% {
                transform: rotate(0deg);
              }

              100% {
                transform: rotate(360deg);
              }
            }
            animation: LoadingRing calc(4 * ${e.base.animation.speed}) linear infinite;
          `}
        }
      }
    }

    ${t==="inline"&&d`
      display: inline-flex;
      vertical-align: top;
    `}
  `});ht.defaultProps=H;const hr=I(Ue)(({theme:e,placement:t,determinate:r})=>{const n=ot(e.base.palette["foreground-color"])>.5?e.base.colors.gray["extra-dark"]:e.base.colors.gray.light;return d`
    background-color: ${n};
    border-radius: ${e.base["border-radius"]};
    ${t==="local"?d`
          width: calc(100% - 4 * ${e.base.spacing});
        `:d`
          width: 100%;
        `}
    height: 0.375rem;
    min-width: 2rem;
    max-width: min(calc(100vw - 4 * ${e.base.spacing}), ${e.base["content-width"].lg});
    overflow: hidden;

    ::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      left: 0;
      border-radius: ${e.base["border-radius"]};
      background-color: ${e.components.progress["progress-color"]};
      ${r&&d`
        transform: translateX(var(--progress, 0));
        transform-origin: 0 50%;
        transition: transform calc(0.5 * ${e.base.animation.speed})
          ${e.base.animation.timing.ease};
      `}

      ${!r&&d`
        @keyframes LoadingBar {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(200%);
          }
        }
        animation: LoadingBar calc(8 * ${e.base.animation.speed}) linear infinite;
        width: 50%;
      `}
    }

    ${t==="inline"&&d`
      width: 3rem;
      display: inline-block;
      position: relative;
    `}
  `});hr.defaultProps=H;const br=I(Ue)(({theme:e,placement:t})=>d`
    line-height: 1;
    display: ${t==="inline"?"inline-flex":"block"};

    @keyframes LoadingEllipsis {
      0% {
        transform: scale(0);
        opacity: 0;
      }

      50% {
        transform: scale(1);
        opacity: 1;
      }

      100% {
        transform: scale(0);
        opacity: 0;
      }
    }

    > span {
      display: flex;
      justify-content: center;

      ${t==="inline"&&d`
        display: inline-flex;
      `}
    }

    > span span {
      margin: 0 0.3125rem;
      background: ${e.components.progress["progress-color"]};
      border-radius: 50%;
      animation: LoadingEllipsis calc(4 * ${e.base.animation.speed}) infinite;

      ${t==="global"&&d`
        width: 1.25rem;
        height: 1.25rem;
      `}

      ${(t==="local"||t==="block")&&d`
        width: 0.625rem;
        height: 0.625rem;
      `}

      ${t==="inline"&&d`
        width: 0.1875rem;
        height: 0.1875rem;
        margin: 0 0.1875rem;
        animation-duration: calc(4 * ${e.base.animation.speed});
      `}

      &:nth-child(2) {
        animation-delay: 0.1667s;
      }

      &:nth-child(3) {
        animation-delay: ${.1667*2}s;
      }
    }
  `);br.defaultProps=H;const yr=I.span(({theme:e})=>{const t=pe(()=>Jt(je(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),r=nt(e.base["font-size"],e.base["font-scale"]);return d`
    font-size: ${r[e.components.label["font-size"]]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    color: ${t};
  `});yr.defaultProps=H;const wr=I(mt)(({theme:e,placement:t})=>d`
    ${t!=="inline"&&d`
      width: 100%;
    `}

    ${t==="block"&&d`
      margin-block: calc(2 * ${e.base.spacing});
    `}
  `);wr.defaultProps=H;const Oo=v.forwardRef(function({value:t,minValue:r=0,maxValue:n=100,message:o,placement:i,style:s,...c},a){let l=t;return typeof t=="number"&&(t>n||r>n?l=0:t<r?l=100:l=(1-(t-r)/(n-r))*-100),B.jsx(hr,{ref:a,role:"progressbar","aria-valuemin":r,"aria-valuemax":n,"aria-valuenow":t,placement:i,determinate:typeof t=="number",style:{...s,"--progress":l?`${l}%`:""},...c})}),So=v.forwardRef(function({message:t,placement:r,...n},o){return B.jsx(br,{ref:o,role:"progressbar",placement:r,...n,children:B.jsxs("span",{children:[B.jsx("span",{}),B.jsx("span",{}),B.jsx("span",{})]})})}),Co=v.forwardRef(function({value:t,minValue:r=0,maxValue:n=100,placement:o,...i},s){let c;const a=18*Math.PI;return typeof t!="number"?c=(1-33/100)*a:t>n||r>n?c=0:t<r?c=a:c=(1-(t-r)/(n-r))*a,B.jsx(ht,{ref:s,role:"progressbar","aria-valuemin":r,"aria-valuemax":n,"aria-valuenow":t,placement:o,determinate:typeof t=="number",...i,children:B.jsxs("svg",{viewBox:"0 0 20 20",children:[B.jsx("circle",{}),B.jsx("circle",{strokeDasharray:a,style:{strokeDashoffset:c}})]})})}),jo={ring:Co,bar:Oo,ellipsis:So},Ao=100,Ut=1e3,Ro=v.forwardRef(function({variant:t="ring",placement:r="global",visible:n=!0,focusOnVisible:o=!1,delay:i=!1,onTransitionStartIn:s,onTransitionEndIn:c,onTransitionStartOut:a,onTransitionEndOut:l,value:u,message:f,liveConfig:p,...g},h){const b=Qr(),{portalTarget:m}=Te(),{announcePolite:x}=Jr(),E=it(),S=Be(h),[w,k]=v.useState(i?!1:n),[$,C]=v.useState(!w),A=v.useRef(),O=v.useRef(),y=v.useRef(),R=v.useRef(),P=r==="global"||r==="local",M=typeof u=="number"?`${u}%`:void 0,L=f&&M?`${f} - ${M}`:f||M,D=()=>{k(!0),C(!1)},j=()=>{k(!1),P||C(!0)};if(v.useEffect(()=>{if(n)A.current=Date.now(),i?y.current=window.setTimeout(D,Ao):D();else if(y.current!==void 0)if(clearTimeout(y.current),O.current!==void 0){const Q=Date.now()-O.current;Q>=Ut?j():R.current=window.setTimeout(j,Ut-Q)}else j();else j()},[n]),v.useEffect(()=>{p!=null&&p.contextualLabel&&w&&x({message:`${p.contextualLabel}, ${L??b("loading")}`,type:"status"})},[w]),v.useEffect(()=>{var Q;!$&&w&&(O.current=Date.now(),o&&((Q=S.current)==null||Q.focus()))},[$]),$)return null;const W=jo[t];let X=B.jsx(W,{"aria-label":typeof u!="number"&&L?L:b("loading"),as:r==="inline"?"span":void 0,...g,placement:r,value:u,"aria-valuetext":typeof u=="number"?L:void 0,ref:S,tabIndex:-1});r!=="inline"&&(X=B.jsxs(mt,{container:{direction:"column",alignItems:"center",gap:.5},as:wr,placement:r,children:[X,f&&B.jsx(wo,{as:yr,variant:"secondary","aria-hidden":!0,children:f})]}));const _=ot(E.base.palette["foreground-color"])>.5?"dark":"light",J=P?B.jsx(gr,{open:w,container:{direction:"column"},position:r==="global"?"fixed":"absolute",variant:_,alpha:.8,onBeforeTransitionIn:s,onAfterTransitionIn:c,onBeforeTransitionOut:a,onAfterTransitionOut:()=>{C(!0),l==null||l()},children:X}):X;return r==="global"&&m?tt.createPortal(J,m):J}),ce=new Map([]),Yt=(...e)=>{e.forEach(({set:t,name:r,...n})=>{const o=t??"budicon";ce.has(o)?ce.get(o).has(r)||ce.get(o).set(r,n):ce.set(o,new Map([[r,n]]))})},De=I.svg(({theme:e,size:t="s"})=>{const{components:{icon:{size:{s:r,m:n,l:o}}}}=e;return d`
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;
    flex-shrink: 0;
    /* stylelint-disable unit-allowed-list */
    min-width: 14px;
    min-height: 14px;
    /* stylelint-enable unit-allowed-list */

    @media (forced-colors: active) {
      fill: CanvasText;
    }

    ${t==="s"&&d`
      width: ${r};
      height: ${r};
    `}

    ${t==="m"&&d`
      width: ${n};
      height: ${n};
    `}

    ${t==="l"&&d`
      width: ${o};
      height: ${o};
    `}

    ${t==="font-size"&&d`
      width: 1em;
      height: 1em;
    `}
  `});De.defaultProps=H;const $r=I.div(({theme:e,background:t,foreground:r,size:n="m",shape:o="square"})=>{const i=je(t),{base:{"border-radius":s},components:{icon:{size:{s:c,m:a,l},"border-radius-multiplier":u}}}=e;return d`
    color: ${r??i};
    background-color: ${t};
    display: flex;
    justify-content: center;
    align-items: center;

    ${n==="s"&&d`
      width: ${c};
      height: ${c};
    `}

    ${n==="m"&&d`
      width: ${a};
      height: ${a};
    `}

    ${n==="l"&&d`
      width: ${l};
      height: ${l};
    `}

    ${n==="font-size"&&d`
      width: 1em;
      height: 1em;
    `}

    ${o==="square"&&d`
      border-radius: calc(${u} * ${s});
    `}

    ${o==="circle"&&d`
      border-radius: 50%;
    `}

    ${De} {
      width: 50%;
      height: 50%;
      /* stylelint-disable unit-allowed-list */
      min-width: min(14px, 90%);
      min-height: min(14px, 90%);
      /* stylelint-enable unit-allowed-list */
    }
  `});$r.defaultProps=H;const _e=Object.freeze({Component:()=>null}),Wo=v.forwardRef(function({set:t,name:r,size:n,"aria-label":o,role:i,...s},c){var p;const{base:{"icon-set":a}}=it(),l=t??a??"budicon",[u,f]=v.useState(((p=ce.get(l))==null?void 0:p.get(r))??_e);return v.useEffect(()=>{var h;if((h=ce.get(l))!=null&&h.has(r)){f(ce.get(l).get(r));return}const g=new AbortController;return(async()=>{try{const b=encodeURIComponent(r);let m,x;switch(l){case"streamline":m="streamline-icons";break;case"budicon":m="icons";break;default:throw new Error("Unknown icon")}try{x=await St(()=>import(`./${m}/${b}.icon`),[],import.meta.url)}catch{x=await St(()=>import(`./${m}/${b}.icon.tsx`),[],import.meta.url)}if(x.name!==r||!x.Component)throw new Error("Malformed icon definition");Yt(x)}catch{Yt({set:l,name:r,..._e})}g.signal.aborted||f(ce.get(l).get(r)??_e)})(),()=>g.abort()},[r,l]),typeof s.background=="string"?B.jsx($r,{...s,background:s.background,foreground:s.foreground,shape:s.shape,size:n,ref:c,children:B.jsx(De,{role:i??o!==void 0?"img":"presentation","aria-label":o,viewBox:u.viewBox,children:B.jsx(u.Component,{})})}):B.jsx(De,{...s,role:i??o!==void 0?"img":"presentation","aria-label":o,viewBox:u.viewBox,size:n,ref:c,children:B.jsx(u.Component,{})})}),xr=e=>{const{base:{spacing:t,animation:{speed:r,timing:{ease:n}},"disabled-opacity":o},components:{button:{"focus-shadow":i}}}=e;return d`
    outline: none;
    text-decoration: none;
    transition-property: background-color, color, border-color, box-shadow, translate;
    transition-duration: calc(0.5 * ${r});
    transition-timing-function: ${n};
    cursor: pointer;

    & + & {
      margin-inline-start: ${t};
    }

    /* Not able to combine with selector above. Stylis bug? */

    & + ${vt} + & {
      margin-inline-start: ${t};
    }

    &:disabled,
    &[disabled] {
      opacity: ${o};
      cursor: not-allowed;
      pointer-events: none;
    }

    &:enabled:focus,
    &:not([disabled]):focus {
      box-shadow: ${i};
    }
  `},Gt=(e,t)=>({contrastColor:t?e:pe(()=>je(e)),hoverColors:Mr(t||e),activeColors:Qe(t||e)}),Kt=(e,t)=>{const r=Tr(t)?t:je(e),n=pe(()=>Lr(e,r).AA),o=n?e:ze(e,t),i=pe(()=>Ge(.9,t,e)),s=pe(()=>Ge(.8,t,o));return{textColor:n?e:je(e),hoverBg:i,hoverFg:ze(e,i??"transparent"),activeBg:pe(()=>Ge(.8,t,o)),activeFg:ze(o,s??"transparent")}},Er=I.button.withConfig(Zt("loading"))(({variant:e,icon:t,loading:r,compact:n,theme:o})=>{const{base:{spacing:i,"border-radius":s,palette:{"primary-background":c},"hit-area":{"mouse-min":a,"finger-min":l,"compact-min":u},animation:{speed:f}},components:{button:{color:p,"foreground-color":g,"secondary-color":h,"secondary-fill-style":b,padding:m,"border-radius":x,"border-width":E,touch:{padding:S}}}}=o,w=xr(o),k=d`
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: ${a};
      min-width: ${a};
      border: ${E} solid transparent;
      border-radius: calc(${s} * ${x});
      -webkit-user-select: none;
      user-select: none;
      white-space: nowrap;

      ${!t&&d`
        padding: ${m};
      `}

      ${t&&d`
        border-radius: calc(${s} * ${x});

        > svg {
          display: block;
        }
      `} ${n&&d`
        min-height: ${u};
        min-width: ${u};
      `} @media (
        pointer: coarse) {
        border-radius: calc(${s} * ${x});

        ${!n&&d`
          min-height: ${l};
          min-width: ${l};
        `}

        ${!t&&d`
          padding: ${S};
        `}
      }

      &:active {
        translate: 0 0.0625rem;
      }
    `,{contrastColor:$,hoverColors:C,activeColors:A}=e!=="primary"||g==="auto"?Gt(e==="primary"?p:h):Gt(g,p),O=d`
      --button-background-color: ${e==="primary"?p:h};
      color: ${$};
      background-color: ${e==="primary"?p:h};

      @media (hover: hover) {
        &:hover {
          background-color: ${C.background};
          text-decoration: none;
        }
      }

      &:active {
        background-color: ${A.background};
        color: ${A.foreground};
        text-decoration: none;
      }
    `,y=Kt(h,c),R=d`
      --button-background-color: ${c};
      color: ${y.textColor};
      background-color: ${c};
      border-color: ${h};

      @media (hover: hover) {
        &:hover {
          background-color: ${y.hoverBg};
          text-decoration: none;
        }
      }

      &:active {
        color: ${y.activeFg};
        background-color: ${y.activeBg};
        border-color: ${y.activeFg};
        text-decoration: none;
      }
    `,P=Kt(b==="outline"?h:p,c),M=d`
      --button-background-color: ${t?"transparent":c};
      color: ${t?"currentColor":P.textColor};
      background-color: ${t?"transparent":c};

      @media (hover: hover) {
        &:hover {
          ${t&&d`
            ::before {
              content: '';
              position: absolute;
              top: calc(${E} * -1);
              bottom: calc(${E} * -1);
              left: calc(${E} * -1);
              right: calc(${E} * -1);
              border-radius: inherit;
              background-color: currentColor;
              opacity: 0.1;
            }
          `}

          ${!t&&d`
            background-color: ${P.hoverBg};
            color: ${P.hoverFg};
            border-color: ${P.hoverFg};
            text-decoration: none;
          `}
        }

        &:active {
          ${t&&d`
            ::before {
              content: '';
              position: absolute;
              top: calc(${E} * -1);
              bottom: calc(${E} * -1);
              left: calc(${E} * -1);
              right: calc(${E} * -1);
              border-radius: inherit;
              background-color: currentColor;
              opacity: 0.2;
            }
          `}

          ${!t&&d`
            background-color: ${P.activeBg};
            color: ${P.activeFg};
            border-color: ${P.activeFg};
            text-decoration: none;
          `}
        }
      }
    `;return d`
      ${w}
      ${k}
        ${(e==="primary"||e==="secondary"&&b==="fill")&&O}
        ${e==="secondary"&&b==="outline"&&R}
        ${e==="simple"&&M}
        ${e==="primary"&&d`
        font-weight: ${o.base["font-weight"]["semi-bold"]};
      `}

        ${r&&d`
        ${gt} {
          background-color: var(--button-background-color);
          border-radius: inherit;
        }

        ${ht} {
          width: 1em;
          height: 1em;

          ${!t&&d`
            margin-inline-end: calc(${i} / 2);
          `}
          circle:nth-child(2) {
            animation-duration: calc(${f} * 2);
          }
        }
      `}
    `});Er.defaultProps=H;const kr=I.a.withConfig(Zt("loading"))(({theme:e,variant:t,href:r})=>{const{base:{palette:{"foreground-color":n}},components:{button:{color:o,"secondary-fill-style":i},link:{color:s}}}=e;let c=s;!r&&i==="solid"&&(c=o);const{background:a}=Qe(c),{background:l}=Qe(n),u=xr(e),f=d`
    background-color: transparent;
    display: inline;
    text-align: start;
    border: none;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }

    > ${De} {
      vertical-align: bottom;
    }
  `,p=d`
    color: ${c};

    &:active {
      color: ${a};
    }
  `,g=d`
    color: ${n};

    &:active {
      color: ${l};
    }
  `;return d`
    ${u}
    ${f}
      ${t==="link"&&p}
      ${t==="text"&&g}
  `});kr.defaultProps=H;const Fo=v.forwardRef(function({variant:t="secondary",type:r="button",disabled:n=!1,icon:o=!1,compact:i=!1,href:s,as:c,forwardedAs:a,label:l,"aria-label":u,loading:f=!1,children:p,className:g,...h},b){const[m,x]=rt(),E=v.useRef(),S=v.useRef(),w=v.useRef(),k=Be(b,x),$=["link","text"].includes(t),C=f&&!$,A=$?kr:Er,O=y=>{k.current&&S.current&&w.current&&Ur({x:y.clientX,y:y.clientY},S.current)&&Date.now()-w.current<500&&k.current.click()};return v.useEffect(()=>(document.addEventListener("mouseup",O),()=>{document.removeEventListener("mouseup",O),E.current=void 0,S.current=void 0,w.current=void 0}),[]),B.jsxs(B.Fragment,{children:[B.jsxs(A,{...h,ref:k,as:c||(s?"a":"button"),forwardedAs:a||(s?"a":"button"),className:Ir("button",g,{variant:t,icon:o,compact:i,loading:f}),variant:t,icon:o,compact:i,type:s?void 0:r,href:s,disabled:n&&!s,loading:C,"aria-label":u||l,onMouseDown:y=>{var R;(R=h.onMouseDown)==null||R.call(h,y),y.persist(),E.current=y,S.current=y.currentTarget.getBoundingClientRect(),w.current=Date.now()},onMouseUp:y=>{var P,M;const R=E.current&&!E.current.defaultPrevented;return E.current=void 0,S.current=void 0,w.current=void 0,R&&k.current!==document.activeElement&&((P=k.current)==null||P.focus()),(M=h.onMouseUp)==null?void 0:M.call(h,y)},children:[C&&B.jsx(Ro,{variant:"ring",placement:"inline"}),!o||!C?p:null]}),m&&l&&B.jsx(yo,{target:m,showDelay:"none",hideDelay:"none",describeTarget:!1,children:l})]})}),Po=I.span`
  ${Wr}
  -webkit-user-select: none;
  user-select: none;
`,Io=v.forwardRef(function(t,r){return B.jsx(Po,{...t,ref:r})}),zo=Me("alert",[]),Ho=Me("count",[]),qo=Me("keyboard",[]);export{Er as A,Fo as B,vt as C,gr as D,gt as E,mt as F,Ro as G,ko as H,Wo as I,Nr as J,ht as K,At as L,Po as M,mr as N,vr as O,po as P,yo as Q,Gr as R,De as S,wo as T,Ir as U,Io as V,Oe as a,it as b,Me as c,Qr as d,rr as e,Ho as f,zr as g,Xr as h,qr as i,Zr as j,Lo as k,qo as l,at as m,Yr as n,go as o,Kr as p,Vr as q,Yt as r,er as s,Je as t,Te as u,Ae as v,tr as w,Jr as x,Ct as y,zo as z};
