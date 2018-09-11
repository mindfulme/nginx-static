webpackJsonp([17,28],{1119:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return g}),n.d(t,"a",function(){return v});var i=n(0),l=n.n(i),c=n(1),u=(n.n(c),n(13)),p=n.n(u),f=n(15),b=(n.n(f),n(18)),m=n(27),h=n(2),y=n.n(h),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,r=e.changeTab,a=e.title,o=e.className,s=e.updatedTab,i=e.disabled,c=e.subText,u=p()({"is-active":t},o);return"string"==typeof a&&a.indexOf(".")>0&&(a=y.a.translate(a)),this.props.collapsed?("string"==typeof c&&(c=c.trim()),l.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},l.a.createElement("span",{className:"tab-title"},a,s?"*":"",c&&" (",c&&c,c&&")"))):l.a.createElement("li",{className:u,onClick:i?null:r.bind(this,n,this.props.isLinkTo)},l.a.createElement("a",null,l.a.createElement("span",{className:"tab-title"},a,s?"*":""),c&&l.a.createElement("div",{className:"tab-subtext"},c)))}}]),t}(l.a.Component);v.propTypes={changeTab:i.PropTypes.func,isActive:i.PropTypes.bool.isRequired,index:i.PropTypes.number.isRequired,className:i.PropTypes.string,isLinkTo:i.PropTypes.string,subText:i.PropTypes.oneOfType([i.PropTypes.object,i.PropTypes.string])},v.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var g=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return s(t,e),d(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){if(e!==this.state.activeTab){if(""!==t)return void this.context.router.push(t);this.props.setting&&b.a.changeViewSetting(r({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.contentClass,a=t.tabsClass,o=t.style,s=t.segmented,i=this.state.width<900&&l.a.Children.count(n)>2,c=null,u=l.a.Children.map(n,function(t,n){if(!t)return null;if(i&&t.props.disabled)return null;var r=n===e.state.activeTab;return r&&(c=t.props.children),l.a.cloneElement(t,{collapsed:i,isActive:r,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return c||(c=u[0].props.children),l.a.createElement("div",{className:p()(this.props.actionButtons?"with-buttons":"",this.props.className)},l.a.createElement("div",{className:"service-selector"},l.a.createElement("ul",{style:o,className:p()("button-group no-margin",a,{segmented:s})},i?l.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},l.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},u)):u,this.props.actionButtons?l.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),l.a.createElement("div",{className:p()("tab-content",r)},c))}}]),t}(l.a.Component);g.propTypes={setting:i.PropTypes.string,defaultActiveTab:i.PropTypes.number,segmented:i.PropTypes.bool},g.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},g.contextTypes={router:l.a.PropTypes.object.isRequired},g=Object(f.connect)(g,{listenTo:function(){return[m.a]},getProps:function(){return{viewSettings:m.a.getState().viewSettings}}})},1159:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return x}),n.d(t,"a",function(){return A});var i=n(0),l=n.n(i),c=n(40),u=n(30),p=n(26),f=n(68),b=n(8),m=n(15),h=(n.n(m),n(209)),y=n(1),d=n.n(y),v=n(2),g=n.n(v),_=n(86),O=n.n(_),w=n(387),E=n(55),k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),j=function e(t,n,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in a)return a.value;var s=a.get;if(void 0!==s)return s.call(r)},P=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s(t,e),T(t,[{key:"componentDidMount",value:function(){O.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e){return j(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"shouldComponentUpdate",this).call(this,e)||!b.a.are_equal_shallow(e.pulsate,this.props.pulsate)||e.toAsset!==this.props.toAsset||e.fromAsset!==this.props.fromAsset||e.amount!==this.props.amount}},{key:"getValue",value:function(){var e=this.props,t=e.amount,n=e.toAsset,r=e.fromAsset,a=e.fullPrecision,o=e.marketStats,s=e.coreAsset;return E.a.convertValue(t,n,r,o,s,a)}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,a=e.fromAsset,o=e.fullPrecision,s=r(e,["amount","toAsset","fromAsset","fullPrecision"]),i=n.get("id"),u=n.get("symbol");o||(t=b.a.get_asset_amount(t,a));var p=this.getValue();return p||0===p?l.a.createElement(c.a,k({noPrefix:!0,amount:p,asset:i,decimalOffset:-1!==u.indexOf("BTC")?4:this.props.fullDecimals?0:this.props.noDecimals?n.get("precision"):n.get("precision")-2},s)):l.a.createElement("div",{className:"tooltip inline-block","data-place":"bottom","data-tip":g.a.translate("tooltip.no_price"),style:{fontSize:"0.9rem"}},l.a.createElement(d.a,{content:"account.no_price"}))}}]),t}(w.a);P.defaultProps={fullPrecision:!0,noDecimals:!1,fullDecimals:!1,hide_asset:!1},P=Object(f.a)(P,{propNames:["toAsset","fromAsset","coreAsset"],defaultProps:{toAsset:"1.3.0",coreAsset:"1.3.0"}});var x=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),T(t,[{key:"render",value:function(){var e=this.props,t=e.refCallback,n=r(e,["refCallback"]);return l.a.createElement(P,k({},n,{ref:t}))}}]),t}(l.a.Component);x=Object(m.connect)(x,{listenTo:function(){return[h.a]},getProps:function(){return{marketStats:h.a.getState().allMarketStats}}});var A=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),T(t,[{key:"render",value:function(){var e=this.props,t=e.balance,n=r(e,["balance"]),a=!!t.getIn(["balance","amount"]),o=Number(a?t.getIn(["balance","amount"]):t.get("balance")),s=a?t.getIn(["balance","asset_id"]):t.get("asset_type");return isNaN(o)?l.a.createElement("span",null,"--"):l.a.createElement(x,k({amount:o,fromAsset:s,noDecimals:!0},n))}}]),t}(l.a.Component);A.propTypes={balance:u.a.ChainObject.isRequired},A=Object(p.a)(A,{keep_updating:!0})},1538:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=n(0),b=n.n(f),m=n(57),h=n(27),y=n(70),d=n.n(y),v=n(11),g=n.n(v),_=n(2),O=n.n(_),w=n(13),E=n.n(w),k=n(1),T=n.n(k),j=n(380),P=n(30),x=n(26),A=n(40),C=n(1159),N=n(3),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D=N.c.operations,R=Object.keys(D),B={general:[0,25,26,27,28,32,33,37,39,40],asset:[10,11,12,13,14,15,16,17,18,19,38,41],market:[1,2,3,4,17,18],account:[5,6,7,8,9],business:[20,21,22,23,24,29,30,31,34,35,36]},L=[5,7,20,21,34],I=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),S(t,[{key:"shouldComponentUpdate",value:function(e){return!g.a.is(e.globalObject,this.props.globalObject)}},{key:"render",value:function(){var e=this.props,t=e.globalObject,n=e.settings,r=e.opIds;e.title;t=t.toJSON();var a=N.b.getAsset("1.3.0"),o=t.parameters.current_fees,s=t.parameters.network_percent_of_fee/1e4,i=o.scale,l=o.parameters,c=n.get("unit")||a.get("symbol"),u=O.a.translate("transaction.trxTypes"),p=r.map(function(e){if(e>=l.length)return void console.warn("Asking for non-existing fee id %d! Check group settings in Fees.jsx",e);var t=l[e],n=t[0],r=t[1],a=R[n],o=u[a],p=s;10===n&&(p=.5+.5*s);var f=[],m=!1,h=E()("label","info");for(var y in r){var d=r[y]*i/1e4,v=d*p,g=O.a.translate("transaction.feeTypes"),_=d?b.a.createElement(A.a,{amount:d,asset:"1.3.0"}):g._none,w=d?b.a.createElement(C.b,{fromAsset:"1.3.0",fullPrecision:!0,amount:d,toAsset:c,fullDecimals:!0}):g._none,k=v?b.a.createElement(A.a,{amount:v,asset:"1.3.0"}):g._none,T=v?b.a.createElement(C.b,{fromAsset:"1.3.0",fullPrecision:!0,amount:v,toAsset:c,fullDecimals:!0}):g._none,j=null;m||(m=!0,j=b.a.createElement("td",{rowSpan:"6",style:{width:"15em"}},b.a.createElement("span",{className:h},o))),L.indexOf(n)<0?f.push(b.a.createElement("tr",{key:n.toString()+y,className:"Annual Membership"===g[y]?"linethrough":""},j,b.a.createElement("td",null,g[y]),b.a.createElement("td",{style:{textAlign:"right"}},_,0!==d&&"BTS"!==c&&[" / ",w]),b.a.createElement("td",{style:{textAlign:"right"}},8!==e?k:null,8!==e&&0!==d&&"BTS"!==c&&[" / ",T]))):f.push(b.a.createElement("tr",{key:n.toString()+y},j,b.a.createElement("td",null,g[y]),b.a.createElement("td",{style:{textAlign:"right"}},"- ",b.a.createElement("sup",null,"*")),b.a.createElement("td",{style:{textAlign:"right"}},k,0!==d&&"BTS"!==c&&[" / ",T])))}return b.a.createElement("tbody",{key:e},f)});return b.a.createElement("div",{className:"asset-card"},b.a.createElement("div",{className:"card-divider"},this.props.title),b.a.createElement("table",{className:"table"},b.a.createElement("thead",null,b.a.createElement("tr",null,b.a.createElement("th",null,b.a.createElement(T.a,{content:"explorer.block.op"})),b.a.createElement("th",null,b.a.createElement(T.a,{content:"explorer.fees.type"})),b.a.createElement("th",{style:{textAlign:"right"}},b.a.createElement(T.a,{content:"explorer.fees.fee"})),b.a.createElement("th",{style:{textAlign:"right"}},b.a.createElement(T.a,{content:"explorer.fees.feeltm"})))),p))}}]),t}(b.a.Component);I.propTypes={globalObject:P.a.ChainObject.isRequired},I.defaultProps={globalObject:"2.0.0"},I=Object(x.a)(I,{keep_updating:!0});var q=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),S(t,[{key:"render",value:function(){var e=O.a.translate("transaction.feeGroups"),t=[];for(var n in B){var r=e[n],a=B[n];t.push(b.a.createElement(I,{key:n,settings:this.props.settings,opIds:a,title:r}))}return b.a.createElement("div",{className:"grid-block vertical",style:{overflow:"visible"}},b.a.createElement("div",{className:"grid-block small-12 shrink",style:{overflow:"visible"}},b.a.createElement(j.a,{path:"components/Fees"})),b.a.createElement("div",{className:"grid-block small-12 ",style:{overflow:"visible"}},b.a.createElement("div",{className:"grid-content"},t)))}}]),t}(b.a.Component),M=q,W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),W(t,[{key:"render",value:function(){return b.a.createElement(d.a,{stores:[h.a],inject:{settings:h.a.getState().settings}},b.a.createElement(M,this.props))}}]),t}(b.a.Component),V=U,z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,e),z(t,[{key:"render",value:function(){var e=b.a.createElement(V,null);return b.a.createElement(m.default,{tab:"fees",content:e})}}]),t}(b.a.Component);t.default=F},57:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),i=n.n(s),l=n(1119),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tabs:[{name:"blocks",link:"/explorer/blocks",translate:"explorer.blocks.title"},{name:"assets",link:"/explorer/assets",translate:"explorer.assets.title"},{name:"accounts",link:"/explorer/accounts",translate:"explorer.accounts.title"},{name:"witnesses",link:"/explorer/witnesses",translate:"explorer.witnesses.title"},{name:"committee_members",link:"/explorer/committee-members",translate:"explorer.committee_members.title"},{name:"markets",link:"/explorer/markets",translate:"markets.title"},{name:"fees",link:"/explorer/fees",translate:"fees.title"}]},n}return o(t,e),c(t,[{key:"render",value:function(){for(var e=this,t=this.state.tabs.findIndex(function(t){return t.name===e.props.tab}),n=[],r=0;r<this.state.tabs.length;r++){var a=this.state.tabs[r],o=t==r?this.props.content:null,s=t==r?"":a.link;n.push(i.a.createElement(l.a,{key:r,title:a.translate,isLinkTo:s},o))}return i.a.createElement(l.b,{defaultActiveTab:t,segmented:!1,setting:"explorerTab-{this.props.tab}",className:"account-tabs",tabsClass:"account-overview bordered-header content-block",contentClass:"tab-content padding"},n)}}]),t}(i.a.Component);u.propTypes={tab:i.a.PropTypes.string,content:i.a.PropTypes.object},u.defaultProps={tab:"blocks",content:null},t.default=u}});
//# sourceMappingURL=17.js.map