/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);

//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define('backbone_clear',['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);


      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.

      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

// Backbone.Wreqr (Backbone.Marionette)
// ----------------------------------
// v1.1.0
//
// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/marionettejs/backbone.wreqr
define('backbone.wreqr',['backbone_clear'], function(Backbone){
    Backbone.Wreqr = (function(Backbone, Marionette, _){
        
        var Wreqr = {};

        // Handlers
// --------
// A registry of functions to call, given a name

        Wreqr.Handlers = (function(Backbone, _){
            

            // Constructor
            // -----------

            var Handlers = function(options){
                this.options = options;
                this._wreqrHandlers = {};

                if (_.isFunction(this.initialize)){
                    this.initialize(options);
                }
            };

            Handlers.extend = Backbone.Model.extend;

            // Instance Members
            // ----------------

            _.extend(Handlers.prototype, Backbone.Events, {

                // Add multiple handlers using an object literal configuration
                setHandlers: function(handlers){
                    _.each(handlers, function(handler, name){
                        var context = null;

                        if (_.isObject(handler) && !_.isFunction(handler)){
                            context = handler.context;
                            handler = handler.callback;
                        }

                        this.setHandler(name, handler, context);
                    }, this);
                },

                // Add a handler for the given name, with an
                // optional context to run the handler within
                setHandler: function(name, handler, context){
                    var config = {
                        callback: handler,
                        context: context
                    };

                    this._wreqrHandlers[name] = config;

                    this.trigger("handler:add", name, handler, context);
                },

                // Determine whether or not a handler is registered
                hasHandler: function(name){
                    return !! this._wreqrHandlers[name];
                },

                // Get the currently registered handler for
                // the specified name. Throws an exception if
                // no handler is found.
                getHandler: function(name){
                    var config = this._wreqrHandlers[name];

                    if (!config){
                        return;
                    }

                    return function(){
                        var args = Array.prototype.slice.apply(arguments);
                        return config.callback.apply(config.context, args);
                    };
                },

                // Remove a handler for the specified name
                removeHandler: function(name){
                    delete this._wreqrHandlers[name];
                },

                // Remove all handlers from this registry
                removeAllHandlers: function(){
                    this._wreqrHandlers = {};
                }
            });

            return Handlers;
        })(Backbone, _);

        // Wreqr.CommandStorage
// --------------------
//
// Store and retrieve commands for execution.
        Wreqr.CommandStorage = (function(){
            

            // Constructor function
            var CommandStorage = function(options){
                this.options = options;
                this._commands = {};

                if (_.isFunction(this.initialize)){
                    this.initialize(options);
                }
            };

            // Instance methods
            _.extend(CommandStorage.prototype, Backbone.Events, {

                // Get an object literal by command name, that contains
                // the `commandName` and the `instances` of all commands
                // represented as an array of arguments to process
                getCommands: function(commandName){
                    var commands = this._commands[commandName];

                    // we don't have it, so add it
                    if (!commands){

                        // build the configuration
                        commands = {
                            command: commandName,
                            instances: []
                        };

                        // store it
                        this._commands[commandName] = commands;
                    }

                    return commands;
                },

                // Add a command by name, to the storage and store the
                // args for the command
                addCommand: function(commandName, args){
                    var command = this.getCommands(commandName);
                    command.instances.push(args);
                },

                // Clear all commands for the given `commandName`
                clearCommands: function(commandName){
                    var command = this.getCommands(commandName);
                    command.instances = [];
                }
            });

            return CommandStorage;
        })();

        // Wreqr.Commands
// --------------
//
// A simple command pattern implementation. Register a command
// handler and execute it.
        Wreqr.Commands = (function(Wreqr){
            

            return Wreqr.Handlers.extend({
                // default storage type
                storageType: Wreqr.CommandStorage,

                constructor: function(options){
                    this.options = options || {};

                    this._initializeStorage(this.options);
                    this.on("handler:add", this._executeCommands, this);

                    var args = Array.prototype.slice.call(arguments);
                    Wreqr.Handlers.prototype.constructor.apply(this, args);
                },

                // Execute a named command with the supplied args
                execute: function(name, args){
                    name = arguments[0];
                    args = Array.prototype.slice.call(arguments, 1);

                    if (this.hasHandler(name)){
                        this.getHandler(name).apply(this, args);
                    } else {
                        this.storage.addCommand(name, args);
                    }

                },

                // Internal method to handle bulk execution of stored commands
                _executeCommands: function(name, handler, context){
                    var command = this.storage.getCommands(name);

                    // loop through and execute all the stored command instances
                    _.each(command.instances, function(args){
                        handler.apply(context, args);
                    });

                    this.storage.clearCommands(name);
                },

                // Internal method to initialize storage either from the type's
                // `storageType` or the instance `options.storageType`.
                _initializeStorage: function(options){
                    var storage;

                    var StorageType = options.storageType || this.storageType;
                    if (_.isFunction(StorageType)){
                        storage = new StorageType();
                    } else {
                        storage = StorageType;
                    }

                    this.storage = storage;
                }
            });

        })(Wreqr);

        // Wreqr.RequestResponse
// ---------------------
//
// A simple request/response implementation. Register a
// request handler, and return a response from it
        Wreqr.RequestResponse = (function(Wreqr){
            

            return Wreqr.Handlers.extend({
                request: function(){
                    var name = arguments[0];
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (this.hasHandler(name)) {
                        return this.getHandler(name).apply(this, args);
                    }
                }
            });

        })(Wreqr);

        // Event Aggregator
// ----------------
// A pub-sub object that can be used to decouple various parts
// of an application through event-driven architecture.

        Wreqr.EventAggregator = (function(Backbone, _){
            
            var EA = function(){};

            // Copy the `extend` function used by Backbone's classes
            EA.extend = Backbone.Model.extend;

            // Copy the basic Backbone.Events on to the event aggregator
            _.extend(EA.prototype, Backbone.Events);

            return EA;
        })(Backbone, _);

        // Wreqr.Channel
// --------------
//
// An object that wraps the three messaging systems:
// EventAggregator, RequestResponse, Commands
        Wreqr.Channel = (function(Wreqr){
            

            var Channel = function(channelName) {
                this.vent        = new Backbone.Wreqr.EventAggregator();
                this.reqres      = new Backbone.Wreqr.RequestResponse();
                this.commands    = new Backbone.Wreqr.Commands();
                this.channelName = channelName;
            };

            _.extend(Channel.prototype, {

                // Remove all handlers from the messaging systems of this channel
                reset: function() {
                    this.vent.off();
                    this.vent.stopListening();
                    this.reqres.removeAllHandlers();
                    this.commands.removeAllHandlers();
                    return this;
                },

                // Connect a hash of events; one for each messaging system
                connectEvents: function(hash, context) {
                    this._connect('vent', hash, context);
                    return this;
                },

                connectCommands: function(hash, context) {
                    this._connect('commands', hash, context);
                    return this;
                },

                connectRequests: function(hash, context) {
                    this._connect('reqres', hash, context);
                    return this;
                },

                // Attach the handlers to a given message system `type`
                _connect: function(type, hash, context) {
                    if (!hash) {
                        return;
                    }

                    context = context || this;
                    var method = (type === 'vent') ? 'on' : 'setHandler';

                    _.each(hash, function(fn, eventName) {
                        this[type][method](eventName, _.bind(fn, context));
                    }, this);
                }
            });


            return Channel;
        })(Wreqr);

        // Wreqr.Radio
// --------------
//
// An object that lets you communicate with many channels.
        Wreqr.radio = (function(Wreqr){
            

            var Radio = function() {
                this._channels = {};
                this.vent = {};
                this.commands = {};
                this.reqres = {};
                this._proxyMethods();
            };

            _.extend(Radio.prototype, {

                channel: function(channelName) {
                    if (!channelName) {
                        throw new Error('Channel must receive a name');
                    }

                    return this._getChannel( channelName );
                },

                _getChannel: function(channelName) {
                    var channel = this._channels[channelName];

                    if(!channel) {
                        channel = new Wreqr.Channel(channelName);
                        this._channels[channelName] = channel;
                    }

                    return channel;
                },

                _proxyMethods: function() {
                    _.each(['vent', 'commands', 'reqres'], function(system) {
                        _.each( messageSystems[system], function(method) {
                            this[system][method] = proxyMethod(this, system, method);
                        }, this);
                    }, this);
                }
            });


            var messageSystems = {
                vent: [
                    'on',
                    'off',
                    'trigger',
                    'once',
                    'stopListening',
                    'listenTo',
                    'listenToOnce'
                ],

                commands: [
                    'execute',
                    'setHandler',
                    'setHandlers',
                    'removeHandler',
                    'removeAllHandlers'
                ],

                reqres: [
                    'request',
                    'setHandler',
                    'setHandlers',
                    'removeHandler',
                    'removeAllHandlers'
                ]
            };

            var proxyMethod = function(radio, system, method) {
                return function(channelName) {
                    var messageSystem = radio._getChannel(channelName)[system];
                    var args = Array.prototype.slice.call(arguments, 1);

                    messageSystem[method].apply(messageSystem, args);
                };
            };

            return new Radio();

        })(Wreqr);


        return Wreqr;
    })(Backbone, Backbone.Marionette, _);
    return Backbone;
});
define('backbone.babysitter',['backbone_clear'], function(Backbone){
    // Backbone.BabySitter
// -------------------
// v0.1.0
//
// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/marionettejs/backbone.babysitter

// Backbone.ChildViewContainer
// ---------------------------
//
// Provide a container to store, retrieve and
// shut down child views.

    Backbone.ChildViewContainer = (function(Backbone, _){

        // Container Constructor
        // ---------------------

        var Container = function(views){
            this._views = {};
            this._indexByModel = {};
            this._indexByCustom = {};
            this._updateLength();

            _.each(views, this.add, this);
        };

        // Container Methods
        // -----------------

        _.extend(Container.prototype, {

            // Add a view to this container. Stores the view
            // by `cid` and makes it searchable by the model
            // cid (and model itself). Optionally specify
            // a custom key to store an retrieve the view.
            add: function(view, customIndex){
                var viewCid = view.cid;

                // store the view
                this._views[viewCid] = view;

                // index it by model
                if (view.model){
                    this._indexByModel[view.model.cid] = viewCid;
                }

                // index by custom
                if (customIndex){
                    this._indexByCustom[customIndex] = viewCid;
                }

                this._updateLength();
                return this;
            },

            // Find a view by the model that was attached to
            // it. Uses the model's `cid` to find it.
            findByModel: function(model){
                return this.findByModelCid(model.cid);
            },

            // Find a view by the `cid` of the model that was attached to
            // it. Uses the model's `cid` to find the view `cid` and
            // retrieve the view using it.
            findByModelCid: function(modelCid){
                var viewCid = this._indexByModel[modelCid];
                return this.findByCid(viewCid);
            },

            // Find a view by a custom indexer.
            findByCustom: function(index){
                var viewCid = this._indexByCustom[index];
                return this.findByCid(viewCid);
            },

            // Find by index. This is not guaranteed to be a
            // stable index.
            findByIndex: function(index){
                return _.values(this._views)[index];
            },

            // retrieve a view by its `cid` directly
            findByCid: function(cid){
                return this._views[cid];
            },

            // Remove a view
            remove: function(view){
                var viewCid = view.cid;

                // delete model index
                if (view.model){
                    delete this._indexByModel[view.model.cid];
                }

                // delete custom index
                _.any(this._indexByCustom, function(cid, key) {
                    if (cid === viewCid) {
                        delete this._indexByCustom[key];
                        return true;
                    }
                }, this);

                // remove the view from the container
                delete this._views[viewCid];

                // update the length
                this._updateLength();
                return this;
            },

            // Call a method on every view in the container,
            // passing parameters to the call method one at a
            // time, like `function.call`.
            call: function(method){
                this.apply(method, _.tail(arguments));
            },

            // Apply a method on every view in the container,
            // passing parameters to the call method one at a
            // time, like `function.apply`.
            apply: function(method, args){
                _.each(this._views, function(view){
                    if (_.isFunction(view[method])){
                        view[method].apply(view, args || []);
                    }
                });
            },

            // Update the `.length` attribute on this container
            _updateLength: function(){
                this.length = _.size(this._views);
            }
        });

        // Borrowing this code from Backbone.Collection:
        // http://backbonejs.org/docs/backbone.html#section-106
        //
        // Mix in methods from Underscore, for iteration, and other
        // collection related features.
        var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
            'select', 'reject', 'every', 'all', 'some', 'any', 'include',
            'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
            'last', 'without', 'isEmpty', 'pluck'];

        _.each(methods, function(method) {
            Container.prototype[method] = function() {
                var views = _.values(this._views);
                var args = [views].concat(_.toArray(arguments));
                return _[method].apply(_, args);
            };
        });

        // return the public API
        return Container;
    })(Backbone, _);

    return Backbone;
});
(function (root, factory) {
    if (typeof exports === 'object' && root.require) {
        module.exports = factory(require("underscore"), require("backbone"));
    } else if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define('backbone.queryparam',["underscore","backbone"], function(_, Backbone) {
            // Use global variables if the locals are undefined.
            return factory(_ || root._, Backbone || root.Backbone);
        });
    } else {
        // RequireJS isn't being used. Assume underscore and backbone are loaded in <script> tags
        factory(_, Backbone);
    }
}(this, function(_, Backbone) {

    var queryStringParam = /^\?(.*)/,
        optionalParam = /\((.*?)\)/g,
        namedParam    = /(\(\?)?:\w+/g,
        splatParam    = /\*\w+/g,
        escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g,
        fragmentStrip = /^([^\?]*)/,
        namesPattern = /[\:\*]([^\:\?\/]+)/g,
        routeStripper = /^[#\/]|\s+$/g,
        trailingSlash = /\/$/;
    Backbone.Router.arrayValueSplit = '|';

    _.extend(Backbone.History.prototype, {
        getFragment: function(fragment, forcePushState) {
            /*jshint eqnull:true */
            if (fragment == null) {
                if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                    fragment = this.location.pathname;
                    var root = this.root.replace(trailingSlash, '');
                    var search = this.location.search;
                    if (!fragment.indexOf(root)) {
                        fragment = fragment.substr(root.length);
                    }
                    if (search && this._hasPushState) {
                        fragment += search;
                    }
                } else {
                    fragment = this.getHash();
                }
            }
            return fragment.replace(routeStripper, '');
        },

        // this will not perform custom query param serialization specific to the router
        // but will return a map of key/value pairs (the value is a string or array)
        getQueryParameters: function(fragment, forcePushState) {
            fragment = this.getFragment(fragment, forcePushState);
            // if no query string exists, this will still be the original fragment
            var queryString = fragment.replace(fragmentStrip, '');
            var match = queryString.match(queryStringParam);
            return this._parseQueryString(match);
        },

        _parseQueryString: function(match){
            var queryString;
            if (match) {
                queryString = match[1];
                var rtn = {};
                iterateQueryString(queryString, function(name, value) {
                    value = parseParams(value);

                    if (!rtn[name]) {
                        rtn[name] = value;
                    } else if (_.isString(rtn[name])) {
                        rtn[name] = [rtn[name], value];
                    } else {
                        rtn[name].push(value);
                    }
                });
                return rtn;
            } else {
                // no values
                return {};
            }
        },

        getQueryParametersString: function(fragment, forcePushState){
            fragment = this.getFragment(fragment, forcePushState);
            var queryString = fragment.replace(fragmentStrip, '');
            return queryString.slice(1);
        },

        getRouteString: function(fragment, forcePushState){
            var result = "";
            fragment = this.getFragment(fragment, forcePushState);
            var queryString = this.getQueryParametersString(fragment, forcePushState);
            result = fragment.replace(queryString, '');
            if(queryString.length) {
                result = result.slice(0, -1);
            }
            return result;
        },

        getBrowserQuery: function(){
            var match = window.location.search.match(queryStringParam);
            return this._parseQueryString(match);
        },

        getTotal: function(fragment, forcePushState){
            return {
                query: this.getQueryParameters(fragment, forcePushState),
                queryString: this.getQueryParametersString(fragment, forcePushState),
                routeString: this.getRouteString(fragment, forcePushState),
                hash: this.getHash(),
                fragment: this.getFragment(fragment, forcePushState),
                browserQuery: this.getBrowserQuery()
            }
        }

    });

    _.extend(Backbone.Router.prototype, {
        initialize: function(options) {
            this.encodedSplatParts = options && options.encodedSplatParts;
        },

        _routeToRegExp: function(route) {
            var splatMatch = (splatParam.exec(route) || {index: -1}),
                namedMatch = (namedParam.exec(route) || {index: -1}),
                paramNames = route.match(namesPattern) || [];

            route = route.replace(escapeRegExp, '\\$&')
                .replace(optionalParam, '(?:$1)?')
                .replace(namedParam, function(match, optional){
                    return optional ? match : '([^\\/\\?]+)';
                })
                // `[^??]` is hacking around a regular expression bug under iOS4.
                // If only `[^?]` is used then paths like signin/photos will fail
                // while paths with `?` anywhere, like `signin/photos?`, will succeed.
                .replace(splatParam, '([^??]*?)');
            route += '(\\?.*)?';
            var rtn = new RegExp('^' + route + '$');

            // use the rtn value to hold some parameter data
            if (splatMatch.index >= 0) {
                // there is a splat
                if (namedMatch >= 0) {
                    // negative value will indicate there is a splat match before any named matches
                    rtn.splatMatch = splatMatch.index - namedMatch.index;
                } else {
                    rtn.splatMatch = -1;
                }
            }
            rtn.paramNames = _.map(paramNames, function(name) { return name.substring(1); });
            rtn.namedParameters = this.namedParameters;

            return rtn;
        },

        /**
         * Given a route, and a URL fragment that it matches, return the array of
         * extracted parameters.
         */
        _extractParameters: function(route, fragment) {
            var params = route.exec(fragment).slice(1),
                namedParams = {};
            if (params.length > 0 && _.isUndefined(params[params.length - 1])) {
                // remove potential invalid data from query params match
                params.splice(params.length - 1, 1);
            }

            // do we have an additional query string?
            var match = params.length && params[params.length-1] && params[params.length-1].match(queryStringParam);
            if (match) {
                var queryString = match[1];
                var data = {};
                if (queryString) {
                    var self = this;
                    iterateQueryString(queryString, function(name, value) {
                        self._setParamValue(name, value, data);
                    });
                }
                params[params.length-1] = data;
                _.extend(namedParams, data);
            }

            // decode params
            var length = params.length;
            if (route.splatMatch && this.encodedSplatParts) {
                if (route.splatMatch < 0) {
                    // splat param is first
                    return params;
                } else {
                    length = length - 1;
                }
            }

            for (var i=0; i<length; i++) {
                if (_.isString(params[i])) {
                    params[i] = parseParams(params[i]);
                    if (route.paramNames && route.paramNames.length >= i-1) {
                        namedParams[route.paramNames[i]] = params[i];
                    }
                }
            }

            return (Backbone.Router.namedParameters || route.namedParameters) ? [namedParams] : params;
        },

        /**
         * Set the parameter value on the data hash
         */
        _setParamValue: function(key, value, data) {
            // use '.' to define hash separators
            key = key.replace('[]', '');
            key = key.replace('%5B%5D', '');
            var parts = key.split('.');
            var _data = data;
            for (var i=0; i<parts.length; i++) {
                var part = parts[i];
                if (i === parts.length-1) {
                    // set the value
                    _data[part] = this._decodeParamValue(value, _data[part]);
                } else {
                    _data = _data[part] = _data[part] || {};
                }
            }
        },

        /**
         * Decode an individual parameter value (or list of values)
         * @param value the complete value
         * @param currentValue the currently known value (or list of values)
         */
        _decodeParamValue: function(value, currentValue) {
            // '|' will indicate an array.  Array with 1 value is a=|b - multiple values can be a=b|c
            var splitChar = Backbone.Router.arrayValueSplit;
            if (splitChar && value.indexOf(splitChar) >= 0) {
                var values = value.split(splitChar);
                // clean it up
                for (var i=values.length-1; i>=0; i--) {
                    if (!values[i]) {
                        values.splice(i, 1);
                    } else {
                        values[i] = parseParams(values[i]);
                    }
                }
                return values;
            }

            value = parseParams(value);
            if (!currentValue) {
                return value;
            } else if (_.isArray(currentValue)) {
                currentValue.push(value);
                return currentValue;
            } else {
                return [currentValue, value];
            }
        },

        /**
         * Return the route fragment with queryParameters serialized to query parameter string
         */
        toFragment: function(route, queryParameters) {
            if (queryParameters) {
                if (!_.isString(queryParameters)) {
                    queryParameters = toQueryString(queryParameters);
                }
                if(queryParameters) {
                    route += '?' + queryParameters;
                }
            }
            return route;
        }
    });


    /**
     * Serialize the val hash to query parameters and return it.  Use the namePrefix to prefix all param names (for recursion)
     */
    function toQueryString(val, namePrefix) {
        /*jshint eqnull:true */
        var splitChar = Backbone.Router.arrayValueSplit;
        function encodeSplit(val) { return String(val).replace(splitChar, encodeURIComponent(splitChar)); }

        if (!val) {
            return '';
        }

        namePrefix = namePrefix || '';
        var rtn = [];
        _.each(val, function(_val, name) {
            name = namePrefix + name;

            if (_.isString(_val) || _.isNumber(_val) || _.isBoolean(_val) || _.isDate(_val)) {
                // primitive type
                if (_val != null) {
                    rtn.push(name + '=' + encodeSplit(encodeURIComponent(_val)));
                }
            } else if (_.isArray(_val)) {
                // arrays use Backbone.Router.arrayValueSplit separator
                var str = '';
                for (var i = 0; i < _val.length; i++) {
                    var param = _val[i];
                    if (param != null) {
                        str += splitChar + encodeSplit(param);
                    }
                }
                if (str) {
                    rtn.push(name + '=' + str);
                }
            } else {
                // dig into hash
                var result = toQueryString(_val, name + '.');
                if (result) {
                    rtn.push(result);
                }
            }
        });

        return rtn.join('&');
    }

    function parseParams(value) {
        // decodeURIComponent doesn't touch '+'
        try {
            return decodeURIComponent(value.replace(/\+/g, ' '));
        } catch (err) {
            // Failover to whatever was passed if we get junk data
            return value;
        }
    }

    function iterateQueryString(queryString, callback) {
        var keyValues = queryString.split('&');
        _.each(keyValues, function(keyValue) {
            var arr = keyValue.split('=');
            callback(arr.shift(), arr.join('='));
        });
    }

}));
define('backbone.routefilter',['backbone_clear'], function(Backbone){
    /*! backbone.routefilter - v0.1.0 - 2012-09-10
     * https://github.com/boazsender/backbone.routefilter
     * Copyright (c) 2012 Boaz Sender; Licensed MIT */

    /*! backbone.routefilter - v0.1.0 - 2012-08-29
     * https://github.com/boazsender/backbone.routefilter
     * Copyright (c) 2012 Boaz Sender; Licensed MIT */
    /*global Backbone:false, _: false, console: false*/

    (function(Backbone, _) {

        // Save a reference to the original route method to be called
        // after we pave it over.
        var originalRoute = Backbone.Router.prototype.route;

        // Create a reusable no operation func for the case where a before
        // or after filter is not set. Backbone or Underscore should have
        // a global one of these in my opinion.
        var nop = function(){};

        // Extend the router prototype with a default before function,
        // a default after function, and a pave over of _bindRoutes.
        _.extend(Backbone.Router.prototype, {

            // Add default before filter.
            before: nop,

            // Add default after filter.
            after: nop,

            // Pave over Backbone.Router.prototype.route, the public method used
            // for adding routes to a router instance on the fly, and the
            // method which backbone uses internally for binding routes to handlers
            // on the Backbone.history singleton once it's instantiated.
            route: function(route, name, callback) {

                // If there is no callback present for this route, then set it to
                // be the name that was set in the routes property of the constructor,
                // or the name arguement of the route method invocation. This is what
                // Backbone.Router.route already does. We need to do it again,
                // because we are about to wrap the callback in a function that calls
                // the before and after filters as well as the original callback that
                // was passed in.
                if( !callback ){
                    callback = this[ name ];
                }

                // Create a new callback to replace the original callback that calls
                // the before and after filters as well as the original callback
                // internally.
                var wrappedCallback = _.bind( function() {

                    // Call the before filter and if it returns false, run the
                    // route's original callback, and after filter. This allows
                    // the user to return false from within the before filter
                    // to prevent the original route callback and after
                    // filter from running.
                    if ( this.before.apply(this, arguments) === false) {
                        return;
                    }

                    // If the callback exists, then call it. This means that the before
                    // and after filters will be called whether or not an actual
                    // callback function is supplied to handle a given route.
                    if( callback ) {
                        callback.apply( this, arguments );
                    }

                    // Call the after filter.
                    this.after.apply( this, arguments );

                }, this);

                // Call our original route, replacing the callback that was originally
                // passed in when Backboun.Router.route was invoked with our wrapped
                // callback that calls the before and after callbacks as well as the
                // original callback.
                return originalRoute.call( this, route, name, wrappedCallback );
            }

        });

    }(Backbone, _));

    return Backbone;
});
// Backbone.Validation v0.9.1
//
// Copyright (c) 2011-2014 Thomas Pedersen
// Distributed under MIT License
//
// Documentation and full license available at:
// http://thedersen.com/projects/backbone-validation
(function (factory) {
    if (typeof exports === 'object') {
        module.exports = factory(require('backbone'), require('underscore'));
    } else if (typeof define === 'function' && define.amd) {
        define('backbone.validation',['backbone_clear', 'underscore'], factory);
    }
}(function (Backbone, _) {
    Backbone.Validation = (function(_){
        

        // Default options
        // ---------------

        var defaultOptions = {
            forceUpdate: false,
            selector: 'name',
            labelFormatter: 'sentenceCase',
            valid: Function.prototype,
            invalid: Function.prototype
        };


        // Helper functions
        // ----------------

        // Formatting functions used for formatting error messages
        var formatFunctions = {
            // Uses the configured label formatter to format the attribute name
            // to make it more readable for the user
            formatLabel: function(attrName, model) {
                return defaultLabelFormatters[defaultOptions.labelFormatter](attrName, model);
            },

            // Replaces nummeric placeholders like {0} in a string with arguments
            // passed to the function
            format: function() {
                var args = Array.prototype.slice.call(arguments),
                    text = args.shift();
                return text.replace(/\{(\d+)\}/g, function(match, number) {
                    return typeof args[number] !== 'undefined' ? args[number] : match;
                });
            }
        };

        // Flattens an object
        // eg:
        //
        //     var o = {
        //       address: {
        //         street: 'Street',
        //         zip: 1234
        //       }
        //     };
        //
        // becomes:
        //
        //     var o = {
        //       'address.street': 'Street',
        //       'address.zip': 1234
        //     };
        var flatten = function (obj, into, prefix) {
            into = into || {};
            prefix = prefix || '';

            _.each(obj, function(val, key) {
                if(obj.hasOwnProperty(key)) {
                    if (val && typeof val === 'object' && !(
                        val instanceof Array ||
                            val instanceof Date ||
                            val instanceof RegExp ||
                            val instanceof Backbone.Model ||
                            val instanceof Backbone.Collection)
                        ) {
                        flatten(val, into, prefix + key + '.');
                    }
                    else {
                        into[prefix + key] = val;
                    }
                }
            });

            return into;
        };

        // Validation
        // ----------

        var Validation = (function(){

            // Returns an object with undefined properties for all
            // attributes on the model that has defined one or more
            // validation rules.
            var getValidatedAttrs = function(model) {
                return _.reduce(_.keys(_.result(model, 'validation') || {}), function(memo, key) {
                    memo[key] = void 0;
                    return memo;
                }, {});
            };

            // Looks on the model for validations for a specified
            // attribute. Returns an array of any validators defined,
            // or an empty array if none is defined.
            var getValidators = function(model, attr) {
                var attrValidationSet = model.validation ? _.result(model, 'validation')[attr] || {} : {};

                // If the validator is a function or a string, wrap it in a function validator
                if (_.isFunction(attrValidationSet) || _.isString(attrValidationSet)) {
                    attrValidationSet = {
                        fn: attrValidationSet
                    };
                }

                // Stick the validator object into an array
                if(!_.isArray(attrValidationSet)) {
                    attrValidationSet = [attrValidationSet];
                }

                // Reduces the array of validators into a new array with objects
                // with a validation method to call, the value to validate against
                // and the specified error message, if any
                return _.reduce(attrValidationSet, function(memo, attrValidation) {
                    _.each(_.without(_.keys(attrValidation), 'msg'), function(validator) {
                        memo.push({
                            fn: defaultValidators[validator],
                            val: attrValidation[validator],
                            msg: attrValidation.msg
                        });
                    });
                    return memo;
                }, []);
            };

            // Validates an attribute against all validators defined
            // for that attribute. If one or more errors are found,
            // the first error message is returned.
            // If the attribute is valid, an empty string is returned.
            var validateAttr = function(model, attr, value, computed) {
                // Reduces the array of validators to an error message by
                // applying all the validators and returning the first error
                // message, if any.
                return _.reduce(getValidators(model, attr), function(memo, validator){
                    // Pass the format functions plus the default
                    // validators as the context to the validator
                    var ctx = _.extend({}, formatFunctions, defaultValidators),
                        result = validator.fn.call(ctx, value, attr, validator.val, model, computed);

                    if(result === false || memo === false) {
                        return false;
                    }
                    if (result && !memo) {
                        return _.result(validator, 'msg') || result;
                    }
                    return memo;
                }, '');
            };

            // Loops through the model's attributes and validates them all.
            // Returns and object containing names of invalid attributes
            // as well as error messages.
            var validateModel = function(model, attrs) {
                var error,
                    invalidAttrs = {},
                    isValid = true,
                    computed = _.clone(attrs),
                    flattened = flatten(attrs);

                _.each(flattened, function(val, attr) {
                    error = validateAttr(model, attr, val, computed);
                    if (error) {
                        invalidAttrs[attr] = error;
                        isValid = false;
                    }
                });

                return {
                    invalidAttrs: invalidAttrs,
                    isValid: isValid
                };
            };

            // Contains the methods that are mixed in on the model when binding
            var mixin = function(view, options) {
                return {

                    // Check whether or not a value, or a hash of values
                    // passes validation without updating the model
                    preValidate: function(attr, value) {
                        var self = this,
                            result = {},
                            error;

                        if(_.isObject(attr)){
                            _.each(attr, function(value, key) {
                                error = self.preValidate(key, value);
                                if(error){
                                    result[key] = error;
                                }
                            });

                            return _.isEmpty(result) ? undefined : result;
                        }
                        else {
                            return validateAttr(this, attr, value, _.extend({}, this.attributes));
                        }
                    },

                    // Check to see if an attribute, an array of attributes or the
                    // entire model is valid. Passing true will force a validation
                    // of the model.
                    isValid: function(option) {
                        var flattened = flatten(this.attributes);

                        if(_.isString(option)){
                            return !validateAttr(this, option, flattened[option], _.extend({}, this.attributes));
                        }
                        if(_.isArray(option)){
                            return _.reduce(option, function(memo, attr) {
                                return memo && !validateAttr(this, attr, flattened[attr], _.extend({}, this.attributes));
                            }, true, this);
                        }
                        if(option === true) {
                            this.validate();
                        }
                        return this.validation ? this._isValid : true;
                    },

                    // This is called by Backbone when it needs to perform validation.
                    // You can call it manually without any parameters to validate the
                    // entire model.
                    validate: function(attrs, setOptions){
                        var model = this,
                            validateAll = !attrs,
                            opt = _.extend({}, options, setOptions),
                            validatedAttrs = getValidatedAttrs(model),
                            allAttrs = _.extend({}, validatedAttrs, model.attributes, attrs),
                            changedAttrs = flatten(attrs || allAttrs),

                            result = validateModel(model, allAttrs);

                        model._isValid = result.isValid;

                        // After validation is performed, loop through all validated attributes
                        // and call the valid callbacks so the view is updated.
                        _.each(validatedAttrs, function(val, attr){
                            var invalid = result.invalidAttrs.hasOwnProperty(attr);
                            if(!invalid){
                                opt.valid(view, attr, opt.selector);
                            }
                        });

                        // After validation is performed, loop through all validated and changed attributes
                        // and call the invalid callback so the view is updated.
                        _.each(validatedAttrs, function(val, attr){
                            var invalid = result.invalidAttrs.hasOwnProperty(attr),
                                changed = changedAttrs.hasOwnProperty(attr);

                            if(invalid && (changed || validateAll)){
                                opt.invalid(view, attr, result.invalidAttrs[attr], opt.selector);
                            }
                        });

                        // Trigger validated events.
                        // Need to defer this so the model is actually updated before
                        // the event is triggered.
                        _.defer(function() {
                            model.trigger('validated', model._isValid, model, result.invalidAttrs);
                            model.trigger('validated:' + (model._isValid ? 'valid' : 'invalid'), model, result.invalidAttrs);
                        });

                        // Return any error messages to Backbone, unless the forceUpdate flag is set.
                        // Then we do not return anything and fools Backbone to believe the validation was
                        // a success. That way Backbone will update the model regardless.
                        if (!opt.forceUpdate && _.intersection(_.keys(result.invalidAttrs), _.keys(changedAttrs)).length > 0) {
                            return result.invalidAttrs;
                        }
                    }
                };
            };

            // Helper to mix in validation on a model
            var bindModel = function(view, model, options) {
                _.extend(model, mixin(view, options));
            };

            // Removes the methods added to a model
            var unbindModel = function(model) {
                delete model.validate;
                delete model.preValidate;
                delete model.isValid;
            };

            // Mix in validation on a model whenever a model is
            // added to a collection
            var collectionAdd = function(model) {
                bindModel(this.view, model, this.options);
            };

            // Remove validation from a model whenever a model is
            // removed from a collection
            var collectionRemove = function(model) {
                unbindModel(model);
            };

            // Returns the public methods on Backbone.Validation
            return {

                // Current version of the library
                version: '0.9.1',

                // Called to configure the default options
                configure: function(options) {
                    _.extend(defaultOptions, options);
                },

                // Hooks up validation on a view with a model
                // or collection
                bind: function(view, options) {
                    options = _.extend({}, defaultOptions, defaultCallbacks, options);

                    var model = options.model || view.model,
                        collection = options.collection || view.collection;

                    if(typeof model === 'undefined' && typeof collection === 'undefined'){
                        throw 'Before you execute the binding your view must have a model or a collection.\n' +
                            'See http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.';
                    }

                    if(model) {
                        bindModel(view, model, options);
                    }
                    else if(collection) {
                        collection.each(function(model){
                            bindModel(view, model, options);
                        });
                        collection.bind('add', collectionAdd, {view: view, options: options});
                        collection.bind('remove', collectionRemove);
                    }
                },

                // Removes validation from a view with a model
                // or collection
                unbind: function(view, options) {
                    options = _.extend({}, options);
                    var model = options.model || view.model,
                        collection = options.collection || view.collection;

                    if(model) {
                        unbindModel(model);
                    }
                    else if(collection) {
                        collection.each(function(model){
                            unbindModel(model);
                        });
                        collection.unbind('add', collectionAdd);
                        collection.unbind('remove', collectionRemove);
                    }
                },

                // Used to extend the Backbone.Model.prototype
                // with validation
                mixin: mixin(null, defaultOptions)
            };
        }());


        // Callbacks
        // ---------

        var defaultCallbacks = Validation.callbacks = {

            // Gets called when a previously invalid field in the
            // view becomes valid. Removes any error message.
            // Should be overridden with custom functionality.
            valid: function(view, attr, selector) {
                view.$('[' + selector + '~="' + attr + '"]')
                    .removeClass('invalid')
                    .removeAttr('data-error');
            },

            // Gets called when a field in the view becomes invalid.
            // Adds a error message.
            // Should be overridden with custom functionality.
            invalid: function(view, attr, error, selector) {
                view.$('[' + selector + '~="' + attr + '"]')
                    .addClass('invalid')
                    .attr('data-error', error);
            }
        };


        // Patterns
        // --------

        var defaultPatterns = Validation.patterns = {
            // Matches any digit(s) (i.e. 0-9)
            digits: /^\d+$/,

            // Matches any number (e.g. 100.000)
            number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,

            // Matches a valid email address (e.g. mail@example.com)
            email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,

            // Mathes any valid url (e.g. http://www.xample.com)
            url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
        };


        // Error messages
        // --------------

        // Error message for the build in validators.
        // {x} gets swapped out with arguments form the validator.
        var defaultMessages = Validation.messages = {
            required: '{0} is required',
            acceptance: '{0} must be accepted',
            min: '{0} must be greater than or equal to {1}',
            max: '{0} must be less than or equal to {1}',
            range: '{0} must be between {1} and {2}',
            length: '{0} must be {1} characters',
            minLength: '{0} must be at least {1} characters',
            maxLength: '{0} must be at most {1} characters',
            rangeLength: '{0} must be between {1} and {2} characters',
            oneOf: '{0} must be one of: {1}',
            equalTo: '{0} must be the same as {1}',
            digits: '{0} must only contain digits',
            number: '{0} must be a number',
            email: '{0} must be a valid email',
            url: '{0} must be a valid url',
            inlinePattern: '{0} is invalid'
        };

        // Label formatters
        // ----------------

        // Label formatters are used to convert the attribute name
        // to a more human friendly label when using the built in
        // error messages.
        // Configure which one to use with a call to
        //
        //     Backbone.Validation.configure({
        //       labelFormatter: 'label'
        //     });
        var defaultLabelFormatters = Validation.labelFormatters = {

            // Returns the attribute name with applying any formatting
            none: function(attrName) {
                return attrName;
            },

            // Converts attributeName or attribute_name to Attribute name
            sentenceCase: function(attrName) {
                return attrName.replace(/(?:^\w|[A-Z]|\b\w)/g, function(match, index) {
                    return index === 0 ? match.toUpperCase() : ' ' + match.toLowerCase();
                }).replace(/_/g, ' ');
            },

            // Looks for a label configured on the model and returns it
            //
            //      var Model = Backbone.Model.extend({
            //        validation: {
            //          someAttribute: {
            //            required: true
            //          }
            //        },
            //
            //        labels: {
            //          someAttribute: 'Custom label'
            //        }
            //      });
            label: function(attrName, model) {
                return (model.labels && model.labels[attrName]) || defaultLabelFormatters.sentenceCase(attrName, model);
            }
        };


        // Built in validators
        // -------------------

        var defaultValidators = Validation.validators = (function(){
            // Use native trim when defined
            var trim = String.prototype.trim ?
                function(text) {
                    return text === null ? '' : String.prototype.trim.call(text);
                } :
                function(text) {
                    var trimLeft = /^\s+/,
                        trimRight = /\s+$/;

                    return text === null ? '' : text.toString().replace(trimLeft, '').replace(trimRight, '');
                };

            // Determines whether or not a value is a number
            var isNumber = function(value){
                return _.isNumber(value) || (_.isString(value) && value.match(defaultPatterns.number));
            };

            // Determines whether or not a value is empty
            var hasValue = function(value) {
                return !(_.isNull(value) || _.isUndefined(value) || (_.isString(value) && trim(value) === '') || (_.isArray(value) && _.isEmpty(value)));
            };

            return {
                // Function validator
                // Lets you implement a custom function used for validation
                fn: function(value, attr, fn, model, computed) {
                    if(_.isString(fn)){
                        fn = model[fn];
                    }
                    return fn.call(model, value, attr, computed);
                },

                // Required validator
                // Validates if the attribute is required or not
                // This can be specified as either a boolean value or a function that returns a boolean value
                required: function(value, attr, required, model, computed) {
                    var isRequired = _.isFunction(required) ? required.call(model, value, attr, computed) : required;
                    if(!isRequired && !hasValue(value)) {
                        return false; // overrides all other validators
                    }
                    if (isRequired && !hasValue(value)) {
                        return this.format(defaultMessages.required, this.formatLabel(attr, model));
                    }
                },

                // Acceptance validator
                // Validates that something has to be accepted, e.g. terms of use
                // `true` or 'true' are valid
                acceptance: function(value, attr, accept, model) {
                    if(value !== 'true' && (!_.isBoolean(value) || value === false)) {
                        return this.format(defaultMessages.acceptance, this.formatLabel(attr, model));
                    }
                },

                // Min validator
                // Validates that the value has to be a number and equal to or greater than
                // the min value specified
                min: function(value, attr, minValue, model) {
                    if (!isNumber(value) || value < minValue) {
                        return this.format(defaultMessages.min, this.formatLabel(attr, model), minValue);
                    }
                },

                // Max validator
                // Validates that the value has to be a number and equal to or less than
                // the max value specified
                max: function(value, attr, maxValue, model) {
                    if (!isNumber(value) || value > maxValue) {
                        return this.format(defaultMessages.max, this.formatLabel(attr, model), maxValue);
                    }
                },

                // Range validator
                // Validates that the value has to be a number and equal to or between
                // the two numbers specified
                range: function(value, attr, range, model) {
                    if(!isNumber(value) || value < range[0] || value > range[1]) {
                        return this.format(defaultMessages.range, this.formatLabel(attr, model), range[0], range[1]);
                    }
                },

                // Length validator
                // Validates that the value has to be a string with length equal to
                // the length value specified
                length: function(value, attr, length, model) {
                    if (!_.isString(value) || value.length !== length) {
                        return this.format(defaultMessages.length, this.formatLabel(attr, model), length);
                    }
                },

                // Min length validator
                // Validates that the value has to be a string with length equal to or greater than
                // the min length value specified
                minLength: function(value, attr, minLength, model) {
                    if (!_.isString(value) || value.length < minLength) {
                        return this.format(defaultMessages.minLength, this.formatLabel(attr, model), minLength);
                    }
                },

                // Max length validator
                // Validates that the value has to be a string with length equal to or less than
                // the max length value specified
                maxLength: function(value, attr, maxLength, model) {
                    if (!_.isString(value) || value.length > maxLength) {
                        return this.format(defaultMessages.maxLength, this.formatLabel(attr, model), maxLength);
                    }
                },

                // Range length validator
                // Validates that the value has to be a string and equal to or between
                // the two numbers specified
                rangeLength: function(value, attr, range, model) {
                    if (!_.isString(value) || value.length < range[0] || value.length > range[1]) {
                        return this.format(defaultMessages.rangeLength, this.formatLabel(attr, model), range[0], range[1]);
                    }
                },

                // One of validator
                // Validates that the value has to be equal to one of the elements in
                // the specified array. Case sensitive matching
                oneOf: function(value, attr, values, model) {
                    if(!_.include(values, value)){
                        return this.format(defaultMessages.oneOf, this.formatLabel(attr, model), values.join(', '));
                    }
                },

                // Equal to validator
                // Validates that the value has to be equal to the value of the attribute
                // with the name specified
                equalTo: function(value, attr, equalTo, model, computed) {
                    if(value !== computed[equalTo]) {
                        return this.format(defaultMessages.equalTo, this.formatLabel(attr, model), this.formatLabel(equalTo, model));
                    }
                },

                // Pattern validator
                // Validates that the value has to match the pattern specified.
                // Can be a regular expression or the name of one of the built in patterns
                pattern: function(value, attr, pattern, model) {
                    if (!hasValue(value) || !value.toString().match(defaultPatterns[pattern] || pattern)) {
                        return this.format(defaultMessages[pattern] || defaultMessages.inlinePattern, this.formatLabel(attr, model), pattern);
                    }
                }
            };
        }());

        // Set the correct context for all validators
        // when used from within a method validator
        _.each(defaultValidators, function(validator, key){
            defaultValidators[key] = _.bind(defaultValidators[key], _.extend({}, formatFunctions, defaultValidators));
        });

        return Validation;
    }(_));
    return Backbone.Validation;
}));
//
// backbone.stickit - v0.8.0
// The MIT License
// Copyright (c) 2012 The New York Times, CMS Group, Matthew DeLambo <delambo@gmail.com> 
//
// Backbone.Stickit v0.8.0, MIT Licensed
// Copyright (c) 2012 The New York Times, CMS Group, Matthew DeLambo <delambo@gmail.com>

(function (factory) {

  // Set up Stickit appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define('backbone.stickit',['underscore', 'backbone_clear', 'exports'], factory);
  }

  // Next for Node.js or CommonJS.
  else if (typeof exports === 'object') {
    factory(require('underscore'), require('backbone'), exports);
  }

  // Finally, as a browser global.
  else {
    factory(_, Backbone, {});
  }

}(function (_, Backbone, Stickit) {

  // Stickit Namespace
  // --------------------------

  Stickit._handlers = [];

  Stickit.addHandler = function(handlers) {
    // Fill-in default values.
    handlers = _.map(_.flatten([handlers]), function(handler) {
      return _.extend({
        updateModel: true,
        updateView: true,
        updateMethod: 'text'
      }, handler);
    });
    this._handlers = this._handlers.concat(handlers);
  };

  // Backbone.View Mixins
  // --------------------

  Stickit.ViewMixin = {

    // Collection of model event bindings.
    //   [{model,event,fn,config}, ...]
    _modelBindings: null,

    // Unbind the model and event bindings from `this._modelBindings` and
    // `this.$el`. If the optional `model` parameter is defined, then only
    // delete bindings for the given `model` and its corresponding view events.
    unstickit: function(model, bindingSelector) {
      // Support bindings hash in place of selector.
      if (_.isObject(bindingSelector)) {
        _.each(_.keys(bindingSelector), function(selector) {
          this.unstickit(model, selector);
        }, this);
        return;
      }

      var models = [], destroyFns = [];
      _.each(this._modelBindings, function(binding, i) {
        if (model && binding.model !== model) { return; }
        if (bindingSelector && binding.config.selector != bindingSelector) return;
        destroyFns.push(binding.config._destroy);
        binding.model.off(binding.event, binding.fn);
        models.push(binding.model);
        delete this._modelBindings[i];
      }, this);

      // Trigger an event for each model that was unbound.
      _.invoke(_.uniq(models), 'trigger', 'stickit:unstuck', this.cid);
      // Call `_destroy` on a unique list of the binding callbacks.
      _.each(_.uniq(destroyFns), function(fn) { fn.call(this); }, this);
      // Cleanup the null values.
      this._modelBindings = _.compact(this._modelBindings);

      this.$el.off('.stickit' + (model ? '.' + model.cid : ''), bindingSelector);
    },

    // Using `this.bindings` configuration or the `optionalBindingsConfig`, binds `this.model`
    // or the `optionalModel` to elements in the view.
    stickit: function(optionalModel, optionalBindingsConfig) {
      var model = optionalModel || this.model,
          bindings = optionalBindingsConfig || _.result(this, "bindings") || {};

      this._modelBindings || (this._modelBindings = []);

      // Iterate through the selectors in the bindings configuration and configure
      // the various options for each field.
      this.addBinding(model, bindings);

      // Wrap `view.remove` to unbind stickit model and dom events.
      var remove = this.remove;
      if (!remove.stickitWrapped)
        this.remove = function() {
          var ret = this;
          this.unstickit();
          if (remove) ret = remove.apply(this, arguments);
          return ret;
        };
      this.remove.stickitWrapped = true;
    },

    // Add a single model binding to the view
    addBinding: function(optionalModel, second, _binding) {
      var $el, options, modelAttr, config, selector,
        model = optionalModel || this.model,
        namespace = '.stickit.' + model.cid,
        binding = _binding || {},
        bindId = _.uniqueId();

      // Allow jQuery-style {key: val} event maps
      if (_.isString(second)) {
        selector = second;
      } else {
        var bindings = second;
        _.each(bindings, function(v, selector) {
          this.addBinding(model, selector, bindings[selector]);
        }, this);
        return;
      }

      // Support ':el' selector - special case selector for the view managed delegate.
      $el = selector === ':el' ? this.$el : this.$(selector);

      this.unstickit(model, selector);

      // Fail fast if the selector didn't match an element.
      if (!$el.length) return;

      // Allow shorthand setting of model attributes - `'selector':'observe'`.
      if (_.isString(binding)) binding = {observe:binding};

      // Handle case where `observe` is in the form of a function.
      if (_.isFunction(binding.observe)) binding.observe = binding.observe.call(this);

      config = getConfiguration($el, binding);
      config.selector = selector;
      modelAttr = config.observe;

      // Create the model set options with a unique `bindId` so that we
      // can avoid double-binding in the `change:attribute` event handler.
      config.bindId = bindId;

      // Add a reference to the view for handlers of stickitChange events
      config.view = this;
      options = _.extend({stickitChange:config}, config.setOptions);

      // Add a `_destroy` callback to the configuration, in case `destroy`
      // is a named function and we need a unique function when unsticking.
      config._destroy = function() {
        applyViewFn(this, config.destroy, $el, model, config);
      };

      initializeAttributes(this, $el, config, model, modelAttr);

      initializeVisible(this, $el, config, model, modelAttr);

      if (modelAttr) {
        // Setup one-way, form element to model, bindings.
        _.each(config.events, function(type) {
          var event = type + namespace;
          var method = function(event) {
            var val = config.getVal.call(this, $el, event, config, _.rest(arguments));
            // Don't update the model if false is returned from the `updateModel` configuration.
            if (evaluateBoolean(this, config.updateModel, val, event, config))
              setAttr(model, modelAttr, val, options, this, config);
          };
          method = _.bind(method, this);
          if (selector === ':el') this.$el.on(event, method);
          else this.$el.on(event, selector, method);
        }, this);

        // Setup a `change:modelAttr` observer to keep the view element in sync.
        // `modelAttr` may be an array of attributes or a single string value.
        _.each(_.flatten([modelAttr]), function(attr) {
          observeModelEvent(model, this, 'change:'+attr, config, function(model, val, options) {
            var changeId = options && options.stickitChange && options.stickitChange.bindId || null;
            if (changeId !== bindId)
              updateViewBindEl(this, $el, config, getAttr(model, modelAttr, config, this), model);
          });
        }, this);

        updateViewBindEl(this, $el, config, getAttr(model, modelAttr, config, this), model, true);
      }

      // After each binding is setup, call the `initialize` callback.
      applyViewFn(this, config.initialize, $el, model, config);
    }
  };

  _.extend(Backbone.View.prototype, Stickit.ViewMixin);

  // Helpers
  // -------

  // Evaluates the given `path` (in object/dot-notation) relative to the given
  // `obj`. If the path is null/undefined, then the given `obj` is returned.
  var evaluatePath = function(obj, path) {
    var parts = (path || '').split('.');
    var result = _.reduce(parts, function(memo, i) { return memo[i]; }, obj);
    return result == null ? obj : result;
  };

  // If the given `fn` is a string, then view[fn] is called, otherwise it is
  // a function that should be executed.
  var applyViewFn = function(view, fn) {
    if (fn) return (_.isString(fn) ? evaluatePath(view,fn) : fn).apply(view, _.rest(arguments, 2));
  };

  var getSelectedOption = function($select) { return $select.find('option').not(function(){ return !this.selected; }); };

  // Given a function, string (view function reference), or a boolean
  // value, returns the truthy result. Any other types evaluate as false.
  var evaluateBoolean = function(view, reference) {
    if (_.isBoolean(reference)) return reference;
    else if (_.isFunction(reference) || _.isString(reference))
      return applyViewFn.apply(this, arguments);
    return false;
  };

  // Setup a model event binding with the given function, and track the event
  // in the view's _modelBindings.
  var observeModelEvent = function(model, view, event, config, fn) {
    model.on(event, fn, view);
    view._modelBindings.push({model:model, event:event, fn:fn, config:config});
  };

  // Prepares the given `val`ue and sets it into the `model`.
  var setAttr = function(model, attr, val, options, context, config) {
    var value = {};
    if (config.onSet)
      val = applyViewFn(context, config.onSet, val, config);

    if (config.set)
      applyViewFn(context, config.set, attr, val, options, config);
    else {
      value[attr] = val;
      // If `observe` is defined as an array and `onSet` returned
      // an array, then map attributes to their values.
      if (_.isArray(attr) && _.isArray(val)) {
        value = _.reduce(attr, function(memo, attribute, index) {
          memo[attribute] = _.has(val, index) ? val[index] : null;
          return memo;
        }, {});
      }
      model.set(value, options);
    }
  };

  // Returns the given `attr`'s value from the `model`, escaping and
  // formatting if necessary. If `attr` is an array, then an array of
  // respective values will be returned.
  var getAttr = function(model, attr, config, context) {
    var val,
      retrieveVal = function(field) {
        return model[config.escape ? 'escape' : 'get'](field);
      },
      sanitizeVal = function(val) {
        return val == null ? '' : val;
      };
    val = _.isArray(attr) ? _.map(attr, retrieveVal) : retrieveVal(attr);
    if (config.onGet) val = applyViewFn(context, config.onGet, val, config);
    return _.isArray(val) ? _.map(val, sanitizeVal) : sanitizeVal(val);
  };

  // Find handlers in `Backbone.Stickit._handlers` with selectors that match
  // `$el` and generate a configuration by mixing them in the order that they
  // were found with the given `binding`.
  var getConfiguration = Stickit.getConfiguration = function($el, binding) {
    var handlers = [{
      updateModel: false,
      updateMethod: 'text',
      update: function($el, val, m, opts) { if ($el[opts.updateMethod]) $el[opts.updateMethod](val); },
      getVal: function($el, e, opts) { return $el[opts.updateMethod](); }
    }];
    handlers = handlers.concat(_.filter(Stickit._handlers, function(handler) {
      return $el.is(handler.selector);
    }));
    handlers.push(binding);
    var config = _.extend.apply(_, handlers);
    // `updateView` is defaulted to false for configutrations with
    // `visible`; otherwise, `updateView` is defaulted to true.
    if (config.visible && !_.has(config, 'updateView')) config.updateView = false;
    else if (!_.has(config, 'updateView')) config.updateView = true;
    return config;
  };

  // Setup the attributes configuration - a list that maps an attribute or
  // property `name`, to an `observe`d model attribute, using an optional
  // `onGet` formatter.
  //
  //     attributes: [{
  //       name: 'attributeOrPropertyName',
  //       observe: 'modelAttrName'
  //       onGet: function(modelAttrVal, modelAttrName) { ... }
  //     }, ...]
  //
  var initializeAttributes = function(view, $el, config, model, modelAttr) {
    var props = ['autofocus', 'autoplay', 'async', 'checked', 'controls', 'defer', 'disabled', 'hidden', 'indeterminate', 'loop', 'multiple', 'open', 'readonly', 'required', 'scoped', 'selected'];

    _.each(config.attributes || [], function(attrConfig) {
      var lastClass = '', observed, updateAttr;
      attrConfig = _.clone(attrConfig);
      observed = attrConfig.observe || (attrConfig.observe = modelAttr),
      updateAttr = function() {
        var updateType = _.indexOf(props, attrConfig.name, true) > -1 ? 'prop' : 'attr',
          val = getAttr(model, observed, attrConfig, view);
        // If it is a class then we need to remove the last value and add the new.
        if (attrConfig.name === 'class') {
          $el.removeClass(lastClass).addClass(val);
          lastClass = val;
        }
        else $el[updateType](attrConfig.name, val);
      };
      _.each(_.flatten([observed]), function(attr) {
        observeModelEvent(model, view, 'change:' + attr, config, updateAttr);
      });
      updateAttr();
    });
  };

  // If `visible` is configured, then the view element will be shown/hidden
  // based on the truthiness of the modelattr's value or the result of the
  // given callback. If a `visibleFn` is also supplied, then that callback
  // will be executed to manually handle showing/hiding the view element.
  //
  //     observe: 'isRight',
  //     visible: true, // or function(val, options) {}
  //     visibleFn: function($el, isVisible, options) {} // optional handler
  //
  var initializeVisible = function(view, $el, config, model, modelAttr) {
    if (config.visible == null) return;
    var visibleCb = function() {
      var visible = config.visible,
          visibleFn = config.visibleFn,
          val = getAttr(model, modelAttr, config, view),
          isVisible = !!val;
      // If `visible` is a function then it should return a boolean result to show/hide.
      if (_.isFunction(visible) || _.isString(visible)) isVisible = !!applyViewFn(view, visible, val, config);
      // Either use the custom `visibleFn`, if provided, or execute the standard show/hide.
      if (visibleFn) applyViewFn(view, visibleFn, $el, isVisible, config);
      else {
        $el.toggle(isVisible);
      }
    };
    _.each(_.flatten([modelAttr]), function(attr) {
      observeModelEvent(model, view, 'change:' + attr, config, visibleCb);
    });
    visibleCb();
  };

  // Update the value of `$el` using the given configuration and trigger the
  // `afterUpdate` callback. This action may be blocked by `config.updateView`.
  //
  //     update: function($el, val, model, options) {},  // handler for updating
  //     updateView: true, // defaults to true
  //     afterUpdate: function($el, val, options) {} // optional callback
  //
  var updateViewBindEl = function(view, $el, config, val, model, isInitializing) {
    if (!evaluateBoolean(view, config.updateView, val, config)) return;
    applyViewFn(view, config.update, $el, val, model, config);
    if (!isInitializing) applyViewFn(view, config.afterUpdate, $el, val, config);
  };

  // Default Handlers
  // ----------------

  Stickit.addHandler([{
    selector: '[contenteditable="true"]',
    updateMethod: 'html',
    events: ['input', 'change']
  }, {
    selector: 'input',
    events: ['propertychange', 'input', 'change'],
    update: function($el, val) { $el.val(val); },
    getVal: function($el) {
      return $el.val();
    }
  }, {
    selector: 'textarea',
    events: ['propertychange', 'input', 'change'],
    update: function($el, val) { $el.val(val); },
    getVal: function($el) { return $el.val(); }
  }, {
    selector: 'input[type="radio"]',
    events: ['change'],
    update: function($el, val) {
      $el.filter('[value="'+val+'"]').prop('checked', true);
    },
    getVal: function($el) {
      return $el.filter(':checked').val();
    }
  }, {
    selector: 'input[type="checkbox"]',
    events: ['change'],
    update: function($el, val, model, options) {
      if ($el.length > 1) {
        // There are multiple checkboxes so we need to go through them and check
        // any that have value attributes that match what's in the array of `val`s.
        val || (val = []);
        $el.each(function(i, el) {
          var checkbox = Backbone.$(el);
          var checked = _.indexOf(val, checkbox.val()) > -1;
          checkbox.prop('checked', checked);
        });
      } else {
        var checked = _.isBoolean(val) ? val : val === $el.val();
        $el.prop('checked', checked);
      }
    },
    getVal: function($el) {
      var val;
      if ($el.length > 1) {
        val = _.reduce($el, function(memo, el) {
          var checkbox = Backbone.$(el);
          if (checkbox.prop('checked')) memo.push(checkbox.val());
          return memo;
        }, []);
      } else {
        val = $el.prop('checked');
        // If the checkbox has a value attribute defined, then
        // use that value. Most browsers use "on" as a default.
        var boxval = $el.val();
        if (boxval !== 'on' && boxval != null) {
          val = val ? $el.val() : null;
        }
      }
      return val;
    }
  }, {
    selector: 'select',
    events: ['change'],
    update: function($el, val, model, options) {
      var optList,
        selectConfig = options.selectOptions,
        list = selectConfig && selectConfig.collection || undefined,
        isMultiple = $el.prop('multiple');

      // If there are no `selectOptions` then we assume that the `<select>`
      // is pre-rendered and that we need to generate the collection.
      if (!selectConfig) {
        selectConfig = {};
        var getList = function($el) {
          return $el.map(function() {
            return {value:this.value, label:this.text};
          }).get();
        };
        if ($el.find('optgroup').length) {
          list = {opt_labels:[]};
          // Search for options without optgroup
          if ($el.find('> option').length) {
            list.opt_labels.push(undefined);
            _.each($el.find('> option'), function(el) {
              list[undefined] = getList(Backbone.$(el));
            });
          }
          _.each($el.find('optgroup'), function(el) {
            var label = Backbone.$(el).attr('label');
            list.opt_labels.push(label);
            list[label] = getList(Backbone.$(el).find('option'));
          });
        } else {
          list = getList($el.find('option'));
        }
      }

      // Fill in default label and path values.
      selectConfig.valuePath = selectConfig.valuePath || 'value';
      selectConfig.labelPath = selectConfig.labelPath || 'label';

      var addSelectOptions = function(optList, $el, fieldVal) {
        _.each(optList, function(obj) {
          var option = Backbone.$('<option/>'), optionVal = obj;

          var fillOption = function(text, val) {
            option.text(text);
            optionVal = val;
            // Save the option value as data so that we can reference it later.
            option.data('stickit_bind_val', optionVal);
            if (!_.isArray(optionVal) && !_.isObject(optionVal)) option.val(optionVal);
          };

          if (obj === '__default__')
            fillOption(selectConfig.defaultOption.label, selectConfig.defaultOption.value);
          else
            fillOption(evaluatePath(obj, selectConfig.labelPath), evaluatePath(obj, selectConfig.valuePath));

          // Determine if this option is selected.
          if (!isMultiple && optionVal != null && fieldVal != null && optionVal === fieldVal || (_.isObject(fieldVal) && _.isEqual(optionVal, fieldVal)))
            option.prop('selected', true);
          else if (isMultiple && _.isArray(fieldVal)) {
            _.each(fieldVal, function(val) {
              if (_.isObject(val)) val = evaluatePath(val, selectConfig.valuePath);
              if (val === optionVal || (_.isObject(val) && _.isEqual(optionVal, val)))
                option.prop('selected', true);
            });
          }

          $el.append(option);
        });
      };

      $el.find('*').remove();

      // The `list` configuration is a function that returns the options list or a string
      // which represents the path to the list relative to `window` or the view/`this`.
      var evaluate = function(view, list) {
        var context = window;
        if (list.indexOf('this.') === 0) context = view;
        list = list.replace(/^[a-z]*\.(.+)$/, '$1');
        return evaluatePath(context, list);
      };
      if (_.isString(list)) optList = evaluate(this, list);
      else if (_.isFunction(list)) optList = applyViewFn(this, list, $el, options);
      else optList = list;

      // Support Backbone.Collection and deserialize.
      if (optList instanceof Backbone.Collection) optList = optList.toJSON();

      if (selectConfig.defaultOption) {
        addSelectOptions(["__default__"], $el);
      }

      if (_.isArray(optList)) {
        addSelectOptions(optList, $el, val);
      } else if (optList.opt_labels) {
        // To define a select with optgroups, format selectOptions.collection as an object
        // with an 'opt_labels' property, as in the following:
        //
        //     {
        //       'opt_labels': ['Looney Tunes', 'Three Stooges'],
        //       'Looney Tunes': [{id: 1, name: 'Bugs Bunny'}, {id: 2, name: 'Donald Duck'}],
        //       'Three Stooges': [{id: 3, name : 'moe'}, {id: 4, name : 'larry'}, {id: 5, name : 'curly'}]
        //     }
        //
        _.each(optList.opt_labels, function(label) {
          var $group = Backbone.$('<optgroup/>').attr('label', label);
          addSelectOptions(optList[label], $group, val);
          $el.append($group);
        });
        // With no 'opt_labels' parameter, the object is assumed to be a simple value-label map.
        // Pass a selectOptions.comparator to override the default order of alphabetical by label.
      } else {
        var opts = [], opt;
        for (var i in optList) {
          opt = {};
          opt[selectConfig.valuePath] = i;
          opt[selectConfig.labelPath] = optList[i];
          opts.push(opt);
        }
        addSelectOptions(_.sortBy(opts, selectConfig.comparator || selectConfig.labelPath), $el, val);
      }
    },
    getVal: function($el) {
      var val;
      if ($el.prop('multiple')) {
        val = Backbone.$(getSelectedOption($el).map(function() {
          return Backbone.$(this).data('stickit_bind_val');
        })).get();
      } else {
        val = getSelectedOption($el).data('stickit_bind_val');
      }
      return val;
    }
  }]);


  // Export onto Backbone object
  Backbone.Stickit = Stickit;

  return Backbone.Stickit;

}));

//     Backbone Faux Server v0.10.3

//     https://github.com/biril/backbone-faux-server
//     Licensed and freely distributed under the MIT License
//     Copyright (c) 2012-2014 Alex Lambiris

/*global exports, define, global, require, _, Backbone */
(function (root, createModule) {
    

    var
    // Detect current environment. Faux-server will be exposed as module / global accordingly
        env = (function () {
            // A global `exports` object signifies CommonJS-like enviroments that support
            //  `module.exports`, e.g. Node
            if (typeof exports === "object") { return "CommonJS"; }

            // A global `define` method with an `amd` property signifies the presence of an AMD
            //  loader (require.js, curl.js)
            if (typeof define === "function" && define.amd) { return "AMD"; }

            // Otherwise we assume running in a browser
            return "browser";
        }()),

    // The `fauxServer` object to be exposed as module / global
        fauxServer = null;

    // Support for CommonJS will be specific to node. So if in fact the detected environment is
    //  'commonJS' we assume the presense of node's `global` object and set root to it. (`root` is
    //  already set to `this` but in the specific case of Node, `this` won't actually capture the
    //  global context - `global` is needed)
    if (env === "CommonJS") { root = global; }

    // Expose as module / global depending on environment
    switch (env) {
        case "CommonJS":
            createModule(root.setTimeout, exports, require("underscore"), require("backbone"));
            break;

        case "AMD":
            define('backbone.server',["underscore", "backbone_clear", "exports"], function (_, Backbone, exports) {
                return createModule(root.setTimeout, exports, _, Backbone);
            });
            break;

        case "browser":

            // When running in a browser, the additional `noConflict` method is attached to
            //  `fauxServer`. This is only meaningful in this specific case where `fauxServer` is
            //  globally exposed
            fauxServer = createModule(root.setTimeout, {}, _, Backbone);
            fauxServer.noConflict = (function() {

                // Save a reference to the previous value of 'fauxServer', so that it can be restored
                //  later on, if 'noConflict' is used
                var previousFauxServer = root.fauxServer;

                // The `noConflict` method: Sets the _global_ `fauxServer` variable to to its previous
                //  value returning a reference to `fauxServer`
                return function () {
                    root.fauxServer = previousFauxServer;
                    fauxServer.noConflict = function () { return fauxServer; };
                    return fauxServer;
                };
            }());

            root.fauxServer = fauxServer;
    }

}(this, function (setTimeout, fauxServer, _, Backbone) {
    

    var
    // Helper which clones an array skipping any and all tail-elements which are undefined.
    //  Array.length can't be trusted when the array contains undefined tail-element(s) which
    //  are explicitly set: It is always set to the index of the last array element plus one
    //  and a tail element explicitly set to undefined will in fact count as the 'last
    //  element'. This can be problematic when counting function arguments in order to
    //  sanitize, provide defaults, etc
        skipUndefinedTail = function (array) {
            var a = [], i = array.length - 1;
            for (; i >= 0; i--) { if (!_.isUndefined(array[i])) { a[i] = array[i]; } }
            return a;
        },

    // Save a reference to the native sync method. Used when no route is matched during syncing
    //  or faux-server is altogether disabled
        nativeSync = Backbone.sync,

    // Indicates whether the faux-server is currently enabled
        isEnabled = true,

    // The default-route, that is to say, a route that contains the default handler if one
    //  is defined. The default handler is invoked when no matching route is found for some
    //  <model-URL, sync-method> pair and may be defined by `setDefaultHandler`. A null value
    //  for the default-route signifies the absence of a default handler
        defaultRoute = null,

    // Convert a urlExp string (containing params and splats) into a regular expression
        makeRegExp = (function () {
            var
            // To escape special chars before converting to reg-exp
                e = /[\-{}\[\]+?.,\\\^$|#\s]/g,

            // Optional part
                o = /\((.*?)\)/g,

            // Named param (+ extra capturing parens for opt-part detection)
                p = /(\(\?)?:[A-Za-z_](?:\w)+/g,

            // Splat param
                s = /\*\w+/g,

            // Don't confuse (regex-equivalent-subsituted) optional parts with named params
                getReplacementForP = function (match, isOptPart) {
                    return isOptPart ? match : "([^\/]+)";
                };

            return function(exp) {
                exp = exp.replace(e, "\\$&")
                    .replace(o, "(?:$1)?")
                    .replace(p, getReplacementForP)
                    .replace(s, "(.*?)");

                return new RegExp("^" + exp + "$");
            };
        }()),

    // A no-op method to reuse
        noOp = function () {},

    // Server's emulated latency
        latency = 0,

    // Map from CRUD (+ patch) to HTTP-methods (verbs)
        crudToHttp = {
            "create": "POST",
            "read": "GET",
            "update": "POST", //"PUT",
            "delete": "POST",//"DELETE",
            "patch": "PATCH"
        },

    // Collection of all defined routes
        routes = [],

        /**
         * Get a route matching the given <URL, HTTP-method> pair. Routes that exactly match the
         *  HTTP-method take precedence over match-all-methods routes (those with `httpMethod` set
         *  to '*'). Matching routes that were defined later take precedence over those that were
         *  defined earlier. A returned matching route will contain the additional handlerParams
         *  property: an array containing params that are to be passed to the handler as captured
         *  when the given URL was matched
         * @param  {string} `url` The route URL
         * @param  {string} `httpMethod` The route HTTP method
         * @return {object} A matching route if one is found, null otherwise. Note that
         *  the returned route is a copy and cannot be modified to alter faux-server's behaviour
         */
            getMatchingRoute = function (url, httpMethod) {
            var i, r, weakMatch;
            for (i = routes.length - 1; i >= 0; --i) { // Iterating from latest to earliest
                r = routes[i];
                if (r.urlExp.test(url)) {
                    if (r.httpMethod === httpMethod) { // Found a match ..
                        r = _.clone(r);
                        r.handlerParams = r.urlExp.exec(url).slice(1);
                        return r; // .. so return it. We're done
                    }
                    if (r.httpMethod === "*") { weakMatch = r; } // Found a weak match
                }
            }
            if (weakMatch) { // Found a weak match. That's good too ..
                r = _.clone(weakMatch);
                r.handlerParams = r.urlExp.exec(url).slice(1);
                return r; // .. so return it. We're done
            }
            return null;
        },

    // Get the data that should be sent to the server during a sync. This depends on
    //  the sync-method being used and any options that may have been given
        getRequestData = function (httpMethod, model, options) {
            // A `data` property whithin options overrides any Model data.
            if (options.data) { return options.data; }

            // If no Model is given (??) then request data will be undefined no matter what
            if (!model) { return; }

            // In the specific case of PATCH, a hash of 'changed attributes' is expected within
            //  options. If no such thing is present then the complete Model representation will
            //  be used instead
            if (httpMethod === "PATCH") { return options.attrs || model.toJSON(); }

            // Send the complete Model representation when POSTing or PUTing
            if (httpMethod === "POST" || httpMethod === "PUT") { return model.toJSON(); }
        },

    // Invoked _per sync_ (with the relevant options / context) to create a new transport -
    //  a deferred-like object implementing a `promise` / `resolve` / `reject` interface. A
    //  successfull sync will invoke `transport.resolve` while a failed one will invoke
    //  `transport.reject`. The sync method will always return `transport.promise()`
        createTransport = function (syncOptions, syncContext) {
            // If an underlying ajax lib is defined for Backbone (`Backbone.$`) and it features a
            //  `Deferred` method (which is precisely the case when Backbone.$ = jQuery) then
            //  attempt to create a 'deferred transport' which will invoke the `success` / `error`
            //  callbacks when its promise is fulfilled / rejected. Note that sync will return the
            //  transport's promise _not_ the transport itself
            if (Backbone.$ && _.isFunction(Backbone.$.Deferred)) {
                try {
                    var deferred = Backbone.$.Deferred();
                    deferred.then(syncOptions.success, syncOptions.error);
                    return deferred;
                } catch (e) {}
            }

            // Otherwise create a poor-man's deferred - an object that implements a dumb
            //  `promise` / `resolve` / `reject` interface without actual promise semantics:
            //  `resolve` and `reject` just delegate to `success` and `error` callbacks while
            //  `promise` returns an `undefined`. This is a good enough transport
            return {
                promise: noOp,
                resolve: function (value) { syncOptions.success(value); },
                reject: function (reason) { syncOptions.error(reason); }
            };
        };

    // Modify Backbone's sync to use the faux-server sync method (when appropriate)
    Backbone.sync = function (crudMethod, model, options) {
        // If faux-server is disabled, fall back to original sync
        if (!isEnabled) { return nativeSync.call(model, crudMethod, model, options); }

        _.defaults(options || (options = {}), {
            emulateHTTP: Backbone.emulateHTTP,
            emulateJSON: Backbone.emulateJSON
        });

        var
        // Sync context
            c = {
                data: null,
                url: null,
                httpMethod: crudToHttp[crudMethod],
                route: null
            },

        // An exec-method to actually run the appropriate handler. Defined below
            execHandler = null,

        // We'll be creating a transport for this sync / returning the transport's promise
            transport = null;

        if(options.type) c.httpMethod = options.type.toUpperCase();

        // When emulating HTTP, 'create', 'update', 'delete' and 'patch' are all mapped to POST.
        if (options.emulateHTTP && c.httpMethod !== "GET") {
            c.httpMethodOverride = c.httpMethod;
            c.httpMethod = "POST";
        }

        // Ensure that we have a URL (A `url` property whithin options overrides Model /
        //  Collection URL)
        if(!(c.url = options.url || _.result(model, "url"))) {
            throw new Error("sync: Undefined 'url' property or function of Model / Collection");
        }

        // Find route for given URL or fall back to native sync if none found

        if (!(c.route = getMatchingRoute(c.url, c.httpMethod) || defaultRoute)) {
            return nativeSync.call(model, crudMethod, model, options);
        }

        // Ensure that we have the appropriate request data
        c.data = getRequestData(c.httpMethod, model, options);

        // Create a transport for this sync
        transport = createTransport(options, c);

        // An exec-method to actually run the handler and subsequently invoke success / error
        //  callbacks. (The relevant 'success' or 'error' event will be triggered by backbone)
        execHandler = function () {
            /*var result = c.route.handler.apply(null, [c].concat(c.route.handlerParams)); // Handle
            transport[_.isString(result) ? "reject" : "resolve"](result);*/

            $.when(c.route.handler.apply(null, [c].concat(c.route.handlerParams))).always(function(result){
                transport[_.isString(result) ? "reject" : "resolve"](result);
            })

        };

        model.trigger("request", model, null, options);

        // Call exec-method _now_ if zero-latency, else call later
        if (!latency) { execHandler(); }
        else { setTimeout(execHandler, _.isFunction(latency) ? latency() : latency); }

        // Return the transport's promise. Assuming the default transport-factory implementation
        //  this may be an actual promise or just undefined
        return transport.promise();
    };

    // Attach methods to faux-server
    _.extend(fauxServer, {

        /**
         * Add a route to the faux-server. Every route defines a mapping from a
         *  Model(or Collection)-URL & sync-method (an HTTP verb (POST, GET, PUT, PATCH or DELETE))
         *  to some specific handler (callback):
         *  `<model-URL, sync-method> -> handler`
         *  So whenever a Model is created, read, updated or deleted, its URL and the the sync
         *  method being used is tested against defined routes in order to find a handler for
         *  creating, reading, updating or deleting this Model. The same applies to reading
         *  Collections: Whenever a Collection is read, its URL (and the 'read' method) is tested
         *  against defined routes in order to find a handler for reading it. When a match for
         *  the <model-URL, sync-method> pair is not found among defined routes, the native sync
         *  is invoked (this behaviour may be overriden - see fauxServer.setDefaultHandler).
         *  Later routes take precedence over earlier routes so in configurations where multiple
         *  routes match, the one most recently defined will be used.
         * @param {string} name The name of the route. Optional
         * @param {string|RegExp} urlExp An expression against which, Model(or Collection)-URLs will
         *  be tested. This is syntactically and functionally analogous to Backbone routes: urlExps
         *  may contain parameter parts, ':param', which match a single URL component between
         *  slashes; and splat parts '*splat', which can match any number of URL components.
         *  Parentheses may also be used to denote optional parts. The values captured by params
         *  and splats will be passed as parameters to the given handler method.
         *  (see http://backbonejs.org/#Router-routes). Regular expressions may also be
         *  used, in which case all values captured by reg-exp capturing groups will be passed as
         *  parameters to the given handler method.  Note that `:param`s are required to begin with
         *  a letter or underscore - those that don't are treated as a fixed part of the URL
         * @param {string} [httpMethod="*"] The sync method (an HTTP verb (POST, GET, PUT, PATCH or
         *  DELETE)), that should trigger the route's handler. Both the URL-expression and the
         *  method should match for the handler to be invoked. httpMethod may also be set to '*' to
         *  create a match-all-methods handler: One that will be invoked whenever urlExp matches the
         *  model's (or collection's) URL _regardless_ of method. Omitting the parameter has the
         *  same effect. In the scope of a match-all-methods handler, the HTTP method currently
         *  being handled may be acquired by querying the context parameter for context.httpMethod.
         *  Note that when Backbone.emulateHTTP is set to true or emulateHTTP is passed as an inline
         *  option during sync, 'create', 'update', 'delete' and 'patch' will all be mapped to POST.
         *  In this case context.httpMethod will be set to POST and the true HTTP method may be
         *  acquired by querying context.httpMethodOverride.
         * @param {function} [handler=no-op] The handler to be invoked when both route's URL and
         *  route's method match. A do-nothing handler will be used if one is not provided. Its
         *  signature should be
         *  `function (context, [param1, [param2, ...]])`
         *  where context contains properties `data`, `httpMethod`, `httpMethodOverride`, `route`
         *  and `param1`, `param2`, ... are parameters derived by matching the `urlExp` to the
         *  Model (or Collection) URL. Specifically, about context properties:
         *   * {any} `context.data`: Attributes of the Model (or Collection) being proccessed. Valid
         *      only on 'create' (POST), 'update' (PUT) or 'patch' (PATCH). In the specific case of
         *      PATCH, context.data may only contain a _subset_ of Model's attributes.
         *   * {string} `context.httpMethod`: The HTTP Method (POST, GET, PUT, PATCH, DELETE) that
         *      is currently being handled.
         *   * {string} `context.url`: The URL that is currently being handled.
         *   * {string} `context.httpMethodOverride`: The true HTTP Method (POST, GET, PUT, PATCH,
         *      DELETE) that is currently being handled when Backbone.emulateHTTP is set to true.
         *      The equivalent of [Backbone's](http://backbonejs.org/#Sync-emulateHTTP)
         *      X-HTTP-Method-Override header.
         *   * {object} `context.route`: The route that is currently being handled.
         *  On success: Return created Model attributes after handling a POST or updated Model
         *  attributes after handling a PUT or PATCH. Return Model attributes after handling a GET
         *  or an array of Model attributes after handling a GET that refers to a collection. Note
         *  that only attributes that have been changed on the server (and should be updated on the
         *  client) need to be included in returned hashes. Return nothing after handling a DELETE.
         *  On failure, the handler should return s string (presumably a custom error messsage, an
         *  HTTP status code that indicates failure, etc).
         * @return {object} The faux-server
         */
        addRoute: function (name, urlExp, httpMethod, handler) {
            var routeIndex = routes.length,

            // Create the route, setting missing arguments to defaults and sanitizing where
            //  appropriate - note that the only mandatory argument is `urlExp`
                route = (function (args) {
                    switch (args.length) {

                        // Missing `name`, `handler` or `httpMethod`
                        case 3:
                            if (_.isFunction(args[2])) { // Missing `name` or `httpMethod`
                                handler = args[2];
                                if (args[1] === "*" || _.contains(crudToHttp, args[1])) { // Missing `name`
                                    urlExp = args[0];
                                    httpMethod = args[1];
                                    name = null;
                                } else { // Missing httpMethod
                                    httpMethod = "*";
                                }
                            } else { // Missing handler
                                handler = noOp;
                            }
                            break;

                        // Missing `name` & `httpMethod`, `httpMethod` & `handler` or `name` & `handler`
                        case 2:
                            if (_.isFunction(args[1])) { // Missing `name` & `httpMethod`
                                urlExp = args[0];
                                handler = args[1];
                                httpMethod = "*";
                                name = null;
                            } else { // Missing `name` & `handler` or `httpMethod` & `handler`
                                handler = noOp;
                                if (args[1] === "*" || _.contains(crudToHttp, args[1])) { // Missing `name` & `handler`
                                    urlExp = args[0];
                                    httpMethod = args[1];
                                    name = null;
                                } else { // Missing `httpMethod` & `handler`
                                    httpMethod = "*";
                                }
                            }
                            break;

                        // Missing `name` & `httpMethod` & `handler`
                        case 1:
                            urlExp = args[0];
                            httpMethod = "*";
                            handler = noOp;
                            name = null;
                            break;

                        case 0:
                            throw new Error("addRoute: Missing mandatory 'urlExp' argument");
                    }

                    httpMethod = httpMethod.toUpperCase();
                    urlExp = _.isRegExp(urlExp) ? urlExp : makeRegExp(urlExp);

                    return {
                        name: name || _.uniqueId(httpMethod + "_" + urlExp + "_"),
                        urlExp: urlExp,
                        httpMethod: httpMethod,
                        handler: handler
                    };
                }(skipUndefinedTail(_.toArray(arguments))));

            // If a route of given name is already present then overwrite it with this one.
            //  Otherwise just append the new route
            _.any(routes, function (r, i) {
                if (r.name === route.name) {
                    routeIndex = i;
                    return true;
                }
            });
            routes[routeIndex] = route;

            return this;
        },

        /**
         * Add multiple routes to the faux-server
         * @param {object|array} routesToAdd A hash or array of routes to add. When passing a hash,
         *  keys should be route names and each route (nested hash) need only contain urlExp,
         *  httpMethod, handler. See addRoute().
         * @return {object} The faux-server
         */
        addRoutes: function (routesToAdd) {
            var isArray = _.isArray(routesToAdd);
            _.each(routesToAdd, function (r, rName) {
                this.addRoute(isArray ? r.name : rName, r.urlExp, r.httpMethod, r.handler);
            }, this);
            return this;
        },

        /**
         * Remove route of given name
         * @param  {string} routeName Name of route to remove
         * @return {object} The faux-server
         */
        removeRoute: function (routeName) {
            routes = _.reject(routes, function (r) { return r.name === routeName; });
            return this;
        },

        /**
         * Remove all previously defined routes
         * @return {object} The faux-server
         */
        removeRoutes: function () {
            routes = [];
            return this;
        },

        /**
         * Get route of specified name
         * @param  {string} routeName Name of route to acquire
         * @return {object} Route of specified name or null if no such route exists. Note that
         *  the returned route is a copy and cannot be modified to alter faux-server's behaviour
         */
        getRoute: function (routeName) {
            var route = _.find(routes, function (r) { return r.name === routeName; });
            return route ? _.clone(route) : null;
        },

        /**
         * Get route at specified index
         * @param  {int} routeIndex Index of route to acquire
         * @return {object} Route at specified index or null if no such route exists. Note that
         *  the returned route is a copy and cannot be modified to alter faux-server's behaviour
         */
        getRouteAt: function (routeIndex) {
            return routes[routeIndex] ? _.clone(routes[routeIndex]) : null;
        },

        /**
         * Get a route matching the given <URL, HTTP-method> pair. See closed-over getMatchingRoute
         */
        getMatchingRoute: getMatchingRoute,

        /**
         * Set a handler to be invoked when no route is matched to the current
         *  <model-URL, sync-method> pair. This will override the default behaviour of invoking the
         *  native sync.
         * @param {any} handler A handler to be invoked when no route is found that matches a given
         *  <model-URL, sync-method> pair. Ommit the parameter to reset to the default behaviour.
         *  See addRoute for handler's signature and semantics. Note that a default-handler isn't
         *  part of a route, so the context.route parameter will not be valid.
         * @return {object} The faux-server
         */
        setDefaultHandler: function (handler) {
            defaultRoute = !handler ? null : {
                name: "",
                urlExp: "",
                handler: handler,
                handlerParams: []
            };
            return this;
        },

        /**
         * Set server's emulated latency
         * @param {number} min Server's emulated latency in ms. Interpreted as the minimum of a
         *  range when a 'max' value is provided. Ommitting will set to 0
         * @param {number} max Maximum server latency in ms. Specifying this parameter will cause
         *  syncing to occur with a random latency in the [min, max] range
         * @return {object} The faux-server
         */
        setLatency: function (min, max) {
            latency = !max ? (min || 0) : function () { return min + Math.random() * (max - min); };
            return this;
        },

        /*
         * Set server's transport factory
         * @param {object} transportFactory A factory function with signature
         *  `function (syncOptions, syncContext)`
         *  invoked _per sync_ (with the relevant options / context) to create a new transport - a
         *  deferred-like object implementing a `promise` / `resolve` / `reject` interface. A
         *  successfull sync will invoke `transport.resolve` while a failed one will invoke
         *  `transport.reject` The sync method will always return `transport.promise()`
         * @return {object} The faux-server
         */
        setTransportFactory: function (transportFactory) {
            createTransport = transportFactory;
            return this;
        },

        /**
         * Enable or disable the faux-server. When the faux-server is disabled, syncing is performed
         *  by the native Backbone sync method. Handy for easily toggling between mock / real server
         * @param {bool} shouldEnable Indicates whether the faux-server should be enabled
         *  or disabled. Set to true or ommit altogether to enable, set to false to disable
         * @return {object} The faux-server
         */
        enable: function (shouldEnable) {
            isEnabled = _.isUndefined(shouldEnable) || shouldEnable;
            return this;
        },

        /**
         * Get current version of the library
         * @return {string} Current version of the library
         */
        getVersion: function () {
            return "0.10.3"; // Keep in sync with package.json
        }
    });

    // Attach <httpMethod>(name, urlExp, handler) methods to faux-server (`get`, `post`, `put`,
    //  `patch` and `del`). These all delegate to addRoute
    _.each(_.values(crudToHttp), function (httpMethod) {

        // All shortcut-methods are named after the relevant HTTP verb except for 'delete' which is
        //  abbreviated to 'del' in order to avoid reserved word awkwardness
        var method = httpMethod === "DELETE" ? "del" : httpMethod.toLowerCase();
        fauxServer[method] = function () {
            // Expecting `name`, `urlExp`, `handler` arguments. Only `urlExp` is mandatory
            var args = skipUndefinedTail(_.toArray(arguments));

            if (!args.length) { throw new Error(method + ": Missing mandatory 'urlExp' argument"); }

            // The `httpMethod` must be inserted into the args, either at tail-position if
            //  `handler` is missing or just before it (after `urlExp`) if it's present
            if (!_.isFunction(args[args.length - 1])) { args.push(httpMethod); }
            else { args.splice(args.length - 1, 0, httpMethod); }

            return fauxServer.addRoute.apply(this, args);
        };
    });

    return fauxServer;
}));
// Backbone.Syphon, v0.4.1
// Copyright (c)2012 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
// http://github.com/derickbailey/backbone.syphon
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('backbone.syphon',['underscore', "jquery", "backbone_clear"], factory);
    }
}(this, function (_, jQuery, Backbone) {
    Backbone.Syphon = (function(Backbone, $, _){
        var Syphon = {};

        // Ignore Element Types
        // --------------------

        // Tell Syphon to ignore all elements of these types. You can
        // push new types to ignore directly in to this array.
        Syphon.ignoredTypes = ["button", "submit", "reset", "fieldset"];

        // Syphon
        // ------

        // Get a JSON object that represents
        // all of the form inputs, in this view.
        // Alternately, pass a form element directly
        // in place of the view.
        Syphon.serialize = function(view, options){
            var data = {};

            // Build the configuration
            var config = buildConfig(options);

            // Get all of the elements to process
            var elements = getInputElements(view, config);

            // Process all of the elements
            _.each(elements, function(el){
                var $el = $(el);
                var type = getElementType($el);

                // Get the key for the input
                var keyExtractor = config.keyExtractors.get(type);
                var key = keyExtractor($el);

                // Get the value for the input
                var inputReader = config.inputReaders.get(type);
                var value = inputReader($el);

                // Get the key assignment validator and make sure
                // it's valid before assigning the value to the key
                var validKeyAssignment = config.keyAssignmentValidators.get(type);
                if (validKeyAssignment($el, key, value)){
                    var keychain = config.keySplitter(key);
                    data = assignKeyValue(data, keychain, value);
                }
            });

            // Done; send back the results.
            return data;
        };

        // Use the given JSON object to populate
        // all of the form inputs, in this view.
        // Alternately, pass a form element directly
        // in place of the view.
        Syphon.deserialize = function(view, data, options){
            // Build the configuration
            var config = buildConfig(options);

            // Get all of the elements to process
            var elements = getInputElements(view, config);

            // Flatten the data structure that we are deserializing
            var flattenedData = flattenData(config, data);

            // Process all of the elements
            _.each(elements, function(el){
                var $el = $(el);
                var type = getElementType($el);

                // Get the key for the input
                var keyExtractor = config.keyExtractors.get(type);
                var key = keyExtractor($el);

                // Get the input writer and the value to write
                var inputWriter = config.inputWriters.get(type);
                var value = flattenedData[key];

                // Write the value to the input
                inputWriter($el, value);
            });
        };

        // Helpers
        // -------

        // Retrieve all of the form inputs
        // from the form
        var getInputElements = function(view, config){
            var form = getForm(view);
            var elements = form.elements;

            elements = _.reject(elements, function(el){
                var reject;
                var type = getElementType(el);
                var extractor = config.keyExtractors.get(type);
                var identifier = extractor($(el));

                var foundInIgnored = _.include(config.ignoredTypes, type);
                var foundInInclude = _.include(config.include, identifier);
                var foundInExclude = _.include(config.exclude, identifier);

                if (foundInInclude){
                    reject = false;
                } else {
                    if (config.include){
                        reject = true;
                    } else {
                        reject = (foundInExclude || foundInIgnored);
                    }
                }

                return reject;
            });

            return elements;
        };

        // Determine what type of element this is. It
        // will either return the `type` attribute of
        // an `<input>` element, or the `tagName` of
        // the element when the element is not an `<input>`.
        var getElementType = function(el){
            var typeAttr;
            var $el = $(el);
            var tagName = $el[0].tagName;
            var type = tagName;

            if (tagName.toLowerCase() === "input"){
                typeAttr = $el.attr("type");
                if (typeAttr){
                    type = typeAttr;
                } else {
                    type = "text";
                }
            }

            // Always return the type as lowercase
            // so it can be matched to lowercase
            // type registrations.
            return type.toLowerCase();
        };

        // If a form element is given, just return it.
        // Otherwise, get the form element from the view.
        var getForm = function(viewOrForm){
            if (_.isUndefined(viewOrForm.$el) && viewOrForm.tagName.toLowerCase() === 'form'){
                return viewOrForm;
            } else {
                return viewOrForm.$el.is("form") ? viewOrForm.el : viewOrForm.$("form")[0];
            }
        };

        // Build a configuration object and initialize
        // default values.
        var buildConfig = function(options){
            var config = _.clone(options) || {};

            config.ignoredTypes = _.clone(Syphon.ignoredTypes);
            config.inputReaders = config.inputReaders || Syphon.InputReaders;
            config.inputWriters = config.inputWriters || Syphon.InputWriters;
            config.keyExtractors = config.keyExtractors || Syphon.KeyExtractors;
            config.keySplitter = config.keySplitter || Syphon.KeySplitter;
            config.keyJoiner = config.keyJoiner || Syphon.KeyJoiner;
            config.keyAssignmentValidators = config.keyAssignmentValidators || Syphon.KeyAssignmentValidators;

            return config;
        };

        // Assigns `value` to a parsed JSON key.
        //
        // The first parameter is the object which will be
        // modified to store the key/value pair.
        //
        // The second parameter accepts an array of keys as a
        // string with an option array containing a
        // single string as the last option.
        //
        // The third parameter is the value to be assigned.
        //
        // Examples:
        //
        // `["foo", "bar", "baz"] => {foo: {bar: {baz: "value"}}}`
        //
        // `["foo", "bar", ["baz"]] => {foo: {bar: {baz: ["value"]}}}`
        //
        // When the final value is an array with a string, the key
        // becomes an array, and values are pushed in to the array,
        // allowing multiple fields with the same name to be
        // assigned to the array.
        var assignKeyValue = function(obj, keychain, value) {
            if (!keychain){ return obj; }

            var key = keychain.shift();

            // build the current object we need to store data
            if (!obj[key]){
                obj[key] = _.isArray(key) ? [] : {};
            }

            // if it's the last key in the chain, assign the value directly
            if (keychain.length === 0){
                if (_.isArray(obj[key])){
                    obj[key].push(value);
                } else {
                    obj[key] = value;
                }
            }

            // recursive parsing of the array, depth-first
            if (keychain.length > 0){
                assignKeyValue(obj[key], keychain, value);
            }

            return obj;
        };

        // Flatten the data structure in to nested strings, using the
        // provided `KeyJoiner` function.
        //
        // Example:
        //
        // This input:
        //
        // ```js
        // {
        //   widget: "wombat",
        //   foo: {
        //     bar: "baz",
        //     baz: {
        //       quux: "qux"
        //     },
        //     quux: ["foo", "bar"]
        //   }
        // }
        // ```
        //
        // With a KeyJoiner that uses [ ] square brackets,
        // should produce this output:
        //
        // ```js
        // {
        //  "widget": "wombat",
        //  "foo[bar]": "baz",
        //  "foo[baz][quux]": "qux",
        //  "foo[quux]": ["foo", "bar"]
        // }
        // ```
        var flattenData = function(config, data, parentKey){
            var flatData = {};

            _.each(data, function(value, keyName){
                var hash = {};

                // If there is a parent key, join it with
                // the current, child key.
                if (parentKey){
                    keyName = config.keyJoiner(parentKey, keyName);
                }

                if (_.isArray(value)){
                    keyName += "[]";
                    hash[keyName] = value;
                } else if (_.isObject(value)){
                    hash = flattenData(config, value, keyName);
                } else {
                    hash[keyName] = value;
                }

                // Store the resulting key/value pairs in the
                // final flattened data object
                _.extend(flatData, hash);
            });

            return flatData;
        };

        return Syphon;
    })(Backbone, jQuery, _);

    // Type Registry
    // -------------

    // Type Registries allow you to register something to
    // an input type, and retrieve either the item registered
    // for a specific type or the default registration
    Backbone.Syphon.TypeRegistry = function(){
        this.registeredTypes = {};
    };

    // Borrow Backbone's `extend` keyword for our TypeRegistry
    Backbone.Syphon.TypeRegistry.extend = Backbone.Model.extend;

    _.extend(Backbone.Syphon.TypeRegistry.prototype, {

        // Get the registered item by type. If nothing is
        // found for the specified type, the default is
        // returned.
        get: function(type){
            var item = this.registeredTypes[type];

            if (!item){
                item = this.registeredTypes["default"];
            }

            return item;
        },

        // Register a new item for a specified type
        register: function(type, item){
            this.registeredTypes[type] = item;
        },

        // Register a default item to be used when no
        // item for a specified type is found
        registerDefault: function(item){
            this.registeredTypes["default"] = item;
        },

        // Remove an item from a given type registration
        unregister: function(type){
            if (this.registeredTypes[type]){
                delete this.registeredTypes[type];
            }
        }
    });




    // Key Extractors
    // --------------

    // Key extractors produce the "key" in `{key: "value"}`
    // pairs, when serializing.
    Backbone.Syphon.KeyExtractorSet = Backbone.Syphon.TypeRegistry.extend();

    // Built-in Key Extractors
    Backbone.Syphon.KeyExtractors = new Backbone.Syphon.KeyExtractorSet();

    // The default key extractor, which uses the
    // input element's "id" attribute
    Backbone.Syphon.KeyExtractors.registerDefault(function($el){
        return $el.prop("name");
    });


    // Input Readers
    // -------------

    // Input Readers are used to extract the value from
    // an input element, for the serialized object result
    Backbone.Syphon.InputReaderSet = Backbone.Syphon.TypeRegistry.extend();

    // Built-in Input Readers
    Backbone.Syphon.InputReaders = new Backbone.Syphon.InputReaderSet();

    // The default input reader, which uses an input
    // element's "value"
    Backbone.Syphon.InputReaders.registerDefault(function($el){
        return $el.val();
    });

    // Checkbox reader, returning a boolean value for
    // whether or not the checkbox is checked.
    Backbone.Syphon.InputReaders.register("checkbox", function($el){
        var checked = $el.prop("checked");
        return checked;
    });


    // Input Writers
    // -------------

    // Input Writers are used to insert a value from an
    // object into an input element.
    Backbone.Syphon.InputWriterSet = Backbone.Syphon.TypeRegistry.extend();

    // Built-in Input Writers
    Backbone.Syphon.InputWriters = new Backbone.Syphon.InputWriterSet();

    // The default input writer, which sets an input
    // element's "value"
    Backbone.Syphon.InputWriters.registerDefault(function($el, value){
        $el.val(value);
    });

    // Checkbox writer, set whether or not the checkbox is checked
    // depending on the boolean value.
    Backbone.Syphon.InputWriters.register("checkbox", function($el, value){
        $el.prop("checked", value);
    });

    // Radio button writer, set whether or not the radio button is
    // checked.  The button should only be checked if it's value
    // equals the given value.
    Backbone.Syphon.InputWriters.register("radio", function($el, value){
        $el.prop("checked", $el.val() === value);
    });

    // Key Assignment Validators
    // -------------------------

    // Key Assignment Validators are used to determine whether or not a
    // key should be assigned to a value, after the key and value have been
    // extracted from the element. This is the last opportunity to prevent
    // bad data from getting serialized to your object.

    Backbone.Syphon.KeyAssignmentValidatorSet = Backbone.Syphon.TypeRegistry.extend();

    // Build-in Key Assignment Validators
    Backbone.Syphon.KeyAssignmentValidators = new Backbone.Syphon.KeyAssignmentValidatorSet();

    // Everything is valid by default
    Backbone.Syphon.KeyAssignmentValidators.registerDefault(function(){ return true; });

    // But only the "checked" radio button for a given
    // radio button group is valid
    Backbone.Syphon.KeyAssignmentValidators.register("radio", function($el, key, value){
        return $el.prop("checked");
    });


    // Backbone.Syphon.KeySplitter
    // ---------------------------

    // This function is used to split DOM element keys in to an array
    // of parts, which are then used to create a nested result structure.
    // returning `["foo", "bar"]` results in `{foo: { bar: "value" }}`.
    //
    // Override this method to use a custom key splitter, such as:
    // `<input name="foo.bar.baz">`, `return key.split(".")`
    Backbone.Syphon.KeySplitter = function(key){
        var matches = key.match(/[^\[\]]+/g);

        if (key.indexOf("[]") === key.length - 2){
            lastKey = matches.pop();
            matches.push([lastKey]);
        }

        return matches;
    }


    // Backbone.Syphon.KeyJoiner
    // -------------------------

    // Take two segments of a key and join them together, to create the
    // de-normalized key name, when deserializing a data structure back
    // in to a form.
    //
    // Example:
    //
    // With this data strucutre `{foo: { bar: {baz: "value", quux: "another"} } }`,
    // the key joiner will be called with these parameters, and assuming the
    // join happens with "[ ]" square brackets, the specified output:
    //
    // `KeyJoiner("foo", "bar")` //=> "foo[bar]"
    // `KeyJoiner("foo[bar]", "baz")` //=> "foo[bar][baz]"
    // `KeyJoiner("foo[bar]", "quux")` //=> "foo[bar][quux]"

    Backbone.Syphon.KeyJoiner = function(parentKey, childKey){
        return parentKey + "[" + childKey + "]";
    }


    return Backbone.Syphon;
}));
define('backbone',[
    'backbone.wreqr',
    'backbone.babysitter',
    'backbone.queryparam',
    'backbone.routefilter',
    'backbone.validation',
    'backbone.stickit',
    'backbone.server',
    'backbone.syphon'
], function(Backbone) {
    return Backbone;
});
// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v1.8.3
//
// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com

(function (root, factory) {
  if (typeof exports === 'object') {

      var underscore = require('underscore');
      var backbone = require('backbone');

      module.exports = factory(underscore, backbone);

  } else if (typeof define === 'function' && define.amd) {

    define('marionette',['underscore', 'backbone'], factory);

  }
}(this, function (_, Backbone) {

  var Marionette = (function(global, Backbone, _){
    
  
    // Define and export the Marionette namespace
    var Marionette = {};
    Backbone.Marionette = Marionette;
  
    // Get the DOM manipulator for later use
    Marionette.$ = Backbone.$;
  
  // Helpers
  // -------
  
  // For slicing `arguments` in functions
  var slice = Array.prototype.slice;
  
  function throwError(message, name) {
    var error = new Error(message);
    error.name = name || 'Error';
    throw error;
  }
  
  // Marionette.extend
  // -----------------
  
  // Borrow the Backbone `extend` method so we can use it as needed
  Marionette.extend = Backbone.Model.extend;
  
  // Marionette.getOption
  // --------------------
  
  // Retrieve an object, function or other value from a target
  // object or its `options`, with `options` taking precedence.
  Marionette.getOption = function(target, optionName){
    if (!target || !optionName){ return; }
    var value;
  
    if (target.options && (optionName in target.options) && (target.options[optionName] !== undefined)){
      value = target.options[optionName];
    } else {
      value = target[optionName];
    }
  
    return value;
  };
  
  // Marionette.normalizeMethods
  // ----------------------
  
  // Pass in a mapping of events => functions or function names
  // and return a mapping of events => functions
  Marionette.normalizeMethods = function(hash) {
    var normalizedHash = {}, method;
    _.each(hash, function(fn, name) {
      method = fn;
      if (!_.isFunction(method)) {
        method = this[method];
      }
      if (!method) {
        return;
      }
      normalizedHash[name] = method;
    }, this);
    return normalizedHash;
  };
  
  
  // allows for the use of the @ui. syntax within
  // a given key for triggers and events
  // swaps the @ui with the associated selector
  Marionette.normalizeUIKeys = function(hash, ui) {
    if (typeof(hash) === "undefined") {
      return;
    }
  
    _.each(_.keys(hash), function(v) {
      var pattern = /@ui.[a-zA-Z_$0-9]*/g;
      if (v.match(pattern)) {
        hash[v.replace(pattern, function(r) {
          return ui[r.slice(4)];
        })] = hash[v];
        delete hash[v];
      }
    });
  
    return hash;
  };
  
  // Mix in methods from Underscore, for iteration, and other
  // collection related features.
  // Borrowing this code from Backbone.Collection:
  // http://backbonejs.org/docs/backbone.html#section-106
  Marionette.actAsCollection = function(object, listProperty) {
    var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
      'select', 'reject', 'every', 'all', 'some', 'any', 'include',
      'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
      'last', 'without', 'isEmpty', 'pluck'];
  
    _.each(methods, function(method) {
      object[method] = function() {
        var list = _.values(_.result(this, listProperty));
        var args = [list].concat(_.toArray(arguments));
        return _[method].apply(_, args);
      };
    });
  };
  
  // Trigger an event and/or a corresponding method name. Examples:
  //
  // `this.triggerMethod("foo")` will trigger the "foo" event and
  // call the "onFoo" method.
  //
  // `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
  // call the "onFooBar" method.
  Marionette.triggerMethod = (function(){
  
    // split the event name on the ":"
    var splitter = /(^|:)(\w)/gi;
  
    // take the event section ("section1:section2:section3")
    // and turn it in to uppercase name
    function getEventName(match, prefix, eventName) {
      return eventName.toUpperCase();
    }
  
    // actual triggerMethod implementation
    var triggerMethod = function(event) {
      // get the method name from the event name
      var methodName = 'on' + event.replace(splitter, getEventName);
      var method = this[methodName];
  
      // trigger the event, if a trigger method exists
      if(_.isFunction(this.trigger)) {
        this.trigger.apply(this, arguments);
      }
  
      // call the onMethodName if it exists
      if (_.isFunction(method)) {
        // pass all arguments, except the event name
        return method.apply(this, _.tail(arguments));
      }
    };
  
    return triggerMethod;
  })();
  
  // DOMRefresh
  // ----------
  //
  // Monitor a view's state, and after it has been rendered and shown
  // in the DOM, trigger a "dom:refresh" event every time it is
  // re-rendered.
  
  Marionette.MonitorDOMRefresh = (function(documentElement){
    // track when the view has been shown in the DOM,
    // using a Marionette.Region (or by other means of triggering "show")
    function handleShow(view){
      view._isShown = true;
      triggerDOMRefresh(view);
    }
  
    // track when the view has been rendered
    function handleRender(view){
      view._isRendered = true;
      triggerDOMRefresh(view);
    }
  
    // Trigger the "dom:refresh" event and corresponding "onDomRefresh" method
    function triggerDOMRefresh(view){
      if (view._isShown && view._isRendered && isInDOM(view)){
        if (_.isFunction(view.triggerMethod)){
          view.triggerMethod("dom:refresh");
        }
      }
    }
  
    function isInDOM(view) {
      return documentElement.contains(view.el);
    }
  
    // Export public API
    return function(view){
      view.listenTo(view, "show", function(){
        handleShow(view);
      });
  
      view.listenTo(view, "render", function(){
        handleRender(view);
      });
    };
  })(document.documentElement);
  
  
  // Marionette.bindEntityEvents & unbindEntityEvents
  // ---------------------------
  //
  // These methods are used to bind/unbind a backbone "entity" (collection/model)
  // to methods on a target object.
  //
  // The first parameter, `target`, must have a `listenTo` method from the
  // EventBinder object.
  //
  // The second parameter is the entity (Backbone.Model or Backbone.Collection)
  // to bind the events from.
  //
  // The third parameter is a hash of { "event:name": "eventHandler" }
  // configuration. Multiple handlers can be separated by a space. A
  // function can be supplied instead of a string handler name.
  
  (function(Marionette){
    
  
    // Bind the event to handlers specified as a string of
    // handler names on the target object
    function bindFromStrings(target, entity, evt, methods){
      var methodNames = methods.split(/\s+/);
  
      _.each(methodNames, function(methodName) {
  
        var method = target[methodName];
        if(!method) {
          throwError("Method '"+ methodName +"' was configured as an event handler, but does not exist.");
        }
  
        target.listenTo(entity, evt, method);
      });
    }
  
    // Bind the event to a supplied callback function
    function bindToFunction(target, entity, evt, method){
        target.listenTo(entity, evt, method);
    }
  
    // Bind the event to handlers specified as a string of
    // handler names on the target object
    function unbindFromStrings(target, entity, evt, methods){
      var methodNames = methods.split(/\s+/);
  
      _.each(methodNames, function(methodName) {
        var method = target[methodName];
        target.stopListening(entity, evt, method);
      });
    }
  
    // Bind the event to a supplied callback function
    function unbindToFunction(target, entity, evt, method){
        target.stopListening(entity, evt, method);
    }
  
  
    // generic looping function
    function iterateEvents(target, entity, bindings, functionCallback, stringCallback){
      if (!entity || !bindings) { return; }
  
      // allow the bindings to be a function
      if (_.isFunction(bindings)){
        bindings = bindings.call(target);
      }
  
      // iterate the bindings and bind them
      _.each(bindings, function(methods, evt){
  
        // allow for a function as the handler,
        // or a list of event names as a string
        if (_.isFunction(methods)){
          functionCallback(target, entity, evt, methods);
        } else {
          stringCallback(target, entity, evt, methods);
        }
  
      });
    }
  
    // Export Public API
    Marionette.bindEntityEvents = function(target, entity, bindings){
      iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
    };
  
    Marionette.unbindEntityEvents = function(target, entity, bindings){
      iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
    };
  
  })(Marionette);
  
  
  // Callbacks
  // ---------
  
  // A simple way of managing a collection of callbacks
  // and executing them at a later point in time, using jQuery's
  // `Deferred` object.
  Marionette.Callbacks = function(){
    this._deferred = Marionette.$.Deferred();
    this._callbacks = [];
  };
  
  _.extend(Marionette.Callbacks.prototype, {
  
    // Add a callback to be executed. Callbacks added here are
    // guaranteed to execute, even if they are added after the
    // `run` method is called.
    add: function(callback, contextOverride){
      this._callbacks.push({cb: callback, ctx: contextOverride});
  
      this._deferred.done(function(context, options){
        if (contextOverride){ context = contextOverride; }
        callback.call(context, options);
      });
    },
  
    // Run all registered callbacks with the context specified.
    // Additional callbacks can be added after this has been run
    // and they will still be executed.
    run: function(options, context){
      this._deferred.resolve(context, options);
    },
  
    // Resets the list of callbacks to be run, allowing the same list
    // to be run multiple times - whenever the `run` method is called.
    reset: function(){
      var callbacks = this._callbacks;
      this._deferred = Marionette.$.Deferred();
      this._callbacks = [];
  
      _.each(callbacks, function(cb){
        this.add(cb.cb, cb.ctx);
      }, this);
    }
  });
  
  // Marionette Controller
  // ---------------------
  //
  // A multi-purpose object to use as a controller for
  // modules and routers, and as a mediator for workflow
  // and coordination of other objects, views, and more.
  Marionette.Controller = function(options){
    this.triggerMethod = Marionette.triggerMethod;
    this.options = options || {};
  
    if (_.isFunction(this.initialize)){
      this.initialize(this.options);
    }
  };
  
  Marionette.Controller.extend = Marionette.extend;
  
  // Controller Methods
  // --------------
  
  // Ensure it can trigger events with Backbone.Events
  _.extend(Marionette.Controller.prototype, Backbone.Events, {
    close: function(){
      this.stopListening();
      var args = Array.prototype.slice.call(arguments);
      this.triggerMethod.apply(this, ["close"].concat(args));
      this.off();
    }
  });
  
  // Region
  // ------
  //
  // Manage the visual regions of your composite application. See
  // http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/
  
  Marionette.Region = function(options){
    this.options = options || {};
    this.el = Marionette.getOption(this, "el");
  
    if (!this.el){
      throwError("An 'el' must be specified for a region.", "NoElError");
    }
  
    if (this.initialize){
      var args = Array.prototype.slice.apply(arguments);
      this.initialize.apply(this, args);
    }
  };
  
  
  // Region Type methods
  // -------------------
  
  _.extend(Marionette.Region, {
  
    // Build an instance of a region by passing in a configuration object
    // and a default region type to use if none is specified in the config.
    //
    // The config object should either be a string as a jQuery DOM selector,
    // a Region type directly, or an object literal that specifies both
    // a selector and regionType:
    //
    // ```js
    // {
    //   selector: "#foo",
    //   regionType: MyCustomRegion
    // }
    // ```
    //
    buildRegion: function(regionConfig, defaultRegionType){
      var regionIsString = _.isString(regionConfig);
      var regionSelectorIsString = _.isString(regionConfig.selector);
      var regionTypeIsUndefined = _.isUndefined(regionConfig.regionType);
      var regionIsType = _.isFunction(regionConfig);
  
      if (!regionIsType && !regionIsString && !regionSelectorIsString) {
        throwError("Region must be specified as a Region type, a selector string or an object with selector property");
      }
  
      var selector, RegionType;
  
      // get the selector for the region
  
      if (regionIsString) {
        selector = regionConfig;
      }
  
      if (regionConfig.selector) {
        selector = regionConfig.selector;
        delete regionConfig.selector;
      }
  
      // get the type for the region
  
      if (regionIsType){
        RegionType = regionConfig;
      }
  
      if (!regionIsType && regionTypeIsUndefined) {
        RegionType = defaultRegionType;
      }
  
      if (regionConfig.regionType) {
        RegionType = regionConfig.regionType;
        delete regionConfig.regionType;
      }
  
      if (regionIsString || regionIsType) {
        regionConfig = {};
      }
  
      regionConfig.el = selector;
  
      // build the region instance
      var region = new RegionType(regionConfig);
  
      // override the `getEl` function if we have a parentEl
      // this must be overridden to ensure the selector is found
      // on the first use of the region. if we try to assign the
      // region's `el` to `parentEl.find(selector)` in the object
      // literal to build the region, the element will not be
      // guaranteed to be in the DOM already, and will cause problems
      if (regionConfig.parentEl){
        region.getEl = function(selector) {
          var parentEl = regionConfig.parentEl;
          if (_.isFunction(parentEl)){
            parentEl = parentEl();
          }
          return parentEl.find(selector);
        };
      }
  
      return region;
    }
  
  });
  
  // Region Instance Methods
  // -----------------------
  
  _.extend(Marionette.Region.prototype, Backbone.Events, {
  
    // Displays a backbone view instance inside of the region.
    // Handles calling the `render` method for you. Reads content
    // directly from the `el` attribute. Also calls an optional
    // `onShow` and `close` method on your view, just after showing
    // or just before closing the view, respectively.
    // The `preventClose` option can be used to prevent a view from being destroyed on show.
    show: function(view, options){
      this.ensureEl();
  
      var showOptions = options || {};
      var isViewClosed = view.isClosed || _.isUndefined(view.$el);
      var isDifferentView = view !== this.currentView;
      var preventClose =  !!showOptions.preventClose;
  
      // only close the view if we don't want to preventClose and the view is different
      var _shouldCloseView = !preventClose && isDifferentView;
  
      if (_shouldCloseView) {
        this.close();
      }
  
      view.render();
      Marionette.triggerMethod.call(this, "before:show", view);
      Marionette.triggerMethod.call(view, "before:show");
  
      if (isDifferentView || isViewClosed) {
        this.open(view);
      }
  
      this.currentView = view;
  
      Marionette.triggerMethod.call(this, "show", view);
      Marionette.triggerMethod.call(view, "show");
    },
  
    ensureEl: function(){
      if (!this.$el || this.$el.length === 0){
        this.$el = this.getEl(this.el);
      }
    },
  
    // Override this method to change how the region finds the
    // DOM element that it manages. Return a jQuery selector object.
    getEl: function(selector){
      return Marionette.$(selector);
    },
  
    // Override this method to change how the new view is
    // appended to the `$el` that the region is managing
    open: function(view){
      this.$el.empty().append(view.el);
    },
  
    // Close the current view, if there is one. If there is no
    // current view, it does nothing and returns immediately.
    close: function(){
      var view = this.currentView;
      if (!view || view.isClosed){ return; }
  
      // call 'close' or 'remove', depending on which is found
      if (view.close) { view.close(); }
      else if (view.remove) { view.remove(); }
  
      Marionette.triggerMethod.call(this, "close", view);
  
      delete this.currentView;
    },
  
    // Attach an existing view to the region. This
    // will not call `render` or `onShow` for the new view,
    // and will not replace the current HTML for the `el`
    // of the region.
    attachView: function(view){
      this.currentView = view;
    },
  
    // Reset the region by closing any existing view and
    // clearing out the cached `$el`. The next time a view
    // is shown via this region, the region will re-query the
    // DOM for the region's `el`.
    reset: function(){
      this.close();
      delete this.$el;
    }
  });
  
  // Copy the `extend` function used by Backbone's classes
  Marionette.Region.extend = Marionette.extend;
  
  // Marionette.RegionManager
  // ------------------------
  //
  // Manage one or more related `Marionette.Region` objects.
  Marionette.RegionManager = (function(Marionette){
  
    var RegionManager = Marionette.Controller.extend({
      constructor: function(options){
        this._regions = {};
        Marionette.Controller.prototype.constructor.call(this, options);
      },
  
      // Add multiple regions using an object literal, where
      // each key becomes the region name, and each value is
      // the region definition.
      addRegions: function(regionDefinitions, defaults){
        var regions = {};
  
        _.each(regionDefinitions, function(definition, name){
          if (_.isString(definition)){
            definition = { selector: definition };
          }
  
          if (definition.selector){
            definition = _.defaults({}, definition, defaults);
          }
  
          var region = this.addRegion(name, definition);
          regions[name] = region;
        }, this);
  
        return regions;
      },
  
      // Add an individual region to the region manager,
      // and return the region instance
      addRegion: function(name, definition){
        var region;
  
        var isObject = _.isObject(definition);
        var isString = _.isString(definition);
        var hasSelector = !!definition.selector;
  
        if (isString || (isObject && hasSelector)){
          region = Marionette.Region.buildRegion(definition, Marionette.Region);
        } else if (_.isFunction(definition)){
          region = Marionette.Region.buildRegion(definition, Marionette.Region);
        } else {
          region = definition;
        }
  
        this._store(name, region);
        this.triggerMethod("region:add", name, region);
        return region;
      },
  
      // Get a region by name
      get: function(name){
        return this._regions[name];
      },
  
      // Remove a region by name
      removeRegion: function(name){
        var region = this._regions[name];
        this._remove(name, region);
      },
  
      // Close all regions in the region manager, and
      // remove them
      removeRegions: function(){
        _.each(this._regions, function(region, name){
          this._remove(name, region);
        }, this);
      },
  
      // Close all regions in the region manager, but
      // leave them attached
      closeRegions: function(){
        _.each(this._regions, function(region, name){
          region.close();
        }, this);
      },
  
      // Close all regions and shut down the region
      // manager entirely
      close: function(){
        this.removeRegions();
        Marionette.Controller.prototype.close.apply(this, arguments);
      },
  
      // internal method to store regions
      _store: function(name, region){
        this._regions[name] = region;
        this._setLength();
      },
  
      // internal method to remove a region
      _remove: function(name, region){
        region.close();
        region.stopListening();
        delete this._regions[name];
        this._setLength();
        this.triggerMethod("region:remove", name, region);
      },
  
      // set the number of regions current held
      _setLength: function(){
        this.length = _.size(this._regions);
      }
  
    });
  
    Marionette.actAsCollection(RegionManager.prototype, '_regions');
  
    return RegionManager;
  })(Marionette);
  
  
  // Template Cache
  // --------------
  
  // Manage templates stored in `<script>` blocks,
  // caching them for faster access.
  Marionette.TemplateCache = function(templateId){
    this.templateId = templateId;
  };
  
  // TemplateCache object-level methods. Manage the template
  // caches from these method calls instead of creating
  // your own TemplateCache instances
  _.extend(Marionette.TemplateCache, {
    templateCaches: {},
  
    // Get the specified template by id. Either
    // retrieves the cached version, or loads it
    // from the DOM.
    get: function(templateId){
      var cachedTemplate = this.templateCaches[templateId];
  
      if (!cachedTemplate){
        cachedTemplate = new Marionette.TemplateCache(templateId);
        this.templateCaches[templateId] = cachedTemplate;
      }
  
      return cachedTemplate.load();
    },
  
    // Clear templates from the cache. If no arguments
    // are specified, clears all templates:
    // `clear()`
    //
    // If arguments are specified, clears each of the
    // specified templates from the cache:
    // `clear("#t1", "#t2", "...")`
    clear: function(){
      var i;
      var args = slice.call(arguments);
      var length = args.length;
  
      if (length > 0){
        for(i=0; i<length; i++){
          delete this.templateCaches[args[i]];
        }
      } else {
        this.templateCaches = {};
      }
    }
  });
  
  // TemplateCache instance methods, allowing each
  // template cache object to manage its own state
  // and know whether or not it has been loaded
  _.extend(Marionette.TemplateCache.prototype, {
  
    // Internal method to load the template
    load: function(){
      // Guard clause to prevent loading this template more than once
      if (this.compiledTemplate){
        return this.compiledTemplate;
      }
  
      // Load the template and compile it
      var template = this.loadTemplate(this.templateId);
      this.compiledTemplate = this.compileTemplate(template);
  
      return this.compiledTemplate;
    },
  
    // Load a template from the DOM, by default. Override
    // this method to provide your own template retrieval
    // For asynchronous loading with AMD/RequireJS, consider
    // using a template-loader plugin as described here:
    // https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
    loadTemplate: function(templateId){
      var template = Marionette.$(templateId).html();
  
      if (!template || template.length === 0){
        throwError("Could not find template: '" + templateId + "'", "NoTemplateError");
      }
  
      return template;
    },
  
    // Pre-compile the template before caching it. Override
    // this method if you do not need to pre-compile a template
    // (JST / RequireJS for example) or if you want to change
    // the template engine used (Handebars, etc).
    compileTemplate: function(rawTemplate){
      return _.template(rawTemplate);
    }
  });
  
  // Renderer
  // --------
  
  // Render a template with data by passing in the template
  // selector and the data to render.
  Marionette.Renderer = {
  
    // Render a template with data. The `template` parameter is
    // passed to the `TemplateCache` object to retrieve the
    // template function. Override this method to provide your own
    // custom rendering and template handling for all of Marionette.
    render: function(template, data){
  
      if (!template) {
        throwError("Cannot render the template since it's false, null or undefined.", "TemplateNotFoundError");
      }
  
      var templateFunc;
      if (typeof template === "function"){
        templateFunc = template;
      } else {
        templateFunc = Marionette.TemplateCache.get(template);
      }
  
      return templateFunc(data);
    }
  };
  
  
  // Marionette.View
  // ---------------
  
  // The core view type that other Marionette views extend from.
  Marionette.View = Backbone.View.extend({
  
    constructor: function(options){
      _.bindAll(this, "render");
  
      // this exposes view options to the view initializer
      // this is a backfill since backbone removed the assignment
      // of this.options
      // at some point however this may be removed
      this.options = _.extend({}, _.result(this, 'options'), _.isFunction(options) ? options.call(this) : options);
  
      // parses out the @ui DSL for events
      this.events = this.normalizeUIKeys(_.result(this, 'events'));
  
      if (_.isObject(this.behaviors)) {
        new Marionette.Behaviors(this);
      }
  
      Backbone.View.prototype.constructor.apply(this, arguments);
  
      Marionette.MonitorDOMRefresh(this);
      this.listenTo(this, "show", this.onShowCalled);
    },
  
    // import the "triggerMethod" to trigger events with corresponding
    // methods if the method exists
    triggerMethod: Marionette.triggerMethod,
  
    // Imports the "normalizeMethods" to transform hashes of
    // events=>function references/names to a hash of events=>function references
    normalizeMethods: Marionette.normalizeMethods,
  
    // Get the template for this view
    // instance. You can set a `template` attribute in the view
    // definition or pass a `template: "whatever"` parameter in
    // to the constructor options.
    getTemplate: function(){
      return Marionette.getOption(this, "template");
    },
  
    // Mix in template helper methods. Looks for a
    // `templateHelpers` attribute, which can either be an
    // object literal, or a function that returns an object
    // literal. All methods and attributes from this object
    // are copies to the object passed in.
    mixinTemplateHelpers: function(target){
      target = target || {};
      var templateHelpers = Marionette.getOption(this, "templateHelpers");
      if (_.isFunction(templateHelpers)){
        templateHelpers = templateHelpers.call(this);
      }
      return _.extend(target, templateHelpers);
    },
  
  
    normalizeUIKeys: function(hash) {
      var ui = _.result(this, 'ui');
      return Marionette.normalizeUIKeys(hash, ui);
    },
  
    // Configure `triggers` to forward DOM events to view
    // events. `triggers: {"click .foo": "do:foo"}`
    configureTriggers: function(){
      if (!this.triggers) { return; }
  
      var triggerEvents = {};
  
      // Allow `triggers` to be configured as a function
      var triggers = this.normalizeUIKeys(_.result(this, "triggers"));
  
      // Configure the triggers, prevent default
      // action and stop propagation of DOM events
      _.each(triggers, function(value, key){
  
        var hasOptions = _.isObject(value);
        var eventName = hasOptions ? value.event : value;
  
        // build the event handler function for the DOM event
        triggerEvents[key] = function(e){
  
          // stop the event in its tracks
          if (e) {
            var prevent = e.preventDefault;
            var stop = e.stopPropagation;
  
            var shouldPrevent = hasOptions ? value.preventDefault : prevent;
            var shouldStop = hasOptions ? value.stopPropagation : stop;
  
            if (shouldPrevent && prevent) { prevent.apply(e); }
            if (shouldStop && stop) { stop.apply(e); }
          }
  
          // build the args for the event
          var args = {
            view: this,
            model: this.model,
            collection: this.collection
          };
  
          // trigger the event
          this.triggerMethod(eventName, args);
        };
  
      }, this);
  
      return triggerEvents;
    },
  
    // Overriding Backbone.View's delegateEvents to handle
    // the `triggers`, `modelEvents`, and `collectionEvents` configuration
    delegateEvents: function(events){
      this._delegateDOMEvents(events);
      Marionette.bindEntityEvents(this, this.model, Marionette.getOption(this, "modelEvents"));
      Marionette.bindEntityEvents(this, this.collection, Marionette.getOption(this, "collectionEvents"));
    },
  
    // internal method to delegate DOM events and triggers
    _delegateDOMEvents: function(events){
      events = events || this.events;
      if (_.isFunction(events)){ events = events.call(this); }
  
      var combinedEvents = {};
  
      // look up if this view has behavior events
      var behaviorEvents = _.result(this, 'behaviorEvents') || {};
      var triggers = this.configureTriggers();
  
      // behavior events will be overriden by view events and or triggers
      _.extend(combinedEvents, behaviorEvents, events, triggers);
  
      Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
    },
  
    // Overriding Backbone.View's undelegateEvents to handle unbinding
    // the `triggers`, `modelEvents`, and `collectionEvents` config
    undelegateEvents: function(){
      var args = Array.prototype.slice.call(arguments);
      Backbone.View.prototype.undelegateEvents.apply(this, args);
  
      Marionette.unbindEntityEvents(this, this.model, Marionette.getOption(this, "modelEvents"));
      Marionette.unbindEntityEvents(this, this.collection, Marionette.getOption(this, "collectionEvents"));
    },
  
    // Internal method, handles the `show` event.
    onShowCalled: function(){},
  
    // Default `close` implementation, for removing a view from the
    // DOM and unbinding it. Regions will call this method
    // for you. You can specify an `onClose` method in your view to
    // add custom code that is called after the view is closed.
    close: function(){
      if (this.isClosed) { return; }
  
      var args = Array.prototype.slice.call(arguments);
  
      // allow the close to be stopped by returning `false`
      // from the `onBeforeClose` method
      var shouldClose = this.triggerMethod.apply(this, ["before:close"].concat(args));
      if (shouldClose === false){
        return;
      }
  
      // mark as closed before doing the actual close, to
      // prevent infinite loops within "close" event handlers
      // that are trying to close other views
      this.isClosed = true;
      this.triggerMethod.apply(this, ["close"].concat(args));
  
      // unbind UI elements
      this.unbindUIElements();
  
      // remove the view from the DOM
      this.remove();
    },
  
    // This method binds the elements specified in the "ui" hash inside the view's code with
    // the associated jQuery selectors.
    bindUIElements: function(){
      if (!this.ui) { return; }
  
      // store the ui hash in _uiBindings so they can be reset later
      // and so re-rendering the view will be able to find the bindings
      if (!this._uiBindings){
        this._uiBindings = this.ui;
      }
  
      // get the bindings result, as a function or otherwise
      var bindings = _.result(this, "_uiBindings");
  
      // empty the ui so we don't have anything to start with
      this.ui = {};
  
      // bind each of the selectors
      _.each(_.keys(bindings), function(key) {
        var selector = bindings[key];
        this.ui[key] = this.$(selector);
      }, this);
    },
  
    // This method unbinds the elements specified in the "ui" hash
    unbindUIElements: function(){
      if (!this.ui || !this._uiBindings){ return; }
  
      // delete all of the existing ui bindings
      _.each(this.ui, function($el, name){
        delete this.ui[name];
      }, this);
  
      // reset the ui element to the original bindings configuration
      this.ui = this._uiBindings;
      delete this._uiBindings;
    }
  });
  
  // Item View
  // ---------
  
  // A single item view implementation that contains code for rendering
  // with underscore.js templates, serializing the view's model or collection,
  // and calling several methods on extended views, such as `onRender`.
  Marionette.ItemView = Marionette.View.extend({
  
    // Setting up the inheritance chain which allows changes to
    // Marionette.View.prototype.constructor which allows overriding
    constructor: function(){
      Marionette.View.prototype.constructor.apply(this, arguments);
    },
  
    // Serialize the model or collection for the view. If a model is
    // found, `.toJSON()` is called. If a collection is found, `.toJSON()`
    // is also called, but is used to populate an `items` array in the
    // resulting data. If both are found, defaults to the model.
    // You can override the `serializeData` method in your own view
    // definition, to provide custom serialization for your view's data.
    serializeData: function(){
      var data = {};
  
      if (this.model) {
        data = this.model.toJSON();
      }
      else if (this.collection) {
        data = { items: this.collection.toJSON() };
      }
  
      return data;
    },
  
    // Render the view, defaulting to underscore.js templates.
    // You can override this in your view definition to provide
    // a very specific rendering for your view. In general, though,
    // you should override the `Marionette.Renderer` object to
    // change how Marionette renders views.
    render: function(){
      this.isClosed = false;
  
      this.triggerMethod("before:render", this);
      this.triggerMethod("item:before:render", this);
  
      var data = this.serializeData();
      data = this.mixinTemplateHelpers(data);
  
      var template = this.getTemplate();
      var html = Marionette.Renderer.render(template, data);
  
      this.$el.html(html);
      this.bindUIElements();
  
      this.triggerMethod("render", this);
      this.triggerMethod("item:rendered", this);
  
      return this;
    },
  
    // Override the default close event to add a few
    // more events that are triggered.
    close: function(){
      if (this.isClosed){ return; }
  
      this.triggerMethod('item:before:close');
  
      Marionette.View.prototype.close.apply(this, arguments);
  
      this.triggerMethod('item:closed');
    }
  });
  
  // Collection View
  // ---------------
  
  // A view that iterates over a Backbone.Collection
  // and renders an individual ItemView for each model.
  Marionette.CollectionView = Marionette.View.extend({
    // used as the prefix for item view events
    // that are forwarded through the collectionview
    itemViewEventPrefix: "itemview",
  
    // constructor
    constructor: function(options){
      this._initChildViewStorage();
  
      Marionette.View.prototype.constructor.apply(this, arguments);
  
      this._initialEvents();
      this.initRenderBuffer();
    },
  
    // Instead of inserting elements one by one into the page,
    // it's much more performant to insert elements into a document
    // fragment and then insert that document fragment into the page
    initRenderBuffer: function() {
      this.elBuffer = document.createDocumentFragment();
      this._bufferedChildren = [];
    },
  
    startBuffering: function() {
      this.initRenderBuffer();
      this.isBuffering = true;
    },
  
    endBuffering: function() {
      this.isBuffering = false;
      this.appendBuffer(this, this.elBuffer);
      this._triggerShowBufferedChildren();
      this.initRenderBuffer();
    },
  
    _triggerShowBufferedChildren: function () {
      if (this._isShown) {
        _.each(this._bufferedChildren, function (child) {
          Marionette.triggerMethod.call(child, "show");
        });
        this._bufferedChildren = [];
      }
    },
  
    // Configured the initial events that the collection view
    // binds to.
    _initialEvents: function(){
      if (this.collection){
        this.listenTo(this.collection, "add", this.addChildView);
        this.listenTo(this.collection, "remove", this.removeItemView);
        this.listenTo(this.collection, "reset", this.render);
      }
    },
  
    // Handle a child item added to the collection
    addChildView: function(item, collection, options){
      this.closeEmptyView();
      var ItemView = this.getItemView(item);
      var index = this.collection.indexOf(item);
      this.addItemView(item, ItemView, index);
    },
  
    // Override from `Marionette.View` to guarantee the `onShow` method
    // of child views is called.
    onShowCalled: function(){
      this.children.each(function(child){
        Marionette.triggerMethod.call(child, "show");
      });
    },
  
    // Internal method to trigger the before render callbacks
    // and events
    triggerBeforeRender: function(){
      this.triggerMethod("before:render", this);
      this.triggerMethod("collection:before:render", this);
    },
  
    // Internal method to trigger the rendered callbacks and
    // events
    triggerRendered: function(){
      this.triggerMethod("render", this);
      this.triggerMethod("collection:rendered", this);
    },
  
    // Render the collection of items. Override this method to
    // provide your own implementation of a render function for
    // the collection view.
    render: function(){
      this.isClosed = false;
      this.triggerBeforeRender();
      this._renderChildren();
      this.triggerRendered();
      return this;
    },
  
    // Internal method. Separated so that CompositeView can have
    // more control over events being triggered, around the rendering
    // process
    _renderChildren: function(){
      this.startBuffering();
  
      this.closeEmptyView();
      this.closeChildren();
  
      if (!this.isEmpty(this.collection)) {
        this.showCollection();
      } else {
        this.showEmptyView();
      }
  
      this.endBuffering();
    },
  
    // Internal method to loop through each item in the
    // collection view and show it
    showCollection: function(){
      var ItemView;
      this.collection.each(function(item, index){
        ItemView = this.getItemView(item);
        this.addItemView(item, ItemView, index);
      }, this);
    },
  
    // Internal method to show an empty view in place of
    // a collection of item views, when the collection is
    // empty
    showEmptyView: function(){
      var EmptyView = this.getEmptyView();
  
      if (EmptyView && !this._showingEmptyView){
        this._showingEmptyView = true;
        var model = new Backbone.Model();
        this.addItemView(model, EmptyView, 0);
      }
    },
  
    // Internal method to close an existing emptyView instance
    // if one exists. Called when a collection view has been
    // rendered empty, and then an item is added to the collection.
    closeEmptyView: function(){
      if (this._showingEmptyView){
        this.closeChildren();
        delete this._showingEmptyView;
      }
    },
  
    // Retrieve the empty view type
    getEmptyView: function(){
      return Marionette.getOption(this, "emptyView");
    },
  
    // Retrieve the itemView type, either from `this.options.itemView`
    // or from the `itemView` in the object definition. The "options"
    // takes precedence.
    getItemView: function(item){
      var itemView = Marionette.getOption(this, "itemView");
  
      if (!itemView){
        throwError("An `itemView` must be specified", "NoItemViewError");
      }
  
      return itemView;
    },
  
    // Render the child item's view and add it to the
    // HTML for the collection view.
    addItemView: function(item, ItemView, index){
      // get the itemViewOptions if any were specified
      var itemViewOptions = Marionette.getOption(this, "itemViewOptions");
      if (_.isFunction(itemViewOptions)){
        itemViewOptions = itemViewOptions.call(this, item, index);
      }
  
      // build the view
      var view = this.buildItemView(item, ItemView, itemViewOptions);
  
      // set up the child view event forwarding
      this.addChildViewEventForwarding(view);
  
      // this view is about to be added
      this.triggerMethod("before:item:added", view);
  
      // Store the child view itself so we can properly
      // remove and/or close it later
      this.children.add(view);
  
      // Render it and show it
      this.renderItemView(view, index);
  
      // call the "show" method if the collection view
      // has already been shown
      if (this._isShown && !this.isBuffering){
        Marionette.triggerMethod.call(view, "show");
      }
  
      // this view was added
      this.triggerMethod("after:item:added", view);
  
      return view;
    },
  
    // Set up the child view event forwarding. Uses an "itemview:"
    // prefix in front of all forwarded events.
    addChildViewEventForwarding: function(view){
      var prefix = Marionette.getOption(this, "itemViewEventPrefix");
  
      // Forward all child item view events through the parent,
      // prepending "itemview:" to the event name
      this.listenTo(view, "all", function(){
        var args = slice.call(arguments);
        var rootEvent = args[0];
        var itemEvents = this.normalizeMethods(this.getItemEvents());
  
        args[0] = prefix + ":" + rootEvent;
        args.splice(1, 0, view);
  
        // call collectionView itemEvent if defined
        if (typeof itemEvents !== "undefined" && _.isFunction(itemEvents[rootEvent])) {
          itemEvents[rootEvent].apply(this, args);
        }
  
        Marionette.triggerMethod.apply(this, args);
      }, this);
    },
  
    // returns the value of itemEvents depending on if a function
    getItemEvents: function() {
      if (_.isFunction(this.itemEvents)) {
        return this.itemEvents.call(this);
      }
  
      return this.itemEvents;
    },
  
    // render the item view
    renderItemView: function(view, index) {
      view.render();
      this.appendHtml(this, view, index);
    },
  
    // Build an `itemView` for every model in the collection.
    buildItemView: function(item, ItemViewType, itemViewOptions){
      var options = _.extend({model: item}, itemViewOptions);
      return new ItemViewType(options);
    },
  
    // get the child view by item it holds, and remove it
    removeItemView: function(item){
      var view = this.children.findByModel(item);
      this.removeChildView(view);
      this.checkEmpty();
    },
  
    // Remove the child view and close it
    removeChildView: function(view){
  
      // shut down the child view properly,
      // including events that the collection has from it
      if (view){
        // call 'close' or 'remove', depending on which is found
        if (view.close) { view.close(); }
        else if (view.remove) { view.remove(); }
  
        this.stopListening(view);
        this.children.remove(view);
      }
  
      this.triggerMethod("item:removed", view);
    },
  
    // helper to check if the collection is empty
    isEmpty: function(collection){
      // check if we're empty now
      return !this.collection || this.collection.length === 0;
    },
  
    // If empty, show the empty view
    checkEmpty: function (){
      if (this.isEmpty(this.collection)){
        this.showEmptyView();
      }
    },
  
    // You might need to override this if you've overridden appendHtml
    appendBuffer: function(collectionView, buffer) {
      collectionView.$el.append(buffer);
    },
  
    // Append the HTML to the collection's `el`.
    // Override this method to do something other
    // than `.append`.
    appendHtml: function(collectionView, itemView, index){
      if (collectionView.isBuffering) {
        // buffering happens on reset events and initial renders
        // in order to reduce the number of inserts into the
        // document, which are expensive.
        collectionView.elBuffer.appendChild(itemView.el);
        collectionView._bufferedChildren.push(itemView);
      }
      else {
        // If we've already rendered the main collection, just
        // append the new items directly into the element.
        collectionView.$el.append(itemView.el);
      }
    },
  
    // Internal method to set up the `children` object for
    // storing all of the child views
    _initChildViewStorage: function(){
      this.children = new Backbone.ChildViewContainer();
    },
  
    // Handle cleanup and other closing needs for
    // the collection of views.
    close: function(){
      if (this.isClosed){ return; }
  
      this.triggerMethod("collection:before:close");
      this.closeChildren();
      this.triggerMethod("collection:closed");
  
      Marionette.View.prototype.close.apply(this, arguments);
    },
  
    // Close the child views that this collection view
    // is holding on to, if any
    closeChildren: function(){
      this.children.each(function(child){
        this.removeChildView(child);
      }, this);
      this.checkEmpty();
    }
  });
  
  // Composite View
  // --------------
  
  // Used for rendering a branch-leaf, hierarchical structure.
  // Extends directly from CollectionView and also renders an
  // an item view as `modelView`, for the top leaf
  Marionette.CompositeView = Marionette.CollectionView.extend({
  
    // Setting up the inheritance chain which allows changes to
    // Marionette.CollectionView.prototype.constructor which allows overriding
    constructor: function(){
      Marionette.CollectionView.prototype.constructor.apply(this, arguments);
    },
  
    // Configured the initial events that the composite view
    // binds to. Override this method to prevent the initial
    // events, or to add your own initial events.
    _initialEvents: function(){
  
      // Bind only after composite view is rendered to avoid adding child views
      // to nonexistent itemViewContainer
      this.once('render', function () {
        if (this.collection){
          this.listenTo(this.collection, "add", this.addChildView);
          this.listenTo(this.collection, "remove", this.removeItemView);
          this.listenTo(this.collection, "reset", this._renderChildren);
        }
      });
  
    },
  
    // Retrieve the `itemView` to be used when rendering each of
    // the items in the collection. The default is to return
    // `this.itemView` or Marionette.CompositeView if no `itemView`
    // has been defined
    getItemView: function(item){
      var itemView = Marionette.getOption(this, "itemView") || this.constructor;
  
      if (!itemView){
        throwError("An `itemView` must be specified", "NoItemViewError");
      }
  
      return itemView;
    },
  
    // Serialize the collection for the view.
    // You can override the `serializeData` method in your own view
    // definition, to provide custom serialization for your view's data.
    serializeData: function(){
      var data = {};
  
      if (this.model){
        data = this.model.toJSON();
      }
  
      return data;
    },
  
    // Renders the model once, and the collection once. Calling
    // this again will tell the model's view to re-render itself
    // but the collection will not re-render.
    render: function(){
      this.isRendered = true;
      this.isClosed = false;
      this.resetItemViewContainer();
  
      this.triggerBeforeRender();
      var html = this.renderModel();
      this.$el.html(html);
      // the ui bindings is done here and not at the end of render since they
      // will not be available until after the model is rendered, but should be
      // available before the collection is rendered.
      this.bindUIElements();
      this.triggerMethod("composite:model:rendered");
  
      this._renderChildren();
  
      this.triggerMethod("composite:rendered");
      this.triggerRendered();
      return this;
    },
  
    _renderChildren: function(){
      if (this.isRendered){
        this.triggerMethod("composite:collection:before:render");
        Marionette.CollectionView.prototype._renderChildren.call(this);
        this.triggerMethod("composite:collection:rendered");
      }
    },
  
    // Render an individual model, if we have one, as
    // part of a composite view (branch / leaf). For example:
    // a treeview.
    renderModel: function(){
      var data = {};
      data = this.serializeData();
      data = this.mixinTemplateHelpers(data);
  
      var template = this.getTemplate();
      return Marionette.Renderer.render(template, data);
    },
  
  
    // You might need to override this if you've overridden appendHtml
    appendBuffer: function(compositeView, buffer) {
      var $container = this.getItemViewContainer(compositeView);
      $container.append(buffer);
    },
  
    // Appends the `el` of itemView instances to the specified
    // `itemViewContainer` (a jQuery selector). Override this method to
    // provide custom logic of how the child item view instances have their
    // HTML appended to the composite view instance.
    appendHtml: function(compositeView, itemView, index){
      if (compositeView.isBuffering) {
        compositeView.elBuffer.appendChild(itemView.el);
        compositeView._bufferedChildren.push(itemView);
      }
      else {
        // If we've already rendered the main collection, just
        // append the new items directly into the element.
        var $container = this.getItemViewContainer(compositeView);
        $container.append(itemView.el);
      }
    },
  
    // Internal method to ensure an `$itemViewContainer` exists, for the
    // `appendHtml` method to use.
    getItemViewContainer: function(containerView){
      if ("$itemViewContainer" in containerView){
        return containerView.$itemViewContainer;
      }
  
      var container;
      var itemViewContainer = Marionette.getOption(containerView, "itemViewContainer");
      if (itemViewContainer){
  
        var selector = _.isFunction(itemViewContainer) ? itemViewContainer.call(containerView) : itemViewContainer;
  
        if (selector.charAt(0) === "@" && containerView.ui) {
          container = containerView.ui[selector.substr(4)];
        } else {
          container = containerView.$(selector);
        }
  
        if (container.length <= 0) {
          throwError("The specified `itemViewContainer` was not found: " + containerView.itemViewContainer, "ItemViewContainerMissingError");
        }
  
      } else {
        container = containerView.$el;
      }
  
      containerView.$itemViewContainer = container;
      return container;
    },
  
    // Internal method to reset the `$itemViewContainer` on render
    resetItemViewContainer: function(){
      if (this.$itemViewContainer){
        delete this.$itemViewContainer;
      }
    }
  });
  
  // Layout
  // ------
  
  // Used for managing application layouts, nested layouts and
  // multiple regions within an application or sub-application.
  //
  // A specialized view type that renders an area of HTML and then
  // attaches `Region` instances to the specified `regions`.
  // Used for composite view management and sub-application areas.
  Marionette.Layout = Marionette.ItemView.extend({
    regionType: Marionette.Region,
  
    // Ensure the regions are available when the `initialize` method
    // is called.
    constructor: function (options) {
      options = options || {};
  
      this._firstRender = true;
      this._initializeRegions(options);
  
      Marionette.ItemView.prototype.constructor.call(this, options);
    },
  
    // Layout's render will use the existing region objects the
    // first time it is called. Subsequent calls will close the
    // views that the regions are showing and then reset the `el`
    // for the regions to the newly rendered DOM elements.
    render: function(){
  
      if (this.isClosed){
        // a previously closed layout means we need to
        // completely re-initialize the regions
        this._initializeRegions();
      }
      if (this._firstRender) {
        // if this is the first render, don't do anything to
        // reset the regions
        this._firstRender = false;
      } else if (!this.isClosed){
        // If this is not the first render call, then we need to
        // re-initializing the `el` for each region
        this._reInitializeRegions();
      }
  
      return Marionette.ItemView.prototype.render.apply(this, arguments);
    },
  
    // Handle closing regions, and then close the view itself.
    close: function () {
      if (this.isClosed){ return; }
      this.regionManager.close();
      Marionette.ItemView.prototype.close.apply(this, arguments);
    },
  
    // Add a single region, by name, to the layout
    addRegion: function(name, definition){
      var regions = {};
      regions[name] = definition;
      return this._buildRegions(regions)[name];
    },
  
    // Add multiple regions as a {name: definition, name2: def2} object literal
    addRegions: function(regions){
      this.regions = _.extend({}, this.regions, regions);
      return this._buildRegions(regions);
    },
  
    // Remove a single region from the Layout, by name
    removeRegion: function(name){
      delete this.regions[name];
      return this.regionManager.removeRegion(name);
    },
  
    // Provides alternative access to regions
    // Accepts the region name
    // getRegion('main')
    getRegion: function(region) {
      return this.regionManager.get(region);
    },
  
    // internal method to build regions
    _buildRegions: function(regions){
      var that = this;
  
      var defaults = {
        regionType: Marionette.getOption(this, "regionType"),
        parentEl: function(){ return that.$el; }
      };
  
      return this.regionManager.addRegions(regions, defaults);
    },
  
    // Internal method to initialize the regions that have been defined in a
    // `regions` attribute on this layout.
    _initializeRegions: function (options) {
      var regions;
      this._initRegionManager();
  
      if (_.isFunction(this.regions)) {
        regions = this.regions(options);
      } else {
        regions = this.regions || {};
      }
  
      this.addRegions(regions);
    },
  
    // Internal method to re-initialize all of the regions by updating the `el` that
    // they point to
    _reInitializeRegions: function(){
      this.regionManager.closeRegions();
      this.regionManager.each(function(region){
        region.reset();
      });
    },
  
    // Internal method to initialize the region manager
    // and all regions in it
    _initRegionManager: function(){
      this.regionManager = new Marionette.RegionManager();
  
      this.listenTo(this.regionManager, "region:add", function(name, region){
        this[name] = region;
        this.trigger("region:add", name, region);
      });
  
      this.listenTo(this.regionManager, "region:remove", function(name, region){
        delete this[name];
        this.trigger("region:remove", name, region);
      });
    }
  });
  
  
  // Behavior
  // -----------
  
  // A Behavior is an isolated set of DOM /
  // user interactions that can be mixed into any View.
  // Behaviors allow you to blackbox View specific interactions
  // into portable logical chunks, keeping your views simple and your code DRY.
  
  Marionette.Behavior = (function(_, Backbone){
    function Behavior(options, view){
      // Setup reference to the view.
      // this comes in handle when a behavior
      // wants to directly talk up the chain
      // to the view.
      this.view = view;
      this.defaults = _.result(this, "defaults") || {};
      this.options  = _.extend({}, this.defaults, options);
  
      // proxy behavior $ method to the view
      // this is useful for doing jquery DOM lookups
      // scoped to behaviors view.
      this.$ = function() {
        return this.view.$.apply(this.view, arguments);
      };
  
      // Call the initialize method passing
      // the arguments from the instance constructor
      this.initialize.apply(this, arguments);
    }
  
    _.extend(Behavior.prototype, Backbone.Events, {
      initialize: function(){},
  
      // stopListening to behavior `onListen` events.
      close: function() {
        this.stopListening();
      },
  
      // Setup class level proxy for triggerMethod.
      triggerMethod: Marionette.triggerMethod
    });
  
    // Borrow Backbones extend implementation
    // this allows us to setup a proper
    // inheritence pattern that follow in suite
    // with the rest of Marionette views.
    Behavior.extend = Marionette.extend;
  
    return Behavior;
  })(_, Backbone);
  
  // Marionette.Behaviors
  // --------
  
  // Behaviors is a utility class that takes care of
  // glueing your behavior instances to their given View.
  // The most important part of this class is that you
  // **MUST** override the class level behaviorsLookup
  // method for things to work properly.
  
  Marionette.Behaviors = (function(Marionette, _) {
  
    function Behaviors(view) {
      // Behaviors defined on a view can be a flat object literal
      // or it can be a function that returns an object.
      this.behaviors = Behaviors.parseBehaviors(view, _.result(view, 'behaviors'));
  
      // Wraps several of the view's methods
      // calling the methods first on each behavior
      // and then eventually calling the method on the view.
      Behaviors.wrap(view, this.behaviors, [
        'bindUIElements', 'unbindUIElements',
        'delegateEvents', 'undelegateEvents',
        'onShow', 'onClose',
        'behaviorEvents', 'triggerMethod',
        'setElement', 'close'
      ]);
    }
  
    var methods = {
      setElement: function(setElement, behaviors) {
        setElement.apply(this, _.tail(arguments, 2));
  
        // proxy behavior $el to the view's $el.
        // This is needed because a view's $el proxy
        // is not set until after setElement is called.
        _.each(behaviors, function(b) {
          b.$el = this.$el;
        }, this);
      },
  
      close: function(close, behaviors) {
        var args = _.tail(arguments, 2);
        close.apply(this, args);
  
        // Call close on each behavior after
        // closing down the view.
        // This unbinds event listeners
        // that behaviors have registerd for.
        _.invoke(behaviors, 'close', args);
      },
  
      onShow: function(onShow, behaviors) {
        var args = _.tail(arguments, 2);
  
        _.each(behaviors, function(b) {
          Marionette.triggerMethod.apply(b, ["show"].concat(args));
        });
  
        if (_.isFunction(onShow)) {
          onShow.apply(this, args);
        }
      },
  
      onClose: function(onClose, behaviors){
        var args = _.tail(arguments, 2);
  
        _.each(behaviors, function(b) {
          Marionette.triggerMethod.apply(b, ["close"].concat(args));
        });
  
        if (_.isFunction(onClose)) {
          onClose.apply(this, args);
        }
      },
  
      bindUIElements: function(bindUIElements, behaviors) {
        bindUIElements.apply(this);
        _.invoke(behaviors, bindUIElements);
      },
  
      unbindUIElements: function(unbindUIElements, behaviors) {
        unbindUIElements.apply(this);
        _.invoke(behaviors, unbindUIElements);
      },
  
      triggerMethod: function(triggerMethod, behaviors) {
        var args = _.tail(arguments, 2);
        triggerMethod.apply(this, args);
  
        _.each(behaviors, function(b) {
          triggerMethod.apply(b, args);
        });
      },
  
      delegateEvents: function(delegateEvents, behaviors) {
        var args = _.tail(arguments, 2);
        delegateEvents.apply(this, args);
  
        _.each(behaviors, function(b){
          Marionette.bindEntityEvents(b, this.model, Marionette.getOption(b, "modelEvents"));
          Marionette.bindEntityEvents(b, this.collection, Marionette.getOption(b, "collectionEvents"));
        }, this);
      },
  
      undelegateEvents: function(undelegateEvents, behaviors) {
        var args = _.tail(arguments, 2);
        undelegateEvents.apply(this, args);
  
        _.each(behaviors, function(b) {
          Marionette.unbindEntityEvents(b, this.model, Marionette.getOption(b, "modelEvents"));
          Marionette.unbindEntityEvents(b, this.collection, Marionette.getOption(b, "collectionEvents"));
        }, this);
      },
  
      behaviorEvents: function(behaviorEvents, behaviors) {
        var _behaviorsEvents = {};
        var viewUI = _.result(this, 'ui');
  
        _.each(behaviors, function(b, i) {
          var _events = {};
          var behaviorEvents = _.result(b, 'events') || {};
          var behaviorUI = _.result(b, 'ui');
  
          // Construct an internal UI hash first using
          // the views UI hash and then the behaviors UI hash.
          // This allows the user to use UI hash elements
          // defined in the parent view as well as those
          // defined in the given behavior.
          var ui = _.extend({}, viewUI, behaviorUI);
  
          // Normalize behavior events hash to allow
          // a user to use the @ui. syntax.
          behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, ui);
  
          _.each(_.keys(behaviorEvents), function(key) {
            // append white-space at the end of each key to prevent behavior key collisions
            // this is relying on the fact backbone events considers "click .foo" the same  "click .foo "
            // starts with an array of two so the first behavior has one space
  
            // +2 is uses becauce new Array(1) or 0 is "" and not " "
            var whitespace = (new Array(i+2)).join(" ");
            var eventKey   = key + whitespace;
            var handler    = _.isFunction(behaviorEvents[key]) ? behaviorEvents[key] : b[behaviorEvents[key]];
  
            _events[eventKey] = _.bind(handler, b);
          });
  
          _behaviorsEvents = _.extend(_behaviorsEvents, _events);
        });
  
        return _behaviorsEvents;
      }
    };
  
    _.extend(Behaviors, {
  
      // placeholder method to be extended by the user
      // should define the object that stores the behaviors
      // i.e.
      //
      // Marionette.Behaviors.behaviorsLookup: function() {
      //   return App.Behaviors
      // }
      behaviorsLookup: function() {
        throw new Error("You must define where your behaviors are stored. See https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.behaviors.md#behaviorslookup");
      },
  
      // Takes care of getting the behavior class
      // given options and a key.
      // If a user passes in options.behaviorClass
      // default to using that. Otherwise delegate
      // the lookup to the users behaviorsLookup implementation.
      getBehaviorClass: function(options, key) {
        if (options.behaviorClass) {
          return options.behaviorClass;
        }
  
        // Get behavior class can be either a flat object or a method
        return _.isFunction(Behaviors.behaviorsLookup) ? Behaviors.behaviorsLookup.apply(this, arguments)[key] : Behaviors.behaviorsLookup[key];
      },
  
      // Maps over a view's behaviors. Performing
      // a lookup on each behavior and the instantiating
      // said behavior passing its options and view.
      parseBehaviors: function(view, behaviors){
        return _.map(behaviors, function(options, key){
          var BehaviorClass = Behaviors.getBehaviorClass(options, key);
          return new BehaviorClass(options, view);
        });
      },
  
      // wrap view internal methods so that they delegate to behaviors.
      // For example, onClose should trigger close on all of the behaviors and then close itself.
      // i.e.
      //
      // view.delegateEvents = _.partial(methods.delegateEvents, view.delegateEvents, behaviors);
      wrap: function(view, behaviors, methodNames) {
        _.each(methodNames, function(methodName) {
          view[methodName] = _.partial(methods[methodName], view[methodName], behaviors);
        });
      }
    });
  
    return Behaviors;
  
  })(Marionette, _);
  
  
  // AppRouter
  // ---------
  
  // Reduce the boilerplate code of handling route events
  // and then calling a single method on another object.
  // Have your routers configured to call the method on
  // your object, directly.
  //
  // Configure an AppRouter with `appRoutes`.
  //
  // App routers can only take one `controller` object.
  // It is recommended that you divide your controller
  // objects in to smaller pieces of related functionality
  // and have multiple routers / controllers, instead of
  // just one giant router and controller.
  //
  // You can also add standard routes to an AppRouter.
  
  Marionette.AppRouter = Backbone.Router.extend({
  
    constructor: function(options){
      Backbone.Router.prototype.constructor.apply(this, arguments);
  
      this.options = options || {};
  
      var appRoutes = Marionette.getOption(this, "appRoutes");
      var controller = this._getController();
      this.processAppRoutes(controller, appRoutes);
      this.on("route", this._processOnRoute, this);
    },
  
    // Similar to route method on a Backbone Router but
    // method is called on the controller
    appRoute: function(route, methodName) {
      var controller = this._getController();
      this._addAppRoute(controller, route, methodName);
    },
  
    // process the route event and trigger the onRoute
    // method call, if it exists
    _processOnRoute: function(routeName, routeArgs){
      // find the path that matched
      var routePath = _.invert(this.appRoutes)[routeName];
  
      // make sure an onRoute is there, and call it
      if (_.isFunction(this.onRoute)){
        this.onRoute(routeName, routePath, routeArgs);
      }
    },
  
    // Internal method to process the `appRoutes` for the
    // router, and turn them in to routes that trigger the
    // specified method on the specified `controller`.
    processAppRoutes: function(controller, appRoutes) {
      if (!appRoutes){ return; }
  
      var routeNames = _.keys(appRoutes).reverse(); // Backbone requires reverted order of routes
  
      _.each(routeNames, function(route) {
        this._addAppRoute(controller, route, appRoutes[route]);
      }, this);
    },
  
    _getController: function(){
      return Marionette.getOption(this, "controller");
    },
  
    _addAppRoute: function(controller, route, methodName){
      var method = controller[methodName];
  
      if (!method) {
        throwError("Method '" + methodName + "' was not found on the controller");
      }
  
      this.route(route, methodName, _.bind(method, controller));
    }
  });
  
  // Application
  // -----------
  
  // Contain and manage the composite application as a whole.
  // Stores and starts up `Region` objects, includes an
  // event aggregator as `app.vent`
  Marionette.Application = function(options){
    this._initRegionManager();
    this._initCallbacks = new Marionette.Callbacks();
    this.vent = new Backbone.Wreqr.EventAggregator();
    this.commands = new Backbone.Wreqr.Commands();
    this.reqres = new Backbone.Wreqr.RequestResponse();
    this.submodules = {};
  
    _.extend(this, options);
  
    this.triggerMethod = Marionette.triggerMethod;
  };
  
  _.extend(Marionette.Application.prototype, Backbone.Events, {
    // Command execution, facilitated by Backbone.Wreqr.Commands
    execute: function(){
      this.commands.execute.apply(this.commands, arguments);
    },
  
    // Request/response, facilitated by Backbone.Wreqr.RequestResponse
    request: function(){
      return this.reqres.request.apply(this.reqres, arguments);
    },
  
    // Add an initializer that is either run at when the `start`
    // method is called, or run immediately if added after `start`
    // has already been called.
    addInitializer: function(initializer){
      this._initCallbacks.add(initializer);
    },
  
    // kick off all of the application's processes.
    // initializes all of the regions that have been added
    // to the app, and runs all of the initializer functions
    start: function(options){
      this.triggerMethod("initialize:before", options);
      this._initCallbacks.run(options, this);
      this.triggerMethod("initialize:after", options);
  
      this.triggerMethod("start", options);
    },
  
    // Add regions to your app.
    // Accepts a hash of named strings or Region objects
    // addRegions({something: "#someRegion"})
    // addRegions({something: Region.extend({el: "#someRegion"}) });
    addRegions: function(regions){
      return this._regionManager.addRegions(regions);
    },
  
    // Close all regions in the app, without removing them
    closeRegions: function(){
      this._regionManager.closeRegions();
    },
  
    // Removes a region from your app, by name
    // Accepts the regions name
    // removeRegion('myRegion')
    removeRegion: function(region) {
      this._regionManager.removeRegion(region);
    },
  
    // Provides alternative access to regions
    // Accepts the region name
    // getRegion('main')
    getRegion: function(region) {
      return this._regionManager.get(region);
    },
  
    // Create a module, attached to the application
    module: function(moduleNames, moduleDefinition){
  
      // Overwrite the module class if the user specifies one
      var ModuleClass = Marionette.Module.getClass(moduleDefinition);
  
      // slice the args, and add this application object as the
      // first argument of the array
      var args = slice.call(arguments);
      args.unshift(this);
  
      // see the Marionette.Module object for more information
      return ModuleClass.create.apply(ModuleClass, args);
    },
  
    // Internal method to set up the region manager
    _initRegionManager: function(){
      this._regionManager = new Marionette.RegionManager();
  
      this.listenTo(this._regionManager, "region:add", function(name, region){
        this[name] = region;
      });
  
      this.listenTo(this._regionManager, "region:remove", function(name, region){
        delete this[name];
      });
    }
  });
  
  // Copy the `extend` function used by Backbone's classes
  Marionette.Application.extend = Marionette.extend;
  
  // Module
  // ------
  
  // A simple module system, used to create privacy and encapsulation in
  // Marionette applications
  Marionette.Module = function(moduleName, app, options){
    this.moduleName = moduleName;
    this.options = _.extend({}, this.options, options);
    // Allow for a user to overide the initialize
    // for a given module instance.
    this.initialize = options.initialize || this.initialize;
  
    // Set up an internal store for sub-modules.
    this.submodules = {};
  
    this._setupInitializersAndFinalizers();
  
    // Set an internal reference to the app
    // within a module.
    this.app = app;
  
    // By default modules start with their parents.
    this.startWithParent = true;
  
    // Setup a proxy to the trigger method implementation.
    this.triggerMethod = Marionette.triggerMethod;
  
    if (_.isFunction(this.initialize)){
      this.initialize(this.options, moduleName, app);
    }
  };
  
  Marionette.Module.extend = Marionette.extend;
  
  // Extend the Module prototype with events / listenTo, so that the module
  // can be used as an event aggregator or pub/sub.
  _.extend(Marionette.Module.prototype, Backbone.Events, {
  
    // Initialize is an empty function by default. Override it with your own
    // initialization logic when extending Marionette.Module.
    initialize: function(){},
  
    // Initializer for a specific module. Initializers are run when the
    // module's `start` method is called.
    addInitializer: function(callback){
      this._initializerCallbacks.add(callback);
    },
  
    // Finalizers are run when a module is stopped. They are used to teardown
    // and finalize any variables, references, events and other code that the
    // module had set up.
    addFinalizer: function(callback){
      this._finalizerCallbacks.add(callback);
    },
  
    // Start the module, and run all of its initializers
    start: function(options){
      // Prevent re-starting a module that is already started
      if (this._isInitialized){ return; }
  
      // start the sub-modules (depth-first hierarchy)
      _.each(this.submodules, function(mod){
        // check to see if we should start the sub-module with this parent
        if (mod.startWithParent){
          mod.start(options);
        }
      });
  
      // run the callbacks to "start" the current module
      this.triggerMethod("before:start", options);
  
      this._initializerCallbacks.run(options, this);
      this._isInitialized = true;
  
      this.triggerMethod("start", options);
    },
  
    // Stop this module by running its finalizers and then stop all of
    // the sub-modules for this module
    stop: function(){
      // if we are not initialized, don't bother finalizing
      if (!this._isInitialized){ return; }
      this._isInitialized = false;
  
      Marionette.triggerMethod.call(this, "before:stop");
  
      // stop the sub-modules; depth-first, to make sure the
      // sub-modules are stopped / finalized before parents
      _.each(this.submodules, function(mod){ mod.stop(); });
  
      // run the finalizers
      this._finalizerCallbacks.run(undefined,this);
  
      // reset the initializers and finalizers
      this._initializerCallbacks.reset();
      this._finalizerCallbacks.reset();
  
      Marionette.triggerMethod.call(this, "stop");
    },
  
    // Configure the module with a definition function and any custom args
    // that are to be passed in to the definition function
    addDefinition: function(moduleDefinition, customArgs){
      this._runModuleDefinition(moduleDefinition, customArgs);
    },
  
    // Internal method: run the module definition function with the correct
    // arguments
    _runModuleDefinition: function(definition, customArgs){
      // If there is no definition short circut the method.
      if (!definition){ return; }
  
      // build the correct list of arguments for the module definition
      var args = _.flatten([
        this,
        this.app,
        Backbone,
        Marionette,
        Marionette.$, _,
        customArgs
      ]);
  
      definition.apply(this, args);
    },
  
    // Internal method: set up new copies of initializers and finalizers.
    // Calling this method will wipe out all existing initializers and
    // finalizers.
    _setupInitializersAndFinalizers: function(){
      this._initializerCallbacks = new Marionette.Callbacks();
      this._finalizerCallbacks = new Marionette.Callbacks();
    }
  });
  
  // Type methods to create modules
  _.extend(Marionette.Module, {
  
    // Create a module, hanging off the app parameter as the parent object.
    create: function(app, moduleNames, moduleDefinition){
      var module = app;
  
      // get the custom args passed in after the module definition and
      // get rid of the module name and definition function
      var customArgs = slice.call(arguments);
      customArgs.splice(0, 3);
  
      // Split the module names and get the number of submodules.
      // i.e. an example module name of `Doge.Wow.Amaze` would
      // then have the potential for 3 module definitions.
      moduleNames = moduleNames.split(".");
      var length = moduleNames.length;
  
      // store the module definition for the last module in the chain
      var moduleDefinitions = [];
      moduleDefinitions[length-1] = moduleDefinition;
  
      // Loop through all the parts of the module definition
      _.each(moduleNames, function(moduleName, i){
        var parentModule = module;
        module = this._getModule(parentModule, moduleName, app, moduleDefinition);
        this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
      }, this);
  
      // Return the last module in the definition chain
      return module;
    },
  
    _getModule: function(parentModule, moduleName, app, def, args){
      var options = _.extend({}, def);
      var ModuleClass = this.getClass(def);
  
      // Get an existing module of this name if we have one
      var module = parentModule[moduleName];
  
      if (!module){
        // Create a new module if we don't have one
        module = new ModuleClass(moduleName, app, options);
        parentModule[moduleName] = module;
        // store the module on the parent
        parentModule.submodules[moduleName] = module;
      }
  
      return module;
    },
  
    // ## Module Classes
    //
    // Module classes can be used as an alternative to the define pattern.
    // The extend function of a Module is identical to the extend functions
    // on other Backbone and Marionette classes.
    // This allows module lifecyle events like `onStart` and `onStop` to be called directly.
    getClass: function(moduleDefinition) {
      var ModuleClass = Marionette.Module;
  
      if (!moduleDefinition) {
        return ModuleClass;
      }
  
      // If all of the module's functionality is defined inside its class,
      // then the class can be passed in directly. `MyApp.module("Foo", FooModule)`.
      if (moduleDefinition.prototype instanceof ModuleClass) {
        return moduleDefinition;
      }
  
      return moduleDefinition.moduleClass || ModuleClass;
    },
  
    // Add the module definition and add a startWithParent initializer function.
    // This is complicated because module definitions are heavily overloaded
    // and support an anonymous function, module class, or options object
    _addModuleDefinition: function(parentModule, module, def, args){
      var fn = this._getDefine(def);
      var startWithParent = this._getStartWithParent(def, module);
  
      if (fn){
        module.addDefinition(fn, args);
      }
  
      this._addStartWithParent(parentModule, module, startWithParent);
    },
  
    _getStartWithParent: function(def, module) {
      var swp;
  
      if (_.isFunction(def) && (def.prototype instanceof Marionette.Module)) {
        swp = module.constructor.prototype.startWithParent;
        return _.isUndefined(swp) ? true : swp;
      }
  
      if (_.isObject(def)){
        swp = def.startWithParent;
        return _.isUndefined(swp) ? true : swp;
      }
  
      return true;
    },
  
    _getDefine: function(def) {
      if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)) {
        return def;
      }
  
      if (_.isObject(def)){
        return def.define;
      }
  
      return null;
    },
  
    _addStartWithParent: function(parentModule, module, startWithParent) {
      module.startWithParent = module.startWithParent && startWithParent;
  
      if (!module.startWithParent || !!module.startWithParentIsConfigured){
        return;
      }
  
      module.startWithParentIsConfigured = true;
  
      parentModule.addInitializer(function(options){
        if (module.startWithParent){
          module.start(options);
        }
      });
    }
  });
  
  
    return Marionette;
  })(this, Backbone, _);
  
  return Backbone.Marionette;

}));

/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
define("bootstrap", function(){});

define('extends/ModalRegion',[
    'marionette',
    'bootstrap'
], function(Marionette){
    return Marionette.Region.extend({

        constructor: function(){
            Marionette.Region.prototype.constructor.apply(this, arguments);
        },

        initialize: function(options){
            var _this = this;
        },

        getEl: function(selector){
            var _this = this,
                $el = $(selector);

            $el.on('show.bs.modal', function(){
                _this.trigger('show.bs.modal');
            });
            $el.on('shown.bs.modal', function(){
                _this.trigger('shown.bs.modal');
            });
            $el.on('hide.bs.modal', function(){
                _this.trigger('hide.bs.modal');
            });
            $el.on('hidden.bs.modal', function(){
                _this.trigger('hidden.bs.modal');
            });

            return $el;
        },

        setModalOptions: function(options){
            this.modalOptions = options || {};
        },

        show: function(view){
            Marionette.Region.prototype.show.apply(this, [view]);
        },

        onShow: function(view){
            view.on("closeWindow", function(){
                this.hide();
            }, this);
            this.$el.modal(this.modalOptions);
        },

        hide: function(){
            this.$el.modal('hide');
        }
    });
});
define('app',[
    'backbone',
    'marionette',

    'extends/ModalRegion'
], function(Backbone, Marionette, ModalRegion){

    var App = new Marionette.Application();
    var AppRouter = Marionette.AppRouter.extend({});
    App.router = new AppRouter();
    App.router.root = '/';

    var log;

    App.channels = {};
    App.channels.modules = {};
    App.channels.main = _.extend({}, Backbone.Events);
    App.channels.second = _.extend({}, Backbone.Events);

    App.behaviors = {};
    Marionette.Behaviors.behaviorsLookup = function() {
        return App.behaviors;
    }

    var trigger = Backbone.Events.trigger;

    App.channels.main.trigger = function(){
        console.log("main channel:");
        console.log(arguments);
        trigger.apply(App.channels.main, arguments);
    };

    App.channels.second.trigger = function(){
        console.log("second channel:");
        console.log(arguments);
        trigger.apply(App.channels.second, arguments);
    };

    App.on('initialize:after', function(){
        log = App.reqres.request("getLog", 'App');

        if( Backbone.history ){
            //не стартуем сразу, даем время модулям зависящим от
            //Навигации нормально инициализироваться

            Backbone.history.start();
        }
    });

    App.navigate = function(fragment, options){
        options = options || {};
        App.router.navigate(fragment, options);
    };

    App.redirect = function(url){
        log('redirect to: ' + url);
        window.location.href = url;
    };

    App.reload = function(){
        log('reload');
        window.location.reload();
    };

    App.reloadCurrentApp = function(){
        Backbone.history.loadUrl(Backbone.history.fragment);
    };

    App.registerChannel = function(name){
        if(App.channels.modules[name]) return App.channels.modules[name];

        App.channels.modules[name] = _.extend({}, Backbone.Events);
        return App.channels.modules[name];
    }

    App.deleteChannel = function(name){
        if(!App.channels.modules[name]) return false;
        App.channels.modules[name].off();
        delete App.channels.modules[name];
    }

    App.startSubApp = function(appName, args){
        var currentApp = App.module(appName);
        if (App.currentApp === currentApp){ return; }

        $('body').removeClass().addClass(currentApp.moduleName.toLowerCase());

        if (App.currentApp){
            App.currentApp.stop();
        }

        App.currentApp = currentApp;
        currentApp.start(args);
    };

    App.addRegions({
        body: "#body",
        modal: new ModalRegion({el: "#modal"})
    });

    return App;

});
define('config',[], function(){

    var serverConfig = Budget || {};
    var prefix = serverConfig.data.prefix || "";
    var environment = serverConfig.data.environment;

    return {
        data: {
            prefix: prefix,
            user: {
                email: serverConfig.user.email,
                id: serverConfig.user.id
            },
            environment: environment,

            dbOptions: {
                db_name: "budget",
                version: '1',
                description: 'Budget local database',
                dbSize: 30 * 1024 * 1024, //30Mb
                provider: (environment == "mobile") ? 'sqlite' : ''
            }
        },
        reqres: {

            /*models*/
            'model:entity': 'model:entity',
            'collection:entity': 'collection:entity',
            'user:entity': 'user:entity',
            'transaction:entity' : 'transaction:entity',
            'transaction:collection:entity': 'transaction:collection:entity',
            'tag:entity': 'tag:entity',
            'tag:collection:entity': 'tag:collection:entity',
            'statistic:total:entity': 'statistic:total:entity',
            'statistic:transactionList:entity': 'statistic:transactionList:entity',
            'statistic:totalByTag:entity': 'statistic:totalByTag:entity',

            'notice:get': 'notice:get',
            'notice:get:prompt' : 'notice:get:prompt',
            'date:get:period': 'date:get:period',

            'service:db:getChangingData': 'service:db:getChangingData',
            'service:db:updateTagsId': 'service:db:updateTagsId',
            'service:db:resetTagEditLabel': 'service:db:resetTagEditLabel',
            'service:db:resetTransactionEditLabel': 'service:db:resetTransactionEditLabel',
            'service:db:updateTransactionsId': 'service:db:updateTransactionsId',
            'service:db:removeRemovedTransactions': 'service:db:removeRemovedTransactions',
            'service:db:removeRemovedTag': 'service:db:removeRemovedTag',
            'service:db:removeTagById': 'service:db:removeTagById',
            'service:db:removeTransactionById': 'service:db:removeTransactionById',
            'service:db:editOrCreateTag': 'service:db:editOrCreateTag',
            'service:db:editOrCreateTransaction': 'service:db:editOrCreateTransaction',
            'service:db:updateTagIdInTransactions': 'service:db:updateTagIdInTransactions',

            'service:auth:logout': 'service:auth:logout'
        },

        storage: {
            "lastUpdate": 'lastUpdate',
            "isInitDatabase" : "isInitDatabase",
            user: {
                'email': 'email'
            }
        },

        commands: {
            'main:enable': 'main:enable',
            'main:disable': 'main:disable',

            'notify:showNotify': 'notify:showNotify',
            'notify:showNotify:side': 'notify:showNotify:side',
            'notify:clearAllNotice': 'notify:clearAllNotice',
            'notify:clearAllNotify:side': 'notify:clearAllNotify:side',

            'menu:set': 'menu:set',
            'menu:open': 'menu:open'
        },

        channels: {
            'date:change': 'date:change',
            'sync': 'sync'
        },

        api: {
            signup: prefix + '/api/user/signup',
            signin: prefix + '/api/user/signin',
            logout: prefix + "/api/user/logout",

            //tag
            tagCreate: prefix +'/api/tag/create',
            tagRemove: prefix +'/api/tag/remove',
            tagGet: prefix +'/api/tag/get',
            tagEdit: prefix +'/api/tag/edit',

            //transaction
            transactionCreate: prefix +'/api/transaction/create',
            transactionRemove: prefix +'/api/transaction/remove',
            transactionEdit: prefix +'/api/transaction/edit',
            transactionGetById: prefix +'/api/transaction/getById',

            statistic: {
                total: prefix + '/api/transaction/total',
                totalByTag: prefix + '/api/transaction/totalByTag',
                listTransactions: prefix + "/api/transaction/list"
            },

            sync: {
                clientServer: prefix + '/api/sync/clientserver',
                serverClient: prefix + '/api/sync/serverclient'
            }
        },

        showLog: true
    }

});
define('entities/base',[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities", {

        startWithParent: true,

        define: function( Entities, App, Backbone, Marionette, $, _ ){

            var log;

            Entities.ClearModel = Backbone.Model.extend({
                initialize: function(attributes, options) {
                    options || (options = {});
                    this.bind("error", this.defaultErrorHandler);
                    this.bind("request", this.requestHandler);
                    Backbone.Model.prototype.initialize.apply(this, arguments);
                },

                fetch: function(){
                    this.xhr = Backbone.Model.prototype.fetch.apply(this, arguments);
                    return this.xhr;
                },

                requestHandler: function(){
                    if( this.xhr ){
                        this.abortAjax();
                    }
                },

                defaultErrorHandler: function(model, error) {
                    var options = {
                        tags: {
                            modelName: this.modelName || "defaultModelName"
                        }
                    }
                },

                xhr: null,

                abortAjax: function(){
                    if( this.xhr  &&  this.xhr.abort ){
                        this.xhr.abort();
                        this.xhr = null;
                    }
                }

            });
            Entities.ClearCollection = Backbone.Collection.extend({

                model: Entities.ClearModel,

                xhr: null,

                fetch: function(){
                    this.xhr = Backbone.Collection.prototype.fetch.apply(this, arguments);
                    return this.xhr;
                },

                initialize: function(attributes, options) {
                    options || (options = {});
                    this.bind("request", this.requestHandler);
                    Backbone.Model.prototype.initialize.apply(this, arguments);
                },

                requestHandler: function(){
                    if( this.xhr ){
                        this.abortAjax();
                    }
                },

                abortAjax: function(){
                    if( this.xhr  &&  this.xhr.abort ){
                        this.xhr.abort();
                        this.xhr = null;
                    }
                }
            });

            var API = {
                getModelEntity: function(){
                    return new Entities.ClearModel();
                },
                getCollectionEntity: function(){
                    return new Entities.ClearCollection();
                }
            }

            Entities.API = API;

            Entities.addInitializer(function(){
                log = App.reqres.request("getLog", 'Entities.Base');
                log("Initialised");
            })

            App.reqres.setHandler(config.reqres['model:entity'], function(){
                return API.getModelEntity();
            });
            App.reqres.setHandler(config.reqres['collection:entity'], function(){
                return API.getCollectionEntity();
            });
        }
    })


});
define('entities/user',[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    './base'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities", {

        startWithParent: true,

        define: function( Entities, App, Backbone, Marionette, $, _ ){

            var log;

            Entities.UserModel = Entities.ClearModel.extend({

                urls: {
                    signup: config.api.signup,
                    signin: config.api.signin
                },

                defaults: {
                    email: "",
                    password: ""
                },

                validation: {},

                modelName: 'UserModel',

                signUp: function(options){
                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        password: model.password,
                        email: model.email
                    };

                    var defaults = {
                        url: this.urls.signup,
                        type: 'post',
                        data: JSON.stringify(data)
                    };
                    options = _.extend(defaults, options);
                    this.save(null, options);
                },

                signIn: function(options){
                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        password: model.password,
                        email: model.email
                    };

                    var defaults = {
                        url: this.urls.signin,
                        type: 'post',
                        data: JSON.stringify(data)
                    };
                    options = _.extend(defaults, options);
                    this.save(null, options);
                }

            })

            var API = {
                getUserModel: function(){
                    return new Entities.UserModel();
                }
            }

            Entities.addInitializer(function(){
                log = App.reqres.request("getLog", 'Entities.User');
                log("Initialized");
            })

            App.reqres.setHandler(config.reqres['user:entity'], function(){
                return API.getUserModel();
            });
        }
    })


});
define('entities/tag',[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    './base'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities", {

        startWithParent: true,

        define: function( Entities, App, Backbone, Marionette, $, _ ){

            var log;

            Entities.TagModel = Entities.ClearModel.extend({

                urls: {
                    create: config.api.tagCreate,
                    remove: config.api.tagRemove,
                    edit: config.api.tagEdit
                },

                idAttribute: '_id',

                defaults: {
                    tagName: ""
                },

                validation: {},

                modelName: 'TagModel',

                createTag: function(options){

                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        tagName: model.tagName
                    };

                    var defaults = {
                        url: this.urls.create,
                        type: 'post',
                        data: JSON.stringify(data)
                    };
                    options = _.extend(defaults, options);
                    this.xhr = this.save(null, options);
                    return this.xhr;
                },

                saveTag: function(options){
                    options = options || {};
                    var model = this.toJSON();
                    var attrs = null;

                    if(options.data) {
                        model = _.extend(model, options.data);
                        delete options.data;
                    }

                    var data = {
                        _id: model._id,
                        tagName: model.tagName
                    };

                    var defaults = {
                        url: this.urls.edit,
                        type: 'POST',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);

                    if( options.wait ){
                        attrs = data;
                        options.attrs = attrs;
                        delete options.data;
                    }

                    this.xhr = this.save(attrs, options);
                    return this.xhr;
                },
                removeTag: function(options){
                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        _id: model._id
                    };

                    var defaults = {
                        url: this.urls.remove,
                        type: 'POST',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.destroy(options);
                    return this.xhr;
                }

            });
            Entities.TagCollections = Entities.ClearCollection.extend({
                model: Entities.TagModel,
                url: config.api.tagGet
            })

            var API = {
                getTagModel: function(){
                    return new Entities.TagModel();
                },

                getTagCollection: function(){
                    return new Entities.TagCollections();
                }
            }

            Entities.addInitializer(function(){
                log = App.reqres.request("getLog", 'Entities.Tag');
                log("Initialized");
            })

            App.reqres.setHandler(config.reqres['tag:entity'], function(){
                return API.getTagModel();
            });

            App.reqres.setHandler(config.reqres['tag:collection:entity'], function(){
                return API.getTagCollection();
            });
        }
    })


});
define('entities/transaction',[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    './base'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities", {

        startWithParent: true,

        define: function( Entities, App, Backbone, Marionette, $, _ ){

            var log;

            Entities.TransactionModel = Entities.ClearModel.extend({

                urls: {
                    create: config.api.transactionCreate,
                    remove: config.api.transactionRemove,
                    getById: config.api.transactionGetById,
                    edit: config.api.transactionEdit
                },

                idAttribute: '_id',

                defaults: {
                    count: null,
                    tags: [],
                    date: new Date(),
                    comment: ''
                },

                validation: {},

                modelName: 'TransactionModel',

                createTransaction: function(options){

                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        count: model.count,
                        tags: model.tags,
                        date: model.date,
                        comment: model.comment
                    };

                    var defaults = {
                        url: this.urls.create,
                        type: 'post',
                        data: JSON.stringify(data)
                    };
                    options = _.extend(defaults, options);
                    this.xhr = this.save(null, options);
                    return this.xhr;
                },

                saveTransaction: function(options){
                    options = options || {};
                    var model = this.toJSON();
                    var attrs = null;

                    if(options.data) {
                        model = _.extend(model, options.data);
                        delete options.data;
                    }

                    var data = {
                        _id: model._id,
                        count: model.count,
                        tags: model.tags,
                        date: model.date,
                        comment: model.comment
                    };

                    var defaults = {
                        url: this.urls.edit,
                        type: 'post',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);

                    if( options.wait ){
                        attrs = data;
                        options.attrs = attrs;
                        delete options.data;
                    }

                    this.xhr = this.save(attrs, options);
                    return this.xhr;
                },

                removeTransaction: function(options){
                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        _id: model._id
                    };

                    var defaults = {
                        url: this.urls.remove,
                        type: 'post',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.destroy(options);
                    return this.xhr;
                },

                getData: function(options){
                    options = options || {};
                    var model =  this.toJSON();

                    var data = {
                        _id: model._id
                    };
                    var defaults = {
                        url: this.urls.getById,
                        type: 'POST',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.fetch(options);
                    return this.xhr;
                }

            });

            Entities.TransactionCollections = Entities.ClearCollection.extend({
                model: Entities.TransactionModel
            });

            var API = {
                getTrasactionModel: function(){
                    return new Entities.TransactionModel();
                },

                getTrasactionCollection: function(){
                    return new Entities.TransactionCollections();
                }
            }

            Entities.addInitializer(function(){
                log = App.reqres.request("getLog", 'Entities.Transaction');
                log("Initialized");
            })

            App.reqres.setHandler(config.reqres['transaction:entity'], function(){
                return API.getTrasactionModel();
            });

            App.reqres.setHandler(config.reqres['transaction:collection:entity'], function(){
                return API.getTrasactionCollection();
            });

            //get total transaction (month)
            //get transaction by tag (month)
            //

        }
    })


});
define('entities/statistics/total',[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    '../base'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities.Statistic", {

        startWithParent: true,

        define: function( Statistic, App, Backbone, Marionette, $, _ ){

            var log;

            Statistic.Total = App.Entities.ClearModel.extend({

                url: config.api.statistic.total,

                idAttribute: '_id',

                defaults: {
                    period: []
                },

                validation: {},

                modelName: 'StatisticTotalModel',

                getData: function(options){
                    options = options || {};
                    var model =  this.toJSON();

                    var data = {
                        period: model.period
                    };
                    var defaults = {
                        type: 'post',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.fetch(options);
                    return this.xhr;
                }

            });



            var API = {
                getModel: function(){
                    return new  Statistic.Total();
                }
            }

            App.reqres.setHandler(config.reqres['statistic:total:entity'], function(){
                return API.getModel();
            });

        }
    })


});
define('entities/statistics/totalByTag',[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    '../base'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities.Statistic", {

        startWithParent: true,

        define: function( Statistic, App, Backbone, Marionette, $, _ ){

            var log;

            Statistic.TotalByTag = App.Entities.ClearModel.extend({

                url: config.api.statistic.totalByTag,

                idAttribute: '_id',

                defaults: {
                    period: []
                },

                validation: {},

                modelName: 'StatisticTotalByTagModel',

                getData: function(options){
                    options = options || {};
                    var model =  this.toJSON();

                    var data = {
                        period: model.period
                    };
                    var defaults = {
                        type: 'post',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.fetch(options);
                    return this.xhr;
                }

            });



            var API = {
                getModel: function(){
                    return new  Statistic.TotalByTag();
                }
            }

            App.reqres.setHandler(config.reqres['statistic:totalByTag:entity'], function(){
                return API.getModel();
            });

        }
    })


});
define('entities/statistics/transactionsList',[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    '../base',
    '../transaction'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities.Statistic", {

        startWithParent: true,

        define: function( Statistic, App, Backbone, Marionette, $, _ ){

            var log;

            Statistic.TransactionsList = App.Entities.ClearModel.extend({

                url: config.api.statistic.listTransactions,

                defaults: {
                    period: [],
                    data: []
                },

                validation: {},

                modelName: 'TransactionsListModel',

                parse: function(response){
                    if( response && response.data ){

                        _.map(response.data, function(transaction){
                            transaction.date = new Date(transaction.date);
                        })

                        response.data = new App.Entities.TransactionCollections(response.data);
                    }

                    return response;
                },

                getData: function(options){
                    options = options || {};
                    var model =  this.toJSON();

                    var data = {
                        period: model.period
                    };
                    var defaults = {
                        type: 'POST',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.fetch(options);
                    return this.xhr;
                }

            });

            var API = {
                getModel: function(){
                    return new  Statistic.TransactionsList();
                }
            }

            App.reqres.setHandler(config.reqres['statistic:transactionList:entity'], function(){
                return API.getModel();
            });

        }
    })


});
;(function(win){
    var store = {},
        doc = win.document,
        localStorageName = 'localStorage',
        scriptTag = 'script',
        storage

    store.disabled = false
    store.set = function(key, value) {}
    store.get = function(key) {}
    store.remove = function(key) {}
    store.clear = function() {}
    store.transact = function(key, defaultVal, transactionFn) {
        var val = store.get(key)
        if (transactionFn == null) {
            transactionFn = defaultVal
            defaultVal = null
        }
        if (typeof val == 'undefined') { val = defaultVal || {} }
        transactionFn(val)
        store.set(key, val)
    }
    store.getAll = function() {}
    store.forEach = function() {}

    store.serialize = function(value) {
        return JSON.stringify(value)
    }
    store.deserialize = function(value) {
        if (typeof value != 'string') { return undefined }
        try { return JSON.parse(value) }
        catch(e) { return value || undefined }
    }

    // Functions to encapsulate questionable FireFox 3.6.13 behavior
    // when about.config::dom.storage.enabled === false
    // See https://github.com/marcuswestin/store.js/issues#issue/13
    function isLocalStorageNameSupported() {
        try { return (localStorageName in win && win[localStorageName]) }
        catch(err) { return false }
    }

    if (isLocalStorageNameSupported()) {
        storage = win[localStorageName]
        store.set = function(key, val) {
            if (val === undefined) { return store.remove(key) }
            storage.setItem(key, store.serialize(val))
            return val
        }
        store.get = function(key) { return store.deserialize(storage.getItem(key)) }
        store.remove = function(key) { storage.removeItem(key) }
        store.clear = function() { storage.clear() }
        store.getAll = function() {
            var ret = {}
            store.forEach(function(key, val) {
                ret[key] = val
            })
            return ret
        }
        store.forEach = function(callback) {
            for (var i=0; i<storage.length; i++) {
                var key = storage.key(i)
                callback(key, store.get(key))
            }
        }
    } else if (doc.documentElement.addBehavior) {
        var storageOwner,
            storageContainer
        // Since #userData storage applies only to specific paths, we need to
        // somehow link our data to a specific path.  We choose /favicon.ico
        // as a pretty safe option, since all browsers already make a request to
        // this URL anyway and being a 404 will not hurt us here.  We wrap an
        // iframe pointing to the favicon in an ActiveXObject(htmlfile) object
        // (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
        // since the iframe access rules appear to allow direct access and
        // manipulation of the document element, even for a 404 page.  This
        // document can be used instead of the current document (which would
        // have been limited to the current path) to perform #userData storage.
        try {
            storageContainer = new ActiveXObject('htmlfile')
            storageContainer.open()
            storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
            storageContainer.close()
            storageOwner = storageContainer.w.frames[0].document
            storage = storageOwner.createElement('div')
        } catch(e) {
            // somehow ActiveXObject instantiation failed (perhaps some special
            // security settings or otherwse), fall back to per-path storage
            storage = doc.createElement('div')
            storageOwner = doc.body
        }
        function withIEStorage(storeFunction) {
            return function() {
                var args = Array.prototype.slice.call(arguments, 0)
                args.unshift(storage)
                // See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
                // and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
                storageOwner.appendChild(storage)
                storage.addBehavior('#default#userData')
                storage.load(localStorageName)
                var result = storeFunction.apply(store, args)
                storageOwner.removeChild(storage)
                return result
            }
        }

        // In IE7, keys cannot start with a digit or contain certain chars.
        // See https://github.com/marcuswestin/store.js/issues/40
        // See https://github.com/marcuswestin/store.js/issues/83
        var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
        function ieKeyFix(key) {
            return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')
        }
        store.set = withIEStorage(function(storage, key, val) {
            key = ieKeyFix(key)
            if (val === undefined) { return store.remove(key) }
            storage.setAttribute(key, store.serialize(val))
            storage.save(localStorageName)
            return val
        })
        store.get = withIEStorage(function(storage, key) {
            key = ieKeyFix(key)
            return store.deserialize(storage.getAttribute(key))
        })
        store.remove = withIEStorage(function(storage, key) {
            key = ieKeyFix(key)
            storage.removeAttribute(key)
            storage.save(localStorageName)
        })
        store.clear = withIEStorage(function(storage) {
            var attributes = storage.XMLDocument.documentElement.attributes
            storage.load(localStorageName)
            for (var i=0, attr; attr=attributes[i]; i++) {
                storage.removeAttribute(attr.name)
            }
            storage.save(localStorageName)
        })
        store.getAll = function(storage) {
            var ret = {}
            store.forEach(function(key, val) {
                ret[key] = val
            })
            return ret
        }
        store.forEach = withIEStorage(function(storage, callback) {
            var attributes = storage.XMLDocument.documentElement.attributes
            for (var i=0, attr; attr=attributes[i]; ++i) {
                callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
            }
        })
    }

    try {
        var testKey = '__storejs__'
        store.set(testKey, testKey)
        if (store.get(testKey) != testKey) { store.disabled = true }
        store.remove(testKey)
    } catch(e) {
        store.disabled = true
    }
    store.enabled = !store.disabled

    if (typeof module != 'undefined' && module.exports && this.module !== module) { module.exports = store }
    else if (typeof define === 'function' && define.amd) { define('storage',store) }
    else { win.store = store }

})(Function('return this')());
/*global window:false, self:false, define:false, module:false */

/**
 * @license IDBWrapper - A cross-browser wrapper for IndexedDB
 * Copyright (c) 2011 - 2013 Jens Arps
 * http://jensarps.de/
 *
 * Licensed under the MIT (X11) license
 */

(function (name, definition, global) {
    if (typeof define === 'function') {
        define('idb',definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        global[name] = definition();
    }
})('IDBStore', function () {

    

    var defaultErrorHandler = function (error) {
        throw error;
    };

    var defaults = {
        storeName: 'Store',
        storePrefix: 'IDBWrapper-',
        dbVersion: 1,
        keyPath: 'id',
        autoIncrement: true,
        onStoreReady: function () {
        },
        onError: defaultErrorHandler,
        indexes: []
    };

    /**
     *
     * The IDBStore constructor
     *
     * @constructor
     * @name IDBStore
     * @version 1.4.1
     *
     * @param {Object} [kwArgs] An options object used to configure the store and
     *  set callbacks
     * @param {String} [kwArgs.storeName='Store'] The name of the store
     * @param {String} [kwArgs.storePrefix='IDBWrapper-'] A prefix that is
     *  internally used to construct the name of the database, which will be
     *  kwArgs.storePrefix + kwArgs.storeName
     * @param {Number} [kwArgs.dbVersion=1] The version of the store
     * @param {String} [kwArgs.keyPath='id'] The key path to use. If you want to
     *  setup IDBWrapper to work with out-of-line keys, you need to set this to
     *  `null`
     * @param {Boolean} [kwArgs.autoIncrement=true] If set to true, IDBStore will
     *  automatically make sure a unique keyPath value is present on each object
     *  that is stored.
     * @param {Function} [kwArgs.onStoreReady] A callback to be called when the
     *  store is ready to be used.
     * @param {Function} [kwArgs.onError=throw] A callback to be called when an
     *  error occurred during instantiation of the store.
     * @param {Array} [kwArgs.indexes=[]] An array of indexData objects
     *  defining the indexes to use with the store. For every index to be used
     *  one indexData object needs to be passed in the array.
     *  An indexData object is defined as follows:
     * @param {Object} [kwArgs.indexes.indexData] An object defining the index to
     *  use
     * @param {String} kwArgs.indexes.indexData.name The name of the index
     * @param {String} [kwArgs.indexes.indexData.keyPath] The key path of the index
     * @param {Boolean} [kwArgs.indexes.indexData.unique] Whether the index is unique
     * @param {Boolean} [kwArgs.indexes.indexData.multiEntry] Whether the index is multi entry
     * @param {Function} [onStoreReady] A callback to be called when the store
     * is ready to be used.
     * @example
     // create a store for customers with an additional index over the
     // `lastname` property.
     var myCustomerStore = new IDBStore({
        dbVersion: 1,
        storeName: 'customer-index',
        keyPath: 'customerid',
        autoIncrement: true,
        onStoreReady: populateTable,
        indexes: [
          { name: 'lastname', keyPath: 'lastname', unique: false, multiEntry: false }
        ]
      });
     * @example
     // create a generic store
     var myCustomerStore = new IDBStore({
        storeName: 'my-data-store',
        onStoreReady: function(){
          // start working with the store.
        }
      });
     */
    var IDBStore = function (kwArgs, onStoreReady) {

        if (typeof onStoreReady == 'undefined' && typeof kwArgs == 'function') {
            onStoreReady = kwArgs;
        }
        if (Object.prototype.toString.call(kwArgs) != '[object Object]') {
            kwArgs = {};
        }

        for (var key in defaults) {
            this[key] = typeof kwArgs[key] != 'undefined' ? kwArgs[key] : defaults[key];
        }

        this.dbName = this.storePrefix + this.storeName;
        this.dbVersion = parseInt(this.dbVersion, 10) || 1;

        onStoreReady && (this.onStoreReady = onStoreReady);

        var env = typeof window == 'object' ? window : self;
        this.idb = env.indexedDB || env.webkitIndexedDB || env.mozIndexedDB;
        this.keyRange = env.IDBKeyRange || env.webkitIDBKeyRange || env.mozIDBKeyRange;

        this.features = {
            hasAutoIncrement: !env.mozIndexedDB
        };

        this.consts = {
            'READ_ONLY':         'readonly',
            'READ_WRITE':        'readwrite',
            'VERSION_CHANGE':    'versionchange',
            'NEXT':              'next',
            'NEXT_NO_DUPLICATE': 'nextunique',
            'PREV':              'prev',
            'PREV_NO_DUPLICATE': 'prevunique'
        };

        this.openDB();
    };

    IDBStore.prototype = /** @lends IDBStore */ {

        /**
         * A pointer to the IDBStore ctor
         *
         * @type IDBStore
         */
        constructor: IDBStore,

        /**
         * The version of IDBStore
         *
         * @type String
         */
        version: '1.4.1',

        /**
         * A reference to the IndexedDB object
         *
         * @type Object
         */
        db: null,

        /**
         * The full name of the IndexedDB used by IDBStore, composed of
         * this.storePrefix + this.storeName
         *
         * @type String
         */
        dbName: null,

        /**
         * The version of the IndexedDB used by IDBStore
         *
         * @type Number
         */
        dbVersion: null,

        /**
         * A reference to the objectStore used by IDBStore
         *
         * @type Object
         */
        store: null,

        /**
         * The store name
         *
         * @type String
         */
        storeName: null,

        /**
         * The key path
         *
         * @type String
         */
        keyPath: null,

        /**
         * Whether IDBStore uses autoIncrement
         *
         * @type Boolean
         */
        autoIncrement: null,

        /**
         * The indexes used by IDBStore
         *
         * @type Array
         */
        indexes: null,

        /**
         * A hashmap of features of the used IDB implementation
         *
         * @type Object
         * @proprty {Boolean} autoIncrement If the implementation supports
         *  native auto increment
         */
        features: null,

        /**
         * The callback to be called when the store is ready to be used
         *
         * @type Function
         */
        onStoreReady: null,

        /**
         * The callback to be called if an error occurred during instantiation
         * of the store
         *
         * @type Function
         */
        onError: null,

        /**
         * The internal insertID counter
         *
         * @type Number
         * @private
         */
        _insertIdCount: 0,

        /**
         * Opens an IndexedDB; called by the constructor.
         *
         * Will check if versions match and compare provided index configuration
         * with existing ones, and update indexes if necessary.
         *
         * Will call this.onStoreReady() if everything went well and the store
         * is ready to use, and this.onError() is something went wrong.
         *
         * @private
         *
         */
        openDB: function () {

            var openRequest = this.idb.open(this.dbName, this.dbVersion);
            var preventSuccessCallback = false;

            openRequest.onerror = function (error) {

                var gotVersionErr = false;
                if ('error' in error.target) {
                    gotVersionErr = error.target.error.name == 'VersionError';
                } else if ('errorCode' in error.target) {
                    gotVersionErr = error.target.errorCode == 12;
                }

                if (gotVersionErr) {
                    this.onError(new Error('The version number provided is lower than the existing one.'));
                } else {
                    this.onError(error);
                }
            }.bind(this);

            openRequest.onsuccess = function (event) {

                if (preventSuccessCallback) {
                    return;
                }

                if(this.db){
                    this.onStoreReady();
                    return;
                }

                this.db = event.target.result;

                if(typeof this.db.version == 'string'){
                    this.onError(new Error('The IndexedDB implementation in this browser is outdated. Please upgrade your browser.'));
                    return;
                }

                if(!this.db.objectStoreNames.contains(this.storeName)){
                    // We should never ever get here.
                    // Lets notify the user anyway.
                    this.onError(new Error('Something is wrong with the IndexedDB implementation in this browser. Please upgrade your browser.'));
                    return;
                }

                var emptyTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
                this.store = emptyTransaction.objectStore(this.storeName);

                // check indexes
                var existingIndexes = Array.prototype.slice.call(this.getIndexList());
                this.indexes.forEach(function(indexData){
                    var indexName = indexData.name;

                    if(!indexName){
                        preventSuccessCallback = true;
                        this.onError(new Error('Cannot create index: No index name given.'));
                        return;
                    }

                    this.normalizeIndexData(indexData);

                    if(this.hasIndex(indexName)){
                        // check if it complies
                        var actualIndex = this.store.index(indexName);
                        var complies = this.indexComplies(actualIndex, indexData);
                        if(!complies){
                            preventSuccessCallback = true;
                            this.onError(new Error('Cannot modify index "' + indexName + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
                        }

                        existingIndexes.splice(existingIndexes.indexOf(indexName), 1);
                    } else {
                        preventSuccessCallback = true;
                        this.onError(new Error('Cannot create new index "' + indexName + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
                    }

                }, this);

                if (existingIndexes.length) {
                    preventSuccessCallback = true;
                    this.onError(new Error('Cannot delete index(es) "' + existingIndexes.toString() + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
                }

                preventSuccessCallback || this.onStoreReady();
            }.bind(this);

            openRequest.onupgradeneeded = function(/* IDBVersionChangeEvent */ event){

                this.db = event.target.result;

                if(this.db.objectStoreNames.contains(this.storeName)){
                    this.store = event.target.transaction.objectStore(this.storeName);
                } else {
                    var optionalParameters = { autoIncrement: this.autoIncrement };
                    if (this.keyPath !== null) {
                        optionalParameters.keyPath = this.keyPath;
                    }
                    this.store = this.db.createObjectStore(this.storeName, optionalParameters);
                }

                var existingIndexes = Array.prototype.slice.call(this.getIndexList());
                this.indexes.forEach(function(indexData){
                    var indexName = indexData.name;

                    if(!indexName){
                        preventSuccessCallback = true;
                        this.onError(new Error('Cannot create index: No index name given.'));
                    }

                    this.normalizeIndexData(indexData);

                    if(this.hasIndex(indexName)){
                        // check if it complies
                        var actualIndex = this.store.index(indexName);
                        var complies = this.indexComplies(actualIndex, indexData);
                        if(!complies){
                            // index differs, need to delete and re-create
                            this.store.deleteIndex(indexName);
                            this.store.createIndex(indexName, indexData.keyPath, { unique: indexData.unique, multiEntry: indexData.multiEntry });
                        }

                        existingIndexes.splice(existingIndexes.indexOf(indexName), 1);
                    } else {
                        this.store.createIndex(indexName, indexData.keyPath, { unique: indexData.unique, multiEntry: indexData.multiEntry });
                    }

                }, this);

                if (existingIndexes.length) {
                    existingIndexes.forEach(function(_indexName){
                        this.store.deleteIndex(_indexName);
                    }, this);
                }

            }.bind(this);
        },

        /**
         * Deletes the database used for this store if the IDB implementations
         * provides that functionality.
         */
        deleteDatabase: function () {
            if (this.idb.deleteDatabase) {
                this.idb.deleteDatabase(this.dbName);
            }
        },

        /*********************
         * data manipulation *
         *********************/

        /**
         * Puts an object into the store. If an entry with the given id exists,
         * it will be overwritten. This method has a different signature for inline
         * keys and out-of-line keys; please see the examples below.
         *
         * @param {*} [key] The key to store. This is only needed if IDBWrapper
         *  is set to use out-of-line keys. For inline keys - the default scenario -
         *  this can be omitted.
         * @param {Object} value The data object to store.
         * @param {Function} [onSuccess] A callback that is called if insertion
         *  was successful.
         * @param {Function} [onError] A callback that is called if insertion
         *  failed.
         * @returns {IDBTransaction} The transaction used for this operation.
         * @example
         // Storing an object, using inline keys (the default scenario):
         var myCustomer = {
          customerid: 2346223,
          lastname: 'Doe',
          firstname: 'John'
        };
         myCustomerStore.put(myCustomer, mySuccessHandler, myErrorHandler);
         // Note that passing success- and error-handlers is optional.
         * @example
         // Storing an object, using out-of-line keys:
         var myCustomer = {
         lastname: 'Doe',
         firstname: 'John'
       };
         myCustomerStore.put(2346223, myCustomer, mySuccessHandler, myErrorHandler);
         // Note that passing success- and error-handlers is optional.
         */
        put: function (key, value, onSuccess, onError) {
            if (this.keyPath !== null) {
                onError = onSuccess;
                onSuccess = value;
                value = key;
            }
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = noop);

            var hasSuccess = false,
                result = null,
                putRequest;

            var putTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
            putTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            putTransaction.onabort = onError;
            putTransaction.onerror = onError;

            if (this.keyPath !== null) { // in-line keys
                this._addIdPropertyIfNeeded(value);
                putRequest = putTransaction.objectStore(this.storeName).put(value);
            } else { // out-of-line keys
                putRequest = putTransaction.objectStore(this.storeName).put(value, key);
            }
            putRequest.onsuccess = function (event) {
                hasSuccess = true;
                result = event.target.result;
            };
            putRequest.onerror = onError;

            return putTransaction;
        },

        /**
         * Retrieves an object from the store. If no entry exists with the given id,
         * the success handler will be called with null as first and only argument.
         *
         * @param {*} key The id of the object to fetch.
         * @param {Function} [onSuccess] A callback that is called if fetching
         *  was successful. Will receive the object as only argument.
         * @param {Function} [onError] A callback that will be called if an error
         *  occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        get: function (key, onSuccess, onError) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = noop);

            var hasSuccess = false,
                result = null;

            var getTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
            getTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            getTransaction.onabort = onError;
            getTransaction.onerror = onError;
            var getRequest = getTransaction.objectStore(this.storeName).get(key);
            getRequest.onsuccess = function (event) {
                hasSuccess = true;
                result = event.target.result;
            };
            getRequest.onerror = onError;

            return getTransaction;
        },

        /**
         * Removes an object from the store.
         *
         * @param {*} key The id of the object to remove.
         * @param {Function} [onSuccess] A callback that is called if the removal
         *  was successful.
         * @param {Function} [onError] A callback that will be called if an error
         *  occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        remove: function (key, onSuccess, onError) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = noop);

            var hasSuccess = false,
                result = null;

            var removeTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
            removeTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            removeTransaction.onabort = onError;
            removeTransaction.onerror = onError;

            var deleteRequest = removeTransaction.objectStore(this.storeName)['delete'](key);
            deleteRequest.onsuccess = function (event) {
                hasSuccess = true;
                result = event.target.result;
            };
            deleteRequest.onerror = onError;

            return removeTransaction;
        },

        /**
         * Runs a batch of put and/or remove operations on the store.
         *
         * @param {Array} dataArray An array of objects containing the operation to run
         *  and the data object (for put operations).
         * @param {Function} [onSuccess] A callback that is called if all operations
         *  were successful.
         * @param {Function} [onError] A callback that is called if an error
         *  occurred during one of the operations.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        batch: function (dataArray, onSuccess, onError) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = noop);

            if(Object.prototype.toString.call(dataArray) != '[object Array]'){
                onError(new Error('dataArray argument must be of type Array.'));
            }
            var batchTransaction = this.db.transaction([this.storeName] , this.consts.READ_WRITE);
            batchTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(hasSuccess);
            };
            batchTransaction.onabort = onError;
            batchTransaction.onerror = onError;

            var count = dataArray.length;
            var called = false;
            var hasSuccess = false;

            var onItemSuccess = function () {
                count--;
                if (count === 0 && !called) {
                    called = true;
                    hasSuccess = true;
                }
            };

            dataArray.forEach(function (operation) {
                var type = operation.type;
                var key = operation.key;
                var value = operation.value;

                var onItemError = function (err) {
                    batchTransaction.abort();
                    if (!called) {
                        called = true;
                        onError(err, type, key);
                    }
                };

                if (type == 'remove') {
                    var deleteRequest = batchTransaction.objectStore(this.storeName)['delete'](key);
                    deleteRequest.onsuccess = onItemSuccess;
                    deleteRequest.onerror = onItemError;
                } else if (type == 'put') {
                    var putRequest;
                    if (this.keyPath !== null) { // in-line keys
                        this._addIdPropertyIfNeeded(value);
                        putRequest = batchTransaction.objectStore(this.storeName).put(value);
                    } else { // out-of-line keys
                        putRequest = batchTransaction.objectStore(this.storeName).put(value, key);
                    }
                    putRequest.onsuccess = onItemSuccess;
                    putRequest.onerror = onItemError;
                }
            }, this);

            return batchTransaction;
        },

        /**
         * Takes an array of objects and stores them in a single transaction.
         *
         * @param {Array} dataArray An array of objects to store
         * @param {Function} [onSuccess] A callback that is called if all operations
         *  were successful.
         * @param {Function} [onError] A callback that is called if an error
         *  occurred during one of the operations.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        putBatch: function (dataArray, onSuccess, onError) {
            var batchData = dataArray.map(function(item){
                return { type: 'put', value: item };
            });

            return this.batch(batchData, onSuccess, onError);
        },

        /**
         * Takes an array of keys and removes matching objects in a single
         * transaction.
         *
         * @param {Array} keyArray An array of keys to remove
         * @param {Function} [onSuccess] A callback that is called if all operations
         *  were successful.
         * @param {Function} [onError] A callback that is called if an error
         *  occurred during one of the operations.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        removeBatch: function (keyArray, onSuccess, onError) {
            var batchData = keyArray.map(function(key){
                return { type: 'remove', key: key };
            });

            return this.batch(batchData, onSuccess, onError);
        },

        /**
         * Takes an array of keys and fetches matching objects
         *
         * @param {Array} keyArray An array of keys identifying the objects to fetch
         * @param {Function} [onSuccess] A callback that is called if all operations
         *  were successful.
         * @param {Function} [onError] A callback that is called if an error
         *  occurred during one of the operations.
         * @param {String} [arrayType='sparse'] The type of array to pass to the
         *  success handler. May be one of 'sparse', 'dense' or 'skip'. Defaults to
         *  'sparse'. This parameter specifies how to handle the situation if a get
         *  operation did not throw an error, but there was no matching object in
         *  the database. In most cases, 'sparse' provides the most desired
         *  behavior. See the examples for details.
         * @returns {IDBTransaction} The transaction used for this operation.
         * @example
         // given that there are two objects in the database with the keypath
         // values 1 and 2, and the call looks like this:
         myStore.getBatch([1, 5, 2], onError, function (data) { … }, arrayType);

         // this is what the `data` array will be like:

         // arrayType == 'sparse':
         // data is a sparse array containing two entries and having a length of 3:
         [Object, 2: Object]
         0: Object
         2: Object
         length: 3
         __proto__: Array[0]
         // calling forEach on data will result in the callback being called two
         // times, with the index parameter matching the index of the key in the
         // keyArray.

         // arrayType == 'dense':
         // data is a dense array containing three entries and having a length of 3,
         // where data[1] is of type undefined:
         [Object, undefined, Object]
         0: Object
         1: undefined
         2: Object
         length: 3
         __proto__: Array[0]
         // calling forEach on data will result in the callback being called three
         // times, with the index parameter matching the index of the key in the
         // keyArray, but the second call will have undefined as first argument.

         // arrayType == 'skip':
         // data is a dense array containing two entries and having a length of 2:
         [Object, Object]
         0: Object
         1: Object
         length: 2
         __proto__: Array[0]
         // calling forEach on data will result in the callback being called two
         // times, with the index parameter not matching the index of the key in the
         // keyArray.
         */
        getBatch: function (keyArray, onSuccess, onError, arrayType) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = noop);
            arrayType || (arrayType = 'sparse');

            if(Object.prototype.toString.call(keyArray) != '[object Array]'){
                onError(new Error('keyArray argument must be of type Array.'));
            }
            var batchTransaction = this.db.transaction([this.storeName] , this.consts.READ_ONLY);
            batchTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            batchTransaction.onabort = onError;
            batchTransaction.onerror = onError;

            var data = [];
            var count = keyArray.length;
            var called = false;
            var hasSuccess = false;
            var result = null;

            var onItemSuccess = function (event) {
                if (event.target.result || arrayType == 'dense') {
                    data.push(event.target.result);
                } else if (arrayType == 'sparse') {
                    data.length++;
                }
                count--;
                if (count === 0) {
                    called = true;
                    hasSuccess = true;
                    result = data;
                }
            };

            keyArray.forEach(function (key) {

                var onItemError = function (err) {
                    called = true;
                    result = err;
                    onError(err);
                    batchTransaction.abort();
                };

                var getRequest = batchTransaction.objectStore(this.storeName).get(key);
                getRequest.onsuccess = onItemSuccess;
                getRequest.onerror = onItemError;

            }, this);

            return batchTransaction;
        },

        /**
         * Fetches all entries in the store.
         *
         * @param {Function} [onSuccess] A callback that is called if the operation
         *  was successful. Will receive an array of objects.
         * @param {Function} [onError] A callback that will be called if an error
         *  occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        getAll: function (onSuccess, onError) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = noop);
            var getAllTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
            var store = getAllTransaction.objectStore(this.storeName);
            if (store.getAll) {
                this._getAllNative(getAllTransaction, store, onSuccess, onError);
            } else {
                this._getAllCursor(getAllTransaction, store, onSuccess, onError);
            }

            return getAllTransaction;
        },

        /**
         * Implements getAll for IDB implementations that have a non-standard
         * getAll() method.
         *
         * @param {Object} getAllTransaction An open READ transaction.
         * @param {Object} store A reference to the store.
         * @param {Function} onSuccess A callback that will be called if the
         *  operation was successful.
         * @param {Function} onError A callback that will be called if an
         *  error occurred during the operation.
         * @private
         */
        _getAllNative: function (getAllTransaction, store, onSuccess, onError) {
            var hasSuccess = false,
                result = null;

            getAllTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            getAllTransaction.onabort = onError;
            getAllTransaction.onerror = onError;

            var getAllRequest = store.getAll();
            getAllRequest.onsuccess = function (event) {
                hasSuccess = true;
                result = event.target.result;
            };
            getAllRequest.onerror = onError;
        },

        /**
         * Implements getAll for IDB implementations that do not have a getAll()
         * method.
         *
         * @param {Object} getAllTransaction An open READ transaction.
         * @param {Object} store A reference to the store.
         * @param {Function} onSuccess A callback that will be called if the
         *  operation was successful.
         * @param {Function} onError A callback that will be called if an
         *  error occurred during the operation.
         * @private
         */
        _getAllCursor: function (getAllTransaction, store, onSuccess, onError) {
            var all = [],
                hasSuccess = false,
                result = null;

            getAllTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            getAllTransaction.onabort = onError;
            getAllTransaction.onerror = onError;

            var cursorRequest = store.openCursor();
            cursorRequest.onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    all.push(cursor.value);
                    cursor['continue']();
                }
                else {
                    hasSuccess = true;
                    result = all;
                }
            };
            cursorRequest.onError = onError;
        },

        /**
         * Clears the store, i.e. deletes all entries in the store.
         *
         * @param {Function} [onSuccess] A callback that will be called if the
         *  operation was successful.
         * @param {Function} [onError] A callback that will be called if an
         *  error occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        clear: function (onSuccess, onError) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = noop);

            var hasSuccess = false,
                result = null;

            var clearTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
            clearTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            clearTransaction.onabort = onError;
            clearTransaction.onerror = onError;

            var clearRequest = clearTransaction.objectStore(this.storeName).clear();
            clearRequest.onsuccess = function (event) {
                hasSuccess = true;
                result = event.target.result;
            };
            clearRequest.onerror = onError;

            return clearTransaction;
        },

        /**
         * Checks if an id property needs to present on a object and adds one if
         * necessary.
         *
         * @param {Object} dataObj The data object that is about to be stored
         * @private
         */
        _addIdPropertyIfNeeded: function (dataObj) {
            if (!this.features.hasAutoIncrement && typeof dataObj[this.keyPath] == 'undefined') {
                dataObj[this.keyPath] = this._insertIdCount++ + Date.now();
            }
        },

        /************
         * indexing *
         ************/

        /**
         * Returns a DOMStringList of index names of the store.
         *
         * @return {DOMStringList} The list of index names
         */
        getIndexList: function () {
            return this.store.indexNames;
        },

        /**
         * Checks if an index with the given name exists in the store.
         *
         * @param {String} indexName The name of the index to look for
         * @return {Boolean} Whether the store contains an index with the given name
         */
        hasIndex: function (indexName) {
            return this.store.indexNames.contains(indexName);
        },

        /**
         * Normalizes an object containing index data and assures that all
         * properties are set.
         *
         * @param {Object} indexData The index data object to normalize
         * @param {String} indexData.name The name of the index
         * @param {String} [indexData.keyPath] The key path of the index
         * @param {Boolean} [indexData.unique] Whether the index is unique
         * @param {Boolean} [indexData.multiEntry] Whether the index is multi entry
         */
        normalizeIndexData: function (indexData) {
            indexData.keyPath = indexData.keyPath || indexData.name;
            indexData.unique = !!indexData.unique;
            indexData.multiEntry = !!indexData.multiEntry;
        },

        /**
         * Checks if an actual index complies with an expected index.
         *
         * @param {Object} actual The actual index found in the store
         * @param {Object} expected An Object describing an expected index
         * @return {Boolean} Whether both index definitions are identical
         */
        indexComplies: function (actual, expected) {
            var complies = ['keyPath', 'unique', 'multiEntry'].every(function (key) {
                // IE10 returns undefined for no multiEntry
                if (key == 'multiEntry' && actual[key] === undefined && expected[key] === false) {
                    return true;
                }
                // Compound keys
                if (key == 'keyPath' && Object.prototype.toString.call(expected[key]) == '[object Array]') {
                    var exp = expected.keyPath;
                    var act = actual.keyPath;

                    // IE10 can't handle keyPath sequences and stores them as a string.
                    // The index will be unusable there, but let's still return true if
                    // the keyPath sequence matches.
                    if (typeof act == 'string') {
                        return exp.toString() == act;
                    }

                    // Chrome/Opera stores keyPath squences as DOMStringList, Firefox
                    // as Array
                    if ( ! (typeof act.contains == 'function' || typeof act.indexOf == 'function') ) {
                        return false;
                    }

                    if (act.length !== exp.length) {
                        return false;
                    }

                    for (var i = 0, m = exp.length; i<m; i++) {
                        if ( ! ( (act.contains && act.contains(exp[i])) || act.indexOf(exp[i] !== -1) )) {
                            return false;
                        }
                    }
                    return true;
                }
                return expected[key] == actual[key];
            });
            return complies;
        },

        /**********
         * cursor *
         **********/

        /**
         * Iterates over the store using the given options and calling onItem
         * for each entry matching the options.
         *
         * @param {Function} onItem A callback to be called for each match
         * @param {Object} [options] An object defining specific options
         * @param {Object} [options.index=null] An IDBIndex to operate on
         * @param {String} [options.order=ASC] The order in which to provide the
         *  results, can be 'DESC' or 'ASC'
         * @param {Boolean} [options.autoContinue=true] Whether to automatically
         *  iterate the cursor to the next result
         * @param {Boolean} [options.filterDuplicates=false] Whether to exclude
         *  duplicate matches
         * @param {Object} [options.keyRange=null] An IDBKeyRange to use
         * @param {Boolean} [options.writeAccess=false] Whether grant write access
         *  to the store in the onItem callback
         * @param {Function} [options.onEnd=null] A callback to be called after
         *  iteration has ended
         * @param {Function} [options.onError=throw] A callback to be called
         *  if an error occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        iterate: function (onItem, options) {
            options = mixin({
                index: null,
                order: 'ASC',
                autoContinue: true,
                filterDuplicates: false,
                keyRange: null,
                writeAccess: false,
                onEnd: null,
                onError: defaultErrorHandler
            }, options || {});

            var directionType = options.order.toLowerCase() == 'desc' ? 'PREV' : 'NEXT';
            if (options.filterDuplicates) {
                directionType += '_NO_DUPLICATE';
            }

            var hasSuccess = false;
            var cursorTransaction = this.db.transaction([this.storeName], this.consts[options.writeAccess ? 'READ_WRITE' : 'READ_ONLY']);
            var cursorTarget = cursorTransaction.objectStore(this.storeName);
            if (options.index) {
                cursorTarget = cursorTarget.index(options.index);
            }

            cursorTransaction.oncomplete = function () {
                if (!hasSuccess) {
                    options.onError(null);
                    return;
                }
                if (options.onEnd) {
                    options.onEnd();
                } else {
                    onItem(null);
                }
            };
            cursorTransaction.onabort = options.onError;
            cursorTransaction.onerror = options.onError;

            var cursorRequest = cursorTarget.openCursor(options.keyRange, this.consts[directionType]);
            cursorRequest.onerror = options.onError;
            cursorRequest.onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    onItem(cursor.value, cursor, cursorTransaction);
                    if (options.autoContinue) {
                        cursor['continue']();
                    }
                } else {
                    hasSuccess = true;
                }
            };

            return cursorTransaction;
        },

        /**
         * Runs a query against the store and passes an array containing matched
         * objects to the success handler.
         *
         * @param {Function} onSuccess A callback to be called when the operation
         *  was successful.
         * @param {Object} [options] An object defining specific query options
         * @param {Object} [options.index=null] An IDBIndex to operate on
         * @param {String} [options.order=ASC] The order in which to provide the
         *  results, can be 'DESC' or 'ASC'
         * @param {Boolean} [options.filterDuplicates=false] Whether to exclude
         *  duplicate matches
         * @param {Object} [options.keyRange=null] An IDBKeyRange to use
         * @param {Function} [options.onError=throw] A callback to be called if an error
         *  occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        query: function (onSuccess, options) {
            var result = [];
            options = options || {};
            options.onEnd = function () {
                onSuccess(result);
            };
            return this.iterate(function (item) {
                result.push(item);
            }, options);
        },

        /**
         *
         * Runs a query against the store, but only returns the number of matches
         * instead of the matches itself.
         *
         * @param {Function} onSuccess A callback to be called if the opration
         *  was successful.
         * @param {Object} [options] An object defining specific options
         * @param {Object} [options.index=null] An IDBIndex to operate on
         * @param {Object} [options.keyRange=null] An IDBKeyRange to use
         * @param {Function} [options.onError=throw] A callback to be called if an error
         *  occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        count: function (onSuccess, options) {

            options = mixin({
                index: null,
                keyRange: null
            }, options || {});

            var onError = options.onError || defaultErrorHandler;

            var hasSuccess = false,
                result = null;

            var cursorTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
            cursorTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            cursorTransaction.onabort = onError;
            cursorTransaction.onerror = onError;

            var cursorTarget = cursorTransaction.objectStore(this.storeName);
            if (options.index) {
                cursorTarget = cursorTarget.index(options.index);
            }
            var countRequest = cursorTarget.count(options.keyRange);
            countRequest.onsuccess = function (evt) {
                hasSuccess = true;
                result = evt.target.result;
            };
            countRequest.onError = onError;

            return cursorTransaction;
        },

        /**************/
        /* key ranges */
        /**************/

        /**
         * Creates a key range using specified options. This key range can be
         * handed over to the count() and iterate() methods.
         *
         * Note: You must provide at least one or both of "lower" or "upper" value.
         *
         * @param {Object} options The options for the key range to create
         * @param {*} [options.lower] The lower bound
         * @param {Boolean} [options.excludeLower] Whether to exclude the lower
         *  bound passed in options.lower from the key range
         * @param {*} [options.upper] The upper bound
         * @param {Boolean} [options.excludeUpper] Whether to exclude the upper
         *  bound passed in options.upper from the key range
         * @param {*} [options.only] A single key value. Use this if you need a key
         *  range that only includes one value for a key. Providing this
         *  property invalidates all other properties.
         * @return {Object} The IDBKeyRange representing the specified options
         */
        makeKeyRange: function(options){
            /*jshint onecase:true */
            var keyRange,
                hasLower = typeof options.lower != 'undefined',
                hasUpper = typeof options.upper != 'undefined',
                isOnly = typeof options.only != 'undefined';

            switch(true){
                case isOnly:
                    keyRange = this.keyRange.only(options.only);
                    break;
                case hasLower && hasUpper:
                    keyRange = this.keyRange.bound(options.lower, options.upper, options.excludeLower, options.excludeUpper);
                    break;
                case hasLower:
                    keyRange = this.keyRange.lowerBound(options.lower, options.excludeLower);
                    break;
                case hasUpper:
                    keyRange = this.keyRange.upperBound(options.upper, options.excludeUpper);
                    break;
                default:
                    throw new Error('Cannot create KeyRange. Provide one or both of "lower" or "upper" value, or an "only" value.');
            }

            return keyRange;

        }

    };

    /** helpers **/

    var noop = function () {
    };
    var empty = {};
    var mixin = function (target, source) {
        var name, s;
        for (name in source) {
            s = source[name];
            if (s !== empty[name] && s !== target[name]) {
                target[name] = s;
            }
        }
        return target;
    };

    IDBStore.version = IDBStore.prototype.version;

    return IDBStore;

}, this);
define('modules/server/controllers/base',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'backbone.server'
], function(jQuery, Backbone, Marionette, App, config, server){
    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            Server.BaseController = Marionette.Controller.extend({
                initialize: function(options){
                    this.context = options.context;
                    this.def = options.def;
                    this.data = {};
                    if(this.context.data) this.data = JSON.parse(this.context.data);
                }
            });
        }
    })


});
/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
/*jshint onevar: false, indent:4 */
/*global setImmediate: false, setTimeout: false, console: false */
(function () {

    var async = {};

    // global on the server, window in the browser
    var root, previous_async;

    root = this;
    if (root != null) {
        previous_async = root.async;
    }

    async.noConflict = function () {
        root.async = previous_async;
        return async;
    };

    function only_once(fn) {
        var called = false;
        return function() {
            if (called) throw new Error("Callback was already called.");
            called = true;
            fn.apply(root, arguments);
        }
    }

    //// cross-browser compatiblity functions ////

    var _toString = Object.prototype.toString;

    var _isArray = Array.isArray || function (obj) {
        return _toString.call(obj) === '[object Array]';
    };

    var _each = function (arr, iterator) {
        if (arr.forEach) {
            return arr.forEach(iterator);
        }
        for (var i = 0; i < arr.length; i += 1) {
            iterator(arr[i], i, arr);
        }
    };

    var _map = function (arr, iterator) {
        if (arr.map) {
            return arr.map(iterator);
        }
        var results = [];
        _each(arr, function (x, i, a) {
            results.push(iterator(x, i, a));
        });
        return results;
    };

    var _reduce = function (arr, iterator, memo) {
        if (arr.reduce) {
            return arr.reduce(iterator, memo);
        }
        _each(arr, function (x, i, a) {
            memo = iterator(memo, x, i, a);
        });
        return memo;
    };

    var _keys = function (obj) {
        if (Object.keys) {
            return Object.keys(obj);
        }
        var keys = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };

    //// exported async module functions ////

    //// nextTick implementation with browser-compatible fallback ////
    if (typeof process === 'undefined' || !(process.nextTick)) {
        if (typeof setImmediate === 'function') {
            async.nextTick = function (fn) {
                // not a direct alias for IE10 compatibility
                setImmediate(fn);
            };
            async.setImmediate = async.nextTick;
        }
        else {
            async.nextTick = function (fn) {
                setTimeout(fn, 0);
            };
            async.setImmediate = async.nextTick;
        }
    }
    else {
        async.nextTick = process.nextTick;
        if (typeof setImmediate !== 'undefined') {
            async.setImmediate = function (fn) {
                // not a direct alias for IE10 compatibility
                setImmediate(fn);
            };
        }
        else {
            async.setImmediate = async.nextTick;
        }
    }

    async.each = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        _each(arr, function (x) {
            iterator(x, only_once(done) );
        });
        function done(err) {
            if (err) {
                callback(err);
                callback = function () {};
            }
            else {
                completed += 1;
                if (completed >= arr.length) {
                    callback();
                }
            }
        }
    };
    async.forEach = async.each;

    async.eachSeries = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        var iterate = function () {
            iterator(arr[completed], function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback();
                    }
                    else {
                        iterate();
                    }
                }
            });
        };
        iterate();
    };
    async.forEachSeries = async.eachSeries;

    async.eachLimit = function (arr, limit, iterator, callback) {
        var fn = _eachLimit(limit);
        fn.apply(null, [arr, iterator, callback]);
    };
    async.forEachLimit = async.eachLimit;

    var _eachLimit = function (limit) {

        return function (arr, iterator, callback) {
            callback = callback || function () {};
            if (!arr.length || limit <= 0) {
                return callback();
            }
            var completed = 0;
            var started = 0;
            var running = 0;

            (function replenish () {
                if (completed >= arr.length) {
                    return callback();
                }

                while (running < limit && started < arr.length) {
                    started += 1;
                    running += 1;
                    iterator(arr[started - 1], function (err) {
                        if (err) {
                            callback(err);
                            callback = function () {};
                        }
                        else {
                            completed += 1;
                            running -= 1;
                            if (completed >= arr.length) {
                                callback();
                            }
                            else {
                                replenish();
                            }
                        }
                    });
                }
            })();
        };
    };


    var doParallel = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.each].concat(args));
        };
    };
    var doParallelLimit = function(limit, fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [_eachLimit(limit)].concat(args));
        };
    };
    var doSeries = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.eachSeries].concat(args));
        };
    };


    var _asyncMap = function (eachfn, arr, iterator, callback) {
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        if (!callback) {
            eachfn(arr, function (x, callback) {
                iterator(x.value, function (err) {
                    callback(err);
                });
            });
        } else {
            var results = [];
            eachfn(arr, function (x, callback) {
                iterator(x.value, function (err, v) {
                    results[x.index] = v;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = function (arr, limit, iterator, callback) {
        return _mapLimit(limit)(arr, iterator, callback);
    };

    var _mapLimit = function(limit) {
        return doParallelLimit(limit, _asyncMap);
    };

    // reduce only has a series version, as doing reduce in parallel won't
    // work in many situations.
    async.reduce = function (arr, memo, iterator, callback) {
        async.eachSeries(arr, function (x, callback) {
            iterator(memo, x, function (err, v) {
                memo = v;
                callback(err);
            });
        }, function (err) {
            callback(err, memo);
        });
    };
    // inject alias
    async.inject = async.reduce;
    // foldl alias
    async.foldl = async.reduce;

    async.reduceRight = function (arr, memo, iterator, callback) {
        var reversed = _map(arr, function (x) {
            return x;
        }).reverse();
        async.reduce(reversed, memo, iterator, callback);
    };
    // foldr alias
    async.foldr = async.reduceRight;

    var _filter = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.filter = doParallel(_filter);
    async.filterSeries = doSeries(_filter);
    // select alias
    async.select = async.filter;
    async.selectSeries = async.filterSeries;

    var _reject = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (!v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.reject = doParallel(_reject);
    async.rejectSeries = doSeries(_reject);

    var _detect = function (eachfn, arr, iterator, main_callback) {
        eachfn(arr, function (x, callback) {
            iterator(x, function (result) {
                if (result) {
                    main_callback(x);
                    main_callback = function () {};
                }
                else {
                    callback();
                }
            });
        }, function (err) {
            main_callback();
        });
    };
    async.detect = doParallel(_detect);
    async.detectSeries = doSeries(_detect);

    async.some = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (v) {
                    main_callback(true);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(false);
        });
    };
    // any alias
    async.any = async.some;

    async.every = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (!v) {
                    main_callback(false);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(true);
        });
    };
    // all alias
    async.all = async.every;

    async.sortBy = function (arr, iterator, callback) {
        async.map(arr, function (x, callback) {
            iterator(x, function (err, criteria) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, {value: x, criteria: criteria});
                }
            });
        }, function (err, results) {
            if (err) {
                return callback(err);
            }
            else {
                var fn = function (left, right) {
                    var a = left.criteria, b = right.criteria;
                    return a < b ? -1 : a > b ? 1 : 0;
                };
                callback(null, _map(results.sort(fn), function (x) {
                    return x.value;
                }));
            }
        });
    };

    async.auto = function (tasks, callback) {
        callback = callback || function () {};
        var keys = _keys(tasks);
        var remainingTasks = keys.length
        if (!remainingTasks) {
            return callback();
        }

        var results = {};

        var listeners = [];
        var addListener = function (fn) {
            listeners.unshift(fn);
        };
        var removeListener = function (fn) {
            for (var i = 0; i < listeners.length; i += 1) {
                if (listeners[i] === fn) {
                    listeners.splice(i, 1);
                    return;
                }
            }
        };
        var taskComplete = function () {
            remainingTasks--
            _each(listeners.slice(0), function (fn) {
                fn();
            });
        };

        addListener(function () {
            if (!remainingTasks) {
                var theCallback = callback;
                // prevent final callback from calling itself if it errors
                callback = function () {};

                theCallback(null, results);
            }
        });

        _each(keys, function (k) {
            var task = _isArray(tasks[k]) ? tasks[k]: [tasks[k]];
            var taskCallback = function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (args.length <= 1) {
                    args = args[0];
                }
                if (err) {
                    var safeResults = {};
                    _each(_keys(results), function(rkey) {
                        safeResults[rkey] = results[rkey];
                    });
                    safeResults[k] = args;
                    callback(err, safeResults);
                    // stop subsequent errors hitting callback multiple times
                    callback = function () {};
                }
                else {
                    results[k] = args;
                    async.setImmediate(taskComplete);
                }
            };
            var requires = task.slice(0, Math.abs(task.length - 1)) || [];
            var ready = function () {
                return _reduce(requires, function (a, x) {
                    return (a && results.hasOwnProperty(x));
                }, true) && !results.hasOwnProperty(k);
            };
            if (ready()) {
                task[task.length - 1](taskCallback, results);
            }
            else {
                var listener = function () {
                    if (ready()) {
                        removeListener(listener);
                        task[task.length - 1](taskCallback, results);
                    }
                };
                addListener(listener);
            }
        });
    };

    async.retry = function(times, task, callback) {
        var DEFAULT_TIMES = 5;
        var attempts = [];
        // Use defaults if times not passed
        if (typeof times === 'function') {
            callback = task;
            task = times;
            times = DEFAULT_TIMES;
        }
        // Make sure times is a number
        times = parseInt(times, 10) || DEFAULT_TIMES;
        var wrappedTask = function(wrappedCallback, wrappedResults) {
            var retryAttempt = function(task, finalAttempt) {
                return function(seriesCallback) {
                    task(function(err, result){
                        seriesCallback(!err || finalAttempt, {err: err, result: result});
                    }, wrappedResults);
                };
            };
            while (times) {
                attempts.push(retryAttempt(task, !(times-=1)));
            }
            async.series(attempts, function(done, data){
                data = data[data.length - 1];
                (wrappedCallback || callback)(data.err, data.result);
            });
        }
        // If a callback is passed, run this as a controll flow
        return callback ? wrappedTask() : wrappedTask
    };

    async.waterfall = function (tasks, callback) {
        callback = callback || function () {};
        if (!_isArray(tasks)) {
            var err = new Error('First argument to waterfall must be an array of functions');
            return callback(err);
        }
        if (!tasks.length) {
            return callback();
        }
        var wrapIterator = function (iterator) {
            return function (err) {
                if (err) {
                    callback.apply(null, arguments);
                    callback = function () {};
                }
                else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    var next = iterator.next();
                    if (next) {
                        args.push(wrapIterator(next));
                    }
                    else {
                        args.push(callback);
                    }
                    async.setImmediate(function () {
                        iterator.apply(null, args);
                    });
                }
            };
        };
        wrapIterator(async.iterator(tasks))();
    };

    var _parallel = function(eachfn, tasks, callback) {
        callback = callback || function () {};
        if (_isArray(tasks)) {
            eachfn.map(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            eachfn.each(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.parallel = function (tasks, callback) {
        _parallel({ map: async.map, each: async.each }, tasks, callback);
    };

    async.parallelLimit = function(tasks, limit, callback) {
        _parallel({ map: _mapLimit(limit), each: _eachLimit(limit) }, tasks, callback);
    };

    async.series = function (tasks, callback) {
        callback = callback || function () {};
        if (_isArray(tasks)) {
            async.mapSeries(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            async.eachSeries(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.iterator = function (tasks) {
        var makeCallback = function (index) {
            var fn = function () {
                if (tasks.length) {
                    tasks[index].apply(null, arguments);
                }
                return fn.next();
            };
            fn.next = function () {
                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
            };
            return fn;
        };
        return makeCallback(0);
    };

    async.apply = function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(
                null, args.concat(Array.prototype.slice.call(arguments))
            );
        };
    };

    var _concat = function (eachfn, arr, fn, callback) {
        var r = [];
        eachfn(arr, function (x, cb) {
            fn(x, function (err, y) {
                r = r.concat(y || []);
                cb(err);
            });
        }, function (err) {
            callback(err, r);
        });
    };
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);

    async.whilst = function (test, iterator, callback) {
        if (test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.whilst(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.doWhilst = function (iterator, test, callback) {
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if (test.apply(null, args)) {
                async.doWhilst(iterator, test, callback);
            }
            else {
                callback();
            }
        });
    };

    async.until = function (test, iterator, callback) {
        if (!test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.until(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.doUntil = function (iterator, test, callback) {
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if (!test.apply(null, args)) {
                async.doUntil(iterator, test, callback);
            }
            else {
                callback();
            }
        });
    };

    async.queue = function (worker, concurrency) {
        if (concurrency === undefined) {
            concurrency = 1;
        }
        function _insert(q, data, pos, callback) {
            if (!q.started){
                q.started = true;
            }
            if (!_isArray(data)) {
                data = [data];
            }
            if(data.length == 0) {
                // call drain immediately if there are no tasks
                return async.setImmediate(function() {
                    if (q.drain) {
                        q.drain();
                    }
                });
            }
            _each(data, function(task) {
                var item = {
                    data: task,
                    callback: typeof callback === 'function' ? callback : null
                };

                if (pos) {
                    q.tasks.unshift(item);
                } else {
                    q.tasks.push(item);
                }

                if (q.saturated && q.tasks.length === q.concurrency) {
                    q.saturated();
                }
                async.setImmediate(q.process);
            });
        }

        var workers = 0;
        var q = {
            tasks: [],
            concurrency: concurrency,
            saturated: null,
            empty: null,
            drain: null,
            started: false,
            paused: false,
            push: function (data, callback) {
                _insert(q, data, false, callback);
            },
            kill: function () {
                q.drain = null;
                q.tasks = [];
            },
            unshift: function (data, callback) {
                _insert(q, data, true, callback);
            },
            process: function () {
                if (!q.paused && workers < q.concurrency && q.tasks.length) {
                    var task = q.tasks.shift();
                    if (q.empty && q.tasks.length === 0) {
                        q.empty();
                    }
                    workers += 1;
                    var next = function () {
                        workers -= 1;
                        if (task.callback) {
                            task.callback.apply(task, arguments);
                        }
                        if (q.drain && q.tasks.length + workers === 0) {
                            q.drain();
                        }
                        q.process();
                    };
                    var cb = only_once(next);
                    worker(task.data, cb);
                }
            },
            length: function () {
                return q.tasks.length;
            },
            running: function () {
                return workers;
            },
            idle: function() {
                return q.tasks.length + workers === 0;
            },
            pause: function () {
                if (q.paused === true) { return; }
                q.paused = true;
            },
            resume: function () {
                if (q.paused === false) { return; }
                q.paused = false;
                // Need to call q.process once per concurrent
                // worker to preserve full concurrency after pause
                for (var w = 1; w <= q.concurrency; w++) {
                    async.setImmediate(q.process);
                }
            }
        };
        return q;
    };

    async.priorityQueue = function (worker, concurrency) {

        function _compareTasks(a, b){
            return a.priority - b.priority;
        };

        function _binarySearch(sequence, item, compare) {
            var beg = -1,
                end = sequence.length - 1;
            while (beg < end) {
                var mid = beg + ((end - beg + 1) >>> 1);
                if (compare(item, sequence[mid]) >= 0) {
                    beg = mid;
                } else {
                    end = mid - 1;
                }
            }
            return beg;
        }

        function _insert(q, data, priority, callback) {
            if (!q.started){
                q.started = true;
            }
            if (!_isArray(data)) {
                data = [data];
            }
            if(data.length == 0) {
                // call drain immediately if there are no tasks
                return async.setImmediate(function() {
                    if (q.drain) {
                        q.drain();
                    }
                });
            }
            _each(data, function(task) {
                var item = {
                    data: task,
                    priority: priority,
                    callback: typeof callback === 'function' ? callback : null
                };

                q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);

                if (q.saturated && q.tasks.length === q.concurrency) {
                    q.saturated();
                }
                async.setImmediate(q.process);
            });
        }

        // Start with a normal queue
        var q = async.queue(worker, concurrency);

        // Override push to accept second parameter representing priority
        q.push = function (data, priority, callback) {
            _insert(q, data, priority, callback);
        };

        // Remove unshift function
        delete q.unshift;

        return q;
    };

    async.cargo = function (worker, payload) {
        var working     = false,
            tasks       = [];

        var cargo = {
            tasks: tasks,
            payload: payload,
            saturated: null,
            empty: null,
            drain: null,
            drained: true,
            push: function (data, callback) {
                if (!_isArray(data)) {
                    data = [data];
                }
                _each(data, function(task) {
                    tasks.push({
                        data: task,
                        callback: typeof callback === 'function' ? callback : null
                    });
                    cargo.drained = false;
                    if (cargo.saturated && tasks.length === payload) {
                        cargo.saturated();
                    }
                });
                async.setImmediate(cargo.process);
            },
            process: function process() {
                if (working) return;
                if (tasks.length === 0) {
                    if(cargo.drain && !cargo.drained) cargo.drain();
                    cargo.drained = true;
                    return;
                }

                var ts = typeof payload === 'number'
                    ? tasks.splice(0, payload)
                    : tasks.splice(0, tasks.length);

                var ds = _map(ts, function (task) {
                    return task.data;
                });

                if(cargo.empty) cargo.empty();
                working = true;
                worker(ds, function () {
                    working = false;

                    var args = arguments;
                    _each(ts, function (data) {
                        if (data.callback) {
                            data.callback.apply(null, args);
                        }
                    });

                    process();
                });
            },
            length: function () {
                return tasks.length;
            },
            running: function () {
                return working;
            }
        };
        return cargo;
    };

    var _console_fn = function (name) {
        return function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);
            fn.apply(null, args.concat([function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (typeof console !== 'undefined') {
                    if (err) {
                        if (console.error) {
                            console.error(err);
                        }
                    }
                    else if (console[name]) {
                        _each(args, function (x) {
                            console[name](x);
                        });
                    }
                }
            }]));
        };
    };
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    /*async.info = _console_fn('info');
     async.warn = _console_fn('warn');
     async.error = _console_fn('error');*/

    async.memoize = function (fn, hasher) {
        var memo = {};
        var queues = {};
        hasher = hasher || function (x) {
            return x;
        };
        var memoized = function () {
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            var key = hasher.apply(null, args);
            if (key in memo) {
                async.nextTick(function () {
                    callback.apply(null, memo[key]);
                });
            }
            else if (key in queues) {
                queues[key].push(callback);
            }
            else {
                queues[key] = [callback];
                fn.apply(null, args.concat([function () {
                    memo[key] = arguments;
                    var q = queues[key];
                    delete queues[key];
                    for (var i = 0, l = q.length; i < l; i++) {
                        q[i].apply(null, arguments);
                    }
                }]));
            }
        };
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
    };

    async.unmemoize = function (fn) {
        return function () {
            return (fn.unmemoized || fn).apply(null, arguments);
        };
    };

    async.times = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.map(counter, iterator, callback);
    };

    async.timesSeries = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.mapSeries(counter, iterator, callback);
    };

    async.seq = function (/* functions... */) {
        var fns = arguments;
        return function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            async.reduce(fns, args, function (newargs, fn, cb) {
                    fn.apply(that, newargs.concat([function () {
                        var err = arguments[0];
                        var nextargs = Array.prototype.slice.call(arguments, 1);
                        cb(err, nextargs);
                    }]))
                },
                function (err, results) {
                    callback.apply(that, [err].concat(results));
                });
        };
    };

    async.compose = function (/* functions... */) {
        return async.seq.apply(null, Array.prototype.reverse.call(arguments));
    };

    var _applyEach = function (eachfn, fns /*args...*/) {
        var go = function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            return eachfn(fns, function (fn, cb) {
                    fn.apply(that, args.concat([cb]));
                },
                callback);
        };
        if (arguments.length > 2) {
            var args = Array.prototype.slice.call(arguments, 2);
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };
    async.applyEach = doParallel(_applyEach);
    async.applyEachSeries = doSeries(_applyEach);

    async.forever = function (fn, callback) {
        function next(err) {
            if (err) {
                if (callback) {
                    return callback(err);
                }
                throw err;
            }
            fn(next);
        }
        next();
    };

    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = async;
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define('async',[], function () {
            return async;
        });
    }
    // included directly via <script> tag
    else {
        root.async = async;
    }

}());
// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com
(function(e){function O(e,t){return function(n){return j(e.call(this,n),t)}}function M(e){return function(t){return this.lang().ordinal(e.call(this,t))}}function _(){}function D(e){H(this,e)}function P(e){var t=this._data={},n=e.years||e.year||e.y||0,r=e.months||e.month||e.M||0,i=e.weeks||e.week||e.w||0,s=e.days||e.day||e.d||0,o=e.hours||e.hour||e.h||0,u=e.minutes||e.minute||e.m||0,a=e.seconds||e.second||e.s||0,f=e.milliseconds||e.millisecond||e.ms||0;this._milliseconds=f+a*1e3+u*6e4+o*36e5,this._days=s+i*7,this._months=r+n*12,t.milliseconds=f%1e3,a+=B(f/1e3),t.seconds=a%60,u+=B(a/60),t.minutes=u%60,o+=B(u/60),t.hours=o%24,s+=B(o/24),s+=i*7,t.days=s%30,r+=B(s/30),t.months=r%12,n+=B(r/12),t.years=n}function H(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function B(e){return e<0?Math.ceil(e):Math.floor(e)}function j(e,t){var n=e+"";while(n.length<t)n="0"+n;return n}function F(e,t,n){var r=t._milliseconds,i=t._days,s=t._months,o;r&&e._d.setTime(+e+r*n),i&&e.date(e.date()+i*n),s&&(o=e.date(),e.date(1).month(e.month()+s*n).date(Math.min(o,e.daysInMonth())))}function I(e){return Object.prototype.toString.call(e)==="[object Array]"}function q(e,t){var n=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),i=0,s;for(s=0;s<n;s++)~~e[s]!==~~t[s]&&i++;return i+r}function R(e,t){return t.abbr=e,s[e]||(s[e]=new _),s[e].set(t),s[e]}function U(e){return e?(!s[e]&&o&&require("./lang/"+e),s[e]):t.fn._lang}function z(e){return e.match(/\[.*\]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function W(e){var t=e.match(a),n,r;for(n=0,r=t.length;n<r;n++)A[t[n]]?t[n]=A[t[n]]:t[n]=z(t[n]);return function(i){var s="";for(n=0;n<r;n++)s+=typeof t[n].call=="function"?t[n].call(i,e):t[n];return s}}function X(e,t){function r(t){return e.lang().longDateFormat(t)||t}var n=5;while(n--&&f.test(t))t=t.replace(f,r);return C[t]||(C[t]=W(t)),C[t](e)}function V(e){switch(e){case"DDDD":return p;case"YYYY":return d;case"YYYYY":return v;case"S":case"SS":case"SSS":case"DDD":return h;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return m;case"X":return b;case"Z":case"ZZ":return g;case"T":return y;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return c;default:return new RegExp(e.replace("\\",""))}}function $(e,t,n){var r,i,s=n._a;switch(e){case"M":case"MM":s[1]=t==null?0:~~t-1;break;case"MMM":case"MMMM":r=U(n._l).monthsParse(t),r!=null?s[1]=r:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":t!=null&&(s[2]=~~t);break;case"YY":s[0]=~~t+(~~t>68?1900:2e3);break;case"YYYY":case"YYYYY":s[0]=~~t;break;case"a":case"A":n._isPm=(t+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":s[3]=~~t;break;case"m":case"mm":s[4]=~~t;break;case"s":case"ss":s[5]=~~t;break;case"S":case"SS":case"SSS":s[6]=~~(("0."+t)*1e3);break;case"X":n._d=new Date(parseFloat(t)*1e3);break;case"Z":case"ZZ":n._useUTC=!0,r=(t+"").match(x),r&&r[1]&&(n._tzh=~~r[1]),r&&r[2]&&(n._tzm=~~r[2]),r&&r[0]==="+"&&(n._tzh=-n._tzh,n._tzm=-n._tzm)}t==null&&(n._isValid=!1)}function J(e){var t,n,r=[];if(e._d)return;for(t=0;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];r[3]+=e._tzh||0,r[4]+=e._tzm||0,n=new Date(0),e._useUTC?(n.setUTCFullYear(r[0],r[1],r[2]),n.setUTCHours(r[3],r[4],r[5],r[6])):(n.setFullYear(r[0],r[1],r[2]),n.setHours(r[3],r[4],r[5],r[6])),e._d=n}function K(e){var t=e._f.match(a),n=e._i,r,i;e._a=[];for(r=0;r<t.length;r++)i=(V(t[r]).exec(n)||[])[0],i&&(n=n.slice(n.indexOf(i)+i.length)),A[t[r]]&&$(t[r],i,e);e._isPm&&e._a[3]<12&&(e._a[3]+=12),e._isPm===!1&&e._a[3]===12&&(e._a[3]=0),J(e)}function Q(e){var t,n,r,i=99,s,o,u;while(e._f.length){t=H({},e),t._f=e._f.pop(),K(t),n=new D(t);if(n.isValid()){r=n;break}u=q(t._a,n.toArray()),u<i&&(i=u,r=n)}H(e,r)}function G(e){var t,n=e._i;if(w.exec(n)){e._f="YYYY-MM-DDT";for(t=0;t<4;t++)if(S[t][1].exec(n)){e._f+=S[t][0];break}g.exec(n)&&(e._f+=" Z"),K(e)}else e._d=new Date(n)}function Y(t){var n=t._i,r=u.exec(n);n===e?t._d=new Date:r?t._d=new Date(+r[1]):typeof n=="string"?G(t):I(n)?(t._a=n.slice(0),J(t)):t._d=n instanceof Date?new Date(+n):new Date(n)}function Z(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function et(e,t,n){var i=r(Math.abs(e)/1e3),s=r(i/60),o=r(s/60),u=r(o/24),a=r(u/365),f=i<45&&["s",i]||s===1&&["m"]||s<45&&["mm",s]||o===1&&["h"]||o<22&&["hh",o]||u===1&&["d"]||u<=25&&["dd",u]||u<=45&&["M"]||u<345&&["MM",r(u/30)]||a===1&&["y"]||["yy",a];return f[2]=t,f[3]=e>0,f[4]=n,Z.apply({},f)}function tt(e,n,r){var i=r-n,s=r-e.day();return s>i&&(s-=7),s<i-7&&(s+=7),Math.ceil(t(e).add("d",s).dayOfYear()/7)}function nt(e){var n=e._i,r=e._f;return n===null||n===""?null:(typeof n=="string"&&(e._i=n=U().preparse(n)),t.isMoment(n)?(e=H({},n),e._d=new Date(+n._d)):r?I(r)?Q(e):K(e):Y(e),new D(e))}function rt(e,n){t.fn[e]=t.fn[e+"s"]=function(e){var t=this._isUTC?"UTC":"";return e!=null?(this._d["set"+t+n](e),this):this._d["get"+t+n]()}}function it(e){t.duration.fn[e]=function(){return this._data[e]}}function st(e,n){t.duration.fn["as"+e]=function(){return+this/n}}var t,n="2.0.0",r=Math.round,i,s={},o=typeof module!="undefined"&&module.exports,u=/^\/?Date\((\-?\d+)/i,a=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,f=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,l=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,c=/\d\d?/,h=/\d{1,3}/,p=/\d{3}/,d=/\d{1,4}/,v=/[+\-]?\d{1,6}/,m=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,g=/Z|[\+\-]\d\d:?\d\d/i,y=/T/i,b=/[\+\-]?\d+(\.\d{1,3})?/,w=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,E="YYYY-MM-DDTHH:mm:ssZ",S=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],x=/([\+\-]|\d\d)/gi,T="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),N={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},C={},k="DDD w W M D d".split(" "),L="M D H h m s w W".split(" "),A={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return j(this.year()%100,2)},YYYY:function(){return j(this.year(),4)},YYYYY:function(){return j(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return j(~~(this.milliseconds()/10),2)},SSS:function(){return j(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+j(~~(e/60),2)+":"+j(~~e%60,2)},ZZ:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+j(~~(10*e/6),4)},X:function(){return this.unix()}};while(k.length)i=k.pop(),A[i+"o"]=M(A[i]);while(L.length)i=L.pop(),A[i+i]=O(A[i],2);A.DDDD=O(A.DDD,3),_.prototype={set:function(e){var t,n;for(n in e)t=e[n],typeof t=="function"?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var n,r,i,s;this._monthsParse||(this._monthsParse=[]);for(n=0;n<12;n++){this._monthsParse[n]||(r=t([2e3,n]),i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[n]=new RegExp(i.replace(".",""),"i"));if(this._monthsParse[n].test(e))return n}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return typeof n=="function"?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,r){var i=this._relativeTime[n];return typeof i=="function"?i(e,t,n,r):i.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return typeof n=="function"?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return tt(e,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},t=function(e,t,n){return nt({_i:e,_f:t,_l:n,_isUTC:!1})},t.utc=function(e,t,n){return nt({_useUTC:!0,_isUTC:!0,_l:n,_i:e,_f:t})},t.unix=function(e){return t(e*1e3)},t.duration=function(e,n){var r=t.isDuration(e),i=typeof e=="number",s=r?e._data:i?{}:e,o;return i&&(n?s[n]=e:s.milliseconds=e),o=new P(s),r&&e.hasOwnProperty("_lang")&&(o._lang=e._lang),o},t.version=n,t.defaultFormat=E,t.lang=function(e,n){var r;if(!e)return t.fn._lang._abbr;n?R(e,n):s[e]||U(e),t.duration.fn._lang=t.fn._lang=U(e)},t.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),U(e)},t.isMoment=function(e){return e instanceof D},t.isDuration=function(e){return e instanceof P},t.fn=D.prototype={clone:function(){return t(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return t.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return this._isValid==null&&(this._a?this._isValid=!q(this._a,(this._isUTC?t.utc(this._a):t(this._a)).toArray()):this._isValid=!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(e){var n=X(this,e||t.defaultFormat);return this.lang().postformat(n)},add:function(e,n){var r;return typeof e=="string"?r=t.duration(+n,e):r=t.duration(e,n),F(this,r,1),this},subtract:function(e,n){var r;return typeof e=="string"?r=t.duration(+n,e):r=t.duration(e,n),F(this,r,-1),this},diff:function(e,n,r){var i=this._isUTC?t(e).utc():t(e).local(),s=(this.zone()-i.zone())*6e4,o,u;return n&&(n=n.replace(/s$/,"")),n==="year"||n==="month"?(o=(this.daysInMonth()+i.daysInMonth())*432e5,u=(this.year()-i.year())*12+(this.month()-i.month()),u+=(this-t(this).startOf("month")-(i-t(i).startOf("month")))/o,n==="year"&&(u/=12)):(o=this-i-s,u=n==="second"?o/1e3:n==="minute"?o/6e4:n==="hour"?o/36e5:n==="day"?o/864e5:n==="week"?o/6048e5:o),r?u:B(u)},from:function(e,n){return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)},fromNow:function(e){return this.from(t(),e)},calendar:function(){var e=this.diff(t().startOf("day"),"days",!0),n=e<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(n,this))},isLeapYear:function(){var e=this.year();return e%4===0&&e%100!==0||e%400===0},isDST:function(){return this.zone()<t([this.year()]).zone()||this.zone()<t([this.year(),5]).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e==null?t:this.add({d:e-t})},startOf:function(e){e=e.replace(/s$/,"");switch(e){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return e==="week"&&this.day(0),this},endOf:function(e){return this.startOf(e).add(e.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)>+t(e).startOf(n)},isBefore:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)<+t(e).startOf(n)},isSame:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)===+t(e).startOf(n)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return t.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(e){var n=r((t(this).startOf("day")-t(this).startOf("year"))/864e5)+1;return e==null?n:this.add("d",e-n)},isoWeek:function(e){var t=tt(this,1,4);return e==null?t:this.add("d",(e-t)*7)},week:function(e){var t=this.lang().week(this);return e==null?t:this.add("d",(e-t)*7)},lang:function(t){return t===e?this._lang:(this._lang=U(t),this)}};for(i=0;i<T.length;i++)rt(T[i].toLowerCase().replace(/s$/,""),T[i]);rt("year","FullYear"),t.fn.days=t.fn.day,t.fn.weeks=t.fn.week,t.fn.isoWeeks=t.fn.isoWeek,t.duration.fn=P.prototype={weeks:function(){return B(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(e){var t=+this,n=et(t,!e,this.lang());return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},lang:t.fn.lang};for(i in N)N.hasOwnProperty(i)&&(st(i,N[i]),it(i.toLowerCase()));st("Weeks",6048e5),t.lang("en",{ordinal:function(e){var t=e%10,n=~~(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}}),o&&(module.exports=t),typeof ender=="undefined"&&(this.moment=t),typeof define=="function"&&define.amd&&define("moment",[],function(){return t})}).call(this);
define('modules/database/entities/base',[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    'moment'
], function($, _, Backbone, Marionette, App, config, moment){

    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database.BaseModel = Backbone.Model.extend({
                initialize: function(attributes){
                    this.db = null;
                    if(_.isString(attributes.updated_at)){
                        this.set('updated_at', moment.utc(attributes.updated_at));
                    }

                    if(_.isString(attributes.date)){
                        this.set('date', moment.utc(attributes.date));
                    }

                    this.connect();
                },

                connect: function(){
                    this.db = Database.db;
                },

                convertMomentDateToDatetime: function(momentDate){
                    return momentDate.format("YYYY-MM-DD HH:mm:ss");
                },

                convertDatetimeToMomentDate: function(datetime){
                    return moment(datetime);
                },

                makeRequest: function(sql, param, success, error){
                    if(config.showLog) console.log('sql: ' + sql);
                    this.db.transaction(function(tx){
                        tx.executeSql(sql, param, success, error);
                    });
                },

                collectResult: function(results){
                    var data = [];
                    for (var i = 0; i < results.rows.length; i++) {
                        var row = _.clone(results.rows.item(i));
                        if( row.updated_at ) row.updated_at = this.convertDatetimeToMomentDate(row.updated_at);
                        if( row.date ) row.date = this.convertDatetimeToMomentDate(row.date);
                        data.push(row);
                    }

                    return data;
                }

            });

            Database.BaseCollection = Backbone.Collection.extend({

                initialize: function(){
                    this.db = null;
                    this.connect();
                },

                connect: function(){
                    this.db = Database.db;
                },

                makeRequest: function(sql, param, success, error){
                    if(config.showLog) console.log('sql: ' + sql);
                    this.db.transaction(function(tx){
                        tx.executeSql(sql, param, success, error);
                    });
                },

                convertMomentDateToDatetime: function(momentDate){
                    return momentDate.format("YYYY-MM-DD HH:mm:ss");
                },

                convertDatetimeToMomentDate: function(datetime){
                    return moment(datetime);
                },

                collectResult: function(results){
                    var data = [];
                    for (var i = 0; i < results.rows.length; i++) {
                        var row = _.clone(results.rows.item(i));
                        if( row.updated_at ) row.updated_at = this.convertDatetimeToMomentDate(row.updated_at);
                        if( row.date ) row.date = this.convertDatetimeToMomentDate(row.date);
                        data.push(row);
                    }

                    return data;
                }
            })

        }
    })


});
define('modules/database/entities/tag',[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    'moment',
    './base'
], function($, _, Backbone, Marionette, App, config, async, moment){

    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database.TagModel = Database.BaseModel.extend({

                tableName: 'tags', // table name

                defaults: {

                    tagName: "",

                    updated_at: new Date(),

                    isDeleted: false,

                    //create
                    //edit
                    //delete
                    label: null

                },

                initialize: function(attributes, options) {
                    Database.BaseModel.prototype.initialize.apply(this, arguments);
                },

                _generateId: function(){
                    return (new Date).getTime() + Math.floor((Math.random() * Math.random()) * (new Date()).getTime()) + '';
                },

                saveTag: function(){
                    var _this = this;
                    var arg = arguments;

                    if( !this.get('_id') ){
                        return this.createNew(arguments);
                    } else{
                        if( this.get('_idBefore') ){
                            //we have this tag now
                            return this.editTag(arguments);
                        }else{
                            var def = $.Deferred();

                            //check, does we have this tag or no ?
                            $.when(Database.TagModel.findById(this.get('_id')))
                                .done(function(tag){
                                    if(tag){
                                        // if we have tag now, so we just edit them
                                        $.when(_this.editTag(arg))
                                            .done(function(){
                                                def.resolve();
                                            })
                                            .fail(function(){def.reject()})
                                    }else{
                                        // if we don'thave tag now, so we just create them
                                        $.when(_this.createNew(arg))
                                            .done(function(){
                                                def.resolve();
                                            })
                                            .fail(function(){def.reject()})
                                    }
                                })
                                .fail(function(){
                                    def.reject();
                                })

                            return def.promise();
                        }
                    }

                },

                createNew: function(options){
                    var _this = this;
                    var def = new $.Deferred();
                    var _id = this.get('_id') || this._generateId();
                    var label = (this.get('label') || this.get('label') === '') ? this.get('label') : 'create';
                    var momentDate = moment.utc();


                    this.set('_id', _id);
                    this.set('updated_at', momentDate);

                    var data = [
                        this.get('_id'),
                        this.get('tagName'),
                        this.convertMomentDateToDatetime(momentDate),
                        label
                    ];

                    var sql = "INSERT INTO " + this.tableName + " ( _id, tagName, updated_at, label ) VALUES(?, ?, ?, ?)";

                    this.makeRequest(sql, data, function(tx, results){
                        def.resolve(_this)
                    }, function(tx, err){
                        alert(err);
                        def.reject();
                    });

                    return def.promise();
                },

                editTag: function(options){
                    var _this = this;
                    var def = new $.Deferred();
                    var idForUpdate = this.get('_idBefore') || this.get('_id');

                    var data = [
                        this.get('_id'),
                        this.get('tagName'),
                        this.convertMomentDateToDatetime(this.get('updated_at')),
                        this.get('label')
                    ];

                    var sql = "UPDATE " + this.tableName + " SET _id=?, tagName=?, updated_at=?, label=? WHERE _id=" + "'"+idForUpdate+"'";

                    this.makeRequest(sql, data, function(tx, results){
                        def.resolve(_this)
                    }, function(){
                        def.reject();
                    });

                    return def.promise();
                },

                getData: function(){
                    var _this = this;
                    var def = $.Deferred();
                    var sql = "SELECT * FROM " + this.tableName + " WHERE _id=" + "'"+this.get('_id')+"'";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        var tag;
                        if(data[0]){
                            tag = new App.Database.TagModel(data[0]);
                        }
                        def.resolve(tag);
                    }, function(){
                        def.reject();
                    });
                    return def.promise();
                },

                removeFromLocalDb: function(){
                    var def = new $.Deferred();
                    var _this = this;

                    var sql = "DELETE FROM "+ this.tableName +" WHERE _id=" + "'"+this.get('_id')+"'";

                    this.makeRequest(sql, [], function(tx, results){
                        def.resolve(_this)
                    }, function(){
                        def.reject();
                    });

                    return def.promise();
                }

            });

            Database.TagModel.findById = function(_id){
                var def = new $.Deferred();
                var tag = new Database.TagModel({
                    _id: _id
                });

                $.when(tag.getData()).done(function(tag){
                    def.resolve(tag);
                });
                return def.promise();
            };

            Database.TagModel.removeById = function(_id){

                var def = new $.Deferred();

                $.when(App.Database.TagModel.findById(_id)).done(function(tag){
                    if(!tag){
                        return def.resolve();
                    }else{
                        if( tag.get('label') && tag.get('label') == 'create' ){
                            $.when(tag.removeFromLocalDb()).done( function(){
                                def.resolve();
                            }).fail(function(){
                                def.reject('Cannot delete tag. Server error.');
                            });
                        }else{
                            tag.set({
                                label: 'remove'
                            });
                            $.when(tag.saveTag()).done( function(){
                                def.resolve();
                            }).fail(function(){
                                def.reject('Cannot delete tag. Server error.');
                            });
                        }
                    }
                })
                return def.promise();
            };

            Database.TagModel.removeTags = function(options){
                var def = new $.Deferred();

                $.when(App.Database.TagCollection.getAllTags())
                    .done(function(tags){
                        var tagToRemove = tags.where(options);

                        var methods = [];
                        _.each(tagToRemove, function(tag){
                            methods.push(function(callback){
                                $.when(tag.removeFromLocalDb())
                                    .done(function(){callback(null)})
                                    .fail(function(){callback(1)});
                            });
                        });

                        async.parallel(methods, function(err){
                            if(err){
                                return def.reject();
                            }
                            def.resolve();
                        });
                    });

                return def.promise();
            };

            Database.TagCollection = Database.BaseCollection.extend({

                tableName: 'tags',

                model: Database.TagModel,

                initialize: function(attributes, options) {
                    Database.BaseCollection.prototype.initialize.apply(this, arguments);
                },

                getTags: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM "+ this.tableName +" WHERE label != 'remove'";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(){
                        def.reject();
                    });

                    return def.promise();
                },

                getAllTags: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM " + this.tableName;

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(){
                        def.reject();
                    });

                    return def.promise();
                },

                getChangingData: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM " + this.tableName + " WHERE label <> ''";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(tx, err){
                        def.reject();
                    });

                    return def.promise();
                }
            });

            Database.TagCollection.getChangingData = function(){
                var def = $.Deferred();

                //find all tags, that have field label not empty
                var tags = new Database.TagCollection();

                $.when(tags.getChangingData())
                    .done(function(tags){
                        def.resolve(tags);
                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

            Database.TagCollection.getAllTags = function(){
                var def = $.Deferred();

                //find all tags, that have field label not empty
                var tags = new Database.TagCollection();

                $.when(tags.getAllTags())
                    .done(function(tags){
                        def.resolve(tags);
                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

            Database.TagCollection.resetEditLabel = function(){
                var def = $.Deferred();

                //find all tags, that have field label not empty
                var tags = new Database.TagCollection();

                $.when(tags.getAllTags())
                    .done(function(tags){
                        var tagForEdit = tags.where({label: 'edit'});
                        var methods = [];
                        _.each(tagForEdit, function(tag){
                            tag.set({label: null});
                            methods.push(function(callback){
                                $.when(tag.saveTag())
                                    .done(function(){callback(null)})
                                    .fail(function(){callback(1)});
                            });
                        });
                        async.parallel(methods, function(err){
                            if(err){
                                return def.reject();
                            }
                            def.resolve();
                        });

                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

        }
    })


});
define('modules/database/entities/transaction',[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    './base'
], function($, _, Backbone, Marionette, App, config, async){

    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database.TransactionModel = Database.BaseModel.extend({

                tableName: 'transactions',

                defaults: {

                    count: 0,

                    date: moment.utc(),

                    updated_at: moment.utc(),

                    comment: '',

                    tags: [],

                    //create
                    //edit
                    //delete
                    label: null

                },

                initialize: function(attributes, options) {
                    Database.BaseModel.prototype.initialize.apply(this, arguments);
                },

                _generateId: function(){
                    return (new Date).getTime() + Math.floor((Math.random() * Math.random()) * (new Date()).getTime()) + '';
                },

                saveTransaction: function(){
                    var _this = this;
                    var arg = arguments;


                    if( !this.get('_id') ){
                        return this.createNew(arguments);
                    } else{
                        if( this.get('_idBefore') ){
                            //we have this transaction now
                            return this.editTransaction(arguments);
                        }else{
                            var def = $.Deferred();

                            //check, does we have this transaction or no ?
                            $.when(Database.TransactionModel.findById(this.get('_id')))
                                .done(function(tag){
                                    if(tag){
                                        // if we have transaction now, so we just edit them
                                        $.when(_this.editTransaction(arg))
                                            .done(function(){
                                                def.resolve();
                                            })
                                            .fail(function(){def.reject()})
                                    }else{
                                        // if we don't have transaction now, so we just create them
                                        $.when(_this.createNew(arg))
                                            .done(function(){
                                                def.resolve();
                                            })
                                            .fail(function(){def.reject()})
                                    }
                                })
                                .fail(function(){
                                    def.reject();
                                })

                            return def.promise();
                        }
                    }
                },

                editTransaction: function(options){
                    var _this = this;
                    var def = new $.Deferred();
                    var idForUpdate = this.get('_idBefore') || this.get('_id');

                    var data = [
                        this.get('_id'),
                        this.get('count'),
                        this.get('tags'),
                        this.convertMomentDateToDatetime( this.get('date') ),
                        this.convertMomentDateToDatetime( this.get('updated_at') ),
                        this.get('comment'),
                        this.get('label')
                    ];

                    var sql = "UPDATE " + this.tableName + " SET _id=?, count=?, tags = ?, date=?,  updated_at=?, comment=?, label=? WHERE _id=" + "'"+idForUpdate+"'";

                    this.makeRequest(sql, data, function(tx, results){
                        def.resolve(_this)
                    }, function(tx, err){
                        def.reject(err);
                    });

                    return def.promise();
                },

                createNew: function(options){
                    var _this = this;
                    var def = new $.Deferred();
                    var _id = this.get('_id') || this._generateId();
                    var momentDate = moment.utc();
                    var model = this.toJSON();
                    var dateMoment = moment.utc(model.date);
                    var label = (this.get('label') || this.get('label') === '') ? this.get('label') : 'create';

                    this.set('_id', _id);
                    this.set('label', 'create');
                    this.set('updated_at', momentDate);
                    this.set('date', dateMoment);

                    var data = [
                        _id,
                        model.count,
                        model.tags,
                        this.convertMomentDateToDatetime(dateMoment),
                        this.convertMomentDateToDatetime(momentDate),
                        model.comment,
                        label
                    ];

                    var sql = "INSERT INTO " + this.tableName + " ( _id, count, tags, date, updated_at, comment, label ) VALUES(?, ?, ?, ?, ?, ?, ?)";

                    this.makeRequest(sql, data, function(tx, results){
                        def.resolve(_this);
                    }, function(tx, err){
                        def.reject(err);
                    });

                    return def.promise();
                },

                getIdBy_Id: function(){
                    var _this = this;
                    var _id =  this.get('_id');
                    var def = new $.Deferred();
                    var result;

                    $.when(this.connect()).done(function(){
                        var range = _this.db.makeKeyRange({
                            lower: _id,
                            upper: _id
                        });

                        _this.db.query(function(transactions, cursor, transaction){
                            var result;
                            if( transactions.length ){
                                result = transactions[0].id;
                            }
                            def.resolve(result);
                        }, {
                            order: 'DESC',
                            index: '_id',
                            keyRange: range,
                            onEnd: function(){
                                def.resolve(result);
                            }
                        })
                    })
                    return def.promise();
                },

                getData: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM " + this.tableName + " WHERE _id=" + "'"+this.get('_id')+"'";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        var tag;
                        if(data[0]){
                            tag = new App.Database.TransactionModel(data[0]);
                        }

                        def.resolve(tag);
                    }, function(tx, err){
                        alert(err);
                        def.reject();
                    });
                    return def.promise();
                },

                removeFromLocalDb: function(){
                    var def = new $.Deferred();
                    var _this = this;

                    var sql = "DELETE FROM "+ this.tableName +" WHERE _id=" + "'"+this.get('_id')+"'";

                    this.makeRequest(sql, [], function(tx, results){
                        def.resolve(_this)
                    }, function(){
                        def.reject();
                    });

                    return def.promise();
                }

            });

            Database.TransactionModel.findById = function(_id){
                var def = new $.Deferred();
                var transaction = new Database.TransactionModel({
                    _id: _id
                });

                $.when(transaction.getData()).done(function(transaction){
                    def.resolve(transaction);
                }).fail(function(tx, err){
                    alert(err);
                    def.reject();
                });

                return def.promise();
            };

            Database.TransactionModel.removeById = function(_id){
                var def = new $.Deferred();
                var _this = this;

                $.when(App.Database.TransactionModel.findById(_id)).done(function(transaction){
                    if(!transaction){
                        def.resolve();
                        return false;
                    }else{
                        if( transaction.get('label') && transaction.get('label') == 'create' ){
                            $.when(transaction.removeFromLocalDb()).done( function(){
                                def.resolve();
                            }).fail(function(){
                                def.reject('Cannot delete transaction. Server error.');
                            });

                        }else{
                            transaction.set({
                                label: 'remove'
                            });

                            $.when(transaction.saveTransaction()).done( function(){
                                def.resolve();
                            }).fail(function(){
                                def.reject('Cannot delete transaction. Server error.');
                            });
                        }
                    }
                })
                return def.promise();
            };

            Database.TransactionModel.removeTagById = function(tagId){
                var def = $.Deferred();
                var transactions = new Database.TransactionCollection();

                $.when(transactions.getTransactionByTagId(tagId)).done(function(transactions){

                    transactions.each(function(transaction){
                        transaction.set({
                            'tags': '',
                            updated_at:  moment.utc()
                        });

                        if( !transaction.get('label') ) transaction.get('edit');
                    })

                    $.when( transactions.saveTransactions())
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(err){
                            def.reject(err);
                        });

                }).fail(function(err){
                    def.reject();
                })
                return def.promise();
            };

            Database.TransactionModel.removeTransactions = function(options){
                var def = new $.Deferred();

                $.when(App.Database.TransactionCollection.getAllTransactions())
                    .done(function(transactions){
                        var transactionsToRemove = transactions.where(options);
                        var methods = [];
                        _.each(transactionsToRemove, function(transactions){
                            methods.push(function(callback){
                                $.when(transactions.removeFromLocalDb())
                                    .done(function(){callback(null)})
                                    .fail(function(){callback(1)});
                            });
                        });

                        async.parallel(methods, function(err){
                            if(err){
                                return def.reject();
                            }
                            def.resolve();
                        });
                    });

                return def.promise();
            };

            Database.TransactionCollection = Database.BaseCollection.extend({

                tableName: 'transactions',

                model: Database.TransactionModel,

                initialize: function(attributes, options) {
                    Database.BaseCollection.prototype.initialize.apply(this, arguments);
                },

                getTransactionList: function(period){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM "+ this.tableName +" WHERE label != 'remove' AND datetime(date) > datetime('"+period.start+"') AND datetime(date) < datetime('"+period.end+"')";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(tx, err){
                        alert(err)
                        def.reject();
                    });

                    return def.promise();
                },

                getTransactionByTagId: function(tagId){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM " + this.tableName + " WHERE tags = '"+ tagId +"'";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(tx, err){
                        def.reject();
                    });

                    return def.promise();
                },

                getChangingData: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM " + this.tableName + " WHERE label <> ''";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this)
                    }, function(tx, err){
                        def.reject();
                    });

                    return def.promise();
                },

                getAllTransactions: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM " + this.tableName;

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(){
                        def.reject();
                    });

                    return def.promise();
                },

                saveTransactions: function(){
                    var def = $.Deferred();
                    var methods = [];
                    this.each(function(trnasaction){
                        methods.push(function(cb){
                            $.when(trnasaction.saveTransaction())
                                .done(function(){
                                    cb(null);
                                })
                                .fail(function(err){
                                    cb(err);
                                })
                        })
                    })

                    async.parallel(methods, function(err){
                        if(err){
                            return def.reject(err);
                        }
                        def.resolve();
                    })

                    return def.promise();


                }
            })

            Database.TransactionCollection.getChangingData = function(){
                var def = $.Deferred();

                var transactions = new Database.TransactionCollection();

                $.when(transactions.getChangingData())
                    .done(function(transactions){
                        def.resolve(transactions);
                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

            Database.TransactionCollection.getAllTransactions = function(){
                var def = $.Deferred();

                var transactions = new Database.TransactionCollection();

                $.when(transactions.getAllTransactions())
                    .done(function(transactions){
                        def.resolve(transactions);
                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

            Database.TransactionCollection.resetEditLabel = function(){
                var def = $.Deferred();

                var transactions = new Database.TransactionCollection();

                $.when(transactions.getAllTransactions())
                    .done(function(transaction){
                        var transactionsForEdit = transactions.where({label: 'edit'});
                        var methods = [];
                        _.each(transactionsForEdit, function(transaction){
                            transaction.set({label: null});
                            methods.push(function(callback){
                                $.when(transaction.saveTransaction())
                                    .done(function(){callback(null)})
                                    .fail(function(){callback(1)});
                            });
                        });
                        async.parallel(methods, function(err){
                            if(err){
                                return def.reject();
                            }
                            def.resolve();
                        });

                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

        }
    })


});
define('modules/database/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    './entities/base',
    './entities/tag',
    './entities/transaction'
], function(jQuery, Backbone, Marionette, App, config, async){
    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database.initDatabase = function(){
                var def = $.Deferred();
                Database.db.transaction(function(tx){
                    tx.executeSql("DROP TABLE IF EXISTS `tags`");
                    tx.executeSql("CREATE TABLE `tags` (_id unique, tagName, updated_at, label)");
                    tx.executeSql("DROP TABLE IF EXISTS `transactions`" );
                    tx.executeSql("CREATE TABLE `transactions` (_id unique, count, date, updated_at, comment, tags, label)");
                    def.resolve();
                });

                return def.promise();
            };

            Database.removeDatabase = function(){
                var def = $.Deferred();
                Database.db.transaction(function(tx){
                    tx.executeSql("DROP TABLE IF EXISTS `tags`");
                    tx.executeSql("DROP TABLE IF EXISTS `transactions`" );
                    def.resolve();
                });

                return def.promise();
            };

            App.on('initialize:before', function(){
                //window.sqlitePlugin.openDatabase
                //window.openDatabase

                var provider = window;
                if(config.data.dbOptions.provider == "sqlite"){
                    provider = (window.sqlitePlugin) ? window.sqlitePlugin : window;
                }

                Database.db = provider.openDatabase(
                    config.data.dbOptions.db_name,
                    config.data.dbOptions.version,
                    config.data.dbOptions.description,
                    config.data.dbOptions.dbSize
                );

                //todo: поставить просчитываться на ночь
                /*var count = 1000000;
                var start = new Date();
                var methods = [];

                for(var i = 0; i < count; i++){
                    methods.push(function(cb){
                        var tag = new Database.TagModel({
                            tagName: (new Date()).getTime() + ''
                        });
                        $.when(tag.saveTag())
                            .done(function(){
                                cb();
                            })
                    })
                }

                async.waterfall(methods, function(){
                    console.log(new Date() - start);
                })*/

                //waterfall - 100 - 11701
                //waterfall - 1000 - 124516
                //waterfall - 10000 - 2094690

                //parallel - 100 - 10965


            })

        }
    })


});
define('modules/server/controllers/tag',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'idb',
    './base',
    'modules/database/module'
], function(jQuery, Backbone, Marionette, App, config, IDBStore){

    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            Server.TagController = Server.BaseController.extend({

                initialize: function(){
                    Server.BaseController.prototype.initialize.apply(this, arguments);
                },

                create: function(){
                    var _this = this;
                    var tag = new App.Database.TagModel({
                        tagName: this.data.tagName
                    });

                    $.when(tag.saveTag()).done(function(){
                        _this.def.resolve({
                            _id: tag.get('_id')
                        });
                    })
                },

                edit: function(){
                    var _this = this;
                    var newTagName = this.data.tagName;

                    $.when(App.Database.TagModel.findById(this.data._id)).done(function(tag){
                        if(!tag){
                            _this.def.reject('Cannot find tag');
                            return false;
                        }else{

                            var data = {
                                tagName: newTagName
                            }
                            if( tag.get('label') === '') data.label = 'edit';

                            tag.set(data);

                            $.when(tag.saveTag()).done( function(){
                                _this.def.resolve();
                            }).fail(function(){
                                    _this.def.reject('Cannot update tag. Server error.');
                                });
                        }
                    })
                },

                remove: function(){
                    var _this = this;

                    //todo: remove tag
                    $.when(
                        App.Database.TagModel.removeById(this.data._id),
                        App.Database.TransactionModel.removeTagById(this.data._id)
                    ).done(function(){
                        _this.def.resolve();
                    }).fail(function(){
                            _this.def.reject('Cannot delete tag. Server error.');
                        });
                },

                get: function(){
                    var _this = this;
                    var tagsCollection = new App.Database.TagCollection();
                    $.when(tagsCollection.getTags()).done(function(tags){
                        _this.def.resolve(tags.toJSON());
                    })

                }
            });
        }
    })


});
define('modules/server/controllers/transaction',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'idb',
    './base',
    'modules/database/module'
], function(jQuery, Backbone, Marionette, App, config, IDBStore){

    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            Server.TransactionController = Server.BaseController.extend({

                initialize: function(){
                    Server.BaseController.prototype.initialize.apply(this, arguments);
                },

                create: function(){
                    var _this = this;
                    var transaction = new App.Database.TransactionModel({
                        count: this.data.count || 0,
                        date: moment.utc(this.data.date),
                        comment: this.data.comment || "",
                        tags: this.data.tags || []
                    });

                    $.when(transaction.saveTransaction()).done(function(){
                        _this.def.resolve({
                            _id: transaction.get('_id')
                        });
                    })
                },

                edit: function(){
                    var _this = this;

                    $.when(App.Database.TransactionModel.findById(this.data._id)).done(function(transaction){
                        if(!transaction){
                            _this.def.reject('Cannot find transaction');
                            return false;
                        }else{

                            var newData = {};
                            if( _this.data.count ) newData.count = _this.data.count;
                            if( _this.data.comment ) newData.comment = _this.data.comment;
                            if( _this.data.tags ) newData.tags = _this.data.tags;
                            if( _this.data.date ) newData.date = moment.utc(_this.data.date);
                            if( transaction.get('label') === '') newData.label = 'edit';

                            transaction.set(newData);

                            $.when(transaction.saveTransaction()).done( function(){
                                _this.def.resolve();
                            }).fail(function(){
                                _this.def.reject('Cannot update transaction. Server error.');
                            });
                        }
                    })
                },

                remove: function(){
                    var _this = this;
                    $.when(App.Database.TransactionModel.removeById(this.data._id)).done(function(){
                        _this.def.resolve();
                    }).fail(function(){
                        _this.def.reject('Cannot delete transaction. Server error.');
                    })
                },

                getById: function(){
                    var transaction = new App.Database.TransactionModel({
                        _id: this.data._id
                    });
                    var _this = this;
                    $.when(transaction.getData()).done(function(transaction){
                        if(!transaction){
                            _this.def.reject();
                            return false;
                        }
                        _this.def.resolve(transaction.toJSON());
                    }).fail(function(){
                        _this.def.reject();
                    });
                },

                transactionList: function(){
                    var _this = this;
                    $.when(
                            (new App.Database.TransactionCollection()).getTransactionList(this.data.period),
                            (new App.Database.TagCollection()).getTags()
                        ).done(function(transactions, tags){
                            var result = [];

                            transactions.each(function(transaction){
                                var tagItem;
                                var tagId = transaction.get('tags') + '';


                                tags.each(function(tag){
                                    if(tag.get('_id')+'' == tagId) {
                                        tagItem = {
                                            _id: tagId,
                                            tagName: tag.get('tagName')
                                        }
                                        return;
                                    }
                                })
                                transaction.set('tags', tagItem);
                                result.push(transaction.toJSON());
                            })

                            _this.def.resolve({
                                data: result
                            });
                        }).fail(function(){
                            _this.def.reject();
                        });
                }
            });
        }
    })


});
define('modules/server/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'backbone.server',
    'storage',

    /*controllers*/
    './controllers/tag',
    './controllers/transaction'
], function(jQuery, Backbone, Marionette, App, config, server, storage){
    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.server = options.server;

                    this.initRouting();
                },

                initRouting: function(){
                    this.server.addRoutes({
                        //tags
                        createTag: {
                            urlExp: config.api.tagCreate,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).create();
                                return def.promise();
                            }
                        },
                        getTag: {
                            urlExp: config.api.tagGet,
                            httpMethod: "GET",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).get();
                                return def.promise();
                            }
                        },
                        editTag: {
                            urlExp: config.api.tagEdit,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).edit();
                                return def.promise();
                            }
                        },
                        removeTag: {
                            urlExp: config.api.tagRemove,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).remove();
                                return def.promise();
                            }
                        },

                        //transaction
                        createTransaction: {
                            urlExp: config.api.transactionCreate,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).create();
                                return def.promise();
                            }
                        },
                        editTransaction: {
                            urlExp: config.api.transactionEdit,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).edit();
                                return def.promise();
                            }
                        },
                        removeTransaction: {
                            urlExp: config.api.transactionRemove,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).remove();
                                return def.promise();
                            }
                        },
                        getTransactionData: {
                            urlExp: config.api.transactionGetById,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).getById();
                                return def.promise();
                            }
                        },

                        getTransactionList: {
                            urlExp: config.api.statistic.listTransactions,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).transactionList();
                                return def.promise();
                            }
                        }
                    });
                }
            });

            App.on('initialize:before', function(){
                if(!storage.get(config.storage['isInitDatabase'])){
                    $.when(App.Database.initDatabase()).then(function(){
                        new Controller({
                            server: server
                        });
                        storage.set(config.storage['isInitDatabase'], true);
                    })
                }else{
                    new Controller({
                        server: server
                    });
                }
            })
        }
    })


});
define('modules/sync/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'backbone.server',
    'storage',
    'async'
], function(jQuery, Backbone, Marionette, App, config, server, storage, async){

    App.module("Sync", {

        startWithParent: true,

        define: function( Sync, App, Backbone, Marionette, $, _ ){

            var SyncController = Marionette.Controller.extend({
                initialize: function(){
                    _.bindAll(this, "serverClient",
                        "updateSCState",
                        "updateTransactions");
                },

                sync: function(){
                    var def = $.Deferred();
                    var _this = this;
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Synchronization...', isAutoHide: false});

                    this.clientServer()
                        .then(this.serverClient )
                        .done(function(){
                            _this.doneSync();
                            def.resolve();
                        })
                        .fail(function(){
                            _this.failSync();
                            def.reject();
                        });

                    return def.promise();
                },

                doneSync: function(){
                    App.execute(config.commands['notify:clearAllNotify:side']);
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Synchronization done'});
                },

                failSync: function(){
                    App.execute(config.commands['notify:clearAllNotify:side']);
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Synchronization failed'});
                },

                //client - server sync

                clientServer: function(){
                    var def = $.Deferred();

                    App.reqres.request(config.reqres['service:db:getChangingData'])
                        .then( this.clientServer_send )
                        .then( this.updateCSState )
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                clientServer_send: function(changingData){
                    return $.ajax({
                        type: "POST",
                        url: config.api.sync.clientServer,
                        data: JSON.stringify(changingData)
                    });
                },

                updateCSState: function(updateInfo){
                    var def = $.Deferred();

                    var methods = [];
                    methods.push(function(cb){
                        $.when(App.reqres.request(config.reqres['service:db:resetTagEditLabel']))
                            .done(function(){cb(null);})
                    })
                    methods.push(function(cb){
                        $.when(App.reqres.request(config.reqres['service:db:updateTagsId'], updateInfo.newTagId))
                            .done(function(){cb(null);})
                    })
                    methods.push(function(cb){
                        $.when(App.reqres.request(config.reqres['service:db:removeRemovedTag']))
                            .done(function(){cb(null);})
                    })
                    methods.push(function(cb){
                        $.when( App.reqres.request(config.reqres['service:db:resetTransactionEditLabel']) )
                            .done(function(){cb(null);})
                    })

                    methods.push(function(cb){
                        $.when( App.reqres.request(config.reqres['service:db:updateTransactionsId'], updateInfo.newTransactionId) )
                            .done(function(){cb(null);})
                    })

                    methods.push(function(cb){
                        $.when( App.reqres.request(config.reqres['service:db:removeRemovedTransactions']) )
                            .done(function(){cb(null);})
                    })

                    methods.push(function(cb){
                        $.when( App.reqres.request(config.reqres['service:db:updateTagIdInTransactions'], updateInfo.newTagId) )
                            .done(function(){cb(null);})
                    })

                    async.waterfall(methods, function(err){
                        if(err){
                            return def.reject();
                        }
                        def.resolve();
                    });

                    return def.promise();
                },

                //server - client sync

                serverClient: function(){
                    var def = $.Deferred();

                    $.when( this.server_send() )
                        .then( this.updateSCState )
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        })

                    return def.promise();
                },

                server_send: function(){
                    return $.ajax({
                        type: "POST",
                        url: config.api.sync.serverClient,
                        data: JSON.stringify({
                            lastUpdate: storage.get(config.storage['lastUpdate'])
                        })
                    });
                },

                updateSCState: function(data){
                    var def = $.Deferred();
                    var _this = this;

                    this.updateTags(data.tags)
                        .then(function(){
                            return _this.updateTransactions(data.transactions);
                        })
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                //sync tags

                updateTags: function(tags){
                    var def = $.Deferred();

                    var methods = [];
                    _.each(tags, function(tag){
                        tag.label = '';
                        var isDeleted = _.clone(tag.isDeleted);
                        delete tag.isDeleted;

                        if( isDeleted ){
                            delete tag.isDeleted;

                            methods.push(function(cb){
                                $.when(App.reqres.request(config.reqres['service:db:removeTagById'], tag._id))
                                    .done(function(){
                                        cb(null);
                                    })
                                    .fail(function(){
                                        cb(1);
                                    })
                            })
                        }else{
                            methods.push(function(cb){
                                $.when(App.reqres.request(config.reqres['service:db:editOrCreateTag'], tag))
                                    .done(function(){
                                        cb(null);
                                    })
                                    .fail(function(){
                                        cb(1);
                                    });
                            })
                        }

                    });

                    async.parallel(methods, function(err){
                        if(err){
                            return def.reject();
                        }
                        def.resolve();
                    });

                    return def.promise();
                },

                updateTransactions: function(transactions){
                    var def = $.Deferred();

                    var methods = [];
                    _.each(transactions, function(transaction){
                        transaction.label = '';
                        var isDeleted = _.clone(transaction.isDeleted);
                        delete transaction.isDeleted;

                        if( isDeleted ){
                            methods.push(function(cb){
                                $.when(App.reqres.request(config.reqres['service:db:removeTransactionById'], transaction._id))
                                    .done(function(){
                                        cb(null);
                                    })
                                    .fail(function(){
                                        cb(1);
                                    })
                            })
                        }else{
                            methods.push(function(cb){
                                $.when(App.reqres.request(config.reqres['service:db:editOrCreateTransaction'], transaction))
                                    .done(function(){
                                        cb(null);
                                    })
                                    .fail(function(){
                                        cb(1);
                                    });
                            })
                        }

                    });

                    async.parallel(methods, function(err){
                        if(err){
                            return def.reject();
                        }
                        def.resolve();
                    });

                    return def.promise();
                }
            });

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.syncController = false;

                    if(storage.get(config.storage['lastUpdate'])){
                        this.lastUpdate = storage.get(config.storage['lastUpdate']);
                    }else{
                        this.lastUpdate = 0;
                        storage.set(config.storage['lastUpdate'], 0);
                    }

                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(App.channels.main, config.channels['sync'], this.sync);
                },

                sync: function(){
                    if( this.syncController ) return false;

                    var _this = this;

                    this.syncController = new SyncController();

                    this.syncController.sync()
                        .done(function(){
                            _this.syncController.close();
                            _this.syncController = false;

                            var time = moment.utc();
                            storage.set(config.storage['lastUpdate'], time.toDate().getTime());
                        })
                        .fail(function(){
                            _this.syncController.close();
                            _this.syncController = false;
                        }).always(function(){
                            App.reloadCurrentApp();
                        })
                }
            });

            App.on('initialize:before', function(){
                new Controller({});
            })
        }
    })

});
define('modules/log/module',[
    'underscore',
    'marionette',
    'app',
    'config'
], function(_, Marionette, App, config){

    App.module("Log", {

        startWithParent: true,

        define: function( Log, App, Marionette, $, _ ){

            function getLogInstance(moduleName){
                var module = moduleName;
                return function (message){
                    if(!config.showLog) return false;
                    var isObject = _.isPlainObject(message);
                    if( isObject ){
                        console.log(module + ' : ');
                        console.log(message);
                    }else{
                        console.log(module + ' : ' + message);
                    }
                }
            }

            var controller = {
                getLog: function(moduleName){
                    return getLogInstance(moduleName);
                }
            }
            App.reqres.setHandler("getLog", controller.getLog);

        }
    })

});
define('modules/service/services/db',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'async'

], function(jQuery, Backbone, Marionette, App, config, async){

    App.module("Service.Db", {

        startWithParent: true,

        define: function( Db, App, Backbone, Marionette, $, _ ){

            var Controller = Marionette.Controller.extend({

                initialize: function(){
                    _.bindAll(this, "updateTagsId",
                        "updateTransactionsId",
                        "updateTagIdInTransactions");
                },

                getChangingData: function(){
                    var def = $.Deferred();

                    $.when(
                        App.Database.TransactionCollection.getChangingData(),
                        App.Database.TagCollection.getChangingData()
                    )
                        .done(function(transactions, tags){
                            def.resolve({
                                transactions: transactions.toJSON() || [],
                                tags: tags.toJSON() || []
                            })
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                //update transactions info

                updateTransactionsId: function(updateInfo){
                    var def = $.Deferred();
                    var _this = this;
                    if( !updateInfo ){
                        return def.resolve();
                    }

                    var methods = [];
                    _.each(updateInfo, function(data){
                        methods.push(function(callback){
                            $.when(_this.updateTransactionId(data))
                                .done(function(){callback(null)})
                                .fail(function(){callback(1)});
                        });
                    });
                    async.parallel(methods, function(err){
                        if(err){
                            return def.reject();
                        }
                        def.resolve();
                    });

                    return def.promise();
                },

                updateTransactionId: function(data){
                    var def = $.Deferred();
                    $.when(App.Database.TransactionModel.findById(data.idBefore))
                        .then(function(transaction){
                            if(!transaction){
                                return def.resolve();
                            }
                            transaction.set({
                                _id: data.idActual,
                                _idBefore: data.idBefore,
                                label: ''
                            });
                            $.when(transaction.saveTransaction())
                                .done(function(){
                                    def.resolve();
                                })
                                .fail(function(){
                                    def.reject();
                                })
                        }).fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                removeRemovedTransactions: function(){
                    var def = $.Deferred();
                    $.when(App.Database.TransactionModel.removeTransactions({
                        label: 'remove'
                    }))
                        .done(function(){
                            def.resolve();
                        }).fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                resetTransactionEditLabel: function(){
                    var def = $.Deferred();

                    $.when(App.Database.TransactionCollection.resetEditLabel())
                        .done(function(){
                            def.resolve();
                        }).fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                updateTagIdInTransactions: function(updateInfo){
                    var def = $.Deferred();

                    $.when(App.Database.TransactionCollection.getAllTransactions())
                        .then(function(transactions){
                            var transactionToSave = [];

                            transactions.each( function(transaction){
                                var tags = transaction.get('tags');
                                _.each(updateInfo, function(oneTagUpdate){
                                    if( oneTagUpdate.idBefore == tags ){
                                        transaction.set('tags', oneTagUpdate.idActual);
                                        transactionToSave.push(transaction);
                                    }
                                })
                            })

                            var methods = [];
                            _.each(transactionToSave, function(transaction){
                                methods.push(function(callback){
                                    $.when(transaction.saveTransaction())
                                        .done(function(){callback(null)})
                                        .fail(function(){callback(1)});
                                });
                            });

                            async.parallel(methods, function(err){
                                if(err){
                                    return def.reject();
                                }
                                def.resolve();
                            });

                        });

                    return def.promise();
                },

                //update tags info

                updateTagsId: function(updateInfo){
                    var def = $.Deferred();
                    var _this = this;

                    if( !updateInfo ){
                        return def.resolve();
                    }

                    var methods = [];
                    _.each(updateInfo, function(data){
                        methods.push(function(callback){
                            $.when(_this.updateTagId(data))
                                .done(function(){callback(null)})
                                .fail(function(){callback(1)});
                        });
                    });

                    async.parallel(methods, function(err){
                        if(err){
                            return def.reject();
                        }
                        def.resolve();
                    });

                    return def.promise();
                },

                updateTagId: function(data){
                    var def = $.Deferred();
                    $.when(App.Database.TagModel.findById(data.idBefore))
                        .then(function(tag){
                            if(!tag){
                                return def.resolve();
                            }
                            tag.set({
                                _id: data.idActual,
                                _idBefore: data.idBefore,
                                label: null
                            });
                            $.when(tag.saveTag())
                                .done(function(){
                                    def.resolve();
                                })
                                .fail(function(){
                                    def.reject();
                                })
                        }).fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                resetTagEditLabel: function(){
                    var def = $.Deferred();

                    $.when(App.Database.TagCollection.resetEditLabel())
                        .done(function(){
                            def.resolve();
                        }).fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                removeRemovedTag: function(){
                    var def = $.Deferred();
                    $.when(App.Database.TagModel.removeTags({
                        label: 'remove'
                    }))
                        .done(function(){
                            def.resolve();
                        }).fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                //api for server - client

                removeTagById: function(id){
                    var def = $.Deferred();

                    $.when(App.Database.TagModel.removeTags({_id: id}))
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                editOrCreateTag: function(tag){
                    var def = $.Deferred();

                    var tag = new App.Database.TagModel(tag);
                    $.when(tag.saveTag())
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });


                    return def.promise();
                },

                removeTransactionById: function(id){
                    var def = $.Deferred();

                    $.when(App.Database.TransactionModel.removeById(id))
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                editOrCreateTransaction: function(transaction){
                    var def = $.Deferred();
                    delete transaction.isDeleted;
                    var transaction = new App.Database.TransactionModel(transaction);
                    $.when(transaction.saveTransaction())
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });


                    return def.promise();
                }

            });

            App.on('initialize:before', function(){
                var controller = new Controller();

                App.reqres.setHandler(config.reqres['service:db:removeTransactionById'], controller.removeTransactionById);
                App.reqres.setHandler(config.reqres['service:db:removeTagById'], controller.removeTagById);
                App.reqres.setHandler(config.reqres['service:db:editOrCreateTag'], controller.editOrCreateTag);
                App.reqres.setHandler(config.reqres['service:db:editOrCreateTransaction'], controller.editOrCreateTransaction);

                App.reqres.setHandler(config.reqres['service:db:getChangingData'], controller.getChangingData);
                App.reqres.setHandler(config.reqres['service:db:updateTagsId'], controller.updateTagsId);
                App.reqres.setHandler(config.reqres['service:db:resetTagEditLabel'], controller.resetTagEditLabel);
                App.reqres.setHandler(config.reqres['service:db:resetTransactionEditLabel'], controller.resetTransactionEditLabel);
                App.reqres.setHandler(config.reqres['service:db:removeRemovedTag'], controller.removeRemovedTag);
                App.reqres.setHandler(config.reqres['service:db:updateTransactionsId'], controller.updateTransactionsId);
                App.reqres.setHandler(config.reqres['service:db:removeRemovedTransactions'], controller.removeRemovedTransactions);
                App.reqres.setHandler(config.reqres['service:db:updateTagIdInTransactions'], controller.updateTagIdInTransactions);

            })


        }
    })

});
define('modules/service/services/auth',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    'storage'

], function(jQuery, Backbone, Marionette, App, config, async, storage){

    App.module("Service.Auth", {

        startWithParent: true,

        define: function( Auth, App, Backbone, Marionette, $, _ ){

            var Controller = Marionette.Controller.extend({

                initialize: function(){
                },

                logout: function(){
                    App.Database.removeDatabase().then(function(){
                        storage.set(config.storage.user['email'], '');
                        storage.set(config.storage['lastUpdate'], 0);
                        storage.set(config.storage['isInitDatabase'], 0);
                        App.redirect(config.api.logout, {trigger: true});
                    })
                }

            });

            App.on('initialize:before', function(){
                var controller = new Controller();

                App.reqres.setHandler(config.reqres['service:auth:logout'], controller.logout);

            })


        }
    })

});
define('modules/service/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './services/db',
    './services/auth'

], function(jQuery, Backbone, Marionette, App, config){

    App.module("Service", {

        startWithParent: true,

        define: function( Widget, App, Backbone, Marionette, $, _ ){}
    })

});
/**
 * @license RequireJS text 2.0.7 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
 define, window, process, Packages,
 java, location, Components, FileUtils */

define('text',['module'], function (module) {
    

    var text, fs, Cc, Ci,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.7',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.indexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                    name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1, name.length);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                    text.useXhr;

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                        parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                    "define(function () { return '" +
                        content +
                        "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
            //Use a '.js' file name so that it indicates it is a
            //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
        typeof process !== "undefined" &&
        process.versions &&
        !!process.versions.node)) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file.indexOf('\uFEFF') === 0) {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                errback(e);
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
        text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        errback(err);
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
        typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
        typeof Components !== 'undefined' && Components.classes &&
        Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes,
            Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');

        text.get = function (url, callback) {
            var inStream, convertStream,
                readData = {},
                fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                    .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                    .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                    Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});

define('text!modules/widget/widgets/base/templates/LayoutTemp.html',[],function () { return '<div class="page-header">\n    <%= widgetName %>\n</div>\n<div class="main-container"></div>\n<div class="progress progress-striped active loading-container">\n    <div class="progress-bar"></div>\n</div>';});

define('modules/widget/widgets/base/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: "widget-container",

        initialize: function(){
            this.listenTo(this.model, 'request', this.startRequestHandler);
            this.listenTo(this.model, 'sync', this.endRequestHandler);
        },

        regions: {
            main: '.main-container'
        },

        startRequestHandler: function(){
            this.$el.addClass('loadingState');
        },
        endRequestHandler: function(){
            this.$el.removeClass('loadingState');
        }

    })

});
define('modules/widget/widgets/base/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'

], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Widget.Base", {

        startWithParent: true,

        define: function( Base, App, Backbone, Marionette, $, _ ){
            var log;

            Base.Controller = Marionette.Controller.extend({

                View: null,

                widgetName: 'BaseWidget',

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Base');

                    _.bindAll(this, "successModelUpdate", 'processError');

                    this.region = options.region;
                    this.model = this.getModel();
                    this.model.set({
                        widgetName: this.widgetName
                    })
                    this.collection = this.getCollection();
                    this.layout = this.getLayout();
                    this.View = this.getView();
                    this.view = null;

                    log('Initialized');
                },

                getModel: function(){
                    return App.reqres.request(config.reqres['model:entity']);
                },

                getView: function(){},

                subscribe: function(){},

                getLayout: function(){
                    return Layout;
                },

                getCollection: function(){
                    return null;
                },

                show: function(options){
                    this.layout = new Layout({
                        model: this.model
                    });
                    this.region.show(this.layout);
                },

                showView: function(){
                    this.view = new this.View({
                        model: this.model,
                        collection: this.collection
                    });
                    this.layout.main.show(this.view);
                    this.subscribe();
                },

                setData: function(options){
                    this.model.set(options, {silent: true});
                    this.sync();
                },

                sync: function(){
                    var _this = this;
                    this.model.getData({
                        success: _this.successModelUpdate,
                        error: _this.processError
                    });
                },

                isSuccessUpdate: function(model){
                    var data = model.get('data');
                    if( data && data.length !== 0 ){
                        return true;
                    }else{
                        return false;
                    }
                },

                successModelUpdate: function(model){
                    if( this.isSuccessUpdate(model) ){
                        if(!this.view) this.showView();
                    }else{
                        this.showErrorView();
                    }
                },

                processError: function(model, xhr, data){
                    var statusText;
                    try{
                        statusText = xhr.statusText;
                    }catch(e){
                        statusText = 'error';
                    }

                    if( statusText != "abort" ) this.showErrorView();
                },

                showErrorView: function(){
                    if( this.view ) {
                        this.view.close();
                        this.view = null;
                    }
                    var noDataView = new App.Component.NoData.View();
                    this.layout.main.show(noDataView);
                },

                onClose: function(){
                    this.model.abortAjax();
                    this.model = null;
                    this.region.close();
                }

            });

        }
    })

});
define('extends/FormView',[
    'backbone',
    'marionette'
], function(Backbone, Marionette){

    return Marionette.ItemView.extend({

        initialize: function(){

            var _this = this;
            _.bindAll(this, "processError", "valid", 'invalid');

            Backbone.Validation.configure({
                forceUpdate: true
            });
            Backbone.Validation.bind(this, {
                valid: _this.valid,
                invalid: _this.invalid
            });

        },

        onRender: function(){
            this.stickit();
        },

        valid: function(view, attr){
            var $el = view.$('[name=' + attr + ']'),
                $section = $el.closest('.form-group'),
                messages = view.$('.messages');

            $section.removeClass('error-row');
            messages.find('li[data-name="'+attr+'"]').remove();
        },

        invalid: function(view, attr, error) {
            var $el = view.$('[name=' + attr + ']'),
                $section = $el.closest('.form-group'),
                messages = view.$('.messages');

            messages.addClass('error-messages');
            $section.addClass('error-row');
            messages.find('li[data-name="'+attr+'"]').remove();
            messages.append("<li data-name='"+attr+"'>"+ error +"</li>");
        },

        processError: function(model, xhr){
            this.resetLoadingState();
            var errors = this.clearXhr(xhr);
            this.showErrors(errors);
        },

        showErrors: function(errors){
            var messages = this.$el.find('.messages').html('').addClass('error-messages');
            if( _.isString(errors) ){
                this.$el.find('.messages').append("<li>"+ errors +"</li>");
            }else{
                for(var key in errors){
                    this.invalid(this, key, errors[key]);
                }
            }
        },

        clearXhr: function(xhr){
            var response,
                errors,
                defaultErrorMessage = "Server error. Please try again later.";

            //если нет респонса, возвращаем стандартную ошибку
            try{ response = JSON.parse(xhr.responseText) }catch(e){return defaultErrorMessage};

            //если в респонсе нет поля errors, возвращаем стандартную ошибку
            var errors = ( "error" in response );
            if(!errors) return defaultErrorMessage;

            return response["error"];
        },

        onBeforeClose: function(){
            Backbone.Validation.unbind(this);
        },

        loadingState: function(){
            this.$el.find('.submit-form').button("loading");
        },

        resetLoadingState: function(){
            this.$el.find('.submit-form').button("reset");
        }
    });

});

define('text!modules/widget/widgets/auth/sign/templates/SignTemp.html',[],function () { return '<form class="form-horizontal">\n    <fieldset>\n        <legend>Sign</legend>\n        <div class="form-group">\n            <div class="col-lg-12">\n                <input name="email" type="email" class="form-control email" placeholder="Email">\n            </div>\n        </div>\n        <div class="form-group">\n            <div class="col-lg-12">\n                <input name="password" type="password" class="form-control password" placeholder="Password">\n            </div>\n        </div>\n\n        <div class="messages"></div>\n\n        <div class="form-group">\n            <div class="col-lg-12">\n                <button type="button" class="btn btn-primary signUp">Sign up</button>\n                <button type="button" class="btn btn-primary signIn">Sign in</button>\n            </div>\n        </div>\n    </fieldset>\n</form>';});

define('modules/widget/widgets/auth/sign/views/SignView',[
    'marionette',
    'extends/FormView',
    'text!../templates/SignTemp.html'
], function(Marionette, FormView, template){

    return FormView.extend({

        template: _.template(template),

        className: "well bs-component sign",

        events: {
            "click .signUp": "signUpHandler",
            "click .signIn": "signInHandler"
        },

        bindings: {
            '[name=email]': {
                observe: 'email'
            },
            '[name=password]': {
                observe: 'password'
            }
        },

        ui: {
            email: ".email",
            password: ".password"
        },

        initialize: function(){
            _.bindAll(this, "processSuccessSignUp", "processSuccessSignIn");
            FormView.prototype.initialize.apply(this, arguments);
        },

        signUpHandler: function(e){
            e.preventDefault();

            if( this.model.isValid(true) ){
                this.loadingState();
                this.model.signUp({
                    success: this.processSuccessSignUp,
                    error: this.processError
                });
            }
        },

        processSuccessSignUp: function(){
            this.trigger('signUp');
        },

        processSuccessSignIn: function(){
            this.trigger('signIn');
        },

        signInHandler: function(e){
            e.preventDefault();

            if( this.model.isValid(true) ){
                this.loadingState();
                this.model.signIn({
                    success: this.processSuccessSignIn,
                    error: this.processError
                });
            }
        },

        resetForm: function(){
            for( var key in this.ui ){
                this.ui[key].val('');
            }
        },

        onClose: function(){

        }

    });
});
define('modules/widget/widgets/auth/sign/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/SignView'

], function(jQuery, Backbone, Marionette, App, config, SignView){

    App.module("Widget.Sign", {

        startWithParent: true,

        define: function( Sign, App, Backbone, Marionette, $, _ ){
            var log;

            Sign.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Collection.Sign');
                    this.region = options.region;

                    this.user = App.reqres.request(config.reqres['user:entity']);
                    this.user.validation = {
                        email: {
                            required: true,
                            pattern: 'email'
                        },
                        password: {
                            required: true,
                            minLength: 5
                        }
                    }

                    this.view = new SignView({
                        model: this.user
                    })

                    this.listenTo(this.view, "signUp", function(){
                        this.view.resetForm();
                        this.trigger('signUp', this.user);
                    })

                    this.listenTo(this.view, "signIn", function(){
                        this.trigger('signIn', this.user);
                    })

                    log('Initialized');
                },

                show: function(){
                    this.region.show(this.view);
                }

            });

        }
    })

});
define('modules/widget/widgets/date/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'moment'

], function(jQuery, Backbone, Marionette, App, config, moment){

    App.module("Widget.DateFilter", {

        startWithParent: true,

        define: function( DateFilter, App, Backbone, Marionette, $, _ ){
            var log;

            DateFilter.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Collection.Sign');

                    _.bindAll(this, "getPeriod");

                    this.region = options.region;

                    this.filterModel = App.reqres.request(config.reqres['model:entity']);
                    this.filterModel.set({
                        date: new Date()
                    });

                    this.view =  new App.Component.DateFilter.View({
                        model: this.filterModel
                    });

                    this._initAppReqres();
                    this.subscribe();
                    log('Initialized');
                },

                subscribe: function(){
                    this.listenTo(this.filterModel, "change:date", this.dateHandler);
                },

                dateHandler: function(){
                    App.channels.main.trigger(config.channels['date:change'], this.getPeriod);
                },

                show: function(){
                    this.region.show(this.view);
                },

                _initAppReqres: function(){
                    App.reqres.setHandler(config.reqres['date:get:period'], this.getPeriod);
                },

                getPeriod: function(){
                    var format = 'YYYY-MM-DD';

                    var date = this.filterModel.get('date'),
                        result = {};
                    date = new Date( date.getTime() );

                    date.setDate(1);
                    result.start = moment(date).format(format);

                    date.setMonth( date.getMonth() + 1);
                    date.setDate(0);
                    result.end = moment(date).format(format);

                    return result;

                }

            });

        }
    })

});

define('text!modules/widget/widgets/tagList/templates/ListTemp.html',[],function () { return '<ul class="list-group budget-list"></ul>';});


define('text!modules/widget/widgets/tagList/templates/TagTemp.html',[],function () { return '<button type="button" class="btn btn-default editBtn">\n    <span class="glyphicon glyphicon-pencil"></span>\n</button>\n<button type="button" class="btn btn-default deleteBtn">X</button>\n<button type="button" class="btn btn-default">\n    <span class="glyphicon glyphicon-tag"></span>\n    <span class="text tagName"><%= tagName %></span>\n</button>';});

define('modules/widget/widgets/tagList/views/Tag',[
    'marionette',
    'text!../templates/TagTemp.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        tagName: 'li',

        template: _.template(template),

        ui: {
            tagName: '.tagName'
        },

        triggers: {
            'click .deleteBtn': "deleteBtn",
            'click .editBtn': "editBtn"
        },

        initialize: function(){
            this.listenTo(this.model, "change:tagName", this.handlerChangeTagName);
            this.listenTo(this.model, "destroy", this.handlerDestroy);
        },

        handlerChangeTagName: function(){
            this.ui.tagName.html( this.model.get('tagName') );
        },

        handlerDestroy: function(){
            this.close();
        }
    });

});

define('text!modules/widget/widgets/tagList/templates/NoTags.html',[],function () { return 'No tags';});

define('modules/widget/widgets/tagList/views/NoTags',[
    'marionette',
    'text!../templates/NoTags.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        tagName: 'li',

        template: _.template(template)
    });

});
define('modules/widget/widgets/tagList/views/ListView',[
    'marionette',
    'text!../templates/ListTemp.html',
    './Tag',
    './NoTags'
], function(Marionette, template, Tag, NoTags){

    return Marionette.CompositeView.extend({

        className: "wrapper",

        itemView: Tag,

        emptyView: NoTags,

        itemViewContainer: '.list-group',

        template: _.template(template),

        events: {},

        initialize: function(){},

        onCompositeRendered : function() {
            this.on('itemview:deleteBtn',function(view, data) {
                this.trigger('deleteTag', data.model);
            });

            this.on('itemview:editBtn',function(view, data) {
                this.trigger('editTag', data.model);
            });
        }
    });

});
define('modules/widget/widgets/tagList/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/ListView'

], function(jQuery, Backbone, Marionette, App, config, ListView){

    App.module("Widget.TagList", {

        startWithParent: true,

        define: function( TagList, App, Backbone, Marionette, $, _ ){
            var log;

            TagList.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    options = options || {};
                    this.region = options.region;
                    this.tags = App.reqres.request(config.reqres['tag:collection:entity']);
                    this.view = null;
                },

                show: function(){

                    var _this = this;
                    var def = $.Deferred();

                    $.when(this.tags.fetch()).done(function(){

                        _this.view = new ListView({
                            collection: _this.tags
                        });

                        _this.listenTo(_this.view, 'deleteProject', function(project){
                            _this.trigger('deleteProject', project);
                        });

                        _this.listenTo(_this.view, 'editProject', function(project){
                            _this.trigger('editProject', project);
                        });

                        _this.listenTo(_this.view, 'el:click', function(project){
                            _this.trigger('el:click', project);
                        });

                        _this.region.show(_this.view);

                        _this.subscribe();

                        def.resolve();
                    });

                    return def.promise();
                },

                subscribe: function(){
                    this.listenTo(this.view, "deleteTag", this.deleteTagHandler);
                    this.listenTo(this.view, "editTag", this.editTagHandler);
                },

                deleteTagHandler: function(tag){
                    var notice = App.reqres.request(config.reqres["notice:get"], {
                        title: "Delete tag",
                        text: "Do you want delete '" + tag.get('tagName') +"' tag?",
                        textPrimary: "Delete",
                        isCloseAuto: true
                    });

                    App.modal.show(notice);

                    this.listenToOnce(notice, "accept", function(){
                        tag.removeTag({
                            success: function(){
                                tag.trigger('destroy');
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Tag was removed.'});
                            },
                            error: function(){
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Cannot delete tag. Server error.', type: "error"});
                            }
                        })
                    })
                },
                editTagHandler: function(tag){
                    var notice = App.reqres.request(config.reqres["notice:get:prompt"], {
                        title: "Rename tag",
                        placeholder: "Enter new tag name",
                        textPrimary: "Edit",
                        isCloseAuto: true
                    });

                    App.modal.show(notice);

                    this.listenToOnce(notice, "accept", function(){

                        if(!notice.value.length){
                            App.execute(config.commands['notify:showNotify:side'], {text: 'Name is required.', type: "error"});
                            return false;
                        }

                        tag.set({
                            tagName: notice.value
                        });

                        tag.saveTag({
                            success: function(){
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Tag was saved.'});
                            },
                            error: function(){
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Cannot save tag. Server error.', type: "error"});
                            }
                        })
                    })
                },

                addTag: function(tag){
                    if(!tag) return false;
                    this.tags.add(tag);
                }
            });

        }
    })

});

define('text!modules/widget/widgets/transaction/add/templates/AddTemp.html',[],function () { return '<h3 class="page-header">Add transaction</h3>\n<form class="form-horizontal">\n    <fieldset>\n        <div class="form-group">\n            <div class="col-lg-10">\n                <input name="count" type="number" class="form-control" id="count" placeholder="Count">\n            </div>\n            <div class="col-lg-10">\n                <div class="calculator">\n                    <div class="row small-grid-row">\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="1" type="button" class="btn btn-default">1</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="2" type="button" class="btn btn-default">2</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="3" type="button" class="btn btn-default">3</button>\n                        </div>\n                    </div>\n                    <div class="row small-grid-row">\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="4" type="button" class="btn btn-default">4</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="5" type="button" class="btn btn-default">5</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="6" type="button" class="btn btn-default">6</button>\n                        </div>\n                    </div>\n                    <div class="row small-grid-row">\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="7" type="button" class="btn btn-default">7</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="8" type="button" class="btn btn-default">8</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="9" type="button" class="btn btn-default">9</button>\n                        </div>\n                    </div>\n                    <div class="row small-grid-row">\n                        <div class="col-xs-4 small-grid ">\n                            <button data-value="clear" type="button" class="btn btn-default clear">clear</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="0" type="button" class="btn btn-default">0</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="backspace" type="button" class="btn btn-default backspace">\n                                <span class="text glyphicon glyphicon-chevron-left" ></span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="form-group">\n            <div class="col-lg-10">\n                <ul class="tags">\n                    <% _.each(tags, function(tag){ %>\n                    <li data-id="<%= tag._id %>" class="">\n                        <button type="button" class="btn btn-default">\n                            <span class="glyphicon glyphicon-tag"></span>\n                            <span class="text"><%= tag.tagName %></span>\n                        </button>\n                    </li>\n                    <% }) %>\n                </ul>\n            </div>\n        </div>\n\n\n        <div class="form-group hidden-xs comment-container">\n            <div class="col-lg-10">\n                <textarea  name="comment" class="form-control" rows="3" id="comment" placeholder="Comment"></textarea>\n            </div>\n        </div>\n\n        <div class="form-group visible-xs comment-toggle">\n            <div class="col-lg-10">\n                <button type="button" class="btn btn-default comment">Comment</button>\n            </div>\n        </div>\n\n        <div class="form-group">\n            <div class="col-lg-10">\n                <input name="date" type="date" class="form-control" value="<%= date%>"  placeholder="Date"/>\n            </div>\n        </div>\n\n        <div class="messages"></div>\n\n        <div class="form-group">\n            <div class="col-lg-10">\n                <button type="button" class="btn btn-default cancel">Cancel</button>\n                <button type="submit" class="btn btn-primary add">Add cost</button>\n            </div>\n        </div>\n    </fieldset>\n</form>';});

define('modules/widget/widgets/transaction/add/views/AddView',[
    'marionette',
    'extends/FormView',
    'text!../templates/AddTemp.html',
    'moment'
], function(Marionette, FormView, template, moment){

    return FormView.extend({

        className: "form-horizontal",

        tagName: 'form',

        template: _.template(template),

        triggers: {
            'click .cancel' : "cancelBtn"
        },

        events: {
            'submit': "submitHandler",
            'click .tags li' : "tagHandler"
        },

        ui: {
            tags: '.tags',
            count: '#count'
        },

        behaviors: {
            Calculator: {
                modelField: 'count'
            },
            Comment: {}
        },

        bindings: {
            '[name=count]': {
                observe: 'count'
            }
        },

        initialize: function(){
            FormView.prototype.initialize.apply(this, arguments);
            _.bindAll(this, 'processSuccessCreate');
            this.subscribe();
        },

        serializeData: function(){
            return {
                tags: this.collection.toJSON(),
                transaction: this.model.toJSON(),
                date: moment(this.model.get('date')).format("YYYY-MM-DD")
            }
        },

        subscribe: function(){
            this.listenTo(this.model, "change:count", this.countHandler)
        },

        countHandler: function(){
            this.ui.count.val(this.model.get('count'));
        },

        onRender: function(){
            this.stickit();
        },

        submitHandler: function(e){
            e.preventDefault();
            this.model.set(this.getData());
            if( this.model.isValid(true) ){
                this.loadingState();
                this.model.createTransaction({
                    success: this.processSuccessCreate,
                    error: this.processError
                });
            }
        },

        processSuccessCreate: function(){
            this.trigger('create', this.model);
        },

        tagHandler: function(e){
            var $el = $(e.target).closest('li');
            if(!$el.hasClass('active')) this.ui.tags.find('li').removeClass('active');
            $el.toggleClass('active');
        },

        getData: function(){
            var data = Backbone.Syphon.serialize(this);
            var tag = this.ui.tags.find('.active').data('id');
            data.tags = (tag) ? tag + "" : '';
            data.date = new Date(data.date);
            return data;
        },

        onCompositeRendered : function() {}
    });

});
define('modules/widget/widgets/transaction/add/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/AddView'

], function(jQuery, Backbone, Marionette, App, config, AddView){

    App.module("Widget.Transaction.Add", {

        startWithParent: true,

        define: function( Add, App, Backbone, Marionette, $, _ ){
            var log;

            Add.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    options = options || {};
                    this.region = options.region;
                    this.tags = App.reqres.request(config.reqres['tag:collection:entity']);
                    this.transaction = App.reqres.request(config.reqres['transaction:entity']);

                    this.transaction.validation = {
                        count: {
                            required: true,
                            pattern: 'number'
                        },
                        date: {
                            required: true
                        }
                    }

                    this.view = null;
                },

                show: function(){
                    var _this = this;
                    var def = $.Deferred();

                    $.when(this.tags.fetch()).done(function(){

                        _this.view = new AddView({
                            model: _this.transaction,
                            collection: _this.tags
                        });

                        _this.region.show(_this.view);

                        _this.subscribe();

                        def.resolve();
                    });

                    return def.promise();
                },

                subscribe: function(){
                    this.listenTo(this.view, "cancelBtn", this.cancelHandler);
                    this.listenTo(this.view, "create", this.createHandler);
                },

                cancelHandler: function(){
                    this.trigger('cancelBtn');
                },

                createHandler: function(transaction){
                    this.trigger('create', transaction);
                }
            });

        }
    })

});

define('text!modules/widget/widgets/transaction/edit/templates/EditTemp.html',[],function () { return '<h3 class="page-header">Edit transaction</h3>\n\n<form class="form-horizontal">\n    <fieldset>\n        <div class="form-group">\n            <div class="col-lg-10">\n                <input name="count" value="<%= transaction.count %>" type="number" class="form-control" id="count" placeholder="Count">\n            </div>\n            <div class="col-lg-10">\n                <div class="calculator">\n                    <div class="row small-grid-row">\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="1" type="button" class="btn btn-default">1</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="2" type="button" class="btn btn-default">2</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="3" type="button" class="btn btn-default">3</button>\n                        </div>\n                    </div>\n                    <div class="row small-grid-row">\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="4" type="button" class="btn btn-default">4</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="5" type="button" class="btn btn-default">5</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="6" type="button" class="btn btn-default">6</button>\n                        </div>\n                    </div>\n                    <div class="row small-grid-row">\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="7" type="button" class="btn btn-default">7</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="8" type="button" class="btn btn-default">8</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="9" type="button" class="btn btn-default">9</button>\n                        </div>\n                    </div>\n                    <div class="row small-grid-row">\n                        <div class="col-xs-4 small-grid ">\n                            <button data-value="clear" type="button" class="btn btn-default clear">clear</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="0" type="button" class="btn btn-default">0</button>\n                        </div>\n                        <div class="col-xs-4 small-grid">\n                            <button data-value="backspace" type="button" class="btn btn-default backspace">\n                                <span class="text glyphicon glyphicon-chevron-left" ></span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="form-group">\n            <div class="col-lg-10">\n                <ul class="tags">\n                    <% _.each(tags, function(tag){ %>\n                    <li data-id="<%= tag._id %>" class=" <%=  (tag._id == transaction.tags)? \'active\': \'\' %> ">\n                        <button type="button" class="btn btn-default ">\n                            <span class="glyphicon glyphicon-tag"></span>\n                            <span class="text"><%= tag.tagName %></span>\n                        </button>\n                    </li>\n                    <% }) %>\n                </ul>\n            </div>\n        </div>\n\n        <div class="form-group hidden-xs comment-container">\n            <div class="col-lg-10">\n                <textarea  name="comment" class="form-control" rows="3" id="comment" placeholder="Comment"><%= transaction.comment %></textarea>\n            </div>\n        </div>\n\n        <div class="form-group visible-xs comment-toggle">\n            <div class="col-lg-10">\n                <button type="button" class="btn btn-default comment">Comment</button>\n            </div>\n        </div>\n\n        <div class="form-group">\n            <div class="col-lg-10">\n                <input name="date" type="date" class="form-control" value="<%= date%>"  placeholder="Date"/>\n            </div>\n        </div>\n\n        <div class="messages"></div>\n\n        <div class="form-group">\n            <div class="col-lg-10">\n                <button type="button" class="btn btn-danger deleteBtn">Remove</button>\n                <button type="button" class="btn btn-default cancelBtn">Cancel</button>\n                <button type="submit" class="btn btn-primary editBtn">Edit</button>\n            </div>\n        </div>\n    </fieldset>\n</form>';});

define('modules/widget/widgets/transaction/edit/views/EditView',[
    'marionette',
    'extends/FormView',
    'text!../templates/EditTemp.html',
    'moment'
], function(Marionette, FormView, template, moment){

    return FormView.extend({

        className: "form-horizontal",

        tagName: 'form',

        template: _.template(template),

        triggers: {
            'click .deleteBtn' : "deleteBtn",
            'click .cancelBtn' : "cancelBtn"
        },

        events: {
            'click .editBtn': 'submitHandler',
            'submit': "submitHandler",
            'click .tags li' : "tagHandler"
        },

        ui: {
            tags: '.tags',
            count: '#count'
        },

        behaviors: {
            Calculator: {
                modelField: 'count'
            },
            Comment: {}
        },

        bindings: {
            '[name=count]': {
                observe: 'count'
            }
        },

        initialize: function(){
            FormView.prototype.initialize.apply(this, arguments);
            _.bindAll(this, 'processSuccessCreate');
        },

        serializeData: function(){
            return {
                tags: this.collection.toJSON(),
                transaction: this.model.toJSON(),
                date: moment(this.model.get('date')).format("YYYY-MM-DD")
            }
        },

        onRender: function(){
            this.stickit();
        },

        submitHandler: function(e){
            e.preventDefault();
            this.model.set(this.getData());
            if( this.model.isValid(true) ){
                this.loadingState();
                this.model.saveTransaction({
                    success: this.processSuccessCreate,
                    error: this.processError
                });
            }
        },

        processSuccessCreate: function(){
            this.trigger('edit', this.model);
        },

        tagHandler: function(e){
            var $el = $(e.target).closest('li');
            if(!$el.hasClass('active')) this.ui.tags.find('li').removeClass('active');
            $el.toggleClass('active');
        },

        getData: function(){
            var data = Backbone.Syphon.serialize(this);
            var tag = this.ui.tags.find('.active').data('id');
            data.tags = (tag) ? tag + "" : "";

            data.date = new Date(data.date);
            return data;
        },

        onCompositeRendered : function() {}
    });

});
define('modules/widget/widgets/transaction/edit/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/EditView'

], function(jQuery, Backbone, Marionette, App, config, EditView){

    App.module("Widget.Transaction.Edit", {

        startWithParent: true,

        define: function( Edit, App, Backbone, Marionette, $, _ ){

            Edit.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    options = options || {};
                    this.region = options.region;
                    this.tags = App.reqres.request(config.reqres['tag:collection:entity']);
                    this.transaction = App.reqres.request(config.reqres['transaction:entity']);
                    this.transaction.set({
                        _id: options.id
                    })

                    this.transaction.validation = {
                        count: {
                            required: true,
                            pattern: 'number'
                        },
                        date: {
                            required: true
                        }
                    }

                    this.view = null;
                },

                show: function(){
                    var _this = this;
                    var def = $.Deferred();

                    $.when(this.tags.fetch(), this.transaction.getData()).done(function(){

                        if( !_this.transaction.get('count') && _this.transaction.get('count') !== 0 ){
                            _this.trigger('noTransaction');
                            return false;
                        }

                        _this.view = new EditView({
                            model: _this.transaction,
                            collection: _this.tags
                        });

                        _this.region.show(_this.view);

                        _this.subscribe();

                        def.resolve();
                    });

                    return def.promise();
                },

                subscribe: function(){
                    this.listenTo(this.view, "deleteBtn", this.deleteBtnHandler);
                    this.listenTo(this.view, "cancelBtn", this.cancelHandler);
                    this.listenTo(this.view, "edit", this.editHandler);
                },

                deleteBtnHandler: function(data){
                    var _this = this;
                    var transaction = data.model;
                    var notice = App.reqres.request(config.reqres["notice:get"], {
                        title: "Delete tag",
                        text: "Do you want delete transaction?",
                        textPrimary: "Delete",
                        isCloseAuto: true
                    });

                    App.modal.show(notice);

                    this.listenToOnce(notice, "accept", function(){
                        transaction.removeTransaction({
                            success: function(){
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Transaction was removed.'});
                                _this.trigger('deleteTransaction', transaction);
                            },
                            error: function(){
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Cannot delete transaction. Server error.', type: "error"});
                            }
                        })
                    })
                },

                cancelHandler: function(){
                    this.trigger('cancelBtn');
                },

                editHandler: function(transaction){
                    this.trigger('edit', transaction);
                }
            });

        }
    })

});

define('text!modules/widget/widgets/transaction/list/templates/ListTemp.html',[],function () { return '<table class="table table-hover budget-table table-striped">\n    <thead>\n    <tr>\n        <th>Tag</th>\n        <th>Count</th>\n        <th>Date</th>\n        <th>Comment</th>\n    </tr>\n    </thead>\n    <tbody></tbody>\n</table>';});


define('text!modules/widget/widgets/transaction/list/templates/TranactionTemp.html',[],function () { return '<td>\n    <% if(tags.tagName) {%>\n        <span class="glyphicon glyphicon-tag"></span>\n        <span class="value"><%= tags.tagName %></span>\n    <%}else{%>\n        <span class="glyphicon glyphicon-tag"></span>\n        <span class="value">-</span>\n    <% }%>\n</td>\n<td><%=  count  %></td>\n<td><%=  dateLabel  %></td>\n<td><%=  comment  %></td>\n<td>\n    <span class="glyphicon glyphicon-chevron-right"></span>\n</td>';});

define('modules/widget/widgets/transaction/list/views/Transaction',[
    'marionette',
    'text!../templates/TranactionTemp.html',
    'moment'
], function(Marionette, template, moment){

    return Marionette.ItemView.extend({

        tagName: 'tr',

        template: _.template(template),

        className: "choosePointer",

        ui: {
            tagName: '.tagName'
        },

        triggers: {
            'click': "chooseTransaction"
        },

        initialize: function(){},

        serializeData: function(){
            var data = this.model.toJSON();
            var format = "DD MMMM";
            data.dateLabel = moment(data.date).format(format);
            return data;
        }
    });

});

define('text!modules/widget/widgets/transaction/list/templates/NoTransaction.html',[],function () { return 'No transaction';});

define('modules/widget/widgets/transaction/list/views/NoTransaction',[
    'marionette',
    'text!../templates/NoTransaction.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        tagName: 'li',

        template: _.template(template)
    });

});
define('modules/widget/widgets/transaction/list/views/ListView',[
    'marionette',
    'text!../templates/ListTemp.html',
    './Transaction',
    './NoTransaction'
], function(Marionette, template, Transaction, NoTransaction){

    return Marionette.CompositeView.extend({

        className: "wrapper",

        itemView: Transaction,

        emptyView: NoTransaction,

        itemViewContainer: 'tbody',

        template: _.template(template),

        events: {},

        initialize: function(){
            this.collection = this.model.get('data');
            this.listenTo(this.model, 'change', this.changeHandler);
        },

        changeHandler: function(){
            this.collection = this.model.get('data');
            this.render();
        },

        onCompositeRendered : function() {
            this.on('itemview:chooseTransaction',function(view, data) {
                this.trigger('chooseTransaction', data.model);
            });
        }
    });

});

define('text!widgetBase/templates/LayoutTemp.html',[],function () { return '<div class="page-header">\n    <%= widgetName %>\n</div>\n<div class="main-container"></div>\n<div class="progress progress-striped active loading-container">\n    <div class="progress-bar"></div>\n</div>';});

define('widgetBase/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: "widget-container",

        initialize: function(){
            this.listenTo(this.model, 'request', this.startRequestHandler);
            this.listenTo(this.model, 'sync', this.endRequestHandler);
        },

        regions: {
            main: '.main-container'
        },

        startRequestHandler: function(){
            this.$el.addClass('loadingState');
        },
        endRequestHandler: function(){
            this.$el.removeClass('loadingState');
        }

    })

});
define('widgetBase/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'

], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Widget.Base", {

        startWithParent: true,

        define: function( Base, App, Backbone, Marionette, $, _ ){
            var log;

            Base.Controller = Marionette.Controller.extend({

                View: null,

                widgetName: 'BaseWidget',

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Base');

                    _.bindAll(this, "successModelUpdate", 'processError');

                    this.region = options.region;
                    this.model = this.getModel();
                    this.model.set({
                        widgetName: this.widgetName
                    })
                    this.collection = this.getCollection();
                    this.layout = this.getLayout();
                    this.View = this.getView();
                    this.view = null;

                    log('Initialized');
                },

                getModel: function(){
                    return App.reqres.request(config.reqres['model:entity']);
                },

                getView: function(){},

                subscribe: function(){},

                getLayout: function(){
                    return Layout;
                },

                getCollection: function(){
                    return null;
                },

                show: function(options){
                    this.layout = new Layout({
                        model: this.model
                    });
                    this.region.show(this.layout);
                },

                showView: function(){
                    this.view = new this.View({
                        model: this.model,
                        collection: this.collection
                    });
                    this.layout.main.show(this.view);
                    this.subscribe();
                },

                setData: function(options){
                    this.model.set(options, {silent: true});
                    this.sync();
                },

                sync: function(){
                    var _this = this;
                    this.model.getData({
                        success: _this.successModelUpdate,
                        error: _this.processError
                    });
                },

                isSuccessUpdate: function(model){
                    var data = model.get('data');
                    if( data && data.length !== 0 ){
                        return true;
                    }else{
                        return false;
                    }
                },

                successModelUpdate: function(model){
                    if( this.isSuccessUpdate(model) ){
                        if(!this.view) this.showView();
                    }else{
                        this.showErrorView();
                    }
                },

                processError: function(model, xhr, data){
                    var statusText;
                    try{
                        statusText = xhr.statusText;
                    }catch(e){
                        statusText = 'error';
                    }

                    if( statusText != "abort" ) this.showErrorView();
                },

                showErrorView: function(){
                    if( this.view ) {
                        this.view.close();
                        this.view = null;
                    }
                    var noDataView = new App.Component.NoData.View();
                    this.layout.main.show(noDataView);
                },

                onClose: function(){
                    this.model.abortAjax();
                    this.model = null;
                    this.region.close();
                }

            });

        }
    })

});
define('modules/widget/widgets/transaction/list/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/ListView',

    'widgetBase/index'

], function(jQuery, Backbone, Marionette, App, config, ListView){

    App.module("Widget.Transaction.List", {

        startWithParent: true,

        define: function( List, App, Backbone, Marionette, $, _ ){
            var log;

            List.Controller = App.Widget.Base.Controller.extend({

                widgetName: 'List of transactions',

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Transaction.List');
                    App.Widget.Base.Controller.prototype.initialize.apply(this, arguments);
                    log('Initialized');
                },

                getModel: function(){
                    return App.reqres.request(config.reqres['statistic:transactionList:entity']);
                },

                getView: function(){
                    return ListView;
                },

                subscribe: function(){
                    this.listenTo(this.view, 'chooseTransaction', this.chooseTransactionHandler);
                },

                chooseTransactionHandler: function(transaction){
                    this.trigger('chooseTransaction', transaction);
                }
            });

        }
    })

});

define('text!modules/widget/widgets/statistics/totals/templates/LayoutTemp.html',[],function () { return '<div class="main-container"></div>\n<div class="progress progress-striped active loading-container">\n    <div class="progress-bar"></div>\n</div>';});

define('modules/widget/widgets/statistics/totals/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: "widget-container",

        initialize: function(){
            this.listenTo(this.model, 'request', this.startRequestHandler);
            this.listenTo(this.model, 'sync', this.endRequestHandler);
        },

        regions: {
            main: '.main-container'
        },

        startRequestHandler: function(){
            this.$el.addClass('loadingState');
        },
        endRequestHandler: function(){
            this.$el.removeClass('loadingState');
        }

    })

});

define('text!modules/widget/widgets/statistics/totals/templates/TotalTemp.html',[],function () { return '<div class="page-header">\n    Totals: <span class="total"><%= total %></span>\n</div>';});

define('modules/widget/widgets/statistics/totals/views/TotalView',[
    'marionette',
    'text!../templates/TotalTemp.html'
], function(Marionette, template){
    return Marionette.ItemView.extend({

        template: _.template(template),

        ui: {
            total: '.total'
        },

        initialize: function(){
            this.subscribe();
        },

        subscribe: function(){
            this.listenTo(this.model, "change:total", this.totalHandler)
        },

        totalHandler: function(){
            this.ui.total.html(this.model.get('total'));
        },

        onClose: function(){

        }

    });
});
define('modules/widget/widgets/statistics/totals/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout',
    './views/TotalView'

], function(jQuery, Backbone, Marionette, App, config, Layout, SignView){

    App.module("Widget.Totals", {

        startWithParent: true,

        define: function( Totals, App, Backbone, Marionette, $, _ ){
            var log;

            Totals.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Collection.Totals');

                    _.bindAll(this, "successModelUpdate", 'processError');

                    this.region = options.region;
                    this.model = App.reqres.request(config.reqres['statistic:total:entity']);
                    this.view = null;

                    log('Initialized');
                },

                show: function(options){
                    this.layout = new Layout({
                        model: this.model
                    });
                    this.region.show(this.layout);
                },

                showView: function(){
                    this.view = new SignView({
                        model: this.model
                    });
                    this.layout.main.show(this.view);
                },

                setData: function(options){
                    //todo: возможно тут нужна какая-то валидация входных данных, граничных значений
                    this.model.set(options, {silent: true});
                    this.syncModel();
                },

                syncModel: function(){
                    var _this = this;
                    this.model.getData({
                        success: _this.successModelUpdate,
                        error: _this.processError
                    });
                },

                processError: function(model, xhr, data){
                    var statusText;
                    try{
                        statusText = xhr.statusText;
                    }catch(e){
                        statusText = 'error';
                    }

                    if( statusText != "abort" ) this.showErrorView();
                },

                successModelUpdate: function(model){
                    var total = model.get('total');
                    if( total || total === 0 ){
                        if(!this.view) this.showView();
                    }else{
                        this.showErrorView();
                    }
                },

                showErrorView: function(){
                    if( this.view ) {
                        this.view.close();
                        this.view = null;
                    }
                    var noDataView = new App.Component.NoData.View();
                    this.layout.main.show(noDataView);
                },

                onClose: function(){
                    this.model.abortAjax();
                    this.model = null;
                    this.region.close();
                }

            });

        }
    })

});

define('text!modules/widget/widgets/statistics/totalByTagChart/templates/TotalByTagTemp.html',[],function () { return '<div class="chart"></div>';});


define('text!modules/widget/widgets/base/templates/SignTemp.html',[],function () { return '';});

define('modules/widget/widgets/base/views/BaseView',[
    'marionette',
    'text!../templates/SignTemp.html'
], function(Marionette, template){
    return Marionette.ItemView.extend({

        template: _.template(template),

        initialize: function(){
            this.listenTo(this.model, "change:data", this.dataHandler);
        },

        dataHandler: function(){
            this.render();
        },

        onClose: function(){

        }

    });
});
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
(function(t){var e,r,i="0.4.2",n="hasOwnProperty",a=/[\.\/]/,s="*",o=function(){},l=function(t,e){return t-e},h={n:{}},u=function(t,i){t+="";var n,a=r,s=Array.prototype.slice.call(arguments,2),o=u.listeners(t),h=0,c=[],f={},p=[],d=e;e=t,r=0;for(var g=0,x=o.length;x>g;g++)"zIndex"in o[g]&&(c.push(o[g].zIndex),0>o[g].zIndex&&(f[o[g].zIndex]=o[g]));for(c.sort(l);0>c[h];)if(n=f[c[h++]],p.push(n.apply(i,s)),r)return r=a,p;for(g=0;x>g;g++)if(n=o[g],"zIndex"in n)if(n.zIndex==c[h]){if(p.push(n.apply(i,s)),r)break;do if(h++,n=f[c[h]],n&&p.push(n.apply(i,s)),r)break;while(n)}else f[n.zIndex]=n;else if(p.push(n.apply(i,s)),r)break;return r=a,e=d,p.length?p:null};u._events=h,u.listeners=function(t){var e,r,i,n,o,l,u,c,f=t.split(a),p=h,d=[p],g=[];for(n=0,o=f.length;o>n;n++){for(c=[],l=0,u=d.length;u>l;l++)for(p=d[l].n,r=[p[f[n]],p[s]],i=2;i--;)e=r[i],e&&(c.push(e),g=g.concat(e.f||[]));d=c}return g},u.on=function(t,e){if(t+="","function"!=typeof e)return function(){};for(var r=t.split(a),i=h,n=0,s=r.length;s>n;n++)i=i.n,i=i.hasOwnProperty(r[n])&&i[r[n]]||(i[r[n]]={n:{}});for(i.f=i.f||[],n=0,s=i.f.length;s>n;n++)if(i.f[n]==e)return o;return i.f.push(e),function(t){+t==+t&&(e.zIndex=+t)}},u.f=function(t){var e=[].slice.call(arguments,1);return function(){u.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},u.stop=function(){r=1},u.nt=function(t){return t?RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},u.nts=function(){return e.split(a)},u.off=u.unbind=function(t,e){if(!t)return u._events=h={n:{}},void 0;var r,i,o,l,c,f,p,d=t.split(a),g=[h];for(l=0,c=d.length;c>l;l++)for(f=0;g.length>f;f+=o.length-2){if(o=[f,1],r=g[f].n,d[l]!=s)r[d[l]]&&o.push(r[d[l]]);else for(i in r)r[n](i)&&o.push(r[i]);g.splice.apply(g,o)}for(l=0,c=g.length;c>l;l++)for(r=g[l];r.n;){if(e){if(r.f){for(f=0,p=r.f.length;p>f;f++)if(r.f[f]==e){r.f.splice(f,1);break}!r.f.length&&delete r.f}for(i in r.n)if(r.n[n](i)&&r.n[i].f){var x=r.n[i].f;for(f=0,p=x.length;p>f;f++)if(x[f]==e){x.splice(f,1);break}!x.length&&delete r.n[i].f}}else{delete r.f;for(i in r.n)r.n[n](i)&&r.n[i].f&&delete r.n[i].f}r=r.n}},u.once=function(t,e){var r=function(){return u.unbind(t,r),e.apply(this,arguments)};return u.on(t,r)},u.version=i,u.toString=function(){return"You are running Eve "+i},"undefined"!=typeof module&&module.exports?module.exports=u:"undefined"!=typeof define?define("eve",[],function(){return u}):t.eve=u})(this),function(t,e){"function"==typeof define&&define.amd?define('raphael',["eve"],function(r){return e(t,r)}):e(t,t.eve)}(this,function(t,e){function r(t){if(r.is(t,"function"))return b?t():e.on("raphael.DOMload",t);if(r.is(t,H))return r._engine.create[N](r,t.splice(0,3+r.is(t[0],W))).add(t);var i=Array.prototype.slice.call(arguments,0);if(r.is(i[i.length-1],"function")){var n=i.pop();return b?n.call(r._engine.create[N](r,i)):e.on("raphael.DOMload",function(){n.call(r._engine.create[N](r,i))})}return r._engine.create[N](r,arguments)}function i(t){if(Object(t)!==t)return t;var e=new t.constructor;for(var r in t)t[B](r)&&(e[r]=i(t[r]));return e}function n(t,e){for(var r=0,i=t.length;i>r;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function a(t,e,r){function i(){var a=Array.prototype.slice.call(arguments,0),s=a.join("␀"),o=i.cache=i.cache||{},l=i.count=i.count||[];return o[B](s)?(n(l,s),r?r(o[s]):o[s]):(l.length>=1e3&&delete o[l.shift()],l.push(s),o[s]=t[N](e,a),r?r(o[s]):o[s])}return i}function s(){return this.hex}function o(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function l(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r}function h(t,e,r,i,n,a,s,o,h){null==h&&(h=1),h=h>1?1:0>h?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;c>g;g++){var x=u*f[g]+u,v=l(x,t,r,n,s),y=l(x,e,i,a,o),m=v*v+y*y;d+=p[g]*q.sqrt(m)}return u*d}function u(t,e,r,i,n,a,s,o,l){if(!(0>l||l>h(t,e,r,i,n,a,s,o))){var u,c=1,f=c/2,p=c-f,d=.01;for(u=h(t,e,r,i,n,a,s,o,p);V(u-l)>d;)f/=2,p+=(l>u?1:-1)*f,u=h(t,e,r,i,n,a,s,o,p);return p}}function c(t,e,r,i,n,a,s,o){if(!(D(t,r)<O(n,s)||O(t,r)>D(n,s)||D(e,i)<O(a,o)||O(e,i)>D(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(+O(t,r).toFixed(2)>p||p>+D(t,r).toFixed(2)||+O(n,s).toFixed(2)>p||p>+D(n,s).toFixed(2)||+O(e,i).toFixed(2)>d||d>+D(e,i).toFixed(2)||+O(a,o).toFixed(2)>d||d>+D(a,o).toFixed(2)))return{x:c,y:f}}}}function f(t,e,i){var n=r.bezierBBox(t),a=r.bezierBBox(e);if(!r.isBBoxIntersect(n,a))return i?0:[];for(var s=h.apply(0,t),o=h.apply(0,e),l=~~(s/5),u=~~(o/5),f=[],p=[],d={},g=i?0:[],x=0;l+1>x;x++){var v=r.findDotsAtSegment.apply(r,t.concat(x/l));f.push({x:v.x,y:v.y,t:x/l})}for(x=0;u+1>x;x++)v=r.findDotsAtSegment.apply(r,e.concat(x/u)),p.push({x:v.x,y:v.y,t:x/u});for(x=0;l>x;x++)for(var y=0;u>y;y++){var m=f[x],b=f[x+1],_=p[y],w=p[y+1],k=.001>V(b.x-m.x)?"y":"x",C=.001>V(w.x-_.x)?"y":"x",B=c(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y);if(B){if(d[B.x.toFixed(4)]==B.y.toFixed(4))continue;d[B.x.toFixed(4)]=B.y.toFixed(4);var S=m.t+V((B[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),T=_.t+V((B[C]-_[C])/(w[C]-_[C]))*(w.t-_.t);S>=0&&1>=S&&T>=0&&1>=T&&(i?g++:g.push({x:B.x,y:B.y,t1:S,t2:T}))}}return g}function p(t,e,i){t=r._path2curve(t),e=r._path2curve(e);for(var n,a,s,o,l,h,u,c,p,d,g=i?0:[],x=0,v=t.length;v>x;x++){var y=t[x];if("M"==y[0])n=l=y[1],a=h=y[2];else{"C"==y[0]?(p=[n,a].concat(y.slice(1)),n=p[6],a=p[7]):(p=[n,a,n,a,l,h,l,h],n=l,a=h);for(var m=0,b=e.length;b>m;m++){var _=e[m];if("M"==_[0])s=u=_[1],o=c=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);var w=f(p,d,i);if(i)g+=w;else{for(var k=0,C=w.length;C>k;k++)w[k].segment1=x,w[k].segment2=m,w[k].bez1=p,w[k].bez2=d;g=g.concat(w)}}}}}return g}function d(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function g(){return this.x+z+this.y+z+this.width+" × "+this.height}function x(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;for(n=t,l=0;8>l;l++){if(a=s(n)-t,e>V(a))return n;if(o=(3*c*n+2*u)*n+h,1e-6>V(o))break;n-=a/o}if(r=0,i=1,n=t,r>n)return r;if(n>i)return i;for(;i>r;){if(a=s(n),e>V(a-t))return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;return o(t,1/(200*a))}function v(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[B](n)&&(i[K(n)]=t[n],r.push(K(n)));r.sort(ce)}this.anim=i,this.top=r[r.length-1],this.percents=r}function y(t,i,n,a,s,o){n=K(n);var l,h,u,c,f,p,g=t.ms,v={},y={},m={};if(a)for(_=0,k=or.length;k>_;_++){var b=or[_];if(b.el.id==i.id&&b.anim==t){b.percent!=n?(or.splice(_,1),u=1):h=b,i.attr(b.totalOrigin);break}}else a=+y;for(var _=0,k=t.percents.length;k>_;_++){if(t.percents[_]==n||t.percents[_]>a*t.top){n=t.percents[_],f=t.percents[_-1]||0,g=g/t.top*(n-f),c=t.percents[_+1],l=t.anim[n];break}a&&i.attr(t.anim[t.percents[_]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;else{for(var C in l)if(l[B](C)&&(ie[B](C)||i.paper.customAttributes[B](C)))switch(v[C]=i.attr(C),null==v[C]&&(v[C]=re[C]),y[C]=l[C],ie[C]){case W:m[C]=(y[C]-v[C])/g;break;case"colour":v[C]=r.getRGB(v[C]);var S=r.getRGB(y[C]);m[C]={r:(S.r-v[C].r)/g,g:(S.g-v[C].g)/g,b:(S.b-v[C].b)/g};break;case"path":var T=Re(v[C],y[C]),A=T[1];for(v[C]=T[0],m[C]=[],_=0,k=v[C].length;k>_;_++){m[C][_]=[0];for(var N=1,L=v[C][_].length;L>N;N++)m[C][_][N]=(A[_][N]-v[C][_][N])/g}break;case"transform":var M=i._,z=Oe(M[C],y[C]);if(z)for(v[C]=z.from,y[C]=z.to,m[C]=[],m[C].real=!0,_=0,k=v[C].length;k>_;_++)for(m[C][_]=[v[C][_][0]],N=1,L=v[C][_].length;L>N;N++)m[C][_][N]=(y[C][_][N]-v[C][_][N])/g;else{var R=i.matrix||new d,I={_:{transform:M.transform},getBBox:function(){return i.getBBox(1)}};v[C]=[R.a,R.b,R.c,R.d,R.e,R.f],qe(I,y[C]),y[C]=I._.transform,m[C]=[(I.matrix.a-R.a)/g,(I.matrix.b-R.b)/g,(I.matrix.c-R.c)/g,(I.matrix.d-R.d)/g,(I.matrix.e-R.e)/g,(I.matrix.f-R.f)/g]}break;case"csv":var j=F(l[C])[P](w),q=F(v[C])[P](w);if("clip-rect"==C)for(v[C]=q,m[C]=[],_=q.length;_--;)m[C][_]=(j[_]-v[C][_])/g;y[C]=j;break;default:for(j=[][E](l[C]),q=[][E](v[C]),m[C]=[],_=i.paper.customAttributes[C].length;_--;)m[C][_]=((j[_]||0)-(q[_]||0))/g}var D=l.easing,O=r.easing_formulas[D];if(!O)if(O=F(D).match(Q),O&&5==O.length){var V=O;O=function(t){return x(t,+V[1],+V[2],+V[3],+V[4],g)}}else O=pe;if(p=l.start||t.start||+new Date,b={anim:t,percent:n,timestamp:p,start:p+(t.del||0),status:0,initstatus:a||0,stop:!1,ms:g,easing:O,from:v,diff:m,to:y,el:i,callback:l.callback,prev:f,next:c,repeat:o||t.times,origin:i.attr(),totalOrigin:s},or.push(b),a&&!h&&!u&&(b.stop=!0,b.start=new Date-g*a,1==or.length))return hr();u&&(b.start=new Date-b.ms*a),1==or.length&&lr(hr)}e("raphael.anim.start."+i.id,i,t)}}function m(t){for(var e=0;or.length>e;e++)or[e].el.paper==t&&or.splice(e--,1)}r.version="2.1.0",r.eve=e;var b,_,w=/[, ]+/,k={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,B="hasOwnProperty",S={doc:document,win:t},T={was:Object.prototype[B].call(S.win,"Raphael"),is:S.win.Raphael},A=function(){this.ca=this.customAttributes={}},N="apply",E="concat",L="ontouchstart"in S.win||S.win.DocumentTouch&&S.doc instanceof DocumentTouch,M="",z=" ",F=String,P="split",R="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[P](z),I={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},j=F.prototype.toLowerCase,q=Math,D=q.max,O=q.min,V=q.abs,Y=q.pow,G=q.PI,W="number",X="string",H="array",U=Object.prototype.toString,$=(r._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Z={NaN:1,Infinity:1,"-Infinity":1},Q=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,J=q.round,K=parseFloat,te=parseInt,ee=F.prototype.toUpperCase,re=r._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},ie=r._availableAnimAttrs={blur:W,"clip-rect":"csv",cx:W,cy:W,fill:"colour","fill-opacity":W,"font-size":W,height:W,opacity:W,path:"path",r:W,rx:W,ry:W,stroke:"colour","stroke-opacity":W,"stroke-width":W,transform:"transform",width:W,x:W,y:W},ne=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,ae={hs:1,rg:1},se=/,?([achlmqrstvxz]),?/gi,oe=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,le=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,he=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,ue=(r._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),ce=function(t,e){return K(t)-K(e)},fe=function(){},pe=function(t){return t},de=r._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},ge=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},xe=r._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return ge(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return ge(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return de(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return de(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return de(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return de(e.x,e.y,e.width,e.height)}},ve=r.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(t=Re(t),n=0,s=t.length;s>n;n++)for(l=t[n],a=1,o=l.length;o>a;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(r._g=S,r.type=S.win.SVGAngle||S.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==r.type){var ye,me=S.doc.createElement("div");if(me.innerHTML='<v:shape adj="1"/>',ye=me.firstChild,ye.style.behavior="url(#default#VML)",!ye||"object"!=typeof ye.adj)return r.type=M;me=null}r.svg=!(r.vml="VML"==r.type),r._Paper=A,r.fn=_=A.prototype=r.prototype,r._id=0,r._oid=0,r.is=function(t,e){return e=j.call(e),"finite"==e?!Z[B](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||U.call(t).slice(8,-1).toLowerCase()==e},r.angle=function(t,e,i,n,a,s){if(null==a){var o=t-i,l=e-n;return o||l?(180+180*q.atan2(-l,-o)/G+360)%360:0}return r.angle(t,e,a,s)-r.angle(i,n,a,s)},r.rad=function(t){return t%360*G/180},r.deg=function(t){return 180*t/G%360},r.snapTo=function(t,e,i){if(i=r.is(i,"finite")?i:10,r.is(t,H)){for(var n=t.length;n--;)if(i>=V(t[n]-e))return t[n]}else{t=+t;var a=e%t;if(i>a)return e-a;if(a>t-i)return e-a+t}return e},r.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=0|16*q.random(),r="x"==t?e:8|3&e;return r.toString(16)}),r.setWindow=function(t){e("raphael.setWindow",r,S.win,t),S.win=t,S.doc=S.win.document,r._engine.initWin&&r._engine.initWin(S.win)};var be=function(t){if(r.vml){var e,i=/^\s+|\s+$/g;try{var n=new ActiveXObject("htmlfile");n.write("<body>"),n.close(),e=n.body}catch(s){e=createPopup().document.body}var o=e.createTextRange();be=a(function(t){try{e.style.color=F(t).replace(i,M);var r=o.queryCommandValue("ForeColor");return r=(255&r)<<16|65280&r|(16711680&r)>>>16,"#"+("000000"+r.toString(16)).slice(-6)}catch(n){return"none"}})}else{var l=S.doc.createElement("i");l.title="Raphaël Colour Picker",l.style.display="none",S.doc.body.appendChild(l),be=a(function(t){return l.style.color=t,S.doc.defaultView.getComputedStyle(l,M).getPropertyValue("color")})}return be(t)},_e=function(){return"hsb("+[this.h,this.s,this.b]+")"},we=function(){return"hsl("+[this.h,this.s,this.l]+")"},ke=function(){return this.hex},Ce=function(t,e,i){if(null==e&&r.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,e=t.g,t=t.r),null==e&&r.is(t,X)){var n=r.getRGB(t);t=n.r,e=n.g,i=n.b}return(t>1||e>1||i>1)&&(t/=255,e/=255,i/=255),[t,e,i]},Be=function(t,e,i,n){t*=255,e*=255,i*=255;var a={r:t,g:e,b:i,hex:r.rgb(t,e,i),toString:ke};return r.is(n,"finite")&&(a.opacity=n),a};r.color=function(t){var e;return r.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(e=r.hsb2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):r.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(e=r.hsl2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):(r.is(t,"string")&&(t=r.getRGB(t)),r.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(e=r.rgb2hsl(t),t.h=e.h,t.s=e.s,t.l=e.l,e=r.rgb2hsb(t),t.v=e.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=ke,t},r.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,t=t.h,i=t.o),t*=360;var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-V(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],Be(n,a,s,i)},r.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var n,a,s,o,l;return t=t%360/60,l=2*e*(.5>r?r:1-r),o=l*(1-V(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],Be(n,a,s,i)},r.rgb2hsb=function(t,e,r){r=Ce(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=D(t,e,r),s=a-O(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=60*((i+360)%6)/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:_e}},r.rgb2hsl=function(t,e,r){r=Ce(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=D(t,e,r),o=O(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=60*((i+360)%6)/360,a=(s+o)/2,n=0==l?0:.5>a?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:we}},r._path2string=function(){return this.join(",").replace(se,"$1")},r._preload=function(t,e){var r=S.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,S.doc.body.removeChild(this)},r.onerror=function(){S.doc.body.removeChild(this)},S.doc.body.appendChild(r),r.src=t},r.getRGB=a(function(t){if(!t||(t=F(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:s};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:s};!(ae[B](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=be(t));var e,i,n,a,o,l,h=t.match($);return h?(h[2]&&(n=te(h[2].substring(5),16),i=te(h[2].substring(3,5),16),e=te(h[2].substring(1,3),16)),h[3]&&(n=te((o=h[3].charAt(3))+o,16),i=te((o=h[3].charAt(2))+o,16),e=te((o=h[3].charAt(1))+o,16)),h[4]&&(l=h[4][P](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),"rgba"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100)),h[5]?(l=h[5][P](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(e/=360),"hsba"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsb2rgb(e,i,n,a)):h[6]?(l=h[6][P](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(e/=360),"hsla"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsl2rgb(e,i,n,a)):(h={r:e,g:i,b:n,toString:s},h.hex="#"+(16777216|n|i<<8|e<<16).toString(16).slice(1),r.is(a,"finite")&&(h.opacity=a),h)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:s}},r),r.hsb=a(function(t,e,i){return r.hsb2rgb(t,e,i).hex}),r.hsl=a(function(t,e,i){return r.hsl2rgb(t,e,i).hex}),r.rgb=a(function(t,e,r){return"#"+(16777216|r|e<<8|t<<16).toString(16).slice(1)}),r.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,0>=e.s&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},r.getColor.reset=function(){delete this.start},r.parsePathString=function(t){if(!t)return null;var e=Se(t);if(e.arr)return Ae(e.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return r.is(t,H)&&r.is(t[0],H)&&(n=Ae(t)),n.length||F(t).replace(oe,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(he,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][E](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][E](a));else for(;a.length>=i[s]&&(n.push([e][E](a.splice(0,i[s]))),i[s]););}),n.toString=r._path2string,e.arr=Ae(n),n},r.parseTransformString=a(function(t){if(!t)return null;var e=[];return r.is(t,H)&&r.is(t[0],H)&&(e=Ae(t)),e.length||F(t).replace(le,function(t,r,i){var n=[];j.call(r),i.replace(he,function(t,e){e&&n.push(+e)}),e.push([r][E](n))}),e.toString=r._path2string,e});var Se=function(t){var e=Se.ps=Se.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[B](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};r.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=Y(h,3),c=Y(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,x=t+2*l*(r-t)+f*(n-2*r+t),v=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,C=90-180*q.atan2(x-y,v-m)/G;return(x>y||m>v)&&(C+=180),{x:d,y:g,m:{x:x,y:v},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:C}},r.bezierBBox=function(t,e,i,n,a,s,o,l){r.is(t,"array")||(t=[t,e,i,n,a,s,o,l]);var h=Pe.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},r.isPointInsideBBox=function(t,e,r){return e>=t.x&&t.x2>=e&&r>=t.y&&t.y2>=r},r.isBBoxIntersect=function(t,e){var i=r.isPointInsideBBox;return i(e,t.x,t.y)||i(e,t.x2,t.y)||i(e,t.x,t.y2)||i(e,t.x2,t.y2)||i(t,e.x,e.y)||i(t,e.x2,e.y)||i(t,e.x,e.y2)||i(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)},r.pathIntersection=function(t,e){return p(t,e)},r.pathIntersectionNumber=function(t,e){return p(t,e,1)},r.isPointInsidePath=function(t,e,i){var n=r.pathBBox(t);return r.isPointInsideBBox(n,e,i)&&1==p(t,[["M",e,i],["H",n.x2+10]],1)%2},r._removedFactory=function(t){return function(){e("raphael.log",null,"Raphaël: you are calling to method “"+t+"” of removed object",t)}};var Te=r.pathBBox=function(t){var e=Se(t);if(e.bbox)return i(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Re(t);for(var r,n=0,a=0,s=[],o=[],l=0,h=t.length;h>l;l++)if(r=t[l],"M"==r[0])n=r[1],a=r[2],s.push(n),o.push(a);else{var u=Pe(n,a,r[1],r[2],r[3],r[4],r[5],r[6]);s=s[E](u.min.x,u.max.x),o=o[E](u.min.y,u.max.y),n=r[5],a=r[6]}var c=O[N](0,s),f=O[N](0,o),p=D[N](0,s),d=D[N](0,o),g=p-c,x=d-f,v={x:c,y:f,x2:p,y2:d,width:g,height:x,cx:c+g/2,cy:f+x/2};return e.bbox=i(v),v},Ae=function(t){var e=i(t);return e.toString=r._path2string,e},Ne=r._pathToRelative=function(t){var e=Se(t);if(e.rel)return Ae(e.rel);r.is(t,H)&&r.is(t&&t[0],H)||(t=r.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push(["M",n,a]));for(var h=l,u=t.length;u>h;h++){var c=i[h]=[],f=t[h];if(f[0]!=j.call(f[0]))switch(c[0]=j.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;d>p;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,x=f.length;x>g;g++)i[h][g]=f[g]}var v=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][v-1];break;case"v":a+=+i[h][v-1];break;default:n+=+i[h][v-2],a+=+i[h][v-1]}}return i.toString=r._path2string,e.rel=Ae(i),i},Ee=r._pathToAbsolute=function(t){var e=Se(t);if(e.abs)return Ae(e.abs);if(r.is(t,H)&&r.is(t&&t[0],H)||(t=r.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,s=0,l=0,h=0;"M"==t[0][0]&&(n=+t[0][1],a=+t[0][2],s=n,l=a,h++,i[0]=["M",n,a]);for(var u,c,f=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),p=h,d=t.length;d>p;p++){if(i.push(u=[]),c=t[p],c[0]!=ee.call(c[0]))switch(u[0]=ee.call(c[0]),u[0]){case"A":u[1]=c[1],u[2]=c[2],u[3]=c[3],u[4]=c[4],u[5]=c[5],u[6]=+(c[6]+n),u[7]=+(c[7]+a);break;case"V":u[1]=+c[1]+a;break;case"H":u[1]=+c[1]+n;break;case"R":for(var g=[n,a][E](c.slice(1)),x=2,v=g.length;v>x;x++)g[x]=+g[x]+n,g[++x]=+g[x]+a;i.pop(),i=i[E](o(g,f));break;case"M":s=+c[1]+n,l=+c[2]+a;default:for(x=1,v=c.length;v>x;x++)u[x]=+c[x]+(x%2?n:a)}else if("R"==c[0])g=[n,a][E](c.slice(1)),i.pop(),i=i[E](o(g,f)),u=["R"][E](c.slice(-2));else for(var y=0,m=c.length;m>y;y++)u[y]=c[y];switch(u[0]){case"Z":n=s,a=l;break;case"H":n=u[1];break;case"V":a=u[1];break;case"M":s=u[u.length-2],l=u[u.length-1];default:n=u[u.length-2],a=u[u.length-1]}}return i.toString=r._path2string,e.abs=Ae(i),i},Le=function(t,e,r,i){return[t,e,r,i,r,i]},Me=function(t,e,r,i,n,a){var s=1/3,o=2/3;return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},ze=function(t,e,r,i,n,s,o,l,h,u){var c,f=120*G/180,p=G/180*(+n||0),d=[],g=a(function(t,e,r){var i=t*q.cos(r)-e*q.sin(r),n=t*q.sin(r)+e*q.cos(r);return{x:i,y:n}});if(u)C=u[0],B=u[1],w=u[2],k=u[3];else{c=g(t,e,-p),t=c.x,e=c.y,c=g(l,h,-p),l=c.x,h=c.y;var x=(q.cos(G/180*n),q.sin(G/180*n),(t-l)/2),v=(e-h)/2,y=x*x/(r*r)+v*v/(i*i);y>1&&(y=q.sqrt(y),r=y*r,i=y*i);var m=r*r,b=i*i,_=(s==o?-1:1)*q.sqrt(V((m*b-m*v*v-b*x*x)/(m*v*v+b*x*x))),w=_*r*v/i+(t+l)/2,k=_*-i*x/r+(e+h)/2,C=q.asin(((e-k)/i).toFixed(9)),B=q.asin(((h-k)/i).toFixed(9));C=w>t?G-C:C,B=w>l?G-B:B,0>C&&(C=2*G+C),0>B&&(B=2*G+B),o&&C>B&&(C-=2*G),!o&&B>C&&(B-=2*G)}var S=B-C;if(V(S)>f){var T=B,A=l,N=h;B=C+f*(o&&B>C?1:-1),l=w+r*q.cos(B),h=k+i*q.sin(B),d=ze(l,h,r,i,n,0,o,A,N,[B,T,w,k])}S=B-C;var L=q.cos(C),M=q.sin(C),z=q.cos(B),F=q.sin(B),R=q.tan(S/4),I=4/3*r*R,j=4/3*i*R,D=[t,e],O=[t+I*M,e-j*L],Y=[l+I*F,h-j*z],W=[l,h];if(O[0]=2*D[0]-O[0],O[1]=2*D[1]-O[1],u)return[O,Y,W][E](d);d=[O,Y,W][E](d).join()[P](",");for(var X=[],H=0,U=d.length;U>H;H++)X[H]=H%2?g(d[H-1],d[H],p).y:g(d[H],d[H+1],p).x;return X},Fe=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:Y(h,3)*t+3*Y(h,2)*l*r+3*h*l*l*n+Y(l,3)*s,y:Y(h,3)*e+3*Y(h,2)*l*i+3*h*l*l*a+Y(l,3)*o}},Pe=a(function(t,e,r,i,n,a,s,o){var l,h=n-2*r+t-(s-2*n+r),u=2*(r-t)-2*(n-r),c=t-r,f=(-u+q.sqrt(u*u-4*h*c))/2/h,p=(-u-q.sqrt(u*u-4*h*c))/2/h,d=[e,o],g=[t,s];return V(f)>"1e12"&&(f=.5),V(p)>"1e12"&&(p=.5),f>0&&1>f&&(l=Fe(t,e,r,i,n,a,s,o,f),g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=Fe(t,e,r,i,n,a,s,o,p),g.push(l.x),d.push(l.y)),h=a-2*i+e-(o-2*a+i),u=2*(i-e)-2*(a-i),c=e-i,f=(-u+q.sqrt(u*u-4*h*c))/2/h,p=(-u-q.sqrt(u*u-4*h*c))/2/h,V(f)>"1e12"&&(f=.5),V(p)>"1e12"&&(p=.5),f>0&&1>f&&(l=Fe(t,e,r,i,n,a,s,o,f),g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=Fe(t,e,r,i,n,a,s,o,p),g.push(l.x),d.push(l.y)),{min:{x:O[N](0,g),y:O[N](0,d)},max:{x:D[N](0,g),y:D[N](0,d)}}}),Re=r._path2curve=a(function(t,e){var r=!e&&Se(t);if(!e&&r.curve)return Ae(r.curve);for(var i=Ee(t),n=e&&Ee(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e){var r,i;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][E](ze[N](0,[e.x,e.y][E](t.slice(1))));break;case"S":r=e.x+(e.x-(e.bx||e.x)),i=e.y+(e.y-(e.by||e.y)),t=["C",r,i][E](t.slice(1));break;case"T":e.qx=e.x+(e.x-(e.qx||e.x)),e.qy=e.y+(e.y-(e.qy||e.y)),t=["C"][E](Me(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][E](Me(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][E](Le(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][E](Le(e.x,e.y,t[1],e.y));break;case"V":t=["C"][E](Le(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][E](Le(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)t.splice(e++,0,["C"][E](r.splice(0,6)));t.splice(e,1),c=D(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],c=D(i.length,n&&n.length||0))},u=0,c=D(i.length,n&&n.length||0);c>u;u++){i[u]=o(i[u],a),l(i,u),n&&(n[u]=o(n[u],s)),n&&l(n,u),h(i,n,a,s,u),h(n,i,s,a,u);var f=i[u],p=n&&n[u],d=f.length,g=n&&p.length;a.x=f[d-2],a.y=f[d-1],a.bx=K(f[d-4])||a.x,a.by=K(f[d-3])||a.y,s.bx=n&&(K(p[g-4])||s.x),s.by=n&&(K(p[g-3])||s.y),s.x=n&&p[g-2],s.y=n&&p[g-1]}return n||(r.curve=Ae(i)),n?[i,n]:i},null,Ae),Ie=(r._parseDots=a(function(t){for(var e=[],i=0,n=t.length;n>i;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=r.getRGB(s[1]),a.color.error)return null;a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),e.push(a)}for(i=1,n=e.length-1;n>i;i++)if(!e[i].offset){for(var o=K(e[i-1].offset||0),l=0,h=i+1;n>h;h++)if(e[h].offset){l=e[h].offset;break}l||(l=100,h=n),l=K(l);for(var u=(l-o)/(h-i+1);h>i;i++)o+=u,e[i].offset=o+"%"}return e}),r._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)}),je=(r._tofront=function(t,e){e.top!==t&&(Ie(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},r._toback=function(t,e){e.bottom!==t&&(Ie(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},r._insertafter=function(t,e,r){Ie(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},r._insertbefore=function(t,e,r){Ie(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},r.toMatrix=function(t,e){var r=Te(t),i={_:{transform:M},getBBox:function(){return r}};return qe(i,e),i.matrix}),qe=(r.transformPath=function(t,e){return ve(t,je(t,e))},r._extractTransform=function(t,e){if(null==e)return t._.transform;e=F(e).replace(/\.{3}|\u2026/g,t._.transform||M);var i=r.parseTransformString(e),n=0,a=0,s=0,o=1,l=1,h=t._,u=new d;if(h.transform=i||[],i)for(var c=0,f=i.length;f>c;c++){var p,g,x,v,y,m=i[c],b=m.length,_=F(m[0]).toLowerCase(),w=m[0]!=_,k=w?u.invert():0;"t"==_&&3==b?w?(p=k.x(0,0),g=k.y(0,0),x=k.x(m[1],m[2]),v=k.y(m[1],m[2]),u.translate(x-p,v-g)):u.translate(m[1],m[2]):"r"==_?2==b?(y=y||t.getBBox(1),u.rotate(m[1],y.x+y.width/2,y.y+y.height/2),n+=m[1]):4==b&&(w?(x=k.x(m[2],m[3]),v=k.y(m[2],m[3]),u.rotate(m[1],x,v)):u.rotate(m[1],m[2],m[3]),n+=m[1]):"s"==_?2==b||3==b?(y=y||t.getBBox(1),u.scale(m[1],m[b-1],y.x+y.width/2,y.y+y.height/2),o*=m[1],l*=m[b-1]):5==b&&(w?(x=k.x(m[3],m[4]),v=k.y(m[3],m[4]),u.scale(m[1],m[2],x,v)):u.scale(m[1],m[2],m[3],m[4]),o*=m[1],l*=m[2]):"m"==_&&7==b&&u.add(m[1],m[2],m[3],m[4],m[5],m[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&&1==l&&!n&&h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1}),De=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},Oe=r._equaliseTransform=function(t,e){e=F(e).replace(/\.{3}|\u2026/g,t),t=r.parseTransformString(t)||[],e=r.parseTransformString(e)||[];for(var i,n,a,s,o=D(t.length,e.length),l=[],h=[],u=0;o>u;u++){if(a=t[u]||De(e[u]),s=e[u]||De(a),a[0]!=s[0]||"r"==a[0].toLowerCase()&&(a[2]!=s[2]||a[3]!=s[3])||"s"==a[0].toLowerCase()&&(a[3]!=s[3]||a[4]!=s[4]))return;for(l[u]=[],h[u]=[],i=0,n=D(a.length,s.length);n>i;i++)i in a&&(l[u][i]=a[i]),i in s&&(h[u][i]=s[i])}return{from:l,to:h}
};r._getContainer=function(t,e,i,n){var a;return a=null!=n||r.is(t,"object")?t:S.doc.getElementById(t),null!=a?a.tagName?null==e?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:e,height:i}:{container:1,x:t,y:e,width:i,height:n}:void 0},r.pathToRelative=Ne,r._engine={},r.path2curve=Re,r.matrix=function(t,e,r,i,n,a){return new d(t,e,r,i,n,a)},function(t){function e(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var r=q.sqrt(e(t));t[0]&&(t[0]/=r),t[1]&&(t[1]/=r)}t.add=function(t,e,r,i,n,a){var s,o,l,h,u=[[],[],[]],c=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,r,n],[e,i,a],[0,0,1]];for(t&&t instanceof d&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),s=0;3>s;s++)for(o=0;3>o;o++){for(h=0,l=0;3>l;l++)h+=c[s][l]*f[l][o];u[s][o]=h}this.a=u[0][0],this.b=u[1][0],this.c=u[0][1],this.d=u[1][1],this.e=u[0][2],this.f=u[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new d(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new d(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,e,i){t=r.rad(t),e=e||0,i=i||0;var n=+q.cos(t).toFixed(9),a=+q.sin(t).toFixed(9);this.add(n,a,-a,n,e,i),this.add(1,0,0,1,-e,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[F.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return r.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=q.sqrt(e(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=q.sqrt(e(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return 0>s?(t.rotate=r.deg(q.acos(s)),0>a&&(t.rotate=360-t.rotate)):t.rotate=r.deg(q.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[P]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:M)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:M)+(e.rotate?"r"+[e.rotate,0,0]:M)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(d.prototype);var Ve=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);_.safari="Apple Computer, Inc."==navigator.vendor&&(Ve&&4>Ve[1]||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Ve&&8>Ve[1]?function(){var t=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){t.remove()})}:fe;for(var Ye=function(){this.returnValue=!1},Ge=function(){return this.originalEvent.preventDefault()},We=function(){this.cancelBubble=!0},Xe=function(){return this.originalEvent.stopPropagation()},He=function(){return S.doc.addEventListener?function(t,e,r,i){var n=L&&I[e]?I[e]:e,a=function(n){var a=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,s=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,o=n.clientX+s,l=n.clientY+a;if(L&&I[B](e))for(var h=0,u=n.targetTouches&&n.targetTouches.length;u>h;h++)if(n.targetTouches[h].target==t){var c=n;n=n.targetTouches[h],n.originalEvent=c,n.preventDefault=Ge,n.stopPropagation=Xe;break}return r.call(i,n,o,l)};return t.addEventListener(n,a,!1),function(){return t.removeEventListener(n,a,!1),!0}}:S.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||S.win.event;var e=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,n=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||Ye,t.stopPropagation=t.stopPropagation||We,r.call(i,t,a,s)};t.attachEvent("on"+e,n);var a=function(){return t.detachEvent("on"+e,n),!0};return a}:void 0}(),Ue=[],$e=function(t){for(var r,i=t.clientX,n=t.clientY,a=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,s=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,o=Ue.length;o--;){if(r=Ue[o],L){for(var l,h=t.touches.length;h--;)if(l=t.touches[h],l.identifier==r.el._drag.id){i=l.clientX,n=l.clientY,(t.originalEvent?t.originalEvent:t).preventDefault();break}}else t.preventDefault();var u,c=r.el.node,f=c.nextSibling,p=c.parentNode,d=c.style.display;S.win.opera&&p.removeChild(c),c.style.display="none",u=r.el.paper.getElementByPoint(i,n),c.style.display=d,S.win.opera&&(f?p.insertBefore(c,f):p.appendChild(c)),u&&e("raphael.drag.over."+r.el.id,r.el,u),i+=s,n+=a,e("raphael.drag.move."+r.el.id,r.move_scope||r.el,i-r.el._drag.x,n-r.el._drag.y,i,n,t)}},Ze=function(t){r.unmousemove($e).unmouseup(Ze);for(var i,n=Ue.length;n--;)i=Ue[n],i.el._drag={},e("raphael.drag.end."+i.el.id,i.end_scope||i.start_scope||i.move_scope||i.el,t);Ue=[]},Qe=r.el={},Je=R.length;Je--;)(function(t){r[t]=Qe[t]=function(e,i){return r.is(e,"function")&&(this.events=this.events||[],this.events.push({name:t,f:e,unbind:He(this.shape||this.node||S.doc,t,e,i||this)})),this},r["un"+t]=Qe["un"+t]=function(e){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!r.is(e,"undefined")&&i[n].f!=e||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}})(R[Je]);Qe.data=function(t,i){var n=ue[this.id]=ue[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(r.is(t,"object")){for(var a in t)t[B](a)&&this.data(a,t[a]);return this}return e("raphael.data.get."+this.id,this,n[t],t),n[t]}return n[t]=i,e("raphael.data.set."+this.id,this,i,t),this},Qe.removeData=function(t){return null==t?ue[this.id]={}:ue[this.id]&&delete ue[this.id][t],this},Qe.getData=function(){return i(ue[this.id]||{})},Qe.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},Qe.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var Ke=[];Qe.drag=function(t,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();var h=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,u=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft;this._drag.x=l.clientX+u,this._drag.y=l.clientY+h,this._drag.id=l.identifier,!Ue.length&&r.mousemove($e).mouseup(Ze),Ue.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&e.on("raphael.drag.start."+this.id,i),t&&e.on("raphael.drag.move."+this.id,t),n&&e.on("raphael.drag.end."+this.id,n),e("raphael.drag.start."+this.id,s||a||this,l.clientX+u,l.clientY+h,l)}return this._drag={},Ke.push({el:this,start:l}),this.mousedown(l),this},Qe.onDragOver=function(t){t?e.on("raphael.drag.over."+this.id,t):e.unbind("raphael.drag.over."+this.id)},Qe.undrag=function(){for(var t=Ke.length;t--;)Ke[t].el==this&&(this.unmousedown(Ke[t].start),Ke.splice(t,1),e.unbind("raphael.drag.*."+this.id));!Ke.length&&r.unmousemove($e).unmouseup(Ze),Ue=[]},_.circle=function(t,e,i){var n=r._engine.circle(this,t||0,e||0,i||0);return this.__set__&&this.__set__.push(n),n},_.rect=function(t,e,i,n,a){var s=r._engine.rect(this,t||0,e||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},_.ellipse=function(t,e,i,n){var a=r._engine.ellipse(this,t||0,e||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},_.path=function(t){t&&!r.is(t,X)&&!r.is(t[0],H)&&(t+=M);var e=r._engine.path(r.format[N](r,arguments),this);return this.__set__&&this.__set__.push(e),e},_.image=function(t,e,i,n,a){var s=r._engine.image(this,t||"about:blank",e||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},_.text=function(t,e,i){var n=r._engine.text(this,t||0,e||0,F(i));return this.__set__&&this.__set__.push(n),n},_.set=function(t){!r.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var e=new cr(t);return this.__set__&&this.__set__.push(e),e.paper=this,e.type="set",e},_.setStart=function(t){this.__set__=t||this.set()},_.setFinish=function(){var t=this.__set__;return delete this.__set__,t},_.setSize=function(t,e){return r._engine.setSize.call(this,t,e)},_.setViewBox=function(t,e,i,n,a){return r._engine.setViewBox.call(this,t,e,i,n,a)},_.top=_.bottom=null,_.raphael=r;var tr=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(S.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(S.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;return{y:o,x:l}};_.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=S.doc.elementFromPoint(t,e);if(S.win.opera&&"svg"==n.tagName){var a=tr(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=i.getIntersectionList(s,null);o.length&&(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null},_.getElementsByBBox=function(t){var e=this.set();return this.forEach(function(i){r.isBBoxIntersect(i.getBBox(),t)&&e.push(i)}),e},_.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},_.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},_.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},Qe.isPointInside=function(t,e){var i=this.realPath=this.realPath||xe[this.type](this);return r.isPointInsidePath(i,t,e)},Qe.getBBox=function(t){if(this.removed)return{};var e=this._;return t?((e.dirty||!e.bboxwt)&&(this.realPath=xe[this.type](this),e.bboxwt=Te(this.realPath),e.bboxwt.toString=g,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&((e.dirty||!this.realPath)&&(e.bboxwt=0,this.realPath=xe[this.type](this)),e.bbox=Te(ve(this.realPath,this.matrix)),e.bbox.toString=g,e.dirty=e.dirtyT=0),e.bbox)},Qe.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},Qe.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:t.opacity||.5,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||xe[this.type](this);a=this.matrix?ve(a,this.matrix):a;for(var s=1;r+1>s;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var er=function(t,e,i,n,a,s,o,l,c){return null==c?h(t,e,i,n,a,s,o,l):r.findDotsAtSegment(t,e,i,n,a,s,o,l,u(t,e,i,n,a,s,o,l,c))},rr=function(t,e){return function(i,n,a){i=Re(i);for(var s,o,l,h,u,c="",f={},p=0,d=0,g=i.length;g>d;d++){if(l=i[d],"M"==l[0])s=+l[1],o=+l[2];else{if(h=er(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h>n){if(e&&!f.start){if(u=er(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),c+=["C"+u.start.x,u.start.y,u.m.x,u.m.y,u.x,u.y],a)return c;f.start=c,c=["M"+u.x,u.y+"C"+u.n.x,u.n.y,u.end.x,u.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!e)return u=er(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:u.x,y:u.y,alpha:u.alpha}}p+=h,s=+l[5],o=+l[6]}c+=l.shift()+l}return f.end=c,u=t?p:e?f:r.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),u.alpha&&(u={x:u.x,y:u.y,alpha:u.alpha}),u}},ir=rr(1),nr=rr(),ar=rr(0,1);r.getTotalLength=ir,r.getPointAtLength=nr,r.getSubpath=function(t,e,r){if(1e-6>this.getTotalLength(t)-r)return ar(t,e).end;var i=ar(t,r,1);return e?ar(i,e).end:i},Qe.getTotalLength=function(){return"path"==this.type?this.node.getTotalLength?this.node.getTotalLength():ir(this.attrs.path):void 0},Qe.getPointAtLength=function(t){return"path"==this.type?nr(this.attrs.path,t):void 0},Qe.getSubpath=function(t,e){return"path"==this.type?r.getSubpath(this.attrs.path,t,e):void 0};var sr=r.easing_formulas={linear:function(t){return t},"<":function(t){return Y(t,1.7)},">":function(t){return Y(t,.48)},"<>":function(t){var e=.48-t/1.04,r=q.sqrt(.1734+e*e),i=r-e,n=Y(V(i),1/3)*(0>i?-1:1),a=-r-e,s=Y(V(a),1/3)*(0>a?-1:1),o=n+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:Y(2,-10*t)*q.sin((t-.075)*2*G/.3)+1},bounce:function(t){var e,r=7.5625,i=2.75;return 1/i>t?e=r*t*t:2/i>t?(t-=1.5/i,e=r*t*t+.75):2.5/i>t?(t-=2.25/i,e=r*t*t+.9375):(t-=2.625/i,e=r*t*t+.984375),e}};sr.easeIn=sr["ease-in"]=sr["<"],sr.easeOut=sr["ease-out"]=sr[">"],sr.easeInOut=sr["ease-in-out"]=sr["<>"],sr["back-in"]=sr.backIn,sr["back-out"]=sr.backOut;var or=[],lr=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(t){setTimeout(t,16)},hr=function(){for(var t=+new Date,i=0;or.length>i;i++){var n=or[i];if(!n.el.removed&&!n.paused){var a,s,o=t-n.start,l=n.ms,h=n.easing,u=n.from,c=n.diff,f=n.to,p=(n.t,n.el),d={},g={};if(n.initstatus?(o=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*l,n.status=n.initstatus,delete n.initstatus,n.stop&&or.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(o/l))/n.anim.top,!(0>o))if(l>o){var x=h(o/l);for(var v in u)if(u[B](v)){switch(ie[v]){case W:a=+u[v]+x*l*c[v];break;case"colour":a="rgb("+[ur(J(u[v].r+x*l*c[v].r)),ur(J(u[v].g+x*l*c[v].g)),ur(J(u[v].b+x*l*c[v].b))].join(",")+")";break;case"path":a=[];for(var m=0,b=u[v].length;b>m;m++){a[m]=[u[v][m][0]];for(var _=1,w=u[v][m].length;w>_;_++)a[m][_]=+u[v][m][_]+x*l*c[v][m][_];a[m]=a[m].join(z)}a=a.join(z);break;case"transform":if(c[v].real)for(a=[],m=0,b=u[v].length;b>m;m++)for(a[m]=[u[v][m][0]],_=1,w=u[v][m].length;w>_;_++)a[m][_]=u[v][m][_]+x*l*c[v][m][_];else{var k=function(t){return+u[v][t]+x*l*c[v][t]};a=[["m",k(0),k(1),k(2),k(3),k(4),k(5)]]}break;case"csv":if("clip-rect"==v)for(a=[],m=4;m--;)a[m]=+u[v][m]+x*l*c[v][m];break;default:var C=[][E](u[v]);for(a=[],m=p.paper.customAttributes[v].length;m--;)a[m]=+C[m]+x*l*c[v][m]}d[v]=a}p.attr(d),function(t,r,i){setTimeout(function(){e("raphael.anim.frame."+t,r,i)})}(p.id,p,n.anim)}else{if(function(t,i,n){setTimeout(function(){e("raphael.anim.frame."+i.id,i,n),e("raphael.anim.finish."+i.id,i,n),r.is(t,"function")&&t.call(i)})}(n.callback,p,n.anim),p.attr(f),or.splice(i--,1),n.repeat>1&&!n.next){for(s in f)f[B](s)&&(g[s]=n.totalOrigin[s]);n.el.attr(g),y(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&y(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}r.svg&&p&&p.paper&&p.paper.safari(),or.length&&lr(hr)},ur=function(t){return t>255?255:0>t?0:t};Qe.animateWith=function(t,e,i,n,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var l=i instanceof v?i:r.animation(i,n,a,s);y(l,o,l.percents[0],null,o.attr());for(var h=0,u=or.length;u>h;h++)if(or[h].anim==e&&or[h].el==t){or[u-1].start=or[h].start;break}return o},Qe.onAnimation=function(t){return t?e.on("raphael.anim.frame."+this.id,t):e.unbind("raphael.anim.frame."+this.id),this},v.prototype.delay=function(t){var e=new v(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},v.prototype.repeat=function(t){var e=new v(this.anim,this.ms);return e.del=this.del,e.times=q.floor(D(t,0))||1,e},r.animation=function(t,e,i,n){if(t instanceof v)return t;(r.is(i,"function")||!i)&&(n=n||i||null,i=null),t=Object(t),e=+e||0;var a,s,o={};for(s in t)t[B](s)&&K(s)!=s&&K(s)+"%"!=s&&(a=!0,o[s]=t[s]);return a?(i&&(o.easing=i),n&&(o.callback=n),new v({100:o},e)):new v(t,e)},Qe.animate=function(t,e,i,n){var a=this;if(a.removed)return n&&n.call(a),a;var s=t instanceof v?t:r.animation(t,e,i,n);return y(s,a,s.percents[0],null,a.attr()),a},Qe.setTime=function(t,e){return t&&null!=e&&this.status(t,O(e,t.ms)/t.ms),this},Qe.status=function(t,e){var r,i,n=[],a=0;if(null!=e)return y(t,this,-1,O(e,1)),this;for(r=or.length;r>a;a++)if(i=or[a],i.el.id==this.id&&(!t||i.anim==t)){if(t)return i.status;n.push({anim:i.anim,status:i.status})}return t?0:n},Qe.pause=function(t){for(var r=0;or.length>r;r++)or[r].el.id!=this.id||t&&or[r].anim!=t||e("raphael.anim.pause."+this.id,this,or[r].anim)!==!1&&(or[r].paused=!0);return this},Qe.resume=function(t){for(var r=0;or.length>r;r++)if(or[r].el.id==this.id&&(!t||or[r].anim==t)){var i=or[r];e("raphael.anim.resume."+this.id,this,i.anim)!==!1&&(delete i.paused,this.status(i.anim,i.status))}return this},Qe.stop=function(t){for(var r=0;or.length>r;r++)or[r].el.id!=this.id||t&&or[r].anim!=t||e("raphael.anim.stop."+this.id,this,or[r].anim)!==!1&&or.splice(r--,1);return this},e.on("raphael.remove",m),e.on("raphael.clear",m),Qe.toString=function(){return"Raphaël’s object"};var cr=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;r>e;e++)!t[e]||t[e].constructor!=Qe.constructor&&t[e].constructor!=cr||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},fr=cr.prototype;fr.push=function(){for(var t,e,r=0,i=arguments.length;i>r;r++)t=arguments[r],!t||t.constructor!=Qe.constructor&&t.constructor!=cr||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},fr.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},fr.forEach=function(t,e){for(var r=0,i=this.items.length;i>r;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var pr in Qe)Qe[B](pr)&&(fr[pr]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][N](r,e)})}}(pr));return fr.attr=function(t,e){if(t&&r.is(t,H)&&r.is(t[0],"object"))for(var i=0,n=t.length;n>i;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;s>a;a++)this.items[a].attr(t,e);return this},fr.clear=function(){for(;this.length;)this.pop()},fr.splice=function(t,e){t=0>t?D(this.length+t,0):t,e=D(0,O(this.length-t,e));var r,i=[],n=[],a=[];for(r=2;arguments.length>r;r++)a.push(arguments[r]);for(r=0;e>r;r++)n.push(this[t+r]);for(;this.length-t>r;r++)i.push(this[t+r]);var s=a.length;for(r=0;s+i.length>r;r++)this.items[t+r]=this[t+r]=s>r?a[r]:i[r-s];for(r=this.items.length=this.length-=e-s;this[r];)delete this[r++];return new cr(n)},fr.exclude=function(t){for(var e=0,r=this.length;r>e;e++)if(this[e]==t)return this.splice(e,1),!0},fr.animate=function(t,e,i,n){(r.is(i,"function")||!i)&&(n=i||null);var a,s,o=this.items.length,l=o,h=this;if(!o)return this;n&&(s=function(){!--o&&n.call(h)}),i=r.is(i,X)?i:s;var u=r.animation(t,e,i,s);for(a=this.items[--l].animate(u);l--;)this.items[l]&&!this.items[l].removed&&this.items[l].animateWith(a,u,u),this.items[l]&&!this.items[l].removed||o--;return this},fr.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},fr.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=O[N](0,t),e=O[N](0,e),r=D[N](0,r),i=D[N](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},fr.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;r>e;e++)t.push(this.items[e].clone());return t},fr.toString=function(){return"Raphaël‘s set"},fr.glow=function(t){var e=this.paper.set();return this.forEach(function(r){var i=r.glow(t);null!=i&&i.forEach(function(t){e.push(t)})}),e},fr.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){return i.isPointInside(t,e)?(console.log("runned"),r=!0,!1):void 0}),r},r.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[B](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=te(t.face["units-per-em"],10);for(var n in t.glyphs)if(t.glyphs[B](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[B](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},_.getFont=function(t,e,i,n){if(n=n||"normal",i=i||"normal",e=+e||{normal:400,bold:700,lighter:300,bolder:800}[e]||400,r.fonts){var a=r.fonts[t];if(!a){var s=RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,M)+"(\\s|$)","i");for(var o in r.fonts)if(r.fonts[B](o)&&s.test(o)){a=r.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;u>h&&(l=a[h],l.face["font-weight"]!=e||l.face["font-style"]!=i&&l.face["font-style"]||l.face["font-stretch"]!=n);h++);return l}},_.print=function(t,e,i,n,a,s,o,l){s=s||"middle",o=D(O(o||0,1),-1),l=D(O(l||1,3),1);var h,u=F(i)[P](M),c=0,f=0,p=M;if(r.is(n,"string")&&(n=this.getFont(n)),n){h=(a||16)/n.face["units-per-em"];for(var d=n.face.bbox[P](w),g=+d[0],x=d[3]-d[1],v=0,y=+d[1]+("baseline"==s?x+ +n.face.descent:x/2),m=0,b=u.length;b>m;m++){if("\n"==u[m])c=0,k=0,f=0,v+=x*l;else{var _=f&&n.glyphs[u[m-1]]||{},k=n.glyphs[u[m]];c+=f?(_.w||n.w)+(_.k&&_.k[u[m]]||0)+n.w*o:0,f=1}k&&k.d&&(p+=r.transformPath(k.d,["t",c*h,v*h,"s",h,h,g,y,"t",(t-g)/h,(e-y)/h]))}}return this.path(p).attr({fill:"#000",stroke:"none"})},_.add=function(t){if(r.is(t,"array"))for(var e,i=this.set(),n=0,a=t.length;a>n;n++)e=t[n]||{},k[B](e.type)&&i.push(this[e.type]().attr(e));return i},r.format=function(t,e){var i=r.is(e,H)?[0][E](e):arguments;return t&&r.is(t,X)&&i.length-1&&(t=t.replace(C,function(t,e){return null==i[++e]?M:i[e]})),t||M},r.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))}),n=(null==n||n==i?t:n)+""};return function(e,i){return(e+"").replace(t,function(t,e){return r(t,e,i)})}}(),r.ninja=function(){return T.was?S.win.Raphael=T.is:delete Raphael,r},r.st=fr,function(t,e,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):r.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(e,i=function(){t.removeEventListener(e,i,!1),t.readyState="complete"},!1),t.readyState="loading"),n()}(document,"DOMContentLoaded"),e.on("raphael.DOMload",function(){b=!0}),function(){if(r.svg){var t="hasOwnProperty",e=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=r.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};r.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var x=function(i,n){if(n){"string"==typeof i&&(i=x(i));for(var a in n)n[t](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),e(n[a])):i.setAttribute(a,e(n[a])))}else i=r._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},v=function(t,n){var h="linear",u=t.id+n,f=.5,p=.5,d=t.node,g=t.paper,v=d.style,y=r._g.doc.getElementById(u);if(!y){if(n=e(n).replace(r._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r);var n=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var m=n.shift();if(m=-i(m),isNaN(m))return null;var b=[0,0,a.cos(r.rad(m)),a.sin(r.rad(m))],_=1/(s(o(b[2]),o(b[3]))||1);b[2]*=_,b[3]*=_,0>b[2]&&(b[0]=-b[2],b[2]=0),0>b[3]&&(b[1]=-b[3],b[3]=0)}var w=r._parseDots(n);if(!w)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),t.gradient&&u!=t.gradient.id&&(g.defs.removeChild(t.gradient),delete t.gradient),!t.gradient){y=x(h+"Gradient",{id:u}),t.gradient=y,x(y,"radial"==h?{fx:f,fy:p}:{x1:b[0],y1:b[1],x2:b[2],y2:b[3],gradientTransform:t.matrix.invert()}),g.defs.appendChild(y);for(var k=0,C=w.length;C>k;k++)y.appendChild(x("stop",{offset:w[k].offset?w[k].offset:k?"100%":"0%","stop-color":w[k].color||"#fff"}))}}return x(d,{fill:"url(#"+u+")",opacity:1,"fill-opacity":1}),v.fill=c,v.opacity=1,v.fillOpacity=1,1},y=function(t){var e=t.getBBox(1);x(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},m=function(i,n,a){if("path"==i.type){for(var s,o,l,h,u,f=e(n).toLowerCase().split("-"),p=i.paper,v=a?"end":"start",y=i.node,m=i.attrs,b=m["stroke-width"],_=f.length,w="classic",k=3,C=3,B=5;_--;)switch(f[_]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=f[_];break;case"wide":C=5;break;case"narrow":C=2;break;case"long":k=5;break;case"short":k=2}if("open"==w?(k+=2,C+=2,B+=2,l=1,h=a?4:1,u={fill:"none",stroke:m.stroke}):(h=l=k/2,u={fill:m.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=w){var S="raphael-marker-"+w,T="raphael-marker-"+v+w+k+C;r._g.doc.getElementById(S)?g[S]++:(p.defs.appendChild(x(x("path"),{"stroke-linecap":"round",d:d[w],id:S})),g[S]=1);var A,N=r._g.doc.getElementById(T);N?(g[T]++,A=N.getElementsByTagName("use")[0]):(N=x(x("marker"),{id:T,markerHeight:C,markerWidth:k,orient:"auto",refX:h,refY:C/2}),A=x(x("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+C/2+") ":c)+"scale("+k/B+","+C/B+")","stroke-width":(1/((k/B+C/B)/2)).toFixed(4)}),N.appendChild(A),p.defs.appendChild(N),g[T]=1),x(A,u);var E=l*("diamond"!=w&&"oval"!=w);a?(s=i._.arrows.startdx*b||0,o=r.getTotalLength(m.path)-E*b):(s=E*b,o=r.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),u={},u["marker-"+v]="url(#"+T+")",(o||s)&&(u.d=r.getSubpath(m.path,s,o)),x(y,u),i._.arrows[v+"Path"]=S,i._.arrows[v+"Marker"]=T,i._.arrows[v+"dx"]=E,i._.arrows[v+"Type"]=w,i._.arrows[v+"String"]=n}else a?(s=i._.arrows.startdx*b||0,o=r.getTotalLength(m.path)-s):(s=0,o=r.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),i._.arrows[v+"Path"]&&x(y,{d:r.getSubpath(m.path,s,o)}),delete i._.arrows[v+"Path"],delete i._.arrows[v+"Marker"],delete i._.arrows[v+"dx"],delete i._.arrows[v+"Type"],delete i._.arrows[v+"String"];for(u in g)if(g[t](u)&&!g[u]){var L=r._g.doc.getElementById(u);L&&L.parentNode.removeChild(L)}}},b={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},_=function(t,r,i){if(r=b[e(r).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=r.length;o--;)s[o]=r[o]*n+(o%2?1:-1)*a;x(t.node,{"stroke-dasharray":s.join(",")})}},w=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;l.style.visibility="hidden";for(var d in a)if(a[t](d)){if(!r._availableAttrs[t](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"href":case"title":case"target":var b=l.parentNode;if("a"!=b.tagName.toLowerCase()){var w=x("a");b.insertBefore(w,l),w.appendChild(l),b=w}"target"==d?b.setAttributeNS(p,"show","blank"==g?"new":g):b.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":m(i,g);break;case"arrow-end":m(i,g,1);break;case"clip-rect":var k=e(g).split(h);if(4==k.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var B=x("clipPath"),S=x("rect");B.id=r.createUUID(),x(S,{x:k[0],y:k[1],width:k[2],height:k[3]}),B.appendChild(S),i.paper.defs.appendChild(B),x(l,{"clip-path":"url(#"+B.id+")"}),i.clip=S}if(!g){var T=l.getAttribute("clip-path");if(T){var A=r._g.doc.getElementById(T.replace(/(^url\(#|\)$)/g,c));A&&A.parentNode.removeChild(A),x(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(x(l,{d:g?u.path=r._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&y(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&y(i),i._.dirty=1;break;case"r":"rect"==i.type?x(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":(1!=i._.sx||1!=i._.sy)&&(g/=s(o(i._.sx),o(i._.sy))||1),i.paper._vbSize&&(g*=i.paper._vbSize),l.setAttribute(d,g),u["stroke-dasharray"]&&_(i,u["stroke-dasharray"],a),i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1));break;case"stroke-dasharray":_(i,g,a);break;case"fill":var N=e(g).match(r._ISURL);if(N){B=x("pattern");var E=x("image");B.id=r.createUUID(),x(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),x(E,{x:0,y:0,"xlink:href":N[1]}),B.appendChild(E),function(t){r._preload(N[1],function(){var e=this.offsetWidth,r=this.offsetHeight;x(t,{width:e,height:r}),x(E,{width:e,height:r}),i.paper.safari()})}(B),i.paper.defs.appendChild(B),x(l,{fill:"url(#"+B.id+")"}),i.pattern=B,i.pattern&&y(i);break}var L=r.getRGB(g);if(L.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=e(g).charAt())&&v(i,g)){if("opacity"in u||"fill-opacity"in u){var M=r._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(M){var z=M.getElementsByTagName("stop");x(z[z.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!r.is(u.opacity,"undefined")&&r.is(a.opacity,"undefined")&&x(l,{opacity:u.opacity}),!r.is(u["fill-opacity"],"undefined")&&r.is(a["fill-opacity"],"undefined")&&x(l,{"fill-opacity":u["fill-opacity"]});L[t]("opacity")&&x(l,{"fill-opacity":L.opacity>1?L.opacity/100:L.opacity});case"stroke":L=r.getRGB(g),l.setAttribute(d,L.hex),"stroke"==d&&L[t]("opacity")&&x(l,{"stroke-opacity":L.opacity>1?L.opacity/100:L.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=e(g).charAt())&&v(i,g);break;case"opacity":u.gradient&&!u[t]("stroke-opacity")&&x(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){M=r._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),M&&(z=M.getElementsByTagName("stop"),x(z[z.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var F=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[F]=g,i._.dirty=1,l.setAttribute(d,g)}}C(i,a),l.style.visibility=f},k=1.2,C=function(i,a){if("text"==i.type&&(a[t]("text")||a[t]("font")||a[t]("font-size")||a[t]("x")||a[t]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(r._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[t]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h,u=e(a.text).split("\n"),f=[],p=0,d=u.length;d>p;p++)h=x("tspan"),p&&x(h,{dy:l*k,x:s.x}),h.appendChild(r._g.doc.createTextNode(u[p])),o.appendChild(h),f[p]=h}else for(f=o.getElementsByTagName("tspan"),p=0,d=f.length;d>p;p++)p?x(f[p],{dy:l*k,x:s.x}):x(f[0],{dy:0});x(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),v=s.y-(g.y+g.height/2);v&&r.is(v,"finite")&&x(f[0],{dy:v})}},B=function(t,e){this[0]=this.node=t,t.raphael=!0,this.id=r._oid++,t.raphaelid=this.id,this.matrix=r.matrix(),this.realPath=null,this.paper=e,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!e.bottom&&(e.bottom=this),this.prev=e.top,e.top&&(e.top.next=this),e.top=this,this.next=null
},S=r.el;B.prototype=S,S.constructor=B,r._engine.path=function(t,e){var r=x("path");e.canvas&&e.canvas.appendChild(r);var i=new B(r,e);return i.type="path",w(i,{fill:"none",stroke:"#000",path:t}),i},S.rotate=function(t,r,n){if(this.removed)return this;if(t=e(t).split(h),t.length-1&&(r=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(r=n),null==r||null==n){var a=this.getBBox(1);r=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,r,n]])),this},S.scale=function(t,r,n,a){if(this.removed)return this;if(t=e(t).split(h),t.length-1&&(r=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==r&&(r=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,r,n,a]])),this},S.translate=function(t,r){return this.removed?this:(t=e(t).split(h),t.length-1&&(r=i(t[1])),t=i(t[0])||0,r=+r||0,this.transform(this._.transform.concat([["t",t,r]])),this)},S.transform=function(e){var i=this._;if(null==e)return i.transform;if(r._extractTransform(this,e),this.clip&&x(this.clip,{transform:this.matrix.invert()}),this.pattern&&y(this),this.node&&x(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[t]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return this},S.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},S.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},S.remove=function(){if(!this.removed&&this.node.parentNode){var t=this.paper;t.__set__&&t.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&t.defs.removeChild(this.gradient),r._tear(this,t),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var e in this)this[e]="function"==typeof this[e]?r._removedFactory(e):null;this.removed=!0}},S._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e={};try{e=this.node.getBBox()}catch(r){}finally{e=e||{}}return t&&this.hide(),e},S.attr=function(e,i){if(this.removed)return this;if(null==e){var n={};for(var a in this.attrs)this.attrs[t](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&r.is(e,"string")){if("fill"==e&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==e)return this._.transform;for(var s=e.split(h),o={},l=0,c=s.length;c>l;l++)e=s[l],o[e]=e in this.attrs?this.attrs[e]:r.is(this.paper.customAttributes[e],"function")?this.paper.customAttributes[e].def:r._availableAttrs[e];return c-1?o:o[s[0]]}if(null==i&&r.is(e,"array")){for(o={},l=0,c=e.length;c>l;l++)o[e[l]]=this.attr(e[l]);return o}if(null!=i){var f={};f[e]=i}else null!=e&&r.is(e,"object")&&(f=e);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[t](p)&&f[t](p)&&r.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[t](g)&&(f[g]=d[g])}return w(this,f),this},S.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var t=this.paper;return t.top!=this&&r._tofront(this,t),this},S.toBack=function(){if(this.removed)return this;var t=this.node.parentNode;return"a"==t.tagName.toLowerCase()?t.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):t.firstChild!=this.node&&t.insertBefore(this.node,this.node.parentNode.firstChild),r._toback(this,this.paper),this.paper,this},S.insertAfter=function(t){if(this.removed)return this;var e=t.node||t[t.length-1].node;return e.nextSibling?e.parentNode.insertBefore(this.node,e.nextSibling):e.parentNode.appendChild(this.node),r._insertafter(this,t,this.paper),this},S.insertBefore=function(t){if(this.removed)return this;var e=t.node||t[0].node;return e.parentNode.insertBefore(this.node,e),r._insertbefore(this,t,this.paper),this},S.blur=function(t){var e=this;if(0!==+t){var i=x("filter"),n=x("feGaussianBlur");e.attrs.blur=t,i.id=r.createUUID(),x(n,{stdDeviation:+t||1.5}),i.appendChild(n),e.paper.defs.appendChild(i),e._blur=i,x(e.node,{filter:"url(#"+i.id+")"})}else e._blur&&(e._blur.parentNode.removeChild(e._blur),delete e._blur,delete e.attrs.blur),e.node.removeAttribute("filter");return e},r._engine.circle=function(t,e,r,i){var n=x("circle");t.canvas&&t.canvas.appendChild(n);var a=new B(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",x(n,a.attrs),a},r._engine.rect=function(t,e,r,i,n,a){var s=x("rect");t.canvas&&t.canvas.appendChild(s);var o=new B(s,t);return o.attrs={x:e,y:r,width:i,height:n,r:a||0,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",x(s,o.attrs),o},r._engine.ellipse=function(t,e,r,i,n){var a=x("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new B(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",x(a,s.attrs),s},r._engine.image=function(t,e,r,i,n,a){var s=x("image");x(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new B(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},r._engine.text=function(t,e,i,n){var a=x("text");t.canvas&&t.canvas.appendChild(a);var s=new B(a,t);return s.attrs={x:e,y:i,"text-anchor":"middle",text:n,font:r._availableAttrs.font,stroke:"none",fill:"#000"},s.type="text",w(s,s.attrs),s},r._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},r._engine.create=function(){var t=r._getContainer.apply(0,arguments),e=t&&t.container,i=t.x,n=t.y,a=t.width,s=t.height;if(!e)throw Error("SVG container not found.");var o,l=x("svg"),h="overflow:hidden;";return i=i||0,n=n||0,a=a||512,s=s||342,x(l,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg"}),1==e?(l.style.cssText=h+"position:absolute;left:"+i+"px;top:"+n+"px",r._g.doc.body.appendChild(l),o=1):(l.style.cssText=h+"position:relative",e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l)),e=new r._Paper,e.width=a,e.height=s,e.canvas=l,e.clear(),e._left=e._top=0,o&&(e.renderfix=function(){}),e.renderfix(),e},r._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a,o,l=s(r/this.width,i/this.height),h=this.top,c=n?"meet":"xMinYMin";for(null==t?(this._vbSize&&(l=1),delete this._vbSize,a="0 0 "+this.width+f+this.height):(this._vbSize=l,a=t+f+e+f+r+f+i),x(this.canvas,{viewBox:a,preserveAspectRatio:c});l&&h;)o="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":o}),h._.dirty=1,h._.dirtyT=1,h=h.prev;return this._viewBox=[t,e,r,i,!!n],this},r.prototype.renderfix=function(){var t,e=this.canvas,r=e.style;try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(i){t=e.createSVGMatrix()}var n=-t.e%1,a=-t.f%1;(n||a)&&(n&&(this._left=(this._left+n)%1,r.left=this._left+"px"),a&&(this._top=(this._top+a)%1,r.top=this._top+"px"))},r.prototype.clear=function(){r.eve("raphael.clear",this);for(var t=this.canvas;t.firstChild;)t.removeChild(t.firstChild);this.bottom=this.top=null,(this.desc=x("desc")).appendChild(r._g.doc.createTextNode("Created with Raphaël "+r.version)),t.appendChild(this.desc),t.appendChild(this.defs=x("defs"))},r.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null};var T=r.st;for(var A in S)S[t](A)&&!T[t](A)&&(T[A]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(A))}}(),function(){if(r.vml){var t="hasOwnProperty",e=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=r.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},x=/([clmz]),?([^clmz]*)/gi,v=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(t){var i=/[ahqstv]/gi,n=r._pathToAbsolute;if(e(t).match(i)&&(n=r._path2curve),i=/[clmz]/g,n==r._pathToAbsolute&&!e(t).match(i)){var s=e(t).replace(x,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o,l,h=n(t);s=[];for(var u=0,c=h.length;c>u;u++){o=h[u],l=h[u][0].toLowerCase(),"z"==l&&(l="x");for(var f=1,v=o.length;v>f;f++)l+=a(o[f]*b)+(f!=v-1?",":d);s.push(l)}return s.join(p)},C=function(t,e,i){var n=r.matrix();return n.rotate(-t,.5,.5),{dx:n.x(e,i),dy:n.y(e,i)}},B=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",x=b/e,v=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(x)+p+l(v),f.rotation=a*(0>e*r?-1:1),a){var y=C(a,i,n);i=y.dx,n=y.dy}if(0>e&&(g+="x"),0>r&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-x+p+n*-v,u||s.fillsize){var m=c.getElementsByTagName(h);m=m&&m[0],c.removeChild(m),u&&(y=C(a,o.x(u[0],u[1]),o.y(u[0],u[1])),m.position=y.dx*d+p+y.dy*d),s.fillsize&&(m.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(m)}f.visibility="visible"}};r.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var S=function(t,r,i){for(var n=e(r).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},T=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,x=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),v=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),y=n;for(var m in l)l[t](m)&&(f[m]=l[m]);if(x&&(f.path=r._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||x)&&(c.path=k(~e(f.path).toLowerCase().indexOf("r")?r._pathToAbsolute(f.path):f.path),"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],B(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),v){var C=+f.cx,T=+f.cy,N=+f.rx||+f.r||0,E=+f.ry||+f.r||0;c.path=r.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((C-N)*b),a((T-E)*b),a((C+N)*b),a((T+E)*b),a(C*b)),n._.dirty=1}if("clip-rect"in l){var M=e(l["clip-rect"]).split(u);if(4==M.length){M[2]=+M[2]+ +M[0],M[3]=+M[3]+ +M[1];var z=c.clipRect||r._g.doc.createElement("div"),F=z.style;F.clip=r.format("rect({1}px {2}px {3}px {0}px)",M),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(z,c),z.appendChild(c),c.clipRect=z)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var P=n.textpath.style;l.font&&(P.font=l.font),l["font-family"]&&(P.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(P.fontSize=l["font-size"]),l["font-weight"]&&(P.fontWeight=l["font-weight"]),l["font-style"]&&(P.fontStyle=l["font-style"])}if("arrow-start"in l&&S(y,l["arrow-start"]),"arrow-end"in l&&S(y,l["arrow-end"],1),null!=l.opacity||null!=l["stroke-width"]||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var R=c.getElementsByTagName(h),I=!1;if(R=R&&R[0],!R&&(I=R=L(h)),"image"==n.type&&l.src&&(R.src=l.src),l.fill&&(R.on=!0),(null==R.on||"none"==l.fill||null===l.fill)&&(R.on=!1),R.on&&l.fill){var j=e(l.fill).match(r._ISURL);if(j){R.parentNode==c&&c.removeChild(R),R.rotate=!0,R.src=j[1],R.type="tile";var q=n.getBBox(1);R.position=q.x+p+q.y,n._.fillpos=[q.x,q.y],r._preload(j[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else R.color=r.getRGB(l.fill).hex,R.src=d,R.type="solid",r.getRGB(l.fill).error&&(y.type in{circle:1,ellipse:1}||"r"!=e(l.fill).charAt())&&A(y,l.fill,R)&&(f.fill="none",f.gradient=l.fill,R.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var D=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+r.getRGB(l.fill).o+1||2)-1);D=o(s(D,0),1),R.opacity=D,R.src&&(R.color="none")}c.appendChild(R);var O=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],V=!1;!O&&(V=O=L("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var Y=r.getRGB(l.stroke);O.on&&l.stroke&&(O.color=Y.hex),D=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+Y.o+1||2)-1);var G=.75*(i(l["stroke-width"])||1);if(D=o(s(D,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(O.weight=G),G&&1>G&&(D*=G)&&(O.weight=1),O.opacity=D,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),l["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=W[t](l["stroke-dasharray"])?W[l["stroke-dasharray"]]:d}V&&c.appendChild(O)}if("text"==y.type){y.paper.canvas.style.display=d;var X=y.paper.span,H=100,U=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),U=i(f["font-size"]||U&&U[0])||10,g.fontSize=U*H+"px",y.textpath.string&&(X.innerHTML=e(y.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();y.W=f.w=($.right-$.left)/H,y.H=f.h=($.bottom-$.top)/H,y.X=f.x,y.Y=f.y+y.H/2,("x"in l||"y"in l)&&(y.path.v=r.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Z=["x","y","text","font","font-family","font-weight","font-style","font-size"],Q=0,J=Z.length;J>Q;Q++)if(Z[Q]in l){y._.dirty=1;break}switch(f["text-anchor"]){case"start":y.textpath.style["v-text-align"]="left",y.bbx=y.W/2;break;case"end":y.textpath.style["v-text-align"]="right",y.bbx=-y.W/2;break;default:y.textpath.style["v-text-align"]="center",y.bbx=0}y.textpath.style["v-text-kern"]=!0}},A=function(t,a,s){t.attrs=t.attrs||{};var o=(t.attrs,Math.pow),l="linear",h=".5 .5";if(t.attrs.gradient=a,a=e(a).replace(r._radial_gradient,function(t,e,r){return l="radial",e&&r&&(e=i(e),r=i(r),o(e-.5,2)+o(r-.5,2)>.25&&(r=n.sqrt(.25-o(e-.5,2))*(2*(r>.5)-1)+.5),h=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==l){var u=a.shift();if(u=-i(u),isNaN(u))return null}var c=r._parseDots(a);if(!c)return null;if(t=t.shape||t.node,c.length){t.removeChild(s),s.on=!0,s.method="none",s.color=c[0].color,s.color2=c[c.length-1].color;for(var f=[],g=0,x=c.length;x>g;g++)c[g].offset&&f.push(c[g].offset+p+c[g].color);s.colors=f.length?f.join():"0% "+s.color,"radial"==l?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=h,s.angle=0):(s.type="gradient",s.angle=(270-u)%360),t.appendChild(s)}return 1},N=function(t,e){this[0]=this.node=t,t.raphael=!0,this.id=r._oid++,t.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=e,this.matrix=r.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!e.bottom&&(e.bottom=this),this.prev=e.top,e.top&&(e.top.next=this),e.top=this,this.next=null},E=r.el;N.prototype=E,E.constructor=N,E.transform=function(t){if(null==t)return this._.transform;var i,n=this.paper._viewBoxShift,a=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:d;n&&(i=t=e(t).replace(/\.{3}|\u2026/g,this._.transform||d)),r._extractTransform(this,a+t);var s,o=this.matrix.clone(),l=this.skew,h=this.node,u=~e(this.attrs.fill).indexOf("-"),c=!e(this.attrs.fill).indexOf("url(");if(o.translate(-.5,-.5),c||u||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",s=o.split(),u&&s.noRotation||!s.isSimple){h.style.filter=o.toFilter();var f=this.getBBox(),g=this.getBBox(1),x=f.x-g.x,v=f.y-g.y;h.coordorigin=x*-b+p+v*-b,B(this,1,1,x,v,0)}else h.style.filter=d,B(this,s.scalex,s.scaley,s.dx,s.dy,s.rotate);else h.style.filter=d,l.matrix=e(o),l.offset=o.offset();return i&&(this._.transform=i),this},E.rotate=function(t,r,n){if(this.removed)return this;if(null!=t){if(t=e(t).split(u),t.length-1&&(r=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(r=n),null==r||null==n){var a=this.getBBox(1);r=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,r,n]])),this}},E.translate=function(t,r){return this.removed?this:(t=e(t).split(u),t.length-1&&(r=i(t[1])),t=i(t[0])||0,r=+r||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=r),this.transform(this._.transform.concat([["t",t,r]])),this)},E.scale=function(t,r,n,a){if(this.removed)return this;if(t=e(t).split(u),t.length-1&&(r=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==r&&(r=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,r,n,a]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=d),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),r.eve.unbind("raphael.*.*."+this.id),r._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null;this.removed=!0}},E.attr=function(e,i){if(this.removed)return this;if(null==e){var n={};for(var a in this.attrs)this.attrs[t](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&r.is(e,"string")){if(e==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=e.split(u),o={},l=0,f=s.length;f>l;l++)e=s[l],o[e]=e in this.attrs?this.attrs[e]:r.is(this.paper.customAttributes[e],"function")?this.paper.customAttributes[e].def:r._availableAttrs[e];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&r.is(e,"array")){for(o={},l=0,f=e.length;f>l;l++)o[e[l]]=this.attr(e[l]);return o}var p;null!=i&&(p={},p[e]=i),null==i&&r.is(e,"object")&&(p=e);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[t](d)&&p[t](d)&&r.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var x in g)g[t](x)&&(p[x]=g[x])}p.text&&"text"==this.type&&(this.textpath.string=p.text),T(this,p)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&r._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),r._toback(this,this.paper)),this)},E.insertAfter=function(t){return this.removed?this:(t.constructor==r.st.constructor&&(t=t[t.length-1]),t.node.nextSibling?t.node.parentNode.insertBefore(this.node,t.node.nextSibling):t.node.parentNode.appendChild(this.node),r._insertafter(this,t,this.paper),this)},E.insertBefore=function(t){return this.removed?this:(t.constructor==r.st.constructor&&(t=t[0]),t.node.parentNode.insertBefore(this.node,t.node),r._insertbefore(this,t,this.paper),this)},E.blur=function(t){var e=this.node.runtimeStyle,i=e.filter;return i=i.replace(v,d),0!==+t?(this.attrs.blur=t,e.filter=i+p+f+".Blur(pixelradius="+(+t||1.5)+")",e.margin=r.format("-{0}px 0 0 -{0}px",a(+t||1.5))):(e.filter=i,e.margin=0,delete this.attrs.blur),this},r._engine.path=function(t,e){var r=L("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new N(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,T(i,n),e.canvas.appendChild(r);var a=L("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},r._engine.rect=function(t,e,i,n,a,s){var o=r._rectPath(e,i,n,a,s),l=t.path(o),h=l.attrs;return l.X=h.x=e,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},r._engine.ellipse=function(t,e,r,i,n){var a=t.path();return a.attrs,a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",T(a,{cx:e,cy:r,rx:i,ry:n}),a},r._engine.circle=function(t,e,r,i){var n=t.path();return n.attrs,n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",T(n,{cx:e,cy:r,r:i}),n},r._engine.image=function(t,e,i,n,a,s){var o=r._rectPath(i,n,a,s),l=t.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=e,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=e,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),B(l,1,1,0,0,0),l},r._engine.text=function(t,i,n,s){var o=L("shape"),l=L("path"),h=L("textpath");i=i||0,n=n||0,s=s||"",l.v=r.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=e(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new N(o,t),c={fill:"#000",stroke:"none",font:r._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=e(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,T(u,c),o.appendChild(h),o.appendChild(l),t.canvas.appendChild(o);var f=L("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},r._engine.setSize=function(t,e){var i=this.canvas.style;return this.width=t,this.height=e,t==+t&&(t+="px"),e==+e&&(e+="px"),i.width=t,i.height=e,i.clip="rect(0 "+t+" "+e+" 0)",this._viewBox&&r._engine.setViewBox.apply(this,this._viewBox),this},r._engine.setViewBox=function(t,e,i,n,a){r.eve("raphael.setViewBox",this,this._viewBox,[t,e,i,n,a]);var o,l,h=this.width,u=this.height,c=1/s(i/h,n/u);return a&&(o=u/n,l=h/i,h>i*o&&(t-=(h-i*o)/2/o),u>n*l&&(e-=(u-n*l)/2/l)),this._viewBox=[t,e,i,n,!!a],this._viewBoxShift={dx:-t,dy:-e,scale:c},this.forEach(function(t){t.transform("...")}),this};var L;r._engine.initWin=function(t){var e=t.document;e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),L=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){L=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},r._engine.initWin(r._g.win),r._engine.create=function(){var t=r._getContainer.apply(0,arguments),e=t.container,i=t.height,n=t.width,a=t.x,s=t.y;if(!e)throw Error("VML container not found.");var o=new r._Paper,l=o.canvas=r._g.doc.createElement("div"),h=l.style;return a=a||0,s=s||0,n=n||512,i=i||342,o.width=n,o.height=i,n==+n&&(n+="px"),i==+i&&(i+="px"),o.coordsize=1e3*b+p+1e3*b,o.coordorigin="0 0",o.span=r._g.doc.createElement("span"),o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(o.span),h.cssText=r.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i),1==e?(r._g.doc.body.appendChild(l),h.left=a+"px",h.top=s+"px",h.position="absolute"):e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l),o.renderfix=function(){},o},r.prototype.clear=function(){r.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=r._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},r.prototype.remove=function(){r.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null;return!0};var M=r.st;for(var z in E)E[t](z)&&!M[t](z)&&(M[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}}(),T.was?S.win.Raphael=r:Raphael=r,r});
/* @license
morris.js v0.5.0
Copyright 2014 Olly Smith All rights reserved.
Licensed under the BSD-2-Clause License.
*/
(function(){var a,b,c,d,e=[].slice,f=function(a,b){return function(){return a.apply(b,arguments)}},g={}.hasOwnProperty,h=function(a,b){function c(){this.constructor=a}for(var d in b)g.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},i=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=window.Morris={},a=jQuery,b.EventEmitter=function(){function a(){}return a.prototype.on=function(a,b){return null==this.handlers&&(this.handlers={}),null==this.handlers[a]&&(this.handlers[a]=[]),this.handlers[a].push(b),this},a.prototype.fire=function(){var a,b,c,d,f,g,h;if(c=arguments[0],a=2<=arguments.length?e.call(arguments,1):[],null!=this.handlers&&null!=this.handlers[c]){for(g=this.handlers[c],h=[],d=0,f=g.length;f>d;d++)b=g[d],h.push(b.apply(null,a));return h}},a}(),b.commas=function(a){var b,c,d,e;return null!=a?(d=0>a?"-":"",b=Math.abs(a),c=Math.floor(b).toFixed(0),d+=c.replace(/(?=(?:\d{3})+$)(?!^)/g,","),e=b.toString(),e.length>c.length&&(d+=e.slice(c.length)),d):"-"},b.pad2=function(a){return(10>a?"0":"")+a},b.Grid=function(c){function d(b){this.resizeHandler=f(this.resizeHandler,this);var c=this;if(this.el="string"==typeof b.element?a(document.getElementById(b.element)):a(b.element),null==this.el||0===this.el.length)throw new Error("Graph container element not found");"static"===this.el.css("position")&&this.el.css("position","relative"),this.options=a.extend({},this.gridDefaults,this.defaults||{},b),"string"==typeof this.options.units&&(this.options.postUnits=b.units),this.raphael=new Raphael(this.el[0]),this.elementWidth=null,this.elementHeight=null,this.dirty=!1,this.selectFrom=null,this.init&&this.init(),this.setData(this.options.data),this.el.bind("mousemove",function(a){var b,d,e,f,g;return d=c.el.offset(),g=a.pageX-d.left,c.selectFrom?(b=c.data[c.hitTest(Math.min(g,c.selectFrom))]._x,e=c.data[c.hitTest(Math.max(g,c.selectFrom))]._x,f=e-b,c.selectionRect.attr({x:b,width:f})):c.fire("hovermove",g,a.pageY-d.top)}),this.el.bind("mouseleave",function(){return c.selectFrom&&(c.selectionRect.hide(),c.selectFrom=null),c.fire("hoverout")}),this.el.bind("touchstart touchmove touchend",function(a){var b,d;return d=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0],b=c.el.offset(),c.fire("hovermove",d.pageX-b.left,d.pageY-b.top)}),this.el.bind("click",function(a){var b;return b=c.el.offset(),c.fire("gridclick",a.pageX-b.left,a.pageY-b.top)}),this.options.rangeSelect&&(this.selectionRect=this.raphael.rect(0,0,0,this.el.innerHeight()).attr({fill:this.options.rangeSelectColor,stroke:!1}).toBack().hide(),this.el.bind("mousedown",function(a){var b;return b=c.el.offset(),c.startRange(a.pageX-b.left)}),this.el.bind("mouseup",function(a){var b;return b=c.el.offset(),c.endRange(a.pageX-b.left),c.fire("hovermove",a.pageX-b.left,a.pageY-b.top)})),this.options.resize&&a(window).bind("resize",function(){return null!=c.timeoutId&&window.clearTimeout(c.timeoutId),c.timeoutId=window.setTimeout(c.resizeHandler,100)}),this.el.css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),this.postInit&&this.postInit()}return h(d,c),d.prototype.gridDefaults={dateFormat:null,axes:!0,grid:!0,gridLineColor:"#aaa",gridStrokeWidth:.5,gridTextColor:"#888",gridTextSize:12,gridTextFamily:"sans-serif",gridTextWeight:"normal",hideHover:!1,yLabelFormat:null,xLabelAngle:0,numLines:5,padding:25,parseTime:!0,postUnits:"",preUnits:"",ymax:"auto",ymin:"auto 0",goals:[],goalStrokeWidth:1,goalLineColors:["#666633","#999966","#cc6666","#663333"],events:[],eventStrokeWidth:1,eventLineColors:["#005a04","#ccffbb","#3a5f0b","#005502"],rangeSelect:null,rangeSelectColor:"#eef",resize:!1},d.prototype.setData=function(a,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;return null==c&&(c=!0),this.options.data=a,null==a||0===a.length?(this.data=[],this.raphael.clear(),null!=this.hover&&this.hover.hide(),void 0):(o=this.cumulative?0:null,p=this.cumulative?0:null,this.options.goals.length>0&&(h=Math.min.apply(Math,this.options.goals),g=Math.max.apply(Math,this.options.goals),p=null!=p?Math.min(p,h):h,o=null!=o?Math.max(o,g):g),this.data=function(){var c,d,g;for(g=[],f=c=0,d=a.length;d>c;f=++c)j=a[f],i={src:j},i.label=j[this.options.xkey],this.options.parseTime?(i.x=b.parseDate(i.label),this.options.dateFormat?i.label=this.options.dateFormat(i.x):"number"==typeof i.label&&(i.label=new Date(i.label).toString())):(i.x=f,this.options.xLabelFormat&&(i.label=this.options.xLabelFormat(i))),l=0,i.y=function(){var a,b,c,d;for(c=this.options.ykeys,d=[],e=a=0,b=c.length;b>a;e=++a)n=c[e],q=j[n],"string"==typeof q&&(q=parseFloat(q)),null!=q&&"number"!=typeof q&&(q=null),null!=q&&(this.cumulative?l+=q:null!=o?(o=Math.max(q,o),p=Math.min(q,p)):o=p=q),this.cumulative&&null!=l&&(o=Math.max(l,o),p=Math.min(l,p)),d.push(q);return d}.call(this),g.push(i);return g}.call(this),this.options.parseTime&&(this.data=this.data.sort(function(a,b){return(a.x>b.x)-(b.x>a.x)})),this.xmin=this.data[0].x,this.xmax=this.data[this.data.length-1].x,this.events=[],this.options.events.length>0&&(this.events=this.options.parseTime?function(){var a,c,e,f;for(e=this.options.events,f=[],a=0,c=e.length;c>a;a++)d=e[a],f.push(b.parseDate(d));return f}.call(this):this.options.events,this.xmax=Math.max(this.xmax,Math.max.apply(Math,this.events)),this.xmin=Math.min(this.xmin,Math.min.apply(Math,this.events))),this.xmin===this.xmax&&(this.xmin-=1,this.xmax+=1),this.ymin=this.yboundary("min",p),this.ymax=this.yboundary("max",o),this.ymin===this.ymax&&(p&&(this.ymin-=1),this.ymax+=1),((r=this.options.axes)===!0||"both"===r||"y"===r||this.options.grid===!0)&&(this.options.ymax===this.gridDefaults.ymax&&this.options.ymin===this.gridDefaults.ymin?(this.grid=this.autoGridLines(this.ymin,this.ymax,this.options.numLines),this.ymin=Math.min(this.ymin,this.grid[0]),this.ymax=Math.max(this.ymax,this.grid[this.grid.length-1])):(k=(this.ymax-this.ymin)/(this.options.numLines-1),this.grid=function(){var a,b,c,d;for(d=[],m=a=b=this.ymin,c=this.ymax;k>0?c>=a:a>=c;m=a+=k)d.push(m);return d}.call(this))),this.dirty=!0,c?this.redraw():void 0)},d.prototype.yboundary=function(a,b){var c,d;return c=this.options["y"+a],"string"==typeof c?"auto"===c.slice(0,4)?c.length>5?(d=parseInt(c.slice(5),10),null==b?d:Math[a](b,d)):null!=b?b:0:parseInt(c,10):c},d.prototype.autoGridLines=function(a,b,c){var d,e,f,g,h,i,j,k,l;return h=b-a,l=Math.floor(Math.log(h)/Math.log(10)),j=Math.pow(10,l),e=Math.floor(a/j)*j,d=Math.ceil(b/j)*j,i=(d-e)/(c-1),1===j&&i>1&&Math.ceil(i)!==i&&(i=Math.ceil(i),d=e+i*(c-1)),0>e&&d>0&&(e=Math.floor(a/i)*i,d=Math.ceil(b/i)*i),1>i?(g=Math.floor(Math.log(i)/Math.log(10)),f=function(){var a,b;for(b=[],k=a=e;i>0?d>=a:a>=d;k=a+=i)b.push(parseFloat(k.toFixed(1-g)));return b}()):f=function(){var a,b;for(b=[],k=a=e;i>0?d>=a:a>=d;k=a+=i)b.push(k);return b}(),f},d.prototype._calc=function(){var a,b,c,d,e,f,g,h;return e=this.el.width(),c=this.el.height(),(this.elementWidth!==e||this.elementHeight!==c||this.dirty)&&(this.elementWidth=e,this.elementHeight=c,this.dirty=!1,this.left=this.options.padding,this.right=this.elementWidth-this.options.padding,this.top=this.options.padding,this.bottom=this.elementHeight-this.options.padding,((g=this.options.axes)===!0||"both"===g||"y"===g)&&(f=function(){var a,c,d,e;for(d=this.grid,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(this.measureText(this.yAxisFormat(b)).width);return e}.call(this),this.left+=Math.max.apply(Math,f)),((h=this.options.axes)===!0||"both"===h||"x"===h)&&(a=function(){var a,b,c;for(c=[],d=a=0,b=this.data.length;b>=0?b>a:a>b;d=b>=0?++a:--a)c.push(this.measureText(this.data[d].text,-this.options.xLabelAngle).height);return c}.call(this),this.bottom-=Math.max.apply(Math,a)),this.width=Math.max(1,this.right-this.left),this.height=Math.max(1,this.bottom-this.top),this.dx=this.width/(this.xmax-this.xmin),this.dy=this.height/(this.ymax-this.ymin),this.calc)?this.calc():void 0},d.prototype.transY=function(a){return this.bottom-(a-this.ymin)*this.dy},d.prototype.transX=function(a){return 1===this.data.length?(this.left+this.right)/2:this.left+(a-this.xmin)*this.dx},d.prototype.redraw=function(){return this.raphael.clear(),this._calc(),this.drawGrid(),this.drawGoals(),this.drawEvents(),this.draw?this.draw():void 0},d.prototype.measureText=function(a,b){var c,d;return null==b&&(b=0),d=this.raphael.text(100,100,a).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).rotate(b),c=d.getBBox(),d.remove(),c},d.prototype.yAxisFormat=function(a){return this.yLabelFormat(a)},d.prototype.yLabelFormat=function(a){return"function"==typeof this.options.yLabelFormat?this.options.yLabelFormat(a):""+this.options.preUnits+b.commas(a)+this.options.postUnits},d.prototype.drawGrid=function(){var a,b,c,d,e,f,g,h;if(this.options.grid!==!1||(e=this.options.axes)===!0||"both"===e||"y"===e){for(f=this.grid,h=[],c=0,d=f.length;d>c;c++)a=f[c],b=this.transY(a),((g=this.options.axes)===!0||"both"===g||"y"===g)&&this.drawYAxisLabel(this.left-this.options.padding/2,b,this.yAxisFormat(a)),this.options.grid?h.push(this.drawGridLine("M"+this.left+","+b+"H"+(this.left+this.width))):h.push(void 0);return h}},d.prototype.drawGoals=function(){var a,b,c,d,e,f,g;for(f=this.options.goals,g=[],c=d=0,e=f.length;e>d;c=++d)b=f[c],a=this.options.goalLineColors[c%this.options.goalLineColors.length],g.push(this.drawGoal(b,a));return g},d.prototype.drawEvents=function(){var a,b,c,d,e,f,g;for(f=this.events,g=[],c=d=0,e=f.length;e>d;c=++d)b=f[c],a=this.options.eventLineColors[c%this.options.eventLineColors.length],g.push(this.drawEvent(b,a));return g},d.prototype.drawGoal=function(a,b){return this.raphael.path("M"+this.left+","+this.transY(a)+"H"+this.right).attr("stroke",b).attr("stroke-width",this.options.goalStrokeWidth)},d.prototype.drawEvent=function(a,b){return this.raphael.path("M"+this.transX(a)+","+this.bottom+"V"+this.top).attr("stroke",b).attr("stroke-width",this.options.eventStrokeWidth)},d.prototype.drawYAxisLabel=function(a,b,c){return this.raphael.text(a,b,c).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor).attr("text-anchor","end")},d.prototype.drawGridLine=function(a){return this.raphael.path(a).attr("stroke",this.options.gridLineColor).attr("stroke-width",this.options.gridStrokeWidth)},d.prototype.startRange=function(a){return this.hover.hide(),this.selectFrom=a,this.selectionRect.attr({x:a,width:0}).show()},d.prototype.endRange=function(a){var b,c;return this.selectFrom?(c=Math.min(this.selectFrom,a),b=Math.max(this.selectFrom,a),this.options.rangeSelect.call(this.el,{start:this.data[this.hitTest(c)].x,end:this.data[this.hitTest(b)].x}),this.selectFrom=null):void 0},d.prototype.resizeHandler=function(){return this.timeoutId=null,this.raphael.setSize(this.el.width(),this.el.height()),this.redraw()},d}(b.EventEmitter),b.parseDate=function(a){var b,c,d,e,f,g,h,i,j,k,l;return"number"==typeof a?a:(c=a.match(/^(\d+) Q(\d)$/),e=a.match(/^(\d+)-(\d+)$/),f=a.match(/^(\d+)-(\d+)-(\d+)$/),h=a.match(/^(\d+) W(\d+)$/),i=a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/),j=a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/),c?new Date(parseInt(c[1],10),3*parseInt(c[2],10)-1,1).getTime():e?new Date(parseInt(e[1],10),parseInt(e[2],10)-1,1).getTime():f?new Date(parseInt(f[1],10),parseInt(f[2],10)-1,parseInt(f[3],10)).getTime():h?(k=new Date(parseInt(h[1],10),0,1),4!==k.getDay()&&k.setMonth(0,1+(4-k.getDay()+7)%7),k.getTime()+6048e5*parseInt(h[2],10)):i?i[6]?(g=0,"Z"!==i[6]&&(g=60*parseInt(i[8],10)+parseInt(i[9],10),"+"===i[7]&&(g=0-g)),Date.UTC(parseInt(i[1],10),parseInt(i[2],10)-1,parseInt(i[3],10),parseInt(i[4],10),parseInt(i[5],10)+g)):new Date(parseInt(i[1],10),parseInt(i[2],10)-1,parseInt(i[3],10),parseInt(i[4],10),parseInt(i[5],10)).getTime():j?(l=parseFloat(j[6]),b=Math.floor(l),d=Math.round(1e3*(l-b)),j[8]?(g=0,"Z"!==j[8]&&(g=60*parseInt(j[10],10)+parseInt(j[11],10),"+"===j[9]&&(g=0-g)),Date.UTC(parseInt(j[1],10),parseInt(j[2],10)-1,parseInt(j[3],10),parseInt(j[4],10),parseInt(j[5],10)+g,b,d)):new Date(parseInt(j[1],10),parseInt(j[2],10)-1,parseInt(j[3],10),parseInt(j[4],10),parseInt(j[5],10),b,d).getTime()):new Date(parseInt(a,10),0,1).getTime())},b.Hover=function(){function c(c){null==c&&(c={}),this.options=a.extend({},b.Hover.defaults,c),this.el=a("<div class='"+this.options["class"]+"'></div>"),this.el.hide(),this.options.parent.append(this.el)}return c.defaults={"class":"morris-hover morris-default-style"},c.prototype.update=function(a,b,c){return a?(this.html(a),this.show(),this.moveTo(b,c)):this.hide()},c.prototype.html=function(a){return this.el.html(a)},c.prototype.moveTo=function(a,b){var c,d,e,f,g,h;return g=this.options.parent.innerWidth(),f=this.options.parent.innerHeight(),d=this.el.outerWidth(),c=this.el.outerHeight(),e=Math.min(Math.max(0,a-d/2),g-d),null!=b?(h=b-c-10,0>h&&(h=b+10,h+c>f&&(h=f/2-c/2))):h=f/2-c/2,this.el.css({left:e+"px",top:parseInt(h)+"px"})},c.prototype.show=function(){return this.el.show()},c.prototype.hide=function(){return this.el.hide()},c}(),b.Line=function(a){function c(a){return this.hilight=f(this.hilight,this),this.onHoverOut=f(this.onHoverOut,this),this.onHoverMove=f(this.onHoverMove,this),this.onGridClick=f(this.onGridClick,this),this instanceof b.Line?(c.__super__.constructor.call(this,a),void 0):new b.Line(a)}return h(c,a),c.prototype.init=function(){return"always"!==this.options.hideHover?(this.hover=new b.Hover({parent:this.el}),this.on("hovermove",this.onHoverMove),this.on("hoverout",this.onHoverOut),this.on("gridclick",this.onGridClick)):void 0},c.prototype.defaults={lineWidth:3,pointSize:4,lineColors:["#0b62a4","#7A92A3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],pointStrokeWidths:[1],pointStrokeColors:["#ffffff"],pointFillColors:[],smooth:!0,xLabels:"auto",xLabelFormat:null,xLabelMargin:24,hideHover:!1},c.prototype.calc=function(){return this.calcPoints(),this.generatePaths()},c.prototype.calcPoints=function(){var a,b,c,d,e,f;for(e=this.data,f=[],c=0,d=e.length;d>c;c++)a=e[c],a._x=this.transX(a.x),a._y=function(){var c,d,e,f;for(e=a.y,f=[],c=0,d=e.length;d>c;c++)b=e[c],null!=b?f.push(this.transY(b)):f.push(b);return f}.call(this),f.push(a._ymax=Math.min.apply(Math,[this.bottom].concat(function(){var c,d,e,f;for(e=a._y,f=[],c=0,d=e.length;d>c;c++)b=e[c],null!=b&&f.push(b);return f}())));return f},c.prototype.hitTest=function(a){var b,c,d,e,f;if(0===this.data.length)return null;for(f=this.data.slice(1),b=d=0,e=f.length;e>d&&(c=f[b],!(a<(c._x+this.data[b]._x)/2));b=++d);return b},c.prototype.onGridClick=function(a,b){var c;return c=this.hitTest(a),this.fire("click",c,this.data[c].src,a,b)},c.prototype.onHoverMove=function(a){var b;return b=this.hitTest(a),this.displayHoverForRow(b)},c.prototype.onHoverOut=function(){return this.options.hideHover!==!1?this.displayHoverForRow(null):void 0},c.prototype.displayHoverForRow=function(a){var b;return null!=a?((b=this.hover).update.apply(b,this.hoverContentForRow(a)),this.hilight(a)):(this.hover.hide(),this.hilight())},c.prototype.hoverContentForRow=function(a){var b,c,d,e,f,g,h;for(d=this.data[a],b="<div class='morris-hover-row-label'>"+d.label+"</div>",h=d.y,c=f=0,g=h.length;g>f;c=++f)e=h[c],b+="<div class='morris-hover-point' style='color: "+this.colorFor(d,c,"label")+"'>\n  "+this.options.labels[c]+":\n  "+this.yLabelFormat(e)+"\n</div>";return"function"==typeof this.options.hoverCallback&&(b=this.options.hoverCallback(a,this.options,b,d.src)),[b,d._x,d._ymax]},c.prototype.generatePaths=function(){var a,c,d,e;return this.paths=function(){var f,g,h,j;for(j=[],c=f=0,g=this.options.ykeys.length;g>=0?g>f:f>g;c=g>=0?++f:--f)e="boolean"==typeof this.options.smooth?this.options.smooth:(h=this.options.ykeys[c],i.call(this.options.smooth,h)>=0),a=function(){var a,b,e,f;for(e=this.data,f=[],a=0,b=e.length;b>a;a++)d=e[a],void 0!==d._y[c]&&f.push({x:d._x,y:d._y[c]});return f}.call(this),a.length>1?j.push(b.Line.createPath(a,e,this.bottom)):j.push(null);return j}.call(this)},c.prototype.draw=function(){var a;return((a=this.options.axes)===!0||"both"===a||"x"===a)&&this.drawXAxis(),this.drawSeries(),this.options.hideHover===!1?this.displayHoverForRow(this.data.length-1):void 0},c.prototype.drawXAxis=function(){var a,c,d,e,f,g,h,i,j,k,l=this;for(h=this.bottom+this.options.padding/2,f=null,e=null,a=function(a,b){var c,d,g,i,j;return c=l.drawXAxisLabel(l.transX(b),h,a),j=c.getBBox(),c.transform("r"+-l.options.xLabelAngle),d=c.getBBox(),c.transform("t0,"+d.height/2+"..."),0!==l.options.xLabelAngle&&(i=-.5*j.width*Math.cos(l.options.xLabelAngle*Math.PI/180),c.transform("t"+i+",0...")),d=c.getBBox(),(null==f||f>=d.x+d.width||null!=e&&e>=d.x)&&d.x>=0&&d.x+d.width<l.el.width()?(0!==l.options.xLabelAngle&&(g=1.25*l.options.gridTextSize/Math.sin(l.options.xLabelAngle*Math.PI/180),e=d.x-g),f=d.x-l.options.xLabelMargin):c.remove()},d=this.options.parseTime?1===this.data.length&&"auto"===this.options.xLabels?[[this.data[0].label,this.data[0].x]]:b.labelSeries(this.xmin,this.xmax,this.width,this.options.xLabels,this.options.xLabelFormat):function(){var a,b,c,d;for(c=this.data,d=[],a=0,b=c.length;b>a;a++)g=c[a],d.push([g.label,g.x]);return d}.call(this),d.reverse(),k=[],i=0,j=d.length;j>i;i++)c=d[i],k.push(a(c[0],c[1]));return k},c.prototype.drawSeries=function(){var a,b,c,d,e,f;for(this.seriesPoints=[],a=b=d=this.options.ykeys.length-1;0>=d?0>=b:b>=0;a=0>=d?++b:--b)this._drawLineFor(a);for(f=[],a=c=e=this.options.ykeys.length-1;0>=e?0>=c:c>=0;a=0>=e?++c:--c)f.push(this._drawPointFor(a));return f},c.prototype._drawPointFor=function(a){var b,c,d,e,f,g;for(this.seriesPoints[a]=[],f=this.data,g=[],d=0,e=f.length;e>d;d++)c=f[d],b=null,null!=c._y[a]&&(b=this.drawLinePoint(c._x,c._y[a],this.colorFor(c,a,"point"),a)),g.push(this.seriesPoints[a].push(b));return g},c.prototype._drawLineFor=function(a){var b;return b=this.paths[a],null!==b?this.drawLinePath(b,this.colorFor(null,a,"line"),a):void 0},c.createPath=function(a,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;for(k="",c&&(g=b.Line.gradients(a)),l={y:null},h=q=0,r=a.length;r>q;h=++q)e=a[h],null!=e.y&&(null!=l.y?c?(f=g[h],j=g[h-1],i=(e.x-l.x)/4,m=l.x+i,o=Math.min(d,l.y+i*j),n=e.x-i,p=Math.min(d,e.y-i*f),k+="C"+m+","+o+","+n+","+p+","+e.x+","+e.y):k+="L"+e.x+","+e.y:c&&null==g[h]||(k+="M"+e.x+","+e.y)),l=e;return k},c.gradients=function(a){var b,c,d,e,f,g,h,i;for(c=function(a,b){return(a.y-b.y)/(a.x-b.x)},i=[],d=g=0,h=a.length;h>g;d=++g)b=a[d],null!=b.y?(e=a[d+1]||{y:null},f=a[d-1]||{y:null},null!=f.y&&null!=e.y?i.push(c(f,e)):null!=f.y?i.push(c(f,b)):null!=e.y?i.push(c(b,e)):i.push(null)):i.push(null);return i},c.prototype.hilight=function(a){var b,c,d,e,f;if(null!==this.prevHilight&&this.prevHilight!==a)for(b=c=0,e=this.seriesPoints.length-1;e>=0?e>=c:c>=e;b=e>=0?++c:--c)this.seriesPoints[b][this.prevHilight]&&this.seriesPoints[b][this.prevHilight].animate(this.pointShrinkSeries(b));if(null!==a&&this.prevHilight!==a)for(b=d=0,f=this.seriesPoints.length-1;f>=0?f>=d:d>=f;b=f>=0?++d:--d)this.seriesPoints[b][a]&&this.seriesPoints[b][a].animate(this.pointGrowSeries(b));return this.prevHilight=a},c.prototype.colorFor=function(a,b,c){return"function"==typeof this.options.lineColors?this.options.lineColors.call(this,a,b,c):"point"===c?this.options.pointFillColors[b%this.options.pointFillColors.length]||this.options.lineColors[b%this.options.lineColors.length]:this.options.lineColors[b%this.options.lineColors.length]},c.prototype.drawXAxisLabel=function(a,b,c){return this.raphael.text(a,b,c).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor)},c.prototype.drawLinePath=function(a,b,c){return this.raphael.path(a).attr("stroke",b).attr("stroke-width",this.lineWidthForSeries(c))},c.prototype.drawLinePoint=function(a,b,c,d){return this.raphael.circle(a,b,this.pointSizeForSeries(d)).attr("fill",c).attr("stroke-width",this.pointStrokeWidthForSeries(d)).attr("stroke",this.pointStrokeColorForSeries(d))},c.prototype.pointStrokeWidthForSeries=function(a){return this.options.pointStrokeWidths[a%this.options.pointStrokeWidths.length]},c.prototype.pointStrokeColorForSeries=function(a){return this.options.pointStrokeColors[a%this.options.pointStrokeColors.length]},c.prototype.lineWidthForSeries=function(a){return this.options.lineWidth instanceof Array?this.options.lineWidth[a%this.options.lineWidth.length]:this.options.lineWidth},c.prototype.pointSizeForSeries=function(a){return this.options.pointSize instanceof Array?this.options.pointSize[a%this.options.pointSize.length]:this.options.pointSize},c.prototype.pointGrowSeries=function(a){return Raphael.animation({r:this.pointSizeForSeries(a)+3},25,"linear")},c.prototype.pointShrinkSeries=function(a){return Raphael.animation({r:this.pointSizeForSeries(a)},25,"linear")},c}(b.Grid),b.labelSeries=function(c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;if(j=200*(d-c)/e,i=new Date(c),n=b.LABEL_SPECS[f],void 0===n)for(r=b.AUTO_LABEL_ORDER,p=0,q=r.length;q>p;p++)if(k=r[p],m=b.LABEL_SPECS[k],j>=m.span){n=m;break}for(void 0===n&&(n=b.LABEL_SPECS.second),g&&(n=a.extend({},n,{fmt:g})),h=n.start(i),l=[];(o=h.getTime())<=d;)o>=c&&l.push([n.fmt(h),o]),n.incr(h);return l},c=function(a){return{span:60*a*1e3,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours())},fmt:function(a){return""+b.pad2(a.getHours())+":"+b.pad2(a.getMinutes())},incr:function(b){return b.setUTCMinutes(b.getUTCMinutes()+a)}}},d=function(a){return{span:1e3*a,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes())},fmt:function(a){return""+b.pad2(a.getHours())+":"+b.pad2(a.getMinutes())+":"+b.pad2(a.getSeconds())},incr:function(b){return b.setUTCSeconds(b.getUTCSeconds()+a)}}},b.LABEL_SPECS={decade:{span:1728e8,start:function(a){return new Date(a.getFullYear()-a.getFullYear()%10,0,1)},fmt:function(a){return""+a.getFullYear()},incr:function(a){return a.setFullYear(a.getFullYear()+10)}},year:{span:1728e7,start:function(a){return new Date(a.getFullYear(),0,1)},fmt:function(a){return""+a.getFullYear()},incr:function(a){return a.setFullYear(a.getFullYear()+1)}},month:{span:24192e5,start:function(a){return new Date(a.getFullYear(),a.getMonth(),1)},fmt:function(a){return""+a.getFullYear()+"-"+b.pad2(a.getMonth()+1)},incr:function(a){return a.setMonth(a.getMonth()+1)}},week:{span:6048e5,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate())},fmt:function(a){return""+a.getFullYear()+"-"+b.pad2(a.getMonth()+1)+"-"+b.pad2(a.getDate())},incr:function(a){return a.setDate(a.getDate()+7)}},day:{span:864e5,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate())},fmt:function(a){return""+a.getFullYear()+"-"+b.pad2(a.getMonth()+1)+"-"+b.pad2(a.getDate())},incr:function(a){return a.setDate(a.getDate()+1)}},hour:c(60),"30min":c(30),"15min":c(15),"10min":c(10),"5min":c(5),minute:c(1),"30sec":d(30),"15sec":d(15),"10sec":d(10),"5sec":d(5),second:d(1)},b.AUTO_LABEL_ORDER=["decade","year","month","week","day","hour","30min","15min","10min","5min","minute","30sec","15sec","10sec","5sec","second"],b.Area=function(c){function d(c){var f;return this instanceof b.Area?(f=a.extend({},e,c),this.cumulative=!f.behaveLikeLine,"auto"===f.fillOpacity&&(f.fillOpacity=f.behaveLikeLine?.8:1),d.__super__.constructor.call(this,f),void 0):new b.Area(c)}var e;return h(d,c),e={fillOpacity:"auto",behaveLikeLine:!1},d.prototype.calcPoints=function(){var a,b,c,d,e,f,g;for(f=this.data,g=[],d=0,e=f.length;e>d;d++)a=f[d],a._x=this.transX(a.x),b=0,a._y=function(){var d,e,f,g;for(f=a.y,g=[],d=0,e=f.length;e>d;d++)c=f[d],this.options.behaveLikeLine?g.push(this.transY(c)):(b+=c||0,g.push(this.transY(b)));return g}.call(this),g.push(a._ymax=Math.max.apply(Math,a._y));return g},d.prototype.drawSeries=function(){var a,b,c,d,e,f,g,h;for(this.seriesPoints=[],b=this.options.behaveLikeLine?function(){f=[];for(var a=0,b=this.options.ykeys.length-1;b>=0?b>=a:a>=b;b>=0?a++:a--)f.push(a);return f}.apply(this):function(){g=[];for(var a=e=this.options.ykeys.length-1;0>=e?0>=a:a>=0;0>=e?a++:a--)g.push(a);return g}.apply(this),h=[],c=0,d=b.length;d>c;c++)a=b[c],this._drawFillFor(a),this._drawLineFor(a),h.push(this._drawPointFor(a));return h},d.prototype._drawFillFor=function(a){var b;return b=this.paths[a],null!==b?(b+="L"+this.transX(this.xmax)+","+this.bottom+"L"+this.transX(this.xmin)+","+this.bottom+"Z",this.drawFilledPath(b,this.fillForSeries(a))):void 0},d.prototype.fillForSeries=function(a){var b;return b=Raphael.rgb2hsl(this.colorFor(this.data[a],a,"line")),Raphael.hsl(b.h,this.options.behaveLikeLine?.9*b.s:.75*b.s,Math.min(.98,this.options.behaveLikeLine?1.2*b.l:1.25*b.l))},d.prototype.drawFilledPath=function(a,b){return this.raphael.path(a).attr("fill",b).attr("fill-opacity",this.options.fillOpacity).attr("stroke","none")},d}(b.Line),b.Bar=function(c){function d(c){return this.onHoverOut=f(this.onHoverOut,this),this.onHoverMove=f(this.onHoverMove,this),this.onGridClick=f(this.onGridClick,this),this instanceof b.Bar?(d.__super__.constructor.call(this,a.extend({},c,{parseTime:!1})),void 0):new b.Bar(c)}return h(d,c),d.prototype.init=function(){return this.cumulative=this.options.stacked,"always"!==this.options.hideHover?(this.hover=new b.Hover({parent:this.el}),this.on("hovermove",this.onHoverMove),this.on("hoverout",this.onHoverOut),this.on("gridclick",this.onGridClick)):void 0},d.prototype.defaults={barSizeRatio:.75,barGap:3,barColors:["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],barOpacity:1,barRadius:[0,0,0,0],xLabelMargin:50},d.prototype.calc=function(){var a;return this.calcBars(),this.options.hideHover===!1?(a=this.hover).update.apply(a,this.hoverContentForRow(this.data.length-1)):void 0},d.prototype.calcBars=function(){var a,b,c,d,e,f,g;for(f=this.data,g=[],a=d=0,e=f.length;e>d;a=++d)b=f[a],b._x=this.left+this.width*(a+.5)/this.data.length,g.push(b._y=function(){var a,d,e,f;for(e=b.y,f=[],a=0,d=e.length;d>a;a++)c=e[a],null!=c?f.push(this.transY(c)):f.push(null);return f}.call(this));return g},d.prototype.draw=function(){var a;return((a=this.options.axes)===!0||"both"===a||"x"===a)&&this.drawXAxis(),this.drawSeries()},d.prototype.drawXAxis=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(j=this.bottom+(this.options.xAxisLabelTopPadding||this.options.padding/2),g=null,f=null,m=[],a=k=0,l=this.data.length;l>=0?l>k:k>l;a=l>=0?++k:--k)h=this.data[this.data.length-1-a],b=this.drawXAxisLabel(h._x,j,h.label),i=b.getBBox(),b.transform("r"+-this.options.xLabelAngle),c=b.getBBox(),b.transform("t0,"+c.height/2+"..."),0!==this.options.xLabelAngle&&(e=-.5*i.width*Math.cos(this.options.xLabelAngle*Math.PI/180),b.transform("t"+e+",0...")),(null==g||g>=c.x+c.width||null!=f&&f>=c.x)&&c.x>=0&&c.x+c.width<this.el.width()?(0!==this.options.xLabelAngle&&(d=1.25*this.options.gridTextSize/Math.sin(this.options.xLabelAngle*Math.PI/180),f=c.x-d),m.push(g=c.x-this.options.xLabelMargin)):m.push(b.remove());return m},d.prototype.drawSeries=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;return c=this.width/this.options.data.length,h=this.options.stacked?1:this.options.ykeys.length,a=(c*this.options.barSizeRatio-this.options.barGap*(h-1))/h,this.options.barSize&&(a=Math.min(a,this.options.barSize)),l=c-a*h-this.options.barGap*(h-1),g=l/2,o=this.ymin<=0&&this.ymax>=0?this.transY(0):null,this.bars=function(){var h,l,p,q;for(p=this.data,q=[],d=h=0,l=p.length;l>h;d=++h)i=p[d],e=0,q.push(function(){var h,l,p,q;for(p=i._y,q=[],j=h=0,l=p.length;l>h;j=++h)n=p[j],null!==n?(o?(m=Math.min(n,o),b=Math.max(n,o)):(m=n,b=this.bottom),f=this.left+d*c+g,this.options.stacked||(f+=j*(a+this.options.barGap)),k=b-m,this.options.verticalGridCondition&&this.options.verticalGridCondition(i.x)&&this.drawBar(this.left+d*c,this.top,c,Math.abs(this.top-this.bottom),this.options.verticalGridColor,this.options.verticalGridOpacity,this.options.barRadius),this.options.stacked&&(m-=e),this.drawBar(f,m,a,k,this.colorFor(i,j,"bar"),this.options.barOpacity,this.options.barRadius),q.push(e+=k)):q.push(null);return q}.call(this));return q}.call(this)},d.prototype.colorFor=function(a,b,c){var d,e;return"function"==typeof this.options.barColors?(d={x:a.x,y:a.y[b],label:a.label},e={index:b,key:this.options.ykeys[b],label:this.options.labels[b]},this.options.barColors.call(this,d,e,c)):this.options.barColors[b%this.options.barColors.length]},d.prototype.hitTest=function(a){return 0===this.data.length?null:(a=Math.max(Math.min(a,this.right),this.left),Math.min(this.data.length-1,Math.floor((a-this.left)/(this.width/this.data.length))))},d.prototype.onGridClick=function(a,b){var c;return c=this.hitTest(a),this.fire("click",c,this.data[c].src,a,b)},d.prototype.onHoverMove=function(a){var b,c;return b=this.hitTest(a),(c=this.hover).update.apply(c,this.hoverContentForRow(b))},d.prototype.onHoverOut=function(){return this.options.hideHover!==!1?this.hover.hide():void 0},d.prototype.hoverContentForRow=function(a){var b,c,d,e,f,g,h,i;for(d=this.data[a],b="<div class='morris-hover-row-label'>"+d.label+"</div>",i=d.y,c=g=0,h=i.length;h>g;c=++g)f=i[c],b+="<div class='morris-hover-point' style='color: "+this.colorFor(d,c,"label")+"'>\n  "+this.options.labels[c]+":\n  "+this.yLabelFormat(f)+"\n</div>";return"function"==typeof this.options.hoverCallback&&(b=this.options.hoverCallback(a,this.options,b,d.src)),e=this.left+(a+.5)*this.width/this.data.length,[b,e]},d.prototype.drawXAxisLabel=function(a,b,c){var d;return d=this.raphael.text(a,b,c).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor)},d.prototype.drawBar=function(a,b,c,d,e,f,g){var h,i;return h=Math.max.apply(Math,g),i=0===h||h>d?this.raphael.rect(a,b,c,d):this.raphael.path(this.roundedRect(a,b,c,d,g)),i.attr("fill",e).attr("fill-opacity",f).attr("stroke","none")},d.prototype.roundedRect=function(a,b,c,d,e){return null==e&&(e=[0,0,0,0]),["M",a,e[0]+b,"Q",a,b,a+e[0],b,"L",a+c-e[1],b,"Q",a+c,b,a+c,b+e[1],"L",a+c,b+d-e[2],"Q",a+c,b+d,a+c-e[2],b+d,"L",a+e[3],b+d,"Q",a,b+d,a,b+d-e[3],"Z"]},d}(b.Grid),b.Donut=function(c){function d(c){this.resizeHandler=f(this.resizeHandler,this),this.select=f(this.select,this),this.click=f(this.click,this);var d=this;if(!(this instanceof b.Donut))return new b.Donut(c);if(this.options=a.extend({},this.defaults,c),this.el="string"==typeof c.element?a(document.getElementById(c.element)):a(c.element),null===this.el||0===this.el.length)throw new Error("Graph placeholder not found.");void 0!==c.data&&0!==c.data.length&&(this.raphael=new Raphael(this.el[0]),this.options.resize&&a(window).bind("resize",function(){return null!=d.timeoutId&&window.clearTimeout(d.timeoutId),d.timeoutId=window.setTimeout(d.resizeHandler,100)}),this.setData(c.data))}return h(d,c),d.prototype.defaults={colors:["#0B62A4","#3980B5","#679DC6","#95BBD7","#B0CCE1","#095791","#095085","#083E67","#052C48","#042135"],backgroundColor:"#FFFFFF",labelColor:"#000000",formatter:b.commas,resize:!1},d.prototype.redraw=function(){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;for(this.raphael.clear(),c=this.el.width()/2,d=this.el.height()/2,n=(Math.min(c,d)-10)/3,l=0,u=this.values,o=0,r=u.length;r>o;o++)m=u[o],l+=m;for(i=5/(2*n),a=1.9999*Math.PI-i*this.data.length,g=0,f=0,this.segments=[],v=this.values,e=p=0,s=v.length;s>p;e=++p)m=v[e],j=g+i+a*(m/l),k=new b.DonutSegment(c,d,2*n,n,g,j,this.data[e].color||this.options.colors[f%this.options.colors.length],this.options.backgroundColor,f,this.raphael),k.render(),this.segments.push(k),k.on("hover",this.select),k.on("click",this.click),g=j,f+=1;for(this.text1=this.drawEmptyDonutLabel(c,d-10,this.options.labelColor,15,800),this.text2=this.drawEmptyDonutLabel(c,d+10,this.options.labelColor,14),h=Math.max.apply(Math,this.values),f=0,w=this.values,x=[],q=0,t=w.length;t>q;q++){if(m=w[q],m===h){this.select(f);
break}x.push(f+=1)}return x},d.prototype.setData=function(a){var b;return this.data=a,this.values=function(){var a,c,d,e;for(d=this.data,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(parseFloat(b.value));return e}.call(this),this.redraw()},d.prototype.click=function(a){return this.fire("click",a,this.data[a])},d.prototype.select=function(a){var b,c,d,e,f,g;for(g=this.segments,e=0,f=g.length;f>e;e++)c=g[e],c.deselect();return d=this.segments[a],d.select(),b=this.data[a],this.setLabels(b.label,this.options.formatter(b.value,b))},d.prototype.setLabels=function(a,b){var c,d,e,f,g,h,i,j;return c=2*(Math.min(this.el.width()/2,this.el.height()/2)-10)/3,f=1.8*c,e=c/2,d=c/3,this.text1.attr({text:a,transform:""}),g=this.text1.getBBox(),h=Math.min(f/g.width,e/g.height),this.text1.attr({transform:"S"+h+","+h+","+(g.x+g.width/2)+","+(g.y+g.height)}),this.text2.attr({text:b,transform:""}),i=this.text2.getBBox(),j=Math.min(f/i.width,d/i.height),this.text2.attr({transform:"S"+j+","+j+","+(i.x+i.width/2)+","+i.y})},d.prototype.drawEmptyDonutLabel=function(a,b,c,d,e){var f;return f=this.raphael.text(a,b,"").attr("font-size",d).attr("fill",c),null!=e&&f.attr("font-weight",e),f},d.prototype.resizeHandler=function(){return this.timeoutId=null,this.raphael.setSize(this.el.width(),this.el.height()),this.redraw()},d}(b.EventEmitter),b.DonutSegment=function(a){function b(a,b,c,d,e,g,h,i,j,k){this.cx=a,this.cy=b,this.inner=c,this.outer=d,this.color=h,this.backgroundColor=i,this.index=j,this.raphael=k,this.deselect=f(this.deselect,this),this.select=f(this.select,this),this.sin_p0=Math.sin(e),this.cos_p0=Math.cos(e),this.sin_p1=Math.sin(g),this.cos_p1=Math.cos(g),this.is_long=g-e>Math.PI?1:0,this.path=this.calcSegment(this.inner+3,this.inner+this.outer-5),this.selectedPath=this.calcSegment(this.inner+3,this.inner+this.outer),this.hilight=this.calcArc(this.inner)}return h(b,a),b.prototype.calcArcPoints=function(a){return[this.cx+a*this.sin_p0,this.cy+a*this.cos_p0,this.cx+a*this.sin_p1,this.cy+a*this.cos_p1]},b.prototype.calcSegment=function(a,b){var c,d,e,f,g,h,i,j,k,l;return k=this.calcArcPoints(a),c=k[0],e=k[1],d=k[2],f=k[3],l=this.calcArcPoints(b),g=l[0],i=l[1],h=l[2],j=l[3],"M"+c+","+e+("A"+a+","+a+",0,"+this.is_long+",0,"+d+","+f)+("L"+h+","+j)+("A"+b+","+b+",0,"+this.is_long+",1,"+g+","+i)+"Z"},b.prototype.calcArc=function(a){var b,c,d,e,f;return f=this.calcArcPoints(a),b=f[0],d=f[1],c=f[2],e=f[3],"M"+b+","+d+("A"+a+","+a+",0,"+this.is_long+",0,"+c+","+e)},b.prototype.render=function(){var a=this;return this.arc=this.drawDonutArc(this.hilight,this.color),this.seg=this.drawDonutSegment(this.path,this.color,this.backgroundColor,function(){return a.fire("hover",a.index)},function(){return a.fire("click",a.index)})},b.prototype.drawDonutArc=function(a,b){return this.raphael.path(a).attr({stroke:b,"stroke-width":2,opacity:0})},b.prototype.drawDonutSegment=function(a,b,c,d,e){return this.raphael.path(a).attr({fill:b,stroke:c,"stroke-width":3}).hover(d).click(e)},b.prototype.select=function(){return this.selected?void 0:(this.seg.animate({path:this.selectedPath},150,"<>"),this.arc.animate({opacity:1},150,"<>"),this.selected=!0)},b.prototype.deselect=function(){return this.selected?(this.seg.animate({path:this.path},150,"<>"),this.arc.animate({opacity:0},150,"<>"),this.selected=!1):void 0},b}(b.EventEmitter)}).call(this);
define("morris", ["jquery","raphael"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Morris;
    };
}(this)));

define('modules/widget/widgets/statistics/totalByTagChart/views/TotalByTagView',[
    'marionette',
    'text!../templates/TotalByTagTemp.html',
    '../../../base/views/BaseView',
    'morris'
], function(Marionette, template, BaseView){
    return Marionette.ItemView.extend({

        template: _.template(template),

        initialize: function(){
            BaseView.prototype.initialize.apply(this, arguments);
        },

        dataHandler: function(){
            this.render();
            this.onShow();
        },

        onShow: function(){

            var model = this.model.toJSON();

            var _this = this;

            Morris.Bar({
                element: _this.$el.find('.chart')[0],
                data: _this.getDataForChart(),
                xkey: 'tagName',
                ykeys: ['count'],
                labels: ['Tag'],
                barColors: ['#93bb25'],
                hideHover: 'always'
            });

        },

        getDataForChart: function(){
            var data = this.model.get('data');
            var result = [];

            _.each(data, function(row){
                result.push({
                    count: row.count,
                    tagName: row.tagName || '-'
                })
            })

            return result;
        },

        onClose: function(){}

    });
});
define('modules/widget/widgets/statistics/totalByTagChart/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/TotalByTagView',

    '../../base/index'

], function(jQuery, Backbone, Marionette, App, config, TotalByTagView){

    App.module("Widget.TotalByTagChart", {

        startWithParent: true,

        define: function( TotalByTagChart, App, Backbone, Marionette, $, _ ){
            var log;

            TotalByTagChart.Controller = App.Widget.Base.Controller.extend({

                widgetName: 'Statistics chart',

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Collection.Sign');
                    App.Widget.Base.Controller.prototype.initialize.apply(this, arguments);
                },

                getModel: function(){
                    return App.reqres.request(config.reqres['statistic:totalByTag:entity']);
                },

                getView: function(){
                    return TotalByTagView;
                }

            });

        }
    })

});

define('text!modules/widget/widgets/statistics/totalByTag/templates/TotalByTagTemp.html',[],function () { return '<table class="table table-hover budget-table table-striped">\n    <thead>\n    <tr>\n        <th>Tag</th>\n        <th>Count</th>\n    </tr>\n    </thead>\n    <tbody>\n    <% _.each(data, function(row){ %>\n    <tr>\n        <td>\n            <span class="glyphicon glyphicon-tag"></span>\n            <% if(!row.tagName) {%>\n            <span class="value">-</span>\n            <% } else{%>\n            <span class="value"><%= row.tagName %></span>\n            <% }%>\n        </td>\n        <td><%=  row.count  %></td>\n    </tr>\n    <% }) %>\n    </tbody>\n</table>';});

define('modules/widget/widgets/statistics/totalByTag/views/TotalByTagView',[
    'marionette',
    'text!../templates/TotalByTagTemp.html',
    '../../../base/views/BaseView'
], function(Marionette, template, BaseView){
    return BaseView.extend({

        template: _.template(template),

        initialize: function(){
            BaseView.prototype.initialize.apply(this, arguments);
        },

        onClose: function(){

        }

    });
});
define('modules/widget/widgets/statistics/totalByTag/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/TotalByTagView',

    '../../base/index'

], function(jQuery, Backbone, Marionette, App, config, TotalByTagView){

    App.module("Widget.TotalByTag", {

        startWithParent: true,

        define: function( TotalByTag, App, Backbone, Marionette, $, _ ){
            var log;

            TotalByTag.Controller = App.Widget.Base.Controller.extend({

                widgetName: 'Statistics by tags',

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Collection.Sign');
                    App.Widget.Base.Controller.prototype.initialize.apply(this, arguments);
                },

                getModel: function(){
                    return App.reqres.request(config.reqres['statistic:totalByTag:entity']);
                },

                getView: function(){
                    return TotalByTagView;
                }

            });

        }
    })

});
define('modules/widget/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    /*widgets*/
    './widgets/base/index',

    //auth
    './widgets/auth/sign/index',

    //data
    './widgets/date/index',

    //tag
    './widgets/tagList/index',

    //transaction
    './widgets/transaction/add/index',
    './widgets/transaction/edit/index',
    './widgets/transaction/list/index',

    //statistic
    './widgets/statistics/totals/index',
    './widgets/statistics/totalByTagChart/index',
    './widgets/statistics/totalByTag/index'

], function(jQuery, Backbone, Marionette, App, config){

    App.module("Widget", {

        startWithParent: true,

        define: function( Widget, App, Backbone, Marionette, $, _ ){}
    })

});

define('text!modules/component/components/dateFilter/templates/TabTemp.html',[],function () { return '<div class="form-group">\n    <div class="input-group">\n\n        <span class="input-group-btn">\n          <button class="btn btn-default prev" type="button">prev</button>\n        </span>\n        <div class="dateLabel"><%= label %></div>\n        <span class="input-group-btn">\n          <button class="btn btn-default next" type="button">next</button>\n        </span>\n    </div>\n</div>';});

define('modules/component/components/dateFilter/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    'text!./templates/TabTemp.html',
    'moment'

], function(jQuery, Backbone, Marionette, App, config, template){

    App.module("Component.DateFilter", {

        startWithParent: true,

        define: function( DateFilter, App, Backbone, Marionette, $, _ ){

            DateFilter.View = Marionette.ItemView.extend({

                events: {
                    'click .next': 'nextHandler',
                    'click .prev': 'prevHandler'
                },

                ui: {
                    label: '.dateLabel'
                },

                className: 'dateFiter',

                initialize: function(options){
                    this.generateLabel();
                    this.listenTo(this.model, "change:label", this.labelHandler);
                },

                labelHandler: function(){
                    this.ui.label.html(this.model.get('label'))
                },

                generateLabel: function(){
                    var date = this.model.get('date');

                    this.model.set({
                        label: moment(date).format('MMMM YYYY')
                    })
                },

                template: _.template(template),

                nextHandler: function(e){
                    e.preventDefault();
                    var date = this.model.get('date');
                    var newDate = new Date( date.getTime() );
                    newDate.setMonth(newDate.getMonth() + 1);
                    this.model.set({
                        date: newDate
                    });
                    this.generateLabel();
                },

                prevHandler: function(e){
                    e.preventDefault();
                    var date = this.model.get('date');
                    var newDate = new Date( date.getTime() );
                    newDate.setMonth(newDate.getMonth() - 1);
                    this.model.set({
                        date: newDate
                    });
                    this.generateLabel();
                },

                onShow: function(){}

            });

        }
    })

});

define('text!modules/component/components/noData/templates/NoDataTemp.html',[],function () { return 'No data available';});

define('modules/component/components/noData/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    'text!./templates/NoDataTemp.html'

], function(jQuery, Backbone, Marionette, App, config, template){

    App.module("Component.NoData", {

        startWithParent: true,

        define: function( NoData, App, Backbone, Marionette, $, _ ){

            NoData.View = Marionette.ItemView.extend({

                className: "text",

                initialize: function(options){},

                template: _.template(template)

            });

        }
    })

});

define('text!modules/component/components/tab/templates/TabTemp.html',[],function () { return '<% _.each(tabs, function(tab){ %>\n<div class="btn-group">\n    <button data-value="<%= tab.value %>" type="button" class="btn btn-default <%= (tab.value == currentTab) ? \'active\' : \'\' %> ">\n        <span class="glyphicon glyphicon-stats"></span>\n        <% if(tab.name) {%>\n            <span class="text"><%= tab.name%></span>\n        <% }%>\n    </button>\n</div>\n<% }) %>';});

define('modules/component/components/tab/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    'text!./templates/TabTemp.html'

], function(jQuery, Backbone, Marionette, App, config, template){

    App.module("Component.Tab", {

        startWithParent: true,

        define: function( Tab, App, Backbone, Marionette, $, _ ){
            var log;

            Tab.View = Marionette.ItemView.extend({

                className: 'btn-group btn-group-justified',

                events: {
                    'click button': 'buttonHandler'
                },

                template: _.template(template),

                ui: {
                    buttons: 'button'
                },

                initialize: function(options){
                    this.listenTo(this.model, 'change:currentTab', this.currentTabHandler)
                },

                currentTabHandler: function(){
                    var currentTab = this.model.get('currentTab');
                    this.ui.buttons.removeClass('active');
                    this.$el.find('[data-value='+ currentTab +']').addClass('active');
                },

                buttonHandler: function(e){
                    e.preventDefault();
                    var $el = $(e.target).closest('button');
                    var value = $el.data('value');
                    if(!value) return false;

                    this.model.set('currentTab', value);
                },

                onShow: function(){}

            });

        }
    })

});
define('modules/component/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    /*widgets*/

    //auth
    './components/dateFilter/index',
    './components/noData/index',
    './components/tab/index'

], function(jQuery, Backbone, Marionette, App, config){

    App.module("Component", {

        startWithParent: true,

        define: function( Widget, App, Backbone, Marionette, $, _ ){}
    })

});

define('text!modules/notice/template/NoticeTemp.html',[],function () { return '<div class="modal-content">\n    <div class="modal-header">\n\n        <% if(showCloseButton == true) { %>\n        <button type="button" class="close closeBtn">×</button>\n        <% }%>\n\n        <h4 class="modal-title"><%= title %></h4>\n    </div>\n    <div class="modal-body">\n        <%= text %>\n    </div>\n    <div class="modal-footer">\n\n        <% if(isShowCloseOnFooter == true) { %>\n        <button type="button" class="btn btn-default decline"><%= textDefault %></button>\n        <% }%>\n        <button type="button" class="btn btn-primary accept"><%= textPrimary %></button>\n    </div>\n</div>';});

define('modules/notice/view/NoticeView',[
    'marionette',
    'text!../template/NoticeTemp.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        template: _.template( template ),

        className: "modal-dialog",

        events: {
            "click .closeBtn" : "closeBtn",
            "click .modal-footer .decline" : "decline",
            "click .modal-footer .accept" : "accept"
        },

        initialize: function( options ){
            this.options = options;
        },

        serializeData: function(){
            return this.options;
        },

        onShow: function(){
            this.$el.addClass(this.options.addCustomClass);
        },

        closeBtn: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger("closeBtn");
            if( this.options.isCloseAuto ) this.trigger("closeWindow");
        },

        decline: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger("decline");
            if( this.options.isCloseAuto ) this.trigger("closeWindow");
        },

        accept: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger("accept");
            if( this.options.isCloseAuto ) this.trigger("closeWindow");
        }

    })
});

define('text!modules/notice/template/NoticePromptTemp.html',[],function () { return '<div class="modal-content">\n    <div class="modal-header">\n\n        <% if(showCloseButton == true) { %>\n        <button type="button" class="close closeBtn">×</button>\n        <% }%>\n\n        <h4 class="modal-title"><%= title %></h4>\n    </div>\n    <div class="modal-body">\n        <% if(text) { %>\n        <div class="text">\n            <%= text %>\n        </div>\n        <% } %>\n        <form action="" class="form-horizontal">\n            <div class="form-group">\n                <div class="col-lg-12">\n                    <input name="value" type="text" class="form-control value" placeholder="<%= placeholder %>" />\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div class="modal-footer">\n\n        <% if(isShowCloseOnFooter == true) { %>\n        <button type="button" class="btn btn-default decline"><%= textDefault %></button>\n        <% }%>\n        <button type="button" class="btn btn-primary accept"><%= textPrimary %></button>\n    </div>\n</div>';});

define('modules/notice/view/NoticePromptView',[
    'marionette',
    'text!../template/NoticePromptTemp.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        template: _.template( template ),

        className: "modal-dialog",

        events: {
            "click .closeBtn" : "closeBtn",
            "click .modal-footer .decline" : "decline",
            "click .modal-footer .accept" : "accept",
            "submit": "accept"
        },

        ui: {
            value: '.value'
        },

        initialize: function( options ){
            this.value = "";
            this.options = options;
        },

        serializeData: function(){
            return this.options;
        },

        onShow: function(){
            this.$el.addClass(this.options.addCustomClass);

            this.ui.value.focus();
        },

        closeBtn: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger("closeBtn");
            if( this.options.isCloseAuto ) this.trigger("closeWindow");
        },

        decline: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger("decline");
            if( this.options.isCloseAuto ) this.trigger("closeWindow");
        },

        accept: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.value = this.ui.value.val();
            this.trigger("accept");
            if( this.options.isCloseAuto ) this.trigger("closeWindow");
        }

    })
});
define('modules/notice/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    './view/NoticeView',
    './view/NoticePromptView',
], function(jQuery, Backbone, Marionette, App, config, NoticeView, NoticePromptView){

    App.module("Notice", {

        startWithParent: true,

        define: function( Map, App, Backbone, Marionette, $, _ ){

            var log;
            var defaults = {

                /*color notice*/
                // error
                // alert
                // info
                status: "error",

                /*title notice*/
                title: "",

                /*general text*/
                text: "",

                /*add class*/
                /*
                 fill-color
                 white-color
                 */
                addCustomClass: "",

                /*close buttons*/
                showCloseButton: true,

                isShowCloseOnFooter: true,

                textDefault: "Cancel",

                textPrimary: "Ok",

                isCloseAuto: true,

                placeholder: ""

            }

            var Controller = Marionette.Controller.extend({
                getNotice: function(options){
                    var opts = _.extend(_.clone(defaults), options);
                    return new NoticeView( opts );
                },

                getNoticePrompt: function(options){
                    var opts = _.extend(_.clone(defaults), options);
                    return new NoticePromptView( opts );
                }
            });

            App.addInitializer(function(){
                log = App.reqres.request("getLog", 'Notice');
                var controller = new Controller();

                App.reqres.setHandler(config.reqres["notice:get"], function(options){
                    return controller.getNotice(options)
                });

                App.reqres.setHandler(config.reqres["notice:get:prompt"], function(options){
                    return controller.getNoticePrompt(options)
                });


            })
        }
    })

})
;

define('text!modules/notify/templates/template.html',[],function () { return '<div class="body">\n    <p><%= text %></p>\n</div>';});

define('modules/notify/views/notify',[
    'marionette',
    'text!../templates/template.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({
        template: _.template(template),

        className: "notify",

        events: {
            "click .close" : "animateClose"
        },

        initialize: function(){
            this.render(this.model.toJSON());
            this.$el.addClass(this.model.get("type"));
        },

        animateClose: function(){
            var _this = this;
            this.$el.removeClass('fadeInDown').addClass('animated fadeOutUp');
            this.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                _this.close();
            });
        }
    })

});
define('modules/notify/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    /*views*/
    './views/notify'
], function(jQuery, Backbone, Marionette, App, config, NotifyView){

    App.module("Notify", {

        startWithParent: true,

        define: function(Notify, App, Backbone, Marionette, $, _){

            var NotifyModel = Backbone.Model.extend();

            var defaultSettings = {
                text: "Default text",
                showTime: 3000,
                isAutoHide: true,
                withCloseBtn: true,

                //success (green)
                //error (red)
                type: 'success'
            }

            var Controller = {
                showNotify: function( options ){
                    var settings = $.extend(_.clone(defaultSettings), options);
                    var notifyModel = new NotifyModel(settings);
                    var notifyView = new NotifyView({model:notifyModel});
                    $('#notify-container').append(notifyView.$el);
                    notifyView.$el.addClass('animated fadeInDown');

                    if( settings.isAutoHide ){
                        setTimeout(function(){
                            notifyView.animateClose();
                        }, settings.showTime);
                    }
                },

                showNotifySide: function( options ){
                    var settings = $.extend(_.clone(defaultSettings), options);
                    var notifyModel = new NotifyModel(settings);
                    var notifyView = new NotifyView({model:notifyModel});
                    $('#notify-container-side').append(notifyView.$el);
                    notifyView.$el.addClass('animated fadeInDown');

                    if( settings.isAutoHide ){
                        setTimeout(function(){
                            notifyView.animateClose();
                        }, settings.showTime);
                    }
                },

                getNotify: function(options){
                    var notifyModel = new NotifyModel(options);
                    var notifyView = new NotifyView({model:notifyModel});
                    return notifyView;
                },

                clearAllNotice: function(){
                    $('#notify-container').html('');
                },

                clearAllNotifySide: function(){
                    $('#notify-container-side').html('');
                }
            }

            var API = {
                showNotify: function(options){
                    Controller.showNotify(options);
                },

                getNotify: function(){
                    return Controller.getNotify(options);
                },

                clearAllNotice: function(){
                    return Controller.clearAllNotice();
                },

                showNotifySide: function(options){
                    Controller.showNotifySide(options);
                },

                clearAllNotifySide: function(){
                    return Controller.clearAllNotifySide();
                }
            }

            Notify.API = API;

            App.commands.setHandler(config.commands['notify:showNotify'], function( options ){
                return API.showNotify( options );
            })
            App.commands.setHandler(config.commands['notify:clearAllNotice'], function(){
                return API.clearAllNotice();
            })

            App.commands.setHandler(config.commands['notify:showNotify:side'], function( options ){
                return API.showNotifySide( options );
            })

            App.commands.setHandler(config.commands['notify:clearAllNotify:side'], function( options ){
                return API.clearAllNotifySide( options );
            })

        }
    })

});

define('text!modules/header/templates/MainTemp.html',[],function () { return '<div class="container navbar-default navbar-fixed-top">\n\n    <button class="menu-toggle pull-left" type="button" >\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n    </button>\n\n    <a href="#" class="logo">\n        <img src="img/logo.png" alt=""/>\n    </a>\n    <span class="title">Main page</span>\n\n    <ul class="nav navbar-nav pull-right">\n        <li class="active"><a href="#transaction/add">+</a></li>\n    </ul>\n\n</div>';});

define('modules/header/views/MainView',[
    'marionette',
    'text!../templates/MainTemp.html'
], function(Marionette, template){
    return Marionette.ItemView.extend({

        template: _.template(template),

        triggers: {
            'click .menu-toggle': "openMenu"
        },

        initialize: function(){

        },

        onClose: function(){

        }

    });
});
define('modules/header/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/MainView'
], function(jQuery, Backbone, Marionette, App, config, MainView){

    App.module("Header", {

        startWithParent: true,

        define: function( Header, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                },

                start: function(){
                    this.view = new MainView();
                    this.region.show(this.view);
                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(this.view, 'openMenu', this.openMenuHandler)
                },

                openMenuHandler: function(){
                    App.execute(config.commands['menu:open']);
                }
            });

            var API  = {

                /*Инициализация перед стартом*/
                start: function(){
                    if( Header.controller ) return false;

                    Header.controller = new Controller({
                        region: App.header
                    });
                    Header.controller.start();
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Header.controller) {
                        Header.controller.close();
                        delete Header.controller;
                    }
                }
            }

            Header.API = API;
        }
    })


});

define('text!modules/menu/templates/MenuTemp.html',[],function () { return '<li>\n    <a data-path="report/main" href="#report/main">\n        <span class="glyphicon glyphicon-folder-open"></span>\n        <span class="text">Report</span>\n    </a>\n</li>\n<li>\n    <a data-path="tags" href="#settings/tags">\n        <span class="glyphicon glyphicon-tags"></span>\n        <span class="text">Tags</span>\n    </a>\n</li>\n<li>\n    <a data-path="sync" href="#">\n        <span class="glyphicon glyphicon-refresh"></span>\n        <span class="text">Sync</span>\n    </a>\n</li>\n<li>\n    <a data-path="logout" href="#logout">\n        <span class="glyphicon glyphicon-log-out"></span>\n        <span class="text">Logout</span>\n    </a>\n</li>';});

define('modules/menu/views/MenuView',[
    'marionette',
    'text!../templates/MenuTemp.html'
], function(
    Marionette,
    template
    ){
    return Marionette.ItemView.extend({

        template: _.template(template),

        tagName: "ul",

        className: "nav sidebar",

        events: {
            "click a" : "linkHandler"
        },

        initialize: function(){
            this.listenTo(this.model, "change:path", this.pathHandler);
        },

        pathHandler: function(){
            var path = this.model.get('path');
            this.$el.find('li').removeClass('active');
            this.$el.find('a[data-path="'+ path +'"]').parent().addClass('active');
        },

        linkHandler: function(e){
            e.preventDefault();

            var $el = $(e.target).closest('a');
            var path = $el.data('path');
            var data = {
                isOpen: false
            };

            if( path == 'sync' ){
                this.model.trigger('sync');
                return false;
            }

            if(path || path != this.model.get('path')){
                data.path = path;
            }

            this.model.set(data);
        },

        onClose: function(){

        }

    });
});
define('modules/menu/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    /*views*/
    './views/MenuView'
], function(jQuery, Backbone, Marionette, App, config, MenuView){

    App.module("Menu", {

        startWithParent: true,

        define: function( Menu, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({

                initialize: function(options){

                    _.bindAll(this, "resizeHandler");
                    this.region = options.region;
                },

                start: function(){
                    this.model = App.reqres.request(config.reqres['model:entity']);

                    this.view = new MenuView({
                        model: this.model
                    });
                    this.region.show(this.view);

                    this.subscribe();

                },

                subscribe: function(){
                    this.listenTo(this.model, "sync", function(){
                        App.channels.main.trigger(config.channels['sync']);
                    });
                    this.listenTo(this.model, "change:path", this.pathHandler);
                    this.listenTo(this.model, "change:isOpen", this.isOpenHandler);
                    $(window).on('resize', this.resizeHandler);
                },

                resizeHandler: function(){
                    this.model.set({
                        isOpen: false
                    })
                },

                isOpenHandler: function(){
                    var isOpen = this.model.get('isOpen');
                    if(isOpen){
                        this.region.$el.addClass('active');
                    }else{
                        this.region.$el.removeClass('active');
                    }
                },

                pathHandler: function(){
                    var path = this.model.get('path');

                    if( path == "logout" ){
                        if( config.data.environment == "mobile"){
                            App.reqres.request(config.reqres['service:auth:logout']);
                        }else{
                            App.redirect( config.api.logout );
                        }
                    }else{
                        App.navigate('#' + path, {trigger: true});
                    }

                },

                setMenu: function(path, options){
                    this.model.set({
                        path: path
                    }, {silent: true})
                    this.view.pathHandler();
                },

                unselectMenu: function(){
                    this.model.set({
                        path: false
                    }, {silent: true});
                    this.view.pathHandler();
                },

                openMenu: function(){
                    this.model.set({
                        isOpen: true
                    })
                }
            });

            var API  = {

                /* Инициализация перед стартом */
                start: function(){
                    if( Menu.controller ) return false;

                    Menu.controller = new Controller({
                        region: App.menu
                    });
                    Menu.controller.start();
                },

                /* Остановка модуля */
                stop: function(){
                    if(Menu.controller) {
                        Menu.controller.close();
                        delete Menu.controller;
                    }
                }
            }

            Menu.API = API;

            App.addInitializer(function(){

            })

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Menu');
            })

            App.commands.setHandler(config.commands['menu:set'], function(path, options){
                Menu.controller.setMenu(path, options);
            })
            App.commands.setHandler(config.commands['menu:open'], function(path, options){
                Menu.controller.openMenu();
            })
            App.commands.setHandler(config.commands['menu:unselect'], function(){
                Menu.controller.unselectMenu();
            })



        }
    })


});
define('modules/behaviors/behavior/Calculator',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Behaviors.Calculator", {

        startWithParent: true,

        define: function( Test, App, Backbone, Marionette, $, _ ){
            App.behaviors.Calculator = Marionette.Behavior.extend({

                defaults: {
                    "modelField": "count"
                },

                ui: {
                    calculator: '.calculator'
                },

                events: {
                    'click .calculator button': "buttonHandler"
                },

                modelField: null,

                onRender: function(){
                    _.bindAll(this, 'buttonHandler');
                    this.model = this.view.model;
                    this.modelField = this.options.modelField || this.defaults.modelField;
                },

                buttonHandler: function(e){
                    var $el = $(e.target).closest('button');
                    var value = $el.data('value');

                    if(!value && value !== 0) return false;

                    if( value == "backspace" ){
                        this.backspaceHandler()
                    }else if( value == 'clear' ){
                        this.clearHandler();
                    }else{
                        this.numberHandler(value);
                    }
                },

                numberHandler: function(value){
                    var count = this.model.get(this.modelField);
                    if(!count){
                        count = '';
                    }else{
                        count += '';
                    }
                    var newCount = count + value;
                    this.model.set({
                        count: newCount
                    })
                },

                clearHandler: function(){
                    this.model.set({
                        count: ''
                    })
                },

                backspaceHandler: function(){
                    var count = this.model.get(this.modelField);
                    count += '';
                    var newCount = count.slice(0, -1);
                    this.model.set({
                        count: newCount
                    })
                }
            })
        }
    })


});
define('modules/behaviors/behavior/Comment',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Behaviors.Comment", {

        startWithParent: true,

        define: function( Comment, App, Backbone, Marionette, $, _ ){
            App.behaviors.Comment = Marionette.Behavior.extend({

                events: {
                    'click .comment-toggle': "toggleHandler"
                },

                toggleHandler: function(e){
                    this.view.$el.find('.comment-container').removeClass('hidden-xs');
                    this.view.$el.find('.comment-toggle').remove();
                }
            })
        }
    })


});
define('modules/behaviors/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './behavior/Calculator',
    './behavior/Comment'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Behaviors", {

        startWithParent: true,

        define: function( Behaviors, App, Backbone, Marionette, $, _ ){}
    })


});
define('apps/initialize/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    'storage'
], function(jQuery, Backbone, Marionette, App, config, async, storage){
    App.module("Initialize", {

        startWithParent: true,

        define: function( Initialize, App, Backbone, Marionette, $, _ ){

            App.on('initialize:before', function(){

                //THIS MODULE ENABLE ONLY FOR MOBILE CLIENT

                var emailFromLocalStorage = storage.get(config.storage.user['email']);
                if( emailFromLocalStorage && !config.data.user.email ) config.data.user.email = emailFromLocalStorage;

            })

        }
    })

});
define('apps/route/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Routes", {

        startWithParent: true,

        define: function( Routes, App, Backbone, Marionette, $, _ ){

            var Router = Marionette.AppRouter.extend({

                before: function(){},

                appRoutes: {
                    "landing(?:querypath)": "landing",
                    "tags(?:querypath)": "tags",
                    "transaction/add(?:querypath)": "transactionAdd",
                    "transaction/edit/:id(?:querypath)": "transactionEdit",
                    "report(/:tabName)(?:querypath)": "report",
                    "(?:querypath)": "redirectToLanding",
                    "*any": "redirectToLanding"
                }

            })

            var Controller = Marionette.Controller.extend({
                initialize: function(options){},

                landing: function(){
                    App.startSubApp("Landing");
                    App.currentApp.landing();
                },

                report: function(tabname){
                    if( !config.data.user.email ){
                        this.redirectToLanding();
                        return false;
                    }

                    App.startSubApp("Report");
                    App.currentApp.report(tabname);
                },

                tags: function(){
                    if( !config.data.user.email ){
                        this.redirectToLanding();
                        return false;
                    }
                    App.startSubApp("Tags");
                    App.currentApp.tags();
                },

                transactionAdd: function(){
                    if( !config.data.user.email ){
                        this.redirectToLanding();
                        return false;
                    }
                    App.startSubApp("Transaction");
                    App.currentApp.add();
                },

                transactionEdit: function(id){
                    if( !config.data.user.email ){
                        this.redirectToLanding();
                        return false;
                    }
                    App.startSubApp("Transaction");
                    App.currentApp.edit(id);
                },

                redirectToLanding: function(){
                    App.navigate('#landing', {trigger: true});
                }
            });

            App.addInitializer(function(){
                new Router({controller: new Controller()})
            })
        }
    })


});

define('text!apps/main/templates/LayoutTemp.html',[],function () { return '<header class="header-container"></header>\n\n<div class="container">\n    <div class="row ">\n        <div class="col-xs-3 menu-container menu">\n\n        </div>\n        <div class="col-xs-12 col-sm-9 content-container">\n\n        </div>\n    </div>\n</div>';});

define('apps/main/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: "container-fluid",

        regions: {
            header: '.header-container',
            menu: '.menu-container',
            content: '.content-container'
        }

    })
});
define('apps/main/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Main", {

        startWithParent: false,

        define: function( Main, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                    this.init = false;
                },

                enable: function(){

                    if(this.init) return false;
                    this.init = true;

                    this.layout = new Layout();
                    App.body.show(this.layout);

                    App.addRegions({
                        header: this.layout.header,
                        content: this.layout.content,
                        menu: this.layout.menu
                    });

                    App.module('Header').API.start();
                    App.module('Menu').API.start();
                },

                disable: function(){
                    if(!this.init) return false;
                    this.init = false;

                    if(this.layout) this.layout.close();

                    App.removeRegion('header');
                    App.removeRegion('content');
                    App.removeRegion('menu');

                    App.module('Header').API.stop();
                    App.module('Menu').API.stop();
                }
            });

            App.addInitializer(function(){
                var controller = new Controller();

                App.commands.setHandler(config.commands['main:enable'], function( options ){
                    return controller.enable();
                })

                App.commands.setHandler(config.commands['main:disable'], function( options ){
                    return controller.disable();
                })

            })

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Main');
            })
        }
    })


});

define('text!apps/report/templates/LayoutTemp.html',[],function () { return '<div class="header-container"></div>\n<div class="main-container"></div>\n\n<!--<div class="btn-group btn-group-justified">\n    <div class="btn-group">\n        <button type="button" class="btn btn-default active">\n            <span class="glyphicon glyphicon-stats"></span>\n        </button>\n    </div>\n    <div class="btn-group">\n        <button type="button" class="btn btn-default">\n            <span class="glyphicon glyphicon-align-justify"></span>\n        </button>\n    </div>\n</div>\n<div class="row settings">\n    <div class="col-sm-5 ">\n        <div class="period setting-item">\n            <span class="title">Period:</span>\n            <button type="button" class="btn btn-default">\n                <span class="glyphicon glyphicon-calendar"></span>\n                <span>March, 04</span>\n            </button>\n        </div>\n    </div>\n    <div class="col-sm-7">\n        <div class="budget setting-item">\n            <span class="title">Budget:</span>\n            <div class="btn-group ">\n                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n                    mue.miv@gmail.com\n                    <span class="caret"></span>\n                </button>\n                <ul class="dropdown-menu">\n                    <li><a href="#">Dropdown link</a></li>\n                    <li><a href="#">Dropdown link</a></li>\n                    <li><a href="#">Dropdown link</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>-->\n<!--<div class="main">\n    <div class="total">\n        <div class="page-header">\n            Totals: 5000\n        </div>\n        <table class="table table-hover budget-table table-striped">\n            <thead>\n            <tr>\n                <th>Tag</th>\n                <th>Count</th>\n                <th>Percent</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <td>\n                    <span class="glyphicon glyphicon-tag"></span>\n                    <span>Somsdfsdfame</span>\n                </td>\n                <td>50</td>\n                <td>35%</td>\n            </tr>\n            <tr>\n                <td>\n                    <span class="glyphicon glyphicon-tag"></span>\n                    <span>Sfdgdfgme</span>\n                </td>\n                <td>50</td>\n                <td>35%</td>\n            </tr>\n            <tr>\n                <td>\n                    <span class="glyphicon glyphicon-tag"></span>\n                    <span>Soghjghjme</span>\n                </td>\n                <td>50</td>\n                <td>35%</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class="transaction">\n        <div class="page-header">\n            Transfers\n        </div>\n        <table class="table table-hover budget-table table-striped">\n            <thead>\n            <tr>\n                <th>Tag</th>\n                <th>Count</th>\n                <th>Date</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <td>\n                    <span class="glyphicon glyphicon-tag"></span>\n                    <span>Somsdfsdfame</span>\n                </td>\n                <td>50</td>\n                <td>14 June, 2014</td>\n            </tr>\n            <tr>\n                <td>\n                    <span class="glyphicon glyphicon-tag"></span>\n                    <span>Somsdfsdfame</span>\n                </td>\n                <td>50</td>\n                <td>14 June, 2014</td>\n            </tr>\n            <tr>\n                <td>\n                    <span class="glyphicon glyphicon-tag"></span>\n                    <span>Somsdfsdfame</span>\n                </td>\n                <td>50</td>\n                <td>14 June, 2014</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>-->';});

define('apps/report/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: 'statistic',

        regions: {
            header: '.header-container',
            main: '.main-container'
        }

    })

});

define('text!apps/report/controllers/header/templates/LayoutTemp.html',[],function () { return '<div class="tab-container"></div>\n<div class="filter-container"></div>';});

define('apps/report/controllers/header/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        regions: {
            tab: '.tab-container',
            filter: ".filter-container"
        }

    })

});
define('apps/report/controllers/header/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'


], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Report.Header", {

        startWithParent: false,

        define: function( Header, App, Backbone, Marionette, $, _ ){

            var log;

            Header.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Report.Header');
                    this.region = options.region;
                    this.tabName = options.tabName;

                    this.layout = new Layout();
                    this.region.show(this.layout);

                    this.tab = this.getTab();
                    this.layout.tab.show(this.tab);

                    this.dateFilter = this.getDateFilter();
                    this.dateFilter.show();

                    this.subscribe();

                },

                getTab: function(){
                    this.tabModel = App.reqres.request(config.reqres['model:entity']);
                    this.tabModel.set({
                        tabs: [
                            {
                                name: "main",
                                value: "main"
                            },
                            {
                                name: "details",
                                value: "details"
                            }
                        ],
                        currentTab: ( this.tabName ) ? this.tabName : false
                    })

                    return new App.Component.Tab.View({
                        model: this.tabModel
                    })
                },

                getDateFilter: function(){
                    return new App.Widget.DateFilter.Controller({
                        region: this.layout.filter
                    })
                },

                subscribe: function(){

                    this.listenTo(this.tabModel, 'change:currentTab', function(tabModel){
                        var tabName = tabModel.get('currentTab');
                        App.navigate('#report/' + tabName, {trigger: true});
                    })
                },

                onClose: function(){
                    this.tab.close();
                    this.dateFilter.close();
                    this.layout.close();
                }

            });
        }
    })

});

define('text!apps/report/controllers/details/templates/LayoutTemp.html',[],function () { return '<div class="transaction-container">transaction-container</div>';});

define('apps/report/controllers/details/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        regions: {
            transaction: '.transaction-container'
        }

    })

});
define('apps/report/controllers/details/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    "./views/Layout"
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Report.Details", {

        startWithParent: false,

        define: function( Details, App, Backbone, Marionette, $, _ ){

            var log;

            Details.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Report.Details"');

                    this.region = options.region;
                    this.layout = new Layout();
                    this.region.show(this.layout);

                    this.transactions = new App.Widget.Transaction.List.Controller({
                        region: this.layout.transaction
                    });
                    log('initialized');
                },

                show: function(){
                    this.transactions.show();
                    this.subscribe();
                    this.updateWidgets();
                },

                subscribe: function(){
                    this.listenTo( App.channels.main, config.channels['date:change'], this.updateWidgets );
                    this.listenTo( this.transactions, 'chooseTransaction', this.chooseTransactionHandler );
                },

                updateWidgets: function(){
                    var period = App.reqres.request(config.reqres['date:get:period']);
                    this.transactions.setData({
                        period: period
                    })
                },

                chooseTransactionHandler: function(transaction){
                    App.navigate('#transaction/edit/' + transaction.get('_id'), {trigger: true});
                },

                onClose: function(){}
            });
        }
    })

});

define('text!apps/report/controllers/main/templates/LayoutTemp.html',[],function () { return '<div class="total-container">total-container</div>\n<div class="row">\n    <div class="col-md-6 chart-container"></div>\n    <div class="col-md-6 table-container">table-container</div>\n</div>\n';});

define('apps/report/controllers/main/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        regions: {
            total: '.total-container',
            table: '.table-container',
            chart: '.chart-container'
        }

    })

});
define('apps/report/controllers/main/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    "./views/Layout"
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Report.Main", {

        startWithParent: false,

        define: function( Main, App, Backbone, Marionette, $, _ ){

            var log;

            Main.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Report.Main"');

                    this.region = options.region;
                    this.layout = new Layout();
                    this.region.show(this.layout);

                    this.total = new App.Widget.Totals.Controller({
                        region: this.layout.total
                    })
                    this.totalByTag = new App.Widget.TotalByTag.Controller({
                        region: this.layout.table
                    })
                    this.totalByTagChart = new App.Widget.TotalByTagChart.Controller({
                        region: this.layout.chart
                    })

                    log('initialized');
                },

                show: function(){
                    this.total.show();
                    this.totalByTag.show();
                    this.totalByTagChart.show();
                    this.subscribe();
                    this.updateWidgets();
                },

                subscribe: function(){
                    this.listenTo( App.channels.main, config.channels['date:change'], this.updateWidgets );
                },

                updateWidgets: function(){
                    var period = App.reqres.request(config.reqres['date:get:period']);

                    this.total.setData({
                        period: period
                    });

                    this.totalByTag.setData({
                        period: period
                    });

                    this.totalByTagChart.setData({
                        period: period
                    });
                },

                onClose: function(){}
            });
        }
    })

});
define('apps/report/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout',

    /*controllers*/
    './controllers/header/index',
    './controllers/details/index',
    './controllers/main/index'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Report", {

        startWithParent: false,

        define: function( Report, App, Backbone, Marionette, $, _ ){

            var log;

            var configModule = {
                defaultTab: 'main',
                allowedTab: ['main', 'details']
            }

            var Controller = Marionette.Controller.extend({

                initialize: function(options){
                    this.region = options.region;
                    this.layout = new Layout();
                    this.region.show(this.layout);
                },

                start: function(tabName){
                    if( !tabName ){
                        this.redirectToDefaultTab();
                        return;
                    }else{
                        this.tabName = this.getTabName(tabName);

                        if( !this.headerController ) this.startHeaderController();
                        this.startSubController();
                    }
                },

                startHeaderController: function(){
                    //contain tab view and filter view
                    this.headerController = new Report.Header.Controller({
                        region: this.layout.header,
                        tabName: this.tabName
                    })
                },

                startSubController: function(){
                    if( this.subController ) this.subController.close();

                    App.execute(config.commands['notify:clearAllNotice']);

                    var region = this.layout.main;

                    switch (this.tabName){
                        case configModule.allowedTab[0]:
                            this.subController = new Report.Main.Controller({
                                region: region
                            });
                            break;
                        case configModule.allowedTab[1]:
                            this.subController = new Report.Details.Controller({
                                region: region
                            });
                            break;
                        default:
                            this.subController = new Report.Main.Controller({
                                region: region
                            });
                                break;
                    }

                    this.subController.show();

                },

                getTabName: function(tabName){
                    if( this.isAllowedTabName(tabName) ){
                        return tabName;
                    }else{
                        return configModule.defaultTab;
                    }
                },

                isAllowedTabName: function(tabName){
                    var result = false;
                    _.each( configModule.allowedTab, function(tab){
                        if( tab == tabName ){
                            result = true;
                            return;
                        }
                    })
                    return result;
                },

                redirectToDefaultTab: function(){
                    this.tabName = configModule.defaultTab;
                    App.navigate("#report/" + this.tabName, {trigger: true});
                },

                onClose: function(){
                    if(this.subController) this.subController.close();
                }

            });

            var API  = {

                report: function(tagName){
                    App.execute(config.commands['menu:set'], 'report/main');
                    Report.controller.start(tagName);
                },

                /*Инициализация перед стартом*/
                start: function(){
                    App.execute(config.commands['main:enable']);
                    Report.controller = new Controller({
                        region: App.content
                    });
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Report.controller) {
                        log('delete controller');
                        Report.controller.close();
                        delete Report.controller;
                    }
                }
            }

            Report.start = API.start;
            Report.stop = API.stop;
            Report.report = API.report;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Report');
            })
        }
    })


});

define('text!apps/tags/templates/LayoutTemp.html',[],function () { return '<div class="add-container">\n    <form action="">\n        <div class="input-group">\n            <input name="tag" type="text" class="form-control add" placeholder="Add new tag" />\n        <span class="input-group-btn">\n        <button class="btn btn-default" type="submit">Add</button>\n        </span>\n        </div>\n    </form>\n</div>\n\n<div class="list-container">\n\n</div>';});

define('apps/tags/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: "tags",

        events: {
            "submit": "submitHandler"
        },

        ui: {
            'add': '.add'
        },

        regions: {
            list: '.list-container'
        },

        submitHandler: function(e){
            e.preventDefault();
            var tagName = this.ui.add.val();
            tagName = $.trim(tagName);
            this.trigger('addNewTag', tagName);
        },

        resetForm: function(){
            this.ui.add.val('');
        }

    })

});
define('apps/tags/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Tags", {

        startWithParent: false,

        define: function( Tags, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                },

                start: function(){
                    this.layout = new Layout();
                    this.region.show(this.layout);
                    this.tagList = new App.Widget.TagList.Controller({
                        region: this.layout.list
                    });

                    App.execute(config.commands['notify:showNotify'], {text: 'Loading...'});

                    $.when(this.tagList.show()).done(
                        function(){
                            App.execute(config.commands['notify:clearAllNotice']);
                        }
                    ).fail(
                        function(){
                            App.execute(config.commands['notify:showNotify:side'], {
                                text: 'Server error.',
                                type: 'error'
                            });
                            App.execute(config.commands['notify:clearAllNotice']);
                        }
                    );

                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(this.layout, "addNewTag", this.addNewTagHandler)
                },

                addNewTagHandler: function(tagName){
                    var tag = App.reqres.request(config.reqres['tag:entity']);
                    var _this = this;

                    if(!tagName) return false;

                    tag.set({
                        tagName: tagName
                    });

                    $.when(tag.createTag()).done(function(){
                        _this.tagList.addTag(tag);
                        _this.layout.resetForm();
                        App.execute(config.commands['notify:showNotify:side'], {text: 'Tag was added.'});
                    }).fail(function(){
                            App.execute(config.commands['notify:showNotify:side'], {
                                text: 'Create tag was failed. Server error.',
                                type: 'error'
                            });
                        })
                },

                onClose: function(){}
            });

            var API  = {

                tags: function(){

                    App.execute(config.commands['menu:set'], 'tags');

                    Tags.controller.start();
                },

                /*Инициализация перед стартом*/
                start: function(){
                    App.execute(config.commands['main:enable']);
                    Tags.controller = new Controller({
                        region: App.content
                    });
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Tags.controller) {
                        log('delete controller');
                        Tags.controller.close();
                        delete Tags.controller;
                    }
                }
            }

            Tags.start = API.start;
            Tags.stop = API.stop;
            Tags.tags = API.tags;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Tags');
            })
        }
    })


});

define('text!apps/landing/templates/LayoutTemp.html',[],function () { return '<div class="">\n    <div class="row">\n        <div class="col-sm-7">\n            <img class="img-responsive" src="img/mobile.png" alt=""/>\n        </div>\n        <div class="col-sm-5">\n            <div class="sign-container"></div>\n        </div>\n    </div>\n</div>';});

define('apps/landing/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: "container-fluid",

        regions: {
            sign: '.sign-container'
        }

    })

});
define('apps/landing/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'storage',

    './views/Layout'
], function(jQuery, Backbone, Marionette, App, config, storage, Layout){

    App.module("Landing", {

        startWithParent: false,

        define: function( Landing, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                },
                start: function(){
                    this.layout = new Layout();
                    this.region.show(this.layout);

                    this.signWidget = new App.Widget.Sign.Controller({
                        region: this.layout.sign
                    });
                    this.signWidget.show();

                    this.listenTo(this.signWidget, "signUp", this.signUpHandler);
                    this.listenTo(this.signWidget, "signIn", this.signInHandler);
                },

                signUpHandler: function(user){
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Please verify your email.'});
                },

                signInHandler: function(user){
                    config.data.user.email = user.get('email');
                    storage.set(config.storage.user['email'], user.get('email'));

                    App.navigate('#report/main', {trigger: true});
                    setTimeout(function(){
                        App.execute(config.commands['notify:showNotify:side'], {text: 'Welcome to account.'});
                    }, 200);
                },

                onClose: function(){
                    if(this.signWidget) this.signWidget.close();
                    if(this.layout) this.layout.close();
                }

            });

            var API  = {

                landing: function(){
                    if( config.data.user.email ){
                        App.navigate('#report', {trigger: true});
                        return;
                    }

                    Landing.controller.start();
                },

                /*Инициализация перед стартом*/
                start: function(){
                    Landing.controller = new Controller({
                        region: App.body
                    });

                    App.execute(config.commands['main:disable']);
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Landing.controller) {
                        log('delete controller');
                        Landing.controller.close();
                        delete Landing.controller;
                    }
                }
            }

            Landing.start = API.start;
            Landing.stop = API.stop;
            Landing.landing = API.landing;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Landing');
            })
        }
    })


});

define('text!apps/transaction/controllers/add/templates/LayoutTemp.html',[],function () { return '<div class="transaction-container">\n\n</div>';});

define('apps/transaction/controllers/add/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        regions: {
            transaction: '.transaction-container'
        }

    })

});
define('apps/transaction/controllers/add/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'


], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Transaction.Add", {

        startWithParent: false,

        define: function( Add, App, Backbone, Marionette, $, _ ){

            Add.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    this.region = options.region;
                },

                show: function(){
                    this.layout = new Layout();
                    this.region.show(this.layout);
                    this.transactionAdd = new App.Widget.Transaction.Add.Controller({
                        region: this.layout.transaction
                    });
                    this.transactionAdd.show();

                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(this.transactionAdd, 'cancelBtn', this.cancelHandler);
                    this.listenTo(this.transactionAdd, 'create', this.createHandler);
                },

                cancelHandler: function(){
                    App.navigate('#report', {trigger: true});
                },

                createHandler: function(){
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Transaction was created.'});
                    App.navigate('#report', {trigger: true});
                },

                onClose: function(){
                    this.transactionAdd.close();
                    this.layout.close();
                }

            });
        }
    })

});

define('text!apps/transaction/controllers/edit/templates/LayoutTemp.html',[],function () { return '<div class="transaction-container">\n\n</div>';});

define('apps/transaction/controllers/edit/views/Layout',[
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        regions: {
            transaction: '.transaction-container'
        }

    })

});
define('apps/transaction/controllers/edit/index',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'


], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Transaction.Edit", {

        startWithParent: false,

        define: function( Add, App, Backbone, Marionette, $, _ ){

            Add.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    this.region = options.region;
                    this.id = options.id;
                },

                show: function(){
                    this.layout = new Layout();
                    this.region.show(this.layout);
                    this.transactionEdit = new App.Widget.Transaction.Edit.Controller({
                        region: this.layout.transaction,
                        id: this.id
                    });

                    App.execute(config.commands['notify:showNotify'], {text: 'Loading...'});
                    $.when(this.transactionEdit.show()).done(
                        function(){
                            App.execute(config.commands['notify:clearAllNotice']);
                        }
                    ).fail(
                        function(){
                            App.execute(config.commands['notify:showNotify:side'], {
                                text: 'Server error.',
                                type: 'error'
                            });
                            App.execute(config.commands['notify:clearAllNotice']);
                        }
                    );

                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(this.transactionEdit, 'deleteTransaction', this.deleteTransactionHandler);
                    this.listenTo(this.transactionEdit, 'noTransaction', this.noTransactionHandler);
                    this.listenTo(this.transactionEdit, 'cancelBtn', this.cancelHandler);
                    this.listenTo(this.transactionEdit, 'edit', this.editHandler);
                },

                cancelHandler: function(){
                    App.navigate('#report', {trigger: true});
                },

                noTransactionHandler: function(){
                    App.navigate('#report', {trigger: true});
                },

                deleteTransactionHandler: function(){
                    App.navigate('#report', {trigger: true});
                },

                editHandler: function(){
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Transaction was edited.'});
                    App.navigate('#report', {trigger: true});
                },

                onClose: function(){
                    this.transactionEdit.close();
                    this.layout.close();
                }

            });
        }
    })

});
define('apps/transaction/module',[
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './controllers/add/index',
    './controllers/edit/index'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Transaction", {

        startWithParent: false,

        define: function( Transaction, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({

                initialize: function(options){
                    this.region = options.region;
                },

                add: function(){
                    if( this.subController ) this.subController.close();
                    App.execute(config.commands['notify:clearAllNotice']);
                    this.subController = new Transaction.Add.Controller({
                        region: this.region
                    });
                    this.subController.show();
                },

                edit: function(id){
                    if( this.subController ) this.subController.close();
                    App.execute(config.commands['notify:clearAllNotice']);
                    this.subController = new Transaction.Edit.Controller({
                        region: this.region,
                        id: id
                    });
                    this.subController.show();
                },

                onClose: function(){
                    if(this.subController) this.subController.close();
                }

            });

            var API  = {

                add: function(){
                    App.execute(config.commands['menu:unselect']);
                    Transaction.controller.add();
                },

                edit: function(id){
                    App.execute(config.commands['menu:unselect']);
                    Transaction.controller.edit(id);
                },

                /*Инициализация перед стартом*/
                start: function(){
                    App.execute(config.commands['main:enable']);
                    Transaction.controller = new Controller({
                        region: App.content
                    });
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Transaction.controller) {
                        log('delete controller');
                        Transaction.controller.close();
                        delete Transaction.controller;
                    }
                }
            }

            Transaction.edit = API.edit;
            Transaction.start = API.start;
            Transaction.stop = API.stop;
            Transaction.add = API.add;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Transaction');
            })
        }
    })


});
require([
    'app',
    'bootstrap',

    /*entities*/
    'entities/base',
    'entities/user',
    'entities/tag',
    'entities/transaction',
    'entities/statistics/total',
    'entities/statistics/totalByTag',
    'entities/statistics/transactionsList',

    /*modules*/

    //mobile
    'modules/server/module',
    'modules/database/module',
    'modules/sync/module',
    //all
    'modules/log/module',
    'modules/service/module',
    'modules/widget/module',
    'modules/component/module',
    'modules/notice/module',
    'modules/notify/module',
    'modules/header/module',
    'modules/menu/module',
    'modules/behaviors/module',

    /*main modules*/
    'apps/initialize/module',
    'apps/route/module',
    'apps/main/module',
    'apps/report/module',
    'apps/tags/module',
    'apps/landing/module',
    'apps/transaction/module'

], function(App){
    document.addEventListener("deviceready", function(){
        App.start();
    }, false);

});
define("frontend_dev/js/apps/mobile.js", function(){});

