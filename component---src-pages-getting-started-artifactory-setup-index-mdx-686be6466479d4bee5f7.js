(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{407:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return A}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var i=a(106),o=a(445);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var n={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=c("AnchorLinks"),s=c("AnchorLink"),b=c("ArtDirection"),p=c("Row"),g=c("Column"),d={_frontmatter:n},m=o.a;function A(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(i.b)(m,r({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Artifactory is a general purpose artifact storage service. The IBM Cloud supports storing docker images but has no support for\nstoring other types of binary artifacts from Maven, Gradle jar files, NPM modules and for Helm Charts. ArgoCD uses Artifactory\nas a Helm Repository and the Starter Kit Templates have been configured to store their Helm charts in Artificatory once this\nsetup is complete."),Object(i.b)("p",null,"Read the following guides to understand how to use it to create combined CI/CD solution read the following guides:"),Object(i.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(i.b)(s,{to:"/guides/continuous-integration",mdxType:"AnchorLink"},"Continuous Integration"),Object(i.b)(s,{to:"/guides/continuous-deployment",mdxType:"AnchorLink"},"Continuous Deployment")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"To enable Artifactory to work seamlessly with the Developer Tools installation you need to configure Artifactory to\nbe used as a Helm Chart Repository."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open Artifactory from the Developer Dashboard and login.")),Object(i.b)("p",null,"When you first login into Artifactory you will see it is not configure you will see this dialog."),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"998px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.51503006012024%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABI0lEQVQoz6VT2U7EMAzM/38d4o3y2Bva3On2nmUitYIt3V2EpZEjx5567FT0fY9hGDCO4+632DRNWNcV92y7X5YF8zxDpGmKqqpQ13X0RVEgy7KIpmn2omchrLWQUkJrHWGMiWDce48QwtNkNMECgsXOOVwul+gpmzKI79Juz7fyBQ8kOzPO9DeCU8kcfJ7ncQEEO+LFNE+RjHNlt9uCGOM49k7Xnx0LEjChbVpII+G8Q/AByimE7strFe+3WTK/67pT+SJ+0VkkSQLtNMqqjJs21qCVLaqyQpqlUFLhpX7Fh/6ENx5v8h21rw+kgu+NHWijMQ5j7IRkjHFBBCUzrqyKC+PMfe/Rj/1hngL/tIPkvzzae9iWKR491O2XepTHXTDvCp2srUwSFWwIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/fe462/initialjfrog.png",srcSet:["/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/d6747/initialjfrog.png 288w","/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/09548/initialjfrog.png 576w","/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/fe462/initialjfrog.png 998w"],sizes:"(max-width: 998px) 100vw, 998px",loading:"lazy"})),"\n    ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Next"))),Object(i.b)("p",null,"You will see the next view of the wizard will be asking to setup a proxy for external resource, you can skip this\nstep."),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"996px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.730923694779115%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAAxElEQVQoz5VT0Q6DIAzs/3+jDwajybLHqaAotxxLF50IrMkFQq9H27SCAOz7jnVdI7z3XyzLEn20EMItaORt2wZ5vJ4YxxFt26JpGgzDgL7vYYxB13WY5/kimDL1ifMuKjPQWhvhnMM0TafsUsGpTMXZj+DdrxQltA3k5soX9o2kHLTH7ClFcyZKyJWhwqWSY4YalCNp2TnOqWRmWRtQFKxp9F+CteNw936ZQ1RYaZiPfjmu3O9dTw76cS31rotAcKT4/gaUV7Uo2beEEwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/4b957/setupproxy.png",srcSet:["/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/d6747/setupproxy.png 288w","/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/09548/setupproxy.png 576w","/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/4b957/setupproxy.png 996w"],sizes:"(max-width: 996px) 100vw, 996px",loading:"lazy"})),"\n    ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Skip"))),Object(i.b)("p",null,"The next view allows you to select the type of repository. The enable Artifactory to be used as a Helm Repository\nselect ",Object(i.b)("strong",{parentName:"p"},"Generic"),"."),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"997px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.37211634904714%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABeElEQVQoz21S227DMAjN/3/aXqe9bVLbSZW65h7Hd4edQ5Iq64qEMDaGw4HKey+t6WQYBzmfz3I6nR56u90kpSQhBNUYIzRJzlkoywKVTeFQKwYxwDknbddK267a973qva6laRrVGmdrrSbWNFuS/UypiGCvdpRnf5e8oSoIyGVRm3J52Irovn++0FoQY3tcBpmN0c9v7x/yeblID8TX61U8uqjbXmkYxkliymLmWQIs/YQCVYYz+1EvZzeK8VYCeHUhSjeM0o1GDAo0SBSRyIHLUooEtE1EIazWwxKxcug9NGaxs0PSgAcEoEDCW8AQiILJnfNyb1qlw+KcyL3HsNKaMLLllCIenSJKioBTLIqYvofPj4oA94wrQMJCyl3JOhSi1qGQwwktMZCTtrDTNIFPp5zNQJK3hAlFLBCxgAUtbFG2ldmtTlmzL8s/u6/EvmNHLdsuPku17pT8CX72WYC8vorhf4La9/mwh6+RHN9eFWYxLYhktL9vV151Yz4bawAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/7456b/createrepository.png",srcSet:["/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/d6747/createrepository.png 288w","/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/09548/createrepository.png 576w","/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/7456b/createrepository.png 997w"],sizes:"(max-width: 997px) 100vw, 997px",loading:"lazy"})),"\n    ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Then select ",Object(i.b)("strong",{parentName:"li"},"Create"))),Object(i.b)("p",null,"You  will see the ",Object(i.b)("strong",{parentName:"p"},"Artifactory on-boarding complete!")," message"),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"997px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.47241725175526%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAArElEQVQoz6VS2QrEIBDz/7/SYgXpg9TjxXOWCErZ7halA9FRYzIeLMZIyhxkjKFt20gIQUopklKOMXLOOTnn6DtqraMHWCmFcsmNjI37vg9gDEHkWmuy1jZj733LfxmwnqBSEEEC+gYA813kPE9yF8Fe2agwhNDcU0pNdDVugmhyzreFWfw98pPrCtjV6Y3QEFy5pxkOW7mnGc6UYPurDw+HwC8B5/WR+zxMgQ8BC2KOmeZoeQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/7456b/completejfrog.png",srcSet:["/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/d6747/completejfrog.png 288w","/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/09548/completejfrog.png 576w","/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/7456b/completejfrog.png 997w"],sizes:"(max-width: 997px) 100vw, 997px",loading:"lazy"})),"\n    ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click *",Object(i.b)("em",{parentName:"li"},"Complete")," to finish creating the repository")),Object(i.b)("h2",{id:"obtaining-encryption-key"},"Obtaining Encryption Key"),Object(i.b)("p",null,"To enable the Pipelines to store the Helm artifacts in Artifactory Repository we need to obtain the Encryption key\nfrom the settings and configure this into the ",Object(i.b)("inlineCode",{parentName:"p"},"artifactory-access")," Kubernetes secret in the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," namespace in the Development Cluster."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the logged in Artifactory console click ",Object(i.b)("strong",{parentName:"li"},"Welcome,Admin")," menu in the top right corner of the console.")),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"784px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.81632653061224%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0klEQVQ4y5WSTWvUQBjH59u4r+xNRT2JN8GLiBQsLHgXofgVxFubraelUPalJ196k3qwIBW/gEJFsC10C3a3u9lmkkkymeTvzLNJSNeu1IEfzzzz8s//eSbs4ZvHePRuCUtvn2D5fRPL203c33qAmxt3cKN9G9fbt/4LdvfZPax0XqD9dQPW7jrWPrWwumvh5c4rrH620PryGtbeOqwsatb2WoSZ034BVrtWw2Z7E8IRGBwNcHx4jNPBKU4OT6CEAmIAkUalmDwbydyehtXqNfT6Pdr3fIFQhohURLmJMpKQSlL0gxA84Ngf/cC3398xdIezc3EEFSuCVSoVdDod2gjDEHEcI0kSIjeSzu2pwK/RAZ5/XEFz+yk+/NyhdZWo/CyrVqvo9bqUONyDyzm4xnEcilxHN81NNAjXI1QUIZqD1et1bOmSpRacnHOcT6ewbRv2ZILJeExMdT4+O5utpetjTRAEkLqqIqzRaKDf789K0hddT7t0XTp8lZG1J+OC4HA0otI8LSqE+KscQ9bjYq8vCJbL5fxRjJBxZvB9n0TnUUr90zErlUq5oLlgXlpKeenXrwIJdrvdvIc8feXL3BUdFn+rhQ6NO3NhEaaHmdAiwT+vC5f86lNYPAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/b3092/jfrogapikey.png",srcSet:["/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/d6747/jfrogapikey.png 288w","/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/09548/jfrogapikey.png 576w","/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/b3092/jfrogapikey.png 784w"],sizes:"(max-width: 784px) 100vw, 784px",loading:"lazy"})),"\n    ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"enter you Artifactory password and click ",Object(i.b)("strong",{parentName:"li"},"Unlock"))),Object(i.b)("p",null,"You will see below an area call ",Object(i.b)("strong",{parentName:"p"},"Authentication Settings")," and inside it a field called ",Object(i.b)("strong",{parentName:"p"},"Encrypted Password")),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"550px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.454545454545446%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuElEQVQoz5WRiQqEMAxE+/+fKYi3iPc9yyukqMiyG3iQtE0607p93zWOo6Zp0jzPIs7z1HEct/wNC84YjoFFUSjLMuV5rjRNfQ1JkqiqKg3DoL7vA13Xib44jhVFURhKOBKUofAKqhlEvq6rlmXxWI7Ctm3VNM1NpWNj27Ybdtu/ESzXde0tYq8sS1+bujdQj0p6EcBasIxCe5crrNH4Bpdh3WoEMDy84TcL/+x5y89vv/LLmz3PfwCY9XOdnlac2wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/a9126a60fc81ab00711dd5e2212845b5/eb858/viewapikey.png",srcSet:["/ibm-garage-developer-guide/static/a9126a60fc81ab00711dd5e2212845b5/d6747/viewapikey.png 288w","/ibm-garage-developer-guide/static/a9126a60fc81ab00711dd5e2212845b5/eb858/viewapikey.png 550w"],sizes:"(max-width: 550px) 100vw, 550px",loading:"lazy"})),"\n    ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Eye Icon")," to view the password and click on the ",Object(i.b)("strong",{parentName:"li"},"Cut & Paste Icon")," to copy it")),Object(i.b)("p",null,"You will now need to open a ",Object(i.b)("inlineCode",{parentName:"p"},"encode64")," utility use this online tool ",Object(i.b)("a",r({parentName:"p"},{href:"https://www.base64encode.org/"}),"Encode64")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Paste the password into the online tool and click ",Object(i.b)("strong",{parentName:"p"},"Encode")," button")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the view below copy the encoded value into you clip board or store it somewhere safe"))),Object(i.b)("h2",{id:"updating-kubernetes-secrets"},"Updating Kubernetes Secrets"),Object(i.b)("p",null,"Log into you Development Cluster Kubernetes Console or OpenShift Console."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," namespace and ",Object(i.b)("inlineCode",{parentName:"p"},"secrets")," view in Kubernetes Console or Openshift Console.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find the ",Object(i.b)("inlineCode",{parentName:"p"},"secret")," labelled ",Object(i.b)("inlineCode",{parentName:"p"},"artifactory-access")," and open it in the Edit view."))),Object(i.b)(p,{mdxType:"Row"},Object(i.b)(g,{colMd:4,colLg:5,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)("h2",{id:"openshift"},"OpenShift"),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"593px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"130.86003372681284%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsSAAALEgHS3X78AAADRElEQVRIx6VVWZKbSBTU8XzDOcL8zAl8gYnwx4zD0rglgST2HQESi1hz8pWabmx3d9htIjJeAUVWvpWVGST46iTYuwlOQQrPdbHdbmFZFvI8x/l8RpZlCkmSKKRp+ipWLgkOhwNM04JJEtu2cTqdYBiGWjuOw3emWr9F9EQoH+i6DoMkx+NREckB8kwga03TlI3jWGFW+hJW86aACM8pEnGRqKoK5bUkrmpdlSUulwuuvJdQvIZVEAQqbjviJKfzo4wo2xY10XQdytsNNe2NVkjfulZBGEJIi/IKI01gUPYxifHge7QJTKrW+F5nfLW9hvVmoxLW8QC5pmn6BorQ9zzElPvZsfGFMV27Dv4xDaw1HV/WaxgksJgYcVdUlnR/GIYF4TOxSopk1UkKbFk2/zkhNm6EfZjhaAb4vNnB5P2Jzw+mD4Prg+Vjf7SxIww3RkmxRTPi0kz3GNpUsKfKreuxdByqmN0BxhHo+oEuDuhph2GkHdX61nZou17tGcZJ4U7IGivojpWdEVxzFHWJduDmsUM/degmWbfK3oZWoe27RSqm56T4vq+CfLs1zHCFr/oFGz3HwymD5dbQjw12eo2tVkE71NBOtMcaNt8l0Yg4BM7phEtOFFToU6HEsWCgHbZXWlTIK5ZH3aCpgDxhfM5AWdxB8ZjGO8TVvqerzM/4CEUoCpumUSXjhLz3XKpzULUkHW50ny62LPSq4L5q4eb0gsuPMexYxBGLVo8iaCS12ZcWYcYJgjBiS5oKZVl9V3/L0lExvBNe2V4mCWzPh77f3/v5oLENE0UgdScfvlTMy+cqKVI250d1Bgv9yANCqiqygb084WeumVQRukxKWTNzHAoOceK9zd7ebwNsH2y2pg/ZN0PGlEwWmZVipYN+UBgwwzZVrdlqFmejZN7zHSbsPhcF84xsGW9pwRnLvlYxlCF7YQz7vld9+p7ryWXplIixk1OXL0cW2dJ+v34NT4S3R8L5pPcovLtMwpCEUtizil/FNwM2iUKkUYCYVjImakOWjrJvIFrY5Z9x9cffBj78ucPHjQmPGXW957J4D1afdA9//WvhwXBZjzYkBDPhz/w2f/iNXrMUDcdJzlko0n+HTPA/qv27kQhTQ3YAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/02456/addkeytosecret.png",srcSet:["/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/d6747/addkeytosecret.png 288w","/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/09548/addkeytosecret.png 576w","/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/02456/addkeytosecret.png 593w"],sizes:"(max-width: 593px) 100vw, 593px",loading:"lazy"})),"\n    "))),Object(i.b)(g,{colMd:4,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"692px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.71098265895954%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACy0lEQVQ4y6VVaXfaQAzk//+yJm36mqY5iAHbgG/jY9f3NZVkCKGhzYfC01ux3h0dMzIL3/ex3W7hOA7Yn6bpg332OR0ZxwmLoihQlqVYXdVXL4zT+GanIO/9c2ACrOsaWmu5WHUVQhUiKzMUTYG0TJFXOYZxEPs8UwJUSsF1XYzDiEhHePGW2EQmkiKBEa5gxhZ2yZ5sh+1hCzfz4KQO9umezJFznATf7YYOC85ut9sJYKACLAnQCFa4s7/j0XnEJjRxa37FzeYWq2ANjwC3R3A/9zEMA/qhF7CmbbDI8xy2bWOihiZU4iY24aYuwjxCrGM0XYOsyihYSC3IoGolphtNJIwXJYdhOAOapimAVVvhfncvYPvEkdLczIWqNNq+lUy4lxyk7mo0tHdSAa8XgByNDz+5z1Lyg/MLS/8VNpX27L3AiiwEeSD9NAJDVlWp64CsQ+5F27WSEbPLLHu5h7g4SN/4N1+a+9WzQv6g+F3J6/VaSIlVjHW4oXL3wlyiEilNGk5lctlNf175WU37Xd9JIM/3sMiyDJZlYehntphpzooJCfIQB/LzOpeV91keSZmIcQt4X9da+r/39jOguTGhtEKqU/zPJwqjIyCR0vc9Cdkg7T1h5a/hUC9Z5CJoMhYyk2PHNiIV4ZWI4eenSXojhQFZh9zUeVJeiN0lVjQlP0hCfNEhXXJ5EbWBy2OGWVIWgfNaNtVZhwxoGIZsWAdbpuKbdSey+bK5wc/9A9zEJbLWAsSMswquzfEbIMuGXxKcPpPBmXDTDzSnzCiTwRly46+9aT4Asmx0oUUqzHSsD8L2v9590xFEvtPsB0GARVVVSFKSgB9IhJMFYSAmPh1kYz+KyI5n2J/PB1B5hq6jtw2z+74Pc8RzGRdZkRPlA5Ewl5xqGlcaiDDOYdgHFGWFBaNeXp7++jfAa93y+M17XT+vddNCFY1k+Bv0zv6bfnQNJgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/a4ea4/kubeaddkeytosecret.png",srcSet:["/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/d6747/kubeaddkeytosecret.png 288w","/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/09548/kubeaddkeytosecret.png 576w","/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/a4ea4/kubeaddkeytosecret.png 692w"],sizes:"(max-width: 692px) 100vw, 692px",loading:"lazy"})),"\n    ")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find the ",Object(i.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRPT")," value and paste in the Artifactory encryption key into the field")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Save")," in OpenShift Console and ",Object(i.b)("strong",{parentName:"p"},"Update")," in Kubernetes Console")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Then view the secret in the console and check the visible value matches the value in the Artifactory console."))),Object(i.b)("h2",{id:"re-run-the-pipeline"},"Re-Run the Pipeline"),Object(i.b)("p",null,"If you have deployed you first app. The pipeline will have ignored the Publish to Helm stage as the ",Object(i.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRPT"),"\nwas not set, now it is you should rerun your pipeline and check that the Helm Chart for you app is stored correctly\nin Artifactory with matching semantic version information."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open Artifactory expand the ",Object(i.b)("inlineCode",{parentName:"li"},"generic-local"))),Object(i.b)(b,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"692px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.71098265895954%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACy0lEQVQ4y6VVaXfaQAzk//+yJm36mqY5iAHbgG/jY9f3NZVkCKGhzYfC01ux3h0dMzIL3/ex3W7hOA7Yn6bpg332OR0ZxwmLoihQlqVYXdVXL4zT+GanIO/9c2ACrOsaWmu5WHUVQhUiKzMUTYG0TJFXOYZxEPs8UwJUSsF1XYzDiEhHePGW2EQmkiKBEa5gxhZ2yZ5sh+1hCzfz4KQO9umezJFznATf7YYOC85ut9sJYKACLAnQCFa4s7/j0XnEJjRxa37FzeYWq2ANjwC3R3A/9zEMA/qhF7CmbbDI8xy2bWOihiZU4iY24aYuwjxCrGM0XYOsyihYSC3IoGolphtNJIwXJYdhOAOapimAVVvhfncvYPvEkdLczIWqNNq+lUy4lxyk7mo0tHdSAa8XgByNDz+5z1Lyg/MLS/8VNpX27L3AiiwEeSD9NAJDVlWp64CsQ+5F27WSEbPLLHu5h7g4SN/4N1+a+9WzQv6g+F3J6/VaSIlVjHW4oXL3wlyiEilNGk5lctlNf175WU37Xd9JIM/3sMiyDJZlYehntphpzooJCfIQB/LzOpeV91keSZmIcQt4X9da+r/39jOguTGhtEKqU/zPJwqjIyCR0vc9Cdkg7T1h5a/hUC9Z5CJoMhYyk2PHNiIV4ZWI4eenSXojhQFZh9zUeVJeiN0lVjQlP0hCfNEhXXJ5EbWBy2OGWVIWgfNaNtVZhwxoGIZsWAdbpuKbdSey+bK5wc/9A9zEJbLWAsSMswquzfEbIMuGXxKcPpPBmXDTDzSnzCiTwRly46+9aT4Asmx0oUUqzHSsD8L2v9590xFEvtPsB0GARVVVSFKSgB9IhJMFYSAmPh1kYz+KyI5n2J/PB1B5hq6jtw2z+74Pc8RzGRdZkRPlA5Ewl5xqGlcaiDDOYdgHFGWFBaNeXp7++jfAa93y+M17XT+vddNCFY1k+Bv0zv6bfnQNJgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/a4ea4/kubeaddkeytosecret.png",srcSet:["/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/d6747/kubeaddkeytosecret.png 288w","/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/09548/kubeaddkeytosecret.png 576w","/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/a4ea4/kubeaddkeytosecret.png 692w"],sizes:"(max-width: 692px) 100vw, 692px",loading:"lazy"})),"\n    ")))}A.isMDXComponent=!0},443:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},444:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},445:function(e,t,a){"use strict";a(32),a(28);var i=a(1),o=a(443),r=a(0),n=a.n(r),c=a(105),l=a.n(c),s=a(195),b=a(127),p=a(3),g=a.n(p),d=a(384),m=function(e){var t,a=e.title,o=e.tabs,r=void 0===o?[]:o;return Object(i.b)("div",{className:g()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12"},Object(i.b)("h1",{id:"page-title",className:d.text},a)))))},A=a(444),u=a(385),y=function(e){var t=e.relativePagePath,a=e.repository,o=A.data.site.siteMetadata.repository,r=a||o,n=r.baseUrl,c=r.subDirectory,l=n+"/edit/"+r.branch+c+"/src/pages"+t;return n?Object(i.b)("div",{className:"bx--row "+u.row},Object(i.b)("div",{className:"bx--col"},Object(i.b)("a",{className:u.link,href:l},"Edit this page on GitHub"))):null},h=a(193),f=(a(59),a(26)),j=a(386);var O=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),n=r===o,c=new RegExp(o+"(?!-)"),s=a.replace(c,r);return Object(i.b)("li",{key:e,className:g()((t={},t[j.selectedItem]=n,t),j.listItem)},Object(i.b)(f.Link,{className:j.link,to:""+s},e))}));return Object(i.b)("div",{className:j.tabsContainer},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(i.b)("nav",null,Object(i.b)("ul",{className:j.list},r))))))},o}(n.a.Component),N=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,c=t.frontmatter,p=void 0===c?{}:c,g=t.relativePagePath,d=t.titleType,A=p.tabs,u=p.title,f=p.theme,j=p.description,w=p.keywords,v=o.data.site.pathPrefix,k=v?r.pathname.replace(v,""):r.pathname,x=A?k.split("/").slice(-1)[0]||l()(A[0],{lower:!0}):"";return Object(i.b)(b.a,{homepage:!1,theme:f,pageTitle:u,pageDescription:j,pageKeywords:w,titleType:d},Object(i.b)(m,{title:n?Object(i.b)(n,null):u,label:"label",tabs:A}),A&&Object(i.b)(O,{slug:k,tabs:A,currentTab:x}),Object(i.b)(N.a,{padded:!0},a,Object(i.b)(y,{relativePagePath:g})),Object(i.b)(h.a,{pageContext:t,location:r,slug:k,tabs:A,currentTab:x}),Object(i.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-artifactory-setup-index-mdx-686be6466479d4bee5f7.js.map