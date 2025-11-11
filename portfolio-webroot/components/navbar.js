class NavBar extends HTMLElement {
    constructor() {
        super();
        
        this.innerHTML = `
            <div id="navbar">
                <ul id="top-menu">
                    <li id="name"><a href="index.html"><strong>Jacob Scott</strong></a></li>
                    <button class="menu-toggle" aria-label="Toggle navigation menu">☰</button>
                    <li><a href="">Professional Projects</a>
                        <ul class="sub-menu">
                            <li><a href="page_unchained.html">Unchained</a></li>
                            <li><a href="page_bugnauts.html">Bugnauts!</a></li>
                        </ul>
                    </li>                    <li><a href="">Personal Projects</a>
                        <ul class="sub-menu">                            <li><a href="page_chimken_crusade.html">Chimken Crusade</a></li>
                            <li><a href="page_rps.html">Rock, Paper, Scissors, Shoot!</a></li>
                            <li><a href="page_level_design.html">Level Design</a></li>
                            <li><a href="page_fireEmblemModding.html">Reverse Engineering Fire Emblem</a></li>
                        </ul>
                    </li>
                    <li><a href="page_resume.html">Resume</a></li>
                    <li><a href="page_coming_soon.html">Contact</a></li>
                </ul>
            </div>
        `;

        // Add event listener for menu toggle
        const menuToggle = this.querySelector('.menu-toggle');
        const topMenu = this.querySelector('#top-menu');
        
        if (menuToggle && topMenu) {
            menuToggle.addEventListener('click', () => {
                topMenu.classList.toggle('active');
            });
        }
    }
}

customElements.define('nav-bar', NavBar);
