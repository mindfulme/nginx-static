webpackJsonp([1],{1554:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"ExistingAccount",function(){return d}),n.d(t,"ExistingAccountOptions",function(){return h});var c=n(0),o=n.n(c),u=n(24),i=n(15),s=(n.n(i),n(63)),m=n(225),p=n(1),b=n.n(p),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),E={listenTo:function(){return[s.a]},getProps:function(){return{wallet:s.a.getState()}}},d=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),f(t,[{key:"render",value:function(){var e=0!=this.props.wallet.wallet_names.count();return o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{className:"grid-content"},o.a.createElement("div",{className:"content-block center-content"},o.a.createElement("div",{className:"page-header"},o.a.createElement("h1",null,o.a.createElement(b.a,{content:"account.welcome"})),e?o.a.createElement("h3",null,o.a.createElement(b.a,{content:"wallet.setup_wallet"})):o.a.createElement("h3",null,o.a.createElement(b.a,{content:"wallet.create_wallet_backup"}))),o.a.createElement("div",{className:"content-block"},this.props.children))))}}]),t}(c.Component);d=Object(i.connect)(d,E);var h=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),f(t,[{key:"render",value:function(){var e=0!=this.props.wallet.wallet_names.count();return o.a.createElement("span",null,e?null:o.a.createElement("div",null,o.a.createElement(u.b,{to:"existing-account/import-backup"},o.a.createElement(b.a,{content:"wallet.import_backup"})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(u.b,{to:"existing-account/import-keys"},o.a.createElement(b.a,{content:"wallet.import_bts1"})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(u.b,{to:"existing-account/import-keys"},o.a.createElement(b.a,{content:"wallet.create_wallet"})),o.a.createElement("br",null),o.a.createElement("hr",null)),e?o.a.createElement(m.default,null):null,e?o.a.createElement("span",null,o.a.createElement(u.b,{to:"dashboard"},o.a.createElement("div",{className:"button outline"},o.a.createElement(b.a,{component:"span",content:"header.dashboard"}))),o.a.createElement(u.b,{to:"wallet"},o.a.createElement("div",{className:"button outline"},o.a.createElement(b.a,{content:"settings.wallets"})))):null)}}]),t}(c.Component);h=Object(i.connect)(h,E)}});
//# sourceMappingURL=1.js.map