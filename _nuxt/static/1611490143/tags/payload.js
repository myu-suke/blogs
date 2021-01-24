__NUXT_JSONP__("/tags", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az){return {data:[{posts:[{slug:"20210107",description:"nuxt.jsとcontentを使用してblog作成",title:"技術メモ投稿環境構築",date:"2021.1.7",tags:[K,U],toc:[{id:L,depth:E,text:L},{id:M,depth:N,text:M}],body:{type:F,children:[{type:b,tag:G,props:{id:L},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:L}]},{type:a,value:f},{type:b,tag:O,props:{id:M},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#%E6%8A%80%E8%A1%93%E3%83%A1%E3%83%A2%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%9F%E3%81%84",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:M}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"自分のスキルセット的に "},{type:b,tag:g,props:{},children:[{type:a,value:V}]},{type:a,value:" を使用していたので，簡易につくる為に"},{type:b,tag:g,props:{},children:[{type:a,value:"Vuepress"}]},{type:a,value:"が浮かびました．\r\nただ同じレイアウトになるのもあれなので "},{type:b,tag:g,props:{},children:[{type:a,value:"nuxt.js"}]},{type:a,value:"と"},{type:b,tag:g,props:{},children:[{type:a,value:"nuxt-content"}]},{type:a,value:"で"}]}]},dir:H,path:"\u002Fposts\u002F20210107",extension:I,createdAt:o,updatedAt:o},{slug:"20210108",description:"コンテンツが少ない場合にfooterを下部に固定する",title:"footerの固定",date:"2021.1.8",tags:[K,U],toc:[{id:P,depth:E,text:P}],body:{type:F,children:[{type:b,tag:G,props:{id:P},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%8C%E5%B0%91%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%82%92%E4%B8%8B%E9%83%A8%E3%81%AB%E5%9B%BA%E5%AE%9A",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:P}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"height:100vh"}]},{type:a,value:"とかやってたけど，\r\n微妙にスクロールバーが表示されるケースが多い"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"結論，下が確実"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[Q,x]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"body {\n  display: flex;\n  flex-flow: column;\n  min-height: 100vh;\n}\n.content {\n  flex: 1 1 0%;\n}\n"}]}]}]}]},dir:H,path:"\u002Fposts\u002F20210108",extension:I,createdAt:o,updatedAt:o},{slug:"20210120",description:"runtimeCaching設定",title:"PWA runtimeCachingメモ",date:"2021.1.20",tags:[K,$,aa],toc:[{id:ab,depth:E,text:ac}],body:{type:F,children:[{type:b,tag:G,props:{id:ab},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#networkfirst%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E8%BF%BD%E5%8A%A0",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:ac}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[Q,x]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"runtimeCaching: [\n  {\n    urlPattern: '\u002Fblogs\u002Fposts\u002F.*',\n    handler: 'NetworkFirst',\n    method: 'GET',\n    strategyOptions: {\n      cacheExpiration: {\n        maxAgeSeconds: 60 * 60 * 24,\n      },\n      cacheableResponse: {\n        statuses: [200],\n      },\n    },\n  },\n],\n"}]}]}]}]},dir:H,path:"\u002Fposts\u002F20210120",extension:I,createdAt:o,updatedAt:o},{slug:"20210124",description:ad,title:ad,date:"2021.1.24",tags:[ae,R],toc:[{id:af,depth:E,text:R}],body:{type:F,children:[{type:b,tag:G,props:{id:af},children:[{type:b,tag:j,props:{href:"#tolocalestring",ariaHidden:k,tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:R}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"金額のフォーマット時に仕様"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Number.prototype.toLocaleString()"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"単位の付与"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[Q,x]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })\n"}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"小数点以下の丸め"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[Q,x]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"number.toLocaleString('ja-JP', { maximumFractionDigits: 2 })\n"}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fcaniuse.com\u002Fmdn-javascript_builtins_number_tolocalestring",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"全ブラ対応！！"}]}]}]},dir:H,path:"\u002Fposts\u002F20210124",extension:I,createdAt:o,updatedAt:o},{slug:"20210125",description:"Vue3.0基本機能",title:"Vue3.0メモ",date:"2021.1.25",tags:[V],toc:[{id:ag,depth:E,text:ah},{id:ai,depth:N,text:aj},{id:S,depth:N,text:S},{id:T,depth:N,text:ak}],body:{type:F,children:[{type:b,tag:G,props:{id:ag},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#vuejs-30",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:ah}]},{type:a,value:f},{type:b,tag:O,props:{id:ai},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#composition-api",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:aj}]},{type:a,value:f},{type:b,tag:al,props:{},children:[{type:a,value:f},{type:b,tag:W,props:{},children:[{type:a,value:"Setup関数を使用"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,X]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,i,A]},children:[{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,A]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i,Y]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F templateで使用する情報"}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F 変数 or function"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"h4",props:{id:aq},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#reactive%E3%81%A8computed",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:aq}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,X]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002Fscriptタグ内に記載"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,A]},children:[{type:a,value:"import"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:as}]},{type:a,value:" computed"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,A]},children:[{type:a,value:"from"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"\"vue\""}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,i,A]},children:[{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,A]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F Vue2のdata的な"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:au}]},{type:a,value:" hoge "},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:_}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"huga"},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F "}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:au}]},{type:a,value:" computedhoge "},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:_}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"computed"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"arrow",z]},children:[{type:a,value:"=\u003E"}]},{type:a,value:" hoge"},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"*"}]},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:"2"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,i,Y]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n      hoge"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:as}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F 1"}]},{type:a,value:"\n      computedhoge "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F 2"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:O,props:{id:S},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#emit%E5%AE%9A%E7%BE%A9",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:S}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"Vue3.0からはemitを定義として記載し，このコンポーネントからのイベントを一括で確認できるようになっている"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,X]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"emit"},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:av}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"click"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"val"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F 型や文字数等のチェックが可能"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i,Y]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"typeof"}]},{type:a,value:" val "},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"==="}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"\"string\""}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:O,props:{id:T},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#teleport",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:ak}]},{type:a,value:f},{type:b,tag:al,props:{},children:[{type:a,value:f},{type:b,tag:W,props:{},children:[{type:a,value:"teleportタグにtergetを指定しておく事で，このコンポーネントが描画されたときに指定したtargetに要素を描画する事ができる．"}]},{type:a,value:f},{type:b,tag:W,props:{},children:[{type:a,value:"モーダルとしての利用や，特定のメニューボタン等"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,"language-html"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"target"}]},{type:b,tag:c,props:{className:[d,"attr-value"]},children:[{type:b,tag:c,props:{className:[d,e,"attr-equals"]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ay}]},{type:a,value:"selector"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ay}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:az}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u003C!-- id or class or tagname --\u003E"}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:a,value:"hogeToSelector"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:az}]}]},{type:a,value:f}]}]}]}]},dir:H,path:"\u002Fposts\u002F20210125",extension:I,createdAt:o,updatedAt:o}],tags:[V,U,ae,K,$,aa,R]}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","\n","code"," ","keyword","a","true",-1,"icon","icon-link","2021-01-24T12:08:00.826Z","{","}","p","\n    ","comment","div","nuxt-content-highlight","pre","line-numbers","\n  ","operator","module","(",")","tag",2,"root","h2","\u002Fposts",".md","function","nuxt","はじめに","技術メモを作りたい",3,"h3","コンテンツが少ない場合にコンテンツを下部に固定","language-text","toLocaleString","emit定義","teleport","content","Vue.js","li","language-javascript","control-flow","return","=","pwa","runtimeCaching","networkfirstの設定を追加","NetworkFirstの設定を追加","toLocaleStringメモ","javascript","tolocalestring","vuejs-30","Vue.js 3.0","composition-api","Composition API","Teleport","ul","export","default","setup","\n      ","reactiveとcomputed","reactive",",","string","const",":","number","\u003C","\"","\u003E")));