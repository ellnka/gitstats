(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),l=n.n(s);n(15),n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(1),i=n(2),u=n(5),c=n(4),h=n(3),f=n(6),m=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return fetch(e).then(function(e){return e.json()})})},{key:"update",value:function(e,t){return fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}}]),e}(),p=(n(17),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={userInfo:e.userInfo,repos:null,languages:[]},n.userCreatedDate=new Date(Date.parse(n.state.userInfo.created_at)),n.render(),n._fetchRepos(n.state.userInfo.repos_url),n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"coder"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-2-xl col-3-l col-4-m meta"},r.a.createElement("div",{className:"padh"},r.a.createElement("header",null,r.a.createElement("h3",null,this.state.userInfo.login)),r.a.createElement("img",{src:this.state.userInfo.avatar_url,alt:this.state.userInfo.login,className:"img-fluid"}),r.a.createElement("p",null,"Joined GitHub ",this._userCreatedDate.toLocaleDateString()),r.a.createElement("a",{href:"https://github.com/{this.state.userInfo.login}",className:"block"},r.a.createElement("i",{"aria-hidden":"true",className:"fa fa-github"}),this.state.userInfo.username)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"Pushed to repos: ",this.state.userInfo.public_repos," ")),r.a.createElement("li",null,r.a.createElement("p",null,"Main languages: ",this.state.languages.join(", ")," ")),r.a.createElement("li",null,r.a.createElement("p",null,"Followers:",this.state.userInfo.followers," ")),r.a.createElement("li",null,r.a.createElement("p",null,"Following: ",this.state.userInfo.following))))))}},{key:"_setRepos",value:function(e){this.setState({repos:e})}},{key:"_setLang",value:function(e){this.setState({languages:e})}},{key:"_fetchRepos",value:function(e){var t=this;m.fetch(e).then(function(e){console.log(e),console.log(e.length),e.length&&(t._setRepos(e),t._getLanguages())})}},{key:"_getLanguages",value:function(){if(this.state.repos&&this.state.repos.length>0){var e=this.state.repos.map(function(e){return e.language}).filter(function(e,t,n){return n.indexOf(e)===t&&e});this._setLang(e)}}}]),t}(a.Component)),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={search:"",username:null},n._setSearch=n._setSearch.bind(Object(h.a)(n)),n.render(),n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"_setSearch",value:function(e){this.setState({search:e.target.value})}},{key:"_setUsername",value:function(e){this.setState({username:e})}},{key:"_searchInput",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this._submitHandler.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"search",onChange:this._setSearch,autoComplete:"off",placeholder:"Search...",className:"form-control"}))),this._userProfile())}},{key:"render",value:function(){return r.a.createElement("div",{className:"container",role:"main"},this._searchInput())}},{key:"_search",value:function(){}},{key:"_pressKeyHandler",value:function(){}},{key:"_submitHandler",value:function(e){e.preventDefault(),this._setUsername(null);var t="https://api.github.com/search/users?q="+this.state.search.toLowerCase().trim();this._fetchUser(t)}},{key:"_fetchUser",value:function(e){var t=this;m.fetch(e).then(function(e){if(e.total_count){var n=e.items[0].url;m.fetch(n).then(function(e){t._setUsername(e)})}})}},{key:"_userProfile",value:function(){if(this.state.username)return r.a.createElement(p,{userInfo:this.state.username})}}]),t}(a.Component);l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e, t, n){e.exports=n(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.ba68df42.chunk.js.map