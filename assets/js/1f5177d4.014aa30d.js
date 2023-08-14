"use strict";(self.webpackChunkasync_storage_website=self.webpackChunkasync_storage_website||[]).push([[810],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9210:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.platformIcon,n=e.title;return a.createElement("div",{style:{display:"flex",margin:"10px 20px",alignItems:"center",flexDirection:"row"}},a.createElement("img",{style:{width:34,height:34},src:"/async-storage/img/"+t}),a.createElement("p",{style:{margin:"0 0 0 10px",padding:0}},n))}},9100:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(9210),l=["components"],s={id:"next",title:"Next storage implementation",sidebar_label:"Next storage implementation"},p=void 0,c={unversionedId:"advanced/next",id:"advanced/next",title:"Next storage implementation",description:"Supported platforms:",source:"@site/docs/advanced/Next.md",sourceDirName:"advanced",slug:"/advanced/next",permalink:"/async-storage/docs/advanced/next",draft:!1,editUrl:"https://github.com/react-native-async-storage/async-storage/edit/main/website/docs/advanced/Next.md",tags:[],version:"current",frontMatter:{id:"next",title:"Next storage implementation",sidebar_label:"Next storage implementation"},sidebar:"docs",previous:{title:"Known limits",permalink:"/async-storage/docs/limits"},next:{title:"Jest integration",permalink:"/async-storage/docs/advanced/jest"}},d={},u=[{value:"Motivation",id:"motivation",level:3},{value:"Migration",id:"migration",level:3},{value:"How it works",id:"how-it-works",level:4},{value:"Why is it important",id:"why-is-it-important",level:4},{value:"Enable",id:"enable",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Notable changes",id:"notable-changes",level:3}],m={toc:u},f="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Supported platforms:")),(0,o.kt)(i.Z,{title:"Android",platformIcon:"icon_android.svg",mdxType:"PlatformSupport"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Current implementation of persistence layer is created using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper"},"SQLiteOpenHelper"),",\na helper class that manages database creation and migrations. Even if this approach is powerful, the lack of compile time query verification and a big boilerplate of mapping SQLite queries  to actual values make this implementation prone to many errors."),(0,o.kt)("p",null,"This Async Storage feature improves the persistence layer, using modern approaches to access SQLite (using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/training/data-storage/room"},"Room"),"), to reduce possible anomalies to the minimum.\nOn top of that, it allows accessing AsyncStorage from the native side, useful in ",(0,o.kt)("a",{parentName:"p",href:"/async-storage/docs/advanced/brownfield#android"},"Brownfield integration.")),(0,o.kt)("h3",{id:"migration"},"Migration"),(0,o.kt)("p",null,"This feature requires no migration from the developer perspective - the current database will be recreated (based on the current one), meaning user won't lose any data if you decide to opt in.\nThere's a small drawback to know - the database \"recreation\" happens ",(0,o.kt)("strong",{parentName:"p"},"only once"),". "),(0,o.kt)("h4",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"The new database (the one used by this feature) will be created based on the current database file, if the new one does not exist yet.\nIf we detect that there's already the new database on the device, recreation will not kick in."),(0,o.kt)("h4",{id:"why-is-it-important"},"Why is it important"),(0,o.kt)("p",null,"Let's say you enabled the feature for the first time - recreation kicks in and the old database file is untouched.\nIf you decide to disable the feature, your users will be back using old database. No data migrations is happening from new to old database file.\nWhen you enable the feature again, the new database is ",(0,o.kt)("strong",{parentName:"p"},"not")," recreated, because it already exists, and no data is copied over."),(0,o.kt)("h3",{id:"enable"},"Enable"),(0,o.kt)("p",null,"In your project's ",(0,o.kt)("inlineCode",{parentName:"p"},"android")," directory, locate ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties")," file (if it does not exist, create one) and add the line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"AsyncStorage_useNextStorage=true\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kotlin version")),(0,o.kt)("p",null,"Next storage is tested against Kotlin version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.8.10"),".\nYou can specify different version, in one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add ",(0,o.kt)("inlineCode",{parentName:"li"},"kotlinVersion")," extension to the ",(0,o.kt)("inlineCode",{parentName:"li"},"rootProject"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"rootProject.ext.kotlinVersion = '1.8.10'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"specify ",(0,o.kt)("inlineCode",{parentName:"li"},"AsyncStorage_kotlinVersion")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"gradle.properties"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"AsyncStorage_kotlinVersion=1.8.10\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Room")),(0,o.kt)("p",null,"Next AsyncStorage uses ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/androidx/releases/room"},"Room persistence library")," to store data.\nCurrently, tested version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2.4.3"),". You can specify different version, by adding a flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"AsyncStorage_next_roomVersion=2.4.3\n")),(0,o.kt)("h3",{id:"notable-changes"},"Notable changes"),(0,o.kt)("p",null,"Alongside of a warning regarding ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", errors are thrown when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"not a string")),(0,o.kt)("li",{parentName:"ul"},"You provide value that is ",(0,o.kt)("inlineCode",{parentName:"li"},"not a string"))))}g.isMDXComponent=!0}}]);