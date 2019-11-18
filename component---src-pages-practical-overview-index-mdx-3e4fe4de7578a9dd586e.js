(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{422:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(435);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},l=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(l,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Practical Guide")," helps developers get to grips with the Developer Environment and help them learn the key developer concepts. Although the samples are small and limited function they are designed to hit all the key developer learning curves while working with IBM Kubernetes Services and IBM Red Hat OpenShift and the supporting IBM Cloud Services."),Object(r.b)("h2",{id:"micro-apps"},"Micro Apps"),Object(r.b)("p",null,"A micro app is a vertical slice of a business problem that has been defined using a Design Thinking. The mico app guide will outline the following sections:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Architecture")," provides a simple architecture logical design"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Design")," provides a simple visual, database persistence and API design with model entities"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Technical Requirements")," The key technical objectives")),Object(r.b)("p",null,"The Micro App should be able to be created in less than two hours to support both self paced learning and workshop face to face learning. They should also be able to be created by a ",Object(r.b)("strong",{parentName:"p"},"Pair")," of developers and enable ",Object(r.b)("strong",{parentName:"p"},"Full Stack")," development."),Object(r.b)("p",null,"The Micro App will in most cases be based on a ",Object(r.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/starterkittemplates"}),"Starter Kit Templates")," these provide the building blocks for a number of common application architectures."),Object(r.b)("p",null,"The remaining parts of the guide with use the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"I Do, We Do, You Do"))," model of helping you learn the concepts being defined, and the help you achieve a successful outcome."),Object(r.b)("p",null,"Cloud Native development has a lot of moving parts to its learning and these guides will help you practice them, demonstrate them and ultimately use the skills to help you deliver production class software that is continuously delivered."),Object(r.b)("p",null,"When these technical skills are combined with the IBM Garage Method practices including  ",Object(r.b)("strong",{parentName:"p"},"Agile"),", ",Object(r.b)("strong",{parentName:"p"},"eXtreme Programming")," and ",Object(r.b)("strong",{parentName:"p"},"Devops")," you will have the key industry best practices to deliver value for your solutions."))}c.isMDXComponent=!0},433:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},434:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},435:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(433),i=a(0),o=a.n(i),s=a(105),l=a.n(s),c=a(195),b=a(127),p=a(3),u=a.n(p),d=a(384),h=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},m=a(434),g=a(385),v=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,i=a||n,o=i.baseUrl,s=i.subDirectory,l=o+"/edit/"+i.branch+s+"/src/pages"+t;return o?Object(r.b)("div",{className:"bx--row "+g.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},O=a(193),j=(a(59),a(26)),f=a(386);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0}),o=i===n,s=new RegExp(n+"(?!-)"),c=a.replace(s,i);return Object(r.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(r.b)(j.Link,{className:f.link,to:""+c},e))}));return Object(r.b)("div",{className:f.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:f.list},i))))))},n}(o.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,s=t.frontmatter,p=void 0===s?{}:s,u=t.relativePagePath,d=t.titleType,m=p.tabs,g=p.title,j=p.theme,f=p.description,N=p.keywords,k=n.data.site.pathPrefix,x=k?i.pathname.replace(k,""):i.pathname,T=m?x.split("/").slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(r.b)(b.a,{homepage:!1,theme:j,pageTitle:g,pageDescription:f,pageKeywords:N,titleType:d},Object(r.b)(h,{title:o?Object(r.b)(o,null):g,label:"label",tabs:m}),m&&Object(r.b)(y,{slug:x,tabs:m,currentTab:T}),Object(r.b)(w.a,{padded:!0},a,Object(r.b)(v,{relativePagePath:u})),Object(r.b)(O.a,{pageContext:t,location:i,slug:x,tabs:m,currentTab:T}),Object(r.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-practical-overview-index-mdx-3e4fe4de7578a9dd586e.js.map