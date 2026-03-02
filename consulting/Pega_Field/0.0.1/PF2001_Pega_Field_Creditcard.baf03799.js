(self.webpackChunkconsulting=self.webpackChunkconsulting||[]).push([[19282727],{398:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>f});var r=i(1594),n=i(8567),s=i(1093),a=(i(1957),i(8267));const o=a.Ay.div(()=>a.AH`
    .credit-card-container {
      width: 100%;
      max-width: 400px;
    }

    .input-wrapper {
      position: relative;
      display: block;
      width: 100%;
    }

    .credit-card-input {
      width: 100%;
      position: relative;
      padding: 8px 60px 8px 8px;

      /* Ensure input has padding for logo */
      input,
      & input,
      & > div > input,
      & div input {
        padding-right: 80px !important;
        font-family: 'Courier New', monospace !important;
        letter-spacing: 1px !important;
        font-size: 16px !important;
        box-sizing: border-box;
      }

      /* Additional padding rules for various Input structures */
      [type='text'],
      [role='textbox'],
      textarea,
      & [type='text'],
      & [role='textbox'],
      & textarea {
        padding-right: 80px !important;
      }

      /* Ensure padding is applied to Pega Input wrapper */
      & > div {
        input,
        [type='text'],
        [role='textbox'] {
          padding-right: 80px !important;
        }
      }

      &.valid {
        input,
        & input,
        & > div > input,
        & div input {
          border-color: #4caf50 !important;
          box-shadow: 0 0 0 1px #4caf50 !important;
        }
      }

      &.invalid {
        input,
        & input,
        & > div > input,
        & div input {
          border-color: #f44336 !important;
          box-shadow: 0 0 0 1px #f44336 !important;
        }
      }
    }

    .card-logo {
      position: absolute;
      right: 12px;
      top: 70%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 100;
      width: 40px;
      height: 24px;

      svg {
        display: block;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        width: 40px;
        height: 24px;
      }
    }

    .card-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      font-size: 14px;
    }

    .card-type {
      color: #666;
      font-weight: 500;
    }

    .validation-status {
      font-weight: 600;

      &.valid {
        color: #4caf50;
      }

      &.invalid {
        color: #f44336;
      }
    }

    /* Responsive design */
    @media (max-width: 480px) {
      .credit-card-container {
        max-width: 100%;
      }

      .credit-card-input input {
        font-size: 14px;
        padding: 10px 70px 10px 12px !important;
      }

      .card-logo {
        right: 8px;
      }
    }
  `);var l=i(4848);const d=[{name:"Visa",pattern:/^4/,maxLength:19,color:"#1A1F71"},{name:"Mastercard",pattern:/^5[1-5]|^2[2-7]/,maxLength:19,color:"#EB001B"},{name:"American Express",pattern:/^3[47]/,maxLength:17,color:"#006FCF"},{name:"Discover",pattern:/^6(?:011|5)/,maxLength:19,color:"#FF6000"},{name:"Diners Club",pattern:/^3[068]/,maxLength:16,color:"#0079BE"},{name:"JCB",pattern:/^35/,maxLength:19,color:"#005BAC"}],c=()=>(0,l.jsxs)("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"40",height:"24",rx:"4",fill:"#1A1F71"}),(0,l.jsx)("text",{x:"20",y:"16",textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",fontFamily:"Arial, sans-serif",children:"VISA"})]}),p=()=>(0,l.jsxs)("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"40",height:"24",rx:"4",fill:"#EB001B"}),(0,l.jsx)("circle",{cx:"15",cy:"12",r:"6",fill:"#FF5F00",opacity:"0.8"}),(0,l.jsx)("circle",{cx:"25",cy:"12",r:"6",fill:"#F79E1B",opacity:"0.8"})]}),x=()=>(0,l.jsxs)("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"40",height:"24",rx:"4",fill:"#006FCF"}),(0,l.jsx)("text",{x:"20",y:"16",textAnchor:"middle",fill:"white",fontSize:"8",fontWeight:"bold",fontFamily:"Arial, sans-serif",children:"AMEX"})]}),h=()=>(0,l.jsxs)("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"40",height:"24",rx:"4",fill:"#FF6000"}),(0,l.jsx)("text",{x:"20",y:"16",textAnchor:"middle",fill:"white",fontSize:"7",fontWeight:"bold",fontFamily:"Arial, sans-serif",children:"DISCOVER"})]}),g=()=>(0,l.jsxs)("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"40",height:"24",rx:"4",fill:"#0079BE"}),(0,l.jsx)("circle",{cx:"20",cy:"12",r:"8",fill:"transparent",stroke:"white",strokeWidth:"2"})]}),u=()=>(0,l.jsxs)("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"40",height:"24",rx:"4",fill:"#005BAC"}),(0,l.jsx)("text",{x:"20",y:"16",textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",fontFamily:"Arial, sans-serif",children:"JCB"})]}),w=()=>(0,l.jsxs)("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"40",height:"24",rx:"4",fill:"#E0E0E0",stroke:"#CCCCCC",strokeWidth:"1"}),(0,l.jsx)("rect",{x:"8",y:"8",width:"24",height:"8",rx:"2",fill:"#F5F5F5"})]}),f=(0,s.A)(function(t){const{getPConnect:e,value:i="",placeholder:s="Enter credit card number",disabled:a=!1,readOnly:f=!1,required:m=!1,label:v="Credit Card Number",hideLabel:b=!1,testId:j,showCardLogo:y=!0,formatNumber:C=!0}=t,[A,F]=(0,r.useState)(i),[E,B]=(0,r.useState)(null),[k,N]=(0,r.useState)(!1),_=(0,r.useCallback)(t=>{const e=t.replace(/\D/g,"");for(const t of d)if(t.pattern.test(e))return t.name;return null},[]),D=(0,r.useCallback)(t=>{const e=t.replace(/\D/g,"");if(e.length<13||e.length>19)return!1;let i=0,r=!1;for(let t=e.length-1;t>=0;t-=1){let n=parseInt(e.charAt(t),10);r&&(n*=2,n>9&&(n-=9)),i+=n,r=!r}return i%10==0},[]),L=(0,r.useCallback)(t=>{const e=t.replace(/\D/g,"");return"American Express"===E?e.replace(/(\d{4})(\d{6})(\d{5})/,"$1 $2 $3").substring(0,17):e.replace(/(\d{4})(?=\d)/g,"$1 ").substring(0,19)},[E]);return(0,r.useEffect)(()=>{if(i){const t=_(i);B(t),F(C?L(i):i),N(D(i))}},[i,C,_,L,D]),(0,l.jsx)(o,{"data-testid":j,children:(0,l.jsxs)("div",{className:"credit-card-container",children:[(0,l.jsxs)("div",{className:"input-wrapper",children:[(0,l.jsx)(n.A,{type:"text",value:A,onChange:t=>{const i=t.target.value,r=i.replace(/\D/g,""),n=_(r);B(n);const s=C?L(i):r;F(s);const a=D(r);if(N(a),e){const t=e(),i=t.getActionsApi(),n=t.getStateProps().value;i.updateFieldValue(n,r)}},placeholder:s,disabled:a,readOnly:f,required:m,label:v,labelHidden:b,className:`credit-card-input ${k?"valid":""} ${A&&!k?"invalid":""}`,maxLength:"American Express"===E?17:19,testId:j}),y&&(0,l.jsx)("div",{className:"card-logo",children:(()=>{switch(E){case"Visa":return(0,l.jsx)(c,{});case"Mastercard":return(0,l.jsx)(p,{});case"American Express":return(0,l.jsx)(x,{});case"Discover":return(0,l.jsx)(h,{});case"Diners Club":return(0,l.jsx)(g,{});case"JCB":return(0,l.jsx)(u,{});default:return(0,l.jsx)(w,{})}})()})]}),E&&(0,l.jsxs)("div",{className:"card-info",children:[(0,l.jsxs)("span",{className:"card-type",children:[E," detected"]}),k&&(0,l.jsx)("span",{className:"validation-status valid",children:"✓ Valid"}),A&&!k&&(0,l.jsx)("span",{className:"validation-status invalid",children:"✗ Invalid"})]})]})})})},1957:(t,e,i)=>{window?.__webpack_nonce__&&(i.nc=window.__webpack_nonce__)},2020:(t,e,i)=>{var r={};function n(t){return Promise.resolve().then(()=>{if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i(r[t])})}n.keys=()=>Object.keys(r),n.id=2020,t.exports=n},6935:t=>{function e(t){return Promise.resolve().then(()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}e.keys=()=>[],e.resolve=e,e.id=6935,t.exports=e}}]);
//# sourceMappingURL=PF2001_Pega_Field_Creditcard.baf03799.js.map