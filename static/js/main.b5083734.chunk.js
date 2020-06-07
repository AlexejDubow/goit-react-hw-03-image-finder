(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(65)},46:function(e,t,a){},47:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=a(7),s=a(3),i=a(4),m=a(6),u=a(5),g=a(18),h=a.n(g),d=(a(46),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.handleChange=function(t){var a=t.target.value;e.setState({search:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.search),e.setState({search:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.search;return r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchFormButton"},r.a.createElement("span",{className:"SearchFormButtonLabel"},"Search")),r.a.createElement("input",{name:"search",className:"SearchFormInput",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:e}))}}]),a}(n.Component)),f=(a(47),function(e){var t=e.onSubmit;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement(d,{onSubmit:t}))}),p=function(e){var t=e.images,a=e.onClick;return r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=e.id,n=e.webformatURL,o=e.largeImageURL;return r.a.createElement("li",{className:"ImageGalleryItem",key:t},r.a.createElement("img",{className:"ImageGalleryItemImage",src:n,alt:"picter",onClick:function(){return a(o)}}))})))},v=function(e){var t=e.images,a=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"ImageGallery"},r.a.createElement(p,{images:t,onClick:a})))},y=function(e){var t=e.loadMore;return r.a.createElement("button",{className:"Button",type:"button",onClick:t},"Load more")},b=function(e){var t=e.largeImageURL,a=e.closeModal;return r.a.createElement("div",{className:"Overlay",onClick:a},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:t,alt:"img"})))},E=a(19),I=a.n(E),S={page:1,perPage:12,fetchImages:function(e){var t="&q=".concat(e,"&page=").concat(this.page,"&per_page=").concat(this.perPage,"&image_type=all&orientation=horizontal");return I.a.get("https://pixabay.com/api/?key=16116679-c72078e20d7f40e9b0a227bf4"+t)},incrementPage:function(){this.page+=1},resetPage:function(){this.page=1}},L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],isLoading:!1,error:null,query:"",modalIsOpen:!1,largeImageURL:""},e.fetchImages=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";S.resetPage(),e.setState({isLoading:!0,query:t,images:[]}),S.fetchImages(t).then((function(t){var a=t.data;return e.setState({images:Object(l.a)(a.hits)})})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1})}))},e.handleLoadMoreImages=function(){S.incrementPage(),e.setState({isLoading:!0}),S.fetchImages(e.state.query).then((function(t){var a=t.data;e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(a.hits))}})),S.page>1&&e.scrollTo()})).catch((function(e){return console.error(e)})).finally((function(){return e.setState({isLoading:!1})}))},e.handleModalOpen=function(t){e.setState({modalIsOpen:!0,largeImageURL:t})},e.handleCloseModal=function(t){"Overlay"===t.target.className&&e.closeModal()},e.handleKeyPress=function(t){"Escape"===t.code&&e.closeModal()},e.closeModal=function(){e.setState({modalIsOpen:!1,largeImageURL:""})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchImages(),window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate"),t.query!==this.state.query&&(S.resetPage(),S.fetchImages(this.state.query))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"scrollTo",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,o=e.modalIsOpen,c=e.largeImageURL;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{onSubmit:this.fetchImages}),n&&r.a.createElement("p",null,"Whoops, somthing went wrong: ",n.message),t.length>0&&r.a.createElement(v,{images:t,onClick:this.handleModalOpen}),a&&r.a.createElement("div",{className:"loader"},r.a.createElement(h.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})),t.length>0&&r.a.createElement(y,{loadMore:this.handleLoadMoreImages}),!!o&&r.a.createElement(b,{largeImageURL:c,closeModal:this.handleCloseModal}))}}]),a}(n.Component);c.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b5083734.chunk.js.map