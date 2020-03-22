(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "\n*, *:before, *:after {\n    box-sizing: border-box;\n}\n\nbody, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, blockquote, th, td {\n    margin: 0;\n    padding: 0;\n    direction: ltr;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    overflow-x: hidden;\n}\n\np {\n    line-height: 25px;\n}\n\n.row img {\n    height: auto;\n    max-width: 100%;\n}\n\na {\n    text-decoration: none;\n    line-height: inherit;\n    transition: opacity 0.3s ease-out;\n}\n\niframe {\n    border: 0 !important;\n}\n\n.parallax-window {\n    min-height: 400px;\n    background: transparent;\n}\n\nfigure {\n    margin: 0;\n}\n\n/* Page Border */\n\n.page-border {\n    position: fixed;\n    z-index: 999999;\n    pointer-events: none;\n}\n\n.page-border .bottom-border, .page-border .left-border, .page-border .right-border, .page-border .top-border {\n    background: #f3f3ef;\n    position: fixed;\n    z-index: 9999;\n}\n\n.page-border > .top-border, .page-border > .right-border, .page-border > .bottom-border, .page-border > .left-border {\n    padding: 11px;\n    background: #ccc;\n}\n\n.page-border .bottom-border, .page-border .top-border {\n    width: 100%;\n    padding: 10px;\n    left: 0;\n}\n\n.page-border .left-border, .page-border .right-border {\n    padding: 10px;\n    height: 100%;\n    top: 0;\n}\n\n.page-border .top-border {\n    top: 0;\n}\n\n.page-border .right-border {\n    right: 0;\n}\n\n.page-border .bottom-border {\n    bottom: 0;\n}\n\n.page-border .left-border {\n    left: 0;\n}\n\n#wrapper {\n    margin:0 15px;\n    padding: 15px 0;\n    position: relative;\n}\n\n/* --------- 1.1 Input Elements ---------- */\n\ninput, textarea {\n    border: 1px solid #e1e1e1;\n    padding: 10px;\n    transition: all .3s linear;\n    border-radius: 3px;\n}\n\ninput {\n    height: 40px;\n    margin: 3px 0;\n    outline: none;\n    line-height: normal;\n    font-size: 14px;\n}\n\ninput[type=\"submit\"] {\n    cursor: pointer;\n    border-style: solid;\n    border-width: 2px;\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\nselect {\n    border: 1px solid #e1e1e1;\n    height: 40px;\n    padding: 5px;\n}\n\ninput:focus, textarea:focus {\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n*:focus {\n    outline: none;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 2. Layout Elements */\n\n/*------------------------------------------------------------------------------------------*/\n\nsection {\n    clear: both;\n    overflow: hidden;\n}\n\n/* Rows and Columns */\n\n.row {\n    max-width: 1245px;\n    margin: 0 auto;\n    padding: 75px 0;\n    position: relative;\n}\n\n.no-padding-bottom .row, .no-padding-bottom div, .no-padding-bottom.row {\n    padding-bottom: 0;\n}\n\n.no-padding-top.row, .no-padding-top div {\n    padding-top: 0;\n}\n\n.big-padding-top {\n    padding-top: 75px !important;\n}\n\n.big-padding-bottom {\n    padding-bottom: 85px !important;\n}\n\n/* Targets all elements */\n\n[class*='col-'] {\n    float: left;\n    padding: 20px;\n}\n\n#clients .col-2-3 [class*='col-'] {\n    padding: 0;\n}\n\n/* Clearfix */\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n/* Main Widths */\n\n.col-1 {\n    width: 100%;\n}\n\n.col-2 {\n    width: 50%;\n}\n\n.col-3 {\n    width: 33.33%;\n}\n\n.col-4 {\n    width: 25%;\n}\n\n.col-5 {\n    width: 20%;\n}\n\n.col-6 {\n    width: 16.6666666667%;\n}\n\n.col-7 {\n    width: 14.2857142857%;\n}\n\n.col-8 {\n    width: 12.5%;\n}\n\n.col-9 {\n    width: 11.1111111111%;\n}\n\n.col-10 {\n    width: 10%;\n}\n\n.col-11 {\n    width: 9.09090909091%;\n}\n\n.col-12 {\n    width: 8.33%;\n}\n\n.col-2-3 {\n    width: 66.66%;\n}\n\n.col-3-4 {\n    width: 75%;\n}\n\n.col-9-10 {\n    width: 90%;\n}\n\n/* Golden Ratio */\n\n.col-61 {\n    width: 61.8%;\n}\n\n.col-38 {\n    width: 38.2%;\n}\n\n/* --------- 2.1 Header --------- */\n\n#header {\n    height: 71px !important;\n    overflow: visible;\n    z-index: 9999;\n    width: 100%;\n    position: absolute !important;\n}\n\n#header .row {\n    padding: 0;\n}\n\n#header aside {\n    text-align: right;\n}\n\n#header ul {\n    text-align: center;\n}\n\n#header li {\n    display: inline-block;\n    list-style: none;\n    margin: 0;\n}\n\n/* --------- 2.2 Logo ---------- */\n\n#logo {\n    float: left;\n    height: 71px;\n    line-height: 66px;\n    margin-right: 15px;\n}\n\n#logo h1, #logo h2 {\n    display: inline-block;\n}\n\n#banner #logo h1 {\n    font-size: 28px;\n    margin-right: 10px;\n    font-weight: 900;\n    padding: 0;\n}\n\n#logo h2 {\n    font-size: 18px;\n    padding: 0;\n}\n\n#logo img {\n    max-height: 22px;\n    vertical-align: middle;\n    margin-right: 15px;\n}\n\n#navigation-logo {\n    display: none;\n}\n\n.nav-solid #logo #banner-logo {\n    display: none;\n}\n\n.nav-solid #logo #navigation-logo {\n    display: inline-block;\n}\n\n/* --------- 2.3 Buttons ---------- */\n\n.call-to-action {\n    padding: 35px 0 35px 0;\n}\n\n/*Style*/\n\n.button {\n    font-size: 16px;\n    margin: 35px 0;\n    padding: 11px 16px;\n    transition: all .3s linear;\n    display: inline-block;\n    border-width: 3px;\n    border-style: solid;\n}\n\n/* Play Button */\n\n#video-section {\n    position:relative;\n}\n\n.play-video {\n    height:110px;\n    position:absolute;\n    top:50%;\n    margin-top:-110px;\n    width:100%;\n}\n\n.play-icon {\n    display: inline-block;\n    font-size: 0px;\n    cursor: pointer;\n    margin: 45px auto;\n    width: 110px;\n    height: 110px;\n    border-radius: 50%;\n    text-align: center;\n    position: relative;\n    z-index: 1;\n}\n\n.play-icon:after {\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    content: '';\n    box-sizing: content-box;\n}\n\n.play-icon:before {\n    font-family: 'fontawesome';\n    content: '\\f144';\n    speak: none;\n    font-size: 74px;\n    line-height: 110px;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    display: block;\n    -webkit-font-smoothing: antialiased;\n    color:#fff;\n}\n\n.play-video .play-icon {\n    background: rgba(255, 255, 255, 0.5);\n    transition: transform ease-out 0.3s, background 0.4s;\n}\n\n.play-video .play-icon:after {\n    top: 0;\n    left: 0;\n    padding: 0;\n    z-index: -1;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);\n    opacity: 0;\n    transform: scale(0.9);\n}\n\n.play-video .play-icon:hover {\n    background: rgba(255, 255, 255, 0.05);\n    transform: scale(0.93);\n    color: #fff;\n}\n\n/* --------- 2.4 Navigation ---------- */\n\n#header {\n    font-size: 13px;\n}\n\n#header aside {\n    float: right;\n}\n\n#header nav ul {\n    text-transform: uppercase;\n\n}\n\n#header nav a {\n    height: 71px;\n    line-height: 71px;\n    display: block;\n    padding: 0 10px;\n}\n\n#header nav a:hover {\n    opacity: 0.6;\n}\n\n/*Navigation Solid*/\n\n#header.nav-solid [class*='col-'] {\n    padding: 0 20px;\n}\n\n#header.nav-solid {\n    background: #fff;\n    box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.2);\n    position: fixed !important;\n    left:0;\n}\n\n#header.nav-solid nav a {\n    border-bottom: 3px solid;\n    border-color: #fff;\n    transition: all 0.3s ease-out;\n}\n\n#header.nav-solid nav a:hover {\n    opacity: 1;\n}\n\n/* Social Elements when Solid*/\n\n#header.nav-solid .social-icons a {\n    transition: all 0.3s ease-out;\n    opacity: 0.5;\n}\n\n#header.nav-solid .social-icons a:hover {\n    opacity: 1;\n    color: #e4473c;\n}\n\n/* Responsive Nav Styling */\n\n#nav-trigger {\n    display: none;\n    text-align: right;\n}\n\n#nav-trigger span {\n    display: inline-block;\n    width: 38px;\n    height: 71px;\n    color: #111;\n    cursor: pointer;\n    text-transform: uppercase;\n    font-size: 22px;\n    text-align: center;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    transition: all 0.3s ease-out;\n}\n\n#nav-trigger span:after {\n    font-family: \"fontAwesome\";\n    display: inline-block;\n    width: 38px;\n    height: 71px;\n    line-height: 75px;\n    text-align: center;\n    content: \"\\f0c9\";\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n}\n\n#nav-trigger span.open:after {\n    content: \"\\f00d\";\n}\n\n#nav-trigger span:hover, .nav-solid #nav-trigger span.open:hover, .nav-solid #nav-trigger span:hover {\n    opacity: 0.6;\n}\n\n#nav-trigger span.open, #nav-trigger span.open:hover {\n    color: #111;\n}\n\n.nav-solid #nav-trigger span.open:hover {\n    color: #999;\n}\n\n.nav-solid #nav-trigger span {\n    color: #999;\n    opacity: 1;\n}\n\nnav#nav-mobile {\n    position: relative;\n    display: none;\n}\n\nnav#nav-mobile ul {\n    display: none;\n    list-style-type: none;\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin-left: -20px;\n    margin-right: -20px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    text-align: center;\n    background-color: #fff;\n    box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2);\n}\n\nnav#nav-mobile ul:after {\n    display: none;\n}\n\nnav#nav-mobile li {\n    margin: 0 20px;\n    float: none;\n    text-align: left;\n    border-bottom: 1px solid #e1e1e1;\n}\n\nnav#nav-mobile li:last-child {\n    border-bottom: none;\n}\n\n.nav-solid nav#nav-mobile li {\n    border-top: 1px solid #e1e1e1;\n    border-bottom: none;\n}\n\nnav#nav-mobile a {\n    display: block;\n    padding: 12px 0;\n    color: #333;\n    width: 100%;\n    height: auto;\n    line-height: normal;\n    display: block;\n    border-bottom: none !important;\n    transition: all 0.3s ease-out;\n}\n\nnav#nav-mobile a:hover {\n    background: #fafafa;\n    opacity: 1;\n}\n\n/* --------- 2.5 Social Elements ---------- */\n\n#header .col-4 {\n    text-align: right;\n}\n\n.social-icons {\n    display: inline-block;\n    list-style: none;\n}\n\n.social-icons a {\n    display: inline-block;\n    width: 32px;\n    text-align: center;\n}\n\n.social-icons a:hover {\n    opacity: 0.7;\n}\n\n.social-icons span {\n    display: none;\n}\n\n#header .social-icons {\n    margin-top: 27px;\n}\n\n/* --------- 2.6 Images ---------- */\n\n/*Alignment*/\n\nimg {\n    vertical-align: top;\n}\n\n.image-center {\n    display: block;\n    margin: 0 auto;\n}\n\na img {\n    border: none;\n    transition: all 0.3s ease-out;\n    -webkit-backface-visibility: hidden;\n}\n\na img:hover {\n    opacity: 0.7;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 3. Fonts */\n\n/*------------------------------------------------------------------------------------------*/\n\nh1 {\n    padding: 20px 0;\n}\n\nh2 {\n    padding: 14px 0;\n}\n\nh3 {\n    padding: 10px 0;\n}\n\nh4 {\n    padding: 7px 0;\n}\n\nh5 {\n    padding: 7px 0;\n}\n\nh6 {\n    padding: 7px 0;\n}\n\n/* Text Alignment */\n\n.text-left {\n    text-align: left;\n}\n\n.text-center {\n    text-align: center;\n}\n\n.text-right {\n    text-align: right;\n}\n\n/* Section Headings */\n\n.section-heading {\n    padding: 0 0 15px 0;\n}\n\n.section-subtitle {\n    font-size: 18px;\n    padding-top: 0;\n}\n\n.section-heading h3 {\n    font-size: 14px;\n    font-weight: bold;\n    color: #ccc;\n    letter-spacing: 2px;\n    padding-bottom: 0;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 4. Banner */\n\n/*------------------------------------------------------------------------------------------*/\n\n#banner {\n    background-size: cover;\n}\n\n#banner-content.row {\n    padding-top: 170px;\n    padding-bottom: 100px;\n}\n\n#banner h1 {\n    padding-top: 5%;\n}\n\n#banner .section-heading:before {\n    content: \"\";\n    display: block;\n    width: 30px;\n    height: 5px;\n    margin-top: 30px;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 5. Content Elements */\n\n/*------------------------------------------------------------------------------------------*/\n\n/* --------- 5.1 Icons ---------- */\n\n/*Font Icon sizes*/\n\n.fa-1x {\n    font-size: 15px !important;\n}\n\n/*Icon Block*/\n\n.icon-block {\n    position: relative;\n}\n\n.icon-block h4 {\n    font-weight: bold;\n    padding-top: 0;\n}\n\n.icon-block .icon {\n    position: absolute;\n}\n\n.icon-block p {\n    margin-top: 0;\n}\n\n/* Icon Left*/\n\n.icon-left .icon {\n    left: 15;\n}\n\n.icon-left .icon-block-description {\n    padding-left: 53px;\n}\n\n/* Icon Right */\n\n.icon-right .icon {\n    right: 15;\n}\n\n.icon-right .icon-block-description {\n    padding-right: 53px;\n}\n\n/* Icon Above */\n\n.icon-top {\n    display: block;\n}\n\n.icon-top .icon {\n    position: relative;\n    display: block;\n}\n\n.icon-top .icon-block-description {\n    padding-top: 25px;\n}\n\n/* --------- 5.2 Parallax Elements ---------- */\n\n.banner-parallax-1, .banner-parallax-2, .banner-parallax-3 {\n    min-height: 350px;\n}\n\n/* --------- 5.3 Divider ---------- */\n\n.divider {\n    position: relative;\n    width: 40%;\n    height: 20px;\n    line-height: 20px;\n    margin: 10px auto 5px auto;\n    clear: both;\n    text-align: center;\n}\n\n.divider-inner {\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    top: 50%;\n    margin-top: -1px;\n    border-top: 1px solid;\n    border-color: #e1e1e1;\n}\n\n.divider i {\n    background: #fff;\n    position: relative;\n    top: -11px;\n    padding: 0 5px 0 5px;\n    color: #e1e1e1;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 6. Landing Page Sections */\n\n/*------------------------------------------------------------------------------------------*/\n\n/* --------- 6.1 Introduction ---------- */\n\n.introduction img.featured {\n    padding: 55px 0 0 0;\n}\n\n/* --------- 6.2 Features ---------- */\n\n.features.row {\n    padding-left: 5%;\n    padding-right: 5%;\n}\n\n.features div:nth-child(4) {\n    clear: both;\n}\n\n/* --------- 6.3 Testimonials ---------- */\n\n.testimonial {\n    padding: 15px;\n}\n\nblockquote {\n    position: relative;\n}\n\n.testimonial img {\n    max-height: 120px;\n    border-radius: 250em;\n}\n\n.testimonial footer {\n    padding-top: 12px;\n}\n\n/* Style Classic - Avatar above Testimonial */\n\n.testimonial.classic img {\n    display: inline-block;\n    margin-bottom: 25px;\n}\n\n.testimonial.classic q {\n    display: block;\n}\n\n.testimonial.classic footer:before {\n    display: block;\n    content: \"\";\n    width: 30px;\n    height: 4px;\n    margin: 10px auto 15px auto;\n}\n\n/* Style Big */\n\n.testimonial.bigtest {\n    padding-top: 0;\n}\n\n.testimonial.bigtest q {\n    font-size: 22px;\n}\n\n/* --------- 6.4 Gallery ---------- */\n\n#gallery img {\n    max-height: 300px;\n}\n\n#gallery [class*='col-'] {\n    padding: 0;\n}\n\n#gallery a {\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n}\n\n#gallery a:hover img {\n    opacity: 0.15;\n    -moz-backface-visibility: hidden;\n}\n\n#gallery a:before {\n    font-size: 2.2em;\n    font-style: normal;\n    font-weight: normal;\n    text-align: center;\n    content: \"+\";\n    width: 70px;\n    height: 70px;\n    border-radius: 100em;\n    display: block;\n    position: absolute;\n    top: 55%;\n    left: 50%;\n    line-height: 72px;\n    margin: -35px 0 0 -35px;\n    opacity: 0;\n    transition: all .2s linear;\n    vertical-align: middle;\n}\n\n#gallery a:hover:before {\n    opacity: 1;\n    top: 50%;\n    left: 50%;\n}\n\n/**\n * Featherlight – ultra slim jQuery lightbox\n * Version 1.3.3 - http://noelboss.github.io/featherlight/\n *\n * Copyright 2015, Noël Raoul Bossart (http://www.noelboss.com)\n * MIT Licensed.\n**/\n\n@media all {\n    .featherlight {\n        display: none;\n\n        /* dimensions: spanning the background from edge to edge */\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 2147483647; /* z-index needs to be >= elements on the site. */\n\n        /* position: centering content */\n        text-align: center;\n\n        /* insures that the ::before pseudo element doesn't force wrap with fixed width content; */\n        white-space: nowrap;\n\n        /* styling */\n        cursor: pointer;\n        background: #333;\n        /* IE8 \"hack\" for nested featherlights */\n        background: rgba(0, 0, 0, 0);\n    }\n\n    /* support for nested featherlights. Does not work in IE8 (use JS to fix) */\n    .featherlight:last-of-type {\n        background: rgba(0, 0, 0, 0.8);\n    }\n\n    .featherlight:before {\n        /* position: trick to center content vertically */\n        content: '';\n        display: inline-block;\n        height: 100%;\n        vertical-align: middle;\n        margin-right: -0.25em;\n    }\n\n    .featherlight .featherlight-content {\n\n        /* position: centering vertical and horizontal */\n        text-align: left;\n        vertical-align: middle;\n        display: inline-block;\n\n        /* dimensions: cut off images */\n        overflow: auto;\n        padding: 25px 0;\n        border-bottom: 25px solid transparent;\n\n        /* dimensions: handling small or empty content */\n        min-width: 30%;\n\n        /* dimensions: handling large content */\n        margin-left: 5%;\n        margin-right: 5%;\n        max-height: 95%;\n\n        /* styling */\n        cursor: auto;\n\n        /* reset white-space wrapping */\n        white-space: normal;\n    }\n\n    /* contains the content */\n    .featherlight .featherlight-inner {\n        /* make sure its visible */\n        display: block;\n    }\n\n    .featherlight .featherlight-close-icon {\n        /* position: centering vertical and horizontal */\n        position: absolute;\n        z-index: 9999;\n        top: 25px;\n        right: 25px;\n\n        /* dimensions: 25px x 25px */\n        line-height: 25px;\n        width: 25px;\n\n        /* styling */\n        cursor: pointer;\n        text-align: center;\n        color: #fff;\n        font-family: \"fontawesome\";\n        font-size: 22px;\n        opacity: 0.5;\n        transition: all 0.3s ease-out;\n    }\n\n    .featherlight .featherlight-close-icon:hover {\n        opacity: 1;\n    }\n\n    .featherlight .featherlight-image {\n        /* styling */\n        max-height: 100%;\n        max-width:100%;\n    }\n\n    .featherlight-iframe .featherlight-content {\n        /* removed the border for image croping since iframe is edge to edge */\n        border-bottom: 0;\n        padding: 0;\n    }\n\n    .featherlight iframe {\n        /* styling */\n        border: none;\n    }\n}\n\n/* handling phones and small screens */\n\n@media only screen and (max-width: 1024px) {\n    .featherlight .featherlight-content {\n        /* dimensions: maximize lightbox with for small screens */\n        margin-left: 10px;\n        margin-right: 10px;\n        max-height: 98%;\n\n        padding: 10px 10px 0;\n        border-bottom: 10px solid transparent;\n    }\n\n}\n\n/* Gallery Styling */\n\n@media all {\n    .featherlight-next,\n    .featherlight-previous {\n        font-family: \"fontawesome\";\n        font-size: 22px;\n        display: block;\n        position: absolute;\n        top: 25px;\n        right: 0;\n        bottom: 0;\n        left: 80%;\n        cursor: pointer;\n        /* preventing text selection */\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* IE9 hack, otherwise navigation doesn't appear */\n        background: rgba(0, 0, 0, 0);\n        transition: all 0.3s ease-out;\n    }\n\n    .featherlight-previous {\n        left: 0;\n        right: 80%;\n    }\n\n    .featherlight-next span,\n    .featherlight-previous span {\n        display: inline-block;\n        opacity: 0.3;\n        position: absolute;\n        top: 50%;\n        width: 100%;\n        font-size: 80px;\n        line-height: 80px;\n\n        /* center vertically */\n        margin-top: -40px;\n        color: #fff;\n        font-style: normal;\n        font-weight: normal;\n        transition: all 0.3s ease-out;\n    }\n\n    .featherlight-next span {\n        text-align: right;\n        left: auto;\n        right: 7%;\n    }\n\n    .featherlight-previous span {\n        text-align: left;\n        left: 7%;\n    }\n\n    .featherlight-next:hover span,\n    .featherlight-previous:hover span {\n        display: inline-block;\n        opacity: 1;\n    }\n\n    /* Hide navigation while loading */\n    .featherlight-loading .featherlight-previous, .featherlight-loading .featherlight-next {\n        display: none;\n    }\n}\n\n/* Always display arrows on touch devices */\n\n@media only screen and (max-device-width: 1024px) {\n    .featherlight-next:hover,\n    .featherlight-previous:hover {\n        background: none;\n    }\n\n    .featherlight-next span,\n    .featherlight-previous span {\n        display: block;\n    }\n}\n\n/* handling phones and small screens */\n\n@media only screen and (max-width: 1024px) {\n    .featherlight-next,\n    .featherlight-previous {\n        top: 10px;\n        right: 10px;\n        left: 85%;\n    }\n\n    .featherlight-previous {\n        left: 10px;\n        right: 85%;\n    }\n\n    .featherlight-next span,\n    .featherlight-previous span {\n        margin-top: -30px;\n        font-size: 40px;\n    }\n}\n\n/* --------- 6.5 Video ---------- */\n\n#video-box {\n    color:#fff;\n    position:relative;\n    overflow:hidden;\n    text-align:center;\n}\n\n.video_container, .easyContainer {\n    position: relative;\n    padding-bottom: 56.25%; /* 16/9 ratio */\n    margin: 0;\n    padding-top: 0; /* IE6 workaround*/\n    height: 0;\n    overflow: hidden;\n}\n\n.video_container iframe, .video_container object, .video_container embed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    height: 100% !important;\n}\n\n.slvj-lightbox iframe, .slvj-lightbox object, .slvj-lightbox embed {\n    width: 100% !important;\n    height: 529px !important;\n}\n\n.videojs-background-wrap {\n    overflow: hidden;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: -998;\n}\n\n#slvj-window {\n    width: 100%;\n    min-height: 100%;\n    z-index: 9999999999;\n    background: rgba(0, 0, 0, 0.8);\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n#slvj-window,\n#slvj-window * {\n    box-sizing: border-box;\n}\n\n#slvj-background-close {\n    width: 100%;\n    min-height: 100%;\n    z-index: 31;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n#slvj-back-lightbox {\n    max-width: 940px;\n    max-height: 529px;\n    z-index: 32;\n    text-align: center;\n    margin: 0 auto;\n}\n\n.slvj-lightbox {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    z-index: 53;\n}\n\n#slvj-close-icon:before {\n    font-family: \"fontawesome\";\n    color: #fff;\n    content: '\\f00d';\n    font-size: 22px;\n    opacity: 0.5;\n    transition: all 0.3s ease-out;\n    z-index: 99999;\n    height: 22px;\n    width: 22px;\n    position: absolute;\n    top: 15px;\n    right: 15px;\n    cursor: pointer;\n}\n\n#slvj-close-icon:before:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n/* --------- 6.6 Clients ---------- */\n\n#clients a {\n    display: block;\n    text-align: center;\n    position: relative;\n    text-transform: uppercase;\n    font-weight: bold;\n    color: #fff;\n}\n\n#clients img {\n    display: inline-block;\n    padding: 15px 25px;\n}\n\n.client-overlay {\n    background: rgba(0, 0, 0, 0.8);\n    position: absolute;\n    top:\n    0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    transition: all 0.3s ease-out;\n}\n\n#clients a:hover .client-overlay {\n    opacity: 1;\n}\n\n.client-overlay span {\n    position: absolute;\n    top: 48%;\n    left: 0;\n    width: 100%;\n    text-align: center;\n    display: inline-block;\n}\n\n/* --------- 6.7 Pricing Table ---------- */\n\n.pricing-block-content {\n    background: #fff;\n    padding: 25px 0 25px 0;\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\n    transition: all 0.2s ease-in-out 0s;\n    position: relative;\n    border: 10px solid #fff;\n}\n\n.pricing-block ul {\n    list-style: none;\n    margin: 25px 0 25px 0;\n}\n\n.pricing-block li {\n    padding: 14px 0;\n    border-bottom: 1px dotted #e1e1e1;\n}\n\n.pricing-block li:last-of-type {\n    border:none;\n}\n\n.pricing-block h3 {\n    font-size:17px;\n    text-transform:uppercase;\n    padding-bottom:0;\n}\n\n.pricing-sub {\n    font-style: italic;\n    color:#ccc;\n    margin:0 0 25px 0;\n}\n\n/*Price*/\n\n.pricing {\n    background: #f5f5f5;\n    padding: 25px;\n    position: relative;\n}\n\n.price {\n    display: inline-block;\n    font-size: 62px;\n    font-weight: 700;\n    position: relative;\n}\n\n.price span {\n    position: absolute;\n    top: 0;\n    left: -20px;\n    font-size: 22px;\n}\n\n.pricing  p {\n    font-style:italic;\n    color:#b4b4b4;\n    line-height:auto;\n    margin:0;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 7. Footer */\n\n/*------------------------------------------------------------------------------------------*/\n\n#landing-footer {\n    clear: both;\n}\n\n#landing-footer .row {\n    padding: 0;\n}\n\n#landing-footer p {\n    margin: 0;\n}\n\n#landing-footer ul {\n    list-style: none;\n    text-align: right;\n}\n\n#landing-footer li {\n    display: inline-block;\n}\n\n/* Scroll Up */\n\n#scrollUp {\n    bottom: 15px;\n    right: 30px;\n    width: 70px;\n    height: 80px;\n    margin-bottom: -10px;\n    padding: 0 5px 20px 5px;\n    text-align: center;\n    text-decoration: none;\n    color: #fff;\n    transition: margin-bottom 150ms linear;\n}\n\n#scrollUp:hover {\n    margin-bottom: 0;\n}\n\n#scrollUp:before {\n    background: #ccc;\n    font-family: \"fontawesome\";\n    font-size: 2.4em;\n    font-style: normal;\n    font-weight: normal;\n    text-align: center;\n    color: #fff;\n    width: 45px;\n    height: 45px;\n    display: inline-block;\n    line-height: 45px;\n    content: \"\\f106\";\n    opacity: 1;\n}\n\n/*Preloader*/\n\n#preloader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #fff; /* change if the mask should have another color then white */\n    z-index: 99999; /* makes sure it stays on top */\n}\n\n#status {\n    width: 110px;\n    height: 110px;\n    position: absolute;\n    left: 50%; /* centers the loading animation horizontally one the screen */\n    top: 50%; /* centers the loading animation vertically one the screen */\n    background-position: center;\n    margin: -55px 0 0 -55px; /* is width and height divided by two */\n    text-align: center;\n}\n\n/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */\n\n.la-ball-triangle-path,\n.la-ball-triangle-path > div {\n    position: relative;\n    box-sizing: border-box;\n}\n\n.la-ball-triangle-path {\n    display: block;\n    font-size: 0;\n    color: #fff;\n}\n\n.la-ball-triangle-path.la-dark {\n    color: #333;\n}\n\n.la-ball-triangle-path > div {\n    display: inline-block;\n    float: none;\n    background-color: currentColor;\n    border: 0 solid currentColor;\n}\n\n.la-ball-triangle-path {\n    width: 32px;\n    height: 32px;\n}\n\n.la-ball-triangle-path > div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n}\n\n.la-ball-triangle-path > div:nth-child(1) {\n    -webkit-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;\n    animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;\n}\n\n.la-ball-triangle-path > div:nth-child(2) {\n    -webkit-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;\n    animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;\n}\n\n.la-ball-triangle-path > div:nth-child(3) {\n    -webkit-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;\n    animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;\n}\n\n.la-ball-triangle-path.la-sm {\n    width: 16px;\n    height: 16px;\n}\n\n.la-ball-triangle-path.la-sm > div {\n    width: 4px;\n    height: 4px;\n}\n\n.la-ball-triangle-path.la-2x {\n    width: 64px;\n    height: 64px;\n}\n\n.la-ball-triangle-path.la-2x > div {\n    width: 20px;\n    height: 20px;\n}\n\n.la-ball-triangle-path.la-3x {\n    width: 96px;\n    height: 96px;\n}\n\n.la-ball-triangle-path.la-3x > div {\n    width: 30px;\n    height: 30px;\n}\n\n/*\n * Animations\n */\n\n@-webkit-keyframes ball-triangle-path-ball-one {\n    0% {\n        transform: translate(0, 220%);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        transform: translate(110%, 0);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        transform: translate(220%, 220%);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        transform: translate(0, 220%);\n    }\n}\n\n@keyframes ball-triangle-path-ball-one {\n    0% {\n        transform: translate(0, 220%);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        transform: translate(110%, 0);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        transform: translate(220%, 220%);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        transform: translate(0, 220%);\n    }\n}\n\n@-webkit-keyframes ball-triangle-path-ball-two {\n    0% {\n        transform: translate(110%, 0);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        transform: translate(220%, 220%);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        transform: translate(0, 220%);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        transform: translate(110%, 0);\n    }\n}\n\n@keyframes ball-triangle-path-ball-two {\n    0% {\n        transform: translate(110%, 0);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        transform: translate(220%, 220%);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        transform: translate(0, 220%);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        transform: translate(110%, 0);\n    }\n}\n\n@-webkit-keyframes ball-triangle-path-ball-tree {\n    0% {\n        transform: translate(220%, 220%);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        transform: translate(0, 220%);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        transform: translate(110%, 0);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        transform: translate(220%, 220%);\n    }\n}\n\n@keyframes ball-triangle-path-ball-tree {\n    0% {\n        transform: translate(220%, 220%);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        transform: translate(0, 220%);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        transform: translate(110%, 0);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        transform: translate(220%, 220%);\n    }\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* Responsive Elements */\n\n/*------------------------------------------------------------------------------------------*/\n\n/* =Media Queries for Nav\n===============================*/\n\n@media all and (max-width: 1024px) {\n    #nav-trigger {\n        display: block;\n    }\n\n    nav#nav-main {\n        display: none;\n    }\n\n    nav#nav-mobile {\n        display: block;\n    }\n\n    nav#nav-mobile li {\n        display: block;\n    }\n\n    #header aside {\n        display: none;\n    }\n}\n\n/* Landscape mobile & down\n===============================*/\n\n@media (max-width: 480px) {\n\n    #wrapper {\n        margin:0;\n        padding:0;\n    }\n\n    .page-border, #scrollUp, #scrollUp:before {\n        display:none;\n    }\n\n    .row {\n        padding: 15px !important;\n    }\n\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-2-3, .col-3-4, .col-9-10, .col-61, .col-38, .row {\n        width: 100%;\n    }\n\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-2-3, .col-3-4, .col-9-10, .col-61, .col-38 {\n        padding-right: 0;\n        padding-left: 0;\n    }\n\n    /*-----------------Header Elements-----------------*/\n    #header .row {\n        padding: 0 15px !important;\n    }\n\n    #header.nav-solid [class*=\"col-\"] {\n        padding: 0;\n    }\n\n    /*Logo*/\n    #logo h2 {\n        padding: 0;\n    }\n\n    /* Social */\n    #header aside {\n        clear: both;\n        padding: 0;\n    }\n\n    #header ul.social-icons {\n        margin-top: 0;\n    }\n\n    #banner-content.row {\n        padding-top: 85px !important;\n    }\n\n    /*-----------------Sections-----------------*/\n\n    /* Call to Action*/\n    .call-to-action {\n        padding-bottom: 25px;\n    }\n\n    /* Video */\n    .slvj-lightbox iframe, .slvj-lightbox object, .slvj-lightbox embed {\n        height: 270px !important;\n    }\n\n    /* Footer */\n    #landing-footer #copyright {\n        float: left;\n        width: 50%;\n    }\n\n    #landing-footer .social-icons {\n        float: right;\n        width: 50%;\n    }\n\n    /*-----------------Typography-----------------*/\n    h1 {\n        font-size: 38px;\n    }\n\n    #banner h1 {\n        font-size: 48px;\n    }\n\n    /* Hide Elements */\n    a#scrollUp {\n        display: none !important;\n    }\n\n}\n\n/* Mobile to Tablet Portrait\n===============================*/\n\n@media (min-width: 480px) and (max-width: 767px) {\n\n    #wrapper {\n        margin:0;\n        padding:0;\n    }\n\n    .page-border, #scrollUp, #scrollUp:before {\n        display:none;\n    }\n\n\n    .row {\n        padding: 15px 0 !important;\n    }\n\n    .col-1, .col-2, .col-5, .col-7, .col-9, .col-11, .col-2-3, .col-3-4, .col-61, .col-38, .row {\n        width: 100%;\n    }\n\n    .col-3, .col-4, .col-6, .col-8, .col-10, .col-12 {\n        width: 50%;\n    }\n\n    /*-----------------Header Elements-----------------*/\n    #header .row {\n        padding: 0 !important;\n    }\n\n    #header aside {\n        display: inline-block;\n        position: absolute;\n        top: 40px;\n        right: 60px;\n        padding-top:3px;\n        padding-right: 5px;\n    }\n\n    #header.nav-solid aside {\n        top: 20px;\n    }\n\n    #header aside ul {\n        margin-top: 0 !important;\n        padding-top: 6px;\n    }\n\n    #banner-content.row {\n        padding-top: 85px !important;\n    }\n\n    /*Navigation*/\n    nav#nav-mobile ul {\n        margin-left: -40px;\n        margin-right: -40px;\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n\n    /*-----------------Sections-----------------*/\n\n    /* Video */\n    .slvj-lightbox iframe, .slvj-lightbox object, .slvj-lightbox embed {\n        height: 370px !important;\n    }\n\n    /* Footer */\n    #landing-footer #copyright {\n        float: left;\n        width: 50%;\n    }\n\n    #landing-footer .social-icons {\n        float: right;\n        width: 50%;\n    }\n\n}\n\n/* Landscape Tablet to Desktop\n===============================*/\n\n@media (min-width: 768px) and (max-width: 1024px) {\n\n    #wrapper {\n        margin:0;\n        padding:0;\n    }\n\n    .page-border {\n        display:none;\n    }\n\n    .big-padding-top {\n        padding-top: 45px !important;\n    }\n\n    /*-----------------Header Elements-----------------*/\n    #header aside {\n        display: inline-block;\n        position: absolute;\n        top: 40px;\n        right: 60px;\n        padding-top:3px;\n        padding-right: 5px;\n    }\n\n    #header.nav-solid aside {\n        top: 20px;\n    }\n\n    #header aside ul {\n        margin-top: 0 !important;\n        padding-top: 6px;\n    }\n\n    /*Navigation*/\n    nav#nav-mobile ul {\n        margin-left: -40px;\n        margin-right: -40px;\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n\n    /*-----------------Sections-----------------*/\n\n    /* Video */\n    .slvj-lightbox iframe, .slvj-lightbox object, .slvj-lightbox embed {\n        height: 432px !important;\n    }\n\n}\n\nbody {\n    background:#fff;\n}\n\n/* Default Link Color */\n\na, .la-ball-triangle-path {\n    color:#d2b356;\n}\n\na:hover, #header.nav-solid nav a:hover {\n    color:#d2b356;\n}\n\n/* Default Icon Color */\n\n.icon i {\n    color:#d2b356;\n}\n\n/* Border Color */\n\n#banner .section-heading:before, .testimonial.classic footer:before {\n    background: #d2b356;\n}\n\n.pricing-block-content:hover {\n    border-color:#d2b356;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 2. Navigation */\n\n/*------------------------------------------------------------------------------------------*/\n\n/* Transparent Navigation Color on a Banner */\n\n#header nav a, #header i {\n    color:#111;\n}\n\n/* Navigation Colors when the Navigation is sticky and solid */\n\n#header.nav-solid, #header.nav-solid a, #header.nav-solid i, #nav-mobile ul li a {\n    color:#333;\n}\n\n/* Navigation Active State */\n\n#header.nav-solid .active {\n    color: #d2b356;\n    border-color: #d2b356;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 3. Primary and Secondary Colors */\n\n/*------------------------------------------------------------------------------------------*/\n\n/* Primary Background and Text Colors */\n\n.primary-color, .featured .pricing {\n    background-color:#d2b356;\n}\n\n.primary-color, .primary-color .section-title, .primary-color .section-subtitle, .featured .pricing, .featured .pricing p {\n    color:#fff;    \n}\n\n.section-heading h2:after {\n    background:#d2b356;\n    content:\"\";\n    display:block;\n    width:30px;\n    height:5px;\n    margin-top:30px;\n}\n\n.text-center .section-heading h2:after {\n    margin:30px auto 25px auto;\n}\n\n/* Primary Icon Colors */\n\n.primary-color .icon i, .primary-color i {\n    color:#fff;\n}\n\n/* Secondary Background and Text Colors */\n\n.secondary-color {\n    background-color:#f5f5f5;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 4. Banner */\n\n/*------------------------------------------------------------------------------------------*/\n\n/* Banner Background and Text Colors */\n\n#banner {\n    background: url('banner-image-1.jpg') no-repeat center top;\n    background-size:cover;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 5. Typography */\n\n/*------------------------------------------------------------------------------------------*/\n\nbody {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size:15px;\n    font-weight:normal;\n    color:#111;\n}\n\n/* Logo, if you are using Fonts as Logo and not image\n\n#logo h1 {\n    font-family:;\n    font-size:; \n    font-weight:;\n    color:;\n}\n\n#logo h2 {\n    font-family:;\n    font-size:; \n    font-weight:;\n    color:;\n}\n\n*/\n\n/* Banner Typography */\n\n#banner h1 {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size:62px;\n    line-height:60px;\n    font-weight:800;\n    color:#111;\n}\n\n#banner h2 {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size:18px;\n    font-weight:300;\n    color:#111;\n}\n\n/* Section Title and Subtitle */\n\n.section-title {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size: 34px; \n    font-weight:700;\n    color:#111;\n}\n\n.section-subtitle {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size: 16px;\n    font-weight:300;\n    color:#9c9c9c;\n}\n\n/* Testimonial */\n\n.testimonial q {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size: 17px; \n    font-weight:300;\n}\n\n.testimonial.classic q, .testimonial.classic footer {\n    color:#111;\n}\n\n/* Standard Headings h1-h6 */\n\nh1 {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size: 40px; \n    font-weight:300;\n    color:#111;\n}\n\nh2 {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size: 34px; \n    font-weight:300;\n    color:#111;\n}\n\nh3 {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size: 30px; \n    font-weight:700;\n    color:#111;\n}\n\nh4 {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size: 18px; \n    font-weight:400;\n    color:#111;\n}\n\nh5 {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size: 16px; \n    font-weight:400;\n    color:#111;\n}\n\nh6 {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size: 14px; \n    font-weight:400;\n    color:#111;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 6. Buttons */\n\n/*------------------------------------------------------------------------------------------*/\n\n/* ----------Default Buttons---------- */\n\n/* Button Text */\n\n.button, input[type=\"submit\"]  {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size:14px;\n    font-weight:bold;\n    color:#111;\n}\n\n/* Button Color */\n\n.button, input[type=\"submit\"] {\n    border-color:#111;\n}\n\n/* Button Hover Color */\n\n.button:hover,  input[type=\"submit\"]:hover {\n    border-color:#d2b356;\n    color:#d2b356;\n}\n\n/* ----------Banner Buttons---------- */\n\n/* Button Text */\n\n#banner .button {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size:16px;\n    color:#111;\n}\n\n/* Button Color */\n\n#banner .button {\n    border-color:#111;\n}\n\n/* Button Hover Color */\n\n#banner .button:hover {\n    color:#d2b356;\n    border-color:#d2b356;\n}\n\n/*------------------------------------------------------------------------------------------*/\n\n/* 7. Footer */\n\n/*------------------------------------------------------------------------------------------*/\n\n#landing-footer, #landing-footer p, #landing-footer a {\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\n    font-size:12px;\n    font-weight:normal;\n    color:#999;\n}\n\n/* Footer Icon Color */\n\n#landing-footer i {\n    color:#999;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QUNJLHNEQUFzRDtJQUN0RCxlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFHQSw2RkFBNkY7O0FBQzdGLGVBQWU7O0FBQ2YsNkZBQTZGOztBQUU3Rix3Q0FBd0M7O0FBR3hDLGdCQUFnQjs7QUFFaEI7SUFDSSxzREFBc0Q7SUFDdEQsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBR0EsaUJBQWlCOztBQUVqQjtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQSx1QkFBdUI7O0FBRXZCO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7O0FBR0EsdUNBQXVDOztBQUd2QyxnQkFBZ0I7O0FBRWhCO0lBQ0ksc0RBQXNEO0lBQ3RELGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBR0EsaUJBQWlCOztBQUVqQjtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQSx1QkFBdUI7O0FBRXZCO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFHQSw2RkFBNkY7O0FBQzdGLGNBQWM7O0FBQ2QsNkZBQTZGOztBQUU3RjtJQUNJLHNEQUFzRDtJQUN0RCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5LCBkaXYsIGRsLCBkdCwgZGQsIHVsLCBvbCwgbGksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHByZSwgZm9ybSwgYmxvY2txdW90ZSwgdGgsIHRkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXJlY3Rpb246IGx0cjtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5wIHtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLnJvdyBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xufVxuXG5pZnJhbWUge1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4ucGFyYWxsYXgtd2luZG93IHtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuZmlndXJlIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8qIFBhZ2UgQm9yZGVyICovXG5cbi5wYWdlLWJvcmRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnBhZ2UtYm9yZGVyIC5ib3R0b20tYm9yZGVyLCAucGFnZS1ib3JkZXIgLmxlZnQtYm9yZGVyLCAucGFnZS1ib3JkZXIgLnJpZ2h0LWJvcmRlciwgLnBhZ2UtYm9yZGVyIC50b3AtYm9yZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2VmO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuXG4ucGFnZS1ib3JkZXIgPiAudG9wLWJvcmRlciwgLnBhZ2UtYm9yZGVyID4gLnJpZ2h0LWJvcmRlciwgLnBhZ2UtYm9yZGVyID4gLmJvdHRvbS1ib3JkZXIsIC5wYWdlLWJvcmRlciA+IC5sZWZ0LWJvcmRlciB7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4ucGFnZS1ib3JkZXIgLmJvdHRvbS1ib3JkZXIsIC5wYWdlLWJvcmRlciAudG9wLWJvcmRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsZWZ0OiAwO1xufVxuXG4ucGFnZS1ib3JkZXIgLmxlZnQtYm9yZGVyLCAucGFnZS1ib3JkZXIgLnJpZ2h0LWJvcmRlciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xufVxuXG4ucGFnZS1ib3JkZXIgLnRvcC1ib3JkZXIge1xuICAgIHRvcDogMDtcbn1cblxuLnBhZ2UtYm9yZGVyIC5yaWdodC1ib3JkZXIge1xuICAgIHJpZ2h0OiAwO1xufVxuXG4ucGFnZS1ib3JkZXIgLmJvdHRvbS1ib3JkZXIge1xuICAgIGJvdHRvbTogMDtcbn1cblxuLnBhZ2UtYm9yZGVyIC5sZWZ0LWJvcmRlciB7XG4gICAgbGVmdDogMDtcbn1cblxuI3dyYXBwZXIge1xuICAgIG1hcmdpbjowIDE1cHg7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4vKiAtLS0tLS0tLS0gMS4xIElucHV0IEVsZW1lbnRzIC0tLS0tLS0tLS0gKi9cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuaW5wdXQge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDNweCAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5zZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAyLiBMYXlvdXQgRWxlbWVudHMgKi9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuc2VjdGlvbiB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogUm93cyBhbmQgQ29sdW1ucyAqL1xuXG4ucm93IHtcbiAgICBtYXgtd2lkdGg6IDEyNDVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiA3NXB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubm8tcGFkZGluZy1ib3R0b20gLnJvdywgLm5vLXBhZGRpbmctYm90dG9tIGRpdiwgLm5vLXBhZGRpbmctYm90dG9tLnJvdyB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5uby1wYWRkaW5nLXRvcC5yb3csIC5uby1wYWRkaW5nLXRvcCBkaXYge1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYmlnLXBhZGRpbmctdG9wIHtcbiAgICBwYWRkaW5nLXRvcDogNzVweCAhaW1wb3J0YW50O1xufVxuXG4uYmlnLXBhZGRpbmctYm90dG9tIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogODVweCAhaW1wb3J0YW50O1xufVxuXG4vKiBUYXJnZXRzIGFsbCBlbGVtZW50cyAqL1xuXG5bY2xhc3MqPSdjb2wtJ10ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNjbGllbnRzIC5jb2wtMi0zIFtjbGFzcyo9J2NvbC0nXSB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLyogQ2xlYXJmaXggKi9cblxuLmNsZWFyZml4OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4vKiBNYWluIFdpZHRocyAqL1xuXG4uY29sLTEge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLTIge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5jb2wtMyB7XG4gICAgd2lkdGg6IDMzLjMzJTtcbn1cblxuLmNvbC00IHtcbiAgICB3aWR0aDogMjUlO1xufVxuXG4uY29sLTUge1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5jb2wtNiB7XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xufVxuXG4uY29sLTcge1xuICAgIHdpZHRoOiAxNC4yODU3MTQyODU3JTtcbn1cblxuLmNvbC04IHtcbiAgICB3aWR0aDogMTIuNSU7XG59XG5cbi5jb2wtOSB7XG4gICAgd2lkdGg6IDExLjExMTExMTExMTElO1xufVxuXG4uY29sLTEwIHtcbiAgICB3aWR0aDogMTAlO1xufVxuXG4uY29sLTExIHtcbiAgICB3aWR0aDogOS4wOTA5MDkwOTA5MSU7XG59XG5cbi5jb2wtMTIge1xuICAgIHdpZHRoOiA4LjMzJTtcbn1cblxuLmNvbC0yLTMge1xuICAgIHdpZHRoOiA2Ni42NiU7XG59XG5cbi5jb2wtMy00IHtcbiAgICB3aWR0aDogNzUlO1xufVxuXG4uY29sLTktMTAge1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi8qIEdvbGRlbiBSYXRpbyAqL1xuLmNvbC02MSB7XG4gICAgd2lkdGg6IDYxLjglO1xufVxuXG4uY29sLTM4IHtcbiAgICB3aWR0aDogMzguMiU7XG59XG5cbi8qIC0tLS0tLS0tLSAyLjEgSGVhZGVyIC0tLS0tLS0tLSAqL1xuXG4jaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDcxcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xufVxuXG4jaGVhZGVyIC5yb3cge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbiNoZWFkZXIgYXNpZGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jaGVhZGVyIHVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNoZWFkZXIgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLyogLS0tLS0tLS0tIDIuMiBMb2dvIC0tLS0tLS0tLS0gKi9cblxuI2xvZ28ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogNzFweDtcbiAgICBsaW5lLWhlaWdodDogNjZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbiNsb2dvIGgxLCAjbG9nbyBoMiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jYmFubmVyICNsb2dvIGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI2xvZ28gaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jbG9nbyBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDIycHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbiNuYXZpZ2F0aW9uLWxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uYXYtc29saWQgI2xvZ28gI2Jhbm5lci1sb2dvIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmF2LXNvbGlkICNsb2dvICNuYXZpZ2F0aW9uLWxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogLS0tLS0tLS0tIDIuMyBCdXR0b25zIC0tLS0tLS0tLS0gKi9cblxuLmNhbGwtdG8tYWN0aW9uIHtcbiAgICBwYWRkaW5nOiAzNXB4IDAgMzVweCAwO1xufVxuXG4vKlN0eWxlKi9cblxuLmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMzVweCAwO1xuICAgIHBhZGRpbmc6IDExcHggMTZweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi8qIFBsYXkgQnV0dG9uICovXG5cbiN2aWRlby1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLnBsYXktdmlkZW8ge1xuICAgIGhlaWdodDoxMTBweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6NTAlO1xuICAgIG1hcmdpbi10b3A6LTExMHB4O1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5wbGF5LWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiA0NXB4IGF1dG87XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnBsYXktaWNvbjphZnRlciB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29udGVudDogJyc7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4ucGxheS1pY29uOmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdmb250YXdlc29tZSc7XG4gICAgY29udGVudDogJ1xcZjE0NCc7XG4gICAgc3BlYWs6IG5vbmU7XG4gICAgZm9udC1zaXplOiA3NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTBweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBjb2xvcjojZmZmO1xufVxuXG4ucGxheS12aWRlbyAucGxheS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLW91dCAwLjNzLCBiYWNrZ3JvdW5kIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSBlYXNlLW91dCAwLjNzLCBiYWNrZ3JvdW5kIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDAuM3MsIGJhY2tncm91bmQgMC40cztcbn1cblxuLnBsYXktdmlkZW8gLnBsYXktaWNvbjphZnRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5wbGF5LXZpZGVvIC5wbGF5LWljb246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjkzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjkzKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTMpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5cbi8qIC0tLS0tLS0tLSAyLjQgTmF2aWdhdGlvbiAtLS0tLS0tLS0tICovXG5cbiNoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI2hlYWRlciBhc2lkZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jaGVhZGVyIG5hdiB1bCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxufVxuXG4jaGVhZGVyIG5hdiBhIHtcbiAgICBoZWlnaHQ6IDcxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDcxcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4jaGVhZGVyIG5hdiBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbi8qTmF2aWdhdGlvbiBTb2xpZCovXG5cbiNoZWFkZXIubmF2LXNvbGlkIFtjbGFzcyo9J2NvbC0nXSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4jaGVhZGVyLm5hdi1zb2xpZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgbGVmdDowO1xufVxuXG4jaGVhZGVyLm5hdi1zb2xpZCBuYXYgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5cbiNoZWFkZXIubmF2LXNvbGlkIG5hdiBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKiBTb2NpYWwgRWxlbWVudHMgd2hlbiBTb2xpZCovXG5cbiNoZWFkZXIubmF2LXNvbGlkIC5zb2NpYWwtaWNvbnMgYSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuI2hlYWRlci5uYXYtc29saWQgLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjZTQ0NzNjO1xufVxuXG4vKiBSZXNwb25zaXZlIE5hdiBTdHlsaW5nICovXG5cbiNuYXYtdHJpZ2dlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI25hdi10cmlnZ2VyIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IDcxcHg7XG4gICAgY29sb3I6ICMxMTE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5cbiNuYXYtdHJpZ2dlciBzcGFuOmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJmb250QXdlc29tZVwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IDcxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDc1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbnRlbnQ6IFwiXFxmMGM5XCI7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbiNuYXYtdHJpZ2dlciBzcGFuLm9wZW46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XG59XG5cbiNuYXYtdHJpZ2dlciBzcGFuOmhvdmVyLCAubmF2LXNvbGlkICNuYXYtdHJpZ2dlciBzcGFuLm9wZW46aG92ZXIsIC5uYXYtc29saWQgI25hdi10cmlnZ2VyIHNwYW46aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuI25hdi10cmlnZ2VyIHNwYW4ub3BlbiwgI25hdi10cmlnZ2VyIHNwYW4ub3Blbjpob3ZlciB7XG4gICAgY29sb3I6ICMxMTE7XG59XG5cbi5uYXYtc29saWQgI25hdi10cmlnZ2VyIHNwYW4ub3Blbjpob3ZlciB7XG4gICAgY29sb3I6ICM5OTk7XG59XG5cbi5uYXYtc29saWQgI25hdi10cmlnZ2VyIHNwYW4ge1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbm5hdiNuYXYtbW9iaWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxubmF2I25hdi1tb2JpbGUgdWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbm5hdiNuYXYtbW9iaWxlIHVsOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5uYXYjbmF2LW1vYmlsZSBsaSB7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbn1cblxubmF2I25hdi1tb2JpbGUgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLm5hdi1zb2xpZCBuYXYjbmF2LW1vYmlsZSBsaSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxubmF2I25hdi1tb2JpbGUgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5cbm5hdiNuYXYtbW9iaWxlIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLyogLS0tLS0tLS0tIDIuNSBTb2NpYWwgRWxlbWVudHMgLS0tLS0tLS0tLSAqL1xuXG4jaGVhZGVyIC5jb2wtNCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc29jaWFsLWljb25zIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbnMgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uc29jaWFsLWljb25zIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNoZWFkZXIgLnNvY2lhbC1pY29ucyB7XG4gICAgbWFyZ2luLXRvcDogMjdweDtcbn1cblxuLyogLS0tLS0tLS0tIDIuNiBJbWFnZXMgLS0tLS0tLS0tLSAqL1xuXG4vKkFsaWdubWVudCovXG5cbmltZyB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmltYWdlLWNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmEgaW1nIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5hIGltZzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAzLiBGb250cyAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5oMSB7XG4gICAgcGFkZGluZzogMjBweCAwO1xufVxuXG5oMiB7XG4gICAgcGFkZGluZzogMTRweCAwO1xufVxuXG5oMyB7XG4gICAgcGFkZGluZzogMTBweCAwO1xufVxuXG5oNCB7XG4gICAgcGFkZGluZzogN3B4IDA7XG59XG5cbmg1IHtcbiAgICBwYWRkaW5nOiA3cHggMDtcbn1cblxuaDYge1xuICAgIHBhZGRpbmc6IDdweCAwO1xufVxuXG4vKiBUZXh0IEFsaWdubWVudCAqL1xuXG4udGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKiBTZWN0aW9uIEhlYWRpbmdzICovXG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICAgIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG59XG5cbi5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcgaDMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2NjYztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiA0LiBCYW5uZXIgKi9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuI2Jhbm5lciB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2Jhbm5lci1jb250ZW50LnJvdyB7XG4gICAgcGFkZGluZy10b3A6IDE3MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuI2Jhbm5lciBoMSB7XG4gICAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4jYmFubmVyIC5zZWN0aW9uLWhlYWRpbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiA1LiBDb250ZW50IEVsZW1lbnRzICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qIC0tLS0tLS0tLSA1LjEgSWNvbnMgLS0tLS0tLS0tLSAqL1xuXG4vKkZvbnQgSWNvbiBzaXplcyovXG5cbi5mYS0xeCB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qSWNvbiBCbG9jayovXG5cbi5pY29uLWJsb2NrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uLWJsb2NrIGg0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmljb24tYmxvY2sgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmljb24tYmxvY2sgcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLyogSWNvbiBMZWZ0Ki9cblxuLmljb24tbGVmdCAuaWNvbiB7XG4gICAgbGVmdDogMTU7XG59XG5cbi5pY29uLWxlZnQgLmljb24tYmxvY2stZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmctbGVmdDogNTNweDtcbn1cblxuLyogSWNvbiBSaWdodCAqL1xuXG4uaWNvbi1yaWdodCAuaWNvbiB7XG4gICAgcmlnaHQ6IDE1O1xufVxuXG4uaWNvbi1yaWdodCAuaWNvbi1ibG9jay1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZy1yaWdodDogNTNweDtcbn1cblxuLyogSWNvbiBBYm92ZSAqL1xuXG4uaWNvbi10b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaWNvbi10b3AgLmljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmljb24tdG9wIC5pY29uLWJsb2NrLWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxuLyogLS0tLS0tLS0tIDUuMiBQYXJhbGxheCBFbGVtZW50cyAtLS0tLS0tLS0tICovXG5cbi5iYW5uZXItcGFyYWxsYXgtMSwgLmJhbm5lci1wYXJhbGxheC0yLCAuYmFubmVyLXBhcmFsbGF4LTMge1xuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xufVxuXG4vKiAtLS0tLS0tLS0gNS4zIERpdmlkZXIgLS0tLS0tLS0tLSAqL1xuXG4uZGl2aWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDVweCBhdXRvO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdmlkZXItaW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTE7XG59XG5cbi5kaXZpZGVyIGkge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTExcHg7XG4gICAgcGFkZGluZzogMCA1cHggMCA1cHg7XG4gICAgY29sb3I6ICNlMWUxZTE7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qIDYuIExhbmRpbmcgUGFnZSBTZWN0aW9ucyAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKiAtLS0tLS0tLS0gNi4xIEludHJvZHVjdGlvbiAtLS0tLS0tLS0tICovXG5cbi5pbnRyb2R1Y3Rpb24gaW1nLmZlYXR1cmVkIHtcbiAgICBwYWRkaW5nOiA1NXB4IDAgMCAwO1xufVxuXG4vKiAtLS0tLS0tLS0gNi4yIEZlYXR1cmVzIC0tLS0tLS0tLS0gKi9cblxuLmZlYXR1cmVzLnJvdyB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLmZlYXR1cmVzIGRpdjpudGgtY2hpbGQoNCkge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4vKiAtLS0tLS0tLS0gNi4zIFRlc3RpbW9uaWFscyAtLS0tLS0tLS0tICovXG5cbi50ZXN0aW1vbmlhbCB7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuYmxvY2txdW90ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGVzdGltb25pYWwgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNTBlbTtcbn1cblxuLnRlc3RpbW9uaWFsIGZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi8qIFN0eWxlIENsYXNzaWMgLSBBdmF0YXIgYWJvdmUgVGVzdGltb25pYWwgKi9cblxuLnRlc3RpbW9uaWFsLmNsYXNzaWMgaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnRlc3RpbW9uaWFsLmNsYXNzaWMgcSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXN0aW1vbmlhbC5jbGFzc2ljIGZvb3RlcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMTVweCBhdXRvO1xufVxuXG4vKiBTdHlsZSBCaWcgKi9cblxuLnRlc3RpbW9uaWFsLmJpZ3Rlc3Qge1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuXG4udGVzdGltb25pYWwuYmlndGVzdCBxIHtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbi8qIC0tLS0tLS0tLSA2LjQgR2FsbGVyeSAtLS0tLS0tLS0tICovXG5cbiNnYWxsZXJ5IGltZyB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbiNnYWxsZXJ5IFtjbGFzcyo9J2NvbC0nXSB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI2dhbGxlcnkgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jZ2FsbGVyeSBhOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogMC4xNTtcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI2dhbGxlcnkgYTpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbnRlbnQ6IFwiK1wiO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NSU7XG4gICAgbGVmdDogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiA3MnB4O1xuICAgIG1hcmdpbjogLTM1cHggMCAwIC0zNXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbiNnYWxsZXJ5IGE6aG92ZXI6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbn1cblxuLyoqXG4gKiBGZWF0aGVybGlnaHQg4oCTIHVsdHJhIHNsaW0galF1ZXJ5IGxpZ2h0Ym94XG4gKiBWZXJzaW9uIDEuMy4zIC0gaHR0cDovL25vZWxib3NzLmdpdGh1Yi5pby9mZWF0aGVybGlnaHQvXG4gKlxuICogQ29weXJpZ2h0IDIwMTUsIE5vw6tsIFJhb3VsIEJvc3NhcnQgKGh0dHA6Ly93d3cubm9lbGJvc3MuY29tKVxuICogTUlUIExpY2Vuc2VkLlxuKiovXG5AbWVkaWEgYWxsIHtcbiAgICAuZmVhdGhlcmxpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAvKiBkaW1lbnNpb25zOiBzcGFubmluZyB0aGUgYmFja2dyb3VuZCBmcm9tIGVkZ2UgdG8gZWRnZSAqL1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogMjE0NzQ4MzY0NzsgLyogei1pbmRleCBuZWVkcyB0byBiZSA+PSBlbGVtZW50cyBvbiB0aGUgc2l0ZS4gKi9cblxuICAgICAgICAvKiBwb3NpdGlvbjogY2VudGVyaW5nIGNvbnRlbnQgKi9cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC8qIGluc3VyZXMgdGhhdCB0aGUgOjpiZWZvcmUgcHNldWRvIGVsZW1lbnQgZG9lc24ndCBmb3JjZSB3cmFwIHdpdGggZml4ZWQgd2lkdGggY29udGVudDsgKi9cbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgICAvKiBzdHlsaW5nICovXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMztcbiAgICAgICAgLyogSUU4IFwiaGFja1wiIGZvciBuZXN0ZWQgZmVhdGhlcmxpZ2h0cyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIH1cblxuICAgIC8qIHN1cHBvcnQgZm9yIG5lc3RlZCBmZWF0aGVybGlnaHRzLiBEb2VzIG5vdCB3b3JrIGluIElFOCAodXNlIEpTIHRvIGZpeCkgKi9cbiAgICAuZmVhdGhlcmxpZ2h0Omxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICB9XG5cbiAgICAuZmVhdGhlcmxpZ2h0OmJlZm9yZSB7XG4gICAgICAgIC8qIHBvc2l0aW9uOiB0cmljayB0byBjZW50ZXIgY29udGVudCB2ZXJ0aWNhbGx5ICovXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC4yNWVtO1xuICAgIH1cblxuICAgIC5mZWF0aGVybGlnaHQgLmZlYXRoZXJsaWdodC1jb250ZW50IHtcblxuICAgICAgICAvKiBwb3NpdGlvbjogY2VudGVyaW5nIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsICovXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAvKiBkaW1lbnNpb25zOiBjdXQgb2ZmIGltYWdlcyAqL1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC8qIGRpbWVuc2lvbnM6IGhhbmRsaW5nIHNtYWxsIG9yIGVtcHR5IGNvbnRlbnQgKi9cbiAgICAgICAgbWluLXdpZHRoOiAzMCU7XG5cbiAgICAgICAgLyogZGltZW5zaW9uczogaGFuZGxpbmcgbGFyZ2UgY29udGVudCAqL1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDk1JTtcblxuICAgICAgICAvKiBzdHlsaW5nICovXG4gICAgICAgIGN1cnNvcjogYXV0bztcblxuICAgICAgICAvKiByZXNldCB3aGl0ZS1zcGFjZSB3cmFwcGluZyAqL1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cblxuICAgIC8qIGNvbnRhaW5zIHRoZSBjb250ZW50ICovXG4gICAgLmZlYXRoZXJsaWdodCAuZmVhdGhlcmxpZ2h0LWlubmVyIHtcbiAgICAgICAgLyogbWFrZSBzdXJlIGl0cyB2aXNpYmxlICovXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5mZWF0aGVybGlnaHQgLmZlYXRoZXJsaWdodC1jbG9zZS1pY29uIHtcbiAgICAgICAgLyogcG9zaXRpb246IGNlbnRlcmluZyB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCAqL1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgcmlnaHQ6IDI1cHg7XG5cbiAgICAgICAgLyogZGltZW5zaW9uczogMjVweCB4IDI1cHggKi9cbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuXG4gICAgICAgIC8qIHN0eWxpbmcgKi9cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LWZhbWlseTogXCJmb250YXdlc29tZVwiO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5mZWF0aGVybGlnaHQgLmZlYXRoZXJsaWdodC1jbG9zZS1pY29uOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAuZmVhdGhlcmxpZ2h0IC5mZWF0aGVybGlnaHQtaW1hZ2Uge1xuICAgICAgICAvKiBzdHlsaW5nICovXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDoxMDAlO1xuICAgIH1cblxuICAgIC5mZWF0aGVybGlnaHQtaWZyYW1lIC5mZWF0aGVybGlnaHQtY29udGVudCB7XG4gICAgICAgIC8qIHJlbW92ZWQgdGhlIGJvcmRlciBmb3IgaW1hZ2UgY3JvcGluZyBzaW5jZSBpZnJhbWUgaXMgZWRnZSB0byBlZGdlICovXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmZlYXRoZXJsaWdodCBpZnJhbWUge1xuICAgICAgICAvKiBzdHlsaW5nICovXG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59XG5cbi8qIGhhbmRsaW5nIHBob25lcyBhbmQgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZmVhdGhlcmxpZ2h0IC5mZWF0aGVybGlnaHQtY29udGVudCB7XG4gICAgICAgIC8qIGRpbWVuc2lvbnM6IG1heGltaXplIGxpZ2h0Ym94IHdpdGggZm9yIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWF4LWhlaWdodDogOTglO1xuXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cblxufVxuXG4vKiBHYWxsZXJ5IFN0eWxpbmcgKi9cbkBtZWRpYSBhbGwge1xuICAgIC5mZWF0aGVybGlnaHQtbmV4dCxcbiAgICAuZmVhdGhlcmxpZ2h0LXByZXZpb3VzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZm9udGF3ZXNvbWVcIjtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDgwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAvKiBwcmV2ZW50aW5nIHRleHQgc2VsZWN0aW9uICovXG4gICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAvKiBJRTkgaGFjaywgb3RoZXJ3aXNlIG5hdmlnYXRpb24gZG9lc24ndCBhcHBlYXIgKi9cbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5mZWF0aGVybGlnaHQtcHJldmlvdXMge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogODAlO1xuICAgIH1cblxuICAgIC5mZWF0aGVybGlnaHQtbmV4dCBzcGFuLFxuICAgIC5mZWF0aGVybGlnaHQtcHJldmlvdXMgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogODBweDtcblxuICAgICAgICAvKiBjZW50ZXIgdmVydGljYWxseSAqL1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5mZWF0aGVybGlnaHQtbmV4dCBzcGFuIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiA3JTtcbiAgICB9XG5cbiAgICAuZmVhdGhlcmxpZ2h0LXByZXZpb3VzIHNwYW4ge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBsZWZ0OiA3JTtcbiAgICB9XG5cbiAgICAuZmVhdGhlcmxpZ2h0LW5leHQ6aG92ZXIgc3BhbixcbiAgICAuZmVhdGhlcmxpZ2h0LXByZXZpb3VzOmhvdmVyIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLyogSGlkZSBuYXZpZ2F0aW9uIHdoaWxlIGxvYWRpbmcgKi9cbiAgICAuZmVhdGhlcmxpZ2h0LWxvYWRpbmcgLmZlYXRoZXJsaWdodC1wcmV2aW91cywgLmZlYXRoZXJsaWdodC1sb2FkaW5nIC5mZWF0aGVybGlnaHQtbmV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4vKiBBbHdheXMgZGlzcGxheSBhcnJvd3Mgb24gdG91Y2ggZGV2aWNlcyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gICAgLmZlYXRoZXJsaWdodC1uZXh0OmhvdmVyLFxuICAgIC5mZWF0aGVybGlnaHQtcHJldmlvdXM6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cblxuICAgIC5mZWF0aGVybGlnaHQtbmV4dCBzcGFuLFxuICAgIC5mZWF0aGVybGlnaHQtcHJldmlvdXMgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLyogaGFuZGxpbmcgcGhvbmVzIGFuZCBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5mZWF0aGVybGlnaHQtbmV4dCxcbiAgICAuZmVhdGhlcmxpZ2h0LXByZXZpb3VzIHtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgbGVmdDogODUlO1xuICAgIH1cblxuICAgIC5mZWF0aGVybGlnaHQtcHJldmlvdXMge1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICByaWdodDogODUlO1xuICAgIH1cblxuICAgIC5mZWF0aGVybGlnaHQtbmV4dCBzcGFuLFxuICAgIC5mZWF0aGVybGlnaHQtcHJldmlvdXMgc3BhbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxufVxuXG4vKiAtLS0tLS0tLS0gNi41IFZpZGVvIC0tLS0tLS0tLS0gKi9cblxuI3ZpZGVvLWJveCB7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi52aWRlb19jb250YWluZXIsIC5lYXN5Q29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTsgLyogMTYvOSByYXRpbyAqL1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogMDsgLyogSUU2IHdvcmthcm91bmQqL1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmlkZW9fY29udGFpbmVyIGlmcmFtZSwgLnZpZGVvX2NvbnRhaW5lciBvYmplY3QsIC52aWRlb19jb250YWluZXIgZW1iZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uc2x2ai1saWdodGJveCBpZnJhbWUsIC5zbHZqLWxpZ2h0Ym94IG9iamVjdCwgLnNsdmotbGlnaHRib3ggZW1iZWQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MjlweCAhaW1wb3J0YW50O1xufVxuXG4udmlkZW9qcy1iYWNrZ3JvdW5kLXdyYXAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtOTk4O1xufVxuXG4jc2x2ai13aW5kb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4jc2x2ai13aW5kb3csXG4jc2x2ai13aW5kb3cgKiB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jc2x2ai1iYWNrZ3JvdW5kLWNsb3NlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDMxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuI3NsdmotYmFjay1saWdodGJveCB7XG4gICAgbWF4LXdpZHRoOiA5NDBweDtcbiAgICBtYXgtaGVpZ2h0OiA1MjlweDtcbiAgICB6LWluZGV4OiAzMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zbHZqLWxpZ2h0Ym94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHotaW5kZXg6IDUzO1xufVxuXG4jc2x2ai1jbG9zZS1pY29uOmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiZm9udGF3ZXNvbWVcIjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb250ZW50OiAnXFxmMDBkJztcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzbHZqLWNsb3NlLWljb246YmVmb3JlOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogLS0tLS0tLS0tIDYuNiBDbGllbnRzIC0tLS0tLS0tLS0gKi9cblxuI2NsaWVudHMgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4jY2xpZW50cyBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG59XG5cbi5jbGllbnQtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6XG4gICAgMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5cbiNjbGllbnRzIGE6aG92ZXIgLmNsaWVudC1vdmVybGF5IHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY2xpZW50LW92ZXJsYXkgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDglO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogLS0tLS0tLS0tIDYuNyBQcmljaW5nIFRhYmxlIC0tLS0tLS0tLS0gKi9cblxuLnByaWNpbmctYmxvY2stY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyNXB4IDAgMjVweCAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xufVxuXG5cbi5wcmljaW5nLWJsb2NrIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMjVweCAwIDI1cHggMDtcbn1cblxuLnByaWNpbmctYmxvY2sgbGkge1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMWUxZTE7XG59XG5cbi5wcmljaW5nLWJsb2NrIGxpOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyOm5vbmU7XG59XG5cbi5wcmljaW5nLWJsb2NrIGgzIHtcbiAgICBmb250LXNpemU6MTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gICAgcGFkZGluZy1ib3R0b206MDtcbn1cblxuLnByaWNpbmctc3ViIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6I2NjYztcbiAgICBtYXJnaW46MCAwIDI1cHggMDtcbn1cblxuLypQcmljZSovXG5cbi5wcmljaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJpY2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDYycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcmljZSBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnByaWNpbmcgIHAge1xuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xuICAgIGNvbG9yOiNiNGI0YjQ7XG4gICAgbGluZS1oZWlnaHQ6YXV0bztcbiAgICBtYXJnaW46MDtcbn1cblxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qIDcuIEZvb3RlciAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4jbGFuZGluZy1mb290ZXIge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4jbGFuZGluZy1mb290ZXIgLnJvdyB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI2xhbmRpbmctZm9vdGVyIHAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuI2xhbmRpbmctZm9vdGVyIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jbGFuZGluZy1mb290ZXIgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogU2Nyb2xsIFVwICovXG5cbiNzY3JvbGxVcCB7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICBwYWRkaW5nOiAwIDVweCAyMHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luLWJvdHRvbSAxNTBtcyBsaW5lYXI7XG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4tYm90dG9tIDE1MG1zIGxpbmVhcjtcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4tYm90dG9tIDE1MG1zIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tYm90dG9tIDE1MG1zIGxpbmVhcjtcbn1cblxuI3Njcm9sbFVwOmhvdmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4jc2Nyb2xsVXA6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGZvbnQtZmFtaWx5OiBcImZvbnRhd2Vzb21lXCI7XG4gICAgZm9udC1zaXplOiAyLjRlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICBjb250ZW50OiBcIlxcZjEwNlwiO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi8qUHJlbG9hZGVyKi9cblxuI3ByZWxvYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvKiBjaGFuZ2UgaWYgdGhlIG1hc2sgc2hvdWxkIGhhdmUgYW5vdGhlciBjb2xvciB0aGVuIHdoaXRlICovXG4gICAgei1pbmRleDogOTk5OTk7IC8qIG1ha2VzIHN1cmUgaXQgc3RheXMgb24gdG9wICovXG59XG5cbiNzdGF0dXMge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7IC8qIGNlbnRlcnMgdGhlIGxvYWRpbmcgYW5pbWF0aW9uIGhvcml6b250YWxseSBvbmUgdGhlIHNjcmVlbiAqL1xuICAgIHRvcDogNTAlOyAvKiBjZW50ZXJzIHRoZSBsb2FkaW5nIGFuaW1hdGlvbiB2ZXJ0aWNhbGx5IG9uZSB0aGUgc2NyZWVuICovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hcmdpbjogLTU1cHggMCAwIC01NXB4OyAvKiBpcyB3aWR0aCBhbmQgaGVpZ2h0IGRpdmlkZWQgYnkgdHdvICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiFcbiAqIExvYWQgQXdlc29tZSB2MS4xLjAgKGh0dHA6Ly9naXRodWIuZGFuaWVsY2FyZG9zby5uZXQvbG9hZC1hd2Vzb21lLylcbiAqIENvcHlyaWdodCAyMDE1IERhbmllbCBDYXJkb3NvIDxARGFuaWVsQ2FyZG9zbz5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICovXG4ubGEtYmFsbC10cmlhbmdsZS1wYXRoLFxuLmxhLWJhbGwtdHJpYW5nbGUtcGF0aCA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmxhLWJhbGwtdHJpYW5nbGUtcGF0aCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubGEtYmFsbC10cmlhbmdsZS1wYXRoLmxhLWRhcmsge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ubGEtYmFsbC10cmlhbmdsZS1wYXRoID4gZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIGJvcmRlcjogMCBzb2xpZCBjdXJyZW50Q29sb3I7XG59XG5cbi5sYS1iYWxsLXRyaWFuZ2xlLXBhdGgge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbn1cblxuLmxhLWJhbGwtdHJpYW5nbGUtcGF0aCA+IGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4ubGEtYmFsbC10cmlhbmdsZS1wYXRoID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLW9uZSAycyAwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAtbW96LWFuaW1hdGlvbjogYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtb25lIDJzIDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIC1vLWFuaW1hdGlvbjogYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtb25lIDJzIDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtb25lIDJzIDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4ubGEtYmFsbC10cmlhbmdsZS1wYXRoID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLXR3byAycyAwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAtbW96LWFuaW1hdGlvbjogYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHdvIDJzIDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIC1vLWFuaW1hdGlvbjogYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHdvIDJzIDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHdvIDJzIDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4ubGEtYmFsbC10cmlhbmdsZS1wYXRoID4gZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLXRyZWUgMnMgMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgLW1vei1hbmltYXRpb246IGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLXRyZWUgMnMgMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgLW8tYW5pbWF0aW9uOiBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC10cmVlIDJzIDBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHJlZSAycyAwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmxhLWJhbGwtdHJpYW5nbGUtcGF0aC5sYS1zbSB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xufVxuXG4ubGEtYmFsbC10cmlhbmdsZS1wYXRoLmxhLXNtID4gZGl2IHtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogNHB4O1xufVxuXG4ubGEtYmFsbC10cmlhbmdsZS1wYXRoLmxhLTJ4IHtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG59XG5cbi5sYS1iYWxsLXRyaWFuZ2xlLXBhdGgubGEtMnggPiBkaXYge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLmxhLWJhbGwtdHJpYW5nbGUtcGF0aC5sYS0zeCB7XG4gICAgd2lkdGg6IDk2cHg7XG4gICAgaGVpZ2h0OiA5NnB4O1xufVxuXG4ubGEtYmFsbC10cmlhbmdsZS1wYXRoLmxhLTN4ID4gZGl2IHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi8qXG4gKiBBbmltYXRpb25zXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC1vbmUge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgfVxuICAgIDE3JSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgMzMlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgNjYlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgfVxuICAgIDgzJSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLW9uZSB7XG4gICAgMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICB9XG4gICAgMTclIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICAzMyUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICA2NiUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICB9XG4gICAgODMlIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLW9uZSB7XG4gICAgMCUge1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgfVxuICAgIDE3JSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgMzMlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDY2JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICB9XG4gICAgODMlIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC1vbmUge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgIH1cbiAgICAxNyUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDMzJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICA2NiUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgfVxuICAgIDgzJSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC10d28ge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgfVxuICAgIDE3JSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgMzMlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgNjYlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgfVxuICAgIDgzJSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLXR3byB7XG4gICAgMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICB9XG4gICAgMTclIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICAzMyUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICA2NiUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICB9XG4gICAgODMlIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLXR3byB7XG4gICAgMCUge1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgfVxuICAgIDE3JSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgMzMlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDY2JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICB9XG4gICAgODMlIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC10d28ge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgIH1cbiAgICAxNyUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDMzJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICA2NiUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgfVxuICAgIDgzJSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC10cmVlIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgIH1cbiAgICAxNyUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDMzJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDY2JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgIH1cbiAgICA4MyUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC10cmVlIHtcbiAgICAwJSB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgIH1cbiAgICAxNyUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDMzJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDY2JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgIH1cbiAgICA4MyUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHJlZSB7XG4gICAgMCUge1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgfVxuICAgIDE3JSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgMzMlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDY2JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICB9XG4gICAgODMlIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC10cmVlIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICB9XG4gICAgMTclIHtcbiAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgIH1cbiAgICAzMyUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIyMCUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjIwJSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICB9XG4gICAgNjYlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDApO1xuICAgIH1cbiAgICA4MyUge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIyMCUsIDIyMCUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMjAlLCAyMjAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjIwJSwgMjIwJSk7XG4gICAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiBSZXNwb25zaXZlIEVsZW1lbnRzICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qID1NZWRpYSBRdWVyaWVzIGZvciBOYXZcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgI25hdi10cmlnZ2VyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgbmF2I25hdi1tYWluIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBuYXYjbmF2LW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIG5hdiNuYXYtbW9iaWxlIGxpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgI2hlYWRlciBhc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4vKiBMYW5kc2NhcGUgbW9iaWxlICYgZG93blxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcblxuICAgICN3cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICB9XG5cbiAgICAucGFnZS1ib3JkZXIsICNzY3JvbGxVcCwgI3Njcm9sbFVwOmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAucm93IHtcbiAgICAgICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jb2wtMSwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtMTAsIC5jb2wtMTEsIC5jb2wtMTIsIC5jb2wtMi0zLCAuY29sLTMtNCwgLmNvbC05LTEwLCAuY29sLTYxLCAuY29sLTM4LCAucm93IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNvbC0xLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbC0yLTMsIC5jb2wtMy00LCAuY29sLTktMTAsIC5jb2wtNjEsIC5jb2wtMzgge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLUhlYWRlciBFbGVtZW50cy0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAjaGVhZGVyIC5yb3cge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAjaGVhZGVyLm5hdi1zb2xpZCBbY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLypMb2dvKi9cbiAgICAjbG9nbyBoMiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLyogU29jaWFsICovXG4gICAgI2hlYWRlciBhc2lkZSB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgICNoZWFkZXIgdWwuc29jaWFsLWljb25zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAjYmFubmVyLWNvbnRlbnQucm93IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDg1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tU2VjdGlvbnMtLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvKiBDYWxsIHRvIEFjdGlvbiovXG4gICAgLmNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgfVxuXG4gICAgLyogVmlkZW8gKi9cbiAgICAuc2x2ai1saWdodGJveCBpZnJhbWUsIC5zbHZqLWxpZ2h0Ym94IG9iamVjdCwgLnNsdmotbGlnaHRib3ggZW1iZWQge1xuICAgICAgICBoZWlnaHQ6IDI3MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLyogRm9vdGVyICovXG4gICAgI2xhbmRpbmctZm9vdGVyICNjb3B5cmlnaHQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAjbGFuZGluZy1mb290ZXIgLnNvY2lhbC1pY29ucyB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tVHlwb2dyYXBoeS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICB9XG5cbiAgICAjYmFubmVyIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgIH1cblxuICAgIC8qIEhpZGUgRWxlbWVudHMgKi9cbiAgICBhI3Njcm9sbFVwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxufVxuXG4vKiBNb2JpbGUgdG8gVGFibGV0IFBvcnRyYWl0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgICAjd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuXG4gICAgLnBhZ2UtYm9yZGVyLCAjc2Nyb2xsVXAsICNzY3JvbGxVcDpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG5cbiAgICAucm93IHtcbiAgICAgICAgcGFkZGluZzogMTVweCAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvbC0xLCAuY29sLTIsIC5jb2wtNSwgLmNvbC03LCAuY29sLTksIC5jb2wtMTEsIC5jb2wtMi0zLCAuY29sLTMtNCwgLmNvbC02MSwgLmNvbC0zOCwgLnJvdyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb2wtMywgLmNvbC00LCAuY29sLTYsIC5jb2wtOCwgLmNvbC0xMCwgLmNvbC0xMiB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLUhlYWRlciBFbGVtZW50cy0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAjaGVhZGVyIC5yb3cge1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgI2hlYWRlciBhc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgIHJpZ2h0OiA2MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDozcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICAjaGVhZGVyLm5hdi1zb2xpZCBhc2lkZSB7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICB9XG5cbiAgICAjaGVhZGVyIGFzaWRlIHVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgIH1cblxuICAgICNiYW5uZXItY29udGVudC5yb3cge1xuICAgICAgICBwYWRkaW5nLXRvcDogODVweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC8qTmF2aWdhdGlvbiovXG4gICAgbmF2I25hdi1tb2JpbGUgdWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTQwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tU2VjdGlvbnMtLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvKiBWaWRlbyAqL1xuICAgIC5zbHZqLWxpZ2h0Ym94IGlmcmFtZSwgLnNsdmotbGlnaHRib3ggb2JqZWN0LCAuc2x2ai1saWdodGJveCBlbWJlZCB7XG4gICAgICAgIGhlaWdodDogMzcwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAvKiBGb290ZXIgKi9cbiAgICAjbGFuZGluZy1mb290ZXIgI2NvcHlyaWdodCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgICNsYW5kaW5nLWZvb3RlciAuc29jaWFsLWljb25zIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxufVxuXG4vKiBMYW5kc2NhcGUgVGFibGV0IHRvIERlc2t0b3Bcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAjd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuXG4gICAgLnBhZ2UtYm9yZGVyIHtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxuICAgIC5iaWctcGFkZGluZy10b3Age1xuICAgICAgICBwYWRkaW5nLXRvcDogNDVweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS1IZWFkZXIgRWxlbWVudHMtLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgI2hlYWRlciBhc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgIHJpZ2h0OiA2MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDozcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICAjaGVhZGVyLm5hdi1zb2xpZCBhc2lkZSB7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICB9XG5cbiAgICAjaGVhZGVyIGFzaWRlIHVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgIH1cblxuICAgIC8qTmF2aWdhdGlvbiovXG4gICAgbmF2I25hdi1tb2JpbGUgdWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTQwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tU2VjdGlvbnMtLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvKiBWaWRlbyAqL1xuICAgIC5zbHZqLWxpZ2h0Ym94IGlmcmFtZSwgLnNsdmotbGlnaHRib3ggb2JqZWN0LCAuc2x2ai1saWdodGJveCBlbWJlZCB7XG4gICAgICAgIGhlaWdodDogNDMycHggIWltcG9ydGFudDtcbiAgICB9XG5cbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZDojZmZmO1xufVxuXG5cbi8qIERlZmF1bHQgTGluayBDb2xvciAqL1xuXG5hLCAubGEtYmFsbC10cmlhbmdsZS1wYXRoIHtcbiAgICBjb2xvcjojZDJiMzU2O1xufVxuXG5hOmhvdmVyLCAjaGVhZGVyLm5hdi1zb2xpZCBuYXYgYTpob3ZlciB7XG4gICAgY29sb3I6I2QyYjM1Njtcbn1cblxuLyogRGVmYXVsdCBJY29uIENvbG9yICovXG5cbi5pY29uIGkge1xuICAgIGNvbG9yOiNkMmIzNTY7XG59XG5cbi8qIEJvcmRlciBDb2xvciAqL1xuXG4jYmFubmVyIC5zZWN0aW9uLWhlYWRpbmc6YmVmb3JlLCAudGVzdGltb25pYWwuY2xhc3NpYyBmb290ZXI6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDJiMzU2O1xufVxuXG4ucHJpY2luZy1ibG9jay1jb250ZW50OmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6I2QyYjM1Njtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAyLiBOYXZpZ2F0aW9uICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLyogVHJhbnNwYXJlbnQgTmF2aWdhdGlvbiBDb2xvciBvbiBhIEJhbm5lciAqL1xuXG4jaGVhZGVyIG5hdiBhLCAjaGVhZGVyIGkge1xuICAgIGNvbG9yOiMxMTE7XG59XG5cblxuLyogTmF2aWdhdGlvbiBDb2xvcnMgd2hlbiB0aGUgTmF2aWdhdGlvbiBpcyBzdGlja3kgYW5kIHNvbGlkICovIFxuXG4jaGVhZGVyLm5hdi1zb2xpZCwgI2hlYWRlci5uYXYtc29saWQgYSwgI2hlYWRlci5uYXYtc29saWQgaSwgI25hdi1tb2JpbGUgdWwgbGkgYSB7XG4gICAgY29sb3I6IzMzMztcbn1cblxuXG4vKiBOYXZpZ2F0aW9uIEFjdGl2ZSBTdGF0ZSAqL1xuXG4jaGVhZGVyLm5hdi1zb2xpZCAuYWN0aXZlIHtcbiAgICBjb2xvcjogI2QyYjM1NjtcbiAgICBib3JkZXItY29sb3I6ICNkMmIzNTY7XG59ICAgIFxuXG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogMy4gUHJpbWFyeSBhbmQgU2Vjb25kYXJ5IENvbG9ycyAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8qIFByaW1hcnkgQmFja2dyb3VuZCBhbmQgVGV4dCBDb2xvcnMgKi9cblxuLnByaW1hcnktY29sb3IsIC5mZWF0dXJlZCAucHJpY2luZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDJiMzU2O1xufVxuXG4ucHJpbWFyeS1jb2xvciwgLnByaW1hcnktY29sb3IgLnNlY3Rpb24tdGl0bGUsIC5wcmltYXJ5LWNvbG9yIC5zZWN0aW9uLXN1YnRpdGxlLCAuZmVhdHVyZWQgLnByaWNpbmcsIC5mZWF0dXJlZCAucHJpY2luZyBwIHtcbiAgICBjb2xvcjojZmZmOyAgICBcbn1cblxuLnNlY3Rpb24taGVhZGluZyBoMjphZnRlciB7XG4gICAgYmFja2dyb3VuZDojZDJiMzU2O1xuICAgIGNvbnRlbnQ6XCJcIjtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHdpZHRoOjMwcHg7XG4gICAgaGVpZ2h0OjVweDtcbiAgICBtYXJnaW4tdG9wOjMwcHg7XG59XG5cbi50ZXh0LWNlbnRlciAuc2VjdGlvbi1oZWFkaW5nIGgyOmFmdGVyIHtcbiAgICBtYXJnaW46MzBweCBhdXRvIDI1cHggYXV0bztcbn1cblxuLyogUHJpbWFyeSBJY29uIENvbG9ycyAqL1xuXG4ucHJpbWFyeS1jb2xvciAuaWNvbiBpLCAucHJpbWFyeS1jb2xvciBpIHtcbiAgICBjb2xvcjojZmZmO1xufVxuXG5cbi8qIFNlY29uZGFyeSBCYWNrZ3JvdW5kIGFuZCBUZXh0IENvbG9ycyAqL1xuXG4uc2Vjb25kYXJ5LWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogNC4gQmFubmVyICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLyogQmFubmVyIEJhY2tncm91bmQgYW5kIFRleHQgQ29sb3JzICovXG5cbiNiYW5uZXIge1xuICAgIGJhY2tncm91bmQ6IHVybChcImFzc2V0cy9pbWFnZXMvYmFubmVyLWltYWdlcy9iYW5uZXItaW1hZ2UtMS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qIDUuIFR5cG9ncmFwaHkgKi9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgIGNvbG9yOiMxMTE7XG59XG5cbi8qIExvZ28sIGlmIHlvdSBhcmUgdXNpbmcgRm9udHMgYXMgTG9nbyBhbmQgbm90IGltYWdlXG5cbiNsb2dvIGgxIHtcbiAgICBmb250LWZhbWlseTo7XG4gICAgZm9udC1zaXplOjsgXG4gICAgZm9udC13ZWlnaHQ6O1xuICAgIGNvbG9yOjtcbn1cblxuI2xvZ28gaDIge1xuICAgIGZvbnQtZmFtaWx5OjtcbiAgICBmb250LXNpemU6OyBcbiAgICBmb250LXdlaWdodDo7XG4gICAgY29sb3I6O1xufVxuXG4qL1xuXG5cbi8qIEJhbm5lciBUeXBvZ3JhcGh5ICovXG5cbiNiYW5uZXIgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcbiAgICBmb250LXNpemU6NjJweDtcbiAgICBsaW5lLWhlaWdodDo2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OjgwMDtcbiAgICBjb2xvcjojMTExO1xufVxuXG4jYmFubmVyIGgyIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gICAgZm9udC13ZWlnaHQ6MzAwO1xuICAgIGNvbG9yOiMxMTE7XG59XG5cblxuLyogU2VjdGlvbiBUaXRsZSBhbmQgU3VidGl0bGUgKi9cblxuLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcbiAgICBmb250LXNpemU6IDM0cHg7IFxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcbiAgICBjb2xvcjojMTExO1xufVxuXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDozMDA7XG4gICAgY29sb3I6IzljOWM5Yztcbn1cblxuLyogVGVzdGltb25pYWwgKi9cblxuLnRlc3RpbW9uaWFsIHEge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcbiAgICBmb250LXNpemU6IDE3cHg7IFxuICAgIGZvbnQtd2VpZ2h0OjMwMDtcbn1cblxuLnRlc3RpbW9uaWFsLmNsYXNzaWMgcSwgLnRlc3RpbW9uaWFsLmNsYXNzaWMgZm9vdGVyIHtcbiAgICBjb2xvcjojMTExO1xufVxuXG5cbi8qIFN0YW5kYXJkIEhlYWRpbmdzIGgxLWg2ICovXG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XG4gICAgZm9udC1zaXplOiA0MHB4OyBcbiAgICBmb250LXdlaWdodDozMDA7XG4gICAgY29sb3I6IzExMTtcbn1cblxuaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcbiAgICBmb250LXNpemU6IDM0cHg7IFxuICAgIGZvbnQtd2VpZ2h0OjMwMDtcbiAgICBjb2xvcjojMTExO1xufVxuXG5oMyB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xuICAgIGZvbnQtc2l6ZTogMzBweDsgXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgIGNvbG9yOiMxMTE7XG59XG5cbmg0IHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XG4gICAgZm9udC1zaXplOiAxOHB4OyBcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgY29sb3I6IzExMTtcbn1cblxuaDUge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcbiAgICBmb250LXNpemU6IDE2cHg7IFxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICBjb2xvcjojMTExO1xufVxuXG5oNiB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xuICAgIGZvbnQtc2l6ZTogMTRweDsgXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIGNvbG9yOiMxMTE7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogNi4gQnV0dG9ucyAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKiAtLS0tLS0tLS0tRGVmYXVsdCBCdXR0b25zLS0tLS0tLS0tLSAqL1xuXG5cbi8qIEJ1dHRvbiBUZXh0ICovXG5cbi5idXR0b24sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0gIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBjb2xvcjojMTExO1xufVxuXG5cbi8qIEJ1dHRvbiBDb2xvciAqL1xuXG4uYnV0dG9uLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBib3JkZXItY29sb3I6IzExMTtcbn1cblxuXG4vKiBCdXR0b24gSG92ZXIgQ29sb3IgKi9cblxuLmJ1dHRvbjpob3ZlciwgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjojZDJiMzU2O1xuICAgIGNvbG9yOiNkMmIzNTY7XG59XG5cblxuLyogLS0tLS0tLS0tLUJhbm5lciBCdXR0b25zLS0tLS0tLS0tLSAqL1xuXG5cbi8qIEJ1dHRvbiBUZXh0ICovXG5cbiNiYW5uZXIgLmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIGNvbG9yOiMxMTE7XG59XG5cblxuLyogQnV0dG9uIENvbG9yICovXG5cbiNiYW5uZXIgLmJ1dHRvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiMxMTE7XG59XG5cblxuLyogQnV0dG9uIEhvdmVyIENvbG9yICovXG5cbiNiYW5uZXIgLmJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6I2QyYjM1NjtcbiAgICBib3JkZXItY29sb3I6I2QyYjM1Njtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiA3LiBGb290ZXIgKi9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuI2xhbmRpbmctZm9vdGVyLCAjbGFuZGluZy1mb290ZXIgcCwgI2xhbmRpbmctZm9vdGVyIGEge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgY29sb3I6Izk5OTtcbn1cblxuLyogRm9vdGVyIEljb24gQ29sb3IgKi9cblxuI2xhbmRpbmctZm9vdGVyIGkge1xuICAgIGNvbG9yOiM5OTk7XG59XG4iXX0= */", '', '']];
    /***/
  },

  /***/
  "./node_modules/fontawesome/index.js":
  /*!*******************************************!*\
    !*** ./node_modules/fontawesome/index.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesFontawesomeIndexJs(module, exports) {
    /* Unicode mappings for FontAwesome Pro v5.6.3 */
    var fa = function fa(i) {
      return fa[i.replace(/-./g, function (x) {
        return x.substr(1).toUpperCase();
      })];
    };

    fa["500px"] = "\uF26E";
    fa.abacus = "\uF640";
    fa.accessibleIcon = "\uF368";
    fa.accusoft = "\uF369";
    fa.acorn = "\uF6AE";
    fa.acquisitionsIncorporated = "\uF6AF";
    fa.ad = "\uF641";
    fa.addressBook = "\uF2B9";
    fa.addressCard = "\uF2BB";
    fa.adjust = "\uF042";
    fa.adn = "\uF170";
    fa.adobe = "\uF778";
    fa.adversal = "\uF36A";
    fa.affiliatetheme = "\uF36B";
    fa.airFreshener = "\uF5D0";
    fa.alarmClock = "\uF34E";
    fa.algolia = "\uF36C";
    fa.alicorn = "\uF6B0";
    fa.alignCenter = "\uF037";
    fa.alignJustify = "\uF039";
    fa.alignLeft = "\uF036";
    fa.alignRight = "\uF038";
    fa.alipay = "\uF642";
    fa.allergies = "\uF461";
    fa.amazon = "\uF270";
    fa.amazonPay = "\uF42C";
    fa.ambulance = "\uF0F9";
    fa.americanSignLanguageInterpreting = "\uF2A3";
    fa.amilia = "\uF36D";
    fa.analytics = "\uF643";
    fa.anchor = "\uF13D";
    fa.android = "\uF17B";
    fa.angel = "\uF779";
    fa.angellist = "\uF209";
    fa.angleDoubleDown = "\uF103";
    fa.angleDoubleLeft = "\uF100";
    fa.angleDoubleRight = "\uF101";
    fa.angleDoubleUp = "\uF102";
    fa.angleDown = "\uF107";
    fa.angleLeft = "\uF104";
    fa.angleRight = "\uF105";
    fa.angleUp = "\uF106";
    fa.angry = "\uF556";
    fa.angrycreative = "\uF36E";
    fa.angular = "\uF420";
    fa.ankh = "\uF644";
    fa.appStore = "\uF36F";
    fa.appStoreIos = "\uF370";
    fa.apper = "\uF371";
    fa.apple = "\uF179";
    fa.appleAlt = "\uF5D1";
    fa.appleCrate = "\uF6B1";
    fa.applePay = "\uF415";
    fa.archive = "\uF187";
    fa.archway = "\uF557";
    fa.arrowAltCircleDown = "\uF358";
    fa.arrowAltCircleLeft = "\uF359";
    fa.arrowAltCircleRight = "\uF35A";
    fa.arrowAltCircleUp = "\uF35B";
    fa.arrowAltDown = "\uF354";
    fa.arrowAltFromBottom = "\uF346";
    fa.arrowAltFromLeft = "\uF347";
    fa.arrowAltFromRight = "\uF348";
    fa.arrowAltFromTop = "\uF349";
    fa.arrowAltLeft = "\uF355";
    fa.arrowAltRight = "\uF356";
    fa.arrowAltSquareDown = "\uF350";
    fa.arrowAltSquareLeft = "\uF351";
    fa.arrowAltSquareRight = "\uF352";
    fa.arrowAltSquareUp = "\uF353";
    fa.arrowAltToBottom = "\uF34A";
    fa.arrowAltToLeft = "\uF34B";
    fa.arrowAltToRight = "\uF34C";
    fa.arrowAltToTop = "\uF34D";
    fa.arrowAltUp = "\uF357";
    fa.arrowCircleDown = "\uF0AB";
    fa.arrowCircleLeft = "\uF0A8";
    fa.arrowCircleRight = "\uF0A9";
    fa.arrowCircleUp = "\uF0AA";
    fa.arrowDown = "\uF063";
    fa.arrowFromBottom = "\uF342";
    fa.arrowFromLeft = "\uF343";
    fa.arrowFromRight = "\uF344";
    fa.arrowFromTop = "\uF345";
    fa.arrowLeft = "\uF060";
    fa.arrowRight = "\uF061";
    fa.arrowSquareDown = "\uF339";
    fa.arrowSquareLeft = "\uF33A";
    fa.arrowSquareRight = "\uF33B";
    fa.arrowSquareUp = "\uF33C";
    fa.arrowToBottom = "\uF33D";
    fa.arrowToLeft = "\uF33E";
    fa.arrowToRight = "\uF340";
    fa.arrowToTop = "\uF341";
    fa.arrowUp = "\uF062";
    fa.arrows = "\uF047";
    fa.arrowsAlt = "\uF0B2";
    fa.arrowsAltH = "\uF337";
    fa.arrowsAltV = "\uF338";
    fa.arrowsH = "\uF07E";
    fa.arrowsV = "\uF07D";
    fa.artstation = "\uF77A";
    fa.assistiveListeningSystems = "\uF2A2";
    fa.asterisk = "\uF069";
    fa.asymmetrik = "\uF372";
    fa.at = "\uF1FA";
    fa.atlas = "\uF558";
    fa.atlassian = "\uF77B";
    fa.atom = "\uF5D2";
    fa.atomAlt = "\uF5D3";
    fa.audible = "\uF373";
    fa.audioDescription = "\uF29E";
    fa.autoprefixer = "\uF41C";
    fa.avianex = "\uF374";
    fa.aviato = "\uF421";
    fa.award = "\uF559";
    fa.aws = "\uF375";
    fa.axe = "\uF6B2";
    fa.axeBattle = "\uF6B3";
    fa.baby = "\uF77C";
    fa.babyCarriage = "\uF77D";
    fa.backpack = "\uF5D4";
    fa.backspace = "\uF55A";
    fa.backward = "\uF04A";
    fa.badge = "\uF335";
    fa.badgeCheck = "\uF336";
    fa.badgeDollar = "\uF645";
    fa.badgePercent = "\uF646";
    fa.badgerHoney = "\uF6B4";
    fa.balanceScale = "\uF24E";
    fa.balanceScaleLeft = "\uF515";
    fa.balanceScaleRight = "\uF516";
    fa.ballPile = "\uF77E";
    fa.ballot = "\uF732";
    fa.ballotCheck = "\uF733";
    fa.ban = "\uF05E";
    fa.bandAid = "\uF462";
    fa.bandcamp = "\uF2D5";
    fa.barcode = "\uF02A";
    fa.barcodeAlt = "\uF463";
    fa.barcodeRead = "\uF464";
    fa.barcodeScan = "\uF465";
    fa.bars = "\uF0C9";
    fa.baseball = "\uF432";
    fa.baseballBall = "\uF433";
    fa.basketballBall = "\uF434";
    fa.basketballHoop = "\uF435";
    fa.bat = "\uF6B5";
    fa.bath = "\uF2CD";
    fa.batteryBolt = "\uF376";
    fa.batteryEmpty = "\uF244";
    fa.batteryFull = "\uF240";
    fa.batteryHalf = "\uF242";
    fa.batteryQuarter = "\uF243";
    fa.batterySlash = "\uF377";
    fa.batteryThreeQuarters = "\uF241";
    fa.bed = "\uF236";
    fa.beer = "\uF0FC";
    fa.behance = "\uF1B4";
    fa.behanceSquare = "\uF1B5";
    fa.bell = "\uF0F3";
    fa.bellSchool = "\uF5D5";
    fa.bellSchoolSlash = "\uF5D6";
    fa.bellSlash = "\uF1F6";
    fa.bells = "\uF77F";
    fa.bezierCurve = "\uF55B";
    fa.bible = "\uF647";
    fa.bicycle = "\uF206";
    fa.bimobject = "\uF378";
    fa.binoculars = "\uF1E5";
    fa.biohazard = "\uF780";
    fa.birthdayCake = "\uF1FD";
    fa.bitbucket = "\uF171";
    fa.bitcoin = "\uF379";
    fa.bity = "\uF37A";
    fa.blackTie = "\uF27E";
    fa.blackberry = "\uF37B";
    fa.blanket = "\uF498";
    fa.blender = "\uF517";
    fa.blenderPhone = "\uF6B6";
    fa.blind = "\uF29D";
    fa.blog = "\uF781";
    fa.blogger = "\uF37C";
    fa.bloggerB = "\uF37D";
    fa.bluetooth = "\uF293";
    fa.bluetoothB = "\uF294";
    fa.bold = "\uF032";
    fa.bolt = "\uF0E7";
    fa.bomb = "\uF1E2";
    fa.bone = "\uF5D7";
    fa.boneBreak = "\uF5D8";
    fa.bong = "\uF55C";
    fa.book = "\uF02D";
    fa.bookAlt = "\uF5D9";
    fa.bookDead = "\uF6B7";
    fa.bookHeart = "\uF499";
    fa.bookOpen = "\uF518";
    fa.bookReader = "\uF5DA";
    fa.bookSpells = "\uF6B8";
    fa.bookmark = "\uF02E";
    fa.books = "\uF5DB";
    fa.boot = "\uF782";
    fa.boothCurtain = "\uF734";
    fa.bowArrow = "\uF6B9";
    fa.bowlingBall = "\uF436";
    fa.bowlingPins = "\uF437";
    fa.box = "\uF466";
    fa.boxAlt = "\uF49A";
    fa.boxBallot = "\uF735";
    fa.boxCheck = "\uF467";
    fa.boxFragile = "\uF49B";
    fa.boxFull = "\uF49C";
    fa.boxHeart = "\uF49D";
    fa.boxOpen = "\uF49E";
    fa.boxUp = "\uF49F";
    fa.boxUsd = "\uF4A0";
    fa.boxes = "\uF468";
    fa.boxesAlt = "\uF4A1";
    fa.boxingGlove = "\uF438";
    fa.braille = "\uF2A1";
    fa.brain = "\uF5DC";
    fa.briefcase = "\uF0B1";
    fa.briefcaseMedical = "\uF469";
    fa.broadcastTower = "\uF519";
    fa.broom = "\uF51A";
    fa.browser = "\uF37E";
    fa.brush = "\uF55D";
    fa.btc = "\uF15A";
    fa.bug = "\uF188";
    fa.building = "\uF1AD";
    fa.bullhorn = "\uF0A1";
    fa.bullseye = "\uF140";
    fa.bullseyeArrow = "\uF648";
    fa.bullseyePointer = "\uF649";
    fa.burn = "\uF46A";
    fa.buromobelexperte = "\uF37F";
    fa.bus = "\uF207";
    fa.busAlt = "\uF55E";
    fa.busSchool = "\uF5DD";
    fa.businessTime = "\uF64A";
    fa.buysellads = "\uF20D";
    fa.cabinetFiling = "\uF64B";
    fa.calculator = "\uF1EC";
    fa.calculatorAlt = "\uF64C";
    fa.calendar = "\uF133";
    fa.calendarAlt = "\uF073";
    fa.calendarCheck = "\uF274";
    fa.calendarDay = "\uF783";
    fa.calendarEdit = "\uF333";
    fa.calendarExclamation = "\uF334";
    fa.calendarMinus = "\uF272";
    fa.calendarPlus = "\uF271";
    fa.calendarStar = "\uF736";
    fa.calendarTimes = "\uF273";
    fa.calendarWeek = "\uF784";
    fa.camera = "\uF030";
    fa.cameraAlt = "\uF332";
    fa.cameraRetro = "\uF083";
    fa.campfire = "\uF6BA";
    fa.campground = "\uF6BB";
    fa.canadianMapleLeaf = "\uF785";
    fa.candleHolder = "\uF6BC";
    fa.candyCane = "\uF786";
    fa.candyCorn = "\uF6BD";
    fa.cannabis = "\uF55F";
    fa.capsules = "\uF46B";
    fa.car = "\uF1B9";
    fa.carAlt = "\uF5DE";
    fa.carBattery = "\uF5DF";
    fa.carBump = "\uF5E0";
    fa.carCrash = "\uF5E1";
    fa.carGarage = "\uF5E2";
    fa.carMechanic = "\uF5E3";
    fa.carSide = "\uF5E4";
    fa.carTilt = "\uF5E5";
    fa.carWash = "\uF5E6";
    fa.caretCircleDown = "\uF32D";
    fa.caretCircleLeft = "\uF32E";
    fa.caretCircleRight = "\uF330";
    fa.caretCircleUp = "\uF331";
    fa.caretDown = "\uF0D7";
    fa.caretLeft = "\uF0D9";
    fa.caretRight = "\uF0DA";
    fa.caretSquareDown = "\uF150";
    fa.caretSquareLeft = "\uF191";
    fa.caretSquareRight = "\uF152";
    fa.caretSquareUp = "\uF151";
    fa.caretUp = "\uF0D8";
    fa.carrot = "\uF787";
    fa.cartArrowDown = "\uF218";
    fa.cartPlus = "\uF217";
    fa.cashRegister = "\uF788";
    fa.cat = "\uF6BE";
    fa.cauldron = "\uF6BF";
    fa.ccAmazonPay = "\uF42D";
    fa.ccAmex = "\uF1F3";
    fa.ccApplePay = "\uF416";
    fa.ccDinersClub = "\uF24C";
    fa.ccDiscover = "\uF1F2";
    fa.ccJcb = "\uF24B";
    fa.ccMastercard = "\uF1F1";
    fa.ccPaypal = "\uF1F4";
    fa.ccStripe = "\uF1F5";
    fa.ccVisa = "\uF1F0";
    fa.centercode = "\uF380";
    fa.centos = "\uF789";
    fa.certificate = "\uF0A3";
    fa.chair = "\uF6C0";
    fa.chairOffice = "\uF6C1";
    fa.chalkboard = "\uF51B";
    fa.chalkboardTeacher = "\uF51C";
    fa.chargingStation = "\uF5E7";
    fa.chartArea = "\uF1FE";
    fa.chartBar = "\uF080";
    fa.chartLine = "\uF201";
    fa.chartLineDown = "\uF64D";
    fa.chartNetwork = "\uF78A";
    fa.chartPie = "\uF200";
    fa.chartPieAlt = "\uF64E";
    fa.check = "\uF00C";
    fa.checkCircle = "\uF058";
    fa.checkDouble = "\uF560";
    fa.checkSquare = "\uF14A";
    fa.chess = "\uF439";
    fa.chessBishop = "\uF43A";
    fa.chessBishopAlt = "\uF43B";
    fa.chessBoard = "\uF43C";
    fa.chessClock = "\uF43D";
    fa.chessClockAlt = "\uF43E";
    fa.chessKing = "\uF43F";
    fa.chessKingAlt = "\uF440";
    fa.chessKnight = "\uF441";
    fa.chessKnightAlt = "\uF442";
    fa.chessPawn = "\uF443";
    fa.chessPawnAlt = "\uF444";
    fa.chessQueen = "\uF445";
    fa.chessQueenAlt = "\uF446";
    fa.chessRook = "\uF447";
    fa.chessRookAlt = "\uF448";
    fa.chevronCircleDown = "\uF13A";
    fa.chevronCircleLeft = "\uF137";
    fa.chevronCircleRight = "\uF138";
    fa.chevronCircleUp = "\uF139";
    fa.chevronDoubleDown = "\uF322";
    fa.chevronDoubleLeft = "\uF323";
    fa.chevronDoubleRight = "\uF324";
    fa.chevronDoubleUp = "\uF325";
    fa.chevronDown = "\uF078";
    fa.chevronLeft = "\uF053";
    fa.chevronRight = "\uF054";
    fa.chevronSquareDown = "\uF329";
    fa.chevronSquareLeft = "\uF32A";
    fa.chevronSquareRight = "\uF32B";
    fa.chevronSquareUp = "\uF32C";
    fa.chevronUp = "\uF077";
    fa.child = "\uF1AE";
    fa.chimney = "\uF78B";
    fa.chrome = "\uF268";
    fa.church = "\uF51D";
    fa.circle = "\uF111";
    fa.circleNotch = "\uF1CE";
    fa.city = "\uF64F";
    fa.clawMarks = "\uF6C2";
    fa.clipboard = "\uF328";
    fa.clipboardCheck = "\uF46C";
    fa.clipboardList = "\uF46D";
    fa.clipboardListCheck = "\uF737";
    fa.clipboardPrescription = "\uF5E8";
    fa.clock = "\uF017";
    fa.clone = "\uF24D";
    fa.closedCaptioning = "\uF20A";
    fa.cloud = "\uF0C2";
    fa.cloudDownload = "\uF0ED";
    fa.cloudDownloadAlt = "\uF381";
    fa.cloudDrizzle = "\uF738";
    fa.cloudHail = "\uF739";
    fa.cloudHailMixed = "\uF73A";
    fa.cloudMeatball = "\uF73B";
    fa.cloudMoon = "\uF6C3";
    fa.cloudMoonRain = "\uF73C";
    fa.cloudRain = "\uF73D";
    fa.cloudRainbow = "\uF73E";
    fa.cloudShowers = "\uF73F";
    fa.cloudShowersHeavy = "\uF740";
    fa.cloudSleet = "\uF741";
    fa.cloudSnow = "\uF742";
    fa.cloudSun = "\uF6C4";
    fa.cloudSunRain = "\uF743";
    fa.cloudUpload = "\uF0EE";
    fa.cloudUploadAlt = "\uF382";
    fa.clouds = "\uF744";
    fa.cloudsMoon = "\uF745";
    fa.cloudsSun = "\uF746";
    fa.cloudscale = "\uF383";
    fa.cloudsmith = "\uF384";
    fa.cloudversify = "\uF385";
    fa.club = "\uF327";
    fa.cocktail = "\uF561";
    fa.code = "\uF121";
    fa.codeBranch = "\uF126";
    fa.codeCommit = "\uF386";
    fa.codeMerge = "\uF387";
    fa.codepen = "\uF1CB";
    fa.codiepie = "\uF284";
    fa.coffee = "\uF0F4";
    fa.coffeeTogo = "\uF6C5";
    fa.coffin = "\uF6C6";
    fa.cog = "\uF013";
    fa.cogs = "\uF085";
    fa.coins = "\uF51E";
    fa.columns = "\uF0DB";
    fa.comment = "\uF075";
    fa.commentAlt = "\uF27A";
    fa.commentAltCheck = "\uF4A2";
    fa.commentAltDollar = "\uF650";
    fa.commentAltDots = "\uF4A3";
    fa.commentAltEdit = "\uF4A4";
    fa.commentAltExclamation = "\uF4A5";
    fa.commentAltLines = "\uF4A6";
    fa.commentAltMinus = "\uF4A7";
    fa.commentAltPlus = "\uF4A8";
    fa.commentAltSlash = "\uF4A9";
    fa.commentAltSmile = "\uF4AA";
    fa.commentAltTimes = "\uF4AB";
    fa.commentCheck = "\uF4AC";
    fa.commentDollar = "\uF651";
    fa.commentDots = "\uF4AD";
    fa.commentEdit = "\uF4AE";
    fa.commentExclamation = "\uF4AF";
    fa.commentLines = "\uF4B0";
    fa.commentMinus = "\uF4B1";
    fa.commentPlus = "\uF4B2";
    fa.commentSlash = "\uF4B3";
    fa.commentSmile = "\uF4B4";
    fa.commentTimes = "\uF4B5";
    fa.comments = "\uF086";
    fa.commentsAlt = "\uF4B6";
    fa.commentsAltDollar = "\uF652";
    fa.commentsDollar = "\uF653";
    fa.compactDisc = "\uF51F";
    fa.compass = "\uF14E";
    fa.compassSlash = "\uF5E9";
    fa.compress = "\uF066";
    fa.compressAlt = "\uF422";
    fa.compressArrowsAlt = "\uF78C";
    fa.compressWide = "\uF326";
    fa.conciergeBell = "\uF562";
    fa.confluence = "\uF78D";
    fa.connectdevelop = "\uF20E";
    fa.containerStorage = "\uF4B7";
    fa.contao = "\uF26D";
    fa.conveyorBelt = "\uF46E";
    fa.conveyorBeltAlt = "\uF46F";
    fa.cookie = "\uF563";
    fa.cookieBite = "\uF564";
    fa.copy = "\uF0C5";
    fa.copyright = "\uF1F9";
    fa.corn = "\uF6C7";
    fa.couch = "\uF4B8";
    fa.cow = "\uF6C8";
    fa.cpanel = "\uF388";
    fa.creativeCommons = "\uF25E";
    fa.creativeCommonsBy = "\uF4E7";
    fa.creativeCommonsNc = "\uF4E8";
    fa.creativeCommonsNcEu = "\uF4E9";
    fa.creativeCommonsNcJp = "\uF4EA";
    fa.creativeCommonsNd = "\uF4EB";
    fa.creativeCommonsPd = "\uF4EC";
    fa.creativeCommonsPdAlt = "\uF4ED";
    fa.creativeCommonsRemix = "\uF4EE";
    fa.creativeCommonsSa = "\uF4EF";
    fa.creativeCommonsSampling = "\uF4F0";
    fa.creativeCommonsSamplingPlus = "\uF4F1";
    fa.creativeCommonsShare = "\uF4F2";
    fa.creativeCommonsZero = "\uF4F3";
    fa.creditCard = "\uF09D";
    fa.creditCardBlank = "\uF389";
    fa.creditCardFront = "\uF38A";
    fa.cricket = "\uF449";
    fa.criticalRole = "\uF6C9";
    fa.crop = "\uF125";
    fa.cropAlt = "\uF565";
    fa.cross = "\uF654";
    fa.crosshairs = "\uF05B";
    fa.crow = "\uF520";
    fa.crown = "\uF521";
    fa.css3 = "\uF13C";
    fa.css3Alt = "\uF38B";
    fa.cube = "\uF1B2";
    fa.cubes = "\uF1B3";
    fa.curling = "\uF44A";
    fa.cut = "\uF0C4";
    fa.cuttlefish = "\uF38C";
    fa.dAndD = "\uF38D";
    fa.dAndDBeyond = "\uF6CA";
    fa.dagger = "\uF6CB";
    fa.dashcube = "\uF210";
    fa.database = "\uF1C0";
    fa.deaf = "\uF2A4";
    fa.deer = "\uF78E";
    fa.deerRudolph = "\uF78F";
    fa.delicious = "\uF1A5";
    fa.democrat = "\uF747";
    fa.deploydog = "\uF38E";
    fa.deskpro = "\uF38F";
    fa.desktop = "\uF108";
    fa.desktopAlt = "\uF390";
    fa.dev = "\uF6CC";
    fa.deviantart = "\uF1BD";
    fa.dewpoint = "\uF748";
    fa.dharmachakra = "\uF655";
    fa.dhl = "\uF790";
    fa.diagnoses = "\uF470";
    fa.diamond = "\uF219";
    fa.diaspora = "\uF791";
    fa.dice = "\uF522";
    fa.diceD10 = "\uF6CD";
    fa.diceD12 = "\uF6CE";
    fa.diceD20 = "\uF6CF";
    fa.diceD4 = "\uF6D0";
    fa.diceD6 = "\uF6D1";
    fa.diceD8 = "\uF6D2";
    fa.diceFive = "\uF523";
    fa.diceFour = "\uF524";
    fa.diceOne = "\uF525";
    fa.diceSix = "\uF526";
    fa.diceThree = "\uF527";
    fa.diceTwo = "\uF528";
    fa.digg = "\uF1A6";
    fa.digitalOcean = "\uF391";
    fa.digitalTachograph = "\uF566";
    fa.diploma = "\uF5EA";
    fa.directions = "\uF5EB";
    fa.discord = "\uF392";
    fa.discourse = "\uF393";
    fa.divide = "\uF529";
    fa.dizzy = "\uF567";
    fa.dna = "\uF471";
    fa.doNotEnter = "\uF5EC";
    fa.dochub = "\uF394";
    fa.docker = "\uF395";
    fa.dog = "\uF6D3";
    fa.dogLeashed = "\uF6D4";
    fa.dollarSign = "\uF155";
    fa.dolly = "\uF472";
    fa.dollyEmpty = "\uF473";
    fa.dollyFlatbed = "\uF474";
    fa.dollyFlatbedAlt = "\uF475";
    fa.dollyFlatbedEmpty = "\uF476";
    fa.donate = "\uF4B9";
    fa.doorClosed = "\uF52A";
    fa.doorOpen = "\uF52B";
    fa.dotCircle = "\uF192";
    fa.dove = "\uF4BA";
    fa.download = "\uF019";
    fa.draft2digital = "\uF396";
    fa.draftingCompass = "\uF568";
    fa.dragon = "\uF6D5";
    fa.drawCircle = "\uF5ED";
    fa.drawPolygon = "\uF5EE";
    fa.drawSquare = "\uF5EF";
    fa.dreidel = "\uF792";
    fa.dribbble = "\uF17D";
    fa.dribbbleSquare = "\uF397";
    fa.dropbox = "\uF16B";
    fa.drum = "\uF569";
    fa.drumSteelpan = "\uF56A";
    fa.drumstick = "\uF6D6";
    fa.drumstickBite = "\uF6D7";
    fa.drupal = "\uF1A9";
    fa.duck = "\uF6D8";
    fa.dumbbell = "\uF44B";
    fa.dumpster = "\uF793";
    fa.dumpsterFire = "\uF794";
    fa.dungeon = "\uF6D9";
    fa.dyalog = "\uF399";
    fa.ear = "\uF5F0";
    fa.earMuffs = "\uF795";
    fa.earlybirds = "\uF39A";
    fa.ebay = "\uF4F4";
    fa.eclipse = "\uF749";
    fa.eclipseAlt = "\uF74A";
    fa.edge = "\uF282";
    fa.edit = "\uF044";
    fa.eject = "\uF052";
    fa.elementor = "\uF430";
    fa.elephant = "\uF6DA";
    fa.ellipsisH = "\uF141";
    fa.ellipsisHAlt = "\uF39B";
    fa.ellipsisV = "\uF142";
    fa.ellipsisVAlt = "\uF39C";
    fa.ello = "\uF5F1";
    fa.ember = "\uF423";
    fa.empire = "\uF1D1";
    fa.emptySet = "\uF656";
    fa.engineWarning = "\uF5F2";
    fa.envelope = "\uF0E0";
    fa.envelopeOpen = "\uF2B6";
    fa.envelopeOpenDollar = "\uF657";
    fa.envelopeOpenText = "\uF658";
    fa.envelopeSquare = "\uF199";
    fa.envira = "\uF299";
    fa.equals = "\uF52C";
    fa.eraser = "\uF12D";
    fa.erlang = "\uF39D";
    fa.ethereum = "\uF42E";
    fa.ethernet = "\uF796";
    fa.etsy = "\uF2D7";
    fa.euroSign = "\uF153";
    fa.exchange = "\uF0EC";
    fa.exchangeAlt = "\uF362";
    fa.exclamation = "\uF12A";
    fa.exclamationCircle = "\uF06A";
    fa.exclamationSquare = "\uF321";
    fa.exclamationTriangle = "\uF071";
    fa.expand = "\uF065";
    fa.expandAlt = "\uF424";
    fa.expandArrows = "\uF31D";
    fa.expandArrowsAlt = "\uF31E";
    fa.expandWide = "\uF320";
    fa.expeditedssl = "\uF23E";
    fa.externalLink = "\uF08E";
    fa.externalLinkAlt = "\uF35D";
    fa.externalLinkSquare = "\uF14C";
    fa.externalLinkSquareAlt = "\uF360";
    fa.eye = "\uF06E";
    fa.eyeDropper = "\uF1FB";
    fa.eyeEvil = "\uF6DB";
    fa.eyeSlash = "\uF070";
    fa.facebook = "\uF09A";
    fa.facebookF = "\uF39E";
    fa.facebookMessenger = "\uF39F";
    fa.facebookSquare = "\uF082";
    fa.fantasyFlightGames = "\uF6DC";
    fa.fastBackward = "\uF049";
    fa.fastForward = "\uF050";
    fa.fax = "\uF1AC";
    fa.feather = "\uF52D";
    fa.featherAlt = "\uF56B";
    fa.fedex = "\uF797";
    fa.fedora = "\uF798";
    fa.female = "\uF182";
    fa.fieldHockey = "\uF44C";
    fa.fighterJet = "\uF0FB";
    fa.figma = "\uF799";
    fa.file = "\uF15B";
    fa.fileAlt = "\uF15C";
    fa.fileArchive = "\uF1C6";
    fa.fileAudio = "\uF1C7";
    fa.fileCertificate = "\uF5F3";
    fa.fileChartLine = "\uF659";
    fa.fileChartPie = "\uF65A";
    fa.fileCheck = "\uF316";
    fa.fileCode = "\uF1C9";
    fa.fileContract = "\uF56C";
    fa.fileCsv = "\uF6DD";
    fa.fileDownload = "\uF56D";
    fa.fileEdit = "\uF31C";
    fa.fileExcel = "\uF1C3";
    fa.fileExclamation = "\uF31A";
    fa.fileExport = "\uF56E";
    fa.fileImage = "\uF1C5";
    fa.fileImport = "\uF56F";
    fa.fileInvoice = "\uF570";
    fa.fileInvoiceDollar = "\uF571";
    fa.fileMedical = "\uF477";
    fa.fileMedicalAlt = "\uF478";
    fa.fileMinus = "\uF318";
    fa.filePdf = "\uF1C1";
    fa.filePlus = "\uF319";
    fa.filePowerpoint = "\uF1C4";
    fa.filePrescription = "\uF572";
    fa.fileSignature = "\uF573";
    fa.fileSpreadsheet = "\uF65B";
    fa.fileTimes = "\uF317";
    fa.fileUpload = "\uF574";
    fa.fileUser = "\uF65C";
    fa.fileVideo = "\uF1C8";
    fa.fileWord = "\uF1C2";
    fa.fill = "\uF575";
    fa.fillDrip = "\uF576";
    fa.film = "\uF008";
    fa.filmAlt = "\uF3A0";
    fa.filter = "\uF0B0";
    fa.fingerprint = "\uF577";
    fa.fire = "\uF06D";
    fa.fireAlt = "\uF7E4";
    fa.fireExtinguisher = "\uF134";
    fa.fireSmoke = "\uF74B";
    fa.firefox = "\uF269";
    fa.fireplace = "\uF79A";
    fa.firstAid = "\uF479";
    fa.firstOrder = "\uF2B0";
    fa.firstOrderAlt = "\uF50A";
    fa.firstdraft = "\uF3A1";
    fa.fish = "\uF578";
    fa.fistRaised = "\uF6DE";
    fa.flag = "\uF024";
    fa.flagAlt = "\uF74C";
    fa.flagCheckered = "\uF11E";
    fa.flagUsa = "\uF74D";
    fa.flame = "\uF6DF";
    fa.flask = "\uF0C3";
    fa.flaskPoison = "\uF6E0";
    fa.flaskPotion = "\uF6E1";
    fa.flickr = "\uF16E";
    fa.flipboard = "\uF44D";
    fa.flushed = "\uF579";
    fa.fly = "\uF417";
    fa.fog = "\uF74E";
    fa.folder = "\uF07B";
    fa.folderMinus = "\uF65D";
    fa.folderOpen = "\uF07C";
    fa.folderPlus = "\uF65E";
    fa.folderTimes = "\uF65F";
    fa.folders = "\uF660";
    fa.font = "\uF031";
    fa.fontAwesome = "\uF2B4";
    fa.fontAwesomeAlt = "\uF35C";
    fa.fontAwesomeFlag = "\uF425";
    fa.fontAwesomeLogoFull = "\uF4E6";
    fa.fonticons = "\uF280";
    fa.fonticonsFi = "\uF3A2";
    fa.footballBall = "\uF44E";
    fa.footballHelmet = "\uF44F";
    fa.forklift = "\uF47A";
    fa.fortAwesome = "\uF286";
    fa.fortAwesomeAlt = "\uF3A3";
    fa.forumbee = "\uF211";
    fa.forward = "\uF04E";
    fa.foursquare = "\uF180";
    fa.fragile = "\uF4BB";
    fa.freeCodeCamp = "\uF2C5";
    fa.freebsd = "\uF3A4";
    fa.frog = "\uF52E";
    fa.frostyHead = "\uF79B";
    fa.frown = "\uF119";
    fa.frownOpen = "\uF57A";
    fa.fulcrum = "\uF50B";
    fa["function"] = "\uF661";
    fa.funnelDollar = "\uF662";
    fa.futbol = "\uF1E3";
    fa.galacticRepublic = "\uF50C";
    fa.galacticSenate = "\uF50D";
    fa.gamepad = "\uF11B";
    fa.gasPump = "\uF52F";
    fa.gasPumpSlash = "\uF5F4";
    fa.gavel = "\uF0E3";
    fa.gem = "\uF3A5";
    fa.genderless = "\uF22D";
    fa.getPocket = "\uF265";
    fa.gg = "\uF260";
    fa.ggCircle = "\uF261";
    fa.ghost = "\uF6E2";
    fa.gift = "\uF06B";
    fa.giftCard = "\uF663";
    fa.gifts = "\uF79C";
    fa.gingerbreadMan = "\uF79D";
    fa.git = "\uF1D3";
    fa.gitSquare = "\uF1D2";
    fa.github = "\uF09B";
    fa.githubAlt = "\uF113";
    fa.githubSquare = "\uF092";
    fa.gitkraken = "\uF3A6";
    fa.gitlab = "\uF296";
    fa.gitter = "\uF426";
    fa.glassChampagne = "\uF79E";
    fa.glassCheers = "\uF79F";
    fa.glassMartini = "\uF000";
    fa.glassMartiniAlt = "\uF57B";
    fa.glassWhiskey = "\uF7A0";
    fa.glassWhiskeyRocks = "\uF7A1";
    fa.glasses = "\uF530";
    fa.glassesAlt = "\uF5F5";
    fa.glide = "\uF2A5";
    fa.glideG = "\uF2A6";
    fa.globe = "\uF0AC";
    fa.globeAfrica = "\uF57C";
    fa.globeAmericas = "\uF57D";
    fa.globeAsia = "\uF57E";
    fa.globeEurope = "\uF7A2";
    fa.globeSnow = "\uF7A3";
    fa.globeStand = "\uF5F6";
    fa.gofore = "\uF3A7";
    fa.golfBall = "\uF450";
    fa.golfClub = "\uF451";
    fa.goodreads = "\uF3A8";
    fa.goodreadsG = "\uF3A9";
    fa.google = "\uF1A0";
    fa.googleDrive = "\uF3AA";
    fa.googlePlay = "\uF3AB";
    fa.googlePlus = "\uF2B3";
    fa.googlePlusG = "\uF0D5";
    fa.googlePlusSquare = "\uF0D4";
    fa.googleWallet = "\uF1EE";
    fa.gopuram = "\uF664";
    fa.graduationCap = "\uF19D";
    fa.gratipay = "\uF184";
    fa.grav = "\uF2D6";
    fa.greaterThan = "\uF531";
    fa.greaterThanEqual = "\uF532";
    fa.grimace = "\uF57F";
    fa.grin = "\uF580";
    fa.grinAlt = "\uF581";
    fa.grinBeam = "\uF582";
    fa.grinBeamSweat = "\uF583";
    fa.grinHearts = "\uF584";
    fa.grinSquint = "\uF585";
    fa.grinSquintTears = "\uF586";
    fa.grinStars = "\uF587";
    fa.grinTears = "\uF588";
    fa.grinTongue = "\uF589";
    fa.grinTongueSquint = "\uF58A";
    fa.grinTongueWink = "\uF58B";
    fa.grinWink = "\uF58C";
    fa.gripHorizontal = "\uF58D";
    fa.gripLines = "\uF7A4";
    fa.gripLinesVertical = "\uF7A5";
    fa.gripVertical = "\uF58E";
    fa.gripfire = "\uF3AC";
    fa.grunt = "\uF3AD";
    fa.guitar = "\uF7A6";
    fa.gulp = "\uF3AE";
    fa.hSquare = "\uF0FD";
    fa.h1 = "\uF313";
    fa.h2 = "\uF314";
    fa.h3 = "\uF315";
    fa.hackerNews = "\uF1D4";
    fa.hackerNewsSquare = "\uF3AF";
    fa.hackerrank = "\uF5F7";
    fa.hammer = "\uF6E3";
    fa.hammerWar = "\uF6E4";
    fa.hamsa = "\uF665";
    fa.handHeart = "\uF4BC";
    fa.handHolding = "\uF4BD";
    fa.handHoldingBox = "\uF47B";
    fa.handHoldingHeart = "\uF4BE";
    fa.handHoldingMagic = "\uF6E5";
    fa.handHoldingSeedling = "\uF4BF";
    fa.handHoldingUsd = "\uF4C0";
    fa.handHoldingWater = "\uF4C1";
    fa.handLizard = "\uF258";
    fa.handPaper = "\uF256";
    fa.handPeace = "\uF25B";
    fa.handPointDown = "\uF0A7";
    fa.handPointLeft = "\uF0A5";
    fa.handPointRight = "\uF0A4";
    fa.handPointUp = "\uF0A6";
    fa.handPointer = "\uF25A";
    fa.handReceiving = "\uF47C";
    fa.handRock = "\uF255";
    fa.handScissors = "\uF257";
    fa.handSpock = "\uF259";
    fa.hands = "\uF4C2";
    fa.handsHeart = "\uF4C3";
    fa.handsHelping = "\uF4C4";
    fa.handsUsd = "\uF4C5";
    fa.handshake = "\uF2B5";
    fa.handshakeAlt = "\uF4C6";
    fa.hanukiah = "\uF6E6";
    fa.hashtag = "\uF292";
    fa.hatSanta = "\uF7A7";
    fa.hatWinter = "\uF7A8";
    fa.hatWitch = "\uF6E7";
    fa.hatWizard = "\uF6E8";
    fa.haykal = "\uF666";
    fa.hdd = "\uF0A0";
    fa.headSide = "\uF6E9";
    fa.headVr = "\uF6EA";
    fa.heading = "\uF1DC";
    fa.headphones = "\uF025";
    fa.headphonesAlt = "\uF58F";
    fa.headset = "\uF590";
    fa.heart = "\uF004";
    fa.heartBroken = "\uF7A9";
    fa.heartCircle = "\uF4C7";
    fa.heartRate = "\uF5F8";
    fa.heartSquare = "\uF4C8";
    fa.heartbeat = "\uF21E";
    fa.helicopter = "\uF533";
    fa.helmetBattle = "\uF6EB";
    fa.hexagon = "\uF312";
    fa.highlighter = "\uF591";
    fa.hiking = "\uF6EC";
    fa.hippo = "\uF6ED";
    fa.hips = "\uF452";
    fa.hireAHelper = "\uF3B0";
    fa.history = "\uF1DA";
    fa.hockeyMask = "\uF6EE";
    fa.hockeyPuck = "\uF453";
    fa.hockeySticks = "\uF454";
    fa.hollyBerry = "\uF7AA";
    fa.home = "\uF015";
    fa.homeHeart = "\uF4C9";
    fa.hoodCloak = "\uF6EF";
    fa.hooli = "\uF427";
    fa.hornbill = "\uF592";
    fa.horse = "\uF6F0";
    fa.horseHead = "\uF7AB";
    fa.hospital = "\uF0F8";
    fa.hospitalAlt = "\uF47D";
    fa.hospitalSymbol = "\uF47E";
    fa.hotTub = "\uF593";
    fa.hotel = "\uF594";
    fa.hotjar = "\uF3B1";
    fa.hourglass = "\uF254";
    fa.hourglassEnd = "\uF253";
    fa.hourglassHalf = "\uF252";
    fa.hourglassStart = "\uF251";
    fa.houseDamage = "\uF6F1";
    fa.houseFlood = "\uF74F";
    fa.houzz = "\uF27C";
    fa.hryvnia = "\uF6F2";
    fa.html5 = "\uF13B";
    fa.hubspot = "\uF3B2";
    fa.humidity = "\uF750";
    fa.hurricane = "\uF751";
    fa.iCursor = "\uF246";
    fa.iceSkate = "\uF7AC";
    fa.icicles = "\uF7AD";
    fa.idBadge = "\uF2C1";
    fa.idCard = "\uF2C2";
    fa.idCardAlt = "\uF47F";
    fa.igloo = "\uF7AE";
    fa.image = "\uF03E";
    fa.images = "\uF302";
    fa.imdb = "\uF2D8";
    fa.inbox = "\uF01C";
    fa.inboxIn = "\uF310";
    fa.inboxOut = "\uF311";
    fa.indent = "\uF03C";
    fa.industry = "\uF275";
    fa.industryAlt = "\uF3B3";
    fa.infinity = "\uF534";
    fa.info = "\uF129";
    fa.infoCircle = "\uF05A";
    fa.infoSquare = "\uF30F";
    fa.inhaler = "\uF5F9";
    fa.instagram = "\uF16D";
    fa.integral = "\uF667";
    fa.intercom = "\uF7AF";
    fa.internetExplorer = "\uF26B";
    fa.intersection = "\uF668";
    fa.inventory = "\uF480";
    fa.invision = "\uF7B0";
    fa.ioxhost = "\uF208";
    fa.italic = "\uF033";
    fa.itunes = "\uF3B4";
    fa.itunesNote = "\uF3B5";
    fa.jackOLantern = "\uF30E";
    fa.java = "\uF4E4";
    fa.jedi = "\uF669";
    fa.jediOrder = "\uF50E";
    fa.jenkins = "\uF3B6";
    fa.jira = "\uF7B1";
    fa.joget = "\uF3B7";
    fa.joint = "\uF595";
    fa.joomla = "\uF1AA";
    fa.journalWhills = "\uF66A";
    fa.js = "\uF3B8";
    fa.jsSquare = "\uF3B9";
    fa.jsfiddle = "\uF1CC";
    fa.kaaba = "\uF66B";
    fa.kaggle = "\uF5FA";
    fa.key = "\uF084";
    fa.keySkeleton = "\uF6F3";
    fa.keybase = "\uF4F5";
    fa.keyboard = "\uF11C";
    fa.keycdn = "\uF3BA";
    fa.keynote = "\uF66C";
    fa.khanda = "\uF66D";
    fa.kickstarter = "\uF3BB";
    fa.kickstarterK = "\uF3BC";
    fa.kidneys = "\uF5FB";
    fa.kiss = "\uF596";
    fa.kissBeam = "\uF597";
    fa.kissWinkHeart = "\uF598";
    fa.kite = "\uF6F4";
    fa.kiwiBird = "\uF535";
    fa.knifeKitchen = "\uF6F5";
    fa.korvue = "\uF42F";
    fa.lambda = "\uF66E";
    fa.lamp = "\uF4CA";
    fa.landmark = "\uF66F";
    fa.landmarkAlt = "\uF752";
    fa.language = "\uF1AB";
    fa.laptop = "\uF109";
    fa.laptopCode = "\uF5FC";
    fa.laravel = "\uF3BD";
    fa.lastfm = "\uF202";
    fa.lastfmSquare = "\uF203";
    fa.laugh = "\uF599";
    fa.laughBeam = "\uF59A";
    fa.laughSquint = "\uF59B";
    fa.laughWink = "\uF59C";
    fa.layerGroup = "\uF5FD";
    fa.layerMinus = "\uF5FE";
    fa.layerPlus = "\uF5FF";
    fa.leaf = "\uF06C";
    fa.leafHeart = "\uF4CB";
    fa.leafMaple = "\uF6F6";
    fa.leafOak = "\uF6F7";
    fa.leanpub = "\uF212";
    fa.lemon = "\uF094";
    fa.less = "\uF41D";
    fa.lessThan = "\uF536";
    fa.lessThanEqual = "\uF537";
    fa.levelDown = "\uF149";
    fa.levelDownAlt = "\uF3BE";
    fa.levelUp = "\uF148";
    fa.levelUpAlt = "\uF3BF";
    fa.lifeRing = "\uF1CD";
    fa.lightbulb = "\uF0EB";
    fa.lightbulbDollar = "\uF670";
    fa.lightbulbExclamation = "\uF671";
    fa.lightbulbOn = "\uF672";
    fa.lightbulbSlash = "\uF673";
    fa.lightsHoliday = "\uF7B2";
    fa.line = "\uF3C0";
    fa.link = "\uF0C1";
    fa.linkedin = "\uF08C";
    fa.linkedinIn = "\uF0E1";
    fa.linode = "\uF2B8";
    fa.linux = "\uF17C";
    fa.lips = "\uF600";
    fa.liraSign = "\uF195";
    fa.list = "\uF03A";
    fa.listAlt = "\uF022";
    fa.listOl = "\uF0CB";
    fa.listUl = "\uF0CA";
    fa.location = "\uF601";
    fa.locationArrow = "\uF124";
    fa.locationCircle = "\uF602";
    fa.locationSlash = "\uF603";
    fa.lock = "\uF023";
    fa.lockAlt = "\uF30D";
    fa.lockOpen = "\uF3C1";
    fa.lockOpenAlt = "\uF3C2";
    fa.longArrowAltDown = "\uF309";
    fa.longArrowAltLeft = "\uF30A";
    fa.longArrowAltRight = "\uF30B";
    fa.longArrowAltUp = "\uF30C";
    fa.longArrowDown = "\uF175";
    fa.longArrowLeft = "\uF177";
    fa.longArrowRight = "\uF178";
    fa.longArrowUp = "\uF176";
    fa.loveseat = "\uF4CC";
    fa.lowVision = "\uF2A8";
    fa.luchador = "\uF455";
    fa.luggageCart = "\uF59D";
    fa.lungs = "\uF604";
    fa.lyft = "\uF3C3";
    fa.mace = "\uF6F8";
    fa.magento = "\uF3C4";
    fa.magic = "\uF0D0";
    fa.magnet = "\uF076";
    fa.mailBulk = "\uF674";
    fa.mailchimp = "\uF59E";
    fa.male = "\uF183";
    fa.mandalorian = "\uF50F";
    fa.mandolin = "\uF6F9";
    fa.map = "\uF279";
    fa.mapMarked = "\uF59F";
    fa.mapMarkedAlt = "\uF5A0";
    fa.mapMarker = "\uF041";
    fa.mapMarkerAlt = "\uF3C5";
    fa.mapMarkerAltSlash = "\uF605";
    fa.mapMarkerCheck = "\uF606";
    fa.mapMarkerEdit = "\uF607";
    fa.mapMarkerExclamation = "\uF608";
    fa.mapMarkerMinus = "\uF609";
    fa.mapMarkerPlus = "\uF60A";
    fa.mapMarkerQuestion = "\uF60B";
    fa.mapMarkerSlash = "\uF60C";
    fa.mapMarkerSmile = "\uF60D";
    fa.mapMarkerTimes = "\uF60E";
    fa.mapPin = "\uF276";
    fa.mapSigns = "\uF277";
    fa.markdown = "\uF60F";
    fa.marker = "\uF5A1";
    fa.mars = "\uF222";
    fa.marsDouble = "\uF227";
    fa.marsStroke = "\uF229";
    fa.marsStrokeH = "\uF22B";
    fa.marsStrokeV = "\uF22A";
    fa.mask = "\uF6FA";
    fa.mastodon = "\uF4F6";
    fa.maxcdn = "\uF136";
    fa.medal = "\uF5A2";
    fa.medapps = "\uF3C6";
    fa.medium = "\uF23A";
    fa.mediumM = "\uF3C7";
    fa.medkit = "\uF0FA";
    fa.medrt = "\uF3C8";
    fa.meetup = "\uF2E0";
    fa.megaphone = "\uF675";
    fa.megaport = "\uF5A3";
    fa.meh = "\uF11A";
    fa.mehBlank = "\uF5A4";
    fa.mehRollingEyes = "\uF5A5";
    fa.memory = "\uF538";
    fa.mendeley = "\uF7B3";
    fa.menorah = "\uF676";
    fa.mercury = "\uF223";
    fa.meteor = "\uF753";
    fa.microchip = "\uF2DB";
    fa.microphone = "\uF130";
    fa.microphoneAlt = "\uF3C9";
    fa.microphoneAltSlash = "\uF539";
    fa.microphoneSlash = "\uF131";
    fa.microscope = "\uF610";
    fa.microsoft = "\uF3CA";
    fa.mindShare = "\uF677";
    fa.minus = "\uF068";
    fa.minusCircle = "\uF056";
    fa.minusHexagon = "\uF307";
    fa.minusOctagon = "\uF308";
    fa.minusSquare = "\uF146";
    fa.mistletoe = "\uF7B4";
    fa.mitten = "\uF7B5";
    fa.mix = "\uF3CB";
    fa.mixcloud = "\uF289";
    fa.mizuni = "\uF3CC";
    fa.mobile = "\uF10B";
    fa.mobileAlt = "\uF3CD";
    fa.mobileAndroid = "\uF3CE";
    fa.mobileAndroidAlt = "\uF3CF";
    fa.modx = "\uF285";
    fa.monero = "\uF3D0";
    fa.moneyBill = "\uF0D6";
    fa.moneyBillAlt = "\uF3D1";
    fa.moneyBillWave = "\uF53A";
    fa.moneyBillWaveAlt = "\uF53B";
    fa.moneyCheck = "\uF53C";
    fa.moneyCheckAlt = "\uF53D";
    fa.monitorHeartRate = "\uF611";
    fa.monkey = "\uF6FB";
    fa.monument = "\uF5A6";
    fa.moon = "\uF186";
    fa.moonCloud = "\uF754";
    fa.moonStars = "\uF755";
    fa.mortarPestle = "\uF5A7";
    fa.mosque = "\uF678";
    fa.motorcycle = "\uF21C";
    fa.mountain = "\uF6FC";
    fa.mountains = "\uF6FD";
    fa.mousePointer = "\uF245";
    fa.mugHot = "\uF7B6";
    fa.mugMarshmallows = "\uF7B7";
    fa.music = "\uF001";
    fa.napster = "\uF3D2";
    fa.narwhal = "\uF6FE";
    fa.neos = "\uF612";
    fa.networkWired = "\uF6FF";
    fa.neuter = "\uF22C";
    fa.newspaper = "\uF1EA";
    fa.nimblr = "\uF5A8";
    fa.nintendoSwitch = "\uF418";
    fa.node = "\uF419";
    fa.nodeJs = "\uF3D3";
    fa.notEqual = "\uF53E";
    fa.notesMedical = "\uF481";
    fa.npm = "\uF3D4";
    fa.ns8 = "\uF3D5";
    fa.nutritionix = "\uF3D6";
    fa.objectGroup = "\uF247";
    fa.objectUngroup = "\uF248";
    fa.octagon = "\uF306";
    fa.odnoklassniki = "\uF263";
    fa.odnoklassnikiSquare = "\uF264";
    fa.oilCan = "\uF613";
    fa.oilTemp = "\uF614";
    fa.oldRepublic = "\uF510";
    fa.om = "\uF679";
    fa.omega = "\uF67A";
    fa.opencart = "\uF23D";
    fa.openid = "\uF19B";
    fa.opera = "\uF26A";
    fa.optinMonster = "\uF23C";
    fa.ornament = "\uF7B8";
    fa.osi = "\uF41A";
    fa.otter = "\uF700";
    fa.outdent = "\uF03B";
    fa.page4 = "\uF3D7";
    fa.pagelines = "\uF18C";
    fa.paintBrush = "\uF1FC";
    fa.paintBrushAlt = "\uF5A9";
    fa.paintRoller = "\uF5AA";
    fa.palette = "\uF53F";
    fa.palfed = "\uF3D8";
    fa.pallet = "\uF482";
    fa.palletAlt = "\uF483";
    fa.paperPlane = "\uF1D8";
    fa.paperclip = "\uF0C6";
    fa.parachuteBox = "\uF4CD";
    fa.paragraph = "\uF1DD";
    fa.parking = "\uF540";
    fa.parkingCircle = "\uF615";
    fa.parkingCircleSlash = "\uF616";
    fa.parkingSlash = "\uF617";
    fa.passport = "\uF5AB";
    fa.pastafarianism = "\uF67B";
    fa.paste = "\uF0EA";
    fa.patreon = "\uF3D9";
    fa.pause = "\uF04C";
    fa.pauseCircle = "\uF28B";
    fa.paw = "\uF1B0";
    fa.pawAlt = "\uF701";
    fa.pawClaws = "\uF702";
    fa.paypal = "\uF1ED";
    fa.peace = "\uF67C";
    fa.pegasus = "\uF703";
    fa.pen = "\uF304";
    fa.penAlt = "\uF305";
    fa.penFancy = "\uF5AC";
    fa.penNib = "\uF5AD";
    fa.penSquare = "\uF14B";
    fa.pencil = "\uF040";
    fa.pencilAlt = "\uF303";
    fa.pencilPaintbrush = "\uF618";
    fa.pencilRuler = "\uF5AE";
    fa.pennant = "\uF456";
    fa.pennyArcade = "\uF704";
    fa.peopleCarry = "\uF4CE";
    fa.percent = "\uF295";
    fa.percentage = "\uF541";
    fa.periscope = "\uF3DA";
    fa.personBooth = "\uF756";
    fa.personCarry = "\uF4CF";
    fa.personDolly = "\uF4D0";
    fa.personDollyEmpty = "\uF4D1";
    fa.personSign = "\uF757";
    fa.phabricator = "\uF3DB";
    fa.phoenixFramework = "\uF3DC";
    fa.phoenixSquadron = "\uF511";
    fa.phone = "\uF095";
    fa.phoneOffice = "\uF67D";
    fa.phonePlus = "\uF4D2";
    fa.phoneSlash = "\uF3DD";
    fa.phoneSquare = "\uF098";
    fa.phoneVolume = "\uF2A0";
    fa.php = "\uF457";
    fa.pi = "\uF67E";
    fa.pie = "\uF705";
    fa.piedPiper = "\uF2AE";
    fa.piedPiperAlt = "\uF1A8";
    fa.piedPiperHat = "\uF4E5";
    fa.piedPiperPp = "\uF1A7";
    fa.pig = "\uF706";
    fa.piggyBank = "\uF4D3";
    fa.pills = "\uF484";
    fa.pinterest = "\uF0D2";
    fa.pinterestP = "\uF231";
    fa.pinterestSquare = "\uF0D3";
    fa.placeOfWorship = "\uF67F";
    fa.plane = "\uF072";
    fa.planeAlt = "\uF3DE";
    fa.planeArrival = "\uF5AF";
    fa.planeDeparture = "\uF5B0";
    fa.play = "\uF04B";
    fa.playCircle = "\uF144";
    fa.playstation = "\uF3DF";
    fa.plug = "\uF1E6";
    fa.plus = "\uF067";
    fa.plusCircle = "\uF055";
    fa.plusHexagon = "\uF300";
    fa.plusOctagon = "\uF301";
    fa.plusSquare = "\uF0FE";
    fa.podcast = "\uF2CE";
    fa.podium = "\uF680";
    fa.podiumStar = "\uF758";
    fa.poll = "\uF681";
    fa.pollH = "\uF682";
    fa.pollPeople = "\uF759";
    fa.poo = "\uF2FE";
    fa.pooStorm = "\uF75A";
    fa.poop = "\uF619";
    fa.portrait = "\uF3E0";
    fa.poundSign = "\uF154";
    fa.powerOff = "\uF011";
    fa.pray = "\uF683";
    fa.prayingHands = "\uF684";
    fa.prescription = "\uF5B1";
    fa.prescriptionBottle = "\uF485";
    fa.prescriptionBottleAlt = "\uF486";
    fa.presentation = "\uF685";
    fa.print = "\uF02F";
    fa.printSlash = "\uF686";
    fa.procedures = "\uF487";
    fa.productHunt = "\uF288";
    fa.projectDiagram = "\uF542";
    fa.pumpkin = "\uF707";
    fa.pushed = "\uF3E1";
    fa.puzzlePiece = "\uF12E";
    fa.python = "\uF3E2";
    fa.qq = "\uF1D6";
    fa.qrcode = "\uF029";
    fa.question = "\uF128";
    fa.questionCircle = "\uF059";
    fa.questionSquare = "\uF2FD";
    fa.quidditch = "\uF458";
    fa.quinscape = "\uF459";
    fa.quora = "\uF2C4";
    fa.quoteLeft = "\uF10D";
    fa.quoteRight = "\uF10E";
    fa.quran = "\uF687";
    fa.rProject = "\uF4F7";
    fa.rabbit = "\uF708";
    fa.rabbitFast = "\uF709";
    fa.racquet = "\uF45A";
    fa.radiation = "\uF7B9";
    fa.radiationAlt = "\uF7BA";
    fa.rainbow = "\uF75B";
    fa.raindrops = "\uF75C";
    fa.ram = "\uF70A";
    fa.rampLoading = "\uF4D4";
    fa.random = "\uF074";
    fa.raspberryPi = "\uF7BB";
    fa.ravelry = "\uF2D9";
    fa.react = "\uF41B";
    fa.reacteurope = "\uF75D";
    fa.readme = "\uF4D5";
    fa.rebel = "\uF1D0";
    fa.receipt = "\uF543";
    fa.rectangleLandscape = "\uF2FA";
    fa.rectanglePortrait = "\uF2FB";
    fa.rectangleWide = "\uF2FC";
    fa.recycle = "\uF1B8";
    fa.redRiver = "\uF3E3";
    fa.reddit = "\uF1A1";
    fa.redditAlien = "\uF281";
    fa.redditSquare = "\uF1A2";
    fa.redhat = "\uF7BC";
    fa.redo = "\uF01E";
    fa.redoAlt = "\uF2F9";
    fa.registered = "\uF25D";
    fa.renren = "\uF18B";
    fa.repeat = "\uF363";
    fa.repeat1 = "\uF365";
    fa.repeat1Alt = "\uF366";
    fa.repeatAlt = "\uF364";
    fa.reply = "\uF3E5";
    fa.replyAll = "\uF122";
    fa.replyd = "\uF3E6";
    fa.republican = "\uF75E";
    fa.researchgate = "\uF4F8";
    fa.resolving = "\uF3E7";
    fa.restroom = "\uF7BD";
    fa.retweet = "\uF079";
    fa.retweetAlt = "\uF361";
    fa.rev = "\uF5B2";
    fa.ribbon = "\uF4D6";
    fa.ring = "\uF70B";
    fa.road = "\uF018";
    fa.robot = "\uF544";
    fa.rocket = "\uF135";
    fa.rocketchat = "\uF3E8";
    fa.rockrms = "\uF3E9";
    fa.route = "\uF4D7";
    fa.routeHighway = "\uF61A";
    fa.routeInterstate = "\uF61B";
    fa.rss = "\uF09E";
    fa.rssSquare = "\uF143";
    fa.rubleSign = "\uF158";
    fa.ruler = "\uF545";
    fa.rulerCombined = "\uF546";
    fa.rulerHorizontal = "\uF547";
    fa.rulerTriangle = "\uF61C";
    fa.rulerVertical = "\uF548";
    fa.running = "\uF70C";
    fa.rupeeSign = "\uF156";
    fa.rv = "\uF7BE";
    fa.sadCry = "\uF5B3";
    fa.sadTear = "\uF5B4";
    fa.safari = "\uF267";
    fa.sass = "\uF41E";
    fa.satellite = "\uF7BF";
    fa.satelliteDish = "\uF7C0";
    fa.save = "\uF0C7";
    fa.scalpel = "\uF61D";
    fa.scalpelPath = "\uF61E";
    fa.scanner = "\uF488";
    fa.scannerKeyboard = "\uF489";
    fa.scannerTouchscreen = "\uF48A";
    fa.scarecrow = "\uF70D";
    fa.scarf = "\uF7C1";
    fa.schlix = "\uF3EA";
    fa.school = "\uF549";
    fa.screwdriver = "\uF54A";
    fa.scribd = "\uF28A";
    fa.scroll = "\uF70E";
    fa.scrollOld = "\uF70F";
    fa.scrubber = "\uF2F8";
    fa.scythe = "\uF710";
    fa.sdCard = "\uF7C2";
    fa.search = "\uF002";
    fa.searchDollar = "\uF688";
    fa.searchLocation = "\uF689";
    fa.searchMinus = "\uF010";
    fa.searchPlus = "\uF00E";
    fa.searchengin = "\uF3EB";
    fa.seedling = "\uF4D8";
    fa.sellcast = "\uF2DA";
    fa.sellsy = "\uF213";
    fa.server = "\uF233";
    fa.servicestack = "\uF3EC";
    fa.shapes = "\uF61F";
    fa.share = "\uF064";
    fa.shareAll = "\uF367";
    fa.shareAlt = "\uF1E0";
    fa.shareAltSquare = "\uF1E1";
    fa.shareSquare = "\uF14D";
    fa.sheep = "\uF711";
    fa.shekelSign = "\uF20B";
    fa.shield = "\uF132";
    fa.shieldAlt = "\uF3ED";
    fa.shieldCheck = "\uF2F7";
    fa.shieldCross = "\uF712";
    fa.ship = "\uF21A";
    fa.shippingFast = "\uF48B";
    fa.shippingTimed = "\uF48C";
    fa.shirtsinbulk = "\uF214";
    fa.shoePrints = "\uF54B";
    fa.shoppingBag = "\uF290";
    fa.shoppingBasket = "\uF291";
    fa.shoppingCart = "\uF07A";
    fa.shopware = "\uF5B5";
    fa.shovel = "\uF713";
    fa.shovelSnow = "\uF7C3";
    fa.shower = "\uF2CC";
    fa.shredder = "\uF68A";
    fa.shuttleVan = "\uF5B6";
    fa.shuttlecock = "\uF45B";
    fa.sigma = "\uF68B";
    fa.sign = "\uF4D9";
    fa.signIn = "\uF090";
    fa.signInAlt = "\uF2F6";
    fa.signLanguage = "\uF2A7";
    fa.signOut = "\uF08B";
    fa.signOutAlt = "\uF2F5";
    fa.signal = "\uF012";
    fa.signal1 = "\uF68C";
    fa.signal2 = "\uF68D";
    fa.signal3 = "\uF68E";
    fa.signal4 = "\uF68F";
    fa.signalAlt = "\uF690";
    fa.signalAlt1 = "\uF691";
    fa.signalAlt2 = "\uF692";
    fa.signalAlt3 = "\uF693";
    fa.signalAltSlash = "\uF694";
    fa.signalSlash = "\uF695";
    fa.signature = "\uF5B7";
    fa.simCard = "\uF7C4";
    fa.simplybuilt = "\uF215";
    fa.sistrix = "\uF3EE";
    fa.sitemap = "\uF0E8";
    fa.sith = "\uF512";
    fa.skating = "\uF7C5";
    fa.skeleton = "\uF620";
    fa.sketch = "\uF7C6";
    fa.skiJump = "\uF7C7";
    fa.skiLift = "\uF7C8";
    fa.skiing = "\uF7C9";
    fa.skiingNordic = "\uF7CA";
    fa.skull = "\uF54C";
    fa.skullCrossbones = "\uF714";
    fa.skyatlas = "\uF216";
    fa.skype = "\uF17E";
    fa.slack = "\uF198";
    fa.slackHash = "\uF3EF";
    fa.slash = "\uF715";
    fa.sledding = "\uF7CB";
    fa.sleigh = "\uF7CC";
    fa.slidersH = "\uF1DE";
    fa.slidersHSquare = "\uF3F0";
    fa.slidersV = "\uF3F1";
    fa.slidersVSquare = "\uF3F2";
    fa.slideshare = "\uF1E7";
    fa.smile = "\uF118";
    fa.smileBeam = "\uF5B8";
    fa.smilePlus = "\uF5B9";
    fa.smileWink = "\uF4DA";
    fa.smog = "\uF75F";
    fa.smoke = "\uF760";
    fa.smoking = "\uF48D";
    fa.smokingBan = "\uF54D";
    fa.sms = "\uF7CD";
    fa.snake = "\uF716";
    fa.snapchat = "\uF2AB";
    fa.snapchatGhost = "\uF2AC";
    fa.snapchatSquare = "\uF2AD";
    fa.snowBlowing = "\uF761";
    fa.snowboarding = "\uF7CE";
    fa.snowflake = "\uF2DC";
    fa.snowflakes = "\uF7CF";
    fa.snowman = "\uF7D0";
    fa.snowmobile = "\uF7D1";
    fa.snowplow = "\uF7D2";
    fa.socks = "\uF696";
    fa.solarPanel = "\uF5BA";
    fa.sort = "\uF0DC";
    fa.sortAlphaDown = "\uF15D";
    fa.sortAlphaUp = "\uF15E";
    fa.sortAmountDown = "\uF160";
    fa.sortAmountUp = "\uF161";
    fa.sortDown = "\uF0DD";
    fa.sortNumericDown = "\uF162";
    fa.sortNumericUp = "\uF163";
    fa.sortUp = "\uF0DE";
    fa.soundcloud = "\uF1BE";
    fa.sourcetree = "\uF7D3";
    fa.spa = "\uF5BB";
    fa.spaceShuttle = "\uF197";
    fa.spade = "\uF2F4";
    fa.speakap = "\uF3F3";
    fa.spider = "\uF717";
    fa.spiderBlackWidow = "\uF718";
    fa.spiderWeb = "\uF719";
    fa.spinner = "\uF110";
    fa.spinnerThird = "\uF3F4";
    fa.splotch = "\uF5BC";
    fa.spotify = "\uF1BC";
    fa.sprayCan = "\uF5BD";
    fa.square = "\uF0C8";
    fa.squareFull = "\uF45C";
    fa.squareRoot = "\uF697";
    fa.squareRootAlt = "\uF698";
    fa.squarespace = "\uF5BE";
    fa.squirrel = "\uF71A";
    fa.stackExchange = "\uF18D";
    fa.stackOverflow = "\uF16C";
    fa.staff = "\uF71B";
    fa.stamp = "\uF5BF";
    fa.star = "\uF005";
    fa.starAndCrescent = "\uF699";
    fa.starChristmas = "\uF7D4";
    fa.starExclamation = "\uF2F3";
    fa.starHalf = "\uF089";
    fa.starHalfAlt = "\uF5C0";
    fa.starOfDavid = "\uF69A";
    fa.starOfLife = "\uF621";
    fa.stars = "\uF762";
    fa.staylinked = "\uF3F5";
    fa.steam = "\uF1B6";
    fa.steamSquare = "\uF1B7";
    fa.steamSymbol = "\uF3F6";
    fa.steeringWheel = "\uF622";
    fa.stepBackward = "\uF048";
    fa.stepForward = "\uF051";
    fa.stethoscope = "\uF0F1";
    fa.stickerMule = "\uF3F7";
    fa.stickyNote = "\uF249";
    fa.stocking = "\uF7D5";
    fa.stomach = "\uF623";
    fa.stop = "\uF04D";
    fa.stopCircle = "\uF28D";
    fa.stopwatch = "\uF2F2";
    fa.store = "\uF54E";
    fa.storeAlt = "\uF54F";
    fa.strava = "\uF428";
    fa.stream = "\uF550";
    fa.streetView = "\uF21D";
    fa.strikethrough = "\uF0CC";
    fa.stripe = "\uF429";
    fa.stripeS = "\uF42A";
    fa.stroopwafel = "\uF551";
    fa.studiovinari = "\uF3F8";
    fa.stumbleupon = "\uF1A4";
    fa.stumbleuponCircle = "\uF1A3";
    fa.subscript = "\uF12C";
    fa.subway = "\uF239";
    fa.suitcase = "\uF0F2";
    fa.suitcaseRolling = "\uF5C1";
    fa.sun = "\uF185";
    fa.sunCloud = "\uF763";
    fa.sunDust = "\uF764";
    fa.sunHaze = "\uF765";
    fa.sunrise = "\uF766";
    fa.sunset = "\uF767";
    fa.superpowers = "\uF2DD";
    fa.superscript = "\uF12B";
    fa.supple = "\uF3F9";
    fa.surprise = "\uF5C2";
    fa.suse = "\uF7D6";
    fa.swatchbook = "\uF5C3";
    fa.swimmer = "\uF5C4";
    fa.swimmingPool = "\uF5C5";
    fa.sword = "\uF71C";
    fa.swords = "\uF71D";
    fa.synagogue = "\uF69B";
    fa.sync = "\uF021";
    fa.syncAlt = "\uF2F1";
    fa.syringe = "\uF48E";
    fa.table = "\uF0CE";
    fa.tableTennis = "\uF45D";
    fa.tablet = "\uF10A";
    fa.tabletAlt = "\uF3FA";
    fa.tabletAndroid = "\uF3FB";
    fa.tabletAndroidAlt = "\uF3FC";
    fa.tabletRugged = "\uF48F";
    fa.tablets = "\uF490";
    fa.tachometer = "\uF0E4";
    fa.tachometerAlt = "\uF3FD";
    fa.tachometerAltAverage = "\uF624";
    fa.tachometerAltFast = "\uF625";
    fa.tachometerAltFastest = "\uF626";
    fa.tachometerAltSlow = "\uF627";
    fa.tachometerAltSlowest = "\uF628";
    fa.tachometerAverage = "\uF629";
    fa.tachometerFast = "\uF62A";
    fa.tachometerFastest = "\uF62B";
    fa.tachometerSlow = "\uF62C";
    fa.tachometerSlowest = "\uF62D";
    fa.tag = "\uF02B";
    fa.tags = "\uF02C";
    fa.tally = "\uF69C";
    fa.tape = "\uF4DB";
    fa.tasks = "\uF0AE";
    fa.taxi = "\uF1BA";
    fa.teamspeak = "\uF4F9";
    fa.teeth = "\uF62E";
    fa.teethOpen = "\uF62F";
    fa.telegram = "\uF2C6";
    fa.telegramPlane = "\uF3FE";
    fa.temperatureFrigid = "\uF768";
    fa.temperatureHigh = "\uF769";
    fa.temperatureHot = "\uF76A";
    fa.temperatureLow = "\uF76B";
    fa.tencentWeibo = "\uF1D5";
    fa.tenge = "\uF7D7";
    fa.tennisBall = "\uF45E";
    fa.terminal = "\uF120";
    fa.textHeight = "\uF034";
    fa.textWidth = "\uF035";
    fa.th = "\uF00A";
    fa.thLarge = "\uF009";
    fa.thList = "\uF00B";
    fa.theRedYeti = "\uF69D";
    fa.theaterMasks = "\uF630";
    fa.themeco = "\uF5C6";
    fa.themeisle = "\uF2B2";
    fa.thermometer = "\uF491";
    fa.thermometerEmpty = "\uF2CB";
    fa.thermometerFull = "\uF2C7";
    fa.thermometerHalf = "\uF2C9";
    fa.thermometerQuarter = "\uF2CA";
    fa.thermometerThreeQuarters = "\uF2C8";
    fa.theta = "\uF69E";
    fa.thinkPeaks = "\uF731";
    fa.thumbsDown = "\uF165";
    fa.thumbsUp = "\uF164";
    fa.thumbtack = "\uF08D";
    fa.thunderstorm = "\uF76C";
    fa.thunderstormMoon = "\uF76D";
    fa.thunderstormSun = "\uF76E";
    fa.ticket = "\uF145";
    fa.ticketAlt = "\uF3FF";
    fa.tilde = "\uF69F";
    fa.times = "\uF00D";
    fa.timesCircle = "\uF057";
    fa.timesHexagon = "\uF2EE";
    fa.timesOctagon = "\uF2F0";
    fa.timesSquare = "\uF2D3";
    fa.tint = "\uF043";
    fa.tintSlash = "\uF5C7";
    fa.tire = "\uF631";
    fa.tireFlat = "\uF632";
    fa.tirePressureWarning = "\uF633";
    fa.tireRugged = "\uF634";
    fa.tired = "\uF5C8";
    fa.toggleOff = "\uF204";
    fa.toggleOn = "\uF205";
    fa.toilet = "\uF7D8";
    fa.toiletPaper = "\uF71E";
    fa.toiletPaperAlt = "\uF71F";
    fa.tombstone = "\uF720";
    fa.tombstoneAlt = "\uF721";
    fa.toolbox = "\uF552";
    fa.tools = "\uF7D9";
    fa.tooth = "\uF5C9";
    fa.toothbrush = "\uF635";
    fa.torah = "\uF6A0";
    fa.toriiGate = "\uF6A1";
    fa.tornado = "\uF76F";
    fa.tractor = "\uF722";
    fa.tradeFederation = "\uF513";
    fa.trademark = "\uF25C";
    fa.trafficCone = "\uF636";
    fa.trafficLight = "\uF637";
    fa.trafficLightGo = "\uF638";
    fa.trafficLightSlow = "\uF639";
    fa.trafficLightStop = "\uF63A";
    fa.train = "\uF238";
    fa.tram = "\uF7DA";
    fa.transgender = "\uF224";
    fa.transgenderAlt = "\uF225";
    fa.trash = "\uF1F8";
    fa.trashAlt = "\uF2ED";
    fa.treasureChest = "\uF723";
    fa.tree = "\uF1BB";
    fa.treeAlt = "\uF400";
    fa.treeChristmas = "\uF7DB";
    fa.treeDecorated = "\uF7DC";
    fa.treeLarge = "\uF7DD";
    fa.trees = "\uF724";
    fa.trello = "\uF181";
    fa.triangle = "\uF2EC";
    fa.tripadvisor = "\uF262";
    fa.trophy = "\uF091";
    fa.trophyAlt = "\uF2EB";
    fa.truck = "\uF0D1";
    fa.truckContainer = "\uF4DC";
    fa.truckCouch = "\uF4DD";
    fa.truckLoading = "\uF4DE";
    fa.truckMonster = "\uF63B";
    fa.truckMoving = "\uF4DF";
    fa.truckPickup = "\uF63C";
    fa.truckPlow = "\uF7DE";
    fa.truckRamp = "\uF4E0";
    fa.tshirt = "\uF553";
    fa.tty = "\uF1E4";
    fa.tumblr = "\uF173";
    fa.tumblrSquare = "\uF174";
    fa.turkey = "\uF725";
    fa.turtle = "\uF726";
    fa.tv = "\uF26C";
    fa.tvRetro = "\uF401";
    fa.twitch = "\uF1E8";
    fa.twitter = "\uF099";
    fa.twitterSquare = "\uF081";
    fa.typo3 = "\uF42B";
    fa.uber = "\uF402";
    fa.ubuntu = "\uF7DF";
    fa.uikit = "\uF403";
    fa.umbrella = "\uF0E9";
    fa.umbrellaBeach = "\uF5CA";
    fa.underline = "\uF0CD";
    fa.undo = "\uF0E2";
    fa.undoAlt = "\uF2EA";
    fa.unicorn = "\uF727";
    fa.union = "\uF6A2";
    fa.uniregistry = "\uF404";
    fa.universalAccess = "\uF29A";
    fa.university = "\uF19C";
    fa.unlink = "\uF127";
    fa.unlock = "\uF09C";
    fa.unlockAlt = "\uF13E";
    fa.untappd = "\uF405";
    fa.upload = "\uF093";
    fa.ups = "\uF7E0";
    fa.usb = "\uF287";
    fa.usdCircle = "\uF2E8";
    fa.usdSquare = "\uF2E9";
    fa.user = "\uF007";
    fa.userAlt = "\uF406";
    fa.userAltSlash = "\uF4FA";
    fa.userAstronaut = "\uF4FB";
    fa.userChart = "\uF6A3";
    fa.userCheck = "\uF4FC";
    fa.userCircle = "\uF2BD";
    fa.userClock = "\uF4FD";
    fa.userCog = "\uF4FE";
    fa.userCrown = "\uF6A4";
    fa.userEdit = "\uF4FF";
    fa.userFriends = "\uF500";
    fa.userGraduate = "\uF501";
    fa.userInjured = "\uF728";
    fa.userLock = "\uF502";
    fa.userMd = "\uF0F0";
    fa.userMinus = "\uF503";
    fa.userNinja = "\uF504";
    fa.userPlus = "\uF234";
    fa.userSecret = "\uF21B";
    fa.userShield = "\uF505";
    fa.userSlash = "\uF506";
    fa.userTag = "\uF507";
    fa.userTie = "\uF508";
    fa.userTimes = "\uF235";
    fa.users = "\uF0C0";
    fa.usersClass = "\uF63D";
    fa.usersCog = "\uF509";
    fa.usersCrown = "\uF6A5";
    fa.usps = "\uF7E1";
    fa.ussunnah = "\uF407";
    fa.utensilFork = "\uF2E3";
    fa.utensilKnife = "\uF2E4";
    fa.utensilSpoon = "\uF2E5";
    fa.utensils = "\uF2E7";
    fa.utensilsAlt = "\uF2E6";
    fa.vaadin = "\uF408";
    fa.valueAbsolute = "\uF6A6";
    fa.vectorSquare = "\uF5CB";
    fa.venus = "\uF221";
    fa.venusDouble = "\uF226";
    fa.venusMars = "\uF228";
    fa.viacoin = "\uF237";
    fa.viadeo = "\uF2A9";
    fa.viadeoSquare = "\uF2AA";
    fa.vial = "\uF492";
    fa.vials = "\uF493";
    fa.viber = "\uF409";
    fa.video = "\uF03D";
    fa.videoPlus = "\uF4E1";
    fa.videoSlash = "\uF4E2";
    fa.vihara = "\uF6A7";
    fa.vimeo = "\uF40A";
    fa.vimeoSquare = "\uF194";
    fa.vimeoV = "\uF27D";
    fa.vine = "\uF1CA";
    fa.vk = "\uF189";
    fa.vnv = "\uF40B";
    fa.volcano = "\uF770";
    fa.volleyballBall = "\uF45F";
    fa.volume = "\uF6A8";
    fa.volumeDown = "\uF027";
    fa.volumeMute = "\uF6A9";
    fa.volumeOff = "\uF026";
    fa.volumeSlash = "\uF2E2";
    fa.volumeUp = "\uF028";
    fa.voteNay = "\uF771";
    fa.voteYea = "\uF772";
    fa.vrCardboard = "\uF729";
    fa.vuejs = "\uF41F";
    fa.walking = "\uF554";
    fa.wallet = "\uF555";
    fa.wand = "\uF72A";
    fa.wandMagic = "\uF72B";
    fa.warehouse = "\uF494";
    fa.warehouseAlt = "\uF495";
    fa.watch = "\uF2E1";
    fa.watchFitness = "\uF63E";
    fa.water = "\uF773";
    fa.waterLower = "\uF774";
    fa.waterRise = "\uF775";
    fa.weebly = "\uF5CC";
    fa.weibo = "\uF18A";
    fa.weight = "\uF496";
    fa.weightHanging = "\uF5CD";
    fa.weixin = "\uF1D7";
    fa.whale = "\uF72C";
    fa.whatsapp = "\uF232";
    fa.whatsappSquare = "\uF40C";
    fa.wheat = "\uF72D";
    fa.wheelchair = "\uF193";
    fa.whistle = "\uF460";
    fa.whmcs = "\uF40D";
    fa.wifi = "\uF1EB";
    fa.wifi1 = "\uF6AA";
    fa.wifi2 = "\uF6AB";
    fa.wifiSlash = "\uF6AC";
    fa.wikipediaW = "\uF266";
    fa.wind = "\uF72E";
    fa.windWarning = "\uF776";
    fa.window = "\uF40E";
    fa.windowAlt = "\uF40F";
    fa.windowClose = "\uF410";
    fa.windowMaximize = "\uF2D0";
    fa.windowMinimize = "\uF2D1";
    fa.windowRestore = "\uF2D2";
    fa.windows = "\uF17A";
    fa.windsock = "\uF777";
    fa.wineBottle = "\uF72F";
    fa.wineGlass = "\uF4E3";
    fa.wineGlassAlt = "\uF5CE";
    fa.wix = "\uF5CF";
    fa.wizardsOfTheCoast = "\uF730";
    fa.wolfPackBattalion = "\uF514";
    fa.wonSign = "\uF159";
    fa.wordpress = "\uF19A";
    fa.wordpressSimple = "\uF411";
    fa.wpbeginner = "\uF297";
    fa.wpexplorer = "\uF2DE";
    fa.wpforms = "\uF298";
    fa.wpressr = "\uF3E4";
    fa.wreath = "\uF7E2";
    fa.wrench = "\uF0AD";
    fa.xRay = "\uF497";
    fa.xbox = "\uF412";
    fa.xing = "\uF168";
    fa.xingSquare = "\uF169";
    fa.yCombinator = "\uF23B";
    fa.yahoo = "\uF19E";
    fa.yandex = "\uF413";
    fa.yandexInternational = "\uF414";
    fa.yarn = "\uF7E3";
    fa.yelp = "\uF1E9";
    fa.yenSign = "\uF157";
    fa.yinYang = "\uF6AD";
    fa.yoast = "\uF2B1";
    fa.youtube = "\uF167";
    fa.youtubeSquare = "\uF431";
    fa.zhihu = "\uF63F";
    module.exports = fa;
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!*********************************************************!*\
    !*** multi ./src/styles.css ./node_modules/fontawesome ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! C:\mywebsite\AngularApp\src\styles.css */
    "./src/styles.css");

    module.exports = __webpack_require__(
    /*! C:\mywebsite\AngularApp\node_modules\fontawesome */
    "./node_modules/fontawesome/index.js");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map