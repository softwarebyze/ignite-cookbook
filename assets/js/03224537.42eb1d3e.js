"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[6275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"Detox Intro",description:"A quick look at Detox and what makes it useful",tags:["Testing","Intro"],last_update:{author:"Jamon Holmgren"},publish_date:new Date("2022-10-09T00:00:00.000Z")},i=void 0,s={unversionedId:"recipes/DetoxIntro",id:"recipes/DetoxIntro",title:"Detox Intro",description:"A quick look at Detox and what makes it useful",source:"@site/docs/recipes/DetoxIntro.md",sourceDirName:"recipes",slug:"/recipes/DetoxIntro",permalink:"/ignite-cookbook/docs/recipes/DetoxIntro",draft:!1,tags:[{label:"Testing",permalink:"/ignite-cookbook/docs/tags/testing"},{label:"Intro",permalink:"/ignite-cookbook/docs/tags/intro"}],version:"current",lastUpdatedBy:"Jamon Holmgren",lastUpdatedAt:1674164388,formattedLastUpdatedAt:"Jan 19, 2023",frontMatter:{title:"Detox Intro",description:"A quick look at Detox and what makes it useful",tags:["Testing","Intro"],last_update:{author:"Jamon Holmgren"},publish_date:"2022-10-09T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Creating a Good Experience for Screen Readers",permalink:"/ignite-cookbook/docs/recipes/CreatingGreateExperienceForScreenReaders"},next:{title:"Environment Variables",permalink:"/ignite-cookbook/docs/recipes/EnvironmentVariables"}},l={},c=[{value:"Installation",id:"installation",level:3},{value:"What&#39;s unique about Detox",id:"whats-unique-about-detox",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Detox is a library for end-to-end testing of React Native apps. This wiki provides information on how to use Detox effectively."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Detox's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md"},"documentation for installation"),"."),(0,r.kt)("p",null,"It's included ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinitered/ignite/tree/master/boilerplate/e2e"},"by default in Ignite"),"."),(0,r.kt)("h3",{id:"whats-unique-about-detox"},"What's unique about Detox"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Synchronization")),(0,r.kt)("p",null,"One of the key features that makes Detox unique is that it synchronizes with app state, so it can know when to move to the next step of a test, instead of including manual sleep statements. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/485ba69e757faf71b6556c3ec6083690b949d744/docs/Introduction.HowDetoxWorks.md#how-detox-automatically-synchronizes-with-your-app"},"See the documentation for more info"),"."),(0,r.kt)("p",null,"But this does create new kinds of errors to be aware of. For example, if you see a Detox test hanging, that's an indication that Detox might not be detecting that the app went into the idle state so that the test can continue. To debug, check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/docs/Troubleshooting.Synchronization.md#dealing-with-synchronization-issues-in-tests"},"Detox's troubleshooting guide on sync issues"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Flaky Tests ")),(0,r.kt)("p",null,"The RNR team interviewed Rotem Meidan, former lead of Detox, about Detox stability, in ",(0,r.kt)("a",{parentName:"p",href:"https://reactnativeradio.com/episodes/rnr-189-reliable-detox-with-rotem-opBGVWSK"},"React-Native Radio 189"),"."),(0,r.kt)("p",null,"He wrote an article about that here: ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/wix-engineering/detox-writing-stable-test-suites-372c9d537184"},"Detox: Writing Stable Test Suites")))}u.isMDXComponent=!0}}]);