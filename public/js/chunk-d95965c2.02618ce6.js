(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d95965c2"],{"0d41":function(t,s,e){"use strict";e("dbb1")},"836a":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"userOrderDetail"}},[t.order?e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-variable is-centered"},[e("div",{staticClass:"column is-8"},[e("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[e("ul",[e("li",[e("router-link",{attrs:{to:{name:"userOrders"}}},[e("span",{attrs:{translate:"yes"}},[t._v("Orders")])])],1),e("li",{staticClass:"is-active"},[e("a",{attrs:{"aria-current":"page"}},[e("span",{staticClass:"order-word",attrs:{translate:"yes"}},[t._v("Order")]),t._v(" "),e("span",{staticClass:"order-title"},[t._v("#"),e("strong",[t._v(t._s(t.splitTitle(t.order._id)[0]))]),t._v(t._s(t.splitTitle(t.order._id)[1]))])])])])])])])]),e("h2",{staticClass:"title is-2"},[e("span",{attrs:{translate:"yes"}},[t._v("Order")]),e("span",{staticClass:"order-title"},[t._v(" #"),e("strong",[t._v(t._s(t.splitTitle(t.order._id)[0]))]),t._v(t._s(t.splitTitle(t.order._id)[1])+" ")])]),e("div",{staticClass:"container"},[t.order.dates?e("div",{staticClass:"columns is-variable is-centered orderProgressVisual"},[e("div",{staticClass:"column is-8"},[e("div",{staticClass:"b-steps"},[e("nav",{staticClass:"steps is-rounded"},[e("ul",{staticClass:"step-items"},[e("li",{class:t.order.dates.dateCreated?"step-item is-previous":"step-item"},[e("a",{staticClass:"step-link"},[e("div",{staticClass:"step-marker"}),e("div",{staticClass:"step-details"},[e("span",{staticClass:"step-title"},[e("span",{attrs:{translate:"yes"}},[t._v("Created")]),e("span",{staticClass:"step-date"},[t._v(t._s(t.order.dates.dateCreated))])])])])]),e("li",{class:t.order.dates.datePaid?"step-item is-previous":"step-item"},[e("a",{staticClass:"step-link"},[e("div",{staticClass:"step-marker"}),e("div",{staticClass:"step-details"},[e("span",{staticClass:"step-title"},[e("span",{attrs:{translate:"yes"}},[t._v("Paid")]),e("span",{staticClass:"step-date"},[t._v(t._s(t.order.dates.datePaid))])])])])]),e("li",{class:t.order.dates.dateExpeded?"step-item is-previous":"step-item"},[e("a",{staticClass:"step-link"},[e("div",{staticClass:"step-marker"}),e("div",{staticClass:"step-details"},[e("span",{staticClass:"step-title"},[e("span",{attrs:{translate:"yes"}},[t._v("Expeded")]),e("span",{staticClass:"step-date"},[t._v(t._s(t.order.dates.dateExpeded))])])])])])])])])])]):t._e()]),e("div",{staticClass:"container order-detail-data"},[e("div",{staticClass:"columns is-variable"},[e("div",{staticClass:"column is-12"},[t.checkActions()?e("span",[e("span",{attrs:{translate:"yes"}},[t._v("Your available actions")]),t._v(": "),t.needsPayment("online_paypal_paypal")?e("div",[t.order.dates&&!t.order.dates.datePaid?e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.makePayment()}}},[e("span",{attrs:{translate:"yes"}},[t._v("Pay order")])]):t._e()]):t._e()]):t._e(),t.subscription.total?e("div",{class:t.subscriptionClass},[e("span",{attrs:{id:"user-order-detail--subscription",translate:"yes"}},[t._v("Subscriptions Approved")]),t._v(" "+t._s(t.subscription.count)+" / "+t._s(t.subscription.total)+" "),t.subscription.count<t.subscription.total?e("div",[t._m(0),e("button",{staticClass:"button is-danger",attrs:{type:"button"},on:{click:function(s){return t.makePayment()}}},[e("span",{attrs:{translate:"yes"}},[t._v("Approve Subscription")])])]):e("div",[t._m(1)])]):t._e()])])]),e("div",{staticClass:"container order-detail-data"},[e("div",{staticClass:"columns is-variable"},[e("div",{staticClass:"column is-6"},[null!=t.order.items&&t.order.items&&t.order.items.length>0?e("div",[e("div",{staticClass:"columns is-variable"},[e("div",{staticClass:"column is-12"},[e("div",{staticClass:"b-table"},[e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"table is-hoverable is-striped is-fullwidth"},[t._m(2),e("tbody",t._l(t.order.items,(function(s,a){return e("tr",{key:a},[e("th",["product"!==s.type?e("span",{staticClass:"desc"},[t._v(" "+t._s(s.type)+" "),"subscription"===s.type?e("span",[e("router-link",{attrs:{to:{name:"userSubscriptionDetail",params:{id:t.productToSubscription[s._id]}}}},[t._v(" "+t._s(t.productToSubscription[s._id])+" ")])],1):t._e()]):t._e(),t._v(" "+t._s(s.name[t.$store.state.language.code])+" ")]),e("td",{staticClass:"cartItemAmount has-text-right"},[t._v(" "+t._s(s.amount)+" ")]),e("td",{staticClass:"has-text-right"},[e("span",[t._v(t._s(t.$store.state.numeral(s.price).format("0.00")))]),e("span",[t._v(t._s(t.$store.state.currency.symbol))]),"product"!==s.type&&s.data&&s.data.subscription&&s.data.subscription.period?e("span",{staticClass:"desc"},[t._v(" / "+t._s(s.data.subscription.period)+" ")]):t._e()])])})),0),e("tfoot",[t.order.prices&&t.order.prices.priceItems?e("tr",[e("td"),t._m(3),e("td",{staticClass:"has-text-right"},[t._v(" "+t._s(t.$store.state.numeral(t.order.prices.priceItems).format("0.00"))+" "+t._s(t.$store.state.currency.symbol)+" ")])]):t._e(),t.order.prices&&t.order.prices.priceDelivery?e("tr",[e("td"),t._m(4),e("td",{staticClass:"has-text-right"},[t._v(" "+t._s(t.$store.state.numeral(t.order.prices.priceDelivery).format("0.00"))+" "+t._s(t.$store.state.currency.symbol)+" ")])]):t._e(),t.order.prices&&t.order.prices.pricePayment?e("tr",[e("td"),t._m(5),e("td",{staticClass:"has-text-right"},[t._v(" "+t._s(t.$store.state.numeral(t.order.prices.pricePayment).format("0.00"))+" "+t._s(t.$store.state.currency.symbol)+" ")])]):t._e(),t.order.prices&&t.order.prices.priceTotal?e("tr",[e("td"),t._m(6),e("td",{staticClass:"has-text-right"},[e("strong",[t._v(t._s(t.$store.state.numeral(t.order.prices.priceTotal).format("0.00")))]),t._v(" "+t._s(t.$store.state.currency.symbol)+" ")])]):t._e()])])])])])])]):e("div",[t._m(7)])]),e("div",{staticClass:"column is-6"},[e("div",{staticClass:"columns is-variable is-2"},[e("div",{staticClass:"column is-6"},[e("h3",{staticClass:"title is-5",attrs:{translate:"yes"}},[t._v("You are ordering to:")]),e("div",{staticClass:"summary-block with-pre-whitespace"},[t._v(t._s(t.invoiceAddress()))])]),t.checkDeliveryAddress()?e("div",{staticClass:"column is-6"},[e("h3",{staticClass:"title is-5",attrs:{translate:"yes"}},[t._v("With delivery to:")]),e("div",{staticClass:"summary-block with-pre-whitespace"},[t._v(t._s(t.deliveryAddress()))])]):e("div",{staticClass:"column is-6"},[e("h3",{staticClass:"title is-5",attrs:{translate:"yes"}},[t._v("With delivery to:")]),e("div",{staticClass:"summary-block",attrs:{translate:"yes"}},[t._v("same as invoice address")])])]),e("div",{staticClass:"columns is-variable is-2"},[e("div",{staticClass:"column is-6",attrs:{id:"order-detail--delivery-settings"}},[e("h3",{staticClass:"title is-5",attrs:{translate:"yes"}},[t._v("Your Delivery settings:")]),t.checkDeliveryData()?e("div",{staticClass:"content summary-block"},t._l(t.deliveryData(),(function(s,a){return e("div",{key:a},[e("p",[e("span",{staticClass:"capitalize"},[t._v(t._s(s.type))]),t._v(" - "),e("strong",[t._v(t._s(s.name))]),t._v(": "+t._s(t.$store.state.numeral(s.price).format("0.00"))+" "+t._s(t.$store.state.currency.symbol)+" ")])])})),0):t._e()]),t.checkPaymentData()?e("div",{staticClass:"column is-6"},[e("div",{attrs:{id:"order-detail--payment-settings"}},[e("h3",{staticClass:"title is-5",attrs:{translate:"yes"}},[t._v("Your Payment settings:")]),t.paymentData()?e("div",{staticClass:"content summary-block"},[e("p",[e("strong",[t._v(t._s(t.paymentData().name))]),t._v(": "+t._s(t.$store.state.numeral(t.paymentData().price).format("0.00"))+" "+t._s(t.$store.state.currency.symbol))])]):t._e()])]):t._e()])])])]),e("p",[t._v("Having issue with your order? Don't hesitate to contact us")]),e("hr"),e("div",[e("div",{staticClass:"columns is-variable"},[t.userIsAdmin?e("div",{staticClass:"column is-12"},[t._v(" Admin action: "),e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.invoiceGenerate()}}},[t._v("Generate Invoice")]),e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.orderCancel()}}},[t._v("Cancel Order")])]):t._e()])]),t.order&&t.order.invoice?e("div",{staticClass:"container order-invoice-detail"},[e("h3",{staticClass:"title is-2 is-centered",attrs:{translate:"yes"}},[t._v("Your Invoice")]),e("div",{staticClass:"columns is-variable"},[e("div",{staticClass:"column is-12"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.invoiceDownload()}}},[t._v("Download Invoice")])])]),e("div",{staticClass:"columns is-variable is-centered"},[t.order&&t.order.invoice&&t.order.invoice.html?e("div",{staticClass:"column is-8"},[e("div",{staticClass:"order-invoice-body",domProps:{innerHTML:t._s(t.order.invoice.html)}})]):t._e()])]):t._e()]):e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-variable is-centered"},[e("div",{staticClass:"column is-8"},[e("h1",{staticClass:"title is-1",attrs:{translate:"yes"}},[t._v("Unauthorized")]),e("p",[e("span",{attrs:{translate:"yes"}},[t._v("To see order detail, you may need to")]),t._v(" "),e("router-link",{attrs:{to:{name:"login"},tag:"a","active-class":"is-active",translate:"yes"}},[t._v("Log in")]),t._v(". ")],1),t._m(8)])])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"is-size-7"},[e("p",[t._v("Not all subscriptions are approved. Your order is not finished until all subscriptions are approved.")]),e("p",[t._v("Waiting to redirect you to payment gate to Approve next missing Subscriptions. If nothing happens, click the button bellow.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"is-size-7"},[e("p",[t._v("All subscriptions are approved, we are preparing to finish your order.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{},[e("div",{staticClass:"th-wrap",attrs:{translate:"yes"}},[t._v("Name")])]),e("th",{},[e("div",{staticClass:"th-wrap is-pulled-right",attrs:{translate:"yes"}},[t._v("Qty")])]),e("th",{},[e("div",{staticClass:"th-wrap is-pulled-right",attrs:{translate:"yes"}},[t._v("Price")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",{staticClass:"has-text-right"},[e("strong",{attrs:{translate:"yes"}},[t._v("Products Total")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",{staticClass:"has-text-right"},[e("span",{attrs:{translate:"yes"}},[t._v("Price delivery")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",{staticClass:"has-text-right"},[e("span",{attrs:{translate:"yes"}},[t._v("Price payment")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",{staticClass:"has-text-right"},[e("strong",{attrs:{translate:"yes"}},[t._v("Total price")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h3",{staticClass:"title is-3"},[e("span",{attrs:{translate:"yes"}},[t._v("No items in this order")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{attrs:{translate:"yes"}},[t._v(" If you ordered without registration, "),e("br"),t._v(" you may need to check your email for activation message first. ")])}],i=(e("28a5"),e("7f7f"),e("456d"),e("ac6a"),e("56d7")),n={name:"userOrderDetail",data:function(){return{order:null,subscription:{needToApprove:!1,count:0,total:0},productToSubscription:{}}},created:function(){this.getOrder(this.$route.params.id)},computed:{userIsAdmin:function(){return!!(this.$store.state&&this.$store.state.user&&this.$store.state.user.logged&&this.$store.state.user.profile&&this.$store.state.user.profile.type&&"admin"==this.$store.state.user.profile.type)},subscriptionClass:function(){return!this.subscription||this.subscription.total>0&&this.subscription.count<this.subscription.total?"has-text-danger":"has-text-success"}},methods:{getOrder:function(t){var s=this,e={timeout:3e3,needsAuth:!0},a={query:{_id:t},limit:1};this.$httpc.post("order/list",a,e).then((function(t){t&&t.data&&t.data&&t.data.results&&1==t.data.results.length&&(s.order=t.data.results[0])})).then((function(){i["eventBus"].$emit("translateContent",s.$store.getters.getTranslates),s.order&&s.order.data&&s.order.data.subscription&&s.order.data.subscription&&s.order.data.subscription.ids&&s.order.data.subscription.ids.length>0&&(console.log("let's check the subscriptions"),s.order.data.subscription.ids.forEach((function(t){t&&t.subscription&&(s.subscription.total++,t.agreed&&null!=t.agreed?(s.subscription.count++,s.productToSubscription[t.product]=t.subscription):s.subscription.needToApprove=!0)}))),s.subscription.needToApprove&&s.paymentPayPalCall()})).catch((function(t){console.log(t)}))},splitTitle:function(t){return[t.slice(0,6),t.slice(6)]},checkDeliveryAddress:function(){return!!(this.order&&this.order.addresses&&this.order.addresses.deliveryAddress&&Object.keys(this.order.addresses.deliveryAddress).length>0)},invoiceAddress:function(){if(this.$store.state.coredata)return this.$helpers.addressToString(this.order.addresses.invoiceAddress,this.$store.state.coredata.countries,["type"])},deliveryAddress:function(){return this.order.addresses.deliveryAddress?this.$helpers.addressToString(this.order.addresses.deliveryAddress,this.$store.state.coredata.countries,["type"]):null},checkDeliveryData:function(){return!!(this.order&&this.order.data.deliveryData&&this.order.data.deliveryData.codename)},deliveryData:function(){var t=this,s=[];if(this.order&&this.order.data.deliveryData&&this.order.data.deliveryData.codename){var e=this.order.data.deliveryData.codename;if(this.order.settings&&this.order.settings.deliveryMethods){var a=this.order.settings.deliveryMethods;Object.keys(e).forEach((function(r){if(e&&a&&e[r]&&null!=e[r]){var i=e[r];i["type"]=r,i["name"]=i.value,a[r]&&a[r].forEach((function(s){s.type&&s.codename&&s.type==r&&s.codename==i["value"]&&(i["name"]=s.name[t.$store.getters.getLanguage])})),s.push(i)}}))}return s}},checkPaymentData:function(){return!(!this.order||!this.order.data.paymentData)},paymentData:function(){var t=this,s=null;if(this.order&&this.order.data.paymentData){var e="undefined"!==typeof this.order.data.paymentData.name[t.$store.getters.getLanguage]?this.order.data.paymentData.name[t.$store.getters.getLanguage]:this.order.data.paymentData.codename;s={name:e,price:this.order.data.paymentData.price}}return s},checkActions:function(){return!!this.needsPayment("online_paypal_paypal")},needsPayment:function(t){return!(!(this.order&&this.order.data&&this.order.data.paymentData&&this.order.data.paymentData.codename&&this.order.data.paymentData.codename==t&&this.order.dates)||this.order.dates.datePaid)},makePayment:function(){console.log("this.order.data.paymentData.codename",this.order.data.paymentData.codename),this.order.data.paymentData.codename.indexOf("online_paypal")>-1&&this.paymentPayPalCall()},paymentPayPalCall:function(){var t=this;t.$httpc.post("/order/payment/paypal/geturl",{orderId:t.order._id,checkoutData:null},{timeout:1e4}).then((function(t){t&&t.data&&t.data.url&&""!=t.data.url.trim()&&(window.location.href=t.data.url)}))},invoiceDownload:function(){var t=this,s=this,e=this.getOrderInvoiceRequest();console.log("invoiceData:",e),e&&e.request&&s.$httpc.get("/order/invoice/download/"+e.request,{needsAuth:!0,responseType:"arraybuffer"}).then((function(s){console.log(s),t.downloadFile(s,e.filename)}))},downloadFile:function(t,s){var e=new Blob([t.data],{type:"application/pdf"});if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e);else{var a=window.URL.createObjectURL(e),r=document.createElement("a");r.href=a,r.download=s,r.click(),setTimeout((function(){window.URL.revokeObjectURL(a)}),100)}},invoiceGenerate:function(){var t=this;this.$httpc.get("/order/invoice/generate/"+this.order._id,{needsAuth:!0}).then((function(s){s&&s.html&&s.path&&(t.order.invoice||(t.order["invoice"]={}),t.order.invoice=s,t.$forceUpdate())}))},orderCancel:function(){var t=this;this.$httpc.get("/order/invoice/cancel/"+this.order._id,{needsAuth:!0}).then((function(s){s&&s.success&&s.order&&(t.order||(t.order={}),t.order=s.order,t.$forceUpdate())}))},getOrderInvoiceRequest:function(){var t="",s=this.order.invoice.path.split("/");console.log(s);var e=null,a=null;return s=s.filter(Boolean),s[2]&&s[2].indexOf(".pdf")>-1&&(a=s[2],s[2]=s[2].split("."),s[2][1]&&(t=s[1]+"."+s[2][0],e=s[2][0])),{request:t,id:e,filename:a}},getSubscriptionIdFromProductId:function(t){this.order&&this.order.data&&this.order.data.subscription&&this.order.data.subscription.ids}}},o=n,d=(e("0d41"),e("2877")),c=Object(d["a"])(o,a,r,!1,null,null,null);s["default"]=c.exports},dbb1:function(t,s,e){}}]);