// ==UserScript==
// @name               SpeedTest净化增强
// @name:zh-TW         SpeedTest凈化增強
// @name:en            SpeedTestEnhance
// @namespace          https://github.com/GangPeter/pgscript
// @version            2.2.5
// @author             GangPeter
// @description        去除SpeedTest广告、拦截弹窗、修复布局、支持PC端|移动端
// @description:zh-TW  去除SpeedTest廣告、攔截彈窗、修復布局、支持PC端|移動端
// @description:en     Remove SpeedTest ads
// @license            None
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFOUlEQVR4nMSX6WITNxSF9SLW9IVpCGnIRlZIgEKAUEIgLVDCWxDHdrCzvIV6vnulmbFjB0p/9Ic8i6Wjo7uceyeklEJ72E+100/xj1Go5k/ziwe9VK2ehWq959Oq+W6Ir4apejgYX28Y8dEgxSfnqVo4DdVdYVRLZ6na7ifWV8tnyd7G599CfKpZW33fJe4MQnyhlwfDFI8uUufvq9D5rPH+ItPYFMSKoLhuaawKbv402R42QTfVva7vt9ZrJmmBTTA4YD9epfjuIsU3owSPmsNtIwgq6Fwhvh7Zys7xpZP8ch0670QyT0jVrgzw7JsdrVroOq85DIEhdwbJrus9M2i12E3NBP3UR1zVlftyirunySfIL9VvWrVmfzaoWtBMkB2iLAePuHeezNTiFzon2QaMPy9TPNRpXg2DJtkB3JKcBH9wXHzyehTiodDwixZhwM7na4aMOj4mAWzr+FQ0nmu8lHOxn6hhN/3nJrrztTFTHXMKLxuYCSsosGRbWUimW1E8LnZ9Medl8RjAcg6C9b4HH+bEjA+0eDO/2+j7HMy8qDEGgCV5sdD1CQaWmWDudZmed2zUBiPCxwCyO+SzUN3XWBZ1WTs+PvcjldSQm+y4tRfuOIASyt11Igt/vDIvKEFxW4r7Mio+5ooLCYgCYJE5OU7ktk9y3/FliG/l0jdyLf4nHycB/sswFBklRLlMFIN877sdjpTUCqIPlj9Tg2gWQDJ1IIDeXlgKZ5DGPlyVjDcBMBDRiLFeZCCYfLokDwg4eeyre01jHICsxk1Im9wWf7dQVm4MmyhsR2INQKjmhRbSmzl4eEYBkNX7Zx4bUwGIrhJ1RQmItE25aSPflyhEFG4ALEghV3rN7oySGwDAhndsAjj/3dOaGmAu50CdUL0c73kymVh0CjZstOJsGgBPz6Szeia2bbFVFmXwFptJACWSscHqTVbiunYGApqfbwPwTFzrWXDV2VcMLRGH1XQArnJd5ygn0P7QYyKntN3jYoE7AKkMyNJZoLZaJhKqZCFViJAmKkt0ShfjQ0ldATDZbkt3GX9Jwt9feD4AJHCi8ibANC34goQrAwFR0pAPMwGKrNc5gbzv5hpBdlInyAlqhaV5BpSNlO4wtcJrKY8Isfl0UjfGzxLw6palAjNZzdZpayKT5mwPuoU8fozAy+w8Ct1+vkejcS56XchA5MNlswmn5CoLmRRv9y1QSh7XqTiVwJ43GyZRil97fpyrLmFoZIal8po74rFcgmv25N/FvJF6urpalVC/lcCWVWMrW7KCZx+JQ+aRSI/yf5DBOjRaImx6sZxljyQs0lfk73sEfqG9KzqxPaanpcKPk8GcGyKMTPB/aazAQUb+LQEVcd+oqKHrsW9W5LXdMSD06PX2oBG8InKQXcukWIdAoraI5UwCpS0pGxUykycvFim9z5qZ3p/b82aRWcpFZa5VD+rWpgxacJqnSTLFMmUTfVbYc7GIhKUuOG1CRiaXBGvOmup2k0DbT9ZnnTpjzGjA+VRtMlao7Jks8nv7xMkb8W6am0o9+g4Bb/YIJgJrsdX0UexXcvYQlOrrLFMmN+PU3JNVpZbZx8/PELBhnxWqcQMXmAPr97wrpyeibO3mLNrJm6El/EddhIC7a0oMtKP019zGL6uo7p7bRi6n19ZkmfighAcjF6Sils/Gydhz+XKhCNGUThKwSsVQF0sdrb/FShvYHmqb0X4rlUetcok0H2SZLoPq51+n1hHPJDCtcZ0xvNhQdOhX+YKCDEUJIkgxBYvD4J4fJfB/jn8AAAD//+PrNisAAAAGSURBVAMA7bfiwzxDGHoAAAAASUVORK5CYII=
// @homepageURL        https://github.com/GangPeter/pgscript
// @supportURL         https://github.com/GangPeter/pgscript
// @downloadURL        https://update.greasyfork.org/scripts/469888/SpeedTestEnhance.user.js
// @updateURL          https://update.greasyfork.org/scripts/469888/SpeedTestEnhance.meta.js
// @match              *://*.speedtest.cn/*
// @grant              GM_addStyle
// @run-at             document-start
// ==/UserScript==

(n=>{if(typeof GM_addStyle=="function"){GM_addStyle(n);return}const t=document.createElement("style");t.textContent=n,document.head.append(t)})(' #app>div.shade{display:none!important}#navbarSupportedContent>ul.navbar-nav.ml-auto.navbar-nav-speedtest>li.nav-item:has(a[href="https:www.speedtest.cn"]){display:none!important}#navbarSupportedContent>ul.navbar-nav.ml-auto.navbar-nav-speedtest>li.nav-item:has(a[href*=speedup]){display:none!important}#navbarSupportedContent>ul.navbar-nav.ml-auto.navbar-nav-speedtest>li.nav-item:has(a[href*=app]){display:none!important}#navbarSupportedContent>ul.navbar-nav.ml-auto.navbar-nav-speedtest>li.nav-item:has(a[href*=tools]){display:none!important}#navbarSupportedContent>ul.navbar-nav.ml-auto.navbar-nav-speedtest>li.nav-item:has(a[href*=discover]){display:none!important}#navbarSupportedContent>ul.navbar-nav.ml-auto.navbar-nav-speedtest>li.nav-item:has(a[href*=faq]){display:none!important}#navbarSupportedContent>ul.navbar-nav.ml-auto.navbar-nav-speedtest>li.nav-item:has(a[href*=bigdata]){display:none!important}#navbarSupportedContent>ul.navbar-nav.ml-auto.navbar-nav-speedtest>li.nav-item.TO-B{display:none!important}#navbarSupportedContent>ul.navbar-nav.ml-auto.navbar-nav-speedtest>li.nav-item:has(p.login-register){display:none!important}#navbarSupportedContent>div.menu-close{display:none!important}#app>section>div.speed-home-warp>div.speed-home-content>div.speedtest-warp>div.dialog-container-change-warp>div>div.change-content>div.copyWriter{display:none!important}#app>section>div.speed-home-warp>div.speed-home-content>div.speedtest-warp>div.dialog-container-change-warp>div>div.change-content>div>ul>li:has(div.exclusive){display:none!important}#app>section>div.speed-home-warp>div[class*=speed-activity]{display:none!important}#speedUpNotice{display:none!important}#app>section>div.speed-home-warp>div.speed-home-content>div.vertisingSpace.index-speedtest-content-box.vertisingSpace-left{display:none!important}#app>section>div.speed-home-warp>div>div.vertisingSpace.index-aavertising.index-speedtest-content-box.vertisingSpace-right{display:none!important}#app>div.sus-window{display:none!important}#speedApp{display:none!important}#app>section>div.wg>div.b-content{display:none!important}#app>section>div.wg>div.connect-content{display:none!important}#app>section>div.wg>div.network-module{display:none!important}#Video{display:none!important}#app>section>div.wg>div.network-module>div.network-content{display:none!important}#app>section>div.wg>div.network-module>div.toolbox{display:none!important}#app>section>div.wg>div.network-module>div.toolbox>div>div.more-tools-list-index{display:none!important}#app>section>div.wg>div.network-module>div>div.discover-content{display:none!important}#app>section>div.wg>div.network-module>div>div.rank-content{display:none!important}#app>section>div.container{display:none!important}#app>section>div.speed-twoads-wrap{display:none!important}#app>footer{display:none!important}div.pub-pop-box{display:none!important}#app>section>div.wg{display:none!important}div.account_wrap,span.goToBigdata{display:none!important}div.speedtest-run>div>div>div>div>div.new-tab{display:none!important}div.speed-add-box,div.mark_wrap,#tcaptcha_transform_dy,div.app-download-wrap,div.shareresultbox.left-new-share{display:none!important}#header>div.left{display:none!important}#header>div.right{display:none!important}#__layout>div>div.nuxt_wrap.hasFooter>div.speedtest_wrap>div>div.speed_start_top_wrap{display:none!important}#__layout>div>div.nuxt_wrap.hasFooter>div.cartoon_wrap{display:none!important}#__layout>div>div.nuxt_wrap.hasFooter>div.speedtest_wrap>div>div.promotion.index-bottom-activity{display:none!important}#__layout>div>div.footer{display:none!important}#__layout>div>div.nuxt_wrap.hasFooter>div.speed-rocket-container{display:none!important}div.download-app{display:none!important}div.node_select_picker.van-popup.van-popup--bottom>div>div.node_list.van-list>div:has(div.tip){display:none!important}#__layout>div>div.nuxt_wrap.hasFooter>div.speedtest_wrap>div.start-circle-warp.bgc-circle>div>div>p{display:none!important}#__layout>div>div.nuxt_wrap.hasFooter>div.speedtest_wrap>div:has(div.masking){display:none!important}div.tools-banner{display:none!important}div.speedup>div.info>div>div>div.left>div>font:nth-child(4){display:none!important}#bigDataRank{display:none!important}div.speedup>div.info>div>div>div.right{display:none!important}div.speedEndEnt_wrap.endent_wrap,div.mark_wrap,div.start-item-group.ending_node_wrap,div.add_wrap.speed_add_wrap,div.speed-nearby-inlet{display:none!important}div.dialog-container-change-warp>div>div.search{width:660px!important}div.change-content>div.node-item{width:96%!important}div.node_select_picker>div>div.node_list{height:calc(100% - 3rem)!important} ');

(function () {
  'use strict';

  var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
    LogLevel2["Debug"] = "DEBUG";
    LogLevel2["Info"] = "INFO";
    LogLevel2["Warn"] = "WARN";
    LogLevel2["Error"] = "ERROR";
    return LogLevel2;
  })(LogLevel || {});
  function PGLOG(level, funName, message) {
    const now = /* @__PURE__ */ new Date();
    const time = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const logMessage = `${time} [${funName}|${level}]: ${message}`;
    console.log(logMessage);
  }
  const FUNNAME = "SpeedTest增强";
  PGLOG(LogLevel.Info, FUNNAME, "启动!");

})();