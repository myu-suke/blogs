(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(t,e,n){"use strict";n.r(e);n(22);var r=n(3),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("posts").sortBy("createdAt","desc");case 3:return r=e.sent,e.next=6,r.fetch();case 6:return l=e.sent,e.abrupt("return",{posts:l});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"記事一覧 | あることないこと",meta:[{hid:"description",name:"description",content:"技術メモや思ったことを記憶しておくブログ，記事一覧"},{hid:"title",name:"title",content:"あることないこと"}]}}},c=n(24),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-gray-600 body-font"},[n("div",{staticClass:"container px-5 py-24 mx-auto"},[t._m(0),t._v(" "),n("div",{staticClass:"flex flex-wrap -m-4"},[t._l(t.posts,(function(e){return[n("div",{key:e.slug,staticClass:"lg:w-1/3 sm:w-1/2 p-4"},[n("router-link",{attrs:{to:"/posts/"+e.slug}},[n("div",{staticClass:"flex relative"},[n("div",{staticClass:"px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white"},[n("h2",{staticClass:"tracking-widest text-sm title-font font-medium text-green-600 mb-1"},[t._v("\n                  "+t._s(e.date)+"\n                ")]),t._v(" "),n("h1",{staticClass:"title-font text-lg font-medium text-gray-900 mb-3"},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("p",{staticClass:"leading-relaxed"},[t._v("\n                  "+t._s(e.description)+"\n                ")])])])])],1)]}))],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col text-center w-full mb-20"},[e("h1",{staticClass:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"},[this._v("\n        記事一覧\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);