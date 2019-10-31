(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{410:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return i})),r.d(t,"default",(function(){return d}));r(11),r(5),r(6),r(4),r(10),r(1),r(0);var a=r(106),n=r(442);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},s=c("Video"),p=c("AnchorLinks"),b=c("AnchorLink"),l={_frontmatter:i},u=n.a;function d(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(u,o({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Now you have prepared your development cluster for Cloud Native application development. You can now create a new app using one of the\nStarter Kit Templates. These have been created to include all the key components,configuration and frameworks to get you starting on\ncreating the code your need for your solutions."),Object(a.b)("h3",{id:"video-of-the-steps"},"Video of the steps"),Object(a.b)(s,{src:"/video/deployfirstapp.m4v",type:"video/m4v",poster:"/images/poster.png",mdxType:"Video"}),Object(a.b)("h3",{id:"creating-your-first-app"},"Creating your first App"),Object(a.b)("h3",{id:"running-locally"},"Running Locally"),Object(a.b)("h3",{id:"register-app-pipeline"},"Register App Pipeline"),Object(a.b)("h3",{id:"view-app-pipeline"},"View App Pipeline"),Object(a.b)("h3",{id:"access-running-app"},"Access running App"),Object(a.b)("h3",{id:"whats-next"},"Whats Next"),Object(a.b)("p",null,"Now that you have a running application that is being built and deployed into your development the next step is to prepare\nfor Continuous Delivery using ArgoCD and hosting your Helm chart artifacts in Artifactory."),Object(a.b)("p",null,"To enable this complete the setup of the ",Object(a.b)("strong",{parentName:"p"},"ArgoCD")," and ",Object(a.b)("strong",{parentName:"p"},"Artifactory")," follow these instructions:"),Object(a.b)(p,{small:!0,mdxType:"AnchorLinks"},Object(a.b)(b,{to:"/getting-started/argocd-setup",mdxType:"AnchorLink"},"ArgoCD Setup"),Object(a.b)(b,{to:"/getting-started/artifactory-setup",mdxType:"AnchorLink"},"Artifactory Setup")),Object(a.b)("h3",{id:"guides"},"Guides"),Object(a.b)("p",null,"For more detailed instructions of how to enable to the full developer lifecycle read through the ",Object(a.b)("strong",{parentName:"p"},"Guides")," section."))}d.isMDXComponent=!0},440:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},441:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},442:function(e,t,r){"use strict";r(32),r(28);var a=r(1),n=r(440),o=r(0),i=r.n(o),c=r(105),s=r.n(c),p=r(195),b=r(127),l=r(3),u=r.n(l),d=r(384),h=function(e){var t,r=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(a.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12"},Object(a.b)("h1",{id:"page-title",className:d.text},r)))))},g=r(441),m=r(385),O=function(e){var t=e.relativePagePath,r=e.repository,n=g.data.site.siteMetadata.repository,o=r||n,i=o.baseUrl,c=o.subDirectory,s=i+"/edit/"+o.branch+c+"/src/pages"+t;return i?Object(a.b)("div",{className:"bx--row "+m.row},Object(a.b)("div",{className:"bx--col"},Object(a.b)("a",{className:m.link,href:s},"Edit this page on GitHub"))):null},v=r(193),f=(r(59),r(26)),j=r(386);var y=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),i=o===n,c=new RegExp(n+"(?!-)"),p=r.replace(c,o);return Object(a.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(a.b)(f.Link,{className:j.link,to:""+p},e))}));return Object(a.b)("div",{className:j.tabsContainer},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(a.b)("nav",null,Object(a.b)("ul",{className:j.list},o))))))},n}(i.a.Component),w=r(194);t.a=function(e){var t=e.pageContext,r=e.children,o=e.location,i=e.Title,c=t.frontmatter,l=void 0===c?{}:c,u=t.relativePagePath,d=t.titleType,g=l.tabs,m=l.title,f=l.theme,j=l.description,x=l.keywords,N=n.data.site.pathPrefix,A=N?o.pathname.replace(N,""):o.pathname,k=g?A.split("/").slice(-1)[0]||s()(g[0],{lower:!0}):"";return Object(a.b)(b.a,{homepage:!1,theme:f,pageTitle:m,pageDescription:j,pageKeywords:x,titleType:d},Object(a.b)(h,{title:i?Object(a.b)(i,null):m,label:"label",tabs:g}),g&&Object(a.b)(y,{slug:A,tabs:g,currentTab:k}),Object(a.b)(w.a,{padded:!0},r,Object(a.b)(O,{relativePagePath:u})),Object(a.b)(v.a,{pageContext:t,location:o,slug:A,tabs:g,currentTab:k}),Object(a.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-deploy-app-index-mdx-5c8fd6f9484bc0225442.js.map