import{o as u,c as y,a as o,aa as a,ai as I,an as T,ao as O,ap as P,aq as $,ar as E,G as h,b as p,ag as l,x as v,aw as g,q as c,t as b,w,ax as z}from"./4dJ23Lma.js";import{Z as f}from"./DGEOgZpe.js";import{C as R}from"./8ewTozQ9.js";import{s as j}from"./ChV3-6Xg.js";import{s as V}from"./DV2TQr5-.js";import B from"./CTv4dhnw.js";import{O as M}from"./WUMlW1WH.js";import{s as x}from"./B0rOA-rt.js";import{s as q}from"./CoYDYSEH.js";import"./BMdDolK_.js";import"./Be1fzYNM.js";import"./DZJoBGIj.js";var C={name:"EyeSlashIcon",extends:V};function A(e,n,t,r,i,s){return u(),y("svg",a({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"},null,-1)]),16)}C.render=A;var H=({dt:e})=>`
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: ${e("password.meter.height")};
    background: ${e("password.meter.background")};
    border-radius: ${e("password.meter.border.radius")};
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: ${e("password.meter.border.radius")};
}

.p-password-meter-weak {
    background: ${e("password.strength.weak.background")};
}

.p-password-meter-medium {
    background: ${e("password.strength.medium.background")};
}

.p-password-meter-strong {
    background: ${e("password.strength.strong.background")};
}

.p-password-fluid {
    display: flex;
}

.p-password-fluid .p-password-input {
    width: 100%;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-overlay {
    padding: ${e("password.overlay.padding")};
    background: ${e("password.overlay.background")};
    color: ${e("password.overlay.color")};
    border: 1px solid ${e("password.overlay.border.color")};
    box-shadow: ${e("password.overlay.shadow")};
    border-radius: ${e("password.overlay.border.radius")};
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: ${e("password.content.gap")};
}

.p-password-toggle-mask-icon {
    inset-inline-end: ${e("form.field.padding.x")};
    color: ${e("password.icon.color")};
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(${e("icon.size")} / 2));
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}
`,U={root:function(n){var t=n.props;return{position:t.appendTo==="self"?"relative":void 0}}},Z={root:function(n){var t=n.instance;return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled,"p-inputwrapper-focus":t.focused,"p-password-fluid":t.$fluid}]},pcInputText:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:function(n){var t=n.instance;return"p-password-meter-label ".concat(t.meter?"p-password-meter-"+t.meter.strength:"")},meterText:"p-password-meter-text"},D=I.extend({name:"password",style:H,classes:Z,inlineStyles:U}),K={name:"BasePassword",extends:q,props:{promptLabel:{type:String,default:null},mediumRegex:{type:[String,RegExp],default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:[String,RegExp],default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},maskIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},unmaskIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayId:{type:String,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},autofocus:{type:Boolean,default:null}},style:D,provide:function(){return{$pcPassword:this,$parentInstance:this}}},F={name:"Password",extends:K,inheritAttrs:!1,emits:["change","focus","blur","invalid"],inject:{$pcFluid:{default:null}},data:function(){return{overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted:function(){this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(f.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter:function(n){f.set("overlay",n,this.$primevue.config.zIndex.overlay),T(n,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave:function(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave:function(n){f.clear(n)},alignOverlay:function(){this.appendTo==="self"?O(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=P(this.$refs.input.$el)+"px",$(this.overlay,this.$refs.input.$el))},testStrength:function(n){var t=0;return this.strongCheckRegExp.test(n)?t=3:this.mediumCheckRegExp.test(n)?t=2:n.length&&(t=1),t},onInput:function(n){this.writeValue(n.target.value,n),this.$emit("change",n)},onFocus:function(n){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.d_value),this.overlayVisible=!0),this.$emit("focus",n)},onBlur:function(n){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",n)},onKeyUp:function(n){if(this.feedback){var t=n.target.value,r=this.checkPasswordStrength(t),i=r.meter,s=r.label;if(this.meter=i,this.infoText=s,n.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter:function(){if(!this.d_value){this.meter=null,this.infoText=this.promptText;return}var n=this.checkPasswordStrength(this.d_value),t=n.meter,r=n.label;this.meter=t,this.infoText=r,this.overlayVisible||(this.overlayVisible=!0)},checkPasswordStrength:function(n){var t=null,r=null;switch(this.testStrength(n)){case 1:t=this.weakText,r={strength:"weak",width:"33.33%"};break;case 2:t=this.mediumText,r={strength:"medium",width:"66.66%"};break;case 3:t=this.strongText,r={strength:"strong",width:"100%"};break;default:t=this.promptText,r=null;break}return{label:t,meter:r}},onInvalid:function(n){this.$emit("invalid",n)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new R(this.$refs.input.$el,function(){n.overlayVisible&&(n.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!E()&&(n.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef:function(n){this.overlay=n},onMaskToggle:function(){this.unmasked=!this.unmasked},onOverlayClick:function(n){M.emit("overlay-click",{originalEvent:n,target:this.$el})}},computed:{inputType:function(){return this.unmasked?"text":"password"},weakText:function(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText:function(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText:function(){return this.strongLabel||this.$primevue.config.locale.strong},promptText:function(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},overlayUniqueId:function(){return this.$id+"_overlay"}},components:{InputText:B,Portal:x,EyeSlashIcon:C,EyeIcon:j}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(e)}function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?k(Object(t),!0).forEach(function(r){N(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function N(e,n,t){return(n=W(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W(e){var n=G(e,"string");return d(n)=="symbol"?n:n+""}function G(e,n){if(d(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(d(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var J=["id"];function Q(e,n,t,r,i,s){var S=h("InputText"),L=h("Portal");return u(),y("div",a({class:e.cx("root"),style:e.sx("root")},e.ptmi("root")),[p(S,a({ref:"input",id:e.inputId,type:s.inputType,class:[e.cx("pcInputText"),e.inputClass],style:e.inputStyle,defaultValue:e.d_value,name:e.$formName,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-controls":e.overlayProps&&e.overlayProps.id||e.overlayId||e.panelProps&&e.panelProps.id||e.panelId||s.overlayUniqueId,"aria-expanded":i.overlayVisible,"aria-haspopup":!0,placeholder:e.placeholder,required:e.required,fluid:e.fluid,disabled:e.disabled,variant:e.variant,invalid:e.invalid,size:e.size,autofocus:e.autofocus,onInput:s.onInput,onFocus:s.onFocus,onBlur:s.onBlur,onKeyup:s.onKeyUp,onInvalid:s.onInvalid},e.inputProps,{pt:e.ptm("pcInputText"),unstyled:e.unstyled}),null,16,["id","type","class","style","defaultValue","name","aria-labelledby","aria-label","aria-controls","aria-expanded","placeholder","required","fluid","disabled","variant","invalid","size","autofocus","onInput","onFocus","onBlur","onKeyup","onInvalid","pt","unstyled"]),e.toggleMask&&i.unmasked?l(e.$slots,e.$slots.maskicon?"maskicon":"hideicon",{key:0,toggleCallback:s.onMaskToggle},function(){return[(u(),v(g(e.maskIcon?"i":"EyeSlashIcon"),a({class:[e.cx("maskIcon"),e.maskIcon],onClick:s.onMaskToggle},e.ptm("maskIcon")),null,16,["class","onClick"]))]}):c("",!0),e.toggleMask&&!i.unmasked?l(e.$slots,e.$slots.unmaskicon?"unmaskicon":"showicon",{key:1,toggleCallback:s.onMaskToggle},function(){return[(u(),v(g(e.unmaskIcon?"i":"EyeIcon"),a({class:[e.cx("unmaskIcon"),e.unmaskIcon],onClick:s.onMaskToggle},e.ptm("unmaskIcon")),null,16,["class","onClick"]))]}):c("",!0),o("span",a({class:"p-hidden-accessible","aria-live":"polite"},e.ptm("hiddenAccesible"),{"data-p-hidden-accessible":!0}),b(i.infoText),17),p(L,{appendTo:e.appendTo},{default:w(function(){return[p(z,a({name:"p-connected-overlay",onEnter:s.onOverlayEnter,onLeave:s.onOverlayLeave,onAfterLeave:s.onOverlayAfterLeave},e.ptm("transition")),{default:w(function(){return[i.overlayVisible?(u(),y("div",a({key:0,ref:s.overlayRef,id:e.overlayId||e.panelId||s.overlayUniqueId,class:[e.cx("overlay"),e.panelClass,e.overlayClass],style:[e.overlayStyle,e.panelStyle],onClick:n[0]||(n[0]=function(){return s.onOverlayClick&&s.onOverlayClick.apply(s,arguments)})},m(m(m({},e.panelProps),e.overlayProps),e.ptm("overlay"))),[l(e.$slots,"header"),l(e.$slots,"content",{},function(){return[o("div",a({class:e.cx("content")},e.ptm("content")),[o("div",a({class:e.cx("meter")},e.ptm("meter")),[o("div",a({class:e.cx("meterLabel"),style:{width:i.meter?i.meter.width:""}},e.ptm("meterLabel")),null,16)],16),o("div",a({class:e.cx("meterText")},e.ptm("meterText")),b(i.infoText),17)],16)]}),l(e.$slots,"footer")],16,J)):c("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}F.render=Q;export{F as default};
