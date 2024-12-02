var e=globalThis,r={},t={},o=e.parcelRequire94c2;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var s={id:e,exports:{}};return r[e]=s,o.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequire94c2=o),(0,o.register)("ddb05",function(e,r){Object.defineProperty(e.exports,"renderStoresAndMap",{get:()=>n,set:void 0,enumerable:!0,configurable:!0});var t=o("4kXFg");let s=({storeNet:e,logo:r,storePrices:t})=>{let o=document.createElement("li");o.className="store-item";let s=t.map(({address:e})=>`<option>${e}</option>`).join(""),a=t[0].price;o.innerHTML=`
        <ul>
            <li class="store-logo"><img src="${r}" alt="${e}"></li>
            <li class="store-info">
                <h5>${e}</h5>
                <select class="option" style="color: var(--color-accent);">
                    ${s}
                </select>
                <span class="price">${a} \u{440}\u{443}\u{431}</span>
            </li>
        </ul>
    `;let c=o.querySelector("select"),i=o.querySelector(".price");return c.addEventListener("change",e=>{let r=e.target.value,o=t.find(({address:e})=>e===r)?.price;i.textContent=`${o} \u{440}\u{443}\u{431}`}),o},a=e=>{let r=document.createElement("ul");return r.className="store-list",e.forEach(e=>{let t=s(e);r.appendChild(t)}),r},c=e=>{let r=document.createElement("div");r.className="stores-and-map",r.innerHTML=`

        <div class="stores-list"></div>
        <div class="map">                    
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A74855c3ad79ff2cb3d1fd8f5a6b2bb9c5189203ed5ed392334cbf42f90e339d8&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
        </div>
    `;let t=a(e);return r.querySelector(".stores-list").appendChild(t),r},i=async e=>{try{let r=await (0,t.getProductById)(e);if(!r||!r.stores_id)return console.error("Продукт или список магазинов не найден"),[];let o=await (0,t.getPriceByProductId)(e),s=r.stores_id.map(e=>(0,t.getStoreById)(e)),a=(await Promise.all(s)).reduce((e,r)=>{let t=o.filter(e=>e.store_id===r.id).map(e=>({address:r.address,price:e.price}));return e[r.store_net]||(e[r.store_net]={storeNet:r.store_net,logo:r.image,storePrices:[]}),e[r.store_net].storePrices.push(...t),e},{});return Object.values(a).map(e=>(e.storePrices.sort((e,r)=>e.price-r.price),e)).sort((e,r)=>{let t=Math.min(...e.storePrices.map(e=>e.price)),o=Math.min(...r.storePrices.map(e=>e.price));return t-o})}catch(e){return console.error("Ошибка при получении данных о магазинах:",e),[]}},n=async e=>{try{let r=await i(e),t=document.querySelector(".stores-and-map-placeholder");if(!t){console.error("Контейнер для списка магазинов не найден");return}let o=c(r);t.innerHTML="",t.appendChild(o)}catch(e){console.error("Ошибка при рендеринге списка магазинов:",e)}};document.addEventListener("DOMContentLoaded",()=>{let e=new URLSearchParams(window.location.search).get("productId");e?n(e):console.error("ID продукта не указан в URL.")})}),o("ddb05");