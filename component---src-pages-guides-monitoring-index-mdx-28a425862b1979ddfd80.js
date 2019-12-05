(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{410:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),i=a(434);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o,r={},c=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),l={_frontmatter:r},b=i.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(b,s({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use Sysdig to monitor your running application")),Object(n.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(n.b)("a",s({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"}),"automate application monitoring"),".\nSysdig automates application monitoring, enabling an operator to view stats and collect metrics about a Kubernetes cluster and its deployments.\nThe Developer Tools environment includes an IBM Cloud Monitoring with Sysdig service instance configured with\na Sysdig agent installed in the environment’s cluster.\nSimply by deploying your application into the Developer Tools environment, Sysdig monitors it, just open\nthe Sysdig web UI from the IBM Cloud dashboard to browse your application’s status."),Object(n.b)("h2",{id:"sysdig-monitoring"},"Sysdig Monitoring"),Object(n.b)("p",null,Object(n.b)("a",s({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig"}),"IBM Cloud Monitoring with Sysdig")," explains how to\nconfigure and use an instance of the Sysdig service, but the Developer Tools environment has already done most\nof this for you. You can skip steps 1-3 about user access, provisioning an instance, and installing an agent."),Object(n.b)("h3",{id:"sysdig-dashboard"},"Sysdig dashboard"),Object(n.b)("p",null,"Open the Sysdig web UI for your environment’s cluster"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started#step4"}),"Step 4: Launch the web UI"),"\nexplains how to open the web UI"),Object(n.b)("li",{parentName:"ul"},"In the IBM Cloud dashboard, navigate to ",Object(n.b)("strong",{parentName:"li"},"Observability")," > ",Object(n.b)("strong",{parentName:"li"},"Monitoring")),Object(n.b)("li",{parentName:"ul"},"Find the monitoring instance named after your environment’s cluster, such as ",Object(n.b)("inlineCode",{parentName:"li"},"showcase-dev-iks-sysdig"),".\nTo help find it, you can filter by your resource group.\n",Object(n.b)("span",s({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1025px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"8.97560975609756%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAcklEQVQI1zWM2QoCMRRD5/8/UR8H1GEWW3vXLsRrwYdDICRnMXOIKlQN5g51nvnrWRStdVDdsfEdyVdQ7B5HQWZHJseeBNsl8WsYo2OROBXiiYZYnKBmU/YphFobSghfdMPb1ugFVya0PpCK4Xny5C/8AvQamoaEYgwuAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Monitoring Instance",title:"Sysdig Monitoring Instance",src:"/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/3e04c/sysdig-monitoring-instance.png",srcSet:["/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/d6747/sysdig-monitoring-instance.png 288w","/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/09548/sysdig-monitoring-instance.png 576w","/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/3e04c/sysdig-monitoring-instance.png 1025w"],sizes:"(max-width: 1025px) 100vw, 1025px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},"In the monitoring instance, press the ",Object(n.b)("strong",{parentName:"li"},"View Sysdig")," button to open the Sysdig web UI")),Object(n.b)("p",null,"Finish onboarding the agent"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If this is your first time opening the Sysdig dashboard on your cluster’s monitoring agent, Sysdig will open the Onboarding wizard")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The first page shows the hosts (i.e. Kubernetes nodes) and containers that Sysdig found, as well as the integrations it has\nselected to monitor them\n",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"848px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.141509433962256%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAB00lEQVQoz4VT7Y7TMBDsu/I28CqIh4DfCAE6iZaLOF2v1zYfjmPnw/FHhrETH1ckhKXt2O7uzO56s8OrtSxLwudB4dBVKFSDe9qDbvHYy7TPdhn1TUxeu3iRLWw42Bli7CEGjaZXaLmXtHZY7wRxmA1ex2ZLhCGETWlV89ZBKwUpBETToFcaulNQUhI1sYOZzJrhFhMhLAG7TOaJUgdUwwUuWIqsjsHzfmwwurXEZrqmQB88mpG+FJeDQGcEeI2dZ0Ckb7XHu/cSpTTp7JxLtt/vcXx6pIDHpARma2BZ7qQlnLcoigKHn3tGUMR7Em4Zxoxkv8DSKapbksXsYynek3zxKcPZTS8PYP2cq037lZA/MTBmM7HZT/UvzCS1LMWRuDMdrixNiTNM06aWnOsSp/MzSnVmPzkFx6/QtmN7lrWHSc1alGUJ2XbpHAVipoW8Rzk3sPyvZmnR+1LX+H53h6GfcDoe8FB8eYlJGUZr2xY1HRVfN56jQC4ZfwBVJK4qPkDY5jCX7FLMLpdrDBs9TQlTdiSNaJ1dMVbAsblS+CJaPHOkJjOvvrTbwcbtWv5h8QHD9gHkfVwjRT/XJ/yQ1e2X8j/7e2XC09DhzacPePvtI34D1YykwZxYxR0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Onboarding pt 1",title:"Sysdig Onboarding pt 1",src:"/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/3d2bc/sysdig-wizard-1.png",srcSet:["/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/d6747/sysdig-wizard-1.png 288w","/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/09548/sysdig-wizard-1.png 576w","/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/3d2bc/sysdig-wizard-1.png 848w"],sizes:"(max-width: 848px) 100vw, 848px",loading:"lazy"})),"\n    "),"\nNotice there are different types of integrations for different types of runtimes such as Java, servers such as Tomcat,\nand even infrasturcture integrations for monitoring the Kubernetes cluster itself and its containerd engines.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Press ",Object(n.b)("strong",{parentName:"p"},"Next"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The second page shows the predefined metrics, dashboards, and alerts that Sysdig will start using to monitor the apps\nin your cluster\n",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"848px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.25471698113207%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABqUlEQVQoz11TTW/cIBD1/24vvfRHRWpXants1NxyiHabtquQGG9sMMYGbF5n8OJld6QxMB9v3gy4wllijFhIWV6txrN+x141OOgTnjqJgzolfWzf8M90yd77acvNUvEhKS5ig4d2E5QbU5IJDgPr7NFOFppsrG6eURJirTL6MAz4K2q0SqMUPzkcjy8Q9QlNLXEtEUKSve020A2Q2x0fvyG04qriQvupOZLvOzwx2jqKS4pz4gn+dLwA4hyQQJ/vgV6u7Rd2mHdE9hWFGJC9Uf4G1Ou6LxnyKlsNSy3eDnokW2dGlLG5ZT2McGEpGDKzZcE40gVonWYZQkC2T9MEaweYXqe9c24DnGhv+p5yLbz36y3zZ6bZGGNSsLU2rSwMzPYV1KZiXDgD8p7tZU4C5ENPlTQxZOWALAyilErA7MuJzIjPHfk6XrWCJwLnlufkFEKgaZrEKM8k2+u6hpRy8zH7NJ7eYDFEwK9vsvJhpll4xHjzwspbvpH8R/H3x9sffBV77MQBu5c9qnSDVCWcX/0t0OWZXGtqmzr7/LDDh593+Hh/h0+/vuA/ZHel58SX8+gAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Onboarding pt 2",title:"Sysdig Onboarding pt 2",src:"/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/3d2bc/sysdig-wizard-2.png",srcSet:["/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/d6747/sysdig-wizard-2.png 288w","/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/09548/sysdig-wizard-2.png 576w","/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/3d2bc/sysdig-wizard-2.png 848w"],sizes:"(max-width: 848px) 100vw, 848px",loading:"lazy"})),"\n    "),"\n- Press ",Object(n.b)("strong",{parentName:"p"},"Complete Onboarding")))),Object(n.b)("h3",{id:"explore-your-application"},"Explore your application"),Object(n.b)("p",null,"By default, the Sysdig dashboard opens the ",Object(n.b)("strong",{parentName:"p"},"Explore")," page on its ",Object(n.b)("strong",{parentName:"p"},"Deployments and Pods")," grouping."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Select your cluster")),Object(n.b)("p",null,"By default, Sysdig opens its ",Object(n.b)("strong",{parentName:"p"},"Overview by Process")," dashboard, which has panels showing stats about CPU, memory, and networking.\nThis is one of Sysdig’s ",Object(n.b)("strong",{parentName:"p"},"Default Dashboards")," (i.e. built-in dashboards)."),Object(n.b)("p",null,"These are the cumlative totals for all of the pods running in the cluster. Hover over a graph and a key pops up to list\nthe pods and show each one’s color."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Expand your cluster and namespace, then select your deployment")),Object(n.b)("p",null,"This shows the stats just for the pods in your deployment."),Object(n.b)("p",null,"On the ",Object(n.b)("strong",{parentName:"p"},"Dashboard")," page, you can create your own custom dashboards."),Object(n.b)("p",null,"The Getting started tutorial, starting with\n",Object(n.b)("a",s({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started#step5"}),"Step 5: Monitor your environment"),",\ngives some instructions on monitoring, managing, and what to do next."),Object(n.b)("h2",{id:"conclusion"},"Conclusion"),Object(n.b)("p",null,"It’s important to be able to monitor your deployed applications.\nHere, the Developer Tools environment uses Sysdig Monitoring, but you never had to install or run Sysdig.\nJust deploy your application into the Developer Tools environment and it gets moniotored automatically.\nAfter deploying your application, open the Sysdig web UI and browse the status, including the status\nof your cluster as a whole and your deployment in particular."))}p.isMDXComponent=!0},432:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},433:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},434:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(432),s=a(0),o=a.n(s),r=a(105),c=a.n(r),l=a(195),b=a(127),p=a(3),d=a.n(p),g=a(384),u=function(e){var t,a=e.title,i=e.tabs,s=void 0===i?[]:i;return Object(n.b)("div",{className:d()(g.pageHeader,(t={},t[g.withTabs]=s.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:g.text},a)))))},m=a(433),h=a(385),y=function(e){var t=e.relativePagePath,a=e.repository,i=m.data.site.siteMetadata.repository,s=a||i,o=s.baseUrl,r=s.subDirectory,c=o+"/edit/"+s.branch+r+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},O=a(193),v=(a(59),a(26)),A=a(386);var w=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var t,s=c()(e,{lower:!0}),o=s===i,r=new RegExp(i+"(?!-)"),l=a.replace(r,s);return Object(n.b)("li",{key:e,className:d()((t={},t[A.selectedItem]=o,t),A.listItem)},Object(n.b)(v.Link,{className:A.link,to:""+l},e))}));return Object(n.b)("div",{className:A.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:A.list},s))))))},i}(o.a.Component),f=a(194);t.a=function(e){var t=e.pageContext,a=e.children,s=e.location,o=e.Title,r=t.frontmatter,p=void 0===r?{}:r,d=t.relativePagePath,g=t.titleType,m=p.tabs,h=p.title,v=p.theme,A=p.description,j=p.keywords,N=i.data.site.pathPrefix,S=N?s.pathname.replace(N,""):s.pathname,x=m?S.split("/").slice(-1)[0]||c()(m[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:v,pageTitle:h,pageDescription:A,pageKeywords:j,titleType:g},Object(n.b)(u,{title:o?Object(n.b)(o,null):h,label:"label",tabs:m}),m&&Object(n.b)(w,{slug:S,tabs:m,currentTab:x}),Object(n.b)(f.a,{padded:!0},a,Object(n.b)(y,{relativePagePath:d})),Object(n.b)(O.a,{pageContext:t,location:s,slug:S,tabs:m,currentTab:x}),Object(n.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-monitoring-index-mdx-28a425862b1979ddfd80.js.map