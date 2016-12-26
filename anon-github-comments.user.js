// Copyright (C)  2016 nokaa <nokaa@cock.li>
// This software is licensed under the terms of the
// GNU General Public License version 3. You should have
// received a copy of this license with this software.
// The license may also be found at https://gnu.org/licenses/gpl.txt

// ==UserScript==
// @name        anon-github-comments
// @version     1.0.0
// @namespace   anon-github-comments
// @description Replaces usernames in Github comments with "Anonymous".
// @license     GPLv3, https://gnu.org/licenses/gpl.txt
// @include     https://github.com/*
// @include     http://github.com/*
// @grant       none
// @updateURL   https://raw.githubusercontent.com/nokaa/anon-github-comments/master/anon-github-comments.user.js
// @downloadURL https://raw.githubusercontent.com/nokaa/anon-github-comments/master/anon-github-comments.user.js
// ==/UserScript==

var links = document.getElementsByTagName("a");
var elements = [];

for (var i = (links.length - 1); i >= 0; i--) {
    elements.push(links[i]);
}

let names = elements.filter(function(x) {
    return x.className.includes("author");
});

names.forEach(function(x) {
    x.innerHTML = "Anonymous";
});
