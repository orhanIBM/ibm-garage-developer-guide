(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{414:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return d}));n(11),n(5),n(6),n(4),n(10),n(1),n(0);var a=n(108),i=n(449);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},l=s("PageDescription"),c=s("AnchorLinks"),p=s("AnchorLink"),b={_frontmatter:r},u=i.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(u,o({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l,{mdxType:"PageDescription"},Object(a.b)("p",null,"Use Jenkins to automate your continuous integration process")),Object(a.b)("p",null,"In IBM Garage Method, one of the Develop practices is ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_continuous_integration/"}),"continuous integration"),".\nThe Developer Tools environment uses a Jenkins pipeline to automate continuous integration."),Object(a.b)("h2",{id:"what-is-continuous-integration"},"What is continuous integration"),Object(a.b)("p",null,"Continuous integration is a software development technique where software is built regularly by a team in an automated fashion.\nThis quote helps explain it:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Continuous Integration is a software development practice where members of a team integrate their work frequently,\nusually each person integrates at least daily - leading to multiple integrations per day.\nEach integration is verified by an automated build (including test) to\ndetect integration errors as quickly as possible. Many teams find that this approach leads to significantly\nreduced integration problems and allows a team to develop cohesive software more rapidly"),Object(a.b)("cite",null,"– Martin Fowler")),Object(a.b)("h2",{id:"what-is-jenkins"},"What is Jenkins"),Object(a.b)("p",null,"Jenkins is a self-contained, open source automation server that can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.\nIt is a perfect tool for helping manage continuous integration tasks for a wide range of software components."),Object(a.b)("p",null,"Jenkins Pipeline (or simply “Pipeline”) is a suite of plugins that supports implementing and integrating continuous delivery pipelines into Jenkins."),Object(a.b)("p",null,"A continuous delivery pipeline is an automated expression of your process for getting software from version control right through to your users and customers."),Object(a.b)("p",null,"Jenkins Pipeline provides an extensible set of tools for modeling simple-to-complex delivery pipelines “as code.” The definition of a Jenkins Pipeline is typically written into a text file (called a ",Object(a.b)("a",o({parentName:"p"},{href:"https://jenkins.io/doc/pipeline/tour/hello-world/"}),"Jenkinsfile"),") that in turn is checked into a project’s source control repository."),Object(a.b)("h3",{id:"pipelines"},"Pipelines"),Object(a.b)("p",null,"Pipelines offer a set of stages or steps that can be chained together to allow a level of software\nautomation. This automation can be tailored to the specific project requirements."),Object(a.b)("p",null,"You can read more information about Jenkins Pipelines ",Object(a.b)("a",o({parentName:"p"},{href:"https://jenkins.io/doc/book/pipeline/"}),"here")),Object(a.b)("h3",{id:"stages"},"Stages"),Object(a.b)("p",null,"Pipelines are defined in a ",Object(a.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," that sits in the root of your application code. It defines a number of stages. Each of the ",Object(a.b)("inlineCode",{parentName:"p"},"Starter Kit Templates")," includes a ",Object(a.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," that offers a number of stages. The stages have been configured to complete the build, test, package, and deploy of the application code. Each stage can use the defined defined ",Object(a.b)("inlineCode",{parentName:"p"},"secrets")," and ",Object(a.b)("inlineCode",{parentName:"p"},"config maps")," that were previously configured during the installation of Development cluster setup."),Object(a.b)("h2",{id:"developer-tools-pipeline"},"Developer Tools Pipeline"),Object(a.b)("p",null,"To enable application compatibility between Kubernetes and OpenShift, the ",Object(a.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," is consistent between pipeline registration with\nboth platforms. Also, the Docker images are built from\n",Object(a.b)("a",o({parentName:"p"},{href:"https://www.redhat.com/en/blog/introducing-red-hat-universal-base-image"}),"UBI images"),"\nso that their containers can run on both platforms."),Object(a.b)("p",null,"These are the stages in the pipeline and a description of what each stage does. The ",Object(a.b)("strong",{parentName:"p"},"bold stage names")," indicate\nthe stages that are required; the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"italics stage names"))," indicate optional stages that can be deleted or will be ignored if the tool\nsupporting the stage is not installed. These stages represent a typical production pipeline flow for a cloud-native application."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Setup"),": Clones the code into the pipeline"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Build"),": Runs the build commands for the code"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Test"),":\tValidates the unit tests for the code"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Publish pacts")),":\tPublishes any pact contracts that have been defined"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Sonar scan")),": Runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Verify environment"),": Validates the OpenShift or IKS environment configuration is valid"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Build image"),": Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Deploy to DEV env"),":\tDeploys the Docker image tagged version to ",Object(a.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Health Check"),": Validates the Health Endpoint of the deployed application"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Package Helm Chart")),": Stores the tagged version of the Helm chart in Artifactory"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Trigger CD Pipeline")),": This is a GitOps stage that will update the build number in designated git repo and trigger ArgoCD for deployment to ",Object(a.b)("strong",{parentName:"li"},"test"))),Object(a.b)("h2",{id:"registering-pipelines"},"Registering Pipelines"),Object(a.b)("p",null,"The ",Object(a.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/starterkittemplates/"}),"Starter Kit Templates")," are a good place to start to see how ",Object(a.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Dockerfile")," should be configured for use in a Jenkins CI pipeline. To register your git repo, use the ",Object(a.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/cli"}),"IGC CLI"),". This command automates a number of manual steps you would have to do with Jenkins, including: managing secrets, webhooks, and pipeline registration in the Jenkins tools."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc pipeline\n")),Object(a.b)("p",null,"By default, the pipeline will register into the ",Object(a.b)("inlineCode",{parentName:"p"},"dev")," namespace and will copy all the ",Object(a.b)("inlineCode",{parentName:"p"},"configMaps")," and ",Object(a.b)("inlineCode",{parentName:"p"},"secrets")," from the ",Object(a.b)("inlineCode",{parentName:"p"},"tools")," namespace to the ",Object(a.b)("inlineCode",{parentName:"p"},"dev")," namespace. This means the pipeline can execute, knowing it has access to the key information that enables it to integrate with both the cloud platform and the various development tools. See ",Object(a.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/cluster-configuration"}),"Cluster Configuration")," for more detailed information."),Object(a.b)("h3",{id:"registering-pipeline-in-new-namespace"},"Registering Pipeline in new namespace"),Object(a.b)("p",null,"You can use any namespace you want to register a pipeline. If you add ",Object(a.b)("inlineCode",{parentName:"p"},"-n")," or ",Object(a.b)("inlineCode",{parentName:"p"},"namespace")," to your ",Object(a.b)("inlineCode",{parentName:"p"},"igc pipeline")," command, it will create a new namespace if it doesn’t already exist. It will copy the necessary ",Object(a.b)("inlineCode",{parentName:"p"},"secrets")," and ",Object(a.b)("inlineCode",{parentName:"p"},"configMaps")," into that namespace and configure the build agents pods to run in that namespace."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc pipeline -n team-one\n")),Object(a.b)("p",null,"This is good if you have various squads, teams, pairs or students working in the same Development Tools environment."),Object(a.b)("h2",{id:"continuous-deployment"},"Continuous deployment"),Object(a.b)("p",null,"In addition to continuous integration, the Developer Tools environment also supports continuous delivery\nusing Artifactory and ArgoCD:"),Object(a.b)(c,{small:!0,mdxType:"AnchorLinks"},Object(a.b)(p,{to:"../../guides/artifact-management",mdxType:"AnchorLink"},"Artifact Management with Artifactory"),Object(a.b)(p,{to:"../../guides/continuous-delivery",mdxType:"AnchorLink"},"Continuous Delivery with ArgoCD")))}d.isMDXComponent=!0},447:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},448:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},449:function(e,t,n){"use strict";n(32),n(28);var a=n(1),i=n(447),o=n(0),r=n.n(o),s=n(107),l=n.n(s),c=n(194),p=n(128),b=n(3),u=n.n(b),d=n(388),m=function(e){var t,n=e.title,i=e.tabs,o=void 0===i?[]:i;return Object(a.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12"},Object(a.b)("h1",{id:"page-title",className:d.text},n)))))},g=n(448),h=n(389),f=function(e){var t=e.relativePagePath,n=e.repository,i=g.data.site.siteMetadata.repository,o=n||i,r=o.baseUrl,s=o.subDirectory,l=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?Object(a.b)("div",{className:"bx--row "+h.row},Object(a.b)("div",{className:"bx--col"},Object(a.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=n(193),j=(n(59),n(26)),v=n(390);var y=function(e){var t,n;function i(){return e.apply(this,arguments)||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),r=o===i,s=new RegExp(i+"(?!-)"),c=n.replace(s,o);return Object(a.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(a.b)(j.Link,{className:v.link,to:""+c},e))}));return Object(a.b)("div",{className:v.tabsContainer},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(a.b)("nav",null,Object(a.b)("ul",{className:v.list},o))))))},i}(r.a.Component),N=n(195);t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,r=e.Title,s=t.frontmatter,b=void 0===s?{}:s,u=t.relativePagePath,d=t.titleType,g=b.tabs,h=b.title,j=b.theme,v=b.description,w=b.keywords,k=i.data.site.pathPrefix,C=k?o.pathname.replace(k,""):o.pathname,T=g?C.split("/").slice(-1)[0]||l()(g[0],{lower:!0}):"";return Object(a.b)(p.a,{homepage:!1,theme:j,pageTitle:h,pageDescription:v,pageKeywords:w,titleType:d},Object(a.b)(m,{title:r?Object(a.b)(r,null):h,label:"label",tabs:g}),g&&Object(a.b)(y,{slug:C,tabs:g,currentTab:T}),Object(a.b)(N.a,{padded:!0},n,Object(a.b)(f,{relativePagePath:u})),Object(a.b)(O.a,{pageContext:t,location:o,slug:C,tabs:g,currentTab:T}),Object(a.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-continuous-integration-index-mdx-4ceb44627eeb882f5ecf.js.map