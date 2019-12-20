(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{413:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));a(11),a(5),a(6),a(4),a(10),a(0);var i=a(109),n=a(453);a(1);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var r,c={},p=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={_frontmatter:c},s=n.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(s,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(p,{mdxType:"PageDescription"},Object(i.b)("p",null,"Use Argo CD to continuously deliver application changes into the runtime environment")),Object(i.b)("p",null,"In IBM Garage Method, one of the Develop practices is ",Object(i.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/deliver/practice_continuous_delivery/"}),"continuous delivery"),". The Developer Tools environment uses an Argo CD pipeline to automate continuous delivery."),Object(i.b)("h2",{id:"what-is-continuous-delivery"},"What is continuous delivery"),Object(i.b)("p",null,"Continuous delivery is the DevOps approach of frequently making new versions of an application’s components available\nfor deployment to an environment. The process involves automation of the build and validation process and concludes with\na new version of the application that is available for promotion to another environment."),Object(i.b)("p",null,"Continuous delivery is closely related to continuous deployment. The distinction is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Continuous delivery deploys an application when a user manually triggers deployment"),Object(i.b)("li",{parentName:"ul"},"Continuous deployment deploys an application automatically when it is ready")),Object(i.b)("p",null,"An application is ready for deployment when it passes a set of tests that prove it doesn’t contain any significant problems. These tests must be automated so that deployment can be automated. Until you have this set of automated tests and trust them sufficiently, stick with continuous delivery."),Object(i.b)("h3",{id:"what-is-gitops"},"What is GitOps"),Object(i.b)("p",null,Object(i.b)("a",o({parentName:"p"},{href:"https://www.weave.works/technologies/gitops/"}),Object(i.b)("em",{parentName:"a"},"GitOps"))," is the operational pattern of using Git repositories as the source of truth for defining the configuration that makes up the desired state of the application. It uses Git repositories to declaratively represent the desired state of applications in deployment environments."),Object(i.b)("p",null,"GitOps takes advantage of several Git features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Git has an audit log of changes"),Object(i.b)("li",{parentName:"ul"},"Whole releases can be managed from a pull request"),Object(i.b)("li",{parentName:"ul"},"Git enables changes to be rolled back quickly if there is an issue with a new release")),Object(i.b)("h3",{id:"cicd-integration"},"CI/CD integration"),Object(i.b)("p",null,"For the full end-to-end build and delivery process, both the CI and CD pipelines are required. For this to work, a Git repo is used to convey the configuration values. Within the Developer Tools environment, we have used certain naming conventions to streamline and simplify the untegration between the various components."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"878px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.357630979498865%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABi0lEQVQoz2PYsHSR2q61q+IZ8IAnT57MuHTp0v9Tp079uH379uv79+513blxrRir4tMvP5Wd/Pr/f+vcO6KJDYvV5s+eqjNv/gLtlpYWk/T0dFmgElZBQUF5VVVVqYLaRgGQni23ny5b/+jjt9Seuzp79x/IOHHiRNq+fftyd+/encLQuHitQ++uw20MIt0yF++82PcfCF69fg2i/t+7d68TZEBQUBAPsiPWXr8v33vqiUn/2hvu79+///H69et/7969+3v//v0/KK59+/KpwafPn0M/fvzoA1QUev78eW1k+RvXr3sDxS+f379HCMT/f0qA+e7du4pPnz5VevnypeKZM2eUGIAOYbj3/z8TkGbEFiR37tzJAireBGIfOnQo/MaNGy8WLV6iCuLPB+rFAOLiEgwNdbVg9sOHj5iArmP+9OkTM9BWNpDYzZs3a65fv35z4cKFLEAuu5GRkQiQ5gGKMezYuZMB6EJGoFpGoKWM586dY2QgADj09fXVvLy8jIBsSXTJjo4ODA0As0LU/1DE/JIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Argo CD config",title:"Argo CD config",src:"/ibm-garage-developer-guide/static/0789e6678ead40eb9998920e51e542a6/18175/CI_CD-pipelines.png",srcSet:["/ibm-garage-developer-guide/static/0789e6678ead40eb9998920e51e542a6/1a057/CI_CD-pipelines.png 288w","/ibm-garage-developer-guide/static/0789e6678ead40eb9998920e51e542a6/8418d/CI_CD-pipelines.png 576w","/ibm-garage-developer-guide/static/0789e6678ead40eb9998920e51e542a6/18175/CI_CD-pipelines.png 878w"],sizes:"(max-width: 878px) 100vw, 878px",loading:"lazy"})),"\n    "),Object(i.b)("p",null,"The naming components are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"app repo")," - The name of the Git repository for the application"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git org")," - The name of the GitHub organization for the application’s repo"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tag")," - The build version"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chart version")," - The version of the Helm chart"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"region")," - The geographic location in IBM Cloud")),Object(i.b)("p",null,"The derived names are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GitHub application path: ",Object(i.b)("inlineCode",{parentName:"li"},"github.com/{git org}/{app repo}")),Object(i.b)("li",{parentName:"ul"},"CI Pipeline name: ",Object(i.b)("inlineCode",{parentName:"li"},"{git org}.{app repo}")),Object(i.b)("li",{parentName:"ul"},"Docker image’s path: ",Object(i.b)("inlineCode",{parentName:"li"},"{region}.icr.io/{git org}/{app repo}:{tag}")," in the ",Object(i.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/guides/image-registry"}),"Image Registry")),Object(i.b)("li",{parentName:"ul"},"Helm chart’s path: ",Object(i.b)("inlineCode",{parentName:"li"},"generic-local/{git org}/{app repo}-{tag}-{chart version}.tgz")," in the ",Object(i.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/guides/artifact-management"}),"Helm Repository")),Object(i.b)("li",{parentName:"ul"},"Dependencies filename: ",Object(i.b)("inlineCode",{parentName:"li"},"{app repo}/requirements.yaml")," in the GitOps repo"),Object(i.b)("li",{parentName:"ul"},"CD Pipeline name: ",Object(i.b)("inlineCode",{parentName:"li"},"{app repo}"))),Object(i.b)("h2",{id:"what-is-argo-cd"},"What is Argo CD"),Object(i.b)("p",null,Object(i.b)("a",o({parentName:"p"},{href:"https://argoproj.github.io/argo-cd/"}),"Argo CD")," is a declarative, GitOps continuous delivery tool for Kubernetes. The deployment environment is a Kubernetes cluster or namespace, which also works for an OpenShift cluster or project. Argo CD models a collection of applications as a project and uses a Git repository to store the project’s desired state. Each application is stored as a folder in the repository, and each deployment environment is stored as a branch in the repository."),Object(i.b)("p",null,"Argo CD supports defining Kubernetes manifests in a number of ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"helm charts"),Object(i.b)("li",{parentName:"ul"},"kustomize"),Object(i.b)("li",{parentName:"ul"},"ksonnet"),Object(i.b)("li",{parentName:"ul"},"jsonnet"),Object(i.b)("li",{parentName:"ul"},"plain directory of yaml/json manifests")),Object(i.b)("p",null,"Argo CD synchronizes the application state with the desired state defined in Git and automates the deployment of Kubernetes resources to ensure they match."),Object(i.b)("h2",{id:"configuring-gitops-with-argo-cd"},"Configuring GitOps with Argo CD"),Object(i.b)("p",null,"You must have completed the ",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/argocd-setup"}),"Argo CD Setup")," before continuing."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Terminology:")),Object(i.b)("p",null,"Argo CD uses a number of terms to refer to the components"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Application - A deployable unit"),Object(i.b)("p",{parentName:"li"},"  In the context of the Developer Tools environment, an application is one Helm chart that contains one container image that was produced by one CI pipeline. While Helm charts and images could certainly be combined to make more sophisticated applications in more advanced scenarios, we will be using this simple definition here.\n")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Project - A collection of applications that make up a solution"))),Object(i.b)("h3",{id:"set-up-the-gitops-repo"},"Set up the GitOps repo"),Object(i.b)("p",null,"Argo CD uses a Git repo to express the desired state of the Kubernetes environment. The basic setup uses one repository to represent one ",Object(i.b)("a",o({parentName:"p"},{href:"https://argoproj.github.io/argo-cd/user-guide/projects/"}),Object(i.b)("em",{parentName:"a"},"project")),". Within that repository, each ",Object(i.b)("a",o({parentName:"p"},{href:"https://argoproj.github.io/argo-cd/operator-manual/declarative-setup/#applications"}),Object(i.b)("em",{parentName:"a"},"application"))," that makes up the project will be described in its own folder. The repository will also contain a branch for each destination (i.e. cluster and namespace) into which we want to deploy the applications."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a new repo from the ",Object(i.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/template-argocd-test/generate"}),"Argo CD Starter Kit template"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Clone the project to your machine")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a branch for the environment (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"test")," to configure the values for deployment to the testing environment)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",o({parentName:"pre"},{className:"language-bash"}),"git checkout -b test\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The repository contains a template Helm chart in the ",Object(i.b)("inlineCode",{parentName:"p"},"app-artifactory")," folder. Copy that folder and rename it to match one of\nthe application names in your project, i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"{app repo}"),"."),Object(i.b)("p",{parentName:"li"},"   The application name should match the repository name if the CI pipeline is going push changes to the CD pipeline.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Update ",Object(i.b)("inlineCode",{parentName:"p"},"Chart.yaml")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," - The name of the application, should match the folder from the previous step"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Update ",Object(i.b)("inlineCode",{parentName:"p"},"requirements.yaml")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"name")," - The name of Helm chart and Docker image, should match your Git repo name, i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"{app repo}"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"version")," - The version number of the Helm chart, i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"{chart version}"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"repository")," - The url to the Helm repository including the folder where the Helm charts are being stored, i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"http://artifactory.{ingress subdomain}/artifactory/generic-local/")),Object(i.b)("p",{parentName:"li"},"  The url of the Helm repository in Artifactory can be determined by following the steps described in ",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/admin/argocd-setup/#get-the-helm-repository-location"}),"Administrator Guide - Argo CD setup"),".")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Update ",Object(i.b)("inlineCode",{parentName:"p"},"values.yaml")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Replace ",Object(i.b)("inlineCode",{parentName:"p"},"<app-chart-name>")," with the name of application")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Provide configuration values specific to the Helm chart under the ",Object(i.b)("inlineCode",{parentName:"p"},"<app-chart-name>")," prefix"),Object(i.b)("p",{parentName:"li"}," ",Object(i.b)("strong",{parentName:"p"},"Note:")," The Helm values will need to be prefixed with the Helm chart name that was provided in the previous step. For example, assuming the helm chart is ",Object(i.b)("inlineCode",{parentName:"p"},"message-logger"),", the values.yaml file would look like the following:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"message-logger:\n  replicaCount: 3\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," The specific values that should be configured are dependent on the Helm chart that is referenced in the ",Object(i.b)("inlineCode",{parentName:"p"},"requirements.yaml"),". For the Starter Kits, you can see those details and customize the chart by looking in the ",Object(i.b)("inlineCode",{parentName:"p"},"chart/{chart name}")," of the repository.")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Repeat steps 4-7 for each application in the project"))),Object(i.b)("h3",{id:"register-the-git-repo-in-argo-cd"},"Register the git repo in Argo CD"),Object(i.b)("p",null,"Now that the repository has been created, we need to tell Argo CD where it is."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get the Argo CD login information from the ",Object(i.b)("inlineCode",{parentName:"p"},"igc credentials")," CLI command"),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," You need to be logged into the cluster on the command-line for the CLI to access the cluster information.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to Argo CD")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on the gear icon on the left menu to access the Settings options"),Object(i.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.854545454545452%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuklEQVQY062PSwuCQBSF57caUdkD2rTuZwpWlJSpaQ/HcV7B6TpG0CJ00cBhFvfc757D1qslhJT412NDz8PlzlGUAvmD48YFKmVQawNtLFRfkb9WGmzgzxAcYoSnDEGUYJ8UyAhaVIKSK2c29glt7U+5OfkaPxsRMDwm2J1zbAgaZVcH47WEqJW72lzvkiQ1O2w88QmYYhtf6Cdg2gJLIcFJLmVPYNUAp/PFN5AS5m+gMqazblvZfiq/AEYjyEZUoxfCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Argo CD config",title:"Argo CD config",src:"/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/c801a/argocd-config.png",srcSet:["/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/1a057/argocd-config.png 288w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/8418d/argocd-config.png 576w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/c801a/argocd-config.png 1152w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/4d515/argocd-config.png 1728w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/9c7d2/argocd-config.png 2304w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/db8dc/argocd-config.png 2750w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the ",Object(i.b)("inlineCode",{parentName:"p"},"Repositories")," option")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Press either the Connect Repo using HTTPS or Connect Repo using SSH button at the top and provide the information\nfor the Git repo"))),Object(i.b)("h3",{id:"create-a-project-in-argo-cd-optional"},"Create a project in Argo CD (Optional)"),Object(i.b)("p",null,"In Argo CD terms, each deployable component is an application and applications are grouped into projects. Projects are not\nrequired for Argo CD to be able to deploy applications, but it helps to organize applications and provide some restrictions\non what can be done for applications that make up a project."),Object(i.b)("p",null,"To create a project:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log into Argo CD")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on the gear icon on the left menu to access the Settings options"),Object(i.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.854545454545452%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuklEQVQY062PSwuCQBSF57caUdkD2rTuZwpWlJSpaQ/HcV7B6TpG0CJ00cBhFvfc757D1qslhJT412NDz8PlzlGUAvmD48YFKmVQawNtLFRfkb9WGmzgzxAcYoSnDEGUYJ8UyAhaVIKSK2c29glt7U+5OfkaPxsRMDwm2J1zbAgaZVcH47WEqJW72lzvkiQ1O2w88QmYYhtf6Cdg2gJLIcFJLmVPYNUAp/PFN5AS5m+gMqazblvZfiq/AEYjyEZUoxfCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Argo CD config",title:"Argo CD config",src:"/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/c801a/argocd-config.png",srcSet:["/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/1a057/argocd-config.png 288w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/8418d/argocd-config.png 576w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/c801a/argocd-config.png 1152w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/4d515/argocd-config.png 1728w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/9c7d2/argocd-config.png 2304w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/db8dc/argocd-config.png 2750w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the Projects option")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Press the New Project button at the top of the page")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Specify the properties for the new project"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"name - Provide the name for the project"),Object(i.b)("li",{parentName:"ul"},"description - A brief description of the project"),Object(i.b)("li",{parentName:"ul"},"source - Press Add source and pick the Git repository from the list that was added previously"),Object(i.b)("li",{parentName:"ul"},"destinations",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"https://kubernetes.default.svc")," for the cluster url and ",Object(i.b)("inlineCode",{parentName:"li"},"test")," for the namespace"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"https://kubernetes.default.svc")," for the cluster url and ",Object(i.b)("inlineCode",{parentName:"li"},"staging")," for the namespace"))),Object(i.b)("li",{parentName:"ul"},"Press Create")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," Initially, the only cluster that is available is the one in which Argo CD is -\n",Object(i.b)("inlineCode",{parentName:"p"},"https://kubernetes.default.svc"),". By adding the two destinations we have allowed the project to be deployed\nto both the ",Object(i.b)("inlineCode",{parentName:"p"},"test")," and ",Object(i.b)("inlineCode",{parentName:"p"},"staging")," namespaces within the current cluster."))),Object(i.b)("h3",{id:"add-an-application-in-argo-cd-for-each-application-component-helm-chart"},"Add an application in Argo CD for each application component (Helm chart)"),Object(i.b)("p",null,"The last step in the process is to define the application(s) within Argo CD that should be managed. This consists of\nconnecting the config within the Git repo to the cluster and namespace."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log into Argo CD")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Press ",Object(i.b)("inlineCode",{parentName:"p"},"New Application")," and provide the following values:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"application name")," - The name of the application. It is recommend to use the format of ",Object(i.b)("inlineCode",{parentName:"li"},"{namespace}-{image name}")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"project")," - The project with which the application should be included"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sync-policy")," - The manner with which Argo CD will use to manage the deployed artifacts. ",Object(i.b)("inlineCode",{parentName:"li"},"Automatic")," is\nrecommended"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"repository url")," - The Git url where the configuration is stored"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"revision")," - The branch where the configuration for this instance is stored"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," - The path within the repository where the application config is located (should be the application name)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"destination cluster")," - The cluster url for the deployment"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"destination namespace")," - The namespace where the application should be deployed"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Repeat that step for each application and each environment"))),Object(i.b)("h3",{id:"hook-the-ci-pipeline-to-the-cd-pipeline"},"Hook the CI pipeline to the CD pipeline"),Object(i.b)("p",null,"The last stage in the CI pipeline updates the version number in the ",Object(i.b)("inlineCode",{parentName:"p"},"requirements.yaml")," to the version of the helm chart\nthat was just built. Through a couple naming conventions the only thing the pipeline needs in order to interact\nwith the CD process is a Kubernetes secret named ",Object(i.b)("inlineCode",{parentName:"p"},"gitops-cd-secret")," that provides the details needed\nto connect to the git repo to push updates."),Object(i.b)("p",null,"Fortunately, a CLI command provides a simple way to create a Kubernetes secret\nthat contains git credentials."),Object(i.b)("p",null,"Create the ",Object(i.b)("inlineCode",{parentName:"p"},"gitops-cd-secret"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log into the cluster on the command-line.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change the directory to the root of the Argo CD Starter Kit repo that was cloned previously.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run ",Object(i.b)("inlineCode",{parentName:"p"},"igc git-secret gitops-cd-secret -n dev-{initials}")," to create the secret. This command will prompt for the username,\npersonal access token, and the branch to put in the secret."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",o({parentName:"pre"},{}),"**What just happened?**\n\nThe `git-secret` command creates a secret in a Kubernetes namespace containing the url, username, password, and branch information\nfor a git repo. In the command above, we provided `gitops-cd-secret` for the secret name. (If that value is left off the\nsecret name defaults to `{git org}.{git repo}`.) You can verify the secret was created by running: \n\n```kubectl get secrets/gitops-cd-secret -n dev-{initials} -o yaml``` \n\n**Note:** \n\n- For the secret to be available to the CI pipeline, the secret needs to be created in the same namespace\nwhere the pipeline is running (e.g. `dev-{initials}`).\n- The value provided for `branch` is the one the pipeline will use to when committing changes to trigger \nthe CD pipeline. `test` is the recommended value for the branch field.\n")))))}b.isMDXComponent=!0},451:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},452:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},453:function(e,t,a){"use strict";a(31),a(28);var i=a(1),n=a(451),o=a(0),r=a.n(o),c=a(108),p=a.n(c),l=a(196),s=a(130),b=a(3),m=a.n(b),d=a(391),h=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(i.b)("div",{className:m()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12"},Object(i.b)("h1",{id:"page-title",className:d.text},a)))))},g=a(452),u=a(392),j=function(e){var t=e.relativePagePath,a=e.repository,n=g.data.site.siteMetadata.repository,o=a||n,r=o.baseUrl,c=o.subDirectory,p=r+"/edit/"+o.branch+c+"/src/pages"+t;return r?Object(i.b)("div",{className:"bx--row "+u.row},Object(i.b)("div",{className:"bx--col"},Object(i.b)("a",{className:u.link,href:p},"Edit this page on GitHub"))):null},O=a(195),f=(a(59),a(26)),N=a(393);var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=p()(e,{lower:!0}),r=o===n,c=new RegExp(n+"(?!-)"),l=a.replace(c,o);return Object(i.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(i.b)(f.Link,{className:N.link,to:""+l},e))}));return Object(i.b)("div",{className:N.tabsContainer},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(i.b)("nav",null,Object(i.b)("ul",{className:N.list},o))))))},n}(r.a.Component),A=a(197);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,c=t.frontmatter,b=void 0===c?{}:c,m=t.relativePagePath,d=t.titleType,g=b.tabs,u=b.title,f=b.theme,N=b.description,y=b.keywords,C=n.data.site.pathPrefix,w=C?o.pathname.replace(C,""):o.pathname,D=g?w.split("/").slice(-1)[0]||p()(g[0],{lower:!0}):"";return Object(i.b)(s.a,{homepage:!1,theme:f,pageTitle:u,pageDescription:N,pageKeywords:y,titleType:d},Object(i.b)(h,{title:r?Object(i.b)(r,null):u,label:"label",tabs:g}),g&&Object(i.b)(v,{slug:w,tabs:g,currentTab:D}),Object(i.b)(A.a,{padded:!0},a,Object(i.b)(j,{relativePagePath:m})),Object(i.b)(O.a,{pageContext:t,location:o,slug:w,tabs:g,currentTab:D}),Object(i.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-continuous-delivery-index-mdx-747b79aefe8e7e650986.js.map