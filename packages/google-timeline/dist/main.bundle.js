(()=>{var t={7162:(t,e,n)=>{t.exports=n(5047)},1119:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.queryActivities=e.getModuleName=e.getSubscriptions=e.getInfo=void 0;var r,i=(r=n(1656))&&r.__esModule?r:{default:r};e.getInfo=function(){return["queryActivities"]};e.getSubscriptions=function(){return[{subscription:"queryActivities",mockup:i.default}]};e.getModuleName=function(){return"GoogleTimeline"};e.queryActivities=function(t,e,n,r,o,p,a){return console.log("QUERY STAGE",t),console.log("QUERY APP",e),console.log("QUERY FIELDS",o),console.log("QUERY FILTER",p),console.log("QUERY NEXT",a),"dev"===t?Promise.resolve({data:{getS3Object:{content:i.default}}}):r({query:"query s3Object($input:S3ObjectInput!) {\n  getS3Object(input:$input) {\n    result\n  }\n}",name:n,fields:o,filter:p,next:a})}},1656:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{p_timestamp:"1417576831121",p_datetime:"2014-12-03T03:20:31.121Z",p_type:"STILL",p_confidence:"87"},{p_timestamp:"1417576831121",p_datetime:"2014-12-03T03:20:31.121Z",p_type:"UNKNOWN",p_confidence:"10"},{p_timestamp:"1417576831121",p_datetime:"2014-12-03T03:20:31.121Z",p_type:"IN_VEHICLE",p_confidence:"3"},{p_timestamp:"1417577043477",p_datetime:"2014-12-03T03:24:03.477Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417577223507",p_datetime:"2014-12-03T03:27:03.507Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417577403479",p_datetime:"2014-12-03T03:30:03.479Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417577584083",p_datetime:"2014-12-03T03:33:04.083Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417577764645",p_datetime:"2014-12-03T03:36:04.645Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417577854950",p_datetime:"2014-12-03T03:37:34.950Z",p_type:"TILTING",p_confidence:"100"},{p_timestamp:"1417577974239",p_datetime:"2014-12-03T03:39:34.239Z",p_type:"STILL",p_confidence:"67"},{p_timestamp:"1417577974239",p_datetime:"2014-12-03T03:39:34.239Z",p_type:"UNKNOWN",p_confidence:"21"},{p_timestamp:"1417577974239",p_datetime:"2014-12-03T03:39:34.239Z",p_type:"IN_VEHICLE",p_confidence:"10"},{p_timestamp:"1417577974239",p_datetime:"2014-12-03T03:39:34.239Z",p_type:"ON_FOOT",p_confidence:"2"},{p_timestamp:"1417577974239",p_datetime:"2014-12-03T03:39:34.239Z",p_type:"UNKNOWN",p_confidence:"2"},{p_timestamp:"1417578164939",p_datetime:"2014-12-03T03:42:44.939Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417578343786",p_datetime:"2014-12-03T03:45:43.786Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417578522565",p_datetime:"2014-12-03T03:48:42.565Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417578621680",p_datetime:"2014-12-03T03:50:21.680Z",p_type:"TILTING",p_confidence:"100"},{p_timestamp:"1417578741282",p_datetime:"2014-12-03T03:52:21.282Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417578920071",p_datetime:"2014-12-03T03:55:20.071Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417579098904",p_datetime:"2014-12-03T03:58:18.904Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417579192606",p_datetime:"2014-12-03T03:59:52.606Z",p_type:"TILTING",p_confidence:"100"},{p_timestamp:"1417579304277",p_datetime:"2014-12-03T04:01:44.277Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417579484270",p_datetime:"2014-12-03T04:04:44.270Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417579676631",p_datetime:"2014-12-03T04:07:56.631Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417579863469",p_datetime:"2014-12-03T04:11:03.469Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417580054691",p_datetime:"2014-12-03T04:14:14.691Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417580235368",p_datetime:"2014-12-03T04:17:15.368Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417580417347",p_datetime:"2014-12-03T04:20:17.347Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417580598368",p_datetime:"2014-12-03T04:23:18.368Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417580779348",p_datetime:"2014-12-03T04:26:19.348Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417580960350",p_datetime:"2014-12-03T04:29:20.350Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417581141376",p_datetime:"2014-12-03T04:32:21.376Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417581322350",p_datetime:"2014-12-03T04:35:22.350Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417581503354",p_datetime:"2014-12-03T04:38:23.354Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417581683912",p_datetime:"2014-12-03T04:41:23.912Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417581865543",p_datetime:"2014-12-03T04:44:25.543Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417582047363",p_datetime:"2014-12-03T04:47:27.363Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417582228370",p_datetime:"2014-12-03T04:50:28.370Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417582409351",p_datetime:"2014-12-03T04:53:29.351Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417582590358",p_datetime:"2014-12-03T04:56:30.358Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417582771360",p_datetime:"2014-12-03T04:59:31.360Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417582953365",p_datetime:"2014-12-03T05:02:33.365Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417583134343",p_datetime:"2014-12-03T05:05:34.343Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417583315371",p_datetime:"2014-12-03T05:08:35.371Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417583496359",p_datetime:"2014-12-03T05:11:36.359Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417583677477",p_datetime:"2014-12-03T05:14:37.477Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417583858042",p_datetime:"2014-12-03T05:17:38.042Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417584061348",p_datetime:"2014-12-03T05:21:01.348Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417584248046",p_datetime:"2014-12-03T05:24:08.046Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417584432358",p_datetime:"2014-12-03T05:27:12.358Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417584613420",p_datetime:"2014-12-03T05:30:13.420Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417584794378",p_datetime:"2014-12-03T05:33:14.378Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417584975436",p_datetime:"2014-12-03T05:36:15.436Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417585156370",p_datetime:"2014-12-03T05:39:16.370Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417585337432",p_datetime:"2014-12-03T05:42:17.432Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417585518426",p_datetime:"2014-12-03T05:45:18.426Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417585699398",p_datetime:"2014-12-03T05:48:19.398Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417585755737",p_datetime:"2014-12-03T05:49:15.737Z",p_type:"TILTING",p_confidence:"100"},{p_timestamp:"1417585832652",p_datetime:"2014-12-03T05:50:32.652Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417585901340",p_datetime:"2014-12-03T05:51:41.340Z",p_type:"STILL",p_confidence:"69"},{p_timestamp:"1417585901340",p_datetime:"2014-12-03T05:51:41.340Z",p_type:"UNKNOWN",p_confidence:"23"},{p_timestamp:"1417585901340",p_datetime:"2014-12-03T05:51:41.340Z",p_type:"IN_VEHICLE",p_confidence:"8"},{p_timestamp:"1417585962166",p_datetime:"2014-12-03T05:52:42.166Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417586104871",p_datetime:"2014-12-03T05:55:04.871Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417586166674",p_datetime:"2014-12-03T05:56:06.674Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417586226799",p_datetime:"2014-12-03T05:57:06.799Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417586286992",p_datetime:"2014-12-03T05:58:06.992Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417586485557",p_datetime:"2014-12-03T06:01:25.557Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417586666193",p_datetime:"2014-12-03T06:04:26.193Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417586846782",p_datetime:"2014-12-03T06:07:26.782Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417587027335",p_datetime:"2014-12-03T06:10:27.335Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417587207907",p_datetime:"2014-12-03T06:13:27.907Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417587388496",p_datetime:"2014-12-03T06:16:28.496Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417587569079",p_datetime:"2014-12-03T06:19:29.079Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417587750414",p_datetime:"2014-12-03T06:22:30.414Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417587931002",p_datetime:"2014-12-03T06:25:31.002Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417588021705",p_datetime:"2014-12-03T06:27:01.705Z",p_type:"TILTING",p_confidence:"100"},{p_timestamp:"1417588134332",p_datetime:"2014-12-03T06:28:54.332Z",p_type:"STILL",p_confidence:"97"},{p_timestamp:"1417588134332",p_datetime:"2014-12-03T06:28:54.332Z",p_type:"IN_VEHICLE",p_confidence:"3"},{p_timestamp:"1417588323448",p_datetime:"2014-12-03T06:32:03.448Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417588503446",p_datetime:"2014-12-03T06:35:03.446Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417588684310",p_datetime:"2014-12-03T06:38:04.310Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417588882708",p_datetime:"2014-12-03T06:41:22.708Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417589064435",p_datetime:"2014-12-03T06:44:24.435Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417589245434",p_datetime:"2014-12-03T06:47:25.434Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417589426372",p_datetime:"2014-12-03T06:50:26.372Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417589607408",p_datetime:"2014-12-03T06:53:27.408Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417589788036",p_datetime:"2014-12-03T06:56:28.036Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417589968639",p_datetime:"2014-12-03T06:59:28.639Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417590154361",p_datetime:"2014-12-03T07:02:34.361Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417590335389",p_datetime:"2014-12-03T07:05:35.389Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417590516027",p_datetime:"2014-12-03T07:08:36.027Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417590697420",p_datetime:"2014-12-03T07:11:37.420Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417590878038",p_datetime:"2014-12-03T07:14:38.038Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417591059429",p_datetime:"2014-12-03T07:17:39.429Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417591240366",p_datetime:"2014-12-03T07:20:40.366Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417591421361",p_datetime:"2014-12-03T07:23:41.361Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417591602427",p_datetime:"2014-12-03T07:26:42.427Z",p_type:"STILL",p_confidence:"100"},{p_timestamp:"1417591783417",p_datetime:"2014-12-03T07:29:43.417Z",p_type:"STILL",p_confidence:"100"}];e.default=n},6618:(t,e,n)=>{"use strict";e.Z=void 0;var r=n(1119),i={getModuleName:r.getModuleName,getInfo:r.getInfo,getSubscriptions:r.getSubscriptions,queryActivities:r.queryActivities};e.Z=i},3819:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1176:(t,e,n)=>{var r=n(5052);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},6570:(t,e,n)=>{"use strict";var r=n(9996).forEach,i=n(6038)("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},9540:(t,e,n)=>{var r=n(905),i=n(4237),o=n(3231),p=function(t){return function(e,n,p){var a,c=r(e),u=i(c.length),s=o(p,u);if(t&&n!=n){for(;u>s;)if((a=c[s++])!=a)return!0}else for(;u>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:p(!0),indexOf:p(!1)}},9996:(t,e,n)=>{var r=n(7636),i=n(9337),o=n(2991),p=n(4237),a=n(7501),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,s=4==t,f=6==t,m=7==t,_=5==t||f;return function(d,l,y,h){for(var L,v,T=o(d),g=i(T),S=r(l,y,3),I=p(g.length),b=0,x=h||a,Z=e?x(d,I):n||m?x(d,0):void 0;I>b;b++)if((_||b in g)&&(v=S(L=g[b],b,T),t))if(e)Z[b]=v;else if(v)switch(t){case 3:return!0;case 5:return L;case 6:return b;case 2:c.call(Z,L)}else switch(t){case 4:return!1;case 7:c.call(Z,L)}return f?-1:u||s?s:Z}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},1460:(t,e,n)=>{var r=n(4229),i=n(95),o=n(6358),p=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[];return(e.constructor={})[p]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},6038:(t,e,n)=>{"use strict";var r=n(4229);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},7501:(t,e,n)=>{var r=n(5052),i=n(3718),o=n(95)("species");t.exports=function(t,e){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7079:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},7081:(t,e,n)=>{var r=n(816),i=n(4826),o=n(7933),p=n(1787);t.exports=function(t,e){for(var n=i(e),a=p.f,c=o.f,u=0;u<n.length;u++){var s=n[u];r(t,s)||a(t,s,c(e,s))}}},5762:(t,e,n)=>{var r=n(7400),i=n(1787),o=n(5358);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},5358:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7400:(t,e,n)=>{var r=n(4229);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2635:(t,e,n)=>{var r=n(9859),i=n(5052),o=r.document,p=i(o)&&i(o.createElement);t.exports=function(t){return p?o.createElement(t):{}}},5694:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8801:(t,e,n)=>{var r=n(7079),i=n(9859);t.exports="process"==r(i.process)},598:(t,e,n)=>{var r=n(1333);t.exports=r("navigator","userAgent")||""},6358:(t,e,n)=>{var r,i,o=n(9859),p=n(598),a=o.process,c=a&&a.versions,u=c&&c.v8;u?i=(r=u.split("."))[0]+r[1]:p&&(!(r=p.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=p.match(/Chrome\/(\d+)/))&&(i=r[1]),t.exports=i&&+i},3837:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:(t,e,n)=>{var r=n(9859),i=n(7933).f,o=n(5762),p=n(7487),a=n(2079),c=n(7081),u=n(6541);t.exports=function(t,e){var n,s,f,m,_,d=t.target,l=t.global,y=t.stat;if(n=l?r:y?r[d]||a(d,{}):(r[d]||{}).prototype)for(s in e){if(m=e[s],f=t.noTargetGet?(_=i(n,s))&&_.value:n[s],!u(l?s:d+(y?".":"#")+s,t.forced)&&void 0!==f){if(typeof m==typeof f)continue;c(m,f)}(t.sham||f&&f.sham)&&o(m,"sham",!0),p(n,s,m,t)}}},4229:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7636:(t,e,n)=>{var r=n(3819);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},1333:(t,e,n)=>{var r=n(9276),i=n(9859),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},9859:(t,e,n)=>{var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},816:t=>{var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},5977:t=>{t.exports={}},4394:(t,e,n)=>{var r=n(7400),i=n(4229),o=n(2635);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},9337:(t,e,n)=>{var r=n(4229),i=n(7079),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},8511:(t,e,n)=>{var r=n(5353),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},6407:(t,e,n)=>{var r,i,o,p=n(8694),a=n(9859),c=n(5052),u=n(5762),s=n(816),f=n(5353),m=n(4399),_=n(5977),d=a.WeakMap;if(p){var l=f.state||(f.state=new d),y=l.get,h=l.has,L=l.set;r=function(t,e){return e.facade=t,L.call(l,t,e),e},i=function(t){return y.call(l,t)||{}},o=function(t){return h.call(l,t)}}else{var v=m("state");_[v]=!0,r=function(t,e){return e.facade=t,u(t,v,e),e},i=function(t){return s(t,v)?t[v]:{}},o=function(t){return s(t,v)}}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},3718:(t,e,n)=>{var r=n(7079);t.exports=Array.isArray||function(t){return"Array"==r(t)}},6541:(t,e,n)=>{var r=n(4229),i=/#|\.prototype\./,o=function(t,e){var n=a[p(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},p=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},5052:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},4231:t=>{t.exports=!1},3839:(t,e,n)=>{var r=n(8801),i=n(6358),o=n(4229);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!Symbol.sham&&(r?38===i:i>37&&i<41)}))},8694:(t,e,n)=>{var r=n(9859),i=n(8511),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(i(o))},6596:(t,e,n)=>{var r=n(9859),i=n(1017).trim,o=n(1647),p=r.parseInt,a=/^[+-]?0[Xx]/,c=8!==p(o+"08")||22!==p(o+"0x16");t.exports=c?function(t,e){var n=i(String(t));return p(n,e>>>0||(a.test(n)?16:10))}:p},1787:(t,e,n)=>{var r=n(7400),i=n(4394),o=n(1176),p=n(2066),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=p(e,!0),o(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7933:(t,e,n)=>{var r=n(7400),i=n(9195),o=n(5358),p=n(905),a=n(2066),c=n(816),u=n(4394),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=p(t),e=a(e,!0),u)try{return s(t,e)}catch(t){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},8151:(t,e,n)=>{var r=n(140),i=n(3837).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},894:(t,e)=>{e.f=Object.getOwnPropertySymbols},140:(t,e,n)=>{var r=n(816),i=n(905),o=n(9540).indexOf,p=n(5977);t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(p,n)&&r(a,n)&&u.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},5632:(t,e,n)=>{var r=n(140),i=n(3837);t.exports=Object.keys||function(t){return r(t,i)}},9195:(t,e)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},4826:(t,e,n)=>{var r=n(1333),i=n(8151),o=n(894),p=n(1176);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(p(t)),n=o.f;return n?e.concat(n(t)):e}},9276:(t,e,n)=>{var r=n(9859);t.exports=r},7487:(t,e,n)=>{var r=n(9859),i=n(5762),o=n(816),p=n(2079),a=n(8511),c=n(6407),u=c.get,s=c.enforce,f=String(String).split("String");(t.exports=function(t,e,n,a){var c,u=!!a&&!!a.unsafe,m=!!a&&!!a.enumerable,_=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),(c=s(n)).source||(c.source=f.join("string"==typeof e?e:""))),t!==r?(u?!_&&t[e]&&(m=!0):delete t[e],m?t[e]=n:i(t,e,n)):m?t[e]=n:p(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},8885:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},2079:(t,e,n)=>{var r=n(9859),i=n(5762);t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},4399:(t,e,n)=>{var r=n(3036),i=n(1441),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},5353:(t,e,n)=>{var r=n(9859),i=n(2079),o="__core-js_shared__",p=r[o]||i(o,{});t.exports=p},3036:(t,e,n)=>{var r=n(4231),i=n(5353);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1017:(t,e,n)=>{var r=n(8885),i="["+n(1647)+"]",o=RegExp("^"+i+i+"*"),p=RegExp(i+i+"*$"),a=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(p,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},3231:(t,e,n)=>{var r=n(6051),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},905:(t,e,n)=>{var r=n(9337),i=n(8885);t.exports=function(t){return r(i(t))}},6051:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},4237:(t,e,n)=>{var r=n(6051),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},2991:(t,e,n)=>{var r=n(8885);t.exports=function(t){return Object(r(t))}},2066:(t,e,n)=>{var r=n(5052);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},1441:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},6969:(t,e,n)=>{var r=n(3839);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},95:(t,e,n)=>{var r=n(9859),i=n(3036),o=n(816),p=n(1441),a=n(3839),c=n(6969),u=i("wks"),s=r.Symbol,f=c?s:s&&s.withoutSetter||p;t.exports=function(t){return o(u,t)&&(a||"string"==typeof u[t])||(a&&o(s,t)?u[t]=s[t]:u[t]=f("Symbol."+t)),u[t]}},1647:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},8695:(t,e,n)=>{"use strict";var r=n(3103),i=n(6570);r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},3450:(t,e,n)=>{"use strict";var r=n(3103),i=n(9996).map;r({target:"Array",proto:!0,forced:!n(1460)("map")},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},3430:(t,e,n)=>{"use strict";var r=n(3103),i=n(3819),o=n(2991),p=n(4229),a=n(6038),c=[],u=c.sort,s=p((function(){c.sort(void 0)})),f=p((function(){c.sort(null)})),m=a("sort");r({target:"Array",proto:!0,forced:s||!f||!m},{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),i(t))}})},4769:(t,e,n)=>{var r=n(3103),i=n(2991),o=n(5632);r({target:"Object",stat:!0,forced:n(4229)((function(){o(1)}))},{keys:function(t){return o(i(t))}})},8995:(t,e,n)=>{var r=n(3103),i=n(6596);r({global:!0,forced:parseInt!=i},{parseInt:i})},1939:(t,e,n)=>{var r=n(9859),i=n(5694),o=n(6570),p=n(5762);for(var a in i){var c=r[a],u=c&&c.prototype;if(u&&u.forEach!==o)try{p(u,"forEach",o)}catch(t){u.forEach=o}}},5047:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",p=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),p=new O(r||[]);return o._invoke=function(t,e,n){var r=f;return function(i,o){if(r===_)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return j()}for(n.method=i,n.arg=o;;){var p=n.delegate;if(p){var a=x(p,n);if(a){if(a===l)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=_;var c=s(t,e,n);if("normal"===c.type){if(r=n.done?d:m,c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,p),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",m="suspendedYield",_="executing",d="completed",l={};function y(){}function h(){}function L(){}var v={};v[o]=function(){return this};var T=Object.getPrototypeOf,g=T&&T(T(E([])));g&&g!==n&&r.call(g,o)&&(v=g);var S=L.prototype=y.prototype=Object.create(v);function I(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(i,o,p,a){var c=s(t[i],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,p,a)}),(function(t){n("throw",t,p,a)})):e.resolve(f).then((function(t){u.value=t,p(u)}),(function(t){return n("throw",t,p,a)}))}a(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function x(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return l;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var i=s(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,l;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,l):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function E(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,p=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return p.next=p}}return{next:j}}function j(){return{value:e,done:!0}}return h.prototype=S.constructor=L,L.constructor=h,h.displayName=c(L,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c(t,a,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},I(b.prototype),b.prototype[p]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var p=new b(u(e,n,r,i),o);return t.isGeneratorFunction(n)?p:p.next().then((function(t){return t.done?t.value:p.next()}))},I(S),c(S,a,"Generator"),S[o]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(w),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var p=this.tryEntries[o],a=p.completion;if("root"===p.tryLoc)return i("end");if(p.tryLoc<=this.prev){var c=r.call(p,"catchLoc"),u=r.call(p,"finallyLoc");if(c&&u){if(this.prev<p.catchLoc)return i(p.catchLoc,!0);if(this.prev<p.finallyLoc)return i(p.finallyLoc)}else if(c){if(this.prev<p.catchLoc)return i(p.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<p.finallyLoc)return i(p.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var p=o?o.completion:{};return p.type=t,p.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(p)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;w(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:E(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),l}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e,n,r,i,o,p){try{var a=t[o](p),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var n=this,r=arguments;return new Promise((function(i,o){var p=t.apply(n,r);function a(t){e(p,i,o,a,c,"next",t)}function c(t){e(p,i,o,a,c,"throw",t)}a(void 0)}))}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var p,a=t[Symbol.iterator]();!(r=(p=a.next()).done)&&(n.push(p.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(r),n.d(r,{default:()=>v});var c=n(7162),u=n.n(c);n(8695),n(1939),n(8995),n(3430),n(4769),n(3450);const s=require("react");var f=n.n(s);const m=require("styled-components");var _=n.n(m);const d=require("@prifina/hooks");var l=n(6618),y=_().div.withConfig({displayName:"TimeLine__Container",componentId:"gmyiam-0"})(["height:200px;font-size:14px;width:200px;padding:5px;"]),h="timelineWidget",L=function(e){var n=(0,d.usePrifina)(),r=n.onUpdate,p=n.Prifina,c=n.API,m=n.registerHooks,_=(new p({appId:h}),a((0,s.useState)({}),2)),L=_[0],v=_[1],T=function(t){var e={};t.forEach((function(t){100===parseInt(t.p_confidence)&&(e.hasOwnProperty(t.p_type)||(e[t.p_type]=0),e[t.p_type]+=1)}));for(var n=Object.keys(e).sort((function(t,n){return e[t]>e[n]?-1:e[n]>e[t]?1:0})),r={},i=0;i<Math.min(5,n.length);i++)r[n[i]]=e[n[i]];v(r)},g=function(t){t.hasOwnProperty("settings")&&"object"===o(t.settings)&&2===t.settings.length&&console.log("TIMELINE ",t.settings)};return(0,s.useEffect)(i(u().mark((function e(){var n,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(h,g),m(h,[l.Z]),n=t({},d.Op.and,{2021:t({},d.Op.eq,(0,d._fn)("YEAR","p_datetime")),2:t({},d.Op.eq,(0,d._fn)("MONTH","p_datetime")),100:t({},d.Op.eq,(0,d._fn)("CAST","p_confidence","int"))}),e.next=5,c[h].GoogleTimeline.queryActivities({filter:(0,d.buildFilter)(n)});case 5:i=e.sent,console.log("DATA ",i.data.getS3Object.content),i.data.getS3Object.content.length>0&&T(i.data.getS3Object.content);case 8:case"end":return e.stop()}}),e)}))),[]),f().createElement(y,null,f().createElement("div",null,f().createElement("div",null,"TOP 5 activities"),Object.keys(L).length>0&&f().createElement("ol",null,Object.keys(L).map((function(t,e){return f().createElement("li",{key:"act-"+e},t,"=",L[t])})))))};L.displayName="TimeLine";const v=L})();var i=exports;for(var o in r)i[o]=r[o];r.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();