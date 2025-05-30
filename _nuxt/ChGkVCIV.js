import{s as f}from"./BMdDolK_.js";import{ai as y,o as s,c as l,aa as p,aK as b,ag as c}from"./4dJ23Lma.js";var m=({dt:e})=>`
.p-inplace-display {
    display: inline-block;
    cursor: pointer;
    border: 1px solid transparent;
    padding: ${e("inplace.padding")};
    border-radius: ${e("inplace.border.radius")};
    transition: background ${e("inplace.transition.duration")}, color ${e("inplace.transition.duration")}, outline-color ${e("inplace.transition.duration")}, box-shadow ${e("inplace.transition.duration")};
    outline-color: transparent;
}

.p-inplace-display:not(.p-disabled):hover {
    background: ${e("inplace.display.hover.background")};
    color: ${e("inplace.display.hover.color")};
}

.p-inplace-display:focus-visible {
    box-shadow: ${e("inplace.focus.ring.shadow")};
    outline: ${e("inplace.focus.ring.width")} ${e("inplace.focus.ring.style")} ${e("inplace.focus.ring.color")};
    outline-offset: ${e("inplace.focus.ring.offset")};
}

.p-inplace-content {
    display: block;
}
`,v={root:"p-inplace p-component",display:function(t){var n=t.props;return["p-inplace-display",{"p-disabled":n.disabled}]},content:"p-inplace-content"},g=y.extend({name:"inplace",style:m,classes:v}),h={name:"BaseInplace",extends:f,props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},displayProps:{type:null,default:null}},style:g,provide:function(){return{$pcInplace:this,$parentInstance:this}}},$={name:"Inplace",extends:h,inheritAttrs:!1,emits:["open","close","update:active"],data:function(){return{d_active:this.active}},watch:{active:function(t){this.d_active=t}},methods:{open:function(t){this.disabled||(this.d_active=!0,this.$emit("open",t),this.$emit("update:active",!0))},close:function(t){var n=this;this.d_active=!1,this.$emit("close",t),this.$emit("update:active",!1),setTimeout(function(){n.$refs.display.focus()},0)}}};function o(e){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(r){O(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function O(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){var t=P(e,"string");return o(t)=="symbol"?t:t+""}function P(e,t){if(o(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(o(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var j=["tabindex"];function S(e,t,n,r,a,i){return s(),l("div",p({class:e.cx("root"),"aria-live":"polite"},e.ptmi("root")),[a.d_active?(s(),l("div",p({key:1,class:e.cx("content")},e.ptm("content")),[c(e.$slots,"content",{closeCallback:i.close})],16)):(s(),l("div",p({key:0,ref:"display",class:e.cx("display"),tabindex:e.$attrs.tabindex||"0",role:"button",onClick:t[0]||(t[0]=function(){return i.open&&i.open.apply(i,arguments)}),onKeydown:t[1]||(t[1]=b(function(){return i.open&&i.open.apply(i,arguments)},["enter"]))},d(d({},e.displayProps),e.ptm("display"))),[c(e.$slots,"display")],16,j))],16)}$.render=S;export{$ as default};
