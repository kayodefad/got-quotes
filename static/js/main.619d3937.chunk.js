(this["webpackJsonprandom-quote"]=this["webpackJsonprandom-quote"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/aryastark.47d24a11.jpg"},function(e,t,a){e.exports=a.p+"static/media/branstark.e464124d.jpg"},function(e,t,a){e.exports=a.p+"static/media/brienne.8f289da0.jpg"},function(e,t,a){e.exports=a.p+"static/media/cersie.7b557f16.jpg"},function(e,t,a){e.exports=a.p+"static/media/jonsnow.2c28f685.jpg"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=a(3),s=a(4),u=a(11),l=a(5),m=a(12),h=(a(18),a(6)),p=a.n(h),d=a(7),f=a.n(d),g=a(8),v=a.n(g),b=a(9),E=a.n(b),q=a(10),k=a.n(q),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={quote:null,weather:null,images:[p.a,f.a,v.a,E.a,k.a],currentImg:0},a.handleClick=function(){fetch("https://got-quotes.herokuapp.com/quotes").then((function(e){return e.json()})).then((function(e){a.setState({quote:e})}))},a.renderQuote=function(){return a.state.quote?r.a.createElement("div",{className:"quoteContainer"},a.state.quote.quote,r.a.createElement("div",{style:{fontSize:"1rem",marginTop:"1rem",fontStyle:"italic"}},"-- ",a.state.quote.character)):r.a.createElement("div",null,"Loading...")},a.displayWeather=function(){return a.state.weather?r.a.createElement("div",{className:"weather-icon"},r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(a.state.weather.weather[0].icon,"@2x.png"),alt:"weather icon"}),r.a.createElement("div",{className:"desc"},(a.state.weather.main.temp-273.15).toFixed(0),r.a.createElement("span",null," \xb0C"),r.a.createElement("div",null,a.state.weather.name))):r.a.createElement("div",null)},a.displayTweet=function(){return a.state.quote?r.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=".concat(a.state.quote.quote," -- ").concat(a.state.quote.character," https://kayodefad.github.io/got-quotes/"),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,"Send a raven ",r.a.createElement("i",{className:"fab fa-twitter"}))):r.a.createElement("div",null)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://got-quotes.herokuapp.com/quotes").then((function(e){return e.json()})).then((function(t){e.setState({quote:t})})),fetch("https://api.openweathermap.org/data/2.5/weather?q=lagos&APPID=bb0a8d645a922767b12d52c814083dba").then((function(e){return e.json()})).then((function(t){e.setState({weather:t})})),this.interval=setInterval((function(){return e.changeBackgroundImage()}),8e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"changeBackgroundImage",value:function(){var e=0,t=this.state,a=t.images,n=t.currentImg;n!==a.length-1&&(e=n+1),this.setState({currentImg:e})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.currentImg,n="#000 url(".concat(t[a],") no-repeat center center/cover");return r.a.createElement("div",{style:{background:n,transition:"background 2s ease-in-out"}},this.displayWeather(),r.a.createElement("div",{className:"App container"},r.a.createElement("div",{className:"quote"},r.a.createElement("div",{className:"quote-body"},r.a.createElement("i",{className:"fas fa-quote-left"}),r.a.createElement("div",null,this.renderQuote(),r.a.createElement("button",{style:{marginRight:"10px"},onClick:this.handleClick},"Get another GOT Quote"),this.displayTweet())))),r.a.createElement("footer",null,"Copyright \xa9 2020 kayodeFad"," ",r.a.createElement("a",{style:{color:"#fff"},href:"https://github.com/kayodefad",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"}))))}}]),t}(r.a.Component);a(19);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.619d3937.chunk.js.map