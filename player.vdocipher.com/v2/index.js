/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e,
    n,
    t,
    r,
    a = {
      2887: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Badge {\n  --badgeBorderRadius: 4px;\n  position: absolute;\n  background: var(--controlsBackground);\n  color: var(--accent);\n  padding: 5px 0 5px 0;\n  border-radius: var(--badgeBorderRadius);\n  /* width: 200px; */\n  gap: 10px;\n  font-size: 14px;\n  z-index: var(--badgeLevel);\n  overflow: auto;\n}\n\n.Badge .panel {\n  /* height: 33px; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  gap: 5px;\n}\n\n.Badge .panel .label {\n  font-weight: bold;\n}\n\n.Badge .panel:hover {\n  background: #fff3;\n  cursor: pointer;\n}\n\n.Badge .panel-header {\n  /* height: 40px; */\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 10px 25px;\n  border-bottom: 1px solid #fff5;\n  cursor: pointer;\n}\n\n.Badge .panel-icon-left {\n  position: absolute;\n  left: 5px;\n  height: 12px;\n  width: 12px;\n  cursor: auto;\n}\n\n.Badge .panel-icon-right {\n  position: absolute;\n  right: 13px;\n  height: 12px;\n  width: 12px;\n  cursor: pointer;\n}\n\n\n.Badge .panel-content {\n  padding: 10px 25px;\n}\n\n.badge-open-animation {\n  transform: rotate(45deg);\n  transform-origin: center;\n}\n\n.Badge .panel.panel-disabled {\n  opacity: 0.5;\n}\n\n.Badge .panel.panel.panel-disabled:hover {\n  background: var(--controlsBackground);\n  cursor: auto;\n}\n\n.Badge-Closing-Layer {\n  grid-area: 1 / 1 / -1 / -1;\n  z-index: var(--baseLevel);\n}\n";
      },
      4137: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Context-option-AboutPlayer {\n  background: var(--controlsBackground);\n  color: white;\n  padding: 24px;\n  border-radius: 4px;\n  width: 24em;\n  position: relative;\n  font-size: small;\n  text-align: left;\n  max-height: 100%;\n  overflow: auto;\n}\n\n.Context-option-AboutPlayer .close {\n  position: absolute;\n  right: 12px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.Context-option-AboutPlayer .item {\n  margin: 5px 0;\n}\n\n.Context-option-AboutPlayer .item .title {\n  font-weight: bold;\n}\n\n.Context-option-AboutPlayer .item.header {\n  margin-bottom: 20px;\n}\n\n@vdo-responsive only screen and (max-width: 300px) {\n  .Context-option-AboutPlayer {\n    width: 100%;\n    max-height: 100%;\n    padding: 12px;\n  }\n}\n";
      },
      7509: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Context-option-Keyboard {\n  background: var(--controlsBackground);\n  color: white;\n  padding: 24px;\n  border-radius: 4px;\n  width: 24em;\n  position: relative;\n  font-size: small;\n  text-align: left;\n  max-height: 100%;\n  overflow: auto;\n}\n\n.Context-option-Keyboard .close {\n  position: absolute;\n  right: 12px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.Context-option-Keyboard .item {\n  margin: 5px 0;\n  display: flex;\n  border-bottom: 0.5px solid #ffffffc5;\n  padding-bottom: 5px;\n}\n\n.Context-option-Keyboard .item .title {\n  flex: 1;\n}\n\n.Context-option-Keyboard .item .content {\n  flex: 1;\n}\n\n@vdo-responsive only screen and (max-width: 300px) {\n  .Context-option-Keyboard {\n    width: 100%;\n    max-height: 100%;\n    padding: 12px;\n  }\n}\n";
      },
      4634: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Context-option-ReportBug {\n  background: #000000d9;\n  color: white;\n  padding: 24px;\n  border-radius: 4px;\n  width: 36em;\n  position: relative;\n  font-size: small;\n  text-align: left;\n  max-height: 100%;\n  overflow: auto;\n}\n\n.Context-option-ReportBug .close {\n  position: absolute;\n  right: 12px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.Context-option-ReportBug .item {\n  margin: 5px 0;\n}\n\n.Context-option-ReportBug .form {\n  margin-top: 15px;\n}\n\n.Context-option-ReportBug .form * {\n  margin: 5px 0px;\n}\n\n.Context-option-ReportBug .form select {\n  width: fit-content;\n  outline: none;\n  border: none;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  padding: 4px 6px;\n}\n\n.Context-option-ReportBug .form textarea {\n  height: 75px;\n  width: 100%;\n}\n\n.Context-option-ReportBug .send-btn {\n  padding: 8px 24px;\n  cursor: pointer;\n  border-radius: 2px;\n  width: fit-content;\n  border: 1px solid #ffffffc1;\n}\n\n.Context-option-ReportBug .close-btn {\n  padding: 4px 8px;\n  border: 1px solid #ffffffc1;\n  width: fit-content;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.Context-option-ReportBug .close-btn:hover {\n  background: #ffffffc1;\n  color: black;\n}\n\n.Context-option-ReportBug .send-btn:hover {\n  background: #ffffffc1;\n  color: black;\n}\n\n@vdo-responsive only screen and (max-width: 300px) {\n  .Context-option-ReportBug {\n    width: 100%;\n    max-height: 100%;\n    padding: 12px;\n  }\n}\n";
      },
      5075: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 33px;\n}\n.lds-ellipsis div {\n  position: absolute;\n  top: 6.5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #ffffff;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n";
      },
      2981: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".ContextMenu {\n  position: absolute;\n}\n.ContextMenu .badge {\n  position: absolute;\n  background: var(--controlsBackground);\n  color: var(--accent);\n  padding: 5px 0 5px 0;\n  border-radius: 4px;\n  width: 220px;\n  font-size: 14px;\n  z-index: var(--componentLevel);\n  overflow: auto;\n}\n\n.ContextMenu .badge .panel {\n  /* height: 33px; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n}\n\n.ContextMenu .badge .branding-panel {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n}\n\n.ContextMenu .badge .panel .label {\n  font-weight: bold;\n}\n\n.ContextMenu .badge .panel:hover {\n  background: #fff3;\n  cursor: pointer;\n}\n\n.ContextContainer {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: var(--componentLevel);\n}\n\n.ContextContainer.active {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n";
      },
      4359: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".circular-spinner {\n  border: 2px solid var(--accent);\n  border-top: 2px solid var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.circular-spinner.mid-player-spinner{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  animation: mid-player-spin 1s linear infinite;\n}\n\n@keyframes mid-player-spin {\n  0% {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n\n";
      },
      7406: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = "";
      },
      793: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = "";
      },
      5104: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Captions .active{\n   position: absolute;\n   background: #f00;\n   width: 20px;\n   height: 2px;\n   bottom: -2px;\n   border-radius: 2px;\n   left: 3px;\n}";
      },
      5928: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Cast {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n";
      },
      4683: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = "";
      },
      4431: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = "";
      },
      4939: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Notification {\n    display: grid;\n    justify-items: baseline;\n    align-items: center;\n    --animation-time: 1s;\n    --animation-hold: 3s;\n}\n\n.InfoSection {\n    display: flex;\n    box-sizing: border-box;\n    align-items: center;\n    cursor: pointer;\n    background: var(--accent);\n    color: var(--text);\n    border-radius: 30px;\n    font-size: small;\n}\n\n.InfoSection .title-holder {\n    padding: 3px;\n    display: flex;\n}\n\n.InfoSection .content {\n    white-space: pre;\n    max-width: 0px;\n    max-height: 30px;\n    overflow: hidden;\n}\n";
      },
      6694: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = "";
      },
      1623: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = "";
      },
      454: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = "";
      },
      2233: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".SaveVideoOffline {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}";
      },
      5114: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".panel.panel-content.downloaded:hover{\n    background: none;\n    cursor: auto;\n}";
      },
      7491: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".badge-open-animation {\n  transform: rotate(45deg);\n  transform-origin: center;\n}\n";
      },
      6768: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Speed .text-icon {\n  cursor: pointer;\n  font-size: 17px;\n  font-weight: bolder;\n  color: var(--icon-color);\n  z-index: var(--controlsLevel1);\n}\n\n.Speed .text-icon > span:nth-child(1) {\n  font-size: smaller;\n}\n";
      },
      2635: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Tap-To-Unmute {\n  display: flex;\n  background: var(--accent);\n  height: 30px;\n  width: max-content;\n  padding: 4px 8px;\n  box-sizing: content-box;\n  align-items: center;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.Tap-To-Unmute .text {\n  font-size: smaller;\n  margin-left: 4px;\n}\n\n.Tap-To-Unmute-Overlay {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: var(--highestLevel);\n}\n";
      },
      7005: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".TimeConsumed {\n  display: none;\n  font-size: small;\n  color: var(--accent);\n  align-items: center;\n  justify-content: center;\n}\n\n.TimeLeft {\n  display: none;\n  font-size: small;\n  color: var(--accent);\n  align-items: center;\n  justify-content: center;\n}\n\n.TimeDuration {\n  display: none;\n  font-size: small;\n  color: var(--accent);\n  align-items: center;\n  justify-content: center;\n}\n\n.TimeAll {\n  display: none;\n  margin-left: 5px;\n  font-size: small;\n  color: var(--accent);\n  align-items: center;\n  justify-content: center;\n}\n";
      },
      4577: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".VideoProgress:hover .segment {\n  opacity: 1;\n}\n\n.segment-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: 100%;\n}\n\n.segment-container > * {\n  transition: none;\n}\n\n.segment-container:first-child .separator-left,\n.segment-container:last-child .separator-right {\n  display: none;\n}\n\n.segment-container .separator-left {\n  width: calc(var(--progressBarHeight) / 2);\n  height: var(--progressBarHeight);\n  border-bottom-right-radius: var(--progressBarHeight);\n  border-top-right-radius: var(--progressBarHeight);\n  border: var(--segmentWidth) solid var(--accent);\n  border-left: none;\n}\n\n.segment-container .segment {\n  /* opacity: 0.5; */\n  display: block;\n  height: var(--segmentWidth);\n  flex: 1;\n  background: var(--accent);\n  margin: 0px calc(var(--segmentWidth) * -1);\n  padding: 0 calc((var(--segmentWidth)));\n  border-radius: calc(var(--progressBarHeight) / 2);\n  box-sizing: content-box;\n}\n\n.segment-container .buffer {\n  background: transparent;\n  position: absolute;\n  width: calc(100% - var(--progressBarHeight) - 2px);\n}\n\n.segment .buffer-fragment {\n  background: #a2a2a2;\n  height: 100%;\n  position: absolute;\n}\n\n.segment-container:hover .segment {\n  margin: 0px calc(var(--progressBarHeight) * -1);\n  padding: 0px var(--progressBarHeight);\n  height: var(--progressBarHeight);\n  transition: height 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.segment-container .separator-right {\n  width: calc(var(--progressBarHeight) / 2);\n  height: var(--progressBarHeight);\n  border-bottom-left-radius: var(--progressBarHeight);\n  border-top-left-radius: var(--progressBarHeight);\n  border: var(--segmentWidth) solid var(--accent);\n  border-right: none;\n}\n";
      },
      3515: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          "/* @todo Remove the hard values from these style */\n.line-container {\n  position: absolute;\n  background: var(--accent);\n  width: 100%;\n  height: 3px;\n  border-radius: 6px;\n}\n\n.line-container > * {\n  transition: none;\n}\n\n.line-container .current-time {\n  background-color: var(--primary);\n  position: absolute;\n  height: 3px;\n  border-radius: 6px;\n}\n\n.line-container .buffer {\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  border-radius: 6px;\n  overflow: hidden;\n}\n\n.line-container .buffer .buffer-fragment {\n  height: 3px;\n  position: absolute;\n  background: #ababab;\n}\n";
      },
      605: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".VideoProgress {\n  --progressBarHeight: 7px;\n  --barBorderRadius: 6px;\n  --anchorBorderRadius: 4px;\n  --segmentWidth: 2px;\n  z-index: var(--controlsLevel1);\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */\n  height: fill-available;\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n}\n\n.container:hover .thumb {\n  width: 12px;\n  height: 12px;\n  cursor: grab;\n}\n\n@media (pointer: coarse) {\n  .container .thumb {\n    width: 35px;\n    height: 35px;\n    background-color: transparent;\n  }\n\n  .container .thumb-display {\n    pointer-events: none;\n    background-color: var(--primary);\n    --thumb-display-width: 15px;\n    width: var(--thumb-display-width);\n    height: var(--thumb-display-width);\n    border-radius: calc(var(--thumb-display-width) / 2);\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.completed-bar {\n  height: var(--progressBarHeight);\n  width: 0;\n  border-radius: var(--barBorderRadius);\n  transition: none;\n  z-index: var(--controlsLevel2);\n}\n\n.buffer-bar {\n  position: absolute;\n  width: 100%;\n  height: var(--progressBarHeight);\n  border-radius: var(--barBorderRadius);\n  /* background: #a2a2a2; /* var(--accent); */\n  /* opacity: 0.4;  */\n  z-index: var(--controlsLevel1);\n  overflow: hidden;\n}\n\n.base-bar {\n  position: absolute;\n  width: 100%;\n  /* height: var(--progressBarHeight); */\n  height: 100%;\n  border-radius: var(--barBorderRadius);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* background: var(--accent); */\n  /* opacity: 0.3; */\n  /* z-index: 0; */\n  /*[Commented: Samsung-Bug] (Source) : Instagram*/\n  /* filter: drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px var(--progressBarHeight) rgba(0,0,0,.2)) */\n}\n\n.thumb {\n  position: absolute;\n  display: block;\n  background-color: var(--primary);\n  transition: none;\n  cursor: pointer;\n  transform: translateX(-50%);\n  border-radius: 40px;\n  z-index: var(--controlsLevel2);\n}\n\n.anchor {\n  position: absolute;\n  opacity: 0;\n  left: 100%;\n  border-radius: var(--anchorBorderRadius);\n  transition: none 0s ease 0s;\n  color: var(--accent);\n  background: var(--controlsBackground);\n  padding: 2px 6px;\n  top: 0px;\n  transform: translate(0%, -100%);\n\n}\n\n.VideoProgress .container:hover .anchor {\n  animation-name: keyFrameFadeInOpacity;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-in;\n  animation-delay: 1ms;\n  animation-duration: 150ms;\n  animation-fill-mode: forwards;\n}\n\n/* This class is ONLY applied when it's dragging/TouchEvent, as it does not guarantee [.VideoProgress .container:hover] */\n.anchor-visible {\n  /* display: block !important; */\n  animation-name: keyFrameFadeInOpacity;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-in;\n  animation-delay: 1ms;\n  animation-duration: 150ms;\n  animation-fill-mode: forwards;\n}\n\n\n\n@keyframes keyFrameFadeInOpacity {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n\n}\n\n.thumb-animation {\n  transition-property: all;\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n  transition-delay: 0s;\n}\n\n.both-side-time {\n  display: none;\n  color: var(--accent);\n}\n\n.both-side-time:nth-child(odd) {\n  margin-right: 5px;\n}\n\n.both-side-time:nth-child(even) {\n  margin-left: 5px;\n  /*[Commented: Samsung-Bug] (Source) : Instagram*/\n  /* filter: drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2)) */\n}\n\n.left-side-time {\n  display: none;\n  color: var(--accent);\n  margin-left: 5px;\n  /*[Commented: Samsung-Bug] (Source) : Instagram*/\n  /* filter: drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2)) */\n}\n\n.buffer-bar .buffer-fragment {\n  position: absolute;\n  background: #ababab;\n  height: 100%;\n}\n\n.buffer-bar .chapter-section-container {\n  height: 100px;\n  margin-left: 1px;\n}\n";
      },
      9091: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Volume .wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.Volume .wrapper .icon {\n  /* width: 25%; */\n  height: 100%;\n}\n\n.vdo-volume-range {\n  -webkit-appearance: none;\n  width: 70%;\n  height: 3px;\n  background: var(--accent);\n  border-radius: 2px;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: 0.2s;\n  transition: opacity 0.2s;\n  cursor: pointer;\n}\n\n.vdo-volume-range:hover {\n  opacity: 1;\n}\n\n.vdo-volume-range::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  background: var(--primary);\n  cursor: pointer;\n  border: none;\n}\n\n.vdo-volume-range::-moz-range-thumb {\n  width: 10px;\n  height: 10px;\n  background: var(--primary);\n  cursor: pointer;\n  border: none;\n}\n";
      },
      3959: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          "/** Default classes for WebVTT Caption or Subtitle Cue Components */\n/** @Source https://www.w3.org/TR/2019/CR-webvtt1-20190404/#default-text-color */\n.Caption-Container .cue span.white {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Caption-Container .cue span.lime {\n  color: rgba(0, 255, 0, 1);\n}\n\n.Caption-Container .cue span.cyan {\n  color: rgba(0, 255, 255, 1);\n}\n\n.Caption-Container .cue span.red {\n  color: rgba(255, 0, 0, 1);\n}\n\n.Caption-Container .cue span.yellow {\n  color: rgba(255, 255, 0, 1);\n}\n\n.Caption-Container .cue span.magenta {\n  color: rgba(255, 0, 255, 1);\n}\n\n.Caption-Container .cue span.blue {\n  color: rgba(0, 0, 255, 1);\n}\n\n.Caption-Container .cue span.black {\n  color: rgba(0, 0, 0, 1);\n}\n\n/** @Source https://www.w3.org/TR/2019/CR-webvtt1-20190404/#default-text-background */\n\n.Caption-Container .cue span.bg_white {\n  background-color: rgba(255, 255, 255, 1);\n}\n\n.Caption-Container .cue span.bg_lime {\n  background-color: rgba(0, 255, 0, 1);\n}\n\n.Caption-Container .cue span.bg_cyan {\n  background-color: rgba(0, 255, 255, 1);\n}\n\n.Caption-Container .cue span.bg_red {\n  background-color: rgba(255, 0, 0, 1);\n}\n\n.Caption-Container .cue span.bg_yellow {\n  background-color: rgba(255, 255, 0, 1);\n}\n\n.Caption-Container .cue span.bg_magenta {\n  background-color: rgba(255, 0, 255, 1);\n}\n\n.Caption-Container .cue span.bg_blue {\n  background-color: rgba(0, 0, 255, 1);\n}\n\n.Caption-Container .cue span.bg_black {\n  background-color: rgba(0, 0, 0, 1);\n}\n";
      },
      3406: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Caption-Container {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  color: white;\n  pointer-events: none;\n  font-size: larger;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.Caption-Container .cue {\n  padding: 4px 6px;\n  border-radius: 4px;\n}\n\n.Caption-Container .cue > span {\n  background: rgba(0, 0, 0, 0.5);\n  padding: 2px 6px;\n  border-radius: 2px;\n}\n\nvideo .caption-box {\n  visibility: hidden;\n}\n";
      },
      625: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".tooltip-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.tooltip-container > span.show {\n  transform: translate(-50%) scale(1);\n}\n.tooltip-container > span.hide {\n  transform: translate(-50%) scale(0);\n}\n\n.tooltip-container > span {\n  margin-top: -150%;\n  background: var(--controlsBackground);\n  color: var(--accent);\n  position: absolute;\n  padding: 2px 6px;\n  border-radius: 4px;\n  left: 50%;\n  z-index: var(--controlsLevel1);\n  white-space: nowrap;\n}\n\n.tooltip-container .tooltip-component-container {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tooltip-container .tooltip-component-container > * {\n  height: 100%;\n  width: 100%;\n}\n\n.tooltip-container .tl-top {\n  margin: 0;\n  top: 100%;\n}\n\n.tooltip-container .tl-bottom {\n  /*Default Case */\n}\n\n.tooltip-container .tl-right {\n  left: 0px;\n}\n\n.tooltip-container .tl-left {\n  left: 100%;\n}\n";
      },
      6709: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Caption-Search-Layer {\n  display: block;\n  width: 100%;\n  background: var(--controlsBackground);\n  position: absolute;\n  z-index: var(--layerLevel);\n  top: 0px;\n  padding: 1rem 2rem;\n  text-align: left;\n  color: var(--accent);\n  height: 100%;\n  overflow: auto;\n}\n\n.Caption-Search-Layer .result-container .matched {\n  color: var(--primary);\n  font-weight: bold;\n  filter: contrast(2);\n}\n.Caption-Search-Layer .result-container .result {\n  margin: 2rem 0px;\n  cursor: pointer;\n}\n\n.Caption-Search-Layer input {\n  font-family: inherit;\n  width: 100%;\n  border: 0;\n  border-bottom: 1px solid var(--icon-color);\n  outline: 0;\n  font-size: 1.3rem;\n  color: var(--accent);\n  padding: 7px 0;\n  background: transparent;\n  transition: border-color 0.2s;\n}\n\n.Caption-Search-Layer .result-container .result-time {\n  margin-right: 10px;\n  padding: 3px 6px;\n  border-radius: 0px;\n  border-right: 1px solid var(--accent);\n  box-sizing: border-box;\n}\n\n.Caption-Search-Layer .result-container .result:hover > .result-time {\n  background: var(--primary);\n  border-right-color: var(--primary);\n  border-radius: 2px;\n}\n\n.Caption-Search-Layer .search-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Caption-Search-Layer .search-container .close {\n  font-size: 2.4rem;\n  margin-left: 1.5rem;\n  cursor: pointer;\n}\n\n.Caption-Search-Layer .search-container .close:hover {\n  color: var(--primary);\n}\n\n.Caption-Search-Layer .language-select-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.Caption-Search-Layer .language-select-container .close {\n  font-size: 2.4rem;\n  margin-left: 1.5rem;\n  cursor: pointer;\n}\n\n.Caption-Search-Layer .language-select-container .close:hover {\n  color: var(--primary);\n}\n\n.Caption-Search-Layer .caption-language {\n  margin: 1rem 0;\n  cursor: pointer;\n  padding: 8px;\n}\n.Caption-Search-Layer .caption-language:hover {\n  background: #fff3;\n}\n\n.Caption-Search-Layer .caption-language-list-container {\n  display: inline-block;\n}\n";
      },
      1082: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Casting-Layer {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  z-index: var(--shadowLevel);\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #000000c5;\n  text-align: left;\n  color: white;\n  border-radius: 2px;\n}\n\n.Casting-Layer .label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n";
      },
      4152: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          "@vdo-responsive only screen and (min-width: 500px) {\n    .Chapters-Container {\n        min-width: 300px;\n    }\n}";
      },
      7114: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Chapters-Container {\n  --borderRadius: 4px;\n}\n\n.Chapters-Container {\n  position: absolute;\n  top: 10px;\n  right: 0px;\n  background: black;\n  height: calc(100% - 10px);\n  z-index: var(--layerLevel);\n  text-align: left;\n  padding: 10px;\n  color: var(--accent);\n  overflow: auto;\n  animation: slide-in-chapter 0.4s forwards ease;\n}\n\n.Chapters-Container.slide-out {\n  animation: slide-out-chapter 0.4s forwards ease;\n}\n\n@keyframes slide-out-chapter {\n  0% {\n    transform: translateX(0%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n\n@keyframes slide-in-chapter {\n  0% {\n     transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(0%);\n  }\n}\n\n.Chapters-Container .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--accent);\n  margin-bottom: 1rem;\n  padding: 0.8rem 0;\n  position: sticky;\n  top: -10;\n  z-index: var(--baseLevel);\n  background: black;\n  margin-top: -10px;\n}\n\n.Chapters-Container .header .title {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n\n\n.Chapters-Container .header .close {\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  box-sizing: content-box;\n  padding: 0.3rem;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 2px;\n}\n\n.Chapters-Container .header .close:hover{\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.Chapters-Container .chapter-item {\n  display: flex;\n  padding: 0.8rem;\n  justify-content: space-between;\n  cursor: pointer;\n  opacity: 0.6;\n  gap: 1rem;\n}\n\n.Chapters-Container .chapter-item:hover {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: var(--borderRadius);\n  opacity: 1;\n}\n";
      },
      8462: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".error-layer{\n    background: rgba(0,0,0,0.5); \n    color:white; \n    display:table; \n}\n\n.error-layer .container{\n    display:table-cell;\n    vertical-align: middle; \n    text-align: center;\n}";
      },
      5618: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".GradientLayer {\n  display: none;\n  z-index: var(--shadowLevel);\n}\n\n.GradientLayer[top] {\n  display: none;\n  /* source: Old-player: like youtube */\n  background-repeat: repeat-x;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);\n}\n\n.GradientLayer[bottom] {\n  display: none;\n  /* source: Old-player: like youtube */\n  background-repeat: repeat-x;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);\n  transform: rotate(180deg);\n}\n\n.GradientLayer[right] {\n  display: none;\n}\n\n.GradientLayer[left] {\n  display: none;\n}\n";
      },
      9640: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".spinner-container{\n  height: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-area: 3 / 5 / span 1 /span 1;\n}\n.spinner-container .spinner {\n   height: 0;\n   width: 0;\n   padding: 15px;\n   border: 4px solid var(--accent);\n   border-right-color: var(--primary);\n   border-radius: 22px;\n   -webkit-animation: rotate 1s infinite linear;\n    animation: rotate 1s infinite linear;\n }\n \n @-webkit-keyframes rotate {\n   100% {\n     -webkit-transform: rotate(360deg);\n   }\n }\n\n @keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}";
      },
      3379: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          "\n@vdo-responsive only screen and (max-width: 480px){\n    .Player.Overlay .PlayNPause{\n  width: calc(0.8 * var(--play-n-pause-edge));\n  height: calc(0.8 * var(--play-n-pause-edge));\n    }\n  \n    .Player.Overlay .icon-wrapper{\n      height: calc(0.8 * var(--icon-wrapper-edge));\n    width: calc(0.8 * var(--icon-wrapper-edge));\n    }\n  \n    .Player.Overlay svg{\n      max-height: calc(0.8 * var(--svg-max-height));\n    }\n  \n    .Player.Overlay .initial-duration .TimeDuration{\n      font-size: 10px;\n    }\n\n    .Player.Overlay .initial-duration{\n      padding: 2px 6px;\n      border-radius: 2px;\n    }\n\n    .Player.Overlay .initial-duration.center{\n      top: calc(50% + (0.8 * var(--icon-wrapper-edge)) / 2);\n      margin-top: 2px;\n    }\n  }\n  \n  @vdo-responsive only screen and (max-width: 360px){\n    .Player.Overlay .PlayNPause{\n      width: calc(0.6 * var(--play-n-pause-edge));\n      height: calc(0.6 * var(--play-n-pause-edge));\n      justify-content: center; \n    }\n  \n    .Player.Overlay .icon-wrapper{\n      height: calc(0.6 * var(--icon-wrapper-edge));\n      width: calc(0.6 * var(--icon-wrapper-edge));\n    }\n  \n    .Player.Overlay svg {\n      max-height: calc(0.6 * var(--svg-max-height));\n    }\n  \n    .Player.Overlay svg.overlay-play {\n      transform: translateX(3px);\n    }\n\n    .Player.Overlay .initial-duration .TimeDuration{\n      font-size: 9px;\n    }\n\n    .Player.Overlay .initial-duration.center{\n    top: calc(50% + (0.6 * var(--icon-wrapper-edge))/ 2);\n    }\n   \n  }\n  \n  @vdo-responsive only screen and (max-width: 240px){\n    .Player.Overlay .PlayNPause{\n      width: calc(0.4 * var(--play-n-pause-edge));\n      height: calc(0.4 * var(--play-n-pause-edge));\n    }\n  \n    .Player.Overlay .icon-wrapper{\n      height: calc(0.4 * var(--icon-wrapper-edge));\n      width: calc(0.4 * var(--icon-wrapper-edge));\n    }\n  \n    .Player.Overlay svg {\n      max-height: calc(0.4 * var(--svg-max-height));\n    }\n\n    .Player.Overlay .initial-duration .TimeDuration{\n      font-size: 7px;\n    }\n  \n    .Player.Overlay .initial-duration.center{\n      top: calc(50% + (0.4 * var(--icon-wrapper-edge))/ 2);\n      }\n  }";
      },
      6900: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Overlay {\n  background: transparent;\n}\n\n.Overlay.Player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  --play-n-pause-edge: 100px;\n  --icon-wrapper-edge: 85px;\n}\n\n.Overlay.Player .PlayNPause {\n  width: var(--play-n-pause-edge);\n  height: var(--play-n-pause-edge);\n}\n\n.Player.Overlay .icon-wrapper {\n  --icon-wrapper-edge: 85px;\n  background: var(--controlsBackground);\n  border-radius: 100%;\n  height: var(--icon-wrapper-edge);\n  width: var(--icon-wrapper-edge);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n  \n.Player.Overlay svg{\n  --svg-max-height: 45px;\n  max-height: var(--svg-max-height);\n}\n\n.Player.Overlay svg.overlay-replay {\n  transform: translateY(-2.5px);\n}\n\n.Player.Overlay svg.overlay-play {\n  transform: translateX(5px);\n}\n\n.Player.Overlay:hover {\n  cursor: pointer;\n}\n\n.Player.Overlay:hover .icon-wrapper {\n  background: var(--primary);\n  box-shadow: 0 2px 20px 7px rgb(0 0 0 / 5%);\n}\n\n.Player.Overlay .icon-wrapper.square{\n  border-radius: 15%;\n}\n\n.Player.Overlay .initial-duration .TimeDuration{\n  display: inline-block;\n  font-size: 12px;\n}\n\n.Player.Overlay .initial-duration{\n  background-color: black;\n  color: white;\n  position: absolute;\n  transition: all 0.5s cubic-bezier(0.39, 0.58, 0.57, 1);\n  border-radius: 4px;\n  padding: 4px 8px;\n  display: none;\n}\n\n.Player.Overlay .initial-duration.none{\ndisplay: none;\n}\n\n.Player.Overlay .initial-duration:is(.center, .top-left, .top-right, .bottom-left, .bottom-right){\n  display: inline-block;\n}\n\n.Player.Overlay .initial-duration.center{\n  top: calc(50% + var(--icon-wrapper-edge) / 2);\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-top: 4px;\n}\n\n.Player.Overlay .initial-duration.top-left{\n  top: 0;\n  left: 0;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.Player.Overlay .initial-duration.top-right{\n  top: 0;\n  right: 0;\n  margin-top: 10px;\n  margin-right: 10px;\n}\n\n.Player.Overlay .initial-duration.bottom-left{\n  bottom: 0;\n  left: 0;\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n\n.Player.Overlay .initial-duration.bottom-right{\n  bottom: 0;\n  right: 0;\n  margin-bottom: 10px;\n  margin-right: 10px;\n}\n";
      },
      5320: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".vdo-poster {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: var(--posterLevel);\n}\n\n.vdo-poster img {\n  width: 100%;\n  object-fit: contain;\n  height: 100%;\n  background: #000000;\n}\n";
      },
      8649: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".TopLink {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding: 10px;\n}\n\n.TopLink a:link {\n  text-decoration: none;\n}\n\na:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\na:active {\n  text-decoration: underline;\n}\n\n.TopLink a p {\n  background: rgba(0, 0, 0, 0.5);\n  padding: 16px 24px;\n  font-size: xx-large;\n  color: var(--accent);\n  border-radius: 4px;\n  width: 16rem;\n}\n\n.TopLink a p:hover {\n  background: var(--primary);\n  color: var(--accent);\n  border-radius: 2px;\n}\n";
      },
      2651: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".vdo-full {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.vdo-full * {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, Helvetica, Arial, 'Helvetica Neue',\n    sans-serif;\n}\n.vdo-layer {\n  background: #0003;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.controller-icon {\n  cursor: pointer;\n  height: 100%;\n  /* Common CSS should not dictate any size limit to icon, it has to be theme depended */\n  /* max-height: 25px; */\n  z-index: var(--controlsLevel1);\n  /*[Commented: Samsung-Bug] (Source) : Instagram*/\n  /* filter: drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2)) */\n}\n\n/*\n* Source: https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting\n*/\n.Player {\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n}\n";
      },
      6558: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Player {\n  padding: 10px;\n  box-sizing: border-box;\n  display: grid;\n  height: 100%;\n  grid-template-columns: 35px 35px 35px 1fr 2fr 1fr 35px 35px 35px;\n  grid-template-rows: 35px 35px auto 35px 35px;\n  background: rgba(0, 0, 0, 0.45);\n}\n\n@media (orientation: portrait) {\n  .On-Fullscreen {\n    padding: 40px 20px !important;\n  }\n}\n\n@media (orientation: landscape) {\n  .On-Fullscreen {\n    padding: 20px 30px !important;\n  }\n}\n\n.Play,\n.Pause {\n  position: relative;\n  grid-area: 3 / 5 / span 1 / span 1;\n}\n\n.Play .controller-icon {\n  position: absolute;\n  height: 60%;\n  max-height: 100px;\n  top: 50%;\n  left: 50%;\n}\n\n.Pause .controller-icon {\n  position: absolute;\n  height: 60%;\n  max-height: 100px;\n  top: 50%;\n  left: 50%;\n}\n\n.Play .controller-icon {\n  transform: translate(-50%, -50%) scale(1.7);\n}\n\n.Pause .controller-icon {\n  transform: translate(-50%, -50%) scale(1.5);\n}\n\n.Forward {\n  grid-area: 3 / 6 / span 1 / span 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.Backward {\n  grid-area: 3 / 4 / span 1 / span 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.Forward .controller-icon,\n.Backward .controller-icon {\n  height: 15%;\n  max-height: 50px;\n  flex: 1; /*[ BugFix (Safari <14.0)]: forward and backward button not visible */\n  transform: scale(1.5);\n  max-width: 35px;\n  margin: 0 auto;\n}\n\n.Volume {\n  grid-area: 5 / 1 / span 1 / span 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n}\n\n/* .Volume:hover input{\n   width: 100px;\n} */\n\n.Volume .controller-icon {\n  padding: 2px;\n  box-sizing: border-box;\n}\n\n.Captions {\n  grid-area: 5 / 7 / span 1 / span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Airplay {\n  grid-area: 1 / 9 / span 1 / span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Setting {\n  grid-area: 5 / 8 / span 1 / span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.Setting .badge {\n  bottom: 45px;\n  right: 20px;\n}\n\n.Setting .controller-icon {\n  transform: scale(1.4);\n}\n\n.Setting .panel-list .controller-icon {\n  transform: scale(1.2);\n}\n\n.FullScreen {\n  grid-area: 5 / 9 / span 1 / span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.FullScreen .controller-icon {\n  transform: scale(1.8);\n}\n\n.VideoProgress {\n  grid-area: 4 / 1 / auto / -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n}\n\n@media (pointer: fine) {\n  .VideoProgress {\n    padding: 10px 10px;\n  }\n}\n\n.VideoProgress .both-side-time {\n  display: block;\n}\n\n@vdo-responsive only screen and (max-width: 600px) {\n  .Overlay > .Play > svg {\n    max-height: 40px !important;\n  }\n\n  .Player {\n    padding: 5px;\n    box-sizing: border-box;\n    display: grid;\n    height: 100%;\n    grid-template-columns: 20px 35px 1fr 2fr 1fr 35px 20px;\n    grid-template-rows: 20px auto 20px 20px;\n  }\n\n  .Play {\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-area: 2 / 4 / span 1 / span 1;\n  }\n\n  .Play .controller-icon {\n    max-height: 60px;\n  }\n\n  .Pause {\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-area: 2 / 4 / span 1 / span 1;\n  }\n\n  .Pause .controller-icon {\n    max-height: 60px;\n  }\n\n  .Backward {\n    grid-area: 2 / 3 / span 1 / span 1;\n    justify-content: flex-end;\n    padding: 5px;\n  }\n\n  .Forward {\n    grid-area: 2 / 5 / span 1 / span 1;\n    justify-content: flex-start;\n    padding: 5px;\n  }\n\n  .Captions {\n    grid-area: 1 / 6 / span 1 / span 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .Airplay {\n    grid-area: 1 / 1 / span 1 / span 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .Setting {\n    grid-area: 1 / 7 / span 1 / span 1;\n    padding: 0;\n  }\n\n  .Setting .controller-icon {\n    transform: scale(1) !important;\n  }\n\n  .Setting .badge {\n    right: 5px;\n    overflow: auto;\n    top: 25px;\n    height: fit-content;\n    bottom: auto;\n  }\n\n  .Volume {\n    grid-area: 3 / 1 / span 1 / span 1;\n    padding: 0;\n  }\n\n  .Volume .controller-icon {\n    transform: scale(1.4);\n  }\n\n  .Volume .vdo-volume-range {\n    display: none;\n  }\n\n  .FullScreen {\n    grid-area: 3 / 7 / span 1 / span 1;\n    padding: 0;\n  }\n\n  .FullScreen .controller-icon {\n    transform: scale(1.4) !important;\n  }\n\n  .VideoProgress {\n    grid-area: 4 / 1 / auto / -1;\n    padding: 5px 0 0;\n    font-size: 14px;\n  }\n  .VideoProgress .left-side-time {\n    display: none;\n  }\n\n  .VideoProgress .both-side-time {\n    display: block;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 350px) {\n  .Overlay > .Play > svg {\n    max-height: 30px !important;\n  }\n\n  .Player {\n    padding: 3px;\n    grid-template-columns: 18px 10px 18px auto 18px 10px 18px;\n    grid-template-rows: 18px auto 18px 18px;\n  }\n  .Play {\n    grid-area: 1 / 4 / 4 / span 1;\n  }\n  .Pause {\n    grid-area: 1 / 4 / 4 / span 1;\n  }\n\n  .Volume {\n    grid-area: 1 / 1 / span 1 / span 1;\n  }\n\n  .Setting {\n    grid-area: 1 / 5 / span 1 / span 1;\n  }\n\n  .FullScreen {\n    grid-area: 1 / 7 / span 1 / span 1;\n  }\n\n  .VideoProgress {\n    padding: 0;\n    font-size: 12px;\n  }\n\n  .VideoProgress .anchor {\n    display: none;\n  }\n\n  .VideoProgress .both-side-time:nth-child(odd) {\n    margin-right: 6px;\n  }\n\n  .VideoProgress .both-side-time:nth-child(even) {\n    margin-left: 6px;\n  }\n\n  .Forward {\n    display: none;\n  }\n  .Backward {\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .Airplay {\n    display: none;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 250px) {\n  .Setting {\n    display: none;\n  }\n  .Overlay > .Play > svg {\n    background: rgba(93, 93, 93, 0.7);\n    border-radius: 100%;\n    max-height: 25px !important;\n  }\n}\n";
      },
      2754: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Player {\n  position: absolute;\n  width: 100%;\n  display: none;\n  height: 100%;\n  padding: 10px;\n  grid-template-columns: 35px 35px 35px 105px auto 35px 35px 35px 35px 35px 35px 35px 35px;\n  grid-template-rows: 40px auto 25px 25px 25px;\n}\n\n.Player.SHOW-CONTROLS {\n  display: grid;\n}\n\n.Badge {\n  --controlsBackground: #000000c5;\n}\n.Caption-Search-Layer {\n  --controlsBackground: #000000c5;\n}\n\n.Tap-To-Unmute {\n  grid-area: 1 / 1 / auto / auto;\n}\n\n.Component-Container {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.Player .Player-Visible-Component-Area {\n  grid-area: 1 / 1 / 4 / -1;\n  margin-inline: -10px; \n  margin-top: -10px;\n  position: relative;\n}\n\n.Player .Player-Hidden-Component-Area {\n  grid-area: 1 / 1 / -1 / -1;\n}\n\n.SaveVideoOffline {\n  grid-area: 5 / 12 / auto / auto;\n}\n\n.Cast {\n  grid-area: 1 / 12 / auto / auto;\n}\n\n.AirPlay {\n  grid-area: 1 / 11 / auto / auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.GradientLayer[bottom] {\n  display: block;\n  bottom: 0px;\n  position: absolute;\n  height: 98px;\n  left: 0px;\n  width: 100%;\n}\n\n@media (orientation: portrait) {\n  .On-Fullscreen {\n    padding: 40px 20px !important;\n  }\n}\n\n@media (orientation: landscape) {\n  .On-Fullscreen {\n    padding: 20px 30px !important;\n  }\n}\n\n.controller-icon {\n  max-height: 16px;\n}\n\n\n.Volume {\n  grid-area: 5 / 4 / span 1 / span 4;\n  max-width: 150px;\n  height: 100%;\n}\n\n.Volume .TimeAll {\n  display: flex;\n}\n\n.Volume > .wrapper {\n  justify-content: flex-start;\n}\n\n.Volume > .wrapper > input {\n  width: 0%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.Volume:hover > .wrapper > input {\n  transform: none;\n  width: 32%;\n}\n\n.Volume > .wrapper > input::-moz-range-thumb {\n  display: none;\n  opacity: 0;\n}\n\n.Volume:hover > .wrapper > input::-moz-range-thumb {\n  display: block;\n  opacity: 1;\n}\n\n.Volume > .wrapper > input::-webkit-slider-thumb {\n  display: none;\n}\n\n.Volume:hover > .wrapper > input::-webkit-slider-thumb {\n  display: block;\n}\n\n.Backward {\n  grid-area: 5 / 1 / auto / auto;\n}\n\n.Forward {\n  grid-area: 5 / 3 / auto / auto;\n}\n\n.Forward,\n.Backward {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* @media (pointer: fine) {\n  .VideoProgress {\n    padding: 10px 10px;\n  }\n} */\n\n.Notification{\n  grid-area: 3 / 1 / 4 / -1;\n}\n\n.VideoProgress {\n  grid-area: 4 / 1 / 5 / -1\n}\n\n/* .VideoProgress:hover {\n  --progressBarHeight: 4px;\n  --barBorderRadius: 0px;\n} */\n\n.PlayNPause {\n  grid-area: 5 / 2 / auto / auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Setting {\n  grid-area: 5 / 9 / auto / auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Setting .badge {\n  right: 5px;\n  overflow: auto;\n  bottom: 40px;\n  height: fit-content;\n}\n\n.Captions {\n  grid-area: 5 / 8 / auto / auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.CaptionSearch {\n  grid-area: 5 / 7 / auto / auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.Speed {\n  grid-area: 5 / 6 / auto / auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* margin-right: 14px; */\n}\n\n.Chapters {\n  grid-area: 5 / 11 / auto / auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.Quality {\n  grid-area: 5 / 10 / auto / auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.FullScreen {\n  grid-area: 5 / 13 / auto / auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@vdo-responsive only screen and (max-width: 490px) {\n  .GradientLayer[top] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 98px;\n    width: 100%;\n    display: block;\n  }\n\n  .Player {\n    grid-template-rows: 30px auto 25px 25px 25px 25px;\n    grid-template-columns: 35px 40px auto 35px 35px 35px auto 40px 35px;\n  }\n\n  .Tap-To-Unmute {\n    grid-area: 1 / 1 / auto / auto;\n    height: 23px;\n  }\n\n  .Tap-To-Unmute .text {\n    font-size: x-small;\n  }\n\n  .Player .Player-Visible-Component-Area {\n    grid-area: 2 / 1 / 5 / -1;\n    margin-inline: -10px;\n    margin-top: 0px;\n  }\n\n  .PlayNPause {\n    grid-area: 6 / 5 / auto / auto;\n  }\n  .Backward {\n    grid-area: 6 / 4 / auto / auto;\n  }\n  .Forward {\n    grid-area: 6 / 6 / auto / auto;\n  }\n  .Notification{\n    grid-area: 4 / 1 / 5 / -1\n  }\n  .VideoProgress {\n    grid-area: 5 / 1 / 6 / -1\n  }\n  .Volume {\n    grid-area: 1 / 1 / span 1 / auto;\n  }\n  .Volume .wrapper > input {\n    display: none;\n  }\n  .Volume .Volume-Time {\n    display: none;\n  }\n  .SaveVideoOffline{\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .Chapters {\n    display: none;\n  }\n  .Quality {\n    display: none;\n  }\n  .CaptionSearch {\n    display: none;\n  }\n  .Speed {\n    display: none;\n  }\n  .Volume .TimeAll {\n    display: none;\n  }\n  .TimeConsumed {\n    grid-area: 6 / 1 / auto / auto;\n    display: flex;\n  }\n  .TimeDuration {\n    grid-area: 6 / 9 / auto / auto;\n    display: flex;\n  }\n  .FullScreen {\n    grid-area: 1 / 8 / auto / auto;\n    justify-content: center;\n  }\n  .Setting {\n    grid-area: 1 / 9 / auto / auto;\n  }\n  .Setting .badge {\n    bottom: auto;\n    top: 40px;\n  }\n  .Cast {\n    grid-area: 1 / 7 / auto / auto;\n    justify-content: flex-end;\n    margin-right: 5px;\n  }\n  .AirPlay {\n    grid-area: 1 / 2 / auto / auto;\n    justify-content: flex-start;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 300px) {\n  .Player {\n    grid-template-rows: 25px 30px auto 25px 25px 25px;\n    grid-template-columns: 35px 40px auto 35px;\n  }\n\n  .Tap-To-Unmute {\n    grid-area: 2 / 1 / auto / auto;\n  }\n\n  .PlayNPause {\n    grid-area: 6 / 1 / auto / auto;\n    justify-content: flex-start;\n  }\n\n  .Backward {\n    display: none;\n  }\n  .Forward {\n    display: none;\n  }\n  .Notification {\n    grid-area: 4 / 1 / 5 / -1;\n  }\n  .VideoProgress {\n    grid-area: 5 / 1 / 6 / -1;\n  }\n  .Volume {\n    grid-area: 6 / 2 / span 1 / auto;\n  }\n  .Volume > .wrapper {\n    justify-content: center;\n  }\n  .Volume .wrapper > input {\n    display: none;\n  }\n  .Volume .Volume-Time {\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .Chapters {\n    display: none;\n  }\n  .CaptionSearch {\n    display: none;\n  }\n  .Speed {\n    display: none;\n  }\n  .Quality {\n    display: none;\n  }\n  .TimeAll {\n    grid-area: 6 / 3 / 6 / 5;\n    justify-content: end;\n    display: flex;\n  }\n  .TimeConsumed {\n    display: none;\n  }\n  .TimeDuration {\n    display: none;\n  }\n  .FullScreen {\n    justify-content: start;\n    grid-area: 1 / 1 / auto / auto;\n  }\n  .Setting {\n    grid-area: 1 / 4 / auto / auto;\n  }\n  .Cast {\n    grid-area: 1 / 3 / auto / auto;\n    justify-content: flex-end;\n    margin-right: 5px;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 200px) {\n  .TimeAll {\n    display: none;\n  }\n  .TimeConsumed {\n    display: none;\n  }\n  .TimeDuration {\n    display: none;\n  }\n  .Volume {\n    grid-area: 6 / 4 / span 1 / span 1;\n    justify-content: flex-end;\n  }\n  .Volume > .wrapper {\n    justify-content: flex-end;\n  }\n  .Chapters {\n    display: none;\n  }\n  .CaptionSearch {\n    display: none;\n  }\n  .Speed {\n    display: none;\n  }\n  .Quality {\n    display: none;\n  }\n  .VideoProgress {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    font-size: 12px;\n  }\n  .VideoProgress .both-side-time {\n    display: block;\n  }\n  .VideoProgress .anchor {\n    display: none;\n  }\n\n  .VideoProgress .both-side-time:nth-child(odd) {\n    margin-right: 6px;\n  }\n\n  .VideoProgress .both-side-time:nth-child(even) {\n    margin-left: 6px;\n  }\n}\n";
      },
      7196: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Player {\n  color: var(--accent);\n  position: absolute;\n  width: 100%;\n  display: none;\n  padding: 10px 0px;\n  height: 100%;\n  grid-template-columns: 10px 35px 35px 35px 105px auto 35px 35px 35px 35px 35px 35px 35px 10px;\n  grid-template-rows: 40px auto 25px 25px;\n}\n\n.Player.SHOW-CONTROLS {\n  display: grid;\n}\n\n.Badge {\n  --badgeBorderRadius: 2px;\n}\n\n.Player.Overlay {\n  --icon-color: var(--primary);\n}\n\n.Player.Overlay:hover svg {\n  background: var(--primary);\n  --icon-color: var(--controlsBackground);\n}\n\n.GradientLayer[bottom] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  background: rgba(220, 220, 220, 0.9);\n  height: 45px;\n  display: block;\n}\n\n.Tap-To-Unmute {\n  grid-area: 1 / 2 / auto / auto;\n}\n\n.Component-Container {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.Player .Player-Visible-Component-Area {\n  grid-area: 1 / 2 / 3 / 12;\n}\n\n.Player .Player-Hidden-Component-Area {\n  grid-area: 1 / 2 / -1 / -1;\n}\n\n.Cast {\n  grid-area: 1 / 13 / auto / auto;\n}\n\n/* @media (orientation: portrait) {\n  .On-Fullscreen {\n    padding: 40px 20px !important;\n  }\n}\n\n@media (orientation: landscape) {\n  .On-Fullscreen {\n    padding: 20px 30px !important;\n  }\n} */\n\n.controller-icon {\n  max-height: 20px;\n}\n\n.Overlay.Player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Overlay.Player > .PlayNPause {\n  width: 100px;\n  height: 100px;\n}\n\n.Volume {\n  grid-area: 4 / 5 / span 1 / span 4;\n  max-width: 150px;\n  height: 100%;\n}\n\n.Volume .Volume-Time {\n  display: block;\n}\n\n.Volume > .wrapper {\n  justify-content: flex-start;\n}\n\n.Volume > .wrapper > input {\n  width: 0%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.Volume:hover > .wrapper > input {\n  transform: none;\n  width: 32%;\n}\n\n.Volume > .wrapper > input::-moz-range-thumb {\n  display: none;\n  opacity: 0;\n}\n\n.Volume:hover > .wrapper > input::-moz-range-thumb {\n  display: block;\n  opacity: 1;\n}\n\n.Volume > .wrapper > input::-webkit-slider-thumb {\n  display: none;\n}\n\n.Volume:hover > .wrapper > input::-webkit-slider-thumb {\n  display: block;\n}\n\n.Backward {\n  grid-area: 4 / 2 / auto / auto;\n}\n\n.Forward {\n  grid-area: 4 / 4 / auto / auto;\n}\n\n.Forward,\n.Backward {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Forward > svg,\n.Backward > svg {\n  transform: scale(1.2);\n}\n\n/* @media (pointer: fine) {\n  .VideoProgress {\n    padding: 10px 10px;\n  }\n} */\n\n.VideoProgress {\n  grid-area: 3 / 1 / 3 / -1;\n  --progressBarHeight: 6px;\n  --barBorderRadius: 0px;\n  --anchorBorderRadius: 0px;\n}\n\n.VideoProgress .chapter-section-container > .chapter-section {\n  background: rgba(255, 255, 255, 0.4);\n}\n\n.VideoProgress .buffer-bar .buffer-fragment {\n  background: white;\n}\n\n.PlayNPause {\n  grid-area: 4 / 3 / auto / auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.PlayNPause.spinner-container {\n  transform: scale(0.7);\n}\n\n.PlayNPause svg {\n  transform: scale(1.7);\n}\n\n.Setting {\n  grid-area: 4 / 10 / auto / auto;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.Setting .badge {\n  right: 5px;\n  overflow: auto;\n  bottom: 40px;\n  height: fit-content;\n}\n\n.Captions {\n  grid-area: 4 / 9 / auto / auto;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.Captions svg {\n  transform: scale(1.2);\n}\n\n.CaptionSearch {\n  grid-area: 4 / 8 / auto / auto;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.CaptionSearch svg {\n  transform: scale(1.5);\n}\n\n.Speed {\n  grid-area: 4 / 7 / auto / auto;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.Speed svg {\n  transform: scale(1.3);\n}\n\n.Chapters {\n  grid-area: 4 / 12 / auto / auto;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.Quality {\n  grid-area: 4 / 11 / auto / auto;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.Quality svg {\n  transform: scale(1.3);\n}\n\n.FullScreen {\n  grid-area: 4 / 13 / auto / auto;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.FullScreen svg {\n  transform: scale(1.5);\n}\n\n@vdo-responsive only screen and (max-width: 490px) {\n  .GradientLayer[top] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 98px;\n    width: 100%;\n    display: block;\n  }\n\n  .Overlay > .PlayNPause > svg {\n    max-height: 30px !important;\n  }\n  .Player {\n    grid-template-rows: 30px auto 25px 25px 25px;\n    grid-template-columns: 10px 35px 40px auto 35px 35px 35px auto 40px 35px 10px;\n  }\n\n  .Tap-To-Unmute {\n    grid-area: 1 / 2 / auto / auto;\n    height: 23px;\n  }\n\n  .Tap-To-Unmute .text {\n    font-size: x-small;\n  }\n\n  .Player .Player-Visible-Component-Area {\n    grid-area: 2 / 2 / 4 / 11;\n  }\n\n  .PlayNPause {\n    grid-area: 5 / 6 / auto / auto;\n  }\n  .Backward {\n    grid-area: 5 / 5 / auto / auto;\n  }\n  .Forward {\n    grid-area: 5 / 7 / auto / auto;\n  }\n  .VideoProgress {\n    grid-area: 4 / 1 / 4 / 12;\n  }\n  .Volume {\n    grid-area: 1 / 2 / span 1 / auto;\n    background: var(--controlsBackground);\n  }\n  .Volume .wrapper {\n    justify-content: center;\n  }\n  .Volume .wrapper > input {\n    display: none;\n  }\n  .Volume .Volume-Time {\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .Chapters {\n    display: none;\n  }\n  .Quality {\n    display: none;\n  }\n  .CaptionSearch {\n    display: none;\n  }\n  .Speed {\n    display: none;\n  }\n  .Duration {\n    grid-area: 5 / 2 / 6 / 11;\n    font-size: small;\n    color: var(--accent);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .Duration .divider {\n    display: none;\n  }\n  .FullScreen {\n    grid-area: 1 / 9 / auto / auto;\n    justify-content: center;\n    background: var(--controlsBackground);\n  }\n  .Setting {\n    grid-area: 1 / 10 / auto / auto;\n    background: var(--controlsBackground);\n  }\n  .Setting .badge {\n    bottom: auto;\n    top: 40px;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 300px) {\n  .Overlay > .PlayNPause > svg {\n    max-height: 30px !important;\n  }\n  .Player {\n    grid-template-rows: 25px 30px auto 25px 25px;\n    grid-template-columns: 10px 35px 40px auto 35px 10px;\n  }\n\n  .Tap-To-Unmute {\n    grid-area: 2 / 2 / auto / auto;\n  }\n\n  .PlayNPause {\n    grid-area: 5 / 2 / auto / auto;\n    justify-content: flex-start;\n  }\n\n  .Overlay.Player .PlayNPause {\n    justify-content: center;\n  }\n\n  .Backward {\n    display: none;\n  }\n  .Forward {\n    display: none;\n  }\n  .VideoProgress {\n    grid-area: 4 / 1 / 5 / -1;\n  }\n  .Volume {\n    grid-area: 5 / 3 / span 1 / auto;\n    background: none;\n  }\n  .Volume > .wrapper {\n    justify-content: flex-start;\n  }\n  .Volume .wrapper > input {\n    display: none;\n  }\n  .Volume .Volume-Time {\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .Chapters {\n    display: none;\n  }\n  .CaptionSearch {\n    display: none;\n  }\n  .Speed {\n    display: none;\n  }\n  .Quality {\n    display: none;\n  }\n  .Duration {\n    grid-area: 5 / 4 / 6 / 6;\n    justify-content: end;\n  }\n  .Duration .divider {\n    display: block;\n  }\n  .FullScreen {\n    grid-area: 1 / 2 / auto / auto;\n  }\n  .Setting {\n    grid-area: 1 / 5 / auto / auto;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 200px) {\n  .Overlay > .PlayNPause > svg {\n    background: var(--controlsBackground);\n    border-radius: 100%;\n    max-height: 25px !important;\n  }\n  .Duration {\n    display: none;\n  }\n  .Volume {\n    grid-area: 5 / 3 / span 1 / 6;\n  }\n  .Volume > .wrapper {\n    justify-content: flex-end;\n  }\n  .Volume .Volume-Time {\n    display: block;\n  }\n  .Chapters {\n    display: none;\n  }\n  .CaptionSearch {\n    display: none;\n  }\n  .Speed {\n    display: none;\n  }\n  .Quality {\n    display: none;\n  }\n  .VideoProgress {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    font-size: 12px;\n  }\n  .VideoProgress .anchor {\n    display: none;\n  }\n\n  .VideoProgress .both-side-time:nth-child(odd) {\n    margin-right: 6px;\n  }\n\n  .VideoProgress .both-side-time:nth-child(even) {\n    margin-left: 6px;\n  }\n}\n";
      },
      507: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r =
          ".Player {\n  color: var(--accent);\n  position: absolute;\n  width: 100%;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 28px 1fr 105px 5px 28px 28px 28px;\n  grid-template-rows: 28px auto 28px 28px;\n  animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin: var(--extend) 0px;\n  height: calc(100% - 2 * var(--extend));\n  --extend: -67px;\n  gap: 5px;\n  font-size: 13px;\n}\n\n.Player.SHOW-CONTROLS {\n  --extend: 0px;\n}\n\n.Player .controller-icon {\n  height: 16px;\n  width: 16px;\n}\n\n.AirPlay{\n  grid-area: 1 / 6 / auto / auto;\n}\n\n.GradientLayer[bottom] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));\n  height: 60px;\n  display: block;\n  transform: none;\n}\n\n.Badge {\n  --badgeBorderRadius: 2px;\n  font-size: 13px;\n}\n\n.Forward,\n.Backward {\n  display: none;\n}\n\n.Tap-To-Unmute {\n  grid-area: 1 / 2 / auto / auto;\n}\n\n.Component-Container {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.Player .Player-Visible-Component-Area {\n  grid-area: 1 / 2 / 3 / -1;\n}\n\n.Player .Player-Hidden-Component-Area {\n  grid-area: 1 / 2 / -1 / -1;\n}\n\n.Cast {\n  grid-area: 1 / 7 / auto / auto;\n}\n\n.Overlay.Player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Overlay.Player > .PlayNPause {\n  width: 100px;\n  height: 100px;\n}\n\n.Overlay.Player > .PlayNPause .icon-wrapper{\n  background: var(--primary);\n  opacity: 0.9;\n}\n\n.Overlay.Player > .PlayNPause  .controller-icon {\n  max-height: 48px;\n  height: 48px;\n  width: 48px;\n}\n\n.Overlay.Player > .PlayNPause:hover {\n  background: none;\n}\n\n.Overlay.Player:hover > .PlayNPause > .icon-wrapper {\n  opacity: 1;\n}\n\n.Volume {\n  grid-area: 4 / 3 / auto / auto;\n  height: 100%;\n}\n\n.Volume .Volume-Time {\n  display: hidden;\n}\n\n.Volume .vdo-volume-range {\n  opacity: 1;\n}\n\n.Volume > .wrapper > input::-webkit-slider-thumb {\n  background: var(--icon-color);\n}\n\n.VideoProgress {\n  grid-area: 4 / 2 / auto / auto;\n  --progressBarHeight: 5px;\n  --barBorderRadius: 2.5px;\n  --anchorBorderRadius: 2.5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 5px;\n}\n\n.VideoProgress .container .thumb {\n  width: 12px;\n  height: 12px;\n  cursor: grab;\n  background: var(--icon-color);\n}\n\n.VideoProgress .left-side-time {\n  display: block;\n  font-size: smaller;\n  color: var(--icon-color);\n}\n\n.VideoProgress .chapter-section-container > .chapter-section {\n  background: rgba(255, 255, 255, 0.4);\n}\n\n.VideoProgress .buffer-bar .buffer-fragment {\n  background: white;\n}\n\n.PlayNPause {\n  grid-area: 4 / 1 / auto / auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Setting {\n  grid-area: 4 / 6 / auto / auto;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.Setting .badge {\n  right: 5px;\n  overflow: auto;\n  bottom: 40px;\n  height: fit-content;\n}\n\n.Captions {\n grid-area: 4 / 5 / auto / auto;\n}\n\n.CaptionSearch {\n  display: none;\n}\n\n.Speed {\n  display: none;\n}\n\n.Chapters {\n  display: none;\n}\n\n.Quality {\n  display: none;\n}\n\n.FullScreen {\n  grid-area: 4 / 7 / auto / auto;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.FullScreen:hover,\n.Quality:hover,\n.Chapters:hover,\n.Captions:hover,\n.CaptionSearch:hover,\n.Setting:hover,\n.Speed:hover,\n.PlayNPause:hover {\n  background: var(--primary);\n  border-radius: 2.5px;\n}\n\n/* .tooltip-container > span{\n  margin-top: -200% !important;\n}\n\n.tooltip-container .tl-right {\n  left: -10px;\n} */\n\n\n.Badge .controller-icon{\n  fill: var(--accent)\n}\n\n@vdo-responsive only screen and (max-width: 490px) {\n  .GradientLayer[top] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 98px;\n    width: 100%;\n    display: block;\n  }\n\n  .Overlay > .PlayNPause > svg {\n    max-height: 30px !important;\n  }\n  .Player {\n    grid-template-rows: 28px auto 28px 28px;\n    grid-template-columns: 28px  auto 28px 28px 28px;\n  }\n\n  .Cast {\n    grid-area: 1 / 4 / auto / auto;\n  }\n\n  .AirPlay{\n    grid-area: 1 / 3 / auto / auto \n  }\n\n  .Tap-To-Unmute {\n    grid-area: 1 / 2 / auto / auto;\n    height: 23px;\n  }\n\n  .Tap-To-Unmute .text {\n    font-size: x-small;\n  }\n\n  .PlayNPause {\n    grid-area: 4 / 1 / auto / auto;\n  }\n\n  .VideoProgress {\n    grid-area: 3 / 1 / 4 / 6\n  }\n  .Volume {\n    grid-area: 1 / 1 / auto / auto\n  }\n  .Volume .wrapper {\n    justify-content: center;\n  }\n  .Volume .wrapper > input {\n    display: none;\n  }\n  .Volume .Volume-Time {\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .FullScreen {\n    grid-area: 4 / 5 / auto / auto;\n    justify-content: center;\n  }\n  .Setting {\n    grid-area: 1 / 5 / auto / auto;\n  }\n  .Setting .badge {\n    bottom: auto;\n    top: 40px;\n  }\n}\n\n\n@vdo-responsive only screen and (max-width: 300px) {\n  .GradientLayer[top] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 98px;\n    width: 100%;\n    display: block;\n  }\n\n  .Overlay > .PlayNPause > svg {\n    max-height: 30px !important;\n  }\n  .Player {\n    grid-template-rows: 28px auto 28px 28px;\n    grid-template-columns: 28px  auto 28px 28px 28px;\n  }\n\n  .Cast {\n    grid-area: 1 / 4 / auto / auto;\n  }\n\n  .AirPlay{\n    grid-area: 1 / 3 / auto / auto \n  }\n\n  .Tap-To-Unmute {\n    grid-area: 1 / 2 / auto / auto;\n    height: 23px;\n  }\n\n  .Tap-To-Unmute .text {\n    font-size: x-small;\n  }\n\n  .PlayNPause {\n    grid-area: 4 / 1 / auto / auto;\n  }\n\n  .VideoProgress {\n    grid-area: 3 / 1 / 4 / 6\n  }\n  .Volume {\n    grid-area: 1 / 1 / auto / auto\n  }\n  .Volume .wrapper {\n    justify-content: center;\n  }\n  .Volume .wrapper > input {\n    display: none;\n  }\n  .Volume .Volume-Time {\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .FullScreen {\n    grid-area: 4 / 5 / auto / auto;\n    justify-content: center;\n  }\n  .Setting {\n    grid-area: 1 / 5 / auto / auto;\n  }\n  .Setting .badge {\n    bottom: auto;\n    top: 40px;\n  }\n}\n\n\n@vdo-responsive only screen and (max-width: 200px) {\n  .GradientLayer[top] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 98px;\n    width: 100%;\n    display: block;\n  }\n\n  .Overlay > .PlayNPause > svg {\n    max-height: 30px !important;\n  }\n  .Player {\n    grid-template-rows: 28px auto 28px 28px;\n    grid-template-columns: 28px  auto 28px 28px 28px;\n  }\n\n  .Cast {\n    grid-area: 1 / 4 / auto / auto;\n  }\n\n  .AirPlay{\n    grid-area: 1 / 3 / auto / auto \n  }\n\n  .Tap-To-Unmute {\n    grid-area: 1 / 2 / auto / auto;\n    height: 23px;\n  }\n\n  .Tap-To-Unmute .text {\n    font-size: x-small;\n  }\n\n  .PlayNPause {\n    grid-area: 4 / 1 / auto / auto;\n  }\n\n  .VideoProgress {\n    grid-area: 3 / 1 / 4 / 6\n  }\n  .Volume {\n    grid-area: 1 / 1 / auto / auto\n  }\n  .Volume .wrapper {\n    justify-content: center;\n  }\n  .Volume .wrapper > input {\n    display: none;\n  }\n  .Volume .Volume-Time {\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .FullScreen {\n    grid-area: 4 / 5 / auto / auto;\n    justify-content: center;\n  }\n  .Setting {\n    grid-area: 1 / 5 / auto / auto;\n  }\n  .Setting .badge {\n    bottom: auto;\n    top: 40px;\n  }\n}\n";
      },
      939: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => A });
        var r = function (e, n, t) {
            if (t || 2 === arguments.length)
              for (var r, a = 0, o = n.length; a < o; a++)
                (!r && a in n) ||
                  (r || (r = Array.prototype.slice.call(n, 0, a)),
                  (r[a] = n[a]));
            return e.concat(r || Array.prototype.slice.call(n));
          },
          a = [],
          o = Object.getOwnPropertyNames(HTMLVideoElement.prototype),
          i = Object.getOwnPropertyNames(HTMLMediaElement.prototype);
        function l(e) {
          var n = {};
          return (
            a.forEach(function (t) {
              var r,
                a = e[t];
              (r = a) !== Object(r)
                ? (n[t] = a)
                : (n["$$" + t] = (function (e) {
                    if ("TimeRanges" === e.constructor.name) {
                      for (var n = [], t = 0; t < e.length; t++)
                        n.push([e.start(t), e.end(t)]);
                      return {
                        type: "TimeRanges",
                        argument: { length: e.length, data: n },
                      };
                    }
                    return "$$@todo" + e.constructor.name;
                  })(a));
            }),
            n
          );
        }
        r(r([], o, !0), i, !0).forEach(function (e) {
          try {
            "function" != typeof HTMLVideoElement.prototype[e] && a.push(e);
          } catch (n) {
            a.push(e);
          }
        });
        var s = [
            "loadstart",
            "progress",
            "suspend",
            "abort",
            "error",
            "emptied",
            "stalled",
            "loadedmetadata",
            "loadeddata",
            "canplay",
            "canplaythrough",
            "playing",
            "waiting",
            "seeking",
            "seeked",
            "ended",
            "durationchange",
            "timeupdate",
            "play",
            "pause",
            "ratechange",
            "resize",
            "volumechange",
          ],
          u = [
            "loadstart",
            "loadedmetadata",
            "loadeddata",
            "canplay",
            "emptied",
            "canplaythrough",
          ],
          c = function (e) {
            try {
              return JSON.parse(e);
            } catch (e) {
              return { payload: {} };
            }
          };
        function d() {
          var e = ((46656 * Math.random()) | 0).toString(36),
            n = ((46656 * Math.random()) | 0).toString(36);
          return ("000" + e).slice(-3) + ("000" + n).slice(-3);
        }
        var p = function (e) {
            return "PRINCIPAL" === e ? "AGENT" : "PRINCIPAL";
          },
          f = "@vdo/PR-via-custom-event-",
          v = function () {
            return (
              (v =
                Object.assign ||
                function (e) {
                  for (var n, t = 1, r = arguments.length; t < r; t++)
                    for (var a in (n = arguments[t]))
                      Object.prototype.hasOwnProperty.call(n, a) &&
                        (e[a] = n[a]);
                  return e;
                }),
              v.apply(this, arguments)
            );
          },
          h = "@vdo/MT-via-custom-event-";
        var m = function () {
          return (
            (m =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            m.apply(this, arguments)
          );
        };
        function g(e) {
          return "iframe" === e.type
            ? (function (e) {
                var n = e.element,
                  t = e.operatingMode,
                  r = {
                    isActive: !1,
                    source: null,
                    origin: "*",
                    onConnected: null,
                    onReady: null,
                    onStateUpdate: null,
                  },
                  a = (function (e) {
                    var n = {};
                    return (
                      e.addEventListener("message", function (e) {
                        var t = e.data,
                          r = c(t),
                          a = r.token,
                          o = r.type,
                          i = r.status,
                          l = void 0 === i || i,
                          s = r.payload;
                        "@vdo/promiseResolver" === o &&
                          a &&
                          a in n &&
                          (l ? n[a][0](s) : n[a][1](s), delete n[a]);
                      }),
                      {
                        bindPromise: function (e, t) {
                          var r = d();
                          return (n[r] = [e, t]), r;
                        },
                        settlePromise: function (e, n, t, r) {
                          void 0 === t && (t = !0),
                            null == e ||
                              e.postMessage(
                                JSON.stringify({
                                  type: "@vdo/promiseResolver",
                                  token: n,
                                  status: t,
                                  payload: r,
                                }),
                                "*"
                              );
                        },
                      }
                    );
                  })(window),
                  o = a.bindPromise,
                  i = a.settlePromise,
                  l = (function (e) {
                    var n = {};
                    return {
                      add: function (e, t) {
                        n[e] ? n[e].push(t) : (n[e] = [t]);
                      },
                      onMessage: function (t, r, a, o) {
                        n[t] &&
                          n[t].forEach(function (n) {
                            var t = n(r);
                            "function" == typeof (null == t ? void 0 : t.then)
                              ? t
                                  .then(function (n) {
                                    a && o && e(o, a, !0, n);
                                  })
                                  .catch(function (n) {
                                    a && o && e(o, a, !1, n);
                                  })
                              : a && o && e(o, a, !0, t);
                          });
                      },
                    };
                  })(i),
                  s = [],
                  u = function (e, n) {
                    return (
                      r.isActive || s.push([e, n]),
                      new Promise(function (t, a) {
                        var i,
                          l = o(t, a);
                        null === (i = r.source) ||
                          void 0 === i ||
                          i.postMessage(
                            JSON.stringify({ type: e, token: l, payload: n }),
                            "*"
                          );
                      })
                    );
                  };
                window.addEventListener("message", function (e) {
                  var n = e.data,
                    t = e.source,
                    a = c(n),
                    o = a.type,
                    s = a.payload,
                    d = void 0 === s ? {} : s,
                    p = a.token;
                  if (o)
                    return (
                      d.videoState &&
                        r.onStateUpdate &&
                        r.onStateUpdate(d.videoState),
                      "@vdo/handshakeSuccessful" === o && r.onConnected
                        ? r.onConnected()
                        : "@vdo/handshake" === o && t && d.origin && p
                        ? (function (e, n, t) {
                            (r.source = e),
                              (r.isActive = !0),
                              (r.origin = n),
                              r.onConnected && r.onConnected(),
                              u("@vdo/handshakeSuccessful", { origin: n }),
                              t && i(e, t, !0);
                          })(t, origin, p)
                        : "@vdo/readyToHandshake" === o && r.onReady
                        ? r.onReady()
                        : void l.onMessage(o, d, p, t)
                    );
                });
                var p = {
                  send: u,
                  onStateUpdate: function (e) {
                    return (r.onStateUpdate = e);
                  },
                  on: l.add,
                  isConnected: function () {
                    return r.isActive;
                  },
                };
                return m(
                  m({}, p),
                  "PRINCIPAL" === t
                    ? {
                        operatingMode: "PRINCIPAL",
                        handshake: {
                          onSuccess: function (e) {
                            return (r.onConnected = e);
                          },
                          onReady: function (e) {
                            return (r.onReady = e);
                          },
                          ready: function () {
                            window.parent.postMessage(
                              JSON.stringify({ type: "@vdo/readyToHandshake" }),
                              "*"
                            );
                          },
                        },
                      }
                    : {
                        operatingMode: "AGENT",
                        handshake: {
                          onSuccess: function (e) {
                            return (r.onConnected = e);
                          },
                          onReady: function (e) {
                            return (r.onReady = e);
                          },
                          request: function () {
                            return new Promise(function (e, t) {
                              var a;
                              if (n instanceof HTMLIFrameElement) {
                                r.source = n.contentWindow;
                                var i = o(e, t);
                                null === (a = n.contentWindow) ||
                                  void 0 === a ||
                                  a.postMessage(
                                    JSON.stringify({
                                      type: "@vdo/handshake",
                                      token: i,
                                      payload: {
                                        origin: window.location.origin,
                                      },
                                    }),
                                    "*"
                                  );
                              }
                            });
                          },
                        },
                      }
                );
              })(e)
            : (function (e) {
                var n = e.element,
                  t = e.operatingMode,
                  r = h + t,
                  a = h + p(t),
                  o = {
                    isActive: !1,
                    element: n,
                    onConnected: null,
                    onReady: null,
                    onStateUpdate: null,
                  },
                  i = (function (e, n) {
                    var t = f + n,
                      r = f + p(n),
                      a = {};
                    return (
                      e.addEventListener(t, function (e) {
                        var n = c(e.detail),
                          t = n.token,
                          r = n.status,
                          o = void 0 === r || r,
                          i = n.payload;
                        t &&
                          t in a &&
                          (o ? a[t][0](i) : a[t][1](i), delete a[t]);
                      }),
                      {
                        bindPromise: function (e, n) {
                          var t = d();
                          return (a[t] = [e, n]), t;
                        },
                        settlePromise: function (n, t, a) {
                          void 0 === t && (t = !0),
                            e.dispatchEvent(
                              new CustomEvent(r, {
                                detail: JSON.stringify({
                                  token: n,
                                  status: t,
                                  payload: a,
                                }),
                              })
                            );
                        },
                      }
                    );
                  })(n, t),
                  l = i.bindPromise,
                  s = i.settlePromise,
                  u = (function (e) {
                    var n = {};
                    return {
                      add: function (e, t) {
                        n[e] ? n[e].push(t) : (n[e] = [t]);
                      },
                      onMessage: function (t, r, a) {
                        n[t] &&
                          n[t].forEach(function (n) {
                            var t = n(r);
                            "function" == typeof (null == t ? void 0 : t.then)
                              ? t
                                  .then(function (n) {
                                    a && e(a, !0, n);
                                  })
                                  .catch(function (n) {
                                    a && e(a, !1, n);
                                  })
                              : a && e(a, !0, t);
                          });
                      },
                    };
                  })(s),
                  m = [],
                  g = function (e, t) {
                    return (
                      o.isActive || m.push([e, t]),
                      new Promise(function (r, o) {
                        var i = l(r, o),
                          s = JSON.stringify({ type: e, token: i, payload: t });
                        n.dispatchEvent(new CustomEvent(a, { detail: s }));
                      })
                    );
                  };
                n.addEventListener(r, function (e) {
                  var n = e.detail,
                    t = c(n),
                    r = t.type,
                    a = t.payload,
                    i = void 0 === a ? {} : a,
                    l = t.token;
                  if (r)
                    return (
                      i.videoState &&
                        o.onStateUpdate &&
                        o.onStateUpdate(i.videoState),
                      "@vdo/handshakeSuccessful" === r && o.onConnected
                        ? o.onConnected()
                        : "@vdo/handshake" === r && i.origin && l
                        ? (function (e) {
                            (o.isActive = !0),
                              o.onConnected && o.onConnected(),
                              g("@vdo/handshakeSuccessful", { origin }),
                              e && s(e, !0);
                          })(l)
                        : "@vdo/readyToHandshake" === r && o.onReady
                        ? o.onReady()
                        : void u.onMessage(r, i, l)
                    );
                });
                var y = {
                  send: g,
                  onStateUpdate: function (e) {
                    return (o.onStateUpdate = e);
                  },
                  on: u.add,
                  isConnected: function () {
                    return o.isActive;
                  },
                };
                return v(
                  v({}, y),
                  "PRINCIPAL" === t
                    ? {
                        operatingMode: "PRINCIPAL",
                        handshake: {
                          onSuccess: function (e) {
                            return (o.onConnected = e);
                          },
                          onReady: function (e) {
                            return (o.onReady = e);
                          },
                          ready: function () {
                            var e = JSON.stringify({
                              type: "@vdo/readyToHandshake",
                            });
                            n.dispatchEvent(
                              new CustomEvent(
                                "@vdo/MT-via-custom-event-AGENT",
                                { detail: e }
                              )
                            );
                          },
                        },
                      }
                    : {
                        operatingMode: "AGENT",
                        handshake: {
                          onSuccess: function (e) {
                            return (o.onConnected = e);
                          },
                          onReady: function (e) {
                            return (o.onReady = e);
                          },
                          request: function () {
                            return new Promise(function (e, t) {
                              var r = l(e, t),
                                a = JSON.stringify({
                                  type: "@vdo/handshake",
                                  token: r,
                                  payload: { origin: window.location.origin },
                                });
                              n.dispatchEvent(
                                new CustomEvent(
                                  "@vdo/MT-via-custom-event-PRINCIPAL",
                                  { detail: a }
                                )
                              );
                            });
                          },
                        },
                      }
                );
              })(e);
        }
        var y = t(134);
        function b(e) {
          (this.__store = e || []), (this.length = this.__store.length);
        }
        function w() {
          var e = {};
          return {
            update: function (n) {
              return (
                (t = n),
                Object.keys(t)
                  .filter(function (e) {
                    return e.startsWith("$$");
                  })
                  .forEach(function (e) {
                    var n = t[e];
                    if ("string" == typeof n)
                      return (
                        (t[e.slice(2)] = "NOT_AVAILABLE_ON_API"), delete t[e]
                      );
                    if ("string" != typeof n) {
                      var r = n,
                        a = r.type,
                        o = r.argument;
                      if ("TimeRanges" === a)
                        return (t[e.slice(2)] = new b(o.data)), delete t[e];
                    }
                    return (
                      (t[e.slice(2)] = "NOT_AVAILABLE_ON_API"), delete t[e]
                    );
                  }),
                (e = t)
              );
              var t;
            },
            getAll: function () {
              return e;
            },
            get: function (n) {
              return e[n];
            },
          };
        }
        (b.prototype.start = function (e) {
          return this.__store[e][0];
        }),
          (b.prototype.end = function (e) {
            return this.__store[e][1];
          });
        var x = function () {
            return (
              (x =
                Object.assign ||
                function (e) {
                  for (var n, t = 1, r = arguments.length; t < r; t++)
                    for (var a in (n = arguments[t]))
                      Object.prototype.hasOwnProperty.call(n, a) &&
                        (e[a] = n[a]);
                  return e;
                }),
              x.apply(this, arguments)
            );
          },
          C = [
            "fullscreenChange",
            "videoAdaptivenessChange",
            "videoQualityChange",
            "error",
            "statusChange",
            "captionVisibilityChange",
            "captionLanguageChange",
          ];
        function _(e, n, t) {
          var r = {
            totalPlayed: 0,
            abrStatus: !0,
            totalCovered: 0,
            captionVisibility: !1,
            totalCoveredArray: [],
            _totalPlayedCountLastPos: 0,
            availableQualities: [],
            availableCaptions: [],
            metaData: void 0,
          };
          return (
            (function (e, n) {
              e.addEventListener("timeupdate", function () {
                var t = Math.floor(e.currentTime);
                t === n._totalPlayedCountLastPos + 1
                  ? (n.totalPlayed++,
                    (n._totalPlayedCountLastPos = t),
                    n.totalCoveredArray[t]
                      ? n.totalCoveredArray[t]++
                      : (n.totalCovered++, (n.totalCoveredArray[t] = 1)))
                  : t !== n._totalPlayedCountLastPos &&
                    (n._totalPlayedCountLastPos = t);
              });
            })(e, r),
            (function (e, n) {
              e.on("availableCaptionsWithActiveStatus", function (e) {
                n.availableCaptions = e[0];
              }),
                e.on("captionLanguageChange", function (e) {
                  n.availableCaptions = n.availableCaptions.map(function (
                    n,
                    t
                  ) {
                    return x(x({}, n), { active: String(t) === e[0] });
                  });
                }),
                e.on("availableQualities", function (e) {
                  n.availableQualities = e[0];
                }),
                e.on("_metaDataLoadSuccess", function (e) {
                  n.metaData = e[0];
                }),
                e.on("abrStatusChange", function (e) {
                  n.abrStatus = !!e[0];
                }),
                e.on("captionVisibilityChange", function (e) {
                  n.captionVisibility = e[0];
                }),
                e.on("abrStatusChange", function (n) {
                  e.emit("videoAdaptivenessChange", n);
                }),
                e.on("setActiveQuality", function (n) {
                  e.emit("qualityChange", n);
                }),
                e.on("qualityChange", function (t) {
                  e.emit("videoQualityChange", t),
                    n.availableQualities.forEach(function (e, n) {
                      e.active = n === t[0];
                    });
                });
            })(n, r),
            {
              getTotalPlayed: function () {
                return Promise.resolve(r.totalPlayed);
              },
              getMetaData: function () {
                return new Promise(function (e) {
                  if (r.metaData) return e(r.metaData);
                  n.on("_metaDataLoadSuccess", function (n) {
                    return e(n[0]);
                  });
                });
              },
              getTotalCovered: function () {
                return Promise.resolve(r.totalCovered);
              },
              getTotalCoveredArray: function () {
                return Promise.resolve(r.totalCoveredArray);
              },
              setFullscreen: function (e) {
                return t("@vdo/eventBus", {
                  eventBusEvent: {
                    eventName: "requestFullscreenChange",
                    value: e,
                  },
                });
              },
              updatePlayerConfig: function (e) {
                return t("@vdo/eventBus", {
                  eventBusEvent: { eventName: "updatePlayerConfig", value: e },
                });
              },
              hideCaptions: function () {
                return t("@vdo/eventBus", {
                  eventBusEvent: {
                    eventName: "setCaptionVisibility",
                    value: !1,
                  },
                });
              },
              setCaptionLanguage: function (e) {
                return t("@vdo/eventBus", {
                  eventBusEvent: { eventName: "setCaptionLang", value: e },
                });
              },
              getCaptionLanguages: function () {
                return Promise.resolve({
                  visible: r.captionVisibility,
                  languages: r.availableCaptions,
                });
              },
              enableAdaptiveVideo: function () {
                return t("@vdo/eventBus", {
                  eventBusEvent: { eventName: "selectQualityTrack", value: -1 },
                });
              },
              getVideoQualities: function () {
                return Promise.resolve({
                  adaptive: r.abrStatus,
                  qualities: r.availableQualities,
                });
              },
              setVideoQuality: function (e) {
                return r.availableQualities.find(function (n) {
                  var t = n.id;
                  return e === t;
                })
                  ? t("@vdo/eventBus", {
                      eventBusEvent: {
                        eventName: "selectQualityTrack",
                        value: e,
                      },
                    })
                  : Promise.reject(
                      new Error(
                        "[Vdocipher] (API) no desired video track found with trackId " +
                          e
                      )
                    );
              },
              addEventListener: function (e, t) {
                if ("function" != typeof t)
                  throw new Error(
                    "[Vdocipher] (API) handler must be type of function, but passed ".concat(
                      typeof t
                    )
                  );
                if (!C.includes(e))
                  throw new Error(
                    '[Vdocipher] (API) provided event is not supported by the method\n if it\'s HTML5 Video Element dom event please use "player.video.addEventListener"'
                  );
                return n.on(e, function (e) {
                  return Array.isArray(e) ? t(e[0]) : t(e);
                });
              },
              loadVideo: function (e) {
                var n = e.otp,
                  r = e.playbackInfo;
                return t("@vdo/eventBus", {
                  eventBusEvent: {
                    eventName: "loadVideo",
                    value: { otp: n, playbackInfo: r },
                  },
                });
              },
              _setChapters: function (n) {
                return t("@vdo/eventBus", {
                  eventBusEvent: {
                    eventName: "setChapters",
                    value: [n, e.duration],
                  },
                });
              },
            }
          );
        }
        var E = function () {
          return (
            (E =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            E.apply(this, arguments)
          );
        };
        function k(e) {
          var n = new w(),
            t = new y.Z(),
            r = document.createElement("video"),
            a = { isHandshakeCompleted: !1, sendMessageBuffer: [] };
          !(function (e, n) {
            var t;
            ((t = document.createElement("style")).type = "text/css"),
              (t.id = "style-element"),
              (t.innerHTML =
                "\n    Iframe.vdo-semi-fullscreen{\n        position: fixed !important;\n        top: 0 !important;\n        left: 0 !important;\n        width: 100vw !important;\n        height: 100vh !important;\n        max-width: none !important;\n        max-height: none !important;\n        z-index: 9999 !important;\n    }\n    "),
              document.head.appendChild(t),
              n.on("setSemiFullscreen", function (n) {
                n[0]
                  ? e.classList.add("vdo-semi-fullscreen")
                  : e.classList.remove("vdo-semi-fullscreen");
              });
          })(e, t);
          var o = (function (e) {
              return e instanceof HTMLIFrameElement
                ? { operatingMode: "AGENT", element: e, type: "iframe" }
                : { operatingMode: "AGENT", element: e, type: "webcomponent" };
            })(e),
            i = g(o);
          i.handshake.onSuccess(function () {
            (a.isHandshakeCompleted = !0),
              a.sendMessageBuffer.forEach(function (e) {
                return i.send.apply(i, e);
              });
          }),
            i.handshake.onReady(function () {
              return i.handshake.request();
            }),
            i.handshake.request(),
            i.on("@vdo/element/event", function (e) {
              r.dispatchEvent(new CustomEvent(e.elementEventName));
            }),
            i.on("@vdo/updateState", function (e) {
              n.update(e.videoState);
            }),
            i.onStateUpdate(n.update),
            i.on("@vdo/eventBus", function (e) {
              e.eventBusEvent &&
                t.emit(e.eventBusEvent.eventName, e.eventBusEvent.value);
            });
          var l = (function (e) {
            var n = e.videoEl,
              t = e.videoState,
              r = e.sendMessage,
              a = ["addEventListener", "removeEventListener"];
            return new Proxy(n, {
              get: function (e, o) {
                if ("target" === o) return e;
                var i = n[o];
                if (i instanceof Function)
                  return function () {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    return a.includes(o)
                      ? (i.apply(n, e),
                        r("@vdo/element/event", { elementEventName: o }))
                      : r("@vdo/element/method", {
                          elementMethod: { methodName: o, args: e },
                        });
                  };
                var l = t.get(o);
                return void 0 === l ? i : l;
              },
              set: function (e, t, a) {
                return (
                  r("@vdo/element/property", {
                    elementProperty: { name: t, value: a },
                  }),
                  (n[t] = a),
                  !0
                );
              },
            });
          })({ videoEl: r, videoState: n, sendMessage: i.send });
          return { video: l, api: E({}, new _(l, t, i.send)) };
        }
        var S = new Map();
        function T(e) {
          if (S.has(e))
            throw new Error(
              "[VdoCipher] (API) Cannot create multiple instances from the same Iframe\n use VdoPlayer.getInstance method to get the instance of already initiated iframe"
            );
          return T.getInstance(e);
        }
        (T.getInstance = function (e) {
          if (
            !(function (e) {
              return e && "IFRAME" === e.nodeName;
            })(e) &&
            !(function (e) {
              return e && "VDOCIPHER-PLAYER" === e.nodeName;
            })(e)
          )
            throw new Error(
              "[VdoCipher] (API) element as HTMLIframeElement/Vdocipher-player is a required parameter"
            );
          if (S.has(e)) return S.get(e);
          var n = new k(e);
          return S.set(e, n), n;
        }),
          "function" == typeof window.onVdoPlayerV2APIReady &&
            window.onVdoPlayerV2APIReady(),
          (T.attachAPI = function (e, n, t) {
            if (null !== window.parent) {
              var r = [],
                a = [],
                o = g(t);
              n.on("*", function (e) {
                for (var n = [], t = 1; t < arguments.length; t++)
                  n[t - 1] = arguments[t];
                a.push({ eventBusEvent: { name: e, arg: n } }),
                  o.isConnected() &&
                    o.send("@vdo/eventBus", {
                      eventBusEvent: { eventName: e, value: n },
                    });
              });
              var i = function () {
                  return o.send("@vdo/updateState", { videoState: l(e) });
                },
                c = function (e) {
                  o.send("@vdo/element/event", { elementEventName: e });
                };
              !(function (e, n) {
                s.forEach(function (t) {
                  e.addEventListener(t, n);
                });
              })(e, function (e) {
                var n = e.type;
                u.includes(n) && r.push(n), o.isConnected() && (i(), c(n));
              }),
                o.handshake.ready(),
                o.handshake.onSuccess(function () {
                  n.emit("apiConnected", !0),
                    i().then(function () {
                      r.forEach(c),
                        a.forEach(function (e) {
                          var n = e.eventBusEvent,
                            t = n.name,
                            r = n.arg;
                          return o.send("@vdo/eventBus", {
                            eventBusEvent: { eventName: t, value: r },
                          });
                        });
                    });
                }),
                o.on("@vdo/getState", function () {
                  return i();
                }),
                o.on("@vdo/element/event", function (n) {
                  s.includes(n.elementEventName) ||
                    e.addEventListener(n.elementEventName, function () {
                      i(),
                        o.send("@vdo/element/event", {
                          elementEventName: n.elementEventName,
                        });
                    });
                }),
                o.on("@vdo/element/method", function (n) {
                  var t;
                  if (
                    n.elementMethod &&
                    n.elementMethod.methodName in HTMLMediaElement.prototype
                  ) {
                    var r = e[n.elementMethod.methodName];
                    return Promise.resolve(
                      r.call.apply(
                        r,
                        (function (e, n, t) {
                          if (t || 2 === arguments.length)
                            for (var r, a = 0, o = n.length; a < o; a++)
                              (!r && a in n) ||
                                (r || (r = Array.prototype.slice.call(n, 0, a)),
                                (r[a] = n[a]));
                          return e.concat(r || Array.prototype.slice.call(n));
                        })(
                          [e],
                          null === (t = n.elementMethod) || void 0 === t
                            ? void 0
                            : t.args,
                          !1
                        )
                      )
                    );
                  }
                }),
                o.on("@vdo/element/property", function (n) {
                  var t;
                  (null === (t = n.elementProperty) || void 0 === t
                    ? void 0
                    : t.name) &&
                    n.elementProperty.name in HTMLMediaElement.prototype &&
                    (e[n.elementProperty.name] = n.elementProperty.value);
                }),
                o.on("@vdo/eventBus", function (e) {
                  (null == e ? void 0 : e.eventBusEvent) &&
                    n.emit(e.eventBusEvent.eventName, e.eventBusEvent.value);
                });
            }
          }),
          (window.VdoPlayer = T);
        const A = T;
      },
      134: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => a });
        var r = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var r, a = 0, o = n.length; a < o; a++)
              (!r && a in n) ||
                (r || (r = Array.prototype.slice.call(n, 0, a)), (r[a] = n[a]));
          return e.concat(r || Array.prototype.slice.call(n));
        };
        function a() {
          var e = {};
          return {
            on: function (n, t) {
              return (
                e[n] ? e[n].push(t) : (e[n] = [t]),
                function () {
                  var r = e[n].indexOf(t);
                  r > -1 && e[n].splice(r, 1);
                }
              );
            },
            emit: function (n) {
              for (var t = [], a = 1; a < arguments.length; a++)
                t[a - 1] = arguments[a];
              var o = e[n],
                i = e["*"];
              o &&
                r([], o, !0).forEach(function (e) {
                  return e.apply(void 0, t);
                }),
                i &&
                  r([], i, !0).forEach(function (e) {
                    return e.apply(void 0, r([n], t, !0));
                  });
            },
          };
        }
      },
      1645: () => {
        "use strict";
        var e, n, t, r;
        Object.assign ||
          Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              if (null == e)
                throw new TypeError("Cannot convert first argument to object");
              for (var n = Object(e), t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r) {
                  r = Object(r);
                  for (
                    var a = Object.keys(Object(r)), o = 0, i = a.length;
                    o < i;
                    o++
                  ) {
                    var l = a[o],
                      s = Object.getOwnPropertyDescriptor(r, l);
                    void 0 !== s && s.enumerable && (n[l] = r[l]);
                  }
                }
              }
              return n;
            },
          }),
          Array.from ||
            (Array.from =
              ((e = Object.prototype.toString),
              (n = function (n) {
                return (
                  "function" == typeof n || "[object Function]" === e.call(n)
                );
              }),
              (t = Math.pow(2, 53) - 1),
              (r = function (e) {
                var n = (function (e) {
                  var n = Number(e);
                  return isNaN(n)
                    ? 0
                    : 0 !== n && isFinite(n)
                    ? (n > 0 ? 1 : -1) * Math.floor(Math.abs(n))
                    : n;
                })(e);
                return Math.min(Math.max(n, 0), t);
              }),
              function (e) {
                var t = this,
                  a = Object(e);
                if (null == e)
                  throw new TypeError(
                    "Array.from requires an array-like object - not null or undefined"
                  );
                var o,
                  i = arguments.length > 1 ? arguments[1] : void 0;
                if (void 0 !== i) {
                  if (!n(i))
                    throw new TypeError(
                      "Array.from: when provided, the second argument must be a function"
                    );
                  arguments.length > 2 && (o = arguments[2]);
                }
                for (
                  var l,
                    s = r(a.length),
                    u = n(t) ? Object(new t(s)) : new Array(s),
                    c = 0;
                  c < s;

                )
                  (l = a[c]),
                    (u[c] = i ? (void 0 === o ? i(l, c) : i.call(o, l, c)) : l),
                    (c += 1);
                return (u.length = s), u;
              })),
          (Array.prototype.find =
            Array.prototype.find ||
            function (e) {
              if (null === this)
                throw new TypeError(
                  "Array.prototype.find called on null or undefined"
                );
              if ("function" != typeof e)
                throw new TypeError("callback must be a function");
              for (
                var n = Object(this),
                  t = n.length >>> 0,
                  r = arguments[1],
                  a = 0;
                a < t;
                a++
              ) {
                var o = n[a];
                if (e.call(r, o, a, n)) return o;
              }
            }),
          Array.prototype.flat ||
            (Array.prototype.flat =
              Array.prototype.flat ||
              function (e) {
                void 0 === e && (e = 1);
                var n = function (e, t) {
                  return t < 1
                    ? e.slice()
                    : e.reduce(function (e, r) {
                        return e.concat(Array.isArray(r) ? n(r, t - 1) : r);
                      }, []);
                };
                return n(this, e);
              });
      },
      7609: (e, n, t) => {
        var r = t(7425).default;
        function a() {
          "use strict";
          (e.exports = a =
            function () {
              return n;
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
          var n = {},
            t = Object.prototype,
            o = t.hasOwnProperty,
            i =
              Object.defineProperty ||
              function (e, n, t) {
                e[n] = t.value;
              },
            l = "function" == typeof Symbol ? Symbol : {},
            s = l.iterator || "@@iterator",
            u = l.asyncIterator || "@@asyncIterator",
            c = l.toStringTag || "@@toStringTag";
          function d(e, n, t) {
            return (
              Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[n]
            );
          }
          try {
            d({}, "");
          } catch (e) {
            d = function (e, n, t) {
              return (e[n] = t);
            };
          }
          function p(e, n, t, r) {
            var a = n && n.prototype instanceof h ? n : h,
              o = Object.create(a.prototype),
              l = new A(r || []);
            return i(o, "_invoke", { value: E(e, t, l) }), o;
          }
          function f(e, n, t) {
            try {
              return { type: "normal", arg: e.call(n, t) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          n.wrap = p;
          var v = {};
          function h() {}
          function m() {}
          function g() {}
          var y = {};
          d(y, s, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            w = b && b(b(P([])));
          w && w !== t && o.call(w, s) && (y = w);
          var x = (g.prototype = h.prototype = Object.create(y));
          function C(e) {
            ["next", "throw", "return"].forEach(function (n) {
              d(e, n, function (e) {
                return this._invoke(n, e);
              });
            });
          }
          function _(e, n) {
            function t(a, i, l, s) {
              var u = f(e[a], e, i);
              if ("throw" !== u.type) {
                var c = u.arg,
                  d = c.value;
                return d && "object" == r(d) && o.call(d, "__await")
                  ? n.resolve(d.__await).then(
                      function (e) {
                        t("next", e, l, s);
                      },
                      function (e) {
                        t("throw", e, l, s);
                      }
                    )
                  : n.resolve(d).then(
                      function (e) {
                        (c.value = e), l(c);
                      },
                      function (e) {
                        return t("throw", e, l, s);
                      }
                    );
              }
              s(u.arg);
            }
            var a;
            i(this, "_invoke", {
              value: function (e, r) {
                function o() {
                  return new n(function (n, a) {
                    t(e, r, n, a);
                  });
                }
                return (a = a ? a.then(o, o) : o());
              },
            });
          }
          function E(e, n, t) {
            var r = "suspendedStart";
            return function (a, o) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === a) throw o;
                return { value: void 0, done: !0 };
              }
              for (t.method = a, t.arg = o; ; ) {
                var i = t.delegate;
                if (i) {
                  var l = k(i, t);
                  if (l) {
                    if (l === v) continue;
                    return l;
                  }
                }
                if ("next" === t.method) t.sent = t._sent = t.arg;
                else if ("throw" === t.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), t.arg);
                  t.dispatchException(t.arg);
                } else "return" === t.method && t.abrupt("return", t.arg);
                r = "executing";
                var s = f(e, n, t);
                if ("normal" === s.type) {
                  if (
                    ((r = t.done ? "completed" : "suspendedYield"), s.arg === v)
                  )
                    continue;
                  return { value: s.arg, done: t.done };
                }
                "throw" === s.type &&
                  ((r = "completed"), (t.method = "throw"), (t.arg = s.arg));
              }
            };
          }
          function k(e, n) {
            var t = e.iterator[n.method];
            if (void 0 === t) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = void 0),
                  k(e, n),
                  "throw" === n.method)
                )
                  return v;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return v;
            }
            var r = f(t, e.iterator, n.arg);
            if ("throw" === r.type)
              return (
                (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), v
              );
            var a = r.arg;
            return a
              ? a.done
                ? ((n[e.resultName] = a.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method &&
                    ((n.method = "next"), (n.arg = void 0)),
                  (n.delegate = null),
                  v)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                v);
          }
          function S(e) {
            var n = { tryLoc: e[0] };
            1 in e && (n.catchLoc = e[1]),
              2 in e && ((n.finallyLoc = e[2]), (n.afterLoc = e[3])),
              this.tryEntries.push(n);
          }
          function T(e) {
            var n = e.completion || {};
            (n.type = "normal"), delete n.arg, (e.completion = n);
          }
          function A(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(S, this),
              this.reset(!0);
          }
          function P(e) {
            if (e) {
              var n = e[s];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var t = -1,
                  r = function n() {
                    for (; ++t < e.length; )
                      if (o.call(e, t))
                        return (n.value = e[t]), (n.done = !1), n;
                    return (n.value = void 0), (n.done = !0), n;
                  };
                return (r.next = r);
              }
            }
            return { next: N };
          }
          function N() {
            return { value: void 0, done: !0 };
          }
          return (
            (m.prototype = g),
            i(x, "constructor", { value: g, configurable: !0 }),
            i(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = d(g, c, "GeneratorFunction")),
            (n.isGeneratorFunction = function (e) {
              var n = "function" == typeof e && e.constructor;
              return (
                !!n &&
                (n === m || "GeneratorFunction" === (n.displayName || n.name))
              );
            }),
            (n.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, g)
                  : ((e.__proto__ = g), d(e, c, "GeneratorFunction")),
                (e.prototype = Object.create(x)),
                e
              );
            }),
            (n.awrap = function (e) {
              return { __await: e };
            }),
            C(_.prototype),
            d(_.prototype, u, function () {
              return this;
            }),
            (n.AsyncIterator = _),
            (n.async = function (e, t, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new _(p(e, t, r, a), o);
              return n.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            C(x),
            d(x, c, "Generator"),
            d(x, s, function () {
              return this;
            }),
            d(x, "toString", function () {
              return "[object Generator]";
            }),
            (n.keys = function (e) {
              var n = Object(e),
                t = [];
              for (var r in n) t.push(r);
              return (
                t.reverse(),
                function e() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in n) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (n.values = P),
            (A.prototype = {
              constructor: A,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(T),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      o.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function t(t, r) {
                  return (
                    (i.type = "throw"),
                    (i.arg = e),
                    (n.next = t),
                    r && ((n.method = "next"), (n.arg = void 0)),
                    !!r
                  );
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var a = this.tryEntries[r],
                    i = a.completion;
                  if ("root" === a.tryLoc) return t("end");
                  if (a.tryLoc <= this.prev) {
                    var l = o.call(a, "catchLoc"),
                      s = o.call(a, "finallyLoc");
                    if (l && s) {
                      if (this.prev < a.catchLoc) return t(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return t(a.finallyLoc);
                    } else if (l) {
                      if (this.prev < a.catchLoc) return t(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return t(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (
                    r.tryLoc <= this.prev &&
                    o.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var a = r;
                    break;
                  }
                }
                a &&
                  ("break" === e || "continue" === e) &&
                  a.tryLoc <= n &&
                  n <= a.finallyLoc &&
                  (a = null);
                var i = a ? a.completion : {};
                return (
                  (i.type = e),
                  (i.arg = n),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), v)
                    : this.complete(i)
                );
              },
              complete: function (e, n) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && n && (this.next = n),
                  v
                );
              },
              finish: function (e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var t = this.tryEntries[n];
                  if (t.finallyLoc === e)
                    return this.complete(t.completion, t.afterLoc), T(t), v;
                }
              },
              catch: function (e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var t = this.tryEntries[n];
                  if (t.tryLoc === e) {
                    var r = t.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      T(t);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, t) {
                return (
                  (this.delegate = {
                    iterator: P(e),
                    resultName: n,
                    nextLoc: t,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  v
                );
              },
            }),
            n
          );
        }
        (e.exports = a),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      7425: (e) => {
        function n(t) {
          return (
            (e.exports = n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            n(t)
          );
        }
        (e.exports = n),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      2841: (e, n, t) => {
        var r = t(7609)();
        e.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
    },
    o = {};
  function i(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var t = (o[e] = { exports: {} });
    return a[e].call(t.exports, t, t.exports, i), t.exports;
  }
  (i.m = a),
    (i.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return i.d(n, { a: n }), n;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (t, r) {
      if ((1 & r && (t = this(t)), 8 & r)) return t;
      if ("object" == typeof t && t) {
        if (4 & r && t.__esModule) return t;
        if (16 & r && "function" == typeof t.then) return t;
      }
      var a = Object.create(null);
      i.r(a);
      var o = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var l = 2 & r && t; "object" == typeof l && !~e.indexOf(l); l = n(l))
        Object.getOwnPropertyNames(l).forEach((e) => (o[e] = () => t[e]));
      return (o.default = () => t), i.d(a, o), a;
    }),
    (i.d = (e, n) => {
      for (var t in n)
        i.o(n, t) &&
          !i.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((n, t) => (i.f[t](e, n), n), []))),
    (i.u = (e) => ({ 39: "shaka-lib", 813: "hls.js" }[e] + ".js")),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t = {}),
    (r = "@vdocipher/wrapper:"),
    (i.l = (e, n, a, o) => {
      if (t[e]) t[e].push(n);
      else {
        var l, s;
        if (void 0 !== a)
          for (
            var u = document.getElementsByTagName("script"), c = 0;
            c < u.length;
            c++
          ) {
            var d = u[c];
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == r + a
            ) {
              l = d;
              break;
            }
          }
        l ||
          ((s = !0),
          ((l = document.createElement("script")).charset = "utf-8"),
          (l.timeout = 120),
          i.nc && l.setAttribute("nonce", i.nc),
          l.setAttribute("data-webpack", r + a),
          (l.src = e)),
          (t[e] = [n]);
        var p = (n, r) => {
            (l.onerror = l.onload = null), clearTimeout(f);
            var a = t[e];
            if (
              (delete t[e],
              l.parentNode && l.parentNode.removeChild(l),
              a && a.forEach((e) => e(r)),
              n)
            )
              return n(r);
          },
          f = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: l }),
            12e4
          );
        (l.onerror = p.bind(null, l.onerror)),
          (l.onload = p.bind(null, l.onload)),
          s && document.head.appendChild(l);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      i.g.importScripts && (e = i.g.location + "");
      var n = i.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var t = n.getElementsByTagName("script");
        t.length && (e = t[t.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = e);
    })(),
    (() => {
      var e = { 826: 0, 335: 0 };
      i.f.j = (n, t) => {
        var r = i.o(e, n) ? e[n] : void 0;
        if (0 !== r)
          if (r) t.push(r[2]);
          else {
            var a = new Promise((t, a) => (r = e[n] = [t, a]));
            t.push((r[2] = a));
            var o = i.p + i.u(n),
              l = new Error();
            i.l(
              o,
              (t) => {
                if (i.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0), r)) {
                  var a = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  (l.message =
                    "Loading chunk " + n + " failed.\n(" + a + ": " + o + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = a),
                    (l.request = o),
                    r[1](l);
                }
              },
              "chunk-" + n,
              n
            );
          }
      };
      var n = (n, t) => {
          var r,
            a,
            [o, l, s] = t,
            u = 0;
          if (o.some((n) => 0 !== e[n])) {
            for (r in l) i.o(l, r) && (i.m[r] = l[r]);
            s && s(i);
          }
          for (n && n(t); u < o.length; u++)
            (a = o[u]), i.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        t = (self.webpackChunk_vdocipher_wrapper =
          self.webpackChunk_vdocipher_wrapper || []);
      t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
    })(),
    (() => {
      "use strict";
      var e = {};
      i.r(e),
        i.d(e, {
          JsonPatchError: () => Ur,
          _areEquals: () => Yr,
          applyOperation: () => Wr,
          applyPatch: () => Qr,
          applyReducer: () => qr,
          deepClone: () => jr,
          getValueByPointer: () => Gr,
          validate: () => Jr,
          validator: () => Kr,
        });
      var n,
        t,
        r,
        a = {};
      i.r(a),
        i.d(a, {
          compare: () => aa,
          generate: () => ta,
          observe: () => na,
          unobserve: () => ea,
        }),
        (window.vdoErrorHandler =
          ((n = 0),
          (t = []),
          (r = []),
          (window.onerror = function (e, a, o, i, l) {
            var s = {
                message: "string" == typeof e && e.length > 0 ? e : "NA",
                source: a || "NA",
                lineno: o,
                colno: i,
                occurredIndex: n,
                count: 1,
                stack: (null == l ? void 0 : l.stack) || "NA",
                error: l instanceof Error ? l.toString() : "NA",
              },
              u = (function (e) {
                return t.findIndex(function (n) {
                  return (
                    n.message === e.message &&
                    n.source === e.source &&
                    n.lineno === e.lineno &&
                    n.colno === e.colno
                  );
                });
              })(s);
            -1 === u ? (t.push(s), (n += 1)) : (t[u].count = t[u].count + 1),
              r.forEach(function (e) {
                return e(s, t);
              });
          }),
          {
            stack: t,
            hasError: function () {
              return Boolean(t.length);
            },
            onError: function (e) {
              "function" == typeof e && r.push(e);
            },
            clear: function () {
              return (t.length = 0);
            },
          })),
        i(1645);
      var o,
        l,
        s,
        u,
        c,
        d,
        p = {},
        f = [],
        v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function h(e, n) {
        for (var t in n) e[t] = n[t];
        return e;
      }
      function m(e) {
        var n = e.parentNode;
        n && n.removeChild(e);
      }
      function g(e, n, t) {
        var r,
          a,
          i,
          l = {};
        for (i in n)
          "key" == i ? (r = n[i]) : "ref" == i ? (a = n[i]) : (l[i] = n[i]);
        if (
          (arguments.length > 2 &&
            (l.children = arguments.length > 3 ? o.call(arguments, 2) : t),
          "function" == typeof e && null != e.defaultProps)
        )
          for (i in e.defaultProps)
            void 0 === l[i] && (l[i] = e.defaultProps[i]);
        return y(e, l, r, a, null);
      }
      function y(e, n, t, r, a) {
        var o = {
          type: e,
          props: n,
          key: t,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: null == a ? ++s : a,
        };
        return null == a && null != l.vnode && l.vnode(o), o;
      }
      function b(e) {
        return e.children;
      }
      function w(e, n) {
        (this.props = e), (this.context = n);
      }
      function x(e, n) {
        if (null == n) return e.__ ? x(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var t; n < e.__k.length; n++)
          if (null != (t = e.__k[n]) && null != t.__e) return t.__e;
        return "function" == typeof e.type ? x(e) : null;
      }
      function C(e) {
        var n, t;
        if (null != (e = e.__) && null != e.__c) {
          for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
            if (null != (t = e.__k[n]) && null != t.__e) {
              e.__e = e.__c.base = t.__e;
              break;
            }
          return C(e);
        }
      }
      function _(e) {
        ((!e.__d && (e.__d = !0) && u.push(e) && !E.__r++) ||
          c !== l.debounceRendering) &&
          ((c = l.debounceRendering) || setTimeout)(E);
      }
      function E() {
        for (var e; (E.__r = u.length); )
          (e = u.sort(function (e, n) {
            return e.__v.__b - n.__v.__b;
          })),
            (u = []),
            e.some(function (e) {
              var n, t, r, a, o, i;
              e.__d &&
                ((o = (a = (n = e).__v).__e),
                (i = n.__P) &&
                  ((t = []),
                  ((r = h({}, a)).__v = a.__v + 1),
                  O(
                    i,
                    a,
                    r,
                    n.__n,
                    void 0 !== i.ownerSVGElement,
                    null != a.__h ? [o] : null,
                    t,
                    null == o ? x(a) : o,
                    a.__h
                  ),
                  I(t, a),
                  a.__e != o && C(a)));
            });
      }
      function k(e, n, t, r, a, o, i, l, s, u) {
        var c,
          d,
          v,
          h,
          m,
          g,
          w,
          C = (r && r.__k) || f,
          _ = C.length;
        for (t.__k = [], c = 0; c < n.length; c++)
          if (
            null !=
            (h = t.__k[c] =
              null == (h = n[c]) || "boolean" == typeof h
                ? null
                : "string" == typeof h ||
                  "number" == typeof h ||
                  "bigint" == typeof h
                ? y(null, h, null, null, h)
                : Array.isArray(h)
                ? y(b, { children: h }, null, null, null)
                : h.__b > 0
                ? y(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v)
                : h)
          ) {
            if (
              ((h.__ = t),
              (h.__b = t.__b + 1),
              null === (v = C[c]) || (v && h.key == v.key && h.type === v.type))
            )
              C[c] = void 0;
            else
              for (d = 0; d < _; d++) {
                if ((v = C[d]) && h.key == v.key && h.type === v.type) {
                  C[d] = void 0;
                  break;
                }
                v = null;
              }
            O(e, h, (v = v || p), a, o, i, l, s, u),
              (m = h.__e),
              (d = h.ref) &&
                v.ref != d &&
                (w || (w = []),
                v.ref && w.push(v.ref, null, h),
                w.push(d, h.__c || m, h)),
              null != m
                ? (null == g && (g = m),
                  "function" == typeof h.type && h.__k === v.__k
                    ? (h.__d = s = S(h, s, e))
                    : (s = T(e, h, v, C, m, s)),
                  "function" == typeof t.type && (t.__d = s))
                : s && v.__e == s && s.parentNode != e && (s = x(v));
          }
        for (t.__e = g, c = _; c--; ) null != C[c] && D(C[c], C[c]);
        if (w) for (c = 0; c < w.length; c++) V(w[c], w[++c], w[++c]);
      }
      function S(e, n, t) {
        for (var r, a = e.__k, o = 0; a && o < a.length; o++)
          (r = a[o]) &&
            ((r.__ = e),
            (n =
              "function" == typeof r.type
                ? S(r, n, t)
                : T(t, r, r, a, r.__e, n)));
        return n;
      }
      function T(e, n, t, r, a, o) {
        var i, l, s;
        if (void 0 !== n.__d) (i = n.__d), (n.__d = void 0);
        else if (null == t || a != o || null == a.parentNode)
          e: if (null == o || o.parentNode !== e) e.appendChild(a), (i = null);
          else {
            for (l = o, s = 0; (l = l.nextSibling) && s < r.length; s += 1)
              if (l == a) break e;
            e.insertBefore(a, o), (i = o);
          }
        return void 0 !== i ? i : a.nextSibling;
      }
      function A(e, n, t) {
        "-" === n[0]
          ? e.setProperty(n, t)
          : (e[n] =
              null == t
                ? ""
                : "number" != typeof t || v.test(n)
                ? t
                : t + "px");
      }
      function P(e, n, t, r, a) {
        var o;
        e: if ("style" === n)
          if ("string" == typeof t) e.style.cssText = t;
          else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
              for (n in r) (t && n in t) || A(e.style, n, "");
            if (t) for (n in t) (r && t[n] === r[n]) || A(e.style, n, t[n]);
          }
        else if ("o" === n[0] && "n" === n[1])
          (o = n !== (n = n.replace(/Capture$/, ""))),
            (n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2)),
            e.l || (e.l = {}),
            (e.l[n + o] = t),
            t
              ? r || e.addEventListener(n, o ? L : N, o)
              : e.removeEventListener(n, o ? L : N, o);
        else if ("dangerouslySetInnerHTML" !== n) {
          if (a) n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "href" !== n &&
            "list" !== n &&
            "form" !== n &&
            "tabIndex" !== n &&
            "download" !== n &&
            n in e
          )
            try {
              e[n] = null == t ? "" : t;
              break e;
            } catch (e) {}
          "function" == typeof t ||
            (null == t || (!1 === t && -1 == n.indexOf("-"))
              ? e.removeAttribute(n)
              : e.setAttribute(n, t));
        }
      }
      function N(e) {
        this.l[e.type + !1](l.event ? l.event(e) : e);
      }
      function L(e) {
        this.l[e.type + !0](l.event ? l.event(e) : e);
      }
      function O(e, n, t, r, a, o, i, s, u) {
        var c,
          d,
          p,
          f,
          v,
          m,
          g,
          y,
          x,
          C,
          _,
          E,
          S,
          T,
          A,
          P = n.type;
        if (void 0 !== n.constructor) return null;
        null != t.__h &&
          ((u = t.__h), (s = n.__e = t.__e), (n.__h = null), (o = [s])),
          (c = l.__b) && c(n);
        try {
          e: if ("function" == typeof P) {
            if (
              ((y = n.props),
              (x = (c = P.contextType) && r[c.__c]),
              (C = c ? (x ? x.props.value : c.__) : r),
              t.__c
                ? (g = (d = n.__c = t.__c).__ = d.__E)
                : ("prototype" in P && P.prototype.render
                    ? (n.__c = d = new P(y, C))
                    : ((n.__c = d = new w(y, C)),
                      (d.constructor = P),
                      (d.render = B)),
                  x && x.sub(d),
                  (d.props = y),
                  d.state || (d.state = {}),
                  (d.context = C),
                  (d.__n = r),
                  (p = d.__d = !0),
                  (d.__h = []),
                  (d._sb = [])),
              null == d.__s && (d.__s = d.state),
              null != P.getDerivedStateFromProps &&
                (d.__s == d.state && (d.__s = h({}, d.__s)),
                h(d.__s, P.getDerivedStateFromProps(y, d.__s))),
              (f = d.props),
              (v = d.state),
              p)
            )
              null == P.getDerivedStateFromProps &&
                null != d.componentWillMount &&
                d.componentWillMount(),
                null != d.componentDidMount && d.__h.push(d.componentDidMount);
            else {
              if (
                (null == P.getDerivedStateFromProps &&
                  y !== f &&
                  null != d.componentWillReceiveProps &&
                  d.componentWillReceiveProps(y, C),
                (!d.__e &&
                  null != d.shouldComponentUpdate &&
                  !1 === d.shouldComponentUpdate(y, d.__s, C)) ||
                  n.__v === t.__v)
              ) {
                for (
                  d.props = y,
                    d.state = d.__s,
                    n.__v !== t.__v && (d.__d = !1),
                    d.__v = n,
                    n.__e = t.__e,
                    n.__k = t.__k,
                    n.__k.forEach(function (e) {
                      e && (e.__ = n);
                    }),
                    _ = 0;
                  _ < d._sb.length;
                  _++
                )
                  d.__h.push(d._sb[_]);
                (d._sb = []), d.__h.length && i.push(d);
                break e;
              }
              null != d.componentWillUpdate &&
                d.componentWillUpdate(y, d.__s, C),
                null != d.componentDidUpdate &&
                  d.__h.push(function () {
                    d.componentDidUpdate(f, v, m);
                  });
            }
            if (
              ((d.context = C),
              (d.props = y),
              (d.__v = n),
              (d.__P = e),
              (E = l.__r),
              (S = 0),
              "prototype" in P && P.prototype.render)
            ) {
              for (
                d.state = d.__s,
                  d.__d = !1,
                  E && E(n),
                  c = d.render(d.props, d.state, d.context),
                  T = 0;
                T < d._sb.length;
                T++
              )
                d.__h.push(d._sb[T]);
              d._sb = [];
            } else
              do {
                (d.__d = !1),
                  E && E(n),
                  (c = d.render(d.props, d.state, d.context)),
                  (d.state = d.__s);
              } while (d.__d && ++S < 25);
            (d.state = d.__s),
              null != d.getChildContext &&
                (r = h(h({}, r), d.getChildContext())),
              p ||
                null == d.getSnapshotBeforeUpdate ||
                (m = d.getSnapshotBeforeUpdate(f, v)),
              (A =
                null != c && c.type === b && null == c.key
                  ? c.props.children
                  : c),
              k(e, Array.isArray(A) ? A : [A], n, t, r, a, o, i, s, u),
              (d.base = n.__e),
              (n.__h = null),
              d.__h.length && i.push(d),
              g && (d.__E = d.__ = null),
              (d.__e = !1);
          } else
            null == o && n.__v === t.__v
              ? ((n.__k = t.__k), (n.__e = t.__e))
              : (n.__e = R(t.__e, n, t, r, a, o, i, u));
          (c = l.diffed) && c(n);
        } catch (e) {
          (n.__v = null),
            (u || null != o) &&
              ((n.__e = s), (n.__h = !!u), (o[o.indexOf(s)] = null)),
            l.__e(e, n, t);
        }
      }
      function I(e, n) {
        l.__c && l.__c(n, e),
          e.some(function (n) {
            try {
              (e = n.__h),
                (n.__h = []),
                e.some(function (e) {
                  e.call(n);
                });
            } catch (e) {
              l.__e(e, n.__v);
            }
          });
      }
      function R(e, n, t, r, a, i, l, s) {
        var u,
          c,
          d,
          f = t.props,
          v = n.props,
          h = n.type,
          g = 0;
        if (("svg" === h && (a = !0), null != i))
          for (; g < i.length; g++)
            if (
              (u = i[g]) &&
              "setAttribute" in u == !!h &&
              (h ? u.localName === h : 3 === u.nodeType)
            ) {
              (e = u), (i[g] = null);
              break;
            }
        if (null == e) {
          if (null === h) return document.createTextNode(v);
          (e = a
            ? document.createElementNS("http://www.w3.org/2000/svg", h)
            : document.createElement(h, v.is && v)),
            (i = null),
            (s = !1);
        }
        if (null === h) f === v || (s && e.data === v) || (e.data = v);
        else {
          if (
            ((i = i && o.call(e.childNodes)),
            (c = (f = t.props || p).dangerouslySetInnerHTML),
            (d = v.dangerouslySetInnerHTML),
            !s)
          ) {
            if (null != i)
              for (f = {}, g = 0; g < e.attributes.length; g++)
                f[e.attributes[g].name] = e.attributes[g].value;
            (d || c) &&
              ((d &&
                ((c && d.__html == c.__html) || d.__html === e.innerHTML)) ||
                (e.innerHTML = (d && d.__html) || ""));
          }
          if (
            ((function (e, n, t, r, a) {
              var o;
              for (o in t)
                "children" === o ||
                  "key" === o ||
                  o in n ||
                  P(e, o, null, t[o], r);
              for (o in n)
                (a && "function" != typeof n[o]) ||
                  "children" === o ||
                  "key" === o ||
                  "value" === o ||
                  "checked" === o ||
                  t[o] === n[o] ||
                  P(e, o, n[o], t[o], r);
            })(e, v, f, a, s),
            d)
          )
            n.__k = [];
          else if (
            ((g = n.props.children),
            k(
              e,
              Array.isArray(g) ? g : [g],
              n,
              t,
              r,
              a && "foreignObject" !== h,
              i,
              l,
              i ? i[0] : t.__k && x(t, 0),
              s
            ),
            null != i)
          )
            for (g = i.length; g--; ) null != i[g] && m(i[g]);
          s ||
            ("value" in v &&
              void 0 !== (g = v.value) &&
              (g !== e.value ||
                ("progress" === h && !g) ||
                ("option" === h && g !== f.value)) &&
              P(e, "value", g, f.value, !1),
            "checked" in v &&
              void 0 !== (g = v.checked) &&
              g !== e.checked &&
              P(e, "checked", g, f.checked, !1));
        }
        return e;
      }
      function V(e, n, t) {
        try {
          "function" == typeof e ? e(n) : (e.current = n);
        } catch (e) {
          l.__e(e, t);
        }
      }
      function D(e, n, t) {
        var r, a;
        if (
          (l.unmount && l.unmount(e),
          (r = e.ref) && ((r.current && r.current !== e.__e) || V(r, null, n)),
          null != (r = e.__c))
        ) {
          if (r.componentWillUnmount)
            try {
              r.componentWillUnmount();
            } catch (e) {
              l.__e(e, n);
            }
          (r.base = r.__P = null), (e.__c = void 0);
        }
        if ((r = e.__k))
          for (a = 0; a < r.length; a++)
            r[a] && D(r[a], n, t || "function" != typeof e.type);
        t || null == e.__e || m(e.__e), (e.__ = e.__e = e.__d = void 0);
      }
      function B(e, n, t) {
        return this.constructor(e, t);
      }
      (o = f.slice),
        (l = {
          __e: function (e, n, t, r) {
            for (var a, o, i; (n = n.__); )
              if ((a = n.__c) && !a.__)
                try {
                  if (
                    ((o = a.constructor) &&
                      null != o.getDerivedStateFromError &&
                      (a.setState(o.getDerivedStateFromError(e)), (i = a.__d)),
                    null != a.componentDidCatch &&
                      (a.componentDidCatch(e, r || {}), (i = a.__d)),
                    i)
                  )
                    return (a.__E = a);
                } catch (n) {
                  e = n;
                }
            throw e;
          },
        }),
        (s = 0),
        (w.prototype.setState = function (e, n) {
          var t;
          (t =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = h({}, this.state))),
            "function" == typeof e && (e = e(h({}, t), this.props)),
            e && h(t, e),
            null != e && this.__v && (n && this._sb.push(n), _(this));
        }),
        (w.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), _(this));
        }),
        (w.prototype.render = b),
        (u = []),
        (E.__r = 0),
        (d = 0);
      var M = function (e) {
          if (isNaN(e)) return "0:00";
          var n = new Date(1e3 * e),
            t = function (e) {
              return e < 10 ? "0".concat(e) : e.toString();
            };
          return n.getUTCHours() > 0
            ? ""
                .concat(t(n.getUTCHours()), ":")
                .concat(t(n.getUTCMinutes()), ":")
                .concat(t(n.getUTCSeconds()))
            : "".concat(t(n.getUTCMinutes()), ":").concat(t(n.getUTCSeconds()));
        },
        F = function (e, n, t) {
          var r = document.createElement("style");
          return (
            t && r.setAttribute("data-style-for", t),
            (r.innerHTML = e),
            n.appendChild(r),
            r
          );
        },
        U = {
          allNode: [],
          topLevel: [],
          add: function (e, n) {
            n ? this.topLevel.push(e) : this.allNode.push(e);
          },
          inject: function (e) {
            var n =
              this.allNode.reverse().join("") +
              this.topLevel.reverse().join("");
            F(n, e, "all-import");
          },
        },
        j = function (e, n) {
          return (
            void 0 === n && (n = !1),
            "string" == typeof e ? U.add(e, n) : U.add(e.default, n)
          );
        },
        H = function (e) {
          var n = (function (e) {
            return Boolean(
              e.requestFullscreen ||
                e.webkitRequestFullscreen ||
                e.mozRequestFullScreen ||
                e.msRequestFullscreen
            );
          })(e);
          return n ? "DOM" : "NATIVE";
        },
        z = function (e, n) {
          var t = e.filter(function (e) {
            return e.startTime < n;
          });
          return t.map(function (e, r) {
            return {
              title: e.title,
              start: e.startTime,
              chapterIndex: r,
              end: r + 1 === t.length ? n : t[r + 1].startTime,
            };
          });
        };
      function G(e) {
        var n = document.getElementsByTagName("video");
        Array.from(n).forEach(function (n) {
          n.addEventListener("@vdo/error", function (t) {
            var r = t.detail;
            n.controls = !1;
            var a = r.message || "Please try another browser",
              o = document.createElement("div");
            (o.id = "vdo-ui-error"),
              (o.innerHTML = ""
                .concat(
                  '<div style="display:flex; flex-direction:column; justify-content: center; align-items: center;"><div style="font-size:155%;">Error</div><div style="margin-top:10px">'
                )
                .concat(a, "</div></div></div>")),
              F(
                '#vdo-ui-error {width: 100%; height: 100%;  position: absolute; z-index: var(--layerLevel); top: 0px; left: 0px;background: rgba(0,0,0,0.5); color:white; display:flex; justify-content: center; align-content: center; font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,"Helvetica Neue",sans-serif;}',
                e,
                "error-style"
              ),
              e.appendChild(o);
          });
        });
      }
      var W = "" === document.createElement("div").style.grid,
        Q = "attachShadow" in document.createElement("div"),
        q = (function () {
          try {
            return !0;
          } catch (e) {
            return !1;
          }
        })(),
        K = (function () {
          try {
            return new Function("foo(...params);"), !0;
          } catch (e) {
            return !1;
          }
        })();
      function J() {
        return g(
          "div",
          { className: "vdo-layer" },
          g(
            "div",
            { className: "spinner-container" },
            g("div", { className: "spinner" })
          )
        );
      }
      j(i(9640));
      const Y = {
        play: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick,
            a = void 0 === r ? function () {} : r,
            o = e.className;
          return g(
            "svg",
            {
              className: "controller-icon ".concat(void 0 === o ? "" : o),
              xmlns: "http://www.w3.org/2000/svg",
              fill: t,
              onClick: a,
              viewBox:
                "8 5.8185954093933105 10.145000457763672 12.362810134887695",
            },
            g("path", {
              d: "M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z",
            })
          );
        },
        info: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(-icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick,
            i = void 0 === o ? function () {} : o;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              height: "18px",
              viewBox: "0 0 24 24",
              width: "18px",
              fill: t,
              className: "controller-icon ".concat(a),
              onClick: i,
            },
            g("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
            g("path", {
              d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
            })
          );
        },
        forward: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick;
          return g(
            "svg",
            {
              className: "controller-icon",
              onClick: void 0 === r ? function () {} : r,
              viewBox:
                "4.002568244934082 1.7090809345245361 15.940463066101074 19.28803253173828",
              fill: t,
              xmlns: "http://www.w3.org/2000/svg",
            },
            g("path", {
              d: "m 19.246531,13 c -0.5,0 -0.779388,0.37 -0.849388,0.86 -0.48,3.37 -4.227143,6.493061 -7.877143,5.613061 -2.25,-0.54 -4.2691837,-2.69449 -4.7491837,-4.95449 C 5.3501217,12.508586 5.7140523,10.283139 6.9975191,8.7965647 8.1852229,7.4209074 10.207273,6.5102041 12,6.5102041 v 2.6267347 c 0,0.45 0.54,0.67 0.85,0.35 l 3.79,-3.3328572 c 0.212399,-0.1867797 0.205234,-0.515375 0,-0.71 L 12.85,1.85 C 12.531887,1.5483312 12,1.76 12,2.21 V 5 c -4.94,0 -8.84,4.48 -7.84,9.6 0.6,3.11 2.9,5.5 5.99,6.19 4.83,1.08 9.15,-2.2 9.77,-6.67 C 20.01,13.53 19.846531,13 19.246531,13 Z",
            })
          );
        },
        backward: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick;
          return g(
            "svg",
            {
              className: "controller-icon",
              onClick: void 0 === r ? function () {} : r,
              viewBox:
                "3.749655246734619 1.7090809345245361 16.294004440307617 19.28803253173828",
              fill: t,
              xmlns: "http://www.w3.org/2000/svg",
            },
            g("path", {
              d: "m 4.4616024,13 c 0.5110868,0 0.7966722,0.37 0.8682264,0.86 0.4906446,3.37 4.3208955,6.493061 8.0518522,5.613061 2.299902,-0.54 4.363868,-2.69449 4.854517,-4.95449 0.430023,-2.009985 0.05802,-4.235432 -1.253913,-5.7220063 C 15.76824,7.4209074 13.701342,6.5102041 11.868854,6.5102041 v 2.6267347 c 0,0.45 -0.551974,0.67 -0.868854,0.35 L 7.1259435,6.1540816 c -0.2170946,-0.1867797 -0.2097924,-0.515375 0,-0.71 L 11,1.85 c 0.325171,-0.3016688 0.868854,-0.09 0.868854,0.36 V 5 c 5.049566,0 9.036062,4.48 8.013883,9.6 -0.613307,3.11 -2.964317,5.5 -6.122852,6.19 C 8.8227587,21.87 4.4069459,18.59 3.7731968,14.12 3.6812002,13.53 3.8482955,13 4.4616024,13 Z",
            })
          );
        },
        pause: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick;
          return g(
            "svg",
            {
              className: "controller-icon",
              viewBox: "6 5 12 14",
              fill: t,
              onClick: void 0 === r ? function () {} : r,
              xmlns: "http://www.w3.org/2000/svg",
            },
            g("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
          );
        },
        mute: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "3 3.3375000953674316 18 17.31500244140625",
              onClick: void 0 === r ? function () {} : r,
              className: "controller-icon",
              fill: t,
            },
            g("path", {
              d: "M3.63 3.63c-.39.39-.39 1.02 0 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",
            })
          );
        },
        cast: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick,
            i = void 0 === o ? function () {} : o,
            l = e.isConnected,
            s = void 0 !== l && l;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              width: "24",
              viewBox: "2 4 20 16",
              className: "controller-icon ".concat(a),
              onClick: i,
              fill: t,
            },
            g(
              "path",
              s
                ? {
                    d: "M15 16h3V8H7q1.075.5 1.775.925.7.425 1.5 1.075H16v4h-1Zm0 4v-2h5V6H4v1H2V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20ZM2 20h3q0-1.25-.875-2.125T2 17Zm5 0h2q0-2.925-2.037-4.963Q4.925 13 2 13v2q2.075 0 3.537 1.462Q7 17.925 7 20Zm4 0h2q0-2.275-.863-4.275-.862-2-2.362-3.5t-3.5-2.362Q4.275 9 2 9v2q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.851Q11 18.125 11 20Zm2.15-7Z",
                  }
                : {
                    d: "M4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20h-5v-2h5V6H4v1H2V6q0-.825.588-1.412Q3.175 4 4 4ZM2 20h3q0-1.25-.875-2.125T2 17Zm5 0h2q0-2.925-2.037-4.963Q4.925 13 2 13v2q2.075 0 3.537 1.462Q7 17.925 7 20ZM2 9v2q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.851Q11 18.125 11 20h2q0-2.275-.863-4.275-.862-2-2.362-3.5t-3.5-2.362Q4.275 9 2 9Zm9 4Z",
                  }
            )
          );
        },
        lowVolume: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "controller-icon",
              viewBox: "5 5.4059882164001465 13.5 13.178024291992188",
              onClick: void 0 === r ? function () {} : r,
              fill: t,
            },
            g("path", {
              d: "M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L9 9H6c-.55 0-1 .45-1 1z",
            })
          );
        },
        setting: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.className;
          return g(
            "svg",
            {
              className: void 0 === r ? "controller-icon" : r,
              viewBox:
                "2.2706680297851562 2 19.454246520996094 19.999998092651367",
              xmlns: "http://www.w3.org/2000/svg",
              fill: t,
            },
            g("path", {
              d: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
            })
          );
        },
        close: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(-icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick,
            i = void 0 === o ? function () {} : o;
          return g(
            "svg",
            {
              viewBox: "0 0 20 20",
              fill: t,
              className: "controller-icon ".concat(a),
              onClick: i,
            },
            g("path", {
              d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
              fill: "#fff",
              "fill-rule": "evenodd",
            })
          );
        },
        volume: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick;
          return g(
            "svg",
            {
              className: "controller-icon",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "3 3.538977861404419 18 16.918418884277344",
              onClick: void 0 === r ? function () {} : r,
              fill: t,
            },
            g("path", {
              d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",
            })
          );
        },
        captions: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick,
            a = void 0 === r ? function () {} : r;
          return e.isActive
            ? g(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "controller-icon",
                  viewBox: "3 4 18 16",
                  onClick: a,
                },
                g("path", {
                  fill: t,
                  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z",
                })
              )
            : g(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "controller-icon",
                  viewBox:
                    "1.3899999856948853 2.809999942779541 19.78999900817871 19.80000114440918",
                  onClick: a,
                },
                g("path", {
                  fill: t,
                  d: "M6.83,4H19c1.1,0,2,0.9,2,2v12c0,0.05-0.01,0.1-0.02,0.16l-3.38-3.38C17.84,14.59,18,14.32,18,14v-1h-1.5v0.5h-0.17 l-1.83-1.83V10.5h2V11H18v-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v0.17L6.83,4z M19.78,22.61L17.17,20H5c-1.11,0-2-0.9-2-2V6 c0-0.05,0.02-0.1,0.02-0.15L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M11,13.83L10.17,13H9.5v0.5h-2v-3h0.17L6.4,9.22 C6.16,9.41,6,9.68,6,10v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1V13.83z",
                })
              );
        },
        backArrow: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick;
          return g(
            "svg",
            {
              fill: t,
              onClick: void 0 === o ? function () {} : o,
              className: "controller-icon ".concat(a),
              version: "1.1",
              viewBox: "6 2 11.770000457763672 20",
            },
            g(
              "g",
              null,
              g("polygon", {
                points: "17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12",
              })
            )
          );
        },
        tick: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick;
          return g(
            "svg",
            {
              fill: t,
              onClick: void 0 === o ? function () {} : o,
              className: "controller-icon ".concat(a),
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            g("path", { d: "M0 0h24v24H0z", fill: "none" }),
            g("path", {
              d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
            })
          );
        },
        fullScreen: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick;
          return g(
            "svg",
            {
              version: "1.1",
              className: "controller-icon",
              onClick: void 0 === r ? function () {} : r,
              viewBox: "5 5 14 14",
              fill: t,
            },
            g("path", {
              d: "M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z",
            })
          );
        },
        airPlay: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "1 3 22 19",
              className: "controller-icon",
              fill: t,
              onClick: void 0 === r ? function () {} : r,
            },
            g("path", {
              d: "M8.41 22h7.17c.89 0 1.34-1.08.71-1.71L12.7 16.7c-.39-.39-1.02-.39-1.41 0L7.7 20.29c-.62.63-.18 1.71.71 1.71zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
            })
          );
        },
        chapters: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick,
            a = void 0 === r ? function () {} : r,
            o = e.isActive;
          return void 0 !== o && o
            ? g(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "2 2 20 20",
                  className: "controller-icon",
                  onClick: a,
                  fill: t,
                },
                g("path", { d: "M0 0h24v24H0z", fill: "none" }),
                g("path", {
                  d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z",
                })
              )
            : g(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "2 2 20 20",
                  className: "controller-icon",
                  onClick: a,
                  fill: t,
                },
                g("path", {
                  d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z",
                  fill: t,
                })
              );
        },
        speed: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick,
            i = void 0 === o ? function () {} : o;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              height: "24px",
              viewBox: "0 0 24 24",
              width: "24px",
              className: "controller-icon ".concat(a),
              onClick: i,
              fill: t,
            },
            g("path", { d: "M0 0h24v24H0z", fill: "none" }),
            g("path", {
              d: "M19.46 10a1 1 0 0 0-.07 1 7.55 7.55 0 0 1 .52 1.81 8 8 0 0 1-.69 4.73 1 1 0 0 1-.89.53H5.68a1 1 0 0 1-.89-.54A8 8 0 0 1 13 6.06a7.69 7.69 0 0 1 2.11.56 1 1 0 0 0 1-.07 1 1 0 0 0-.17-1.76A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0 .55-8.89 1 1 0 0 0-1.75-.11z",
            }),
            g("path", { d: "M10.59 12.59a2 2 0 0 0 2.83 2.83l5.66-8.49z" })
          );
        },
        replay: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "4 1 16 20",
              onClick: void 0 === o ? function () {} : o,
              className: "controller-icon ".concat(a),
              fill: t,
            },
            g("path", {
              d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z",
            })
          );
        },
        search: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              height: "24px",
              viewBox: "0 0 24 24",
              width: "24px",
              onClick: void 0 === o ? function () {} : o,
              className: "controller-icon ".concat(a),
              fill: t,
            },
            g("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
            g("path", {
              d: "M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
            })
          );
        },
        captionSearch: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick,
            i = void 0 === o ? function () {} : o;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              "enable-background": "new 0 0 24 24",
              height: "36px",
              viewBox:
                "2 5.996537208557129 19.592498779296875 13.003462791442871",
              width: "36px",
              className: "controller-icon ".concat(a),
              onClick: i,
              fill: t,
            },
            g(
              "g",
              null,
              g("path", {
                d: "M6,9H3C2.45,9,2,8.55,2,8v0c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v0C7,8.55,6.55,9,6,9z M6,12H3c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v0C7,12.45,6.55,12,6,12z M19.88,18.29l-3.12-3.12c-0.86,0.56-1.89,0.88-3,0.82 c-2.37-0.11-4.4-1.96-4.72-4.31C8.6,8.33,11.49,5.5,14.87,6.07c1.95,0.33,3.57,1.85,4,3.78c0.33,1.46,0.01,2.82-0.7,3.9l3.13,3.13 c0.39,0.39,0.39,1.02,0,1.41l0,0C20.91,18.68,20.27,18.68,19.88,18.29z M17,11c0-1.65-1.35-3-3-3s-3,1.35-3,3s1.35,3,3,3 S17,12.65,17,11z M3,19h8c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3c-0.55,0-1,0.45-1,1v0C2,18.55,2.45,19,3,19z",
              })
            )
          );
        },
        quality: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick,
            i = void 0 === o ? function () {} : o;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              height: "24px",
              viewBox: "3 4 18 16",
              width: "24px",
              className: "controller-icon ".concat(a),
              onClick: i,
              fill: t,
            },
            g("path", {
              d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8.75 11c-.41 0-.75-.34-.75-.75V13h-2v1.25c0 .41-.34.75-.75.75S6 14.66 6 14.25v-4.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h2V9.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75zM18 14c0 .55-.45 1-1 1h-.75v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z",
            })
          );
        },
        saveVideoOffline: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.onClick;
          return g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              "enable-background": "new 0 0 24 24",
              fill: t,
              className: "controller-icon",
              onClick: void 0 === r ? function () {} : r,
              viewBox: "4 4 16 16",
            },
            g(
              "g",
              null,
              g("path", {
                d: "M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z",
              })
            )
          );
        },
        remove: function (e) {
          var n = e.color,
            t = void 0 === n ? "var(--icon-color)" : n,
            r = e.className,
            a = void 0 === r ? " " : r,
            o = e.onClick;
          return g(
            "svg",
            {
              fill: t,
              viewBox: "5 3 14 18",
              onClick: void 0 === o ? function () {} : o,
              className: "controller-icon ".concat(a),
            },
            g("path", { d: "M0 0h24v24H0z", fill: "none" }),
            g("path", {
              d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
            })
          );
        },
      };
      var Z,
        $,
        X,
        ee,
        ne = function () {
          return (
            (ne =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            ne.apply(this, arguments)
          );
        },
        te = [],
        re = function () {
          return (
            (re =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            re.apply(this, arguments)
          );
        },
        ae = function (e, n, t) {
          var r = t.method,
            a = t.dispatch,
            o = t.state;
          !(function (e, n) {
            n.state.status.subscribe(function (n) {
              switch (n) {
                case 0:
                  e.emit("statusChange", { code: 0, label: "READY" });
                  break;
                case 1:
                  e.emit("statusChange", { code: 1, label: "PLAY" });
                  break;
                case 2:
                  e.emit("statusChange", { code: 2, label: "PAUSE" });
                  break;
                case 3:
                  e.emit("statusChange", { code: 3, label: "ENDED" });
              }
            });
          })(n, { state: o }),
            (function (e, n) {
              var t = n.state,
                r = n.method,
                a = n.dispatch;
              r.addCaptionTrack(e),
                e.readyState >= 1 && r.addVideoInitData(),
                e.addEventListener("loadedmetadata", r.addVideoInitData),
                e.addEventListener("ratechange", function () {
                  0 !== e.playbackRate &&
                    a({ type: "UPDATE_PLAYBACK_RATE", value: e.playbackRate });
                }),
                e.addEventListener("timeupdate", function () {
                  a({ type: "UPDATE_CURRENT-TIME", value: e.currentTime });
                }),
                e.textTracks.addEventListener("addtrack", function () {
                  return r.addCaptionTrack(e);
                }),
                e.audioTracks &&
                  e.audioTracks.addEventListener("addtrack", function () {
                    var n;
                    a({
                      type: "UPDATE_DOES_HAVE_AUDIO",
                      value: !!(null === (n = e.audioTracks) || void 0 === n
                        ? void 0
                        : n.length),
                    });
                  }),
                e.addEventListener("waiting", function () {
                  a({ type: "UPDATE_IS-BUFFERING", value: !0 });
                }),
                e.addEventListener("canplay", function () {
                  if (t.isBuffering.value)
                    if (
                      (a({ type: "UPDATE_IS-BUFFERING", value: !1 }),
                      0 === e.buffered.length)
                    )
                      a({ type: "UPDATE_BUFFER_LENGTH", value: 0 });
                    else {
                      var n = Math.min(e.duration, e.buffered.end(0));
                      a({ type: "UPDATE_BUFFER_LENGTH", value: n });
                    }
                }),
                e.addEventListener("volumechange", function () {
                  a({ type: "UPDATE_VOLUME", value: e.volume }),
                    a({ type: "MUTE", value: e.muted });
                }),
                e.addEventListener("play", function () {
                  a({ type: "UPDATE_STATUS", value: 1 });
                }),
                e.addEventListener("pause", function () {
                  a({ type: "UPDATE_STATUS", value: 2 });
                }),
                e.addEventListener("ended", function () {
                  a({ type: "UPDATE_STATUS", value: 3 });
                });
            })(e, { state: o, method: r, dispatch: a }),
            (function (e, n, t) {
              var r = t.state,
                a = t.method,
                o = t.dispatch;
              n.on("apiConnected", function (e) {
                o({ type: "SET_API_CONNECTED", value: e });
              }),
                n.on("error", function (n) {
                  o({ type: "UPDATE_ERROR_STATUS", value: n }),
                    e.addEventListener("playing", function () {
                      o({ type: "REMOVE_ERROR" });
                    });
                }),
                n.on("videoId", function (e) {
                  o({ type: "ADD_VIDEO_ID", value: e });
                }),
                n.on("updateStateFromCastDevice", function (e) {
                  o({ type: "CAST_PLAYER_UPDATED", value: e });
                }),
                n.on("setLiteMode", function (e) {
                  o({ type: "SET_LITE_MODE", value: e });
                }),
                n.on("waitingForPlayback", function (e) {
                  o({ type: "WAITING_FOR_PLAYBACK", value: e });
                }),
                n.on("updatePlayerConfig", function (e) {
                  e.primaryColor && n.emit("changeThemeColor", e.primaryColor),
                    o({ type: "UPDATE_PLAYER_CONFIGURATION", value: e });
                }),
                n.on("setCaptionVisibility", function (e) {
                  a.setCaptionVisibility(e);
                }),
                n.on("abrStatusChange", function (e) {
                  o({ type: "SET_ABR_STATUS", value: e });
                }),
                n.on("setActiveQuality", function (e) {
                  n.emit("qualityChange", e),
                    o({ type: "SET_ACTIVE_QUALITIES", value: e });
                }),
                n.on("availableCaptions", function (e) {
                  var t = e.map(function (e, n) {
                    return re(re({}, e), {
                      active: String(n) === r.activeCaptionId.value,
                    });
                  });
                  n.emit("availableCaptionsWithActiveStatus", t);
                }),
                n.on("setCaptionLang", function (n) {
                  if ("string" == typeof n) {
                    var t =
                      ((r = n),
                      (o = e.textTracks),
                      (i = Array.from(o).find(function (e) {
                        var n = e.language;
                        return r === n;
                      })),
                      null == i ? void 0 : i.id);
                    t && a.updateActiveCaptionId(t);
                  } else a.updateActiveCaptionId(n.id);
                  var r, o, i;
                }),
                n.on("availableCaptions", function (e) {
                  o({ type: "ADD_AVAILABLE_CAPTIONS", value: e });
                }),
                n.on("setChapters", function (e) {
                  var n = e[0],
                    t = e[1];
                  n && o({ type: "SET_CHAPTERS", value: z(n, t) });
                }),
                n.on("_metaDataLoadSuccess", function (e) {
                  if (
                    (o({ type: "ADD_META_DATA", value: e }),
                    e.chapters &&
                      e.duration &&
                      o({
                        type: "SET_CHAPTERS",
                        value: z(e.chapters, e.duration),
                      }),
                    e.playerConfig)
                  ) {
                    var t = re(
                      re({}, e.playerConfig.options),
                      r.playerConfig.value
                    );
                    o({ type: "UPDATE_PLAYER_CONFIGURATION", value: t }),
                      t.primaryColor &&
                        !r.uiOptionals.value.primaryColor &&
                        n.emit("changeThemeColor", t.primaryColor);
                  }
                }),
                n.on("syncVideoResumeTime", function (e) {
                  r.serverResumeInfo.value ||
                    o({ type: "UPDATE_SERVER_RESUME_TIME", value: e });
                }),
                n.on("zenObject", function (e) {
                  o({ type: "ADD_ZEN_OBJECT", value: e });
                }),
                n.on("availableQualities", function (e) {
                  var n = e.filter(function (e) {
                    return e.active;
                  })[0];
                  n && o({ type: "SET_ACTIVE_QUALITIES", value: n.id }),
                    o({ type: "SET_AVAILABLE_QUALITIES", value: e });
                }),
                n.on("castAuthToken", function (e) {
                  o({ type: "CAST_AUTH_TOKEN", value: e });
                }),
                n.on("updateDoesHaveAudio", function (e) {
                  o({ type: "UPDATE_DOES_HAVE_AUDIO", value: e });
                }),
                n.on("loadingNextVideo", function () {
                  o({ type: "UPDATE_STATUS", value: -1 });
                }),
                n.on("tracksDownloadManger", function (e) {
                  e.getDownloadedTrackList().then(function (e) {
                    o({ type: "UPDATE_OFFLINE_STORED_CONTENT", value: e });
                  }),
                    o({ type: "TRACKS_DOWNLOAD_MANGER", value: e });
                });
            })(e, n, { state: o, method: r, dispatch: a });
        },
        oe = 0,
        ie = [],
        le = [],
        se = l.__b,
        ue = l.__r,
        ce = l.diffed,
        de = l.__c,
        pe = l.unmount;
      function fe(e, n) {
        l.__h && l.__h($, e, oe || n), (oe = 0);
        var t = $.__H || ($.__H = { __: [], __h: [] });
        return e >= t.__.length && t.__.push({ __V: le }), t.__[e];
      }
      function ve(e) {
        return (
          (oe = 1),
          (function (e, n, t) {
            var r = fe(Z++, 2);
            if (
              ((r.t = e),
              !r.__c &&
                ((r.__ = [
                  Se(void 0, n),
                  function (e) {
                    var n = r.__N ? r.__N[0] : r.__[0],
                      t = r.t(n, e);
                    n !== t && ((r.__N = [t, r.__[1]]), r.__c.setState({}));
                  },
                ]),
                (r.__c = $),
                !$.u))
            ) {
              $.u = !0;
              var a = $.shouldComponentUpdate;
              $.shouldComponentUpdate = function (e, n, t) {
                if (!r.__c.__H) return !0;
                var o = r.__c.__H.__.filter(function (e) {
                  return e.__c;
                });
                if (
                  o.every(function (e) {
                    return !e.__N;
                  })
                )
                  return !a || a.call(this, e, n, t);
                var i = !1;
                return (
                  o.forEach(function (e) {
                    if (e.__N) {
                      var n = e.__[0];
                      (e.__ = e.__N),
                        (e.__N = void 0),
                        n !== e.__[0] && (i = !0);
                    }
                  }),
                  !(!i && r.__c.props === e) && (!a || a.call(this, e, n, t))
                );
              };
            }
            return r.__N || r.__;
          })(Se, e)
        );
      }
      function he(e, n) {
        var t = fe(Z++, 3);
        !l.__s && ke(t.__H, n) && ((t.__ = e), (t.i = n), $.__H.__h.push(t));
      }
      function me(e, n) {
        var t = fe(Z++, 4);
        !l.__s && ke(t.__H, n) && ((t.__ = e), (t.i = n), $.__h.push(t));
      }
      function ge(e) {
        return (
          (oe = 5),
          ye(function () {
            return { current: e };
          }, [])
        );
      }
      function ye(e, n) {
        var t = fe(Z++, 7);
        return ke(t.__H, n)
          ? ((t.__V = e()), (t.i = n), (t.__h = e), t.__V)
          : t.__;
      }
      function be(e, n) {
        return (
          (oe = 8),
          ye(function () {
            return e;
          }, n)
        );
      }
      function we() {
        for (var e; (e = ie.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(_e), e.__H.__h.forEach(Ee), (e.__H.__h = []);
            } catch (n) {
              (e.__H.__h = []), l.__e(n, e.__v);
            }
      }
      (l.__b = function (e) {
        ($ = null), se && se(e);
      }),
        (l.__r = function (e) {
          ue && ue(e), (Z = 0);
          var n = ($ = e.__c).__H;
          n &&
            (X === $
              ? ((n.__h = []),
                ($.__h = []),
                n.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.__V = le), (e.__N = e.i = void 0);
                }))
              : (n.__h.forEach(_e), n.__h.forEach(Ee), (n.__h = []))),
            (X = $);
        }),
        (l.diffed = function (e) {
          ce && ce(e);
          var n = e.__c;
          n &&
            n.__H &&
            (n.__H.__h.length &&
              ((1 !== ie.push(n) && ee === l.requestAnimationFrame) ||
                ((ee = l.requestAnimationFrame) || Ce)(we)),
            n.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i),
                e.__V !== le && (e.__ = e.__V),
                (e.i = void 0),
                (e.__V = le);
            })),
            (X = $ = null);
        }),
        (l.__c = function (e, n) {
          n.some(function (e) {
            try {
              e.__h.forEach(_e),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || Ee(e);
                }));
            } catch (t) {
              n.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (n = []),
                l.__e(t, e.__v);
            }
          }),
            de && de(e, n);
        }),
        (l.unmount = function (e) {
          pe && pe(e);
          var n,
            t = e.__c;
          t &&
            t.__H &&
            (t.__H.__.forEach(function (e) {
              try {
                _e(e);
              } catch (e) {
                n = e;
              }
            }),
            (t.__H = void 0),
            n && l.__e(n, t.__v));
        });
      var xe = "function" == typeof requestAnimationFrame;
      function Ce(e) {
        var n,
          t = function () {
            clearTimeout(r), xe && cancelAnimationFrame(n), setTimeout(e);
          },
          r = setTimeout(t, 100);
        xe && (n = requestAnimationFrame(t));
      }
      function _e(e) {
        var n = $,
          t = e.__c;
        "function" == typeof t && ((e.__c = void 0), t()), ($ = n);
      }
      function Ee(e) {
        var n = $;
        (e.__c = e.__()), ($ = n);
      }
      function ke(e, n) {
        return (
          !e ||
          e.length !== n.length ||
          n.some(function (n, t) {
            return n !== e[t];
          })
        );
      }
      function Se(e, n) {
        return "function" == typeof n ? n(e) : n;
      }
      function Te() {
        throw new Error("Cycle detected");
      }
      function Ae() {
        if (Ie > 1) Ie--;
        else {
          for (var e, n = !1; void 0 !== Oe; ) {
            var t = Oe;
            for (Oe = void 0, Re++; void 0 !== t; ) {
              var r = t.o;
              if (((t.o = void 0), (t.f &= -3), !(8 & t.f) && Fe(t)))
                try {
                  t.c();
                } catch (t) {
                  n || ((e = t), (n = !0));
                }
              t = r;
            }
          }
          if (((Re = 0), Ie--, n)) throw e;
        }
      }
      var Pe,
        Ne,
        Le = void 0,
        Oe = void 0,
        Ie = 0,
        Re = 0,
        Ve = 0;
      function De(e) {
        if (void 0 !== Le) {
          var n = e.n;
          if (void 0 === n || n.t !== Le)
            return (
              (Le.s = n =
                {
                  i: 0,
                  S: e,
                  p: void 0,
                  n: Le.s,
                  t: Le,
                  e: void 0,
                  x: void 0,
                  r: n,
                }),
              (e.n = n),
              32 & Le.f && e.S(n),
              n
            );
          if (-1 === n.i)
            return (
              (n.i = 0),
              void 0 !== n.p &&
                ((n.p.n = n.n),
                void 0 !== n.n && (n.n.p = n.p),
                (n.p = void 0),
                (n.n = Le.s),
                (Le.s.p = n),
                (Le.s = n)),
              n
            );
        }
      }
      function Be(e) {
        (this.v = e), (this.i = 0), (this.n = void 0), (this.t = void 0);
      }
      function Me(e) {
        return new Be(e);
      }
      function Fe(e) {
        for (var n = e.s; void 0 !== n; n = n.n)
          if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
        return !1;
      }
      function Ue(e) {
        for (var n = e.s; void 0 !== n; n = n.n) {
          var t = n.S.n;
          void 0 !== t && (n.r = t), (n.S.n = n), (n.i = -1);
        }
      }
      function je(e) {
        for (var n = e.s, t = void 0; void 0 !== n; ) {
          var r = n.n;
          -1 === n.i
            ? (n.S.U(n), (n.n = void 0))
            : (void 0 !== t && (t.p = n), (n.p = void 0), (n.n = t), (t = n)),
            (n.S.n = n.r),
            void 0 !== n.r && (n.r = void 0),
            (n = r);
        }
        e.s = t;
      }
      function He(e) {
        Be.call(this, void 0),
          (this.x = e),
          (this.s = void 0),
          (this.g = Ve - 1),
          (this.f = 4);
      }
      function ze(e) {
        return new He(e);
      }
      function Ge(e) {
        var n = e.u;
        if (((e.u = void 0), "function" == typeof n)) {
          Ie++;
          var t = Le;
          Le = void 0;
          try {
            n();
          } catch (n) {
            throw ((e.f &= -2), (e.f |= 8), We(e), n);
          } finally {
            (Le = t), Ae();
          }
        }
      }
      function We(e) {
        for (var n = e.s; void 0 !== n; n = n.n) n.S.U(n);
        (e.x = void 0), (e.s = void 0), Ge(e);
      }
      function Qe(e) {
        if (Le !== this) throw new Error("Out-of-order effect");
        je(this), (Le = e), (this.f &= -2), 8 & this.f && We(this), Ae();
      }
      function qe(e) {
        (this.x = e),
          (this.u = void 0),
          (this.s = void 0),
          (this.o = void 0),
          (this.f = 32);
      }
      function Ke(e) {
        var n = new qe(e);
        return n.c(), n.d.bind(n);
      }
      function Je(e, n) {
        l[e] = n.bind(null, l[e] || function () {});
      }
      function Ye(e) {
        Ne && Ne(), (Ne = e && e.S());
      }
      function Ze(e) {
        var n = this,
          t = e.data,
          r = Xe(t);
        r.value = t;
        var a = ye(function () {
          for (var e = n.__v; (e = e.__); )
            if (e.__c) {
              e.__c.__$f |= 4;
              break;
            }
          return (
            (n.__$u.c = function () {
              n.base.data = a.peek();
            }),
            ze(function () {
              var e = r.value.value;
              return 0 === e ? 0 : !0 === e ? "" : e || "";
            })
          );
        }, []);
        return a.value;
      }
      function $e(e, n, t, r) {
        var a = n in e && void 0 === e.ownerSVGElement,
          o = Me(t);
        return {
          o: function (e, n) {
            (o.value = e), (r = n);
          },
          d: Ke(function () {
            var t = o.value.value;
            r[n] !== t &&
              ((r[n] = t),
              a ? (e[n] = t) : t ? e.setAttribute(n, t) : e.removeAttribute(n));
          }),
        };
      }
      function Xe(e) {
        return ye(function () {
          return Me(e);
        }, []);
      }
      function en(e) {
        var n = ge(e);
        return (
          (n.current = e),
          (Pe.__$f |= 4),
          ye(function () {
            return ze(function () {
              return n.current();
            });
          }, [])
        );
      }
      function nn(e) {
        var n = ge(e);
        (n.current = e),
          he(function () {
            return Ke(function () {
              n.current();
            });
          }, []);
      }
      (Be.prototype.h = function () {
        return !0;
      }),
        (Be.prototype.S = function (e) {
          this.t !== e &&
            void 0 === e.e &&
            ((e.x = this.t), void 0 !== this.t && (this.t.e = e), (this.t = e));
        }),
        (Be.prototype.U = function (e) {
          var n = e.e,
            t = e.x;
          void 0 !== n && ((n.x = t), (e.e = void 0)),
            void 0 !== t && ((t.e = n), (e.x = void 0)),
            e === this.t && (this.t = t);
        }),
        (Be.prototype.subscribe = function (e) {
          var n = this;
          return Ke(function () {
            var t = n.value,
              r = 32 & this.f;
            this.f &= -33;
            try {
              e(t);
            } finally {
              this.f |= r;
            }
          });
        }),
        (Be.prototype.valueOf = function () {
          return this.value;
        }),
        (Be.prototype.toString = function () {
          return this.value + "";
        }),
        (Be.prototype.peek = function () {
          return this.v;
        }),
        Object.defineProperty(Be.prototype, "value", {
          get: function () {
            var e = De(this);
            return void 0 !== e && (e.i = this.i), this.v;
          },
          set: function (e) {
            if (e !== this.v) {
              Re > 100 && Te(), (this.v = e), this.i++, Ve++, Ie++;
              try {
                for (var n = this.t; void 0 !== n; n = n.x) n.t.N();
              } finally {
                Ae();
              }
            }
          },
        }),
        ((He.prototype = new Be()).h = function () {
          if (((this.f &= -3), 1 & this.f)) return !1;
          if (32 == (36 & this.f)) return !0;
          if (((this.f &= -5), this.g === Ve)) return !0;
          if (((this.g = Ve), (this.f |= 1), this.i > 0 && !Fe(this)))
            return (this.f &= -2), !0;
          var e = Le;
          try {
            Ue(this), (Le = this);
            var n = this.x();
            (16 & this.f || this.v !== n || 0 === this.i) &&
              ((this.v = n), (this.f &= -17), this.i++);
          } catch (e) {
            (this.v = e), (this.f |= 16), this.i++;
          }
          return (Le = e), je(this), (this.f &= -2), !0;
        }),
        (He.prototype.S = function (e) {
          if (void 0 === this.t) {
            this.f |= 36;
            for (var n = this.s; void 0 !== n; n = n.n) n.S.S(n);
          }
          Be.prototype.S.call(this, e);
        }),
        (He.prototype.U = function (e) {
          if ((Be.prototype.U.call(this, e), void 0 === this.t)) {
            this.f &= -33;
            for (var n = this.s; void 0 !== n; n = n.n) n.S.U(n);
          }
        }),
        (He.prototype.N = function () {
          if (!(2 & this.f)) {
            this.f |= 6;
            for (var e = this.t; void 0 !== e; e = e.x) e.t.N();
          }
        }),
        (He.prototype.peek = function () {
          if ((this.h() || Te(), 16 & this.f)) throw this.v;
          return this.v;
        }),
        Object.defineProperty(He.prototype, "value", {
          get: function () {
            1 & this.f && Te();
            var e = De(this);
            if ((this.h(), void 0 !== e && (e.i = this.i), 16 & this.f))
              throw this.v;
            return this.v;
          },
        }),
        (qe.prototype.c = function () {
          var e = this.S();
          try {
            8 & this.f || void 0 === this.x || (this.u = this.x());
          } finally {
            e();
          }
        }),
        (qe.prototype.S = function () {
          1 & this.f && Te(),
            (this.f |= 1),
            (this.f &= -9),
            Ge(this),
            Ue(this),
            Ie++;
          var e = Le;
          return (Le = this), Qe.bind(this, e);
        }),
        (qe.prototype.N = function () {
          2 & this.f || ((this.f |= 2), (this.o = Oe), (Oe = this));
        }),
        (qe.prototype.d = function () {
          (this.f |= 8), 1 & this.f || We(this);
        }),
        (Ze.displayName = "_st"),
        Object.defineProperties(Be.prototype, {
          constructor: { configurable: !0 },
          type: { configurable: !0, value: Ze },
          props: {
            configurable: !0,
            get: function () {
              return { data: this };
            },
          },
          __b: { configurable: !0, value: 1 },
        }),
        Je("__b", function (e, n) {
          if ("string" == typeof n.type) {
            var t,
              r = n.props;
            for (var a in r)
              if ("children" !== a) {
                var o = r[a];
                o instanceof Be &&
                  (t || (n.__np = t = {}), (t[a] = o), (r[a] = o.peek()));
              }
          }
          e(n);
        }),
        Je("__r", function (e, n) {
          Ye();
          var t,
            r = n.__c;
          r &&
            ((r.__$f &= -2),
            void 0 === (t = r.__$u) &&
              (r.__$u = t =
                (function (e) {
                  var n;
                  return (
                    Ke(function () {
                      n = this;
                    }),
                    (n.c = function () {
                      (r.__$f |= 1), r.setState({});
                    }),
                    n
                  );
                })())),
            (Pe = r),
            Ye(t),
            e(n);
        }),
        Je("__e", function (e, n, t, r) {
          Ye(), (Pe = void 0), e(n, t, r);
        }),
        Je("diffed", function (e, n) {
          var t;
          if ((Ye(), (Pe = void 0), "string" == typeof n.type && (t = n.__e))) {
            var r = n.__np,
              a = n.props;
            if (r) {
              var o = t.U;
              if (o)
                for (var i in o) {
                  var l = o[i];
                  void 0 === l || i in r || (l.d(), (o[i] = void 0));
                }
              else t.U = o = {};
              for (var s in r) {
                var u = o[s],
                  c = r[s];
                void 0 === u ? ((u = $e(t, s, c, a)), (o[s] = u)) : u.o(c, a);
              }
            }
          }
          e(n);
        }),
        Je("unmount", function (e, n) {
          if ("string" == typeof n.type) {
            var t = n.__e;
            if (t) {
              var r = t.U;
              if (r)
                for (var a in ((t.U = void 0), r)) {
                  var o = r[a];
                  o && o.d();
                }
            }
          } else {
            var i = n.__c;
            if (i) {
              var l = i.__$u;
              l && ((i.__$u = void 0), l.d());
            }
          }
          e(n);
        }),
        Je("__h", function (e, n, t, r) {
          r < 3 && (n.__$f |= 2), e(n, t, r);
        }),
        (w.prototype.shouldComponentUpdate = function (e, n) {
          var t = this.__$u;
          if (!((t && void 0 !== t.s) || 4 & this.__$f)) return !0;
          if (3 & this.__$f) return !0;
          for (var r in n) return !0;
          for (var a in e)
            if ("__source" !== a && e[a] !== this.props[a]) return !0;
          for (var o in this.props) if (!(o in e)) return !0;
          return !1;
        });
      var tn = (function (e, n) {
        var t = {
          __c: (n = "__cC" + d++),
          __: {},
          Consumer: function (e, n) {
            return e.children(n);
          },
          Provider: function (e) {
            var t, r;
            return (
              this.getChildContext ||
                ((t = []),
                ((r = {})[n] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value && t.some(_);
                }),
                (this.sub = function (e) {
                  t.push(e);
                  var n = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    t.splice(t.indexOf(e), 1), n && n.call(e);
                  };
                })),
              e.children
            );
          },
        };
        return (t.Provider.__ = t.Consumer.contextType = t);
      })();
      function rn() {
        return (function (e) {
          var n = $.context[e.__c],
            t = fe(Z++, 9);
          return (
            (t.c = e),
            n ? (null == t.__ && ((t.__ = !0), n.sub($)), n.props.value) : e.__
          );
        })(tn);
      }
      var an = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var r, a = 0, o = n.length; a < o; a++)
              (!r && a in n) ||
                (r || (r = Array.prototype.slice.call(n, 0, a)), (r[a] = n[a]));
          return e.concat(r || Array.prototype.slice.call(n));
        },
        on = function (e) {
          return "string" == typeof e && e.includes("1");
        },
        ln = function (e) {
          return "string" == typeof e && e.includes("0");
        },
        sn = function (e, n) {
          return on(e[n - 1]) || on(e[n + 1]);
        },
        un = function (e) {
          return e
            .map(function (e) {
              return e.includes("~") ? e.split("~") : e;
            })
            .flat();
        };
      function cn(e, n) {
        for (var t, r, a = n; a < e.length; a++)
          if (on(e[a])) {
            r = a - n;
            break;
          }
        for (var o = n; o > 0; o--)
          if (on(e[o])) {
            t = n - o;
            break;
          }
        return !t && r
          ? "RIGHT"
          : !r && t
          ? "LEFT"
          : t && r
          ? !(t <= r) || "LEFT"
          : "NO";
      }
      function dn(e) {
        return (
          "1" === e[0] && (e[0] = "0"),
          "1" === e[e.length - 1] && (e[e.length - 1] = "0"),
          (function (e) {
            var n;
            if (
              ((e = (n = an([], e, !0))
                .map(function (e, t) {
                  var r = n[t + 1];
                  return r && r.includes(e)
                    ? ((n[t + 1] = void 0), "".concat(e, "~").concat(r))
                    : e;
                })
                .filter(Boolean)),
              e.filter(ln).length < 1)
            )
              return un(e);
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              if (ln(r) && !1 === sn(e, t)) {
                var a,
                  o = cn(e, t);
                if ("LEFT" === o)
                  return (
                    ((a = an([], e, !0))[t] = e[t - 1]),
                    (a[t - 1] = e[t]),
                    dn(a)
                  );
                if ("RIGHT" === o)
                  return (
                    ((a = an([], e, !0))[t] = e[t + 1]),
                    (a[t + 1] = e[t]),
                    dn(a)
                  );
              }
            }
            return un(e);
          })(e)
        );
      }
      var pn = function (e) {
          var n = e[0],
            t = e[1];
          return (
            (t = parseInt(t, 10)),
            (n = parseInt(n, 10)),
            isNaN(t) || t === n
              ? [n]
              : n > t
              ? [NaN, NaN]
              : Array.from(new Array(t - n), function (e, t) {
                  return t + n;
                })
          );
        },
        fn = function (e, n) {
          if (!e.includes(".cmq-")) return !1;
          var t = e.split(" ");
          if (t.length <= 0) return !1;
          var r = n.children[0],
            a = Array.from(r.classList)[r.classList.length - 1];
          return t[0] === ".".concat(a);
        },
        vn = function (e) {
          var n = e.split("/"),
            t = n[0],
            r = n[1],
            a = void 0 === r ? "auto" : r,
            o = parseInt(t, 10),
            i = parseInt(a, 10);
          return (
            a.includes("auto") && (i = o + 1),
            a.includes("span") && (i = o + parseInt(a.split(" ")[2], 10)),
            isNaN(i) &&
              console.error(
                "[Vdocipher] (fn/element-visibility) can not normalize grid value ".concat(
                  e
                )
              ),
            [o, i]
          );
        },
        hn = function (e) {
          var n = getComputedStyle(e).gridTemplate.split(" / "),
            t = n[0],
            r = void 0 === t ? "" : t,
            a = n[1];
          return {
            maxColumn: (void 0 === a ? "" : a).split(" ").length,
            maxRow: r.split(" ").length,
          };
        },
        mn = function (e) {
          return ze(function () {
            return Array.from(e.value);
          });
        };
      var gn = {
          Chapters: "chapters",
          Speed: "speed",
          Quality: "quality",
          CaptionSearch: "captionSearch",
          Captions: "captions",
          SaveVideoOffline: "saveVideoOffline",
        },
        yn = {
          showBackward: ["Backward"],
          showPlayPauseBtn: ["PlayNPause"],
          showForward: ["Forward"],
          showProgressBar: ["VideoProgress"],
          showVolume: ["Volume"],
          showCaptionsControl: ["Captions"],
          showTimeText: ["TimeConsumed", "TimeLeft", "TimeDuration", "TimeAll"],
          showFullScreen: ["FullScreen"],
          enableCaptionSearch: ["CaptionSearch"],
          showSpeedControl: ["Speed"],
          showQualityControl: ["Quality"],
          enableSaveOffline: ["SaveVideoOffline"],
        };
      var bn = function (e, n, t) {
          var r = n.shadowDOMRef,
            a = n.playerEl,
            o = Me(new Set([])),
            i = mn(o),
            l = Me(new Set([])),
            s = mn(l),
            u = (function (e) {
              var n = Me(null);
              return {
                gridMatrix: n,
                updateGridMatrix: function (t, r, a, o) {
                  var i;
                  if (a && t && r) {
                    n.value = null;
                    var l = null;
                    null === (i = r.querySelector("#geta-algo-style")) ||
                      void 0 === i ||
                      i.remove();
                    var s = hn(t),
                      u = s.maxColumn,
                      c = s.maxRow,
                      d = Array.from(new Array(c), function () {
                        return Array.from(new Array(u), function () {
                          return "1";
                        });
                      });
                    if (
                      (e.value.forEach(function (e) {
                        var n, t, r;
                        if (
                          !1 !==
                          (null === (n = a[e]) || void 0 === n
                            ? void 0
                            : n.isVisible)
                        ) {
                          var o =
                              null === (t = a[e].gridArea) || void 0 === t
                                ? void 0
                                : t.col.start,
                            i =
                              null === (r = a[e].gridArea) || void 0 === r
                                ? void 0
                                : r.row.start;
                          if (o && i && !(o > u || i > c) && d[i - 1]) {
                            if ("1" !== d[i - 1][o - 1]) return void (l = e);
                            d[i - 1][o - 1] = e;
                          }
                        }
                      }),
                      l)
                    )
                      return console.error(
                        "[Vdocipher] Disabling the grid-element-transit, Found Invalid Grid Element: ".concat(
                          l,
                          ",  \n"
                        ),
                        { initialMatrix: d }
                      );
                    o.forEach(function (e) {
                      !(function (e, n, t, r) {
                        var a = ".".concat(e),
                          o = [],
                          i = !1;
                        Object.values(r.styleSheets).forEach(function (e) {
                          var n = e.cssRules;
                          Array.from(n).forEach(function (e) {
                            if (e instanceof CSSStyleRule) {
                              var n = e.selectorText;
                              n.split(" ").includes(a) &&
                                (n.includes("cmq-") &&
                                  fn(n, r) &&
                                  (o.push({
                                    gridColumn: e.style.gridColumn,
                                    gridRow: e.style.gridRow,
                                  }),
                                  (i = !0)),
                                1 !== n.split(" ").length ||
                                  i ||
                                  o.push({
                                    gridColumn: e.style.gridColumn,
                                    gridRow: e.style.gridRow,
                                  }));
                            }
                          });
                        }),
                          o.forEach(function (e) {
                            var t = e.gridColumn,
                              r = e.gridRow,
                              a = pn(t.split(" / ")),
                              o = pn(r.split(" / "));
                            a.includes(NaN) ||
                              o.includes(NaN) ||
                              o.forEach(function (e) {
                                n.length < e ||
                                  a.forEach(function (t) {
                                    n[e - 1].length < t ||
                                      (n[e - 1][t - 1] = "0");
                                  });
                              });
                          });
                      })(e, d, 0, r);
                    }),
                      (n.value = d);
                  }
                },
              };
            })(i),
            c = u.gridMatrix,
            d = u.updateGridMatrix,
            p = (function (e, n) {
              var t = e.playerEl,
                r = Me([]);
              return {
                updateCollapseInSettings: function () {
                  if (t.value) {
                    var a = new Set([]);
                    n.value.forEach(function (n) {
                      var r,
                        o,
                        i = gn[n];
                      i &&
                        (null ===
                          (r = e.playerConfig.value.collapseInSettings) ||
                        void 0 === r
                          ? void 0
                          : r.includes(i)) &&
                        a.add(n);
                      var l =
                        null === (o = t.value) || void 0 === o
                          ? void 0
                          : o.querySelector(".".concat(n));
                      l &&
                        getComputedStyle(l).display.includes("none") &&
                        a.add(n);
                    }),
                      (r.value = Array.from(a));
                  }
                },
                collapseInSettings: r,
              };
            })(n, s),
            f = p.updateCollapseInSettings,
            v = p.collapseInSettings,
            h = (function (e, n) {
              return ze(function () {
                var t,
                  r = e.playerConfig.value,
                  a = r.showCaptionsControl,
                  o = void 0 === a || a,
                  i = r.showQualityControl,
                  l = void 0 === i || i,
                  s = r.showSpeedControl,
                  u = void 0 === s || s,
                  c = r.enableCaptionSearch,
                  d = void 0 === c || c,
                  p = r.enableSaveOffline,
                  f = void 0 !== p && p,
                  v = !!(null === (t = e.availableQualities.value) ||
                  void 0 === t
                    ? void 0
                    : t.length),
                  h =
                    Array.from(e.captions.value || []).filter(function (e) {
                      var n = e.language;
                      return Boolean(n);
                    }).length > 0,
                  m = e.chapters.value.length > 0,
                  g =
                    e.tracksDownloadManger.value &&
                    e.tracksDownloadManger.value.tracks.length > 0;
                return !(
                  (f && g && n.value.includes("SaveVideoOffline")) ||
                  (o && h && n.value.includes("Captions")) ||
                  (l && v && n.value.includes("Quality")) ||
                  (d && h && n.value.includes("CaptionSearch")) ||
                  (u && n.value.includes("Speed")) ||
                  (m && n.value.includes("Chapters"))
                );
              });
            })(n, v),
            m = (function (e, n, t) {
              var r,
                a,
                o,
                i,
                l,
                s = Me(null),
                u =
                  ((r = function (r, a) {
                    if (r && a) {
                      e();
                      var o = {},
                        i = hn(r),
                        l = i.maxColumn,
                        u = i.maxRow;
                      t.value.forEach(function (e) {
                        var t = r.querySelector(".".concat(e)),
                          i =
                            !!t && getComputedStyle(t).display.includes("none"),
                          s = (function (e, n, t) {
                            var r = [],
                              a = ".".concat(e);
                            if (!n.styleSheets.length) return !1;
                            if (
                              (Object.values(n.styleSheets).forEach(function (
                                e
                              ) {
                                var t = e.cssRules;
                                Array.from(t).forEach(function (e) {
                                  if (e instanceof CSSStyleRule) {
                                    var t = e.selectorText;
                                    t.includes(a) &&
                                      (fn(t, n) || 1 === t.split(" ").length) &&
                                      r.push({
                                        gridColumn: e.style.gridColumn,
                                        gridRow: e.style.gridRow,
                                      });
                                  }
                                });
                              }),
                              !r.length && !t)
                            )
                              return (
                                console.error(
                                  "[Vdocipher] (fn/element-visibility)" +
                                    ' no css "grid-area" style for control '.concat(
                                      e,
                                      " found in theme[NUMBER].css"
                                    ) +
                                    '\n\nIf you intended not to provide any grid style to this control,then DO NOT attach/export via "connectWithGrid()"'
                                ),
                                !1
                              );
                            var o = r.filter(function (e) {
                              return e.gridColumn && e.gridRow;
                            })[0];
                            return (
                              !!o && {
                                column: vn(o.gridColumn),
                                row: vn(o.gridRow),
                              }
                            );
                          })(e, a, i),
                          c = !!s && l >= s.column[0],
                          d = !!s && u >= s.row[0],
                          p = {
                            gridArea: s
                              ? {
                                  col: { start: s.column[0], end: s.column[1] },
                                  row: { start: s.row[0], end: s.row[1] },
                                }
                              : null,
                            element: t,
                            isFirstColumn: s && 1 === s.column[0],
                            isLastColumn: s && s.column[0] === l,
                            isLastRow: s && s.row[0] === u,
                            isFirstRow: s && 1 === s.row[0],
                            isVisible:
                              "Setting" === e
                                ? !n.value
                                : Boolean(t && d && c && !i),
                          };
                        o[e] = p;
                      }),
                        (s.value = o);
                    }
                  }),
                  void 0 === a && (a = 300),
                  function () {
                    var e = this,
                      n = arguments;
                    o
                      ? (clearTimeout(i),
                        (i = setTimeout(function () {
                          Date.now() - l >= a &&
                            (r.apply(e, n), (l = Date.now()));
                        }, Math.max(a - (Date.now() - l), 0))))
                      : (r.apply(e, n), (l = Date.now()), (o = !0));
                  });
              return {
                updateElementVisibilityState: u,
                elementVisibilityState: s,
              };
            })(f, h, i),
            g = m.updateElementVisibilityState,
            y = m.elementVisibilityState;
          g(a.value, e);
          var b = (function (e, n, t) {
            var r = Me([]);
            return (
              e.subscribe(function (e) {
                if (e) {
                  var a = [];
                  for (var o in yn)
                    if (Object.hasOwn(n, o)) {
                      var i = o;
                      if (!1 !== n.value[i]) return;
                      yn[i].forEach(function (n) {
                        e[n].isVisible || a.push(n);
                      });
                    }
                  for (var l in (a.push.apply(a, t.value), e))
                    !1 === e[l].isVisible && a.push(l);
                  r.value = Array.from(new Set(a));
                }
              }),
              r
            );
          })(y, n.playerConfig, v);
          return (
            t.on("patchGridElement", function () {
              a.value && g(a.value, e);
            }),
            t.on("playerResize", function () {
              a.value && g(a.value, e);
            }),
            n.playerConfig.subscribe(function () {
              a.value &&
                setTimeout(function () {
                  return g(a.value, e);
                }, 0);
            }),
            b.subscribe(function (e) {
              return d(a.value, r.value, y.value, e);
            }),
            c.subscribe(function (n) {
              if (n) {
                var t = n.map(dn);
                !(function (e, n, t) {
                  var r;
                  null === (r = e.querySelector("#geta-algo-style")) ||
                    void 0 === r ||
                    r.remove();
                  var a = "";
                  t.forEach(function (e, t) {
                    e.forEach(function (e, r) {
                      "1" !== e &&
                        "0" !== e &&
                        e !== n[t][r] &&
                        (a += "."
                          .concat(e, " {grid-column-start: ")
                          .concat(r + 1, " !important} \n"));
                    });
                  });
                  var o = document.createElement("style");
                  (o.id = "geta-algo-style"), (o.innerHTML = a), e.append(o);
                })(e, n, t);
              }
            }),
            {
              elementVisibilityState: y,
              isSettingIconHidden: h,
              collapseInSettings: v,
              availableControlSet: o,
              availableControlList: i,
              possibleCollapseInSettingsControlsSet: l,
              possibleCollapseInSettingsControlsList: s,
            }
          );
        },
        wn = function (e) {
          var n = [];
          return (
            Array.from(e || []).forEach(function (e) {
              var t = e.text.replace(/<(?:.|\n)*?>/gm, "");
              n.push({
                displayText: t,
                matched: !1,
                searchText: t.split(" ").filter(Boolean).join("").toLowerCase(),
                startTime: e.startTime,
              });
            }),
            n
          );
        },
        xn = function (e, n, t) {
          var r = t.shadowDOMRef,
            a = t.themeId,
            o = t.hostEl,
            i = (function (e, n, t) {
              var r = t.shadowDOMRef,
                a = t.themeId,
                o = t.hostEl,
                i = t.uiOptionals;
              return {
                playerEl: Me(null),
                videoEl: Me(e),
                eventBus: Me(n),
                shadowDOMRef: Me(r),
                themeId: Me(a),
                uiOptionals: Me(i),
                hostEl: Me(o),
                isLiteMode: Me(!1),
                duration: Me(NaN),
                abrStatus: Me(!1),
                posterLink: Me(null),
                captions: Me(null),
                availableCaptions: Me(null),
                volume: Me(null),
                muted: Me(!1),
                status: Me(-1),
                currentTime: Me(0),
                seeking: Me(!1),
                playbackRate: Me(1),
                isBuffering: Me(!0),
                bufferLength: Me(0),
                captionVisibility: Me(!1),
                availablePlaybackRates: Me([0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]),
                activeQualityTrackId: Me(null),
                isFullscreen: Me(!1),
                metaData: Me(null),
                activeCaptionId: Me(null),
                hasError: Me(!1),
                error: Me(null),
                castAuthToken: Me(null),
                showTopLink: Me(!1),
                topLinkUrl: Me(null),
                topLinkMessage: Me(null),
                topLinkImage: Me(null),
                playerConfig: Me({}),
                availableQualities: Me(null),
                waitingForPlayback: Me(!1),
                chapters: Me([]),
                isSearchCaptionOpen: Me(!1),
                isChapterLayerOpen: Me(!1),
                showCastingLayer: Me(!1),
                doesHaveAudio: Me(!1),
                zenObject: Me(null),
                isAPIConnected: Me(!1),
                activeSettingPanel: Me(!1),
                activeBadgeHost: Me(null),
                tracksDownloadManger: Me(null),
                offlineStoredContentList: Me([]),
                errorOnSaveOfflineAttempt: Me(null),
                serverResumeInfo: Me(null),
                videoId: Me(null),
              };
            })(e, n, {
              shadowDOMRef: r,
              themeId: a,
              hostEl: o,
              uiOptionals: t.uiOptionals,
            }),
            l = (function (e) {
              return function (n) {
                switch (n.type) {
                  case "UPDATE_PLAYER-EL_REF":
                    e.playerEl.value = n.value;
                    break;
                  case "ADD_VIDEO_INIT_DATA":
                    (e.duration.value = n.value.duration),
                      (e.posterLink.value = n.value.posterLink),
                      (e.status.value = n.value.status),
                      (e.muted.value = n.value.muted),
                      (e.captions.value = n.value.captions),
                      (e.volume.value = n.value.volume);
                    break;
                  case "UPDATE_STATUS":
                    e.status.value = n.value;
                    break;
                  case "UPDATE_IS-BUFFERING":
                    e.isBuffering.value = n.value;
                    break;
                  case "UPDATE_DOES_HAVE_AUDIO":
                    e.doesHaveAudio.value = n.value;
                    break;
                  case "UPDATE_CURRENT-TIME":
                    return void (e.currentTime.value = n.value);
                  case "SEEKING":
                    e.seeking.value = !0;
                    break;
                  case "SEEKED":
                    e.seeking.value = !1;
                    break;
                  case "UPDATE_VOLUME":
                    e.volume.value = n.value;
                    break;
                  case "MUTE":
                    e.muted.value = n.value;
                    break;
                  case "UPDATE_PLAYBACK_RATE":
                    e.playbackRate.value = n.value;
                    break;
                  case "SET_AVAILABLE_QUALITIES":
                    e.availableQualities.value = n.value;
                    break;
                  case "SET_ACTIVE_QUALITIES":
                    e.activeQualityTrackId.value = n.value;
                    break;
                  case "ADD_AVAILABLE_CAPTIONS":
                    e.availableCaptions.value = n.value;
                    break;
                  case "UPDATE_FULLSCREEN_STATUS":
                    e.isFullscreen.value = n.value;
                    break;
                  case "ADD_META_DATA":
                    e.metaData.value = n.value;
                    break;
                  case "UPDATE_ACTIVE_CAPTIONS":
                    e.activeCaptionId.value = n.value;
                    break;
                  case "UPDATE_BUFFER_LENGTH":
                    e.bufferLength.value = n.value;
                    break;
                  case "UPDATE_ERROR_STATUS":
                    (e.hasError.value = !0), (e.error.value = n.value);
                    break;
                  case "SET_CAPTION_VISIBILITY":
                    e.captionVisibility.value = n.value;
                    break;
                  case "SET_ABR_STATUS":
                    e.abrStatus.value = n.value;
                    break;
                  case "REMOVE_ERROR":
                    (e.hasError.value = !1), (e.error.value = null);
                    break;
                  case "UPDATE_PLAYER_CONFIGURATION":
                    e.playerConfig.value = ne(
                      ne({}, e.playerConfig.value),
                      n.value
                    );
                    break;
                  case "SET_LITE_MODE":
                    e.isLiteMode.value = n.value;
                    break;
                  case "WAITING_FOR_PLAYBACK":
                    e.waitingForPlayback.value = n.value;
                    break;
                  case "SET_CHAPTERS":
                    e.chapters.value = n.value;
                    break;
                  case "ADD_CAPTIONS":
                    e.captions.value = n.value;
                    break;
                  case "TOGGLE_CHAPTER_LAYER":
                    e.isChapterLayerOpen.value = n.value;
                    break;
                  case "TOGGLE_SEARCH_CAPTION":
                    e.isSearchCaptionOpen.value = n.value;
                    break;
                  case "ADD_ZEN_OBJECT":
                    (e.showTopLink.value = !0), (e.zenObject.value = n.value);
                    break;
                  case "CAST_AUTH_TOKEN":
                    e.castAuthToken.value = n.value;
                    break;
                  case "TOGGLE_CASTING_LAYER":
                    e.showCastingLayer.value = n.value;
                    break;
                  case "CAST_PLAYER_UPDATED":
                    "number" == typeof n.value.currentTime &&
                      (e.currentTime.value = n.value.currentTime),
                      "number" == typeof n.value.status &&
                        (e.status.value = n.value.status),
                      "boolean" == typeof n.value.muted &&
                        (e.muted.value = n.value.muted),
                      "number" == typeof n.value.volume &&
                        (e.volume.value = n.value.volume);
                    break;
                  case "UPDATE_ACTIVE_SETTING_PANEL":
                    e.activeSettingPanel.value = n.value;
                    break;
                  case "UPDATE_ACTIVE_BADGE_HOST":
                    e.activeBadgeHost.value = n.value;
                    break;
                  case "SET_API_CONNECTED":
                    e.isAPIConnected.value = n.value;
                    break;
                  case "TRACKS_DOWNLOAD_MANGER":
                    e.tracksDownloadManger.value = n.value;
                    break;
                  case "UPDATE_OFFLINE_STORED_CONTENT":
                    e.offlineStoredContentList.value = n.value;
                    break;
                  case "UPDATE_ERROR_ON_SAVE_OFFLINE_ATTEMPT":
                    e.errorOnSaveOfflineAttempt.value = n.value;
                    break;
                  case "UPDATE_SERVER_RESUME_TIME":
                    e.serverResumeInfo.value = n.value;
                    break;
                  case "ADD_VIDEO_ID":
                    e.videoId.value = n.value;
                }
                te.length &&
                  te.forEach(function (e) {
                    return e(n);
                  });
              };
            })(i),
            s = (function (e, n) {
              var t = function (t) {
                  var r = e.eventBus.value;
                  n({ type: "SET_CAPTION_VISIBILITY", value: t }),
                    null == r || r.emit("captionVisibilityChange", t);
                },
                r = function (r) {
                  var a = e.eventBus.value;
                  t(!0),
                    n({ type: "UPDATE_ACTIVE_CAPTIONS", value: String(r) }),
                    null == a || a.emit("captionLanguageChange", r);
                };
              return {
                play: function () {
                  var n = e.status.value,
                    t = e.videoEl.value;
                  if (!(n < 0) && t)
                    return window._vdoCast.activeCastControls
                      ? window._vdoCast.activeCastControls.play()
                      : void t.play();
                },
                pause: function () {
                  var n = e.status.value,
                    t = e.videoEl.value;
                  if (!(n < 0) && t)
                    return window._vdoCast.activeCastControls
                      ? window._vdoCast.activeCastControls.pause()
                      : void t.pause();
                },
                togglePlay: function () {
                  var n = e.status.value,
                    t = e.videoEl.value;
                  if (!(n < 0))
                    return window._vdoCast.activeCastControls
                      ? 1 === n
                        ? window._vdoCast.activeCastControls.pause()
                        : window._vdoCast.activeCastControls.play()
                      : void (1 === n
                          ? null == t || t.pause()
                          : null == t || t.play());
                },
                seek: function (t) {
                  return new Promise(function (r) {
                    var a = e.videoEl.value;
                    if (a) {
                      if (window._vdoCast.activeCastControls)
                        return window._vdoCast.activeCastControls.seek(t);
                      (a.currentTime = t),
                        n({
                          type: "UPDATE_CURRENT-TIME",
                          value: a.currentTime,
                        }),
                        n({ type: "SEEKING" }),
                        a.addEventListener("seeked", function e() {
                          r(!0),
                            n({ type: "SEEKED" }),
                            a.removeEventListener("seeked", e);
                        });
                    }
                  });
                },
                setVolume: function (t) {
                  var r = e.videoEl.value;
                  if (r) {
                    if (window._vdoCast.activeCastControls)
                      return window._vdoCast.activeCastControls.setVolume(t);
                    (r.volume = t), n({ type: "UPDATE_VOLUME", value: t });
                  }
                },
                mute: function () {
                  var t = e.videoEl.value;
                  if (t) {
                    if (window._vdoCast.activeCastControls)
                      return window._vdoCast.activeCastControls.setIsMuted(!0);
                    (t.muted = !0), n({ type: "MUTE", value: !0 });
                  }
                },
                unmute: function () {
                  var t = e.videoEl.value;
                  if (t) {
                    if (window._vdoCast.activeCastControls)
                      return window._vdoCast.activeCastControls.setIsMuted(!1);
                    (t.muted = !1), n({ type: "MUTE", value: !1 });
                  }
                },
                updatePlayerElRef: function (e) {
                  n({ type: "UPDATE_PLAYER-EL_REF", value: e });
                },
                setPlaybackRate: function (t) {
                  var r = e.videoEl.value;
                  r &&
                    ((r.playbackRate = t),
                    n({ type: "UPDATE_PLAYBACK_RATE", value: t }));
                },
                setCaptionVisibility: t,
                updateActiveCaptionId: r,
                selectQualityTrack: function (n) {
                  var t = e.eventBus.value;
                  null == t || t.emit("selectQualityTrack", n);
                },
                updateFullscreenStatus: function (t) {
                  var r = e.eventBus.value;
                  n({ type: "UPDATE_FULLSCREEN_STATUS", value: t }),
                    null == r || r.emit("fullscreenChange", t);
                },
                toggleSearchCaption: function (e) {
                  n({ type: "TOGGLE_SEARCH_CAPTION", value: e });
                },
                toggleCastingLayer: function (e) {
                  n({ type: "TOGGLE_CASTING_LAYER", value: e });
                },
                toggleChapterLayer: function (e) {
                  e && n({ type: "UPDATE_ACTIVE_BADGE_HOST", value: null }),
                    n({ type: "TOGGLE_CHAPTER_LAYER", value: e });
                },
                disableLiteMode: function () {
                  var n = e.eventBus.value;
                  null == n || n.emit("setLiteMode", !1);
                },
                addCaptionTrack: function (a) {
                  var o, i;
                  if (a.textTracks.length) {
                    var l =
                        null === (o = e.uiOptionals.value) || void 0 === o
                          ? void 0
                          : o.ccLanguage,
                      s =
                        null === (i = e.metaData.value) || void 0 === i
                          ? void 0
                          : i.captions;
                    Array.from(a.textTracks).forEach(function (e) {
                      return (e.mode = "hidden");
                    });
                    var u = (function (e, n, t) {
                      if (Array.isArray(t) && t.length > 0) {
                        var r = n;
                        r && r.includes("-") && (r = r.split("-")[0]);
                        var a = Array.from(e).filter(function (e) {
                          return e.language === r;
                        });
                        if (a.length) return a[0];
                        var o = t.find(function (e) {
                          return e.isDefault;
                        });
                        if (o && o.lang) {
                          var i = Array.from(e).filter(function (e) {
                            return e.language === o.lang;
                          });
                          if (i.length) return i[0];
                        }
                      }
                      return !1;
                    })(a.textTracks, l, s);
                    u && (r(u.id), t(!0)),
                      n({ type: "ADD_CAPTIONS", value: null }),
                      n({ type: "ADD_CAPTIONS", value: a.textTracks });
                  }
                },
                addVideoInitData: function () {
                  var t,
                    r,
                    a = e.videoEl.value;
                  n({
                    type: "ADD_VIDEO_INIT_DATA",
                    value: {
                      duration: a.duration,
                      posterLink: a.poster,
                      status: -1 === e.status.value ? 0 : e.status.value,
                      muted: a.muted,
                      captions: a.textTracks,
                      volume: a.volume,
                    },
                  }),
                    (null === (t = a.audioTracks) || void 0 === t
                      ? void 0
                      : t.length) &&
                      n({
                        type: "UPDATE_DOES_HAVE_AUDIO",
                        value: !!(null === (r = a.audioTracks) || void 0 === r
                          ? void 0
                          : r.length),
                      });
                },
                openSettingPanel: function (e) {
                  n({ type: "UPDATE_ACTIVE_SETTING_PANEL", value: e });
                },
                toggleBadge: function (t) {
                  n({
                    type: "UPDATE_ACTIVE_BADGE_HOST",
                    value: t === e.activeBadgeHost.value ? null : t,
                  });
                },
                isBadgeActive: function (n) {
                  return e.activeBadgeHost.value === n;
                },
                isAnyBadgeActive: function () {
                  return (
                    Boolean(e.activeBadgeHost.value) ||
                    e.isChapterLayerOpen.value ||
                    e.isSearchCaptionOpen.value
                  );
                },
                updateOfflineStoreContentList: function (e) {
                  n({ type: "UPDATE_OFFLINE_STORED_CONTENT", value: e });
                },
                updateErrorOnSaveOfflineAttempt: function (e) {
                  n({ type: "UPDATE_ERROR_ON_SAVE_OFFLINE_ATTEMPT", value: e });
                },
              };
            })(i, l);
          ae(e, n, { state: i, method: s, dispatch: l }),
            (function (e, n) {
              var t,
                r = Me(!1),
                a = document.createElement("style");
              a.innerHTML = "* { cursor: none !important; }";
              var o = Me(null);
              function i(e) {
                o.value &&
                  (t && clearInterval(t),
                  (t = setTimeout(function () {
                    var t;
                    n.isFullscreen.value &&
                      (null === (t = o.value) ||
                        void 0 === t ||
                        t.appendChild(a),
                      e && o.value.addEventListener("mousemove", l));
                  }, 2e3)));
              }
              function l(e, t) {
                var s;
                void 0 === t && (t = !1),
                  o.value &&
                    !r.value &&
                    (a.isConnected && a.remove(),
                    (r.value = !1),
                    n.isFullscreen.value && i(!1),
                    t &&
                      (null === (s = o.value) ||
                        void 0 === s ||
                        s.removeEventListener("mousemove", l)));
              }
              (o.value = e),
                Ke(function () {
                  n.isFullscreen.value ? i(!0) : l(0, !0);
                });
            })(r, i);
          var u = (function (e, n) {
              var t = new Map();
              return (
                Ke(function () {
                  e.textTracks.addEventListener("addtrack", function (n) {
                    var r = n.track;
                    if ((null == r ? void 0 : r.cues) && !t.has(r.id))
                      if (r.cues.length > 0) {
                        var a = wn(r.cues);
                        t.set(r.id, a);
                      } else {
                        var o = e.querySelectorAll("track"),
                          i = Array.from(o).find(function (e) {
                            return e.id === r.id;
                          });
                        null == i ||
                          i.addEventListener("load", function e() {
                            if (r.cues) {
                              var n = wn(r.cues);
                              t.set(r.id, n),
                                null == i || i.removeEventListener("load", e);
                            }
                          });
                      }
                  });
                }),
                {
                  queryInActiveCaption: function (e) {
                    return (function (e, n, t) {
                      if (!t || !n) return [];
                      var r = e.get(n);
                      if (!r) return [];
                      var a = [];
                      return (
                        r.forEach(function (e) {
                          var n = e.searchText,
                            r = e.displayText,
                            o = e.startTime,
                            i = t
                              .split(" ")
                              .filter(Boolean)
                              .join("")
                              .toLowerCase();
                          n.indexOf(i) >= 0 &&
                            a.push({
                              displayText: r.replace(
                                new RegExp(t, "ig"),
                                function (e) {
                                  return "<c.matched>".concat(e, "</c>");
                                }
                              ),
                              searchText: n,
                              startTime: o,
                              matched: !0,
                            });
                        }),
                        a
                      );
                    })(t, n.activeCaptionId.value, e);
                  },
                }
              );
            })(e, i).queryInActiveCaption,
            c = (function (e) {
              var n,
                t = Me(!0),
                r = Me(!1),
                a = ze(function () {
                  return (
                    !r.value &&
                    !e.isBuffering.value &&
                    (e.playerConfig.value.hideControlsOnPause
                      ? 1 === e.status.value || 2 === e.status.value
                      : 1 === e.status.value)
                  );
                }),
                o = function () {
                  n && clearInterval(n),
                    (n = setTimeout(function () {
                      t.value = !a.value;
                    }, 2e3));
                };
              return (
                e.status.subscribe(o),
                a.subscribe(o),
                o(),
                {
                  setHoldPlayerVisibility: function (e) {
                    r.value = e;
                  },
                  setPlayerVisibilityTrue: function () {
                    (t.value = !0), o();
                  },
                  resetPlayerVisibilityCounter: o,
                  playerVisibility: t,
                }
              );
            })(i),
            d = c.playerVisibility,
            p = c.setHoldPlayerVisibility,
            f = c.setPlayerVisibilityTrue,
            v = c.resetPlayerVisibilityCounter,
            h = (function (e, n, t) {
              var r,
                a = Me(!1);
              return (
                e.addEventListener("touchend", function () {
                  (a.value = !0),
                    r && clearInterval(r),
                    (r = setTimeout(function () {
                      a.value = !1;
                    }, 600));
                }),
                e.addEventListener(
                  "click",
                  function (e) {
                    a.value && !n.value && (e.stopImmediatePropagation(), t());
                  },
                  !0
                ),
                e.addEventListener("mousemove", function () {
                  a.value || n.value || t();
                }),
                { isTouchEvent: a }
              );
            })(o, d, f).isTouchEvent,
            m = bn(r, i, n),
            g = m.elementVisibilityState,
            y = m.collapseInSettings,
            b = m.isSettingIconHidden,
            w = m.availableControlList;
          return {
            state: i,
            method: s,
            isTouchEvent: h,
            videoEl: e,
            queryInActiveCaption: u,
            playerVisibility: d,
            setHoldPlayerVisibility: p,
            resetPlayerVisibilityCounter: v,
            setPlayerVisibilityTrue: f,
            elementVisibilityState: g,
            collapseInSettings: y,
            isSettingIconHidden: b,
            availableControlSet: m.availableControlSet,
            availableControlList: w,
            possibleCollapseInSettingsControlsSet:
              m.possibleCollapseInSettingsControlsSet,
            possibleCollapseInSettingsControlsList:
              m.possibleCollapseInSettingsControlsList,
          };
        };
      function Cn() {
        var e = rn().state,
          n = e.posterLink.value,
          t = e.metaData.value,
          r =
            n ||
            (function (e) {
              if ((void 0 === e && (e = []), e.length > 0)) {
                var n = Array.from(e).sort(function (e, n) {
                  return n.height - e.height;
                });
                return n[0].url || "";
              }
              return "";
            })(null == t ? void 0 : t.posters);
        return r
          ? g(
              "div",
              { class: "vdo-poster" },
              g("img", { src: r, alt: "Video" })
            )
          : null;
      }
      function _n(e) {
        var n = rn();
        return g(
          "div",
          {
            className: "panel",
            onClick: function (t) {
              return e.action(t, n);
            },
          },
          g("span", { className: "label" }, e.label),
          g(e.icon, null)
        );
      }
      function En(e, n, t) {
        return n
          ? function (r) {
              var a = rn(),
                o = a.state,
                i = a.possibleCollapseInSettingsControlsSet;
              if (
                (a.availableControlSet.value.add(t),
                i.value.add(t),
                r.isChildOfCollapseHOC)
              )
                return g(_n, n);
              var l = (function (e) {
                  var n = gn[e];
                  if (!n)
                    throw new Error(
                      "[Vdocipher] (Grid Element Transit)" +
                        " no key found for the gridIdentifier: ".concat(
                          e,
                          " in collapseInSettingMapping"
                        )
                    );
                  return n;
                })(t),
                s = o.playerConfig.value.collapseInSettings;
              return null != s && s.includes(l) ? null : g(e, null);
            }
          : function () {
              return rn().availableControlSet.value.add(t), g(e, null);
            };
      }
      j(i(5320)), j(i(7005));
      const kn = {
        consumed: En(
          function () {
            var e = rn().state,
              n = e.playerConfig.value.showTimeText;
            return void 0 === n || n
              ? g("div", { class: "TimeConsumed" }, M(e.currentTime.value))
              : null;
          },
          void 0,
          "TimeConsumed"
        ),
        left: En(
          function () {
            var e = rn().state,
              n = e.playerConfig.value.showTimeText,
              t = void 0 === n || n,
              r = e.duration.value || NaN;
            return t
              ? g("div", { class: "TimeLeft" }, M(r - e.currentTime.value))
              : null;
          },
          void 0,
          "TimeLeft"
        ),
        duration: En(
          function () {
            var e = rn().state,
              n = e.playerConfig.value.showTimeText,
              t = void 0 === n || n,
              r = e.duration.value || NaN;
            return t ? g("div", { class: "TimeDuration" }, M(r)) : null;
          },
          void 0,
          "TimeDuration"
        ),
        all: En(
          function () {
            var e = rn().state,
              n = e.playerConfig.value.showTimeText,
              t = void 0 === n || n,
              r = e.duration.value || NaN;
            return t
              ? g(
                  "div",
                  { className: "TimeAll" },
                  g("div", { className: "consumed" }, M(e.currentTime.value)),
                  g("div", { className: "divider" }, "/"),
                  g("div", { className: "total-duration" }, M(r))
                )
              : null;
          },
          void 0,
          "TimeAll"
        ),
      };
      var Sn,
        Tn = {
          addCSS: function (e) {
            Sn.push(e);
          },
          allStyle: (Sn = []),
        };
      function An(e) {
        var n = e.isLiteMode,
          t = e.isReplayMode,
          r = void 0 !== t && t,
          a = rn(),
          o = a.state,
          i = a.method,
          l = o.playerConfig.value,
          s = l.initialPlayButtonShape,
          u = void 0 === s ? "circle" : s,
          c = l.initialDurationPosition,
          d = void 0 === c ? "none" : c;
        return g(
          "div",
          { className: "vdo-full" },
          g(
            "div",
            {
              className: "Player Overlay",
              onClick: function () {
                n ? i.disableLiteMode() : i.play();
              },
            },
            !r && g(Cn, null),
            g(
              "div",
              { className: "PlayNPause" },
              g(
                "div",
                {
                  className: "icon-wrapper \n            ".concat(
                    u,
                    "\n          "
                  ),
                },
                r
                  ? g(Y.replay, { className: "overlay-replay" })
                  : g(Y.play, { className: "overlay-play" })
              )
            ),
            g(
              "div",
              { className: "initial-duration ".concat(d) },
              g(kn.duration, null)
            )
          )
        );
      }
      j(i(6900)), Tn.addCSS(i(3379));
      var Pn = function (e, n) {
        var t = "";
        if (!n.value) return t;
        var r = n.value[e],
          a = r.isFirstColumn,
          o = r.isFirstRow;
        return (
          a && (t += " tl-left"),
          r.isLastColumn && (t += " tl-right"),
          o && (t += " tl-top"),
          r.isLastRow && (t += " tl-bottom"),
          t
        );
      };
      function Nn(e) {
        var n = e.children,
          t = e.gridIdentifier,
          r = rn(),
          a = r.isTouchEvent,
          o = r.elementVisibilityState,
          i = Xe(!1),
          l = Xe(!1);
        return (
          nn(function () {
            if (o.value && !l.value) {
              var e = o.value[t].element;
              e &&
                ((l.value = !0),
                e.addEventListener("mouseover", function () {
                  a.value || (i.value = !0);
                }),
                e.addEventListener("mouseleave", function () {
                  return (i.value = !1);
                }));
            }
          }),
          g(
            "span",
            {
              className: ""
                .concat(Pn(t, o), " ")
                .concat(i.value ? "show" : "hide"),
              ref: function (e) {
                var n;
                null == e ||
                  null === (n = e.parentElement) ||
                  void 0 === n ||
                  n.classList.add("tooltip-container");
              },
            },
            n
          )
        );
      }
      j(i(625)), j(i(7406));
      const Ln = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = n.playerConfig.value,
            a = r.showBackward,
            o = void 0 === a || a,
            i = r.skipDuration,
            l = void 0 === i ? 10 : i;
          return o
            ? g(
                "div",
                { className: "Backward" },
                g(Nn, { gridIdentifier: "Backward" }, "Backward"),
                g(Y.backward, {
                  onClick: function () {
                    return t.seek(n.currentTime.value - l);
                  },
                })
              )
            : null;
        },
        void 0,
        "Backward"
      );
      function On(e) {
        var n = e.size,
          t = void 0 === n ? 20 : n,
          r = e.className;
        return g("div", {
          className: "circular-spinner ".concat(void 0 === r ? "" : r),
          style: { width: t, height: t },
        });
      }
      function In(e) {
        var n = e.size,
          t = void 0 === n ? 30 : n,
          r = e.className,
          a = void 0 === r ? "" : r,
          o = rn().state,
          i = o.playerConfig.value.showPlayPauseBtn,
          l = o.isBuffering.value;
        return !i && l
          ? g(On, { size: t, className: "mid-player-spinner ".concat(a) })
          : null;
      }
      j(i(4359)), j(i(6694));
      const Rn = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = n.isBuffering.value,
            a = n.playerConfig.value.showPlayPauseBtn;
          return void 0 === a || a
            ? r
              ? g(
                  "div",
                  { className: "PlayNPause spinner-container" },
                  g(On, null)
                )
              : g(
                  "div",
                  { className: "PlayNPause" },
                  g(Nn, { gridIdentifier: "PlayNPause" }, "Pause"),
                  g(Y.pause, {
                    onClick: function () {
                      return t.pause();
                    },
                  })
                )
            : null;
        },
        void 0,
        "PlayNPause"
      );
      j(i(4683));
      const Vn = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = n.playerConfig.value,
            a = r.showForward,
            o = void 0 === a || a,
            i = r.skipDuration,
            l = void 0 === i ? 10 : i;
          return o
            ? g(
                "div",
                { className: "Forward" },
                g(Nn, { gridIdentifier: "Forward" }, "Forward"),
                g(Y.forward, {
                  onClick: function () {
                    return t.seek(n.currentTime.value + l);
                  },
                })
              )
            : null;
        },
        void 0,
        "Forward"
      );
      j(i(1623));
      const Dn = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = n.playerConfig.value.showPlayPauseBtn;
          return void 0 === r || r
            ? g(
                "div",
                { className: "PlayNPause" },
                g(Nn, { gridIdentifier: "PlayNPause" }, "Play"),
                g(Y.play, {
                  onClick: function () {
                    return t.play();
                  },
                })
              )
            : null;
        },
        void 0,
        "PlayNPause"
      );
      var Bn = function (e, n) {
          var t = "clientX" in e ? e.clientX : (e.touches[0] || {}).pageX,
            r = n.getBoundingClientRect().left,
            a = n.offsetWidth + r,
            o = (function (e, n, t) {
              return e > t ? t - n : e - n >= 0 ? e - n : 0;
            })(t, r, a),
            i = (function (e, n, t, r) {
              return e - n >= t
                ? 100
                : e - n > 0
                ? ((e - n) / r) * 100 > 100
                  ? 100
                  : ((e - n) / r) * 100
                : 0;
            })(t, r, a, n.offsetWidth);
          return { percentage: i, position: o };
        },
        Mn = function (e, n, t) {
          if (n) return (Bn(e, n).percentage / 100) * (t || NaN);
        },
        Fn = function (e, n, t, r) {
          var a,
            o,
            i,
            l = r.chapters.value,
            s = r.duration.value;
          (e.innerText = (function (e, n, t) {
            return n.length > 0
              ? ""
                  .concat(
                    (function (e, n, t) {
                      var r = (e / 100) * (t || NaN),
                        a = n.find(function (e) {
                          var n = e.start,
                            t = e.end;
                          return r >= n && r <= t;
                        });
                      return (null == a ? void 0 : a.title) ? a.title : "";
                    })(e, n, t),
                    " "
                  )
                  .concat(M((e / 100) * (t || NaN)))
              : M((e / 100) * (t || NaN));
          })(t.percentage, l, s)),
            (e.style.left =
              ((o = n),
              (i = t.position - (a = e).offsetWidth / 2) < 0
                ? "0px"
                : i + a.offsetWidth >= o.offsetWidth
                ? "".concat(o.offsetWidth - a.offsetWidth, "px")
                : "".concat(i, "px")));
        },
        Un = function (e, n) {
          Array.from(e).forEach(function (e) {
            e.classList.contains("buffer") ||
              ((e.style.background = n), (e.style.borderColor = n));
          });
        },
        jn = function (e, n, t) {
          if (e && e.children) {
            var r = t.chapters.value;
            Array.from(e.children).forEach(function (e, t) {
              var a = Array.from(e.children),
                o = r[t],
                i = o.start,
                l = o.end;
              if (n < i) return Un(a, "");
              if (n >= i && n >= l) return Un(a, "var(--primary)");
              var s = e.querySelector(".buffer"),
                u = ((n - i) / (l - i)) * 100,
                c =
                  "linear-gradient(\n          to right,\n          var(--primary) 0%,\n          var(--primary) "
                    .concat(u, "%, \n          var(--accent) ")
                    .concat(u, "%, \n          var(--accent) 100%)\n        ");
              s && (s.style.clipPath = "inset(0px 0px 0px ".concat(u, "%)")),
                Un([a[0]], "var(--primary)"),
                Un([a[3]], ""),
                (a[1].style.background = c);
            });
          }
        };
      j(i(4577));
      var Hn = function (e, n, t) {
        return ((n - e) / (t || NaN)) * 100;
      };
      const zn = function () {
        var e = rn().state,
          n = e.chapters.value,
          t = e.duration.value;
        return n.length > 0
          ? g(
              b,
              null,
              n.map(function (e, n) {
                var r = e.start,
                  a = e.end;
                return g(
                  "div",
                  {
                    class: "segment-container",
                    key: n,
                    style: { width: "".concat(Hn(r, a, t), "%") },
                  },
                  g("div", { class: "separator-left" }),
                  g("div", {
                    class: "segment",
                    style: { background: "var(--accent)" },
                  }),
                  g("div", { class: "buffer segment" }),
                  g("div", { class: "separator-right" })
                );
              })
            )
          : null;
      };
      var Gn = function (e, n) {
          return n[0] <= e && n[1] > e;
        },
        Wn = function (e, n, t) {
          var r = document.createElement("div");
          (r.className = "buffer-fragment"),
            (r.style.width = "".concat(e, "px")),
            (r.style.left = "".concat(n, "px")),
            t.append(r);
        },
        Qn = function (e, n, t) {
          var r = e.querySelector(".buffer");
          if (r) {
            r.innerHTML = "";
            var a = document.createElement("div");
            (a.style.width = "".concat(t - n, "px")),
              (a.style.left = "".concat(n, "px")),
              (a.className = "buffer-fragment"),
              r.append(a);
          }
        };
      var qn = function (e, n, t) {
        if (e) {
          var r = e.querySelector(".current-time"),
            a = t.duration.value;
          if (r && a) {
            var o = (n / a) * 100;
            r.style.width = "".concat(o, "%");
          }
        }
      };
      j(i(3515));
      const Kn = function () {
        return rn().state.chapters.value.length > 0
          ? null
          : g(
              "div",
              { class: "line-container" },
              g("div", { class: "buffer" }),
              g("div", { class: "current-time" })
            );
      };
      function Jn() {
        var e = rn().state,
          n = e.currentTime.value,
          t = e.duration.value || NaN,
          r = e.chapters.value.length > 0,
          a = e.playerConfig.value,
          o = a.showProgressBar,
          i = void 0 === o || o,
          l = a.showTimeText,
          s = void 0 === l || l,
          u = ge(null),
          c = ge(null),
          d = ge(null),
          p = ge(null),
          f = (function (e) {
            var n = e.thumbEl,
              t = e.baseBarEl,
              r = e.anchorEl,
              a = e.containerEl,
              o = e.updateBaseBar,
              i = rn(),
              l = i.state,
              s = i.method,
              u = i.setHoldPlayerVisibility,
              c = i.resetPlayerVisibilityCounter,
              d = ve(!1),
              p = d[0],
              f = d[1],
              v = ge(null),
              h = l.duration.value,
              m = l.chapters.value,
              g = l.currentTime.value;
            he(
              function () {
                u(p);
              },
              [p, u]
            ),
              me(
                function () {
                  if (t && n && r && !0 !== p) {
                    var e = (g / (h || NaN)) * 100;
                    o(t, g, l), (n.style.left = "".concat(e, "%"));
                  }
                },
                [r, t, p, n, g, h, o, m, l]
              );
            var y = be(
                function (e) {
                  if (r && a) {
                    var n = Bn(e, a);
                    Fn(r, a, n, l);
                  }
                },
                [r, a, l]
              ),
              b = be(
                function (e) {
                  if (n && t && r && a) {
                    n.classList.remove("thumb-animation"),
                      t.classList.remove("thumb-animation");
                    var i = Bn(e, a),
                      s = i.position,
                      u = i.percentage;
                    n.style.left = "".concat(s, "px");
                    var c = Mn(e, a, h);
                    c &&
                      (o(t, c, l),
                      Fn(r, a, { position: s, percentage: u }, l),
                      (v.current = u));
                  }
                },
                [r, t, a, h, l, n, o]
              ),
              w = be(
                function (e) {
                  if (n && t && r && a) {
                    var i = Bn(e, a),
                      u = i.position,
                      d = i.percentage;
                    n.style.left = "".concat(u, "px");
                    var p = Mn(e, a, h);
                    if (p) {
                      o(t, p, l), Fn(r, a, { position: u, percentage: d }, l);
                      var f = (d / 100) * (h || NaN);
                      s.seek(f).catch(function () {}), c();
                    }
                  }
                },
                [r, t, a, h, s, c, l, n, o]
              ),
              x = be(
                function () {
                  if (null !== v.current) {
                    var e = (v.current / 100) * (h || NaN);
                    s.seek(e).finally(function () {
                      f(!1), (v.current = null);
                    });
                  } else f(!1);
                  n &&
                    t &&
                    (n.classList.add("thumb-animation"),
                    t.classList.add("thumb-animation"),
                    document.removeEventListener("mousemove", b),
                    document.removeEventListener("mouseup", x),
                    document.removeEventListener("touchend", x),
                    document.removeEventListener("touchmove", b));
                },
                [t, h, b, s, n]
              ),
              C = be(
                function (e) {
                  if (!(e instanceof MouseEvent && 2 === e.button)) {
                    if ((e.preventDefault(), e.target !== n)) return w(e);
                    f(!0),
                      document.addEventListener("mousemove", b),
                      document.addEventListener("mouseup", x),
                      document.addEventListener("touchend", x),
                      document.addEventListener("touchmove", b);
                  }
                },
                [x, b, n, w]
              );
            return (
              he(
                function () {
                  if (a)
                    return (
                      a.addEventListener("mousemove", y),
                      a.addEventListener("mousedown", C),
                      a.addEventListener("touchstart", C),
                      function () {
                        a &&
                          (a.removeEventListener("mousedown", y),
                          a.removeEventListener("mousedown", C),
                          a.removeEventListener("touchstart", C));
                      }
                    );
                },
                [a, y, C]
              ),
              { isDragging: p }
            );
          })({
            thumbEl: c.current,
            baseBarEl: u.current,
            containerEl: p.current,
            anchorEl: d.current,
            updateBaseBar: r ? jn : qn,
          }),
          v = f.isDragging;
        return (
          (function (e) {
            var n = rn(),
              t = n.state,
              r = n.videoEl,
              a = t.chapters.value,
              o = be(
                function (n, t, r) {
                  if (e.current) {
                    var o = (e.current.offsetWidth - 7 * a.length) / r,
                      i = e.current,
                      l = (function (e, n, t) {
                        return t.filter(function (t) {
                          var r = t.start,
                            a = t.end;
                          return !!Gn(e, [r, a]) || !!Gn(n, [r, a]);
                        });
                      })(n, t, a);
                    !(function (e) {
                      Array.from(e.children).forEach(function (e) {
                        var n = e.querySelector(".buffer");
                        n && (n.innerHTML = "");
                      });
                    })(i),
                      l.length > 0 &&
                        l.forEach(function (e) {
                          var r = e.start,
                            a = e.end,
                            l = e.chapterIndex,
                            s = i.children[l].querySelector(".buffer");
                          if (s) {
                            var u = s.offsetWidth / (a - r);
                            r >= n && a >= t && Wn(o * (t - r), 0, s),
                              n >= r &&
                                a >= t &&
                                Wn(o * (t - n), (n - r) * u, s),
                              n >= r &&
                                t >= a &&
                                Wn(o * (a - n), (n - r) * u, s);
                          }
                        });
                  }
                },
                [e, a]
              ),
              i = be(
                function () {
                  if (e.current && r)
                    for (
                      var n = e.current.offsetWidth / r.duration, t = 0;
                      t < r.buffered.length;
                      t++
                    )
                      if (a.length > 0)
                        o(r.buffered.start(t), r.buffered.end(t), r.duration);
                      else {
                        var i = r.buffered.start(t) * n,
                          l = r.buffered.end(t) * n;
                        Qn(e.current, i, l);
                      }
                },
                [e, a.length, o, r]
              );
            he(
              function () {
                if (r)
                  return (
                    r.addEventListener("seeked", i),
                    r.addEventListener("progress", i),
                    function () {
                      r.removeEventListener("seeked", i),
                        r.removeEventListener("progress", i);
                    }
                  );
              },
              [i, r]
            );
          })(u),
          i && !isNaN(t)
            ? g(
                "div",
                { className: "VideoProgress", noTogglePlay: !0 },
                s && g("span", { className: "both-side-time" }, M(n)),
                g(
                  "div",
                  { class: "container", ref: p },
                  g(
                    "div",
                    { class: "base-bar thumb-animation", ref: u },
                    g(zn, null),
                    g(Kn, null)
                  ),
                  g("div", {
                    className: v ? "anchor anchor-visible" : "anchor",
                    ref: d,
                  }),
                  g(
                    "div",
                    { class: "thumb thumb-animation", ref: c },
                    g("div", { class: "thumb-display" })
                  )
                ),
                s &&
                  g(
                    b,
                    null,
                    g("span", { className: "left-side-time" }, M(t - n)),
                    g("span", { className: "both-side-time" }, M(t))
                  )
              )
            : null
        );
      }
      function Yn(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function Zn(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function $n(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Zn(Object(t), !0).forEach(function (n) {
                Yn(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Zn(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      j(i(605)), j(i(2887));
      const Xn = function (e) {
          var n = e.children,
            t = e.hostElRef,
            r = rn(),
            a = r.state,
            o = r.method,
            i = a.playerEl,
            l = a.activeBadgeHost,
            s = ge(null),
            u = en(function () {
              if (null !== i.value && l.value) {
                var e = i.value.clientHeight;
                return l.value.offsetTop / e > 0.5
                  ? l.value.offsetTop - 32
                  : e - (l.value.offsetTop + l.value.offsetHeight + 20);
              }
            }),
            c = en(function () {
              if (!l.value) return NaN;
              if (i.value) {
                var e = i.value.clientWidth;
                return l.value.offsetLeft / e > 0.5
                  ? l.value.offsetLeft + l.value.offsetWidth
                  : e - l.value.offsetLeft;
              }
            }),
            d = (function (e, n) {
              if (n && e) {
                var t = { top: NaN, left: NaN, bottom: NaN, right: NaN },
                  r = n.offsetLeft / e.clientWidth > 0.5;
                return (
                  n.offsetTop / e.clientHeight > 0.5
                    ? (t.bottom = e.clientHeight - n.offsetTop + 10)
                    : (t.top = n.offsetTop + n.offsetHeight),
                  r
                    ? (t.right = e.clientWidth - (n.offsetLeft + n.offsetWidth))
                    : (t.left = n.offsetLeft),
                  Object.keys(t).forEach(function (e) {
                    return isNaN(t[e]) ? delete t[e] : null;
                  }),
                  t
                );
              }
            })(i.value, l.value);
          return (
            null != d && d.top && (d.top += 20),
            null != d && d.bottom && (d.bottom -= 20),
            he(
              function () {
                s.current &&
                  d &&
                  s.current.animate(
                    $n(
                      $n(
                        $n({}, d.top && { top: "".concat(d.top - 20, "px") }),
                        d.bottom && { bottom: "".concat(d.bottom + 20, "px") }
                      ),
                      {},
                      { opacity: 1 }
                    ),
                    { duration: 400, fill: "forwards", easing: "ease" }
                  );
              },
              [d]
            ),
            l.value && t.current === l.value
              ? g(
                  b,
                  null,
                  g("div", {
                    className: "Badge-Closing-Layer",
                    onClick: function () {
                      o.toggleBadge(null), o.openSettingPanel(!1);
                    },
                  }),
                  g(
                    "div",
                    {
                      className: "Badge",
                      ref: s,
                      style: $n({ maxHeight: u.value, maxWidth: c.value }, d),
                    },
                    n
                  )
                )
              : null
          );
        },
        et = function (e) {
          var n = e.handleBack,
            t = rn(),
            r = t.state,
            a = t.method,
            o = r.captions.value,
            i = r.activeCaptionId.value,
            l = r.captionVisibility.value,
            s = function (e, n) {
              if (
                (a.updateActiveCaptionId(n), "TURN_OFF" === n || (n === i && l))
              )
                return a.setCaptionVisibility(!1);
            };
          return g(
            "div",
            { className: "panel-list" },
            g(
              "div",
              { className: "panel-header", onClick: n },
              n && g(Y.backArrow, { className: "panel-icon-left" }),
              " Captions"
            ),
            g(
              "div",
              {
                className: l
                  ? "panel panel-content"
                  : "panel panel-content panel-disabled",
                onClick: function (e) {
                  return s(0, "TURN_OFF");
                },
              },
              !l && g(Y.tick, { className: "panel-icon-left" }),
              "Turn Off Captions"
            ),
            Array.from(o || []).map(function (e) {
              var n = e.id,
                t = e.label,
                r = e.language;
              return (
                n &&
                g(
                  "div",
                  {
                    className: "panel panel-content",
                    onClick: function (e) {
                      return s(0, n);
                    },
                  },
                  i === n && l && g(Y.tick, { className: "panel-icon-left" }),
                  t,
                  "   (",
                  r,
                  ")"
                )
              );
            })
          );
        };
      j(i(5104));
      const nt = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = ge(null),
            a = n.captions.value,
            o = n.captionVisibility.value,
            i = n.playerConfig.value.showCaptionsControl,
            l = void 0 === i || i;
          return Array.from(a || []).filter(function (e) {
            var n = e.language;
            return Boolean(n);
          }).length > 0 && l
            ? g(
                b,
                null,
                g(Xn, { hostElRef: r }, g(et, null)),
                g(
                  "div",
                  {
                    className: "Captions",
                    ref: r,
                    onClick: function () {
                      t.toggleBadge(r.current);
                    },
                  },
                  g(Nn, { gridIdentifier: "Captions" }, "Captions"),
                  g(Y.captions, { isActive: o })
                )
              )
            : null;
        },
        {
          label: "Captions",
          action: function (e, n) {
            return n.method.openSettingPanel("CAPTIONS");
          },
          icon: function () {
            var e,
              n,
              t = rn().state;
            return g(
              b,
              null,
              t.captionVisibility.value
                ? ((e = t.activeCaptionId.value),
                  (n = t.captions.value),
                  Array.from(n || [])
                    .map(function (n) {
                      return n.id === e && n.label;
                    })
                    .filter(Boolean)[0])
                : "OFF"
            );
          },
        },
        "Captions"
      );
      var tt = function (e) {
        var n,
          t,
          r = e.storedContent,
          a = r.tracks[0],
          o = Xe(!1),
          i = rn(),
          l = i.state,
          s = i.method,
          u = l.tracksDownloadManger.value,
          c = l.offlineStoredContentList.value;
        return u && a
          ? g(
              "div",
              { className: "panel panel-content downloaded" },
              g(Y.tick, { className: "panel-icon-left" }),
              null === (n = r.appMetadata) || void 0 === n ? void 0 : n.label,
              o.value && g(On, { size: 13, className: "panel-icon-right" }),
              !o.value &&
                g(Y.remove, {
                  className: "panel-icon-right",
                  onClick:
                    ((t = a.id),
                    function () {
                      if (!o.value) {
                        o.value = !0;
                        var e = c.filter(function (e) {
                          var n = e.tracks;
                          return t === n[0].id;
                        })[0];
                        u.removeTrack(e.offlineUri, t).finally(function () {
                          (o.value = !1),
                            u
                              .getDownloadedTrackList()
                              .then(s.updateOfflineStoreContentList);
                        });
                      }
                    }),
                })
            )
          : null;
      };
      function rt(e, n, t, r, a, o, i) {
        try {
          var l = e[o](i),
            s = l.value;
        } catch (e) {
          return void t(e);
        }
        l.done ? n(s) : Promise.resolve(s).then(r, a);
      }
      function at(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(n, t);
            function i(e) {
              rt(o, r, a, i, l, "next", e);
            }
            function l(e) {
              rt(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var ot = i(2841),
        it = i.n(ot);
      function lt(e) {
        var n = e.track,
          t = e.handleDownload,
          r = e.currentDownloadingTrackId,
          a = e.downloadProgress,
          o = rn(),
          i = o.state,
          l = o.method,
          s = Xe(!1),
          u = r.value === n.id,
          c = i.tracksDownloadManger.value,
          d = i.offlineStoredContentList.value,
          p = i.metaData.value;
        if (!c || !p) return null;
        if (c.tracks.length < 1) return null;
        var f,
          v = Boolean(
            d.filter(function (e) {
              var t = e.tracks;
              return n.id === t[0].id;
            }).length
          );
        return g(
          "div",
          {
            className: v
              ? "panel panel-content downloaded"
              : "panel panel-content",
            style: {
              background: "linear-gradient(90deg, #fff3 ".concat(
                100 * a,
                "%, transparent 0%)"
              ),
            },
            onClick: t,
          },
          v && g(Y.tick, { className: "panel-icon-left" }),
          n.label,
          (u || s.value) && g(On, { size: 13, className: "panel-icon-right" }),
          v &&
            !s.value &&
            g(Y.remove, {
              className: "panel-icon-right",
              onClick:
                ((f = n.id),
                function () {
                  if (!s.value) {
                    s.value = !0;
                    var e = d.filter(function (e) {
                      var n = e.tracks;
                      return f === n[0].id;
                    })[0];
                    c.removeTrack(e.offlineUri, f).finally(function () {
                      (s.value = !1),
                        c
                          .getDownloadedTrackList()
                          .then(l.updateOfflineStoreContentList);
                    });
                  }
                }),
            })
        );
      }
      function st(e, n) {
        var t =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = (function (e, n) {
              if (e) {
                if ("string" == typeof e) return ut(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? ut(e, n)
                    : void 0
                );
              }
            })(e)) ||
            (n && e && "number" == typeof e.length)
          ) {
            t && (e = t);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          i = !0,
          l = !1;
        return {
          s: function () {
            t = t.call(e);
          },
          n: function () {
            var e = t.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (l = !0), (o = e);
          },
          f: function () {
            try {
              i || null == t.return || t.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function ut(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      var ct = function (e) {
        var n = e.isChoosingQuality,
          t = rn(),
          r = t.state,
          a = t.method,
          o = Xe(-1),
          i = Xe(0),
          l = Xe([]),
          s = r.tracksDownloadManger.value,
          u = r.offlineStoredContentList.value,
          c = r.metaData.value;
        if (!s || !c) return null;
        var d = function (e) {
            return Boolean(
              u.filter(function (n) {
                var t = n.tracks;
                return e === t[0].id;
              }).length
            );
          },
          p = function (e) {
            e === o.value && ((i.value = 0), (o.value = -1), (n.value = !1));
          };
        return s && c
          ? s.tracks.length < 1
            ? null
            : g(
                b,
                null,
                s.tracks.map(function (e) {
                  return g(lt, {
                    track: e,
                    key: e.id,
                    handleDownload:
                      ((n = e.id),
                      at(
                        it().mark(function e() {
                          var t;
                          return it().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (o.value !== n) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  if (!d(n)) {
                                    e.next = 4;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 4:
                                  (o.value = n),
                                    l.value.forEach(function (e) {
                                      return e.abort();
                                    }),
                                    (l.value = []),
                                    (t = s.downloadTrack(n, function (e) {
                                      e < 0.05 || (i.value = e);
                                    })),
                                    l.value.push(t),
                                    t.finally(
                                      (function () {
                                        var e = at(
                                          it().mark(function e(t) {
                                            var r, i, l, c;
                                            return it().wrap(
                                              function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      if (t || n !== o.value) {
                                                        e.next = 2;
                                                        break;
                                                      }
                                                      return e.abrupt(
                                                        "return",
                                                        a.updateErrorOnSaveOfflineAttempt(
                                                          "Error: Device not supported"
                                                        )
                                                      );
                                                    case 2:
                                                      (r = st(u)),
                                                        (e.prev = 3),
                                                        r.s();
                                                    case 5:
                                                      if ((i = r.n()).done) {
                                                        e.next = 11;
                                                        break;
                                                      }
                                                      return (
                                                        (l =
                                                          i.value.offlineUri),
                                                        (e.next = 9),
                                                        s.removeTrack(l, n)
                                                      );
                                                    case 9:
                                                      e.next = 5;
                                                      break;
                                                    case 11:
                                                      e.next = 16;
                                                      break;
                                                    case 13:
                                                      (e.prev = 13),
                                                        (e.t0 = e.catch(3)),
                                                        r.e(e.t0);
                                                    case 16:
                                                      return (
                                                        (e.prev = 16),
                                                        r.f(),
                                                        e.finish(16)
                                                      );
                                                    case 19:
                                                      return (
                                                        (e.next = 21),
                                                        s.getDownloadedTrackList()
                                                      );
                                                    case 21:
                                                      (c = e.sent),
                                                        a.updateOfflineStoreContentList(
                                                          c
                                                        ),
                                                        p(n);
                                                    case 24:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              },
                                              e,
                                              null,
                                              [[3, 13, 16, 19]]
                                            );
                                          })
                                        );
                                        return function (n) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    );
                                case 10:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )),
                    currentDownloadingTrackId: o,
                    downloadProgress: o.value === e.id ? i.value : 0,
                  });
                  var n;
                })
              )
          : null;
      };
      j(i(5114));
      const dt = function (e) {
          var n = e.handleBack,
            t = rn().state,
            r = Xe(!1),
            a = t.tracksDownloadManger.value,
            o = t.offlineStoredContentList.value,
            i = o.length > 0,
            l = t.errorOnSaveOfflineAttempt.value;
          return a
            ? a.tracks.length < 1
              ? null
              : g(
                  "div",
                  { className: "panel-list" },
                  g(
                    "div",
                    { className: "panel-header", onClick: n },
                    n && g(Y.backArrow, { className: "panel-icon-left" }),
                    i ? "Saved Offline" : "Save Offline"
                  ),
                  i && !r.value
                    ? g(
                        b,
                        null,
                        g(tt, { storedContent: o[0] }),
                        g(
                          "div",
                          {
                            class: "panel panel-content",
                            onClick: function () {
                              return (r.value = !0);
                            },
                          },
                          "Choose different quality   ❯"
                        )
                      )
                    : g(
                        b,
                        null,
                        l
                          ? g("div", { class: "panel panel-content" }, l)
                          : g(ct, { isChoosingQuality: r })
                      )
                )
            : null;
        },
        pt = function (e) {
          var n = e.handleBack,
            t = rn(),
            r = t.state,
            a = t.method,
            o = r.availablePlaybackRates.value,
            i = r.playbackRate.value,
            l = r.playerConfig.value.playbackSpeedOptions || o;
          return l
            ? g(
                "div",
                { className: "panel-list" },
                g(
                  "div",
                  { className: "panel-header", onClick: n },
                  n && g(Y.backArrow, { className: "panel-icon-left" }),
                  "   Playback Speed"
                ),
                l.map(function (e) {
                  return g(
                    "div",
                    {
                      className: "panel panel-content",
                      key: e,
                      onClick: function (t) {
                        return (function (e, t) {
                          a.setPlaybackRate(t), n && n(e);
                        })(t, e);
                      },
                    },
                    i === e && g(Y.tick, { className: "panel-icon-left" }),
                    1 !== e ? e : "Normal"
                  );
                })
              )
            : null;
        };
      var ft = function (e) {
        return "".concat(10 * Math.round(e / 1e3 / 10), " kbps");
      };
      const vt = function (e) {
        var n = e.handleBack,
          t = rn(),
          r = t.state,
          a = t.method,
          o = r.availableQualities.value,
          i = r.activeQualityTrackId.value,
          l = r.abrStatus.value,
          s = function (e, t) {
            a.selectQualityTrack(t), n && n(e);
          };
        if (!o) return null;
        var u = o.filter(function (e) {
          return e.id === i;
        })[0];
        return g(
          "div",
          { className: "panel-list" },
          g(
            "div",
            { className: "panel-header", onClick: n },
            n && g(Y.backArrow, { className: "panel-icon-left" }),
            " Quality"
          ),
          g(
            "div",
            {
              className: "panel panel-content",
              onClick: function (e) {
                return s(e, -1);
              },
            },
            l && g(Y.tick, { className: "panel-icon-left" }),
            "Auto"
          ),
          o.map(function (e) {
            var n = e.id,
              t = e.bandwidth;
            return g(
              "div",
              {
                className: "panel panel-content",
                onClick: function (e) {
                  return s(e, n);
                },
                key: n,
              },
              u &&
                u.id === n &&
                !l &&
                g(Y.tick, { className: "panel-icon-left" }),
              ft(t)
            );
          })
        );
      };
      var ht = function (e, n) {
        var t = e.isChapterLayerOpen.value;
        n.toggleChapterLayer(!t);
      };
      const mt = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = n.isChapterLayerOpen;
          return n.chapters.value.length > 0
            ? g(
                "div",
                { className: "Chapters" },
                g(Nn, { gridIdentifier: "Chapters" }, "Chapters"),
                g(Y.chapters, {
                  onClick: function () {
                    return ht(n, t);
                  },
                  isActive: r.value,
                })
              )
            : null;
        },
        {
          label: "Chapter",
          icon: Y.chapters,
          action: function (e, n) {
            var t = n.state,
              r = n.method;
            return ht(t, r);
          },
        },
        "Chapters"
      );
      j(i(793));
      const gt = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = n.playerConfig.value.enableCaptionSearch,
            a = void 0 === r || r;
          return Array.from(n.captions.value || []).filter(function (e) {
            var n = e.language;
            return Boolean(n);
          }).length > 0 && a
            ? g(
                "div",
                { className: "CaptionSearch" },
                g(Nn, { gridIdentifier: "CaptionSearch" }, "Caption Search"),
                g(Y.captionSearch, {
                  onClick: function () {
                    return t.toggleSearchCaption(!0);
                  },
                })
              )
            : null;
        },
        {
          label: "Caption Search",
          icon: Y.captionSearch,
          action: function (e, n) {
            return n.method.toggleSearchCaption(!0);
          },
        },
        "CaptionSearch"
      );
      j(i(454));
      const yt = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = ge(null),
            a = n.availableQualities.value,
            o = n.playerConfig.value.showQualityControl,
            i = void 0 === o || o;
          return !a || a.length <= 1 || !i
            ? null
            : g(
                b,
                null,
                g(Xn, { hostElRef: r }, g(vt, null)),
                g(
                  "div",
                  {
                    className: "Quality",
                    ref: r,
                    onClick: function () {
                      return t.toggleBadge(r.current);
                    },
                  },
                  g(Nn, { gridIdentifier: "Quality" }, "Quality"),
                  g(Y.quality, null)
                )
              );
        },
        {
          icon: function () {
            var e = rn().state,
              n = ze(function () {
                var n;
                return null === (n = e.availableQualities.value) || void 0 === n
                  ? void 0
                  : n.filter(function (n) {
                      return n.id === e.activeQualityTrackId.value;
                    })[0];
              });
            return n.value
              ? g(
                  b,
                  null,
                  e.abrStatus.value
                    ? " Auto (".concat(ft(n.value.bandwidth), ")")
                    : "".concat(n.value.label)
                )
              : e.abrStatus.value
              ? g(b, null, "Auto")
              : null;
          },
          label: "Quality",
          action: function (e, n) {
            return n.method.openSettingPanel("QUALITY");
          },
        },
        "Quality"
      );
      j(i(6768));
      const bt = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = ge(null),
            a = n.playbackRate.value,
            o = n.playerConfig.value.showSpeedControl;
          return void 0 === o || o
            ? g(
                b,
                null,
                g(Xn, { hostElRef: r }, g(pt, null)),
                g(
                  "div",
                  {
                    className: "Speed",
                    ref: r,
                    onClick: function () {
                      t.toggleBadge(r.current);
                    },
                  },
                  g(Nn, { gridIdentifier: "Speed" }, "Speed"),
                  g(
                    "div",
                    { class: "text-icon", noTogglePlay: !0 },
                    a,
                    g("span", null, "x")
                  )
                )
              )
            : null;
        },
        {
          icon: function () {
            var e = rn().state;
            return g(
              b,
              null,
              1 === e.playbackRate.value ? "Normal" : e.playbackRate.value
            );
          },
          label: "Speed",
          action: function (e, n) {
            return n.method.openSettingPanel("PLAYBACK_SPEED");
          },
        },
        "Speed"
      );
      j(i(2233));
      const wt = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = ge(null),
            a = n.tracksDownloadManger.value,
            o = n.playerConfig.value.enableSaveOffline,
            i = void 0 !== o && o;
          return a && a.tracks.length > 0 && a.isSupported() && i
            ? g(
                b,
                null,
                g(Xn, { hostElRef: r }, g(dt, null)),
                g(
                  "div",
                  {
                    class: "SaveVideoOffline",
                    ref: r,
                    onClick: function () {
                      t.toggleBadge(r.current);
                    },
                  },
                  g(Nn, { gridIdentifier: "SaveVideoOffline" }, "Save Video"),
                  g(Y.saveVideoOffline, null)
                )
              )
            : null;
        },
        {
          icon: Y.saveVideoOffline,
          label: "Save Video",
          action: function (e, n) {
            return n.method.openSettingPanel("DOWNLOAD_VIDEO");
          },
        },
        "SaveVideoOffline"
      );
      function xt() {
        var e,
          n = rn(),
          t = n.state,
          r = n.collapseInSettings,
          a = t.playerConfig.value,
          o = a.showSpeedControl,
          i = void 0 === o || o,
          l = a.enableCaptionSearch,
          s = void 0 === l || l,
          u = a.showCaptionsControl,
          c = void 0 === u || u,
          d = a.showQualityControl,
          p = void 0 === d || d,
          f = a.enableSaveOffline,
          v = void 0 !== f && f,
          h = t.chapters.value.length > 0,
          m = t.tracksDownloadManger.value,
          y = !(
            null === (e = t.availableQualities.value) ||
            void 0 === e ||
            !e.length
          ),
          w =
            Array.from(t.captions.value || []).filter(function (e) {
              var n = e.language;
              return Boolean(n);
            }).length > 0,
          x = h && r.value.includes("Chapters"),
          C = s && w && r.value.includes("CaptionSearch"),
          _ = i && r.value.includes("Speed"),
          E = c && w && r.value.includes("Captions"),
          k = p && y && r.value.includes("Quality"),
          S =
            v &&
            m &&
            m.tracks.length > 0 &&
            r.value.includes("SaveVideoOffline");
        return g(
          b,
          null,
          x && g(mt, { isChildOfCollapseHOC: !0 }),
          C && g(gt, { isChildOfCollapseHOC: !0 }),
          _ && g(bt, { isChildOfCollapseHOC: !0 }),
          E && g(nt, { isChildOfCollapseHOC: !0 }),
          k && g(yt, { isChildOfCollapseHOC: !0 }),
          S && g(wt, { isChildOfCollapseHOC: !0 })
        );
      }
      function Ct() {
        var e = rn(),
          n = e.method,
          t = e.state,
          r = function () {
            n.openSettingPanel(!1);
          };
        return g(
          b,
          null,
          "PLAYBACK_SPEED" === t.activeSettingPanel.value &&
            g(pt, { handleBack: r }),
          "QUALITY" === t.activeSettingPanel.value && g(vt, { handleBack: r }),
          "CAPTIONS" === t.activeSettingPanel.value && g(et, { handleBack: r }),
          "DOWNLOAD_VIDEO" === t.activeSettingPanel.value &&
            g(dt, { handleBack: r }),
          !t.activeSettingPanel.value &&
            g("div", { className: "panel-list" }, g(xt, null))
        );
      }
      j(i(7491));
      const _t = En(
        function () {
          var e = rn(),
            n = e.isSettingIconHidden,
            t = e.method,
            r = ge(null);
          return n.value
            ? null
            : g(
                b,
                null,
                g(Xn, { hostElRef: r }, g(Ct, null)),
                g(
                  "div",
                  {
                    className: "Setting",
                    ref: r,
                    onClick: function () {
                      return t.toggleBadge(r.current);
                    },
                  },
                  g(Nn, { gridIdentifier: "Setting" }, "Settings"),
                  g(Y.setting, {
                    className: t.isBadgeActive(r.current)
                      ? "controller-icon badge-open-animation"
                      : "controller-icon",
                  })
                )
              );
        },
        void 0,
        "Setting"
      );
      j(i(4431));
      const Et = En(
        function () {
          var e = rn().state,
            n = (function () {
              var e = rn(),
                n = e.state,
                t = e.method,
                r = ve(!1),
                a = r[0],
                o = r[1],
                i = n.hostEl.value,
                l = n.isFullscreen.value,
                s = n.videoEl.value,
                u = n.activeCaptionId.value,
                c = n.eventBus.value,
                d = be(
                  function () {
                    var e = window.document;
                    if (
                      (void 0 ===
                        (e.fullscreenElement ||
                          e.webkitFullscreenElement ||
                          e.mozFullScreenElement ||
                          e.msFullscreenElement) &&
                        i &&
                        ((i.className = i.className.replace(
                          " vdo-full-screen-player",
                          ""
                        )),
                        e.removeEventListener("webkitfullscreenchange", d),
                        e.removeEventListener("mozfullscreenchange", d),
                        e.removeEventListener("fullscreenchange", d),
                        e.removeEventListener("MSFullscreenChange", d),
                        t.updateFullscreenStatus(!1)),
                      s)
                    ) {
                      var n = Array.from(
                        null == s ? void 0 : s.textTracks
                      ).find(function (e) {
                        return "showing" === e.mode;
                      });
                      if (!n) return;
                      n.id !== u && t.updateActiveCaptionId(n.id);
                    }
                  },
                  [u, i, t, s]
                ),
                p = be(
                  function (e) {
                    void 0 === e && (e = document),
                      e.addEventListener("webkitfullscreenchange", d),
                      e.addEventListener("mozfullscreenchange", d),
                      e.addEventListener("fullscreenchange", d),
                      e.addEventListener("MSFullscreenChange", d);
                  },
                  [d]
                ),
                f = be(
                  function (e) {
                    if (i) {
                      var n,
                        t = i,
                        r =
                          (n = t).requestFullscreen ||
                          n.webkitRequestFullscreen ||
                          n.mozRequestFullScreen ||
                          n.msRequestFullscreen;
                      if (e)
                        r.call(t),
                          (t.className += " vdo-full-screen-player"),
                          p();
                      else {
                        var a = window.document;
                        a.exitFullscreen
                          ? a.exitFullscreen()
                          : a.msExitFullscreen
                          ? a.msExitFullscreen()
                          : a.mozCancelFullScreen
                          ? a.mozCancelFullScreen()
                          : a.webkitExitFullscreen && a.webkitExitFullscreen(),
                          (t.className = t.className.replace(
                            " vdo-full-screen-player",
                            ""
                          ));
                      }
                    }
                  },
                  [p, i]
                ),
                v = be(
                  function (e) {
                    s &&
                      (e
                        ? (s.webkitEnterFullscreen(), p(s))
                        : (s.webkitExitFullscreen(),
                          s.removeEventListener("webkitfullscreenchange", d),
                          s.removeEventListener("fullscreenchange", d)));
                  },
                  [p, d, s]
                ),
                h = be(
                  function (e) {
                    null == c || c.emit("setSemiFullscreen", e);
                  },
                  [c]
                ),
                m = be(
                  function (e) {
                    if (null !== s) {
                      var n = !0 === e,
                        r = H(s);
                      "DOM" === r && f(n),
                        "SEMI" === r && h(n),
                        "NATIVE" === r && v(n),
                        "NATIVE" !== r && t.updateFullscreenStatus(n);
                    }
                  },
                  [s, f, h, v, t]
                );
              return (
                he(
                  function () {
                    c &&
                      !a &&
                      (c.on("requestFullscreenChange", function (e) {
                        return m(e);
                      }),
                      o(!0));
                  },
                  [c, a, m]
                ),
                {
                  toggle: function () {
                    return m(!l);
                  },
                  setFullscreen: function (e) {
                    return m(e);
                  },
                }
              );
            })(),
            t = n.toggle,
            r = e.playerConfig.value.showFullScreen;
          return void 0 === r || r
            ? g(
                "div",
                { className: "FullScreen" },
                g(Nn, { gridIdentifier: "FullScreen" }, "Fullscreen"),
                g(Y.fullScreen, { onClick: t })
              )
            : null;
        },
        void 0,
        "FullScreen"
      );
      j(i(9091));
      const kt = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = ge(null),
            a = en(function () {
              return null === n.volume.value ? 100 : 100 * n.volume.value;
            });
          !(function (e, n, t) {
            void 0 === t && (t = "0");
            var r = ve(t),
              a = r[0],
              o =
                (r[1],
                be(
                  function (e) {
                    return "linear-gradient(to right, "
                      .concat(n, " 0%, ")
                      .concat(n, " ")
                      .concat(e, "%, var(--accent) ")
                      .concat(e, "%, var(--accent) 100%)");
                  },
                  [n]
                ));
            he(
              function () {
                if (null !== e.current) {
                  var n = (
                    (parseInt(a, 10) / parseInt(e.current.max, 10)) *
                    100
                  ).toFixed(2);
                  e.current.style.background = o(n);
                }
              },
              [o, e, a]
            ),
              me(
                function () {
                  null !== e.current &&
                    ((e.current.oninput = function () {
                      var n = e.current,
                        t = (
                          (parseInt(n.value, 10) / parseInt(n.max, 10)) *
                          100
                        ).toFixed(2);
                      n.style.background = o(t);
                    }.bind(e.current)),
                    (e.current.style.background = o(t)));
                },
                [t, o, e]
              );
          })(r, "var(--primary)", String(a.value));
          var o = function () {
              return n.muted.value ? t.unmute() : t.mute();
            },
            i = n.playerConfig.value.showVolume,
            l = void 0 === i || i,
            s = n.muted.value;
          return g(
            "div",
            { className: "Volume" },
            g(
              "div",
              { class: "wrapper" },
              l &&
                g(
                  b,
                  null,
                  s
                    ? g(Y.mute, { onClick: o })
                    : a.value <= 30
                    ? g(Y.lowVolume, { onClick: o })
                    : g(Y.volume, { onClick: o }),
                  g("input", {
                    ref: r,
                    class: "vdo-volume-range",
                    onInput: function (e) {
                      var n = e.currentTarget;
                      t.setVolume(parseInt(n.value, 10) / 100);
                    },
                    type: "range",
                    min: "0",
                    max: "100",
                    value: a.value,
                  })
                ),
              g(kn.all, null)
            )
          );
        },
        void 0,
        "Volume"
      );
      function St() {
        var e = rn().state.zenObject.value || {},
          n = e.topLinkUrl,
          t = void 0 === n ? "#" : n,
          r = e.topLinkMessage,
          a = void 0 === r ? "" : r,
          o = e.topLinkImage;
        return g(
          "div",
          { className: "vdo-full" },
          g(
            "div",
            {
              className: "TopLink",
              style: {
                backgroundImage: "url(".concat(void 0 === o ? "" : o, ")"),
              },
            },
            g(
              "a",
              { href: t, target: "_blank", rel: "noreferrer" },
              g("p", { dangerouslySetInnerHTML: { __html: a } })
            )
          )
        );
      }
      function Tt() {
        var e = rn().state,
          n = e.error.value,
          t = e.videoEl.value,
          r = e.metaData.value,
          a = n.message || "Please try on another browser.",
          o = n.code || null,
          i =
            r && r.posters
              ? Array.from(r.posters).sort(function (e, n) {
                  return n.height - e.height;
                })
              : [];
        return (
          i.length && t && (t.poster = i[0].url),
          g(
            "div",
            {
              className: "vdo-full error-layer",
              style:
                t && "" !== t.poster
                  ? { background: "rgba(0, 0, 0, 0.8)" }
                  : { background: "#444444" },
            },
            g(
              "div",
              { className: "container" },
              g("div", { style: { fontSize: "155%" } }, "Error ", o, " "),
              g("div", { style: { marginTop: 10 } }, a)
            )
          )
        );
      }
      j(i(8649)), j(i(8462));
      var At = Boolean(window.WebKitPlaybackTargetAvailabilityEvent);
      const Pt = En(
        function () {
          var e = rn().state,
            n = e.videoEl.value,
            t = e.playerConfig.value.enableAirPlay;
          return void 0 !== t && t && At && n
            ? g(
                "div",
                { className: "AirPlay" },
                g(Nn, { gridIdentifier: "AirPlay" }, "AirPlay"),
                g(Y.airPlay, {
                  onClick: function () {
                    return n.webkitShowPlaybackTargetPicker();
                  },
                })
              )
            : null;
        },
        void 0,
        "AirPlay"
      );
      function Nt() {
        return (
          (Nt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          Nt.apply(this, arguments)
        );
      }
      function Lt() {
        return g(
          b,
          null,
          g("div", Nt({ className: "GradientLayer" }, { top: !0 })),
          g("div", Nt({ className: "GradientLayer" }, { left: !0 })),
          g("div", Nt({ className: "GradientLayer" }, { right: !0 })),
          g("div", Nt({ className: "GradientLayer" }, { bottom: !0 }))
        );
      }
      j(i(5618));
      var Ot = function (e, n) {
          return {
            language: e.language,
            cueContainer: document.createElement("div"),
            align: n.align,
            line: n.line,
            position: n.position,
            size: n.size,
            snapToLines: n.snapToLines,
            text: n.text,
            track: n.track,
            vertical: n.vertical,
            getCueAsHTML: function () {
              return new VTTCue(0, 0, n._vdoCue.text).getCueAsHTML();
            },
          };
        },
        It = function (e) {
          e &&
            e.textTracks instanceof TextTrackList != 0 &&
            Array.from(e.textTracks).forEach(function (e) {
              e.mode = "hidden";
            });
        },
        Rt = function (e, n) {
          n.current.forEach(function (n) {
            var t;
            n.cueContainer.isConnected &&
              (null === (t = e.current) ||
                void 0 === t ||
                t.removeChild(n.cueContainer)),
              (n.cueContainer = document.createElement("div"));
          }),
            (n.current = []);
        },
        Vt = function (e, n) {
          return Array.from((null == e ? void 0 : e.textTracks) || []).find(
            function (e) {
              return e.id === n;
            }
          );
        };
      j(i(3959));
      var Dt = function (e, n) {
          var t = e.cloneNode(!0);
          (t.style.top = "-999px"),
            (t.style.visibility = "hidden"),
            n.appendChild(t);
          var r = t.offsetHeight,
            a = t.offsetWidth;
          return n.removeChild(t), [a, r];
        },
        Bt = function (e, n) {
          return (e / n) * 100;
        },
        Mt = function (e, n, t, r) {
          var a = r.videoEl,
            o = r.playerConfig.value,
            i = o.captionScaleFactor,
            l = void 0 === i ? 0.5 : i,
            s = o.captionMaxFont,
            u = void 0 === s ? 38 : s,
            c = r.activeCaptionId;
          if (n.id === c.value) {
            Rt(e, t);
            var d = e.current,
              p = n.activeCues;
            p &&
              Array.from(p).forEach(function (e) {
                var r;
                e._vdoCue || (e._vdoCue = Ot(n, e));
                var o = e._vdoCue;
                if (d) {
                  var i = (function (e) {
                    return Boolean(
                      e && e.webkitDisplayingFullscreen && "NATIVE" === H(e)
                    );
                  })(a.value);
                  if (i) {
                    var s = Vt(a.value, c.value);
                    s && (s.mode = "showing");
                  } else if (
                    (It(a.value),
                    o &&
                      (null === (r = o.track) || void 0 === r
                        ? void 0
                        : r.id) === c.value)
                  ) {
                    var p = (function (e, n) {
                        var t = e.cueContainer;
                        t.classList.add("cue"),
                          (t.style.position = "absolute"),
                          t.style.setProperty("box-sizing", "border-box"),
                          t.style.setProperty("white-space", "break-spaces");
                        var r,
                          a,
                          o = Boolean(e.vertical),
                          i = (function (e, n) {
                            var t = e.line,
                              r = e.snapToLines,
                              a = e.vertical ? n.offsetWidth : n.offsetHeight,
                              o = "number" == typeof t;
                            return o && !r && (t > 100 || t < 0)
                              ? a
                              : o && !r
                              ? (t / 100) * a
                              : o && !0 === r
                              ? 30 * t
                              : a;
                          })(e, n);
                        if (
                          (o
                            ? (t.style.left = "".concat(i, "px"))
                            : (t.style.top = "".concat(i, "px")),
                          "auto" !== e.position)
                        ) {
                          var l =
                            ((r = e.position),
                            (a = e.align),
                            "number" != typeof r || r > 100 || r < 0
                              ? "left" === a
                                ? 0
                                : "right" === a
                                ? 100
                                : 50
                              : r);
                          o
                            ? (t.style.top = "".concat(l, "%"))
                            : ((t.style.left = "calc(".concat(l, "% - 12px)")),
                              (t.style.maxWidth = "".concat(
                                ((100 - l) / 100) * n.offsetWidth + 12,
                                "px"
                              )));
                        }
                        o &&
                          (t.style.writingMode = "vertical-".concat(
                            e.vertical
                          ));
                        var s = e.size;
                        o
                          ? (t.style.height = "".concat(s, "%"))
                          : (t.style.width = "".concat(s, "%")),
                          (t.style.textAlign = e.align);
                        var u = document.createElement("span");
                        return u.appendChild(e.getCueAsHTML()), t.append(u), t;
                      })(o, d),
                      f = (function (e, n) {
                        var t = n.captionScaleFactor,
                          r = n.captionMaxFont,
                          a = Math.min(e.offsetHeight, e.offsetWidth);
                        return Math.min(Math.round(a * t * 100) / 1e3, r);
                      })(d, { captionMaxFont: u, captionScaleFactor: l });
                    p.style.fontSize = "".concat(f, "px");
                    var v = (function (e, n, t) {
                        var r,
                          a,
                          o = e.cueContainer,
                          i = n.offsetHeight - 20,
                          l = Dt(o, n)[1],
                          s = parseInt(o.style.top.split("px")[0], 10),
                          u = Array.from(n.children).filter(function (e) {
                            return !e.style["writing-mode"];
                          })[0];
                        if (!0 === e.snapToLines && u) {
                          var c = [u.offsetTop, u.offsetHeight + u.offsetTop];
                          void 0 === (a = c) && (a = [0, 0]),
                            (r = s) >= a[0] &&
                              r <= a[1] &&
                              (s = i - c[1] > c[0] ? c[1] : c[0] - l);
                        }
                        return (s -= t) < 0 ? 0 : s + l > i ? i - l : s;
                      })(o, d, f + 16),
                      h = (function (e, n) {
                        var t = e.cueContainer,
                          r = Dt(t, n)[0],
                          a = parseInt(t.style.left.split("px")[0], 10);
                        return a < 0
                          ? 0
                          : a + r > n.offsetWidth
                          ? n.offsetWidth - r
                          : a;
                      })(o, d);
                    (p.style.top = "".concat(Bt(v, d.offsetHeight), "%")),
                      (p.style.left = "".concat(Bt(h, d.offsetWidth), "%")),
                      d.appendChild(p),
                      t.current.push(o);
                  }
                }
              });
          }
        };
      function Ft() {
        var e = rn(),
          n = e.state,
          t = e.playerVisibility,
          r = n.captionVisibility,
          a = n.videoEl,
          o = n.activeCaptionId,
          i = ge([]),
          l = ge(null);
        nn(function () {
          var e = Vt(a.value, o.value);
          e && (Rt(l, i), It(a.value), Mt(l, e, i, n));
        }),
          nn(function () {
            a.value &&
              n.availableCaptions.value &&
              Array.from(a.value.textTracks).forEach(function (e) {
                var t;
                if (
                  (e.addEventListener("cuechange", function () {
                    e.id === o.value && Mt(l, e, i, n);
                  }),
                  null !== (t = e.cues) && void 0 !== t && t.length)
                ) {
                  var r = e.cues;
                  Array.from(r).forEach(function (n) {
                    n._vdoCue = Ot(e, n);
                  });
                }
              });
          });
        var s = en(function () {
          return t.value
            ? n.isFullscreen.value
              ? "calc(100% - 90px)"
              : "calc(100% - 60px)"
            : "100%";
        });
        return (
          he(
            function () {
              !(function (e, n) {
                var t = Vt(e, n);
                t &&
                  Array.from(t.activeCues || []).forEach(function (e) {
                    e.dispatchEvent(new Event("exit")),
                      e.dispatchEvent(new Event("enter"));
                  });
              })(a.value, o.value);
            },
            [o.value, s.value, a.value]
          ),
          r.value
            ? g("div", {
                ref: l,
                class: "Caption-Container",
                style: { display: r.value ? "block" : "none", height: s.value },
              })
            : null
        );
      }
      function Ut(e) {
        var n = e.captionList,
          t = e.activeCaptionId,
          r = rn().method;
        return g(
          b,
          null,
          g(
            "div",
            { className: "language-select-container" },
            g("div", null, "Please choose caption language before search"),
            g(
              "div",
              {
                className: "close",
                onClick: function (e) {
                  e.preventDefault(), r.toggleSearchCaption(!1);
                },
              },
              "×"
            )
          ),
          g("br", null),
          g(
            "div",
            { class: "caption-language-list-container" },
            n.map(function (e) {
              var n = e.id,
                a = e.language,
                o = e.label;
              return g(
                "div",
                {
                  className: "caption-language",
                  key: o,
                  onClick: function (e) {
                    return (function (e, n) {
                      r.updateActiveCaptionId(n), r.setCaptionVisibility(!0);
                    })(0, n);
                  },
                },
                t === n && g(Y.tick, { className: "panel-icon-left" }),
                o,
                "   (",
                a,
                ")"
              );
            })
          )
        );
      }
      function jt() {
        var e = rn(),
          n = e.state,
          t = e.method,
          r = e.queryInActiveCaption,
          a = Xe([]),
          o = n.showCastingLayer,
          i = n.activeCaptionId,
          l = n.videoEl,
          s = n.isSearchCaptionOpen,
          u = n.captions.value,
          c = Xe(""),
          d = Xe(null),
          p = ye(
            function () {
              return Array.from(u || []).filter(function (e) {
                var n = e.language;
                return Boolean(n);
              });
            },
            [u]
          );
        return (
          Ke(function () {
            d.value &&
              ((function (e) {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
              })(d.value),
              a.value.forEach(function (e) {
                var n,
                  r = e.displayText,
                  a = e.startTime,
                  o = (function (e, n) {
                    var t = document.createElement("div");
                    t.setAttribute("class", "result");
                    var r = document.createElement("span");
                    r.classList.add("result-time"),
                      (r.innerText = "".concat(M(n))),
                      t.appendChild(r);
                    var a = new VTTCue(0, 0, e).getCueAsHTML();
                    return t.appendChild(a), t;
                  })(r, a);
                o.addEventListener("click", function () {
                  t.seek(a), t.toggleSearchCaption(!1);
                }),
                  null === (n = d.value) || void 0 === n || n.appendChild(o);
              }));
          }),
          nn(function () {
            i.value || 1 !== p.length || t.updateActiveCaptionId(p[0].id);
          }),
          nn(function () {
            o.value || (s.value ? l.value.pause() : l.value.play());
          }),
          s.value
            ? g(
                "div",
                { class: "Caption-Search-Layer", noTogglePlay: !0 },
                i.value
                  ? g(
                      b,
                      null,
                      g(
                        "div",
                        { className: "search-container" },
                        g("input", {
                          type: "text",
                          onInput: function (e) {
                            var n = e.target;
                            e.preventDefault(),
                              (c.value = n.value),
                              (a.value = r(n.value));
                          },
                          placeholder: "Search for captions",
                          value: c,
                        }),
                        g(
                          "div",
                          {
                            className: "close",
                            onClick: function (e) {
                              e.preventDefault(), t.toggleSearchCaption(!1);
                            },
                          },
                          "×"
                        )
                      ),
                      g("div", {
                        class: "result-container",
                        ref: function (e) {
                          d.value = e;
                        },
                      })
                    )
                  : g(Ut, { captionList: p, activeCaptionId: i.value })
              )
            : null
        );
      }
      function Ht() {
        var e = rn(),
          n = e.state,
          t = e.method,
          r = Xe(null),
          a = n.videoEl,
          o = n.isChapterLayerOpen,
          i = n.chapters.value,
          l = be(
            function (e, n) {
              e.preventDefault(), t.seek(n), t.toggleChapterLayer(!1);
            },
            [t]
          );
        nn(function () {
          o.value && n.activeBadgeHost.value && t.toggleChapterLayer(!1);
        });
        var s,
          u,
          c,
          d,
          p = en(function () {
            return o.value && i.length > 0;
          });
        return (
          nn(function () {
            if (p.value) {
              if (!r.value || !r.value.parentElement) return;
              var e = r.value.offsetWidth / r.value.parentElement.offsetWidth;
              if (e > 0.5) return;
              a.value.animate(
                { width: "".concat(100 * (1 - e), "%") },
                { duration: 400, fill: "forwards", easing: "ease" }
              );
            } else a.value.animate({ width: "100%" }, { duration: 400, fill: "forwards", easing: "ease" });
          }),
          (s = p.value),
          400,
          (u = ve(!1)),
          (c = u[0]),
          (d = u[1]),
          he(
            function () {
              var e;
              return (
                s && !c
                  ? d(!0)
                  : !s &&
                    c &&
                    (e = setTimeout(function () {
                      return d(!1);
                    }, 400)),
                function () {
                  return clearTimeout(e);
                }
              );
            },
            [s, 400, c]
          ),
          c
            ? g(
                "div",
                {
                  className: p.value
                    ? "Chapters-Container"
                    : "Chapters-Container slide-out",
                  noTogglePlay: !0,
                  ref: function (e) {
                    return (r.value = e);
                  },
                },
                g(
                  "div",
                  { className: "header" },
                  g("div", { className: "title" }, "Chapters"),
                  g(
                    "div",
                    { className: "Close" },
                    g(Y.close, {
                      onClick: function () {
                        t.toggleChapterLayer(!1);
                      },
                    })
                  )
                ),
                i.map(function (e, n) {
                  var t = e.title,
                    r = e.start;
                  return g(
                    "div",
                    {
                      className: "chapter-item",
                      key: n,
                      onClick: function (e) {
                        return l(e, r);
                      },
                    },
                    g("div", { className: "title" }, t),
                    g("div", { className: "time" }, M(r))
                  );
                })
              )
            : null
        );
      }
      function zt() {
        var e = rn(),
          n = e.state,
          t = e.method,
          r = Xe(!1),
          a = n.uiOptionals.value,
          o = n.eventBus.value,
          i = n.muted.value,
          l = n.doesHaveAudio.value;
        he(function () {
          o.emit("patchGridElement", !0);
        });
        var s = be(
          function () {
            (r.value = !0), t.unmute();
          },
          [r, t]
        );
        return null != a && a.autoplay && !r.value && i && l
          ? g(
              b,
              null,
              g("div", { class: "Tap-To-Unmute-Overlay", onClick: s }),
              g(
                "div",
                { className: "Tap-To-Unmute", onClick: s },
                g(Y.mute, { color: "var(--primary)" }),
                g("div", { className: "text" }, "TAP TO UNMUTE")
              )
            )
          : null;
      }
      function Gt(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function Wt(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                a,
                o = [],
                i = !0,
                l = !1;
              try {
                for (
                  t = t.call(e);
                  !(i = (r = t.next()).done) &&
                  (o.push(r.value), !n || o.length !== n);
                  i = !0
                );
              } catch (e) {
                (l = !0), (a = e);
              } finally {
                try {
                  i || null == t.return || t.return();
                } finally {
                  if (l) throw a;
                }
              }
              return o;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return Gt(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? Gt(e, n)
                  : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      j(i(3406)), j(i(6709)), j(i(7114)), Tn.addCSS(i(4152)), j(i(2635));
      var Qt = !1,
        qt = !1;
      j(i(5928));
      const Kt = En(
        function () {
          var e = rn(),
            n = e.state,
            t = e.method,
            r = Wt(ve(!1), 2),
            a = r[0],
            o = r[1],
            i = n.playerConfig.value.enableChromecast,
            l = void 0 !== i && i,
            s = n.eventBus.value,
            u = n.showCastingLayer.value;
          return (
            he(
              function () {
                l
                  ? new Promise(function (e, n) {
                      if (qt) return e(Qt);
                      window.__onGCastApiAvailable = function (t) {
                        t
                          ? (cast.framework.CastContext.getInstance().setOptions(
                              {
                                receiverApplicationId: "4B8C0357",
                                autoJoinPolicy:
                                  chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
                              }
                            ),
                            e((Qt = !0)))
                          : n(
                              new Error(
                                "[Vdocipher] (Cast) GCast script loaded, but api not available"
                              )
                            );
                      };
                      var t = document.createElement("script");
                      (t.onload = function () {
                        qt = !0;
                      }),
                        (t.src =
                          "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),
                        document.body.append(t);
                    })
                      .then(function (e) {
                        e && o(!0);
                      })
                      .catch(console.error)
                  : o(l);
              },
              [l]
            ),
            he(
              function () {
                s.emit("patchGridElement", a);
              },
              [s, a]
            ),
            a
              ? g(
                  "div",
                  { class: "Cast" },
                  g(Nn, { gridIdentifier: "Cast" }, "Cast"),
                  g(Y.cast, {
                    isConnected: u,
                    onClick: function () {
                      return t.toggleCastingLayer(!u);
                    },
                  })
                )
              : null
          );
        },
        void 0,
        "Cast"
      );
      var Jt = function (e, n, t) {
          return new Promise(function (r, a) {
            var o,
              i,
              l = !1;
            null === (o = cast.framework.CastContext.getInstance()) ||
              void 0 === o ||
              o.addEventListener(
                cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
                function (e) {
                  var t = e.sessionState;
                  n &&
                    (["SESSION_ENDED", "SESSION_START_FAILED"].includes(t) &&
                      (n.paused && l && n.play(),
                      (window._vdoCast.activeCastControls = null)),
                    "SESSION_STARTING" === t && ((l = !n.paused), n.pause()));
                }
              );
            var s =
              null === (i = null == e ? void 0 : e.dash) || void 0 === i
                ? void 0
                : i.manifest;
            return s
              ? t
                ? void cast.framework.CastContext.getInstance()
                    .requestSession()
                    .then(function () {
                      var n,
                        o,
                        i =
                          cast.framework.CastContext.getInstance().getCurrentSession(),
                        l = new chrome.cast.media.MediaInfo(
                          s,
                          "application/dash+xml"
                        );
                      (l.customData = { licenseUrl: t }),
                        (l.tracks =
                          ((n = null == e ? void 0 : e.captions),
                          (o = []),
                          Array.from(n || []).forEach(function (e, n) {
                            var t = e.url,
                              r = e.lang,
                              a = e.label,
                              i = new chrome.cast.media.Track(
                                n,
                                chrome.cast.media.TrackType.TEXT
                              );
                            (i.trackContentId = t),
                              (i.trackContentType = "text/vtt"),
                              (i.subtype =
                                chrome.cast.media.TextTrackType.SUBTITLES),
                              (i.name = a),
                              (i.language = r),
                              o.push(i);
                          }),
                          o));
                      var u = new chrome.cast.media.LoadRequest(l);
                      null == i ||
                        i.loadMedia(u).then(
                          function () {
                            r();
                          },
                          function (e) {
                            console.log({ errorCode: e }),
                              a(
                                new Error(
                                  "[Vdocipher] (G-Cast) Error code : ".concat(e)
                                )
                              );
                          }
                        );
                    })
                    .catch(function (e) {
                      a(
                        new Error(
                          "[Vdocipher] (Cast) User cancelled the Cast session request. \n ".concat(
                            e.toString()
                          )
                        )
                      );
                    })
                : a(new Error("[Vdocipher] (G-Cast) Invalid License URL"))
              : a(new Error("[Vdocipher]  (G-Cast) Invalid Media URL"));
          });
        },
        Yt = function (e) {
          var n;
          null === (n = cast.framework.CastContext.getInstance()) ||
            void 0 === n ||
            n.addEventListener(
              cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
              function (n) {
                var t = n.sessionState;
                "SESSION_STARTING" === t && e("STARTING"),
                  "SESSION_STARTED" === t && e("STARTED"),
                  "SESSION_ENDING" === t && e("DISCONNECTING");
              }
            );
        },
        Zt = function (e, n) {
          return {
            play: function () {
              !1 !== e.isPaused && n.playOrPause();
            },
            pause: function () {
              !0 !== e.isPaused && n.playOrPause();
            },
            setVolume: function (t) {
              (e.volumeLevel = t), n.setVolumeLevel();
            },
            seek: function (t) {
              (e.currentTime = t), n.seek();
            },
            setIsMuted: function (t) {
              e.isMuted !== t && n.muteOrUnmute();
            },
            setInitialControls: function (e) {
              var n = new cast.framework.RemotePlayer(),
                t = new cast.framework.RemotePlayerController(n);
              (n.currentTime = e.currentTime),
                t.seek(),
                (n.volumeLevel = e.volume),
                t.setVolumeLevel(),
                n.isMuted !== e.muted && t.muteOrUnmute();
            },
          };
        };
      function $t() {
        var e = window.cast,
          n = window._vdoCast,
          t = e.framework.CastContextEventType.SESSION_STATE_CHANGED,
          r = new e.framework.RemotePlayer(),
          a = new e.framework.RemotePlayerController(r);
        return (
          (n.activeCastControls = Zt(r, a)),
          {
            selectTextTrack: function (n) {
              var t;
              if (n) {
                var r =
                  null ===
                    (t =
                      e.framework.CastContext.getInstance().getCurrentSession()) ||
                  void 0 === t
                    ? void 0
                    : t.getMediaSession();
                if (r) {
                  var a = parseInt(n, 10);
                  r.editTracksInfo(
                    new chrome.cast.media.EditTracksInfoRequest([a]),
                    function () {},
                    function () {}
                  );
                }
              }
            },
            remotePlayer: r,
            remotePlayerController: a,
            framework: e.framework,
            destroy: function () {
              n.activeCastControls = null;
            },
            getCastDeviceControl: function () {
              return n.activeCastControls;
            },
            getCurrentSession: function () {
              return e.framework.CastContext.getInstance().getCurrentSession();
            },
            startCasting: Jt,
            onSessionState: Yt,
            attachAndRemoveRemotePlayerEvent: function (n, r) {
              var o;
              a.addEventListener(n, r),
                null === (o = e.framework.CastContext.getInstance()) ||
                  void 0 === o ||
                  o.addEventListener(t, function o(i) {
                    var l;
                    "SESSION_ENDED" === i.sessionState &&
                      (a.removeEventListener(n, r),
                      null === (l = e.framework.CastContext.getInstance()) ||
                        void 0 === l ||
                        l.removeEventListener(t, o));
                  });
            },
          }
        );
      }
      function Xt() {
        var e = Wt(ve(!1), 2),
          n = e[0],
          t = e[1],
          r = rn(),
          a = r.state,
          o = r.method,
          i = a.showCastingLayer.value,
          l = a.metaData.value,
          s = a.castAuthToken.value,
          u = a.eventBus.value,
          c = a.videoEl.value,
          d = Wt(ve("CONNECTING"), 2),
          p = d[0],
          f = d[1],
          v = Wt(ve(), 2),
          h = v[0],
          m = v[1],
          y = ge(new $t()),
          b = y.current;
        return (
          (function (e, n) {
            var t = rn().state,
              r = cast.framework.RemotePlayerEventType.ANY_CHANGE,
              a = cast.framework.RemotePlayerEventType.DURATION_CHANGED,
              o = ve(!1),
              i = o[0],
              l = o[1],
              s = ve(!1),
              u = s[0],
              c = s[1],
              d = t.videoEl.value,
              p = t.activeCaptionId.value;
            he(
              function () {
                null == e || e.selectTextTrack(p);
              },
              [p, e]
            );
            var f = be(
              function (e) {
                var t,
                  r = e.value,
                  a = e.field;
                n &&
                  window._vdoCast.activeCastControls &&
                  ("currentTime" === a &&
                    n.emit("updateStateFromCastDevice", { currentTime: r }),
                  "playerState" === a &&
                    n.emit("updateStateFromCastDevice", {
                      status:
                        ((t = r), "PLAYING" === t ? 1 : "PAUSED" === t ? 2 : 1),
                    }),
                  "isMuted" === a &&
                    n.emit("updateStateFromCastDevice", { muted: r }),
                  "volumeLevel" === a &&
                    n.emit("updateStateFromCastDevice", { volume: r }));
              },
              [n]
            );
            he(
              function () {
                e &&
                  d &&
                  !u &&
                  (c(!0),
                  e.attachAndRemoveRemotePlayerEvent(a, function () {
                    var n;
                    e.selectTextTrack(p),
                      null === (n = e.getCastDeviceControl()) ||
                        void 0 === n ||
                        n.setInitialControls(d);
                  }));
              },
              [a, p, e, u, d]
            ),
              he(
                function () {
                  e && d && e.attachAndRemoveRemotePlayerEvent(r, f);
                },
                [r, e, f, d]
              ),
              he(
                function () {
                  if (!i)
                    return (
                      te.push(function (n) {
                        var t,
                          r,
                          a,
                          o,
                          i,
                          l = n.type,
                          s = n.value;
                        "UPDATE_STATUS" === l &&
                          (2 === s &&
                            (null ===
                              (t =
                                null == e
                                  ? void 0
                                  : e.getCastDeviceControl()) ||
                              void 0 === t ||
                              t.pause()),
                          1 === s &&
                            (null ===
                              (r =
                                null == e
                                  ? void 0
                                  : e.getCastDeviceControl()) ||
                              void 0 === r ||
                              r.play())),
                          "UPDATE_VOLUME" === l &&
                            (null ===
                              (a =
                                null == e
                                  ? void 0
                                  : e.getCastDeviceControl()) ||
                              void 0 === a ||
                              a.setVolume(s)),
                          "MUTE" === l &&
                            (null ===
                              (o =
                                null == e
                                  ? void 0
                                  : e.getCastDeviceControl()) ||
                              void 0 === o ||
                              o.setIsMuted(s)),
                          "UPDATE_CURRENT-TIME" === l &&
                            (null ===
                              (i =
                                null == e
                                  ? void 0
                                  : e.getCastDeviceControl()) ||
                              void 0 === i ||
                              i.seek(s));
                      }),
                      l(!0),
                      function () {
                        te.length = 0;
                      }
                    );
                },
                [e, i]
              );
          })(b, u),
          he(function () {
            y.current.onSessionState(f);
          }, []),
          he(
            function () {
              return function () {
                var e;
                b.remotePlayer.currentTime !==
                  (null == c ? void 0 : c.currentTime) &&
                  c &&
                  (c.currentTime = b.remotePlayer.currentTime),
                  null === (e = b.getCurrentSession()) ||
                    void 0 === e ||
                    e.endSession(!1),
                  b.remotePlayerController.stop();
              };
            },
            [b, c]
          ),
          he(
            function () {
              n ||
                (t(!0),
                b
                  .startCasting(
                    l,
                    c,
                    "https://license.vdocipher.com/auth/wv/".concat(s)
                  )
                  .then(function () {
                    var e,
                      n =
                        null === (e = b.getCurrentSession()) || void 0 === e
                          ? void 0
                          : e.getCastDevice().friendlyName;
                    m(n);
                  })
                  .catch(function (e) {
                    console.log(e), o.toggleCastingLayer(!1);
                  }));
            },
            [s, b, n, l, o, c]
          ),
          i
            ? g(
                "div",
                { className: "Casting-Layer" },
                "CONNECTING" === p &&
                  g(
                    "div",
                    { class: "label" },
                    g(On, null),
                    g("span", null, "Connecting")
                  ),
                "STARTED" === p &&
                  g(
                    "div",
                    { class: "label" },
                    g("span", null, "Playing on ", h, " Device")
                  ),
                "DISCONNECTING" === p &&
                  g(
                    "div",
                    { class: "label" },
                    g(On, null),
                    g("span", null, "Disconnecting")
                  )
              )
            : null
        );
      }
      function er(e) {
        var n = e.closeBadge,
          t = rn().state,
          r = t.availableQualities.value,
          a = t.metaData.value,
          o = t.videoEl.value,
          i = t.hostEl.value,
          l = r ? r[0].codecs : "NA",
          s = (null == a ? void 0 : a.id) || "NA",
          u = (null == a ? void 0 : a.duration) || "NA",
          c =
            "boolean" != typeof (null == a ? void 0 : a.vdocipherBranding) ||
            (null == a ? void 0 : a.vdocipherBranding),
          d = o ? "".concat(o.videoWidth, "x").concat(o.videoHeight) : "NA",
          p = i ? "".concat(i.offsetWidth, "x").concat(i.offsetHeight) : "NA";
        return g(
          "div",
          { className: "Context-option-AboutPlayer" },
          g("div", { className: "close", onClick: n }, "✕"),
          c &&
            g(
              "div",
              { className: "item header" },
              g("span", { className: "title" }, "Powered by Vdocipher Player")
            ),
          g(
            "div",
            { className: "item" },
            g("span", { className: "title" }, "Player Version "),
            ": ",
            "2.4.16",
            " (",
            "34b495e2",
            ")"
          ),
          g(
            "div",
            { className: "item" },
            g("span", { className: "title" }, "VideoId"),
            ": ",
            s
          ),
          g(
            "div",
            { className: "item" },
            g("span", { className: "title" }, "Container Size"),
            ": ",
            p
          ),
          g(
            "div",
            { className: "item" },
            g("span", { className: "title" }, "Video Size"),
            ": ",
            d
          ),
          g(
            "div",
            { className: "item" },
            g("span", { className: "title" }, "Duration"),
            ":",
            u
          ),
          g(
            "div",
            { className: "item" },
            g("span", { className: "title" }, "Codecs"),
            ": ",
            l
          )
        );
      }
      function nr(e) {
        return g(
          "div",
          { className: "Context-option-Keyboard" },
          g("div", { className: "close", onClick: e.closeBadge }, "✕"),
          g(
            "div",
            { className: "item" },
            g("div", { className: "title" }, "Play "),
            g("div", { className: "content" }, "SPACE")
          ),
          g(
            "div",
            { className: "item" },
            g("div", { className: "title" }, "Pause"),
            g("div", { className: "content" }, "SPACE")
          ),
          g(
            "div",
            { className: "item" },
            g("div", { className: "title" }, "Speed UP"),
            g("div", { className: "content" }, "}")
          ),
          g(
            "div",
            { className: "item" },
            g("div", { className: "title" }, "Speed Down"),
            " ",
            g("div", { className: "content" }, "{")
          ),
          g(
            "div",
            { className: "item" },
            g("div", { className: "title" }, "Forward"),
            " ",
            g("div", { className: "content" }, "Right Arrow Key")
          ),
          g(
            "div",
            { className: "item" },
            g("div", { className: "title" }, "Backward"),
            " ",
            g("div", { className: "content" }, "Left Arrow Key")
          )
        );
      }
      function tr() {
        return g(
          "div",
          { class: "lds-ellipsis" },
          g("div", null),
          g("div", null),
          g("div", null),
          g("div", null)
        );
      }
      function rr(e) {
        var n = e.closeBadge,
          t = rn().state,
          r = Wt(ve("Does not start playing"), 2),
          a = r[0],
          o = r[1],
          i = t.metaData.value,
          l = t.uiOptionals.value,
          s = Wt(ve(!1), 2),
          u = s[0],
          c = s[1],
          d = Wt(ve(!1), 2),
          p = d[0],
          f = d[1],
          v = ge(null),
          h = ge(null);
        return u
          ? g(
              "div",
              { className: "Context-option-ReportBug" },
              g("div", { className: "item" }, "Thanks for the Feedback"),
              g("br", null),
              g("div", { class: "close-btn", onClick: n }, "Close")
            )
          : g(
              "div",
              { className: "Context-option-ReportBug" },
              g("div", { className: "close", onClick: n }, "✕"),
              g(
                "div",
                { className: "item" },
                "Feedback about the video player"
              ),
              g(
                "div",
                {
                  className: "form",
                  onClick: function (e) {
                    e.preventDefault();
                  },
                },
                g(
                  "select",
                  {
                    ref: v,
                    onChange: function () {
                      if (v.current) {
                        var e =
                          v.current.selectedOptions[0].getAttribute(
                            "data-value"
                          );
                        o(e);
                      }
                    },
                  },
                  g(
                    "option",
                    { key: "a", "data-value": "Does not start playing" },
                    "Does not start playing"
                  ),
                  g(
                    "option",
                    { "data-value": "Buffering too much" },
                    "Buffering too much"
                  ),
                  g(
                    "option",
                    { "data-value": "Got an error message" },
                    "Got an error message"
                  ),
                  g(
                    "option",
                    { "data-value": "Video Frame dropping" },
                    "Video Frame dropping"
                  ),
                  g(
                    "option",
                    { "data-value": "Audio quality poor" },
                    "Audio quality poor"
                  ),
                  g(
                    "option",
                    { "data-value": "Audio video out of sync" },
                    "Audio video out of sync"
                  ),
                  g("option", { "data-value": "other" }, "other")
                ),
                g("textarea", {
                  ref: h,
                  placeholder:
                    "Share your feedback about the video player here.",
                }),
                p
                  ? g(tr, null)
                  : g(
                      "div",
                      {
                        class: "send-btn",
                        onClick: function () {
                          var e;
                          p ||
                            (f(!0),
                            fetch(
                              "https://www.vdocipher.com/api/playback/report",
                              {
                                method: "POST",
                                headers: { Accept: "application/json" },
                                body: JSON.stringify({
                                  videoID: null == i ? void 0 : i.id,
                                  trackingInfo: {
                                    otp: null == l ? void 0 : l.otp,
                                    playbackInfo:
                                      null == l ? void 0 : l.playbackInfo,
                                  },
                                  report: {
                                    category: a,
                                    problem:
                                      (null === (e = h.current) || void 0 === e
                                        ? void 0
                                        : e.value) || "Not Available",
                                  },
                                }),
                              }
                            ).finally(function () {
                              c(!0),
                                f(!1),
                                setTimeout(function () {
                                  n(new Event("mouse")), f(!1);
                                }, 4e3);
                            }));
                        },
                      },
                      "Send"
                    )
              )
            );
      }
      function ar(e) {
        var n = e.selectedBadge,
          t = e.closeBadge;
        return "about" === n
          ? g(er, { closeBadge: t })
          : "keyboard" === n
          ? g(nr, { closeBadge: t })
          : "bug" === n
          ? g(rr, { closeBadge: t })
          : null;
      }
      function or() {
        var e,
          n = rn().state,
          t = n.playerEl,
          r = (n.playerConfig.value || {}).hideContextMenu,
          a = void 0 !== r && r,
          o = (function (e, n) {
            var t = ve(!1),
              r = t[0],
              a = t[1],
              o = ve(!1),
              i = o[0],
              l = o[1],
              s = ve(0),
              u = s[0],
              c = s[1],
              d = ve(0),
              p = d[0],
              f = d[1],
              v = be(
                function (n) {
                  if (e) {
                    n.preventDefault(), l(!0);
                    var t = e.getBoundingClientRect();
                    c(n.clientX - t.x), f(n.clientY - t.y);
                  }
                },
                [e]
              );
            return (
              he(
                function () {
                  e && (r || (e.addEventListener("contextmenu", v), a(!0)));
                },
                [e, v, n, r]
              ),
              {
                openContextMenu: i,
                updateContextMenuPosition: v,
                closeContextMenu: function (e) {
                  c(0), f(0), l(!1), e.stopPropagation();
                },
                contextPosition: { clientX: u, clientY: p },
              }
            );
          })(
            null === (e = t.value) || void 0 === e ? void 0 : e.parentElement,
            a
          ),
          i = o.openContextMenu,
          l = o.closeContextMenu,
          s = o.contextPosition,
          u = o.updateContextMenuPosition,
          c = Wt(ve(null), 2),
          d = c[0],
          p = c[1],
          f = n.playerConfig.value.enableKeyboardShortcuts,
          v = void 0 === f || f,
          h = n.metaData.value,
          m = n.playerConfig.value,
          y = m.enableReportBug,
          b = void 0 !== y && y,
          w = m.enableAboutPlayer,
          x = void 0 === w || w,
          C =
            "boolean" != typeof (null == h ? void 0 : h.vdocipherBranding) ||
            (null == h ? void 0 : h.vdocipherBranding),
          _ = function (e, n) {
            e.stopPropagation(), p(n);
          };
        if (!i) return null;
        var E = function (e) {
          l(e), p(null), e.stopPropagation();
        };
        return a
          ? null
          : g(
              "div",
              {
                className:
                  i || d ? "ContextContainer active" : "ContextContainer",
                onContextMenu: u,
                onClick: E,
              },
              d
                ? g(ar, { selectedBadge: d, closeBadge: E })
                : g(
                    "div",
                    {
                      className: "ContextMenu",
                      style: { top: s.clientY, left: s.clientX },
                    },
                    g(
                      "div",
                      { className: "badge" },
                      x &&
                        g(
                          "div",
                          {
                            className: "panel",
                            onClick: function (e) {
                              return _(e, "about");
                            },
                          },
                          C ? "About VdoCipher Player" : "About Player"
                        ),
                      v &&
                        g(
                          "div",
                          {
                            className: "panel",
                            onClick: function (e) {
                              return _(e, "keyboard");
                            },
                          },
                          "Keyboard Shortcut"
                        ),
                      b &&
                        g(
                          "div",
                          {
                            className: "panel",
                            onClick: function (e) {
                              return _(e, "bug");
                            },
                          },
                          "Report Bug"
                        ),
                      !1 === x &&
                        C &&
                        g(
                          "div",
                          { className: "branding-panel" },
                          "Powered by Vdocipher Player"
                        )
                    )
                  )
            );
      }
      (window._vdoCast = { activeCastControls: null }),
        j(i(1082)),
        j(i(4137)),
        Tn.addCSS(i(4137)),
        j(i(7509)),
        Tn.addCSS(i(7509)),
        j(i(5075)),
        j(i(4634)),
        Tn.addCSS(i(4634)),
        j(i(2981)),
        j(i(4939));
      var ir = { maxWidth: "0px", paddingRight: "0px", easing: "ease-in-out" },
        lr = { maxWidth: "300px", paddingRight: "10px", easing: "ease-in-out" };
      const sr = En(
        function () {
          var e,
            n = Xe(!1),
            t =
              !0 ===
              (null === (e = rn().state.metaData.value) || void 0 === e
                ? void 0
                : e.isOfflineMetadata),
            r = Xe(!1),
            a = Xe(null);
          return (
            nn(function () {
              var e;
              r.value ||
                (null == (e = a.value) ||
                  e.animate([ir, lr, lr, lr, ir], {
                    duration: 5e3,
                    delay: 1e3,
                    fill: "forwards",
                  }),
                (r.value = !0));
            }),
            t
              ? g(
                  "div",
                  { className: "Notification" },
                  g(
                    "div",
                    { class: "InfoSection" },
                    g(
                      "div",
                      {
                        className: "title-holder",
                        onClick: function () {
                          var e;
                          n.value
                            ? null == (e = a.value) ||
                              e.animate([lr, ir], {
                                duration: 1e3,
                                fill: "forwards",
                              })
                            : (function (e) {
                                null == e ||
                                  e.animate([ir, lr], {
                                    duration: 1e3,
                                    fill: "forwards",
                                  });
                              })(a.value),
                            (n.value = !n.value);
                        },
                      },
                      g(Y.info, { color: "var(--primary)" })
                    ),
                    g(
                      "div",
                      {
                        className: "content",
                        ref: function (e) {
                          return (a.value = e);
                        },
                      },
                      "Video is playing in offline mode"
                    )
                  )
                )
              : null
          );
        },
        void 0,
        "Notification"
      );
      function ur() {
        var e,
          n = ge(null),
          t = rn(),
          r = t.state,
          a = t.method,
          o = t.setHoldPlayerVisibility,
          i = t.playerVisibility,
          l = t.setPlayerVisibilityTrue,
          s = t.isTouchEvent,
          u = r.playerEl,
          c = r.status,
          d = r.showTopLink.value,
          p = r.hasError.value,
          f = r.isLiteMode.value,
          v = r.isFullscreen.value,
          h = r.waitingForPlayback.value,
          m = r.uiOptionals.value,
          y = r.showCastingLayer.value,
          w = r.playerConfig.value,
          x = w.showReplayAtEnd,
          C = void 0 === x || x,
          _ = w.showPlayPauseBtn,
          E = void 0 === _ || _,
          k =
            (null === (e = r.metaData.value) || void 0 === e
              ? void 0
              : e.audioOnly) || !1;
        return (
          nn(function () {
            if (u.value) {
              if (i.value) return u.value.classList.add("SHOW-CONTROLS");
              u.value.classList.remove("SHOW-CONTROLS");
            }
          }),
          nn(function () {
            u.value &&
              (v
                ? u.value.classList.add("On-Fullscreen")
                : u.value.classList.remove("On-Fullscreen"));
          }),
          !0 === p
            ? g(Tt, null)
            : !0 === d
            ? g(St, null)
            : !0 === f
            ? g(An, { isLiteMode: !0 })
            : -1 === c.value ||
              !0 === h ||
              (0 === c.value && null != m && m.autoplay)
            ? g(J, null)
            : 0 === c.value
            ? g(An, null)
            : 3 === c.value && C
            ? g(An, { isReplayMode: !0 })
            : g(
                b,
                null,
                (c.value <= 0 || k) && g(Cn, null),
                g(
                  "div",
                  {
                    className: "vdo-full",
                    onClick: function (e) {
                      l(),
                        E &&
                          (e.target !== n.current || s.value || a.togglePlay());
                    },
                  },
                  g(
                    "div",
                    {
                      className: "Player",
                      ref: a.updatePlayerElRef,
                      onMouseOver: function (e) {
                        e.target !== n.current || a.isAnyBadgeActive()
                          ? o(!0)
                          : o(!1);
                      },
                      onMouseLeave: function () {
                        a.isAnyBadgeActive() ? o(!0) : o(!1);
                      },
                    },
                    g(
                      "div",
                      { className: "Player-Visible-Component-Area", ref: n },
                      g(Ht, null)
                    ),
                    g(In, null),
                    g(Lt, null),
                    y && g(Xt, null),
                    g(jt, null),
                    g(Ln, null),
                    1 === c.value ? g(Rn, null) : g(Dn, null),
                    g(Vn, null),
                    g(Jn, null),
                    g(zt, null),
                    g(kt, null),
                    g(mt, null),
                    g(gt, null),
                    g(kn.all, null),
                    g(kn.consumed, null),
                    g(kn.duration, null),
                    g(kn.left, null),
                    g(Pt, null),
                    g(Et, null),
                    g(Kt, null),
                    g(bt, null),
                    g(nt, null),
                    g(wt, null),
                    g(_t, null),
                    g(yt, null),
                    g(sr, null)
                  ),
                  g(or, null),
                  g(Ft, null)
                )
              )
        );
      }
      j(i(2651));
      var cr = i(134),
        dr = {
          primaryColor: "FF0000",
          secondaryColor: "FFFFFF",
          iconColor: "FFFFFF",
          controlsBackgroundColor: "rgba(0, 0, 0, 0.5);",
        },
        pr = {
          primaryColor: "FF0000",
          secondaryColor: "FFFFFF",
          iconColor: "FFFFFF",
          controlsBackgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        fr = {
          primaryColor: "6862DD",
          secondaryColor: "000000",
          iconColor: "000000",
          controlsBackgroundColor: "rgba(220, 220, 220, 0.93)",
        },
        vr = {
          primaryColor: "00B2FF",
          secondaryColor: "4A5464",
          iconColor: "FFFFFF",
          controlsBackgroundColor: "#ffffffe6",
        },
        hr = function (e) {
          return e === e.toUpperCase();
        },
        mr = {
          theme01: i(6558),
          theme02: i(2754),
          theme03: i(7196),
          theme04: i(507),
        };
      var gr = function (e, n) {
          var t = e.duration - n,
            r = Math.min(0.05 * e.duration, 120);
          return t > Math.max(30, r);
        },
        yr = window.VDO_HEADER_REFERER || window.document.referrer;
      function br(e, n, t) {
        t.on("_metaDataLoadSuccess", function (t) {
          var r,
            a =
              (null === (r = null == t ? void 0 : t.playerConfig) ||
              void 0 === r
                ? void 0
                : r.options) || {},
            o = a.enableAutoResumeLocal,
            i = void 0 !== o && o,
            l = a.conserveQualityAcrossSession,
            s = void 0 !== l && l,
            u = a.conserveVolumeAcrossSession,
            c = void 0 !== u && u,
            d = a.conserveSpeedAcrossSession,
            p = void 0 !== d && d,
            f = a.conserveSelectedCaptionLanguage,
            v = void 0 !== f && f,
            h = t.id;
          (function () {
            try {
              return (
                window.localStorage.setItem("vdo-test", "test"),
                window.localStorage.removeItem("vdo-test"),
                !0
              );
            } catch (e) {
              return !1;
            }
          })() &&
            (i &&
              (function (e, n) {
                if (e)
                  var t = n.videoEl.value,
                    r = n.eventBus.value,
                    a = n.serverResumeInfo.subscribe(function (n) {
                      if (n) {
                        var o = n.serverResumeTime,
                          i = n.serverUpdatedOn;
                        !(function (e, n) {
                          n.addEventListener("play", function () {
                            var t = setInterval(function () {
                              localStorage.setItem(
                                "vdo/".concat(e, "/lastViewedTime"),
                                n.currentTime.toFixed()
                              ),
                                localStorage.setItem(
                                  "vdo/".concat(e, "/lastViewUpdated"),
                                  Date.now().toString()
                                );
                            }, 1e3);
                            n.addEventListener("pause", function () {
                              clearInterval(t);
                            });
                          });
                        })(e, t),
                          a();
                        var l =
                            Date.now() -
                            parseInt(
                              localStorage.getItem(
                                "vdo/".concat(e, "/lastViewUpdated")
                              ) || "",
                              10
                            ),
                          s =
                            "number" == typeof o &&
                            "number" == typeof i &&
                            (!!isNaN(l) || i < l),
                          u =
                            s && "number" == typeof o
                              ? o
                              : parseInt(
                                  localStorage.getItem(
                                    "vdo/".concat(e, "/lastViewedTime")
                                  ) || "",
                                  10
                                );
                        !isNaN(u) &&
                          gr(t, u) &&
                          (r.emit(
                            s
                              ? "resumedVideoFrom:SERVER"
                              : "resumedVideoFrom:CLIENT",
                            u
                          ),
                          (function (e, n) {
                            if (e.readyState < 2)
                              e.addEventListener("loadeddata", function t() {
                                e.removeEventListener("loadeddata", t),
                                  gr(e, n) && (e.currentTime = n);
                              });
                            else {
                              if (!gr(e, n)) return;
                              e.currentTime = n;
                            }
                          })(t, u));
                      }
                    });
              })(h, e),
            c &&
              (function (e, n) {
                var t = e.videoEl.value;
                if (yr) {
                  t.addEventListener("volumechange", function () {
                    localStorage.setItem(
                      "vdo/".concat(yr, "/volume"),
                      t.volume.toFixed(2)
                    );
                  });
                  var r = localStorage.getItem("vdo/".concat(yr, "/volume"));
                  r && n.setVolume(parseFloat(r));
                }
              })(e, n),
            p &&
              (function (e, n) {
                var t = e.videoEl.value;
                if (yr) {
                  var r = function () {
                    t.addEventListener("ratechange", function () {
                      0 !== t.playbackRate &&
                        localStorage.setItem(
                          "vdo/".concat(yr, "/rate"),
                          t.playbackRate.toFixed(2)
                        );
                    });
                    var e = localStorage.getItem("vdo/".concat(yr, "/rate"));
                    e && n.setPlaybackRate(parseFloat(e));
                  };
                  t.readyState > 1
                    ? r()
                    : t.addEventListener("canplay", function () {
                        r();
                      });
                }
              })(e, n),
            s &&
              (function (e, n) {
                var t = e.videoEl.value;
                if (yr) {
                  var r = function (n) {
                    if (null !== n && !(t.currentTime <= 0)) {
                      var r = e.abrStatus.value ? -1 : n;
                      "number" == typeof r &&
                        localStorage.setItem(
                          "vdo/".concat(yr, "/qualityTrackId"),
                          r.toString()
                        );
                    }
                  };
                  e.abrStatus.subscribe(r), e.activeQualityTrackId.subscribe(r);
                  var a = localStorage.getItem(
                    "vdo/".concat(yr, "/qualityTrackId")
                  );
                  a &&
                    t.addEventListener("loadeddata", function e() {
                      n.selectQualityTrack(parseInt(a, 10)),
                        t.removeEventListener("loadeddata", e);
                    });
                }
              })(e, n),
            v &&
              (function (e, n) {
                var t;
                yr &&
                  (null === (t = e.eventBus.value) ||
                    void 0 === t ||
                    t.on("availableCaptions", function () {
                      var t = localStorage.getItem(
                        "vdo/".concat(yr, "/selectedCaptionId")
                      );
                      t && n.updateActiveCaptionId(t),
                        e.activeCaptionId.subscribe(function (e) {
                          e &&
                            localStorage.setItem(
                              "vdo/".concat(yr, "/selectedCaptionId"),
                              e.toString()
                            );
                        }),
                        e.captionVisibility.subscribe(function (e) {
                          e ||
                            localStorage.removeItem(
                              "vdo/".concat(yr, "/selectedCaptionId")
                            );
                        });
                    }));
              })(e, n));
        });
      }
      const wr = function (e, n, t) {
        var r = t.theme,
          a = void 0 === r ? "theme02" : r,
          i = t.eventBus,
          s = void 0 === i ? new cr.Z() : i,
          u = t.primaryColor,
          c = t.secondaryColor,
          d = t.iconColor,
          f = t.controlsBackgroundColor;
        if (
          !(function (e) {
            for (var n = [W, Q, q, K], t = 0; t < n.length; t++)
              if (!1 === n[t]) return G(e), !1;
            return !0;
          })(n)
        )
          return { eventBus: s };
        e.controls = !1;
        var v,
          h,
          m = (function () {
            var e = document.createElement("player-ui");
            return (
              (e.style.width = "100%"),
              (e.style.height = "100%"),
              (e.style.position = "absolute"),
              (e.style.zIndex = "3"),
              (e.style.top = "0px"),
              (e.style.left = "0px"),
              e
            );
          })(),
          y = m.attachShadow({ mode: "closed" }),
          w = (function () {
            var e = document.createElement("div");
            return (
              (e.style.width = "100%"),
              (e.style.height = "100%"),
              (e.style.position = "absolute"),
              (e.style.zIndex = "1"),
              e
            );
          })();
        y.appendChild(w),
          n.appendChild(m),
          (v = n),
          ((h = document.createElement("style")).innerHTML =
            "\n    .vdo-full-screen-player {\n      width: 100% !important;\n      height: 100% !important;\n      padding-bottom: initial !important;\n      background-color: #000000 !important;\n    }\n  "),
          v.append(h);
        var x = (function (e) {
            return mr[e].default;
          })(a),
          C = (function (e) {
            var n = "",
              t = [],
              r = function () {
                t.forEach(function (n) {
                  !(function (n) {
                    if (!("isConnected" in e) || e.isConnected) {
                      var t = e.offsetWidth,
                        r = n.split("-"),
                        a = r[0],
                        o = r[2];
                      return "max" === a
                        ? parseInt(o.substring(0, 3), 10) > t
                        : t > parseInt(o.substring(0, 3), 10);
                    }
                  })(n)
                    ? e.classList.remove("cmq-".concat(n))
                    : e.classList.add("cmq-".concat(n));
                });
              },
              a = function (e) {
                var r = "object" == typeof e ? e.default : e;
                if (!r)
                  throw new Error("Invalid CSS Content in CustomMediaQuery");
                for (
                  var a = new RegExp(
                      "((@vdo-responsive [\\s\\S]*?){([\\s\\S]*?}\\s*?)})",
                      "gi"
                    ),
                    o = a.exec(r);
                  o;

                ) {
                  var i = o[2],
                    l = o[3],
                    s = (i.match(/\(([^)]+)\)/gm) || [
                      "--CMQ-Error--no-proper-range",
                    ])[0]
                      .replace(": ", "-")
                      .replace(/[()]/g, "");
                  t.indexOf(s) < 0 && t.push(s),
                    (n += "\n"),
                    (n += "/* -------- @vdo-responsive ".concat(
                      s,
                      " -------- */"
                    )),
                    (n += "\n");
                  for (
                    var u = new RegExp("([\\s\\S]*?){([\\s\\S]*?)}", "gi"),
                      c = u.exec(l);
                    c;

                  )
                    (n += "\n"),
                      (n += ".cmq-".concat(s, " ").concat(c[0])),
                      (n += "\n"),
                      (c = u.exec(l));
                  o = a.exec(r);
                }
              };
            return {
              processCSS: a,
              listen: function (t, o) {
                Tn.allStyle.forEach(a), (e = t);
                var i = (function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  var t = document.createElement("iframe");
                  return (
                    (t.style.cssText =
                      "position:absolute;left:0;width:100%;height:0px;margin:1px 0 0;border:none;opacity:0;"),
                    (t.onload = function () {
                      t.contentWindow &&
                        (t.contentWindow.onresize = function () {
                          e.forEach(function (e) {
                            return e();
                          });
                        });
                    }),
                    {
                      observe: function (e) {
                        e.appendChild(t);
                      },
                    }
                  );
                })(r, o);
                i.observe(t), r(), F(n, e, "cmq");
              },
            };
          })(w);
        C.processCSS(x),
          U.inject(y),
          F(x, y, "theme"),
          C.listen(w, function () {
            return s.emit("playerResize", !0);
          });
        var _ = (function (e, n, t) {
          var r,
            a =
              (void 0 === (r = t) && (r = "theme02"),
              "theme01" === r
                ? dr
                : "theme03" === r
                ? fr
                : "theme04" === r
                ? vr
                : pr),
            o = e.primaryColor,
            i = void 0 === o ? a.primaryColor : o,
            l = e.secondaryColor,
            s = void 0 === l ? a.secondaryColor : l,
            u = e.iconColor,
            c = void 0 === u ? a.iconColor : u,
            d = e.controlsBackgroundColor,
            p = void 0 === d ? a.controlsBackgroundColor : d;
          hr(i) && (i = "#".concat(i)),
            hr(c) && (c = c = "#".concat(c)),
            hr(s) && (s = "#".concat(s)),
            hr(p) && (p = "#".concat(p)),
            F(
              "\n    :host {\n        --highestLevel: 7;\n        --layerLevel: 6;\n        --badgeLevel: 5;\n        --componentLevel: 4;\n        --controlsLevel2: 3;\n        --controlsLevel1: 2;\n        --baseLevel: 1;\n        --shadowLevel: -1;\n        --posterLevel: -2;\n        --lowestLevel: -3;\n    }\n  ",
              n,
              "z-level"
            );
          var f = F(
            "\n    :host {\n      --primary: "
              .concat(i, ";\n      --accent: ")
              .concat(s, ";\n      --icon-color: ")
              .concat(c, ";\n      --controlsBackground: ")
              .concat(p, "\n    }\n  "),
            n,
            "colors"
          );
          return function (e) {
            f.innerHTML = "\n      :host {\n        --primary: "
              .concat(e, ";\n        --accent: ")
              .concat(s, ";\n        --icon-color: ")
              .concat(c, ";\n        --controlsBackground: ")
              .concat(p, "\n      }\n    ");
          };
        })(
          {
            primaryColor: u,
            secondaryColor: c,
            iconColor: d,
            controlsBackgroundColor: f,
          },
          y,
          a
        );
        s.on("changeThemeColor", _);
        var E,
          k,
          S = new xn(e, s, {
            shadowDOMRef: y,
            themeId: a,
            hostEl: n,
            uiOptionals: t,
          });
        (E = S.state),
          (k = []),
          Ke(function () {
            var e = E.playerConfig.value.enableKeyboardShortcuts,
              n = void 0 === e || e,
              t = (function (e) {
                return ze(function () {
                  var n,
                    t,
                    r = e.playerConfig.value,
                    a = r.playbackSpeedOptions,
                    o = void 0 === a ? [] : a,
                    i = r.showPlayPauseBtn,
                    l = void 0 === i || i,
                    s = r.showForward,
                    u = void 0 === s || s,
                    c = r.showBackward,
                    d = void 0 === c || c,
                    p = r.showSpeedControl,
                    f = void 0 === p || p,
                    v =
                      (null === (t = e.playerConfig.value) || void 0 === t
                        ? void 0
                        : t.keyboardShortcutConfig) || {};
                  return (
                    ((n = {})[v.togglePlay || " "] = function (e) {
                      l && (e.paused ? e.play() : null == e || e.pause());
                    }),
                    (n[v.forward || "ArrowRight"] = function (e) {
                      u && (e.currentTime += 10);
                    }),
                    (n[v.backward || "ArrowLeft"] = function (e) {
                      d && (e.currentTime -= 10);
                    }),
                    (n[v.speedUp || "}"] = function (e) {
                      if (f) {
                        var n = e.playbackRate,
                          t = o.indexOf(n);
                        t >= 0 && t + 1 < (null == o ? void 0 : o.length)
                          ? (e.playbackRate = o[t + 1])
                          : (e.playbackRate = o[length - 1]);
                      }
                    }),
                    (n[v.speedDown || "{"] = function (e) {
                      if (f) {
                        var n = e.playbackRate,
                          t = o.indexOf(n);
                        e.playbackRate = t - 1 >= 0 ? o[t - 1] : o[0];
                      }
                    }),
                    n
                  );
                });
              })(E);
            k.forEach(function (e, n) {
              document.body.removeEventListener("keydown", e), k.splice(n, 1);
            });
            var r = (function (e, n) {
              return function (t) {
                var r = e.videoEl.value;
                if (r && t.target === document.body) {
                  var a = t.key,
                    o = t.shiftKey && "Shift+".concat(t.key.toUpperCase()),
                    i = t.ctrlKey && "Ctrl+".concat(t.key.toUpperCase()),
                    l = n.value;
                  return a in l
                    ? l[a](r)
                    : o && o in l
                    ? l[o](r)
                    : i && i in l
                    ? l[i](r)
                    : void 0;
                }
              };
            })(E, t);
            k.push(r), n && document.body.addEventListener("keydown", r);
          }),
          br(S.state, S.method, s);
        var T = S.state.status.subscribe(function (e) {
          if (!(e <= 0)) {
            var n = document.querySelector('[data-element-type="poster"]');
            n && (n.remove(), T());
          }
        });
        return (
          (function (e, n, t) {
            var r, a, i;
            l.__ && l.__(e, n),
              (a = (r = "function" == typeof t) ? null : (t && t.__k) || n.__k),
              (i = []),
              O(
                n,
                (e = ((!r && t) || n).__k = g(b, null, [e])),
                a || p,
                p,
                void 0 !== n.ownerSVGElement,
                !r && t
                  ? [t]
                  : a
                  ? null
                  : n.firstChild
                  ? o.call(n.childNodes)
                  : null,
                i,
                !r && t ? t : a ? a.__e : n.firstChild,
                r
              ),
              I(i, e);
          })(g(tn.Provider, { value: S }, g(ur, null)), w),
          { eventBus: s }
        );
      };
      var xr, Cr, _r;
      const Er =
        ((xr = "ERROR"),
        (Cr = { NONE: 0, ERROR: 1, WARN: 2, INFO: 3, DEBUG: 4 }),
        (_r = function (e) {
          return Cr[xr] >= Cr[e];
        }),
        {
          setLevel: function (e) {
            xr = e;
          },
          getLevel: function () {
            return xr;
          },
          error: function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return _r("ERROR") ? console.error.apply(console, e) : void 0;
          },
          warn: function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return _r("WARN") ? console.warn.apply(console, e) : void 0;
          },
          info: function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return _r("INFO") ? console.info.apply(console, e) : void 0;
          },
          debug: function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return _r("DEBUG") ? console.log.apply(console, e) : void 0;
          },
        });
      function kr(e) {
        var n = e.state,
          t = e.unload;
        if ("INACTIVE" !== n.status) {
          if (!document.body.contains(n.videoEl)) return t;
          var r = n.dataStore;
          r.next.beats.push(
            (function (e) {
              var n,
                t,
                r,
                a = e.videoEl,
                o = e.playerObj,
                i =
                  ((t = (n = a).getBoundingClientRect().top),
                  (r = n.getBoundingClientRect().bottom),
                  t >= 0 && r <= window.innerHeight);
              return {
                t: e.getCurrentTimeSinceInit(),
                pt: a.currentTime,
                bl: o.bufferLength,
                st: o.status,
                tp: o.totalPlayed,
                tc: o.totalCovered,
                vo: a.volume,
                ib: o.isBuffering,
                is: o.isSeeking,
                bw: o.getActiveBW(),
                cc: o.getActiveCaptions(),
                isInView: i,
                isWindowInFocus: document.hasFocus(),
                isVideoInFocus: a === document.activeElement,
              };
            })(n)
          ),
            n.error.hasError() && (r.next.error = n.error.get());
          var a = r.getChangesAndSwap(n.playerObj);
          (n.readyToSendNext = !1),
            fetch(n.api + "update/" + n.sessionId, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(a),
            })
              .then(function (e) {
                e.ok ||
                  e.text().then(function (n) {
                    throw new Error(
                      ""
                        .concat(e.status, " | ")
                        .concat(
                          ((r = 100),
                          (t = n).length > r ? t.slice(0, 97) + "..." : t)
                        )
                    );
                    var t, r;
                  });
              })
              .then(function () {
                Er.debug("[clipstat] update response"),
                  (n.readyToSendNext = !0);
              })
              .catch(function (e) {
                Er.error(e),
                  fetch(n.api + "update/" + n.sessionId, {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify([
                      {
                        op: "add",
                        path: "/events/-",
                        value: {
                          name: "clipstat-error",
                          payload: e.toString(),
                          time: new Date().getTime() - n.sessionInitTime,
                        },
                      },
                    ]),
                  });
              }),
            Er.debug("[clipstat] called update");
        }
      }
      var Sr,
        Tr = [
          "_metaDataLoadSuccess",
          "error",
          "loading",
          "load",
          "licenseLoad",
          "variantSelect",
          "adaptation",
          "hlseCookieReceived",
          "hlseCookieRequested",
          "hlseCookieGranted",
          "workerVersion",
          "swErrorCount",
          "apiConnected",
          "loadVideo",
          "saveOfflineAvailable",
          "saveOfflineDeleted",
          "saveOfflineStarted",
          "saveOfflineEnded",
          "saveOfflineError",
          "resumedVideoFrom:CLIENT",
          "resumedVideoFrom:SERVER",
        ],
        Ar = ["play", "pause", "seeking", "seeked", "ended"],
        Pr =
          ((Sr = function (e, n) {
            return (
              (Sr =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, n) {
                    e.__proto__ = n;
                  }) ||
                function (e, n) {
                  for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
                }),
              Sr(e, n)
            );
          }),
          function (e, n) {
            function t() {
              this.constructor = e;
            }
            Sr(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((t.prototype = n.prototype), new t()));
          }),
        Nr = Object.prototype.hasOwnProperty;
      function Lr(e, n) {
        return Nr.call(e, n);
      }
      function Or(e) {
        if (Array.isArray(e)) {
          for (var n = new Array(e.length), t = 0; t < n.length; t++)
            n[t] = "" + t;
          return n;
        }
        if (Object.keys) return Object.keys(e);
        var r = [];
        for (var a in e) Lr(e, a) && r.push(a);
        return r;
      }
      function Ir(e) {
        switch (typeof e) {
          case "object":
            return JSON.parse(JSON.stringify(e));
          case "undefined":
            return null;
          default:
            return e;
        }
      }
      function Rr(e) {
        for (var n, t = 0, r = e.length; t < r; ) {
          if (!((n = e.charCodeAt(t)) >= 48 && n <= 57)) return !1;
          t++;
        }
        return !0;
      }
      function Vr(e) {
        return -1 === e.indexOf("/") && -1 === e.indexOf("~")
          ? e
          : e.replace(/~/g, "~0").replace(/\//g, "~1");
      }
      function Dr(e) {
        return e.replace(/~1/g, "/").replace(/~0/g, "~");
      }
      function Br(e) {
        if (void 0 === e) return !0;
        if (e)
          if (Array.isArray(e)) {
            for (var n = 0, t = e.length; n < t; n++) if (Br(e[n])) return !0;
          } else if ("object" == typeof e)
            for (var r = Or(e), a = r.length, o = 0; o < a; o++)
              if (Br(e[r[o]])) return !0;
        return !1;
      }
      function Mr(e, n) {
        var t = [e];
        for (var r in n) {
          var a =
            "object" == typeof n[r] ? JSON.stringify(n[r], null, 2) : n[r];
          void 0 !== a && t.push(r + ": " + a);
        }
        return t.join("\n");
      }
      var Fr = (function (e) {
          function n(n, t, r, a, o) {
            var i = this.constructor,
              l =
                e.call(
                  this,
                  Mr(n, { name: t, index: r, operation: a, tree: o })
                ) || this;
            return (
              (l.name = t),
              (l.index = r),
              (l.operation = a),
              (l.tree = o),
              Object.setPrototypeOf(l, i.prototype),
              (l.message = Mr(n, { name: t, index: r, operation: a, tree: o })),
              l
            );
          }
          return Pr(n, e), n;
        })(Error),
        Ur = Fr,
        jr = Ir,
        Hr = {
          add: function (e, n, t) {
            return (e[n] = this.value), { newDocument: t };
          },
          remove: function (e, n, t) {
            var r = e[n];
            return delete e[n], { newDocument: t, removed: r };
          },
          replace: function (e, n, t) {
            var r = e[n];
            return (e[n] = this.value), { newDocument: t, removed: r };
          },
          move: function (e, n, t) {
            var r = Gr(t, this.path);
            r && (r = Ir(r));
            var a = Wr(t, { op: "remove", path: this.from }).removed;
            return (
              Wr(t, { op: "add", path: this.path, value: a }),
              { newDocument: t, removed: r }
            );
          },
          copy: function (e, n, t) {
            var r = Gr(t, this.from);
            return (
              Wr(t, { op: "add", path: this.path, value: Ir(r) }),
              { newDocument: t }
            );
          },
          test: function (e, n, t) {
            return { newDocument: t, test: Yr(e[n], this.value) };
          },
          _get: function (e, n, t) {
            return (this.value = e[n]), { newDocument: t };
          },
        },
        zr = {
          add: function (e, n, t) {
            return (
              Rr(n) ? e.splice(n, 0, this.value) : (e[n] = this.value),
              { newDocument: t, index: n }
            );
          },
          remove: function (e, n, t) {
            return { newDocument: t, removed: e.splice(n, 1)[0] };
          },
          replace: function (e, n, t) {
            var r = e[n];
            return (e[n] = this.value), { newDocument: t, removed: r };
          },
          move: Hr.move,
          copy: Hr.copy,
          test: Hr.test,
          _get: Hr._get,
        };
      function Gr(e, n) {
        if ("" == n) return e;
        var t = { op: "_get", path: n };
        return Wr(e, t), t.value;
      }
      function Wr(e, n, t, r, a, o) {
        if (
          (void 0 === t && (t = !1),
          void 0 === r && (r = !0),
          void 0 === a && (a = !0),
          void 0 === o && (o = 0),
          t && ("function" == typeof t ? t(n, 0, e, n.path) : Kr(n, 0)),
          "" === n.path)
        ) {
          var i = { newDocument: e };
          if ("add" === n.op) return (i.newDocument = n.value), i;
          if ("replace" === n.op)
            return (i.newDocument = n.value), (i.removed = e), i;
          if ("move" === n.op || "copy" === n.op)
            return (
              (i.newDocument = Gr(e, n.from)),
              "move" === n.op && (i.removed = e),
              i
            );
          if ("test" === n.op) {
            if (((i.test = Yr(e, n.value)), !1 === i.test))
              throw new Ur(
                "Test operation failed",
                "TEST_OPERATION_FAILED",
                o,
                n,
                e
              );
            return (i.newDocument = e), i;
          }
          if ("remove" === n.op)
            return (i.removed = e), (i.newDocument = null), i;
          if ("_get" === n.op) return (n.value = e), i;
          if (t)
            throw new Ur(
              "Operation `op` property is not one of operations defined in RFC-6902",
              "OPERATION_OP_INVALID",
              o,
              n,
              e
            );
          return i;
        }
        r || (e = Ir(e));
        var l = (n.path || "").split("/"),
          s = e,
          u = 1,
          c = l.length,
          d = void 0,
          p = void 0,
          f = void 0;
        for (f = "function" == typeof t ? t : Kr; ; ) {
          if (
            ((p = l[u]) && -1 != p.indexOf("~") && (p = Dr(p)),
            a &&
              ("__proto__" == p ||
                ("prototype" == p && u > 0 && "constructor" == l[u - 1])))
          )
            throw new TypeError(
              "JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README"
            );
          if (
            (t &&
              void 0 === d &&
              (void 0 === s[p]
                ? (d = l.slice(0, u).join("/"))
                : u == c - 1 && (d = n.path),
              void 0 !== d && f(n, 0, e, d)),
            u++,
            Array.isArray(s))
          ) {
            if ("-" === p) p = s.length;
            else {
              if (t && !Rr(p))
                throw new Ur(
                  "Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index",
                  "OPERATION_PATH_ILLEGAL_ARRAY_INDEX",
                  o,
                  n,
                  e
                );
              Rr(p) && (p = ~~p);
            }
            if (u >= c) {
              if (t && "add" === n.op && p > s.length)
                throw new Ur(
                  "The specified index MUST NOT be greater than the number of elements in the array",
                  "OPERATION_VALUE_OUT_OF_BOUNDS",
                  o,
                  n,
                  e
                );
              if (!1 === (i = zr[n.op].call(n, s, p, e)).test)
                throw new Ur(
                  "Test operation failed",
                  "TEST_OPERATION_FAILED",
                  o,
                  n,
                  e
                );
              return i;
            }
          } else if (u >= c) {
            if (!1 === (i = Hr[n.op].call(n, s, p, e)).test)
              throw new Ur(
                "Test operation failed",
                "TEST_OPERATION_FAILED",
                o,
                n,
                e
              );
            return i;
          }
          if (((s = s[p]), t && u < c && (!s || "object" != typeof s)))
            throw new Ur(
              "Cannot perform operation at the desired path",
              "OPERATION_PATH_UNRESOLVABLE",
              o,
              n,
              e
            );
        }
      }
      function Qr(e, n, t, r, a) {
        if (
          (void 0 === r && (r = !0),
          void 0 === a && (a = !0),
          t && !Array.isArray(n))
        )
          throw new Ur(
            "Patch sequence must be an array",
            "SEQUENCE_NOT_AN_ARRAY"
          );
        r || (e = Ir(e));
        for (var o = new Array(n.length), i = 0, l = n.length; i < l; i++)
          (o[i] = Wr(e, n[i], t, !0, a, i)), (e = o[i].newDocument);
        return (o.newDocument = e), o;
      }
      function qr(e, n, t) {
        var r = Wr(e, n);
        if (!1 === r.test)
          throw new Ur(
            "Test operation failed",
            "TEST_OPERATION_FAILED",
            t,
            n,
            e
          );
        return r.newDocument;
      }
      function Kr(e, n, t, r) {
        if ("object" != typeof e || null === e || Array.isArray(e))
          throw new Ur(
            "Operation is not an object",
            "OPERATION_NOT_AN_OBJECT",
            n,
            e,
            t
          );
        if (!Hr[e.op])
          throw new Ur(
            "Operation `op` property is not one of operations defined in RFC-6902",
            "OPERATION_OP_INVALID",
            n,
            e,
            t
          );
        if ("string" != typeof e.path)
          throw new Ur(
            "Operation `path` property is not a string",
            "OPERATION_PATH_INVALID",
            n,
            e,
            t
          );
        if (0 !== e.path.indexOf("/") && e.path.length > 0)
          throw new Ur(
            'Operation `path` property must start with "/"',
            "OPERATION_PATH_INVALID",
            n,
            e,
            t
          );
        if (("move" === e.op || "copy" === e.op) && "string" != typeof e.from)
          throw new Ur(
            "Operation `from` property is not present (applicable in `move` and `copy` operations)",
            "OPERATION_FROM_REQUIRED",
            n,
            e,
            t
          );
        if (
          ("add" === e.op || "replace" === e.op || "test" === e.op) &&
          void 0 === e.value
        )
          throw new Ur(
            "Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",
            "OPERATION_VALUE_REQUIRED",
            n,
            e,
            t
          );
        if (
          ("add" === e.op || "replace" === e.op || "test" === e.op) &&
          Br(e.value)
        )
          throw new Ur(
            "Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",
            "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",
            n,
            e,
            t
          );
        if (t)
          if ("add" == e.op) {
            var a = e.path.split("/").length,
              o = r.split("/").length;
            if (a !== o + 1 && a !== o)
              throw new Ur(
                "Cannot perform an `add` operation at the desired path",
                "OPERATION_PATH_CANNOT_ADD",
                n,
                e,
                t
              );
          } else if (
            "replace" === e.op ||
            "remove" === e.op ||
            "_get" === e.op
          ) {
            if (e.path !== r)
              throw new Ur(
                "Cannot perform the operation at a path that does not exist",
                "OPERATION_PATH_UNRESOLVABLE",
                n,
                e,
                t
              );
          } else if ("move" === e.op || "copy" === e.op) {
            var i = Jr([{ op: "_get", path: e.from, value: void 0 }], t);
            if (i && "OPERATION_PATH_UNRESOLVABLE" === i.name)
              throw new Ur(
                "Cannot perform the operation from a path that does not exist",
                "OPERATION_FROM_UNRESOLVABLE",
                n,
                e,
                t
              );
          }
      }
      function Jr(e, n, t) {
        try {
          if (!Array.isArray(e))
            throw new Ur(
              "Patch sequence must be an array",
              "SEQUENCE_NOT_AN_ARRAY"
            );
          if (n) Qr(Ir(n), Ir(e), t || !0);
          else {
            t = t || Kr;
            for (var r = 0; r < e.length; r++) t(e[r], r, n, void 0);
          }
        } catch (e) {
          if (e instanceof Ur) return e;
          throw e;
        }
      }
      function Yr(e, n) {
        if (e === n) return !0;
        if (e && n && "object" == typeof e && "object" == typeof n) {
          var t,
            r,
            a,
            o = Array.isArray(e),
            i = Array.isArray(n);
          if (o && i) {
            if ((r = e.length) != n.length) return !1;
            for (t = r; 0 != t--; ) if (!Yr(e[t], n[t])) return !1;
            return !0;
          }
          if (o != i) return !1;
          var l = Object.keys(e);
          if ((r = l.length) !== Object.keys(n).length) return !1;
          for (t = r; 0 != t--; ) if (!n.hasOwnProperty(l[t])) return !1;
          for (t = r; 0 != t--; ) if (!Yr(e[(a = l[t])], n[a])) return !1;
          return !0;
        }
        return e != e && n != n;
      }
      var Zr = new WeakMap(),
        $r = function (e) {
          (this.observers = new Map()), (this.obj = e);
        },
        Xr = function (e, n) {
          (this.callback = e), (this.observer = n);
        };
      function ea(e, n) {
        n.unobserve();
      }
      function na(e, n) {
        var t,
          r = (function (e) {
            return Zr.get(e);
          })(e);
        if (r) {
          var a = (function (e, n) {
            return e.observers.get(n);
          })(r, n);
          t = a && a.observer;
        } else (r = new $r(e)), Zr.set(e, r);
        if (t) return t;
        if (((t = {}), (r.value = Ir(e)), n)) {
          (t.callback = n), (t.next = null);
          var o = function () {
              ta(t);
            },
            i = function () {
              clearTimeout(t.next), (t.next = setTimeout(o));
            };
          "undefined" != typeof window &&
            (window.addEventListener("mouseup", i),
            window.addEventListener("keyup", i),
            window.addEventListener("mousedown", i),
            window.addEventListener("keydown", i),
            window.addEventListener("change", i));
        }
        return (
          (t.patches = []),
          (t.object = e),
          (t.unobserve = function () {
            ta(t),
              clearTimeout(t.next),
              (function (e, n) {
                e.observers.delete(n.callback);
              })(r, t),
              "undefined" != typeof window &&
                (window.removeEventListener("mouseup", i),
                window.removeEventListener("keyup", i),
                window.removeEventListener("mousedown", i),
                window.removeEventListener("keydown", i),
                window.removeEventListener("change", i));
          }),
          r.observers.set(n, new Xr(n, t)),
          t
        );
      }
      function ta(e, n) {
        void 0 === n && (n = !1);
        var t = Zr.get(e.object);
        ra(t.value, e.object, e.patches, "", n),
          e.patches.length && Qr(t.value, e.patches);
        var r = e.patches;
        return (
          r.length > 0 && ((e.patches = []), e.callback && e.callback(r)), r
        );
      }
      function ra(e, n, t, r, a) {
        if (n !== e) {
          "function" == typeof n.toJSON && (n = n.toJSON());
          for (
            var o = Or(n), i = Or(e), l = !1, s = i.length - 1;
            s >= 0;
            s--
          ) {
            var u = e[(d = i[s])];
            if (
              !Lr(n, d) ||
              (void 0 === n[d] && void 0 !== u && !1 === Array.isArray(n))
            )
              Array.isArray(e) === Array.isArray(n)
                ? (a &&
                    t.push({ op: "test", path: r + "/" + Vr(d), value: Ir(u) }),
                  t.push({ op: "remove", path: r + "/" + Vr(d) }),
                  (l = !0))
                : (a && t.push({ op: "test", path: r, value: e }),
                  t.push({ op: "replace", path: r, value: n }));
            else {
              var c = n[d];
              "object" == typeof u &&
              null != u &&
              "object" == typeof c &&
              null != c &&
              Array.isArray(u) === Array.isArray(c)
                ? ra(u, c, t, r + "/" + Vr(d), a)
                : u !== c &&
                  (a &&
                    t.push({ op: "test", path: r + "/" + Vr(d), value: Ir(u) }),
                  t.push({
                    op: "replace",
                    path: r + "/" + Vr(d),
                    value: Ir(c),
                  }));
            }
          }
          if (l || o.length != i.length)
            for (s = 0; s < o.length; s++) {
              var d;
              Lr(e, (d = o[s])) ||
                void 0 === n[d] ||
                t.push({ op: "add", path: r + "/" + Vr(d), value: Ir(n[d]) });
            }
        }
      }
      function aa(e, n, t) {
        void 0 === t && (t = !1);
        var r = [];
        return ra(e, n, r, "", t), r;
      }
      const oa = Object.assign({}, e, a, {
        JsonPatchError: Fr,
        deepClone: Ir,
        escapePathComponent: Vr,
        unescapePathComponent: Dr,
      });
      var ia = function () {
          return (
            (ia =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            ia.apply(this, arguments)
          );
        },
        la = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var r, a = 0, o = n.length; a < o; a++)
              (!r && a in n) ||
                (r || (r = Array.prototype.slice.call(n, 0, a)), (r[a] = n[a]));
          return e.concat(r || Array.prototype.slice.call(n));
        };
      function sa(e) {
        var n,
          t,
          r,
          a,
          o,
          i,
          l,
          s,
          u,
          c,
          d =
            ((t = (n = e).videoId),
            (r = n.sessionInitTime),
            (a = n.embedInfo),
            (o = n.viewer),
            (i = n.videoEl),
            (l = window.navigator),
            (s = a.tags),
            (u = a.userId),
            ia(ia(ia({}, s && { tags: s }), u && { viewerId: u }), {
              sessionInitTime: r,
              embedInfo: a,
              navigator: l.userAgent,
              navigatorProps: {
                languagePreferred: l.language || void 0,
                langaugesKnown: l.languages ? l.languages.toString() : void 0,
                doNotTrack: l.doNotTrack,
                online: l.onLine,
                touchPoints: l.maxTouchPoints,
                concurrency: l.hardwareConcurrency || void 0,
                platform: l.userAgentData
                  ? navigator.userAgentData.platform
                  : navigator.platform,
              },
              dimensions: {
                video: { height: i.offsetHeight, width: i.offsetWidth },
                window: {
                  inner: {
                    height: window.innerHeight,
                    width: window.innerWidth,
                  },
                  outer: {
                    height: window.outerHeight,
                    width: window.outerWidth,
                  },
                },
                screen: {
                  height: window.screen.height,
                  width: window.screen.width,
                  availHeight: window.screen.availHeight,
                  availWidth: window.screen.availWidth,
                },
              },
              refUrl:
                window.VDO_HEADER_REFERER ||
                document.referrer ||
                window.location.href,
              platform: "vdocipher",
              viewer: o,
              media: { id: t },
              vdoPlayerVersion: "2.4.16",
              playerFullVersion: "34b495e2",
              device: {},
              beats: [],
              events: [],
              traces: [],
              coverage: { coveredArray: [], length: 20 },
            })),
          p = oa.deepClone(d);
        return {
          next: d,
          getChangesAndSwap: function (e) {
            var n, t, r;
            (d.coverage = {
              coveredArray:
                ((n = e.totalCoveredArray),
                (t = d.coverage.length),
                (r = []),
                n.forEach(function (e, n) {
                  var a = Math.floor(n / t);
                  r[a] = (r[a] || 0) + e;
                }),
                r),
              length: d.coverage.length,
            }),
              window.vdoErrorHandler &&
                window.vdoErrorHandler.hasError() &&
                ((d.events = la(
                  la([], d.events, !0),
                  [
                    {
                      name: "scriptError",
                      time: new Date().getTime() - d.sessionInitTime,
                      payload: JSON.stringify(window.vdoErrorHandler.stack),
                    },
                  ],
                  !1
                )),
                window.vdoErrorHandler.clear()),
              (c = oa.deepClone(d));
            var a = oa.compare(p, c);
            return (p = c), a;
          },
        };
      }
      function ua(e, n) {
        var t = {
          status: -1,
          totalPlayed: 0,
          totalCovered: 0,
          totalCoveredArray: [],
          isBuffering: !0,
          isSeeking: !1,
          availableQualities: [],
          _totalPlayedCountLastPos: 0,
          bufferLength: e.buffered.length,
          getActiveBW: function () {
            if (this.availableQualities.length) {
              var e = this.availableQualities.filter(function (e) {
                return e.active;
              });
              return Math.floor(e.bandwidth / 1e3);
            }
          },
          getActiveCaptions: function () {
            if (!e.textTracks.length) return "";
            for (var n = 0, t = Array.from(e.textTracks); n < t.length; n++) {
              var r = t[n];
              if ("showing" === r.mode) return r.language;
            }
            return "";
          },
        };
        return (
          n.on("availableQualities", function (e) {
            t.availableQualities = e;
          }),
          e.addEventListener("waiting", function () {
            t.isBuffering = !0;
          }),
          e.addEventListener("canplay", function () {
            t.isBuffering = !1;
          }),
          e.addEventListener("canplaythrough", function () {
            t.isBuffering = !1;
          }),
          e.addEventListener("playing", function () {
            t.isBuffering = !1;
          }),
          e.addEventListener("play", function () {
            t.status = 1;
          }),
          e.addEventListener("pause", function () {
            t.status = 2;
          }),
          e.addEventListener("ended", function () {
            t.status = 3;
          }),
          e.addEventListener("seeking", function () {
            t.isSeeking = !0;
          }),
          e.addEventListener("seeked", function () {
            t.isSeeking = !1;
          }),
          e.addEventListener("timeupdate", function () {
            var n = Math.floor(e.currentTime);
            n === t._totalPlayedCountLastPos + 1
              ? (t.totalPlayed++,
                (t._totalPlayedCountLastPos = n),
                t.totalCoveredArray[n]
                  ? t.totalCoveredArray[n]++
                  : (t.totalCovered++, (t.totalCoveredArray[n] = 1)))
              : n !== t._totalPlayedCountLastPos &&
                (t._totalPlayedCountLastPos = n);
          }),
          t
        );
      }
      function ca(e) {
        var n = null,
          t = !1;
        return (
          e.on("error", function (e) {
            var r = e.payload;
            r && ((t = !0), (n = r));
          }),
          {
            hasError: function () {
              return t;
            },
            get: function () {
              var e = oa.deepClone(n);
              return (n = null), (t = !1), e;
            },
          }
        );
      }
      var da = function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        pa = function (e, n) {
          var t,
            r,
            a,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((t = 1),
                      r &&
                        (a =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                        !(a = a.call(r, o[1])).done)
                    )
                      return a;
                    switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o;
                        break;
                      case 4:
                        return i.label++, { value: o[1], done: !1 };
                      case 5:
                        i.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (a = (a = i.trys).length > 0 && a[a.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0])
                          )
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!a || (o[1] > a[0] && o[1] < a[3]))
                        ) {
                          i.label = o[1];
                          break;
                        }
                        if (6 === o[0] && i.label < a[1]) {
                          (i.label = a[1]), (a = o);
                          break;
                        }
                        if (a && i.label < a[2]) {
                          (i.label = a[2]), i.ops.push(o);
                          break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = n.call(e, i);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    t = a = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        };
      function fa(e, n, t) {
        return (
          void 0 === n && (n = 3),
          da(this, void 0, void 0, function () {
            var r, a;
            return pa(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, fetch(e, t)];
                case 1:
                  if (
                    ((r = o.sent()),
                    (a = !r.status || r.status >= 500),
                    200 === r.status)
                  )
                    return [2, r.json()];
                  if (n > 0 && a) return [2, fa(e, n - 1)];
                  throw new Error("Failed to fetch ".concat(e));
              }
            });
          })
        );
      }
      function va(e) {
        var n = e.videoEl,
          t = e.eventBus,
          r = e.videoId,
          a = e.embedInfo;
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        })(this, void 0, void 0, function () {
          var e, o;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (i) {
            return (
              (e = (function (e) {
                var n,
                  t = e.videoEl,
                  r = e.eventBus,
                  a = e.embedInfo,
                  o = e.videoId,
                  i = new Date().getTime(),
                  l = navigator.cookieEnabled
                    ? ((n = (function (e) {
                        for (
                          var n = "vdo_id=",
                            t = 0,
                            r = document.cookie.split(";");
                          t < r.length;
                          t++
                        ) {
                          for (var a = r[t]; " " === a.charAt(0); )
                            a = a.substring(1);
                          if (0 === a.indexOf(n))
                            return a.substring(n.length, a.length);
                        }
                        return "";
                      })()),
                      "" === n &&
                        ((n = "xy".repeat(16).replace(/[xy]/g, function (e) {
                          var n = (36 * Math.random()) | 0;
                          return ("x" === e ? n : (3 & n) | 8).toString(36);
                        })),
                        (function (e, n, t) {
                          var r = new Date();
                          r.setTime(r.getTime() + 63072e7);
                          var a = "expires=" + r.toUTCString();
                          document.cookie = "vdo_id=" + n + "; " + a;
                        })(0, n)),
                      n)
                    : "unknown";
                return {
                  status: "ACTIVE",
                  videoEl: t,
                  eventBus: r,
                  embedInfo: a,
                  videoId: o,
                  api: "https://clipstat.com/api/v2/",
                  minTimeInterval: 1e3,
                  backOffFactor: 4,
                  subscriptions: [],
                  domSubscriptions: [],
                  viewer: l,
                  timeInterval: 1e4,
                  sessionInitTime: i,
                  sessionId: void 0,
                  readyToSendNext: !1,
                  getCurrentTimeSinceInit: function () {
                    return new Date().getTime() - this.sessionInitTime;
                  },
                  playerObj: ua(t, r),
                  error: ca(r),
                  dataStore: sa({
                    videoId: o,
                    sessionInitTime: i,
                    embedInfo: a,
                    viewer: l,
                    videoEl: t,
                  }),
                };
              })({ videoEl: n, eventBus: t, videoId: r, embedInfo: a })),
              (o = t.on("forceUpdateClipstat", function () {
                kr({ state: e, unload: function () {} }), o();
              })),
              (function (e) {
                if (e.videoEl) {
                  var n = e.videoEl,
                    t = e.eventBus,
                    r = e.dataStore,
                    a = t.on("_metaDataLoadSuccess", function (e) {
                      var n = e.id,
                        t = e.title,
                        a = e.duration,
                        o = e.hostnames,
                        i = e.tech;
                      r.next.media = {
                        id: n,
                        title: t,
                        duration: a,
                        hostnames: o,
                        tech: i,
                      };
                    }),
                    o = t.on("tech", function (e) {
                      r.next.tech = e;
                    }),
                    i = t.on("tags", function (e) {
                      e &&
                        "object" == typeof e &&
                        (e.tags &&
                          Array.isArray(e.tags) &&
                          e.tags.every(function (e) {
                            return "string" == typeof e;
                          }) &&
                          (r.next.tags = e.tags),
                        "string" == typeof e.userId &&
                          e.userId.length >= 8 &&
                          (r.next.userId = e.userId));
                    }),
                    l = t.on("watermarkCount", function (e) {
                      r.next.watermarkCount = e;
                    }),
                    s = t.on("cdmLevel", function (e) {
                      r.next.cdmLevel = e;
                    }),
                    u = t.on("downgradedToL3", function () {
                      r.next.downgradedToL3 = !0;
                    }),
                    c = t.on("metaLoadDuration", function (e) {
                      r.next.metaLoadDuration = e;
                    }),
                    d = t.on("licenseLoadDuration", function (e) {
                      r.next.licenseLoadDuration = e;
                    });
                  e.subscriptions.push(a, o, i, l, s, u, c, d),
                    Tr.forEach(function (n) {
                      var a = t.on(n, function (t) {
                        r.next.events.push({
                          name: n,
                          time: e.getCurrentTimeSinceInit(),
                          payload: JSON.stringify(t),
                        }),
                          (e.timeInterval = e.minTimeInterval);
                      });
                      e.subscriptions.push(a);
                    }),
                    Ar.forEach(function (t) {
                      var a = function (n) {
                        r.next.events.push({
                          name: t,
                          time: e.getCurrentTimeSinceInit(),
                          payload: JSON.stringify(n),
                        }),
                          (e.timeInterval = e.minTimeInterval);
                      };
                      n.addEventListener(t, a),
                        e.domSubscriptions.push({ name: t, callback: a });
                    });
                  var p = t.on("releaseMediaElement", function () {
                    r.next.events.push({
                      name: "releaseMediaElement",
                      time: e.getCurrentTimeSinceInit(),
                      payload: "{isTrusted: false}",
                    }),
                      kr({ state: e, unload: console.log }),
                      e.timer && clearInterval(e.timer),
                      e.domSubscriptions.forEach(function (e) {
                        var t = e.name,
                          r = e.callback;
                        n.removeEventListener(t, r);
                      }),
                      e.subscriptions.forEach(function (e) {
                        e();
                      }),
                      (e.status = "INACTIVE"),
                      p();
                  });
                  window.vdoErrorHandler.onError(function () {
                    e.timeInterval = e.minTimeInterval;
                  });
                }
              })(e),
              (function (e) {
                return da(this, void 0, void 0, function () {
                  var n, t, r, a;
                  return pa(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (n = e.dataStore),
                          [
                            4,
                            fa(e.api, 5, {
                              method: "PUT",
                              headers: { "content-type": "application/json" },
                              body: JSON.stringify(n.next),
                            }),
                          ]
                        );
                      case 1:
                        return (
                          (t = o.sent()),
                          (r = t.session),
                          (a = t.lastResumeTime),
                          (e.readyToSendNext = !0),
                          [2, { sessionId: r, lastResumeTime: a }]
                        );
                    }
                  });
                });
              })(e).then(function (n) {
                var t = n.sessionId;
                (e.sessionId = t),
                  (e.timer = (function (e) {
                    if (e.videoEl) {
                      var n = e.getCurrentTimeSinceInit(),
                        t = e.videoEl.currentTime;
                      return setInterval(function () {
                        e.getCurrentTimeSinceInit() - n > e.timeInterval &&
                          !0 === e.readyToSendNext &&
                          ((n = e.getCurrentTimeSinceInit()),
                          kr({ state: e, unload: console.log }),
                          (e.timeInterval = Math.min(
                            e.timeInterval * e.backOffFactor,
                            18e5
                          ))),
                          e.videoEl.currentTime !== t &&
                            (e.timeInterval = e.minTimeInterval),
                          (t = e.videoEl.currentTime);
                      }, 5e3);
                    }
                  })(e));
              }),
              [2]
            );
          });
        });
      }
      var ha = function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        ma = {
          videoRobustness: "HW_SECURE_ALL",
          audioRobustness: "SW_SECURE_CRYPTO",
        },
        ga = {
          videoRobustness: "SW_SECURE_CRYPTO",
          audioRobustness: "SW_SECURE_CRYPTO",
        },
        ya = "com.widevine.alpha",
        ba = function (e) {
          return {
            initDataTypes: ["cenc"],
            audioCapabilities: [
              {
                contentType: 'audio/mp4;codecs="mp4a.40.2"',
                robustness: e.audioRobustness,
              },
            ],
            videoCapabilities: [
              {
                contentType: 'video/mp4;codecs="avc1.42E01E"',
                robustness: e.videoRobustness,
              },
            ],
          };
        },
        wa = function () {
          return navigator.requestMediaKeySystemAccess(ya, [ba(ma), ba(ga)]);
        },
        xa = function () {
          return (
            (xa =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            xa.apply(this, arguments)
          );
        },
        Ca = function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        _a = function (e, n) {
          var t,
            r,
            a,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((t = 1),
                      r &&
                        (a =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                        !(a = a.call(r, o[1])).done)
                    )
                      return a;
                    switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o;
                        break;
                      case 4:
                        return i.label++, { value: o[1], done: !1 };
                      case 5:
                        i.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (a = (a = i.trys).length > 0 && a[a.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0])
                          )
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!a || (o[1] > a[0] && o[1] < a[3]))
                        ) {
                          i.label = o[1];
                          break;
                        }
                        if (6 === o[0] && i.label < a[1]) {
                          (i.label = a[1]), (a = o);
                          break;
                        }
                        if (a && i.label < a[2]) {
                          (i.label = a[2]), i.ops.push(o);
                          break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = n.call(e, i);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    t = a = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        },
        Ea = function (e) {
          if ((void 0 === e && (e = []), e.length > 0)) {
            var n = Array.from(e).sort(function (e, n) {
              return n.height - e.height;
            });
            return n[0].url || "";
          }
          return "";
        },
        ka = function (e) {
          return (
            void 0 === e && (e = !1),
            Ca(void 0, void 0, void 0, function () {
              var n, t, r;
              return _a(this, function (a) {
                switch (a.label) {
                  case 0:
                    return e
                      ? [
                          2,
                          {
                            videoRobustness: ga.videoRobustness,
                            audioRobustness: ga.audioRobustness,
                          },
                        ]
                      : [4, wa()];
                  case 1:
                    return (
                      (n = a.sent()),
                      (t = n.getConfiguration()),
                      (r = t.audioCapabilities),
                      [
                        2,
                        {
                          videoRobustness: t.videoCapabilities[0].robustness,
                          audioRobustness: r[0].robustness,
                        },
                      ]
                    );
                }
              });
            })
          );
        },
        Sa = function (e, n) {
          return (
            void 0 === e && (e = null),
            Ca(void 0, void 0, void 0, function () {
              var t, r, a, o, i, l, s;
              return _a(this, function (u) {
                switch (u.label) {
                  case 0:
                    return (
                      (t = [
                        {
                          streaming: {
                            bufferingGoal: 10,
                            rebufferingGoal: 5,
                            bufferBehind: 10,
                            retryParameters: {
                              maxAttempts: 5,
                              stallTimeout: 15e3,
                              connectionTimeout: 25e3,
                            },
                            stallThreshold: 3,
                          },
                          manifest: {
                            retryParameters: {
                              maxAttempts: 5,
                              stallTimeout: 15e3,
                              connectionTimeout: 25e3,
                            },
                            dash: { ignoreMinBufferTime: !0 },
                          },
                        },
                      ]),
                      e
                        ? ((i = {}),
                          (l = {
                            retryParameters: {
                              maxAttempts: 2,
                              stallTimeout: 15e3,
                              connectionTimeout: 25e3,
                            },
                            servers: e,
                          }),
                          (s = {}),
                          (a = ya),
                          (o = [{}]),
                          [4, ka(n)])
                        : [3, 2]
                    );
                  case 1:
                    return (
                      (i.drm =
                        ((l.advanced =
                          ((s[a] = xa.apply(void 0, o.concat([u.sent()]))), s)),
                        l)),
                      (r = i),
                      [3, 3]
                    );
                  case 2:
                    (r = {}), (u.label = 3);
                  case 3:
                    return [2, xa.apply(void 0, t.concat([r]))];
                }
              });
            })
          );
        },
        Ta = function (e) {
          var n = e.getVariantTracks();
          return (
            n.forEach(function (e) {
              return (e.label = "".concat(
                Math.round(e.bandwidth / 1e3),
                " kbps"
              ));
            }),
            n
          );
        },
        Aa = function (e) {
          return e.getVariantTracks().filter(function (e) {
            return e.active;
          })[0].id;
        },
        Pa = function (e) {
          var n = e.getConfiguration().drm.advanced;
          return (
            !!n &&
            n["com.widevine.alpha"].videoRobustness === ma.videoRobustness
          );
        },
        Na = function (e, n, t) {
          var r,
            a = t.manifestUri,
            o = t.shakaPlayer,
            i = t.licenseResponseReceived,
            l = t.error,
            s = t.handleError,
            u = t.sessionLicense;
          if (((r = l.code), !String(r).startsWith("301") && 6002 !== r))
            return s(l);
          if (i && !u) return s(l);
          if (Pa(o)) {
            if (e.currentTime > 0) return s(l);
            var c = o.getConfiguration();
            return c.drm.advanced
              ? ((c.drm.advanced["com.widevine.alpha"].videoRobustness =
                  ga.videoRobustness),
                o.configure(c),
                n.emit("downgradedToL3", !0),
                void o.load(a).catch(s))
              : s(l);
          }
          s(l);
        },
        La = function (e) {
          return "webcomponent-dom" === e
            ? window.location.href
            : window.VDO_HEADER_REFERER ||
                document.referrer ||
                window.location.href;
        },
        Oa = {
          get isMacos() {
            return /Macintosh/i.test(navigator.userAgent);
          },
          get isIpad() {
            return (
              /iPad/i.test(navigator.userAgent) ||
              (this.isMacos && navigator.maxTouchPoints > 2)
            );
          },
          get isIos() {
            return Boolean(
              this.isIpad ||
                navigator.userAgent.match(/(iPad|iPhone|iPod) OS ([0-9]+)/) ||
                navigator.userAgent.match(
                  /(iPad|iPhone|iPod)[;,] CPU OS ([0-9]+)/
                )
            );
          },
          get isApple() {
            return this.isIos || this.isMacos;
          },
          get isAndroid() {
            return !!navigator.userAgent.match(/Android ([0-9]+)/);
          },
          get isEdge() {
            return !!navigator.userAgent.match(/Edge/);
          },
          get isChrome() {
            return (
              !!navigator.userAgent.match(/Chrome\/([0-9]+)/) && !this.isEdge
            );
          },
          get isLinux() {
            return /Linux/i.test(navigator.userAgent);
          },
          get isWindowsPhone() {
            return /Windows Phone/i.test(navigator.userAgent);
          },
          get isAndroidWebview() {
            return this.isAndroid && navigator.userAgent.match(/\s\bwv\b/);
          },
          get androidVersion() {
            var e = navigator.userAgent.match(/Android ([0-9]+)/);
            return e ? parseInt(e[1]) : null;
          },
          get chromeVersion() {
            var e = navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return e ? parseInt(e[1]) : null;
          },
          get iosDevice() {
            var e =
              this.isIpad ||
              navigator.userAgent.match(/(iPad|iPhone|iPod) OS ([0-9]+)/) ||
              navigator.userAgent.match(/(iPad|iPhone|iPod), CPU OS ([0-9]+)/);
            return e ? e[1] : null;
          },
          get iosVersion() {
            var e =
              this.isIpad ||
              navigator.userAgent.match(/(iPad|iPhone|iPod) OS ([0-9]+)/) ||
              navigator.userAgent.match(
                /(iPad|iPhone|iPod)[;,] CPU OS ([0-9]+)/
              );
            return e ? parseInt(e[2]) : null;
          },
        },
        Ia = function () {
          return (
            "" !==
            document
              .createElement("video")
              .canPlayType("application/vnd.apple.mpegURL")
          );
        },
        Ra = /^http:\/\//,
        Va = /^http:\/\/localhost/;
      const Da = function (e) {
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        })(void 0, void 0, void 0, function () {
          var n, t, r, a;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (o) {
            return (
              (n = null),
              (t = function (e, t) {
                return (
                  void 0 === t && (t = !1), (n = { message: e, override: t })
                );
              }),
              (r = Ia() && Oa.isIos && navigator.serviceWorker)
                ? [2, { status: !0 }]
                : ((a = !navigator.userAgent.includes(") Version")),
                  Oa.isIos
                    ? (function (e) {
                        return e && Ra.test(e) && !Va.test(e);
                      })(e)
                      ? (t(
                          'HTML5 protected video can only play with "https://" or "http://localhost/". Website admin should setup https to enable playback.',
                          !0
                        ),
                        [2, { status: !1, error: n }])
                      : a
                      ? (t("Try playing this video in Safari Browser", !0),
                        [2, { status: !1, error: n }])
                      : ((!Oa.iosVersion || Oa.iosVersion < 16) &&
                          t(
                            "To play this video, update from Settings > General > Software Update.",
                            !0
                          ),
                        [2, { status: !!r, error: n }])
                    : [2, { status: !1 }])
            );
          });
        });
      };
      const Ba = function (e) {
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        })(void 0, void 0, void 0, function () {
          var n, t, r, a, o, i;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (l) {
            switch (l.label) {
              case 0:
                return (
                  (n = /^http:\/\//),
                  (t = /^http:\/\/localhost/),
                  (r = null),
                  (a = function (e, n) {
                    return (
                      void 0 === n && (n = !1),
                      (r = { message: e, override: n })
                    );
                  }),
                  Oa.isAndroid && Oa.androidVersion && Oa.androidVersion < 5
                    ? [2, { status: !1 }]
                    : (Oa.isChrome && !Oa.isIos
                        ? Oa.chromeVersion && Oa.chromeVersion > 55
                          ? e && n.test(e) && !t.test(e)
                            ? a(
                                'HTML5 protected video can only play with "https://" or "http://localhost/". Website admin should setup https to enable playback.',
                                !0
                              )
                            : Oa.isAndroid && 91 === Oa.chromeVersion
                            ? a(
                                "Please update Google Chrome from settings > About Google Chrome. Chrome 91 has a bug preventing playback.",
                                !0
                              )
                            : a(
                                "Please try the following fixes in order. (1) Do not watch in incognito mode, Try in normal chrome window. (2) ALLOW from Chrome settings > Site settings > Protected Content. (3) Restart device. If still not working, contact us.",
                                !0
                              )
                          : a("Please update Google Chrome browser", !0)
                        : Oa.isAndroid
                        ? a(
                            "Browser failed. Please view in updated Google Chrome browser",
                            !0
                          )
                        : Oa.isIos ||
                          (Oa.isEdge
                            ? a(
                                "Browser failed. Please view in updated Edge or Google Chrome browser. If still not working, contact us."
                              )
                            : a(
                                "Browser failed. Please view in updated Google Chrome browser"
                              )),
                      [
                        4,
                        ha(void 0, void 0, void 0, function () {
                          var e, n;
                          return (function (e, n) {
                            var t,
                              r,
                              a,
                              o,
                              i = {
                                label: 0,
                                sent: function () {
                                  if (1 & a[0]) throw a[1];
                                  return a[1];
                                },
                                trys: [],
                                ops: [],
                              };
                            return (
                              (o = { next: l(0), throw: l(1), return: l(2) }),
                              "function" == typeof Symbol &&
                                (o[Symbol.iterator] = function () {
                                  return this;
                                }),
                              o
                            );
                            function l(o) {
                              return function (l) {
                                return (function (o) {
                                  if (t)
                                    throw new TypeError(
                                      "Generator is already executing."
                                    );
                                  for (; i; )
                                    try {
                                      if (
                                        ((t = 1),
                                        r &&
                                          (a =
                                            2 & o[0]
                                              ? r.return
                                              : o[0]
                                              ? r.throw ||
                                                ((a = r.return) && a.call(r), 0)
                                              : r.next) &&
                                          !(a = a.call(r, o[1])).done)
                                      )
                                        return a;
                                      switch (
                                        ((r = 0),
                                        a && (o = [2 & o[0], a.value]),
                                        o[0])
                                      ) {
                                        case 0:
                                        case 1:
                                          a = o;
                                          break;
                                        case 4:
                                          return (
                                            i.label++, { value: o[1], done: !1 }
                                          );
                                        case 5:
                                          i.label++, (r = o[1]), (o = [0]);
                                          continue;
                                        case 7:
                                          (o = i.ops.pop()), i.trys.pop();
                                          continue;
                                        default:
                                          if (
                                            !(
                                              (a =
                                                (a = i.trys).length > 0 &&
                                                a[a.length - 1]) ||
                                              (6 !== o[0] && 2 !== o[0])
                                            )
                                          ) {
                                            i = 0;
                                            continue;
                                          }
                                          if (
                                            3 === o[0] &&
                                            (!a || (o[1] > a[0] && o[1] < a[3]))
                                          ) {
                                            i.label = o[1];
                                            break;
                                          }
                                          if (6 === o[0] && i.label < a[1]) {
                                            (i.label = a[1]), (a = o);
                                            break;
                                          }
                                          if (a && i.label < a[2]) {
                                            (i.label = a[2]), i.ops.push(o);
                                            break;
                                          }
                                          a[2] && i.ops.pop(), i.trys.pop();
                                          continue;
                                      }
                                      o = n.call(e, i);
                                    } catch (e) {
                                      (o = [6, e]), (r = 0);
                                    } finally {
                                      t = a = 0;
                                    }
                                  if (5 & o[0]) throw o[1];
                                  return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0,
                                  };
                                })([o, l]);
                              };
                            }
                          })(this, function (t) {
                            switch (t.label) {
                              case 0:
                                if (
                                  ((e =
                                    "MediaKeys" in window ||
                                    "WebKitMediaKeys" in window ||
                                    "MSMediaKeys" in window),
                                  (n =
                                    "function" ==
                                    typeof navigator.requestMediaKeySystemAccess),
                                  !e || !n)
                                )
                                  throw new Error("HTML5 EME not ready");
                                return [4, wa()];
                              case 1:
                                return t.sent(), [2, !0];
                            }
                          });
                        }).catch(function (e) {
                          return (o = e);
                        }),
                      ])
                );
              case 1:
                return !0 === (i = l.sent())
                  ? [2, { status: !0 }]
                  : !1 === i &&
                    Oa.isAndroid &&
                    91 === Oa.chromeVersion &&
                    "Unsupported keySystem or supportedConfigurations." === o
                  ? [
                      2,
                      {
                        status: !1,
                        error: {
                          message:
                            "Please update Google Chrome Browser from Play Store",
                          override: !0,
                        },
                      },
                    ]
                  : [2, { status: !1, error: r }];
            }
          });
        });
      };
      var Ma = function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        Fa = function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        };
      function Ua(e, n) {
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        })(this, void 0, void 0, function () {
          var t, r, a, o, i, l, s, u, c, d, p, f, v;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (h) {
            switch (h.label) {
              case 0:
                (t = ""), (h.label = 1);
              case 1:
                if (!e.length) return [3, 18];
                if ("dash" !== (r = e.shift())) return [3, 5];
                h.label = 2;
              case 2:
                return h.trys.push([2, 4, , 5]), [4, Ba(n)];
              case 3:
                return (
                  (a = h.sent()),
                  (o = a.status),
                  !(p = a.error) || (!p.override && t) || (t = p.message),
                  !0 === o ? [2, { playbackTech: r }] : [3, 5]
                );
              case 4:
                return (
                  (i = h.sent()),
                  Er.debug("".concat(r, " test failed. Error: "), i),
                  [3, 5]
                );
              case 5:
                if ("fps" !== r) return [3, 9];
                h.label = 6;
              case 6:
                return (
                  h.trys.push([6, 8, , 9]),
                  [
                    4,
                    Ma(void 0, void 0, void 0, function () {
                      var e, n, t;
                      return (function (e, n) {
                        var t,
                          r,
                          a,
                          o,
                          i = {
                            label: 0,
                            sent: function () {
                              if (1 & a[0]) throw a[1];
                              return a[1];
                            },
                            trys: [],
                            ops: [],
                          };
                        return (
                          (o = { next: l(0), throw: l(1), return: l(2) }),
                          "function" == typeof Symbol &&
                            (o[Symbol.iterator] = function () {
                              return this;
                            }),
                          o
                        );
                        function l(o) {
                          return function (l) {
                            return (function (o) {
                              if (t)
                                throw new TypeError(
                                  "Generator is already executing."
                                );
                              for (; i; )
                                try {
                                  if (
                                    ((t = 1),
                                    r &&
                                      (a =
                                        2 & o[0]
                                          ? r.return
                                          : o[0]
                                          ? r.throw ||
                                            ((a = r.return) && a.call(r), 0)
                                          : r.next) &&
                                      !(a = a.call(r, o[1])).done)
                                  )
                                    return a;
                                  switch (
                                    ((r = 0),
                                    a && (o = [2 & o[0], a.value]),
                                    o[0])
                                  ) {
                                    case 0:
                                    case 1:
                                      a = o;
                                      break;
                                    case 4:
                                      return (
                                        i.label++, { value: o[1], done: !1 }
                                      );
                                    case 5:
                                      i.label++, (r = o[1]), (o = [0]);
                                      continue;
                                    case 7:
                                      (o = i.ops.pop()), i.trys.pop();
                                      continue;
                                    default:
                                      if (
                                        !(
                                          (a =
                                            (a = i.trys).length > 0 &&
                                            a[a.length - 1]) ||
                                          (6 !== o[0] && 2 !== o[0])
                                        )
                                      ) {
                                        i = 0;
                                        continue;
                                      }
                                      if (
                                        3 === o[0] &&
                                        (!a || (o[1] > a[0] && o[1] < a[3]))
                                      ) {
                                        i.label = o[1];
                                        break;
                                      }
                                      if (6 === o[0] && i.label < a[1]) {
                                        (i.label = a[1]), (a = o);
                                        break;
                                      }
                                      if (a && i.label < a[2]) {
                                        (i.label = a[2]), i.ops.push(o);
                                        break;
                                      }
                                      a[2] && i.ops.pop(), i.trys.pop();
                                      continue;
                                  }
                                  o = n.call(e, i);
                                } catch (e) {
                                  (o = [6, e]), (r = 0);
                                } finally {
                                  t = a = 0;
                                }
                              if (5 & o[0]) throw o[1];
                              return { value: o[0] ? o[1] : void 0, done: !0 };
                            })([o, l]);
                          };
                        }
                      })(this, function (r) {
                        return (
                          (e = null),
                          (n = function (n, t) {
                            return (
                              void 0 === t && (t = !1),
                              (e = { message: n, override: t })
                            );
                          }),
                          !(t = Boolean(
                            "function" == typeof window.WebKitMediaKeys &&
                              window.WebKitMediaKeys.isTypeSupported(
                                "com.apple.fps.1_0",
                                "video/mp4"
                              )
                          )) &&
                            Oa.isApple &&
                            (Oa.isMacos
                              ? n("Try Safari browser on macOS.")
                              : n("Try Safari browser or update iOS.", !0)),
                          [2, { status: t, error: e }]
                        );
                      });
                    }),
                  ]
                );
              case 7:
                return (
                  (l = h.sent()),
                  (s = l.status),
                  !(p = l.error) || (!p.override && t) || (t = p.message),
                  !0 === s ? [2, { playbackTech: r }] : [3, 9]
                );
              case 8:
                return (
                  (u = h.sent()),
                  Er.debug("".concat(r, " test failed. Error: "), u),
                  [3, 9]
                );
              case 9:
                if ("cbcsi" !== r) return [3, 13];
                h.label = 10;
              case 10:
                return h.trys.push([10, 12, , 13]), [4, Da(n)];
              case 11:
                return (
                  (c = h.sent()),
                  (d = c.status),
                  !(p = c.error) || (!p.override && t) || (t = p.message),
                  !0 === d ? [2, { playbackTech: r }] : [3, 13]
                );
              case 12:
                return (
                  (f = h.sent()),
                  Er.debug("".concat(r, " test failed. Error: "), f),
                  [3, 13]
                );
              case 13:
                if ("zen" !== r) return [3, 17];
                h.label = 14;
              case 14:
                return (
                  h.trys.push([14, 16, , 17]),
                  [
                    4,
                    Fa(void 0, void 0, void 0, function () {
                      return (function (e, n) {
                        var t,
                          r,
                          a,
                          o,
                          i = {
                            label: 0,
                            sent: function () {
                              if (1 & a[0]) throw a[1];
                              return a[1];
                            },
                            trys: [],
                            ops: [],
                          };
                        return (
                          (o = { next: l(0), throw: l(1), return: l(2) }),
                          "function" == typeof Symbol &&
                            (o[Symbol.iterator] = function () {
                              return this;
                            }),
                          o
                        );
                        function l(o) {
                          return function (l) {
                            return (function (o) {
                              if (t)
                                throw new TypeError(
                                  "Generator is already executing."
                                );
                              for (; i; )
                                try {
                                  if (
                                    ((t = 1),
                                    r &&
                                      (a =
                                        2 & o[0]
                                          ? r.return
                                          : o[0]
                                          ? r.throw ||
                                            ((a = r.return) && a.call(r), 0)
                                          : r.next) &&
                                      !(a = a.call(r, o[1])).done)
                                  )
                                    return a;
                                  switch (
                                    ((r = 0),
                                    a && (o = [2 & o[0], a.value]),
                                    o[0])
                                  ) {
                                    case 0:
                                    case 1:
                                      a = o;
                                      break;
                                    case 4:
                                      return (
                                        i.label++, { value: o[1], done: !1 }
                                      );
                                    case 5:
                                      i.label++, (r = o[1]), (o = [0]);
                                      continue;
                                    case 7:
                                      (o = i.ops.pop()), i.trys.pop();
                                      continue;
                                    default:
                                      if (
                                        !(
                                          (a =
                                            (a = i.trys).length > 0 &&
                                            a[a.length - 1]) ||
                                          (6 !== o[0] && 2 !== o[0])
                                        )
                                      ) {
                                        i = 0;
                                        continue;
                                      }
                                      if (
                                        3 === o[0] &&
                                        (!a || (o[1] > a[0] && o[1] < a[3]))
                                      ) {
                                        i.label = o[1];
                                        break;
                                      }
                                      if (6 === o[0] && i.label < a[1]) {
                                        (i.label = a[1]), (a = o);
                                        break;
                                      }
                                      if (a && i.label < a[2]) {
                                        (i.label = a[2]), i.ops.push(o);
                                        break;
                                      }
                                      a[2] && i.ops.pop(), i.trys.pop();
                                      continue;
                                  }
                                  o = n.call(e, i);
                                } catch (e) {
                                  (o = [6, e]), (r = 0);
                                } finally {
                                  t = a = 0;
                                }
                              if (5 & o[0]) throw o[1];
                              return { value: o[0] ? o[1] : void 0, done: !0 };
                            })([o, l]);
                          };
                        }
                      })(this, function (e) {
                        return [2, { status: Oa.isAndroid }];
                      });
                    }),
                  ]
                );
              case 15:
                return !0 === h.sent().status
                  ? [2, { playbackTech: r }]
                  : [3, 17];
              case 16:
                return (
                  (v = h.sent()),
                  Er.debug("".concat(r, " test failed. Error: "), v),
                  [3, 17]
                );
              case 17:
                if ("h6" === r)
                  try {
                    if (
                      !0 ===
                      (Ia() ||
                      MediaSource.isTypeSupported(
                        'video/mp4; codecs="avc1.640028, mp4a.40.2"'
                      )
                        ? { status: !0, error: !1 }
                        : {
                            status: !1,
                            error: {
                              message: "Please try in different browser",
                              override: !1,
                            },
                          }
                      ).status
                    )
                      return [2, { playbackTech: r }];
                  } catch (e) {
                    Er.debug("".concat(r, " test failed. Error: "), e);
                  }
                return [3, 1];
              case 18:
                return [2, { playbackTech: !1, error: t }];
            }
          });
        });
      }
      var ja = function (e, n, t) {
          return (function (e, n, t, r) {
            return new (t || (t = Promise))(function (a, o) {
              function i(e) {
                try {
                  s(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                try {
                  s(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                var n;
                e.done
                  ? a(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(i, l);
              }
              s((r = r.apply(e, n || [])).next());
            });
          })(void 0, void 0, void 0, function () {
            var r, a, o, i, l;
            return (function (e, n) {
              var t,
                r,
                a,
                o,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: l(0), throw: l(1), return: l(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function l(o) {
                return function (l) {
                  return (function (o) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; i; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (a =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                : r.next) &&
                            !(a = a.call(r, o[1])).done)
                        )
                          return a;
                        switch (
                          ((r = 0), a && (o = [2 & o[0], a.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            a = o;
                            break;
                          case 4:
                            return i.label++, { value: o[1], done: !1 };
                          case 5:
                            i.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (a =
                                  (a = i.trys).length > 0 && a[a.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              i = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!a || (o[1] > a[0] && o[1] < a[3]))
                            ) {
                              i.label = o[1];
                              break;
                            }
                            if (6 === o[0] && i.label < a[1]) {
                              (i.label = a[1]), (a = o);
                              break;
                            }
                            if (a && i.label < a[2]) {
                              (i.label = a[2]), i.ops.push(o);
                              break;
                            }
                            a[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        o = n.call(e, i);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        t = a = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, l]);
                };
              }
            })(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (r = ["cbcsi", "fps", "dash", "zen", "h6"]),
                    0 === e.length
                      ? ((l =
                          "Video is not ready yet. Please try after some time."),
                        n.emit("error", {
                          message: l,
                          payload: {
                            event: l,
                            message:
                              "no tech available, length of metadata.tech is ZERO",
                          },
                        }),
                        [2, ""])
                      : [4, Ua(e, t)]
                  );
                case 1:
                  return (
                    (a = s.sent()),
                    (o = a.playbackTech),
                    (i = a.error),
                    o && r.includes(o) && !i
                      ? [2, o]
                      : ((l =
                          i ||
                          "Video not ready for this device. \n Please try a different browser."),
                        n.emit("error", {
                          message: l,
                          payload: {
                            event: l,
                            message: "SDK for ".concat(
                              o,
                              " playback is not present"
                            ),
                          },
                        }),
                        Er.error(
                          "cannot figure out what to play on this device"
                        ),
                        [2, ""])
                  );
              }
            });
          });
        },
        Ha = function () {
          return i.e(39).then(i.t.bind(i, 3602, 23));
        };
      const za = {
        isOffLine: function () {
          return !1 === navigator.onLine;
        },
        requestOfflineMetaData: function (e) {
          var n;
          return (function (e, n, t, r) {
            return new (t || (t = Promise))(function (a, o) {
              function i(e) {
                try {
                  s(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                try {
                  s(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                var n;
                e.done
                  ? a(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(i, l);
              }
              s((r = r.apply(e, n || [])).next());
            });
          })(this, void 0, void 0, function () {
            var t, r, a, o, i, l;
            return (function (e, n) {
              var t,
                r,
                a,
                o,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: l(0), throw: l(1), return: l(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function l(o) {
                return function (l) {
                  return (function (o) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; i; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (a =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                : r.next) &&
                            !(a = a.call(r, o[1])).done)
                        )
                          return a;
                        switch (
                          ((r = 0), a && (o = [2 & o[0], a.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            a = o;
                            break;
                          case 4:
                            return i.label++, { value: o[1], done: !1 };
                          case 5:
                            i.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (a =
                                  (a = i.trys).length > 0 && a[a.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              i = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!a || (o[1] > a[0] && o[1] < a[3]))
                            ) {
                              i.label = o[1];
                              break;
                            }
                            if (6 === o[0] && i.label < a[1]) {
                              (i.label = a[1]), (a = o);
                              break;
                            }
                            if (a && i.label < a[2]) {
                              (i.label = a[2]), i.ops.push(o);
                              break;
                            }
                            a[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        o = n.call(e, i);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        t = a = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, l]);
                };
              }
            })(this, function (s) {
              switch (s.label) {
                case 0:
                  return [4, Ha()];
                case 1:
                  return (
                    (t = s.sent()),
                    (r = new t.Player(document.createElement("video"))),
                    [4, (a = new t.offline.Storage(r)).list()]
                  );
                case 2:
                  if (
                    ((o = s.sent().filter(function (n) {
                      var t = n.appMetadata;
                      return (null == t ? void 0 : t.videoId) === e;
                    })),
                    a.destroy(),
                    r.destroy(),
                    o.length)
                  )
                    return (
                      (i = o.reduce(function (e, n) {
                        return e.size > n.size ? e : n;
                      })),
                      (l =
                        i &&
                        (null === (n = i.appMetadata) || void 0 === n
                          ? void 0
                          : n.metaData)).dash &&
                        i.offlineUri &&
                        (l.dash.manifest = i.offlineUri),
                      [2, l]
                    );
                  throw new Error("Requested Content is not stored offline");
              }
            });
          });
        },
      };
      var Ga = function () {
        return (
          (Ga =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var a in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              return e;
            }),
          Ga.apply(this, arguments)
        );
      };
      function Wa(e) {
        var n = e.videoId,
          t = e.configureOptions,
          r = e.eventBus,
          a = t.overrides,
          o = t.techoverride,
          i = t.player;
        return new Promise(function (e, t) {
          var l = function (t) {
            var i = t.hostnames,
              l = t.message,
              s = t.tech;
            if (!i) throw new Error(l || "Error loading metadata");
            "object" == typeof a && (t = Ga(Ga({}, t), a)),
              o &&
                (t.tech = (function (e, n) {
                  if (0 === n.length) return e;
                  if (
                    (n.forEach(function (n) {
                      return (
                        n.startsWith("-") &&
                        (function (e, n) {
                          var t = n.indexOf(e);
                          t > -1 && n.splice(t, 1);
                        })(n.substr(1), e)
                      );
                    }),
                    n.includes("*"))
                  )
                    return e;
                  var t = [];
                  return (
                    n.forEach(function (n) {
                      return "*" !== n && e.includes(n) && t.push(n);
                    }),
                    t
                  );
                })(s, o)),
              (t.id = t.id || n),
              r.emit("_metaDataLoadSuccess", t),
              e(t);
          };
          try {
            var s = document.querySelector('[data-metadata="'.concat(n, '"]'));
            if (!s || !s.textContent)
              throw new Error("No MetaDataScript tag present");
            var u = JSON.parse(s.textContent);
            l(u);
          } catch (e) {
            if (za.isOffLine())
              za.requestOfflineMetaData(n)
                .then(function (e) {
                  (e.isOfflineMetadata = !0), l(e);
                })
                .catch(function (e) {
                  r.emit("error", { message: e.toString() }), t(e);
                });
            else {
              var c = i
                  ? "https://dev.vdocipher.com/api/meta/"
                      .concat(n, "/player/")
                      .concat(i)
                  : "https://dev.vdocipher.com/api/meta/".concat(n),
                d = Date.now();
              fetch(c)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  r.emit("metaLoadDuration", Date.now() - d), l(e);
                })
                .catch(function (e) {
                  Er.error("fatal error, please clear cache and refresh.", e),
                    r.emit("error", {
                      message: e.message || "Hostname is undefined",
                      payload: {
                        event: { cause: "hostname is undefined" },
                        message: e.message,
                      },
                    }),
                    t(e);
                });
            }
          }
        });
      }
      var Qa = function (e, n, t, r) {
          void 0 === t && (t = 0), void 0 === r && (r = !1);
          var a = n.startsWith("-");
          a && (n = n.substring(1));
          var o = n.match(/^([0-9]+)px$/),
            i = n.match(/^([0-9]+)%$/);
          if (a) {
            var l;
            if ((r && (t = -t), i))
              return ((l = 100 - Number(i[1])) * e) / 100 - t > 0
                ? (l * e) / 100 - t
                : 0;
            if (o) return (l = e - Number(o[1])) - t > 0 ? l - t : 0;
          }
          return o
            ? Number(o[1]) - t > 0
              ? Number(o[1]) - t
              : 0
            : i
            ? (Number(i[1]) * e) / 100 - t > 0
              ? (Number(i[1]) * e) / 100 - t
              : 0
            : Number(n) - t > 0
            ? Number(n) - t
            : 0;
        },
        qa = function (e) {
          var n = document.createElement("canvas").getContext("2d");
          (n.font = "".concat(Math.floor(0.85 * e.size), "pt sans-serif")),
            (e.fontWidth = n.measureText(e.text).width),
            (e.fontHeight = n.measureText("M").width);
        };
      function Ka(e, n, t, r) {
        var a = "annotationContainerId";
        if (document.getElementById(a)) return { unload: function () {} };
        var o,
          i = JSON.parse(
            ((o = e),
            decodeURIComponent(
              atob(o)
                .split("")
                .map(function (e) {
                  return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
            )).replace(/['‘’′`]/g, '"')
          );
        r.emit("watermarkCount", i.length), i.forEach(qa);
        var l = document.createElement("canvas"),
          s =
            "pointer-events:none !important;border:none !important;visibility: visible !important;display: block !important;opacity: 1 !important;z-index: 7 !important;max-width: 100% !important;position:absolute !important; transform: translate(-50%, -50%);top: 50%;left: 50%;";
        if (
          (l.setAttribute("id", a),
          (l.className = "annotation-container"),
          !n.parentElement)
        )
          return (
            (n.src = ""),
            n.remove(),
            t("Video element does not have parent element to append annotation")
          );
        if (
          (n.parentElement.appendChild(l),
          n.addEventListener("playing", function () {
            l.style.display = "inherit";
          }),
          n.addEventListener("ended", function () {
            l.style.display = "none";
          }),
          !l.getContext)
        )
          return { unload: function () {} };
        var u = l.getContext("2d");
        if (u) {
          var c = [],
            d = !0,
            p = 0;
          !(function (e, n, t) {
            e.forEach(function (e) {
              if (((e.originalAlpha = e.alpha), "rtext" === e.type)) {
                e.type = "text";
                var r = function () {
                    (e.x = Qa(
                      n.offsetWidth,
                      Math.floor(80 * Math.random()) + "%"
                    ).toString()),
                      (e.y = Qa(
                        n.offsetHeight,
                        Math.floor(80 * Math.random()) + "%"
                      ).toString()),
                      (e.alpha = e.originalAlpha);
                  },
                  a = function () {
                    e.alpha = 0;
                  },
                  o = Number(e.skip) || 0,
                  i = Number(e.interval) || 5,
                  l = setInterval(r, i + o);
                if ((t.push(l), r(), o > 0)) {
                  var s = setTimeout(function () {
                    (s = setInterval(a, i + o)), t.pop(), t.push(s), a();
                  }, i);
                  t.push(s);
                }
              }
            });
          })(i, n, c);
          var f = window.requestAnimationFrame,
            v = function () {
              var e;
              if (d)
                if ((f(v), p < 10)) p += 1;
                else if (((p = 0), n.paused || n.ended))
                  l.style.display = "none";
                else {
                  if (
                    !(null === (e = n.parentElement) || void 0 === e
                      ? void 0
                      : e.contains(l))
                  )
                    return (
                      (n.src = ""),
                      n.remove(),
                      t("Annotation container is not in the video element")
                    );
                  var r = n.videoWidth / n.videoHeight;
                  r < 1
                    ? (l.setAttribute(
                        "height",
                        n.offsetHeight + "px !important"
                      ),
                      l.setAttribute(
                        "width",
                        n.offsetHeight * r + "px !important"
                      ))
                    : (l.setAttribute(
                        "width",
                        n.offsetHeight * r + "px !important"
                      ),
                      l.setAttribute(
                        "height",
                        n.offsetHeight + "px !important"
                      )),
                    l.getAttribute("style") !== s && l.setAttribute("style", s),
                    i
                      .filter(function (e) {
                        return "text" === e.type;
                      })
                      .forEach(function (e) {
                        return (function (e, n, t) {
                          var r,
                            a,
                            o = String(e.text),
                            i = Number(e.alpha),
                            l = e.color.replace("0x", "#"),
                            s = Number(e.size),
                            u = Qa(n.offsetWidth, e.x, e.fontWidth),
                            c = Qa(n.offsetHeight, e.y, e.fontHeight, !0);
                          if (
                            ((t.font = "".concat(
                              Math.floor(0.85 * s),
                              "pt sans-serif"
                            )),
                            ((null ===
                              (a =
                                null ===
                                  (r = document.getElementById(
                                    "annotationContainerId"
                                  )) || void 0 === r
                                  ? void 0
                                  : r.parentElement) || void 0 === a
                              ? void 0
                              : a.classList.contains(
                                  "vdo-full-screen-player"
                                )) &&
                              window.outerHeight < window.innerHeight) ||
                            window.outerWidth < window.innerWidth
                              ? t.scale(
                                  (window.devicePixelRatio *
                                    window.innerWidth) /
                                    n.width /
                                    (window.outerWidth / window.innerWidth),
                                  (window.devicePixelRatio *
                                    window.innerHeight) /
                                    n.height /
                                    (window.outerHeight / window.innerHeight)
                                )
                              : t.scale(1, 1),
                            (t.fillStyle = (function (e, n) {
                              var t =
                                /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                                  e
                                );
                              if (!t) throw new Error("Bad Hex color");
                              return "rgba("
                                .concat(parseInt(t[1], 16), ",")
                                .concat(parseInt(t[2], 16), ",")
                                .concat(parseInt(t[3], 16), ",")
                                .concat(n, ")");
                            })(l, i)),
                            o.split("\n").length > 1)
                          ) {
                            var d = o.split("\n"),
                              p = 1.5 * e.fontHeight;
                            return d.forEach(function (e, n) {
                              t.fillText(e, u, c + p * n);
                            });
                          }
                          t.fillText(o, u, c);
                        })(e, l, u);
                      });
                }
            };
          return (
            v(),
            {
              unload: function () {
                (d = !1),
                  l.remove(),
                  c.forEach(function (e) {
                    return clearInterval(e);
                  });
              },
            }
          );
        }
      }
      var Ja = [
          "Unable to play this video on your device",
          "Network Error",
          "Error parsing text streams",
          "Error parsing or processing audio or video streams",
          "Error parsing the Manifest",
          "Error related to streaming",
          "Device/Browser does not support premium content",
          "Miscellaneous player error",
          "Cast Error",
          "Offline playback error",
        ],
        Ya = {
          1002: "Unable to load video. Please disable adblock and try again.",
          1003: "Connection to network timed out. Reload or switch network.",
          4012: "Browser (or screen) does not meet security requirements",
          6002: "Secure stream init failure. Please restart device.",
          6006: "Multiple active videos. Keep only one active video. Restart device if error persists.",
          6007: "Unable to connect to license server. Try removing adblock or try different internet connection.",
          6008: "Please watch in Google Chrome browser updated to the latest version.",
        },
        Za = function (e, n, t) {
          return function (r) {
            var a,
              o,
              i = r.code,
              l = (function (e) {
                return (
                  (function (e) {
                    var n = e.code;
                    if (n && Ya[n]) {
                      if (1002 === n && !navigator.onLine)
                        return "Network offline. Connect to internet to play.";
                      var t = e.data;
                      if (
                        6007 === n &&
                        t &&
                        1 === t.length &&
                        t[0] &&
                        t[0].code
                      ) {
                        var r = t[0];
                        if (r.code && Ya[r.code]) return Ya[r.code];
                      }
                      var a = (function (e) {
                          var n = navigator.userAgent.match(
                              /Gecko\) Chrome\/(\d+)[\d\.]+\ (Mobile\ )?Safari\/[\d\.]+$/
                            ),
                            t = !1,
                            r = 0;
                          return (
                            n && ((t = !0), (r = parseInt(n[1]))),
                            { isChrome: t, chromeVersion: r }
                          );
                        })(),
                        o = a.isChrome,
                        i = a.chromeVersion;
                      return (6002 !== n && 3 !== e.category) ||
                        (o && !(i < 105))
                        ? Ya[n]
                        : "Browser error. Open in updated Google Chrome browser to play this video.";
                    }
                  })(e) || Ja[e.category || 0]
                );
              })(r),
              s = !1;
            e.error("Error code", i, "object", r),
              i &&
                [6e3, 6001, 6002, 6003, 6004, 6005, 6006].includes(i) &&
                (s = !0);
            try {
              (a = r.data[0].data[2]),
                (a = JSON.parse(a)).code && (i += a.code.toString()),
                (l = a.message || l);
            } catch (n) {
              e.warn("Server error message not available");
            }
            if (r.data)
              try {
                o = JSON.parse(JSON.stringify(r.data));
              } catch (n) {
                e.warn("Error details could not be serialized", r.data);
              }
            if (2 === r.severity) {
              var u = {
                code: i,
                message: l,
                payload: {
                  hasError: !0,
                  message: l,
                  code: i,
                  shaka: r.code,
                  vdo: a ? a.code : 0,
                },
                details: o,
                tryNext: s,
              };
              if (3 === r.category && u.payload) {
                var c = n.getVariantTracks();
                u.payload.selectedTrack = c.filter(function (e) {
                  return e.active;
                });
              }
              t.emit("error", u);
            } else e.info("trying to recover..");
          };
        },
        $a = function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        Xa = function (e, n) {
          var t,
            r,
            a,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((t = 1),
                      r &&
                        (a =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                        !(a = a.call(r, o[1])).done)
                    )
                      return a;
                    switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o;
                        break;
                      case 4:
                        return i.label++, { value: o[1], done: !1 };
                      case 5:
                        i.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (a = (a = i.trys).length > 0 && a[a.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0])
                          )
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!a || (o[1] > a[0] && o[1] < a[3]))
                        ) {
                          i.label = o[1];
                          break;
                        }
                        if (6 === o[0] && i.label < a[1]) {
                          (i.label = a[1]), (a = o);
                          break;
                        }
                        if (a && i.label < a[2]) {
                          (i.label = a[2]), i.ops.push(o);
                          break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = n.call(e, i);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    t = a = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        };
      function eo(e, n, t) {
        var r, a;
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        })(this, void 0, void 0, function () {
          var o, i, l, s, u, c, d, p, f, v;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (h) {
            switch (h.label) {
              case 0:
                return (
                  (o = n.embedInfo),
                  (i = n.metaData).dash && i.dash.licenseServers
                    ? ((l = i.dash.manifest),
                      (s = {
                        otp: o.otp,
                        playbackInfo: o.playbackInfo,
                        signature: n.embedInfo.signature,
                        href: n.href,
                        tech: "dash",
                      }),
                      (u = (function (e, n) {
                        if (!e.metaData.dash) return {};
                        n.debug("setting license servers");
                        var t = e.metaData.dash.licenseServers;
                        return (
                          Object.keys(t).forEach(function (e) {
                            t[e] = t[e].replace("/wv/:authToken", "");
                          }),
                          n.debug("license servers set"),
                          t
                        );
                      })(n, Er)),
                      [4, Sa(u, i.dash.enforceL3Config)])
                    : [2, Er.error("Dash key not present in metaData")]
                );
              case 1:
                return (
                  ((c = h.sent()).abr = (function (e, n) {
                    var t = { enabled: !0, restrictToScreenSize: !0 };
                    return (
                      "number" == typeof e.defaultEstimateKbps
                        ? (t.defaultBandwidthEstimate =
                            1e3 * e.defaultEstimateKbps)
                        : "number" == typeof n.desiredBitrate &&
                          ((t.defaultBandwidthEstimate =
                            1e3 * n.desiredBitrate),
                          (t.enabled = !1)),
                      t
                    );
                  })(o, i)),
                  [4, Ha()]
                );
              case 2:
                return (
                  (d = h.sent()),
                  Er.debug("shaka should be loaded by now"),
                  d.polyfill.installAll(),
                  d.Player.isBrowserSupported()
                    ? ((p = new d.Player(e)),
                      (f = Za(Er, p, t)),
                      (v = !1),
                      t.on("licenseLoad", function () {
                        return (v = !0);
                      }),
                      p.addEventListener("error", function (n) {
                        if ("detail" in n) {
                          var r = n.detail;
                          Na(e, t, {
                            shakaPlayer: p,
                            handleError: f,
                            error: r,
                            manifestUri: l,
                            licenseResponseReceived: v,
                            sessionLicense: s.sessionLicense,
                          });
                        }
                      }),
                      p.addEventListener("adaptation", function () {
                        t.emit(
                          "adaptation",
                          p.getVariantTracks().filter(function (e) {
                            return e.active;
                          })
                        );
                      }),
                      e.addEventListener("play", function n() {
                        var t;
                        p.configure({
                          streaming: {
                            bufferingGoal:
                              "number" == typeof (t = o.bufferingGoal)
                                ? t
                                : 120,
                            rebufferingGoal: 5,
                            bufferBehind: 100,
                          },
                        }),
                          e.removeEventListener("play", n);
                      }),
                      t.on("sessionLicense", function (e) {
                        s.sessionLicense = e;
                      }),
                      null === (r = p.getNetworkingEngine()) ||
                        void 0 === r ||
                        r.registerRequestFilter(
                          (function (e, n, t) {
                            return function (r, a) {
                              return (function (e, n, t, r) {
                                return new (t || (t = Promise))(function (
                                  a,
                                  o
                                ) {
                                  function i(e) {
                                    try {
                                      s(r.next(e));
                                    } catch (e) {
                                      o(e);
                                    }
                                  }
                                  function l(e) {
                                    try {
                                      s(r.throw(e));
                                    } catch (e) {
                                      o(e);
                                    }
                                  }
                                  function s(e) {
                                    var n;
                                    e.done
                                      ? a(e.value)
                                      : ((n = e.value),
                                        n instanceof t
                                          ? n
                                          : new t(function (e) {
                                              e(n);
                                            })).then(i, l);
                                  }
                                  s((r = r.apply(e, n || [])).next());
                                });
                              })(void 0, void 0, void 0, function () {
                                var o, i, l, s;
                                return (function (e, n) {
                                  var t,
                                    r,
                                    a,
                                    o,
                                    i = {
                                      label: 0,
                                      sent: function () {
                                        if (1 & a[0]) throw a[1];
                                        return a[1];
                                      },
                                      trys: [],
                                      ops: [],
                                    };
                                  return (
                                    (o = {
                                      next: l(0),
                                      throw: l(1),
                                      return: l(2),
                                    }),
                                    "function" == typeof Symbol &&
                                      (o[Symbol.iterator] = function () {
                                        return this;
                                      }),
                                    o
                                  );
                                  function l(o) {
                                    return function (l) {
                                      return (function (o) {
                                        if (t)
                                          throw new TypeError(
                                            "Generator is already executing."
                                          );
                                        for (; i; )
                                          try {
                                            if (
                                              ((t = 1),
                                              r &&
                                                (a =
                                                  2 & o[0]
                                                    ? r.return
                                                    : o[0]
                                                    ? r.throw ||
                                                      ((a = r.return) &&
                                                        a.call(r),
                                                      0)
                                                    : r.next) &&
                                                !(a = a.call(r, o[1])).done)
                                            )
                                              return a;
                                            switch (
                                              ((r = 0),
                                              a && (o = [2 & o[0], a.value]),
                                              o[0])
                                            ) {
                                              case 0:
                                              case 1:
                                                a = o;
                                                break;
                                              case 4:
                                                return (
                                                  i.label++,
                                                  { value: o[1], done: !1 }
                                                );
                                              case 5:
                                                i.label++,
                                                  (r = o[1]),
                                                  (o = [0]);
                                                continue;
                                              case 7:
                                                (o = i.ops.pop()), i.trys.pop();
                                                continue;
                                              default:
                                                if (
                                                  !(
                                                    (a =
                                                      (a = i.trys).length > 0 &&
                                                      a[a.length - 1]) ||
                                                    (6 !== o[0] && 2 !== o[0])
                                                  )
                                                ) {
                                                  i = 0;
                                                  continue;
                                                }
                                                if (
                                                  3 === o[0] &&
                                                  (!a ||
                                                    (o[1] > a[0] &&
                                                      o[1] < a[3]))
                                                ) {
                                                  i.label = o[1];
                                                  break;
                                                }
                                                if (
                                                  6 === o[0] &&
                                                  i.label < a[1]
                                                ) {
                                                  (i.label = a[1]), (a = o);
                                                  break;
                                                }
                                                if (a && i.label < a[2]) {
                                                  (i.label = a[2]),
                                                    i.ops.push(o);
                                                  break;
                                                }
                                                a[2] && i.ops.pop(),
                                                  i.trys.pop();
                                                continue;
                                            }
                                            o = n.call(e, i);
                                          } catch (e) {
                                            (o = [6, e]), (r = 0);
                                          } finally {
                                            t = a = 0;
                                          }
                                        if (5 & o[0]) throw o[1];
                                        return {
                                          value: o[0] ? o[1] : void 0,
                                          done: !0,
                                        };
                                      })([o, l]);
                                    };
                                  }
                                })(this, function (u) {
                                  return (
                                    (o = e.util.StringUtils),
                                    (i = e.util.Uint8ArrayUtils),
                                    r ===
                                      e.net.NetworkingEngine.RequestType
                                        .LICENSE &&
                                      ((t.licenseRequest = i
                                        .toBase64(new Uint8Array(a.body || []))
                                        .replace(/_/g, "/")
                                        .replace(/-/g, "+")),
                                      (t.tech = "wv"),
                                      (l = {
                                        token: btoa(JSON.stringify(t))
                                          .replace(/\//g, "_")
                                          .replace(/\+/g, "-"),
                                      }),
                                      (s = JSON.stringify(l)),
                                      n.emit("castAuthToken", l.token),
                                      (a.headers["content-type"] =
                                        "application/json"),
                                      (a.body = o.toUTF8(s))),
                                    [2]
                                  );
                                });
                              });
                            };
                          })(d, t, s)
                        ),
                      null === (a = p.getNetworkingEngine()) ||
                        void 0 === a ||
                        a.registerResponseFilter(
                          (function (e, n, t) {
                            return function (r, a) {
                              return new Promise(function (o) {
                                var i,
                                  l,
                                  s = e.util.StringUtils,
                                  u = e.util.Uint8ArrayUtils;
                                if (
                                  r ===
                                  e.net.NetworkingEngine.RequestType.LICENSE
                                ) {
                                  "number" == typeof a.timeMs &&
                                    (t.emit("licenseLoad", {
                                      durationMs: a.timeMs,
                                    }),
                                    t.emit("licenseLoadDuration", a.timeMs));
                                  var c = s.fromUTF8(a.data),
                                    d = JSON.parse(c);
                                  d.sessionLicense &&
                                    t.emit("sessionLicense", d.sessionLicense);
                                  var p = d.license;
                                  if (
                                    ((a.data = u.fromBase64(p)),
                                    t.emit("syncVideoResumeTime", {
                                      serverResumeTime:
                                        (null === (i = d.lastResumeTime) ||
                                        void 0 === i
                                          ? void 0
                                          : i.resumeTime) || null,
                                      serverUpdatedOn:
                                        (null === (l = d.lastResumeTime) ||
                                        void 0 === l
                                          ? void 0
                                          : l.syncDelta) || null,
                                    }),
                                    d.annotationCode)
                                  )
                                    try {
                                      Ka(
                                        d.annotationCode,
                                        n,
                                        function (e) {
                                          t.emit("error", {
                                            hasError: !0,
                                            message: "Video license expired",
                                            payload: {
                                              message:
                                                "[Annotate Error] ".concat(
                                                  e,
                                                  " \n [Displayed Message]: Video license expired"
                                                ),
                                            },
                                          });
                                        },
                                        t
                                      );
                                    } catch (e) {
                                      Er.error("Invalid annotation code");
                                    }
                                  if (d.tags) {
                                    var f = void 0;
                                    try {
                                      f = JSON.parse(d.tags);
                                    } catch (e) {
                                      Er.error("Invalid tags");
                                    }
                                    t.emit("tags", f);
                                  }
                                }
                                o();
                              });
                            };
                          })(d, e, t)
                        ),
                      p.configure(c),
                      t.emit("cdmLevel", Pa(p) ? "L1" : "L3"),
                      p.addEventListener("adaptation", function () {
                        t.emit("setActiveQuality", Aa(p));
                      }),
                      p.addEventListener("variantchanged", function () {
                        t.emit("setActiveQuality", Aa(p));
                      }),
                      p.addEventListener("abrstatuschanged", function () {
                        t.emit(
                          "abrStatusChange",
                          p.getConfiguration().abr.enabled
                        );
                      }),
                      p.addEventListener("loaded", function () {
                        t.emit(
                          "updateDoesHaveAudio",
                          (function (e) {
                            return !!e.getVariantTracks().filter(function (e) {
                              return Boolean(e.audioCodec);
                            }).length;
                          })(p)
                        ),
                          t.emit("availableQualities", Ta(p)),
                          t.on("selectQualityTrack", function (e) {
                            !(function (e, n, t) {
                              var r = e.getVariantTracks().filter(function (e) {
                                return e.id === n;
                              });
                              if (0 === r.length)
                                return (
                                  t.debug("this track id does not exist: ", n),
                                  t.debug("enabling Adaptive bitrate"),
                                  void e.configure({ abr: { enabled: !0 } })
                                );
                              e.configure({ abr: { enabled: !1 } }),
                                e.selectVariantTrack(r[0], !0),
                                t.info("new variant id selected: ", r);
                            })(p, e, Er);
                          }),
                          (function (e, n, t) {
                            var r = t.playbackInfo,
                              a = t.manifestUri,
                              o = t.metaData,
                              i = t.playerAgent,
                              l = t.eventBus;
                            return $a(void 0, void 0, void 0, function () {
                              var t, s, u, c, d;
                              return Xa(this, function (p) {
                                switch (p.label) {
                                  case 0:
                                    return (
                                      (t = (function (e) {
                                        try {
                                          return JSON.parse(atob(e)).videoId;
                                        } catch (e) {
                                          return null;
                                        }
                                      })(r)),
                                      (s = Ta(n)),
                                      (u = new e.offline.Storage(n)),
                                      [
                                        4,
                                        ((f = o.captions),
                                        $a(void 0, void 0, void 0, function () {
                                          var e, n, t, r;
                                          return Xa(this, function (a) {
                                            switch (a.label) {
                                              case 0:
                                                if (!f) return [2, f];
                                                (e = 0), (n = f), (a.label = 1);
                                              case 1:
                                                return e < n.length
                                                  ? ((t = n[e]),
                                                    [
                                                      4,
                                                      ((o = t.url),
                                                      fetch(o)
                                                        .then(function (e) {
                                                          if (!e.ok)
                                                            throw new Error(
                                                              "Failed to fetch VTT file: ".concat(
                                                                e.statusText
                                                              )
                                                            );
                                                          return e.text();
                                                        })
                                                        .then(function (e) {
                                                          try {
                                                            var n = btoa(e);
                                                            return "data:text/vtt;base64,".concat(
                                                              n
                                                            );
                                                          } catch (e) {
                                                            return o;
                                                          }
                                                        })),
                                                    ])
                                                  : [3, 4];
                                              case 2:
                                                (r = a.sent()),
                                                  (t.url = r),
                                                  (a.label = 3);
                                              case 3:
                                                return e++, [3, 1];
                                              case 4:
                                                return [2, f];
                                            }
                                            var o;
                                          });
                                        })),
                                      ]
                                    );
                                  case 1:
                                    return (
                                      (c = p.sent()),
                                      [
                                        4,
                                        ((v = o.posters),
                                        $a(void 0, void 0, void 0, function () {
                                          var e, n, t, r;
                                          return Xa(this, function (a) {
                                            switch (a.label) {
                                              case 0:
                                                if (!v) return [2];
                                                (e = 0), (n = v), (a.label = 1);
                                              case 1:
                                                return e < n.length
                                                  ? ((t = n[e]),
                                                    [
                                                      4,
                                                      ((o = t.url + "?a=b"),
                                                      new Promise(function (e) {
                                                        var n = new Image();
                                                        (n.crossOrigin =
                                                          "Anonymous"),
                                                          (n.onload =
                                                            function () {
                                                              var t =
                                                                  document.createElement(
                                                                    "canvas"
                                                                  ),
                                                                r =
                                                                  t.getContext(
                                                                    "2d"
                                                                  );
                                                              (t.width =
                                                                n.width),
                                                                (t.height =
                                                                  n.height),
                                                                r.drawImage(
                                                                  n,
                                                                  0,
                                                                  0
                                                                ),
                                                                e(
                                                                  t.toDataURL()
                                                                );
                                                            }),
                                                          (n.src = o);
                                                      })),
                                                    ])
                                                  : [3, 4];
                                              case 2:
                                                (r = a.sent()),
                                                  (t.url = r),
                                                  (a.label = 3);
                                              case 3:
                                                return e++, [3, 1];
                                              case 4:
                                                return [2, v];
                                            }
                                            var o;
                                          });
                                        })),
                                      ]
                                    );
                                  case 2:
                                    return (
                                      (d = p.sent()),
                                      (o.captions = c),
                                      (o.posters = d),
                                      u.list().then(function (e) {
                                        l.emit(
                                          "saveOfflineAvailable",
                                          e
                                            .map(function (e) {
                                              return e.appMetadata;
                                            })
                                            .filter(function (e) {
                                              return void 0 !== e;
                                            })
                                            .map(function (e) {
                                              return {
                                                trackId: e.trackId,
                                                label: e.label,
                                              };
                                            })
                                        );
                                      }),
                                      [
                                        2,
                                        {
                                          isSupported: function () {
                                            return (
                                              "webcomponent-dom" === i &&
                                              e.offline.Storage.support()
                                            );
                                          },
                                          getDownloadedTrackList: function () {
                                            return $a(
                                              this,
                                              void 0,
                                              void 0,
                                              function () {
                                                return Xa(this, function (e) {
                                                  switch (e.label) {
                                                    case 0:
                                                      return [4, u.list()];
                                                    case 1:
                                                      return [
                                                        2,
                                                        e
                                                          .sent()
                                                          .filter(function (e) {
                                                            return (
                                                              e.originalManifestUri ===
                                                              a
                                                            );
                                                          }),
                                                      ];
                                                  }
                                                });
                                              }
                                            );
                                          },
                                          downloadTrack: function (e, n) {
                                            u.configure({
                                              offline: {
                                                trackSelectionCallback:
                                                  function (n) {
                                                    return n.filter(function (
                                                      n
                                                    ) {
                                                      return n.id === e;
                                                    });
                                                  },
                                                progressCallback: function (
                                                  e,
                                                  t
                                                ) {
                                                  return n(t);
                                                },
                                              },
                                            });
                                            var i = s.filter(function (n) {
                                              return n.id === e;
                                            })[0].label;
                                            l.emit("saveOfflineStarted", {
                                              trackId: e,
                                              label: i,
                                            });
                                            var c = u.store(a, {
                                              trackId: e,
                                              downloadedAt: Date.now(),
                                              metaData: o,
                                              label: i,
                                              playbackInfo: r,
                                              videoId: t,
                                              track: s[e],
                                            });
                                            return (
                                              c.promise.catch(function (n) {
                                                l.emit("saveOfflineError", {
                                                  trackId: e,
                                                  label: i,
                                                  shakaError: n,
                                                });
                                              }),
                                              c.promise.then(function () {
                                                return l.emit(
                                                  "saveOfflineEnded",
                                                  { trackId: e, label: i }
                                                );
                                              }),
                                              c
                                            );
                                          },
                                          removeTrack: function (e, n) {
                                            return $a(
                                              this,
                                              void 0,
                                              void 0,
                                              function () {
                                                return Xa(this, function (t) {
                                                  return e
                                                    ? (l.emit(
                                                        "saveOfflineDeleted",
                                                        n
                                                      ),
                                                      [2, u.remove(e)])
                                                    : [2];
                                                });
                                              }
                                            );
                                          },
                                          tracks: s,
                                        },
                                      ]
                                    );
                                }
                                var f, v;
                              });
                            });
                          })(d, p, {
                            metaData: JSON.parse(JSON.stringify(i)),
                            manifestUri: l,
                            playbackInfo: o.playbackInfo,
                            playerAgent: o.playerAgent,
                            eventBus: t,
                          }).then(function (e) {
                            return t.emit("tracksDownloadManger", e);
                          });
                      }),
                      p.load(l).catch(function (n) {
                        Na(e, t, {
                          shakaPlayer: p,
                          handleError: f,
                          error: n,
                          manifestUri: l,
                          licenseResponseReceived: v,
                          sessionLicense: s.sessionLicense,
                        });
                      }),
                      [
                        2,
                        {
                          destroy: function () {
                            return new Promise(function (e) {
                              p.destroy().then(e);
                            });
                          },
                        },
                      ])
                    : [2, Er.error("Browser not supported!")]
                );
            }
          });
        });
      }
      var no = function (e) {
          for (
            var n = window.atob(e),
              t = n.length,
              r = new Uint8Array(new ArrayBuffer(t)),
              a = 0;
            a < t;
            a++
          )
            r[a] = n.charCodeAt(a);
          return r;
        },
        to = function (e) {
          for (
            var n,
              t,
              r,
              a,
              o,
              i,
              l,
              s =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              u = "",
              c = 0;
            c < e.length;

          )
            (a = (n = parseInt(e[c++])) >> 2),
              (o =
                ((3 & n) << 4) |
                ((t = c < e.length ? parseInt(e[c++]) : Number.NaN) >> 4)),
              (i =
                ((15 & t) << 2) |
                ((r = c < e.length ? parseInt(e[c++]) : Number.NaN) >> 6)),
              (l = 63 & r),
              isNaN(t) ? (i = l = 64) : isNaN(r) && (l = 64),
              (u += s.charAt(a) + s.charAt(o) + s.charAt(i) + s.charAt(l));
          return u;
        },
        ro = function (e, n, t) {
          var r = t.certificate,
            a = t.isLicenseFailed,
            o = t.initiatedTime,
            i = t.activeKeySession,
            l = t.authToken;
          return function (t) {
            var s = t.target,
              u = t.initData,
              c = (function (e) {
                "76,0,0,0" === e.slice(0, 4).toString() && (e = e.slice(4));
                var n,
                  t =
                    ((n = ""),
                    new Uint16Array(e.buffer).forEach(function (e) {
                      n += String.fromCharCode(e);
                    }),
                    n),
                  r = document.createElement("a");
                return (r.href = t), r.hostname + r.pathname;
              })(u);
            if (
              (Er.debug("initData: ", u),
              Er.debug("content id: ", c),
              Er.debug("certificate: ", r),
              (u = (function (e, n, t) {
                "string" == typeof n &&
                  (n = (function (e) {
                    for (
                      var n = new ArrayBuffer(2 * e.length),
                        t = new Uint16Array(n),
                        r = 0,
                        a = e.length;
                      r < a;
                      r++
                    )
                      t[r] = e.charCodeAt(r);
                    return t;
                  })(n));
                var r = 0,
                  a = new ArrayBuffer(
                    e.byteLength + 4 + n.byteLength + 4 + t.byteLength
                  ),
                  o = new DataView(a);
                new Uint8Array(a, r, e.byteLength).set(e),
                  (r += e.byteLength),
                  o.setUint32(r, n.byteLength, !0),
                  (r += 4);
                var i = new Uint16Array(a, r, n.length);
                return (
                  i.set(n),
                  (r += i.byteLength),
                  o.setUint32(r, t.byteLength, !0),
                  (r += 4),
                  new Uint8Array(a, r, t.byteLength).set(t),
                  new Uint8Array(a, 0, a.byteLength)
                );
              })(u, c, r)),
              Er.debug("initData: ", u),
              !s.webkitKeys)
            ) {
              var d = (function () {
                if (
                  window.WebKitMediaKeys.isTypeSupported(
                    "com.apple.fps.1_0",
                    "video/mp4"
                  )
                )
                  return "com.apple.fps.1_0";
                throw (
                  (alert("key system is not supported"),
                  new Error("Key System not supported"))
                );
              })();
              Er.debug("key system: ", d),
                s.webkitSetMediaKeys(new window.WebKitMediaKeys(d));
            }
            if (s.webkitKeys) {
              Er.debug("initData: ", u);
              var p = s.webkitKeys.createSession("video/mp4", u);
              if ((i.push(p), !p))
                return (
                  Er.error("Could not create key session"),
                  void e.emit("error", {
                    message: "Could not create key session",
                    payload: { message: "Could not create key session" },
                  })
                );
              (p.contentId = c),
                p.addEventListener(
                  "webkitkeymessage",
                  (function (e, n, t, r) {
                    var a = r.isLicenseFailed,
                      o = r.authToken;
                    return function (r) {
                      return (function (e, n, t, r) {
                        return new (t || (t = Promise))(function (a, o) {
                          function i(e) {
                            try {
                              s(r.next(e));
                            } catch (e) {
                              o(e);
                            }
                          }
                          function l(e) {
                            try {
                              s(r.throw(e));
                            } catch (e) {
                              o(e);
                            }
                          }
                          function s(e) {
                            var n;
                            e.done
                              ? a(e.value)
                              : ((n = e.value),
                                n instanceof t
                                  ? n
                                  : new t(function (e) {
                                      e(n);
                                    })).then(i, l);
                          }
                          s((r = r.apply(e, n || [])).next());
                        });
                      })(void 0, void 0, void 0, function () {
                        var i, l, s, u, c, d, p, f, v, h, m, g, y;
                        return (function (e, n) {
                          var t,
                            r,
                            a,
                            o,
                            i = {
                              label: 0,
                              sent: function () {
                                if (1 & a[0]) throw a[1];
                                return a[1];
                              },
                              trys: [],
                              ops: [],
                            };
                          return (
                            (o = { next: l(0), throw: l(1), return: l(2) }),
                            "function" == typeof Symbol &&
                              (o[Symbol.iterator] = function () {
                                return this;
                              }),
                            o
                          );
                          function l(o) {
                            return function (l) {
                              return (function (o) {
                                if (t)
                                  throw new TypeError(
                                    "Generator is already executing."
                                  );
                                for (; i; )
                                  try {
                                    if (
                                      ((t = 1),
                                      r &&
                                        (a =
                                          2 & o[0]
                                            ? r.return
                                            : o[0]
                                            ? r.throw ||
                                              ((a = r.return) && a.call(r), 0)
                                            : r.next) &&
                                        !(a = a.call(r, o[1])).done)
                                    )
                                      return a;
                                    switch (
                                      ((r = 0),
                                      a && (o = [2 & o[0], a.value]),
                                      o[0])
                                    ) {
                                      case 0:
                                      case 1:
                                        a = o;
                                        break;
                                      case 4:
                                        return (
                                          i.label++, { value: o[1], done: !1 }
                                        );
                                      case 5:
                                        i.label++, (r = o[1]), (o = [0]);
                                        continue;
                                      case 7:
                                        (o = i.ops.pop()), i.trys.pop();
                                        continue;
                                      default:
                                        if (
                                          !(
                                            (a =
                                              (a = i.trys).length > 0 &&
                                              a[a.length - 1]) ||
                                            (6 !== o[0] && 2 !== o[0])
                                          )
                                        ) {
                                          i = 0;
                                          continue;
                                        }
                                        if (
                                          3 === o[0] &&
                                          (!a || (o[1] > a[0] && o[1] < a[3]))
                                        ) {
                                          i.label = o[1];
                                          break;
                                        }
                                        if (6 === o[0] && i.label < a[1]) {
                                          (i.label = a[1]), (a = o);
                                          break;
                                        }
                                        if (a && i.label < a[2]) {
                                          (i.label = a[2]), i.ops.push(o);
                                          break;
                                        }
                                        a[2] && i.ops.pop(), i.trys.pop();
                                        continue;
                                    }
                                    o = n.call(e, i);
                                  } catch (e) {
                                    (o = [6, e]), (r = 0);
                                  } finally {
                                    t = a = 0;
                                  }
                                if (5 & o[0]) throw o[1];
                                return {
                                  value: o[0] ? o[1] : void 0,
                                  done: !0,
                                };
                              })([o, l]);
                            };
                          }
                        })(this, function (b) {
                          switch (b.label) {
                            case 0:
                              return t.metaData.fps
                                ? ((i = t.metaData.fps.licenseServer),
                                  Er.debug("license request ready"),
                                  Er.debug("license server: ", i),
                                  (l = r.target),
                                  (s = r.message),
                                  (u = r.sessionId),
                                  Er.debug(l, s, u),
                                  (o.licenseRequest = JSON.stringify({
                                    spc: to(r.message),
                                    assetId: l.contentId,
                                  })),
                                  (c = btoa(JSON.stringify(o))
                                    .replace(/\//g, "_")
                                    .replace(/\+/g, "-")),
                                  Er.debug(c.length),
                                  Er.debug(btoa(r.message).length),
                                  (d = function (e) {
                                    n.emit("error", {
                                      message: "Video license expired",
                                      payload: {
                                        message: "[Annotate Error] ".concat(
                                          e,
                                          " \n [Displayed Message]: Video license expired"
                                        ),
                                      },
                                    });
                                  }),
                                  (p = Date.now()),
                                  [
                                    4,
                                    fetch(i, {
                                      method: "post",
                                      headers: {
                                        "content-type":
                                          "application/json; charset=utf-8",
                                      },
                                      body: JSON.stringify({ token: c }),
                                    }),
                                  ])
                                : [2];
                            case 1:
                              return (
                                (f = b.sent()),
                                n.emit("licenseLoadDuration", Date.now() - p),
                                [4, f.json()]
                              );
                            case 2:
                              return (
                                (v = b.sent()),
                                !1 === f.ok && 403 === f.status
                                  ? a.status
                                    ? [2]
                                    : ((a.status = !0),
                                      (h = v.code),
                                      (m = v.message),
                                      [
                                        2,
                                        n.emit("error", {
                                          message:
                                            "Error code ".concat(h, ": ") +
                                            " ".concat(m),
                                          payload: { vdo: h, message: m },
                                        }),
                                      ])
                                  : (Er.debug("result: ", v),
                                    Er.debug(no(v.license)),
                                    l.update(no(v.license)),
                                    n.emit("syncVideoResumeTime", {
                                      serverResumeTime:
                                        (null === (g = v.lastResumeTime) ||
                                        void 0 === g
                                          ? void 0
                                          : g.resumeTime) || null,
                                      serverUpdatedOn:
                                        (null === (y = v.lastResumeTime) ||
                                        void 0 === y
                                          ? void 0
                                          : y.syncDelta) || null,
                                    }),
                                    v.annotationCode &&
                                      Ka(v.annotationCode, e, d, n),
                                    v.sessionLicense &&
                                      n.emit(
                                        "sessionLicense",
                                        v.sessionLicense
                                      ),
                                    [2])
                              );
                          }
                        });
                      });
                    };
                  })(s, e, n, { isLicenseFailed: a, authToken: l })
                ),
                p.addEventListener("webkitkeyerror", function (n) {
                  var t = n.target.error;
                  Er.error("key error: ", t);
                  var r = (function (e, n) {
                    var t = new Date().getTime() - n > 3e5;
                    return e.systemCode && 1212433232 === e.systemCode
                      ? t
                        ? "Secure session expired. Reload page to play this video. "
                        : "Display not secure. Stop recording or upgrade Display or cables"
                      : "WebKitMediaKeyError" === e.constructor.name
                      ? JSON.stringify({
                          code: e.code,
                          systemCode: e.systemCode,
                        })
                      : e.message;
                  })(n, o);
                  e.emit("error", {
                    message: "Video load error: " + r,
                    payload: {
                      message: "License load error: " + r,
                      constructorName: t.constructor.name,
                    },
                  });
                });
            } else
              e.emit("error", {
                message: "Could not create MediaKeys",
                payload: { message: "Could not create MediaKeys" },
              });
          };
        },
        ao = /([A-Z-]+)=("([^"]+)"|([^",]+))?/g,
        oo = function (e) {
          var n = e.match(ao);
          if (n)
            return Object.fromEntries(
              n.map(function (e) {
                var n = e.split("="),
                  t = n[0],
                  r = n[1];
                return [t, r.match(/^".+"$/) ? r.slice(1, -1) : r];
              })
            );
        },
        io = function (e) {
          return (function (e, n, t, r) {
            return new (t || (t = Promise))(function (a, o) {
              function i(e) {
                try {
                  s(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                try {
                  s(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                var n;
                e.done
                  ? a(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(i, l);
              }
              s((r = r.apply(e, n || [])).next());
            });
          })(void 0, void 0, void 0, function () {
            var n, t, r, a, o, i;
            return (function (e, n) {
              var t,
                r,
                a,
                o,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: l(0), throw: l(1), return: l(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function l(o) {
                return function (l) {
                  return (function (o) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; i; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (a =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                : r.next) &&
                            !(a = a.call(r, o[1])).done)
                        )
                          return a;
                        switch (
                          ((r = 0), a && (o = [2 & o[0], a.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            a = o;
                            break;
                          case 4:
                            return i.label++, { value: o[1], done: !1 };
                          case 5:
                            i.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (a =
                                  (a = i.trys).length > 0 && a[a.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              i = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!a || (o[1] > a[0] && o[1] < a[3]))
                            ) {
                              i.label = o[1];
                              break;
                            }
                            if (6 === o[0] && i.label < a[1]) {
                              (i.label = a[1]), (a = o);
                              break;
                            }
                            if (a && i.label < a[2]) {
                              (i.label = a[2]), i.ops.push(o);
                              break;
                            }
                            a[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        o = n.call(e, i);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        t = a = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, l]);
                };
              }
            })(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (n = e.split("/").slice(0, -1).join("/") + "/"),
                    [
                      4,
                      fetch(e).then(function (e) {
                        return e.text();
                      }),
                    ]
                  );
                case 1:
                  return (
                    (t = l.sent()),
                    (r = (function (e, n) {
                      for (
                        var t = e.split("\n").map(function (e) {
                            return e.trim();
                          }),
                          r = [],
                          a = 0,
                          o = t;
                        a < o.length;
                        a++
                      ) {
                        var i = o[a];
                        i.startsWith("#EXT") &&
                          i.match('URI="') &&
                          (i = i.replace('URI="', 'URI="' + n)),
                          !i.startsWith("#") &&
                            i.endsWith(".m3u8") &&
                            (i = n + i),
                          r.push(i);
                      }
                      return r.join("\n");
                    })(t, n)),
                    (a = (function (e) {
                      for (
                        var n,
                          t,
                          r,
                          a = 0,
                          o = 0,
                          i = [],
                          l = [],
                          s = e.split("\n").map(function (e) {
                            return e.trim();
                          }),
                          u = 0,
                          c = s;
                        u < c.length;
                        u++
                      ) {
                        var d = c[u];
                        if (
                          (d.startsWith("#EXT-X-MEDIA:TYPE=AUDIO") &&
                            !o &&
                            (o = parseInt(
                              null !==
                                (t =
                                  null === (n = oo(d)) || void 0 === n
                                    ? void 0
                                    : n.BANDWIDTH) && void 0 !== t
                                ? t
                                : "0"
                            )),
                          !d.startsWith("#") && d.endsWith(".m3u8") && r)
                        )
                          l.push({ index: a++, line: d });
                        else if (d.startsWith("#EXT-X-STREAM-INF:")) {
                          var p = oo(d);
                          if (!p) continue;
                          p.URI || (r = !0), l.push({ index: a, line: d });
                          var f = parseInt(
                            p.BANDWIDTH || p["AVERAGE-BANDWIDTH"] || "0"
                          );
                          i.push({
                            id: a,
                            active: !1,
                            codecs: p.CODECS,
                            bandwidth: f,
                          });
                        } else l.push({ index: -1, line: d });
                      }
                      return (
                        i.forEach(function (e) {
                          return (e.bandwidth += o);
                        }),
                        { annotatedLines: l, qualities: i }
                      );
                    })(r)),
                    (o = a.qualities),
                    (i = a.annotatedLines),
                    [
                      2,
                      {
                        qualities: o,
                        filterTrack: function (e) {
                          var n = o.find(function (n) {
                              return n.id === e;
                            }),
                            t = i
                              .filter(function (e) {
                                return -1 === e.index || !n || e.index === n.id;
                              })
                              .map(function (e) {
                                return e.line;
                              })
                              .join("\n");
                          return "data:application/vnd.apple.mpegurl;base64,".concat(
                            btoa(t)
                          );
                        },
                      },
                    ]
                  );
              }
            });
          });
        };
      function lo(e, n, t) {
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        })(this, void 0, void 0, function () {
          var r, a, o;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, io(e)];
              case 1:
                return (
                  (r = i.sent()),
                  (a = r.qualities),
                  (o = r.filterTrack),
                  t.emit("availableQualities", a),
                  t.on("selectQualityTrack", function (e) {
                    if (!(n.readyState < 4)) {
                      t.emit("abrStatusChange", -1 === e);
                      var r,
                        a = n.currentTime,
                        i = !!(
                          (r = n).currentTime > 0 &&
                          !r.paused &&
                          !r.ended &&
                          r.readyState > 2
                        );
                      (n.src = o(e)),
                        (n.currentTime = a),
                        i && n.play(),
                        t.emit("setActiveQuality", e);
                    }
                  }),
                  (n.src = o(-1)),
                  t.emit("abrStatusChange", !0),
                  [2]
                );
            }
          });
        });
      }
      function so(e, n, t) {
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        })(this, void 0, void 0, function () {
          var r, a, o, i, l, s, u, c;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (d) {
            switch (d.label) {
              case 0:
                return (r = n.metaData).fps
                  ? ((a = { status: !1 }),
                    (o = []),
                    (i = new Date().getTime()),
                    (l = {
                      otp: n.embedInfo.otp,
                      playbackInfo: n.embedInfo.playbackInfo,
                      signature: n.embedInfo.signature,
                      href: n.href,
                      tech: "fps",
                    }),
                    t.on("sessionLicense", function (e) {
                      l.sessionLicense = e;
                    }),
                    e.setAttribute("preload", "auto"),
                    e.setAttribute("playsinline", "true"),
                    e.addEventListener("error", function (n) {
                      var r = n.target;
                      if ((Er.error(r.error), !a.status)) {
                        var o = {
                          message: "Video has encountered error.",
                          payload: { message: "Video has encountered error." },
                        };
                        if (e.error && o.payload) {
                          (o.payload.code = e.error.code),
                            (o.payload.message = e.error.message);
                          var i = (function (e) {
                            if (
                              (void 0 === e && (e = navigator.userAgent),
                              !/Macintosh|iPhone|iPad/.test(e))
                            )
                              return "";
                            if (
                              /Macintosh; Intel Mac OS X 10_15_[67]/.test(e) &&
                              /Version\/\d+/.test(e)
                            ) {
                              if ("15" !== (e.match(/Version\/(\d+)/) || [])[1])
                                return "";
                            } else if (
                              !/(CPU iPhone OS 15_0|CPU OS 15_0)/.test(e)
                            )
                              return "";
                            return navigator.maxTouchPoints > 1
                              ? "Please update to the latest iOS from Settings > General > Software Update. This is a bug in iOS 15.0."
                              : e.includes("Version/15.0")
                              ? "Please update to latest Safari 15.1 from Apple Menu > About this Mac > Software update > More Info > Check only Safari 15.1 and update."
                              : "";
                          })();
                          i && ((o.payload.message = i), (o.message = i));
                        }
                        t.emit("error", o);
                      }
                    }),
                    Er.debug(
                      "loading test certificate from: ",
                      r.fps.certificate
                    ),
                    [
                      4,
                      fetch(r.fps.certificate).then(function (e) {
                        return e.arrayBuffer();
                      }),
                    ])
                  : [2];
              case 1:
                return (
                  (s = d.sent()),
                  (u = new Uint8Array(s)),
                  Er.debug(u),
                  (c = ro(t, n, {
                    certificate: u,
                    isLicenseFailed: a,
                    initiatedTime: i,
                    activeKeySession: o,
                    authToken: l,
                  })),
                  e.addEventListener("webkitneedkey", c, !1),
                  lo(r.fps.manifest, e, t),
                  [
                    2,
                    {
                      destroy: function () {
                        return new Promise(function (n) {
                          e.removeEventListener("webkitneedkey", c),
                            o.forEach(function (e) {
                              return e.close();
                            }),
                            n();
                        });
                      },
                    },
                  ]
                );
            }
          });
        });
      }
      var uo = "VDO-USER-AUTHENTICATION",
        co = "AUTH-TOKEN";
      function po() {
        var e = indexedDB.open(uo, 1);
        return {
          openRequest: e,
          deleteDB: function () {
            return new Promise(function (n, t) {
              "done" === e.readyState && e.result.close();
              var r = indexedDB.deleteDatabase(uo);
              r.addEventListener("success", n),
                r.addEventListener("error", function (e) {
                  return t(e.toString());
                });
            });
          },
          getAllToken: function () {
            return new Promise(function (n, t) {
              try {
                var r = e.result
                  .transaction(co, "readonly")
                  .objectStore(co)
                  .getAll();
                (r.onsuccess = function (e) {
                  var r = e.target;
                  if ("done" !== r.readyState)
                    return t(new Error("fn/getAllToken result not ready"));
                  var a = r.result;
                  if (a) return n(a);
                  t(new Error("not able to invoke IDBStore.getAll()"));
                }),
                  (r.onerror = function () {
                    return t(r.error);
                  });
              } catch (e) {
                t(e && e.toString());
              }
            });
          },
          init: function () {
            return new Promise(function (n, t) {
              if ("done" === e.readyState) {
                if (e.error) return t(e.error);
                n();
              }
              e.addEventListener("upgradeneeded", function () {
                var n = e.result;
                n.objectStoreNames.contains(co) ||
                  n.createObjectStore(co, { keyPath: "contentId" });
              }),
                e.addEventListener("error", function () {
                  return t(e.error);
                }),
                e.addEventListener("success", function () {
                  n();
                });
            });
          },
          addAuthToken: function (n, t) {
            return new Promise(function (r, a) {
              try {
                if ("done" !== e.readyState)
                  return a(new Error("fn/addAuthToken: result not ready"));
                var o = e.result.transaction(co, "readwrite").objectStore(co),
                  i = o.get(n);
                (i.onsuccess = function () {
                  i.result && o.delete(n);
                  var l = o.add({
                    contentId: n,
                    data: t,
                    createdAt: Date.now(),
                  });
                  (l.onsuccess = function (n) {
                    var t;
                    r(n),
                      (t = e.result).objectStoreNames.contains(co) &&
                        (t
                          .transaction(co, "readwrite")
                          .objectStore(co)
                          .getAll().onsuccess = function (n) {
                          var t = n.target;
                          "done" === t.readyState &&
                            t.result.forEach(function (n) {
                              var t,
                                r = n.createdAt,
                                a = n.contentId;
                              Date.now() > r + 864e5 &&
                                ((t = a),
                                new Promise(function (n, r) {
                                  var a = e.result
                                    .transaction(co, "readwrite")
                                    .objectStore(co)
                                    .delete(t);
                                  (a.onerror = function () {
                                    r(new Error("Failed to delete key"));
                                  }),
                                    (a.onsuccess = function () {
                                      n();
                                    });
                                })).catch(function (e) {
                                  console.error("Failed to delete key:", e);
                                });
                            });
                        });
                  }),
                    (l.onerror = function () {
                      return a(l.error);
                    });
                }),
                  (i.onerror = function () {
                    a(i.error);
                  });
              } catch (e) {
                a(e && e.toString());
              }
            });
          },
          getAuthToken: function (n) {
            return new Promise(function (t, r) {
              try {
                var a = e.result
                  .transaction(co, "readonly")
                  .objectStore(co)
                  .get(n);
                (a.onsuccess = function (e) {
                  var n = e.target.result;
                  if (n) return t(n.data);
                  r(new Error("No Auth Token found"));
                }),
                  (a.onerror = function () {
                    return r(a.error);
                  });
              } catch (e) {
                r(e && e.toString());
              }
            });
          },
        };
      }
      var fo = function () {
          return (
            (fo =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            fo.apply(this, arguments)
          );
        },
        vo = function () {
          var e = Oa.isIos && navigator.userAgent.includes(") Version"),
            n = e && Boolean(navigator.userAgent.match(/Version\/15./));
          return e
            ? n
              ? "Could not initialize player. Please restart device."
              : "Please update to latest iOS to watch this video"
            : "Please use Safari browser to watch this video.";
        },
        ho = function (e, n, t, r) {
          return new Promise(function (a, o) {
            var i = new po(),
              l = 0,
              s = fo(fo({}, e.metaData.cbcs), {
                authToken: {
                  otp: e.embedInfo.otp,
                  playbackInfo: e.embedInfo.playbackInfo,
                  signature: e.embedInfo.signature,
                  href: e.href,
                  tech: "cbcsi",
                },
              }),
              u = s.contentId;
            if (
              (u &&
                i
                  .init()
                  .then(function () {
                    return i.addAuthToken(u, s);
                  })
                  .catch(function () {
                    return i
                      .deleteDB()
                      .then(function () {
                        return i.init();
                      })
                      .then(function () {
                        return i.addAuthToken(u, s);
                      });
                  }),
              !navigator.serviceWorker)
            )
              return o(new Error("service worker not available"));
            navigator.serviceWorker.addEventListener("message", function (e) {
              var o = e.data,
                i = o.type,
                u = o.payload,
                c = e.source;
              if ("SW_ERROR" === i) {
                if ((l += 1) > 10)
                  return (
                    n.emit("error", u),
                    n.emit("forceUpdateClipstat", null),
                    n.emit("unregisterServiceWorker", null),
                    r()
                  );
                n.emit("swErrorCount", l),
                  null == c || c.postMessage({ type: "init-call", payload: s });
              }
              if (
                ("SW_LICENSE_DURATION" === i &&
                  "number" == typeof u.duration &&
                  n.emit("licenseLoadDuration", u.duration),
                "SW_SERVER_SIDE_RESUME_INFO" === i &&
                  n.emit("syncVideoResumeTime", {
                    serverResumeTime:
                      (null == u ? void 0 : u.resumeTime) || null,
                    serverUpdatedOn: (null == u ? void 0 : u.syncDelta) || null,
                  }),
                "workerVersion" === i)
              )
                return t.clear(), n.emit("workerVersion", u), a();
              var d = u.code,
                p = u.message;
              return "licenseLoadError" === i
                ? (t.clear(),
                  n.emit("error", {
                    code: d,
                    message: "Error code ".concat(d, ": ") + " ".concat(p),
                    payload: { vdo: d, message: p },
                  }),
                  r())
                : void 0;
            }),
              t.isRegistered() ||
                t.add(function () {
                  n.emit("error", {
                    message: vo(),
                    payload: {
                      errorMessage:
                        "Service worker could not register in 60 seconds. \n : ".concat(
                          vo()
                        ),
                    },
                  });
                }, 6e4),
              navigator.serviceWorker
                .register("./cryptoWorker.js")
                .then(function (e) {
                  if (
                    (n.on("unregisterServiceWorker", function () {
                      navigator.serviceWorker
                        .getRegistrations()
                        .then(function (e) {
                          for (var n = 0, t = e; n < t.length; n++)
                            t[n].unregister();
                        });
                    }),
                    !e.active)
                  )
                    return Er.debug("reloading"), window.location.reload();
                  e.active.postMessage({ type: "init-call", payload: s });
                });
          });
        };
      function mo() {
        var e = null;
        return {
          add: function (n, t) {
            e = setTimeout(n, t);
          },
          clear: function () {
            e && clearTimeout(e);
          },
          isRegistered: function () {
            return !!e;
          },
        };
      }
      var go = function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        yo = function (e, n) {
          var t,
            r,
            a,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              return (function (o) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((t = 1),
                      r &&
                        (a =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                        !(a = a.call(r, o[1])).done)
                    )
                      return a;
                    switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o;
                        break;
                      case 4:
                        return i.label++, { value: o[1], done: !1 };
                      case 5:
                        i.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (a = (a = i.trys).length > 0 && a[a.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0])
                          )
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!a || (o[1] > a[0] && o[1] < a[3]))
                        ) {
                          i.label = o[1];
                          break;
                        }
                        if (6 === o[0] && i.label < a[1]) {
                          (i.label = a[1]), (a = o);
                          break;
                        }
                        if (a && i.label < a[2]) {
                          (i.label = a[2]), i.ops.push(o);
                          break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = n.call(e, i);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    t = a = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        };
      function bo(e, n, t) {
        var r;
        return go(this, void 0, void 0, function () {
          var a,
            o,
            i,
            l,
            s,
            u,
            c,
            d,
            p,
            f,
            v = this;
          return yo(this, function (h) {
            switch (h.label) {
              case 0:
                if (!(a = n.metaData).cbcs) return [2];
                e.setAttribute("preload", "auto"),
                  e.setAttribute("playsinline", "true"),
                  (o = new mo()),
                  (i = (function (e, n) {
                    return function (t) {
                      n.clear(),
                        e.emit("error", {
                          code: t.code,
                          message: "Video has encountered error",
                          payload: { code: t.code, message: t.message },
                        });
                    };
                  })(t, o)),
                  e.addEventListener("error", i),
                  (l = function () {
                    return go(v, void 0, void 0, function () {
                      return yo(this, function (n) {
                        return (
                          (e.src = ""), e.removeEventListener("error", i), [2]
                        );
                      });
                    });
                  }),
                  (h.label = 1);
              case 1:
                return h.trys.push([1, 3, , 4]), [4, ho(n, t, o, l)];
              case 2:
                return (
                  h.sent(),
                  (e.src =
                    null === (r = a.cbcs) || void 0 === r ? void 0 : r.urlI),
                  [3, 4]
                );
              case 3:
                if (
                  ((s = h.sent()),
                  (u = s.message),
                  (c = s.response),
                  Er.error("Auth load error: ", u),
                  o && o.clear(),
                  c && c.data && c.message)
                )
                  try {
                    return (
                      (d = JSON.parse(c.data.message)),
                      (p = d.code),
                      (f = d.message),
                      [
                        2,
                        t.emit("error", {
                          code: p,
                          message: f,
                          payload: { vdo: p, message: f },
                        }),
                      ]
                    );
                  } catch (e) {
                    Er.debug("Could not parse error from license server");
                  }
                return (
                  t.emit("error", {
                    message: "Video load error: " + u,
                    payload: { message: "License load error: " + u },
                  }),
                  [3, 4]
                );
              case 4:
                return [2, { destroy: l }];
            }
          });
        });
      }
      function wo(e, n, t) {
        var r;
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        })(this, void 0, void 0, function () {
          var a, o, l, s;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (u) {
            switch (u.label) {
              case 0:
                return (a =
                  null === (r = n.metaData.h6) || void 0 === r
                    ? void 0
                    : r.manifest)
                  ? (e.setAttribute("preload", "auto"),
                    e.setAttribute("playsinline", "true"),
                    (o = (function (e) {
                      return function (n) {
                        e.emit("error", {
                          code: n.code,
                          message: "Video has encountered error",
                          payload: { code: n.code, message: n.message },
                        });
                      };
                    })(t)),
                    e.addEventListener("error", o),
                    [4, i.e(813).then(i.t.bind(i, 8711, 23))])
                  : [2];
              case 1:
                return (
                  (l = u.sent().default),
                  (s = new l()),
                  l.isSupported()
                    ? (s.loadSource(a),
                      s.attachMedia(e),
                      t.emit("abrStatusChange", s.autoLevelEnabled),
                      s.on(l.Events.MANIFEST_PARSED, function () {
                        var e = s.levels.map(function (e, n) {
                          return {
                            active: !1,
                            bandwidth: e.attrs.BANDWIDTH,
                            codec: e.attrs.CODECS,
                            id: n,
                          };
                        });
                        t.emit("availableQualities", e);
                      }),
                      s.on(l.Events.LEVEL_SWITCHED, function () {
                        t.emit("abrStatusChange", s.autoLevelEnabled),
                          t.emit("setActiveQuality", s.currentLevel);
                      }),
                      t.on("selectQualityTrack", function (e) {
                        (e !== s.currentLevel && -1 !== e) ||
                          (t.emit("setActiveQuality", e),
                          t.emit("abrStatusChange", -1 === e)),
                          (s.currentLevel = e);
                      }))
                    : lo(a, e, t),
                  [
                    2,
                    {
                      destroy: function () {
                        return new Promise(function (n) {
                          e.removeEventListener("error", o),
                            null == s || s.destroy(),
                            n();
                        });
                      },
                    },
                  ]
                );
            }
          });
        });
      }
      function xo(e) {
        var n = e.videoEl,
          t = e.playerArgs,
          r = e.playbackTech,
          a = e.eventBus;
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        })(this, void 0, void 0, function () {
          var e, o, i;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (l) {
            switch (l.label) {
              case 0:
                return "h6" !== r ? [3, 2] : [4, wo(n, t, a)];
              case 1:
                (e = l.sent()), (l.label = 2);
              case 2:
                return t.embedInfo.otp || "h6" === r
                  ? ((o = t), "dash" !== r ? [3, 4] : [4, eo(n, o, a)])
                  : [
                      2,
                      a.emit("error", { message: "OTP is required parameter" }),
                    ];
              case 3:
                (e = l.sent()), (l.label = 4);
              case 4:
                return "cbcsi" !== r ? [3, 6] : [4, bo(n, o, a)];
              case 5:
                (e = l.sent()), (l.label = 6);
              case 6:
                return "fps" !== r ? [3, 8] : [4, so(n, o, a)];
              case 7:
                (e = l.sent()), (l.label = 8);
              case 8:
                return (
                  (i = a.on("releaseMediaElement", function (t) {
                    null == e ||
                      e.destroy().then(function () {
                        n.removeAttribute("src"),
                          n.load(),
                          n.querySelectorAll("track").forEach(function (e) {
                            return e.remove();
                          }),
                          a.emit("waitingForPlayback", !0),
                          n.addEventListener("loadedmetadata", function e() {
                            a.emit("waitingForPlayback", !1),
                              n.play(),
                              n.removeEventListener("loadedmetadata", e);
                          }),
                          a.emit("loadingNextVideo", !0),
                          "function" == typeof t && t(),
                          i();
                      });
                  })),
                  [2]
                );
            }
          });
        });
      }
      var Co = function (e, n, t, r) {
          e.emit("setLiteMode", !0),
            e.on("setLiteMode", function (a) {
              return (function (e, n, t, r) {
                return new (t || (t = Promise))(function (a, o) {
                  function i(e) {
                    try {
                      s(r.next(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function l(e) {
                    try {
                      s(r.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function s(e) {
                    var n;
                    e.done
                      ? a(e.value)
                      : ((n = e.value),
                        n instanceof t
                          ? n
                          : new t(function (e) {
                              e(n);
                            })).then(i, l);
                  }
                  s((r = r.apply(e, n || [])).next());
                });
              })(void 0, void 0, void 0, function () {
                return (function (e, n) {
                  var t,
                    r,
                    a,
                    o,
                    i = {
                      label: 0,
                      sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                      },
                      trys: [],
                      ops: [],
                    };
                  return (
                    (o = { next: l(0), throw: l(1), return: l(2) }),
                    "function" == typeof Symbol &&
                      (o[Symbol.iterator] = function () {
                        return this;
                      }),
                    o
                  );
                  function l(o) {
                    return function (l) {
                      return (function (o) {
                        if (t)
                          throw new TypeError(
                            "Generator is already executing."
                          );
                        for (; i; )
                          try {
                            if (
                              ((t = 1),
                              r &&
                                (a =
                                  2 & o[0]
                                    ? r.return
                                    : o[0]
                                    ? r.throw ||
                                      ((a = r.return) && a.call(r), 0)
                                    : r.next) &&
                                !(a = a.call(r, o[1])).done)
                            )
                              return a;
                            switch (
                              ((r = 0), a && (o = [2 & o[0], a.value]), o[0])
                            ) {
                              case 0:
                              case 1:
                                a = o;
                                break;
                              case 4:
                                return i.label++, { value: o[1], done: !1 };
                              case 5:
                                i.label++, (r = o[1]), (o = [0]);
                                continue;
                              case 7:
                                (o = i.ops.pop()), i.trys.pop();
                                continue;
                              default:
                                if (
                                  !(
                                    (a =
                                      (a = i.trys).length > 0 &&
                                      a[a.length - 1]) ||
                                    (6 !== o[0] && 2 !== o[0])
                                  )
                                ) {
                                  i = 0;
                                  continue;
                                }
                                if (
                                  3 === o[0] &&
                                  (!a || (o[1] > a[0] && o[1] < a[3]))
                                ) {
                                  i.label = o[1];
                                  break;
                                }
                                if (6 === o[0] && i.label < a[1]) {
                                  (i.label = a[1]), (a = o);
                                  break;
                                }
                                if (a && i.label < a[2]) {
                                  (i.label = a[2]), i.ops.push(o);
                                  break;
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue;
                            }
                            o = n.call(e, i);
                          } catch (e) {
                            (o = [6, e]), (r = 0);
                          } finally {
                            t = a = 0;
                          }
                        if (5 & o[0]) throw o[1];
                        return { value: o[0] ? o[1] : void 0, done: !0 };
                      })([o, l]);
                    };
                  }
                })(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return a
                        ? [2]
                        : (e.emit("waitingForPlayback", !0),
                          n.addEventListener("play", function () {
                            return e.emit("waitingForPlayback", !1);
                          }),
                          [
                            4,
                            xo({
                              videoEl: n,
                              playbackTech: t,
                              playerArgs: r,
                              eventBus: e,
                            }),
                          ]);
                    case 1:
                      return (
                        o.sent(),
                        n.readyState > 1
                          ? n.play()
                          : n.addEventListener("loadeddata", function e() {
                              n.play(), n.removeEventListener("loadeddata", e);
                            }),
                        [2]
                      );
                  }
                });
              });
            });
        },
        _o = function () {
          return (
            (_o =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            _o.apply(this, arguments)
          );
        },
        Eo = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var r, a = 0, o = n.length; a < o; a++)
              (!r && a in n) ||
                (r || (r = Array.prototype.slice.call(n, 0, a)), (r[a] = n[a]));
          return e.concat(r || Array.prototype.slice.call(n));
        };
      function ko(e) {
        var n = e.otp,
          t = e.playbackInfoStr,
          r = e.videoEl,
          a = e.eventBus,
          o = e.configureOptions,
          i = e.logLevel,
          l = e.liteMode,
          s = void 0 !== l && l;
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (a, o) {
            function i(e) {
              try {
                s(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(i, l);
            }
            s((r = r.apply(e, n || [])).next());
          });
        })(this, void 0, void 0, function () {
          var e, l, u, c, d;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (p) {
            switch (p.label) {
              case 0:
                return (
                  (e = (function (e, n) {
                    try {
                      return (e = atob(e)), JSON.parse(e);
                    } catch (e) {
                      return (
                        Er.error("playbackInfo invalid: ", e),
                        n.emit("error", {
                          code: null,
                          message: "Provide the valid playbackInfo string",
                          payload: {
                            message: "Error: parsing the playbackInfo string",
                          },
                        }),
                        { videoId: null }
                      );
                    }
                  })(t, a).videoId),
                  e
                    ? (a.emit("videoId", e),
                      (l = _o(
                        {
                          otp: n,
                          playbackInfoStr: t,
                          playbackInfo: t,
                          isRenderInIframe: self.top === window,
                          documentReferrer:
                            window.VDO_HEADER_REFERER || document.referrer,
                        },
                        o
                      )),
                      !0 !== o.disableClipstat &&
                        va({
                          videoEl: r,
                          eventBus: a,
                          videoId: e,
                          embedInfo: l,
                        }),
                      [4, Wa({ videoId: e, configureOptions: o, eventBus: a })])
                    : [2]
                );
              case 1:
                return (
                  (u = p.sent()),
                  [4, ja(Eo([], u.tech, !0), a, La(l.playerAgent))]
                );
              case 2:
                return (
                  "zen" === (c = p.sent()) &&
                    a.emit(
                      "zenObject",
                      (function (e, n) {
                        return {
                          topLinkUrl:
                            "intent://app.vdocipher.com/".concat(n) +
                            "#Intent;package=com.vdocipher.zenplayer;" +
                            "S.otp="
                              .concat(n, ";scheme=vdocipher;S.market_referrer=")
                              .concat(
                                ((t = (
                                  window.VDO_HEADER_REFERER ||
                                  document.referrer ||
                                  window.location.href
                                ).match(/:\/\/(.[^/]+)/)),
                                t && t.length > 1 ? t[1] : "unknown"),
                                ";end"
                              ),
                          topLinkImage: Ea(e.posters),
                          topLinkMessage: "Play on App",
                        };
                        var t;
                      })(u, n)
                    ),
                  a.emit("tech", c),
                  (d = {
                    embedInfo: l,
                    metaData: u,
                    href: La(l.playerAgent),
                    origin: window.location.origin,
                    logLevel: i,
                  }),
                  r.setAttribute("crossorigin", "anonymous"),
                  o.isUIEnabled ||
                    (function (e, n) {
                      if ((void 0 === n && (n = []), n.length > 0)) {
                        var t = Array.from(n).sort(function (e, n) {
                          return n.height - e.height;
                        });
                        e.poster = t[0].url;
                      }
                    })(r, u.posters),
                  (function (e, n) {
                    return (
                      void 0 === n && (n = []),
                      new Promise(function (t) {
                        var r = [];
                        n.forEach(function (n, t) {
                          var a = n.lang,
                            o = n.url,
                            i = n.label,
                            l = n.isDefault,
                            s = n.captionName,
                            u = new Promise(function (n) {
                              var r = document.createElement("track");
                              r.setAttribute("label", i),
                                r.setAttribute("id", String(t)),
                                r.setAttribute("kind", "captions"),
                                r.setAttribute("srclang", a),
                                r.setAttribute("src", o),
                                r.addEventListener("load", function () {
                                  n({
                                    id: t,
                                    isDefault: l,
                                    lang: a,
                                    label: i,
                                    captionName: s,
                                    url: o,
                                  });
                                }),
                                e.appendChild(r);
                            });
                          r.push(u);
                        }),
                          Promise.all(r).then(t).catch(t);
                      })
                    );
                  })(r, u.captions).then(function (e) {
                    a.emit("availableCaptions", e);
                  }),
                  (function (e, n) {
                    if (n) {
                      var t = e.play();
                      null == t ||
                        t.catch(function () {
                          (e.muted = !0), e.play();
                        });
                    }
                  })(r, l.autoplay),
                  s
                    ? [2, Co(a, r, c, d)]
                    : [
                        2,
                        xo({
                          videoEl: r,
                          playbackTech: c,
                          playerArgs: d,
                          eventBus: a,
                        }),
                      ]
                );
            }
          });
        });
      }
      var So = (function () {
          try {
            var e = [1, 2, 3];
            return (
              e.includes(1),
              e.push(23),
              e.forEach(function () {}),
              e.filter(Boolean),
              e.indexOf(34),
              !0
            );
          } catch (e) {
            return !1;
          }
        })(),
        To = (function () {
          try {
            return void 0 !== window.fetch;
          } catch (e) {
            return !1;
          }
        })(),
        Ao = (function () {
          try {
            return void 0 !== Object.assign;
          } catch (e) {
            return !1;
          }
        })(),
        Po = function () {
          return (
            (Po =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            Po.apply(this, arguments)
          );
        },
        No = { autoplay: !1, liteMode: !1, player: null };
      function Lo(e, n) {
        void 0 === n && (n = No);
        var t = n.eventBus || new cr.Z();
        t.on("error", function (n) {
          e.dispatchEvent(new CustomEvent("@vdo/error", { detail: n }));
        });
        var r = (function () {
          for (var e = [So, To, Ao], n = 0; n < e.length; n++)
            if (!1 === e[n]) return !1;
          return !0;
        })();
        r ||
          t.emit("error", {
            message: "Please update the browser",
            payload: {
              message: "isBrowserSupported False, for the vdo-player core",
            },
          });
        var a = Po({}, n);
        delete a.eventBus, Er.setLevel(n.logLevel || "ERROR");
        var o = Er.getLevel();
        return (
          t.on(
            "loadVideo",
            (function (e, n, t, r) {
              return function (a) {
                var o = a.otp,
                  i = a.playbackInfo;
                n.emit("releaseMediaElement", function () {
                  ko({
                    otp: o,
                    playbackInfoStr: i,
                    videoEl: e,
                    configureOptions: t,
                    eventBus: n,
                    logLevel: r,
                    liteMode: !1,
                  });
                });
              };
            })(e, t, a, o)
          ),
          {
            addVideo: function (n) {
              var i = n.otp,
                l = n.playbackInfo,
                s = n.liteMode;
              return (function (e, n, t, r) {
                return new (t || (t = Promise))(function (a, o) {
                  function i(e) {
                    try {
                      s(r.next(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function l(e) {
                    try {
                      s(r.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function s(e) {
                    var n;
                    e.done
                      ? a(e.value)
                      : ((n = e.value),
                        n instanceof t
                          ? n
                          : new t(function (e) {
                              e(n);
                            })).then(i, l);
                  }
                  s((r = r.apply(e, n || [])).next());
                });
              })(this, void 0, void 0, function () {
                return (function (e, n) {
                  var t,
                    r,
                    a,
                    o,
                    i = {
                      label: 0,
                      sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                      },
                      trys: [],
                      ops: [],
                    };
                  return (
                    (o = { next: l(0), throw: l(1), return: l(2) }),
                    "function" == typeof Symbol &&
                      (o[Symbol.iterator] = function () {
                        return this;
                      }),
                    o
                  );
                  function l(o) {
                    return function (l) {
                      return (function (o) {
                        if (t)
                          throw new TypeError(
                            "Generator is already executing."
                          );
                        for (; i; )
                          try {
                            if (
                              ((t = 1),
                              r &&
                                (a =
                                  2 & o[0]
                                    ? r.return
                                    : o[0]
                                    ? r.throw ||
                                      ((a = r.return) && a.call(r), 0)
                                    : r.next) &&
                                !(a = a.call(r, o[1])).done)
                            )
                              return a;
                            switch (
                              ((r = 0), a && (o = [2 & o[0], a.value]), o[0])
                            ) {
                              case 0:
                              case 1:
                                a = o;
                                break;
                              case 4:
                                return i.label++, { value: o[1], done: !1 };
                              case 5:
                                i.label++, (r = o[1]), (o = [0]);
                                continue;
                              case 7:
                                (o = i.ops.pop()), i.trys.pop();
                                continue;
                              default:
                                if (
                                  !(
                                    (a =
                                      (a = i.trys).length > 0 &&
                                      a[a.length - 1]) ||
                                    (6 !== o[0] && 2 !== o[0])
                                  )
                                ) {
                                  i = 0;
                                  continue;
                                }
                                if (
                                  3 === o[0] &&
                                  (!a || (o[1] > a[0] && o[1] < a[3]))
                                ) {
                                  i.label = o[1];
                                  break;
                                }
                                if (6 === o[0] && i.label < a[1]) {
                                  (i.label = a[1]), (a = o);
                                  break;
                                }
                                if (a && i.label < a[2]) {
                                  (i.label = a[2]), i.ops.push(o);
                                  break;
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue;
                            }
                            o = n.call(e, i);
                          } catch (e) {
                            (o = [6, e]), (r = 0);
                          } finally {
                            t = a = 0;
                          }
                        if (5 & o[0]) throw o[1];
                        return { value: o[0] ? o[1] : void 0, done: !0 };
                      })([o, l]);
                    };
                  }
                })(this, function (n) {
                  return r
                    ? [
                        2,
                        ko({
                          otp: i,
                          playbackInfoStr: l,
                          videoEl: e,
                          configureOptions: a,
                          eventBus: t,
                          logLevel: o,
                          liteMode: s,
                        }),
                      ]
                    : [2];
                });
              });
            },
            eventBus: t,
          }
        );
      }
      var Oo,
        Io,
        Ro,
        Vo,
        Do,
        Bo,
        Mo,
        Fo,
        Uo = function (e, n) {
          var t = RegExp("[?&]" + e + "=([^&]*)").exec(n);
          return t && decodeURIComponent(t[1].replace(/\+/g, " "));
        },
        jo = i(939),
        Ho = function () {
          return (
            (Ho =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            Ho.apply(this, arguments)
          );
        };
      (Oo = window.location.search),
        (Io = Uo("otp", Oo)),
        (Ro = Uo("playerAgent", Oo) || "iframe"),
        (Vo = Uo("playbackInfo", Oo)),
        (Do = (function (e) {
          var n = Uo("techoverride", e);
          return {
            techoverride: n ? n.split(",") : null,
            disableClipstat: "true" === Uo("disableClipstat", e),
            autoplay: "true" === Uo("autoplay", e),
            liteMode: "true" === Uo("litemode", e),
            player: Uo("player", e),
            version: window.location.pathname.split("/")[1],
            host: window.location.hostname,
            userId: Uo("userId", e) || void 0,
            tags: (function () {
              var n = Uo("tags", e);
              if (n) return n.split(",");
            })(),
          };
        })(Oo)),
        (Bo = (function (e) {
          return {
            theme: Uo("theme", e) || "theme02",
            iconColor: Uo("iconColor", e) || void 0,
            primaryColor: Uo("primaryColor", e) || void 0,
            secondaryColor: Uo("secondaryColor", e) || void 0,
            ccLanguage: Uo("ccLanguage", e) || void 0,
            otp: Uo("otp", e) || null,
            autoplay: "true" === Uo("autoplay", e),
            playbackInfo: Uo("playbackInfo", e) || void 0,
            popovermode: "true" === Uo("popovermode", e) || !1,
            loop: "true" === Uo("loop", e),
            controlsStatus:
              ((n = Uo("controls", e) || "on"),
              ["on", "native", "off"].includes(n) ? n : "on"),
          };
          var n;
        })(Oo)),
        (Mo = (function (e) {
          var n,
            t,
            r,
            a,
            o = e.otp,
            i = e.playbackInfo,
            l = e.vdoPlayerOptionals,
            s = e.uiOptionals,
            u = e.eventBus,
            c = void 0 === u ? new cr.Z() : u,
            d = e.apiAgent,
            p = e.playerAgent;
          return (function (e, n) {
            var t,
              r,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (a =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, o[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                        case 0:
                        case 1:
                          a = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (a =
                                (a = i.trys).length > 0 && a[a.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!a || (o[1] > a[0] && o[1] < a[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < a[1]) {
                            (i.label = a[1]), (a = o);
                            break;
                          }
                          if (a && i.label < a[2]) {
                            (i.label = a[2]), i.ops.push(o);
                            break;
                          }
                          a[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = n.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      t = a = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          })(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (n = document.createElement("div")).style.setProperty(
                    "max-width",
                    "100%"
                  ),
                  n.style.setProperty("position", "relative"),
                  n.style.setProperty("width", "100%"),
                  n.style.setProperty("height", "100%"),
                  [4, n]
                );
              case 1:
                if ((e.sent(), !i))
                  return (
                    (function (e, n) {
                      var t = n,
                        r = document.createElement("div");
                      r.setAttribute(
                        "style",
                        "\n    display: flex; flex-direction: column; gap: 5px;\n    justify-content: center; align-items: center; \n    color: white; \n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, Helvetica, Arial, 'Helvetica Neue',\n    sans-serif;\n    height: 100%;\n    "
                      );
                      var a = document.createElement("div");
                      (a.innerText = t),
                        r.appendChild(a),
                        e.appendChild(r),
                        console.error("[Vdocipher] ".concat(t));
                    })(n, "Error: PlaybackInfo is required params"),
                    [2, n]
                  );
                t = document.createElement("video");
                try {
                  (t.style.width = "100%"),
                    (t.style.height = "inherit"),
                    (t.style.position = "absolute"),
                    (t.style.top = "0px"),
                    (t.style.left = "0px"),
                    (t.controls = "off" !== s.controlsStatus),
                    s.loop && (t.loop = !0),
                    (t.playsInline = !0),
                    n.appendChild(t),
                    (r = "on" === s.controlsStatus) &&
                      wr(t, n, Ho({ eventBus: c }, s)),
                    "off" === s.controlsStatus &&
                      (function (e) {
                        e.addEventListener("click", function n() {
                          e.play(), e.removeEventListener("click", n);
                        });
                      })(t),
                    (a = Lo(
                      t,
                      Ho(Ho({}, l), {
                        eventBus: c,
                        isUIEnabled: r,
                        playerAgent: p,
                        controlsStatus: s.controlsStatus,
                      })
                    )),
                    jo.Z.attachAPI(t, c, d),
                    a.addVideo({
                      otp: o,
                      playbackInfo: i,
                      liteMode: l.liteMode,
                    });
                } catch (e) {
                  console.error("[Vdocipher]", e);
                }
                return [4, t];
              case 2:
                return e.sent(), [2];
            }
          });
        })({
          otp: Io,
          playbackInfo: Vo,
          vdoPlayerOptionals: Do,
          uiOptionals: Bo,
          apiAgent: {
            type: "iframe",
            element: null,
            operatingMode: "PRINCIPAL",
          },
          playerAgent: Ro,
        })),
        (Fo = Mo.next().value),
        document.body.append(Fo),
        Mo.next();
    })();
})();
