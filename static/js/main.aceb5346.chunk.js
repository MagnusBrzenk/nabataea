(this.webpackJsonppetra=this.webpackJsonppetra||[]).push([[0],{39:function(e,a,t){e.exports=t(54)},44:function(e,a,t){},52:function(e,a,t){e.exports=t.p+"static/media/PSAUDI5.e3cd6e02.ttf"},53:function(e,a,t){e.exports=t.p+"static/media/PSAUDI5.8d06109d.woff"},54:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(32),l=t.n(r),o=(t(44),t(12)),s=t(70),p=t(71),c=t(15),h=t(2),g=t(36),m=t.n(g),d=t(68),u=Object(d.a)((function(e){return{container:{position:"relative",width:"100%",maxHeight:"100vh",height:"100%",margin:"auto",display:"flex",flexDirection:"column",minHeight:"100vh",overflow:"hidden","& > div.templeWrapper":{height:"auto",animation:"$introDrop",animationDuration:"1s",animationTimingFunction:"ease-in-out",animationFillMode:"forwards"}},layer0Wrapper:{},layer0:{},layer1Wrapper:{},layer1:{},layer2Wrapper:{},layer2:{},pageArena:{overflow:"scroll"},footer:{height:50,width:"100%",color:"white",backgroundColor:"#CF5530",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"},shrink:{height:250,overflow:"hidden",animation:"$shrink",animationDelay:"0s",animationDuration:L+"s",animationTimingFunction:"ease-in-out",animationFillMode:"forwards"},expand:{height:250,overflow:"hidden",animation:"$expand",animationDelay:"0s",animationDuration:L+"s",animationTimingFunction:"ease-in-out",animationFillMode:"forwards"},laserTextWrapper:{"& > div":{padding:"30px 5px"}},"@keyframes introDrop":{"0%":{marginTop:-800},"100%":{marginTop:0}},"@keyframes shrink":{"0%":{height:z},"100%":{height:0}},"@keyframes expand":{"0%":{height:0},"100%":{height:z}}}}),{name:"petra-layout"}),E=t(25),w={width:"auto",height:"auto",laserColor:"white",fontColor:"white",backgroundColor:"transparent",animationDelaySecs:0,fontSize:80,laserThicknessParam:.2,fontWeight:400},T=i.a.memo((function(e){var a=Object(E.a)(Object(E.a)({},w),e),t=function(e){var a=e.animationDurationSecs||e.text.length/2||4,t=e.width,n=e.height,i=e.animationDelaySecs,r=e.fontSize,l=e.laserThicknessParam,o=e.laserColor,s=e.fontColor,p=e.fontFamily,c=e.fontWeight,h=e.backgroundColor,g=(r||20)*(l||1);return Object(d.a)((function(e){return{container:{width:t,height:n,backgroundColor:h,display:"inline-block"},laserTextContainer:{display:"flex"},title:{width:t,position:"relative",textAlign:"center",transformStyle:"preserve-3d",whiteSpace:"pre-wrap"},writeWrapper:{"&:hover":{}},write:{width:t,overflow:"visible",display:"inline-block",color:s,transformStyle:"preserve-3d",animation:"$write linear both"},laserWrapper:{width:t,overflow:"visible",position:"absolute",top:0,left:0,bottom:0,right:0,backgroundColor:"rgba(0,255,0,0.0)",color:o,textShadow:"0 0 0.1em currentColor",transform:"translateZ(5px)",filter:"blur(4px) contrast(10)"},laser:{width:t,overflow:"visible",position:"absolute",top:0,left:0,pointerEvents:"none",animation:"$laser linear both"},text:{width:t,overflow:"visible",lineHeight:1,fontFamily:p||"sans-serif",fontWeight:c,fontSize:r,animationDuration:"".concat(a,"s"),animationDelay:"".concat(i,"s")},"@keyframes write":{"0%":{clipPath:"polygon(-".concat(g,"px -50%, 0% -50%, 0% 110%, -").concat(g,"px 110%)")},"100%":{clipPath:"polygon(0% -50%, 100% -50%, 100% 110%, 0% 110%)"}},"@keyframes laser":{"0%":{clipPath:"polygon(-".concat(g,"px 0%, 0% 0%, 0% 100%, -").concat(g,"px 100%)")},"100%":{clipPath:"polygon( 100% 0%, 100% 0%, 100% 100%, 100%  100%)"}}}}),{name:"LT-"})}(a)(),n=a.text,r="string"===typeof n?function(){return i.a.createElement(i.a.Fragment,null,n)}:n;return i.a.createElement("div",{className:t.container},i.a.createElement("div",{className:t.laserTextContainer},i.a.createElement("div",{className:t.title},i.a.createElement("div",{className:t.writeWrapper},i.a.createElement("div",{className:t.text+" "+t.write},i.a.createElement(r,null))),i.a.createElement("div",{className:t.laserWrapper},i.a.createElement("div",{className:t.text+" "+t.laser,"aria-hidden":"true"},i.a.createElement(r,null))))))})),f=t(20),b=Object(d.a)((function(e){return Object(f.a)({container:{width:"100%",height:"100%"},gridWrapper:{width:"100%",boxSizing:"border-box",padding:10,height:200,display:"grid",gridTemplateRows:"repeat(4,minmax(0px,1fr))",gridTemplateColumns:"repeat(1,minmax(0px,1fr)) repeat(2,minmax(0px,0.5fr)) repeat(1,minmax(0px,1fr))",gridTemplateAreas:"\n  'explore cinema cinema shop'\n  'explore cinema cinema shop'\n  'read read travel    travel'\n  'read read travel    travel'\n",gridGap:5,textAlign:"center",text:"center","& > div":{"& a":{textDecoration:"none",color:"white",zIndex:10},position:"relative",backgroundPosition:"center center",backgroundSize:"cover","&:after":{content:'""',width:"100%",height:"100%",position:"absolute",top:0,left:0,bottom:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.5)",transition:"background-color 0.5s ease-in-out"},"&:hover":{"&:after":{backgroundColor:"rgba(0, 0, 0, 0.8)"}},"& span":{cursor:"pointer",zIndex:10,fontWeight:"bold",position:"absolute",top:0,left:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,color:"white"}}},cinema:{gridArea:"cinema",backgroundImage:"url(https://nabataea.net/media/02cinema/SacredCity.jpg)"},travel:{gridArea:"travel",backgroundImage:"url(https://nabataea.net/media/03travel/OtherRails.jpg)"},explore:{gridArea:"explore",backgroundImage:"url(https://nabataea.net/media/01explore/HistoryMenu.jpg)"},read:{gridArea:"read",backgroundImage:"url(https://nabataea.net/media/01explore/BiblicalStudies.jpg)"},shop:{gridArea:"shop",backgroundImage:"url(https://nabataea.net/media//04shop/History1.jpg)"}},"@media (max-width: ".concat(600,"px)"),{container:{},gridWrapper:{height:250}})}),{name:"page-home"}),x=function(){var e=b();return i.a.createElement("div",{className:e.container},i.a.createElement("div",{className:e.gridWrapper},i.a.createElement("div",{className:e.explore},i.a.createElement(o.b,{to:"/explore"},i.a.createElement("span",null,"EXPLORE"))),i.a.createElement("div",{className:e.travel},i.a.createElement(o.b,{to:"/travel"},i.a.createElement("span",null,"TRAVEL"))),i.a.createElement("div",{className:e.read},i.a.createElement(o.b,{to:"/read"},i.a.createElement("span",null,"READ"))),i.a.createElement("div",{className:e.shop},i.a.createElement(o.b,{to:"/shop"},i.a.createElement("span",null,"SHOP"))),i.a.createElement("div",{className:e.cinema},i.a.createElement(o.b,{to:"/cinema"},i.a.createElement("span",null,"CINEMA")))))},v=Object(d.a)((function(e){return{container:{marginTop:10,width:"100%",height:"100%"}}}),{name:"page-explore"}),y=[{imgLink:"https://nabataea.net/media/01explore/HistoryMenu.jpg",description:"History: For over four hundred years the Nabataeans were the principle merchants of the Middle East. From their capital city of Petra they influenced the Romans, Greeks, and Egyptians, connecting them with \u2026"},{imgLink:"https://nabataea.net/media/01explore/ReligionCulture.jpg",description:"Culture and Religion: What made the Nabataean culture special? Discover their religious, political and cultural worldview."},{imgLink:"https://nabataea.net/media/01explore/TravelTrade.jpg",description:"Travel and Trade: (25 articles) Discover the exotic places the Nabataeans traded with, and the variety of products that they offered to those wealthy enough to purchase."},{imgLink:"https://nabataea.net/media/01explore/NavigationSailing.jpg",description:"Navigation and Sailing: (6 articles) The Nabataeans were at home in the deserts with their camel caravans, but they also developed their sailing skills and traded with far off countries and empires."},{imgLink:"https://nabataea.net/media/01explore/05CitiesSites/Petra.jpg",description:"Petra: The ancient Nabataean city of Petra holds many secrets. Historians are just beginning to uncover the story behind this amazing city. Today thousands of tourists visit this site and stare in awe at \u2026"}],k=function(){var e=v();return i.a.createElement("div",{className:e.container},y.map((function(e,a){return i.a.createElement("div",{key:a,style:{position:"relative",height:120,width:"100%",marginBottom:10,boxShadow:"0px 0px 10px rgba(0,0,0,0.2)",padding:10}},i.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:200,maxWidth:"40vw",height:"100%",padding:10}},i.a.createElement("img",{src:e.imgLink,width:"100%",height:"100%",alt:""})),i.a.createElement("div",{style:{position:"absolute",top:0,right:0,width:"calc( 100% - 200px - 10px )",height:"100%",minWidth:"150px",overflow:"hidden",display:"flex",textAlign:"left",alignItems:"top",justifyContent:"start",fontSize:"16px",padding:10,color:"#CF5530"}},e.description))})))},j=Object(d.a)((function(e){return{container:{width:"100%",height:"100%"}}}),{name:"page-travel"}),N=function(){var e=j();return i.a.createElement("div",{className:e.container},i.a.createElement("p",null,"This is my about page!"))},S=Object(d.a)((function(e){return{container:{width:"100%",height:"100%"}}}),{name:"page-shop"}),O=function(){var e=S();return i.a.createElement("div",{className:e.container},i.a.createElement("p",null,"This is my shop page!"))},C=Object(d.a)((function(e){return{container:{boxSizing:"border-box",width:"100%",height:"100%",textJustify:"initial"}}}),{name:"page-read"}),A=function(){var e=C();return i.a.createElement("div",{className:e.container},i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null," This is a page worth reading! "),i.a.createElement("p",null,"This is a page worth reading! "))},W=Object(d.a)((function(e){return{container:{width:"100%",height:"100%",textAlign:"center",color:"#CF5530"},fadeIn:{opacity:0,width:"100%",height:"100%",animation:"$appear",animationDuration:"0.5s",animationTimingFunction:"ease-in-out",animationFillMode:"forwards"},fadeOut:{opacity:0,width:"100%",height:"100%",animation:"$disappear",animationDuration:"0.5s",animationTimingFunction:"ease-in-out",animationFillMode:"forwards"},"@keyframes appear":{"0%":{transform:"translateY(-30px)",opacity:0},"100%":{transform:"translateY(0px)",opacity:1}},"@keyframes disappear":{"0%":{transform:"translateY(0px)",opacity:1},"100%":{transform:"translateY(-30px)",opacity:0}}}}),{name:"page-wrapper"}),P=i.a.memo((function(e){var a=e.title,t=e.Page,n=e.isAppearing,r=W();return i.a.createElement("div",{className:r.container},i.a.createElement("div",{className:n?r.fadeIn:r.fadeOut,style:{width:"100%"}},i.a.createElement("h6",{style:{margin:"0px 0px 0px 0px",fontFamily:"sans-serif"}},a),i.a.createElement(t,null)))})),D=Object(d.a)((function(e){return{container:{boxSizing:"border-box",width:"100%",height:"100%",textJustify:"initial"}}}),{name:"page-cinema"}),F=function(){var e=D();return i.a.createElement("div",{className:e.container})},I=[{label:function(){return i.a.createElement(m.a,{style:{transform:"translateY(5px)"}})},link:"/"},{label:"EXPLORE",link:"/explore"},{label:"CINEMA",link:"/cinema"},{label:"TRAVEL",link:"/travel"},{label:"SHOP",link:"/shop"},{label:"READ",link:"/read"}],z=150,L=.5,R=1+I.length*L,M=function(){var e=u(),a=Object(h.f)(),t=Object(n.useState)(!1),r=Object(c.a)(t,2),l=r[0],o=r[1],s=Object(n.useState)(!1),p=Object(c.a)(s,2),g=p[0],m=p[1],d=Object(n.useState)(!1),E=Object(c.a)(d,2),w=E[0],f=E[1],b=Object(n.useState)(0),v=Object(c.a)(b,2),y=v[0],j=v[1],S=Object(h.g)().pathname;return Object(n.useEffect)((function(){setTimeout((function(){console.log("collapseDelay",R),o("/"!==S),f(!0),m(!0)}),1e3*R)}),[]),Object(n.useEffect)((function(){setTimeout((function(){o("/"!==S),m(!0)}),500)}),[S]),i.a.createElement("div",{className:e.container,style:{maxWidth:800}},i.a.createElement("div",{className:"templeWrapper",style:{width:l?"800px":"450px",maxWidth:"100vw",marginLeft:"auto",marginRight:"auto",transition:"width 0.5s ease-in-out"}},i.a.createElement("div",{className:e.layer0Wrapper+" "+(l?e.shrink:e.expand),style:{width:"100%"}},i.a.createElement("div",{className:e.layer0,style:{width:"100%",height:z,backgroundImage:"url(images/".concat(H(0),".png)"),backgroundSize:"100% 100%",backgroundPosition:"center"}})),i.a.createElement("div",{className:e.layer1Wrapper,style:{position:"relative"}},i.a.createElement("div",{className:e.layer1,style:{width:"100%",height:100,backgroundImage:"url(images/".concat(H(1),".png)"),backgroundSize:"100% 100%",backgroundPosition:"center",backgroundColor:"transparent"}}),i.a.createElement("div",{className:e.laserTextWrapper,style:{position:"absolute",top:30,left:8}},I.map((function(e,t){return i.a.createElement("span",{key:t,onClick:function(){return n=e.link,j(i=t),o(!1),m(!1),void setTimeout((function(){a.push(n),o(0!==i),m(!0)}),"/"===S?10:1e3);var n,i},style:{marginLeft:10,border:y===t?"1px solid rgba(255,255,255,0.3)":""}},i.a.createElement(T,{text:e.label,fontSize:14,fontWeight:800,fontColor:"white",animationDelaySecs:1+.5*t,animationDurationSecs:L}))})))),i.a.createElement("div",{className:e.layer2Wrapper+" "+(l?e.shrink:e.expand),style:{width:"100%",maxWidth:5e3}},i.a.createElement("div",{className:e.layer2,style:{width:"100%",height:z,backgroundImage:"url(images/".concat(H(2),".png)"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}))),i.a.createElement("div",{className:e.pageArena,style:{width:"100%",backgroundColor:"white",boxShadow:"4px 0px 4px rgba(0,0,0,0.1), -4px 0px 4px rgba(0,0,0,0.1)",border:"5px solid #EE7547",boxSizing:"border-box",padding:20,color:"black",flex:1,maxHeight:"calc( 100vh - 100px - 50px)"}},w&&i.a.createElement(h.c,null,i.a.createElement(h.a,{exact:!0,path:"/"},i.a.createElement(P,{title:"WELCOME",Page:x,isAppearing:g})),i.a.createElement(h.a,{exact:!0,path:"/explore"},i.a.createElement(P,{title:"EXPLORE",Page:k,isAppearing:g})),i.a.createElement(h.a,{path:"/travel"},i.a.createElement(P,{title:"TRAVEL",Page:N,isAppearing:g})),i.a.createElement(h.a,{path:"/cinema"},i.a.createElement(P,{title:"CINEMA",Page:F,isAppearing:g})),i.a.createElement(h.a,{path:"/shop"},i.a.createElement(P,{title:"SHOP",Page:O,isAppearing:g})),i.a.createElement(h.a,{path:"/read"},i.a.createElement(P,{title:"READ",Page:A,isAppearing:g})))),i.a.createElement("div",{className:e.footer},"This is a Footer"))};function H(e){return"layer".concat(e,"_v1")}var $=t(37),B=(Object($.a)({palette:{type:"dark",background:{default:"black"}}}),Object($.a)({palette:{type:"light"}})),Y=(Object($.a)({palette:{type:"dark",primary:{main:"#375a7f"},secondary:{main:"#444"},error:{main:"#E74C3C"},background:{default:"black"}}}),Object($.a)({palette:{type:"dark",primary:{main:"#DF691A"},secondary:{main:"#4E5D6C"},error:{main:"#d9534f"},background:{default:"#2B3E50"}}}),B),J=Object(d.a)((function(e){return{container:{width:"100%",height:"100%",boxShadow:"10px 10px  10px rgba(0,0,0,0.4)",backgrounColor:"cyan"}}}),{name:"app"}),V=function(){var e=J();return i.a.createElement("div",{className:e.container},i.a.createElement(s.a,{theme:Y},i.a.createElement(p.a,null),i.a.createElement(o.a,{basename:"/nabataea/"},i.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(52),t(53);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.aceb5346.chunk.js.map