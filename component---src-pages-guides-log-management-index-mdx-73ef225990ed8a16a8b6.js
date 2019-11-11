(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{403:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(429);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i,s={},c=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={_frontmatter:s},l=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,o({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},"This guide will help you uderstand how to manage logging for your apps with LogDNA"),Object(n.b)("h3",{id:"setup-operations"},"Setup Operations"),Object(n.b)("p",null,"Now that your development cluster is configured you can now register ",Object(n.b)("inlineCode",{parentName:"p"},"LogDNA")," and ",Object(n.b)("inlineCode",{parentName:"p"},"SysDig")," service instances with your Kubernetes cluster. "),Object(n.b)("p",null,"Navigate to the Observability menu from the main console menu and then click on the ",Object(n.b)("inlineCode",{parentName:"p"},"Edit Sources")," and follow the instructions to configure the log agent and montitoring agents for you development cluster. "))}p.isMDXComponent=!0},427:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},428:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},429:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(427),o=a(0),i=a.n(o),s=a(105),c=a.n(s),b=a(195),l=a(127),p=a(3),u=a.n(p),d=a(384),g=function(e){var t,a=e.title,r=e.tabs,o=void 0===r?[]:r;return Object(n.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},m=a(428),O=a(385),v=function(e){var t=e.relativePagePath,a=e.repository,r=m.data.site.siteMetadata.repository,o=a||r,i=o.baseUrl,s=o.subDirectory,c=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?Object(n.b)("div",{className:"bx--row "+O.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},h=a(193),f=(a(59),a(26)),j=a(386);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0}),i=o===r,s=new RegExp(r+"(?!-)"),b=a.replace(s,o);return Object(n.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(n.b)(f.Link,{className:j.link,to:""+b},e))}));return Object(n.b)("div",{className:j.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:j.list},o))))))},r}(i.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,s=t.frontmatter,p=void 0===s?{}:s,u=t.relativePagePath,d=t.titleType,m=p.tabs,O=p.title,f=p.theme,j=p.description,N=p.keywords,x=r.data.site.pathPrefix,P=x?o.pathname.replace(x,""):o.pathname,D=m?P.split("/").slice(-1)[0]||c()(m[0],{lower:!0}):"";return Object(n.b)(l.a,{homepage:!1,theme:f,pageTitle:O,pageDescription:j,pageKeywords:N,titleType:d},Object(n.b)(g,{title:i?Object(n.b)(i,null):O,label:"label",tabs:m}),m&&Object(n.b)(y,{slug:P,tabs:m,currentTab:D}),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(v,{relativePagePath:u})),Object(n.b)(h.a,{pageContext:t,location:o,slug:P,tabs:m,currentTab:D}),Object(n.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-log-management-index-mdx-73ef225990ed8a16a8b6.js.map