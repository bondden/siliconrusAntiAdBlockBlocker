// ==UserScript==
// @name        siliconrus
// @namespace   http://siliconrus.com
// @include     http://siliconrus.com/*
// @grant       none
// @run-at      document-start
// @version     0.1.2
// @downloadURL https://github.com/bondden/siliconrusAntiAdBlockBlocker/raw/master/siliconrus.user.js
// @updateURL   https://github.com/bondden/siliconrusAntiAdBlockBlocker/raw/master/siliconrus.user.js
// ==/UserScript==

//1. remove anti-adblock filter
var bondden_gS=document.createElement('style');
bondden_gS.innerHTML='.filter-grayscale{filter:none;}';
document.getElementsByTagName('head').item(0).appendChild(bondden_gS);

//execute, when DOM is ready
function bondden_gInit(){
	
	//2. remove XCFD logo and button
	var xcfd=document.getElementsByClassName('b-xcfd__about').item(0);
	if(xcfd)xcfd.parentNode.removeChild(xcfd);

}

var bondden_gRi = setInterval(function(){
	if(document.readyState==="complete"){
		bondden_gInit();
		clearInterval(bondden_gRi);
	}
},10);