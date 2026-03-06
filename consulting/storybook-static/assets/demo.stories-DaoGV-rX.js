import{j as e}from"./index-Cws_IRuu.js";import{r as n}from"./index-C5e9SFkp.js";import"./create-nonce-GGcjuytk.js";import{q as ae,A as ne}from"./useConsolidatedRef-FEYVq0tu.js";import{w as se}from"./withConfiguration-B9Eslcrb.js";import{I as oe}from"./Input-CuiGarE_.js";import"./index-Dy23IbDT.js";import"./Badges.test-ids-Cv4_ccaG.js";import"./iframe-D5cjZ3_e.js";import"./Label-Bgz81c9T.js";import"./BareButton-DwDNO_qX.js";const ie={value:""},de={value:".CreditCard",hasSuggestions:!1},le=ae.div(()=>ne`
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
      right: 8px;
      top: 72%;
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
  `),ce=[{name:"Visa",pattern:/^4/,maxLength:19,color:"#1A1F71"},{name:"Mastercard",pattern:/^5[1-5]|^2[2-7]/,maxLength:19,color:"#EB001B"},{name:"American Express",pattern:/^3[47]/,maxLength:17,color:"#006FCF"},{name:"Discover",pattern:/^6(?:011|5)/,maxLength:19,color:"#FF6000"},{name:"Diners Club",pattern:/^3[068]/,maxLength:16,color:"#0079BE"},{name:"JCB",pattern:/^35/,maxLength:19,color:"#005BAC"}],pe=()=>e.jsxs("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"40",height:"24",rx:"4",fill:"#1A1F71"}),e.jsx("text",{x:"20",y:"16",textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",fontFamily:"Arial, sans-serif",children:"VISA"})]}),ge=()=>e.jsxs("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"40",height:"24",rx:"4",fill:"#EB001B"}),e.jsx("circle",{cx:"15",cy:"12",r:"6",fill:"#FF5F00",opacity:"0.8"}),e.jsx("circle",{cx:"25",cy:"12",r:"6",fill:"#F79E1B",opacity:"0.8"})]}),ue=()=>e.jsxs("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"40",height:"24",rx:"4",fill:"#006FCF"}),e.jsx("text",{x:"20",y:"16",textAnchor:"middle",fill:"white",fontSize:"8",fontWeight:"bold",fontFamily:"Arial, sans-serif",children:"AMEX"})]}),he=()=>e.jsxs("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"40",height:"24",rx:"4",fill:"#FF6000"}),e.jsx("text",{x:"20",y:"16",textAnchor:"middle",fill:"white",fontSize:"7",fontWeight:"bold",fontFamily:"Arial, sans-serif",children:"DISCOVER"})]}),me=()=>e.jsxs("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"40",height:"24",rx:"4",fill:"#0079BE"}),e.jsx("circle",{cx:"20",cy:"12",r:"8",fill:"transparent",stroke:"white",strokeWidth:"2"})]}),xe=()=>e.jsxs("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"40",height:"24",rx:"4",fill:"#005BAC"}),e.jsx("text",{x:"20",y:"16",textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",fontFamily:"Arial, sans-serif",children:"JCB"})]}),fe=()=>e.jsxs("svg",{width:"40",height:"24",viewBox:"0 0 40 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"40",height:"24",rx:"4",fill:"#E0E0E0",stroke:"#CCCCCC",strokeWidth:"1"}),e.jsx("rect",{x:"8",y:"8",width:"24",height:"8",rx:"2",fill:"#F5F5F5"})]});function Y(s){const{getPConnect:r,value:t="",placeholder:o="Enter credit card number",disabled:c=!1,readOnly:i=!1,required:G=!1,label:K="Credit Card Number",hideLabel:Q=!1,testId:j,showCardLogo:U=!0,formatNumber:S=!0}=s,[P,N]=n.useState(t),[p,E]=n.useState(null),[x,L]=n.useState(!1),V=n.useCallback(l=>{const a=l.replace(/\D/g,"");for(const d of ce)if(d.pattern.test(a))return d.name;return null},[]),y=n.useCallback(l=>{const a=l.replace(/\D/g,"");if(a.length<13||a.length>19)return!1;let d=0,h=!1;for(let m=a.length-1;m>=0;m-=1){let g=parseInt(a.charAt(m),10);h&&(g*=2,g>9&&(g-=9)),d+=g,h=!h}return d%10===0},[]),F=n.useCallback(l=>{const a=l.replace(/\D/g,"");return p==="American Express"?a.replace(/(\d{4})(\d{6})(\d{5})/,"$1 $2 $3").substring(0,17):a.replace(/(\d{4})(?=\d)/g,"$1 ").substring(0,19)},[p]),Z=l=>{const a=l.target.value,d=a.replace(/\D/g,""),h=V(d);E(h);const m=S?F(a):d;N(m);const g=y(d);if(L(g),r){const I=r(),te=I.getActionsApi(),re=I.getStateProps().value;te.updateFieldValue(re,d)}},ee=()=>{switch(p){case"Visa":return e.jsx(pe,{});case"Mastercard":return e.jsx(ge,{});case"American Express":return e.jsx(ue,{});case"Discover":return e.jsx(he,{});case"Diners Club":return e.jsx(me,{});case"JCB":return e.jsx(xe,{});default:return e.jsx(fe,{})}};return n.useEffect(()=>{if(t){const l=V(t);E(l),N(S?F(t):t),L(y(t))}},[t,S,V,F,y]),e.jsx(le,{"data-testid":j,children:e.jsxs("div",{className:"credit-card-container",children:[e.jsxs("div",{className:"input-wrapper",children:[e.jsx(oe,{type:"text",value:P,onChange:Z,placeholder:o,disabled:c,readOnly:i,required:G,label:K,labelHidden:Q,className:`credit-card-input ${x?"valid":""} ${P&&!x?"invalid":""}`,maxLength:p==="American Express"?17:19,testId:j}),U&&e.jsx("div",{className:"card-logo",children:ee()})]}),p&&e.jsxs("div",{className:"card-info",children:[e.jsxs("span",{className:"card-type",children:[p," detected"]}),x&&e.jsx("span",{className:"validation-status valid",children:"✓ Valid"}),P&&!x&&e.jsx("span",{className:"validation-status invalid",children:"✗ Invalid"})]})]})})}const u=se(Y);Y.__docgenInfo={description:"",methods:[],displayName:"PegaFieldCreditcard",props:{showCardLogo:{required:!1,tsType:{name:"boolean"},description:""},formatNumber:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PConnFieldProps"]};const Ee={title:"Pega/Field/Credit Card",component:u,excludeStories:/.*Data$/,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},showCardLogo:{control:"boolean",description:"Whether to show the detected card logo"},formatNumber:{control:"boolean",description:"Whether to format the card number with spaces"},value:{control:"text",description:"Initial card number value"}}},A={visa:"4532015112830366",mastercard:"5555555555554444",amex:"378282246310005"},f={args:{label:"Credit Card Number",placeholder:"Enter credit card number",showCardLogo:!0,formatNumber:!0,testId:"credit-card-default"},render:s=>{const[r,t]=n.useState(ie.value),o={value:r,getPConnect:()=>({getStateProps:()=>de,getActionsApi:()=>({updateFieldValue:(c,i)=>t(i),triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})};return e.jsx(u,{...o,...s})}},C={args:{label:"Visa Card Example",placeholder:"Visa test card",showCardLogo:!0,formatNumber:!0,testId:"visa-demo"},render:s=>{const[r,t]=n.useState(A.visa),o={value:r,getPConnect:()=>({getStateProps:()=>({value:".CreditCard",hasSuggestions:!1}),getActionsApi:()=>({updateFieldValue:(c,i)=>t(i),triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})};return e.jsx(u,{...o,...s})}},v={args:{label:"Mastercard Example",placeholder:"Mastercard test card",showCardLogo:!0,formatNumber:!0,testId:"mastercard-demo"},render:s=>{const[r,t]=n.useState(A.mastercard),o={value:r,getPConnect:()=>({getStateProps:()=>({value:".CreditCard",hasSuggestions:!1}),getActionsApi:()=>({updateFieldValue:(c,i)=>t(i),triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})};return e.jsx(u,{...o,...s})}},w={args:{label:"American Express Example",placeholder:"AmEx test card",showCardLogo:!0,formatNumber:!0,testId:"amex-demo"},render:s=>{const[r,t]=n.useState(A.amex),o={value:r,getPConnect:()=>({getStateProps:()=>({value:".CreditCard",hasSuggestions:!1}),getActionsApi:()=>({updateFieldValue:(c,i)=>t(i),triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})};return e.jsx(u,{...o,...s})}},b={args:{label:"Logo Test",placeholder:"Should show Visa logo",showCardLogo:!0,formatNumber:!0,testId:"logo-test"},render:s=>{const[r,t]=n.useState("4111111111111111"),o={value:r,getPConnect:()=>({getStateProps:()=>({value:".CreditCard",hasSuggestions:!1}),getActionsApi:()=>({updateFieldValue:(c,i)=>t(i),triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Logo Test - Should show Visa logo immediately"}),e.jsx(u,{...o,...s}),e.jsxs("p",{children:["Card number: ",r]})]})}};var B,D,T;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Credit Card Number',
    placeholder: 'Enter credit card number',
    showCardLogo: true,
    formatNumber: true,
    testId: 'credit-card-default'
  },
  render: (args: any) => {
    const [value, setValue] = useState(configProps.value);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldCreditcard {...props} {...args} />;
  }
}`,...(T=(D=f.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var W,_,M;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Visa Card Example',
    placeholder: 'Visa test card',
    showCardLogo: true,
    formatNumber: true,
    testId: 'visa-demo'
  },
  render: (args: any) => {
    const [value, setValue] = useState(sampleCards.visa);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({
          value: '.CreditCard',
          hasSuggestions: false
        }),
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldCreditcard {...props} {...args} />;
  }
}`,...(M=(_=C.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var k,z,$;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Mastercard Example',
    placeholder: 'Mastercard test card',
    showCardLogo: true,
    formatNumber: true,
    testId: 'mastercard-demo'
  },
  render: (args: any) => {
    const [value, setValue] = useState(sampleCards.mastercard);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({
          value: '.CreditCard',
          hasSuggestions: false
        }),
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldCreditcard {...props} {...args} />;
  }
}`,...($=(z=v.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var q,J,O;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'American Express Example',
    placeholder: 'AmEx test card',
    showCardLogo: true,
    formatNumber: true,
    testId: 'amex-demo'
  },
  render: (args: any) => {
    const [value, setValue] = useState(sampleCards.amex);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({
          value: '.CreditCard',
          hasSuggestions: false
        }),
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldCreditcard {...props} {...args} />;
  }
}`,...(O=(J=w.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var R,H,X;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Logo Test',
    placeholder: 'Should show Visa logo',
    showCardLogo: true,
    formatNumber: true,
    testId: 'logo-test'
  },
  render: (args: any) => {
    const [value, setValue] = useState('4111111111111111');
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({
          value: '.CreditCard',
          hasSuggestions: false
        }),
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <div style={{
      padding: '20px'
    }}>
        <h3>Logo Test - Should show Visa logo immediately</h3>
        <PegaFieldCreditcard {...props} {...args} />
        <p>Card number: {value}</p>
      </div>;
  }
}`,...(X=(H=b.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};const Le=["Default","WithVisaCard","WithMastercard","WithAmericanExpress","LogoTest"];export{f as Default,b as LogoTest,w as WithAmericanExpress,v as WithMastercard,C as WithVisaCard,Le as __namedExportsOrder,Ee as default};
