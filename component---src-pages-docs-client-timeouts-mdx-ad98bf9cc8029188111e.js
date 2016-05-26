(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scalapb"]}')},wxwE:function(e,t,i){"use strict";i.r(t),i.d(t,"pageTitle",(function(){return o})),i.d(t,"_frontmatter",(function(){return l})),i.d(t,"default",(function(){return d}));var a,n=i("8o2o"),r=(i("q1tI"),i("7ljp")),c=i("xCMr"),o="Overriding client timeouts",l={},s=(a="Warning",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),m={pageTitle:o,_frontmatter:l},b=c.a;function d(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)(b,Object.assign({},m,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"overriding-client-timeouts",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h1"},{href:"#overriding-client-timeouts","aria-label":"overriding client timeouts permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Overriding client timeouts"),Object(r.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#using-clientbuilder"}),"Using ClientBuilder")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#adjusting-connection-level-timeouts"}),"Adjusting connection-level timeouts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#using-jvm-system-properties"}),"Using JVM system properties"))),Object(r.b)("p",null,"Sometimes, the default timeouts used by the Armeria clients do not suit a particular scenario well.\nIn these cases, you might want to override the timeout settings."),Object(r.b)("h2",{id:"using-clientbuilder",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#using-clientbuilder","aria-label":"using clientbuilder permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h2"},"ClientBuilder")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import java.time.Duration;\n\nimport com.linecorp.armeria.client.Clients;\n\nint responseTimeout = 30;\nint writeTimeout = 10;\n\nHelloService.Iface client =\n    Clients.builder("tbinary+http://example.com/hello")\n           .responseTimeout(Duration.ofSeconds(responseTimeout))\n           .writeTimeout(Duration.ofSeconds(writeTimeout))\n           .build(HelloService.Iface.class);\n')),Object(r.b)("h2",{id:"adjusting-connection-level-timeouts",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#adjusting-connection-level-timeouts","aria-label":"adjusting connection level timeouts permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Adjusting connection-level timeouts"),Object(r.b)("p",null,"You need to build a non-default ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"}),"type://ClientFactory")," using ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ClientFactoryBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactoryBuilder.html"}),"type://ClientFactoryBuilder")," to override the default\nconnection-level timeouts such as connect timeout and idle timeout programmatically:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import com.linecorp.armeria.client.ClientFactory;\n\nClientFactory factory =\n    ClientFactory.builder()\n                 // Increase the connect timeout from 3.2s to 10s.\n                 .connectTimeout(Duration.ofSeconds(10))\n                 // Shorten the idle connection timeout from 10s to 5s.\n                 .idleTimeout(Duration.ofSeconds(5))\n                 // Note that you can also adjust other connection-level\n                 // settings such as enabling HTTP/1 request pipelining.\n                 .useHttp1Pipelining(true)\n                 .build();\n")),Object(r.b)("p",null,"Note that ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"}),"type://ClientFactory")," implements ",Object(r.b)("inlineCode",{parentName:"p"},"java.lang.AutoCloseable")," and thus needs to be closed when you\nterminate your application. On ",Object(r.b)("inlineCode",{parentName:"p"},"close()"),", ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"}),"type://ClientFactory")," will close all the connections it manages\nand abort any requests in progress."),Object(r.b)("h2",{id:"using-jvm-system-properties",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#using-jvm-system-properties","aria-label":"using jvm system properties permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using JVM system properties"),Object(r.b)("p",null,"You can override the default client timeouts by specifying the following JVM system properties if you do not\nprefer setting it programmatically:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultClientIdleTimeoutMillis=<integer>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the default client-side idle timeout of a connection for keep-alive in milliseconds. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10000")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultConnectTimeoutMillis=<integer>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the default client-side timeout of a socket connection attempt in milliseconds. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"3200")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultWriteTimeoutMillis=<integer>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the default client-side timeout of a socket write attempt in milliseconds. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1000")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultResponseTimeoutMillis=<integer>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the default client-side timeout of a response in milliseconds. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"15000"))))),Object(r.b)(s,{mdxType:"Warning"},Object(r.b)("p",null,"The JVM system properties have effect only when you did not specify them programmatically.\nSee ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://Flags:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Flags.html"}),"type://Flags")," for the complete list of JVM system properties in Armeria.")))}d.isMDXComponent=!0},xCMr:function(e,t,i){"use strict";var a=i("Wbzz"),n=i("q1tI"),r=i.n(n),c=i("/94A"),o=i("+ejy");t.a=function(e){var t=Object(a.useStaticQuery)("1217743243").allMdx.nodes;return r.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:t,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-timeouts-mdx-ad98bf9cc8029188111e.js.map