(this["webpackJsonpblog-front"]=this["webpackJsonpblog-front"]||[]).push([[5],{119:function(t,e,n){"use strict";var r=n(19),a=n.n(r),c=n(5);a.a.defaults.baseURL="https://infinite-escarpment-83664.herokuapp.com";e.a={addArticle:function(t){var e=t.title,n=t.body;return function(t){var r={title:e,body:n};t(c.a.addArticlesRequest()),a.a.post("/articles",r).then((function(e){var n=e.data;return t(c.a.addArticlesSuccess(n))})).catch((function(e){var n=e.message;return t(c.a.addArticlesError(n))}))}},editArticle:function(t){var e=t.articleId,n=t.title,r=t.body;return function(t){var l={title:n,body:r};t(c.a.editArticlesRequest()),a.a.put("/articles/".concat(e),l).then((function(e){var n=e.data;t(c.a.editArticlesSuccess(n))})).catch((function(e){return t(c.a.editArticlesError(e))}))}},fetchArticles:function(){return function(t){t(c.a.fetchArticlesRequest),a.a.get("/articles").then((function(e){var n=e.data;return t(c.a.fetchArticlesSuccess(n))})).catch((function(e){var n=e.message;return t(c.a.fetchArticlesError(n))}))}},fetchMyArticles:function(){return function(t){t(c.a.fetchMyArticlesRequest),a.a.get("/my-articles").then((function(e){var n=e.data;return t(c.a.fetchMyArticlesSuccess(n))})).catch((function(e){var n=e.message;return t(c.a.fetchMyArticlesError(n))}))}},deleteArticle:function(t){return function(e){e(c.a.deleteArticlesRequest()),a.a.delete("/articles/".concat(t)).then((function(){return e(c.a.deleteArticlesSuccess(t))})).catch((function(t){var n=t.message;return e(c.a.deleteArticlesError(n))}))}}}},121:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(39);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var l,i=t[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(o){a=!0,c=o}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},132:function(t,e,n){"use strict";var r=n(20),a=n(21),c=n(22),l=n(23),i=n(0),o=n(143),s=n.n(o),u=n(1),d=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).handleKeyDown=function(e){var n=t.props.onClose;"Escape"===e.code&&n()},t.handleBackdropClick=function(e){var n=t.props.onClose;e.currentTarget===e.target&&n()},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this.props.children;return Object(u.jsx)("div",{className:s.a.Overlay,onClick:this.handleBackdropClick,children:Object(u.jsx)("div",{className:s.a.Modal,children:t})})}}]),n}(i.Component);e.a=d},143:function(t,e,n){t.exports={Overlay:"Overlay_Overlay__14FeO",Modal:"Overlay_Modal__2Fvj8"}},144:function(t,e,n){"use strict";var r=n(0),a=n(9),c=n(38),l=n(119),i=n(121),o=n(132),s=n(2),u=n(20),d=n(21),b=n(22),h=n(23),f=n(41),m=n.n(f),j=n(1),p=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={title:"",body:""},t.titleInputId=m.a.generate(),t.bodyInputId=m.a.generate(),t.onInputChange=function(e){var n=e.currentTarget,r=n.name,a=n.value;t.setState(Object(s.a)({},r,a))},t.onFormSubmit=function(e){var n=t.state,r=n.title,a=n.body,c=t.props,l=c.allArticles,i=c.articleId,o=c.onSubmit,s=c.onCloseAfterSubmit;e.preventDefault();var u={title:r,body:a,articleId:i};l.filter((function(t){return t.title===r})).length>0?alert("".concat(r," is already in articles-list")):o(u),t.setState({title:"",body:""}),s()},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.title,n=t.body;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"d-flex flex-column justify-content-center w-75 m-4",onSubmit:this.onFormSubmit,children:[Object(j.jsx)("div",{className:"form-outline flex-fill",children:Object(j.jsx)("label",{htmlFor:this.titleInputId,className:"form-label w-100",children:Object(j.jsx)("input",{required:!0,id:this.titleInputId,label:"Title",type:"text",name:"title",value:e,onChange:this.onInputChange,className:"form-control border-dark",placeholder:"Title"})})}),Object(j.jsx)("div",{className:"form-outline flex-fill",children:Object(j.jsx)("label",{htmlFor:this.bodyInputId,className:"form-label w-100",children:Object(j.jsx)("textarea",{required:!0,rows:"10",id:this.bodyInputId,label:"Body",color:"secondary",type:"text",name:"body",value:n,onChange:this.onInputChange,className:"form-control border-dark",placeholder:"Body"})})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success btn-block",children:"Save changes"})]})})}}]),n}(r.Component),y=Object(a.b)((function(t){return{allArticles:c.a.getAllArticles(t)}}),(function(t){return{onSubmit:function(e){return t(l.a.editArticle(e))}}}))(p),v=function(t){var e=t.title,n=t.body,a=t.onDelete,c=t.articleId,l=t.isAuthor,s=void 0!==l&&l,u=t.idx,d=Object(r.useState)(!1),b=Object(i.a)(d,2),h=b[0],f=b[1],m=function(){f(!h)};return Object(j.jsxs)("li",{className:"list-group-item d-flex w-100 justify-content-center border-0 col-lg-12 col-md-12 mb-4",children:[Object(j.jsxs)("div",{className:"card shadow-lg w-75 p-3 mb-5 bg-white rounded",children:[Object(j.jsxs)("div",{className:"bg-image hover-overlay ripple","data-mdb-ripple-color":"light",children:[u%2===0?Object(j.jsx)("img",{src:"https://mdbootstrap.com/img/new/standard/nature/111.jpg",className:"img-fluid w-100",alt:"article preview"}):Object(j.jsx)("img",{src:"https://mdbootstrap.com/img/new/standard/nature/023.jpg",className:"img-fluid w-100",alt:"article preview"}),Object(j.jsx)("div",{className:"mask",style:{backgroundColor:"rgba(251, 251, 251, 0.15)"}})]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e}),Object(j.jsx)("p",{className:"card-text",children:n}),Object(j.jsxs)("div",{className:"d-flex justify-content-center",children:[s&&Object(j.jsx)("button",{className:"btn btn-secondary m-1",onClick:m,children:"Edit"}),s&&Object(j.jsx)("button",{className:"btn btn-danger m-1",type:"button",onClick:function(){return a(c)},children:"Delete"})]})]})]}),h&&Object(j.jsx)(o.a,{onClose:m,children:Object(j.jsx)(y,{articleId:c,onCloseAfterSubmit:m})})]})};e.a=Object(a.b)((function(t){return{articlesData:c.a.getVisibleArticles(t)}}),(function(t){return{onDelete:function(e){return t(l.a.deleteArticle(e))}}}))((function(t){var e=t.articlesData,n=t.onDelete,r=(t.onEdit,t.isAuthor);return Object(j.jsx)("ul",{className:"mb-0 row list-group",children:e.map((function(t,e){var a=t.title,c=t.id,l=t.body;return Object(j.jsx)(v,{title:a,body:l,articleId:c,onDelete:n,isAuthor:r,idx:e},c)}))})}))},281:function(t,e,n){"use strict";n.r(e);var r=n(20),a=n(21),c=n(22),l=n(23),i=n(0),o=n(9),s=n(119),u=n(132),d=n(2),b=n(41),h=n.n(b),f=n(38),m=n(1),j=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={title:"",body:""},t.titleInputId=h.a.generate(),t.bodyInputId=h.a.generate(),t.onInputChange=function(e){var n=e.currentTarget,r=n.name,a=n.value;t.setState(Object(d.a)({},r,a))},t.onFormSubmit=function(e){var n=t.state.title,r=t.props,a=r.allArticles,c=r.onSubmit,l=r.onCloseAfterSubmit;e.preventDefault(),a.filter((function(t){return t.title===n})).length>0?alert("".concat(n," is already in articles-list")):c(t.state),t.setState({title:"",body:""}),l()},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state,e=t.title,n=t.body;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{className:"d-flex flex-column justify-content-center w-75 m-4",onSubmit:this.onFormSubmit,children:[Object(m.jsx)("div",{className:"form-outline flex-fill",children:Object(m.jsx)("label",{htmlFor:this.titleInputId,className:"form-label w-100",children:Object(m.jsx)("input",{required:!0,id:this.titleInputId,label:"Title",type:"text",name:"title",value:e,onChange:this.onInputChange,className:"form-control border-dark",placeholder:"Title"})})}),Object(m.jsx)("div",{className:"form-outline flex-fill",children:Object(m.jsx)("label",{htmlFor:this.bodyInputId,className:"form-label w-100",children:Object(m.jsx)("textarea",{required:!0,rows:"10",id:this.bodyInputId,label:"Body",color:"secondary",type:"text",name:"body",value:n,onChange:this.onInputChange,className:"form-control border-dark",placeholder:"Body"})})}),Object(m.jsx)("button",{type:"submit",className:"btn btn-success btn-block",children:"Add article"})]})})}}]),n}(i.Component),p=Object(o.b)((function(t){return{allArticles:f.a.getAllArticles(t)}}),(function(t){return{onSubmit:function(e){var n=e.title,r=e.body;return t(s.a.addArticle({title:n,body:r}))}}}))(j),y=n(144),v=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={showModal:!1},t.onCloseModal=function(){t.setState({showModal:!1,showEditModal:!1})},t.onOpenModal=function(){t.setState({showModal:!0})},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchArticles)()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"row d-flex justify-content-center align-items-center h-100 relative",children:[this.state.showModal&&Object(m.jsx)(u.a,{onClose:this.onCloseModal,children:Object(m.jsx)(p,{onCloseAfterSubmit:this.onCloseModal})}),Object(m.jsx)("button",{onClick:this.onOpenModal,type:"button",className:"btn btn-success w-25 mr-auto ml-auto",children:"Add new article"}),Object(m.jsx)("div",{children:Object(m.jsx)(y.a,{isAuthor:!0,onEdit:this.submitEditData})})]})}}]),n}(i.Component);e.default=Object(o.b)(null,(function(t){return{fetchArticles:function(){return t(s.a.fetchMyArticles())}}}))(v)}}]);
//# sourceMappingURL=my-articles-view.e01f6e0d.chunk.js.map