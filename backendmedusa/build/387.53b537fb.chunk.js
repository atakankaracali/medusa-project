"use strict";(self.webpackChunkmedusa_starter_default=self.webpackChunkmedusa_starter_default||[]).push([[387],{92956:(e,r,t)=>{t.d(r,{A:()=>f});var n=t(74848),o=t(20053),a=t(96540);let s=function(e){var r,t,o=e.size,a=void 0===o?"20":o,s=e.color,i=void 0===s?"currentColor":s,l=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["size","color"]);return(0,n.jsxs)("svg",(r=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n;n=t[r],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n})}return e}({width:a,height:a,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l),t=t={children:[(0,n.jsx)("path",{d:"M2.5 10C2.5 10 5.22727 4.58337 10 4.58337C14.7727 4.58337 17.5 10 17.5 10C17.5 10 14.7727 15.4167 10 15.4167C5.22727 15.4167 2.5 10 2.5 10Z",stroke:i,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M9.99965 12.0739C11.145 12.0739 12.0735 11.1454 12.0735 10C12.0735 8.85465 11.145 7.92615 9.99965 7.92615C8.85428 7.92615 7.92578 8.85465 7.92578 10C7.92578 11.1454 8.85428 12.0739 9.99965 12.0739Z",stroke:i,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t})(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}),r))};var i=t(27308),l=t(47400);function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],s=!0,i=!1;try{for(o=o.call(e);!(s=(t=o.next()).done)&&(a.push(t.value),!r||a.length!==r);s=!0);}catch(e){i=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(i)throw n}}return a}}(e,r)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=a.forwardRef(function(e,r){var t=e.placeholder,c=e.name,d=e.key,f=e.onChange,p=e.onFocus,m=e.className,y=e.type,b=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["placeholder","name","key","onChange","onFocus","className","type"]),g=(0,a.useRef)(null),h=u((0,a.useState)(!1),2),x=h[0],j=h[1],v=u((0,a.useState)(y),2),w=v[0],O=v[1];return(0,a.useEffect)(function(){"password"===y&&x&&O("text"),"password"!==y||x||O("password")},[y,x]),(0,a.useImperativeHandle)(r,function(){return g.current}),(0,n.jsxs)("div",{className:(0,o.default)("rounded-rounded h-[40px] w-[300px] overflow-hidden border","bg-grey-5 inter-base-regular placeholder:text-grey-40","focus-within:shadow-input focus-within:border-violet-60","flex items-center",{"text-grey-40 pl-xsmall pointer-events-none focus-within:border-none focus-within:shadow-none":b.readOnly},m),children:[(0,n.jsx)("input",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n;n=t[r],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n})}return e}({className:(0,o.default)("remove-number-spinner leading-base w-full bg-transparent py-3 px-4 outline-none outline-0",{"pl-xsmall":b.readOnly}),ref:g,name:c,placeholder:t||"Placeholder",onChange:f,onFocus:p,type:w},b),d||c),"password"===y&&(0,n.jsx)("button",{type:"button",onClick:function(){return j(!x)},className:"text-grey-40 focus:text-violet-60 px-4 focus:outline-none",tabIndex:-1,children:x?(0,n.jsx)(s,{size:16}):(0,n.jsx)(i.A,{size:16})}),b.readOnly&&(0,n.jsx)(l.A,{size:16,className:"text-grey-40 mr-base"})]})});d.displayName="SigninInput";let f=d},36536:(e,r,t)=>{t.d(r,{A:()=>i});var n=t(74848),o=t(90888),a=function(){return(0,n.jsx)("div",{className:"w-5xlarge h-5xlarge flex items-center justify-center rounded-full bg-gradient-to-t from-[#26292B] via-[#151718] to-[#151718]",children:(0,n.jsx)(s,{})})},s=function(){return(0,n.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M32.4895 7.84367L24.3377 3.15373C21.6705 1.61542 18.4022 1.61542 15.7351 3.15373L7.5457 7.84367C4.91608 9.38197 3.26318 12.2335 3.26318 15.2725V24.6899C3.26318 27.7665 4.91608 30.5805 7.5457 32.1188L15.6975 36.8463C18.3647 38.3846 21.6329 38.3846 24.3001 36.8463L32.4519 32.1188C35.1191 30.5805 36.7344 27.7665 36.7344 24.6899V15.2725C36.8095 12.2335 35.1566 9.38197 32.4895 7.84367ZM20.0176 28.3669C15.397 28.3669 11.6404 24.6149 11.6404 20C11.6404 15.3851 15.397 11.6331 20.0176 11.6331C24.6382 11.6331 28.4323 15.3851 28.4323 20C28.4323 24.6149 24.6758 28.3669 20.0176 28.3669Z",fill:"url(#paint0_linear_7693_9181)"}),(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"paint0_linear_7693_9181",x1:"20",y1:"2",x2:"20",y2:"38",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"white"}),(0,n.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0.8"})]})})]})};let i=function(e){var r=e.children;return(0,n.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center",children:[(0,n.jsx)(o.l$,{containerStyle:{top:24,left:24,bottom:24,right:24},position:"bottom-right"}),(0,n.jsx)("div",{className:"mb-large",children:(0,n.jsx)(a,{})}),r]})}},8387:(e,r,t)=>{t.r(r),t.d(r,{default:()=>k});var n=t(74848),o=t(74159),a=t(96540),s=t(70400),i=t(49785),l=t(78692),c=t(32389),u=t(6663),d=t(68799),f=t(62078),p=t(92956);function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n;n=t[r],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n})}return e}function y(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}let b=function(e){var r=e.toResetPassword,t=(0,i.mN)(),a=t.register,b=t.handleSubmit,g=t.setError,h=t.formState.errors,x=(0,s.useNavigate)(),j=(0,o.useAdminLogin)(),v=j.mutate,w=j.isLoading,O=(0,c.Bd)().t,S=(0,l.X)().getWidgets;return(0,n.jsxs)("div",{className:"gap-y-large flex flex-col",children:[S("login.before").map(function(e,r){return(0,n.jsx)(d.A,{widget:e,injectionZone:"login.before",entity:void 0},r)}),(0,n.jsx)("form",{onSubmit:b(function(e){v(e,{onSuccess:function(){x("/a/orders")},onError:function(){g("password",{type:"manual",message:O("login-card-no-match","These credentials do not match our records.")},{shouldFocus:!0})}})}),children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("h1",{className:"inter-xlarge-semibold text-grey-90 mb-large text-[20px]",children:O("login-card-log-in-to-medusa","Log in to Medusa")}),(0,n.jsxs)("div",{children:[(0,n.jsx)(p.A,y(m({placeholder:O("login-card-email","Email")},a("email",{required:!0})),{autoComplete:"email",className:"mb-small"})),(0,n.jsx)(p.A,y(m({placeholder:O("login-card-password","Password"),type:"password"},a("password",{required:!0})),{autoComplete:"current-password",className:"mb-xsmall"})),(0,n.jsx)(u.A,{errors:h,name:"password"})]}),(0,n.jsx)(f.A,{className:"rounded-rounded inter-base-regular mt-4 w-[280px]",variant:"secondary",size:"medium",type:"submit",loading:w,children:"Continue"}),(0,n.jsx)("span",{className:"inter-small-regular text-grey-50 mt-8 cursor-pointer",onClick:r,children:O("login-card-forgot-your-password","Forgot your password?")})]})}),S("login.after").map(function(e,r){return(0,n.jsx)(d.A,{widget:e,injectionZone:"login.after",entity:void 0},r)})]})};var g=t(88755),h=t(47492),x=t(15696),j=t(57578);function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}var w=RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");let O=function(e){var r,t=e.goBack,s=(0,c.Bd)().t,l=function(e){if(Array.isArray(e))return e}(r=(0,a.useState)(!1))||function(e,r){var t,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],s=!0,i=!1;try{for(o=o.call(e);!(s=(t=o.next()).done)&&(a.push(t.value),2!==a.length);s=!0);}catch(e){i=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(i)throw n}}return a}}(r,2)||function(e,r){if(e){if("string"==typeof e)return v(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,2)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=l[0],m=l[1],y=(0,i.mN)(),b=y.register,O=y.handleSubmit,S=y.formState.errors,A=(0,o.useAdminSendResetPasswordToken)(),P=A.mutate,k=A.isLoading,C=(0,g.A)(),N=O(function(e){P({email:e.email},{onSuccess:function(){m(!0)},onError:function(e){C(s("reset-token-card-error","Error"),(0,h.u)(e),"error")}})});return(0,n.jsx)("form",{onSubmit:N,children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("h1",{className:"inter-xlarge-semibold text-grey-90 mb-xsmall text-[20px]",children:s("reset-token-card-reset-your-password","Reset your password")}),(0,n.jsx)("span",{className:"inter-base-regular text-grey-50 mb-large text-center",children:(0,n.jsxs)(c.x6,{t:s,i18nKey:"reset-token-card-password-reset-description",children:["Enter your email address below, and we'll",(0,n.jsx)("br",{}),"send you instructions on how to reset",(0,n.jsx)("br",{}),"your password."]})}),d?(0,n.jsxs)("div",{className:"text-grey-60 rounded-rounded bg-grey-5 border-grey-20 p-base gap-x-small flex w-[280px] items-center border",children:[(0,n.jsx)("div",{children:(0,n.jsx)(j.A,{className:"text-blue-50",size:20})}),(0,n.jsx)("div",{className:"gap-y-2xsmall flex flex-col",children:(0,n.jsx)("span",{className:"inter-base-regular",children:s("reset-token-card-successfully-sent-you-an-email","Successfully sent you an email")})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"w-[280px]",children:[(0,n.jsx)(p.A,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n;n=t[r],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n})}return e}({placeholder:s("reset-token-card-email","Email")},b("email",{required:x.A.required("Email"),pattern:{value:w,message:s("reset-token-card-this-is-not-a-valid-email","This is not a valid email")}}))),(0,n.jsx)(u.A,{errors:S,name:"email"})]}),(0,n.jsx)(f.A,{variant:"secondary",size:"medium",className:"mt-large w-[280px]",type:"submit",loading:k,children:s("reset-token-card-send-reset-instructions","Send reset instructions")})]}),(0,n.jsx)("span",{className:"inter-small-regular text-grey-50 mt-8 cursor-pointer",onClick:t,children:s("reset-token-card-go-back-to-sign-in","Go back to sign in")})]})})};var S=t(87882),A=t(36536);function P(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}let k=function(){var e,r=function(e){if(Array.isArray(e))return e}(e=(0,a.useState)(!1))||function(e,r){var t,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],s=!0,i=!1;try{for(o=o.call(e);!(s=(t=o.next()).done)&&(a.push(t.value),2!==a.length);s=!0);}catch(e){i=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(i)throw n}}return a}}(e,2)||function(e,r){if(e){if("string"==typeof e)return P(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t=r[0],i=r[1],l=(0,o.useAdminGetSession)().user,c=(0,s.useNavigate)();return(0,a.useEffect)(function(){l&&c("/")},[l,c]),(0,a.useEffect)(function(){window.location.search.includes("reset-password")&&i(!0)},[]),(0,n.jsxs)(A.A,{children:[(0,n.jsx)(S.A,{title:"Login"}),t?(0,n.jsx)(O,{goBack:function(){i(!1),c("/login",{replace:!0})}}):(0,n.jsx)(b,{toResetPassword:function(){i(!0)}})]})}}}]);