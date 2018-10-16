!function i(n,c,a){function l(e,t){if(!c[e]){if(!n[e]){var o="function"==typeof require&&require;if(!t&&o)return o(e,!0);if(u)return u(e,!0);var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}var r=c[e]={exports:{}};n[e][0].call(r.exports,function(t){return l(n[e][1][t]||t)},r,r.exports,i,n,c,a)}return c[e].exports}for(var u="function"==typeof require&&require,t=0;t<a.length;t++)l(a[t]);return l}({1:[function(t,e,o){!function(){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{el:"div",iconEmpty:{type:"check",back:"theme-empty"},icon:{type:"refresh",back:"theme-process"},processing:!1,completed:[],failed:[],errorMessage:String}},props:{message:String,messageEmpty:String,files:Array},computed:{count:function(){var t=this.files.length;return t=Object.is(t,void 0)?0:t,t},completedCount:function(){var t=this.completed.length;return t=Object.is(t,void 0)?0:t},imageString:function(){return 1==this.count?"image":"images"},isString:function(){return 1==this.count?"is":"are"},itString:function(){return 1==this.count?"it":"them"}},methods:{processImages:function(){var s=this;this.resetArrays(),this.processing=!0,this.files.forEach(function(o,t){console.log(t),s.$api.post("colorextractor/process-image",{id:o.id,index:t}).then(function(t){if(console.log(t),s.completed.push(o.name),s.completedCount==s.count)if(s.failed.length)s.failedExtraction();else{var e=s;setTimeout(function(){e.completedExtraction()},250)}s.setProgress()}).catch(function(t){s.completed.push(o.name),s.failed.push({name:o.filename,message:t.message}),s.completedCount==s.count&&s.failedExtraction(),s.setProgress()})})},setProgress:function(){var t=this.completedCount/this.count*100;t=Math.max(0,Math.min(100,t)),this.$refs.progress.set(t)},completedExtraction:function(){var t=this.completedCount+" images processed!";this.$refs.dialog.close(),this.$store.dispatch("notification/success",t),this.processing=!1,this.currentIndex=0,this.files={}},failedExtraction:function(){var t=this,e=1<this.failed.length?" errors.":" error.",o=this.completedCount+" images processed, with "+this.failed.length+e;this.errorMessage=o,this.processing=!1,this.currentIndex=0,this.files=this.files.filter(function(e){return t.failed.filter(function(t){return t.name===e.filename}).length})},openDialog:function(){this.resetArrays(),this.$refs.dialog.open()},abortExtraction:function(){this.$refs.dialog.close(),this.processing=!1},resetArrays:function(){this.completed=[],this.failed=[]}}}}(),e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options:e.exports;s.render=function(){var o=this,t=o.$createElement,s=o._self._c||t;return s("k-field",o._b({},"k-field",o.$attrs,!1),[0==o.count?s("k-list-item",{staticClass:"colorextractor-empty",attrs:{text:o.messageEmpty,icon:o.iconEmpty,element:o.el}}):s("k-list-item",{staticClass:"colorextractor-button",attrs:{text:o.message,icon:o.icon,element:o.el},on:{click:o.openDialog}}),o._v(" "),s("k-dialog",{ref:"dialog",attrs:{theme:"negative"}},[o.processing||o.completedCount?!o.processing&&o.failed.length?[s("k-text",[o._v("\n\t    \t\t\t"+o._s(o.errorMessage)+"\n\t    \t\t")]),o._v(" "),s("ul",{staticClass:"colorextractor-errors"},o._l(o.failed,function(t,e){return s("li",{staticClass:"error"},[s("strong",[o._v("Filename:")]),o._v(" "+o._s(t.name)+"\n\t    \t\t\t\t"),s("div",{staticClass:"error-message"},[o._v(o._s(t.message))])])})),o._v(" "),s("template",{slot:"footer"},[s("k-button-group",[s("k-button",{attrs:{icon:"cancel"},on:{click:function(t){o.$refs.dialog.close()}}},[o._v("Close")])],1)],1)]:o.processing?[s("k-headline",[o._v("Processing…")]),o._v(" "),s("k-progress",{ref:"progress"}),o._v(" "),s("ul",{staticClass:"k-upload-list"},[s("div",{staticClass:"colorextractor-progress-caption"},[s("p",{staticClass:"k-colextractor-counter"},[o._v("Extracted: "+o._s(o.completedCount)+" / "+o._s(o.count))])])]),o._v(" "),s("template",{slot:"footer"},[s("k-button-group",[s("k-button",{attrs:{icon:"cancel"},on:{click:o.abortExtraction}},[o._v("Cancel")])],1)],1)]:o._e():[s("k-text",[o._v("\n\t    \t\t\tThere "+o._s(o.isString)+" "),s("strong",[o._v(o._s(o.count)+" "+o._s(o.imageString))]),o._v(" without any color extracted, do you want to process "+o._s(o.itString)+" now?\n\t    \t\t")]),o._v(" "),s("template",{slot:"footer"},[s("k-button-group",[s("k-button",{attrs:{icon:"cancel"},on:{click:function(t){o.$refs.dialog.close()}}},[o._v("Cancel")]),o._v(" "),s("k-button",{attrs:{icon:"check",theme:"positive"},on:{click:o.processImages}},[o._v("Process")])],1)],1)]],2)],1)},s.staticRenderFns=[]},{}],2:[function(t,e,o){"use strict";var s,r=t(1),i=(s=r)&&s.__esModule?s:{default:s};panel.plugin("sylvainjule/colorextractor",{fields:{colorextractor:i.default}})},{1:1}]},{},[2]);
