(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const c=["e","i","a","o","u"],i=["enter","imes","ai","ober","ufat"],d=c.length,u="font-size:1.5em;",a=r=>{let e=r;for(let o=0;o<d;o++)e=e.replaceAll(c[o],i[o]);return e},f=r=>{let e=r;for(let o=0;o<d;o++)e=e.replaceAll(i[o],c[o]);return e},y=()=>{const r=document.querySelector(".encoder__message").value,e=document.querySelector(".display");e.innerHTML=`
        <p style='${u}'>${a(r)}</p>
    `},g=()=>{const r=document.querySelector(".encoder__message").value,e=document.querySelector(".display");e.innerHTML=`
          <p style='${u}'>${f(r)}</p>
      `},m=document.querySelector(".encode");m.onclick=y;const p=document.querySelector(".decode");p.onclick=g;
