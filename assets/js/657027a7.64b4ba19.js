"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[5893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Migrating to MMKV",description:"How to migrate from React Native's AsyncStorage to MMKV",tags:["MMKV","AsyncStorage"],last_update:{author:"Frank Calise"},publish_date:new Date("2022-10-28T00:00:00.000Z")},i="Migrating to MMKV",s={unversionedId:"recipes/MigratingToMMKV",id:"recipes/MigratingToMMKV",title:"Migrating to MMKV",description:"How to migrate from React Native's AsyncStorage to MMKV",source:"@site/docs/recipes/MigratingToMMKV.md",sourceDirName:"recipes",slug:"/recipes/MigratingToMMKV",permalink:"/docs/recipes/MigratingToMMKV",draft:!1,tags:[{label:"MMKV",permalink:"/docs/tags/mmkv"},{label:"AsyncStorage",permalink:"/docs/tags/async-storage"}],version:"current",lastUpdatedBy:"Frank Calise",lastUpdatedAt:1692282198,formattedLastUpdatedAt:"Aug 17, 2023",frontMatter:{title:"Migrating to MMKV",description:"How to migrate from React Native's AsyncStorage to MMKV",tags:["MMKV","AsyncStorage"],last_update:{author:"Frank Calise"},publish_date:"2022-10-28T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Migrating to FlashList",permalink:"/docs/recipes/MigratingToFlashList"},next:{title:"Patching/Building Android .aar From Source",permalink:"/docs/recipes/PatchingBuildingAndroid"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Project Dependencies",id:"project-dependencies",level:2},{value:"Code Changes",id:"code-changes",level:2}],p={toc:c};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrating-to-mmkv"},"Migrating to MMKV"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-mmkv"},"MMKV")," is said to be the fastest key/value storage for React Native. It has encryption support for secure local storage and also uses synchronous storage to simplify your application code."),(0,a.kt)("p",null,"In this recipe, we'll convert our the Ignite demo project from using ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"MMKV"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nodejs"},"npx ignite-cli new PizzaApp --yes\ncd PizzaApp\n")),(0,a.kt)("h2",{id:"project-dependencies"},"Project Dependencies"),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-mmkv")," dependency into the project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nodejs"},"yarn add react-native-mmkv\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: No ",(0,a.kt)("inlineCode",{parentName:"em"},"pod install")," was run here because the scripts set up in an Ignite project take care of that for you!")),(0,a.kt)("h2",{id:"code-changes"},"Code Changes"),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"app/utils/storage.tsx")," and modify the imports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// error-line\nimport AsyncStorage from "@react-native-async-storage/async-storage";\nimport { MMKV } from "react-native-mmkv";\nconst storage = new MMKV();\n')),(0,a.kt)("p",null,"Now we'll remove any reference to ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," and replace it with the proper API from ",(0,a.kt)("inlineCode",{parentName:"p"},"MMKV")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/**\n * Loads a string from storage.\n *\n * @param key The key to fetch.\n */\n// error-line\nexport async function loadString(key: string): Promise<string | null> {\nexport function loadString(key: string): string | null {\n  try {\n    // error-line\n    return await AsyncStorage.getItem(key)\n    return storage.getString(key);\n  } catch {\n    // not sure why this would fail... even reading the RN docs I'm unclear\n    return null;\n  }\n}\n\n/**\n * Saves a string to storage.\n *\n * @param key The key to fetch.\n * @param value The value to store.\n */\n// error-line\nexport async function saveString(key: string, value: string): Promise<boolean> {\nexport function saveString(key: string, value: string): boolean {\n  try {\n    // error-line\n    await AsyncStorage.setItem(key, value)\n    storage.set(key, value);\n    return true;\n  } catch {\n    return false;\n  }\n}\n\n/**\n * Loads something from storage and runs it thru JSON.parse.\n *\n * @param key The key to fetch.\n */\n// error-line\nexport async function load(key: string): Promise<any | null> {\nexport function load(key: string): any | null {\n  try {\n    // error-line\n    const almostThere = await AsyncStorage.getItem(key)\n    const almostThere = storage.getString(key);\n    return JSON.parse(almostThere);\n  } catch {\n    return null;\n  }\n}\n\n/**\n * Saves an object to storage.\n *\n * @param key The key to fetch.\n * @param value The value to store.\n */\n// error-line\nexport async function save(key: string, value: any): Promise<boolean> {\nexport function save(key: string, value: any): boolean {\n  try {\n    // error-line\n    await AsyncStorage.setItem(key, JSON.stringify(value))\n    saveString(key, JSON.stringify(value));\n    return true;\n  } catch {\n    return false;\n  }\n}\n\n/**\n * Removes something from storage.\n *\n * @param key The key to kill.\n */\n// error-line\nexport async function remove(key: string): Promise<void> {\nexport function remove(key: string): void {\n  try {\n    // error-line\n    await AsyncStorage.removeItem(key)\n    storage.delete(key);\n  } catch {}\n}\n\n/**\n * Burn it all to the ground.\n */\n// error-line\nexport async function clear(): Promise<void> {\nexport function clear(): void {\n  try {\n    // error-line\n    await AsyncStorage.clear()\n    storage.clearAll();\n  } catch {}\n}\n")),(0,a.kt)("p",null,"Run the app in the iOS simulator to test the changes with ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn ios"),". Navigate to the Podcast List screen:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Press "Tap to sign in!"'),(0,a.kt)("li",{parentName:"ol"},'Press "Let\'s go!"'),(0,a.kt)("li",{parentName:"ol"},'Tap on the "Podcast"')),(0,a.kt)("p",null,"Now let's swipe the app away to close it. Re-open the app to see if the navigation picks up where we left off (which shows our storage is working to remember the navigation key we were last on)."),(0,a.kt)("p",null,"And that's it! Ignite is now configured with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-mmkv")," over ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncStorage"),"."))}g.isMDXComponent=!0}}]);