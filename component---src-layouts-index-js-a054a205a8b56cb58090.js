webpackJsonp([0x67ef26645b2a,60335399758886,0x99703cc56f65],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"presets":["E:/projects/maxm.ca/node_modules/babel-preset-react/lib/index.js","E:/projects/maxm.ca/node_modules/babel-preset-es2015/lib/index.js","E:/projects/maxm.ca/node_modules/babel-preset-stage-1/lib/index.js",["E:/projects/maxm.ca/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"E:/projects/maxm.ca/node_modules/babel-preset-stage-0/lib/index.js","E:/projects/maxm.ca/node_modules/babel-preset-react/lib/index.js"],"plugins":["E:/projects/maxm.ca/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","E:/projects/maxm.ca/node_modules/babel-plugin-add-module-exports/lib/index.js","E:/projects/maxm.ca/node_modules/babel-plugin-add-module-exports/lib/index.js","E:/projects/maxm.ca/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n("./node_modules/react/react.js"),i=o(r),a=n("./src/layouts/index.js"),l=o(a),d=n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),u=o(d);t.default=function(e){return i.default.createElement(l.default,s({},e,u.default))},e.exports=t.default},"./node_modules/babel-runtime/core-js/object/assign.js":function(e,t,n){e.exports={default:n("./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/keys.js":function(e,t,n){e.exports={default:n("./node_modules/core-js/library/fn/object/keys.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/extends.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/babel-runtime/core-js/object/assign.js"),r=o(s);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}},"./node_modules/babel-runtime/helpers/objectWithoutProperties.js":function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},"./node_modules/core-js/library/fn/object/assign.js":function(e,t,n){n("./node_modules/core-js/library/modules/es6.object.assign.js"),e.exports=n("./node_modules/core-js/library/modules/_core.js").Object.assign},"./node_modules/core-js/library/fn/object/keys.js":function(e,t,n){n("./node_modules/core-js/library/modules/es6.object.keys.js"),e.exports=n("./node_modules/core-js/library/modules/_core.js").Object.keys},"./node_modules/core-js/library/modules/_object-assign.js":function(e,t,n){"use strict";var o=n("./node_modules/core-js/library/modules/_object-keys.js"),s=n("./node_modules/core-js/library/modules/_object-gops.js"),r=n("./node_modules/core-js/library/modules/_object-pie.js"),i=n("./node_modules/core-js/library/modules/_to-object.js"),a=n("./node_modules/core-js/library/modules/_iobject.js"),l=Object.assign;e.exports=!l||n("./node_modules/core-js/library/modules/_fails.js")(function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=o})?function(e,t){for(var n=i(e),l=arguments.length,d=1,u=s.f,c=r.f;l>d;)for(var p,m=a(arguments[d++]),f=u?o(m).concat(u(m)):o(m),h=f.length,_=0;h>_;)c.call(m,p=f[_++])&&(n[p]=m[p]);return n}:l},"./node_modules/core-js/library/modules/_object-sap.js":function(e,t,n){var o=n("./node_modules/core-js/library/modules/_export.js"),s=n("./node_modules/core-js/library/modules/_core.js"),r=n("./node_modules/core-js/library/modules/_fails.js");e.exports=function(e,t){var n=(s.Object||{})[e]||Object[e],i={};i[e]=t(n),o(o.S+o.F*r(function(){n(1)}),"Object",i)}},"./node_modules/core-js/library/modules/es6.object.assign.js":function(e,t,n){var o=n("./node_modules/core-js/library/modules/_export.js");o(o.S+o.F,"Object",{assign:n("./node_modules/core-js/library/modules/_object-assign.js")})},"./node_modules/core-js/library/modules/es6.object.keys.js":function(e,t,n){var o=n("./node_modules/core-js/library/modules/_to-object.js"),s=n("./node_modules/core-js/library/modules/_object-keys.js");n("./node_modules/core-js/library/modules/_object-sap.js")("keys",function(){return function(e){return s(o(e))}})},"./node_modules/element-resize-event/index.js":function(e,t){function n(e){var t=e.target||e.srcElement;t.__resizeRAF__&&s(t.__resizeRAF__),t.__resizeRAF__=o(function(){var n=t.__resizeTrigger__;n.__resizeListeners__.forEach(function(t){t.call(n,e)})})}var o=function(){var e=this,t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||function(t){return e.setTimeout(t,20)};return function(e){return t(e)}}(),s=function(){var e=this,t=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelAnimationFrame||e.clearTimeout;return function(e){return t(e)}}(),t=function(e,t){function o(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",n)}var s,r=this,i=r.document,a=i.attachEvent;if("undefined"!=typeof navigator&&(s=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!e.__resizeListeners__)if(e.__resizeListeners__=[],a)e.__resizeTrigger__=e,e.attachEvent("onresize",n);else{"static"===getComputedStyle(e).position&&(e.style.position="relative");var l=e.__resizeTrigger__=i.createElement("object");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;"),l.setAttribute("class","resize-sensor"),l.__resizeElement__=e,l.onload=o,l.type="text/html",s&&e.appendChild(l),l.data="about:blank",s||e.appendChild(l)}e.__resizeListeners__.push(t)};e.exports="undefined"==typeof window?t:t.bind(window),e.exports.unbind=function(e,t){var o=document.attachEvent;t?e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1):e.__resizeListeners__=[],e.__resizeListeners__.length||(o?e.detachEvent("onresize",n):(e.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",n),delete e.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__,e.__resizeTrigger__=!e.removeChild(e.__resizeTrigger__)),delete e.__resizeListeners__)}},"./node_modules/gatsby-link/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return e.replace(/^\/\//g,"/")}t.__esModule=!0,t.navigateTo=void 0;var r=n("./node_modules/babel-runtime/helpers/extends.js"),i=o(r),a=n("./node_modules/babel-runtime/core-js/object/keys.js"),l=o(a),d=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),u=o(d),c=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),p=o(c),m=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),f=o(m),h=n("./node_modules/babel-runtime/helpers/inherits.js"),_=o(h),j=n("./node_modules/react/react.js"),b=o(j),y=n("./node_modules/react-router-dom/index.js"),g=n("./node_modules/prop-types/index.js"),x=o(g),v="/";v="";var w={activeClassName:x.default.string,activeStyle:x.default.object,exact:x.default.bool,strict:x.default.bool,isActive:x.default.func,location:x.default.object},C=function(e){function t(n){(0,p.default)(this,t);var o=(0,f.default)(this,e.call(this));return o.state={to:s(v+n.to)},o}return(0,_.default)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:s(v+e.to)}),___loader.enqueue(this.state.to))},t.prototype.componentDidMount=function(){___loader.enqueue(this.state.to)},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,o=(0,u.default)(t,["onClick"]);if((0,l.default)(w).some(function(t){return e.props[t]}))var s=y.NavLink;else var s=y.Link;return b.default.createElement(s,(0,i.default)({onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var o=e.state.to;if(o.split("#").length>1&&(o=o.split("#").slice(0,-1).join("")),o===window.location.pathname){var s=e.state.to.split("#").slice(1).join("#"),r=document.getElementById(s);if(null!==r)return r.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}})},o,{to:this.state.to}))},t}(b.default.Component);C.contextTypes={router:x.default.object},t.default=C;t.navigateTo=function(e){window.___navigateTo(s(v+e))}},"./node_modules/raf/index.js":function(e,t,n){for(var o=n("./node_modules/raf/node_modules/performance-now/lib/performance-now.js"),s="undefined"==typeof window?{}:window,r=["moz","webkit"],i="AnimationFrame",a=s["request"+i],l=s["cancel"+i]||s["cancelRequest"+i],d=!0,u=0;u<r.length&&!a;u++)a=s[r[u]+"Request"+i],l=s[r[u]+"Cancel"+i]||s[r[u]+"CancelRequest"+i];if(!a||!l){d=!1;var c=0,p=0,m=[],f=1e3/60;a=function(e){if(0===m.length){var t=o(),n=Math.max(0,f-(t-c));c=n+t,setTimeout(function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return m.push({handle:++p,callback:e,cancelled:!1}),p},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return d?a.call(s,function(){try{e.apply(this,arguments)}catch(e){setTimeout(function(){throw e},0)}}):a.call(s,e)},e.exports.cancel=function(){l.apply(s,arguments)}},"./node_modules/raf/node_modules/performance-now/lib/performance-now.js":function(e,t,n){(function(t){(function(){var n,o,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-s)/1e6},o=t.hrtime,n=function(){var e;return e=o(),1e9*e[0]+e[1]},s=n()):Date.now?(e.exports=function(){return Date.now()-s},s=Date.now()):(e.exports=function(){return(new Date).getTime()-s},s=(new Date).getTime())}).call(this)}).call(t,n("./node_modules/process/browser.js"))},"./node_modules/react-component-width-mixin/index.js":function(e,t,n){var o=n("./node_modules/react-dom/index.js"),s=n("./node_modules/element-resize-event/index.js");e.exports={getInitialState:function(){return void 0!==this.props.initialComponentWidth&&null!==this.props.initialComponentWidth?{componentWidth:this.props.initialComponentWidth}:{}},componentDidMount:function(){this.setState({componentWidth:o.findDOMNode(this).getBoundingClientRect().width}),s(o.findDOMNode(this),this.onResize)},componentDidUpdate:function(){0===o.findDOMNode(this).getElementsByClassName("resize-sensor").length&&s(o.findDOMNode(this),this.onResize)},onResize:function(){this.setState({componentWidth:o.findDOMNode(this).getBoundingClientRect().width})}}},"./node_modules/react-page-width/dist/index.js":function(e,t,n){var o;o=n("./node_modules/react-page-width/dist/resizeListener.js"),e.exports={getInitialState:function(){return this.props.initialPageWidth?{pageWidth:this.props.initialPageWidth}:{}},componentDidMount:function(){return o.on(this.onResize)},componentWillUnmount:function(){return o.off(this.onResize)},onResize:function(e){return this.setState({pageWidth:e})}}},"./node_modules/react-page-width/dist/resizeListener.js":function(e,t,n){var o,s,r,i,a,l;r=n("./node_modules/raf/index.js"),o=void 0,i=[],a=!1,"undefined"!=typeof window&&null!==window&&(o=window.innerWidth),s=function(){if(!a)return a=!0,r(l)},l=function(){var e,t,n;for(o=window.innerWidth,e=0,t=i.length;e<t;e++)(n=i[e])(o);return a=!1},"undefined"!=typeof window&&null!==window&&window.addEventListener("resize",s),e.exports={on:function(e){return e(o),i.push(e)},off:function(e){return i.splice(i.indexOf(e),1)}}},"./node_modules/react-responsive-grid/dist/components/Breakpoint.js":function(e,t,n){var o,s,r,i,a,l;i=n("./node_modules/react/react.js"),a=n("./node_modules/react-component-width-mixin/index.js"),r=n("./node_modules/react-page-width/dist/index.js"),l=n("./node_modules/object-assign/index.js"),o=i.createClass({displayName:"Breakpoint",mixins:[a],propTypes:{minWidth:i.PropTypes.number,maxWidth:i.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return i.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?i.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=l({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.componentWidth&&this.props.minWidth<=(t=this.state.componentWidth)&&t<this.props.maxWidth?i.createElement("div",Object.assign({},e),this.renderChildren()):i.createElement("div",null)}}),s=i.createClass({displayName:"Breakpoint",mixins:[r],propTypes:{minWidth:i.PropTypes.number,maxWidth:i.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return i.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=(n=t.type)?n.displayName:void 0)?i.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=l({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.pageWidth&&this.props.minWidth<=(t=this.state.pageWidth)&&t<this.props.maxWidth?i.createElement("div",Object.assign({},e),this.renderChildren()):i.createElement("div",null)}}),e.exports=i.createClass({displayName:"Breakpoint",propTypes:{widthMethod:i.PropTypes.string.isRequired,minWidth:i.PropTypes.number,maxWidth:i.PropTypes.number},getDefaultProps:function(){return{widthMethod:"pageWidth"}},render:function(){return"pageWidth"===this.props.widthMethod?i.createElement(s,Object.assign({},this.props)):"componentWidth"===this.props.widthMethod?i.createElement(o,Object.assign({},this.props)):void 0}})},"./node_modules/react-responsive-grid/dist/components/Container.js":function(e,t,n){var o,s;o=n("./node_modules/react/react.js"),s=n("./node_modules/object-assign/index.js"),e.exports=o.createClass({displayName:"Container",render:function(){var e,t,n,r;return t={maxWidth:"960px",marginLeft:"auto",marginRight:"auto"},r=s(t,this.props.style),e=this.props.children,n=s({},this.props),delete n.children,delete n.style,o.createElement("div",Object.assign({},n,{style:r}),e,o.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/components/Grid.js":function(e,t,n){var o,s;o=n("./node_modules/react/react.js"),s=n("./node_modules/object-assign/index.js"),e.exports=o.createClass({displayName:"Grid",propTypes:{columns:o.PropTypes.number,gutterRatio:o.PropTypes.number},getDefaultProps:function(){return{columns:12,gutterRatio:.25}},renderChildren:function(){return o.Children.map(this.props.children,function(e){return function(t){var n,s;return"Breakpoint"===(n=null!=(s=t.type)?s.displayName:void 0)||"Span"===n?o.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.gutterRatio}}):t}}(this))},render:function(){var e;return e=s({},this.props),delete e.gutterRatio,delete e.columns,o.createElement("div",Object.assign({},e),this.renderChildren(),o.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/components/Span.js":function(e,t,n){var o,s,r;o=n("./node_modules/react/react.js"),s=n("./node_modules/object-assign/index.js"),r=n("./node_modules/react-responsive-grid/dist/utils/SpanCalculate.js"),e.exports=o.createClass({displayName:"Span",propTypes:{context:o.PropTypes.object,columns:o.PropTypes.number,at:o.PropTypes.number,pre:o.PropTypes.number,post:o.PropTypes.number,squish:o.PropTypes.number,last:o.PropTypes.bool,break:o.PropTypes.bool},getDefaultProps:function(){return{at:0,pre:0,post:0,squish:0,last:!1,first:!1,break:!1}},renderChildren:function(){return o.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?o.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.context.gutterRatio}}):t}}(this))},render:function(){var e,t;return t=r({contextColumns:this.props.context.columns,gutterRatio:this.props.context.gutterRatio,columns:this.props.columns,at:this.props.at,pre:this.props.pre,post:this.props.post,squish:this.props.squish,last:this.props.last,break:this.props.break}),t=s(t,this.props.style),e=s({},this.props,{style:t}),delete e.at,delete e.break,delete e.columns,delete e.context,delete e.first,delete e.last,delete e.post,delete e.pre,delete e.squish,delete e.style,o.createElement("div",Object.assign({},e,{style:t}),this.renderChildren(),o.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/index.js":function(e,t,n){t.Container=n("./node_modules/react-responsive-grid/dist/components/Container.js"),t.Grid=n("./node_modules/react-responsive-grid/dist/components/Grid.js"),t.Breakpoint=n("./node_modules/react-responsive-grid/dist/components/Breakpoint.js"),t.Span=n("./node_modules/react-responsive-grid/dist/components/Span.js")},"./node_modules/react-responsive-grid/dist/utils/SpanCalculate.js":function(e,t,n){var o;o=n("./node_modules/object-assign/index.js"),e.exports=function(e){var t,n,s,r,i,a,l,d,u,c;return s={columns:3,at:0,pre:0,post:0,squish:0,contextColumns:12,gutterRatio:.25,first:!1,last:!1},u=o(s,e),d=100/(u.contextColumns+(u.contextColumns-1)*u.gutterRatio),i=u.gutterRatio*d,n=function(e){return d*e+i*(e-1)},t=function(e){return 0===e?0:n(e)+i},c=n(u.columns),a=0===u.at&&0===u.pre&&0===u.squish?0:t(u.at)+t(u.pre)+t(u.squish),u.last&&0===u.post&&0===u.squish?l=0:0!==u.post||0!==u.squish?(l=t(u.post)+t(u.squish),u.last||(l+=i)):l=i,r=u.last?"right":"left",c+="%",a+="%",l+="%",{float:r,marginLeft:a,marginRight:l,width:c,clear:u.break?"both":"none"}}},"./src/layouts/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n("./node_modules/react/react.js"),d=o(l),u=n("./node_modules/gatsby-link/index.js"),c=o(u),p=n("./node_modules/react-responsive-grid/dist/index.js"),m=n("./src/utils/typography.js"),f=function(e){function t(){return s(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children),n="/";return n="/",d.default.createElement(p.Container,{style:{maxWidth:(0,m.rhythm)(24),padding:(0,m.rhythm)(1.5)+" "+(0,m.rhythm)(.75)}},d.default.createElement("h1",{style:a({},(0,m.scale)(1.5),{marginBottom:(0,m.rhythm)(1.5),marginTop:0})},d.default.createElement(c.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Maxime Morin")),t())},t}(d.default.Component);f.propTypes={children:d.default.PropTypes.func,location:d.default.PropTypes.object,route:d.default.PropTypes.object},t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-a054a205a8b56cb58090.js.map