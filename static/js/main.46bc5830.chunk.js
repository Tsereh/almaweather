(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(31)},26:function(e,a,t){},28:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),s=t(18),r=t.n(s),l=(t(26),t(27),t(14)),o=t(4),i=t(5),u=t(7),h=t(6),p=t(8),d=t(2),m=t(20),v=(t(28),t(32)),b=t(33),k=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={userInput:""},t.handleUserInput=t.handleUserInput.bind(Object(d.a)(Object(d.a)(t))),t.clearUserInput=t.clearUserInput.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"handleUserInput",value:function(e){var a=e.target.value;this.setState({userInput:a}),this.props.onChange(a)}},{key:"clearUserInput",value:function(){this.setState({userInput:""}),this.props.onChange("")}},{key:"render",value:function(){var e;return""!==this.state.userInput&&(e=c.a.createElement("span",{className:"clear-span clear-cross",onClick:this.clearUserInput},"\u2a09")),c.a.createElement(v.a,{className:"search-field"},c.a.createElement(b.a,{id:"search-field",onChange:this.handleUserInput,value:this.state.userInput,placeholder:"Search"}),e)}}]),a}(n.Component),g=t(34),f=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handlePlaceToggle=t.handlePlaceToggle.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"handlePlaceToggle",value:function(){var e=this.props.savedPlaces.includes(this.props.hits[0].name);this.props.onPlaceBookmarkToggle(this.props.hits[0].name,e)}},{key:"render",value:function(){var e,a=this.props,t=a.typedPlace,n=a.hits,s=a.placeNotFound,r=a.isLoading,l=a.error,o=n[0];if(l)e=c.a.createElement("p",{className:"main-weather-oneliner"},l.message);else if(""===t)e=c.a.createElement("p",{className:"main-weather-oneliner"},"Please, enter a place name in to a search field to see it's weather.");else if(r||null===o.weather[0].description)e=c.a.createElement("p",{className:"main-weather-oneliner"},"Loading...");else if(s)e=c.a.createElement("p",{className:"main-weather-oneliner"},t," does not match any of known to us places.");else{var i=this.props.savedPlaces.includes(o.name);e=c.a.createElement("div",null,c.a.createElement("p",null,o.weather[0].description.charAt(0).toUpperCase(),o.weather[0].description.slice(1)," in ",o.name),c.a.createElement("img",{className:"weather-img",src:"http://openweathermap.org/img/w/"+o.weather[0].icon+".png",alt:o.weather[0].main+" icon"}),c.a.createElement("p",null,Math.ceil(10*(o.main.temp-273.15))/10,"\xb0C"),c.a.createElement(g.a,{className:"bookmark-btn",color:"primary",onClick:this.handlePlaceToggle},i?"Bookmarked":"Bookmark"))}return c.a.createElement("div",{className:"main-weather"},e)}}]),a}(n.Component),P=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={hits:[{weather:[{main:null,description:null,icon:null}],main:{temp:null},name:null}],placeNotFound:!0,isLoading:!1,error:null},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this;if(this.props.place!==e.place&&""!==this.props.place){this.setState({isLoading:!0});var n=!1;fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.props.place+"&APPID=c62f15c78133f4e346be75e47f0bb963").then(function(e){if(e.ok)return n=!0,t.setState({placeNotFound:!1}),e.json();t.setState({placeNotFound:!0})}).then(function(e){n?t.setState({hits:[e].concat(Object(l.a)(t.state.hits.slice(0,2))),isLoading:!1}):t.setState({isLoading:!1})}).catch(function(e){return t.setState({error:e,isLoading:!1})})}}},{key:"render",value:function(){var e=this.state,a=e.hits,t=e.placeNotFound,n=e.isLoading,s=e.error;return c.a.createElement(f,{savedPlaces:this.props.savedPlaces,onPlaceBookmarkToggle:this.props.onPlaceBookmarkToggle,typedPlace:this.props.place,hits:a,placeNotFound:t,isLoading:n,error:s})}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handlePlaceClick=t.handlePlaceClick.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"handlePlaceClick",value:function(e){this.props.loadPlace(e.target.value)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"bookmarked-places"},this.props.savedPlaces.map(function(a,t){return c.a.createElement(g.a,{className:"bookmarked-place",color:"secondary",key:t,value:a,onClick:e.handlePlaceClick},a)}))}}]),a}(n.Component),O=function(e){function a(e){var t;Object(o.a)(this,a),t=Object(u.a)(this,Object(h.a)(a).call(this,e));var n=new m.a,c=[];return void 0!==n.get("savedPlaces")&&(c=n.get("savedPlaces")),t.state={place:"",cookies:n,savedPlaces:c},t.updatePlace=t.updatePlace.bind(Object(d.a)(Object(d.a)(t))),t.togglePlaceBookmark=t.togglePlaceBookmark.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"updatePlace",value:function(e){this.setState({place:e})}},{key:"togglePlaceBookmark",value:function(e,a){var t;t=a?this.state.savedPlaces.filter(function(a){return a!==e}):[e].concat(Object(l.a)(this.state.savedPlaces)),this.setState({savedPlaces:t});var n=new Date,c=new Date;c.setFullYear(n.getFullYear()+1),this.state.cookies.set("savedPlaces",t,{path:"/",expires:c})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App container"},c.a.createElement(k,{onChange:this.updatePlace}),c.a.createElement(P,{place:this.state.place,onPlaceBookmarkToggle:this.togglePlaceBookmark,savedPlaces:this.state.savedPlaces}),c.a.createElement(j,{savedPlaces:this.state.savedPlaces,loadPlace:this.updatePlace}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.46bc5830.chunk.js.map