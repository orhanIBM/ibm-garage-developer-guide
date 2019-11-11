(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{423:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return m}));n(11),n(5),n(6),n(4),n(10),n(1),n(0);var a=n(106),i=n(434);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},p=c("PageDescription"),l=c("AnchorLinks"),s=c("AnchorLink"),b={_frontmatter:o},d=i.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(d,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(p,{mdxType:"PageDescription"},Object(a.b)("p",null,"An example three tier application architecture you can build and have deployed in IBM Kubernetes service or IBM Red Hat OpenShift in less than an hour using the IBM Garage for Cloud Developer Tools and Starter Kit Templates.")),Object(a.b)("h2",{id:"guide"},"Guide"),Object(a.b)("p",null,"Part 2 of the guide is a follow on from Part 2 and will concentrate on building out the following areas :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Adding ",Object(a.b)("strong",{parentName:"li"},"Cloudant")," database and populating it with data"),Object(a.b)("li",{parentName:"ul"},"Enabling application security with ",Object(a.b)("strong",{parentName:"li"},"App ID")),Object(a.b)("li",{parentName:"ul"})),Object(a.b)("p",null,"This Microapp guidance Continue from ",Object(a.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/practical/inventory-part1"}),"Inventory Micro App Part 1")),Object(a.b)("h3",{id:"add-a-cloudant-backend-to-the-service"},"Add a Cloudant backend to the service"),Object(a.b)("h4",{id:"populating-the-databse"},"Populating the Databse"),Object(a.b)("p",null,"The initial setup"),Object(a.b)("h4",{id:"update-the-gradle-config-to-include-cloudant-dependencies"},"Update the gradle config to include cloudant dependencies"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add ",Object(a.b)("inlineCode",{parentName:"p"},"build-services.gradle")," to the gradle folder"),Object(a.b)("p",{parentName:"li"},"gradle/build-services.gradle"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"dependencies {\n    compile group: 'com.cloudant', name: 'cloudant-client', version: '2.17.0'\n    compile group: 'com.jayway.jsonpath', name: 'json-path', version: '2.4.0'\n    compile group: 'javax.xml.bind', name: 'jaxb-api', version: '2.1'\n    compile group: 'joda-time', name: 'joda-time', version: '2.10.3'\n}\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Apply build-services.gradle to build.gradle"),Object(a.b)("p",{parentName:"li"},"build.gradle"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"...\napply from:   'gradle/build-services.gradle'\n...\n")))),Object(a.b)("h4",{id:"add-configuration-values"},"Add configuration values"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add CloudantConfig to hold the url, username, password, and databaseName values"),Object(a.b)("p",{parentName:"li"},"com.ibm.inventory_management.config.CloudantConfig"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-java"}),'package com.ibm.inventory_management.config;\n\nimport com.fasterxml.jackson.annotation.JsonIgnoreProperties;\n\n@JsonIgnoreProperties(ignoreUnknown = true)\npublic class CloudantConfig {\n    private String url;\n    private String username;\n    private String password;\n    private String databaseName;\n\n    public String getUrl() {\n        return url;\n    }\n\n    public void setUrl(String url) {\n        this.url = url;\n    }\n\n    public CloudantConfig withUrl(String url) {\n        this.setUrl(url);\n\n        return this;\n    }\n\n    public String getUsername() {\n        return username;\n    }\n\n    public void setUsername(String username) {\n        this.username = username;\n    }\n\n    public CloudantConfig withUsername(String username) {\n        this.setUsername(username);\n\n        return this;\n    }\n\n    public String getPassword() {\n        return password;\n    }\n\n    public void setPassword(String password) {\n        this.password = password;\n    }\n\n    public CloudantConfig withPassword(String password) {\n        this.setPassword(password);\n\n        return this;\n    }\n\n    public String getDatabaseName() {\n        return databaseName;\n    }\n\n    public void setDatabaseName(String databaseName) {\n        this.databaseName = databaseName;\n    }\n\n    public CloudantConfig withDatabaseName(String databaseName) {\n        this.setDatabaseName(databaseName);\n\n        return this;\n    }\n\n    public String toString() {\n        return "[CloudantConfig: url=" + this.url + ", username=" + this.username + ", name=" + this.databaseName + "]";\n    }\n}\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Implement logic to load the configuration from the secret binding or local file"),Object(a.b)("p",{parentName:"li"},"com.ibm.inventory_management.config.CloudantMapping"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-java"}),'package com.ibm.inventory_management.config;\n\nimport java.io.Serializable;\n\nimport com.fasterxml.jackson.annotation.JsonProperty;\n\npublic class CloudantMapping implements Serializable {\n    @JsonProperty(value = "CLOUDANT_CONFIG")\n    private String cloudantConfig;\n\n    public String getCloudantConfig() {\n        return cloudantConfig;\n    }\n\n    public void setCloudantConfig(String cloudantConfig) {\n        this.cloudantConfig = cloudantConfig;\n    }\n}\n')),Object(a.b)("p",{parentName:"li"},"com.ibm.inventory_management.config.CloudantConfigFactory"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-java"}),'package com.ibm.inventory_management.config;\n\nimport java.io.IOException;\n\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class CloudantConfigFactory {\n    @Bean\n    public CloudantConfig buildCloudantConfig() throws IOException {\n        return buildConfigFromBinding(\n                loadCloudantConfig(),\n                loadDatabaseName()\n        );\n    }\n\n    protected String loadCloudantConfig() throws IOException {\n        return System.getProperty("CLOUDANT_CONFIG") != null\n                ? System.getProperty("CLOUDANT_CONFIG")\n                : loadCloudantConfigFromLocalDev();\n    }\n\n    protected String loadCloudantConfigFromLocalDev() throws IOException {\n        final ObjectMapper mapper = new ObjectMapper();\n\n        final CloudantMapping mappings = mapper.readValue(\n                this.getClass().getClassLoader().getResourceAsStream("mappings.json"),\n                CloudantMapping.class\n        );\n\n        return mappings.getCloudantConfig();\n    }\n\n    protected String loadDatabaseName() {\n        return System.getProperty("DATABASE_NAME") != null\n                ? System.getProperty("DATABASE_NAME")\n                : "stock-items";\n    }\n\n    protected CloudantConfig buildConfigFromBinding(String binding, String databaseName) throws IOException {\n        final ObjectMapper mapper = new ObjectMapper();\n\n        return mapper.readValue(binding, CloudantConfig.class)\n                .withDatabaseName(databaseName);\n    }\n}\n')))),Object(a.b)("h4",{id:"set-up-local-development"},"Set up local development"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Log into cloud.ibm.com and open the Cloudant service from the resource list")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click on service credentials and expand the listed credentials")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Copy the json contents from the credentials into ",Object(a.b)("inlineCode",{parentName:"p"},"mappings.json")," under CLOUDANT_CONFIG"),Object(a.b)("p",{parentName:"li"},"src/main/resources/mappings.json"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),'{\n  "CLOUDANT_CONFIG": "{paste json here}"\n}\n')))),Object(a.b)("h4",{id:"implement-the-service"},"Implement the service"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add a CloudantApi component to create the CloudantClient instance from the configuration"),Object(a.b)("p",{parentName:"li"},"com.ibm.inventory_management.service.CloudServicesException"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-java"}),"package com.ibm.inventory_management.service;\n\npublic class CloudServicesException extends Exception {\n    public CloudServicesException() {\n    }\n\n    public CloudServicesException(String message) {\n        super(message);\n    }\n\n    public CloudServicesException(String message, Throwable cause) {\n        super(message, cause);\n    }\n\n    public CloudServicesException(Throwable cause) {\n        super(cause);\n    }\n\n    public CloudServicesException(\n            String message,\n            Throwable cause,\n            boolean enableSuppression,\n            boolean writableStackTrace\n    ) {\n        super(message, cause, enableSuppression, writableStackTrace);\n    }\n}\n")),Object(a.b)("p",{parentName:"li"},"com.ibm.inventory_management.service.CloudantApi"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-java"}),'package com.ibm.inventory_management.service;\n\nimport java.net.MalformedURLException;\nimport java.net.URL;\n\nimport com.cloudant.client.api.ClientBuilder;\nimport com.cloudant.client.api.CloudantClient;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.stereotype.Component;\n\nimport com.ibm.inventory_management.config.CloudantConfig;\n\n@Component\npublic class CloudantApi {\n    @Bean\n    public CloudantClient buildCloudant(CloudantConfig config) throws CloudServicesException {\n        System.out.println("Config: " + config);\n        URL url = null;\n        try {\n            url = new URL(config.getUrl());\n        } catch (MalformedURLException e) {\n            throw new CloudServicesException("Invalid service URL specified", e);\n        }\n\n        return ClientBuilder\n                .url(url)\n                .username(config.getUsername())\n                .password(config.getPassword())\n                .build();\n    }\n}\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add the service implementation"),Object(a.b)("p",{parentName:"li"},"com.ibm.inventory_management.service.StockItemService"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-java"}),'package com.ibm.inventory_management.service;\n\nimport java.io.IOException;\nimport java.util.List;\nimport javax.annotation.PostConstruct;\n\nimport com.cloudant.client.api.CloudantClient;\nimport com.cloudant.client.api.Database;\nimport org.springframework.context.annotation.Primary;\nimport org.springframework.stereotype.Service;\n\nimport com.ibm.inventory_management.config.CloudantConfig;\nimport com.ibm.inventory_management.model.StockItem;\n\n@Service\n@Primary\npublic class StockItemService implements StockItemApi {\n    private CloudantConfig config;\n    private CloudantClient client;\n    private Database db = null;\n\n    public StockItemService(CloudantConfig config, CloudantClient client) {\n        this.config = config;\n        this.client = client;\n    }\n\n    @PostConstruct\n    public void init() {\n        db = client.database(config.getDatabaseName(), true);\n    }\n\n    @Override\n    public List<StockItem> listStockItems() throws Exception {\n\n        try {\n            return db.getAllDocsRequestBuilder()\n                    .includeDocs(true)\n                    .build()\n                    .getResponse()\n                    .getDocsAs(StockItem.class);\n\n        } catch (IOException e) {\n            throw new Exception("", e);\n        }\n    }\n}\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Remove the ",Object(a.b)("inlineCode",{parentName:"p"},"@Primary")," annotation from the mock service"))),Object(a.b)("h4",{id:"add-the-values-to-the-helm-chart"},"Add the values to the helm chart"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Update the ",Object(a.b)("inlineCode",{parentName:"p"},"cloudantBinding")," and ",Object(a.b)("inlineCode",{parentName:"p"},"databaseName")," values in values.yaml"),Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Note:")," The cloudantBinding value should match the name of the cloudant binding secret"))),Object(a.b)("h3",{id:"enable-appid-on-the-application"},"Enable AppId on the application"),Object(a.b)("h4",{id:"user-interface"},"User Interface"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Update the ",Object(a.b)("inlineCode",{parentName:"li"},"values.yaml")," file in the chart to set ",Object(a.b)("inlineCode",{parentName:"li"},"ingress.appId.enabled=true")," and to set the value for the AppId binding secret")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),'...\nappidBinding: "binding-sms-test-oc-appid"\n\ningress:\n  enabled: true\n  appid:\n    enabled: true\n    # web or app - https://cloud.ibm.com/docs/services/appid?topic=appid-kube-auth\n    requestType: web\n    ...\n')),Object(a.b)("h4",{id:"appid-redirect-url-config"},"AppId redirect url config"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"When the UI application is available, navigate to the https url. An error page should be displayed that looks like the\nfollowing:\n",Object(a.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(a.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.914780292942744%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABeklEQVQ4y41S266CMBD0/7/NBxN9M6KAotyRSxEozNmpVjnxeGKTyW53YbI708UEOU0DnedQXQ+lWoP2dkPfD5im6WvwLEyIQujjEUlZIctyxGmGLC+g2hbfHku64KXTGllZIoljIcyQJAnqusL1ekWapjifz4ilx5y9KIpMTrDOmj2GsKlrOLsdXM9DEATwfB++TByGIY4SPamT1Jf66XQy9cvlYr5lnZGkfd8/CEXDw+HwbHoPYv7IGnu8u65rYtd1uInGc7QizziOd0JeOMl+v39OYkFyfvjtMYTDMBjt5jpZreKHrsxZY5859Z2b8csUEs6JSGB/LMUsrqSUMpHr2twSvk1YFAVWqxU2m43BdrvFer3Gcrk0UlA7rs6ccBzHyPSRkO6QNJfHzUjU4rzN6SxdJazL83XfCLW8QzpNVFVlyDgB71yPa1MzkjNn/19C6mF1owkWvHMqxqyQR94MKNTwIvvkMpuccg4adY+vXOsRg8BO9deEP2Sf6VNBzZtrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId redirect error",title:"AppId redirect error",src:"/ibm-garage-developer-guide/static/df93eb5b82f316d7292a507cfd105cb9/fb070/appid-redirect-error.png",srcSet:["/ibm-garage-developer-guide/static/df93eb5b82f316d7292a507cfd105cb9/d6747/appid-redirect-error.png 288w","/ibm-garage-developer-guide/static/df93eb5b82f316d7292a507cfd105cb9/09548/appid-redirect-error.png 576w","/ibm-garage-developer-guide/static/df93eb5b82f316d7292a507cfd105cb9/fb070/appid-redirect-error.png 1152w","/ibm-garage-developer-guide/static/df93eb5b82f316d7292a507cfd105cb9/96fa6/appid-redirect-error.png 1502w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The url for the error page will look like the following:"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"https://us-south.appid.cloud.ibm.com/oauth/v4/25d16cda-8899-46fa-a5ae-9818f93dd1d3/authorization?client_id=0351c750-a3f0-4b8c-818b-d14558f9dfb9&response_type=code&redirect_uri=https://inventory-manangement-ui-dev.sms-test-oc-cluster.us-east.containers.appdomain.cloud/appid_callback&scope=appid_default")),Object(a.b)("p",{parentName:"li"},"Get the value of the ",Object(a.b)("inlineCode",{parentName:"p"},"redirect_url")," parameter.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open the IBM Cloud resource list - ",Object(a.b)("inlineCode",{parentName:"p"},"https://cloud.ibm.com/resources"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open the AppId instance to the ",Object(a.b)("inlineCode",{parentName:"p"},"Manage Authentication")," -> ",Object(a.b)("inlineCode",{parentName:"p"},"Authentication Settings")),Object(a.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(a.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.48697916666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAx0lEQVQY042RWYpEIQxF3f/qagEN/VdFvcE5xud02wjdXwX9hENEw4mJyriIyAW9d5yBoa0HEcGHiForWusYY9xGHcYhUEIfQEwZISYkzqDEK0oxkbaZ0Nr/KG0tmBmlduynx2s3eB9uYqEdIeU6C5XbqFMb5Otawm0KDxOw6YTvp1tRhMT3CCIMMaKUMoVjzi/g+d5hXICPvJC2E18fyOB8/d3Lfsx/UDJIWfJC6wnboXHOuYpUWpa5/go+yWme5VxW7uNrxw8Mn9KA5JHBqgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId authentication settings",title:"AppId authentication settings",src:"/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/fb070/appid-authentication-settings.png",srcSet:["/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/d6747/appid-authentication-settings.png 288w","/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/09548/appid-authentication-settings.png 576w","/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/fb070/appid-authentication-settings.png 1152w","/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/fb104/appid-authentication-settings.png 1728w","/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/902fb/appid-authentication-settings.png 2304w","/ibm-garage-developer-guide/static/ae4bd4e1a182887c1a8672620c4ff566/5ef74/appid-authentication-settings.png 3072w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add the ",Object(a.b)("inlineCode",{parentName:"p"},"redirect_url")," to the web redirect URLs"))),Object(a.b)("h4",{id:"add-users-to-appid"},"Add users to AppId"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open the AppId instance to ",Object(a.b)("inlineCode",{parentName:"p"},"Cloud Directory")," -> ",Object(a.b)("inlineCode",{parentName:"p"},"Users")),Object(a.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(a.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.853264382676144%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABLUlEQVQoz41RWU7DUAzM/W/CJeAGnACEEIUWlTRv35Nh7AjUDyrxMfFzxh5v02IsQkzYtg2zz1isR0wJPkSMMTDWDSTBz78wOe+RS8HKpJAKXEiIubBIVj/kjj5Wim9/QrhrTCFGCFpf8XXxOJ4XnM4GZ75DauQqHOFvQGNSRyqdjXVMi3Eq2Fnt/XPG8+sHXt6OOJxmWK7AuLRD37tvdTVR8SN6sQVnkzFZn6hckWsnUSF+pK1tReK42h0TfNwhybtftcBCuJBx/3jA3cOTdGiZmHVkIRyPMS9W9yc7MS6g1AbnoyKXxtUYCmZ05hQ2YnjI2oY2Nc2L0aOIoI9FA0XE8zgS1PpQTt7qq+W+WES4lKseUP4JP1lH9VrVkXEix4x5qN0Xfgv9117HfgPDfmzKObgiOQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId cloud directory users",title:"AppId cloud directory users",src:"/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/fb070/appid-cloud-directory-users.png",srcSet:["/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/d6747/appid-cloud-directory-users.png 288w","/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/09548/appid-cloud-directory-users.png 576w","/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/fb070/appid-cloud-directory-users.png 1152w","/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/fb104/appid-cloud-directory-users.png 1728w","/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/902fb/appid-cloud-directory-users.png 2304w","/ibm-garage-developer-guide/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/68585/appid-cloud-directory-users.png 3094w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add users"))),Object(a.b)("h2",{id:"summary"},"Summary"),Object(a.b)("p",null,"You have now completed the Micro App Guide demonstrating the ",Object(a.b)("em",{parentName:"p"},"Inventory")," solution."),Object(a.b)("h2",{id:"solution-links"},"Solution Links"),Object(a.b)("p",null,"If you want to skip the guide and just get the components running, here are the solution Git Repositories. You can clone these and ",Object(a.b)("inlineCode",{parentName:"p"},"igc pipeline")," them to register them in the CI pipeline. The ",Object(a.b)("strong",{parentName:"p"},"README.md")," may include additional setup for populating test data etc."),Object(a.b)(l,{mdxType:"AnchorLinks"},Object(a.b)(s,{to:"https://github.com/ibm-garage-cloud/inventory-management-ui",mdxType:"AnchorLink"},"Inventory Management User Interface"),Object(a.b)(s,{to:"https://github.com/ibm-garage-cloud/inventory-management-bff",mdxType:"AnchorLink"},"Inventory Management Backend for Frontend"),Object(a.b)(s,{to:"https://github.com/ibm-garage-cloud/inventory-management-service",mdxType:"AnchorLink"},"Inventory Management Microservice")))}m.isMDXComponent=!0},432:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},433:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},434:function(e,t,n){"use strict";n(32),n(28);var a=n(1),i=n(432),r=n(0),o=n.n(r),c=n(105),p=n.n(c),l=n(195),s=n(127),b=n(3),d=n.n(b),m=n(384),u=function(e){var t,n=e.title,i=e.tabs,r=void 0===i?[]:i;return Object(a.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12"},Object(a.b)("h1",{id:"page-title",className:m.text},n)))))},g=n(433),h=n(385),O=function(e){var t=e.relativePagePath,n=e.repository,i=g.data.site.siteMetadata.repository,r=n||i,o=r.baseUrl,c=r.subDirectory,p=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?Object(a.b)("div",{className:"bx--row "+h.row},Object(a.b)("div",{className:"bx--col"},Object(a.b)("a",{className:h.link,href:p},"Edit this page on GitHub"))):null},j=n(193),f=(n(59),n(26)),v=n(386);var N=function(e){var t,n;function i(){return e.apply(this,arguments)||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=p()(e,{lower:!0}),o=r===i,c=new RegExp(i+"(?!-)"),l=n.replace(c,r);return Object(a.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(a.b)(f.Link,{className:v.link,to:""+l},e))}));return Object(a.b)("div",{className:v.tabsContainer},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(a.b)("nav",null,Object(a.b)("ul",{className:v.list},r))))))},i}(o.a.Component),A=n(194);t.a=function(e){var t=e.pageContext,n=e.children,r=e.location,o=e.Title,c=t.frontmatter,b=void 0===c?{}:c,d=t.relativePagePath,m=t.titleType,g=b.tabs,h=b.title,f=b.theme,v=b.description,C=b.keywords,y=i.data.site.pathPrefix,w=y?r.pathname.replace(y,""):r.pathname,S=g?w.split("/").slice(-1)[0]||p()(g[0],{lower:!0}):"";return Object(a.b)(s.a,{homepage:!1,theme:f,pageTitle:h,pageDescription:v,pageKeywords:C,titleType:m},Object(a.b)(u,{title:o?Object(a.b)(o,null):h,label:"label",tabs:g}),g&&Object(a.b)(N,{slug:w,tabs:g,currentTab:S}),Object(a.b)(A.a,{padded:!0},n,Object(a.b)(O,{relativePagePath:d})),Object(a.b)(j.a,{pageContext:t,location:r,slug:w,tabs:g,currentTab:S}),Object(a.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-practical-inventory-part-2-index-mdx-830e17cd295d5fafff84.js.map