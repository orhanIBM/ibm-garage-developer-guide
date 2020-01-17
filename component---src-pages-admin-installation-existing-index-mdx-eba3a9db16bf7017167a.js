(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{400:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return g}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(108),r=a(451);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=l("Tabs"),c=l("Tab"),b=l("PageDescription"),p=l("InlineNotification"),u=l("AnchorLinks"),m=l("AnchorLink"),d={_frontmatter:o},h=r.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(h,i({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"Tabs"},Object(n.b)(c,{label:"Prerequisites",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Prepare to run Terraform to install the Development Tools into an existing IBM Cloud managed cluster")),Object(n.b)("p",null,"The IBM Garage for Cloud Developer Tools facilitate development and deployment of cloud-native applications.\nThey can be hosted in any Kubernetes or OpenShift cluster, including those managed by the IBM Cloud."),Object(n.b)("p",null,"In IBM Cloud, the cluster is hosted by either the ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers"}),"IBM Cloud Kubernetes Service")," or\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/openshift"}),"Red Hat OpenShift on IBM Cloud"),".\nThese instructions assume that the cluster has already been created and explain\nhow to configure and run the Terraform infrastructure-as-code (IasC) scripts to install the Developer Tools into that existing cluster."),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note"),": The Terraform scripts will clean up the cluster to remove any existing resources that overlap with the resources\nprovisioned by the scripts. You will need to remember to remove any IBM Cloud services that were previously\ncreated."),Object(n.b)("p",null,"Use the helper script ",Object(n.b)("inlineCode",{parentName:"p"},"terraform/scripts/destroy-service.sh")," to help automate the deletion You can also run it\nto remove all the services beside ",Object(n.b)("strong",{parentName:"p"},"PostgreSQL")," ",Object(n.b)("inlineCode",{parentName:"p"},"./destroy-services.sh postgres"))),Object(n.b)("p",null,"The following prerequisites are required before following the setup instructions:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"An IBM Cloud account with the ability to provision cloud service instances in the same region and zone as the existing cluster")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Install the ",Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/prereqs"}),"Prerequisites")," listed before continuing")))),Object(n.b)(c,{label:"Download",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Obtain the Terraform infrastructure-as-code (IasC) scripts that will install the tools into your IBM Cloud managed cluster")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Clone the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Switch to the cloned directory"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd ibm-garage-iteration-zero\n"))))),Object(n.b)(c,{label:"API key",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Configure the key the CLI uses to create cloud services")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The installation scripts need an API key to authenticate to IBM Cloud.\nThe following steps create the required API key and put them into a properties file.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," property file:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"classic.username=<CLASSIC_USERNAME>\nclassic.api.key=<CLASSIC_API_KEY>\nibmcloud.api.key=<IBMCLOUD_API_KEY>\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Since the cluster already exists, we’ll only need to set the ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property."))),Object(n.b)("h3",{id:"step-a-create-the-credentialsproperties-file"},"Step A. Create the credentials.properties file"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Inside the ",Object(n.b)("inlineCode",{parentName:"p"},"iteration-zero-ibmcloud")," folder, copy ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.template")," to a file named ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties"),"."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd iteration-zero-ibmcloud\ncp credentials.template credentials.properties\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file is already listed in the ",Object(n.b)("inlineCode",{parentName:"p"},".gitignore")," file so that the file containing\nyour private API key will not be pushed to the server repository."))),Object(n.b)("h3",{id:"step-b-set-the-ibm-cloud-api-key"},"Step B. Set the IBM Cloud API key"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Follow these instructions to create an IBM Cloud API key:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey",title:"Managing user API keys"}),"Managing user API keys")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the value for the ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property.")))),Object(n.b)(c,{label:"Configuration",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Configure the properties describing the environment")),Object(n.b)("p",null,"The settings for installing the Developer Tools go in a single property file\nin the ",Object(n.b)("inlineCode",{parentName:"p"},"./terraform/settings")," directory:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"environment.tfvars")," — Properties for installing the Developer Tools")),Object(n.b)("p",null,"Follow the instructions below to set the existing cluster’s details in the ",Object(n.b)("inlineCode",{parentName:"p"},"environment.tfvars")," file."),Object(n.b)("h3",{id:"environment-variables"},"Environment variables"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"environment.tfvars")," properties will be used to install the Development Tools."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Typical values look like this:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'# The type of cluster that will be created/used (kubernetes or openshift)\ncluster_type="kubernetes"\n# Flag indicating if we are using an existing cluster or creating a new one\ncluster_exists="true"\n\n# The cluster name can be provided (particularly if using existing cluster) or it will\n# default to \'${resource_group_name}-cluster\'\ncluster_name="catalyst-team-cluster"\n\nresource_group_name="catalyst-team"\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set them based on the existing cluster:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"resource_group_name")," — The existing cluster’s resource group"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"cluster_name")," — The existing cluster’s name"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"cluster_exists")," — Set to ",Object(n.b)("inlineCode",{parentName:"li"},'"true"')," for the existing cluster"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"cluster_type")," — Specify whether the existing cluster is ",Object(n.b)("strong",{parentName:"li"},"kubernetes")," or ",Object(n.b)("strong",{parentName:"li"},"openshift")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"postgres_server_exists")," — Specify whether the existing cluster already has an existing PostgreSQL service instance")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," The values for ",Object(n.b)("inlineCode",{parentName:"p"},"resource_group_name")," and ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_name")," can be found on the Resource List\npage in the IBM Cloud Console - ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/resources"}),"https://cloud.ibm.com/resources")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.177215189873415%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABI0lEQVQoz22QS07EMAyGc2SuwCU4AKfgBCyQ2LNBGgHqdNppm/ejSfrjeNrZQKVfdj8/YluM04zrrhAi+Ns21tYsDoH/D9ZsqTf+8vaFh6dXPD6/QxgfoWxg2ZDgU4aPGSEVxLWyfyishdX8FnNkUy4YZMBnp3DqNcRlUhhIxiUoEyBJ2kaMi8FPPxOLzBWxblhwJrWc725k3vIuV3mvF1I7SpowLRqzNFiUhaNJpfH4OI13blyEpFjzrU/MW60lPkvN8RBXiEQrTAu9qjSBhEwr1FpZpTQVFjO62xHjG5bm31jZuYjUsLuM6IcRxlpOuh9/t/+pbvUvo+bC05jnYabRHTVsK3gO5JzpJoZZm7AVOB+wrpn8SnfWiGndG92at+1+AfBOHiduQojPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cloud ibm com resources",title:"cloud ibm com resources",src:"/ibm-garage-developer-guide/static/a416967c78150ae12d4aa974d76b706f/fb070/cloud.ibm.com-resources.png",srcSet:["/ibm-garage-developer-guide/static/a416967c78150ae12d4aa974d76b706f/d6747/cloud.ibm.com-resources.png 288w","/ibm-garage-developer-guide/static/a416967c78150ae12d4aa974d76b706f/09548/cloud.ibm.com-resources.png 576w","/ibm-garage-developer-guide/static/a416967c78150ae12d4aa974d76b706f/fb070/cloud.ibm.com-resources.png 1152w","/ibm-garage-developer-guide/static/a416967c78150ae12d4aa974d76b706f/fb104/cloud.ibm.com-resources.png 1728w","/ibm-garage-developer-guide/static/a416967c78150ae12d4aa974d76b706f/0d4ff/cloud.ibm.com-resources.png 2054w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Note: ",Object(n.b)("strong",{parentName:"p"},"PostgreSQL")," can take some time to provision, so in some cases it is worth manually creating an instance. It needs\nto be in the same region and names ",Object(n.b)("inlineCode",{parentName:"p"},"<resource-group>-postgresql"),"."))),Object(n.b)(c,{label:"Run",mdxType:"Tab"},Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Run the scripts that create the environment")),Object(n.b)("p",null,"Having configured the ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties"),", ",Object(n.b)("inlineCode",{parentName:"p"},"environment.tfvars"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"vlan.tfvars")," properties files,\nwe are now ready to kick off the installation."),Object(n.b)("p",null,"Launch a ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"}),"Developer Tools Docker container"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Run the following command to run the Docker container:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This will install the Cloud Garage Tools Docker image and exec shell into the running container. The container will\nmount the filesystem’s ",Object(n.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(n.b)("inlineCode",{parentName:"p"},"/home/devops/src/"),". Once the Docker container has started and\nthe script has exec shelled into it, you will see an IBM Garage banner. This will help you identify you are running\ninside the Docker image that has just mounted your file system."),Object(n.b)("p",{parentName:"li"}," For more information on the ",Object(n.b)("strong",{parentName:"p"},"Developer Tools Image")," see the following guide link below.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create the Developer Tools environment"),Object(n.b)("p",{parentName:"li"},"  The supplied Terraform script is ready to run using the settings in the properties files.\nYou optionally can extend or modify the scripts and tailor them for your project’s specific needs."))),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Note: If you run this approach multiple times remember to delete any pre existing cloud services that were created previously")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Run this script in the container:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./runTerraform.sh\n")),Object(n.b)("p",{parentName:"li"},"  This script will create the Developer Tools environment."),Object(n.b)("p",{parentName:"li"},"  The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(n.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(n.b)("p",{parentName:"li"},"  Installing the tools into an existing cluster takes about 30 minutes."),Object(n.b)(p,{kind:"success",mdxType:"InlineNotification"},Object(n.b)("p",{parentName:"li"},"  You should now have your Developer Tools environment\nfully provisioned and configured. Enjoy!")))),Object(n.b)("h3",{id:"developer-tools-environment"},"Developer Tools environment"),Object(n.b)("p",null,"Once the Terraform scripts have finished, you can see the resources that the scripts created in IBM Cloud:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In the IBM Cloud console, open the ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-ui#dashboardview",title:"Managing resources in the resource list"}),"Resource List")),Object(n.b)("li",{parentName:"ul"},"On the Resource List page, filter by your Resource Group (e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"catalyst-team"),")"),Object(n.b)("li",{parentName:"ul"},"You should see these resources listed:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Clusters"),": 1, either Kubernetes or OpenShift"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Services"),": 5 or so, such as PostgreSQL, LogDNA, etc."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Storage"),": 1, an instance of Cloud Object Storage"))),Object(n.b)("li",{parentName:"ul"},"Select the cluster and open the Kubernetes dashboard or OpenShift web console. You should see:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Namespaces: ",Object(n.b)("inlineCode",{parentName:"li"},"tools"),", ",Object(n.b)("inlineCode",{parentName:"li"},"dev"),", ",Object(n.b)("inlineCode",{parentName:"li"},"test"),", and ",Object(n.b)("inlineCode",{parentName:"li"},"staging")),Object(n.b)("li",{parentName:"ul"},"Deployments in the ",Object(n.b)("inlineCode",{parentName:"li"},"tools")," namespace: ",Object(n.b)("inlineCode",{parentName:"li"},"catalyst-dashboard"),", ",Object(n.b)("inlineCode",{parentName:"li"},"jenkins"),", etc.")))),Object(n.b)("p",null,"To get started with code use the following guides:"),Object(n.b)(u,{mdxType:"AnchorLinks"},Object(n.b)(m,{to:"../../getting-started/deploy-app",mdxType:"AnchorLink"},"Deploy First App"),Object(n.b)(m,{to:"../../guides/overview",mdxType:"AnchorLink"},"Guides"),Object(n.b)(m,{to:"../../guides/tools-image",mdxType:"AnchorLink"},"Developer Tools Image")),Object(n.b)("h3",{id:"possible-issues"},"Possible issues"),Object(n.b)("p",null,"If you find that that the Terraform provisioning has failed, try re-running the ",Object(n.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(n.b)("p",null,"If you find that some of the services have failed to create in the time allocated, you can try this:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Manually delete the service instances in your resource group"),Object(n.b)("li",{parentName:"ul"},"Delete the ",Object(n.b)("inlineCode",{parentName:"li"},"workspace")," directory (which will remove any state that has been created by Terraform)"),Object(n.b)("li",{parentName:"ul"},"Re-run the ",Object(n.b)("inlineCode",{parentName:"li"},"runTerraform.sh")," script",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rm -rf workspace\n./runTerraform.sh\n")))))))}g.isMDXComponent=!0},449:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},450:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},451:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(449),i=a(0),o=a.n(i),l=a(107),s=a.n(l),c=a(195),b=a(128),p=a(3),u=a.n(p),m=a(388),d=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:u()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},h=a(450),g=a(389),O=function(e){var t=e.relativePagePath,a=e.repository,r=h.data.site.siteMetadata.repository,i=a||r,o=i.baseUrl,l=i.subDirectory,s=o+"/edit/"+i.branch+l+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+g.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a(193),N=(a(59),a(26)),f=a(390);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0}),o=i===r,l=new RegExp(r+"(?!-)"),c=a.replace(l,i);return Object(n.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(n.b)(N.Link,{className:f.link,to:""+c},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},i))))))},r}(o.a.Component),v=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,l=t.frontmatter,p=void 0===l?{}:l,u=t.relativePagePath,m=t.titleType,h=p.tabs,g=p.title,N=p.theme,f=p.description,T=p.keywords,w=r.data.site.pathPrefix,C=w?i.pathname.replace(w,""):i.pathname,x=h?C.split("/").slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:N,pageTitle:g,pageDescription:f,pageKeywords:T,titleType:m},Object(n.b)(d,{title:o?Object(n.b)(o,null):g,label:"label",tabs:h}),h&&Object(n.b)(y,{slug:C,tabs:h,currentTab:x}),Object(n.b)(v.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:u})),Object(n.b)(j.a,{pageContext:t,location:i,slug:C,tabs:h,currentTab:x}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-admin-installation-existing-index-mdx-eba3a9db16bf7017167a.js.map