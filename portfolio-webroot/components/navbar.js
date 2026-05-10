class NavBar extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div id="navbar">
                <ul id="top-menu">
                    <li id="name"><a href="index.html"><strong>Jacob Scott</strong></a></li>
                    <button class="menu-toggle" aria-label="Toggle navigation menu">&#9776;</button>
                    <li><a href="index.html#projects">Projects</a>
                        <ul class="sub-menu">
                            <li><a href="page_unchained.html">Unchained: Tale of Enra</a></li>
                            <li><a href="page_bugnauts.html">Bugnauts!</a></li>
                            <li><a href="page_fireEmblemModding.html">Fire Emblem Edits and Modifications</a></li>
                            <li><a href="page_level_design.html">UE5 Level Design</a></li>
                            <li><a href="page_chimken_crusade.html">Chimken Crusade</a></li>
                            <li><a href="page_rps.html">Rock, Paper, Scissors, Shoot!</a></li>
                        </ul>
                    </li>
                    <li><a href="page_resume.html">Resume</a></li>
                    <li><a href="#">Design Docs</a>
                        <ul class="sub-menu">
                            <li><a href="page_unchained_designdocuments.html">Unchained: Tale of Enra</a></li>
                            <li><a href="page_bugnauts_designdocuments.html">Bugnauts!</a></li>
                        </ul>
                    </li>
                    <li><a href="page_about.html">About</a></li>
                    <li><a href="page_contact.html">Contact</a></li>
                </ul>
            </div>
        `;

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
