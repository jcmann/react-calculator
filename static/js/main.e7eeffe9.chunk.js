(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,t,_){"use strict";var n=_(0),s=(_(1),function(e){return Object(n.jsx)("div",{className:"keypadRow",children:e.children})}),r=function(e){var t=e.type,_=e.children,s=e.onButtonPress,r=["btn"];return"undefined"!==typeof t&&r.push("btn"+t),Object(n.jsx)("button",{onClick:s,className:r.join(" "),children:_})};t.a=function(e){return Object(n.jsxs)("section",{className:"keypad",children:[Object(n.jsxs)(s,{children:[Object(n.jsx)(r,{type:"Primary",onButtonPress:e.onButtonPress,children:"C"}),Object(n.jsx)(r,{type:"Primary",onButtonPress:e.onButtonPress,children:"\u2190"}),Object(n.jsx)(r,{type:"Operator",onButtonPress:e.onButtonPress,children:"%"}),Object(n.jsx)(r,{type:"Operator",onButtonPress:e.onButtonPress,children:"/"})]}),Object(n.jsxs)(s,{children:[Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"9"}),Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"8"}),Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"7"}),Object(n.jsx)(r,{type:"Operator",onButtonPress:e.onButtonPress,children:"*"})]}),Object(n.jsxs)(s,{children:[Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"6"}),Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"5"}),Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"4"}),Object(n.jsx)(r,{type:"Operator",onButtonPress:e.onButtonPress,children:"-"})]}),Object(n.jsxs)(s,{children:[Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"3"}),Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"2"}),Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"1"}),Object(n.jsx)(r,{type:"Operator",onButtonPress:e.onButtonPress,children:"+"})]}),Object(n.jsxs)(s,{children:[Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"0"}),Object(n.jsx)(r,{onButtonPress:e.onButtonPress,children:"."}),Object(n.jsx)(r,{onButtonPress:e.onButtonPress,type:"Large",children:"="})]})]})}},16:function(e,t,_){},17:function(e,t,_){"use strict";_.r(t);var n=_(0),s=_(2),r=_(3),a=_(5),o=_(4),c=_(1),u=_.n(c),l=_(7),i=_.n(l),j=(_(16),_(8),function(e){e&&e instanceof Function&&_.e(3).then(_.bind(null,18)).then((function(t){var _=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;_(e),n(e),s(e),r(e),a(e)}))}),d=function(e){Object(a.a)(_,e);var t=Object(o.a)(_);function _(e){var n;return Object(s.a)(this,_),(n=t.call(this,e)).state={date:new Date,counter:0},n}return Object(r.a)(_,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date}),this.setState((function(e){return{counter:e.counter+1}}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Hello, world!"}),Object(n.jsxs)("h2",{children:["It is ",this.state.date.toLocaleTimeString(),"."]}),Object(n.jsxs)("h2",{children:["Current count: ",this.state.counter]})]})}}]),_}(u.a.Component);i.a.render(Object(n.jsx)(d,{}),document.getElementById("root")),j()},8:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),_Users_jenmann_Documents_Dev_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Users_jenmann_Documents_Dev_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_Users_jenmann_Documents_Dev_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),_Users_jenmann_Documents_Dev_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Screen_Screen__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),Calculator=function(_React$Component){Object(_Users_jenmann_Documents_Dev_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_React$Component);var _super=Object(_Users_jenmann_Documents_Dev_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(){var _this;Object(_Users_jenmann_Documents_Dev_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Calculator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={equation:"",result:0},_this.onButtonPress=function(event){var equation=_this.state.equation,pressedButton=event.target.innerHTML;if("C"===pressedButton)return _this.clear();if(pressedButton>="0"&&pressedButton<="9"||"."===pressedButton)equation+=pressedButton;else if(-1!==["+","-","*","/","%"].indexOf(pressedButton))equation+=" "+pressedButton+" ";else if("="===pressedButton)try{var evalResult=eval(equation),result=Number.isInteger(evalResult)?evalResult:evalResult.toFixed(2);_this.setState({result:result})}catch(error){alert("Invalid Mathematical Equation")}else equation=equation.trim(),equation=equation.substr(0,equation.length-1);_this.setState({equation:equation})},_this}return Object(_Users_jenmann_Documents_Dev_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,[{key:"clear",value:function(){this.setState({equation:"",result:0})}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Screen_Screen__WEBPACK_IMPORTED_MODULE_6__.a,{equation:this.state.equation,result:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_7__.a,{onButtonPress:this.onButtonPress})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calculator},9:function(e,t,_){"use strict";var n=_(0),s=(_(1),function(e){return Object(n.jsx)("div",{className:"computationScreen",children:e.equation})}),r=function(e){return Object(n.jsx)("div",{className:"resultScreen",children:e.result})};t.a=function(e){return Object(n.jsxs)("section",{className:"screen",children:[Object(n.jsx)(r,{result:e.result}),Object(n.jsx)(s,{equation:e.equation})]})}}},[[17,1,2]]]);
//# sourceMappingURL=main.e7eeffe9.chunk.js.map