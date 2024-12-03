var u=globalThis,e={},t={},r=u.parcelRequire94c2;null==r&&((r=function(u){if(u in e)return e[u].exports;if(u in t){var r=t[u];delete t[u];var a={id:u,exports:{}};return e[u]=a,r.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(u,e){t[u]=e},u.parcelRequire94c2=r),(0,r.register)("kL8Dy",function(u,e){Object.defineProperty(u.exports,"renderReviewsSection",{get:()=>c,set:void 0,enumerable:!0,configurable:!0});var t=r("4kXFg");let a=({name:u="Гость",rating:e=0,text:t="Отзыв отсутствует"})=>{let r=document.createElement("li");return r.className="review-item",r.innerHTML=`
        <ul>
            <li class="review-author"><h5>${u}</h5></li>
            <li class="review-rating"><h5>\u{2605} ${e}</h5></li>
            <li class="review-text">${t}</li>
        </ul>
    `,r},l=(u,e)=>{let t=document.createElement("ul");if(t.className="reviews-list",0===u.length){let u=document.createElement("li");u.className="no-reviews-item",u.innerHTML=`<h5 style="color: #711010">\u{41E}\u{442}\u{437}\u{44B}\u{432}\u{43E}\u{432} \u{43D}\u{430} \u{434}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{442}\u{43E}\u{432}\u{430}\u{440} \u{43F}\u{43E}\u{43A}\u{430} \u{43D}\u{435}\u{442}, \u{43D}\u{43E} \u{432}\u{44B} \u{43C}\u{43E}\u{436}\u{435}\u{442}\u{435} \u{441}\u{442}\u{430}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{432}\u{44B}\u{43C}, \u{43A}\u{442}\u{43E} \u{43F}\u{43E}\u{434}\u{435}\u{43B}\u{438}\u{442}\u{441}\u{44F} \u{441}\u{432}\u{43E}\u{438}\u{43C}\u{438} \u{432}\u{43F}\u{435}\u{447}\u{430}\u{442}\u{43B}\u{435}\u{43D}\u{438}\u{44F}\u{43C}\u{438} \u{43E} "${e}"</h5>`,t.appendChild(u)}else u.forEach(u=>{let e=a(u);t.appendChild(e)});return t},i=async u=>{try{return await (0,t.createReview)(u)}catch(u){throw console.error("Ошибка при отправке отзыва:",u),u}},n=(u,e)=>{let t=u.querySelector(".send__button"),r=u.querySelectorAll('.star-rating input[name="rating"]'),a=u.querySelector("textarea");t.addEventListener("click",async()=>{let u={product_id:e,name:"Гость",rating:Number(Array.from(r).find(u=>u.checked)?.value),text:a.value.trim()};if(!u.rating||!u.text){alert("Пожалуйста, заполните все поля");return}try{await i(u),r.forEach(u=>u.checked=!1),a.value="",alert("Спасибо, ваш отзыв сохранен."),await c(e)}catch(u){alert("Произошла ошибка при отправке отзыва.")}})},o=(u,e,t)=>{let r=document.createElement("div");r.className="reviews-section",r.innerHTML=`
        <div class="leave-review">
            <h5>\u{41E}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43E}\u{442}\u{437}\u{44B}\u{432}</h5>
            <ul>
                <li>
                    <label>\u{412}\u{430}\u{448}\u{430} \u{43E}\u{446}\u{435}\u{43D}\u{43A}\u{430}</label>
                    <div class="star-rating">
                        <input type="radio" id="star5" name="rating" value="5">
                        <label for="star5" title="\u{41E}\u{442}\u{43B}\u{438}\u{447}\u{43D}\u{43E}">\u{2605}</label>
                        
                        <input type="radio" id="star4" name="rating" value="4">
                        <label for="star4" title="\u{425}\u{43E}\u{440}\u{43E}\u{448}\u{43E}">\u{2605}</label>
                        
                        <input type="radio" id="star3" name="rating" value="3">
                        <label for="star3" title="\u{41D}\u{435}\u{43F}\u{43B}\u{43E}\u{445}\u{43E}">\u{2605}</label>
                        
                        <input type="radio" id="star2" name="rating" value="2">
                        <label for="star2" title="\u{41F}\u{43B}\u{43E}\u{445}\u{43E}">\u{2605}</label>
                        
                        <input type="radio" id="star1" name="rating" value="1">
                        <label for="star1" title="\u{423}\u{436}\u{430}\u{441}\u{43D}\u{43E}">\u{2605}</label>
                    </div>
                </li>
                <li>
                    <label>\u{412}\u{430}\u{448} \u{43A}\u{43E}\u{43C}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{438}\u{439}</label>
                    <textarea placeholder="\u{412}\u{432}\u{435}\u{434}\u{438}\u{442}\u{435} \u{442}\u{435}\u{43A}\u{441}\u{442}..."></textarea>
                </li>
                <li>
                    <button class="send__button">\u{41E}\u{442}\u{43F}\u{440}\u{430}\u{432}\u{438}\u{442}\u{44C}</button>
                </li>
            </ul>
        </div>
    `;let a=l(u,t);return r.prepend(a),n(r,e),r},c=async u=>{console.log("Функция renderReviewsSection вызвана с ID:",u);try{let e=await (0,t.getReviewsByProductId)(u),r=(await (0,t.getProductById)(u)).title,a=document.querySelector(".reviews-placeholder");if(!a){console.error("Контейнер для отзывов не найден");return}let l=o(e||[],u,r);a.innerHTML="",a.appendChild(l)}catch(u){console.error("Ошибка при рендеринге отзывов:",u)}}}),r("kL8Dy");