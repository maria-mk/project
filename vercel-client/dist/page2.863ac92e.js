var e=globalThis,t={},r={},n=e.parcelRequire94c2;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},e.parcelRequire94c2=n),n.register;var o=n("ddb05"),c=n("kL8Dy");document.addEventListener("DOMContentLoaded",function(){let e=new URLSearchParams(window.location.search).get("productId");if(!e){console.error("ID продукта не указан в URL.");return}let t=document.querySelector(".filter_text_button_big:nth-child(2)"),r=document.querySelector(".filter_text_button_big:nth-child(1)"),n=document.querySelector(".reviews-placeholder"),i=document.querySelector(".stores-and-map-placeholder");function l(e){document.querySelectorAll(".filter_text_button_big").forEach(e=>e.classList.remove("filter_button--color-active")),e.classList.add("filter_button--color-active"),n.innerHTML="",i.innerHTML=""}r.addEventListener("click",async function(){l(r),console.log('Кнопка "Где купить" нажата'),await (0,o.renderStoresAndMap)(e)}),t.addEventListener("click",async function(){l(t),console.log('Кнопка "Отзывы" нажата'),await (0,c.renderReviewsSection)(e)})});