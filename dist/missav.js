// ==UserScript==
// @name               MissAV净化增强
// @name:zh-TW         MissAV凈化增強
// @name:en            MissAVEnhance
// @namespace          https://github.com/GangPeter/pgscript
// @version            1.1.5
// @author             GangPeter
// @description        去除MissAV广告、拦截弹窗、拦截失焦暂停、修复布局、显示完整标题、支持PC端|移动端
// @description:zh-TW  去除MissAV廣告、攔截彈窗、攔截失焦暫停、修復布局、顯示完整標題、支持PC端|移動端
// @description:en     Remove MissAV ads
// @license            None
// @icon               data:image/png;base64,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
// @homepageURL        https://github.com/GangPeter/pgscript
// @supportURL         https://github.com/GangPeter/pgscript
// @downloadURL        https://update.greasyfork.org/scripts/519635/MissAVEnhance.user.js
// @updateURL          https://update.greasyfork.org/scripts/519635/MissAVEnhance.meta.js
// @match              *://*.missav.com/*
// @grant              GM_addStyle
// @run-at             document-start
// ==/UserScript==

(i=>{if(typeof GM_addStyle=="function"){GM_addStyle(i);return}const t=document.createElement("style");t.textContent=i,document.head.append(t)})(' a[href*="myavlive." i]{display:none!important}a[href*="mycomic." i]{display:none!important}a[href$="/vip" i]{display:none!important}a[href="#"]:has([x-show*=partners i]){display:none!important}a[href*="missav.live" i]{display:none!important}body>div>div.is-home.content-without-search>div>div>h1:has(span.text-primary){display:none!important}div.is-home.content-without-search>div>div.pt-16{display:none!important}footer[aria-labelledby=footerHeading i]{display:none!important}div.space-y-5,#html-ads{display:none!important}body>div[class*=bottomRight]{display:none!important}iframe[id|=container]{display:none!important}div.content-without-search>div>div.h-full.order-last>div>div.space-y-6:has(div){display:none!important}div.content-without-search>div>div.order-first>div.under_player{display:none!important}div.order-first>div>div>div>div>ul.list-disc{display:none!important}div.order-first>div.relative.overflow-hidden>div:has(iframe){display:none!important}.truncate{white-space:normal!important} ');

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
  const FUNNAME = "MissAV增强";
  function fixedPlayer() {
    const player = document.querySelector(
      `div.order-first > div > div.relative > div`
    );
    if (!player) return;
    if (player.hasAttribute("@click")) {
      player.removeAttribute("@click");
    }
    if (player.hasAttribute("@keyup.space.window")) {
      player.removeAttribute("@keyup.space.window");
    }
    PGLOG(LogLevel.Info, FUNNAME, "拦截开始播放时窗口转跳");
    if (!window.player) return;
    if (!window.player.pause) return;
    const pause = window.player.pause;
    window.player.pause = () => {
      PGLOG(LogLevel.Info, FUNNAME, "拦截失焦暂停");
      if (document.hasFocus()) {
        pause();
      }
    };
  }
  function findUncensored() {
    const uncensored = document.querySelector(
      `a[href*="uncensored"][id|="option"]`
    );
    if (uncensored) {
      PGLOG(LogLevel.Info, FUNNAME, `发现无码版影片,是否切换?`);
    } else {
      PGLOG(LogLevel.Info, FUNNAME, `未发现无码版影片`);
    }
  }
  PGLOG(LogLevel.Info, FUNNAME, "启动!");
  fixedPlayer();
  findUncensored();

})();