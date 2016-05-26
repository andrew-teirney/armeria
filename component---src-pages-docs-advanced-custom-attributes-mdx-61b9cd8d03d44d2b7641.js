(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scalapb"]}')},F5Vl:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return i})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a("8o2o"),r=(a("q1tI"),a("7ljp")),c=a("xCMr"),i="RequestContext custom attributes",s={},o={pageTitle:i,_frontmatter:s},u=c.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(u,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"requestcontext-custom-attributes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h1"},{href:"#requestcontext-custom-attributes","aria-label":"requestcontext custom attributes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(r.b)("inlineCode",{parentName:"h1"},"RequestContext")," custom attributes"),Object(r.b)("p",null,"When you are using multiple decorators, you might want to pass some value to the next decorator.\nYou can do this by attaching attributes to a ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"}),"type://RequestContext"),". To attach an attribute,\nyou need to define an ",Object(r.b)("inlineCode",{parentName:"p"},"AttributeKey")," first:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import io.netty.util.AttributeKey;\n\npublic final class MyAttributeKeys {\n    public static final AttributeKey<Integer> INT_ATTR =\n            AttributeKey.valueOf(MyAttributeKeys.class, "INT_ATTR");\n    public static final AttributeKey<MyBean> BEAN_ATTR =\n            AttributeKey.valueOf(MyAttributeKeys.class, "BEAN_ATTR");\n    ...\n}\n')),Object(r.b)("p",null,"Then, you can access them via ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContext#attr(AttributeKey):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html#attr(io.netty.util.AttributeKey)"}),"type://RequestContext#attr(AttributeKey)"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"// Setting\nctx.setAttr(INT_ATTR, 42);\nMyBean myBean = new MyBean();\nctx.setAttr(BEAN_ATTR, new MyBean());\n\n// Getting\nInteger i = ctx.attr(INT_ATTR); // i == 42\nMyBean bean = ctx.attr(BEAN_ATTR); // bean == myBean\n")),Object(r.b)("p",null,"You can also iterate over all the attributes in a context using ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContext#attrs():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html#attrs()"}),"type://RequestContext#attrs()"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ctx.attrs().forEachRemaining(e -> {\n    System.err.println(e.getKey() + ": " + e.getValue());\n});\n')))}l.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),c=a.n(r),i=a("/94A"),s=a("+ejy");t.a=function(e){var t=Object(n.useStaticQuery)("1217743243").allMdx.nodes;return c.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:t,index:i,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-custom-attributes-mdx-61b9cd8d03d44d2b7641.js.map