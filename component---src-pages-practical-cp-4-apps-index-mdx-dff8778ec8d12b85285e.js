(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{432:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(108),i=a(449);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},r=o("PageDescription"),b=o("AnchorLinks"),c=o("AnchorLink"),s=o("InlineNotification"),d={_frontmatter:l},m=i.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(m,p({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(r,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use IBM Cloud Pak for Applications to build new cloud-native applications")),Object(n.b)("p",null,"This guide assumes the following:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"You are using a Developer Tools environment that has already been installed."),Object(n.b)("li",{parentName:"ol"},"Cloud Pak for Applications has already been installed in the environment.")),Object(n.b)("p",null,"This guide consists of the following sections:"),Object(n.b)(b,{mdxType:"AnchorLinks"},Object(n.b)(c,{to:"#cp4apps-dashboard",mdxType:"AnchorLink"},"CP4Apps Dashboard"),Object(n.b)(c,{to:"#cp4apps-dev-tools",mdxType:"AnchorLink"},"CP4Apps Dev Tools"),Object(n.b)(c,{to:"#create-a-new-app-using-the-appsody-cli",mdxType:"AnchorLink"},"Create a new app using the Appsody CLI"),Object(n.b)(c,{to:"#create-a-new-app-using-codewind",mdxType:"AnchorLink"},"Create a new app using Codewind"),Object(n.b)(c,{to:"#build-an-app-with-a-tekton-pipeline",mdxType:"AnchorLink"},"Build an app with a Tekton pipeline"),Object(n.b)(c,{to:"#scale-to-zero-serverless",mdxType:"AnchorLink"},"Scale to zero with Serverless")),Object(n.b)("h2",{id:"cp4apps-dashboard"},"CP4Apps dashboard"),Object(n.b)("p",null,"Open the Cloud Pak for Applications dashboard."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the OpenShift web console")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the App Launcher and select “Cloud Pak for Applications”"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",p({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.213483146067414%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAABYlAAAWJQFJUiTwAAABbElEQVQY02OQk5bk5eHm5GBnY2Pj4OBgYWEGMtnZ2RlggIWFRUBAgJODg4eHh4+Xl4uDjYudjZmRESRnGRRbXN+Skl8Sm5qVkp2fklOUXlje2t7R1d0NxO2dnTOmTy+vqJSQlpeWUZCSVZTTMlbUNZXTNBSTUWDwaJjZu3pX37q9kzcd6Fm7r3nhxu6lW588ffH3z58f/////vv3////x46ftHPxNjG307d0MiqcbFkxx7xoipaNJ4NWSJaQdaCYQ7iiXwqvQwSDkQ+zvmdiVXt597SCjmlF7ZNLK2tT0zJd3H1sHVytbJ3UdIxUtI3UDK019MwYBEw85GwDBPSdRE09pa18BQxd5eyDWFWsGOVNGWWNmWVNtC2ddSwctQwttfRMtfTNdI0stA0s9ExttQzMGXj1nRhVrZhULBmVzBmBpIolkM2qbsOqYcesas1v4Kpn5WJi5WBm42RgYm1gaqNvYq1jaAE0SFPPFAC8eWHhYJNr8gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CP4Apps Launcher",title:"CP4Apps Launcher",src:"/ibm-garage-developer-guide/static/8746823c7aa4e73de14f7e48bc0d542c/fb070/icp4apps-launcher.png",srcSet:["/ibm-garage-developer-guide/static/8746823c7aa4e73de14f7e48bc0d542c/d6747/icp4apps-launcher.png 288w","/ibm-garage-developer-guide/static/8746823c7aa4e73de14f7e48bc0d542c/09548/icp4apps-launcher.png 576w","/ibm-garage-developer-guide/static/8746823c7aa4e73de14f7e48bc0d542c/fb070/icp4apps-launcher.png 1152w","/ibm-garage-developer-guide/static/8746823c7aa4e73de14f7e48bc0d542c/d7e8c/icp4apps-launcher.png 1602w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")))),Object(n.b)("p",null,"In the CP4Apps dashboard, familiarize yourself with the console pages."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Explore the Instance, Docs, and Guides pages"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",p({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.14112291350531%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAABYlAAAWJQFJUiTwAAACX0lEQVQoz31R21LaUBTNkw++6OjoH/g/MhYesBae+bqqQLgkSAK5cL/WKQIqIReSlpYQEhpwsCuJ+tKZrkn2WXudvc85e2/i+Pj47Oxsb29vf3//4OAA7uHh4cnJyenp6dHREfF/xOPxRCIRjUYvLy9hY7HYl6urz9FooITD4dD5Ob6Li0+RSOQiFPLcdxDr9XowGJim+fr6ut1up9Opoqrb3Q6uZVmapu18joDn5+fVagUeKAABv9FoaNoMimM7kqxIwweHo19cd7G0pNHQrTDgv+bzsSSbdf5l+uTudhvX3Ww2hGWtXNfFEYvFYrk0bcexwYffFzPNsm3Htk1ZMn8Y1mrlrP8sDf03XMSZMEtCkqTJZDLzoXlQNaw/5wGXZVkzDM3f8riua7qhKAqCUSABaTQafb2+SabShcJdkWFhWYYVxUqpzDEMS1EFsVKhCwWGLZFkhmFZjucpih6Px14yljSZQQ5NI7uIvWwu3253OI4vc3wuR2Wy2WQy1Wq18nkqmUrVavVkMo3+vd18i3vJDCy2r29uyUw2lwOlVVXVPczw+3xmGAaIYehIJPB0lI3DkMMLIi8IRYbheaFaqwmCiAiEqoqHYA0UX1C8mx8fH2v1Rq/fx1O7ne63+/tms9VsNDudLoggiji6Xm+Iogi31W5XqlWQXq9P4IDB4IEks3d3RbSrzHGweDNaQNEFhimxbIktldBIfNjieAEKSK/Xe2sYJFQelIDJgcBK7wjcwH7I3qiwYIbz+RydCLoSlOTPGXPVgzo/gJwP8paMvj/5wCtwOAh0cFgkB/f8i7+P6rNzvv06pgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CP4Apps Landing",title:"CP4Apps Landing",src:"/ibm-garage-developer-guide/static/ef7771b0193595ecb2ebe01fbf1484c2/fb070/icp4apps-landing.png",srcSet:["/ibm-garage-developer-guide/static/ef7771b0193595ecb2ebe01fbf1484c2/d6747/icp4apps-landing.png 288w","/ibm-garage-developer-guide/static/ef7771b0193595ecb2ebe01fbf1484c2/09548/icp4apps-landing.png 576w","/ibm-garage-developer-guide/static/ef7771b0193595ecb2ebe01fbf1484c2/fb070/icp4apps-landing.png 1152w","/ibm-garage-developer-guide/static/ef7771b0193595ecb2ebe01fbf1484c2/7ae50/icp4apps-landing.png 1318w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")))),Object(n.b)("h2",{id:"cp4apps-dev-tools"},"CP4Apps Dev Tools"),Object(n.b)("p",null,"Set up the dev tools."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the CP4Apps dashboard, on the Home page, go to the Let’s get started! section")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Press Setup Dev Tools to see the instructions we’ll follow below"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",p({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.99999999999999%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABe0lEQVQoz3VRXW+CQBD0//+fNn1r+9Iq3wd6wJ0gH6IgFkwbATmUjhAfaurkstnb3dnLzE32+68wilRVQ9ymqUHMdZI4jmtacxzGl6ikadr3/eVy6f9isstzRQFXd102nUlPzy9xvFZU7fXtXdP0mSRLsloU5f/kpmmOx+PpdBJCfP/8tG1b17UQLeqonNq2E13/AJM839u2Q217FYRLz4/i2GUcOaV2EISGQTab7UMynsKzzQA8VVf1mLQDxqRu6qqqjtW1h4B407zbQfJgjzVfUFlRJVnBIcQyTUs3CAwjpkUQiSnLqq7jNofAKzlNM00zQINJmEbj43Oq6Qa2MM6xD9MYHzZDnMMYp7azWFB801Wzi8LSQxNq4Tl6/mp1neJLTPv+CsmhPIxCIAoyYSriBB8wCsTlfD7jR+AAclS6rkNldAQR13vDQE6ShFIahmE3AC44jhMEwUiIoohz7nlelmX3ZOwuy5IxBg5yMQCLiqI4DwBf3HBH/gWkGF5KQGYwLgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Setup CP4Apps Dev Tools",title:"Setup CP4Apps Dev Tools",src:"/ibm-garage-developer-guide/static/d638b709661077edefabda195de4042d/fb070/icp4apps-devtools.png",srcSet:["/ibm-garage-developer-guide/static/d638b709661077edefabda195de4042d/d6747/icp4apps-devtools.png 288w","/ibm-garage-developer-guide/static/d638b709661077edefabda195de4042d/09548/icp4apps-devtools.png 576w","/ibm-garage-developer-guide/static/d638b709661077edefabda195de4042d/fb070/icp4apps-devtools.png 1152w","/ibm-garage-developer-guide/static/d638b709661077edefabda195de4042d/c3bf2/icp4apps-devtools.png 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")))),Object(n.b)("p",null,"Install Codewind and Appsody."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If using the VS Code IDE, install ",Object(n.b)("a",p({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=IBM.codewind"}),"Codewind from the VS Code Marketplace"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If using the Eclipse IDE, install ",Object(n.b)("a",p({parentName:"p"},{href:"https://marketplace.eclipse.org/content/codewind"}),"Codewind from the Eclipse Marketplace"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Install the ",Object(n.b)("a",p({parentName:"p"},{href:"https://appsody.dev/docs/getting-started/installation"}),"Appsody CLI")))),Object(n.b)("p",null,"We’ve installed both Codewind and Appsody to show you how to use both. As you’ll see, they have many features in common."),Object(n.b)("h2",{id:"create-a-new-app-using-the-appsody-cli"},"Create a new app using the Appsody CLI"),Object(n.b)("p",null,"Now that we’ve installed the Appsody CLI, we’ll configure it and use it to implement an app."),Object(n.b)("h3",{id:"configure-the-appsody-cli"},"Configure the Appsody CLI"),Object(n.b)("p",null,"The CP4Apps installation in your OpenShift cluster includes an instance of Kabanero Enterprise. In the CP4Apps dashboard, the Instance page shows details about this Kabanero Enterprise instance. Configure your Appsody CLI to access this instance."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the CP4Apps dashboard, go to the Instance page")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Collection Hub section, copy the Appsody URL (i.e. {Appsody-URL})")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add the repository in Kabanero Enterprise to your local Appsody CLI’s configuration"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"appsody repo add kabanero-0.2.1 {Appsody-URL}\n")),Object(n.b)("p",{parentName:"li"},"  For example:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"appsody repo add kabanero-0.2.1 https://github.com/kabanero-io/collections/releases/download/0.2.1/kabanero-index.yaml\n")))),Object(n.b)("p",null,"Make the repo in Kabanero Enterprise the default, as shown by the astrix (",Object(n.b)("inlineCode",{parentName:"p"},"*"),") in the list of repos."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set the default repo and list them"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"$ appsody repo set-default kabanero-0.2.1\n$ appsody repo list\n\nNAME                    URL\n*kabanero-0.2.1         https://github.com/kabanero-io/collections/releases/download/0.2.1/kabanero-index.yaml\nincubator               https://github.com/appsody/stacks/releases/latest/download/incubator-index.yaml\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"List the technology stacks included in the repo"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"$ appsody list kabanero-0.2.1\n\nREPO            ID                      VERSION         TEMPLATES               DESCRIPTION\nkabanero-0.2.1  java-microprofile       0.2.18          *default                Eclipse MicroProfile on Open Liberty & OpenJ9 using Maven\nkabanero-0.2.1  java-spring-boot2       0.3.15          *default, kotlin        Spring Boot using OpenJ9 and Maven\nkabanero-0.2.1  nodejs                  0.2.5           *simple                 Runtime for Node.js applications\nkabanero-0.2.1  nodejs-express          0.2.7           scaffold, *simple       Express web framework for Node.js\nkabanero-0.2.1  nodejs-loopback         0.1.5           *scaffold               LoopBack 4 API Framework for Node.js\n")),Object(n.b)("p",{parentName:"li"},"  Notice that the stacks listed are the same as the list of Collections back on the Instance page."))),Object(n.b)("h3",{id:"create-an-application"},"Create an application"),Object(n.b)("p",null,"Now that we’ve configured our Appsody CLI, let’s use it to create an application."),Object(n.b)("p",null,"Create an application named ",Object(n.b)("inlineCode",{parentName:"p"},"nodejs-express-{initials}")," using Appsody and the Kabanero Enterprise application stack in our cluster."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create an empty project directory named ",Object(n.b)("inlineCode",{parentName:"p"},"nodejs-express-{initials}")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"mkdir -p ~/projects/nodejs-express-{initials}\ncd ~/projects/nodejs-express-{initials}\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Initialize the project"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"appsody init kabanero-0.2.1/nodejs-express\n")))),Object(n.b)("p",null,"To run the application, you don’t need to have node.js or the Java SDK installed on your workstation. The application will run in a container that includes all of the tools."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Start the application",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"appsody run\n")))),Object(n.b)("p",null,"Whenever any of the application files are edited, Kabanero Enterprise detects the change and automatically restarts the application."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Using your favorite editor, edit ",Object(n.b)("inlineCode",{parentName:"p"},"app.js"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Change the response to ",Object(n.b)("inlineCode",{parentName:"p"},"Hello Garage"),"."))),Object(n.b)("p",null,"Notice that the change is detected and the application automatically restarted."),Object(n.b)(s,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Each Appsody stack comes with instrumentation that you can access with the following endpoints:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Application endpoint: ",Object(n.b)("a",p({parentName:"li"},{href:"http://localhost:3000/"}),"http://localhost:3000/")),Object(n.b)("li",{parentName:"ul"},"Health endpoint: ",Object(n.b)("a",p({parentName:"li"},{href:"http://localhost:3000/health"}),"http://localhost:3000/health")),Object(n.b)("li",{parentName:"ul"},"Liveness endpoint: ",Object(n.b)("a",p({parentName:"li"},{href:"http://localhost:3000/live"}),"http://localhost:3000/live")),Object(n.b)("li",{parentName:"ul"},"Readiness endpoint: ",Object(n.b)("a",p({parentName:"li"},{href:"http://localhost:3000/ready"}),"http://localhost:3000/ready")),Object(n.b)("li",{parentName:"ul"},"Metrics endpoint: ",Object(n.b)("a",p({parentName:"li"},{href:"http://localhost:3000/metrics"}),"http://localhost:3000/metrics")),Object(n.b)("li",{parentName:"ul"},"Dashboard endpoint: ",Object(n.b)("a",p({parentName:"li"},{href:"http://localhost:3000/appmetrics-dash"}),"http://localhost:3000/appmetrics-dash")," (development only)"))),Object(n.b)("p",null,"While the application is running, experiment with using its instrumentation endpoints."),Object(n.b)("p",null,"When you’re through with the application, stop it."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open another shell and switch to the same application directory (e.g. `",Object(n.b)("inlineCode",{parentName:"p"},"~/projects/nodejs-express-{initials}"),")`")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Stop the application"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"appsody stop\n")))),Object(n.b)("h2",{id:"create-a-new-app-using-codewind"},"Create a new app using Codewind"),Object(n.b)("p",null,"Now that we’ve installed the Codewind plugin, we’ll configure it and use it to implement an app."),Object(n.b)("h3",{id:"configure-the-codewind-plugin"},"Configure the Codewind plugin"),Object(n.b)("p",null,"The CP4Apps installation in your OpenShift cluster includes an instance of Kabanero Enterprise. In the CP4Apps dashboard, the Instance page shows details about this Kabanero Enterprise instance. Configure your Codewind plugin to access this instance."),Object(n.b)("p",null,"Set the Collection Hub URL."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If using the VS Code IDE, see ",Object(n.b)("a",p({parentName:"p"},{href:"https://www.eclipse.org/codewind/mdt-vsc-usingadifferenttemplate.html"}),"Configuring template sources for VS Code"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If using the Eclipse IDE, See ",Object(n.b)("a",p({parentName:"p"},{href:"https://www.eclipse.org/codewind/mdteclipseusingadifferenttemplate.html"}),"Configuring template sources for Eclipse")))),Object(n.b)("h3",{id:"create-an-application-1"},"Create an application"),Object(n.b)("p",null,"Now that we’ve configured our Codewind plugin, let’s use it to create an application."),Object(n.b)("p",null,"Create an application named ",Object(n.b)("inlineCode",{parentName:"p"},"nodejs-express-{initials}")," using Codewind and the Kabanero Enterprise application stack in our cluster."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select Projects (Local), then select New Project")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the “Kabanero Node.js Express simple template (Appsody Stacks - kabanero-0.2.1)” template from the list")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Specify a name, such as ",Object(n.b)("inlineCode",{parentName:"p"},"nodejs-express-{initials}")))),Object(n.b)("p",null,"The application will start."),Object(n.b)("p",null,"To work with the source code, right click on Projects and select Open CodeWind Workspace."),Object(n.b)("p",null,"Experiment with using Codewind to perform actions on your running application."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the CodeWind view, right click on your application to see the actions the plugin can perform"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",p({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.03734439834026%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2UlEQVQoz1WQ2W7bMBBF9Q99LFLb2ixL0b5YIiUvMmlttiQv8h47TpqlSNG4QD+hL/3r0lUf2sHh5QVmhsQM5dg2SqbZNIcQmn/C+j8Mw/BcL0uzMBzZjqOZZstW6cByPZeSxU5b78JgiMOQFHYEodVo0K3WlWaTZRiiLvBP58fD6X6zP+SLJW8avGd7AFC8YkiqNRmMIc7640mAUqeHQBgRfJQoXZ9XTLuH5vtzdfc4257K3SEsC6kPPOBRN934w2Bnze+U1UVZfVPX7wR9e9E3V4TyVcifxHDq5wsnLbtpEZQzFQ9paF2bRVGSJAEhiFCEEB6NUEgOwgQ8jlzXUxUtA/HX6uXL8nk3XKyCfAbSOIig71OSdMvwHC3xHYHMWyN0OiJ5lNwkS/ToT36df/w8fn+Diwcze3LLfb8AEFybOY5vc22iLMsRrU3tidI0ozlWNi9wlsRlDsejhiFzwARkYeSHZrNFVsswHMNyf/UfSAYAuK7Ww8EwiRMylGpagq7y7TZl63LYg3gQmMqtIYumLOqyWJsaXRIAhMV8GaWT0TjWLEe1bFnT2E8fKTOq0uMbAW+e8fYVb1+sqNLxUkU1lRzOzLgqHt7Lz5dgfqJBxMKE89MbI/wN+YmK3PXvjDMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CodeWind Options",title:"CodeWind Options",src:"/ibm-garage-developer-guide/static/379564a6e723cf046c78ab8c0c57f12c/fb070/codewind.png",srcSet:["/ibm-garage-developer-guide/static/379564a6e723cf046c78ab8c0c57f12c/d6747/codewind.png 288w","/ibm-garage-developer-guide/static/379564a6e723cf046c78ab8c0c57f12c/09548/codewind.png 576w","/ibm-garage-developer-guide/static/379564a6e723cf046c78ab8c0c57f12c/fb070/codewind.png 1152w","/ibm-garage-developer-guide/static/379564a6e723cf046c78ab8c0c57f12c/9f1f4/codewind.png 1446w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Perform each of the actions on your application:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Open App"),Object(n.b)("li",{parentName:"ul"},"Open Project Overview, verify the ports and status"),Object(n.b)("li",{parentName:"ul"},"Open Container Shell, explore the filesystem"),Object(n.b)("li",{parentName:"ul"},"Open Application Monitor, use the application and see the traffic metrics"),Object(n.b)("li",{parentName:"ul"},"Open Performance Dashboard and run a load test, see the traffic metrics"),Object(n.b)("li",{parentName:"ul"},"Restart in Debug mode, insert a break point in ",Object(n.b)("inlineCode",{parentName:"li"},"app.js")," and run the app to stop the application in debug view")))),Object(n.b)("h2",{id:"build-an-app-with-a-tekton-pipeline"},"Build an app with a Tekton pipeline"),Object(n.b)("p",null,"To deploy an app using Tekton, we’ll need:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"a project in OpenShift to deploy the app to"),Object(n.b)("li",{parentName:"ul"},"a Git repo for the app’s code with a webhook that triggers the Tekton pipeline"),Object(n.b)("li",{parentName:"ul"},"the code for the app that goes in the Git repo")),Object(n.b)("p",null,"When the code is pushed to the git repo, the pipeline will get triggered."),Object(n.b)("h3",{id:"create-openshift-project"},"Create OpenShift project"),Object(n.b)("p",null,"Create a project or use an existing one. Set the OpenShift Container Platform CLI to use the project."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Find your project in OpenShift named ",Object(n.b)("inlineCode",{parentName:"p"},"dev-{initials}")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If it doesn’t already exist, create it",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"oc new-project dev-{initials}\n"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Change context to your project"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"oc project dev-{initials}\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Verify project context"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"oc projet -q\n")))),Object(n.b)("h3",{id:"connect-the-pipeline-to-git"},"Connect the pipeline to Git"),Object(n.b)("p",null,"Create a Git repository for your app and connect it to the Tekton pipeline."),Object(n.b)("p",null,"First, create the Git repo."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In your MOOC team’s GitHub organization, create a Git repo named ",Object(n.b)("inlineCode",{parentName:"p"},"nodejs-express-{initials}")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"For example, ",Object(n.b)("inlineCode",{parentName:"li"},"https://github.com/mooc-team-one/nodejs-express-cs.git"))))),Object(n.b)("p",null,"Second, open the Tekton dashboard."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the CP4Apps dashboard, go to the Instance page")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Tools section, click on the Tekton URL to open the Tekton dashboard"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If prompted, log in using OpenShift")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If prompted, allow access"))))),Object(n.b)(s,{mdxType:"InlineNotification"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In the Tekton dashboard, select the Pipelines page")),Object(n.b)("p",null,"Notice that Kabanero Enterprise includes pipelines for building apps based on different technologies: MicroProfile, Spring Boot, Node.js, and Express.js. When a pipeline runs, it’ll run in a certain Kubernetes namespace (a.k.a. OpenShift project). Each of the pipeline’s tasks will run in a new container and pod. A task’s steps all run in the same container.")),Object(n.b)("p",null,"Third, create the webhook. The Kabanero Enterprise instance already includes several pipelines. Create a webhook in the Git repo that triggers the proper pipeline."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Tekton dashboard, select the Webhooks page")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Press Add Webhook")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Create Webhook form, enter the following values:"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",p({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"120.24070021881839%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAIAAAB1KUohAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC1UlEQVQ4y6VUO2/UQBB2CUVSgkBKTaiuBREkEEHQQKSkhBL+BLSIkoaCAtFQIBr+AX3aO+6iu3DOPfy4h89ee9evO3t3zWf7zlxCUCT4NB7Nrveb2Z2dWSU7DSkl9HQ6PTo66na79Xq90WioqpqdB6UkVKhcCCGqSdh/Jf8zFMdxOp2OpmldVXUJwRTnXAiOeBeTGWO6rpumCb5t22EY+gXiOLqYnCRJHMfQeUyRmVbUN8hwRLUxs7yU+JnjyzNCoFmW8kzBJityKuTECYyJZ1oU4tCFG3Dipy4k4IWk5dCmi5RLBUxKqZuDBGGsT/wTzVY1u2+4hSbqcNbTSXeQ65NiHmtsJpNUKriGNE0RmfM0SblD55bNZk5gu6HjQSIYxItmJKjEcUMWYMdSiaKojEwIEWmSMWpNJ4N+z9A1w0AqNV0bDod9lzhBgDwyRj1GKQltLrhS1kBxPUKiLpIkXCIKo0LKQRQXmOfffJ7wRGby/4rEsqxWq9VsNtvtNsp4MBjg/PC9WEM5LG/kFBk/3BU8z8PJsUlUTrBCWTPIC/R6IyzJmAUTmcN4NpsZhoGl0eq0xYGXduURYZCm5VXBBTRszMIR3AXnoXIHOycje9gq2gNhQR6NRr1eb1Cg3++XNvoZO8JZ6ApYn5PXmxnkcodRjvxmosr6A1icF0mZJ7QUfI9ME/FQGwjqOHaRLobSOCMoqbORuZAsWED8MCkNiOfH1J+zMPGj34IhFueRy7Dj8Zj6oap7re64pU5a6rj5c9TuWc1j80fH6A7J1BNTV1iuhJ4QkaSnnyHcHUdjQrhAe8LmEg8Lijd/z/AbFYxf+Tq5/oaVT1y9nl25ml27ntVq2fbNbGMzu3efF/+ffXt+6c3lG++3ax9qW++2Nt5uHuqHSu4RAt9w1zmWD3bl7kO5fyCf7smdu/LFy7Qgv/r++tbH20++7O1/PXj0+fGdTzuNceMXWOg7OyJ0HM8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Create Webhook",title:"Create Webhook",src:"/ibm-garage-developer-guide/static/4923deeebde889c1fa8a243f158da7f7/fb070/create-webhook3.png",srcSet:["/ibm-garage-developer-guide/static/4923deeebde889c1fa8a243f158da7f7/d6747/create-webhook3.png 288w","/ibm-garage-developer-guide/static/4923deeebde889c1fa8a243f158da7f7/09548/create-webhook3.png 576w","/ibm-garage-developer-guide/static/4923deeebde889c1fa8a243f158da7f7/fb070/create-webhook3.png 1152w","/ibm-garage-developer-guide/static/4923deeebde889c1fa8a243f158da7f7/fb104/create-webhook3.png 1728w","/ibm-garage-developer-guide/static/4923deeebde889c1fa8a243f158da7f7/9073d/create-webhook3.png 1828w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Name"),": ",Object(n.b)("inlineCode",{parentName:"li"},"nodejs-express-{initials}"),", such as ",Object(n.b)("inlineCode",{parentName:"li"},"nodejs-express-cs")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Repository URL"),": ",Object(n.b)("inlineCode",{parentName:"li"},"https://github.com/mooc-team-{name}/nodejs-express-{initials}.git"),", such as ",Object(n.b)("inlineCode",{parentName:"li"},"https://github.com/mooc-team-one/nodejs-express-cs.git")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Access Token"),": Select ",Object(n.b)("inlineCode",{parentName:"li"},"github.com-mooc-access-token")," (no need to create a new access token)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Namespace"),": Select ",Object(n.b)("inlineCode",{parentName:"li"},"kabanero")," (not your own namespace)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Pipeline"),": Select ",Object(n.b)("inlineCode",{parentName:"li"},"nodejs-express-build-deploy-pipeline")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Service Account"),": Select ",Object(n.b)("inlineCode",{parentName:"li"},"kabanero-operator")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Docker Registry"),": ",Object(n.b)("inlineCode",{parentName:"li"},"docker-registry.default.svc:5000/dev-{initials}"),", such as ",Object(n.b)("inlineCode",{parentName:"li"},"docker-registry.default.svc:5000/dev-cs"))))),Object(n.b)(s,{mdxType:"InlineNotification"},Object(n.b)("p",null,"The webhook doesn’t just notify Tekton when the Git repo’s contents have changed. The webhook also specifies what pipeline to run, what namespace to run it in, the ",Object(n.b)("a",p({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"}),"Kubernetes service account")," to use to run it, and the registry for the tasks’ container images.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Press Create to close the form and create the webhook")),Object(n.b)("h3",{id:"configure-the-application-deployment"},"Configure the application deployment"),Object(n.b)("p",null,"Add some code to the local repo."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Generate the Appsody manifest"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"appsody deploy --generate-only\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the generated file, ",Object(n.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Specify the namespace to deploy the application into",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-yaml"}),"metadata:\n  namespace: dev-{initials}\n"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Check the files into Git"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),'git init\ngit add .\ngit commit -m "first commit"\n')))),Object(n.b)("h3",{id:"push-the-app-and-trigger-the-pipeline"},"Push the app and trigger the pipeline"),Object(n.b)("p",null,"Configure the local repo to map to the git renote repo you created earlier and sync them."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add the remote repo URL and push",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"git remote add origin git@github.com:mooc-team-{id}/nodejs-express-{initials}.git\ngit push -u origin master\n")))),Object(n.b)("p",null,"When you push the changes to the server, that triggers the Tekton pipeline."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Tekton dashboard, select the PipelineRuns page"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",p({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.3170731707317%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABS0lEQVQoz5VRS07DMBD1ddhzBc6ExIo9F4GbVGLBgi5QVVWpgISkSRNix56xPR4mCa1AIESfnix/5s28GStsuu3Ta1FqZk6J/0b6TmV7kz+/aeP4dChAiBQ/EydGTw7jrwQfV0W839BDFhdryvdR7ZquqWtr3YzBeYej3kI8rHKkYSwRL+/o/Dpd3KSzK75dkFpn+XL5mGXbZsJgMYTgfSAi2YidGKP3nmgUU+K6NduXEkKySEre5qAZGKiuO617ANzve7np+75t28GC7mWoCcFp/c7Rg0OFiF3XSZ1ZDJ42G6523La8WjGAVA4pJQc+LwpjjLiQdCkEAK+01pJY6tMEGRgAOZesTU1Dx8+TTga5OmD06ElJsrIspbidMA0pOBwp3Q9O6IXz/KZ9OFKJwEwAscgsEcaOD0Zow9fQn1RVVYlt8Te3fRT/hx/+iHptBo9NrAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"PipelineRuns",title:"PipelineRuns",src:"/ibm-garage-developer-guide/static/694de0a297151d1905fd83b2acecd27b/fb070/pipelinerun-starts.png",srcSet:["/ibm-garage-developer-guide/static/694de0a297151d1905fd83b2acecd27b/d6747/pipelinerun-starts.png 288w","/ibm-garage-developer-guide/static/694de0a297151d1905fd83b2acecd27b/09548/pipelinerun-starts.png 576w","/ibm-garage-developer-guide/static/694de0a297151d1905fd83b2acecd27b/fb070/pipelinerun-starts.png 1152w","/ibm-garage-developer-guide/static/694de0a297151d1905fd83b2acecd27b/fb104/pipelinerun-starts.png 1728w","/ibm-garage-developer-guide/static/694de0a297151d1905fd83b2acecd27b/2233b/pipelinerun-starts.png 1968w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)("p",{parentName:"li"},"  The page shows the pipeline running."))),Object(n.b)(s,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Click on a PipelineRun to see its details. In its list of Tasks, expand one to see its steps. Select a step to see its details: logs, status, and details.")),Object(n.b)("h2",{id:"scale-to-zero-serverless"},"Scale to zero (Serverless)"),Object(n.b)("p",null,"Use the Git repo created for Tekton to deploy the app using Knative."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the generated file, ",Object(n.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Set the variable ",Object(n.b)("inlineCode",{parentName:"li"},"createKnativeService")," to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-yaml"}),"spec:\n  createKnativeService: true\n"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Push the change to Git"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),'git add app-deploy.yaml\ngit commit -m "make it serverless"\ngit push origin\n')))),Object(n.b)("p",null,"Watch the pipeline run in the Tekton dashboard."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"When the Tekton pipeline is finished, get the URL of the Knative service"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",p({parentName:"pre"},{className:"language-bash"}),"$ oc get ksvc\n\nNAME                URL                                                                                                                               LATESTCREATED             LATESTREADY               READY   REASON\nnodejs-express-cs   http://nodejs-express-cs.dev-cs.mooc-surge-ocp-cluster-0143c5dd31acd8e030a1d6e0ab1380e3-0001.us-east.containers.appdomain.cloud   nodejs-express-cs-gfvfz   nodejs-express-cs-gfvfz   True\n")))))}u.isMDXComponent=!0},447:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},448:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},449:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(447),p=a(0),l=a.n(p),o=a(107),r=a.n(o),b=a(194),c=a(128),s=a(3),d=a.n(s),m=a(388),u=function(e){var t,a=e.title,i=e.tabs,p=void 0===i?[]:i;return Object(n.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=p.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},g=a(448),h=a(389),j=function(e){var t=e.relativePagePath,a=e.repository,i=g.data.site.siteMetadata.repository,p=a||i,l=p.baseUrl,o=p.subDirectory,r=l+"/edit/"+p.branch+o+"/src/pages"+t;return l?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:r},"Edit this page on GitHub"))):null},O=a(193),N=(a(59),a(26)),f=a(390);var A=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],p=t.map((function(e){var t,p=r()(e,{lower:!0}),l=p===i,o=new RegExp(i+"(?!-)"),b=a.replace(o,p);return Object(n.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(n.b)(N.Link,{className:f.link,to:""+b},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},p))))))},i}(l.a.Component),w=a(195);t.a=function(e){var t=e.pageContext,a=e.children,p=e.location,l=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,m=t.titleType,g=s.tabs,h=s.title,N=s.theme,f=s.description,y=s.keywords,k=i.data.site.pathPrefix,v=k?p.pathname.replace(k,""):p.pathname,C=g?v.split("/").slice(-1)[0]||r()(g[0],{lower:!0}):"";return Object(n.b)(c.a,{homepage:!1,theme:N,pageTitle:h,pageDescription:f,pageKeywords:y,titleType:m},Object(n.b)(u,{title:l?Object(n.b)(l,null):h,label:"label",tabs:g}),g&&Object(n.b)(A,{slug:v,tabs:g,currentTab:C}),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(j,{relativePagePath:d})),Object(n.b)(O.a,{pageContext:t,location:p,slug:v,tabs:g,currentTab:C}),Object(n.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-practical-cp-4-apps-index-mdx-dff8778ec8d12b85285e.js.map