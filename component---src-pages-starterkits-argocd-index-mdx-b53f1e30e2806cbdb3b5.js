(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{423:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),o=a(428);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var c={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=i("Row"),b=i("Column"),l=i("ResourceCard"),p={_frontmatter:c},u=o.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(r.b)(u,n({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"Row"},Object(r.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(l,{title:"Tekton Tasks",subTitle:"Reusable Tekton Tasks to support Tekton CI Deployment",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/ibm-garage-tekton-tasks",mdxType:"ResourceCard"},Object(r.b)("img",{src:"/images/github-icon.png",alt:"Github icon"})))))}d.isMDXComponent=!0},426:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},427:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},428:function(e,t,a){"use strict";a(32),a(28);var r=a(1),o=a(426),n=a(0),c=a.n(n),i=a(105),s=a.n(i),b=a(195),l=a(127),p=a(3),u=a.n(p),d=a(384),m=function(e){var t,a=e.title,o=e.tabs,n=void 0===o?[]:o;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=n.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},g=a(427),O=a(385),v=function(e){var t=e.relativePagePath,a=e.repository,o=g.data.site.siteMetadata.repository,n=a||o,c=n.baseUrl,i=n.subDirectory,s=c+"/edit/"+n.branch+i+"/src/pages"+t;return c?Object(r.b)("div",{className:"bx--row "+O.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},f=a(193),j=(a(59),a(26)),h=a(386);var y=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=s()(e,{lower:!0}),c=n===o,i=new RegExp(o+"(?!-)"),b=a.replace(i,n);return Object(r.b)("li",{key:e,className:u()((t={},t[h.selectedItem]=c,t),h.listItem)},Object(r.b)(j.Link,{className:h.link,to:""+b},e))}));return Object(r.b)("div",{className:h.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:h.list},n))))))},o}(c.a.Component),x=a(194);t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,c=e.Title,i=t.frontmatter,p=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,g=p.tabs,O=p.title,j=p.theme,h=p.description,w=p.keywords,N=o.data.site.pathPrefix,T=N?n.pathname.replace(N,""):n.pathname,k=g?T.split("/").slice(-1)[0]||s()(g[0],{lower:!0}):"";return Object(r.b)(l.a,{homepage:!1,theme:j,pageTitle:O,pageDescription:h,pageKeywords:w,titleType:d},Object(r.b)(m,{title:c?Object(r.b)(c,null):O,label:"label",tabs:g}),g&&Object(r.b)(y,{slug:T,tabs:g,currentTab:k}),Object(r.b)(x.a,{padded:!0},a,Object(r.b)(v,{relativePagePath:u})),Object(r.b)(f.a,{pageContext:t,location:n,slug:T,tabs:g,currentTab:k}),Object(r.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-starterkits-argocd-index-mdx-b53f1e30e2806cbdb3b5.js.map