(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{411:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),o=a(417);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s,l={},i=(s="PageDescription",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:l},b=o.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(i,{mdxType:"PageDescription"},Object(n.b)("p",null,"The carbon theme uses Sass to take advantage of the carbon-components styles and variables while authoring novel components. In addition, we use css modules to ensure we don’t collide with devs and make sure our components are portable and shadowable.")),Object(n.b)("h2",{id:"local-styles"},"Local Styles"),Object(n.b)("p",null,"For your application’s local styles, you can just import your style sheet ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.gatsbyjs.org/docs/global-css/#adding-global-styles-without-a-layout-component"}),"directly into a ",Object(n.b)("inlineCode",{parentName:"a"},"gatsby-browser.js"))," file at the root of your project."),Object(n.b)("p",null,"You can also use sass modules like we do in the theme, this would make it easier for you to share your component with other theme consumers down the line."),Object(n.b)("p",null,"Every Sass file in your project automatically has access to the the following carbon resources:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"colors – ",Object(n.b)("inlineCode",{parentName:"li"},"background: carbon--gray-10;")),Object(n.b)("li",{parentName:"ul"},"spacing - ",Object(n.b)("inlineCode",{parentName:"li"},"margin: $spacing-05;")),Object(n.b)("li",{parentName:"ul"},"theme-tokens - ",Object(n.b)("inlineCode",{parentName:"li"},"color: $text-01;")),Object(n.b)("li",{parentName:"ul"},"motion - ",Object(n.b)("inlineCode",{parentName:"li"},"transition: all $duration--moderate-01 motion(entrance, productive);")),Object(n.b)("li",{parentName:"ul"},"layout - ",Object(n.b)("inlineCode",{parentName:"li"},"z-index: z('overlay');")),Object(n.b)("li",{parentName:"ul"},"typography - ",Object(n.b)("inlineCode",{parentName:"li"},"@include carbon--type-style('body-long-01');"))),Object(n.b)("h2",{id:"targeting-theme-components"},"Targeting theme components"),Object(n.b)("p",null,"Theme component classes have a hash of their styles tacked on to the end. This is both to prevent collisions, and also to prevent sneaky breaking changes to your styles if we update the class underneath you and you were relying on our styles."),Object(n.b)("p",null,"However, you can target the classes without the hash by using a partial selector:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-scss"}),"[class^='Banner-module--column'] {\n  color: $text-04;\n}\n")),Object(n.b)("p",null,"This will match the class that starts with ",Object(n.b)("inlineCode",{parentName:"p"},"Banner-module--column")," and would be immune to any changes to the hash. We may at some point remove the hash if this becomes an issue."))}p.isMDXComponent=!0},415:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/garage-developer-guide"}}}')},416:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":""}}}}}')},417:function(e,t,a){"use strict";a(32),a(28);var n=a(1),o=a(415),r=a(0),s=a.n(r),l=a(105),i=a.n(l),c=a(195),b=a(127),p=a(3),u=a.n(p),d=a(383),m=function(e){var t,a=e.title,o=e.tabs,r=void 0===o?[]:o;return Object(n.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},h=a(416),j=a(384),y=function(e){var t=e.relativePagePath,a=e.repository,o=h.data.site.siteMetadata.repository,r=a||o,s=r.baseUrl,l=s+"/tree/master"+r.subDirectory+"/src/pages"+t;return s?Object(n.b)("div",{className:"bx--row "+j.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},O=a(193),g=(a(59),a(26)),v=a(385);var f=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),s=r===o,l=new RegExp(o+"(?!-)"),c=a.replace(l,r);return Object(n.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=s,t),v.listItem)},Object(n.b)(g.Link,{className:v.link,to:""+c},e))}));return Object(n.b)("div",{className:v.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:v.list},r))))))},o}(s.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,s=e.Title,l=t.frontmatter,p=void 0===l?{}:l,u=t.relativePagePath,d=t.titleType,h=p.tabs,j=p.title,g=p.theme,v=p.description,N=p.keywords,x=o.data.site.pathPrefix,k=x?r.pathname.replace(x,""):r.pathname,C=h?k.split("/").slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:g,pageTitle:j,pageDescription:v,pageKeywords:N,titleType:d},Object(n.b)(m,{title:s?Object(n.b)(s,null):j,label:"label",tabs:h}),h&&Object(n.b)(f,{slug:k,tabs:h,currentTab:C}),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(y,{relativePagePath:u})),Object(n.b)(O.a,{pageContext:t,location:r,slug:k,tabs:h,currentTab:C}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-styling-mdx-f2bd084bd4649fa14b98.js.map