_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"30+C":function(t,e,n){"use strict";var a=n("wx14"),i=n("Ff2n"),r=n("q1tI"),o=(n("17x9"),n("iuhU")),c=n("kKAo"),s=n("H2TA"),l=r.forwardRef((function(t,e){var n=t.classes,s=t.className,l=t.raised,d=void 0!==l&&l,u=Object(i.a)(t,["classes","className","raised"]);return r.createElement(c.a,Object(a.a)({className:Object(o.a)(n.root,s),elevation:d?8:1,ref:e},u))}));e.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},"5CWz":function(t,e,n){"use strict";var a=n("wx14"),i=n("q1tI"),r=(n("17x9"),n("H2TA")),o={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},c=function(t){return Object(a.a)({color:t.palette.text.primary},t.typography.body2,{backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white}})};e.a=Object(r.a)((function(t){return{"@global":{html:o,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:Object(a.a)({margin:0},c(t),{"&::backdrop":{backgroundColor:t.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(t){var e=t.children,n=void 0===e?null:e;return t.classes,i.createElement(i.Fragment,null,n)}))},H0SL:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},cMU6:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),i=n.n(a),r=n("5CWz"),o=n("Ji2X"),c=n("hlFM"),s=n("ofer"),l=n("tRbT"),d=n("R/WZ"),u=n("Cgje"),f=n("30+C"),g=n("oa/T"),x=n("AesL"),m=i.a.createElement,p=Object(d.a)({card:{display:"flex"},cardDetails:{flex:1}}),b=function(t){var e=t.post,n=p();return m(l.a,{item:!0,xs:12,md:6},m(x.a,{href:e.path},m(f.a,{className:n.card},m("div",{className:n.cardDetails},m(g.a,null,m(s.a,{component:"h2",variant:"h5"},e.title),m(s.a,{variant:"subtitle1",color:"textSecondary"},e.publishedAt),m(s.a,{variant:"subtitle1",paragraph:!0},e.summary),m(s.a,{variant:"subtitle1",color:"primary"},"Continue reading..."))))))},v=n("WMdh"),h=n.n(v),w=n("naWs"),y=i.a.createElement,j=Object(d.a)({container:{minHeight:"80vh",marginTop:"10vh"}});e.default=function(){var t=j();return y(i.a.Fragment,null,y(r.a,null),y(u.a,null),y(o.a,{maxWidth:"lg",className:t.container},y(c.a,{my:4,display:"flex",justifyContent:"center"},y(s.a,{variant:"h4",component:"h1",gutterBottom:!0},"Last posts")),y(l.a,{container:!0,spacing:4},h.a.map((function(t){return y(b,{key:t.title,post:t})})))),y(w.a,{title:"My Blog",description:"Hi there, this is my blog!"}))}},"oa/T":function(t,e,n){"use strict";var a=n("wx14"),i=n("Ff2n"),r=n("q1tI"),o=(n("17x9"),n("iuhU")),c=n("H2TA"),s=r.forwardRef((function(t,e){var n=t.classes,c=t.className,s=t.component,l=void 0===s?"div":s,d=Object(i.a)(t,["classes","className","component"]);return r.createElement(l,Object(a.a)({className:Object(o.a)(n.root,c),ref:e},d))}));e.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},tRbT:function(t,e,n){"use strict";var a=n("Ff2n"),i=n("wx14"),r=n("q1tI"),o=(n("17x9"),n("iuhU")),c=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var u=r.forwardRef((function(t,e){var n=t.alignContent,c=void 0===n?"stretch":n,s=t.alignItems,l=void 0===s?"stretch":s,d=t.classes,u=t.className,f=t.component,g=void 0===f?"div":f,x=t.container,m=void 0!==x&&x,p=t.direction,b=void 0===p?"row":p,v=t.item,h=void 0!==v&&v,w=t.justify,y=void 0===w?"flex-start":w,j=t.lg,C=void 0!==j&&j,S=t.md,O=void 0!==S&&S,W=t.sm,N=void 0!==W&&W,M=t.spacing,k=void 0===M?0:M,E=t.wrap,_=void 0===E?"wrap":E,z=t.xl,I=void 0!==z&&z,T=t.xs,F=void 0!==T&&T,B=t.zeroMinWidth,H=void 0!==B&&B,A=Object(a.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=Object(o.a)(d.root,u,m&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],h&&d.item,H&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==_&&d["wrap-xs-".concat(String(_))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==y&&d["justify-xs-".concat(String(y))],!1!==F&&d["grid-xs-".concat(String(F))],!1!==N&&d["grid-sm-".concat(String(N))],!1!==O&&d["grid-md-".concat(String(O))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==I&&d["grid-xl-".concat(String(I))]);return r.createElement(g,Object(i.a)({className:R,ref:e},A))})),f=Object(c.a)((function(t){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return s.forEach((function(a){var i=t.spacing(a);0!==i&&(n["spacing-".concat(e,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var a={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var i="".concat(Math.round(t/12*1e8)/1e6,"%");a[e]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(t,a):t[e.breakpoints.up(n)]=a}(e,t,n),e}),{}))}),{name:"MuiGrid"})(u);e.a=f}},[["H0SL",0,2,1,3,4]]]);