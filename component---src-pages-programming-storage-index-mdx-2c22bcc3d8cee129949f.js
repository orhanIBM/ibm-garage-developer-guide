(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{427:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(435);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var i,c={},s=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),b={_frontmatter:c},l=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(l,o({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"Coming soon")))}p.isMDXComponent=!0},433:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},434:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},435:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(433),o=a(0),i=a.n(o),c=a(105),s=a.n(c),b=a(195),l=a(127),p=a(3),u=a.n(p),d=a(384),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},O=a(434),v=a(385),g=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,o=a||n,i=o.baseUrl,c=o.subDirectory,s=i+"/edit/"+o.branch+c+"/src/pages"+t;return i?Object(r.b)("div",{className:"bx--row "+v.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:v.link,href:s},"Edit this page on GitHub"))):null},j=a(193),f=(a(59),a(26)),h=a(386);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),i=o===n,c=new RegExp(n+"(?!-)"),b=a.replace(c,o);return Object(r.b)("li",{key:e,className:u()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(r.b)(f.Link,{className:h.link,to:""+b},e))}));return Object(r.b)("div",{className:h.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:h.list},o))))))},n}(i.a.Component),x=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,c=t.frontmatter,p=void 0===c?{}:c,u=t.relativePagePath,d=t.titleType,O=p.tabs,v=p.title,f=p.theme,h=p.description,w=p.keywords,N=n.data.site.pathPrefix,P=N?o.pathname.replace(N,""):o.pathname,T=O?P.split("/").slice(-1)[0]||s()(O[0],{lower:!0}):"";return Object(r.b)(l.a,{homepage:!1,theme:f,pageTitle:v,pageDescription:h,pageKeywords:w,titleType:d},Object(r.b)(m,{title:i?Object(r.b)(i,null):v,label:"label",tabs:O}),O&&Object(r.b)(y,{slug:P,tabs:O,currentTab:T}),Object(r.b)(x.a,{padded:!0},a,Object(r.b)(g,{relativePagePath:u})),Object(r.b)(j.a,{pageContext:t,location:o,slug:P,tabs:O,currentTab:T}),Object(r.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-programming-storage-index-mdx-2c22bcc3d8cee129949f.js.map