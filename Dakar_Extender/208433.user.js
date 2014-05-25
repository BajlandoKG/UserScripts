// ==UserScript==
// @name        Dakar Extender
// @description Highlight riders by certain country in standings lists.
// @namespace   http://userscripts.org/scripts/show/208433 
// @version     2
// @copyright   2014+, jerone (http://jeroenvanwarmerdam.nl)
// @license     GNU GPLv3
// @grant       none
// @require     http://code.jquery.com/jquery-2.0.3.min.js
// @icon        https://lh6.googleusercontent.com/-pKPBVGEVXk0/UsXXxo0S9JI/AAAAAAAACp0/0N_pV4AqDMY/s512-no/Icon_Dakar2+%25281%2529.png
// @include     *dakar.com/*
// ==/UserScript==

(function(){

    var countryCode = "NLD";
    
    $(function(){
        $("tr:contains('\("+countryCode+"\)')").css("font-weight","bold");
    });
    
})();



// ==UserStats==
// Chars (excl. spaces): 610
// Chars (incl. spaces): 716
// Words: 65
// Lines: 29
// ==/UserStats==