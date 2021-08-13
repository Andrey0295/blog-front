(this["webpackJsonpblog-front"]=this["webpackJsonpblog-front"]||[]).push([[4],{11:function(e,t,r){"use strict";t.a={getIsAuthenticated:function(e){return e.auth.isAuthenticated},getCurrentUser:function(e){return e.auth.user},getLoadingStatus:function(e){return e.auth.loading},getErrorData:function(e){return e.auth.error}}},115:function(e,t,r){"use strict";r.r(t);var n,c,a,i,u,o,s,l=r(0),b=r.n(l),d=r(29),j=r.n(d),O=r(9),f=r(53),h=r(14),g=r(20),p=r(21),v=r(22),A=r(23),y=r(8),S=function(e){Object(v.a)(r,e);var t=Object(A.a)(r);function r(){return Object(g.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),r}(b.a.Component),x=Object(y.g)(S),m=(r(66),r(67),r(27)),k=r(11),L=r(1),E=function(e){var t=e.children;return Object(L.jsx)("div",{className:"container-xl position-relative",style:{top:"10rem"},children:t})},R=r(15),C=r(31),q=["component","isAuthenticated","isLoading","redirectTo"],U=Object(O.b)((function(e){return{isAuthenticated:k.a.getIsAuthenticated(e),isLoading:k.a.getLoadingStatus(e)}}))((function(e){var t=e.component,r=e.isAuthenticated,n=e.isLoading,c=e.redirectTo,a=Object(C.a)(e,q);return Object(L.jsx)(y.b,Object(R.a)(Object(R.a)({},a),{},{render:function(e){return r&&!n&&a.restricted?Object(L.jsx)(y.a,{to:c}):Object(L.jsx)(t,Object(R.a)({},e))}}))})),w=["component","isAuthenticated","isLoading","redirectTo"],F=Object(O.b)((function(e){return{isAuthenticated:k.a.getIsAuthenticated(e),isLoading:k.a.getLoadingStatus(e)}}))((function(e){var t=e.component,r=e.isAuthenticated,n=e.isLoading,c=e.redirectTo,a=Object(C.a)(e,w);return Object(L.jsx)(y.b,Object(R.a)(Object(R.a)({},a),{},{render:function(e){return r&&!n?Object(L.jsx)(t,Object(R.a)({},e)):Object(L.jsx)(y.a,{to:c})}}))})),M=r(41),T=r.n(M),D=r(5),B=r(38),N=Object(O.b)((function(e){return{filterValue:B.a.getFilterValue(e)}}),(function(e){return{onChangeFilter:function(t){return e(D.a.changeFilter(t.target.value))}}}))((function(e){var t=e.filterValue,r=e.onChangeFilter,n=T.a.generate();return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("label",{htmlFor:n,className:"form-label",children:Object(L.jsx)("input",{id:n,label:"Find article by title",type:"text",value:t,placeholder:"Find by the article-title",onChange:r,className:"form-control"})})})})),z={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"white"},activeLink:{color:"chartreuse"}},I=Object(O.b)((function(e){return{isAuthenticated:k.a.getIsAuthenticated(e),isLoading:k.a.getLoadingStatus(e)}}),null)((function(e){var t=e.isAuthenticated,r=e.isLoading;return Object(L.jsxs)("nav",{children:[Object(L.jsx)(h.b,{exact:!0,to:"/",style:z.link,activeStyle:z.activeLink,children:"Home"}),t&&!r&&Object(L.jsx)(h.b,{exact:!0,to:"/articles",style:z.link,activeStyle:z.activeLink,children:"All articles"}),t&&!r&&Object(L.jsx)(h.b,{exact:!0,to:"/my-articles",style:z.link,activeStyle:z.activeLink,children:"My articles"}),t&&!r&&Object(L.jsx)(N,{})]})})),_={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"white"},activeLink:{color:"chartreuse"}},V=function(e){Object(v.a)(r,e);var t=Object(A.a)(r);function r(){var e;Object(g.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={showLink:!0},e.handleLinkClick=function(){e.setState({showLink:!1}),e.props.enableLoading()},e}return Object(p.a)(r,[{key:"componentWillUnmount",value:function(){this.props.disableLoading()}},{key:"render",value:function(){return Object(L.jsx)(L.Fragment,{children:this.state.showLink&&Object(L.jsxs)("div",{children:[Object(L.jsx)("a",{onClick:this.handleLinkClick,href:"https://infinite-escarpment-83664.herokuapp.com/api/v1/auth/github",style:_.link,children:"Sign up/in with GitHub"}),Object(L.jsx)(h.b,{to:"/register",exact:!0,style:_.link,activeStyle:_.activeLink,children:"Registration"}),Object(L.jsx)(h.b,{to:"/login",exact:!0,style:_.link,activeStyle:_.activeLink,children:"Login"})]})})}}]),r}(l.Component),W=Object(O.b)(null,(function(e){return{enableLoading:function(){return e(D.a.onEnableLoader())},disableLoading:function(){return e(D.a.onDisableLoader())}}}))(V),G={name:{fontWeight:700,marginRight:12,color:"white"}},P=Object(O.b)((function(e){return{currentUser:k.a.getCurrentUser(e)}}),(function(e){return{onLogout:function(){return e(m.a.logout())}}}))((function(e){var t=e.currentUser,r=e.onLogout;return Object(L.jsxs)("div",{children:[Object(L.jsxs)("span",{style:G.name,children:["Hi, ",t]}),Object(L.jsx)("button",{className:"btn btn-primary btn-block me-2",onClick:r,children:"Logout"})]})})),H=Object(O.b)((function(e){return{isAuthenticated:k.a.getIsAuthenticated(e),isLoading:k.a.getLoadingStatus(e)}}),null)((function(e){var t=e.isAuthenticated,r=e.isLoading;return Object(L.jsxs)("header",{className:"navbar navbar-expand-lg navbar-light bg-dark bg-gradient mb-5 d-flex justify-content-between fixed-top",children:[Object(L.jsx)(I,{}),t&&!r?Object(L.jsx)(P,{}):Object(L.jsx)(W,{})]})})),J=r(54),K=r.n(J),Q=r(55),X=r.n(Q),Y=function(){return Object(L.jsx)("div",{className:K.a.LoaderBlock,children:Object(L.jsx)(X.a,{type:"Puff",color:"#00BFFF",height:100,width:100})})},Z=Object(l.lazy)((function(){return r.e(2).then(r.bind(null,277))})),$=Object(l.lazy)((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,278))})),ee=Object(l.lazy)((function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,279))})),te=Object(l.lazy)((function(){return r.e(1).then(r.bind(null,280))})),re=Object(l.lazy)((function(){return r.e(5).then(r.bind(null,281))})),ne=function(e){Object(v.a)(r,e);var t=Object(A.a)(r);function r(){return Object(g.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(H,{}),Object(L.jsx)(E,{children:this.props.isLoading?Object(L.jsx)(Y,{}):Object(L.jsx)(l.Suspense,{fallback:!0,children:Object(L.jsxs)(y.d,{children:[Object(L.jsx)(y.b,{exact:!0,path:"/",component:Z}),Object(L.jsx)(U,{path:"/register",restricted:!0,component:$,redirectTo:"/"}),Object(L.jsx)(U,{path:"/login",restricted:!0,component:ee,redirectTo:"/articles"}),Object(L.jsx)(F,{path:"/articles",component:te,redirectTo:"/login"}),Object(L.jsx)(F,{path:"/my-articles",component:re,redirectTo:"/login"})]})})})]})}}]),r}(l.Component),ce=Object(O.b)((function(e){return{isLoading:k.a.getLoadingStatus(e),isError:k.a.getErrorData(e)}}),(function(e){return{onGetCurrentUser:function(){return e(m.a.getCurrentUser())}}}))(ne),ae=r(3),ie=r(37),ue=r(56),oe=r.n(ue),se=r(2),le=r(40),be=r(10),de=D.a.fetchArticlesSuccess,je=D.a.fetchMyArticlesSuccess,Oe=D.a.addArticlesSuccess,fe=D.a.editArticlesSuccess,he=D.a.deleteArticlesSuccess,ge=D.a.changeFilter,pe=Object(ae.c)([],(n={},Object(se.a)(n,de,(function(e,t){return t.payload.reverse()})),Object(se.a)(n,je,(function(e,t){return t.payload.reverse()})),Object(se.a)(n,Oe,(function(e,t){return[t.payload].concat(Object(le.a)(e))})),Object(se.a)(n,fe,(function(e,t){var r=t.payload;return e.map((function(e){return e.id===r.id?Object(R.a)(Object(R.a)({},e),{},{title:e.title,body:e.body}):e}))})),Object(se.a)(n,he,(function(e,t){var r=t.payload;return e.filter((function(e){return e.id!==r}))})),n)),ve=Object(ae.c)("",Object(se.a)({},ge,(function(e,t){return t.payload}))),Ae=Object(be.b)({articles:pe,filter:ve}),ye=r(4),Se={email:null},xe=Object(ae.c)(Se,(c={},Object(se.a)(c,ye.a.registerSuccess,(function(e,t){return t.payload.data.data.email})),Object(se.a)(c,ye.a.loginSuccess,(function(e,t){return t.payload.data.data.email})),Object(se.a)(c,ye.a.logoutSuccess,(function(){return Se})),Object(se.a)(c,ye.a.getCurrentUserSuccess,(function(e,t){return t.payload.data.email})),c)),me=Object(ae.c)(null,(a={},Object(se.a)(a,ye.a.registerSuccess,(function(e,t){return t.payload.headers})),Object(se.a)(a,ye.a.loginSuccess,(function(e,t){return t.payload.headers})),Object(se.a)(a,ye.a.logoutSuccess,(function(){return null})),a)),ke=Object(ae.c)(null,(i={},Object(se.a)(i,ye.a.providerAuthSuccess,(function(e,t){return t.payload})),Object(se.a)(i,ye.a.logoutSuccess,(function(){return null})),i)),Le=Object(ae.c)(!1,(u={},Object(se.a)(u,ye.a.registerSuccess,(function(){return!0})),Object(se.a)(u,ye.a.loginSuccess,(function(){return!0})),Object(se.a)(u,ye.a.getCurrentUserSuccess,(function(){return!0})),Object(se.a)(u,ye.a.registerError,(function(){return!1})),Object(se.a)(u,ye.a.loginError,(function(){return!1})),Object(se.a)(u,ye.a.getCurrentUserError,(function(){return!1})),Object(se.a)(u,ye.a.logoutSuccess,(function(){return!1})),u)),Ee=Object(ae.c)(!1,(o={},Object(se.a)(o,ye.a.registerRequest,(function(){return!0})),Object(se.a)(o,ye.a.registerSuccess,(function(){return!1})),Object(se.a)(o,ye.a.registerError,(function(){return!1})),Object(se.a)(o,ye.a.loginRequest,(function(){return!0})),Object(se.a)(o,ye.a.loginSuccess,(function(){return!1})),Object(se.a)(o,ye.a.loginError,(function(){return!1})),Object(se.a)(o,ye.a.logoutRequest,(function(){return!0})),Object(se.a)(o,ye.a.logoutSuccess,(function(){return!1})),Object(se.a)(o,ye.a.logoutError,(function(){return!1})),Object(se.a)(o,ye.a.getCurrentUserRequest,(function(){return!0})),Object(se.a)(o,ye.a.getCurrentUserSuccess,(function(){return!1})),Object(se.a)(o,ye.a.getCurrentUserError,(function(){return!1})),Object(se.a)(o,D.a.fetchArticlesRequest,(function(){return!0})),Object(se.a)(o,D.a.fetchArticlesSuccess,(function(){return!1})),Object(se.a)(o,D.a.fetchArticlesError,(function(){return!1})),Object(se.a)(o,D.a.fetchMyArticlesRequest,(function(){return!0})),Object(se.a)(o,D.a.fetchMyArticlesSuccess,(function(){return!1})),Object(se.a)(o,D.a.fetchMyArticlesError,(function(){return!1})),Object(se.a)(o,D.a.addArticlesRequest,(function(){return!0})),Object(se.a)(o,D.a.addArticlesSuccess,(function(){return!1})),Object(se.a)(o,D.a.addArticlesError,(function(){return!1})),Object(se.a)(o,D.a.editArticlesRequest,(function(){return!0})),Object(se.a)(o,D.a.editArticlesSuccess,(function(){return!1})),Object(se.a)(o,D.a.deleteArticlesError,(function(){return!1})),Object(se.a)(o,D.a.deleteArticlesRequest,(function(){return!0})),Object(se.a)(o,D.a.deleteArticlesSuccess,(function(){return!1})),Object(se.a)(o,D.a.deleteArticlesError,(function(){return!1})),Object(se.a)(o,D.a.onEnableLoader,(function(){return!0})),Object(se.a)(o,D.a.onDisableLoader,(function(){return!1})),o)),Re=Object(ae.c)(null,(s={},Object(se.a)(s,ye.a.registerError,(function(e,t){return t.payload})),Object(se.a)(s,ye.a.loginError,(function(e,t){return t.payload})),Object(se.a)(s,ye.a.logoutError,(function(e,t){return t.payload})),Object(se.a)(s,ye.a.resetError,(function(){return null})),s)),Ce=Object(be.b)({user:xe,token:me,providerToken:ke,error:Re,isAuthenticated:Le,loading:Ee}),qe={key:"auth-key",storage:oe.a,whitelist:["token","providerToken"]},Ue=Object(ae.a)({reducer:{auth:Object(ie.a)(qe,Ce),articles:Ae},middleware:Object(ae.d)({serializableCheck:!1}),devTools:!0}),we={store:Ue,persistor:Object(ie.b)(Ue)};j.a.render(Object(L.jsx)(b.a.StrictMode,{children:Object(L.jsx)(O.a,{store:we.store,children:Object(L.jsx)(f.a,{loading:null,persistor:we.persistor,children:Object(L.jsxs)(h.a,{children:[Object(L.jsx)(x,{}),Object(L.jsx)(ce,{})]})})})}),document.getElementById("root"))},27:function(e,t,r){"use strict";var n=r(15),c=r(19),a=r.n(c),i=r(4);a.a.defaults.baseURL="https://infinite-escarpment-83664.herokuapp.com";var u=function(e){a.a.defaults.headers=Object(n.a)({},e)},o=function(){a.a.defaults.headers=""};t.a={register:function(e){return function(t){t(i.a.registerRequest()),a.a.post("/api/v1/auth",e).then((function(e){u(e.headers),t(i.a.registerSuccess(e))})).catch((function(e){var r,n;t(i.a.registerError(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.errors.full_messages[0]))}))}},login:function(e){return function(t){t(i.a.loginRequest()),a.a.post("api/v1/auth/sign_in",e).then((function(e){u(e.headers),t(i.a.loginSuccess(e))})).catch((function(e){var r,n;t(i.a.loginError(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.errors[0]))}))}},logout:function(){return function(e){e(i.a.logoutRequest()),a.a.delete("/api/v1/auth/sign_out").then((function(){o(),localStorage.clear(),e(i.a.logoutSuccess())})).catch((function(t){e(i.a.logoutError(t))}))}},getCurrentUser:function(){return function(e,t){var r=new URL(document.location).searchParams.get("token");if(r){var n=atob(r),c=JSON.parse(n);e(i.a.providerAuthSuccess(c))}var o=t().auth.providerToken;if(o){e(i.a.getCurrentUserRequest());var s={"access-token":o.token,expiry:o.expiry,client:o.client,uid:o.uid,"token-type":"Bearer"};u(s),a.a.get("/me",{headers:s}).then((function(t){e(i.a.getCurrentUserSuccess(t))})).catch((function(t){return e(i.a.getCurrentUserError(t))}))}var l=t().auth.token;l&&(u(l),e(i.a.getCurrentUserRequest()),a.a.get("/me").then((function(t){e(i.a.getCurrentUserSuccess(t))})).catch((function(t){return e(i.a.getCurrentUserError(t))})))}}}},38:function(e,t,r){"use strict";var n=r(25),c=function(e){return e.articles.articles},a=function(e){return e.articles.filter},i=Object(n.a)([c,a],(function(e,t){var r=t.toLowerCase();return e.filter((function(e){return e.title.toLowerCase().includes(r)}))}));t.a={getAllArticles:c,getFilterValue:a,getVisibleArticles:i}},4:function(e,t,r){"use strict";var n=r(3),c=Object(n.b)("auth/registerRequest"),a=Object(n.b)("auth/registerSuccess"),i=Object(n.b)("auth/registerError"),u=Object(n.b)("auth/providerAuthRequest"),o=Object(n.b)("auth/providerAuthSuccess"),s=Object(n.b)("auth/providerAuthError"),l=Object(n.b)("auth/loginRequest"),b=Object(n.b)("auth/loginSuccess"),d=Object(n.b)("auth/loginError"),j=Object(n.b)("auth/logoutRequest"),O=Object(n.b)("auth/logoutSuccess"),f=Object(n.b)("auth/logoutError"),h=Object(n.b)("auth/getCurrentUserRequest"),g=Object(n.b)("auth/getCurrentUserSuccess"),p=Object(n.b)("auth/getCurrentUserError"),v=Object(n.b)("auth/resetError");t.a={registerRequest:c,registerSuccess:a,registerError:i,loginRequest:l,loginSuccess:b,loginError:d,logoutRequest:j,logoutSuccess:O,logoutError:f,getCurrentUserRequest:h,getCurrentUserSuccess:g,getCurrentUserError:p,providerAuthRequest:u,providerAuthSuccess:o,providerAuthError:s,resetError:v}},5:function(e,t,r){"use strict";var n=r(3),c=Object(n.b)("articles/fetchArticlesRequest"),a=Object(n.b)("articles/fetchArticlesSuccess"),i=Object(n.b)("articles/fetchArticlesError"),u=Object(n.b)("articles/fetchMyArticlesRequest"),o=Object(n.b)("articles/fetchMyArticlesSuccess"),s=Object(n.b)("articles/fetchMyArticlesError"),l=Object(n.b)("articles/addArticlesRequest"),b=Object(n.b)("articles/addArticlesSuccess"),d=Object(n.b)("articles/addArticlesError"),j=Object(n.b)("articles/editArticlesRequest"),O=Object(n.b)("articles/editArticlesSuccess"),f=Object(n.b)("articles/editArticlesError"),h=Object(n.b)("articles/deleteArticlesRequest"),g=Object(n.b)("articles/deleteArticlesSuccess"),p=Object(n.b)("articles/deleteArticlesError"),v=Object(n.b)("articles/changeFilter"),A=Object(n.b)("articles/onEnableLoader"),y=Object(n.b)("articles/onDisableLoader");t.a={fetchArticlesRequest:c,fetchArticlesSuccess:a,fetchArticlesError:i,fetchMyArticlesRequest:u,fetchMyArticlesSuccess:o,fetchMyArticlesError:s,addArticlesRequest:l,addArticlesSuccess:b,addArticlesError:d,editArticlesRequest:j,editArticlesSuccess:O,editArticlesError:f,deleteArticlesRequest:h,deleteArticlesSuccess:g,deleteArticlesError:p,changeFilter:v,onEnableLoader:A,onDisableLoader:y}},54:function(e,t,r){e.exports={LoaderBlock:"LoaderBlock_LoaderBlock__1GqAW"}},67:function(e,t,r){}},[[115,7,8]]]);
//# sourceMappingURL=main.ea877382.chunk.js.map