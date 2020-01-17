(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{435:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return i})),t.d(a,"default",(function(){return m}));t(11),t(5),t(6),t(4),t(10),t(1),t(0);var n=t(108),p=t(449);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i={},o=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)}},b=o("PageDescription"),c=o("AnchorLinks"),l=o("AnchorLink"),s={_frontmatter:i},d=p.a;function m(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,["components"]);return Object(n.b)(d,r({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use IBM Cloud Pak for Applications to integrate microservices")),Object(n.b)("p",null,"For this homework, you will use two existing applications and deploy them as a set of microservices using the CP4Apps workflow."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.93798449612404%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAABpElEQVQoz2WQXWsTQRSG9397pSD0RhFE0QtB0CJFKaGVxibQ1KSNSXab7Cab2Ux2dz53vmfX/gQnVLDgc3POwPue95yJsrPzeJYsVmmFm6s4L2e3ZHqjfWt0QFlrjTHqEVIpb6VtjfI+Ahv4dfGiF79Jk83J6tn54hMmQdJARLdVtbxLAAC8aSjnjDFCqOB4+EtNewkbDqN1mn84ffnl4n1If/ft6OTsIyqRCOY9riDJspxxbkXDIQyNlOp3Z29TG/9I8eg6qus6W27yDDBGQ1MASAgxxqar+GpwmcQQh8RtXgyGyTKRnGtjWqfae19TGrUHvBSCUiqV7LrOOtdZezoZP//ek4wgjJWWGyx2qFmXuAvWMMBYinEUqvc+pB0ff07TNDwJZVqQ/hy/GnSK14Q5tnr68/r1KGNvb540etufZL1RQgmJwn8655qmmYzH4YRg1trce91f1EcXkiFY1nS/m0F4lxQi2U8RY/N1NVmWNcIH8wOHVf7irNEZqOeAU4yEENZ12rZB4Uz3oAqXIoT+mR8TFFW53+9AURTgwPZ/8jz/A88oywlbD1k5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Frontend Backend Demo",title:"Frontend Backend Demo",src:"/ibm-garage-developer-guide/static/d7e4bd08eece95700746227611ce7769/fb070/cp4apps-front-back.png",srcSet:["/ibm-garage-developer-guide/static/d7e4bd08eece95700746227611ce7769/d6747/cp4apps-front-back.png 288w","/ibm-garage-developer-guide/static/d7e4bd08eece95700746227611ce7769/09548/cp4apps-front-back.png 576w","/ibm-garage-developer-guide/static/d7e4bd08eece95700746227611ce7769/fb070/cp4apps-front-back.png 1152w","/ibm-garage-developer-guide/static/d7e4bd08eece95700746227611ce7769/fb104/cp4apps-front-back.png 1728w","/ibm-garage-developer-guide/static/d7e4bd08eece95700746227611ce7769/902fb/cp4apps-front-back.png 2304w","/ibm-garage-developer-guide/static/d7e4bd08eece95700746227611ce7769/7ebc6/cp4apps-front-back.png 5160w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "),Object(n.b)("p",null,"This guide assumes the following:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"You are using a Developer Tools environment that has already been installed."),Object(n.b)("li",{parentName:"ol"},"Cloud Pak for Applications has already been installed in the environment."),Object(n.b)("li",{parentName:"ol"},"You already completed ",Object(n.b)("a",r({parentName:"li"},{href:"/ibm-garage-developer-guide/practical/cp4apps"}),"CP4Apps homeworks"),".")),Object(n.b)("p",null,"This guide consists of the following sections:"),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(l,{to:"#deploy-existing-backend-as-appsody-app",mdxType:"AnchorLink"},"Deploy existing backend as Appsody app"),Object(n.b)(l,{to:"#deploy-existing-frontend-as-appsody-app",mdxType:"AnchorLink"},"Deploy existing frontend as Appsody app"),Object(n.b)(l,{to:"#verify-deployed-microservice-app",mdxType:"AnchorLink"},"Verify deployed microservice app")),Object(n.b)("h2",{id:"deploy-existing-backend-as-appsody-app"},"Deploy existing backend as Appsody app"),Object(n.b)("p",null,"Create a backend app from an Appsody template, set it up for Appsody, and connect the repo to a pipeline."),Object(n.b)("p",null,"First, create a backend app from an existing template."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Go to the template ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/kabanero-demo/appsody-backend"}),"https://github.com/kabanero-demo/appsody-backend"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Complete the ",Object(n.b)("a",r({parentName:"p"},{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template"}),"GitHub create repository from template")," process"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Owner"),": Select the GitHub organization for your team")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Repository name"),": Use a name like ",Object(n.b)("inlineCode",{parentName:"p"},"appsody-backend-{initials}")))),Object(n.b)("p",{parentName:"li"},"The new repository will be created in your selected organization.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Clone the new Github repo locally"))),Object(n.b)("p",null,"Second, set up the cloned template with Appsody."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Initialize the backend as an Appsody Express.js app"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"appsody init kabanero-0.2.1/nodejs-express none\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use Appsody to run the backend"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"appsody run -p 3001:3000 -p 9230:9229 -p 8081:8080\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Test the running backend, accessible at ",Object(n.b)("a",r({parentName:"p"},{href:"http://localhost:3001"}),"http://localhost:3001")," (port 3000 will be use later for frontend)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add deployment manifest"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"appsody deploy --generate-only\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the generated file, ",Object(n.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Specify the namespace to deploy the application into",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"metadata:\n  namespace: dev-{initials}\n"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Commit and push the new Appsody-related files"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),'git add .\ngit commit -m "Add appsody files"\ngit push\n')))),Object(n.b)("p",null,"Third, connect the repo to the Tekton pipeline."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a webhook for your GitHub repo to trigger a Tekton pipeline, as described in ",Object(n.b)("a",r({parentName:"li"},{href:"/ibm-garage-developer-guide/practical/cp4apps#build-an-app-with-a-tekton-pipeline"}),"Tekton Pipelines Homework"))),Object(n.b)("h2",{id:"deploy-existing-frontend-as-appsody-app"},"Deploy existing frontend as Appsody app"),Object(n.b)("p",null,"Create a frontend app from an Appsody template, set it up for Appsody and connect it to the backend, and connect the repo to a pipeline."),Object(n.b)("p",null,"First, create a frontend app from an existing template."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Repeat the steps above to create a repo from a template:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Template"),": ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/kabanero-demo/appsody-frontend"}),"https://github.com/kabanero-demo/appsody-frontend"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Owner"),": Select the GitHub organization for your team")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Repository name"),": Use a name like ",Object(n.b)("inlineCode",{parentName:"p"},"appsody-frontend-{initials}"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Clone the new Github repo locally"))),Object(n.b)("p",null,"Second, set up the cloned template with Appsody and connect it to the backend."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Initialize the frontend as an Appsody Express.js app"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"appsody init kabanero-0.2.1/nodejs-express none\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use Appsody to run the frontend"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"appsody run\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Test the running frontend, accessible at ",Object(n.b)("a",r({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," (port 3001 is used by the backend)"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Make sure the backend is running with Appsody and exposed on port 3001")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Test the app by adding a new user")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Repeat the steps above to add the Appsody deployment manifest and edit its namespace to ",Object(n.b)("inlineCode",{parentName:"p"},"dev-{initials}"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Also in ",Object(n.b)("inlineCode",{parentName:"p"},"app-deploy.yaml"),", add an environment variable to link the frontend service to the backend service"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"spec:\n  env:\n    - name: APPSODY_BACKEND_DEFAULT_URL\n      value: http://appsody-backend-{initials}:3000/\n")),Object(n.b)("p",{parentName:"li"},"  (On the server, the frontend and backend will both listen on port 3000 (in different pods).)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Commit and push your changes to Git"))),Object(n.b)("p",null,"Third, connect the repo to the Tekton pipeline."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a webhook")),Object(n.b)("h2",{id:"verify-deployed-microservice-app"},"Verify deployed microservice app"),Object(n.b)("p",null,"The webhooks should have triggered the pipelines to deploy the frontend and backend to your OpenShift project. Let’s verify the apps are in OpenShift and running correctly."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the OpenShift web console, navigate to your project and its deployments")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Verify there are two applications corresponding to the frontend (",Object(n.b)("inlineCode",{parentName:"p"},"appsody-frontend-{initials}"),") and backend (",Object(n.b)("inlineCode",{parentName:"p"},"appsody-backend-{initials}"),") services"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.44703595724003%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAABYlAAAWJQFJUiTwAAACMUlEQVQoz4VSS2/TQBA2ihryOLRKyrGnFETSvOw2dpyXW1DVEyd+KFSopI9AEfwNhKBA0tiO7fXu2uv12mZciSNiNDuaWe3Mfvt9K9Xr9b29vd3dJ7VabWdnZ3t7u1KpbG0Vi49LhUJB+mvlUqlarZbL5RJ4qVQsFiXpkdTqHjbbcqurNJ4dKOp4NHsxnBxrY0MfG6o+GwwnA93Qpifj2YmqT6GEqI2MifFSHU2l3uGofzTuKPp+S353MSeELFcrx0MuYUHIGItYFEWcw8orxsIHhxJc0s5eG6evxsdnsmZ8+vwlyzI4nKRpLBKw9B8mhOCcS8rk9Eg/lrVZW9ZvFrdpkiCEwjDM/mcwQjroq4C82TlqPO9dzK8Aqu/7AB5G2LYNCUSMcRAEEE3ThASi53kAUGrLWvdQh7jf7F0uPgqAzTkM5iKJH2DTIIRHQgbvwJSKJA0Yo0EAOxJQld/cGzxtyfP3lww52LFjSuKAcoKJ63BKmI8ijCOSO+yHPophCtwMzYo66cjDRrN/9eYt9XzbtJnnCOQGzsZbrSJvs/l1R8x16Nj3376GG8u++279/BGvl3kzdDa7g0ZLvj4/ZyS0zE2IUIyRwL4gOKM4sE3uOQlGaPk7cjfUWqP7ZWqucp0VbdpWhvBHrhe3JM7WLsEBiJxLCSpnIsaex3KczLVtiL7rOJaZCCEd9NSuPIR/AoRff7gFriwc4Qh4yWDFIgXygDLOc/qQ74PClFLQAgj7Ax+17eY9P5L1AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Frontend Backend Console",title:"Frontend Backend Console",src:"/ibm-garage-developer-guide/static/a11c72cd5454b1afac20d057b698449c/fb070/ocp-console-front-back.png",srcSet:["/ibm-garage-developer-guide/static/a11c72cd5454b1afac20d057b698449c/d6747/ocp-console-front-back.png 288w","/ibm-garage-developer-guide/static/a11c72cd5454b1afac20d057b698449c/09548/ocp-console-front-back.png 576w","/ibm-garage-developer-guide/static/a11c72cd5454b1afac20d057b698449c/fb070/ocp-console-front-back.png 1152w","/ibm-garage-developer-guide/static/a11c72cd5454b1afac20d057b698449c/fb104/ocp-console-front-back.png 1728w","/ibm-garage-developer-guide/static/a11c72cd5454b1afac20d057b698449c/7d00d/ocp-console-front-back.png 2058w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Access the route for the frontend service and register a new user"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.84121621621622%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABs0lEQVQoz41Ry27aQBTlZ6pEkRJDKYSCskpYRanyS911kUW/octKXbRS1UWkLIDUHo9f4NhgY0xIysPGrxkbmoU9yUCaVUOUq6PRvTP36Ny5J1cuMXmGKZWr78uVWp45qtZOjuof6vWTw8OD/cou83avUGQK7/byxUq1Vizt0yRfKG3v7L7Z2smxHOR4yAJeAECHQOM5lb2Umg251RB/s1AQoSgKksRD4eOnz1++fuNlqcFxTZZjAcjdvzLIvdDWp463Sgl5vMtlhKywDrJGmqYBwiGOcbKI4gQ9nSnJFnd3eLGgTyhJaO8zymmWhXGiW9dAuerZ14pudq2h0NHFq66gdkW1NxxP8XK5Uv6fTEcIMP7jzLW+DdtaCypNXv510Tpvgp49knXDvh3Hy78byIR4EZq43nTuyZrR1gyxo0tq9xIqo8ls5geOH9BfbFImfoRuZ65qWIY9UkwLmn2xb3XMgWYO9MFw7M5fIGc+Qh7CThjGKD7r8cfc91Pw4+eNSffmRhGdazOZELptf40QxX1vLjsTxZ3cBAEtKdMLEd5EXi38Kdb+EWoyBcn+OfpoK217AAhrNucgz1VXAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Frontend Route",title:"Frontend Route",src:"/ibm-garage-developer-guide/static/49e782ef08c49a9078b6a4a3609683ae/fb070/frontend-running.png",srcSet:["/ibm-garage-developer-guide/static/49e782ef08c49a9078b6a4a3609683ae/d6747/frontend-running.png 288w","/ibm-garage-developer-guide/static/49e782ef08c49a9078b6a4a3609683ae/09548/frontend-running.png 576w","/ibm-garage-developer-guide/static/49e782ef08c49a9078b6a4a3609683ae/fb070/frontend-running.png 1152w","/ibm-garage-developer-guide/static/49e782ef08c49a9078b6a4a3609683ae/fb104/frontend-running.png 1728w","/ibm-garage-developer-guide/static/49e782ef08c49a9078b6a4a3609683ae/902fb/frontend-running.png 2304w","/ibm-garage-developer-guide/static/49e782ef08c49a9078b6a4a3609683ae/83c2c/frontend-running.png 2368w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")))))}m.isMDXComponent=!0},447:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},448:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},449:function(e,a,t){"use strict";t(32),t(28);var n=t(1),p=t(447),r=t(0),i=t.n(r),o=t(107),b=t.n(o),c=t(195),l=t(128),s=t(3),d=t.n(s),m=t(388),g=function(e){var a,t=e.title,p=e.tabs,r=void 0===p?[]:p;return Object(n.b)("div",{className:d()(m.pageHeader,(a={},a[m.withTabs]=r.length,a))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},t)))))},u=t(448),O=t(389),j=function(e){var a=e.relativePagePath,t=e.repository,p=u.data.site.siteMetadata.repository,r=t||p,i=r.baseUrl,o=r.subDirectory,b=i+"/edit/"+r.branch+o+"/src/pages"+a;return i?Object(n.b)("div",{className:"bx--row "+O.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},h=t(193),f=(t(59),t(26)),y=t(390);var N=function(e){var a,t;function p(){return e.apply(this,arguments)||this}return t=e,(a=p).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,p.prototype.render=function(){var e=this.props,a=e.tabs,t=e.slug,p=t.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var a,r=b()(e,{lower:!0}),i=r===p,o=new RegExp(p+"(?!-)"),c=t.replace(o,r);return Object(n.b)("li",{key:e,className:d()((a={},a[y.selectedItem]=i,a),y.listItem)},Object(n.b)(f.Link,{className:y.link,to:""+c},e))}));return Object(n.b)("div",{className:y.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:y.list},r))))))},p}(i.a.Component),A=t(194);a.a=function(e){var a=e.pageContext,t=e.children,r=e.location,i=e.Title,o=a.frontmatter,s=void 0===o?{}:o,d=a.relativePagePath,m=a.titleType,u=s.tabs,O=s.title,f=s.theme,y=s.description,v=s.keywords,k=p.data.site.pathPrefix,w=k?r.pathname.replace(k,""):r.pathname,x=u?w.split("/").slice(-1)[0]||b()(u[0],{lower:!0}):"";return Object(n.b)(l.a,{homepage:!1,theme:f,pageTitle:O,pageDescription:y,pageKeywords:v,titleType:m},Object(n.b)(g,{title:i?Object(n.b)(i,null):O,label:"label",tabs:u}),u&&Object(n.b)(N,{slug:w,tabs:u,currentTab:x}),Object(n.b)(A.a,{padded:!0},t,Object(n.b)(j,{relativePagePath:d})),Object(n.b)(h.a,{pageContext:a,location:r,slug:w,tabs:u,currentTab:x}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-practical-cp-4-apps-2-index-mdx-23bbf4072a112947b3a0.js.map