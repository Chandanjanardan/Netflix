(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{28:function(e,t,n){},60:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(18),r=n.n(i),o=(n(28),n(4)),s=n.n(o),l=n(6),d=n(5),u=n(19),f=n(22),v=n.n(f).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(60),n(23)),b=n.n(h),j=n(0);var p=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),r=Object(d.a)(i,2),o=r[0],f=r[1],h=Object(c.useState)(""),p=Object(d.a)(h,2),m=p[0],g=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(n);case 2:return t=e.sent,f(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("div",{className:"row__posters",children:o.map((function(e){return Object(j.jsx)("img",{onClick:function(){return function(e){m?g(""):b()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URL("https://www.youtube.com/watch?v=VpmocE57-5I");g(t)})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("http://image.tmdb.org/t/p/w154").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(j.jsx)(u.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},m={fetchTrending:"/trending/all/day?api_key=637847fe83933d96516345383f4c6389&language=en-US",fetchNetflixOrginals:"/discover/tv?api_key=637847fe83933d96516345383f4c6389",fetchTopRated:"/movie/top_rated?api_key=637847fe83933d96516345383f4c6389",fetchActionMovies:"/discover/movie?api_key=637847fe83933d96516345383f4c6389&with_genres=28",fetchComedyMovies:"/discover/movie?api_key=637847fe83933d96516345383f4c6389&with_genres=35",fetchHorrorMovies:"/discover/movie?api_key=637847fe83933d96516345383f4c6389&with_genres=27",fetchRomanceMovies:"/discover/movie?api_key=637847fe83933d96516345383f4c6389&with_genres=10749",fetchDocumentaries:"/discover/movie?api_key=637847fe83933d96516345383f4c6389&with_genres=99"};n(70);var g=function(){var e,t,n=Object(c.useState)([]),a=Object(d.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(m.fetchNetflixOrginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner__contents",children:[Object(j.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.orignal_name)}),Object(j.jsxs)("div",{className:"banner__buttons",children:[Object(j.jsx)("button",{className:"banner__button",children:"Play"}),Object(j.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(j.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(j.jsx)("div",{className:"banner--fadeBottom"})]})};n(71);var O=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(j.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(j.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png",alt:"navbar"}),Object(j.jsx)("img",{className:"nav__avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"avatar"})]})};var _=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(O,{}),Object(j.jsx)(g,{}),Object(j.jsx)(p,{title:"NETFLIX ORIGNALS",fetchUrl:m.fetchNetflixOrginals,isLargeRow:!0}),Object(j.jsx)(p,{title:"Trending Now",fetchUrl:m.fetchTrending}),Object(j.jsx)(p,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(j.jsx)(p,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(j.jsx)(p,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(j.jsx)(p,{title:"Romance movies",fetchUrl:m.fetchRomanceMovies}),Object(j.jsx)(p,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(j.jsx)(p,{title:"Documentaries",fetchUrl:m.fetchDocumentaries})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.c06f62fa.chunk.js.map