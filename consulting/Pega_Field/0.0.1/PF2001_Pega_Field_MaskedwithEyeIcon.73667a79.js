(self.webpackChunkconsulting=self.webpackChunkconsulting||[]).push([[31289715],{1957:(e,t,n)=>{window?.__webpack_nonce__&&(n.nc=window.__webpack_nonce__)},2020:(e,t,n)=>{var o={};function r(e){return Promise.resolve().then(()=>{if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n(o[e])})}r.keys=()=>Object.keys(o),r.id=2020,e.exports=r},6400:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(1594),r=n(8567),i=n(1093),s=(n(1957),n(8267));const a=s.Ay.div(()=>s.AH`
    margin: 0px 0;

    .masked-input-container {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .eye-toggle-button {
      position: absolute;
      right: 8px;
      top: 70%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      transition: background-color 0.2s ease, opacity 0.2s ease;

      &:hover:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.1);
      }

      &:active:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.15);
        transform: translateY(-50%) scale(0.95);
      }
    }

    .eye-icon {
      font-size: 16px;
      line-height: 1;
      user-select: none;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      transition: color 0.2s ease;
    }

    .eye-toggle-button:hover:not(:disabled) .eye-icon {
      color: #333;
    }

    .eye-toggle-button:disabled .eye-icon {
      color: #ccc;
    }

    /* Adjust input padding to make room for the eye icon */
    .masked-input-container input[type="text"],
    .masked-input-container input[type="password"] {
      padding-right: 40px !important;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .eye-toggle-button {
        right: 6px;
        padding: 6px;
      }

      .eye-icon {
        font-size: 14px;
      }
    }
  `);var d=n(4848);const l=()=>(0,d.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,d.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),c=()=>(0,d.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),(0,d.jsx)("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),u=(0,i.A)(function(e){const{getPConnect:t,value:n,placeholder:i,disabled:s=!1,readOnly:u=!1,required:p=!1,label:g,hideLabel:h=!1,testId:x,defaultMasked:b=!0}=e,y=t(),k=y.getActionsApi(),v=y.getStateProps().value,[m,f]=(0,o.useState)(b),w=()=>{f(!m)};return(0,d.jsx)(a,{children:(0,d.jsxs)("div",{className:"masked-input-container",children:[(0,d.jsx)(r.A,{type:m?"password":"text",value:n,label:g,labelHidden:h,placeholder:i,disabled:s,readOnly:u,required:p,onChange:e=>{const{value:t}=e.target;k.updateFieldValue(v,t)},testId:x}),(0,d.jsx)("button",{type:"button",className:"eye-toggle-button",onClick:w,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),w())},"aria-label":m?"Show text":"Hide text","aria-pressed":!m,disabled:s||u,tabIndex:s||u?-1:0,children:(0,d.jsx)("span",{className:"eye-icon",role:"img","aria-hidden":"true",children:m?(0,d.jsx)(l,{}):(0,d.jsx)(c,{})})})]})})})},6935:e=>{function t(e){return Promise.resolve().then(()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=()=>[],t.resolve=t,t.id=6935,e.exports=t}}]);
//# sourceMappingURL=PF2001_Pega_Field_MaskedwithEyeIcon.73667a79.js.map