(this["webpackJsonpmarlin-anlaytics-data-brightlystake.com"]=this["webpackJsonpmarlin-anlaytics-data-brightlystake.com"]||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},127:function(e,a,t){},238:function(e,a,t){},239:function(e,a,t){},240:function(e,a,t){},241:function(e,a,t){},243:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),l=t(27),n=t.n(l),i=(t(101),t(248)),d=t(249),r=t.p+"static/media/Brightlystake.33d81d98.svg",j=(t(102),t(0));var o=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container cntt",style:{padding:"0px",maxWidth:"90%"},children:Object(j.jsxs)("div",{className:"pading",children:[Object(j.jsx)("div",{className:"bordr",children:Object(j.jsxs)(i.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",style:{padding:"0px"},children:[Object(j.jsx)("div",{children:Object(j.jsxs)(i.a.Brand,{children:[Object(j.jsx)("img",{alt:"2",className:"img_one",src:r})," ",Object(j.jsx)("span",{className:"relay",children:Object(j.jsx)("a",{href:"https://Brightlystake.com",style:{textDecoration:"none"},children:"Brightlystake.com"})})," "]})}),Object(j.jsx)(i.a.Toggle,{className:"toggle","aria-controls":"responsive-navbar-nav"}),Object(j.jsxs)(i.a.Collapse,{id:"responsive-navbar-nav",children:[Object(j.jsx)(d.a,{className:"mr-auto"}),Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Link,{href:"/marlin/Dashboard",className:"dashboard",children:"Dashboard"}),Object(j.jsx)(d.a.Link,{href:"https://app.marlin.pro/relay/operator",className:"dashboard",children:"Operators"}),Object(j.jsx)(d.a.Link,{href:"https://app.marlin.pro/relay/operator/register",className:"dashboard",children:"Register"}),Object(j.jsx)(d.a.Link,{href:"https://app.marlin.pro/relay/stash",className:"dashboard",children:"Delegate"})]})]})]})}),Object(j.jsx)("hr",{className:"hr"})]})})})},h=t(3),b=t(10),x=t.n(b),O=t(245),m=t(246),u=t(7),p=t(8),g=t.n(p),f=t.p+"static/media/Card1-logo.48908d55.svg",N=t.p+"static/media/Card2-logo.a4c55ba4.svg",v=t.p+"static/media/Card3-logo.70a91f62.svg",A=t.p+"static/media/Card4-logo.c9ae5052.svg",y=t.p+"static/media/Card5-logo.6667611d.svg",k=t.p+"static/media/Card6-logo.77932640.svg",S=t.p+"static/media/Rank.e20c03db.svg",M=t.p+"static/media/Stats.6f51fffe.svg";t(127),t(70);var D=function(){var e=Object(c.useState)([]),a=Object(h.a)(e,2),t=a[0],s=a[1],l=Object(c.useState)([]),n=Object(h.a)(l,2),i=n[0],d=n[1],r=Object(c.useState)([]),o=Object(h.a)(r,2),b=o[0],p=o[1],D=Object(u.f)();return Object(c.useEffect)((function(){g.a.get("https://brightlystake.com/api/marlin/getStakingDetails/"+D.clusterId).then((function(e){try{e.data.data[0].MPOND,console.log("Present"),s(e.data.data[0])}catch(a){e.data.data[0].MPOND=0}})).catch((function(e){console.log(e)})),g.a.get("https://brightlystake.com/api/marlin/overallStats/"+D.clusterId).then((function(e){d(e.data.data[0])})).catch((function(e){console.log(e)})),g.a.get("https://brightlystake.com/api/marlin/todaysStats/"+D.clusterId).then((function(e){p(e.data.data[0])})).catch((function(e){console.log(e)}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container mnn",children:[Object(j.jsxs)("div",{className:"cards-title",children:["Stats Summary as of ",x()(t.time).format("LL")," ",x()(t.time).format("LTS")," UTC"]}),Object(j.jsxs)(O.a,{className:"cardsWrapper",children:[Object(j.jsx)(m.a,{lg:4,md:6,sm:12,xs:12,className:"caaar",children:Object(j.jsxs)("div",{className:"card-2",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between",style:{padding:"42px"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"card-name_one",children:"Total Staked (in POND)"}),Object(j.jsx)("div",{className:"card-number",children:Math.ceil(t.MPOND/1e18*1e6+t.POND/1e18).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:y,className:"ellipse"})})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:S})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("span",{className:"card-datee",children:Math.ceil(t.POND/1e18).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(j.jsx)("span",{className:"Rank",children:"POND"})]})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:S})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("span",{className:"card-datee",children:(t.MPOND/1e18).toFixed(2)}),Object(j.jsx)("span",{className:"Rank",children:"MPond (1 MPond = 1M POND)"})]})]})]})}),Object(j.jsx)(m.a,{xl:4,lg:4,md:6,sm:12,xs:12,className:"caaar",children:Object(j.jsxs)("div",{className:"card-2",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between",style:{padding:"42px"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"card-name_one",children:"Average POND APR "}),Object(j.jsxs)("div",{className:"card-number",children:[i.POND_APY,"%"]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:N,className:"ellipse"})})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:S})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("span",{className:"card-datee",children:[" ",Math.ceil(i.POND_Rank),Object(j.jsxs)("a",{className:"shaded",style:{textDecoration:"none"},children:["/ ",i.POND_MAX]})]}),Object(j.jsx)("span",{className:"Rank",children:"Rank"})]})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:M})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("span",{className:"card-datee",children:[b.POND_APY,"%",Object(j.jsxs)("a",{className:"shaded",style:{textDecoration:"none"},children:["- ",Math.ceil(b.POND_Rank)]})]}),Object(j.jsx)("span",{className:"Rank",children:"Today's APR - Rank"})]})]})]})}),Object(j.jsx)(m.a,{lg:4,md:6,sm:12,xs:12,className:"caaar",children:Object(j.jsxs)("div",{className:"card-2",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between",style:{padding:"42px"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"card-name_one",children:"Average MPond APR"}),Object(j.jsxs)("div",{className:"card-number",children:[i.MPOND_APY,"%"]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:v,className:"ellipse"})})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:S})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("span",{className:"card-datee",children:[" ",Math.ceil(i.MPOND_Rank),Object(j.jsxs)("a",{className:"shaded",style:{textDecoration:"none"},children:["/ ",i.MPOND_MAX]})]}),Object(j.jsx)("span",{className:"Rank",children:"Rank"})]})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:M})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("span",{className:"card-datee",children:[b.MPOND_APY,"%",Object(j.jsxs)("a",{className:"shaded",style:{textDecoration:"none"},children:["- ",Math.ceil(b.MPOND_Rank)]})]}),Object(j.jsx)("span",{className:"Rank",children:"Today's APR - Rank"})]})]})]})}),Object(j.jsx)(m.a,{xl:4,lg:4,md:6,sm:12,xs:12,className:"caaar",children:Object(j.jsxs)("div",{className:"card-2",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between",style:{padding:"42px"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"card-name_one",children:"Tickets Average"}),Object(j.jsx)("div",{className:"card-number",children:i.TICKETS})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:f,className:"ellipse"})})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:S})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("span",{className:"card-datee",children:[" ",Math.ceil(i.TICKETS_Rank),Object(j.jsxs)("a",{className:"shaded",style:{textDecoration:"none"},children:["/ ",i.TICKETS_MAX]})]}),Object(j.jsx)("span",{className:"Rank",children:"Rank"})]})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:M})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("span",{className:"card-datee",children:[b.TICKETS,Object(j.jsxs)("a",{className:"shaded",style:{textDecoration:"none"},children:["- ",Math.ceil(b.TICKETS_Rank)]})]}),Object(j.jsx)("span",{className:"Rank",children:" Today's tickets avg - Rank"})]})]})]})}),Object(j.jsx)(m.a,{lg:4,md:6,sm:12,xs:12,className:"caaar",children:Object(j.jsxs)("div",{className:"card-2",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between",style:{padding:"42px"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"card-name_one",children:"Latency Score Avg"}),Object(j.jsx)("div",{className:"card-number",children:i.LATENCY_SCORE})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:A,className:"ellipse"})})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:S})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("span",{className:"card-datee",children:[" ",Math.ceil(i.LATENCY_SCORE_Rank),Object(j.jsxs)("a",{className:"shaded",style:{textDecoration:"none"},children:["/ ",i.LATENCY_SCORE_MAX]})]}),Object(j.jsx)("span",{className:"Rank",children:"Rank"})]})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:M})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("span",{className:"card-datee",children:[b.LATENCY_SCORE,Object(j.jsxs)("a",{className:"shaded",style:{textDecoration:"none"},children:["- ",Math.ceil(b.LATENCY_SCORE_Rank)]})]}),Object(j.jsx)("span",{className:"Rank",children:"Today's latency avg - Rank"})]})]})]})}),Object(j.jsx)(m.a,{lg:4,md:6,sm:12,xs:12,className:"caaar",children:Object(j.jsxs)("div",{className:"card-2",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between",style:{padding:"42px"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"card-name_one",children:"Fees"}),Object(j.jsxs)("div",{className:"card-number",children:[i.fees,"%"]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:k,className:"ellipse"})})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:S})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("span",{className:"card-datee",children:[" ",Math.ceil(i.POND_APY/100*(1e6/365)*((100-i.fees)/100))," ","POND",Object(j.jsx)("a",{className:"shaded",style:{textDecoration:"none"},children:"/day"})]}),Object(j.jsx)("span",{className:"Rank",children:" Stake 1,000,000 POND"})]})]}),Object(j.jsxs)("div",{className:"d-flex flex-row",style:{padding:"42px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"2",src:M})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("span",{className:"card-datee",children:[Math.ceil(i.MPOND_APY/100*(1e6/365)*((100-i.fees)/100))," ","POND",Object(j.jsx)("a",{className:"shaded",style:{textDecoration:"none"},children:"/day"})]}),Object(j.jsx)("span",{className:"Rank",children:" Stake 1 MPond"})]})]})]})})]})]})})},R=t(41),C=t(247);var P=function(){var e=Object(c.useState)([]),a=Object(h.a)(e,2),t=a[0],s=a[1],l=Object(c.useState)([]),n=Object(h.a)(l,2),i=n[0],d=n[1],r=Object(c.useState)([]),o=Object(h.a)(r,2),b=o[0],O=o[1],m=Object(c.useState)(!0),p=Object(h.a)(m,2),f=p[0],N=p[1],v=Object(c.useState)(!0),A=Object(h.a)(v,2),y=A[0],k=A[1],S=Object(c.useState)(!0),M=Object(h.a)(S,2),D=M[0],P=M[1],w=Object(c.useState)([]),E=Object(h.a)(w,2),Y=E[0],I=E[1],T=Object(c.useState)([]),B=Object(h.a)(T,2),H=B[0],L=B[1],U=Object(u.f)();Object(c.useEffect)((function(){g.a.get("https://brightlystake.com/api/marlin/5minStats/"+U.clusterId+"?count=2016").then((function(e){s(e.data.data);var a=0!==e.data.data.length?e.data.data.reduce((function(e,a){return e.time>a.time?e:a})):null,t=x.a.duration("24:00:00"),c=x.a.duration("168:00:00"),l=x()(a.time),n=l.subtract(t).format("YYYY-MM-DD HH:MM:SS"),i=l.subtract(c).format("YYYY-MM-DD HH:MM:SS"),r=e.data.data.filter((function(e){return e.time>n})),j=e.data.data.filter((function(e){return e.time>i}));d(j),O(r)})).catch((function(e){console.log(e)}))}),[]),Object(c.useEffect)((function(){var e,a=null===(e=document.getElementById("chart"))||void 0===e?void 0:e.getContext("2d"),t=null===a||void 0===a?void 0:a.createLinearGradient(0,0,0,400);t&&(t.addColorStop(0,"rgba(56, 64, 199, 0.6)"),t.addColorStop(1,"rgba(56, 64, 199, 0)"));var c=null===a||void 0===a?void 0:a.createLinearGradient(0,0,0,400);c&&(c.addColorStop(0,"rgba(54, 207, 217, 0.6)"),c.addColorStop(1,"rgba(67, 211, 220, 0)")),t&&I(t),c&&L(c)}),[b]);var _=[],W=[],F=[];return f?b.map((function(e){_.push(e.latencyScore),W.push(x()(e.time).format("MMM D  HH:mm")),F.push(e.tickets)})):i.map((function(e){_.push(e.latencyScore),W.push(x()(e.time).format("MMM D  HH:mm")),F.push(e.tickets)})),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container cntt",style:{maxWidth:"90%",marginTop:"24px",padding:"0px"},children:Object(j.jsxs)("div",{className:"crd",children:[Object(j.jsxs)("div",{className:"row padng",children:[Object(j.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12",children:Object(j.jsxs)("h3",{className:"head",children:[f?"24 Hour ":"7 Days ",D?y?"Latency Score and Tickets Graph":"Ticket Graph":y?"Latency Graph":"No Selection"]})}),Object(j.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12 col-xs-12 right",children:Object(j.jsx)("h3",{className:"chart-heading-right",style:{float:"right"},children:Object(j.jsx)("div",{className:"d-flex right",children:Object(j.jsxs)(C.a,{className:"btngroup",children:[Object(j.jsx)("div",{id:"hight",className:f?"chart-btn-activ":"chart-btn-disabl",onClick:function(){return N(!0)},children:Object(j.jsx)("span",{className:"hors",children:" 24HR "})}),Object(j.jsx)("div",{id:"high",className:f?"chart-btn-disabl":"chart-btn-activ",onClick:function(){return N(!1)},children:Object(j.jsx)("span",{className:"day",children:"7D"})})]})})})})]}),Object(j.jsx)("div",{children:0!==t.length?Object(j.jsx)(R.a,{id:"chart",height:300,width:1900,data:{labels:W.reverse(),datasets:[{borderWidth:2,label:"LatencyScore",fill:!0,borderColor:"#07AEC4",backgroundColor:H,data:y?_.reverse():null,pointRadius:.1},{borderWidth:2,label:"Tickets",fill:!0,borderColor:"#3840C7",backgroundColor:Y,data:D?F.reverse():null,pointRadius:.1}]},options:{layout:{padding:30},plugins:{legend:{display:!1}},cornerRadius:20,responsive:!0,maintainAspectRatio:!1,scales:{x:{ticks:{font:{size:11}},grid:{lineWidth:0},barPercentage:.7},y:{ticks:{font:{size:11}},type:"linear",position:"right",grid:{display:!1}}},elements:{point:{radius:0}}}}):""}),Object(j.jsxs)("div",{className:"d-flex row roww",children:[Object(j.jsxs)("div",{className:"ml-5 d-flex",children:[Object(j.jsx)("input",{type:"checkbox",checked:y,className:"regular-checkbox big-checkbox ml-4",onClick:function(){k(!y)}}),Object(j.jsx)("span",{className:"latency",children:" Latency Score"})]}),Object(j.jsxs)("div",{className:"ml-4  d-flex",children:[Object(j.jsx)("input",{type:"checkbox",className:"regular-checkbo big-checkbox",checked:D,onClick:function(){P(!D)}}),Object(j.jsx)("span",{className:"latency",children:"Tickets"})]})]})]})})})};t(238);var w=function(){var e=Object(c.useState)([]),a=Object(h.a)(e,2),t=a[0],s=a[1],l=Object(c.useState)([]),n=Object(h.a)(l,2),i=n[0],d=n[1],r=Object(c.useState)([]),o=Object(h.a)(r,2),b=o[0],O=o[1],m=Object(c.useState)([]),p=Object(h.a)(m,2),f=(p[0],p[1]),N=Object(c.useState)(!0),v=Object(h.a)(N,2),A=v[0],y=v[1],k=Object(c.useState)(!0),S=Object(h.a)(k,2),M=S[0],D=S[1],P=Object(c.useState)(!0),w=Object(h.a)(P,2),E=w[0],Y=w[1],I=Object(c.useState)([]),T=Object(h.a)(I,2),B=T[0],H=T[1],L=Object(c.useState)([]),U=Object(h.a)(L,2),_=U[0],W=U[1],F=Object(u.f)();Object(c.useEffect)((function(){g.a.get("https://brightlystake.com/api/marlin/5minStats/"+F.clusterId+"?count=2016").then((function(e){s(e.data.data);var a=0!==e.data.data.length?e.data.data.reduce((function(e,a){return e.time>a.time?e:a})):null,t=x.a.duration("24:00:00"),c=x.a.duration("168:00:00"),l=x.a.duration("720:00:00"),n=x()(a.time),i=n.subtract(t).format("YYYY-MM-DD HH:MM:SS"),r=n.subtract(c).format("YYYY-MM-DD HH:MM:SS"),j=n.subtract(l).format("YYYY-MM-DD HH:MM:SS"),o=e.data.data.filter((function(e){return e.time>i})),h=e.data.data.filter((function(e){return e.time>r})),b=e.data.data.filter((function(e){return e.time>j}));d(h),O(o),f(b)})).catch((function(e){console.log(e)}))}),[]),Object(c.useEffect)((function(){var e,a=null===(e=document.getElementById("chart"))||void 0===e?void 0:e.getContext("2d"),t=null===a||void 0===a?void 0:a.createLinearGradient(0,0,0,400);t&&(t.addColorStop(0,"rgba(56, 64, 199, 0.6)"),t.addColorStop(1,"rgba(56, 64, 199, 0)"));var c=null===a||void 0===a?void 0:a.createLinearGradient(0,0,0,400);c&&(c.addColorStop(0,"rgba(54, 207, 217, 0.6)"),c.addColorStop(1,"rgba(67, 211, 220, 0)")),t&&H(t),c&&W(c)}),[b]);var Q=[],J=[],G=[];return A?b.map((function(e){Q.push(e.POND),J.push(x()(e.time).format("MMM D  HH:mm")),G.push(e.MPOND)})):i.map((function(e){Q.push(e.POND),J.push(x()(e.time).format("MMM D  HH:mm")),G.push(e.MPOND)})),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container cntt",style:{maxWidth:"90%",marginTop:"120px",padding:"0px"},children:Object(j.jsxs)("div",{className:"crd",children:[Object(j.jsxs)("div",{className:"row padng",children:[Object(j.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12",children:Object(j.jsxs)("h3",{className:"head",children:[A?"24 Hour ":"7 Days ",E?M?"POND and MPond APR Graph":"MPond APR Graph":M?"POND APR Graph":"No Selection"]})}),Object(j.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12 col-xs-12 right",children:Object(j.jsx)("h3",{className:"chart-heading-right",style:{float:"right"},children:Object(j.jsx)("div",{className:"d-flex right",children:Object(j.jsxs)(C.a,{className:"btngroup",children:[Object(j.jsx)("div",{id:"hight",className:A?"chart-btn-activ":"chart-btn-disabl",onClick:function(){return y(!0)},children:Object(j.jsx)("span",{className:"hors",children:" 24HR "})}),Object(j.jsx)("div",{id:"high",className:A?"chart-btn-disabl":"chart-btn-activ",onClick:function(){return y(!1)},children:Object(j.jsx)("span",{className:"day",children:"7D"})})]})})})})]}),Object(j.jsx)("div",{children:0!==t.length?Object(j.jsx)(R.a,{id:"chart",height:300,width:1900,data:{labels:J.reverse(),datasets:[{borderWidth:2,label:"POND APR",fill:!0,borderColor:"#07AEC4",backgroundColor:_,data:M?Q.reverse():null,pointRadius:.1},{borderWidth:2,label:"MPond APR",fill:!0,borderColor:"#3840C7",backgroundColor:B,data:E?G.reverse():null,pointRadius:.1}]},options:{layout:{padding:30},plugins:{legend:{display:!1}},cornerRadius:20,responsive:!0,maintainAspectRatio:!1,scales:{x:{ticks:{font:{size:11}},grid:{lineWidth:0},barPercentage:.7},y:{ticks:{font:{size:11}},type:"linear",position:"right",grid:{display:!1}}},elements:{point:{radius:0}}}}):""}),Object(j.jsxs)("div",{className:"d-flex row roww",children:[Object(j.jsxs)("div",{className:"ml-5 d-flex",children:[Object(j.jsx)("input",{type:"checkbox",checked:M,className:"regular-checkbox big-checkbox ml-4",onClick:function(){D(!M)}}),Object(j.jsx)("span",{className:"latency",children:" POND "})]}),Object(j.jsxs)("div",{className:"ml-4  d-flex",children:[Object(j.jsx)("input",{type:"checkbox",className:"regular-checkbo big-checkbox",checked:E,onClick:function(){Y(!E)}}),Object(j.jsx)("span",{className:"latency",children:"MPond"})]})]})]})})})};t.p,t.p,t.p,t(239);t(240);var E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgBfZDJEYAgDEUTbMiLjsuFTtRK1Eq0FC6uF23IJeOAIqD/ksB7EzIAUCI+lREfSnAEEz77O2yLPFejiGtdYL0IV6qFEsxJqBoCOZXGnIS67ZJegktiYIUdT7+j8cSU0WUrYT2KtMI/eC/5BS8h4J3vAVtcUN+cPqizAeUE9Co88Gw0OewAAAAASUVORK5CYII=",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB0SURBVHgBfZDLDYAgEEQHOvIkxgulaCVYinbCxYDxYkOirCEqCsxpk/eyPyARIRclpFFUsxQE3ED1DlfxHPTpV91uLAetbsZ7RA5eQglS/A7utSg/8EkYYaiDClJndT1FQkli8Zl/KfGoR6JHIRWShJxJxAkYXjoQPlFPbwAAAABJRU5ErkJggg==";var I=function(){for(var e=Object(u.f)(),a=Object(c.useState)([]),t=Object(h.a)(a,2),s=t[0],l=t[1],n=Object(c.useState)(!0),i=Object(h.a)(n,2),d=i[0],r=i[1],o=Object(c.useState)(!0),b=Object(h.a)(o,2),x=b[0],O=b[1],m=Object(c.useState)(1),p=Object(h.a)(m,2),f=p[0],N=p[1],v=Object(c.useState)(5),A=Object(h.a)(v,2),y=A[0],k=A[1],S=Object(c.useState)(1),M=Object(h.a)(S,2),D=M[0],R=M[1],C=Object(c.useState)(8),P=Object(h.a)(C,2),w=P[0],I=P[1],T=Object(c.useState)(1),B=Object(h.a)(T,2),H=B[0],L=B[1],U=Object(c.useState)({color:"#3744C0"}),_=Object(h.a)(U,2),W=_[0],F=(_[1],s.length+1),Q=Math.ceil(F/10),J=new Array,G=1;G<=Q;G++)J.push(G);var X=F>=10&&1==w;return Object(c.useEffect)((function(){r(!(f<=1)),O(!(y>=Q)),w>=F&&I(F)}),[y,f,w]),Object(c.useEffect)((function(){g.a.get("https://brightlystake.com/api/marlin/dailyStats/"+e.clusterId).then((function(e){l(e.data.data);var a=0!==e.data.data.length?e.data.data.reduce((function(e,a){return e.time>a.time?e:a})):null;e.data.data.filter((function(e){return e.time.substr(0,10)===(null===a||void 0===a?void 0:a.time.substr(0,10))})),e.data.data.filter((function(e){return e.time.substr(11,2)===(null===a||void 0===a?void 0:a.time.substr(11,2))}))})).catch((function(e){console.log(e)}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container cnta",style:{padding:"0px",overflow:"hidden",marginTop:"132px",maxWidth:"90%",maxHeight:"632px"},children:[Object(j.jsx)("div",{className:"table-title",children:"Daily Summary"}),Object(j.jsxs)("div",{className:"tbe",children:[Object(j.jsxs)("table",{className:"table ",children:[Object(j.jsx)("thead",{className:"headr ",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Latency Score"}),Object(j.jsx)("th",{scope:"col",children:"Rank"}),Object(j.jsx)("th",{scope:"col",children:"Tickets"}),Object(j.jsx)("th",{scope:"col",children:"Rank"}),Object(j.jsx)("th",{scope:"col",children:"POND APR"}),Object(j.jsx)("th",{scope:"col",children:"Rank"}),Object(j.jsx)("th",{scope:"col",children:"MPond APR"}),Object(j.jsx)("th",{scope:"col",children:"Rank"}),Object(j.jsx)("th",{scope:"col",children:"Date"})]})}),Object(j.jsx)("tbody",{children:s.map((function(e,a){if(a+1>=D&&a+1<=(X?10:w-1))return console.log(w),Object(j.jsxs)("tr",{className:"roow",children:[Object(j.jsx)("td",{children:parseFloat(e.latencyScore).toFixed(2)}),Object(j.jsx)("td",{children:Math.ceil(e.latencyScoreRank)}),Object(j.jsx)("td",{children:e.tickets}),Object(j.jsx)("td",{children:Math.ceil(e.rankTickets)}),Object(j.jsx)("td",{children:e.POND}),Object(j.jsx)("td",{children:Math.ceil(e.rankPOND)}),Object(j.jsx)("td",{children:e.MPOND}),Object(j.jsx)("td",{children:Math.ceil(e.rankMPOND)}),Object(j.jsx)("td",{children:e.Date})]})}))})]}),Object(j.jsx)("div",{className:"paginationWrapper",children:Object(j.jsxs)("div",{className:"paginationBox",children:[Object(j.jsx)("button",{disabled:!d,className:"prevWrap",onClick:function(){var e=f-5,a=e+4;N(e),k(a)},children:Object(j.jsx)("img",{src:Y,className:"prevBtn"})}),J.map((function(e,a){if(e>=f&&e<=y)return Object(j.jsx)("span",{className:"numbers",style:e==H?W:null,onClick:function(){return R(1==(a=e)?1:10*a-10),I(10*a),void L(a);var a},children:e},a+1)})),Object(j.jsx)("button",{disabled:!x&&!X,className:"nextWrap",onClick:function(){var e=f+5,a=e+4<=Q?e+4:Q;N(e),k(a)},children:Object(j.jsx)("img",{src:E,className:"nextBtn"})})]})})]})]})})},T=(t(241),function(){var e=Object(u.f)(),a=Object(c.useState)([]),t=Object(h.a)(a,2),s=(t[0],t[1]),l=Object(c.useState)([]),n=Object(h.a)(l,2),i=n[0],d=n[1],r=Object(c.useState)([]),o=Object(h.a)(r,2),b=o[0],x=o[1];return Object(c.useEffect)((function(){g.a.get("https://brightlystake.com/api/marlin/getStakingDetails/"+e.clusterId).then((function(e){try{e.data.data[0].MPOND,console.log("Present"),s(e.data.data[0])}catch(a){e.data.data[0].MPOND=0}})).catch((function(e){console.log(e)})),g.a.get("https://sk.marlin.pro/getVerifiedOperators").then((function(a){console.log(a.data[e.clusterId]),d(a.data)})).catch((function(e){console.log(e)})),g.a.get("https://sk.marlin.pro/getClusterInfo").then((function(a){void 0==a.data[e.clusterId].network?a.data[e.clusterId].network="NA":x(a.data[e.clusterId])})).catch((function(e){console.log(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"container cnta",style:{maxWidth:"90%",padding:"0px"},children:Object(j.jsxs)("div",{className:"d-flex flex-column ",style:{marginTop:"120px",padding:"0px"},children:[Object(j.jsx)("span",{className:"Audit",children:void 0==i[e.clusterId]?"":i[e.clusterId]}),Object(j.jsxs)("span",{className:void 0==i[e.clusterId]?"Audit":"sample",children:[e.clusterId,Object(j.jsx)("img",{alt:"some",className:"copyImage",onClick:function(){navigator.clipboard.writeText(e.clusterId)},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgB7ZXNDYJAEEa/QQ4eKYESNlKQUIGxA1qwA0rACqQCs1ZgCxyNhxkHWEmM/GyCnvQlhA27eZkZZoDgMMZEwDqCF7faWlsP7YROFhMFJ+AewwORINNbMSoEVkaPqRQlMy6Yhe3YjhNKm6rKjtaeCywgHHqYJMmWWXJ4oFlVzLx/1jQYOtTJJBIRzF9IVZNORqjEIlRo+hkmaF6mxnjVZd8dAT7MX/gLQteHXGqDVrqosZBW6MZmsazhWym/QyQ6WZsc00ReQq3ngYh2+iUxmEW0VFL0gYwd6wbfi5ffwQONIGZNoldGzwAAAABJRU5ErkJggg=="})]}),Object(j.jsxs)("span",{className:"ethereum",children:[b.network," "]})]})}),Object(j.jsx)(D,{}),Object(j.jsx)(w,{}),Object(j.jsx)(P,{}),Object(j.jsx)(I,{}),Object(j.jsx)("div",{className:"leavegap"}),Object(j.jsx)("div",{className:"caaar",children:Object(j.jsxs)("div",{className:"rules",children:[Object(j.jsx)("p",{className:"rulesheader",children:" Calculation approach"}),Object(j.jsx)("p",{children:"1 - Average POND and MPond values are net average of the values from June 1, 2021"}),Object(j.jsx)("p",{children:"2 - Records having POND APR > 1000% are ignored as it is just skewed up data due to the fact 0 POND was staked"}),Object(j.jsx)("p",{children:"3 - Today's APR is the average of the values from 00:00 UTC for that cluster"}),Object(j.jsx)("p",{children:"4 - Returns calculated i.e. no of POND per 1 MPond or 1M POND is calculated with the overall APR returns which is from June 1, 2021."})]})}),Object(j.jsx)("div",{className:"leavegap"}),Object(j.jsx)("p",{style:{textAlign:"center"},children:"Created by Brightlystake.com"}),Object(j.jsx)("p",{style:{textAlign:"center"},children:"The data is refreshed every 5 minutes; Averages are calculated from June 1, 2021."}),Object(j.jsxs)("p",{style:{textAlign:"center"},children:["If you find any issues drop in a mail to Staking7pc@gmail.com or join our ",Object(j.jsx)("a",{href:"https://t.me/Brightlystake",children:"Telegram channel"})]}),Object(j.jsxs)("p",{style:{textAlign:"center"},children:["Disclaimer: There are few factors which will skew up the information provided like non-availability of data, skewed up data etc."," "]}),Object(j.jsx)("p",{style:{textAlign:"center"},children:"The values shown here are approximate values, if you have see any bugs do let us know."})]})}),B=t(18);var H=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(B.a,{children:Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)(o,{}),Object(j.jsx)(u.c,{children:Object(j.jsx)(u.a,{path:"/analytics/:clusterId",component:T})})]})})})};t(242);n.a.render(Object(j.jsx)(H,{}),document.getElementById("root"))},70:function(e,a,t){}},[[243,1,2]]]);
//# sourceMappingURL=main.074c1704.chunk.js.map