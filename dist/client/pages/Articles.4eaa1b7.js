(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{197:function(t,e,r){var content=r(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("1aa592c0",content,!0,{sourceMap:!1})},207:function(t,e,r){"use strict";var n=r(197);r.n(n).a},208:function(t,e,r){(e=r(30)(!1)).push([t.i,".container[data-v-2a426cbe]{margin-top:120px}.row[data-v-2a426cbe],.spinner-border[data-v-2a426cbe]{margin-top:40px}.card[data-v-2a426cbe]{text-align:left;color:#000}",""]),t.exports=e},222:function(t,e,r){"use strict";r.r(e);var n={name:"md-heart-icon",mixins:[r(58).a],data:function(){return{iconTitle:this.title?this.title:"Md Heart Icon"}}},o=r(23),c={components:{HeartIcon:Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ion",class:this.ionClass,attrs:{"data-title":this.iconTitle,"data-name":"md-heart-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:this.w,height:this.h}},[e("path",{attrs:{d:"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"}})])])}),[],!1,null,null,null).exports},data:function(){return{showLoader:!0,showErrALert:!1,tagVariants:["primary","success","warning","info","dark","danger"],blogs:[]}},head:{title:"Blog 📚 - Lydia Rodriguez",meta:[{hid:"description",name:"description",content:"Read articles written by Zumbarita Marimar, articles include topics under Zumba and many more"},{hid:"og:title",name:"og:title",content:"Blog 📚 - Zumbaritas"},{property:"og:description",content:"Read articles written by Zumbarita Marimar, articles include topics under Zumba and many more."}]},methods:{getArticles:function(t,e,r){var n,o=this;fetch("https://zumbaritaslippstadt.wordpress.com/"+t).then((function(t){return t.json()})).then((function(data){data.forEach((function(article){n=1==/(hcti.io)/.test(article.image)?"https://picsum.photos/600/400":article.social_image,o.blogs.push({id:article.id,title:article.title,desc:article.description,image:n,url:article.url,date:article.readable_publish_date,tags:article.tag_list,imgAlt:article.title+" - Lydia Rodriguez"})})),e()})).catch((function(t){r(),console.log("Error fetching articles "+t)}))}},mounted:function(){var t=this;this.getArticles("lydiarodriguez",(function(){t.showLoader=!1}),(function(){t.showErrALert=!0,t.showLoader=!1}))}},l=(r(207),Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"page animate__animated animate__fadeIn"},[r("h2",[t._v("Zumbaritas")]),t._v(" "),r("p",[t._v("\n    Made with\n    "),r("sub",[r("HeartIcon",{staticStyle:{color:"red","font-size":"24px"},attrs:{animate:"beat"}})],1),t._v("\n    in\n    "),r("em",[r("a",{attrs:{href:"https://zumbaritaslippstadt.wordpress.com/",target:"_blank",rel:"noopener"}},[t._v("Lippstadt")])]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t.showErrALert?r("b-alert",{staticStyle:{display:"inline-block"},attrs:{show:"",variant:"danger"}},[t._v("\n      Error loading articles, click\n      "),r("a",{attrs:{href:"https://zumbaritaslippstadt.wordpress.com/2020/08/07/zumba-masterclass-2020/",target:"_blank"}},[t._v("here")]),t._v("\n      to read them.\n    ")]):t._e(),t._v(" "),t.showLoader?r("b-spinner",{attrs:{variant:"primary"}}):t._e()],1),t._v(" "),t.blogs.length>0?r("b-row",{staticClass:"articles"},t._l(t.blogs,(function(e){return r("div",{key:e.id,staticClass:"col-md-6"},[r("div",[r("b-card-group",{attrs:{deck:""}},[r("b-card",{staticClass:"mb-2",attrs:{"img-src":e.image,"img-alt":e.imgAlt,"img-top":"",tag:"article"}},[r("h4",[t._v(t._s(e.title))]),t._v(" "),t._l(e.tags,(function(e){return r("b-badge",{key:e,staticClass:"animate__animated animate__fadeInUp",staticStyle:{margin:"2px"},attrs:{pill:"",variant:t.tagVariants[Math.floor(Math.random()*t.tagVariants.length)]}},[t._v("#"+t._s(e))])})),t._v(" "),r("hr"),t._v(" "),r("b-card-text",[t._v(t._s(e.desc))]),t._v(" "),r("b-button",{attrs:{href:e.url,target:"_blank",rel:"noopener",variant:"default"}},[t._v("Read More..")])],2)],1)],1)])})),0):t._e()],1)}),[],!1,null,"2a426cbe",null));e.default=l.exports}}]);