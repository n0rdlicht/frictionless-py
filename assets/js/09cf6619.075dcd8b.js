(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{161:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var i=a(0),r=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||n;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},241:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/example-f909693944e8d92820048068649b1cdb.png"},242:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/diagram-26e9f0bc9d57f27a4b02057278782d08.png"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var i=a(3),r=a(8),n=(a(0),a(161)),o={title:"Introduction"},s={unversionedId:"guides/introduction",id:"guides/introduction",isDocsHomePage:!1,title:"Introduction",description:"Build",source:"@site/../docs/guides/introduction.md",slug:"/guides/introduction",permalink:"/docs/guides/introduction",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/introduction.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1621443287,formattedLastUpdatedAt:"5/19/2021",sidebar:"guides",previous:{title:"Guides Overview",permalink:"/docs/guides/guides-overview"},next:{title:"Quick Start",permalink:"/docs/guides/quick-start"}},c=[{value:"Why Frictionless Data?",id:"why-frictionless-data",children:[]},{value:"Frictionless Specifications",id:"frictionless-specifications",children:[]},{value:"Frictionless Framework",id:"frictionless-framework",children:[]},{value:"Important Features",id:"important-features",children:[]},{value:"Usage Example",id:"usage-example",children:[]},{value:"User Stories",id:"user-stories",children:[]}],l={toc:c};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/frictionless-py/actions"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/frictionlessdata/frictionless-py/general/main",alt:"Build"})),"\n",Object(n.b)("a",{parentName:"p",href:"https://codecov.io/gh/frictionlessdata/frictionless-py"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/codecov/c/github/frictionlessdata/frictionless-py/main",alt:"Coverage"})),"\n",Object(n.b)("a",{parentName:"p",href:"https://pypi.python.org/pypi/frictionless"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/frictionless.svg",alt:"Registry"})),"\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/frictionless-py"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/badge/github-main-brightgreen",alt:"Codebase"})),"\n",Object(n.b)("a",{parentName:"p",href:"https://discord.com/channels/695635777199145130/695635777199145133"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/badge/chat-discord-brightgreen",alt:"Support"}))),Object(n.b)("p",null,"Frictionless is a framework to describe, extract, validate, and transform tabular data (DEVT Framework). It supports a great deal of data schemes and formats, and provides popular platforms integrations. The framework is powered by the lightweight yet comprehensive ",Object(n.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/"},"Frictionless Data Specifications"),"."),Object(n.b)("h2",{id:"why-frictionless-data"},"Why Frictionless Data?"),Object(n.b)("p",null,"Generating insight and conclusions from data is often not a straightforward process. Data can be poorly structured, hard to find, archived in difficult to use formats, or incomplete. These issues create \u201cfriction\u201d and make it difficult to use, publish and share data. The Frictionless Data project aims to reduce frictions while working with data, with a goal to make it effortless to transport data among different tools and platforms for further analysis. This project is a suite of open source software, tools, and specifications focused on improving data and metadata interoperability. The core software library is ",Object(n.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/frictionless-py"},"Frictionless-py"),", and this documentation will help you learn how to use this Frictionless Framework. Are you interested in learning more about the project as a whole? Read the overview section below."),Object(n.b)("h2",{id:"frictionless-specifications"},"Frictionless Specifications"),Object(n.b)("p",null,"The core of the Framework are the Frictionless Specifications. These specifications are a set of patterns for describing data including Data Package (for datasets), Data Resource (for files) and Table Schema (for tables). A Data Package is a simple container format used to describe and package a collection of data and metadata, including schemas. Frictionless-py lets users create data packages and schemas that conform to the Frictionless specifications.\nYou can read more about the Frictionless specifications at ",Object(n.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/"},"https://specs.frictionlessdata.io/"),". The main concepts of the Frictionless Specifications are:"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("big",null,"Table Schema:"))," a metadata file usually written in JSON or YAML that describes a tabular file by providing its dimension, field data types, relations, and constraints. One Table Schema can be used with many tabular files with the same structure."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("big",null,"Data Resource:"))," a metadata file usually written in JSON or YAML that describes an EXACT tabular file providing a path to the file and details like title, description, and others. For a tabular resource it also includes a Table Schema from above."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("big",null,"Data Package:"))," a metadata file usually written in JSON or YAML that describes a COLLECTION of EXACT tabular files providing data resource information from above along with general information about the package itself as though a license, authors, and other metadata."),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Thinking in SQL terminology a package would be a database, a resource would be a table, and a schema would be column definitions."))),Object(n.b)("h2",{id:"frictionless-framework"},"Frictionless Framework"),Object(n.b)("p",null,"The Frictionless Framework makes data more usable by generating metadata and schemas and by validating data to ensure quality. There are four main functions that can be used independently to improve your data: Describe data, Extract data, Validate data, and Transform data (DEVT). Here, we will go into more detail on each of these main functions."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("big",null,"Describe your data:"))," infer and edit metadata from a data file. For instance, ",Object(n.b)("inlineCode",{parentName:"p"},"describe")," will generate metadata describing the layout of the data (i.e. which row is the header) as well as a schema describing the data contents (i.e. the type of data in a column). This is a first step for ensuring data quality and usability."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("big",null,"Extract your data:"))," read and normalize data from a data file. By default, ",Object(n.b)("inlineCode",{parentName:"p"},"extract")," returns data conforming to the metadata that was either defined in the ",Object(n.b)("inlineCode",{parentName:"p"},"describe")," step or inferred automatically. The user can opt-out of this to get the raw (unnormalized) data. Frictionless supports various file schemes like HTTP, FTP, and S3 and data formats like CSV, XLS, JSON, SQL, and others."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("big",null,"Validate your data:"))," detect errors in a data file. ",Object(n.b)("inlineCode",{parentName:"p"},"validate")," runs checks on data tables, resources, and datasets to identify potential issues (i.e. are there any missing values?). These checks can be modified and can be based on a provided schema. While ",Object(n.b)("inlineCode",{parentName:"p"},"extract")," cleans the data by removing the invalid cells, ",Object(n.b)("inlineCode",{parentName:"p"},"validate")," helps to see the whole picture of the raw file."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("big",null,"Transform your data:"))," change a data file's metadata and data. This step can including reshaping data, saving it in a different format, or uploading the data somewhere. Frictionless provides a pipeline capability and a lower-level interface to work with the data."),Object(n.b)("h2",{id:"important-features"},"Important Features"),Object(n.b)("p",null,"Frictionless is a complete data solution providing rich functionality. It's hard to list all the features it provides, but here are the most important ones:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open Source (MIT)"),Object(n.b)("li",{parentName:"ul"},"Powerful Python framework"),Object(n.b)("li",{parentName:"ul"},"Convenient command-line interface"),Object(n.b)("li",{parentName:"ul"},"Low memory consumption for data of any size"),Object(n.b)("li",{parentName:"ul"},"Reasonable performance on big data"),Object(n.b)("li",{parentName:"ul"},"Support for compressed files"),Object(n.b)("li",{parentName:"ul"},"Custom checks and formats"),Object(n.b)("li",{parentName:"ul"},"Fully pluggable architecture"),Object(n.b)("li",{parentName:"ul"},"An included API server"),Object(n.b)("li",{parentName:"ul"},"More than 1000+ tests")),Object(n.b)("h2",{id:"usage-example"},"Usage Example"),Object(n.b)("p",null,"Frictionless can be run on CLI, in Python, and even as an API server. Here is a short example how to validate a data file in CLI:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Diagram",src:a(241).default})),Object(n.b)("h2",{id:"user-stories"},"User Stories"),Object(n.b)("p",null,"Frictionless is a DEVT-framework (describe-extract-validate-transform). In contrast to ETL-frameworks (extract-transform-load), Frictionless does not have a linear flow. For example, let\u2019s look at some user stories:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Diagram",src:a(242).default})),Object(n.b)("p",null,"Continue reading this documentation to learn more about it!"))}d.isMDXComponent=!0}}]);