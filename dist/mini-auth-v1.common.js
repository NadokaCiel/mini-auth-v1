!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("miniapp-auth"),require("mksign")):"function"==typeof define&&define.amd?define(["exports","miniapp-auth","mksign"],n):(t=t||self,function(){var e=t["mini-auth-v1"],r=t["mini-auth-v1"]={};n(r,t.miniappAuth,t.mksign),r.noConflict=function(){return t["mini-auth-v1"]=e,r}}())}(this,function(t,n,e){"use strict";var r=Math.ceil,o=Math.floor,i=function(t){return isNaN(t=+t)?0:(t>0?o:r)(t)},c=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t};function u(t,n){return t(n={exports:{}},n.exports),n.exports}var a=u(function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),s=u(function(t){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)}),f=(s.version,function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}),l=function(t,n,e){if(f(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}},h=function(t){return"object"==typeof t?null!==t:"function"==typeof t},p=function(t){if(!h(t))throw TypeError(t+" is not an object!");return t},v=function(t){try{return!!t()}catch(t){return!0}},d=!v(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),y=a.document,m=h(y)&&h(y.createElement),_=function(t){return m?y.createElement(t):{}},g=!d&&!v(function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a}),w=Object.defineProperty,S={f:d?Object.defineProperty:function(t,n,e){if(p(t),n=function(t,n){if(!h(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!h(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!h(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!h(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}(n,!0),p(e),g)try{return w(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},P=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},j=d?function(t,n,e){return S.f(t,n,P(1,e))}:function(t,n,e){return t[n]=e,t},b={}.hasOwnProperty,O=function(t,n){return b.call(t,n)},T=function(t,n,e){var r,o,i,c=t&T.F,u=t&T.G,f=t&T.S,h=t&T.P,p=t&T.B,v=t&T.W,d=u?s:s[n]||(s[n]={}),y=d.prototype,m=u?a:f?a[n]:(a[n]||{}).prototype;for(r in u&&(e=n),e)(o=!c&&m&&void 0!==m[r])&&O(d,r)||(i=o?m[r]:e[r],d[r]=u&&"function"!=typeof m[r]?e[r]:p&&o?l(i,a):v&&m[r]==i?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(i):h&&"function"==typeof i?l(Function.call,i):i,h&&((d.virtual||(d.virtual={}))[r]=i,t&T.R&&y&&!y[r]&&j(y,r,i)))};T.F=1,T.G=2,T.S=4,T.P=8,T.B=16,T.W=32,T.U=64,T.R=128;var k,x=T,L=j,M={},E={}.toString,A=function(t){return E.call(t).slice(8,-1)},C=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==A(t)?t.split(""):Object(t)},R=function(t){return C(c(t))},F=Math.min,D=function(t){return t>0?F(i(t),9007199254740991):0},I=Math.max,G=Math.min,N=u(function(t){var n=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:s.version,mode:"pure",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),V=0,q=Math.random(),B=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++V+q).toString(36))},H=N("keys"),W=function(t){return H[t]||(H[t]=B(t))},U=(k=!1,function(t,n,e){var r,o=R(t),c=D(o.length),u=function(t,n){return(t=i(t))<0?I(t+n,0):G(t,n)}(e,c);if(k&&n!=n){for(;c>u;)if((r=o[u++])!=r)return!0}else for(;c>u;u++)if((k||u in o)&&o[u]===n)return k||u||0;return!k&&-1}),K=W("IE_PROTO"),z="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),J=Object.keys||function(t){return function(t,n){var e,r=R(t),o=0,i=[];for(e in r)e!=K&&O(r,e)&&i.push(e);for(;n.length>o;)O(r,e=n[o++])&&(~U(i,e)||i.push(e));return i}(t,z)},Q=d?Object.defineProperties:function(t,n){p(t);for(var e,r=J(n),o=r.length,i=0;o>i;)S.f(t,e=r[i++],n[e]);return t},X=a.document,Y=X&&X.documentElement,Z=W("IE_PROTO"),$=function(){},tt=function(){var t,n=_("iframe"),e=z.length;for(n.style.display="none",Y.appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),tt=t.F;e--;)delete tt.prototype[z[e]];return tt()},nt=Object.create||function(t,n){var e;return null!==t?($.prototype=p(t),e=new $,$.prototype=null,e[Z]=t):e=tt(),void 0===n?e:Q(e,n)},et=u(function(t){var n=N("wks"),e=a.Symbol,r="function"==typeof e;(t.exports=function(t){return n[t]||(n[t]=r&&e[t]||(r?e:B)("Symbol."+t))}).store=n}),rt=S.f,ot=et("toStringTag"),it=function(t,n,e){t&&!O(t=e?t:t.prototype,ot)&&rt(t,ot,{configurable:!0,value:n})},ct={};j(ct,et("iterator"),function(){return this});var ut,at=function(t,n,e){t.prototype=nt(ct,{next:P(1,e)}),it(t,n+" Iterator")},st=W("IE_PROTO"),ft=Object.prototype,lt=Object.getPrototypeOf||function(t){return t=Object(c(t)),O(t,st)?t[st]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?ft:null},ht=et("iterator"),pt=!([].keys&&"next"in[].keys()),vt=function(){return this},dt=function(t,n,e,r,o,i,c){at(e,n,r);var u,a,s,f=function(t){if(!pt&&t in v)return v[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},l=n+" Iterator",h="values"==o,p=!1,v=t.prototype,d=v[ht]||v["@@iterator"]||o&&v[o],y=d||f(o),m=o?h?f("entries"):y:void 0,_="Array"==n&&v.entries||d;if(_&&(s=lt(_.call(new t)))!==Object.prototype&&s.next&&it(s,l,!0),h&&d&&"values"!==d.name&&(p=!0,y=function(){return d.call(this)}),c&&(pt||p||!v[ht])&&j(v,ht,y),M[n]=y,M[l]=vt,o)if(u={values:h?y:f("values"),keys:i?y:f("keys"),entries:m},c)for(a in u)a in v||L(v,a,u[a]);else x(x.P+x.F*(pt||p),n,u);return u},yt=(ut=!0,function(t,n){var e,r,o=String(c(t)),u=i(n),a=o.length;return u<0||u>=a?ut?"":void 0:(e=o.charCodeAt(u))<55296||e>56319||u+1===a||(r=o.charCodeAt(u+1))<56320||r>57343?ut?o.charAt(u):e:ut?o.slice(u,u+2):r-56320+(e-55296<<10)+65536});dt(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=yt(n,e),this._i+=t.length,{value:t,done:!1})});var mt=function(t,n){return{value:n,done:!!t}};dt(Array,"Array",function(t,n){this._t=R(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,mt(1)):mt(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values");M.Arguments=M.Array;for(var _t=et("toStringTag"),gt="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),wt=0;wt<gt.length;wt++){var St=gt[wt],Pt=a[St],jt=Pt&&Pt.prototype;jt&&!jt[_t]&&j(jt,_t,St),M[St]=M.Array}var bt,Ot,Tt,kt=et("toStringTag"),xt="Arguments"==A(function(){return arguments}()),Lt=function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),kt))?e:xt?A(n):"Object"==(r=A(n))&&"function"==typeof n.callee?"Arguments":r},Mt=function(t,n,e,r){try{return r?n(p(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&p(o.call(t)),n}},Et=et("iterator"),At=Array.prototype,Ct=et("iterator"),Rt=s.getIteratorMethod=function(t){if(null!=t)return t[Ct]||t["@@iterator"]||M[Lt(t)]},Ft=u(function(t){var n={},e={},r=t.exports=function(t,r,o,i,c){var u,a,s,f,h,v=c?function(){return t}:Rt(t),d=l(o,i,r?2:1),y=0;if("function"!=typeof v)throw TypeError(t+" is not iterable!");if(void 0===(h=v)||M.Array!==h&&At[Et]!==h){for(s=v.call(t);!(a=s.next()).done;)if((f=Mt(s,d,a.value,r))===n||f===e)return f}else for(u=D(t.length);u>y;y++)if((f=r?d(p(a=t[y])[0],a[1]):d(t[y]))===n||f===e)return f};r.BREAK=n,r.RETURN=e}),Dt=et("species"),It=function(t,n){var e,r=p(t).constructor;return void 0===r||null==(e=p(r)[Dt])?n:f(e)},Gt=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)},Nt=a.process,Vt=a.setImmediate,qt=a.clearImmediate,Bt=a.MessageChannel,Ht=a.Dispatch,Wt=0,Ut={},Kt=function(){var t=+this;if(Ut.hasOwnProperty(t)){var n=Ut[t];delete Ut[t],n()}},zt=function(t){Kt.call(t.data)};Vt&&qt||(Vt=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return Ut[++Wt]=function(){Gt("function"==typeof t?t:Function(t),n)},bt(Wt),Wt},qt=function(t){delete Ut[t]},"process"==A(Nt)?bt=function(t){Nt.nextTick(l(Kt,t,1))}:Ht&&Ht.now?bt=function(t){Ht.now(l(Kt,t,1))}:Bt?(Tt=(Ot=new Bt).port2,Ot.port1.onmessage=zt,bt=l(Tt.postMessage,Tt,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(bt=function(t){a.postMessage(t+"","*")},a.addEventListener("message",zt,!1)):bt="onreadystatechange"in _("script")?function(t){Y.appendChild(_("script")).onreadystatechange=function(){Y.removeChild(this),Kt.call(t)}}:function(t){setTimeout(l(Kt,t,1),0)});var Jt={set:Vt,clear:qt},Qt=Jt.set,Xt=a.MutationObserver||a.WebKitMutationObserver,Yt=a.process,Zt=a.Promise,$t="process"==A(Yt);function tn(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=f(n),this.reject=f(e)}var nn={f:function(t){return new tn(t)}},en=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}},rn=a.navigator,on=rn&&rn.userAgent||"",cn=function(t,n){if(p(t),h(n)&&n.constructor===t)return n;var e=nn.f(t);return(0,e.resolve)(n),e.promise},un=et("species"),an=et("iterator"),sn=!1;try{var fn=[7][an]();fn.return=function(){sn=!0},Array.from(fn,function(){throw 2})}catch(t){}var ln,hn,pn,vn,dn,yn,mn=Jt.set,_n=function(){var t,n,e,r=function(){var r,o;for($t&&(r=Yt.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if($t)e=function(){Yt.nextTick(r)};else if(!Xt||a.navigator&&a.navigator.standalone)if(Zt&&Zt.resolve){var o=Zt.resolve(void 0);e=function(){o.then(r)}}else e=function(){Qt.call(a,r)};else{var i=!0,c=document.createTextNode("");new Xt(r).observe(c,{characterData:!0}),e=function(){c.data=i=!i}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}(),gn=a.TypeError,wn=a.process,Sn=wn&&wn.versions,Pn=Sn&&Sn.v8||"",jn=a.Promise,bn="process"==Lt(wn),On=function(){},Tn=hn=nn.f,kn=!!function(){try{var t=jn.resolve(1),n=(t.constructor={})[et("species")]=function(t){t(On,On)};return(bn||"function"==typeof PromiseRejectionEvent)&&t.then(On)instanceof n&&0!==Pn.indexOf("6.6")&&-1===on.indexOf("Chrome/66")}catch(t){}}(),xn=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},Ln=function(t,n){if(!t._n){t._n=!0;var e=t._c;_n(function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c,u=o?n.ok:n.fail,a=n.resolve,s=n.reject,f=n.domain;try{u?(o||(2==t._h&&An(t),t._h=1),!0===u?e=r:(f&&f.enter(),e=u(r),f&&(f.exit(),c=!0)),e===n.promise?s(gn("Promise-chain cycle")):(i=xn(e))?i.call(e,a,s):a(e)):s(r)}catch(t){f&&!c&&f.exit(),s(t)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&Mn(t)})}},Mn=function(t){mn.call(a,function(){var n,e,r,o=t._v,i=En(t);if(i&&(n=en(function(){bn?wn.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=bn||En(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},En=function(t){return 1!==t._h&&0===(t._a||t._c).length},An=function(t){mn.call(a,function(){var n;bn?wn.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},Cn=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),Ln(n,!0))},Rn=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw gn("Promise can't be resolved itself");(n=xn(t))?_n(function(){var r={_w:e,_d:!1};try{n.call(t,l(Rn,r,1),l(Cn,r,1))}catch(t){Cn.call(r,t)}}):(e._v=t,e._s=1,Ln(e,!1))}catch(t){Cn.call({_w:e,_d:!1},t)}}};kn||(jn=function(t){!function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!")}(this,jn,"Promise","_h"),f(t),ln.call(this);try{t(l(Rn,this,1),l(Cn,this,1))}catch(t){Cn.call(this,t)}},(ln=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=function(t,n,e){for(var r in n)e&&t[r]?t[r]=n[r]:j(t,r,n[r]);return t}(jn.prototype,{then:function(t,n){var e=Tn(It(this,jn));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=bn?wn.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&Ln(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),pn=function(){var t=new ln;this.promise=t,this.resolve=l(Rn,t,1),this.reject=l(Cn,t,1)},nn.f=Tn=function(t){return t===jn||t===vn?new pn(t):hn(t)}),x(x.G+x.W+x.F*!kn,{Promise:jn}),it(jn,"Promise"),yn="function"==typeof s[dn="Promise"]?s[dn]:a[dn],d&&yn&&!yn[un]&&S.f(yn,un,{configurable:!0,get:function(){return this}}),vn=s.Promise,x(x.S+x.F*!kn,"Promise",{reject:function(t){var n=Tn(this);return(0,n.reject)(t),n.promise}}),x(x.S+!0*x.F,"Promise",{resolve:function(t){return cn(this===vn?jn:this,t)}}),x(x.S+x.F*!(kn&&function(t,n){if(!n&&!sn)return!1;var e=!1;try{var r=[7],o=r[an]();o.next=function(){return{done:e=!0}},r[an]=function(){return o},t(r)}catch(t){}return e}(function(t){jn.all(t).catch(On)})),"Promise",{all:function(t){var n=this,e=Tn(n),r=e.resolve,o=e.reject,i=en(function(){var e=[],i=0,c=1;Ft(t,!1,function(t){var u=i++,a=!1;e.push(void 0),c++,n.resolve(t).then(function(t){a||(a=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=Tn(n),r=e.reject,o=en(function(){Ft(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}}),x(x.P+x.R,"Promise",{finally:function(t){var n=It(this,s.Promise||a.Promise),e="function"==typeof t;return this.then(e?function(e){return cn(n,t()).then(function(){return e})}:t,e?function(e){return cn(n,t()).then(function(){throw e})}:t)}}),x(x.S,"Promise",{try:function(t){var n=nn.f(this),e=en(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}});var Fn=s.Promise,Dn=null;t.creatMiniAuth=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{env:"weapp"},r=t.appid,o=t.env,i=t.url,c=t.appKey,u=t.appSecret;return Dn||((Dn=n.miniAuth.create({appid:r,env:o,tokenReqConfig:{url:i,method:"POST"}})).use("token",function(t,n){var r=t.tokenReqData.jsCode;r&&(t.tokenReqData={js_code:r,sign:e.defaultSign({js_code:r,app_key:c},[u]),app_key:c}),n()}),Dn.use("afterToken",function(t,n){var e=t.tokenResData.data,r=e.data,o=void 0===r?{}:r,i=e.retcode,c=e.msg;return 200===i?(t.tokenResData=o,n()):n({retcode:i,msg:c,data:o})}),Dn)},t.getToken=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new Fn(function(n,e){!function r(o){Dn.getToken(t).then(function(t){n(t)}).catch(function(t){5001===t.errCode||5002===t.errCode?o>=3?e(t):r(o+1):e(t)})}(0)})},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=mini-auth-v1.common.js.map
