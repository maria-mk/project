var u=globalThis,r={},t={},c=u.parcelRequire94c2;null==c&&((c=function(u){if(u in r)return r[u].exports;if(u in t){var c=t[u];delete t[u];var a={id:u,exports:{}};return r[u]=a,c.call(a.exports,a,a.exports),a.exports}var e=Error("Cannot find module '"+u+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(u,r){t[u]=r},u.parcelRequire94c2=c),c.register;var a=c("4kXFg");const e=async({id:u,title:r,image:t,color:c,sugar:e,type:d})=>{let s=document.createElement("div");s.className="product-card";let i=await (0,a.getPriceByProductId)(u),o=i.length>0?Math.min(...i.map(u=>u.price)):0,n=await (0,a.getReviewsByProductId)(u),p=n.length>0?(n.reduce((u,r)=>u+r.rating,0)/n.length).toFixed(1):"Нет отзывов";return s.innerHTML=`
        <div class="product-card__image-container">
            <img class="product-card__image" src="${t}" alt="${r}">
        </div>
        <div class="product-card__content">
            <h3 class="product-card__title">${r.toUpperCase()}</h3>
            <div class="product-card__rating">
                <span class="product-card__rating-star">\u{2605}</span>
                <span class="product-card__rating-value">${p}</span>
            </div>
            <div class="product-card__characteristics">
                <span class="product-card__characteristic">${c}</span>
                <span class="product-card__characteristic">${e}</span>
                <span class="product-card__characteristic">${d}</span>
            </div>
            <div class="product-card__price-button-container">
                <p class="product-card__price">\u{426}\u{415}\u{41D}\u{410} \u{41E}\u{422} ${o} \u{440}\u{443}\u{431}</p>
                <a href="page2.html?productId=${u}" class="product-card__button">\u{41F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{435}\u{435}</a>
            </div>
        </div>
    `,s},d=async u=>{let r=document.querySelector(".products");if(!r)throw Error(".products not found");for(let t of u){let u=await e(t),c=document.createElement("div");c.appendChild(u),r.appendChild(c)}};(async()=>{try{let u=await (0,a.getAllProducts)();await d(u)}catch(r){console.error("Ошибка при загрузке продуктов:",r);let u=document.querySelector(".products");u&&(u.innerHTML=`<p>\u{41D}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{43E}\u{441}\u{44C} \u{437}\u{430}\u{433}\u{440}\u{443}\u{437}\u{438}\u{442}\u{44C} \u{43F}\u{440}\u{43E}\u{434}\u{443}\u{43A}\u{442}\u{44B}. \u{41F}\u{43E}\u{436}\u{430}\u{43B}\u{443}\u{439}\u{441}\u{442}\u{430}, \u{43F}\u{43E}\u{43F}\u{440}\u{43E}\u{431}\u{443}\u{439}\u{442}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435}.</p>`)}})();