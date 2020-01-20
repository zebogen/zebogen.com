(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Boj0:function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),o=n.n(i),r=n("Bl7J"),a=n("vOnD");n("gu/5"),n("eoYm"),n("YbXK"),n("cFtU");function l(t){this.canvas=t,this.state=this.getInitialState(!0)}l.prototype.init=function(){this.paintBackground(),this.paintGrid(),this.render()},l.prototype.paintBackground=function(){var t=this.canvas.getContext("2d");t.fillStyle="#bcd9e0",t.fillRect(0,0,this.canvas.width,this.canvas.height)},l.prototype.getInitialState=function(t){var e=this;return void 0===t&&(t=!1),{grid:Array.from({length:100}).map((function(n,i){return Array.from({length:150}).map((function(n,o){return{i:i,j:o,alive:Math.random()<(t?e.currentRandomizationValue():0)}}))})),running:!1,mouseDown:!1,generations:0}},l.prototype.currentRandomizationValue=function(){return document.getElementById("randomizer-number").value/100},l.prototype.handleMousedown=function(t){this.state.mouseDown=!0,this.handleMousemove(t)},l.prototype.handleMouseup=function(){this.state.mouseDown=!1},l.prototype.handleMousemove=function(t){var e=this;this.state.mouseDown&&this.cellsFromMouseEvent(t).forEach((function(t){t.alive=!0,e.paintCell(t.i,t.j,t.alive)}))},l.prototype.cellsFromMouseEvent=function(t){var e=Math.floor(t.offsetX/6),n=Math.floor(t.offsetY/6);return[this.getCell(n,e),this.getCell(n+1,e),this.getCell(n+1,e+1),this.getCell(n,e+1)]},l.prototype.startRun=function(){this.state.running=!0,this.state.startTime=Date.now()},l.prototype.stopRun=function(){this.state.running=!1},l.prototype.reset=function(){var t=document.getElementById("randomize").checked;this.state=this.getInitialState(t),this.paintGrid()},l.prototype.render=function(){var t=this;return this.state.running&&(this.tick(),this.state.generations+=1),requestAnimationFrame((function(){return t.render()}))},l.prototype.paintGrid=function(){var t=this;this.state.grid.forEach((function(e){return e.forEach((function(e){return t.paintCell(e.i,e.j,e.alive)}))}))},l.prototype.paintCell=function(t,e,n){var i=this.canvas.getContext("2d");i.fillStyle=n?"black":"white",i.fillRect(6*e,6*t,5,5)},l.prototype.tick=function(){var t=this;this.state.grid.forEach((function(e,n){e.forEach((function(e,i){var o=t.liveNeighborCount(n,i);e.newAlive=e.alive?[2,3].includes(o):3===o}))})),this.state.grid.forEach((function(e){e.forEach((function(e){e.newAlive!==e.alive&&(t.paintCell(e.i,e.j,e.newAlive),e.alive=e.newAlive),e.newAlive=void 0}))}))},l.prototype.getCell=function(t,e){var n=this.loopedIndex(t,this.state.grid.length),i=this.loopedIndex(e,this.state.grid[n].length);return this.state.grid[n][i]},l.prototype.loopedIndex=function(t,e){return t<0?t+e:t>=e?t-e:t},l.prototype.liveNeighborCount=function(t,e){return[this.getCell(t-1,e-1),this.getCell(t-1,e),this.getCell(t-1,e+1),this.getCell(t,e-1),this.getCell(t,e+1),this.getCell(t+1,e-1),this.getCell(t+1,e),this.getCell(t+1,e+1)].filter((function(t){return t&&t.alive})).length};var s=l,u=a.b.div.withConfig({displayName:"game__Container",componentId:"sc-1fbplt2-0"})(["text-align:center;canvas{border:1px solid lightgray;}"]),c=a.b.button.withConfig({displayName:"game__ActionButton",componentId:"sc-1fbplt2-1"})(["margin-top:10px;"]),h=function(){var t=Object(i.useRef)(null),e=Object(i.useRef)(null),n=Object(i.useState)(!0),r=n[0],a=n[1];Object(i.useEffect)((function(){e.current=new s(t.current),e.current.init()}),[]);return o.a.createElement(u,null,o.a.createElement("h1",null,"Conway's Game of Life"),o.a.createElement("div",null,o.a.createElement("canvas",{ref:t,id:"root",width:"900",height:"600"}),o.a.createElement("div",null,o.a.createElement(c,{id:"start",onClick:function(){e.current.startRun()}},"Start"),o.a.createElement(c,{id:"stop",onClick:function(){e.current.stopRun()}},"Stop"),o.a.createElement(c,{id:"reset",onClick:function(){e.current.reset()}},"Reset"),o.a.createElement("div",null,o.a.createElement("input",{type:"checkbox",id:"randomize",checked:r,onChange:function(t){a(t.target.checked)}})," Randomize",o.a.createElement("div",{id:"randomizer-fields"},"Start with ",o.a.createElement("input",{type:"number",min:"0",max:"100",id:"randomizer-number",defaultValue:"10",size:"2"}),"% of cells alive")))))};e.default=function(){return o.a.createElement(r.a,null,o.a.createElement(h,null))}}}]);
//# sourceMappingURL=component---src-pages-code-conway-js-55cebb9b7760317b0b0f.js.map