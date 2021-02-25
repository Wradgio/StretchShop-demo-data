(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07b5b9fe"],{"27ed":function(t,s,i){},6804:function(t,s,i){"use strict";i("27ed")},e372:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"userSubscriptionDetail"}},[t.subscription?i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"columns is-variable is-centered"},[i("div",{staticClass:"column is-8"},[i("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[i("ul",[i("li",[i("router-link",{attrs:{to:{name:"userSubscriptions"}}},[i("span",{attrs:{translate:"yes"}},[t._v("Subscriptions")])])],1),i("li",{staticClass:"is-active"},[i("a",{attrs:{"aria-current":"page"}},[i("span",{staticClass:"subscription-word",attrs:{id:"subscription-breadcrumb",translate:"yes"}},[t._v(" Subscription ")]),t._v(" "),i("span",{staticClass:"subscription-title"},[t._v(" #"),i("strong",[t._v(t._s(t.splitTitle(t.subscription._id)[0]))]),t._v(t._s(t.splitTitle(t.subscription._id)[1])+" ")])])])])])])])]),i("h2",{staticClass:"title is-2"},[i("span",{staticClass:"is-size-3",attrs:{id:"subscription-detail-title",translate:"yes"}},[t._v("Subscription")]),t._v(" "),i("br"),i("strong",{staticClass:"subscription-title"},[t._v(t._s(t.subscription.orderItemName))])]),i("div",{staticClass:"container subscription-detail-data"},[i("div",{staticClass:"columns is-variable is-centered"},[i("div",{staticClass:"column is-8"},[i("div",{staticClass:"columns is-variable is-centered"},[i("div",{staticClass:"column is-6"},[t.subscription.history?i("div",[i("h4",{staticClass:"title is-4",attrs:{translate:"yes"}},[t._v("History")]),i("ol",t._l(t.$helpers.reverseArrayItems(t.subscription.history),(function(s,e){return i("li",{key:e},[i("div",{staticClass:"is-size-7"},[t._v(t._s(s.date))]),i("div",[i("div",[i("strong",[t._v(t._s(s.action))])]),s.relatedOrder?i("div",[i("span",{attrs:{translate:"yes"}},[t._v("Related order")]),t._v(": "),i("router-link",{attrs:{to:{name:"userOrderDetail",params:{id:s.relatedOrder}}}},[t._v(" "+t._s(s.relatedOrder)+" ")])],1):t._e()])])})),0)]):t._e()]),i("div",{staticClass:"column is-6"},[i("h4",{staticClass:"title is-4",attrs:{translate:"yes"}},[t._v("Main info")]),i("div",{staticClass:"info info-settings"},[i("ul",[i("li",[i("span",{attrs:{translate:"yes"}},[t._v("Status")]),i("strong",{class:t.statusClass(t.subscription.status)},[t._v(t._s(t.subscription.status))])]),i("li",[i("span",{attrs:{translate:"yes"}},[t._v("Price & Period")]),i("strong",[t._v(t._s(t.subscription.price)+" / "+t._s(t.subscription.duration)+" "+t._s(t.subscription.period))])]),i("li",[i("span",{attrs:{translate:"yes"}},[t._v("Cycles")]),i("strong",[t.subscription.cycles<=0?i("span",{attrs:{translate:"yes"}},[t._v("Infinity")]):i("span",[t._v(t._s(t.subscription.cycles))])])])])]),i("div",{staticClass:"info info-dates"},[i("ul",[t.subscription&&t.subscription.dates&&t.subscription.dates.dateOrderNext?i("li",[i("span",{attrs:{translate:"yes"}},[t._v("Next payment")]),i("strong",[t._v(t._s(t.splitDate(t.subscription.dates.dateOrderNext)[0]))]),i("span",{staticClass:"is-size-7"},[t._v(t._s(t.splitDate(t.subscription.dates.dateOrderNext)[1]))])]):t._e(),t.subscription&&t.subscription.dates&&t.subscription.dates.dateEnd?i("li",[i("span",{attrs:{translate:"yes"}},[t._v("Last payment")]),i("strong",[t._v(t._s(t.splitDate(t.subscription.dates.dateEnd)[0]))]),i("span",{staticClass:"is-size-7"},[t._v(t._s(t.splitDate(t.subscription.dates.dateEnd)[1]))])]):t._e(),t.subscription&&t.subscription.dates&&t.subscription.dates.dateCreated?i("li",[i("span",{attrs:{translate:"yes"}},[t._v("Created")]),i("strong",[t._v(t._s(t.splitDate(t.subscription.dates.dateCreated)[0]))]),i("span",{staticClass:"is-size-7"},[t._v(t._s(t.splitDate(t.subscription.dates.dateCreated)[1]))])]):t._e(),t.subscription&&t.subscription.dates&&t.subscription.dates.dateStart?i("li",[i("span",{attrs:{translate:"yes"}},[t._v("Started")]),i("strong",[t._v(t._s(t.splitDate(t.subscription.dates.dateStart)[0]))]),i("span",{staticClass:"is-size-7"},[t._v(t._s(t.splitDate(t.subscription.dates.dateStart)[1]))])]):t._e()])]),i("div",{staticClass:"info info-more"},[i("ul",[i("li",[i("span",{attrs:{translate:"yes"}},[t._v("Original order")]),i("strong",[i("router-link",{attrs:{to:{name:"userOrderDetail",params:{id:t.subscription.orderOriginId}}}},[t._v(" "+t._s(t.subscription.orderOriginId)+" ")])],1)]),t.subscription&&t.subscription.status?i("li",[i("h4",{staticClass:"title is-5",attrs:{translate:"yes"}},[t._v("Available Actions")]),"suspended"===t.subscription.status?i("div",[i("button",{staticClass:"button",attrs:{translate:"yes"},on:{click:function(s){return t.actionsActivate()}}},[t._v("Re-activate")]),i("p",{staticClass:"is-size-7\thas-text-grey-dark"},[t._v(" Makes your subscription active again with related payment applying. You receive e-mail when your subscription and related services are re-activated. ")])]):t._e()]):t._e(),t.userIsAdmin?i("li",[i("span",{attrs:{translate:"yes"}},[t._v("Admin Actions")]),i("div",[i("button",{staticClass:"button",attrs:{translate:"yes"},on:{click:function(s){return t.actionsPaid()}}},[t._v("Cycle Paid")]),i("p",{staticClass:"is-size-7\thas-text-grey-dark",attrs:{translate:"yes"}},[t._v(" Mark next cycle as paid. For cases when payment system failed but customer paid other way. ")])]),"active"===t.subscription.status?i("div",[i("button",{staticClass:"button",attrs:{translate:"yes"},on:{click:function(s){return t.actionsSuspend()}}},[t._v("Suspend")]),i("p",{staticClass:"is-size-7\thas-text-grey-dark",attrs:{translate:"yes"}},[t._v(" Suspends subscription and its payment. You receive e-mail when your subscription and related services are paused. ")])]):t._e()]):t._e()])])])])])])])]):i("div",{staticClass:"container"},[i("div",{staticClass:"columns is-variable is-centered"},[i("div",{staticClass:"column is-8"},[i("h1",{staticClass:"title is-1",attrs:{translate:"yes"}},[t._v("Unauthorized")]),i("p",[i("span",{attrs:{translate:"yes"}},[t._v("To see order detail, you may need to")]),t._v(" "),i("router-link",{attrs:{to:{name:"login"},tag:"a","active-class":"is-active",translate:"yes"}},[t._v("Log in")]),t._v(". ")],1)])])])])},a=[],r=(i("28a5"),i("56d7")),n={name:"userSubscriptionDetail",data:function(){return{subscription:null}},created:function(){this.getSubscription(this.$route.params.id)},computed:{userIsAdmin:function(){return!!(this.$store.state&&this.$store.state.user&&this.$store.state.user.logged&&this.$store.state.user.profile&&this.$store.state.user.profile.type&&"admin"==this.$store.state.user.profile.type)}},methods:{getSubscription:function(t){var s=this,i={timeout:3e3,needsAuth:!0},e={query:{_id:t},limit:1};this.$httpc.post("subscription/list",e,i).then((function(t){t&&t.data&&t.data&&t.data.results&&1==t.data.results.length&&(s.subscription=t.data.results[0])})).catch((function(t){console.log(t)})).then((function(){r["eventBus"].$emit("translateContent",s.$store.getters.getTranslates)}))},splitTitle:function(t){return[t.slice(0,6),t.slice(6)]},splitDate:function(t){return t.split("T")},actionsSuspend:function(){var t=this;t.$httpc.get("/subscription/suspend/"+t.subscription._id,{timeout:1e4}).then((function(t){console.log("subscription/suspend response:",t)}))},actionsActivate:function(){var t=this;t.$httpc.get("/subscription/reactivate/"+t.subscription._id,{timeout:1e4}).then((function(t){console.log("subscription/activate response:",t)}))},actionsPaid:function(){var t=this;t.$httpc.get("/order/payment/paypal/adminsubscriptionpaid?paymentId="+t.subscription.data.agreementId+"&ba_token=run_by_admin",{timeout:1e4}).then((function(t){console.log("cycle paid response:",t),window.location.reload()}))},statusClass:function(t){return"active"==t?"has-text-success":"suspended"==t?"has-text-danger":""}}},o=n,c=(i("6804"),i("2877")),l=Object(c["a"])(o,e,a,!1,null,"c30611f6",null);s["default"]=l.exports}}]);