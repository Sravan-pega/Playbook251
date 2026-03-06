import{j as a}from"./index-Cws_IRuu.js";import{r as T,g as Re}from"./index-C5e9SFkp.js";import{q as I,A as j,d as V,t as Ie,a as tt,r as rr,u as Be,w as nr,g as ir,h as sr,c as or}from"./useConsolidatedRef-FEYVq0tu.js";import{w as ar}from"./withConfiguration-B9Eslcrb.js";import{w as je,z as rt,e as Ce,F as K,A as He,c as We,d as le,I as oe,S as wt,b as Ve,B as ee,V as cr,C as Ze,u as dr,r as St,D as ur,E as lr,m as mr,k as fr,a as hr,T as qe,G as Tt,H as pr,y as gr}from"./Badges.test-ids-Cv4_ccaG.js";import{a as $r,b as vr,u as Dt,t as kt}from"./Fullscreen-Bm6nCRfC.js";import{u as Mt,G as br,S as Pe,c as jt,a as yr,C as xr,E as wr}from"./Label-Bgz81c9T.js";import"./index-Dy23IbDT.js";import"./iframe-D5cjZ3_e.js";const Ct=I.div(e=>{const r=e.theme.components.badges.alert,{background:t}=r[e.variant],{"border-color":i}=r.base;return j`
    background: ${t};
    border: 0.0625rem solid ${i};
    border-radius: 100%;
    display: inline-block;
    height: 0.625rem;
    width: 0.625rem;
  `});Ct.defaultProps=V;const Sr=je(T.forwardRef(function({testId:r,variant:t,...i},n){const f=Ce(r,rt);return a.jsx(Ct,{"data-testid":f.root,...i,variant:t,ref:n})}),rt),Tr="budicon",Dr="dock",kr=()=>a.jsx("path",{d:"M22.715 2.285c.38.38.38.996 0 1.376l-5.954 5.953h4.041a.973.973 0 1 1 0 1.946h-7.296V4.23a.973.973 0 0 1 1.945 0v3.942l5.888-5.887a.973.973 0 0 1 1.376 0ZM11.527 13.473v7.296a.973.973 0 1 1-1.946 0v-3.975l-5.92 5.921a.973.973 0 1 1-1.376-1.376l5.92-5.921H4.231a.973.973 0 1 1 0-1.945h7.296Z"}),Mr="0 0 25 25",jr=Object.freeze(Object.defineProperty({__proto__:null,Component:kr,name:Dr,set:Tr,viewBox:Mr},Symbol.toStringTag,{value:"Module"})),Cr="budicon",Or="undock",Ir=()=>a.jsx("path",{d:"M11.492 13.5a1 1 0 0 1 0 1.414L6.406 20H10.5a1 1 0 0 1 0 2H3v-7.5a1 1 0 0 1 2 0v4.078l5.078-5.078a1 1 0 0 1 1.414 0ZM22 3v7.5a1 1 0 0 1-2 0V6.32l-5.179 5.18a1 1 0 0 1-1.414-1.414L18.492 5H14.5a1 1 0 0 1 0-2H22Z"}),zr="0 0 25 25",Ot=Object.freeze(Object.defineProperty({__proto__:null,Component:Ir,name:Or,set:Cr,viewBox:zr},Symbol.toStringTag,{value:"Module"})),Ur=I.img`
  max-width: 100%;
`,Lr=T.forwardRef(function(r,t){const{alt:i,...n}=r;return a.jsx(Ur,{...n,alt:i,ref:t})}),Ae=I.div(({stacked:e})=>j`
    ${He} + ${He} {
      margin-inline-start: unset;
    }

    & > :not(button) {
      display: contents;
    }

    ${!e&&j`
      & > button:first-child:not(:last-child),
      & > :first-child:not(:last-child) button:first-child {
        margin-inline-end: auto;
      }
    `}

    &[aria-hidden='true'] {
      position: fixed;
      visibility: hidden;
    }
  `),Er=({actionsRef:e,actionsEl:r,as:t,...i})=>{const n=T.useRef(null),[f,s]=T.useState(!1);return T.useLayoutEffect(()=>{if(n.current&&e.current){const u=n.current.getBoundingClientRect().width,l=new ResizeObserver(h=>{setTimeout(()=>{f&&h[0].borderBoxSize[0].inlineSize>u?s(!1):!f&&h[0].borderBoxSize[0].inlineSize<=u&&s(!0)},0)});return l.observe(e.current),()=>{l.disconnect()}}}),T.useLayoutEffect(()=>{if(n.current){const u=n.current.getElementsByTagName("button");Array.from(u).forEach(l=>{l.hasAttribute("id")&&l.removeAttribute("id"),l.hasAttribute("data-testid")&&l.removeAttribute("data-testid"),l.setAttribute("role","none")})}}),a.jsxs(a.Fragment,{children:[a.jsx(K,{...i,as:Ae,forwardedAs:t,ref:e,stacked:f,container:{gap:1,...f?{direction:"column"}:{justify:"end"}},children:r}),a.jsx(K,{as:Ae,ref:n,"aria-hidden":!0,inert:"",container:{gap:1,direction:"row",justify:"end"},children:r})]})},It=We("avatar",[]),Ne={s:1,m:2,l:2.5,xl:4},_r={s:.5625,m:.8125,l:1,xl:1.5},Fr=I(Lr)`
  min-height: 100%;
  min-width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: inherit;
  height: fit-content;
  width: fit-content;
`,zt=I.div(({hasBrokenImage:e,hasSrc:r,size:t,shape:i,color:n,backgroundColor:f,theme:{base:{palette:{"foreground-color":s,"primary-background":u},"border-radius":l},components:{avatar:{"background-color":h},icon:{"border-radius-multiplier":v}}}})=>{const w=Ne[t],b=_r[t];let x=r&&!e?u:f||h;n&&!f&&!(r&&!e)&&(x=Ie(()=>tt(n),()=>h));const c=Ie(()=>rr(s,.1)),o=n||Ie(()=>tt(x));return j`
      position: relative;
      flex-shrink: 0;
      background-color: ${x};
      color: ${o};
      width: ${w}rem;
      height: ${w}rem;
      min-width: ${w}rem;
      min-height: ${w}rem;
      font-size: ${b}rem;
      text-transform: uppercase;
      line-height: ${w}rem;
      text-align: center;
      vertical-align: top;
      display: inline-block;
      border-radius: 100%;
      user-select: none;
      -webkit-user-select: none;

      ${i==="squircle"&&j`
        border-radius: calc(${v} * ${l});
      `}

      ${wt} {
        width: 50%;
        height: 100%;
        vertical-align: initial;
      }

      ::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        box-shadow: inset 0 0 0 0.0625rem ${c};
      }
    `});zt.defaultProps=V;const Ut=I(Sr)(({size:e,theme:r})=>{const t=.625*Ne[e]/Ne.m;return j`
    position: absolute;
    height: ${t}rem;
    width: ${t}rem;
    inset-block-end: 0;
    inset-inline-end: 0;
    z-index: 1;
    animation: pop calc(${r.base.animation.speed} * 2) cubic-bezier(1, 1.65, 0.3, 1.24);

    @keyframes pop {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1);
      }
    }
  `});Ut.defaultProps=V;const Hr=(e,r)=>{var i;if(!e)return"";if(r==="s")return e[0];const t=e.split(/\s+/);return`${t[0][0]??""}${((i=t[1])==null?void 0:i[0])??""}`},Pr=T.forwardRef(function(r,t){const{testId:i,shape:n="circle",size:f="m",imageSrc:s,icon:u,name:l,status:h,onImageError:v,...w}=r,b=l.trim(),[x,c]=T.useState(),o=le(),d=Ce(i,It);T.useEffect(()=>{c(void 0)},[s]);const m=T.useMemo(()=>u?a.jsx(oe,{name:u}):s&&!x?a.jsx(Fr,{src:s,alt:b,onError:M=>{c(!0),v==null||v(M)},onLoad:()=>{c(!1)}}):Hr(b,f),[s,b,f,u,x,v]);return a.jsxs(zt,{"data-testid":d.root,role:"img",hasSrc:!!s,hasBrokenImage:x,shape:n,size:f,ref:t,"aria-label":`${b}${h?` ${o("status")} ${h}`:""}`,...w,children:[m,h==="active"&&a.jsx(Ut,{size:f,variant:"success"})]})}),Ar=je(Pr,It),Nr=(e,r)=>e?r==="height"?`${e.scrollHeight}px`:`${e.scrollWidth}px`:"",nt=e=>{const{status:r,dimension:t,transitionSpeed:i,transitionTimingFunction:n,min:f,max:s,nullWhenCollapsed:u,el:l}=e,h={};let v=s;return l&&!s&&(v=Nr(l,t)),(r==="expanded"||r==="collapsed")&&((s||f)&&(h[t]=r==="expanded"?v:f||0,h[`overflow${t==="width"?"X":"Y"}`]="hidden"),r==="collapsed"&&!u&&!f&&(h[t]=0,h.overflow="hidden",h.visibility="hidden")),(r==="expanding"||r==="collapsing")&&(h[t]=r==="expanding"?v:f||0,h.overflow="hidden",h.transitionProperty=t,h.transitionDuration=`max(${i}, 0.01ms)`,h.transitionTimingFunction=n),h},Yr=T.forwardRef(function(r,t){const{base:{animation:i}}=Ve(),{children:n,dimension:f="height",collapsed:s=!1,onBeforeExpand:u,onAfterExpand:l,onBeforeCollapse:h,onAfterCollapse:v,transitionSpeed:w=i.speed,min:b,max:x,nullWhenCollapsed:c=!1,as:o="div",...d}=r,[m,M]=T.useState(s?"collapsed":"expanded"),O=T.useState(),z=O[1];let _=O[0];const P=Mt(m),F=Be(t),Y=T.useCallback(A=>{A.target!==F.current||A.propertyName!==f||M(m==="expanding"?"expanded":"collapsed")},[F.current,m]);return T.useLayoutEffect(()=>{const A=s,U=!s,C=["expanded","expanding"].includes(m),ne=["collapsed","collapsing"].includes(m);U&&ne?(u==null||u(),M("expanding")):A&&C&&(h==null||h(),M("collapsing")),m==="expanded"&&P!=="expanded"?l==null||l():m==="collapsed"&&P!=="collapsed"&&(v==null||v()),z(nt({dimension:f,min:b,max:x,transitionSpeed:w,nullWhenCollapsed:c,status:m,el:F.current,transitionTimingFunction:i.timing.ease}))},[s,m,b,x]),m!==P&&["expanded","collapsed"].includes(P)&&(_=nt({dimension:f,min:b,max:x,transitionSpeed:w,nullWhenCollapsed:c,status:m==="expanding"?"collapsing":"expanding",el:F.current,transitionTimingFunction:i.timing.ease})),m==="collapsed"&&c&&!b?null:a.jsx(o,{ref:F,onTransitionEnd:Y,...d,inert:m==="collapsed"&&!c&&!b?"":void 0,style:_,children:n})}),Rr=I(ee)``,Br=({children:e,lines:r})=>{const[t,i]=T.useState(!0),[n,f]=T.useState(!1),s=T.useRef(null),u=le(),l=T.useMemo(()=>{if(!nr)return 1/0;const h=Number.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)*1.25;return r*h},[]);return T.useLayoutEffect(()=>{if(!s.current)return;const h=new ResizeObserver(v=>{const w=v.some(({target:b,contentRect:x})=>{if(b===s.current)return x.height>l});f(w)});return h.observe(s.current),()=>{h.disconnect()}},[s.current,l]),a.jsxs(a.Fragment,{children:[a.jsx(Yr,{collapsed:t,min:n?`${l}px`:"max-content",children:a.jsx("div",{ref:s,children:e})}),n&&a.jsx(Rr,{variant:"link",onClick:()=>i(h=>!h),children:u(t?"show_more":"show_less")})]})},Wr=I.span`
  display: inline-block;
  position: relative;
`,Lt=()=>{const e=le();return a.jsxs(Wr,{children:[a.jsx("span",{"aria-hidden":!0,children:"––"}),a.jsx(cr,{children:e("no_value")})]})},Vr=I.div`
  img,
  video,
  audio {
    object-fit: cover;
    width: 100%;
  }
`,ce=I.article(e=>{const r=$r(),{"border-radius":t,"border-color":i,background:n}=e.theme.components.card,f=e.interactive?j`
        &:hover {
          border: 0;
          box-shadow: 0 0 0 0.0625rem ${i};
        }
        &:focus {
          border: 0;
          box-shadow: 0 0 0 0.125rem ${i};
        }
      `:void 0;return j`
    ${Ze} &, &:not(& &) {
      background: ${n};

      &:focus {
        outline: none;
      }

      ${f}

      ${Vr} {
        &:first-child img {
          border-radius: var(--container-border-radius, ${t})
            var(--container-border-radius, ${t}) 0 0;
        }
      }

      ${r!=null&&r[0]?j`
            block-size: 100%;
            border-radius: 0;
          `:j`
            border-radius: var(--border-radius, ${t});
            --container-border-radius: var(--border-radius, ${t});
            * {
              --border-radius: calc(var(--container-border-radius) * 0.5);
            }
          `}
    }
  `});ce.defaultProps=V;const Zr=T.forwardRef(function({children:r,as:t,onClick:i,interactive:n=!1,...f},s){const u={...i&&{onClick:i,tabIndex:0,role:"button"},...n&&{tabIndex:0},interactive:n};return a.jsx(K,{role:"none",container:{direction:"column"},as:ce,forwardedAs:t,ref:s,...u,...f,children:r})}),Et=I.footer(({theme:e})=>j`
    ${Ze} &, &:not(${ce} ${ce} > &) {
      padding: calc(1.5 * ${e.base.spacing}) calc(${e.components.card.padding} * 2);
    }
  `);Et.defaultProps=V;const _t=I.div(({theme:e})=>j`
    ${Ze} &, &:not(${ce} ${ce} > &) {
      position: relative;
      padding: calc(1.5 * ${e.base.spacing}) calc(${e.components.card.padding} * 2);

      & + &,
      & + ${Et} {
        padding-block-start: 0;
      }
    }
  `);_t.defaultProps=V;const qr=({children:e,container:r,...t})=>a.jsx(K,{...t,container:{direction:"column",...r},as:_t,children:e}),Ft=We("field-value-list",[]),it=We("field-value-item",["name","value"]),Jr=I.dt`
  word-break: break-word;
`,Kr=I.dd`
  word-break: break-word;
`,me=I.div``,Ht=I.dl(({variant:e,theme:r})=>{const{components:{"field-value-list":{inline:{detached:t}}}}=r;return j`
    width: 100%;

    ${e==="value-comparison"&&j`
      dt {
        width: 100%;
      }
      && dd {
        text-align: end;
        padding-inline-start: calc(2 * ${r.base.spacing});

        /* Unset negative margin from Details to prevent field value misalignment */
        margin: unset;
      }
      ${Pe} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type) {
        border-bottom: 0.0625rem solid ${r.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${r.base.spacing});
      }
    `}

    ${t&&e==="inline"&&j`
      dt {
        width: 100%;
        padding-inline-end: calc(${r.base.spacing});
      }
      ${Pe} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type),
      dd:has(+ ${me}),
      dt:has(+ dd + ${me}),
      ${me}:has(+ dt + dd),
      ${me}:not(:last-of-type) {
        border-bottom: 0.0625rem dashed ${r.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${r.base.spacing});
      }
    `}
  `});Ht.defaultProps=V;const st=je(({testId:e,name:r,value:t,variant:i="inline",truncate:n=!0})=>{const f=Ce(e,it),s=typeof t=="string"&&n?a.jsx(Br,{lines:3,children:t}):t,u=a.jsxs(a.Fragment,{children:[a.jsx(Pe,{"data-testid":f.name,as:Jr,role:"none",children:r}),a.jsx(Kr,{"data-testid":f.value,role:"none",children:t?s:a.jsx(Lt,{})})]});return i==="stacked"?a.jsx(me,{"data-testid":f.root,children:u}):a.jsx(a.Fragment,{children:u})},it),Gr=T.forwardRef(function({testId:r,fields:t,variant:i="inline",...n},f){const s=Ce(r,Ft),u=Be(f),l=vr("xs",{breakpointRef:u,themeProp:"content-width"}),{components:{"field-value-list":{inline:{detached:h}}}}=Ve();return a.jsx(br,{"data-testid":s.root,...n,ref:u,container:{cols:["inline","value-comparison"].includes(i)&&l?"16ch minmax(0, 1fr)":"minmax(0, 1fr)",colGap:!h&&i!=="value-comparison"?2:0,rowGap:!h&&i!=="value-comparison"?1:.5},as:Ht,role:"none",variant:l?i:"stacked",children:t.map(({id:v,name:w,value:b,truncate:x=!0,variant:c})=>{const o={name:w,variant:(c??i)==="stacked"||!l?"stacked":"inline"};return typeof b=="string"?a.jsx(st,{...o,value:b,truncate:x},v??w):a.jsx(st,{...o,value:b},v??w)})})}),Xr=je(Gr,Ft);var we={exports:{}},Qr=we.exports,ot;function en(){return ot||(ot=1,(function(e,r){(function(t,i){e.exports=i()})(Qr,(function(){var t=1e3,i=6e4,n=36e5,f="millisecond",s="second",u="minute",l="hour",h="day",v="week",w="month",b="quarter",x="year",c="date",o="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(D){var $=["th","st","nd","rd"],p=D%100;return"["+D+($[(p-20)%10]||$[p]||$[0])+"]"}},O=function(D,$,p){var y=String(D);return!y||y.length>=$?D:""+Array($+1-y.length).join(p)+D},z={s:O,z:function(D){var $=-D.utcOffset(),p=Math.abs($),y=Math.floor(p/60),g=p%60;return($<=0?"+":"-")+O(y,2,"0")+":"+O(g,2,"0")},m:function D($,p){if($.date()<p.date())return-D(p,$);var y=12*(p.year()-$.year())+(p.month()-$.month()),g=$.clone().add(y,w),k=p-g<0,S=$.clone().add(y+(k?-1:1),w);return+(-(y+(p-g)/(k?g-S:S-g))||0)},a:function(D){return D<0?Math.ceil(D)||0:Math.floor(D)},p:function(D){return{M:w,y:x,w:v,d:h,D:c,h:l,m:u,s,ms:f,Q:b}[D]||String(D||"").toLowerCase().replace(/s$/,"")},u:function(D){return D===void 0}},_="en",P={};P[_]=M;var F="$isDayjsObject",Y=function(D){return D instanceof ne||!(!D||!D[F])},A=function D($,p,y){var g;if(!$)return _;if(typeof $=="string"){var k=$.toLowerCase();P[k]&&(g=k),p&&(P[k]=p,g=k);var S=$.split("-");if(!g&&S.length>1)return D(S[0])}else{var E=$.name;P[E]=$,g=E}return!y&&g&&(_=g),g||!y&&_},U=function(D,$){if(Y(D))return D.clone();var p=typeof $=="object"?$:{};return p.date=D,p.args=arguments,new ne(p)},C=z;C.l=A,C.i=Y,C.w=function(D,$){return U(D,{locale:$.$L,utc:$.$u,x:$.$x,$offset:$.$offset})};var ne=(function(){function D(p){this.$L=A(p.locale,null,!0),this.parse(p),this.$x=this.$x||p.x||{},this[F]=!0}var $=D.prototype;return $.parse=function(p){this.$d=(function(y){var g=y.date,k=y.utc;if(g===null)return new Date(NaN);if(C.u(g))return new Date;if(g instanceof Date)return new Date(g);if(typeof g=="string"&&!/Z$/i.test(g)){var S=g.match(d);if(S){var E=S[2]-1||0,H=(S[7]||"0").substring(0,3);return k?new Date(Date.UTC(S[1],E,S[3]||1,S[4]||0,S[5]||0,S[6]||0,H)):new Date(S[1],E,S[3]||1,S[4]||0,S[5]||0,S[6]||0,H)}}return new Date(g)})(p),this.init()},$.init=function(){var p=this.$d;this.$y=p.getFullYear(),this.$M=p.getMonth(),this.$D=p.getDate(),this.$W=p.getDay(),this.$H=p.getHours(),this.$m=p.getMinutes(),this.$s=p.getSeconds(),this.$ms=p.getMilliseconds()},$.$utils=function(){return C},$.isValid=function(){return this.$d.toString()!==o},$.isSame=function(p,y){var g=U(p);return this.startOf(y)<=g&&g<=this.endOf(y)},$.isAfter=function(p,y){return U(p)<this.startOf(y)},$.isBefore=function(p,y){return this.endOf(y)<U(p)},$.$g=function(p,y,g){return C.u(p)?this[y]:this.set(g,p)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(p,y){var g=this,k=!!C.u(y)||y,S=C.p(p),E=function(X,B){var Q=C.w(g.$u?Date.UTC(g.$y,B,X):new Date(g.$y,B,X),g);return k?Q:Q.endOf(h)},H=function(X,B){return C.w(g.toDate()[X].apply(g.toDate("s"),(k?[0,0,0,0]:[23,59,59,999]).slice(B)),g)},N=this.$W,R=this.$M,Z=this.$D,te="set"+(this.$u?"UTC":"");switch(S){case x:return k?E(1,0):E(31,11);case w:return k?E(1,R):E(0,R+1);case v:var G=this.$locale().weekStart||0,q=(N<G?N+7:N)-G;return E(k?Z-q:Z+(6-q),R);case h:case c:return H(te+"Hours",0);case l:return H(te+"Minutes",1);case u:return H(te+"Seconds",2);case s:return H(te+"Milliseconds",3);default:return this.clone()}},$.endOf=function(p){return this.startOf(p,!1)},$.$set=function(p,y){var g,k=C.p(p),S="set"+(this.$u?"UTC":""),E=(g={},g[h]=S+"Date",g[c]=S+"Date",g[w]=S+"Month",g[x]=S+"FullYear",g[l]=S+"Hours",g[u]=S+"Minutes",g[s]=S+"Seconds",g[f]=S+"Milliseconds",g)[k],H=k===h?this.$D+(y-this.$W):y;if(k===w||k===x){var N=this.clone().set(c,1);N.$d[E](H),N.init(),this.$d=N.set(c,Math.min(this.$D,N.daysInMonth())).$d}else E&&this.$d[E](H);return this.init(),this},$.set=function(p,y){return this.clone().$set(p,y)},$.get=function(p){return this[C.p(p)]()},$.add=function(p,y){var g,k=this;p=Number(p);var S=C.p(y),E=function(R){var Z=U(k);return C.w(Z.date(Z.date()+Math.round(R*p)),k)};if(S===w)return this.set(w,this.$M+p);if(S===x)return this.set(x,this.$y+p);if(S===h)return E(1);if(S===v)return E(7);var H=(g={},g[u]=i,g[l]=n,g[s]=t,g)[S]||1,N=this.$d.getTime()+p*H;return C.w(N,this)},$.subtract=function(p,y){return this.add(-1*p,y)},$.format=function(p){var y=this,g=this.$locale();if(!this.isValid())return g.invalidDate||o;var k=p||"YYYY-MM-DDTHH:mm:ssZ",S=C.z(this),E=this.$H,H=this.$m,N=this.$M,R=g.weekdays,Z=g.months,te=g.meridiem,G=function(B,Q,ie,ae){return B&&(B[Q]||B(y,k))||ie[Q].slice(0,ae)},q=function(B){return C.s(E%12||12,B,"0")},X=te||function(B,Q,ie){var ae=B<12?"AM":"PM";return ie?ae.toLowerCase():ae};return k.replace(m,(function(B,Q){return Q||(function(ie){switch(ie){case"YY":return String(y.$y).slice(-2);case"YYYY":return C.s(y.$y,4,"0");case"M":return N+1;case"MM":return C.s(N+1,2,"0");case"MMM":return G(g.monthsShort,N,Z,3);case"MMMM":return G(Z,N);case"D":return y.$D;case"DD":return C.s(y.$D,2,"0");case"d":return String(y.$W);case"dd":return G(g.weekdaysMin,y.$W,R,2);case"ddd":return G(g.weekdaysShort,y.$W,R,3);case"dddd":return R[y.$W];case"H":return String(E);case"HH":return C.s(E,2,"0");case"h":return q(1);case"hh":return q(2);case"a":return X(E,H,!0);case"A":return X(E,H,!1);case"m":return String(H);case"mm":return C.s(H,2,"0");case"s":return String(y.$s);case"ss":return C.s(y.$s,2,"0");case"SSS":return C.s(y.$ms,3,"0");case"Z":return S}return null})(B)||S.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(p,y,g){var k,S=this,E=C.p(y),H=U(p),N=(H.utcOffset()-this.utcOffset())*i,R=this-H,Z=function(){return C.m(S,H)};switch(E){case x:k=Z()/12;break;case w:k=Z();break;case b:k=Z()/3;break;case v:k=(R-N)/6048e5;break;case h:k=(R-N)/864e5;break;case l:k=R/n;break;case u:k=R/i;break;case s:k=R/t;break;default:k=R}return g?k:C.a(k)},$.daysInMonth=function(){return this.endOf(w).$D},$.$locale=function(){return P[this.$L]},$.locale=function(p,y){if(!p)return this.$L;var g=this.clone(),k=A(p,y,!0);return k&&(g.$L=k),g},$.clone=function(){return C.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},D})(),L=ne.prototype;return U.prototype=L,[["$ms",f],["$s",s],["$m",u],["$H",l],["$W",h],["$M",w],["$y",x],["$D",c]].forEach((function(D){L[D[1]]=function($){return this.$g($,D[0],D[1])}})),U.extend=function(D,$){return D.$i||(D($,ne,U),D.$i=!0),U},U.locale=A,U.isDayjs=Y,U.unix=function(D){return U(1e3*D)},U.en=P[_],U.Ls=P,U.p={},U}))})(we)),we.exports}var tn=en();const de=Re(tn);var Se={exports:{}},rn=Se.exports,at;function nn(){return at||(at=1,(function(e,r){(function(t,i){e.exports=i()})(rn,(function(){var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(f,s,u){var l=s.prototype;u.utc=function(o){var d={date:o,utc:!0,args:arguments};return new s(d)},l.utc=function(o){var d=u(this.toDate(),{locale:this.$L,utc:!0});return o?d.add(this.utcOffset(),t):d},l.local=function(){return u(this.toDate(),{locale:this.$L,utc:!1})};var h=l.parse;l.parse=function(o){o.utc&&(this.$u=!0),this.$utils().u(o.$offset)||(this.$offset=o.$offset),h.call(this,o)};var v=l.init;l.init=function(){if(this.$u){var o=this.$d;this.$y=o.getUTCFullYear(),this.$M=o.getUTCMonth(),this.$D=o.getUTCDate(),this.$W=o.getUTCDay(),this.$H=o.getUTCHours(),this.$m=o.getUTCMinutes(),this.$s=o.getUTCSeconds(),this.$ms=o.getUTCMilliseconds()}else v.call(this)};var w=l.utcOffset;l.utcOffset=function(o,d){var m=this.$utils().u;if(m(o))return this.$u?0:m(this.$offset)?w.call(this):this.$offset;if(typeof o=="string"&&(o=(function(_){_===void 0&&(_="");var P=_.match(i);if(!P)return null;var F=(""+P[0]).match(n)||["-",0,0],Y=F[0],A=60*+F[1]+ +F[2];return A===0?0:Y==="+"?A:-A})(o),o===null))return this;var M=Math.abs(o)<=16?60*o:o;if(M===0)return this.utc(d);var O=this.clone();if(d)return O.$offset=M,O.$u=!1,O;var z=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(O=this.local().add(M+z,t)).$offset=M,O.$x.$localOffset=z,O};var b=l.format;l.format=function(o){var d=o||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return b.call(this,d)},l.valueOf=function(){var o=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*o},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var x=l.toDate;l.toDate=function(o){return o==="s"&&this.$offset?u(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():x.call(this)};var c=l.diff;l.diff=function(o,d,m){if(o&&this.$u===o.$u)return c.call(this,o,d,m);var M=this.local(),O=u(o).local();return c.call(M,O,d,m)}}}))})(Se)),Se.exports}var sn=nn();const on=Re(sn);var Te={exports:{}},an=Te.exports,ct;function cn(){return ct||(ct=1,(function(e,r){(function(t,i){e.exports=i()})(an,(function(){var t={year:0,month:1,day:2,hour:3,minute:4,second:5},i={};return function(n,f,s){var u,l=function(b,x,c){c===void 0&&(c={});var o=new Date(b),d=(function(m,M){M===void 0&&(M={});var O=M.timeZoneName||"short",z=m+"|"+O,_=i[z];return _||(_=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:m,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:O}),i[z]=_),_})(x,c);return d.formatToParts(o)},h=function(b,x){for(var c=l(b,x),o=[],d=0;d<c.length;d+=1){var m=c[d],M=m.type,O=m.value,z=t[M];z>=0&&(o[z]=parseInt(O,10))}var _=o[3],P=_===24?0:_,F=o[0]+"-"+o[1]+"-"+o[2]+" "+P+":"+o[4]+":"+o[5]+":000",Y=+b;return(s.utc(F).valueOf()-(Y-=Y%1e3))/6e4},v=f.prototype;v.tz=function(b,x){b===void 0&&(b=u);var c,o=this.utcOffset(),d=this.toDate(),m=d.toLocaleString("en-US",{timeZone:b}),M=Math.round((d-new Date(m))/1e3/60),O=15*-Math.round(d.getTimezoneOffset()/15)-M;if(!Number(O))c=this.utcOffset(0,x);else if(c=s(m,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(O,!0),x){var z=c.utcOffset();c=c.add(o-z,"minute")}return c.$x.$timezone=b,c},v.offsetName=function(b){var x=this.$x.$timezone||s.tz.guess(),c=l(this.valueOf(),x,{timeZoneName:b}).find((function(o){return o.type.toLowerCase()==="timezonename"}));return c&&c.value};var w=v.startOf;v.startOf=function(b,x){if(!this.$x||!this.$x.$timezone)return w.call(this,b,x);var c=s(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return w.call(c,b,x).tz(this.$x.$timezone,!0)},s.tz=function(b,x,c){var o=c&&x,d=c||x||u,m=h(+s(),d);if(typeof b!="string")return s(b).tz(d);var M=(function(P,F,Y){var A=P-60*F*1e3,U=h(A,Y);if(F===U)return[A,F];var C=h(A-=60*(U-F)*1e3,Y);return U===C?[A,U]:[P-60*Math.min(U,C)*1e3,Math.max(U,C)]})(s.utc(b,o).valueOf(),m,d),O=M[0],z=M[1],_=s(O).utcOffset(z);return _.$x.$timezone=d,_},s.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},s.tz.setDefault=function(b){u=b}}}))})(Te)),Te.exports}var dn=cn();const un=Re(dn),J={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US",JP:"JP"},dt={year:1440*60*1e3*365,month:1440*60*1e3*365/12,day:1440*60*1e3,hour:3600*1e3,minute:60*1e3,second:1e3},Pt={dateStyle:"short"},At={dateStyle:"medium"},Nt={dateStyle:"long"},Yt={year:"numeric",month:"numeric",day:"numeric"},fe={timeStyle:"short"},De={timeStyle:"medium"},ze={timeStyle:"medium"},ke={hour:"numeric",minute:"numeric"},Ue={...Pt,...fe},Le={...At,...fe},Ee={...Nt,...De},_e={...Yt,...ke},ut={date:{short:Pt,medium:At,long:Nt,numeric:Yt},datetime:{short:Ue,medium:Le,long:Ee,numeric:_e},datetime12:{short:{...Ue,hour12:!0},medium:{...Le,hour12:!0},long:{...Ee,hour12:!0},numeric:{..._e,hour12:!0}},datetime24:{short:{...Ue,hour12:!1},medium:{...Le,hour12:!1},long:{...Ee,hour12:!1},numeric:{..._e,hour12:!1}},time:{short:fe,medium:De,long:ze,numeric:ke},time12:{short:{...fe,hour12:!0},medium:{...De,hour12:!0},long:{...ze,hour12:!0},numeric:{...ke,hour12:!0}},time24:{short:{...fe,hour12:!1},medium:{...De,hour12:!1},long:{...ze,hour12:!1},numeric:{...ke,hour12:!1}},month:{short:{month:"short"},medium:{month:"short"},long:{month:"long"},numeric:{month:"numeric"}},monthyear:{short:{year:"numeric",month:"short"},medium:{year:"numeric",month:"short"},long:{year:"numeric",month:"long"},numeric:{year:"numeric",month:"numeric"}},week:{short:{month:"short",day:"numeric"},medium:{month:"short",day:"numeric"},long:{month:"long",day:"numeric"},numeric:{month:"numeric",day:"numeric"}},year:{short:{year:"numeric"},medium:{year:"numeric"},long:{year:"numeric"},numeric:{year:"2-digit"}},relative:{short:{style:"long",numeric:"auto"},medium:{style:"long",numeric:"auto"},long:{style:"long",numeric:"auto"},numeric:{style:"short",numeric:"auto"}}},Fe=new Map;function ln(e,r={}){const t=JSON.stringify(r,Object.keys(r).sort()),i=`${e}${t}`;return Fe.has(i)||Fe.set(i,new Intl.DateTimeFormat(e,r)),Fe.get(i)}const $e={},ve={};function mn(e,{t:r,locale:t,format:i,variant:n,clockFormat:f,calendarType:s=J.ISO_8601,timeZone:u}){const l=(c,o)=>{const d=o==="time"||o==="datetime"?`${o}${f??""}`:o,m=ut[d][i];return ln(t,{...m,timeZone:u}).format(c)},h=(c,o)=>{const d=ut.relative[i];$e[t]??($e[t]=new Map);const m=$e[t];return m.has(d)||m.set(d,new Intl.RelativeTimeFormat(t,d)),m.get(d).format(c,o)},v=(c,o)=>{let d;const m=new Date;switch(o){case"year":d=c.getUTCFullYear()-m.getUTCFullYear();break;case"month":c.getUTCFullYear()===m.getUTCFullYear()?d=c.getUTCMonth()-m.getUTCMonth():c<m?d=(11-c.getUTCMonth()+m.getUTCMonth()+1)*-1:d=11-m.getUTCMonth()+c.getUTCMonth()+1;break;case"day":c.getUTCMonth()===m.getUTCMonth()?d=c.getUTCDate()-m.getUTCDate():c<m?d=(new Date(Date.UTC(c.getUTCFullYear(),c.getUTCMonth()+1,0)).getUTCDate()-c.getUTCDate()+m.getUTCDate())*-1:d=new Date(Date.UTC(m.getUTCFullYear(),m.getUTCMonth(),0)).getUTCDate()-m.getUTCDate()+c.getUTCDate()+1;break;case"hour":c.getUTCDate()===m.getUTCDate()?d=c.getUTCHours()-m.getUTCHours():c<m?d=(23-c.getUTCHours()+m.getUTCHours()+1)*-1:d=23-m.getUTCHours()+c.getUTCHours()+1;break;case"minute":c.getUTCHours()===m.getUTCHours()?d=c.getUTCMinutes()-m.getUTCMinutes():c<m?d=(59-c.getUTCMinutes()+m.getUTCMinutes()+1)*-1:d=59-m.getUTCMinutes()+c.getUTCMinutes()+1;break;default:d=0;break}return d},w=c=>{let o=c.getTime()-Date.now();Math.abs(o)<6e4&&(o=0);const d=Object.keys(dt).find(M=>Math.abs(o)>=dt[M])||"second",m=v(c,d);return h(m,d)},b=c=>{ve[t]??(ve[t]=new Intl.DisplayNames(t,{style:"long",type:"dateTimeField"}));const o=ve[t],d=l(vn(c,s,u),"week"),m=l(bn(c,s,u),"week");return`${jt(o.of("weekOfYear"))} ${hn(c,s,u)}, ${pn(c,s,u)} (${d} - ${m})`},x=c=>{const o=l(c,"year"),d=$n(c,u);return`${r(`date_quarter_q${d}`,[o])}`};switch(n){case"relative":return w(e);case"week":return b(e);case"quarteryear":return x(e);default:return l(e,n)}}de.extend(on);de.extend(un);const he=(e,r=J.ISO_8601,t)=>{const i=de(e).tz(t).day();switch(r){case J.ISO_8601:return(i+6)%7;case J.ARABIC:return(i+1)%7;case J.HEBREW:case J.US:case J.JP:return i;default:throw new Error("Unsupported calendar type.")}},fn=(e,r)=>{const t=new Date(e);return!Number.isNaN(t.getTime())&&r<100&&t.setUTCFullYear(r),t},hn=(e,r=J.ISO_8601,t)=>{let i=de(e).tz(t).utc().startOf("day");const n=r===J.US?6:3;i=i.date(i.date()+n-he(e,r,t));const f=de.utc().year(i.year()).month(0).date(r===J.US?1:4).startOf("day");return 1+Math.round(((i.toDate().getTime()-f.toDate().getTime())/864e5-n+he(f,r,"UTC"))/7)},pn=(e,r=J.ISO_8601,t)=>{let i=de(e).tz(t).utc();const n=r===J.US?6:3;return i=i.date(i.date()+n-he(e,r,t)),i.year()},gn=/^T?\d{2}:\d{2}/,lt=e=>{let r=new Date(e);if(e&&typeof e=="string"){let[t,i,n,f,s,u,l]=[1970,1,1,0,0,0,0];gn.test(e)?[f,s,u=0,l=0]=e.toString().slice(Number(e.startsWith("T"))).split(/[.:/]/).map(Number):[t,i,n=0,f=0,s=0,u=0,l=0]=e.toString().split(/[.: TZ+-]/).map(Number),r=fn(Date.UTC(t,i-1,n,f,s,u,l),t)}else typeof e=="number"&&(r=new Date(e));return r};function $n(e,r){return[1,2,3,4][Math.floor(de(e).tz(r).month()/3)]}const vn=(e,r=J.ISO_8601,t)=>{const i=new Date(e),n=he(i,r,t);return n!==0&&i.setHours(i.getHours()-24*n),i},bn=(e,r=J.ISO_8601,t)=>{const i=new Date(e),n=he(i,r,t);return n!==6&&i.setHours(i.getHours()+24*(6-n)),i},yn=new Date;yn.setUTCDate(1);const xn=e=>e.toString()!=="Invalid Date",wn=I.span``,mt=T.forwardRef(function({value:r,variant:t,format:i="medium",clockFormat:n,...f},s){const{locale:u}=dr(),l=le();return a.jsx(wn,{ref:s,...f,children:(r||r===0)&&xn(lt(r))?jt(mn(lt(r),{t:l,locale:u,format:i,variant:t,clockFormat:n,timeZone:"UTC"})):a.jsx(Lt,{})})}),Sn="budicon",Tn="minus",Dn=()=>a.jsx("path",{d:"M3.5 11.58h18v1.84h-18v-1.84Z"}),kn="0 0 25 25",Rt=Object.freeze(Object.defineProperty({__proto__:null,Component:Dn,name:Tn,set:Sn,viewBox:kn},Symbol.toStringTag,{value:"Module"})),Mn=I.div`
  cursor: pointer;
`,jn=T.forwardRef(function({children:r,onClick:t,onKeyDown:i,...n},f){return a.jsx(Mn,{...n,tabIndex:0,role:"button",onKeyDown:s=>((s.key===" "||s.key==="Enter")&&s.target===s.currentTarget&&s.currentTarget.click(),i==null?void 0:i(s)),onClick:s=>{if(!(s.target instanceof Element&&s.target.closest("button, a, [role='button'], [role='link']")!==s.currentTarget))return t==null?void 0:t(s)},ref:f,children:r})}),Bt=({enabled:e,moveRef:r,grabRef:t=r})=>{const i=T.useRef(),n=T.useRef(),f=T.useRef(),s=T.useRef(-1),u=T.useRef(),l=T.useRef({mouseMoved:!1});return T.useEffect(()=>{if(!e||!r.current||!t.current)return;const h=d=>{!r.current||!f.current||!n.current||(u.current=d,r.current.style.left=`clamp(0px, ${d}px, ${f.current-n.current.width}px)`)};u.current!==void 0&&(n.current=r.current.getBoundingClientRect(),f.current=document.documentElement.clientWidth,h(u.current));const v=d=>{if(!i.current||!r.current||!n.current)return;const M=d.clientX-i.current+n.current.left;l.current.mouseMoved=!0,cancelAnimationFrame(s.current),s.current=requestAnimationFrame(()=>{h(M)})},w=()=>{t.current&&(t.current.style.userSelect="",document.removeEventListener("mousemove",v))},b=d=>{const m=d.getModifierState("Alt"),M=d.button===0;!r.current||!t.current||!M||m||(document.addEventListener("mouseup",w,{once:!0}),i.current=d.clientX,n.current=r.current.getBoundingClientRect(),f.current=document.documentElement.clientWidth,t.current.style.userSelect="none",document.addEventListener("mousemove",v),l.current.mouseMoved=!1)},x=d=>{t.current&&d.key==="Alt"&&(t.current.style.cursor="")},c=d=>{var _;if(!r.current||(t.current&&d.key==="Alt"&&(t.current.style.cursor="auto"),!((_=t.current)!=null&&_.matches(":focus-visible"))||d.key!=="ArrowLeft"&&d.key!=="ArrowRight"))return;n.current=r.current.getBoundingClientRect(),f.current=document.documentElement.clientWidth;const m=f.current*.05,M=d.key==="ArrowLeft"?-1:1,z=n.current.left+m*M;h(z)},o=()=>{!r.current||u.current===void 0||(n.current=r.current.getBoundingClientRect(),f.current=document.documentElement.clientWidth,h(u.current))};return t.current.addEventListener("mousedown",b),document.addEventListener("keydown",c),document.addEventListener("keyup",x),window.addEventListener("resize",o),()=>{var d;(d=t.current)==null||d.removeEventListener("mousedown",b),document.removeEventListener("mousemove",v),document.removeEventListener("keydown",c),document.removeEventListener("keyup",x),window.removeEventListener("resize",o)}},[e]),l};St(kt,Rt,Ot);const Wt=I(jn)(({theme:{base:e}})=>j`
    height: 3rem;
    width: 30ch;
    border-radius: calc(0.5 * ${e["border-radius"]}) calc(0.5 * ${e["border-radius"]}) 0 0;
    color: ${e.palette["foreground-color"]};
    background-color: ${e.palette["primary-background"]};
    box-shadow: ${e.shadow.low};
    cursor: pointer;
    user-select: none;
    pointer-events: auto;
    transition: box-shadow ${e.animation.speed} ${e.animation.timing.ease};

    &:hover {
      box-shadow: ${e.shadow.high};
    }

    &:focus {
      outline: none;
      box-shadow: ${e.shadow.focus};
    }

    > div:first-child {
      margin-inline-end: auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &[data-moveable] {
      position: absolute;
    }
  `);Wt.defaultProps=V;const Cn=({heading:e,onBeforeClose:r,onAfterClose:t,onRequestDismiss:i,onRequestActivate:n,onRequestMinimize:f,onRequestMaximize:s,onRequestDock:u,...l})=>{const{dismissible:h,dockable:v,moveable:w,maximizable:b,dock:x,maximize:c,activate:o,unmount:d}=Dt(),m=le(),M=T.useRef(null),O=Bt({enabled:!!w,moveRef:M});return a.jsxs(K,{...l,container:{alignItems:"center",justify:"between",pad:[0,2],gap:2},item:{shrink:0},as:Wt,"aria-label":`${m("activate")} ${e}`,onKeyDown:z=>{(z.key==="Space"||z.key==="Enter")&&z.target===z.currentTarget&&z.preventDefault()},onClick:()=>{var z;(z=O.current)!=null&&z.mouseMoved||((n==null?void 0:n())!==!1&&!v&&o(),(u==null?void 0:u())!==!1&&v&&x())},"data-app-region":!0,"data-moveable":w?"":void 0,ref:M,children:[a.jsx("div",{children:e}),(b||v||h)&&a.jsxs(K,{container:!0,children:[b&&a.jsx(ee,{label:m("maximize"),"aria-label":m("modal_maximize"),variant:"simple",onClick:()=>{(s==null?void 0:s())!==!1&&c()},icon:!0,children:a.jsx(oe,{name:"undock"})}),v&&a.jsx(ee,{label:m("dock"),"aria-label":m("modal_dock"),variant:"simple",onClick:()=>{(u==null?void 0:u())!==!1&&x()},icon:!0,children:a.jsx(oe,{name:"dock"})}),h&&a.jsx(ee,{label:m("close"),"aria-label":m("modal_close"),variant:"simple",onClick:()=>{(i==null?void 0:i())!==!1&&(r==null||r(),d(),t==null||t())},icon:!0,children:a.jsx(oe,{name:"times"})})]})]})},On=I.div``,Me=I.header(({theme:{base:e},hasAction:r})=>{const t=r?.75:0;return j`
      padding: calc(${3-t} * ${e.spacing}) calc(${3-t} * ${e.spacing})
        calc(${2.5-t} * ${e.spacing}) calc(3 * ${e.spacing});

      h2 {
        margin-block-start: calc(0.5 * ${e.spacing});
      }

      h2 > ${wt} {
        margin-inline-end: ${e.spacing};
      }

      ${He} {
        color: ${e.palette["foreground-color"]};
      }
    `});Me.defaultProps=V;const Je=I.div(({theme:{base:e}})=>j`
    position: relative;
    padding: calc(0.5 * ${e.spacing}) calc(3 * ${e.spacing});

    @media (height >= 31.25rem) {
      overflow-y: auto;
    }

    &:last-child {
      padding-bottom: calc(3 * ${e.spacing});
    }

    & > ${lr} {
      top: var(--scroll-top, 0);
    }
  `);Je.defaultProps=V;const Vt=I(ce)(({theme:{base:e},alert:r,autoWidth:t,center:i,stretch:n,state:f})=>{let s="80ch",u="80ch";return r?(s="60ch",u="60ch"):t&&(u="100%"),j`
    position: relative;
    box-shadow: ${e.shadow.high};

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    @media (forced-colors: active) {
      border: 0.0625rem solid transparent;
    }

    ${Ae} {
      padding: calc(2.5 * ${e.spacing}) calc(3 * ${e.spacing}) calc(3 * ${e.spacing});
    }

    ${!r&&n?j`
          height: calc(100% - 1rem);

          ${t?j`
                max-width: min(calc(100% - 1rem), ${u});
              `:j`
                width: calc(100% - 1rem);
              `}

          @media (min-width: ${e.breakpoints.sm}) {
            height: calc(100% - 2rem);

            ${t?j`
                  max-width: min(calc(100% - 2rem), ${u});
                `:j`
                  width: calc(100% - 2rem);
                `}
          }

          @media (min-width: ${e.breakpoints.md}) {
            height: calc(100% - 4rem);

            ${t?j`
                  max-width: min(calc(100% - 4rem), ${u});
                `:j`
                  width: calc(100% - 4rem);
                `}
          }
        `:j`
          min-width: min(calc(100% - 1rem), ${s});
          max-width: min(calc(100% - 1rem), ${u});
          max-height: calc(100% - 1rem);

          &:not(:has(footer)) ${ur} {
            border-end-start-radius: ${e["border-radius"]};
            border-end-end-radius: ${e["border-radius"]};
          }

          ${!i&&j`
            margin-block-start: 0.5rem;
          `}

          @media (min-width: ${e.breakpoints.sm}) {
            min-width: min(calc(100% - 2rem), ${s});
            max-width: min(calc(100% - 2rem), ${u});
            max-height: calc(100% - 2rem);
            ${!i&&j`
              margin-block-start: 1rem;
            `}
          }

          @media (min-width: ${e.breakpoints.md}) {
            min-width: min(calc(100% - 4rem), ${s});
            max-width: min(calc(100% - 4rem), ${u});
            max-height: calc(100% - 4rem);
            ${!i&&j`
              margin-block-start: 2rem;
            `}
          }
        `}

    ${f==="docked"&&j`
      /*
       * This seems like the most optimal of the suboptimal solutions.
       * https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
       */
      &&& {
        /* Using non logical properties due to Safari 14.x support and since the inline bottom values are the same. */
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        pointer-events: auto;
      }
    `}

    &[aria-busy='true'] {
      ${Je} {
        /* TODO: Replace with useScrollToggle hook. */
        overflow: hidden;
        min-height: 8rem;
      }
    }

    &[data-moveable] {
      position: absolute;

      ${Me} {
        cursor: grab;

        &:focus-visible {
          outline: none;
        }

        &:active {
          cursor: grabbing;
        }
      }

      &:has(${Me}:focus-visible) {
        box-shadow: ${e.shadow.high}, ${e.shadow.focus};
      }
    }
  `});Vt.defaultProps=V;St(kt,Rt,jr,Ot);const In=T.forwardRef(function(r,t){const{as:i="div",progress:n=!1,heading:f,headingTag:s="h2",count:u,children:l,actions:h,stretch:v=!1,center:w=!1,defaultFocus:b,onBeforeOpen:x,onAfterOpen:c,onBeforeClose:o,onAfterClose:d,onRequestDismiss:m,onRequestMinimize:M,onRequestMaximize:O,onRequestDock:z,onRequestActivate:_,...P}=r,{alert:F,dismissible:Y,minimizable:A,maximizable:U,dockable:C,moveable:ne,state:L,dismiss:D,minimize:$,maximize:p,dock:y,unmount:g,top:k}=Dt(),S=Be(t),E=T.useRef(null),H=T.useRef(null),N=T.useRef(null),R=T.useRef(null),Z=T.useRef(null),te=Mt(L),G=mr(),q=le(),[X,B]=T.useState(void 0),[Q,ie]=T.useState(!0),ae=Ve(),pe=()=>{(m==null?void 0:m())!==!1&&D()},Ge=()=>{if(n)return;const W=gr(S);if(b!=null&&b.current)b.current.focus();else{const re=W.find(se=>{var et;return(et=H.current)==null?void 0:et.contains(se)})??Z.current??W[0];re==null||re.focus()}};fr(S,!1),hr("shortcut",W=>W.stopPropagation(),{eventOptions:{capture:!0}}),yr("mousedown",[S],W=>{var re;["minimized","docked","closed"].includes(L)||(Y?W.target===R.current&&pe():(re=S.current)==null||re.focus())}),T.useEffect(()=>{L!=="minimized"&&((L==="open"||L==="maximized"||L==="docked")&&Ge(),L==="docked"&&ie(!1),L==="closed"&&te==="docked"&&(o==null||o(),g(),d==null||d()))},[L]),T.useEffect(()=>{L==="closed"&&(o==null||o(),g(),d==null||d())},[]);const er=T.useCallback(W=>{Y&&(L==="open"||L==="maximized")&&W.key==="Escape"&&k&&pe()},[Y,L,k,pe]),ge=T.useCallback(W=>{W.repeat&&(W.key==="Enter"||W.key===" ")&&W.preventDefault()},[]);T.useEffect(()=>{n||Ge(),typeof n=="object"&&n.message!==X?B(n.message):n===!0&&B(q("loading"))},[n]),T.useLayoutEffect(()=>{if(!S.current)return;const W=["0 -4rem","0 0"],re={duration:ir(ae.base.animation.speed)*2,easing:ae.base.animation.timing.ease,fill:"forwards"};let se;L==="open"?se=S.current.animate({translate:W},re):L==="closed"&&te==="open"&&(se=S.current.animate({translate:W.reverse()},re)),se==null||se.addEventListener("finish",()=>{se.cancel()})},[L]);const Xe=v||L==="maximized",Oe=L==="docked"&&!!ne;Bt({enabled:Oe,moveRef:S,grabRef:E});const Qe=a.jsxs(K,{...P,container:{direction:"column"},ref:S,as:Vt,forwardedAs:i,onClick:W=>W.stopPropagation(),onKeyDown:er,alert:F,role:F?"alertdialog":"dialog",stretch:Xe,center:w,"aria-labelledby":`${G}-heading`,"aria-describedby":F?`${G}-content`:void 0,"aria-modal":L!=="docked",state:L,"aria-busy":!!n,"data-moveable":Oe?"":void 0,children:[a.jsxs(K,{container:{justify:"between",alignItems:"start",gap:1},item:{shrink:0},as:Me,role:"none",hasAction:A||Y,ref:E,tabIndex:Oe?0:void 0,children:[a.jsxs(K,{container:{alignItems:"center",gap:1},as:qe,variant:s,id:`${G}-heading`,children:[a.jsx("span",{children:f}),typeof u=="number"&&a.jsx(xr,{children:u})]}),a.jsxs(K,{container:!0,children:[U&&!F&&L!=="maximized"&&a.jsx(ee,{icon:!0,variant:"simple",label:q("maximize"),"aria-label":q("modal_maximize"),onKeyDown:ge,onClick:()=>{(O==null?void 0:O())!==!1&&p()},children:a.jsx(oe,{name:"undock"})}),C&&!F&&L!=="docked"&&a.jsx(ee,{icon:!0,variant:"simple",label:q("dock"),"aria-label":q("modal_dock"),onKeyDown:ge,onClick:()=>{(z==null?void 0:z())!==!1&&y()},children:a.jsx(oe,{name:"dock"})}),A&&!F&&a.jsx(ee,{icon:!0,variant:"simple",label:q("minimize"),"aria-label":q("modal_minimize"),onKeyDown:ge,onClick:()=>{(M==null?void 0:M())!==!1&&$()},children:a.jsx(oe,{name:"minus"})}),Y&&!F&&a.jsx(ee,{icon:!0,variant:"simple",label:q("close"),"aria-label":q("modal_close"),onKeyDown:ge,onClick:()=>{Q||pe()},ref:Z,children:a.jsx(oe,{name:"times"})})]})]}),a.jsxs(K,{item:{grow:1},as:Je,ref:H,style:H.current?{"--scroll-top":`${H.current.scrollTop}px`}:void 0,children:[l&&a.jsx(On,{id:`${G}-content`,inert:n?"":void 0,children:l}),a.jsx(Tt,{visible:!!n,focusOnVisible:!0,delay:!0,placement:"local",message:X,onTransitionEndOut:()=>B(void 0)})]}),h&&a.jsx(Er,{as:"footer",role:"none",actionsRef:N,actionsEl:h})]}),tr=L==="docked"?Qe:a.jsx(pr,{ref:R,container:{alignItems:w||Xe?"center":"start"},transitionSpeed:"slow",open:L==="open"||L==="maximized",onBeforeTransitionIn:x,onAfterTransitionIn:()=>{ie(!1),c==null||c()},onBeforeTransitionOut:o,onAfterTransitionOut:()=>{g(),d==null||d()},children:Qe});return L==="minimized"?a.jsx(Cn,{...r,...P}):tr}),Zt=I.table(e=>{const{hoverHighlight:r,theme:{base:{palette:{"secondary-background":t},spacing:i},components:{table:n}}}=e,f=`calc(${n.header["vertical-spacing"]} * ${i})`,s=`calc(${n.body["vertical-spacing"]} * ${i})`,u=`calc(max(${n.header["horizontal-spacing"]}, ${n.body["horizontal-spacing"]}) * ${i})`,l=`${n.header["border-width"]} solid ${n.header["border-color"]}`,h=`${n.body["border-width"]} solid ${n.body["border-color"]}`;return j`
    border-collapse: collapse;
    width: 100%;
    background-color: transparent;

    thead {
      tr th {
        padding: ${`${n.spacing["vertical-inner"]?f:"0"} ${n.spacing["horizontal-inner"]?u:"0"}`};
        border-bottom: ${n.border["horizontal-inner"]?l:"none"};
        border-inline-end: ${n.border["vertical-inner"]?l:"none"};
      }

      tr:first-of-type th {
        padding-top: ${n.spacing["vertical-outer"]?f:"0"};
        border-top: ${n.border["horizontal-outer"]?l:"none"};
      }

      tr th:first-of-type {
        padding-inline-start: ${n.spacing["horizontal-outer"]?u:"0"};
        border-inline-start: ${n.border["vertical-outer"]?l:"none"};
      }

      tr th:last-of-type {
        padding-inline-end: ${n.spacing["horizontal-outer"]?u:"0"};
        border-inline-end: ${n.border["vertical-outer"]?l:"none"};
      }
    }

    tbody {
      tr td {
        padding: ${`${n.spacing["vertical-inner"]?s:"0"} ${n.spacing["horizontal-inner"]?u:"0"}`};
        border-bottom: ${n.border["horizontal-inner"]?h:"none"};
        border-inline-end: ${n.border["vertical-inner"]?h:"none"};
      }

      tr:last-of-type td {
        padding-bottom: ${n.spacing["vertical-outer"]?s:"0"};
        border-bottom: ${n.border["horizontal-outer"]?h:"none"};
      }

      tr td:first-of-type {
        padding-inline-start: ${n.spacing["horizontal-outer"]?u:"0"};
        border-inline-start: ${n.border["vertical-outer"]?h:"none"};
      }

      tr td:last-of-type {
        padding-inline-end: ${n.spacing["horizontal-outer"]?u:"0"};
        border-inline-end: ${n.border["vertical-outer"]?h:"none"};
      }
    }

    ${r&&j`
      tbody tr:hover td,
      tbody tr:focus-within td {
        background-color: ${t};
      }
    `}
  `});Zt.defaultProps=V;const Ye=I.td(({align:e,noWrap:r=!1})=>j`
    text-align: ${e||"left"};
    white-space: ${r?"nowrap":null};
  `);Ye.defaultProps=V;const qt=I.th(({theme:{base:{"font-size":e,"font-scale":r},components:{table:{header:t}}}})=>{const i=or(e,r);return j`
      font-size: ${i[t["font-size"]]};
      font-weight: ${t["font-weight"]};
      color: ${t["foreground-color"]};
      background-color: ${t["background-color"]};
    `});qt.defaultProps=V;const Jt=I.td(({theme:{components:{table:{body:e}}}})=>j`
    color: ${e["foreground-color"]};
    background-color: ${e["background-color"]};
  `);Jt.defaultProps=V;const Kt=I.td`
  padding: calc(2 * ${e=>e.theme.base.spacing});
`;Kt.defaultProps=V;const zn=I.td`
  position: relative;
  height: 6rem;
`,Gt=I.div`
  /* Setting it on a table element requires 'display: block' which breaks a11y. */
  overflow-x: auto;
`;Gt.defaultProps=V;const Xt=I.caption`
  ${sr}
`;Xt.defaultProps=V;const Un=T.forwardRef(function(r,t){const{columns:i,data:n=[],hoverHighlight:f=!1,loading:s=!1,loadingMessage:u="",title:l,...h}=r;return a.jsx(Zr,{children:a.jsxs(qr,{container:{rowGap:1},children:[l&&a.jsx(qe,{variant:"h2",as:"span","aria-hidden":!0,children:l}),a.jsx(Gt,{children:a.jsxs(Zt,{ref:t,hoverHighlight:f,...h,children:[l&&a.jsx(Xt,{children:l}),a.jsx("thead",{children:a.jsx("tr",{children:i.map(v=>T.createElement(Ye,{as:qt,...v,scope:"col",key:v.label},v.label))})}),a.jsxs("tbody",{children:[s&&a.jsx("tr",{children:a.jsx(zn,{colSpan:i.length,children:a.jsx(Tt,{placement:"local",message:u})})}),n.length>0&&!s&&n.map(v=>a.jsx("tr",{children:i.map(({renderer:w,...b})=>T.createElement(Ye,{as:Jt,...b,key:`${b.label}-${v.id}`},typeof w=="function"?a.jsx(w,{...v}):v[w]))},v.id)),n.length===0&&!s&&a.jsx("tr",{children:a.jsx(Kt,{colSpan:i.length,children:a.jsx(wr,{})})})]})]})})]})})}),Ln=I.div(()=>j`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.5rem 0;

    table {
      width: 100%;
      border-collapse: collapse;
    }
  `);function Qt(e){const{createLabel:r="Created",updateLabel:t="Updated",resolveLabel:i="Resolved",createOperator:n,updateOperator:f,resolveOperator:s,createDateTime:u,updateDateTime:l,resolveDateTime:h}=e,[v,w]=T.useState(null),x=[n!=null&&n.userId?{id:"create",action:r,operator:n.userName,userId:n.userId,dateTime:u}:null,f!=null&&f.userId?{id:"update",action:t,operator:f.userName,userId:f.userId,dateTime:l}:null,s!=null&&s.userId?{id:"resolve",action:i,operator:s.userName,userId:s.userId,dateTime:h}:null].filter(o=>o!==null),c=[{label:"Action",renderer:"action"},{label:"Operator",renderer:"operator"},{label:"User ID",renderer:"userId"},{label:"Date & Time",renderer:({dateTime:o})=>o?a.jsx(mt,{value:o,variant:"datetime",format:"long"}):a.jsx("span",{children:"—"})},{label:"",renderer:o=>a.jsx(ee,{variant:"link",compact:!0,onClick:()=>w(o),children:"Details"})}];return a.jsxs(Ln,{children:[a.jsx(Un,{title:"Audit Details",columns:c,data:x,hoverHighlight:!0}),v&&a.jsx(In,{heading:`${v.action} — Operator Details`,actions:a.jsx(ee,{variant:"secondary",onClick:()=>w(null),children:"Close"}),onRequestDismiss:()=>w(null),children:a.jsxs(K,{container:{direction:"column",gap:2},children:[a.jsxs(K,{container:{direction:"row",alignItems:"center",gap:2},children:[a.jsx(Ar,{name:v.operator,size:"l"}),a.jsx(qe,{variant:"h3",children:v.operator})]}),a.jsx(Xr,{fields:[{id:"action",name:"Action",value:v.action},{id:"userId",name:"User ID",value:v.userId},{id:"dateTime",name:"Date & Time",value:v.dateTime?a.jsx(mt,{value:v.dateTime,variant:"datetime",format:"long"}):a.jsx("span",{children:"—"})}]})]})})]})}const En=ar(Qt);Qt.__docgenInfo={description:"",methods:[],displayName:"PegaFieldAdditionalDetails",props:{createLabel:{required:!0,tsType:{name:"string"},description:""},updateLabel:{required:!0,tsType:{name:"string"},description:""},resolveLabel:{required:!0,tsType:{name:"string"},description:""},createOperator:{required:!0,tsType:{name:"signature",type:"object",raw:"{ userId: string; userName: string }",signature:{properties:[{key:"userId",value:{name:"string",required:!0}},{key:"userName",value:{name:"string",required:!0}}]}},description:""},updateOperator:{required:!0,tsType:{name:"signature",type:"object",raw:"{ userId: string; userName: string }",signature:{properties:[{key:"userId",value:{name:"string",required:!0}},{key:"userName",value:{name:"string",required:!0}}]}},description:""},resolveOperator:{required:!0,tsType:{name:"signature",type:"object",raw:"{ userId: string; userName: string }",signature:{properties:[{key:"userId",value:{name:"string",required:!0}},{key:"userName",value:{name:"string",required:!0}}]}},description:""},createDateTime:{required:!0,tsType:{name:"string"},description:""},updateDateTime:{required:!0,tsType:{name:"string"},description:""},resolveDateTime:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!0,tsType:{name:"boolean"},description:""}},composes:["PConnFieldProps"]};const ue={createLabel:"Created",updateLabel:"Updated",updateDateTime:"2023-01-16T14:53:33.280Z",createDateTime:"2023-01-16T14:53:33.198Z",updateOperator:{userId:"admin@mediaco",userName:"admin"},createOperator:{userId:"admin@mediaco",userName:"admin"}},Wn={title:"Pega/Field/Additional Details",component:En,excludeStories:/.*Data$/},Ke={createLabel:ue.createLabel,updateLabel:ue.updateLabel,createOperator:ue.createOperator,updateOperator:ue.updateOperator,createDateTime:ue.createDateTime,updateDateTime:ue.updateDateTime,getPConnect:()=>({getActionsApi:()=>({updateFieldValue:()=>{},triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})},be={args:Ke},ye={args:{...Ke,resolveLabel:"Resolved",resolveOperator:{userId:"manager@mediaco",userName:"manager"},resolveDateTime:"2023-01-20T09:00:00.000Z"}},xe={args:{...Ke,updateOperator:{userId:"",userName:""}}};var ft,ht,pt;be.parameters={...be.parameters,docs:{...(ft=be.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(pt=(ht=be.parameters)==null?void 0:ht.docs)==null?void 0:pt.source}}};var gt,$t,vt;ye.parameters={...ye.parameters,docs:{...(gt=ye.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    resolveLabel: 'Resolved',
    resolveOperator: {
      userId: 'manager@mediaco',
      userName: 'manager'
    },
    resolveDateTime: '2023-01-20T09:00:00.000Z'
  }
}`,...(vt=($t=ye.parameters)==null?void 0:$t.docs)==null?void 0:vt.source}}};var bt,yt,xt;xe.parameters={...xe.parameters,docs:{...(bt=xe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    updateOperator: {
      userId: '',
      userName: ''
    }
  }
}`,...(xt=(yt=xe.parameters)==null?void 0:yt.docs)==null?void 0:xt.source}}};const Vn=["Default","WithResolvedOperator","CreateOnly"];export{xe as CreateOnly,be as Default,ye as WithResolvedOperator,Vn as __namedExportsOrder,Wn as default};
