(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(161)),o={title:"BigQuery Tutorial",sidebar_label:"BigQuery"},c={unversionedId:"tutorials/formats/bigquery-tutorial",id:"tutorials/formats/bigquery-tutorial",isDocsHomePage:!1,title:"BigQuery Tutorial",description:"This functionality requires an experimental bigquery plugin. Read More",source:"@site/../docs/tutorials/formats/bigquery-tutorial.md",slug:"/tutorials/formats/bigquery-tutorial",permalink:"/docs/tutorials/formats/bigquery-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/bigquery-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1621443287,formattedLastUpdatedAt:"5/19/2021",sidebar_label:"BigQuery",sidebar:"tutorials",previous:{title:"Stream Tutorial",permalink:"/docs/tutorials/schemes/stream-tutorial"},next:{title:"CKAN Tutorial",permalink:"/docs/tutorials/formats/ckan-tutorial"}},l=[{value:"Reading Data",id:"reading-data",children:[]},{value:"Writing Data",id:"writing-data",children:[]},{value:"Configuring Data",id:"configuring-data",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(i.b)("inlineCode",{parentName:"p"},"bigquery")," plugin. ",Object(i.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(i.b)("p",null,"Frictionless supports both reading tables from BigQuery source and treating a BigQuery dataset as a tabular data storage."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"pip install frictionless[bigquery]\n")),Object(i.b)("h2",{id:"reading-data"},"Reading Data"),Object(i.b)("p",null,"You can read from this source using ",Object(i.b)("inlineCode",{parentName:"p"},"Package/Resource"),", for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'import os\nimport json\nfrom pprint import pprint\nfrom apiclient.discovery import build\nfrom oauth2client.client import GoogleCredentials\nfrom frictionless import Resource\nfrom frictionless.plugins.bigquery import BigqueryDialect\n\n# Prepare BigQuery\n# This file can be received from Google Console\nos.environ["GOOGLE_APPLICATION_CREDENTIALS"] = ".google.json"\ncredentials = GoogleCredentials.get_application_default()\nservice = build("bigquery", "v2", credentials=credentials),\nproject = json.load(open(".google.json"))["project_id"],\n\n# Read from BigQuery\ndialect = BigqueryDialect(project=project, dataset=\'<dataset>\', table=\'<table>\')\nresource = Resource(service, dialect=dialect)\npprint(resource.read_rows())\n')),Object(i.b)("p",null,"If you'd like to treat BigQuery dataset as a tabular storage:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from pprint import pprint\nfrom frictionless import Package\n\npackage = Package.from_bigquery(service=service, project=project, dataset='<dataset>')\npprint(package)\nfor resource in package.resources:\n  pprint(resource.read_rows())\n")),Object(i.b)("h2",{id:"writing-data"},"Writing Data"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"[NOTE]")," Timezone information is ignored for ",Object(i.b)("inlineCode",{parentName:"p"},"datetime")," and ",Object(i.b)("inlineCode",{parentName:"p"},"time")," types.")),Object(i.b)("p",null,"We can export a package to a BigQuery dataset:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from pprint import pprint\nfrom frictionless import Package\n\npackage = Package('path/to/datapackage.json')\npackage.to_bigquery(service, project=project, dataset='<dataset>')\n")),Object(i.b)("p",null,"Also, it's possible to save a resource as a Bigquery table using ",Object(i.b)("inlineCode",{parentName:"p"},"resource.write()"),"."),Object(i.b)("h2",{id:"configuring-data"},"Configuring Data"),Object(i.b)("p",null,"There is the ",Object(i.b)("inlineCode",{parentName:"p"},"BigqueryDialect")," to configure how Frictionles works with BigQuery:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from pprint import pprint\nfrom frictionless import Resource\nfrom frictionless.plugins.bigquery import BigqueryDialect\n\ndialect = BigqueryDialect(project=project, dataset='<dataset>', table='<table>'\nresource = Resource(service, dialect=dialect)\npprint(resource.read_rows())\n")),Object(i.b)("p",null,"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/references/formats-reference#bigquery"},"BigQuery Dialect"))))}p.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(g,c(c({ref:t},s),{},{components:r})):a.a.createElement(g,c({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);