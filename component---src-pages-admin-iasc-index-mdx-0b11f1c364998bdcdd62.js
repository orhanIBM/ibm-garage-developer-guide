(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{394:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(435);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o,s={},l=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),c={_frontmatter:s},b=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(b,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Infrastruture as Code")," is the practice of defining and managing the logic used to provision infrastructure as versioned\nartifacts in the same way that code artifacts have traditionally been handled. There are a number of different tools and\nframeworks available that enable this type of approach. The IBM Garage for Cloud Developer Tools currently leverage\nTerraform as the technology used to implement the Infrastructure as Code strategy."),Object(r.b)("p",null,"The IasC terraform logic is stored in two repositories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"garage-terraform-modules")),Object(r.b)("p",{parentName:"li"},"  The modules that provide logic to provision individual components of the infrastructure. These modules cover one of\nthree different categories: infrastructure (e.g. create a kubernetes cluster), cloud service, or software deployed and\nconfigured into a cluster. ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/garage-terraform-modules"}),"https://github.com/ibm-garage-cloud/garage-terraform-modules"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," "),Object(r.b)("p",{parentName:"li"},"  The logic that makes use of the modules with specific configuration parameters used to deliver an entire solution.\n",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"),"\n"))),Object(r.b)("p",null,"This guide will walk through the various files that make up the Infrastructure as Code components and how to\ncustomize them. The ",Object(r.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/admin/overview"}),"Installation Overview")," walks through how to perform an install with the Iteration Zero\nscripts."),Object(r.b)("h2",{id:"iteration-zero-terraform-scripts"},"Iteration Zero terraform scripts"),Object(r.b)("p",null,"The Iteration Zero terraform scripts make use of the modules to provision and prepare an environment. A listing of\nthe files within the repository is shown below."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{}),".\n├── LICENSE\n├── README.md\n├── credentials.template\n├── launch.sh\n├── docs\n│   ├── APIKEYS.md\n│   ├── VLAN.md\n│   └── images\n│       ├── apikeys.png\n│       ├── catalyst-provisioned-environment.drawio\n│       ├── catalyst-provisioned-environment.png\n│       ├── classickeys.png\n│       └── devcluster.png\n└── terraform\n    ├── runTerraform.sh\n    ├── scripts\n    │   ├── apply.sh\n    │   ├── destroy-cluster.sh\n    │   ├── destroy-services.sh\n    ├── settings\n    │   ├── environment.tfvars\n    │   └── vlan.tfvars\n    ├── stages\n    │   ├── stage0.tf\n    │   ├── stage1-cluster.tf\n    │   ├── stage1-namespaces.tf\n    │   ├── stage1-postgres.tf\n    │   ├── stage2-argocd.tf\n    │   ├── stage2-artifactory.tf\n    │   ├── stage2-catalystdashboard.tf\n    │   ├── stage2-jenkins.tf\n    │   ├── stage2-pactbroker.tf\n    │   ├── stage2-sonarqube.tf\n    │   ├── stage3-appid.tf\n    │   ├── stage3-cloud_object_storage.tf\n    │   ├── stage3-cloudant.tf\n    │   ├── stage3-logdna.tf\n    │   ├── stage3-sysdig.tf\n    │   └── variables.tf\n    ├── stages-crc\n    │   ├── stage0.tf\n    │   ├── stage1-cluster.tf\n    │   ├── stage1-namespaces.tf\n    │   ├── stage1-postgres.tf\n    │   ├── stage2-argocd.tf\n    │   ├── stage2-artifactory.tf\n    │   ├── stage2-catalystdashboard.tf\n    │   ├── stage2-jenkins.tf\n    │   ├── stage2-pactbroker.tf\n    │   ├── stage2-sonarqube.tf\n    │   └── variables.tf\n    └── templates\n        └── stage0\n            └── backend-postgres.tf\n")),Object(r.b)("h3",{id:"stages"},"Stages"),Object(r.b)("p",null,"The files in the ",Object(r.b)("inlineCode",{parentName:"p"},"stages")," and ",Object(r.b)("inlineCode",{parentName:"p"},"stages-crc")," folders provide Terraform files that make use of external\nTerraform modules to provision resources. The different resources are logically grouped with stage numbers\nand names for the resource provided. All of the stages are processed by the Terraform apply at the same\ntime and Terraform works out the sequencing of execution based on the dependencies between the modules."),Object(r.b)("p",null,"The Iteration Zero application comes with a pre-defined set of software and services that will be\nprovisioned. For more advanced situations, that set of modules can be easily customized."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Removing a stage"),Object(r.b)("p",{parentName:"li"},"  To remove a stage, simply delete or move a file out of the stages directory")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Adding a stage"),Object(r.b)("p",{parentName:"li"},"  To add a stage, define a new stage file and reference the desired module. Any necessary variables\ncan be referenced from the base variables or the output from the other modules.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Modifying a stage"),Object(r.b)("p",{parentName:"li"},"  Any of the values for the variables in ",Object(r.b)("inlineCode",{parentName:"p"},"variables.tf")," or in the stage files can be updated to change\nthe results of what is built "))),Object(r.b)("h3",{id:"environment-configuration"},"Environment configuration"),Object(r.b)("p",null,"There a number of files used to provide the overall configuration for the environment that will be\nprovisioned."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"credentials.template")),Object(r.b)("p",{parentName:"li"},"  Template file for the credentials.properties\n")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"credentials.properties")),Object(r.b)("p",{parentName:"li"},"  File containing the API key and Classic Infrastructure credentials needed to run the scripts\n")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"terraform/settings/environment.tfvars")),Object(r.b)("p",{parentName:"li"},"  General configuration values for the environment, like ",Object(r.b)("inlineCode",{parentName:"p"},"region"),", ",Object(r.b)("inlineCode",{parentName:"p"},"resource group")," and ",Object(r.b)("inlineCode",{parentName:"p"},"cluster type"),"\n")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"terraform/settings/vlan.tfvars")),Object(r.b)("p",{parentName:"li"},"  Configuration values for the IBM Cloud vlan settings needed for the creation of a new cluster\n")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"terraform/stages/variables.tf")," or ",Object(r.b)("inlineCode",{parentName:"p"},"terraform/stages-crc/variables.tf")),Object(r.b)("p",{parentName:"li"},"  Defined variables for the various stages and, in some cases, default values."))),Object(r.b)("h3",{id:"scripts"},"Scripts"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"launch.sh")),Object(r.b)("p",{parentName:"li"},"  Launches a container image from the Docker Hub registry that contains all the tools necessary to run\nthe terraform scripts and opens into a shell where the Terraform logic can be run\n")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"terraform/runTerraform.sh")),Object(r.b)("p",{parentName:"li"},"  Based on the values configured in ",Object(r.b)("inlineCode",{parentName:"p"},"environment.tfvars"),", this script creates the ",Object(r.b)("inlineCode",{parentName:"p"},"terraform/workspace"),"\ndirectory, copies the appropriate Terraform files into that directory, then applies the Terraform\nscripts\n")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"terraform/scripts/apply.sh")),Object(r.b)("p",{parentName:"li"},"  Applies the Terraform scripts. This script is copied into the ",Object(r.b)("inlineCode",{parentName:"p"},"terraform/workspace")," directory during the\n",Object(r.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," logic. It is then available to rerun the Terraform logic without having to set\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"terraform/workspace")," directory up again.\n")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"terraform/scripts/destroy-cluster.sh")),Object(r.b)("p",{parentName:"li"},"  Helper script that destroys the IBM Cloud cluster to clean up the environment")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"terraform/scripts/destroy-services.sh")),Object(r.b)("p",{parentName:"li"},"  Helper script that destroys services that have been provisioned in IBM Cloud. It works against\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"resource group")," that has been configured in the ",Object(r.b)("inlineCode",{parentName:"p"},"environment.tfvars")," file. Any values passed\nin as arguments will be used to do a regular expression match to ",Object(r.b)("strong",{parentName:"p"},"exclude")," services from the\nlist of those that will be destroyed."))),Object(r.b)("h2",{id:"garage-terraform-modules"},"Garage Terraform Modules"),Object(r.b)("p",null,"The terraform modules project contains the building block components that can be used to create a\nprovisioned environment. The modules are organized into one of three major categories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"cloud-managed")),Object(r.b)("p",{parentName:"li"},"  Modules that provision infrastructure (cluster and/or services) into a managed cloud environment\n")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"self-managed")),Object(r.b)("p",{parentName:"li"},"  Modules that provision infrastructure into a self-managed environment (e.g. software deployed\ninto a cluster)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"generic")),Object(r.b)("p",{parentName:"li"},"  Modules that can be applied independent of the environment (e.g. software that is installed\ninto a running kubernetes environment)"))),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{}),".\n├── README.md\n├── developer_contribution.md\n├── governance.md\n├── cloud-managed\n│   ├── cluster\n│   │   └── ibmcloud\n│   └── services\n│       ├── appid\n│       ├── cloud_object_storage\n│       ├── cloudant\n│       ├── logdna\n│       ├── postgres\n│       └── sysdig\n├── generic\n│   ├── cluster\n│   │   ├── namespaces\n│   │   └── serviceaccount\n│   └── tools\n│       ├── argocd_release\n│       ├── artifactory_release\n│       ├── catalystdashboard_release\n│       ├── jenkins_release\n│       ├── pactbroker_release\n│       └── sonarqube_release\n└── self-managed\n    ├── cluster\n    │   └── openshift_cluster\n    └── software\n        └── postgres\n")))}p.isMDXComponent=!0},433:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},434:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},435:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(433),i=a(0),o=a.n(i),s=a(105),l=a.n(s),c=a(195),b=a(127),p=a(3),d=a.n(p),m=a(384),u=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(r.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:m.text},a)))))},f=a(434),g=a(385),h=function(e){var t=e.relativePagePath,a=e.repository,n=f.data.site.siteMetadata.repository,i=a||n,o=i.baseUrl,s=i.subDirectory,l=o+"/edit/"+i.branch+s+"/src/pages"+t;return o?Object(r.b)("div",{className:"bx--row "+g.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a(193),O=(a(59),a(26)),v=a(386);var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0}),o=i===n,s=new RegExp(n+"(?!-)"),c=a.replace(s,i);return Object(r.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(r.b)(O.Link,{className:v.link,to:""+c},e))}));return Object(r.b)("div",{className:v.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:v.list},i))))))},n}(o.a.Component),y=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,s=t.frontmatter,p=void 0===s?{}:s,d=t.relativePagePath,m=t.titleType,f=p.tabs,g=p.title,O=p.theme,v=p.description,w=p.keywords,C=n.data.site.pathPrefix,T=C?i.pathname.replace(C,""):i.pathname,k=f?T.split("/").slice(-1)[0]||l()(f[0],{lower:!0}):"";return Object(r.b)(b.a,{homepage:!1,theme:O,pageTitle:g,pageDescription:v,pageKeywords:w,titleType:m},Object(r.b)(u,{title:o?Object(r.b)(o,null):g,label:"label",tabs:f}),f&&Object(r.b)(N,{slug:T,tabs:f,currentTab:k}),Object(r.b)(y.a,{padded:!0},a,Object(r.b)(h,{relativePagePath:d})),Object(r.b)(j.a,{pageContext:t,location:i,slug:T,tabs:f,currentTab:k}),Object(r.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-admin-iasc-index-mdx-0b11f1c364998bdcdd62.js.map