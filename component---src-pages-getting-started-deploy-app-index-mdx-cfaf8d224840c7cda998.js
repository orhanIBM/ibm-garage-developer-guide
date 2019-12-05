(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{408:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return i})),r.d(t,"default",(function(){return u}));r(11),r(5),r(6),r(4),r(10),r(1),r(0);var n=r(106),a=r(437);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=c("AnchorLinks"),l=c("AnchorLink"),b={_frontmatter:i},p=a.a;function u(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(n.b)(p,o({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"Now you have prepared your development cluster for Cloud Native application development. You can now create a new app using one of the\nStarter Kit Templates. These have been created to include all the key components,configuration and frameworks to get you starting on\ncreating the code your need for your solutions."),Object(n.b)("h3",{id:"creating-your-first-app"},"Creating your first App"),Object(n.b)("h3",{id:"running-locally"},"Running Locally"),Object(n.b)("h3",{id:"register-app-pipeline"},"Register App Pipeline"),Object(n.b)("h3",{id:"view-app-pipeline"},"View App Pipeline"),Object(n.b)("h3",{id:"access-running-app"},"Access running App"),Object(n.b)("h3",{id:"whats-next"},"Whats Next"),Object(n.b)("p",null,"Now that you have a running application that is being built and deployed into your development the next step is to prepare\nfor Continuous Delivery using ArgoCD and hosting your Helm chart artifacts in Artifactory."),Object(n.b)("p",null,"To enable this complete the setup of the ",Object(n.b)("strong",{parentName:"p"},"ArgoCD")," and ",Object(n.b)("strong",{parentName:"p"},"Artifactory")," follow these instructions:"),Object(n.b)(s,{small:!0,mdxType:"AnchorLinks"},Object(n.b)(l,{to:"/getting-started/argocd-setup",mdxType:"AnchorLink"},"ArgoCD Setup"),Object(n.b)(l,{to:"/getting-started/artifactory-setup",mdxType:"AnchorLink"},"Artifactory Setup")),Object(n.b)("h3",{id:"guides"},"Guides"),Object(n.b)("p",null,"For more detailed instructions of how to enable to the full developer lifecycle read through the ",Object(n.b)("strong",{parentName:"p"},"Guides")," section."))}u.isMDXComponent=!0},435:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},436:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":""}}}}}')},437:function(e,t,r){"use strict";r(32),r(28);var n=r(1),a=r(435),o=r(0),i=r.n(o),c=r(105),s=r.n(c),l=r(195),b=r(127),p=r(3),u=r.n(p),d=r(383),g=function(e){var t,r=e.title,a=e.tabs,o=void 0===a?[]:a;return Object(n.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},r)))))},h=r(436),O=r(384),m=function(e){var t=e.relativePagePath,r=e.repository,a=h.data.site.siteMetadata.repository,o=r||a,i=o.baseUrl,c=i+"/tree/master"+o.subDirectory+"/src/pages"+t;return i?Object(n.b)("div",{className:"bx--row "+O.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},f=r(193),v=(r(59),r(26)),j=r(385);var y=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,a=r.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),i=o===a,c=new RegExp(a+"(?!-)"),l=r.replace(c,o);return Object(n.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(n.b)(v.Link,{className:j.link,to:""+l},e))}));return Object(n.b)("div",{className:j.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:j.list},o))))))},a}(i.a.Component),w=r(194);t.a=function(e){var t=e.pageContext,r=e.children,o=e.location,i=e.Title,c=t.frontmatter,p=void 0===c?{}:c,u=t.relativePagePath,d=t.titleType,h=p.tabs,O=p.title,v=p.theme,j=p.description,x=p.keywords,N=a.data.site.pathPrefix,A=N?o.pathname.replace(N,""):o.pathname,k=h?A.split("/").slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:v,pageTitle:O,pageDescription:j,pageKeywords:x,titleType:d},Object(n.b)(g,{title:i?Object(n.b)(i,null):O,label:"label",tabs:h}),h&&Object(n.b)(y,{slug:A,tabs:h,currentTab:k}),Object(n.b)(w.a,{padded:!0},r,Object(n.b)(m,{relativePagePath:u})),Object(n.b)(f.a,{pageContext:t,location:o,slug:A,tabs:h,currentTab:k}),Object(n.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-deploy-app-index-mdx-cfaf8d224840c7cda998.js.map