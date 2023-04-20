"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[6247],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const i={title:"EAS Update",description:"Setting up Ignite to deploy over-the-air (OTA) updates via EAS",tags:["Expo","expo-updates","EAS Update"],last_update:{author:"Frank Calise"},publish_date:new Date("2023-01-06T00:00:00.000Z")},r="EAS Update",l={unversionedId:"recipes/EASUpdate",id:"recipes/EASUpdate",title:"EAS Update",description:"Setting up Ignite to deploy over-the-air (OTA) updates via EAS",source:"@site/docs/recipes/EASUpdate.md",sourceDirName:"recipes",slug:"/recipes/EASUpdate",permalink:"/docs/recipes/EASUpdate",draft:!1,tags:[{label:"Expo",permalink:"/docs/tags/expo"},{label:"expo-updates",permalink:"/docs/tags/expo-updates"},{label:"EAS Update",permalink:"/docs/tags/eas-update"}],version:"current",lastUpdatedBy:"Frank Calise",lastUpdatedAt:1681985935,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{title:"EAS Update",description:"Setting up Ignite to deploy over-the-air (OTA) updates via EAS",tags:["Expo","expo-updates","EAS Update"],last_update:{author:"Frank Calise"},publish_date:"2023-01-06T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Detox Intro",permalink:"/docs/recipes/DetoxIntro"},next:{title:"Environment Variables",permalink:"/docs/recipes/EnvironmentVariables"}},p={},s=[{value:"Appetizer",id:"appetizer",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Project Setup",id:"1-project-setup",level:3},{value:"2. Edit Build Profiles",id:"2-edit-build-profiles",level:3},{value:"3. Create the Build",id:"3-create-the-build",level:3},{value:"4. Making a Project Update",id:"4-making-a-project-update",level:3},{value:"5. Publishing OTA",id:"5-publishing-ota",level:3},{value:"Create the Update Channel",id:"create-the-update-channel",level:4},{value:"Upload Changes to EAS",id:"upload-changes-to-eas",level:4},{value:"Download the Updates OTA",id:"download-the-updates-ota",level:4},{value:"Customized Update Flow",id:"customized-update-flow",level:2},{value:"Notes",id:"notes",level:2},{value:"More Resources",id:"more-resources",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eas-update"},"EAS Update"),(0,o.kt)("p",null,"This guide will teach you how to set up over-the-air (OTA) updates with Expo and EAS Update within an Ignite project."),(0,o.kt)("h2",{id:"appetizer"},"Appetizer"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/PristineExpoProject"},"Pristine Expo Project")," recipe first to make sure you're starting with an Expo only project."),(0,o.kt)("p",null,"You'll also need ",(0,o.kt)("inlineCode",{parentName:"p"},"eas-cli")," globally installed and and an ",(0,o.kt)("a",{parentName:"p",href:"https://expo.dev/signup"},"Expo account")," if you don't already have one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm install -g eas-cli\n")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-project-setup"},"1. Project Setup"),(0,o.kt)("p",null,"From within your project directory, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install expo-updates\neas build:configure\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Answer yes to setting up the EAS project prompt and you can configure it for both platforms (",(0,o.kt)("strong",{parentName:"li"},"note:")," for the purposes of this guide we'll be using Android)"),(0,o.kt)("li",{parentName:"ul"},"This will make some edits to your ",(0,o.kt)("inlineCode",{parentName:"li"},"app.json")," now that the project has an EAS identifier, as well as add a new ",(0,o.kt)("inlineCode",{parentName:"li"},"eas.json")," configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"eas update:configure\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some more ",(0,o.kt)("inlineCode",{parentName:"li"},"app.json")," changes will be made adding an ",(0,o.kt)("inlineCode",{parentName:"li"},"updates")," key to your configuration file.")),(0,o.kt)("h3",{id:"2-edit-build-profiles"},"2. Edit Build Profiles"),(0,o.kt)("p",null,"Modify the newly generated ",(0,o.kt)("inlineCode",{parentName:"p"},"eas.json")," to configure a ",(0,o.kt)("inlineCode",{parentName:"p"},"preview")," build profile. We'll be using a ",(0,o.kt)("inlineCode",{parentName:"p"},"buildType")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"apk")," for the Android build to keep things easy for testing, your production build can still use an Android App Bundle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cli": {\n    "version": ">= 3.0.0"\n  },\n  "build": {\n    "development": {\n      "developmentClient": true,\n      "distribution": "internal"\n    },\n    "preview": {\n      "channel": "preview",\n      "android": { "buildType": "apk" },\n      "ios": { "simulator": false }\n    },\n    "production": {}\n  },\n  "submit": {\n    "production": {}\n  }\n}\n')),(0,o.kt)("h3",{id:"3-create-the-build"},"3. Create the Build"),(0,o.kt)("p",null,"Next, we'll create a build that we can test with on either an Android emulator or device. You may do this via EAS or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.dev/build-reference/local-builds/"},"locally")," if you the added queue time for an unpaid EAS account is getting in your way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# via EAS\neas build --profile preview -p android\n\n# locally\neas build --profile preview -p android --local\n")),(0,o.kt)("p",null,"Accept the prompts for generating the new Android Keystore. Once that is completed (~7-10 minutes if you do it locally, add some extra time if using the EAS servers due to the queue time), drop it on your emulator or device and fire it up! \ud83d\udd25"),(0,o.kt)("h3",{id:"4-making-a-project-update"},"4. Making a Project Update"),(0,o.kt)("p",null,"Right now you should be staring at the ",(0,o.kt)("inlineCode",{parentName:"p"},"<LoginScreen />")," of the Ignite demo code. Let's go ahead and make an update to that so we can deploy it OTA. Open up ",(0,o.kt)("inlineCode",{parentName:"p"},"./app/screens/LoginScreen.tsx"),". Feel free to make any modification, but for an example, let's change the header text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// error-line\n<Text testID="login-heading" tx="loginScreen.signIn" preset="heading" style={$signIn} />\n// success-line\n<Text testID="login-heading" text="Welcome! Please sign in" preset="heading" style={$signIn} />\n')),(0,o.kt)("p",null,"Observe that currently there are no changes to your application (as metro is not running), there are no hot reloads going on and the header text remains ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign in"),"."),(0,o.kt)("h3",{id:"5-publishing-ota"},"5. Publishing OTA"),(0,o.kt)("h4",{id:"create-the-update-channel"},"Create the Update Channel"),(0,o.kt)("p",null,"To publish this out to our app which is living on the ",(0,o.kt)("inlineCode",{parentName:"p"},"preview")," channel (via the build profile in ",(0,o.kt)("inlineCode",{parentName:"p"},"eas.json"),"), we'll set up the channel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"eas channel:create preview\n")),(0,o.kt)("p",null,"This only has to be done once if the channel doesn't exist (which you can confirm via ",(0,o.kt)("inlineCode",{parentName:"p"},"eas channel:view [name]"),")."),(0,o.kt)("h4",{id:"upload-changes-to-eas"},"Upload Changes to EAS"),(0,o.kt)("p",null,"Next, tell EAS about the update package to send out with our new changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'eas update --branch preview --message "update login screen"\n')),(0,o.kt)("h4",{id:"download-the-updates-ota"},"Download the Updates OTA"),(0,o.kt)("p",null,"Now that the updates are on the server, we can look to update our app on our emulator/device. If the app is still in the foreground, swipe the app away to close it."),(0,o.kt)("p",null,"Reopen it from the app drawer. At this point in time, the default Expo update flow is to check for new updates on the update channel (formerly release channel if you're coming over from ",(0,o.kt)("inlineCode",{parentName:"p"},"expo publish"),"). If there is a pending compatible update, it will now be downloaded."),(0,o.kt)("p",null,"Close the app again and reopen it. Now the update will actually be applied. Note the change in the heading at the top of the sign in screen. It should match ",(0,o.kt)("inlineCode",{parentName:"p"},"Welcome! Please sign in")," or whatever modification you made in Step 4."),(0,o.kt)("p",null,"You've now successfully sent an update over-the-air! Waiting on the app store review has been skipped and your critical bug fix is out there to the masses."),(0,o.kt)("h2",{id:"customized-update-flow"},"Customized Update Flow"),(0,o.kt)("p",null,"You'll note in Step 5 that it was kind of magical / lucky that we rebooted the app twice to get the update. This can be difficult to communicate that kind of behavior to users. You can build on the foundation from this guide and add a more customized approach, providing the user with a better experience in a few ways. Here is one example flow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check for updates"),(0,o.kt)("li",{parentName:"ol"},"If one exists, alert the user"),(0,o.kt)("li",{parentName:"ol"},"Should they choose to update, keep them updated that it is in progress"),(0,o.kt)("li",{parentName:"ol"},"After successfully getting the update, offer to restart the app for the user"),(0,o.kt)("li",{parentName:"ol"},"On any errors, communicate that it could not be completed at this time.")),(0,o.kt)("p",null,"To achieve this functionality, you'll have to make some modifications to the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," for more manual control over the flow, in addition to your UI changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "updates": {\n    "checkAutomatically": "ON_ERROR_RECOVERY"\n    // ...\n  }\n}\n')),(0,o.kt)("p",null,"This will tell Expo to skip checking for updates on load and instead only do it when we request a check. Look into the following methods to achieve this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/updates/#updatescheckforupdateasync"},"checkForUpdateAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/updates/#updatesfetchupdateasync"},"fetchUpdateAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/updates/#updatesreloadasync"},"reloadAsync()"))),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Upgrading to the next Expo SDK version, native code changes and ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.js")," changes behave differently, so make sure to read the additional documentation below if that is your goal."),(0,o.kt)("h2",{id:"more-resources"},"More Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/eas-update/introduction/"},"EAS Update Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/build/updates/"},"Using EAS Update with EAS Build")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/updates/"},"Expo Updates Library Docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/build-reference/local-builds/"},"Running builds on your own infrastructure"))))}u.isMDXComponent=!0}}]);