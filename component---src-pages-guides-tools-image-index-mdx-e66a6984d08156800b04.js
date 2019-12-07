(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{427:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(442);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},i=r.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},_=Object.keys(e);for(n=0;n<_.length;n++)a=_[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(i,_({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"tools-image"},"Tools Image"),Object(n.b)("p",null,"explain what the tools image is:"),Object(n.b)("pre",null,Object(n.b)("code",_({parentName:"pre"},{className:"language-bash"}),"    Cleaning up old container: ibm-garage-cli-tools-abcde\n    Initializing container ibm-garage-cli-tools-abcde from garagecatalyst/ibm-garage-cli-tools:0.0.24\n    d14e378eac5f8080dbaf5466d680396fc36f9fcf9433247409ea9b3a62326ad2\n    Attaching to running container...\n        ________  __  ___   ________                __   ______\n       /  _/ __ )/  |/  /  / ____/ /___  __  ______/ /  / ____/___ __________ _____ ____\n       / // __  / /|_/ /  / /   / / __ \\/ / / / __  /  / / __/ __ `/ ___/ __ `/ __ `/ _ \\\n     _/ // /_/ / /  / /  / /___/ / /_/ / /_/ / /_/ /  / /_/ / /_/ / /  / /_/ / /_/ /  __/\n    /___/_____/_/  /_/   \\____/_/\\____/\\__,_/\\__,_/   \\____/\\__,_/_/   \\__,_/\\__, /\\___/\n                                                                            /____/\n    Run 'image-help' to get a list of available tools, scripts, and ENV properties\n    ```\n\n    The `image-help` command shows what can be done in this container:\n\n    ```bash\n    $ image-help\n    Available env properties (can be overridden for individual commands):\n    > BM_API_KEY - the IBM Cloud api key\n    > REGION - the IBM Cloud region (e.g. us-south)\n    > RESOURCE_GROUP - the IBM Cloud resource group\n    > CLUSTER_NAME - the name of the kubernetes cluster in IBM Cloud\n    > SL_USERNAME - the Classic Infrastructure user name or API user name (e.g. 282165_joe@us.ibm.com)\n    > SL_API_KEY - the Classic Infrastructure api key\n\n    Available tools:\n    > terraform (with helm, kube, and ibm provider plugins)\n    > calicoctl\n    > ibmcloud (with container-service, container-registry, and cloud-databases plugins)\n    > kubectl\n    > kustomize\n    > oc\n    > helm\n    > docker\n    > git\n    > nvm\n    > node (v11.12.0 currently installed)\n    > yo\n\n    Available scripts:\n    > init.sh {BM_API_KEY} {REGION} {RESOURCE_GROUP} {CLUSTER_NAME}\n    > createNamespaces.sh\n    > deleteNamespace.sh\n    > installHelm.sh\n    > cluster-pull-secret-apply.sh\n    > setup-namespace-pull-secrets.sh\n    > checkPodRunning.sh\n    > copy-secret-to-namespace.sh\n    ```\n\n\nexport const _frontmatter = {}\n")))}o.isMDXComponent=!0},440:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},441:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},442:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(440),_=a(0),s=a.n(_),i=a(105),o=a.n(i),c=a(195),l=a(127),b=a(3),p=a.n(b),u=a(384),d=function(e){var t,a=e.title,r=e.tabs,_=void 0===r?[]:r;return Object(n.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=_.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:u.text},a)))))},m=a(441),h=a(385),g=function(e){var t=e.relativePagePath,a=e.repository,r=m.data.site.siteMetadata.repository,_=a||r,s=_.baseUrl,i=_.subDirectory,o=s+"/edit/"+_.branch+i+"/src/pages"+t;return s?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},v=a(193),O=(a(59),a(26)),f=a(386);var j=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],_=t.map((function(e){var t,_=o()(e,{lower:!0}),s=_===r,i=new RegExp(r+"(?!-)"),c=a.replace(i,_);return Object(n.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=s,t),f.listItem)},Object(n.b)(O.Link,{className:f.link,to:""+c},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},_))))))},r}(s.a.Component),y=a(194);t.a=function(e){var t=e.pageContext,a=e.children,_=e.location,s=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,m=b.tabs,h=b.title,O=b.theme,f=b.description,N=b.keywords,w=r.data.site.pathPrefix,x=w?_.pathname.replace(w,""):_.pathname,E=m?x.split("/").slice(-1)[0]||o()(m[0],{lower:!0}):"";return Object(n.b)(l.a,{homepage:!1,theme:O,pageTitle:h,pageDescription:f,pageKeywords:N,titleType:u},Object(n.b)(d,{title:s?Object(n.b)(s,null):h,label:"label",tabs:m}),m&&Object(n.b)(j,{slug:x,tabs:m,currentTab:E}),Object(n.b)(y.a,{padded:!0},a,Object(n.b)(g,{relativePagePath:p})),Object(n.b)(v.a,{pageContext:t,location:_,slug:x,tabs:m,currentTab:E}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-tools-image-index-mdx-e66a6984d08156800b04.js.map