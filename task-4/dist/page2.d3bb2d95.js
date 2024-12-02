var e=globalThis,t={},r={},a=e.parcelRequire94c2;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequire94c2=a),a.register;var o=a("4kXFg");console.log("getProductById:",o.getProductById);const i=({title:e,image:t,rating:r,taste:a,aroma:o,min_price:i})=>{let c=document.createElement("div");return c.className="product-details",c.innerHTML=`
        <div class="product-info">
            <p class="product-name">${e.toUpperCase()}</p>
            <div>
                <span class="product-rating"><h5>\u{2605} ${r}</h5></span>
            </div>
            <div class="taste-aroma">
                <div class="taste">
                    <h5>\u{412}\u{43A}\u{443}\u{441}</h5>
                    <p>${a}</p>
                </div>
                <div class="aroma">
                    <h5>\u{410}\u{440}\u{43E}\u{43C}\u{430}\u{442}</h5>
                    <p>${o}</p>
                </div>
            </div>
            <p class="price">\u{426}\u{415}\u{41D}\u{410} \u{41E}\u{422} ${i} \u{440}\u{443}\u{431}</p>
        </div>
        <div class="product-image">
            <img src="${t}" alt="${e}">
        </div>
    `,c},c=async e=>{try{let t=await (0,o.getProductById)(e);console.log(t);let r=document.querySelector(".product-details");if(console.log(r),!t){console.error("Продукт не найден");return}let a=await (0,o.getPriceByProductId)(e),c=a.length>0?Math.min(...a.map(e=>e.price)):0,n=await (0,o.getReviewsByProductId)(e),d=n.length>0?(n.reduce((e,t)=>e+t.rating,0)/n.length).toFixed(1):"Нет отзывов",s=i({...t,rating:d,min_price:c});r.innerHTML="",r.appendChild(s)}catch(e){console.error("Ошибка при получении данных о продукте:",e)}};document.addEventListener("DOMContentLoaded",()=>{let e=new URLSearchParams(window.location.search).get("productId");e?c(e):console.error("ID продукта не указан в URL.")});