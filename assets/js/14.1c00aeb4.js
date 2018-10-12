(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{228:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"bundle-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundle-size","aria-hidden":"true"}},[t._v("#")]),t._v(" Bundle Size")]),t._v(" "),s("p",[t._v("VeeValidate does a lot of heavy lifting and offers plenty of features, that comes with the cost of a large bundle size, in production vee-validate gzipped would take about 30kb with all of its features intact.")]),t._v(" "),s("p",[t._v("Implementing a custom solution or with a more lightweight library to achieve the same features will also add up to your bundle size. Remember that vee-validate doesn't only validate, but also it generates error messages and offers most of the validation rules you would need out of the box.")]),t._v(" "),s("h2",{attrs:{id:"minimal-bundle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimal-bundle","aria-hidden":"true"}},[t._v("#")]),t._v(" Minimal Bundle")]),t._v(" "),s("p",[t._v("There is a bundle stripped of all validation rules and messages, this bundle is about half the size of the full one. Taking about 15kb gzipped but you would need to pick the rules that you need from the provided rules bundle and also their messages from the localized bundles, here is a small example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" install "),s("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" VeeValidate "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate/dist/vee-validate.minimal.esm.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" required"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate/dist/rules.esm.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" veeEn "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate/dist/locale/en'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Add the rules you need.")]),t._v("\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extend")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'required'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extend")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'min'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extend")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'max'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Merge the messages.")]),t._v("\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("localize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'en'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" veeEn"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// install the plugin")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VeeValidate"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Rules are maintained internally as a singleton object, meaning any rule you add to a validator at any place of your code will be available for all other validator instances throughout your app. Still to avoid side effects it is recommended to add the rules at the entry file of your app.")])]),t._v(" "),s("h2",{attrs:{id:"modular-approach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modular-approach","aria-hidden":"true"}},[t._v("#")]),t._v(" Modular Approach")]),t._v(" "),s("p",[t._v("In the future vee-validate would take a more modular approach, while still featuring the same features, it would offer a modular API for lower bundle sizes. For example vee-validate handles model validation, HTML5 validation and component validation. You might be only interested in model based validation, the idea is to offer such features as validation strategies, similar to passport. So you would only choose the strategies you will use in your app.")]),t._v(" "),s("p",[t._v("But we still haven't decided on the timeline but will be likely introduced in the next major version.")])])}],!1,null,null,null);n.options.__file="bundle-size.md";a.default=n.exports}}]);