(this["webpackJsonpdo-you-remember"]=this["webpackJsonpdo-you-remember"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Yi","image":"http://www.chinese-word.com/font-1/0001.jpg","clicked":false},{"id":2,"name":"Er","image":"http://www.chinese-word.com/font-1/0049.jpg","clicked":false},{"id":3,"name":"San","image":"http://www.chinese-word.com/font-1/0005.jpg","clicked":false},{"id":4,"name":"Si","image":"http://www.chinese-word.com/font-1/0783.jpg","clicked":false},{"id":5,"name":"Wu","image":"http://www.chinese-word.com/font-1/0054.jpg","clicked":false},{"id":6,"name":"Liu","image":"http://www.chinese-word.com/data/0313.html","clicked":false},{"id":7,"name":"Qi","image":"http://www.chinese-word.com/font-1/0003.jpg","clicked":false},{"id":8,"name":"Ba","image":"http://www.chinese-word.com/font-1/0311.jpg","clicked":false},{"id":9,"name":"Jiu","image":"http://www.chinese-word.com/font-1/0039.jpg","clicked":false},{"id":10,"name":"Shi","image":"http://www.chinese-word.com/font-1/0474.jpg","clicked":false},{"id":11,"name":"ShiYi","image":"https://china-underground.com/wp-content/uploads/2018/06/chinese-numbers-11-shiyi.gif","clicked":false},{"id":12,"name":"ShiEr","image":"https://china-underground.com/wp-content/uploads/2018/06/chinese-numbers-12-shier.gif","clicked":false},{"id":13,"name":"ShiSan","image":"https://china-underground.com/wp-content/uploads/2018/06/chinese-numbers-13-shisan.gif","clicked":false},{"id":14,"name":"ShiSi","image":"https://china-underground.com/wp-content/uploads/2018/06/chinese-numbers-14-shisi.gif","clicked":false},{"id":15,"name":"ShiWu","image":"https://china-underground.com/wp-content/uploads/2018/06/chinese-numbers-15-shiwu.gif","clicked":false},{"id":16,"name":"ShiLiu","image":"https://china-underground.com/wp-content/uploads/2018/06/chinese-numbers-16-shiliu.gif","clicked":false}]')},,,,,,,,function(e,n,a){e.exports=a(20)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),i=a(4),r=a.n(i);a(15),a(16);var o=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)},s=a(5),l=a(6),m=a(7),d=a(9),u=a(8),h=(a(17),a(2)),f=a(1),w=(a(18),function(e){var n;return c.a.createElement("div",(n={className:"allCards",style:{backgroundImage:"url(".concat(e.src,")")},alt:e.alt},Object(f.a)(n,"className","block"),Object(f.a)(n,"onClick",(function(){return e.handleClick(e.name)})),n))}),g=(a(19),function(e){return c.a.createElement("div",{id:"header"},c.a.createElement("div",{id:"title"},"Do You Remember"),c.a.createElement("div",{id:"directions"},"Don't click the same image twice!"),c.a.createElement("div",{id:"scoreDiv"},"Score: ",e.score))}),p=function(e){Object(d.a)(a,e);var n=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={numbers:h,score:0},e.resetGame=function(){e.setState({score:0,numbers:h})},e.handleCorrect=function(n){e.setState({numbers:e.shuffleArray(n),score:e.state.score+1}),16===e.state.score&&(e.resetGame(),console.log("You won!"))},e.handleWrong=function(){e.resetGame()},e.handleClick=function(n){var a=!1,t=e.state.numbers.map((function(e){var t=Object(s.a)({},e);return t.name===n&&(t.clicked||(console.log("Already guessed------------"),t.clicked=!0,a=!0)),t}));console.log("GUESSED CORRECT: ",a),a?e.handleCorrect(t):e.handleWrong(t)},e.shuffleArray=function(e){for(var n=e.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),t=[e[a],e[n]];e[n]=t[0],e[a]=t[1]}return e},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(g,null),c.a.createElement("div",{className:"boardWrapper"},c.a.createElement("div",{className:"board"},this.state.numbers.map((function(n){return c.a.createElement(w,{name:n.name,key:n.id,handleClick:e.handleClick,src:n.image,alt:n.name})})))))}}]),a}(t.Component);var k=function(){return c.a.createElement(o,null,c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.5e03cbab.chunk.js.map