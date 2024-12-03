const e=()=>`
        <svg width="44" height="57" viewBox="0 0 44 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8305 55.7217C13.5641 56.1625 14.4447 56.3197 15.2787 56.1586C16.1126 55.9976 16.8316 55.5316 17.2774 54.8631L34.0855 29.6571C37.4472 24.6159 37.6225 18.5429 35.2766 16.2508L42.8403 4.90807C43.0632 4.57382 43.1312 4.16571 43.0295 3.77352C42.9277 3.38133 42.6645 3.03719 42.2977 2.8168L39.5316 1.15486C39.1648 0.934471 38.7244 0.855892 38.3075 0.936407C37.8905 1.01692 37.531 1.24994 37.3081 1.58419L29.7444 12.9269C26.5582 11.8951 20.8506 14.6442 17.489 19.6854L0.680829 44.8914C0.235051 45.5599 0.0989524 46.3761 0.302482 47.1605C0.506009 47.9449 1.03249 48.6332 1.7661 49.074L12.8305 55.7217Z" fill="#FFFCF6"/>
        </svg>
    `,t=()=>`
    <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12.3684L22 1L12.0526 25L9.8421 14.8947L1 12.3684Z" stroke="#F7F3EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    `,i=()=>`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14.4C18.624 14.4 24 16.912 24 20V24H0V20C0 16.912 5.376 14.4 12 14.4ZM22.4 20C22.4 17.792 17.744 16 12 16C6.256 16 1.6 17.792 1.6 20V22.4H22.4V20ZM12 0C13.4852 0 14.9096 0.589999 15.9598 1.6402C17.01 2.69041 17.6 4.11479 17.6 5.6C17.6 7.08521 17.01 8.50959 15.9598 9.5598C14.9096 10.61 13.4852 11.2 12 11.2C10.5148 11.2 9.09041 10.61 8.0402 9.5598C6.99 8.50959 6.4 7.08521 6.4 5.6C6.4 4.11479 6.99 2.69041 8.0402 1.6402C9.09041 0.589999 10.5148 0 12 0ZM12 1.6C10.9391 1.6 9.92172 2.02143 9.17157 2.77157C8.42143 3.52172 8 4.53913 8 5.6C8 6.66087 8.42143 7.67828 9.17157 8.42843C9.92172 9.17857 10.9391 9.6 12 9.6C13.0609 9.6 14.0783 9.17857 14.8284 8.42843C15.5786 7.67828 16 6.66087 16 5.6C16 4.53913 15.5786 3.52172 14.8284 2.77157C14.0783 2.02143 13.0609 1.6 12 1.6Z" fill="#FFFCF6"/>
    </svg>
    `,l=()=>`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.133 14.867 4 11 4C7.133 4 4 7.133 4 11C4 14.867 7.133 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#711010"/>
    </svg>

    `;!function(){let s=`
        <header class="header">
            <div class="header-content">
                <div style="margin-left: 35px; margin-right: 10px;">${e()}</div>
                <h2 class="logo"><a href="/">NaVino</a></h2>
                <ul class="header-navigation">
                    <li>
                        <div style="position: relative; width: 100%;">
                            <input type="text" class="search" placeholder="Chateau Tamagne" style="padding-left: 40px;">
                            <div class="search-icon" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px;">${l()}</div>
                        </div>
                    </li>
                    <li> ${t()}
                        <select class="option">
                        <option>\u{41C}\u{43E}\u{441}\u{43A}\u{432}\u{430}</option>
                        <option selected>\u{421}\u{430}\u{43D}\u{43A}\u{442}-\u{41F}\u{435}\u{442}\u{435}\u{440}\u{431}\u{443}\u{440}\u{433}</option>
                        </select>
                    </li> 
                    <li>
                        ${i()}
                        <a href="#">\u{412}\u{43E}\u{439}\u{442}\u{438}</a>
                    </li>                     
                </ul>
            </div>
        </header>
    `;document.getElementById("header-container").innerHTML=s}();