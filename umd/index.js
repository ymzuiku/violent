!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).$verk=t()}(this,function(){"use strict";for(var e=["$target","$el","$value","$event","$props","$renderState"],t="",n=0;n<8;n++)e.push("$"+t+"v"),e.push("$"+t+"i"),t+="_";function r(e,t,n,r){e.hasAttribute(n)&&t(e),e.querySelectorAll(r).forEach(t)}e.forEach(function(e){void 0===window[e]&&(window[e]="")});var o=0;function A(e){return void 0===e&&(e="u"),999<(o+=1)&&(o=0),e+Date.now().toString().slice(5,13)+(o+"")}function i(n,r){var o,i,u,c=new Set,a=new Set;return u=r?(i=setTimeout,clearTimeout):(i=requestAnimationFrame,cancelAnimationFrame),function(e,t){c.has(e)||c.add(e),t&&!a.has(t)&&a.add(t),o&&u(o),o=i(function(){o=null,c.forEach(n),c.clear(),a.forEach(function(e){e()}),a.clear()},r)}}window.$uuid=A;var u=[];function y(t,n,r){console.error(t,n),u.forEach(function(e){e(t,n,r||"")})}var c=/^v-on/;function a(e){function t(o){o.__bindedEvents||(o.getAttribute("verk-on").split(" ").forEach(function(e){var n=e.replace("-","");if(c.test(e)){var r=new Function("$el","$event","return "+o.getAttribute(e));o[n]=function(e){var t;o.getAttribute("prevent-"+n)&&e.preventDefault(),o.getAttribute("stop-"+n)&&e.stopPropagation();try{t=r(o,e)}catch(e){y(e,o)}"function"==typeof t&&t(e),L(o.getAttribute("query"))}}}),o.__bindedEvents=!0)}e.getAttribute("verk-on")&&t(e),e.querySelectorAll("[verk-on]").forEach(t)}function l(i,u,c,a){return new(c=c||Promise)(function(e,t){function n(e){try{o(a.next(e))}catch(e){t(e)}}function r(e){try{o(a.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new c(function(e){e(t.value)}).then(n,r)}o((a=a.apply(i,u||[])).next())})}function g(n,r){var o,i,u,e,c={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(u=2&t[0]?i.return:t[0]?i.throw||((u=i.return)&&u.call(i),0):i.next)&&!(u=u.call(i,t[1])).done)return u;switch(i=0,u&&(t=[2&t[0],u.value]),t[0]){case 0:case 1:u=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,i=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(u=0<(u=c.trys).length&&u[u.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!u||t[1]>u[0]&&t[1]<u[3])){c.label=t[1];break}if(6===t[0]&&c.label<u[1]){c.label=u[1],u=t;break}if(u&&c.label<u[2]){c.label=u[2],c.ops.push(t);break}u[2]&&c.ops.pop(),c.trys.pop();continue}t=r.call(n,c)}catch(e){t=[6,e],i=0}finally{o=u=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var f=new RegExp('src="./',"g"),s=new RegExp('href="./',"g"),d=new RegExp('fetch="./',"g"),_={},E={},v={};function $(o,i){return l(this,void 0,void 0,function(){var n,r,t;return g(this,function(e){switch(e.label){case 0:return n=[],r=[],o.querySelectorAll(i).forEach(function(e){var t=document.createElement("script");t.setAttribute("src",e.getAttribute("src")),n.push(t),r.push(new Promise(function(e){return t.onload=e})),e.remove()}),0<n.length?((t=document.head).append.apply(t,n),[4,Promise.all(r)]):[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function h(e){e.querySelectorAll("template[component]").forEach(function(o){return l(this,void 0,void 0,function(){var t,n,r;return g(this,function(e){return!(t=o.getAttribute("component"))||_[t]||((n=document.createElement("div")).innerHTML=o.innerHTML,(r=n.querySelector("script:not([src])"))&&(E[t]=new Function("$parent","$id","$props","$ref","$refs",r.innerHTML),r.remove(),o.remove()),_[t]=n.innerHTML),[2]})})})}function q(t){var e=t.getAttribute("if");if(e){var n=void 0;try{n=new Function("return "+e)()}catch(e){y(e,t)}if(!n)return!1}var r=t.getAttribute("route");if(r&&1!==(location.hash||"/").indexOf(r))return!1;return!0}function m(e){e.querySelectorAll("template[init]:not([uuid])").forEach(function(w){return l(this,void 0,void 0,function(){function t(e){return document.body.querySelector("["+h[e]+"]")}function n(e){return document.body.querySelectorAll("["+h[e]+"]")}var r,o,i,u,c,a,l,f,s,d,v,h,m,p,b;return g(this,function(e){switch(e.label){case 0:if(!(r=w.getAttribute("init")))return[2];if(!q(w))return[2];if((o=w.content.querySelector("[loading]:not([use-loading])"))&&(i=A(),o.setAttribute("use-loading",i),(u=o.cloneNode(!0)).setAttribute(i,""),w.insertAdjacentElement("afterend",u)),!(c=_[r]))return[2];if(a=w.getAttribute("props"),l=A(),s=(f=r+"_"+l)+"_props",w.setAttribute("uuid",f),w.innerHTML=w.innerHTML.replace(/\$renderState/g,f),a)try{window[s]=new Function("return "+a)()}catch(e){y(e,w,a)}else window[s]={};return d=document.createElement("div"),v=(v=(v=c.replace(/\$state/g,f)).replace(/\$id/g,"'"+f+"'")).replace(/\$props/g,s),d.innerHTML=v,d.querySelectorAll("*").forEach(function(e,t){e.setAttribute(f,t+1)}),d.querySelectorAll("slot").forEach(function(e){var t=e.getAttribute("name"),n=w.content.querySelector('[slot="'+t+'"]');n&&(Array.from(e.attributes).forEach(function(e){n.getAttribute(e.name)||n.setAttribute(e.name,e.value)}),d.replaceChild(n.cloneNode(!0),e))}),h={},d.querySelectorAll("[ref]").forEach(function(e){var t=e.getAttribute("ref");h[t]=f+"_ref_"+t,e.removeAttribute("ref"),e.setAttribute(h[t],"1")}),S(d),d.querySelector("[defer]")?[4,$(d,"script[src]:not([defer])")]:[3,6];case 1:return e.sent(),[4,$(d,'script[defer=""]')];case 2:return e.sent(),[4,$(d,'script[defer="1"]')];case 3:return e.sent(),[4,$(d,'script[defer="2"]')];case 4:return e.sent(),[4,$(d,'script[defer="3"]')];case 5:return e.sent(),[3,8];case 6:return[4,$(d,"script[src]")];case 7:e.sent(),e.label=8;case 8:if(m=E[r])try{p=m(w.parentElement,f,window[s],t,n)}catch(e){y(e,w,m)}return(b=w.content.querySelector("[use-loading]"))&&document.body.querySelectorAll("["+b.getAttribute("use-loading")+"]").forEach(function(e){e.remove()}),w.insertAdjacentHTML("afterend",d.innerHTML),Promise.resolve(p).then(function(e){window[f]=e,window[s]&&window[s].$willMount&&window[s].$willMount(window[f]),window[f]&&window[f].$willMount&&window[f].$willMount(window[f]),requestAnimationFrame(function(){F(w.parentElement,function(){window[s]&&window[s].$mount&&window[s].$mount(window[f]),window[f]&&window[f].$mount&&window[f].$mount(window[f])})})}),[2]}})})})}function p(e){!function i(u,c){u.querySelectorAll("template[fetch]:not([fetch-loaded])").forEach(function(e){e.setAttribute("fetch-loaded","");var o=e.getAttribute("fetch");o&&!v[o]&&(v[o]=!0,fetch(o,{mode:"cors",cache:e.getAttribute("cache")||"no-cache"}).then(function(e){return e.text()}).then(function(e){if(e){var t=document.createElement("div"),n=o.split("/");n.pop();var r=n.join("/")+"/";e=(e=(e=(e=e.replace(f,'src="'+r)).replace(s,'href="'+r)).replace(d,'fetch="'+r)).replace(/\$dir/,"'"+r+"'"),t.innerHTML=e,h(t),i(t,!0),c||requestAnimationFrame(function(){p(u)})}}).catch(function(e){v[o]=!1}))})}(e),h(e),requestAnimationFrame(function(){m(e)})}var b=/^set-/,w=/^on-/;function S(e){e.querySelectorAll("*").forEach(function(e){if(!e.getAttribute("verk-on")&&!e.getAttribute("verk-attr")){var t="",n="";Array.from(e.attributes).forEach(function(e){w.test(e.name)?n+=e.name+" ":b.test(e.name)&&(t+=e.name+" ")}),t&&e.setAttribute("verk-attr",t.trim()),n&&e.setAttribute("verk-on",n.trim())}})}function L(e){e=e&&"*"!==e?e:"[verk]",document.querySelectorAll(e).forEach(function(e){k(e)})}var k=i(function(e){M(e)}),x=[function(e){e.querySelectorAll("template[uuid]").forEach(function(e){var t=e.getAttribute("uuid");t&&(q(e)||(e.removeAttribute("uuid"),document.body.querySelectorAll("["+t+"]").forEach(function(e){e.remove()}),delete window[t],delete window[t+"_props"]))})},m,function(e){r(e,function(t){var e;t.style.display="none";try{"function"==typeof(e=new Function("$el","return "+t.getAttribute("if"))(t))&&(e=e())}catch(e){y(e,t)}var n=t.getAttribute("uuid");if(e){if(!n){n=A("if"),t.setAttribute("uuid",n);var r=document.createElement("div");r.innerHTML=t.innerHTML;var o=[];r.querySelectorAll("script").forEach(function(e){o.push(e.innerHTML),e.remove()}),r.querySelectorAll("*").forEach(function(e){e.setAttribute(n,"")}),t.insertAdjacentHTML("afterend",r.innerHTML),o.forEach(function(e){try{new Function(e)()}catch(e){y(e,t)}})}}else n&&(document.body.querySelectorAll("["+n+"]").forEach(function(e){e.remove()}),t.removeAttribute("uuid"))},"if","[if]:not([init])")},function(e){function t(r){if(!r.__bindedList){r.__bindedList=r.getAttribute("list"),r.__html=r.innerHTML;try{r.__forData=new Function("$el","return "+r.__bindedList)(r)}catch(e){y(e,r)}}var e=r.__forData;if(e&&r.getAttribute("list-length")!=e.length){var o=r.__html,i="";e.forEach(function(e,t){var n=o.replace(/\$v/g,r.__bindedList+"["+t+"]");n=(n=n.replace(/\$i/g,t)).replace(/\$_/g,"$"),i+=n}),r.innerHTML=i,r.setAttribute("list-length",e.length),a(r)}}var n=[],r=e.querySelectorAll("[list]"),o=r.length;r.forEach(function(e,t){n[o-t-1]=e}),n.forEach(t),e.hasAttribute("list")&&t(e)},function(e){r(e,function(t){var e;try{"function"==typeof(e=new Function("$el","return "+t.getAttribute("show"))(t))&&(e=e())}catch(e){y(e,t)}e?t.style.removeProperty("display"):t.style.display="none"},"show","[show]")},function(e){r(e,function(u){var e,t,c=u.getAttribute("model"),a=u.getAttribute("query");if(function(e){if(!e.__modelName){var t=e.tagName.toLowerCase(),n=e.type;e.__modelName="select"===t?"onchange":"input"===t||"textarea"===t?"oninput":"onclick","select"===t?e.__valueName="value":"checkbox"===n?(e.__valueName="checked",e.__valueIsBool=!0):"radio"===n?(e.__modelName="onclick",e.__valueName="checked",e.__valueIsBool=!0):e.__valueName="value"}}(u),u.__bindedModel||(u[u.__modelName]=function(e){u.getAttribute("prevent-"+u.__modelName)&&e.preventDefault(),u.getAttribute("stop-"+u.__modelName)&&e.stopPropagation();var t,n,r=e.target&&e.target[u.__valueName]||"";if(u.__valueIsBool){var o=u.getAttribute("set-value"),i=u.getAttribute("value");t=o?c+"["+o+"] = !"+c+"["+o+"]; return "+c+"["+o+"];":i?c+"['"+i+"'] = !"+c+"['"+i+"']; return "+c+"['"+i+"'];":c+"="+!!r+"; return "+c+";"}else t=c+"=`"+r+"`; return "+c+";";try{n=new Function("$el",t)(u)}catch(e){y(e,u)}u[u.__valueName]!==n&&(u[u.__valueName]=n),L(a)},u.__bindedModel=!0),u.__valueIsBool){var n=u.getAttribute("set-value"),r=u.getAttribute("value");t=r?"return "+c+"['"+r+"']":n?"return "+c+"["+n+"]":"return "+c}else t="return "+c;try{e=new Function(t)()||""}catch(e){y(e,u)}u[u.__valueName]!==e&&requestAnimationFrame(function(){u[u.__valueName]=e})},"model","[model]")},function(e){r(e,function(t){var e;t.getAttribute("text-save")||t.setAttribute("text-save",t.getAttribute("text")||t.textContent);try{"function"==typeof(e=new Function("$el","return "+t.getAttribute("text-save"))(t))&&(e=e())}catch(e){y(e,t)}t.textContent!==e&&(t.textContent=e)},"text","[text]")},function(e){r(e,function(n){n.getAttribute("verk-attr").split(" ").forEach(function(e){var t;try{"function"==typeof(t=new Function("$el","return "+n.getAttribute(e))(n))&&(t=t())}catch(e){y(e,n)}n.setAttribute(e.replace("set-",""),t)})},"verk-attr","[verk-attr]")},function(e){r(e,function(t){try{var e=new Function("$el",t.getAttribute("watch"))(t);"function"==typeof e&&e()}catch(e){y(e,t)}},"watch","[watch]")}];function M(t){x.forEach(function(e){e(t)})}var T=[p,a],F=i(function(e){function t(t){M(t),T.forEach(function(e){e(t)})}e?t(e):document.querySelectorAll("[verk]").forEach(t)}),N={update:F,middlewareByUpdate:x,middlewareByInit:T,Reducer:function(n,r){var o,i,u;return u=r?(i=setTimeout,clearTimeout):(i=requestAnimationFrame,cancelAnimationFrame),function(e,t){o&&u(o),o=i(function(){o=null,n(e),t&&t()},r)}},ReducerList:i,removeComponent:function(e){delete _[e],delete E[e]},uuid:A};return window.addEventListener("load",function(){document.querySelectorAll("[verk]").forEach(function(e){S(e),F(e),setTimeout(function(){"hidden"===e.style.visibility&&(e.style.visibility="visible")},200)})}),N});
