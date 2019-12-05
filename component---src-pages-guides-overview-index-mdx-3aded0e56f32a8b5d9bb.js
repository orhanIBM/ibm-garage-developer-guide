(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{413:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var i=a(106),n=a(435);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var r={},s={_frontmatter:r},l=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(l,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"The Developer Tools environment contains a number of popular and proven open source tools for developing cloud-native applications and deploying them to Kubernetes and Red Hat OpenShift. This section will help you understand what each tool does and how it helps you prepare you application code for production delivery."),Object(i.b)("h2",{id:"tools-configurations"},"Tools Configurations"),Object(i.b)("p",null,"The tools have been installed and configured in the cluster that is the foundation of your Developer Tools environment. This is a popular approach that Red Hat and other vendors are following. There are some andvantages and disadvantages. The upside is that you can get started quickly and you are only incurring the cost of the managed cluster. The downside is that you need to monitor them and manage them. The cool thing is that IBM Cloud has an amazing ",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/monitoring"}),"monitoring solution")," that can be configure to alert you of issues. More about that in the Guides."),Object(i.b)("p",null,"Note: As the industry moves to full lifecycle operators this will be the case."),Object(i.b)("p",null,"The tools are installed into a ",Object(i.b)("strong",{parentName:"p"},"tools")," namespace and have a number of ",Object(i.b)("em",{parentName:"p"},"ConfigMaps")," and ",Object(i.b)("em",{parentName:"p"},"Secrets")," defined to make it super easy for the tools to access and communicate with the underlying ",Object(i.b)("strong",{parentName:"p"},"IBM Cloud")," services. For more detail, see ",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/cluster-config"}),"Cluster Configuration"),"."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"761px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.23784494086729%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAC4UlEQVQ4y5VUXU8TQRTtb/Jf+OxfMP4AEx8MPhjxkUjwQfHFF8HwEcNLiRiNRZGIikCA0kJboIV+sW33c2ZnZ2b3eGdaEqIG4yQ3e/fuzL33nHtmc3EcgzEGKSWcbgcnpSKUTNDptFCtVqCVBKc98T/M7uEcuSRJkGYZzCoFCe4feNDkL28wTOdd/O+yCaVSQJbilCk82O8h1hKr2yFev+9QWENpTZ0qpGkKRU9t3smU0va7Fymcdamx6vEwIecMrufTk9r2PURRRO2HiAIXAfk8FmAEyff9ITyCZowxDi05yg2Gla8DyC/rlwk5giAAnx2DWJ2BJAYEi2CI0PsFiIVHCPoXiEVyLVwmBHKSEpqhmMPB4gSiT3OQ5CcpbMzdLoAtTSAc9IYFRnD/tNTmsR0aR6UKh+1DhHSKrS3iYmkKEVHghRESikniKyDIRg3mzO9m4qOEAkmscebu49XObTj6HIOFJ6hO3rFSSLUCJ/ie51n+rlv8UjZCkAYHTbzZeIFe7FvIYgTZmKlszCwz6b9BNvErkAkWiY+XdxHurYPXdsCrW+D1ElSjiEQqK5dez6HiwvoG4lUzMduhHUoYQplB5CfB5x5C5J8iXniM+O0zsPlxgiosZI841NSJWRldhoy0O3xmIyQjyNzCydBv1nHRqGHQOkO7UoTXbcFpN2wxI6tLDsxFSHVmfSNuI3oKWK5zpl2fJlmqNRAyutektWbA4JEfE1S/XEFwWrccVfoOtqiIpD1u6ODU2bWXIqTOioMQLqkiZ8p8Lx5jav4DGm0HnBCNL+9hrxNaaM7dMbjPX1r/3t4GbhSWrH/UL2D65y0I1UadAzdn8vh43kPOkNztDbD2Y5dugrA/is8HJ+h6o4TfNuGVj6y/3WlipXZofTfqYrPyjjqnvxEhmV1dR8v1kAtpIHHMkZHejCZNgUwKgiXsMOiNJKSHGkykIZAKx0hIappuoplBRDkCUkBEPP8Ckai9HMiwg2YAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Provisioned environment",title:"Provisioned environment",src:"/ibm-garage-developer-guide/static/85224f4a32afac650e4f1512936ff1b8/ae9fb/catalyst-provisioned-environment.png",srcSet:["/ibm-garage-developer-guide/static/85224f4a32afac650e4f1512936ff1b8/d6747/catalyst-provisioned-environment.png 288w","/ibm-garage-developer-guide/static/85224f4a32afac650e4f1512936ff1b8/09548/catalyst-provisioned-environment.png 576w","/ibm-garage-developer-guide/static/85224f4a32afac650e4f1512936ff1b8/ae9fb/catalyst-provisioned-environment.png 761w"],sizes:"(max-width: 761px) 100vw, 761px",loading:"lazy"})),"\n    "),Object(i.b)("h3",{id:"guides"},"Guides"),Object(i.b)("p",null,"The Guides explain how to create and deploy applications using CI pipeline (",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration"}),"Jenkins"),", ",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration-tekton"}),"Tekton"),", etc.). They help explain how to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Integrate code analysis into your applications with ",Object(i.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/guides/code-analysis"}),"SonarQube")),Object(i.b)("li",{parentName:"ul"},"Move applications into test, staging, and production using continuous deployment techniques with ",Object(i.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/guides/artifact-management"}),"Artifactory")," and ",Object(i.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/guides/continuous-delivery"}),"ArgoCD")),Object(i.b)("li",{parentName:"ul"},"And much more")))}c.isMDXComponent=!0},433:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},434:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},435:function(e,t,a){"use strict";a(32),a(28);var i=a(1),n=a(433),o=a(0),r=a.n(o),s=a(105),l=a.n(s),c=a(195),b=a(127),p=a(3),d=a.n(p),u=a(384),g=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(i.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12"},Object(i.b)("h1",{id:"page-title",className:u.text},a)))))},m=a(434),h=a(385),f=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,o=a||n,r=o.baseUrl,s=o.subDirectory,l=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?Object(i.b)("div",{className:"bx--row "+h.row},Object(i.b)("div",{className:"bx--col"},Object(i.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},v=a(193),O=(a(59),a(26)),y=a(386);var j=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),r=o===n,s=new RegExp(n+"(?!-)"),c=a.replace(s,o);return Object(i.b)("li",{key:e,className:d()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(i.b)(O.Link,{className:y.link,to:""+c},e))}));return Object(i.b)("div",{className:y.tabsContainer},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(i.b)("nav",null,Object(i.b)("ul",{className:y.list},o))))))},n}(r.a.Component),A=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,s=t.frontmatter,p=void 0===s?{}:s,d=t.relativePagePath,u=t.titleType,m=p.tabs,h=p.title,O=p.theme,y=p.description,N=p.keywords,w=n.data.site.pathPrefix,k=w?o.pathname.replace(w,""):o.pathname,x=m?k.split("/").slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(i.b)(b.a,{homepage:!1,theme:O,pageTitle:h,pageDescription:y,pageKeywords:N,titleType:u},Object(i.b)(g,{title:r?Object(i.b)(r,null):h,label:"label",tabs:m}),m&&Object(i.b)(j,{slug:k,tabs:m,currentTab:x}),Object(i.b)(A.a,{padded:!0},a,Object(i.b)(f,{relativePagePath:d})),Object(i.b)(v.a,{pageContext:t,location:o,slug:k,tabs:m,currentTab:x}),Object(i.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-overview-index-mdx-3aded0e56f32a8b5d9bb.js.map