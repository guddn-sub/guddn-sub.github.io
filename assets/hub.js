// 허브 목차: 페이지의 <div data-sites></div> 자리에 사이트 목록을 그린다.
// 모양은 두 사이트의 목차와 같은 노션 "페이지 링크" 형식 (밑줄 링크 + 아래 설명 한 줄).
// 주소는 config.js 에서 만든다:  깃허브 https://{id}.github.io/{repo}/  ·  내 PC 파일로 열면 ../{folder}/index.html
(function () {
  "use strict";
  // 서비스 워커 등록 (두 사이트와 같은 sw.js): 이후에는 html·js 를 열 때마다 새 버전이 있는지 확인한다.
  // 깃허브 페이지는 파일을 최대 10분 캐시하므로, 이게 없으면 config.js 를 고쳐 올려도 한동안 예전 목록이 보인다.
  var me = document.currentScript;
  if (me && "serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register(new URL("../sw.js", me.src).href).catch(function () {});
  }

  var cfg = window.HUB_CONFIG;
  var slot = document.querySelector("[data-sites]");
  if (!slot) return;
  if (!cfg) { slot.textContent = "설정(config.js)을 불러오지 못했어요. 새로고침해 주세요."; return; }

  var local = location.protocol === "file:";
  var base = "https://" + cfg.id + ".github.io/";

  cfg.sites.forEach(function (s) {
    var fig = document.createElement("figure");
    fig.className = "link-to-page";
    var a = document.createElement("a");
    a.href = local && s.folder ? "../" + s.folder + "/index.html" : base + s.repo + "/";
    a.textContent = s.title;
    fig.appendChild(a);
    slot.appendChild(fig);
    if (s.desc) {
      var p = document.createElement("p");
      p.setAttribute("dir", "auto");
      p.textContent = s.desc;
      p.style.cssText = "margin:-0.6em 0 1.2em;color:rgba(55,53,47,.65);font-size:0.95em";
      slot.appendChild(p);
    }
  });
})();
