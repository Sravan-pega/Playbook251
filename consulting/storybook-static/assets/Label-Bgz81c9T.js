import{r as b}from"./index-C5e9SFkp.js";import{u as Z,i as m,n as H,g as N,c as q,w as A,b as K,d as U,e as M,F as J,I as Q,T as W,S as X,r as P,f as C}from"./Badges.test-ids-Cv4_ccaG.js";import{j as g}from"./index-Cws_IRuu.js";import{q as w,t as S,r as j,A as n,d as _,c as F,h as z,a as Y}from"./useConsolidatedRef-FEYVq0tu.js";const be=e=>e.charAt(0).toUpperCase()+e.slice(1),ye=(e,t,r)=>{var u;const{portalTarget:s}=Z(),o=((u=s==null?void 0:s.ownerDocument)==null?void 0:u.defaultView)||window,i=b.useCallback(d=>{const a=d.composedPath(),c=a[0];if(!m(c,Node))return;let f=0,$=1;for(;!m(a[f],Document);){const l=a[f],p=a[$];if(!l||!p)return;if(m(p,DocumentFragment)||m(p,Document)){if(!m(l,Node)||!p.contains(l))return;f=$}else if(m(l,DocumentFragment)){if(!m(p,Element)||p.shadowRoot!==l)return;f=$}$+=1}H(t).flatMap(l=>!m(l,Element)&&!m(l,Document)&&!m(l,DocumentFragment)?[l]:[l,...N(l)]).every(l=>l!==c&&!l.contains(c))&&r(d)},[...t,r]);b.useEffect(()=>{const d=Array.isArray(e)?e:[e];return d.forEach(a=>{var c;return(c=o==null?void 0:o.document)==null?void 0:c.addEventListener(a,i)}),()=>{d.forEach(a=>{var c;return(c=o==null?void 0:o.document)==null?void 0:c.removeEventListener(a,i)})}},[e,i])},we=e=>{const t=b.useRef();return b.useLayoutEffect(()=>{t.current=e},[e]),t.current},v="budicon",ee="galaxy",te=()=>g.jsx("path",{d:"M17.66 3.3 16.5 6.5l-3.3 1.16c-.22.088-.264.562 0 .67l3.3 1.17 1.16 3.3c.1.3.543.3.67 0l1.17-3.3c1.981-.7 3.081-1.09 3.3-1.17.328-.119.205-.598 0-.67L19.5 6.5l-1.17-3.2c-.187-.415-.522-.377-.67 0ZM15.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}),ne="0 0 25 25",re=Object.freeze(Object.defineProperty({__proto__:null,Component:te,name:ee,set:v,viewBox:ne},Symbol.toStringTag,{value:"Module"})),se="streamline",oe="folder-empty",ae=()=>g.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.188 7.313v-2.25a1.125 1.125 0 0 0-1.126-1.125H6.189V2.813a1.125 1.125 0 0 0-1.125-1.125H1.688A1.125 1.125 0 0 0 .563 2.813v12.224a1.275 1.275 0 0 0 2.502.329l1.763-7.243a1.125 1.125 0 0 1 1.081-.81h10.404A1.125 1.125 0 0 1 17.4 8.726l-1.65 6.75a1.125 1.125 0 0 1-1.087.835H1.835"}),ce="0 0 18 18",ie=Object.freeze(Object.defineProperty({__proto__:null,Component:ae,name:oe,set:se,viewBox:ce},Symbol.toStringTag,{value:"Module"})),R=q("empty-state",["message","icon"]);P(re);P(ie);const D=w.div(({theme:e})=>{const t=S(()=>j(e.base.palette["foreground-color"],e.base.transparency["transparent-2"]));return n`
    height: 100%;

    ${X} {
      font-size: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      color: ${t};
    }
  `});D.defaultProps=_;const le=b.forwardRef(function(t,r){const{base:{"icon-set":s}}=K(),o=U(),{testId:i,message:u=o("no_items"),...d}=t,a=M(i,R);return g.jsxs(J,{"data-testid":a.root,...d,as:D,ref:r,container:{direction:"column",alignItems:"center",justify:"center",gap:1},children:[g.jsx(Q,{"data-testid":a.icon,name:s==="streamline"?"folder-empty":"galaxy"}),g.jsx(W,{"data-testid":a.message,variant:"secondary",children:u})]})}),_e=A(le,R),T=e=>["between","around","evenly"].includes(e)?`space-${e}`:e,L=e=>{if(!e)return;if(e===!0)return n`
      display: grid;
    `;const{inline:t,pad:r,cols:s,autoCols:o,rows:i,autoRows:u,autoFlow:d,areas:a,template:c,colGap:f,rowGap:$,gap:h,justifyItems:l,justifyContent:p,alignItems:E,alignContent:I}=e;return n`
    display: ${t?"inline-grid":"grid"};

    ${r!==void 0&&n`
      padding: ${({theme:{base:{spacing:y}}})=>(Array.isArray(r)?r:[r]).map(B=>`calc(${B} * ${y})`).join(" ")};
    `}

    ${s&&n`
      grid-template-columns: ${s};
    `}

    ${o&&n`
      grid-auto-columns: ${o};
    `}

    ${i&&n`
      grid-template-rows: ${i};
    `}

    ${u&&n`
      grid-auto-rows: ${u};
    `}

    ${d&&n`
      grid-auto-flow: ${d};
    `}

    ${a&&n`
      grid-template-areas: ${a};
    `}

    ${c&&n`
      grid-template: ${c};
    `}

    ${h!==void 0&&n`
      gap: calc(${h} * ${y=>y.theme.base.spacing});
    `}

    ${f!==void 0&&n`
      column-gap: calc(${f} * ${y=>y.theme.base.spacing});
    `}

    ${$!==void 0&&n`
      row-gap: calc(${$} * ${y=>y.theme.base.spacing});
    `}

    ${l&&n`
      justify-items: ${l};
    `}

    ${p&&n`
      justify-content: ${T(p)};
    `}

    ${E&&n`
      align-items: ${E};
    `}

    ${I&&n`
      align-content: ${T(I)};
    `}
  `},k=e=>{if(!e)return;const{colStart:t,colEnd:r,colStartEnd:s,rowStart:o,rowEnd:i,rowStartEnd:u,area:d,justifySelf:a,alignSelf:c}=e;return n`
    ${t&&n`
      grid-column-start: ${t};
    `}

    ${r&&n`
      grid-column-end: ${r};
    `}

    ${s&&n`
      grid-column: ${s};
    `}

    ${o&&n`
      grid-row-start: ${o};
    `}

    ${i&&n`
      grid-row-end: ${i};
    `}

    ${u&&n`
      grid-row: ${u};
    `}

    ${d&&n`
      grid-area: ${d};
    `}

    ${a&&n`
      justify-self: ${a};
    `}

    ${c&&n`
      align-self: ${c};
    `}
  `},ue=["xs","sm","md","lg","xl"],G=w.div(({container:e,item:t,theme:{base:{breakpoints:r}},xs:s,sm:o,md:i,lg:u,xl:d})=>{const a={xs:s,sm:o,md:i,lg:u,xl:d};return n`
      ${L(e)}
      ${k(t)}

    ${ue.map(c=>{var f,$;return a[c]&&n`
            @media screen and (min-width: ${r[c]}) {
              ${L((f=a[c])==null?void 0:f.container)}
              ${k(($=a[c])==null?void 0:$.item)}
            }
          `})}
    `});G.defaultProps=_;const he=b.forwardRef(function(t,r){return g.jsx(G,{...t,ref:r})}),O=w.span(({theme:e,variant:t,children:r})=>{const{foreground:s,background:o}=e.components.badges.count[t],i=S(()=>j(s,.1)),u=F(e.base["font-size"],e.base["font-scale"]);return n`
    display: inline-block;
    block-size: 1rem;
    flex-shrink: 0;
    border-radius: calc(9999 * ${e.base["border-radius"]});
    color: ${s};
    background-color: ${o};
    box-shadow: inset 0 0 0 0.0625rem ${i};
    font-size: ${u.xxs};
    font-weight: ${e.base["font-weight"].bold};
    line-height: 1rem;
    text-align: center;
    white-space: nowrap;

    ${r.length===1?n`
          aspect-ratio: 1 / 1;
        `:n`
          padding-inline: ${e.base.spacing};
        `}
  `});O.defaultProps=_;const x=e=>e<1e3?"":1e3<=e&&e<1e6?"K":1e6<=e&&e<1e9?"M":1e9<=e&&e<1e12?"B":1e12<=e&&e<1e15?"T":"",de=e=>{for(let t=3;t<15;t+=3){if(e<10**(t+1))return`${`${e}`.slice(0,1)}.${`${e}`.slice(1,2)}${x(e)}`;if(e<10**(t+2))return`${`${e}`.slice(0,2)}${x(e)}`;if(e<10**(t+3))return`${`${e}`.slice(0,3)}${x(e)}`}return"999T+"},fe=e=>{const t=Math.abs(e);return t<1e3?`${e}`:`${e<0?"-":""}${de(t)}`},xe=A(b.forwardRef(function({testId:t,variant:r="default",children:s,...o},i){const u=M(t,C);return Number.isInteger(s)?g.jsx(O,{"data-testid":u.root,variant:r,...o,ref:i,children:fe(s)}):null}),C),V=w.label(({theme:e,labelHidden:t})=>{const{"foreground-color":r}=e.components.label,s=S(()=>t?z:j(Y(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),o=F(e.base["font-size"],e.base["font-scale"]);return t?z:n`
          max-width: max-content;
          font-size: ${o[e.components.label["font-size"]]};
          font-weight: ${e.components.label["font-weight"]};
          color: ${r==="auto"?s:r};
        `});V.defaultProps=_;const Se=b.forwardRef(function({children:t,labelHidden:r=!1,htmlFor:s,...o},i){return g.jsx(V,{ref:i,labelHidden:r,htmlFor:s===""?void 0:s,...o,children:t})});export{xe as C,_e as E,he as G,Se as L,V as S,ye as a,D as b,be as c,G as d,we as u};
