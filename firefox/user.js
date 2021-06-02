/*
  Photon style for Firefox 89
  Ref: https://github.com/black7375/Firefox-UI-Fix/tree/photon-style
  https://github.com/black7375/Firefox-UI-Fix/blob/3f9ac3032ce90b46a190ac16b29ecf2488290d51/user.js
*/

// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS Blur Filter - 88 Above
user_pref("layout.css.backdrop-filter.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);
