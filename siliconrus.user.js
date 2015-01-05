// ==UserScript==
// @name        siliconrus
// @namespace   http://siliconrus.com
// @include     http://siliconrus.com/*
// @grant       none
// @run-at      document-start
// @version     0.1
// @downloadURL 
// @updateURL   
// ==/UserScript==

var s=document.createElement('style');
s.innerHTML='.filter-grayscale{filter:none;}';
document.getElementsByTagName('head').item(0).appendChild(s);