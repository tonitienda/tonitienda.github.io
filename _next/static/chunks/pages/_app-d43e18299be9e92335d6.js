_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(f.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},f=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,f=e.hasQuery,o=void 0!==f&&f;return n||a&&o}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),f=n("8Kt/"),o=n.n(f),c=n("wx14"),u=(n("17x9"),n("OKji")),i=n("aXM8"),d=n("hfi/");var l=function(e){var t=e.children,n=e.theme,r=Object(i.a)(),f=a.a.useMemo((function(){var e=null===r?n:function(e,t){return"function"===typeof t?t(e):Object(c.a)(Object(c.a)({},e),t)}(r,n);return null!=e&&(e[d.a]=null!==r),e}),[n,r]);return a.a.createElement(u.a.Provider,{value:f},t)},s=n("5CWz"),p=n("viY9"),b=n("TTf+"),h="#FFFFFF",m=Object(p.a)({palette:{black:"#000000",white:h,primary:{contrastText:h,dark:"#00766c",main:"#26a69a",light:"#64d8cb"},secondary:{contrastText:h,dark:"#0077c2",main:"#42a5f5",light:"#80d6ff"},success:{contrastText:h,dark:b.a.green[900],main:b.a.green[600],light:b.a.green[400]},info:{contrastText:h,dark:b.a.blue[900],main:b.a.blue[600],light:b.a.blue[400]},warning:{contrastText:h,dark:b.a.orange[900],main:b.a.orange[600],light:b.a.orange[400]},error:{contrastText:h,dark:b.a.red[900],main:b.a.red[600],light:b.a.red[400]},text:{primary:b.a.blueGrey[900],secondary:b.a.blueGrey[600],link:b.a.blue[600]},background:{default:"#F4F6F8",paper:h},icon:b.a.blueGrey[600],divider:b.a.grey[200]}}),y=a.a.createElement;t.default=function(e){var t=e.Component,n=e.pageProps;return Object(r.useEffect)((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),y(a.a.Fragment,null,y(o.a,null,y("title",null,"Tsoobame Blog"),y("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})),y(l,{theme:m},y(s.a,null),y(t,n)))}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5CWz":function(e,t,n){"use strict";var r=n("wx14"),a=n("q1tI"),f=(n("17x9"),n("H2TA")),o={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},c=function(e){return Object(r.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(f.a)((function(e){return{"@global":{html:o,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(r.a)({margin:0},c(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,a.createElement(a.Fragment,null,n)}))},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var f=r?Object.getOwnPropertyDescriptor(e,a):null;f&&(f.get||f.set)?Object.defineProperty(n,a,f):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),f=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),c=n("FYa8"),u=n("/0+H");function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var f=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?f=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?f=!1:t.add(a.type);break;case"meta":for(var c=0,u=s.length;c<u;c++){var i=s[c];if(a.props.hasOwnProperty(i))if("charSet"===i)n.has(i)?f=!1:n.add(i);else{var d=a.props[i],l=r[i]||new Set;l.has(d)?f=!1:(l.add(d),r[i]=l)}}}return f}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(f.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}b.rewind=function(){};var h=b;t.default=h},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"TTf+":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={};n.r(r),n.d(r,"common",(function(){return a.a})),n.d(r,"red",(function(){return f.a})),n.d(r,"pink",(function(){return o.a})),n.d(r,"purple",(function(){return c})),n.d(r,"deepPurple",(function(){return u})),n.d(r,"indigo",(function(){return i.a})),n.d(r,"blue",(function(){return d.a})),n.d(r,"lightBlue",(function(){return l})),n.d(r,"cyan",(function(){return s})),n.d(r,"teal",(function(){return p})),n.d(r,"green",(function(){return b.a})),n.d(r,"lightGreen",(function(){return h})),n.d(r,"lime",(function(){return m})),n.d(r,"yellow",(function(){return y})),n.d(r,"amber",(function(){return v})),n.d(r,"orange",(function(){return g.a})),n.d(r,"deepOrange",(function(){return A})),n.d(r,"brown",(function(){return w})),n.d(r,"grey",(function(){return x.a})),n.d(r,"blueGrey",(function(){return _}));var a=n("XVSz"),f=n("dl/7"),o=n("nXt3"),c={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},u={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},i=n("rwtN"),d=n("edxh"),l={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},s={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"},p={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5"},b=n("6yBS"),h={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17"},m={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00"},y={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"},v={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"},g=n("Yb7a"),A={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},w={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037"},x=n("LXXt"),_={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),f=n("i2R6"),o=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){o(n,e);var t=i(n);function n(e){var f;return a(this,n),(f=t.call(this,e))._hasHeadManager=void 0,f.emitChange=function(){f._hasHeadManager&&f.props.headManager.updateHead(f.props.reduceComponentsToState(r(f.props.headManager.mountedInstances),f.props))},f._hasHeadManager=f.props.headManager&&f.props.headManager.mountedInstances,f}return f(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),f=n("KckH"),o=n("kG2m");e.exports=function(e){return r(e)||a(e)||f(e)||o()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),a=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}}},[[0,0,2,1,3]]]);