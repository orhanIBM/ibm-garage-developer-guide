(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{407:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return y}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(108),i=a(449);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},p=l("PageDescription"),c=l("Video"),b=l("Accordion"),s=l("AccordionItem"),d=l("AnchorLinks"),m=l("AnchorLink"),u=l("InlineNotification"),g=l("Tabs"),h=l("Tab"),O={_frontmatter:r},j=i.a;function y(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(j,o({},O,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(p,{mdxType:"PageDescription"},Object(n.b)("p",null,"Create a sample application and register Jenkins build pipeline to deploy your application into your development cluster")),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"You can create a new app using one of the ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/overview"}),"Starter Kit Templates"),". These have been created to include all the key components, configuration, and frameworks to get you started on creating the code you need for your solutions. The approach for getting started is exactly the same for ",Object(n.b)("strong",{parentName:"p"},"IBM Kubernetes")," or ",Object(n.b)("strong",{parentName:"p"},"Red Hat OpenShift")," managed service that have both had the Development environment installed."),Object(n.b)("p",null,"This video will demonstrate how to work through the steps to create an application that uses a deployment pipeline to install it into your development cluster."),Object(n.b)("p",null),Object(n.b)("p",null),Object(n.b)("p",null),Object(n.b)(c,{src:"/videos/deployapp.m4v",type:"video/m4v",poster:"/images/poster.png",mdxType:"Video"}),Object(n.b)("h3",{id:"log-into-you-development-cluster-from-the-command-line"},"Log into you Development Cluster from the command line"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Make sure you have installed all ",Object(n.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/prereqs"}),"Prerequisites")," before continuing"),Object(n.b)("li",{parentName:"ul"},"Open a terminal"),Object(n.b)("li",{parentName:"ul"},"log into your Development cluster in a terminal (If using a shared education cluster, log into openshift)"),Object(n.b)("li",{parentName:"ul"},"To do so, navigate to your cluster in the ",Object(n.b)("em",{parentName:"li"},"IBM Cloud Console"),", click on the ",Object(n.b)("strong",{parentName:"li"},"Access")," tab and\nfollow the instructions to login from the command line"),Object(n.b)("li",{parentName:"ul"},"You can test this with the following simple command: ")),Object(n.b)(b,{mdxType:"Accordion"},Object(n.b)(s,{title:"OpenShift",mdxType:"AccordionItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"oc get pods\n"))),Object(n.b)(s,{title:"Kubernetes",mdxType:"AccordionItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"kubectl get nodes\n")))),Object(n.b)("p",null),Object(n.b)("p",null),Object(n.b)("p",null),Object(n.b)("p",null),Object(n.b)("h3",{id:"links"},"Links"),Object(n.b)(d,{mdxType:"AnchorLinks"},Object(n.b)(m,{to:"#open-developer-tools-dashboard",mdxType:"AnchorLink"},"Open Developer Tools Dashboard"),Object(n.b)(m,{to:"#create-your-app-in-git",mdxType:"AnchorLink"},"Create your app in Git"),Object(n.b)(m,{to:"#clone-your-code",mdxType:"AnchorLink"},"Clone your code"),Object(n.b)(m,{to:"#running-locally",mdxType:"AnchorLink"},"Running Locally"),Object(n.b)(m,{to:"#register-the-app-in-a-devops-pipeline",mdxType:"AnchorLink"},"Register your pipeline"),Object(n.b)(m,{to:"#view-your-application-pipeline",mdxType:"AnchorLink"},"View your application pipeline"),Object(n.b)(m,{to:"#access-running-app",mdxType:"AnchorLink"},"Access running app"),Object(n.b)(m,{to:"#where-is-your-app-running-",mdxType:"AnchorLink"},"Where is your app running ?")),Object(n.b)("p",null,"Clone your code"),Object(n.b)("h3",{id:"open-developer-tools-dashboard"},"Open Developer Tools Dashboard"),Object(n.b)("p",null,"The Developer Tools Dashboard makes it easy for you to navigate to the tools, including a section that allows you to select a set of preconfigured ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/overview"}),"Starter Kit Templates")," that make seeding your development project very easy."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open a browser and make sure you are logged into ",Object(n.b)("a",o({parentName:"li"},{href:"https://github.com"}),"Github")),Object(n.b)("li",{parentName:"ul"},"Open the ",Object(n.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/dashboard"}),"Developer Tools Dashboard")," by running the following command:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"igc dashboard\n")))),Object(n.b)("h3",{id:"create-your-app-in-git"},"Create your app in Git"),Object(n.b)(u,{kind:"warning",mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Warning:")," If you are developing on a shared education cluster. You need to make it easy to identify your app please suffix the app name with your initials ",Object(n.b)("inlineCode",{parentName:"p"},"{app name}-{your initials}")," ie. ",Object(n.b)("inlineCode",{parentName:"p"},"stockbffnode-mjp")," and use the ",Object(n.b)("strong",{parentName:"p"},"Git Organisation")," listed in your notification email.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the Developer Tools Dashboard")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("strong",{parentName:"p"},"Starter Kits")," tab")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Pick one of the templates that is a good architectural fit for your application and the language and framework that you prefer to work with."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Click on a Starter Kit Template ",Object(n.b)("strong",{parentName:"li"},"Tile")," to create your app github repository from the template repository selected."),Object(n.b)("li",{parentName:"ul"},"You can also click on the ",Object(n.b)("strong",{parentName:"li"},"Git Icon")," to browse the source template repository and click on the ",Object(n.b)("strong",{parentName:"li"},"Template")," to create the template"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Complete the ",Object(n.b)("a",o({parentName:"p"},{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template"}),"GitHub create repository from template")," process."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Owner"),": Select a validate GitHub organization that you are authorized to create repositories within or the one you were given for the shared cluster (See warning above)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Repository name"),": Enter a valid name for you repo , github will help with showing a green tick if it is valid (See warning above)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Description"),": Describe your app\n",Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"929px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.311087190527445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABr0lEQVQoz4VSi3KbMBD0//9Fp02bOpNpP6aZTHBrYiTA5hEDAgkQYnunjEmctLFmdhYOabnd02oYBuyiCELGOBwyz+HjDnGcIElTSOLtNoSUCaJIeg5D/p7C2glumsBrnmfPKy6W5ROyvEBBfIaiREa8jwTihxBis4MIHiHoOf0T4RAmMHTuJMhYOecwTQ6nZa0Fdz2OI2/DR2ums/Pslu68oDGGLISo6gbDaBFnRwRbiXhfQg8OvQVaYmMviJ8scydSSoQ74W2mRYOtyJDkNfKqQ3ZsERcVPSsYraE6hdY0BAV2906wJ3uREEiSlHLModoWWhvPjVJQirhR6Drta3Vbo+4qNF3tBU/ZLZa5aPrB2+2H0efpwdm6eYF9XZueMXLedI4HuwhONHbuqKpqPxB+5w12egHX+Mf/w1mHvDl/KiH3Kdkhi7ojO2SbhsU2NeVmTI9La8nQ3wwz0n1SQEch01QxABONt9Pad+9zenXX/oWlw6JOsN7c4ub3T3wPbrEOfuDz/TXCQ0CqAA/NuflDsTPB7Cjx5dcVvt2v8ZXA/OnuCiLfPG+6cLnfWv4L+MyemEuyJe0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Template",title:"Template",src:"/ibm-garage-developer-guide/static/c56f64a136b3c0be7f1d87ebc66d5b63/b0974/template.png",srcSet:["/ibm-garage-developer-guide/static/c56f64a136b3c0be7f1d87ebc66d5b63/d6747/template.png 288w","/ibm-garage-developer-guide/static/c56f64a136b3c0be7f1d87ebc66d5b63/09548/template.png 576w","/ibm-garage-developer-guide/static/c56f64a136b3c0be7f1d87ebc66d5b63/b0974/template.png 929w"],sizes:"(max-width: 929px) 100vw, 929px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Press ",Object(n.b)("strong",{parentName:"p"},"Create repository from template")))))),Object(n.b)("p",null,"The new repository will be created in your selected organization."),Object(n.b)("h3",{id:"clone-your-code"},"Clone your code"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Next, clone it to your local machine."),Object(n.b)("li",{parentName:"ul"},"Click on ",Object(n.b)("strong",{parentName:"li"},"Clone or download")),Object(n.b)("li",{parentName:"ul"},"Copy the clone ",Object(n.b)("em",{parentName:"li"},"SSH link"),", and use the ",Object(n.b)("inlineCode",{parentName:"li"},"git clone")," command to clone it to your developer desktop machine.",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-base"}),"git clone git@github.com:mjperrins/stockbffnode.git\n"))),Object(n.b)("li",{parentName:"ul"},"Change into the cloned directory",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"cd stockbffnode\n"))),Object(n.b)("li",{parentName:"ul"},"You must rename the app to match your git repo or to a unique name for your solution. Then applications move into a ",Object(n.b)("em",{parentName:"li"},"test")," environment they need to unique names."),Object(n.b)("li",{parentName:"ul"},"Edit ",Object(n.b)("inlineCode",{parentName:"li"},"package.json")," and edit the ",Object(n.b)("inlineCode",{parentName:"li"},"name:")," field and change it from its template name to your chosen name."),Object(n.b)("li",{parentName:"ul"},"Save the edits"),Object(n.b)("li",{parentName:"ul"},"Push the changes back to your repository",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'git add .\ngit commit -m "Update application name"\ngit push\n')))),Object(n.b)("h3",{id:"running-locally"},"Running Locally"),Object(n.b)("p",null,"Most developers like to run the code natively in local development environment. To do so, follow the instructions listed in the ",Object(n.b)("strong",{parentName:"p"},"README.md")," file to run the code locally. You may be required to install a specific runtime like ",Object(n.b)("strong",{parentName:"p"},"Java"),", ",Object(n.b)("strong",{parentName:"p"},"Node"),", or ",Object(n.b)("strong",{parentName:"p"},"Python"),"."),Object(n.b)("p",null),Object(n.b)("p",null),Object(n.b)("p",null),Object(n.b)("h3",{id:"register-the-app-in-a-devops-pipeline"},"Register the App in a DevOps Pipeline"),Object(n.b)("p",null,"You now have the code in a GitHub repository and have cloned it to you local development environment. You now need to register the repository with the continuous integration pipeline technology."),Object(n.b)("p",null,"The default continuous integration tool currently is ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration"}),"Jenkins"),". ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration-tekton"}),"Tekton")," is also supported."),Object(n.b)("p",null,"You can use the ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/cli"}),"IGC CLI")," to assist helping register a pipeline with Jenkins."),Object(n.b)(u,{kind:"warning",mdxType:"InlineNotification"},Object(n.b)("p",null,"  ",Object(n.b)("strong",{parentName:"p"},"Warning:")," If you are working on a shared education cluster, please deploy your app into a unique project/namespace and continue to do this for all other app creation steps. This will isolate your pipelines into its own namespace/project from other developers working on the same cluster."),Object(n.b)("hr",null),Object(n.b)("p",null,"  If working on ",Object(n.b)("strong",{parentName:"p"},"OpenShift")," create your project namespace first"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"oc new-project dev-{initials}\n")),Object(n.b)("p",null,"  Do not run ",Object(n.b)("inlineCode",{parentName:"p"},"igc pipeline")," without a namespace , this will cause your pipeline to be created in the default ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," namespace:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc pipeline\n")),Object(n.b)("p",null,"  Instead, include the namespace parameter:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc pipeline -n dev-{your initials}\n")),Object(n.b)("p",null,"  For example:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc pipeline -n dev-mjp\n"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Register your repo using the ",Object(n.b)("inlineCode",{parentName:"p"},"igc pipeline")," command. The CLI will ask for your github userid, it can be found in your github settings. It will ask for you enter your ",Object(n.b)("strong",{parentName:"p"},"Github Personal Access Token")," and finally your branch."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Username"),": Enter your GitHub user id"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Password"),": Paste your github personal access token"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Branch"),": Press enter for the default git branch or type in another branch you want to register",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ oc new-project -n dev-{initials}\n$ igc pipeline -n dev-{intials}\nProject git repo: https://github.com/mjperrins/stockbffnode.git\n? Provide the username: mperrins\n? Please provide your password/personal access token: [hidden]\n? Please provide the branch the pipeline should use: master\nCreating secret with git credentials\nRegistering pipeline\nCreating git webhook\n"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The pipeline will be registered in your development cluster."))),Object(n.b)("h3",{id:"view-your-application-pipeline"},"View your application pipeline"),Object(n.b)("p",null,"To view you registered pipeline, follow the steps for the type of development cluster you registered your application with."),Object(n.b)(g,{mdxType:"Tabs"},Object(n.b)(h,{label:"OpenShift",mdxType:"Tab"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open the OpenShift Web Console from the Developer Cluster instance")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"345px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.05797101449275%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACZ0lEQVQ4y31SO2ySURi9PIbGQpWUZ6G8yqOlPEJKo1PtRBAFGijyaO3gSHQ00USNbazRxLi4u+liYnQipaWduhgfq23dsAttgCgEFMrx3kshaNCbnJzvee53/+8nGHDa7Tbno0odH/aL+Lh/1MOngz4+tT9/Pcb7L0XsFSoggwSbrRPOr7YPcOHmW6w82UFyfQvLj7cRW80htZ5H9EEO8bVNJB9uIXQ3ixWaSz/Kg7BpWq0Wms1mD42fvzqC+T2cv/GGFuexuLrBEbmXpSI5LNzPcj++toGVp7u4/mwX6fXNwRP2n8NKG4XSCb6VOzikKJRa3GZcrAHPX7zGy3c7qNKHkUajgUwmg0AohFgshnA0ikuBAILBIEJXLmMxGsFy6iqWknGkT9FvX0sncFZ6Bkq5DHdu3wKp12o4p1RCTwgWKEYoxgwGqJQKaDRjkI6MgNDY/yHgzOpJ5UcVLquVi/nEYiQpIokEllIpPrHf74fb7eaQy+W8UUxrRCLRH2Bxh8MBclz+DpPZjAkaSAsEMFGIhoYgGR6GVCqFRCKBQqHg3G38GwJBZ0Kb3Q5So0+esFg6yX80DBIQCoU9oe5Fk5OTTLCKqakp6LRaeOizLs7Nwev18uTMzAymp6d53ufzYX5+vuez3OzsLGc7m6wrWCpX+KgymQxaKmqmz2dsNBqh0+m4zcCaXC4Xj+n1eoyOjtIlaHq1XJBeRKrVKi8aHx+HlS7HQDfMvhmLqdVqeDwe3mSz2bhAt06lUvFak8kEy+knYzlSr9cRDof5uKy5u1E2DfMnLFY4nU7uM/Tnuj6z2Yaj9B/+DemYHwrcnhh6AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift",title:"OpenShift",src:"/ibm-garage-developer-guide/static/1ad3ab71a612e721d4955919cf7424d8/16546/openshiftconsole.png",srcSet:["/ibm-garage-developer-guide/static/1ad3ab71a612e721d4955919cf7424d8/d6747/openshiftconsole.png 288w","/ibm-garage-developer-guide/static/1ad3ab71a612e721d4955919cf7424d8/16546/openshiftconsole.png 345w"],sizes:"(max-width: 345px) 100vw, 345px",loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"From the top menu, switch to the ",Object(n.b)("strong",{parentName:"li"},"Application Console")),Object(n.b)("li",{parentName:"ul"},"Select ",Object(n.b)("em",{parentName:"li"},"dev")," project/namespace or you personal namespace that was used on the creation"),Object(n.b)("li",{parentName:"ul"},"In the left menu, select ",Object(n.b)("em",{parentName:"li"},"Builds")," -> ",Object(n.b)("em",{parentName:"li"},"Pipelines"))),Object(n.b)("p",null,"You will see your application dev ops pipeline now starting to build and once completed will look like the image below."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.359364201796815%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABeElEQVQoz52RS0/CUBCFKyDyMhqjcaHoUkMElIeABInGlf5EjVuVRwXCH1IXUqAtrS29vW053l50oZGN03zpTG/umdMZYWc3ieTePja3trG2voFYfBWRaAzL4QiEpSCEwCJCCARDiMYTWInEEI0lEAyFIaRPSjhM55HOlXF7d4+HpyYemyJEsQPxuYs2o8Xyn3QhdvsQOz00WiIazTbPO70+hEy+glS2iOJZHfqUwI/ZF/8JoXxxjUL1EudXN3h5fYNmmFAMCzJDNQlUVlNKYVObv32ITUAdBxax5jUh0HQNpmlCyBaqSB2folipQxqP4LIuJtFhMDzPYYIyXM/FxJzAohZH1sfszMNAfee1PtUxnEiYzWZshrn5DPOlGkayDI/9q2oozKUC27EhTQZwmPBQk2BYH6yZwb/5l7/Dz/njC2bYMlKZAvLlGgZjhTvULcLEKHdhU8KaeFzcd+q6Ls+5yB9whwdHOe5QVlTe0fV+reSPDS0S/AQUg/r7+cbH7QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift",title:"OpenShift",src:"/ibm-garage-developer-guide/static/22acc24dd15fd63ea5efc81a42d2a557/fb070/ospipeline.png",srcSet:["/ibm-garage-developer-guide/static/22acc24dd15fd63ea5efc81a42d2a557/d6747/ospipeline.png 288w","/ibm-garage-developer-guide/static/22acc24dd15fd63ea5efc81a42d2a557/09548/ospipeline.png 576w","/ibm-garage-developer-guide/static/22acc24dd15fd63ea5efc81a42d2a557/fb070/ospipeline.png 1152w","/ibm-garage-developer-guide/static/22acc24dd15fd63ea5efc81a42d2a557/9cba3/ospipeline.png 1447w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)(h,{label:"Kubernetes",mdxType:"Tab"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Run the command ",Object(n.b)("inlineCode",{parentName:"li"},"igc dashboard")," in your terminal to open your ",Object(n.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/dashboard"}),"Developer Tools Dashboard")),Object(n.b)("li",{parentName:"ul"},"Select the Jenkins tool to open the Jenkins dashboard"),Object(n.b)("li",{parentName:"ul"},"Run the command ",Object(n.b)("inlineCode",{parentName:"li"},"igc credentials")," in your terminal to get the list of logins for the tools"),Object(n.b)("li",{parentName:"ul"},"Use the Jenkins userid and password to log into the Jenkins dashboard")),Object(n.b)("p",null,"Wait for the pipeline stages to start building. Once the stages have completed, you will see a view similar to the one below."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.396825396825395%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3UlEQVQY021Pa4+EIBDz///I88VTARFcEHdjFybxch9ukmZKS2egO44Dy7Lgui60uu8bT/3l/9Xjt/6ge7/fOM/z14wxoi3JORP33sM5h33f6ayUQgiBtMabrrWGdZb07tnWBpdS4KwjbG6DWQ11rWrAWIJgAutioKSuUHSXV00KCVP9LqYToga831DOArZxjGHCvDP02wCRJIba58gwB4Yf19fzhN6NGPwIfojKB0xhxppN/fLngxADUkr00jUZGqKSAn8J6LJQSGUFWTV2cMiXhKga+VlXn1PGFosvYKh+NvZqCLYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Jenkins Pipeline",title:"Jenkins Pipeline",src:"/ibm-garage-developer-guide/static/7ea60a103966823b810fcea6c7cd116c/fb070/pipeline.png",srcSet:["/ibm-garage-developer-guide/static/7ea60a103966823b810fcea6c7cd116c/d6747/pipeline.png 288w","/ibm-garage-developer-guide/static/7ea60a103966823b810fcea6c7cd116c/09548/pipeline.png 576w","/ibm-garage-developer-guide/static/7ea60a103966823b810fcea6c7cd116c/fb070/pipeline.png 1152w","/ibm-garage-developer-guide/static/7ea60a103966823b810fcea6c7cd116c/7f798/pipeline.png 1260w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("p",null),Object(n.b)("p",null),Object(n.b)("p",null),Object(n.b)("h3",{id:"access-running-app"},"Access running app"),Object(n.b)("p",null,"Once the pipeline has completed successfully, the app will be deployed into the ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," namespace or the namespace you used when registering the pipeline."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To validate the app is running follow these steps.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To access the app, retrieve the app ingress endpoint using commands below in your terminal, remember to use the namespace you supplied when registering the application."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc ingress -n dev\n")),Object(n.b)("p",{parentName:"li"},"You will see a list of apps displayed with their ingress URLs for the application."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc ingress -n dev\n? Ingresses in the 'dev' namespace. Select an ingress to launch the default browser or 'Exit'.\n\n1) Exit\n2) template-graphql-typescript - https://template-graphql-typescript-dev.mooc-one-rhos-cluster.us-east.containers.appdomain.cloud\n3) template-node-react - https://template-node-react-dev.mooc-one-rhos-cluster.us-east.containers.appdomain.cloud\nAnswer:\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use the arrow keys to select the ingress URL and press ",Object(n.b)("strong",{parentName:"p"},"Enter")," to open it in a web browser and validate the application is working as expected"))),Object(n.b)("h3",{id:"where-is-your-app-running-"},"Where is your app running ?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The build pipeline is configured to build you source code into a container image. This image is stored in the IBM Image Registry. The image is then deployed into your namespace/project within you development cluster and validated for its health."),Object(n.b)("li",{parentName:"ul"},"Use the steps below to find your application within your cluster console.")),Object(n.b)(g,{mdxType:"Tabs"},Object(n.b)(h,{label:"OpenShift",mdxType:"Tab"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open the ",Object(n.b)("strong",{parentName:"li"},"OpenShift web console")),Object(n.b)("li",{parentName:"ul"},"Change to the ",Object(n.b)("strong",{parentName:"li"},"Application Console*")),Object(n.b)("li",{parentName:"ul"},"Select you project either ",Object(n.b)("inlineCode",{parentName:"li"},"dev")," or the namespace you used to deploy your app"),Object(n.b)("li",{parentName:"ul"},"Click on ",Object(n.b)("strong",{parentName:"li"},"Deployments")),Object(n.b)("li",{parentName:"ul"},"You should see the deployment of your application"),Object(n.b)("li",{parentName:"ul"},"Click on your application , and the corresponding deployment number"),Object(n.b)("li",{parentName:"ul"},"Try increasing the number of pods to see new instances being provisioned"),Object(n.b)("li",{parentName:"ul"},"Click on one of the ",Object(n.b)("inlineCode",{parentName:"li"},"pod")," instances"),Object(n.b)("li",{parentName:"ul"},"Click on ",Object(n.b)("strong",{parentName:"li"},"Logs")),Object(n.b)("li",{parentName:"ul"},"You can see the running state of your application"),Object(n.b)("li",{parentName:"ul"},"Navigate around the console to understand where your deployment, service and pods are running")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.56896551724138%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACUUlEQVQ4y4VTTW8SURQdaKobdQs1pUmLSVsroEBsjWWhiUb/hBs3/hJjIoFOaavGaKFIjenChX/FjR8bFURRYGCY7zfveOcBU7CQvuTkznv3zZlzz70jhecuIhJZQCg8h3PnL2D2zFlIgSACwRlIknQKAv7d4Mxs/2w1lsTlRBrzi8t48PAR8jsv8CS7hcdZGdmcDHl7R2C7sCsg9oU97O49hywXkMvLeJrbQl6mOzvPIKUzd7B5+z4Wl+M4ev8B3uo5HKoDdAkaPZscYHROW7g4Xhwnl5TK3MXNW/ewtJLAq8oRmjbwpdrAtz8dVNsafnUN1No91BUNja6J36qJesfAT9rXKCq6BZc5sG0HlmVBWqNyE6kbCM0v4eXrEjgnDS6DSUlF1UT0tJBQfNUdtGx2QhXnXEAovHJtHcn1DEKRKMqVt+LQdV202m38qFYpKnBNE98Nhs8dHR8VQ+S990eJ+sQ+4aYgLB5UfEKblKmqCk3XwRmD4XJ86tlomEwoHiUchRRLbiC1kUGYCPdLb8CJzDSt8ZL+awEfypnUlLWr1xEXHkZRKh/CovLq9To0TYNO6izLGvPJB6YoXIml4JUdjlwSHppEWKvVoCiKgEc69IlPUTWmcDWe9gn3SaGYQ9OByY4LnaRkGsYUFonQs9wgD/mUwT1VoU+4QAoHXbZtm5rDaBwZ2AQ4juPDu+vFYW6MsFiuiN/rr6KipepQNUM0qdlsiiZ5/noY+tvtdtGmee10Ouj1eiI3UnIUB4fvBh7SV2nu2KAJ/UGebsDogP8D2gzaJdVfQWkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pods on OpenShift",title:"Pods on OpenShift",src:"/ibm-garage-developer-guide/static/fc7831cf0b452a5551f208f0a4937d69/fb070/podsos.png",srcSet:["/ibm-garage-developer-guide/static/fc7831cf0b452a5551f208f0a4937d69/d6747/podsos.png 288w","/ibm-garage-developer-guide/static/fc7831cf0b452a5551f208f0a4937d69/09548/podsos.png 576w","/ibm-garage-developer-guide/static/fc7831cf0b452a5551f208f0a4937d69/fb070/podsos.png 1152w","/ibm-garage-developer-guide/static/fc7831cf0b452a5551f208f0a4937d69/4c259/podsos.png 1160w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)(h,{label:"Kubernetes",mdxType:"Tab"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open the ",Object(n.b)("strong",{parentName:"li"},"Kubernetes Dashboard")),Object(n.b)("li",{parentName:"ul"},"Change to the namespace from ",Object(n.b)("inlineCode",{parentName:"li"},"default")," to either ",Object(n.b)("inlineCode",{parentName:"li"},"dev")," or the namespace you used to deploy your app"),Object(n.b)("li",{parentName:"ul"},"Click on ",Object(n.b)("strong",{parentName:"li"},"Deployments")),Object(n.b)("li",{parentName:"ul"},"You should see the deployment of your application"),Object(n.b)("li",{parentName:"ul"},"Click on your application , and the corresponding ",Object(n.b)("strong",{parentName:"li"},"Replica Set")),Object(n.b)("li",{parentName:"ul"},"Try scaling the application, click on ",Object(n.b)("strong",{parentName:"li"},"Scale")," in the header, change number of pods to 2 and click ",Object(n.b)("strong",{parentName:"li"},"OK")),Object(n.b)("li",{parentName:"ul"},"Click on one of the ",Object(n.b)("inlineCode",{parentName:"li"},"pod")," instances"),Object(n.b)("li",{parentName:"ul"},"Click on ",Object(n.b)("strong",{parentName:"li"},"Logs")),Object(n.b)("li",{parentName:"ul"},"You can see the running state of your application"),Object(n.b)("li",{parentName:"ul"},"Navigate around the console to understand where your deployment, service and pods are running")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.46096654275092%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACH0lEQVQ4y31S2W4UMRCcf4eIRHkJ8AoBBS0hAZFIARTyBkJI8AMIbfaY3dlj7hnPsXMXrt5MEh7AUqntdrtc1bbx7HOKw6sUx18yXPzINTYYXK3w/GKCo0sLrzRefrJw+PEOLzSOLhc4+57iw88c775lgpOvGYydwQL7pzZ2j9d4dIPHZx6enAc4OPPx9NzH3qmHBwMHDzUYd1472H/rYveNg72TLQ7ee5pjBSN054j9Jao81AhQpB6A+gbVvdjh32O719UJDHM2x3gyhe248PxAYt20UCqFtVhibTuSC8MYsc6pJEMUKz1PJBdGClXdCiHPGJZlwTRNuK6nC0JkWYa27ZAkCYbDIUajESaTCYIgQBzH8H1f5oysbZpG6jnSVBMul0vYti1FJCTKspTi2WwG7nueJxcwv9lskOe5oCgKVFWlCds7Qip0HEcI+5s5SDgej0U9SfsLlVJykOAljH8RTqdTUcJikrmuKzaoIIqiWzVURkV1XaPrOiHpI3OMvEAUkpSEfZ/KspDDjJW2SVu0ex/c79GvReFsbmG5sm9tFwUJdKN1n5uWCiCEVM3Rk3NNZVwTHMwbU9PCr9/XoFLXc+CGCl7cwlcN3KhBnG1fnPY5OGdb2B6q6m2TjK0xTHOKa/095vM51s4KTuzrv1YiUjlCtYFKCyHZtqKUOR+sf3GCVkkmPSQR1cn/0h+b4GarLTXaEm3RXm/xf+C5P9r4zsYCMDfqAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pods on IKS",title:"Pods on IKS",src:"/ibm-garage-developer-guide/static/5cb1937c1cc8758b1309f80362287dfd/fb070/podsiks.png",srcSet:["/ibm-garage-developer-guide/static/5cb1937c1cc8758b1309f80362287dfd/d6747/podsiks.png 288w","/ibm-garage-developer-guide/static/5cb1937c1cc8758b1309f80362287dfd/09548/podsiks.png 576w","/ibm-garage-developer-guide/static/5cb1937c1cc8758b1309f80362287dfd/fb070/podsiks.png 1152w","/ibm-garage-developer-guide/static/5cb1937c1cc8758b1309f80362287dfd/c0f82/podsiks.png 1345w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If you have reached this point, we recommend you repeat the process a few more times using different templates and explore you environment to get familiar with it."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/guides/overview"}),"Guides")," will explain more about the tools used in the pipelines")),Object(n.b)(u,{kind:"success",mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Success:")," You will now have your application running inside your development cluster.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"This completes the deployment of your app.")),Object(n.b)("p",null,"You now have a running application that is being built and deployed into your development cluster.\nThe next step is to prepare for Continuous Delivery, Code Analysis, and Artifact Management."),Object(n.b)("h2",{id:"guides"},"Guides"),Object(n.b)("p",null,"For more detailed instructions of how to enable to the full developer lifecycle read through the ",Object(n.b)("strong",{parentName:"p"},"Guides")," section."),Object(n.b)(d,{small:!0,mdxType:"AnchorLinks"},Object(n.b)(m,{to:"../../guides/overview",mdxType:"AnchorLink"},"Guides"),Object(n.b)(m,{to:"../../starterkits/overview",mdxType:"AnchorLink"},"Starter Kit Templates")))}y.isMDXComponent=!0},447:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},448:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},449:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(447),o=a(0),r=a.n(o),l=a(107),p=a.n(l),c=a(194),b=a(128),s=a(3),d=a.n(s),m=a(388),u=function(e){var t,a=e.title,i=e.tabs,o=void 0===i?[]:i;return Object(n.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},g=a(448),h=a(389),O=function(e){var t=e.relativePagePath,a=e.repository,i=g.data.site.siteMetadata.repository,o=a||i,r=o.baseUrl,l=o.subDirectory,p=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:p},"Edit this page on GitHub"))):null},j=a(193),y=(a(59),a(26)),N=a(390);var f=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=p()(e,{lower:!0}),r=o===i,l=new RegExp(i+"(?!-)"),c=a.replace(l,o);return Object(n.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(n.b)(y.Link,{className:N.link,to:""+c},e))}));return Object(n.b)("div",{className:N.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:N.list},o))))))},i}(r.a.Component),A=a(195);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,l=t.frontmatter,s=void 0===l?{}:l,d=t.relativePagePath,m=t.titleType,g=s.tabs,h=s.title,y=s.theme,N=s.description,v=s.keywords,w=i.data.site.pathPrefix,k=w?o.pathname.replace(w,""):o.pathname,C=g?k.split("/").slice(-1)[0]||p()(g[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:y,pageTitle:h,pageDescription:N,pageKeywords:v,titleType:m},Object(n.b)(u,{title:r?Object(n.b)(r,null):h,label:"label",tabs:g}),g&&Object(n.b)(f,{slug:k,tabs:g,currentTab:C}),Object(n.b)(A.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:d})),Object(n.b)(j.a,{pageContext:t,location:o,slug:k,tabs:g,currentTab:C}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-deploy-app-index-mdx-6d6250959516972dbcd5.js.map