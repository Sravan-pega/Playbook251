import{j as s,r as oo}from"./index-Cws_IRuu.js";import{r as c}from"./index-C5e9SFkp.js";import{q as O,A as y,d as W,t as ve,m as kt,r as fn,a as mn,h as pn,e as io,u as we,f as ao,c as Et,i as so,j as hn}from"./useConsolidatedRef-FEYVq0tu.js";import{i as ct,u as tr,s as nr,J as lo,v as gn,c as Be,w as Ge,e as We,F as ae,T as Oe,K as co,q as Qt,M as uo,N as fo,I as xe,S as Ht,O as rr,B as je,d as ke,Q as mo,r as nt,x as bn,p as en,G as yn,o as wn,A as or,R as po,m as Xe,V as tn,C as nn,k as ho,y as ir,U as $n}from"./Badges.test-ids-Cv4_ccaG.js";import{G as At,b as go,d as ar,C as sr,E as lr,u as cr,a as dr,c as rn,S as Ze,L as bo}from"./Label-Bgz81c9T.js";import{B as yo,u as zt,a as wo}from"./BareButton-DwDNO_qX.js";const $o=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|about|blob):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,_t=e=>{var n;const t=(n=e.current)==null?void 0:n.getRootNode();if(!(!ct(t,Document)&&!ct(t,ShadowRoot))){for(const r of t.childNodes)if(r.contains(e.current)&&ct(r,HTMLElement))return r}},xo=(e,t,n)=>{const r=[];if(t.global||t.sticky){let o=0,a;for(;a=t.exec(e);)r.push(e.slice(o,a.index),n(a[0])),o=a.index+a[0].length;r.push(e.slice(o))}else{const o=t.exec(e);o?r.push(e.slice(0,o.index),n(o[0]),e.slice(o.index+o[0].length)):r.push(e)}return r.flatMap((o,a)=>o?s.jsx(c.Fragment,{children:o},a):[])},Ve=()=>{const{direction:e}=tr();return c.useMemo(()=>e==="ltr"?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0},[e])},Hn=["button","a","input","li","legend"],So=({focusEl:e,scope:t,scopeSelector:n,selector:r,orientation:o="vertical",focusDescendantEl:a,clearFocusDescendant:l,focusReturnEl:d,clearFocusReturn:u,currentDescendantId:f,onClick:p,preventInitialScroll:b,pauseDescendantEvaluation:g=!1,clearPreventScroll:h},x=[])=>{const[I,j]=c.useState(0),_=c.useRef(""),C=c.useRef(g),[R,L]=c.useState(null),[T,v]=c.useState(null),[$,V]=c.useState(),{rtl:ee}=Ve(),k=c.useCallback(()=>{$==null||$.forEach(w=>{w.setAttribute("data-current","false")})},[$]),D=c.useCallback(w=>{k(),V(w?Array.from(w).filter(M=>ct(M,HTMLElement)):null)},[$]),G=c.useCallback(({clear:w}={clear:!1})=>{var q;const M=[];if($&&$.length&&$.forEach(S=>{S.id=S.id||nr(),M.push(S.id)}),w){const S=(q=e==null?void 0:e.getAttribute("aria-owns"))==null?void 0:q.split(" "),P=S==null?void 0:S.filter(F=>!M.includes(F));e==null||e.setAttribute("aria-owns",(P==null?void 0:P.join(" "))||"")}else e==null||e.setAttribute("aria-owns",M.join(" "))},[e,$]),U=c.useCallback(()=>{if(g)return;let w=t;if(w&&ct(w,HTMLElement)){if(n&&(w=w.querySelector(n)),!w){D(null);return}if(r){const M=w.querySelectorAll(r);D(M)}else{const M=w.querySelectorAll(lo);D(M)}}else D(null);T===null&&v(0)},[t,n,r,g,T]);return c.useEffect(()=>{C.current=g},[g]),c.useEffect(()=>{if(!t||!e)return;t.setAttribute("data-active-scope",gn()===e?"true":"false");const w=()=>{t.setAttribute("data-active-scope","true")},M=()=>{t.setAttribute("data-active-scope","false")};return e.addEventListener("focus",w),e.addEventListener("blur",M),()=>{e.removeEventListener("focus",w),e.removeEventListener("blur",M)}},[t,e]),c.useEffect(()=>{g||U()},[g]),c.useEffect(()=>{const w=setTimeout(()=>{U(),C.current||v(0)},0);return()=>clearTimeout(w)},[...x]),c.useEffect(()=>{g?(k(),G({clear:!0})):(G(),j(Math.random()))},[g,e,$]),c.useEffect(()=>{const w=()=>{u==null||u(),h==null||h(),T!==null&&T+1<$.length?v(T+1):v(0)},M=()=>{u==null||u(),h==null||h(),T!==null&&T-1>-1?v(T-1):v($.length-1)},q=S=>{$!=null&&$.length&&(["ArrowDown","ArrowUp"].includes(S.key)&&o==="vertical"&&S.preventDefault(),["ArrowLeft","ArrowRight"].includes(S.key)&&o==="horizontal"&&S.preventDefault(),setTimeout(()=>{var P;switch(S.key){case"ArrowDown":o==="vertical"&&w();break;case"ArrowUp":o==="vertical"&&M();break;case"ArrowRight":o==="horizontal"&&(ee?M():w());break;case"ArrowLeft":o==="horizontal"&&(ee?w():M());break;case"Enter":if(T!==null){if(p){p($[T]);break}const F=$[T].nodeName.toLowerCase();Hn.includes(F)?$[T].click():(P=$[T].querySelector(`${Hn.join(",")}`))==null||P.click()}break}},0))};return!g&&e&&($!=null&&$.length)&&!f&&e.addEventListener("keydown",q),()=>{e==null||e.removeEventListener("keydown",q)}},[e,T,$,g]),c.useEffect(()=>{!g&&$&&f&&$.forEach((w,M)=>{w.id===f&&v(M)})},[f,$,g]),c.useEffect(()=>{if(C.current)return;const w=R||T,M=d==null?void 0:d.id;let q;const S=a==null?void 0:a.id;let P,F=!1;if($&&$.length){if($.forEach((B,z)=>{R===null&&B.id===S&&(P=z,F=!0,L(z)),B.id===M&&(q=z),B.setAttribute("data-current","false")}),q&&q!==T){v(q),u==null||u();return}if(F&&P!==void 0){j(Math.random()),v(P);return}if(w!==null&&$[w]){const B=$[w];if(B.setAttribute("data-current","true"),e==null||e.setAttribute("aria-activedescendant",B.id),B.id!==_.current&&!b){const z=Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView;z==null||z.call(B,!1)}R!==null&&(L(null),l==null||l()),_.current=B.id}}return()=>{e==null||e.removeAttribute("aria-activedescendant")}},[$,T,a,e,I]),{activeDescendant:T!==null&&$?$[T]:void 0,descendants:$||null}},To=({loading:e,descendants:t,previousActiveDescendant:n,activeDescendant:r,focusReturnEl:o,setFocusReturnEl:a,scrollEl:l})=>{c.useEffect(()=>{if(e&&t&&t.length&&r){const u=[...t].pop(),f=(u==null?void 0:u.id)||void 0;let p;return f===r.id?(l&&(l.scrollTop=l.scrollHeight-l.offsetHeight),(o==null?void 0:o.id)!==r.id&&(p=setTimeout(()=>{a(u)},0))):(o==null?void 0:o.id)!==r.id&&(p=setTimeout(()=>{a(r)},0)),()=>clearTimeout(p)}},[e,t,n,r,l,o])},ur=(e,t,n,r,o)=>{c.useEffect(()=>{var l;let a=null;if(t>0){const d=(e==null?void 0:e.current)??((l=o==null?void 0:o.current)==null?void 0:l.getRootNode())??document;if(!ct(d,HTMLElement,SVGElement,Document,ShadowRoot))return;const u=d.querySelectorAll(r);u.length>t&&(a=u[t])}if(a){const d=new IntersectionObserver(u=>{u[0].isIntersecting&&n()},{root:e.current??null});return d.observe(a),()=>{d.disconnect()}}},[n,t])},ut=c.createContext({mode:"action",variant:"drill-down",itemLayout:"stacked",scrollAt:7,loading:!1,componentId:nr(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null}),fr=Be("meta-list",[]),Io=O.ul(({wrapItems:e})=>y`
    list-style: none;
    overflow: hidden;

    /* Negative margin to account for overflow clipping of focus indicator */
    padding: 0.3rem;
    margin: -0.3rem;

    ${!e&&y`
      white-space: nowrap;
    `}
  `),Un=O.li(({wrapItems:e})=>y`
    min-width: 0;
    display: inline-block;

    ${e?y`
          overflow-wrap: break-word;
        `:y`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `),Ao=c.forwardRef(function({testId:t,items:n,wrapItems:r=!0,...o},a){const l=We(t,fr),d=n.length<=1?"none":void 0;return s.jsx(ae,{"data-testid":l.root,...o,as:Io,role:d,container:{colGap:.5,alignItems:"center",wrap:r?"wrap":"nowrap"},wrapItems:r,ref:a,children:n.flatMap((u,f,p)=>u?[s.jsx(Oe,{as:Un,variant:"secondary",role:d,wrapItems:r,children:u},`${f+0}`)].concat(f!==p.length-1?[s.jsx(Oe,{as:Un,"aria-hidden":!0,variant:"secondary",children:"•"},`${f+0}-sep`)]:[]):[])})}),_o=Ge(Ao,fr),mr=Be("summary-item",["primary","secondary","visual","actions"]),Me=O.div`
  > ${co}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;Me.defaultProps=W;const xn=O(At)(({theme:e,isString:t,overflowStrategy:n})=>y`
    ${n==="ellipsis"?y`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:y`
          word-break: break-word;
        `}

    ${t&&y`
      font-weight: ${e.base["font-weight"]["semi-bold"]};
    `}
  `);xn.defaultProps=W;const Ce=O(At)(({overflowStrategy:e})=>y`
    ${e==="ellipsis"?y`
          overflow: hidden;
          text-overflow: ellipsis;
        `:y`
          word-break: break-word;
        `}
  `),Re=O.div`
  white-space: nowrap;
`,pr=O.div``,vo=({visual:e,actions:t})=>`${e?"auto ":""}minmax(0, 1fr)${t?" auto":""}`,ko=({secondary:e,layout:t,visual:n,actions:r})=>`"${n?"visual ":""}primary${e&&t==="inline"?" secondary":""}${r?" actions":""}"${e&&t==="stacked"?`
"${n?"visual ":""}secondary${r?" actions":""}"`:""}`,Eo=c.forwardRef(function({testId:t,visual:n,primary:r,secondary:o,layout:a="stacked",actions:l,container:d,overflowStrategy:u="wrap",as:f,...p},b){const g=We(t,mr);return s.jsxs(At,{"data-testid":g.root,...p,ref:b,container:{cols:vo({visual:n,actions:l}),colGap:2,areas:ko({secondary:o,layout:a,visual:n,actions:l}),...d},as:pr,forwardedAs:f,children:[n&&s.jsx(At,{"data-testid":g.visual,as:Me,item:{area:"visual",alignSelf:"center"},children:n}),s.jsx(xn,{"data-testid":g.primary,item:{area:"primary",alignSelf:o&&a==="stacked"?"end":"center"},isString:typeof r=="string",overflowStrategy:u,children:r}),o&&s.jsx(Ce,{"data-testid":g.secondary,item:{area:"secondary",alignSelf:a==="stacked"?"start":"center"},overflowStrategy:u,children:o}),l&&s.jsx(At,{"data-testid":g.actions,as:Re,item:{area:"actions",alignSelf:"center"},children:l})]})}),Sn=Ge(Eo,mr),Co="budicon",Ro="caret-left",Lo=()=>s.jsx("path",{d:"M17.25 21H14.5L8 12.5 14.5 4h2.75l-6.5 8.5z"}),Mo="0 0 25 25",hr=Object.freeze(Object.defineProperty({__proto__:null,Component:Lo,name:Ro,set:Co,viewBox:Mo},Symbol.toStringTag,{value:"Module"})),Do="budicon",Oo="caret-right",jo=()=>s.jsx("path",{d:"M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"}),No="0 0 25 25",gr=Object.freeze(Object.defineProperty({__proto__:null,Component:jo,name:Oo,set:Do,viewBox:No},Symbol.toStringTag,{value:"Module"})),Po="budicon",zo="check",Fo=()=>s.jsx("path",{d:"m3.464 11.371 6.222 5.974L21.582 5 23 6.371 9.732 20 2 12.743l1.464-1.372Z"}),Ho="0 0 25 25",br=Object.freeze(Object.defineProperty({__proto__:null,Component:Fo,name:zo,set:Po,viewBox:Ho},Symbol.toStringTag,{value:"Module"})),yr=O.mark(({theme:e})=>y`
    color: ${e.base.colors.black};
    background-color: ${e.components.mark["background-color"]};
    font-weight: ${e.components.mark["font-weight"]};
  `);yr.defaultProps=W;const Uo=e=>s.jsx(yr,{...e}),De={isItem(e){return Qt(e,"primary")},getItem(e,t){let n;return e.some(r=>this.isItem(r)&&r.id===t?(n=r,!0):r.items?(n=this.getItem(r.items,t),!!n):!1),n},getPath(e,t){let n=[];return e.some(r=>{if(r.id===t)return n=[r],!0;if(r.items){const o=this.getPath(r.items,t);return o.length&&(n=o.concat(r)),!!n.length}return!1}),n},setItem(e,t,n){return e.map(r=>r.id===t?{...n}:r.items?{...r,items:this.setItem(r.items,t,n)}:r)},mapItem(e,t,n){return e.map((r,o,a)=>{let l=r;return r.items&&(l={...l,items:this.mapItem(r.items,t,n)}),this.isItem(l)&&r.id===t&&(l=n(l,o,a)),l})},mapTree(e,t){return e.map((n,r,o)=>{let a=n;return n.items&&(a={...a,items:this.mapTree(n.items,t)}),this.isItem(a)?t(a,r,o):a})},flatten(e,t=[],n={parentFirst:!1}){let r=[],o=[];return e.forEach(a=>{if(this.isItem(a)&&r.push(t.length>0?{...a,ancestors:t}:a),a.items){const l=this.flatten(a.items,[...t,a],n);n.parentFirst?o=[...o,...l]:r=[...r,...l]}}),n.parentFirst?[...r,...o]:r},toggleSelected(e,t,n,r){return this.mapTree(e,o=>{if(this.isItem(o)){if(o.id===t)return{...o,selected:r!==void 0?r:!o.selected};if(n==="single-select")return{...o,selected:!1}}return o})},selectItem(e,t,n){return this.toggleSelected(e,t,n,!0)},deselectItem(e,t,n){return this.toggleSelected(e,t,n,!1)},getSelected(e){return e.reduce((t,n)=>(this.isItem(n)&&n.selected&&(t=[...t,n]),n.items&&(t=[...t,...this.getSelected(n.items)]),t),[])},prependTo(e,t,n){return n?this.mapItem(e,n,r=>({...r,items:[...t,...r.items??[]]})):[...t,...e]},appendTo(e,t,n){return n?this.mapItem(e,n,r=>({...r,items:[...r.items??[],...t]})):[...e,...t]},getNextItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(r,o,a)=>(n=a[o+1],r)),n},getPrevItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(r,o,a)=>(n=a[o-1],r)),n},getParentItem(e,t){if(!t)return;const[,n]=this.getPath(e,t);return n}},Nt=y`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;O(je)`
  align-self: center;
`;const on=O(xe)``,wr=O.li(({theme:{base:e,components:t},isParentItem:n,itemLayout:r,mode:o="action","aria-selected":a=!1,selectableParent:l=!1})=>{const d=ve(()=>kt(.85,e.palette["primary-background"],e.palette.interactive)),u=ve(()=>kt(.95,e.palette["primary-background"],e.palette.interactive)),f=ve(()=>fn(t["radio-check"][":checked"]["background-color"],e.transparency["transparent-5"])),p=t["radio-check"][":checked"]["background-color"],b=ve(()=>mn(p));return y`
      min-height: ${e["hit-area"]["mouse-min"]};
      padding-block: calc(0.75 * ${e.spacing});
      padding-inline: ${e.spacing};
      cursor: pointer;

      ${r==="inline"&&y`
        justify-content: flex-start;

        ${pr} {
          /* Sets grid columns based on SummaryItem content combinations */

          &:has(${Me}):has(${Ce}):has(${Re}) {
            grid-template-areas: 'visual primary secondary actions';
            grid-template-columns: auto auto 1fr auto;
          }

          &:has(${Me}):has(${Ce}):not(:has(${Re})) {
            grid-template-areas: 'visual primary secondary';
            grid-template-columns: auto auto 1fr;
          }

          &:has(${Me}):not(:has(${Ce})):has(${Re}) {
            grid-template-areas: 'visual primary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:has(${Me}):not(:has(${Ce})):not(
              :has(${Re})
            ) {
            grid-template-areas: 'visual primary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Me})):has(${Ce}):has(${Re}) {
            grid-template-areas: 'primary secondary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:not(:has(${Me})):has(${Ce}):not(
              :has(${Re})
            ) {
            grid-template-areas: 'primary secondary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Me})):not(:has(${Ce})):has(
              ${Re}
            ) {
            grid-template-areas: 'primary actions';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Me})):not(:has(${Ce})):not(
              :has(${Re})
            ) {
            grid-template-areas: 'primary';
            grid-template-columns: 1fr;
            flex-grow: 0;
          }

          & > ${xn} {
            ${Nt};
          }

          & > ${Ce} {
            ${Nt};

            ul {
              li {
                ${Nt};
              }
              justify-content: end;
            }
          }

          & > ${Re} > ${fo} {
            justify-content: end;
          }
        }
      `}

      @media (pointer: coarse) {
        min-height: ${e["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${d};
      }

      &:hover {
        ${on} {
          visibility: visible;
          ${o==="single-select"&&y`
            color: ${a?p:f};
          `}
          ${o==="multi-select"&&y`
            ${!a&&y`
              border-color: ${t["form-control"][":hover"]["border-color"]};
            `}
          `}
        }
      }

      &:hover:not([aria-disabled='true']) {
        background-color: ${u};
      }

      a:first-of-type {
        display: block;
        width: 100%;
        text-decoration: none;
        color: inherit;
      }

      ${n&&!l&&(o==="multi-select"||o==="single-select")&&y`
        padding-inline-start: calc(1.125rem + 2 * ${e.spacing});
      `}

      ${ar} {
        flex-grow: 1;
      }

      ${on} {
        margin-inline-start: 0;
        ${o==="single-select"&&y`
          ${a?y`
                color: ${p};
              `:y`
                visibility: hidden;
              `}
        `}
        ${o==="multi-select"&&y`
          ${a?y`
                color: ${b};
                background-color: ${p};
                border: 0.0625rem solid ${t["radio-check"][":checked"]["border-color"]};
              `:y`
                color: transparent;
                border: 0.0625rem solid ${t["radio-check"]["border-color"]};
              `}
          border-radius: min(
            calc(${e["border-radius"]} * ${t.checkbox["border-radius"]}),
            0.25rem
          );
        `}
      }

      &[aria-disabled='true'] {
        background-color: ${t["form-control"][":disabled"]["background-color"]};
        opacity: ${e["disabled-opacity"]};
      }
    `});wr.defaultProps=W;const Bo=O.div`
  ${Ht} {
    width: 1em;
    height: 1em;
  }

  & > ${rr} {
    ${Nt};
  }
`;O.p`
  ${pn}
`;const $r=O.li(({theme:e})=>y`
    height: 0.0625rem;
    background-color: ${e.base.palette["border-line"]};
    margin: ${e.base.spacing} 0;
  `);$r.defaultProps=W;const Tn=O.div(({theme:e})=>y`
    min-height: ${e.base["hit-area"]["mouse-min"]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    background-color: ${e.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${e.base["hit-area"]["finger-min"]};
    }
  `);Tn.defaultProps=W;const xr=O.legend(({theme:{base:e}})=>{const t=ve(()=>kt(.95,e.palette["primary-background"],e.palette.interactive)),n=ve(()=>kt(.85,e.palette["primary-background"],e.palette.interactive));return y`
    cursor: pointer;
    width: 100%;
    background-color: ${e.palette["primary-background"]};

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:focus-within {
      box-shadow: ${e.shadow["focus-inset"]};
      background-color: ${n};
    }

    &:hover:not([aria-disabled='true']):not([data-current='true']) {
      background-color: ${t};
    }
    color: ${e.palette["foreground-color"]};
    padding: calc(0.5 * ${e.spacing}) ${e.spacing};
    text-align: start;
    border-radius: inherit;

    > ${ar} {
      grid-column-gap: ${e.spacing};
    }

    ${Ht} {
      /* Fixes vertical align issue increasing box size beyond square */
      display: block;
    }
  `});xr.defaultProps=W;const In=O.ul(({theme:e})=>y`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${go} {
      padding: ${e.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${Tn} {
      margin-block-start: ${e.base.spacing};
    }
  `);In.defaultProps=W;const An=O.fieldset(({theme:e})=>y`
    background-color: ${e.base.palette["primary-background"]};
    border: 0;
    border-radius: inherit;
  `);An.defaultProps=W;const Go=O(An)`
  min-width: 10rem;
`,Sr=O.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,Ft=O.div(({theme:e})=>y`
    position: relative;
    overflow: hidden;
    transition: height ${e.base.animation.speed} ${e.base.animation.timing.ease};

    & > fieldset:first-child {
      position: relative;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  `);Ft.defaultProps=W;const Tr=O.div(({theme:e})=>{const t=`0.0625rem solid ${e.base.palette["border-line"]}`;return y`
    display: flex;
    flex-direction: column;

    &,
    ${Ft} {
      max-height: inherit;
    }

    &:focus {
      box-shadow: ${e.base.shadow.focus};
      outline: none;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &[data-active-scope='true'] [data-current='true'] {
      box-shadow: ${e.base.shadow["focus-inset"]};
    }

    ${uo}:first-child {
      + ${Ft}, + header {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    > header,
    > footer {
      padding: ${e.base.spacing};
    }

    > header {
      border-bottom: ${t};
    }

    > footer {
      border-top: ${t};
    }
  `});Tr.defaultProps=W;const Ir=Be("menu",["create-new"]),Ar=Be("menu-item",[]);nt(hr,gr,br);const Wo=({expandHandler:e})=>{const{end:t}=Ve(),n=s.jsx(xe,{name:`caret-${t}`});return e?s.jsx(je,{as:"span",icon:!0,variant:"simple","aria-hidden":!0,onClick:e,children:n}):n},Vo=({ancestors:e=[]})=>{const t=e.length>2,n=t?[e[0],e[e.length-1]]:e,{end:r}=Ve();return s.jsx(ae,{container:{gap:.5,alignItems:"center"},as:Bo,title:e.map(o=>De.isItem(o)?o.primary:o.label).join(" > "),children:n.map((o,a,l)=>{const d=De.isItem(o)?o.primary:o.label;return s.jsxs(c.Fragment,{children:[s.jsx(Oe,{variant:"secondary",children:d}),a<l.length-1&&s.jsxs(s.Fragment,{children:[s.jsx(Oe,{variant:"secondary",children:s.jsx(xe,{name:`caret-${r}`})}),t&&s.jsxs(s.Fragment,{children:[s.jsx(Oe,{variant:"secondary",children:"…"}),s.jsx(Oe,{variant:"secondary",children:s.jsx(xe,{name:`caret-${r}`})})]})]})]},o.id)})})},qo=({testId:e,id:t,primary:n,secondary:r,ancestors:o,visual:a,count:l,items:d,selected:u,partial:f,href:p,tooltip:b,onClick:g,onExpand:h,disabled:x,role:I="menuitem",...j})=>{const _=ke(),{mode:C,onItemClick:R,itemLayout:L,accent:T,variant:v,setFocusDescendant:$,getScopedItemId:V,arrowNavigationUnsupported:ee}=c.useContext(ut),k=We(e,Ar),D=C==="single-select"||C==="multi-select",G=d&&typeof u=="boolean",U=c.useMemo(()=>V(t),[t,V]),w=`${t}-count`,M=`${t}-secondary`,q=c.useCallback(N=>{if(N.detail>0){const se=N.target,Z=se.getAttribute("role")===I?se:se.closest(`li[role="${I}"]`);Z&&$(Z)}g==null||g(t,N),R==null||R(t,N)},[g,R,t]),S=c.useCallback(N=>{h==null||h(t,N),N.stopPropagation()},[h,t]);let P;if(T&&!d){const N=typeof T=="function"?T(n):T;P=xo(n,N,X=>s.jsx(Uo,{children:X}))}const F=o?s.jsx(Vo,{ancestors:o}):r&&s.jsx(_o,{items:r,id:M}),[B,z]=io(),ge=s.jsxs(s.Fragment,{children:[s.jsx(Sn,{ref:z,primary:P||(d?n:s.jsx(Oe,{children:n})),secondary:F,layout:L,visual:a,actions:d||l?s.jsxs(ae,{container:{gap:1,alignItems:"center",justify:"center"},children:[l!==void 0&&s.jsx(sr,{id:w,"aria-label":_("menu_item_count",[l]),children:l}),d&&s.jsx(Wo,{expandHandler:G?S:void 0})]}):void 0,container:{colGap:1}}),b&&s.jsx(mo,{target:B,hideDelay:"none",showDelay:"short",children:b})]}),Y=c.useMemo(()=>{const N=_("menu_collapsed",[n]);return d?ee?_("menu_item_shift_space_expand_collapse",[N]):_("menu_item_expand_arrow",[N]):n},[u,n,d]),Ne=c.useMemo(()=>{const N=!!r;let X;return N?(X=M,l!==void 0&&l>=0&&(X=`${X} ${w}`)):l!==void 0&&l>=0?X=w:X="",X},[d,r,w,M]);return s.jsxs(ae,{"data-testid":k.root,...j,container:{alignItems:"center",justify:"between",gap:1},id:U,as:wr,"aria-label":Y,"aria-describedby":Ne,role:I,"aria-disabled":x,"data-expand":!!d,itemLayout:L,tabIndex:-1,disabled:x,onMouseDown:N=>{N.preventDefault()},onClick:N=>{if(!x)return d&&typeof u!="boolean"?S(N):q(N)},onMouseEnter:v==="flyout"?S:void 0,href:p,mode:C,isParentItem:!!d,"aria-selected":!!u,selectableParent:G,children:[D&&(!d||G)&&s.jsx(on,{name:"check"}),p&&!D?s.jsx(yo,{href:p,tabIndex:"-1",children:ge}):ge]})},_n=Ge(qo,Ar),an=(e,t,n,r)=>{var u,f;const o=!!((u=e.firstElementChild)!=null&&u.matches("legend")),a=[':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'],l=e.querySelectorAll(a.join(", "))[Math.max(Math.min(r-(o?2:1),n-1),0)];let d;if(l){const p=e.getBoundingClientRect().top,b=l.getBoundingClientRect(),g=((f=e.querySelector(":scope > ul"))==null?void 0:f.scrollTop)??0;let h=b.bottom;n>r&&(h=(b.top+b.bottom)/2),d=h-p+g}t.style.height=d?`${d}px`:""},_r=({id:e,label:t,items:n,itemRole:r})=>{const{componentId:o}=c.useContext(ut),a=`${o}-${e}`;return s.jsxs("li",{role:"presentation",children:[s.jsx(ae,{container:{alignItems:"center",pad:[.5,1]},as:Tn,id:a,children:t}),s.jsx("ul",{role:"group","aria-labelledby":a,children:n.length>0&&n.map(l=>c.createElement(_n,{...l,key:l.id,role:r??"menuitem"}))})]})},et=e=>Array.isArray(e.items),vr=c.forwardRef(function({items:t,parent:n,menuRole:r},o){const a=ke(),l=we(o),d=c.useRef(null),u=c.useRef(null),f=c.useRef(null),[p,b]=c.useState(),{componentId:g,loadMore:h,loading:x,scrollAt:I,emptyText:j,onItemExpand:_,pushFlyoutId:C,flyOutActiveIdStack:R,updateActiveDescendants:L,updateParentDescendantStack:T}=c.useContext(ut),{announcePolite:v}=bn();ur(d,t.length-1,()=>{var k;h==null||h((k=n==null?void 0:n.item)==null?void 0:k.id)},":scope > li"),en(()=>{if(p){const k=t.find(D=>D.id===p.id);k&&et(k)?b(k):b(void 0)}},[p,t]),c.useEffect(()=>{t.some(D=>R.includes(D.id))||(f.current=null,b(void 0))},[R]),c.useEffect(()=>{t.length===0&&!x&&v({message:j??a("no_items")})},[t.length,x]);const $=c.useMemo(()=>t.length?t.map(k=>De.isItem(k)?c.createElement(_n,{...k,key:k.id,"aria-haspopup":!!k.items,"aria-expanded":k.items?k.id===(p==null?void 0:p.id):void 0,role:r==="listbox"?"option":"menuitem",onExpand:(D,G)=>{var U;k.items?(f.current=G.currentTarget,b(et(k)?k:void 0),(U=k==null?void 0:k.onExpand)==null||U.call(k,D,G),_==null||_(D,G),C(k.id||g),L(),T&&T(f.current.closest("li"))):(f.current=null,b(void 0))}}):c.createElement(_r,{...k,key:k.id,itemRole:r==="listbox"?"option":"menuitem"})):x?null:s.jsx(lr,{message:j,forwardedAs:"li"}),[t,x,j,p,R]),V=s.jsxs(In,{ref:d,role:r,children:[$,x&&!p&&s.jsx(Sr,{children:s.jsx(yn,{placement:"local"})})]});c.useLayoutEffect(()=>{b(void 0),l.current&&(u.current=l.current.parentElement,an(l.current,l.current,t.length,I))},[t]);const ee=c.useCallback(()=>{p&&b(void 0)},[p]);return s.jsxs(s.Fragment,{children:[s.jsx(Go,{ref:l,onScroll:ee,"data-flyout-menu-parent-id":g,"data-flyout-menu-id":(n==null?void 0:n.item.id)||g,children:V}),p&&l.current&&s.jsx(wn,{target:f.current,show:!0,strategy:"fixed",placement:"right-start",portal:!1,children:s.jsx(vr,{items:p.items,parent:{el:l.current,item:p,siblingItems:t,setExpandedItem:b,returnFocusRef:f},menuRole:r})})]})}),Yo="21.875rem",Bn="calc(100vw - 20rem)",Zo=.05,Xo="budicon",Ko="drag",Jo=()=>s.jsx("path",{d:"M9.5 5.136V3.5h1.708v1.636H9.5Zm0 4.111V7.611h1.708v1.636H9.5Zm0 4.071v-1.636h1.708v1.636H9.5Zm0 4.11v-1.635h1.708v1.636H9.5Zm0 4.072v-1.636h1.708V21.5H9.5Zm4.292-16.364V3.5H15.5v1.636h-1.708Zm0 4.111V7.611H15.5v1.636h-1.708Zm0 4.071v-1.636H15.5v1.636h-1.708Zm0 4.11v-1.635H15.5v1.636h-1.708Zm0 4.072v-1.636H15.5V21.5h-1.708Z"}),Qo="0 0 25 25",ei=Object.freeze(Object.defineProperty({__proto__:null,Component:Jo,name:Ko,set:Xo,viewBox:Qo},Symbol.toStringTag,{value:"Module"})),ti="budicon",ni="arrow-micro-up-down",ri=()=>s.jsx("path",{d:"m12.402 5 4.597 6H8l4.402-6Zm.195 15L8 14h9l-4.403 6Z"}),oi="0 0 25 25",ii=Object.freeze(Object.defineProperty({__proto__:null,Component:ri,name:ni,set:ti,viewBox:oi},Symbol.toStringTag,{value:"Module"}));nt(ei);nt(ii);const ai=O(je)(({rotateIcon:e})=>y`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &:not(:focus) {
      ${pn};
    }

    ${e&&y`
      ${Ht} {
        transform: rotate(90deg);
      }
    `}
  `),kr=O.div(({theme:e})=>y`
    position: absolute;
    inset-inline-start: 0;
    inset-block: 0;
    inline-size: 0.125rem;
    background-color: transparent;
    transition: background-color ${e.base.animation.speed} ${e.base.animation.timing.ease};
    cursor: ew-resize;
    z-index: ${e.base["z-index"].max};

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      width: calc(${e.base["hit-area"].compact} * 0.75);
    }

    &:hover {
      background-color: ${e.base.palette.interactive};
    }

    ${or} {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: calc(-2 * ${e.base.spacing});
      translate: 0 -50%;
      box-shadow: ${e.base.shadow.focus};
    }
  `);kr.defaultProps=W;const si=c.forwardRef(function({onMouseDown:t,onKeyDown:n},r){const o=we(r),a=ke(),[l,d]=c.useState(!1),[u,f]=c.useState(!1);zt(()=>{d(!1),f(!1)});const p=h=>{h.code==="Space"&&(h.preventDefault(),f(!u)),n==null||n(h,u)},b=h=>{const x=_t(o);x&&(x.style.setProperty("user-select","none"),d(!0),t==null||t(h))},g=()=>{const h=_t(o);h&&(h.style.removeProperty("user-select"),d(!1))};return s.jsx(kr,{onMouseDown:b,onMouseUp:g,ref:o,children:s.jsx(ai,{tabIndex:0,icon:!0,label:!l&&!u?a("resize"):void 0,"aria-label":a(!l&&!u?"drag_handle_activate_description":"drag_handle_cancel_description"),onMouseDown:b,onKeyDown:p,onBlur:()=>{f(!1)},rotateIcon:u,children:s.jsx(xe,{name:u?"arrow-micro-up-down":"drag"})})})}),Mt=ao(Yo),Er=O.div(e=>{const{state:t,shadow:n,position:r,placement:o,transitionSpeed:a,size:l,resizeable:d,theme:u}=e;let f="horizontal",p="X",b="top";(o==="top"||o==="bottom")&&(f="vertical",p="Y",b="left");const g=t==="open"||t==="opening"?0:"100%",h=a||u.base.animation.speed;return y`
    z-index: ${u.base["z-index"].drawer};
    position: ${r};
    ${o}: 0;
    ${b}: 0;
    height: ${f==="vertical"?l:"100%"};
    width: ${f==="horizontal"?l:"100%"};
    transition-property: transform, box-shadow, opacity;
    transition-duration: max(${h}, 0.0001s);
    transition-timing-function: ${u.base.animation.timing.ease};
    transform: ${t==="open"?"none":`translate${p}(${o==="top"||o==="left"?"-":""}${g})`};

    ${n&&y`
      box-shadow: ${u.base.shadow.high};
    `}

    ${d&&y`
      width: ${f==="horizontal"?"var(--resize-drawer-width)":"100%"};
    `}
  `});Er.defaultProps=W;const li=c.forwardRef(function(t,n){const{open:r=!1,shadow:o=!1,position:a="absolute",children:l,placement:d="right",transitionSpeed:u,size:f="100%",resizeable:p=!1,onAfterOpen:b,onAfterClose:g,onBeforeOpen:h,onBeforeClose:x,onOuterClick:I,nullWhenClosed:j=!1,..._}=t,C=we(n),{ltr:R,rtl:L}=Ve(),[T,v]=c.useState(r?"open":"closed");let $=cr(T);$||($=T),dr("mousedown",[C],c.useCallback(()=>{r&&(I==null||I())},[r,I])),c.useEffect(()=>{r&&(T==="closed"||T==="closing")?(h==null||h(),po(C.current),v("opening")):!r&&(T==="open"||T==="opening")?(x==null||x(),v("closing")):r&&T==="open"&&$!=="open"?b==null||b():!r&&T==="closed"&&$!=="closed"&&(g==null||g())},[r,T,$,h,x,b,g]);const V=c.useCallback(U=>{U.target!==C.current||U.propertyName!=="transform"||v(r?"open":"closed")},[r]),ee=c.useRef();c.useEffect(()=>{if(!p||!C.current)return;const U=_t(C);U&&(U.style.getPropertyValue("--resize-drawer-width")||U.style.setProperty("--resize-drawer-width",f))},[C.current]);const k=c.useCallback(U=>{var S;const w=_t(C),M=(S=C.current)==null?void 0:S.getBoundingClientRect();if(!M||!w)return;ee.current=U.clientX;const q=new AbortController;w.addEventListener("mousemove",P=>{if(!ee.current||!M.width)return;const F=ee.current,B=d==="right"?F-P.clientX:P.clientX-F,z=Math.max(B+M.width,parseInt(Mt,10));w.style.setProperty("--resize-drawer-width",`clamp(${Mt}, ${z}px, ${Bn})`)},{passive:!0,signal:q.signal}),w.addEventListener("mouseup",()=>{q.abort()},{once:!0})},[d]),D=c.useCallback((U,w)=>{var B;if(!w)return;const M=_t(C),q=document.documentElement.clientWidth*Zo,S=(B=C.current)==null?void 0:B.getBoundingClientRect();if(!S||!M||U.code!=="ArrowLeft"&&U.code!=="ArrowRight")return;U.preventDefault();const P=(U.code==="ArrowLeft"?1:-1)*(d==="right"?1:-1),F=Math.max(S.width+P*q,parseInt(Mt,10));M.style.setProperty("--resize-drawer-width",`clamp(${Mt}, ${F}px, ${Bn})`)},[d]),G=p&&T==="open"&&(d==="left"&&L||d==="right"&&R);return T==="closed"&&!r&&j?null:s.jsxs(Er,{ref:C,position:a,shadow:o&&r,transitionSpeed:u,placement:d,size:f,resizeable:p,open:r,state:T,onTransitionEnd:V,..._,children:[l,G&&s.jsx(si,{onMouseDown:k,onKeyDown:D})]})});nt(hr,gr);const ci=({text:e,onClick:t})=>{const n=ke(),{arrowNavigationUnsupported:r}=c.useContext(ut),{start:o}=Ve(),a=c.useCallback(l=>{(l.key==="Enter"||l.key===`Arrow${rn(o)}`)&&t()},[t,o]);return s.jsx(ae,{container:{alignItems:"center"},as:xr,onClick:t,onKeyDown:a,"data-collapse":"true","aria-expanded":!0,"aria-label":`${n("menu_expanded",[e||""])} ${n(r?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,children:s.jsx(Sn,{visual:s.jsx(xe,{name:`caret-${o}`}),primary:e})})},Gn=(e,t)=>{e.disabled=t;const n=e.querySelector("legend button");n&&(n.disabled=t)},Wn=(e,t)=>e.reduce((n,r)=>!De.isItem(r)&&r.items?n+r.items.length+1:n+1,t?1:0),Dt=e=>e.flatMap(t=>De.isItem(t)?t:[t,...t.items?t.items:[]]),Cr=c.forwardRef(function({items:t,parent:n,id:r,menuRole:o,...a},l){const d=ke(),u=c.useRef(null),f=we(l),p=c.useRef(null),b=c.useRef(null),[g,h]=c.useState(!n),[x,I]=c.useState(),{scrollAt:j,"aria-label":_,loadMore:C,loading:R,emptyText:L,currentItemId:T,onItemExpand:v,focusControl:$,updateActiveDescendants:V,setFocusReturnEl:ee,onItemCollapse:k,expandTo:D}=c.useContext(ut),{end:G}=Ve(),{announcePolite:U}=bn();ur(p,t.length-1,()=>{var S;R||C==null||C((S=n==null?void 0:n.item)==null?void 0:S.id)},":scope > li"),c.useLayoutEffect(()=>{!f.current||x||(u.current=f.current.parentElement,an(f.current,u.current,Wn(t,R),j))}),c.useEffect(()=>{n&&h(!0)},[]),en(()=>{if(x){const S=Dt(t).find(P=>P.id===x.id);S&&et(S)?I(S):I(void 0)}},[x,t]),en(()=>{if(T){const S=Dt(t).find(P=>{var F;return((F=P.items)==null?void 0:F.length)&&De.getItem(P.items,T)!==void 0});S&&(I(et(S)?S:void 0),V({preventScroll:!0}))}},[T,t,n]),c.useEffect(()=>{if(D!=null&&D.parentItemId){const S=Dt(t).find(P=>P.id===D.parentItemId);if(S)I(et(S)?S:void 0),V({preventScroll:!0}),D.onComplete();else{const P=Dt(t).find(F=>{var B;return((B=F.items)==null?void 0:B.length)&&De.getItem(F.items,D.parentItemId)!==void 0});P?I(et(P)?P:void 0):D.onComplete()}}},[D,t,n]);const w=c.useCallback((S,P)=>{var B;const F=De.getItem(t,S);b.current=P.currentTarget,F&&et(F)?I(F):I(void 0),(B=F==null?void 0:F.onExpand)==null||B.call(F,S,P),v==null||v(S,P),V({preventScroll:!0})},[t]);c.useEffect(()=>{t.length===0&&!R&&U({message:L??d("no_items")})},[t.length,R]);const M=c.useMemo(()=>t.length?t.map((S,P)=>De.isItem(S)?c.createElement(_n,{...S,key:S.id,role:o==="listbox"?"option":"menuitem",onExpand:S.items?w:void 0}):s.jsxs(c.Fragment,{children:[s.jsx(_r,{...S,items:S.items.map(F=>F.items?{...F,onExpand:w}:F),itemRole:o==="listbox"?"option":"menuitem"}),t[P+1]&&De.isItem(t[P+1])&&s.jsx($r,{role:"separator"})]},S.id)):R?null:s.jsx(lr,{message:L,forwardedAs:"li"}),[t,R,L]),q=s.jsxs(In,{id:x?void 0:r,ref:p,role:o,...a,children:[n&&s.jsx(ci,{text:n.item.primary,onClick:()=>{h(!1)}}),M,R&&!x&&s.jsx(Sr,{children:s.jsx(yn,{placement:"local",liveConfig:{contextualLabel:_??d("menu")}})})]});return s.jsxs(s.Fragment,{children:[s.jsx(li,{"aria-hidden":!!x,as:An,ref:f,open:g,style:{opacity:x?0:1},disabled:!!x,placement:G,onBeforeOpen:()=>{n&&(n.el.style.opacity="0"),f.current&&(f.current.style.opacity="1")},onAfterOpen:()=>{n&&Gn(n.el,!0)},onBeforeClose:()=>{n&&u.current&&(Gn(n.el,!1),n.el.style.opacity="1",an(n.el,u.current,Wn(n.siblingItems),j)),f.current&&(f.current.style.opacity="0")},onAfterClose:()=>{if(n){$==null||$.focus();const S=n.returnFocusRef.current;n.setExpandedItem(void 0),S&&ee(S==null?void 0:S.closest("li")),k==null||k(n.item.id),V()}},children:q}),x&&f.current&&s.jsx(Cr,{id:r,items:x.items,parent:{el:f.current,item:x,siblingItems:t,setExpandedItem:I,returnFocusRef:b},menuRole:o})]})}),di=c.forwardRef(function(t,n){var bt,Je;const r=Xe(),{testId:o,id:a=r,items:l=[],itemLayout:d="stacked",onCreateNew:u,mode:f="action",accent:p,scrollAt:b=7,emptyText:g,onItemClick:h,onItemActive:x,onItemExpand:I,loadMore:j,onItemCollapse:_,loading:C=!1,currentItemId:R,header:L,footer:T,variant:v="drill-down",focusControlEl:$,arrowNavigationUnsupported:V,"aria-describedby":ee,"aria-label":k,role:D="menu",listId:G,pauseDescendantEvaluation:U,menuList:w,handleRef:M,...q}=t,S=We(o,Ir),P=ke(),{end:F,start:B}=Ve(),z=Xe(),ge=we(n),Y=c.useRef(0),[Ne,N]=c.useState(0),[X,se]=c.useState(null),[Z,Se]=c.useState([a]),[K,oe]=c.useState(),[Pe,ze]=c.useState(!1),[Ie,Fe]=c.useState([]),[rt,ot]=c.useState(),Ae=!$,Ke=c.useMemo(()=>`fieldset[data-flyout-menu-id="${Z[Z.length-1]}"]`,[Z]),de=c.useMemo(()=>$||ge.current,[$,ge.current]);c.useImperativeHandle(M,()=>({expandTo:J=>{ot(J)}}),[]);const ft=c.useCallback(J=>{Se([...Z,J])},[Z]);c.useEffect(()=>{Se([...Z,a])},[a]);const mt=c.useCallback(J=>{Fe([...Ie,J])},[Ie]),pt=c.useCallback(J=>btoa(encodeURIComponent(J)),[a]),ht=c.useCallback(J=>decodeURIComponent(atob(J)),[a]),be=c.useCallback(({preventScroll:J=!1}={})=>{ze(J),N(Math.random())},[]),$e=c.useMemo(()=>({focusEl:de,scope:ge.current,scopeSelector:v==="drill-down"?'fieldset[aria-hidden="false"]':Ke,selector:`[role="${D==="menu"?"menuitem":"option"}"], legend`,focusDescendantEl:X,clearFocusDescendant:()=>{se(null)},focusReturnEl:K,clearFocusReturn:()=>{oe(null)},currentDescendantId:R?pt(R):void 0,preventInitialScroll:Pe,clearPreventScroll:()=>{ze(!1)},pauseDescendantEvaluation:U}),[de,ge.current,Ke,K,X,R,Pe,U]),{activeDescendant:ne,descendants:qe}=So($e,[Ne]),Rt=cr(ne);To({loading:C,descendants:qe,previousActiveDescendant:Rt,activeDescendant:ne,focusReturnEl:K,setFocusReturnEl:oe,scrollEl:(Je=(bt=$e.scope)==null?void 0:bt.querySelector($e.scopeSelector))==null?void 0:Je.querySelector("ul")}),c.useEffect(()=>{const J=(te=null)=>{if(ne){if(ne.dataset.expand==="true"&&te!=="collapse"){(ne.querySelector('span[aria-hidden="true"]')??ne).click();return}if(te!=="expand")if(v==="flyout"&&Z.length>1&&Ie.length>0){Se([...Z].slice(0,-1));const fe=Ie.pop();fe!==void 0&&oe(fe),be()}else ne.dataset.collapse==="true"&&ne.click()}},le=te=>{switch(te.key){case`Arrow${rn(F)}`:{if(V)break;J("expand");break}case`Arrow${rn(B)}`:{if(V)break;J("collapse");break}case"Escape":{if(v==="flyout"&&Z.length>1&&Ie.length>0){te.preventDefault(),te.stopPropagation(),Se([...Z].slice(0,-1));const fe=Ie.pop();fe!==void 0&&oe(fe),be()}break}}V&&(te.key===" "||te.key==="Spacebar")&&te.shiftKey&&(te.preventDefault(),J())};return ne&&(x==null||x(ht(ne.id))),de==null||de.addEventListener("keydown",le),()=>de==null?void 0:de.removeEventListener("keydown",le)},[de,ne,Z]),c.useEffect(()=>{const J=setTimeout(()=>{var le,te;if(l.length===Y.current){const fe=qe==null?void 0:qe.map(Ye=>Ye.id),it=(te=(le=$e.scope)==null?void 0:le.querySelector($e.scopeSelector))==null?void 0:te.querySelectorAll($e.selector);if(!it){be();return}const at=Array.from(it);if((at==null?void 0:at.length)!==(fe==null?void 0:fe.length)){be();return}at.every((Ye,Bt)=>Ye.id===fe[Bt])||be();return}Y.current=l.length,be()},0);return()=>clearTimeout(J)},[l]);const Lt=c.useMemo(()=>({componentId:a,"aria-label":k,mode:f,arrowNavigationUnsupported:V,onItemClick:(J,le)=>{var te;Ae&&((te=ge.current)==null||te.focus()),h==null||h(J,le)},onItemActive:x,onItemExpand:I,onItemCollapse:_,itemLayout:d,accent:p,scrollAt:b,emptyText:g,radioName:z,loadMore:j,loading:C,variant:v,focusControl:de,updateActiveDescendants:be,setFocusReturnEl:oe,setFocusDescendant:se,getScopedItemId:pt,pushFlyoutId:ft,flyOutActiveIdStack:Z,updateParentDescendantStack:mt,expandTo:{parentItemId:rt,onComplete:()=>{ot(void 0)}}}),[a,k,f,V,h,x,I,_,d,p,b,g,z,j,C,v,de,be,oe,se,pt,ft,Z,mt,rt]),gt=w??(v==="drill-down"?s.jsx(Cr,{items:l,id:G,menuRole:D,"aria-multiselectable":f==="multi-select","aria-labelledby":k?`${a}-menuLabel`:void 0}):s.jsx(vr,{items:l,menuRole:D}));return s.jsxs(Tr,{"data-testid":S.root,id:a,"aria-describedby":Ae?`${a}-menuDescription`:void 0,...q,ref:ge,tabIndex:Ae?0:void 0,children:[Ae&&s.jsx("span",{id:`${a}-menuDescription`,hidden:!0,children:`${P("menu_selection_instructions")} `&&ee||""}),k&&s.jsx(tn,{id:`${a}-menuLabel`,children:k}),L&&s.jsx("header",{"data-popover-scroll-el":!0,children:L}),s.jsx(Ft,{"data-popover-scroll-el":!0,children:s.jsx(ut.Provider,{value:Lt,children:gt})}),(u||T)&&s.jsx("footer",{"data-popover-scroll-el":!0,children:u?s.jsxs(je,{"data-testid":S.createNew,variant:"link",onClick:u,children:[s.jsx(xe,{name:"plus"})," ",P("create_new")]}):T})]})}),ui=Ge(di,Ir),fi="budicon",mi="arrow-micro-down",pi=()=>s.jsx("path",{d:"M8 9.5h9l-4.402 6-4.597-6H8Z"}),hi="0 0 25 25",gi=Object.freeze(Object.defineProperty({__proto__:null,Component:pi,name:mi,set:fi,viewBox:hi},Symbol.toStringTag,{value:"Module"})),Rr=Be("menu-button",[]);nt(gi);const Lr=O.button(({theme:{base:{spacing:e}}})=>y`
      gap: ${e};
      flex-shrink: 0;
      white-space: nowrap;
      max-width: 100%;

      & + ${nn} + ${or} {
        margin-inline-start: ${e};
      }
    `);Lr.defaultProps=W;const bi=O.span(({theme:e,padIcon:t})=>{const{base:{"hit-area":{"mouse-min":n,"finger-min":r}},components:{icon:{size:{s:o}}}}=e;return y`
    max-width: 100%;

    ${t&&y`
      padding-inline-start: calc((${n} - ${o}) / 2);

      @media (pointer: coarse) {
        padding-inline-start: calc(${r} - ${o} * 2);
      }
    `}

    ${rr} {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${Ht}:last-child:not(:first-child) {
      /* Offsets the flex gap to make the down arrow appear to trail the text. */
      margin-inline-start: -${e.base.spacing};
    }
  `}),yi=O(wn)`
  min-width: 20ch;
`,wi=c.forwardRef(function(t,n){const r=Xe(),{testId:o,id:a=r,text:l,menu:d,popover:u,onClick:f,icon:p,count:b,iconOnly:g=!1,showArrow:h=!1,...x}=t,I=We(o,Rr),[j,_]=c.useState(!1),C=we(n),R=we(u==null?void 0:u.ref),L=we(d==null?void 0:d.ref);wo([R,C],c.useCallback(v=>{v||_(!1)},[])),zt(v=>{j&&(_(!1),v.stopPropagation())},C),zt(v=>{var $;j&&(_(!1),v.stopPropagation(),($=C.current)==null||$.focus())},d==null?void 0:d.focusControlEl);const{rtl:T}=Ve();return s.jsxs(s.Fragment,{children:[s.jsx(je,{"data-testid":I.root,as:Lr,"aria-label":l,...x,id:a,ref:C,"aria-expanded":j,"aria-haspopup":"menu","aria-controls":j?`${a}-popover`:void 0,label:g&&!j?l:void 0,onClick:v=>{const $=v.detail>0;j?$&&_(!1):_(!0),(!j||$)&&(f==null||f(v))},icon:g,children:s.jsxs(ae,{as:bi,container:{alignItems:"center",gap:1},padIcon:g&&h,children:[p&&s.jsx(xe,{name:p}),!g&&s.jsxs(s.Fragment,{children:[s.jsx(Oe,{children:l}),typeof b=="number"&&s.jsx(sr,{children:b})]}),(!g||h)&&s.jsx(xe,{name:"arrow-micro-down"})]})}),s.jsx(yi,{placement:T?"bottom-end":"bottom-start",hideOnTargetHidden:!0,...u,id:`${a}-popover`,show:!!d&&j,target:C.current,ref:R,children:d&&s.jsx(ui,{testId:I.root,...d,ref:L,items:d.items,onItemClick:(v,$)=>{var V;d.mode!=="multi-select"&&_(!1),(V=d.onItemClick)==null||V.call(d,v,$)},focusControlEl:d.focusControlEl||C.current||void 0})})]})}),$i=Ge(wi,Rr),xi=c.forwardRef(function({"data-testid":t,items:n,menuAt:r=2,scrollAt:o,iconOnly:a=!0,menuButtonProps:l,contextualLabel:d,compact:u=!1,disabled:f=!1,tabIndex:p},b){const g=ke(),h=we(b);return!n||n.length===0?null:n.length>=r?s.jsx($i,{...t?{"data-testid":t}:{},ref:h,text:g("actions"),"aria-label":d&&g("actions_for",[d]),iconOnly:!0,icon:"more",variant:"simple",compact:u,onClick:l==null?void 0:l.onClick,onKeyDown:l==null?void 0:l.onKeyDown,disabled:f,tabIndex:p,menu:{scrollAt:o,items:n.map(({text:x,onClick:I,...j})=>({...j,primary:x,onClick:I?(_,C)=>{I(_,C,h.current??void 0)}:void 0}))}}):s.jsx(s.Fragment,{children:n.map(({id:x,icon:I,text:j,onClick:_,...C})=>c.createElement(je,{...t?{"data-testid":t}:{},key:x,variant:I&&a?"simple":void 0,onClick:R=>_==null?void 0:_(x,R),label:I?j:void 0,icon:!!I&&a,compact:u,"aria-label":d?`${j} - ${d}`:j,disabled:f,...C},I&&a?s.jsx(xe,{name:I}):j))})});/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:Mr,setPrototypeOf:Vn,isFrozen:Si,getPrototypeOf:Ti,getOwnPropertyDescriptor:Ii}=Object;let{freeze:pe,seal:Te,create:sn}=Object,{apply:ln,construct:cn}=typeof Reflect<"u"&&Reflect;pe||(pe=function(t){return t});Te||(Te=function(t){return t});ln||(ln=function(t,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return t.apply(n,o)});cn||(cn=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new t(...r)});const Ot=he(Array.prototype.forEach),Ai=he(Array.prototype.lastIndexOf),qn=he(Array.prototype.pop),$t=he(Array.prototype.push),_i=he(Array.prototype.splice),Pt=he(String.prototype.toLowerCase),qt=he(String.prototype.toString),Yt=he(String.prototype.match),xt=he(String.prototype.replace),vi=he(String.prototype.indexOf),ki=he(String.prototype.trim),_e=he(Object.prototype.hasOwnProperty),me=he(RegExp.prototype.test),St=Ei(TypeError);function he(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return ln(e,t,r)}}function Ei(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return cn(e,n)}}function H(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Pt;Vn&&Vn(e,null);let r=t.length;for(;r--;){let o=t[r];if(typeof o=="string"){const a=n(o);a!==o&&(Si(t)||(t[r]=a),o=a)}e[o]=!0}return e}function Ci(e){for(let t=0;t<e.length;t++)_e(e,t)||(e[t]=null);return e}function Le(e){const t=sn(null);for(const[n,r]of Mr(e))_e(e,n)&&(Array.isArray(r)?t[n]=Ci(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=Le(r):t[n]=r);return t}function Tt(e,t){for(;e!==null;){const r=Ii(e,t);if(r){if(r.get)return he(r.get);if(typeof r.value=="function")return he(r.value)}e=Ti(e)}function n(){return null}return n}const Yn=pe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Zt=pe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Xt=pe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ri=pe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Kt=pe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Li=pe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Zn=pe(["#text"]),Xn=pe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Jt=pe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Kn=pe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),jt=pe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Mi=Te(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Di=Te(/<%[\w\W]*|[\w\W]*%>/gm),Oi=Te(/\$\{[\w\W]*/gm),ji=Te(/^data-[\-\w.\u00B7-\uFFFF]+$/),Ni=Te(/^aria-[\-\w]+$/),Dr=Te(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Pi=Te(/^(?:\w+script|data):/i),zi=Te(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Or=Te(/^html$/i),Fi=Te(/^[a-z][.\w]*(-[.\w]+)+$/i);var Jn=Object.freeze({__proto__:null,ARIA_ATTR:Ni,ATTR_WHITESPACE:zi,CUSTOM_ELEMENT:Fi,DATA_ATTR:ji,DOCTYPE_NAME:Or,ERB_EXPR:Di,IS_ALLOWED_URI:Dr,IS_SCRIPT_OR_DATA:Pi,MUSTACHE_EXPR:Mi,TMPLIT_EXPR:Oi});const It={element:1,text:3,progressingInstruction:7,comment:8,document:9},Hi=function(){return typeof window>"u"?null:window},Ui=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));const a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Qn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function jr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Hi();const t=E=>jr(E);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==It.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,o=r.currentScript,{DocumentFragment:a,HTMLTemplateElement:l,Node:d,Element:u,NodeFilter:f,NamedNodeMap:p=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:b,DOMParser:g,trustedTypes:h}=e,x=u.prototype,I=Tt(x,"cloneNode"),j=Tt(x,"remove"),_=Tt(x,"nextSibling"),C=Tt(x,"childNodes"),R=Tt(x,"parentNode");if(typeof l=="function"){const E=n.createElement("template");E.content&&E.content.ownerDocument&&(n=E.content.ownerDocument)}let L,T="";const{implementation:v,createNodeIterator:$,createDocumentFragment:V,getElementsByTagName:ee}=n,{importNode:k}=r;let D=Qn();t.isSupported=typeof Mr=="function"&&typeof R=="function"&&v&&v.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:G,ERB_EXPR:U,TMPLIT_EXPR:w,DATA_ATTR:M,ARIA_ATTR:q,IS_SCRIPT_OR_DATA:S,ATTR_WHITESPACE:P,CUSTOM_ELEMENT:F}=Jn;let{IS_ALLOWED_URI:B}=Jn,z=null;const ge=H({},[...Yn,...Zt,...Xt,...Kt,...Zn]);let Y=null;const Ne=H({},[...Xn,...Jt,...Kn,...jt]);let N=Object.seal(sn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),X=null,se=null;const Z=Object.seal(sn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Se=!0,K=!0,oe=!1,Pe=!0,ze=!1,Ie=!0,Fe=!1,rt=!1,ot=!1,Ae=!1,Ke=!1,de=!1,ft=!0,mt=!1;const pt="user-content-";let ht=!0,be=!1,$e={},ne=null;const qe=H({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Rt=null;const Lt=H({},["audio","video","img","source","image","track"]);let gt=null;const bt=H({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Je="http://www.w3.org/1998/Math/MathML",J="http://www.w3.org/2000/svg",le="http://www.w3.org/1999/xhtml";let te=le,fe=!1,it=null;const at=H({},[Je,J,le],qt);let yt=H({},["mi","mo","mn","ms","mtext"]),Ye=H({},["annotation-xml"]);const Bt=H({},["title","style","font","a","script"]);let wt=null;const Qr=["application/xhtml+xml","text/html"],eo="text/html";let ie=null,st=null;const to=n.createElement("form"),En=function(i){return i instanceof RegExp||i instanceof Function},Gt=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(st&&st===i)){if((!i||typeof i!="object")&&(i={}),i=Le(i),wt=Qr.indexOf(i.PARSER_MEDIA_TYPE)===-1?eo:i.PARSER_MEDIA_TYPE,ie=wt==="application/xhtml+xml"?qt:Pt,z=_e(i,"ALLOWED_TAGS")?H({},i.ALLOWED_TAGS,ie):ge,Y=_e(i,"ALLOWED_ATTR")?H({},i.ALLOWED_ATTR,ie):Ne,it=_e(i,"ALLOWED_NAMESPACES")?H({},i.ALLOWED_NAMESPACES,qt):at,gt=_e(i,"ADD_URI_SAFE_ATTR")?H(Le(bt),i.ADD_URI_SAFE_ATTR,ie):bt,Rt=_e(i,"ADD_DATA_URI_TAGS")?H(Le(Lt),i.ADD_DATA_URI_TAGS,ie):Lt,ne=_e(i,"FORBID_CONTENTS")?H({},i.FORBID_CONTENTS,ie):qe,X=_e(i,"FORBID_TAGS")?H({},i.FORBID_TAGS,ie):Le({}),se=_e(i,"FORBID_ATTR")?H({},i.FORBID_ATTR,ie):Le({}),$e=_e(i,"USE_PROFILES")?i.USE_PROFILES:!1,Se=i.ALLOW_ARIA_ATTR!==!1,K=i.ALLOW_DATA_ATTR!==!1,oe=i.ALLOW_UNKNOWN_PROTOCOLS||!1,Pe=i.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ze=i.SAFE_FOR_TEMPLATES||!1,Ie=i.SAFE_FOR_XML!==!1,Fe=i.WHOLE_DOCUMENT||!1,Ae=i.RETURN_DOM||!1,Ke=i.RETURN_DOM_FRAGMENT||!1,de=i.RETURN_TRUSTED_TYPE||!1,ot=i.FORCE_BODY||!1,ft=i.SANITIZE_DOM!==!1,mt=i.SANITIZE_NAMED_PROPS||!1,ht=i.KEEP_CONTENT!==!1,be=i.IN_PLACE||!1,B=i.ALLOWED_URI_REGEXP||Dr,te=i.NAMESPACE||le,yt=i.MATHML_TEXT_INTEGRATION_POINTS||yt,Ye=i.HTML_INTEGRATION_POINTS||Ye,N=i.CUSTOM_ELEMENT_HANDLING||{},i.CUSTOM_ELEMENT_HANDLING&&En(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(N.tagNameCheck=i.CUSTOM_ELEMENT_HANDLING.tagNameCheck),i.CUSTOM_ELEMENT_HANDLING&&En(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(N.attributeNameCheck=i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),i.CUSTOM_ELEMENT_HANDLING&&typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(N.allowCustomizedBuiltInElements=i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ze&&(K=!1),Ke&&(Ae=!0),$e&&(z=H({},Zn),Y=[],$e.html===!0&&(H(z,Yn),H(Y,Xn)),$e.svg===!0&&(H(z,Zt),H(Y,Jt),H(Y,jt)),$e.svgFilters===!0&&(H(z,Xt),H(Y,Jt),H(Y,jt)),$e.mathMl===!0&&(H(z,Kt),H(Y,Kn),H(Y,jt))),i.ADD_TAGS&&(typeof i.ADD_TAGS=="function"?Z.tagCheck=i.ADD_TAGS:(z===ge&&(z=Le(z)),H(z,i.ADD_TAGS,ie))),i.ADD_ATTR&&(typeof i.ADD_ATTR=="function"?Z.attributeCheck=i.ADD_ATTR:(Y===Ne&&(Y=Le(Y)),H(Y,i.ADD_ATTR,ie))),i.ADD_URI_SAFE_ATTR&&H(gt,i.ADD_URI_SAFE_ATTR,ie),i.FORBID_CONTENTS&&(ne===qe&&(ne=Le(ne)),H(ne,i.FORBID_CONTENTS,ie)),i.ADD_FORBID_CONTENTS&&(ne===qe&&(ne=Le(ne)),H(ne,i.ADD_FORBID_CONTENTS,ie)),ht&&(z["#text"]=!0),Fe&&H(z,["html","head","body"]),z.table&&(H(z,["tbody"]),delete X.tbody),i.TRUSTED_TYPES_POLICY){if(typeof i.TRUSTED_TYPES_POLICY.createHTML!="function")throw St('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof i.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw St('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');L=i.TRUSTED_TYPES_POLICY,T=L.createHTML("")}else L===void 0&&(L=Ui(h,o)),L!==null&&typeof T=="string"&&(T=L.createHTML(""));pe&&pe(i),st=i}},Cn=H({},[...Zt,...Xt,...Ri]),Rn=H({},[...Kt,...Li]),no=function(i){let m=R(i);(!m||!m.tagName)&&(m={namespaceURI:te,tagName:"template"});const A=Pt(i.tagName),Q=Pt(m.tagName);return it[i.namespaceURI]?i.namespaceURI===J?m.namespaceURI===le?A==="svg":m.namespaceURI===Je?A==="svg"&&(Q==="annotation-xml"||yt[Q]):!!Cn[A]:i.namespaceURI===Je?m.namespaceURI===le?A==="math":m.namespaceURI===J?A==="math"&&Ye[Q]:!!Rn[A]:i.namespaceURI===le?m.namespaceURI===J&&!Ye[Q]||m.namespaceURI===Je&&!yt[Q]?!1:!Rn[A]&&(Bt[A]||!Cn[A]):!!(wt==="application/xhtml+xml"&&it[i.namespaceURI]):!1},Ee=function(i){$t(t.removed,{element:i});try{R(i).removeChild(i)}catch{j(i)}},Qe=function(i,m){try{$t(t.removed,{attribute:m.getAttributeNode(i),from:m})}catch{$t(t.removed,{attribute:null,from:m})}if(m.removeAttribute(i),i==="is")if(Ae||Ke)try{Ee(m)}catch{}else try{m.setAttribute(i,"")}catch{}},Ln=function(i){let m=null,A=null;if(ot)i="<remove></remove>"+i;else{const re=Yt(i,/^[\r\n\t ]+/);A=re&&re[0]}wt==="application/xhtml+xml"&&te===le&&(i='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+i+"</body></html>");const Q=L?L.createHTML(i):i;if(te===le)try{m=new g().parseFromString(Q,wt)}catch{}if(!m||!m.documentElement){m=v.createDocument(te,"template",null);try{m.documentElement.innerHTML=fe?T:Q}catch{}}const ue=m.body||m.documentElement;return i&&A&&ue.insertBefore(n.createTextNode(A),ue.childNodes[0]||null),te===le?ee.call(m,Fe?"html":"body")[0]:Fe?m.documentElement:ue},Mn=function(i){return $.call(i.ownerDocument||i,i,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},Wt=function(i){return i instanceof b&&(typeof i.nodeName!="string"||typeof i.textContent!="string"||typeof i.removeChild!="function"||!(i.attributes instanceof p)||typeof i.removeAttribute!="function"||typeof i.setAttribute!="function"||typeof i.namespaceURI!="string"||typeof i.insertBefore!="function"||typeof i.hasChildNodes!="function")},Dn=function(i){return typeof d=="function"&&i instanceof d};function He(E,i,m){Ot(E,A=>{A.call(t,i,m,st)})}const On=function(i){let m=null;if(He(D.beforeSanitizeElements,i,null),Wt(i))return Ee(i),!0;const A=ie(i.nodeName);if(He(D.uponSanitizeElement,i,{tagName:A,allowedTags:z}),Ie&&i.hasChildNodes()&&!Dn(i.firstElementChild)&&me(/<[/\w!]/g,i.innerHTML)&&me(/<[/\w!]/g,i.textContent)||i.nodeType===It.progressingInstruction||Ie&&i.nodeType===It.comment&&me(/<[/\w]/g,i.data))return Ee(i),!0;if(!(Z.tagCheck instanceof Function&&Z.tagCheck(A))&&(!z[A]||X[A])){if(!X[A]&&Nn(A)&&(N.tagNameCheck instanceof RegExp&&me(N.tagNameCheck,A)||N.tagNameCheck instanceof Function&&N.tagNameCheck(A)))return!1;if(ht&&!ne[A]){const Q=R(i)||i.parentNode,ue=C(i)||i.childNodes;if(ue&&Q){const re=ue.length;for(let ye=re-1;ye>=0;--ye){const Ue=I(ue[ye],!0);Ue.__removalCount=(i.__removalCount||0)+1,Q.insertBefore(Ue,_(i))}}}return Ee(i),!0}return i instanceof u&&!no(i)||(A==="noscript"||A==="noembed"||A==="noframes")&&me(/<\/no(script|embed|frames)/i,i.innerHTML)?(Ee(i),!0):(ze&&i.nodeType===It.text&&(m=i.textContent,Ot([G,U,w],Q=>{m=xt(m,Q," ")}),i.textContent!==m&&($t(t.removed,{element:i.cloneNode()}),i.textContent=m)),He(D.afterSanitizeElements,i,null),!1)},jn=function(i,m,A){if(ft&&(m==="id"||m==="name")&&(A in n||A in to))return!1;if(!(K&&!se[m]&&me(M,m))){if(!(Se&&me(q,m))){if(!(Z.attributeCheck instanceof Function&&Z.attributeCheck(m,i))){if(!Y[m]||se[m]){if(!(Nn(i)&&(N.tagNameCheck instanceof RegExp&&me(N.tagNameCheck,i)||N.tagNameCheck instanceof Function&&N.tagNameCheck(i))&&(N.attributeNameCheck instanceof RegExp&&me(N.attributeNameCheck,m)||N.attributeNameCheck instanceof Function&&N.attributeNameCheck(m,i))||m==="is"&&N.allowCustomizedBuiltInElements&&(N.tagNameCheck instanceof RegExp&&me(N.tagNameCheck,A)||N.tagNameCheck instanceof Function&&N.tagNameCheck(A))))return!1}else if(!gt[m]){if(!me(B,xt(A,P,""))){if(!((m==="src"||m==="xlink:href"||m==="href")&&i!=="script"&&vi(A,"data:")===0&&Rt[i])){if(!(oe&&!me(S,xt(A,P,"")))){if(A)return!1}}}}}}}return!0},Nn=function(i){return i!=="annotation-xml"&&Yt(i,F)},Pn=function(i){He(D.beforeSanitizeAttributes,i,null);const{attributes:m}=i;if(!m||Wt(i))return;const A={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Y,forceKeepAttr:void 0};let Q=m.length;for(;Q--;){const ue=m[Q],{name:re,namespaceURI:ye,value:Ue}=ue,lt=ie(re),Vt=Ue;let ce=re==="value"?Vt:ki(Vt);if(A.attrName=lt,A.attrValue=ce,A.keepAttr=!0,A.forceKeepAttr=void 0,He(D.uponSanitizeAttribute,i,A),ce=A.attrValue,mt&&(lt==="id"||lt==="name")&&(Qe(re,i),ce=pt+ce),Ie&&me(/((--!?|])>)|<\/(style|title|textarea)/i,ce)){Qe(re,i);continue}if(lt==="attributename"&&Yt(ce,"href")){Qe(re,i);continue}if(A.forceKeepAttr)continue;if(!A.keepAttr){Qe(re,i);continue}if(!Pe&&me(/\/>/i,ce)){Qe(re,i);continue}ze&&Ot([G,U,w],Fn=>{ce=xt(ce,Fn," ")});const zn=ie(i.nodeName);if(!jn(zn,lt,ce)){Qe(re,i);continue}if(L&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!ye)switch(h.getAttributeType(zn,lt)){case"TrustedHTML":{ce=L.createHTML(ce);break}case"TrustedScriptURL":{ce=L.createScriptURL(ce);break}}if(ce!==Vt)try{ye?i.setAttributeNS(ye,re,ce):i.setAttribute(re,ce),Wt(i)?Ee(i):qn(t.removed)}catch{Qe(re,i)}}He(D.afterSanitizeAttributes,i,null)},ro=function E(i){let m=null;const A=Mn(i);for(He(D.beforeSanitizeShadowDOM,i,null);m=A.nextNode();)He(D.uponSanitizeShadowNode,m,null),On(m),Pn(m),m.content instanceof a&&E(m.content);He(D.afterSanitizeShadowDOM,i,null)};return t.sanitize=function(E){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=null,A=null,Q=null,ue=null;if(fe=!E,fe&&(E="<!-->"),typeof E!="string"&&!Dn(E))if(typeof E.toString=="function"){if(E=E.toString(),typeof E!="string")throw St("dirty is not a string, aborting")}else throw St("toString is not a function");if(!t.isSupported)return E;if(rt||Gt(i),t.removed=[],typeof E=="string"&&(be=!1),be){if(E.nodeName){const Ue=ie(E.nodeName);if(!z[Ue]||X[Ue])throw St("root node is forbidden and cannot be sanitized in-place")}}else if(E instanceof d)m=Ln("<!---->"),A=m.ownerDocument.importNode(E,!0),A.nodeType===It.element&&A.nodeName==="BODY"||A.nodeName==="HTML"?m=A:m.appendChild(A);else{if(!Ae&&!ze&&!Fe&&E.indexOf("<")===-1)return L&&de?L.createHTML(E):E;if(m=Ln(E),!m)return Ae?null:de?T:""}m&&ot&&Ee(m.firstChild);const re=Mn(be?E:m);for(;Q=re.nextNode();)On(Q),Pn(Q),Q.content instanceof a&&ro(Q.content);if(be)return E;if(Ae){if(Ke)for(ue=V.call(m.ownerDocument);m.firstChild;)ue.appendChild(m.firstChild);else ue=m;return(Y.shadowroot||Y.shadowrootmode)&&(ue=k.call(r,ue,!0)),ue}let ye=Fe?m.outerHTML:m.innerHTML;return Fe&&z["!doctype"]&&m.ownerDocument&&m.ownerDocument.doctype&&m.ownerDocument.doctype.name&&me(Or,m.ownerDocument.doctype.name)&&(ye="<!DOCTYPE "+m.ownerDocument.doctype.name+`>
`+ye),ze&&Ot([G,U,w],Ue=>{ye=xt(ye,Ue," ")}),L&&de?L.createHTML(ye):ye},t.setConfig=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Gt(E),rt=!0},t.clearConfig=function(){st=null,rt=!1},t.isValidAttribute=function(E,i,m){st||Gt({});const A=ie(E),Q=ie(i);return jn(A,Q,m)},t.addHook=function(E,i){typeof i=="function"&&$t(D[E],i)},t.removeHook=function(E,i){if(i!==void 0){const m=Ai(D[E],i);return m===-1?void 0:_i(D[E],m,1)[0]}return qn(D[E])},t.removeHooks=function(E){D[E]=[]},t.removeAllHooks=function(){D=Qn()},t}var Bi=jr();const Nr=Be("html",[]),vt=Bi(),Gi=y`
  ul,
  ol {
    padding-inline-start: 2.5rem;
  }

  li {
    margin: 0.5rem 0;
  }

  ul li {
    ul {
      margin-inline-start: 1rem;
      list-style-type: circle;
    }

    ul ul {
      margin-inline-start: 2rem;
      list-style-type: square;
    }

    ul ul ul {
      margin-inline-start: 3rem;
      list-style-type: disc;
    }
  }

  ol li {
    ol {
      margin-inline-start: 1rem;
      list-style-type: lower-alpha;
    }

    ol ol {
      margin-inline-start: 2rem;
      list-style-type: lower-roman;
    }

    ol ol ol {
      margin-inline-start: 3rem;
      list-style-type: decimal;
    }
  }
`,Wi=e=>y`
  border-collapse: collapse;

  td {
    border: 0.0625rem solid ${e.base.palette["border-line"]};
    min-width: 6.25rem;
  }

  tr:first-child {
    td:first-child {
      border-top-left-radius: 0.125rem;
    }

    td:last-child {
      border-top-right-radius: 0.125rem;
    }
  }

  tr:last-child {
    td:first-child {
      border-bottom-left-radius: 0.125rem;
    }

    td:last-child {
      border-bottom-right-radius: 0.125rem;
    }
  }
`,Vi=e=>{const{base:{"font-size":t,"font-scale":n,palette:r},components:{text:o}}=e,a=Et(t,n);return`
    ${Gi}
    table {
      ${Wi(e)}
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.25rem;
    }
    a {
      color: ${r.interactive};
    }
    pre {
      white-space: break-spaces;
    }
    p {
      min-height: ${a[o.primary["font-size"]]};
    }
    h1 {
      font-size: ${a[o.h1["font-size"]]};
      font-weight: ${o.h1["font-weight"]};
      min-height: ${a[o.h1["font-size"]]};
    }
    h2 {
      font-size: ${a[o.h2["font-size"]]};
      font-weight: ${o.h2["font-weight"]};
      min-height: ${a[o.h2["font-size"]]};
    }
    h3 {
      font-size: ${a[o.h3["font-size"]]};
      font-weight: ${o.h3["font-weight"]};
      min-height: ${a[o.h3["font-size"]]};
    }
    h4 {
      font-size: ${a[o.h4["font-size"]]};
      font-weight: ${o.h4["font-weight"]};
      min-height: ${a[o.h4["font-size"]]};
    }
    h5 {
      font-size: ${a[o.h5["font-size"]]};
      font-weight: ${o.h5["font-weight"]};
      min-height: ${a[o.h5["font-size"]]};
    }
    h6 {
      font-size: ${a[o.h6["font-size"]]};
      font-weight: ${o.h6["font-weight"]};
      min-height: ${a[o.h6["font-size"]]};
    }
  `},Pr=O.div(({theme:e})=>y`
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    contain: paint;
    ${Vi(e)}

    ${nn} ul {
      ul {
        padding-inline-start: 0;
      }
      ol {
        padding-inline-start: 0;
      }
    }

    ${nn} li {
      margin: 0;
    }
  `);Pr.defaultProps=W;if(vt.isSupported){const e=new WeakSet;vt.addHook("beforeSanitizeAttributes",t=>{(t instanceof HTMLElement||t instanceof SVGElement)&&(t.removeAttribute("class"),t.tagName==="A"&&t.hasAttribute("href")&&t.getAttribute("target")==="_blank"&&e.add(t))}),vt.addHook("afterSanitizeAttributes",t=>{if(t.tagName==="A"&&t.hasAttribute("href")){const n=t.getAttribute("href");let r;try{r=new URL(n,window.location.href)}catch{return}window.location.origin!==r.origin?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener")):e.has(t)&&(t.setAttribute("target","_blank"),e.delete(t))}})}const qi=c.forwardRef(function({testId:t,content:n,customTags:r,...o},a){const[l,d]=c.useState(!1),u=c.useMemo(()=>l&&vt.isSupported?vt.sanitize(n,{FORBID_TAGS:["style","font"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:r?p=>r.includes(p):void 0},ALLOWED_URI_REGEXP:$o}):"",[n,r,l]),f=We(t,Nr);return c.useEffect(()=>{d(!0)},[]),s.jsx(Pr,{"data-testid":f.root,...o,dangerouslySetInnerHTML:{__html:u},ref:a})}),Yi=Ge(qi,Nr),Zi=O.div``,zr=O.div``,Ut=O.div(({theme:e})=>y`
    position: relative;
    @media (height >= 31.25rem) {
      overflow-y: auto;
      min-height: 4rem;
    }
    padding: calc(2 * ${e.base.spacing});

    /* Small amount of block padding accounts for focus ring clipping within overflow auto. */
    ${zr} + & {
      padding-block-start: calc(0.5 * ${e.base.spacing});
    }

    &:not(:last-child) {
      padding-block-end: calc(0.5 * ${e.base.spacing});
    }
  `);Ut.defaultProps=W;O.div``;const Fr=O(wn)(({theme:e})=>y`
    display: flex;
    flex-direction: column;
    min-width: min(${e.base["content-width"].sm}, calc(100vw - 2rem));
    max-width: min(${e.base["content-width"].lg}, calc(100vw - 2rem));
    max-height: calc(100vh - 2rem);

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    &[aria-busy='true'] {
      ${Ut} {
        overflow: hidden;
      }
    }
  `);Fr.defaultProps=W;const Xi=c.forwardRef(function({arrow:t=!0,target:n,portal:r,strategy:o,placement:a,children:l,progress:d,focusTrap:u=!0,...f},p){const b=we(p);return ho(u?b:null,!1),s.jsx(Fr,{...f,role:"dialog",arrow:t,"aria-modal":!1,"aria-busy":!!d,ref:b,target:n,portal:r,strategy:o,placement:a,children:l})}),Hr=O(je)``,Ur=O(Xi)(({theme:e})=>y`
    /* When a header is not rendered(e.g. progress state) the button must positioned atop. */
    ${Ut} > ${Hr} {
      position: relative;
      z-index: calc(${e.base["z-index"].backdrop} + 1);
      align-self: end;
    }
  `);Ur.defaultProps=W;const Ki=c.forwardRef(function({target:t,heading:n,children:r,progress:o,onDismiss:a,...l},d){const u=ke(),f=Xe(),p=we(d),b=c.useRef(null),g=c.useRef(null),h=()=>{if(o)return;const _=ir(p),C=_.find(R=>{var L;return(L=b.current)==null?void 0:L.contains(R)})??g.current??_[0];C==null||C.focus()};zt(_=>{a==null||a(),_.stopPropagation()},p,[a]),dr("mousedown",[t,p],()=>{a==null||a()}),c.useLayoutEffect(()=>{const _=gn();return()=>{_ instanceof HTMLElement&&_.isConnected&&_.focus()}},[]),c.useEffect(()=>{o||h()},[o]),c.useEffect(()=>{const _=()=>{setTimeout(()=>{a==null||a()},0)};return t.addEventListener("click",_),()=>{t.removeEventListener("click",_)}},[]);const x=n?s.jsx(Oe,{id:f,variant:"h2",children:typeof n=="string"?n:n.primary}):null,I=s.jsx(yn,{visible:!!o,focusOnVisible:!0,placement:"local",message:typeof o=="string"?o:void 0}),j=s.jsx(Hr,{icon:!0,variant:"simple",onClick:()=>{a()},label:u("close"),ref:g,children:s.jsx(xe,{name:"times"})});return s.jsxs(Ur,{...l,...typeof n=="string"?{"aria-labelledby":f}:{"aria-label":n==null?void 0:n.primary},arrow:!0,target:t,progress:o,ref:p,children:[n&&x&&s.jsxs(ae,{container:{alignItems:"center",justify:"between",pad:2,gap:1},item:{shrink:0},as:zr,children:[typeof n=="string"?x:s.jsx(Sn,{primary:x,secondary:n.secondary?s.jsx(Oe,{variant:"secondary",children:n.secondary}):void 0,visual:n.visual}),j]}),(!n||r||o)&&s.jsxs(ae,{container:{direction:"column"},item:{grow:1},as:Ut,ref:b,children:[!n&&j,r&&s.jsx(Zi,{inert:o?"":void 0,children:r}),I]})]})}),Ji="budicon",Qi="information",ea=()=>s.jsx("path",{d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm-2.49-8.182c0 2.15.582 4.12 1.791 5.866 1.164 1.79 2.73 3.09 4.701 3.94 1.971.851 4.03 1.03 6.134.627s3.895-1.388 5.418-2.91c1.478-1.478 2.463-3.314 2.91-5.418.404-2.105.224-4.12-.626-6.09-.806-1.97-2.104-3.537-3.85-4.745-1.792-1.21-3.761-1.791-5.91-1.791-2.911 0-5.373 1.03-7.433 3.045-2.06 2.06-3.09 4.567-3.134 7.477ZM13.65 5.14c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"}),ta="0 0 25 25",na=Object.freeze(Object.defineProperty({__proto__:null,Component:ea,name:Qi,set:Ji,viewBox:ta},Symbol.toStringTag,{value:"Module"}));nt(na);const Br=O.div``,ra=c.forwardRef(function(t,n){const r=ke(),{heading:o=r("additional_info"),contextualLabel:a,children:l,dialogHandle:d,...u}=t,[f,p]=c.useState(null),b=c.useRef(null),g=we(d);return c.useImperativeHandle(g,()=>({open:()=>{p(b.current)},close:()=>{p(null)}})),s.jsxs(ae,{container:!0,as:Br,ref:n,...u,children:[s.jsx(je,{variant:"simple",label:r("additional_info"),compact:!0,icon:!0,ref:b,onClick:()=>{var h;(h=g.current)==null||h.open()},"aria-label":`${r("additional_info")} - ${a??o}`,children:s.jsx(xe,{name:"information"})}),f&&s.jsx(Ki,{heading:o,target:f,onDismiss:()=>{var h;(h=g.current)==null||h.close()},children:typeof l=="string"?s.jsx(Yi,{content:l}):l})]})}),oa="budicon",ia="warn-solid",aa=()=>s.jsx("path",{d:"M23.5 22.5h-22l11-20 11 20Zm-9.741-6.935V9.39a1.655 1.655 0 0 0-1.166-.447c-.42 0-.792.134-1.212.447v6.175a3.23 3.23 0 0 0 1.212.223c.466 0 .839-.09 1.166-.223Zm-1.212 4.787c.466 0 .886-.179 1.212-.492.326-.313.466-.671.466-1.074 0-.447-.14-.85-.466-1.163-.326-.313-.746-.447-1.212-.447-.42 0-.792.134-1.119.447a1.594 1.594 0 0 0-.512 1.163c0 .403.186.76.512 1.074.327.313.7.492 1.119.492Z"}),sa="0 0 25 25",la=Object.freeze(Object.defineProperty({__proto__:null,Component:aa,name:ia,set:oa,viewBox:sa},Symbol.toStringTag,{value:"Module"})),ca="budicon",da="diamond-minus",ua=()=>s.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M23.219 13.178a.96.96 0 0 0 0-1.356L13.179 1.78a.96.96 0 0 0-1.357 0L1.78 11.821a.96.96 0 0 0 0 1.357l10.04 10.041a.96.96 0 0 0 1.357 0l10.041-10.04ZM18 11.5H7v2h11v-2Z"}),fa="0 0 25 25",ma=Object.freeze(Object.defineProperty({__proto__:null,Component:ua,name:da,set:ca,viewBox:fa},Symbol.toStringTag,{value:"Module"})),tt=O.div(({theme:{base:{"border-radius":e,"font-size":t,"font-scale":n,animation:{speed:r,timing:o},palette:a},components:{"form-field":l,"form-control":{"foreground-color":d,"background-color":u,"border-color":f,"border-radius":p,"border-width":b,":hover":{"border-color":g},":focus":{"border-color":h,"box-shadow":x},":disabled":{"border-color":I,"background-color":j},":read-only":{"border-color":_,"background-color":C}}}},status:R,hasSuggestion:L})=>{const T=Et(t,n),v=R&&l[R]?l[R]["status-color"]:f,$=L&&R?kt(.1,l[R]["status-color"],a["primary-background"]):u;return y`
      color: ${d};
      background-color: ${$};
      border-radius: calc(${e} * ${p});
      border-color: ${v};
      border-width: ${b};
      border-style: solid;
      transition-property: color, background-color, border-color;
      transition-duration: ${r};
      transition-timing-function: ${o.ease};
      &,
      & > select {
        outline: none;
      }

      &:disabled,
      &[disabled] {
        background-color: ${j};
        border-color: ${I};
        cursor: not-allowed;
      }

      &:focus:not([disabled]) {
        border-color: ${h};
        box-shadow: ${x};
        ${L&&y`
          background-color: ${u};
        `}
      }

      &:focus-within:not([disabled]) {
        ${L&&y`
          background-color: ${u};
        `}
      }

      &:hover:not([readonly]):not([disabled]):not(:focus, :focus-within) {
        ${!R&&y`
          border-color: ${g};
        `}
        ${L&&y`
          background-color: ${u};
          box-shadow: 0 0 0 0.125rem ${fn(v,.2)};
        `}
      }

      ${L&&y`
        border-end-end-radius: 0;
      `}

      &[readonly] {
        background-color: ${C};
        border-color: ${_};
      }

      @media (pointer: coarse) {
        /* stylelint-disable-next-line unit-allowed-list */
        font-size: max(${T.s}, 16px);
      }
    `});tt.defaultProps=W;c.forwardRef(function(t,n){return s.jsx(tt,{ref:n,...t})});const pa=O.span`
  display: none;
`,ha=c.forwardRef(function(t,n){const{portalTarget:r}=tr();return r?oo.createPortal(s.jsx(pa,{...t,ref:n}),r):null}),vn=["label","info","additional-info","suggestion-accept","suggestion-reject"],Gr=Be("form-field",vn),Wr=Be("radio-check",["control",...vn]),Ct=O.div(e=>{const{theme:{base:{spacing:t},components:{"form-field":n,"radio-check":{size:r,"touch-size":o,"background-color":a,"border-color":l,"border-width":d}}},status:u}=e;let f=l;return(u==="error"||u==="warning")&&(f=n[u]["status-color"]),y`
      display: flex;
      flex-shrink: 0;
      position: relative;
      width: ${r};
      height: ${r};
      margin-inline-end: calc(0.5 * ${t});
      border: ${d} solid ${f};
      background-color: ${a};

      @media (pointer: coarse) {
        width: ${o};
        height: ${o};
      }

      &::after {
        content: '';
        display: none;
      }
    `});Ct.defaultProps=W;const kn=O.input(e=>{const{disabled:t,theme:{base:{"border-radius":n},components:{"form-control":{":focus":{"box-shadow":r,"border-color":o},":read-only":{"background-color":a}},"radio-check":{size:l,":checked":{"background-color":d,"border-color":u}},checkbox:{"border-radius":f},"radio-button":{"border-radius":p}}}}=e,b=e.readOnly?a:d,g=ve(()=>mn(b)),h=`+ ${Ze} ${Ct}`,{ltr:x}=Ve();return y`
    ${pn}
    margin: 0;

    /* Sets rect size for JAWS focus outline */
    width: ${l};
    height: ${l};

    ${!t&&y`
      &:focus ${h} {
        box-shadow: ${r};
        border-color: ${o};
      }
    `}
    &:checked
      ${h},
      &:checked:disabled
      ${h},
      &[type='checkbox']:indeterminate
      ${h},
      &[type='checkbox']:indeterminate:disabled
      ${h} {
      border-color: ${e.readOnly?"inherit":u};
      background-color: ${b};

      &::after {
        display: block;
      }
    }

    &[type='radio'] ${h}, &[type='radio'] ${h}::after {
      border-radius: ${p};
    }

    &[type='radio'] ${h}::after {
      content: '';
      position: absolute;
      inset: 0;
      margin: auto;
      width: calc(${l} * 0.3);
      height: calc(${l} * 0.3);
      border-radius: ${p};
      border: calc(${l} * 0.2) solid ${g};
    }

    &[type='checkbox'] ${h} {
      border-radius: min(calc(${n} * ${f}), 0.25rem);
    }

    &[type='checkbox']:not(:indeterminate) ${h} {
      &::after {
        width: 40%;
        height: 75%;
        ${x?y`
              transform: rotate(45deg) translate(50%, -30%);
            `:y`
              transform: rotate(45deg) translate(-50%, 30%);
            `}
        border-right: 0.15em solid ${g};
        border-bottom: 0.15em solid ${g};
      }
    }

    &[type='checkbox']:indeterminate ${h} {
      display: flex;

      &::after {
        width: 90%;
        height: 0.15em;
        margin: auto;
        background-color: ${g};
      }
    }
  `});kn.defaultProps=W;const Vr=O.div(e=>{const{disabled:t,readOnly:n,theme:{base:r,components:{"radio-check":{label:{color:o,"font-weight":a}},"form-control":{":hover":{"border-color":l}}}}}=e,d=Et(r["font-size"],r["font-scale"]);return y`
      > ${Ze} {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: ${a};
        word-break: break-word;
        font-size: ${d.s};
        color: ${o};
        margin: 0;
        min-height: ${r["hit-area"]["mouse-min"]};

        @media (pointer: coarse) {
          min-height: ${r["hit-area"]["finger-min"]};
        }
      }

      > ${dt} {
        margin: 0;
        padding-inline-start: calc(${r.spacing} / 4);
      }

      ${!(t||n)&&y`
        &:not(:focus-within) > ${Ze}:hover ${Ct} {
          border-color: ${l};
        }
      `}
    `});Vr.defaultProps=W;const qr=O.label(({disabled:e,readOnly:t,status:n,theme:{base:{palette:r,shadow:o,spacing:a},components:{card:l,"form-field":d,"radio-check":{label:u},"form-control":{":hover":{"border-color":f}}}}})=>{const p=n==="error"?d.error["status-color"]:r["border-line"];return y`
      min-width: min-content;
      cursor: pointer;
      background-color: ${l.background};
      border-radius: ${l["border-radius"]};
      border: 0.0625rem solid ${p};
      padding: ${a};

      ${e&&y`
        cursor: not-allowed;
      `}
      ${!(e||t)&&y`
        :hover:not(:focus-within) {
          border-color: ${f};

          ${Ze} ${Ct} {
            border-color: ${f};
          }
        }

        :focus-within {
          box-shadow: ${o.focus};
          border-color: transparent;
        }
      `}
        > ${Ze} {
        display: flex;
        align-items: center;
        color: ${u.color};
        font-weight: ${u["font-weight"]};
        margin: 0;
      }

      > ${dt} {
        margin: 0;
        padding-inline-start: calc(${a} / 4);
      }
    `});qr.defaultProps=W;const ga=c.forwardRef(function(t,n){const r=Xe(),o=ke(),{testId:a,type:l,id:d=r,label:u,required:f=!1,disabled:p=!1,readOnly:b=!1,indeterminate:g=!1,checked:h,defaultChecked:x,variant:I="simple",onClick:j,onKeyDown:_,onChange:C,status:R,info:L,additionalInfo:T,ariaDescribedby:v,className:$,...V}=t,ee=We(a,Wr),k=l==="radio",D=I==="card",G=we(n),U=Xe();return c.useEffect(()=>{!k&&G.current&&(G.current.indeterminate=!!g)},[G,g,k]),c.useEffect(()=>{if(!G.current)return;const w=G.current.nextSibling;if((w==null?void 0:w.nodeName.toUpperCase())!=="LABEL")return;const M=new AbortController;return w.addEventListener("mousedown",q=>{G.current===gn()&&q.preventDefault()},{signal:M.signal}),()=>{M.abort()}},[]),s.jsx(Kr,{testId:ee,as:D?qr:Vr,label:s.jsxs(s.Fragment,{children:[s.jsx(Ct,{status:R,isRadio:k,as:tt,required:f,disabled:p,readOnly:b,onMouseDown:w=>w.preventDefault()}),u,b&&s.jsx(ha,{id:U,children:o("read_only")})]}),labelAs:D?"div":void 0,id:d,required:f,disabled:p,readOnly:b,status:R,info:L,isRadioCheck:!0,inline:!0,labelAfter:!0,additionalInfo:T,children:s.jsx(kn,{"data-testid":ee.control,...V,className:$n("radio-check",$,{variant:I,type:l}),id:d,type:l,required:f,checked:h,defaultChecked:x,"aria-describedby":b?`${v} ${U}`:v,disabled:p,readOnly:b,onChange:C,onClick:w=>{b&&w.preventDefault(),j==null||j(w)},onKeyDown:w=>{l==="checkbox"&&b&&w.key===" "&&w.preventDefault(),l==="radio"&&b&&w.key.includes("Arrow")&&w.preventDefault(),_==null||_(w)},ref:G})})});Ge(ga,Wr);nt(la,ma,br);const Yr=O(xe)(({theme:e,status:t})=>y`
    height: 1em;
    width: 1em;
    color: ${ve(()=>hn(e.components["form-field"][t]["status-color"],e.base.palette["primary-background"]),()=>e.components["form-field"][t]["status-color"])};
    vertical-align: baseline;
  `);Yr.defaultProps=W;const Zr=O(je)(({theme:e})=>y`
    margin-block-start: calc(${e.base.spacing} / 2);
    align-self: start;
  `);Zr.defaultProps=W;const dt=O.div(({status:e,theme:{base:{"font-size":t,"font-scale":n,spacing:r,palette:o},components:{"form-field":a}}})=>{const{xxs:l}=Et(t,n);return y`
      max-width: max-content;
      font-size: ${l};
      word-break: break-word;

      &:not(:empty) {
        margin-block-start: calc(0.25 * ${r});
      }

      ${e&&a[e]&&y`
        color: ${ve(()=>hn(a[e]["status-color"],o["primary-background"]),()=>a[e]["status-color"])};
      `}
    `});dt.defaultProps=W;const dn=O.div``,Xr=O.div(e=>{const{labelAsLegend:t,isRadioCheck:n,showAdditionalInfo:r,disabled:o,required:a,theme:{base:{palette:{urgent:l},"disabled-opacity":d,spacing:u,"hit-area":{"compact-min":f}}}}=e;return y`
    ${o&&y`
      opacity: ${d};
      -webkit-user-select: none;
      user-select: none;
    `}
    position: relative;
    border: 0;

    &:has(${kn}:only-of-type) {
      ${dt} {
        min-width: 100%;
      }
    }

    > ${Ze}, > ${dn} {
      &:not(:empty) {
        margin-bottom: calc(0.25 * ${u});
        min-height: ${f};
      }
    }

    > ${Ze}, > ${dn} > ${Ze} {
      ${a&&y`
        &::after {
          content: ${'"\\00a0*" / ""'};
          color: ${l};
        }
      `}

      ${o&&y`
        cursor: not-allowed;
      `}
    }

    ${t&&y`
      > legend {
        display: inline-flex;
        align-items: flex-end;
      }
    `}

    ${t&&r&&y`
      display: block;

      > legend {
        float: inline-start;
      }

      > ${Br} {
        ${!n&&y`
          float: inline-end;
        `}
        + * {
          clear: both;
        }
      }
    `}
  `});Xr.defaultProps=W;const un=O(je)(({theme:{base:{"font-size":e,"font-scale":t,"border-radius":n,spacing:r,palette:o},components:{"form-control":{"border-radius":a,"border-width":l},"form-field":d}}})=>{const{xxs:u}=Et(e,t),f=ve(()=>hn(d.pending["status-color"],o["primary-background"]),()=>d.pending["status-color"]),p=so(f),b=ve(()=>mn(f)),g=b&&fn(b,.4);return y`
    background-color: ${f};
    color: ${b};
    font-size: ${u};
    min-width: calc(3 * ${r});
    min-height: calc(3 * ${r});
    padding: 0 ${r};
    border-radius: 0;
    border: none;

    &:first-child {
      border-inline-end: ${l} solid ${g};
      border-end-start-radius: calc(${n} * ${a});
      margin-inline-start: calc(2 * ${r});
    }

    &:last-child {
      border-end-end-radius: calc(${n} * ${a});
      margin-inline-start: 0;
    }

    &:hover {
      color: ${p.foreground};
      background-color: ${p.background};
    }

    @media (pointer: coarse) {
      min-height: 2rem;
    }
  `});un.defaultProps=W;const ba={error:"warn-solid",warning:"diamond-minus",success:"check"},ya=c.forwardRef(function(t,n){const r=Xe(),{testId:o,children:a,id:l=r,as:d="div",label:u,labelAs:f="label",labelFor:p=l,labelId:b,labelHidden:g=!1,labelAfter:h=!1,info:x,status:I,isRadioCheck:j,charLimitDisplay:_,required:C=!1,disabled:R=!1,readOnly:L=!1,inline:T=!1,onClear:v,actions:$,container:V,additionalInfo:ee,onResolveSuggestion:k,"aria-describedby":D,className:G,...U}=t,w=We(o,Gr),M=ke(),{announceAssertive:q}=bn(),S=f==="legend",P=I==="pending"&&!!k,F=we(n),B=c.useRef(null),[z,ge]=c.useState(null),Y=!!ee&&!R&&!g,Ne=s.jsxs(s.Fragment,{children:[s.jsx(bo,{"data-testid":w.label,id:b,as:f,htmlFor:f==="label"?p:void 0,labelHidden:g,onClick:K=>{L&&K.preventDefault()},inline:T,ref:B,children:u}),Y&&z&&s.jsx(ra,{"data-testid":w.additionalInfo,heading:ee.heading,contextualLabel:z,children:ee.content})]}),N=!j&&!S&&!g?s.jsx(ae,{as:dn,container:{justify:"between",alignItems:"end"},item:{alignSelf:"stretch"},children:Ne}):Ne;c.useEffect(()=>{var K;ge(((K=B.current)==null?void 0:K.textContent)??null)},[u]),c.useEffect(()=>{var K,oe;if(I==="error"||I==="warning"){let Pe=`${M(I)} ${x}`;(K=B.current)!=null&&K.textContent&&(Pe=`${(oe=B.current)==null?void 0:oe.textContent} ${Pe}`),q({message:Pe,type:I})}},[I,x]);let X;if(S||c.Children.count(a)>1)X=a;else{const K=c.Children.only(a).props["aria-describedby"];X=c.cloneElement(a,{"aria-describedby":[K,x&&!L?`${l}-info`:void 0].join(" ").trim()||void 0})}$&&(X=s.jsxs(ae,{container:{alignItems:"center",gap:.5},children:[X,s.jsx(xi,{items:$,menuAt:3})]}));let se=s.jsxs(ae,{id:`${l}-info`,"data-testid":w.info,status:I,as:dt,container:{alignItems:"center",gap:.5},children:[I&&I!=="pending"&&s.jsxs(s.Fragment,{children:[s.jsx(ae,{item:{alignSelf:"start"},as:Yr,status:I,name:ba[I]}),s.jsx(tn,{children:`${M(I)} `})]}),x]});if(_&&(se=s.jsxs(ae,{container:{justify:se?"between":"end",gap:1},children:[se,s.jsx(ae,{item:{shrink:0},children:_})]})),P){const K=ir(F);se=s.jsxs(ae,{container:{alignItems:"start",justify:"between"},children:[s.jsxs(dt,{"data-testid":w.info,status:I,id:`${l}-info`,children:[M("suggestion_info"),s.jsx(tn,{"aria-live":"polite",children:M("suggestion_assist")})]}),s.jsxs(ae,{container:{wrap:"nowrap"},children:[s.jsx(un,{"data-testid":w.suggestionReject,onClick:()=>{var oe;k(!1),(oe=K[0])==null||oe.focus()},"aria-label":`${M("no")}, ${M("reject_suggestion_button_a11y")}${z?` - ${z}`:""}`,children:M("no")}),s.jsx(un,{"data-testid":w.suggestionAccept,onClick:()=>{var oe;k(!0),(oe=K[0])==null||oe.focus()},"aria-label":`${M("yes")}, ${M("accept_suggestion_button_a11y")}${z?` - ${z}`:""}`,children:M("yes")})]})]})}const Z=K=>{K.key==="Enter"&&(K.target.closest("button")||(K.preventDefault(),k==null||k(!0)))},Se=[];return D&&Se.push(D),S&&x&&Se.push(`${l}-info`),s.jsxs(ae,{"data-testid":w.root,...U,container:{direction:T?"row":"column",alignItems:T?"center":void 0,wrap:j?"wrap":void 0,...V},as:Xr,labelAsLegend:S,isRadioCheck:j,showAdditionalInfo:Y,id:`${l}-field`,forwardedAs:d,required:C,disabled:R,readOnly:L,onKeyDown:P?Z:void 0,"aria-describedby":Se.length?Se.join(" "):void 0,ref:F,className:$n("form-field",G,{status:I}),children:[(S||!h)&&N,X,!S&&h&&N,!L&&se,j&&v&&s.jsx(Zr,{variant:"link",onClick:()=>{v()},children:M("clear_selection")})]})}),Kr=Ge(ya,Gr),wa=O.div`
  gap: 1rem;

  /* Let flex items be aligned to the baseline of their first child */
  align-items: baseline;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${tt} {
    position: relative;
  }

  > :first-child {
    > ${tt}:after {
      content: '-';
      position: absolute;
      width: 1rem;
      inset-inline-end: -1rem;
      text-align: center;
    }
  }

  > ${tt}:first-child:after {
    content: '-';
    position: absolute;
    width: 1rem;
    inset-inline-end: -1rem;
    text-align: center;
  }
`;wa.defaultProps=W;const Jr=O.input(({theme:{base:e,components:t}})=>y`
    width: 100%;
    height: ${t.input.height};
    min-height: ${e["hit-area"]["mouse-min"]};
    padding-block: 0;
    padding-inline: ${t.input.padding};
    appearance: none;
    -webkit-appearance: none;
    text-align: inherit;

    @media (pointer: coarse) {
      min-height: ${e["hit-area"]["finger-min"]};
    }
  `);Jr.defaultProps=W;const er=Be("input",["control",...vn]),_a=Ge(c.forwardRef(function(t,n){const r=Xe(),{testId:o,id:a=r,value:l,defaultValue:d,required:u=!1,disabled:f=!1,readOnly:p=!1,label:b,additionalInfo:g,labelHidden:h,info:x,status:I,actions:j,onResolveSuggestion:_,className:C,...R}=t,L=We(o,er),T={};Qt(t,"value")?T.value=l??"":Qt(t,"defaultValue")&&(T.defaultValue=d??"");const v=s.jsx(tt,{"data-testid":L.control,ref:n,id:a,required:u,disabled:f,readOnly:p,status:I,hasSuggestion:!!_&&I==="pending",...T,autoComplete:"_off",...R,as:Jr,className:$n("input",C)});return b?s.jsx(Kr,{testId:L,additionalInfo:g,label:b,labelHidden:h,id:a,info:x,readOnly:p,status:I,required:u,disabled:f,actions:j,onResolveSuggestion:_,children:v}):v}),er);export{_a as I};
