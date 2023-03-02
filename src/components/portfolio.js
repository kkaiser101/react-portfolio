

function portfolioPage() {
    return (
    <body>
    <header>
        <div class="photo shrink">
        <img src="./assets/prof-pic.jpg" alt="Ken Kaiser profile picture"></img>
        </div>
        <h1>
            <section>Ken Kaiser</section>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#my-work">My Work</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </h1>
    </header>

    <main>
        <section>
            <article>
                <div id="about-me" class = "about-me">
                <h2>About Me</h2>
                <p>Ken Kaiser is a software engineer that specializes in web development. Prior to becoming a software engineer, worked for three years within the financial services industry as a licenensed life, health, and accidental insurance broker. After graduating from Arizona State University with a bachelors degree in Business Law, Ken became interested in working within the world of supply chain management and was told that the field was growing and was only going to open more opportunities in the future. After applying to numerous supply chain related jobs, a company finally gave him the chance to enter the industry despite not having a degree in SCM. It was while working at this new job when Ken discovered why the world's supply chain still hasn't recovered since the Pandemic; outdated technology and business practices. This inspired Ken to eventually learn full stack web programming in hopes of working on or creating software to fix the supply chain.</p>
                </div>
            </article>
        </section>

        <section>
            <article>
            <div id="my-work" class = "my-work">
                <h2>My Work</h2>
                <div class="Project 1">
                    <element>Project1</element>
                    <img src="./assets/comingsoonyellow.jpg" alt="coming soon"></img>
                </div>
                <div class="Project 2">
                    <element>Project2</element>
                    <img src="./assets/comingsoonyellow.jpg" alt="coming soon"></img>
                </div>
                <div class="Project 3">
                    <element>Project3</element>
                    <img src="./assets/comingsoonyellow.jpg" alt="coming soon"></img>
                </div>
                <div class="Project 4">
                    <element>Project4</element>
                    <img src="./assets/comingsoonyellow.jpg" alt="coming soon"></img>
                </div>
            </div>
            </article>
        </section>

        <section>
            <article>
                <div id="contact-me" class = "contact-me">
                <h2>Contact Me</h2>
                <ul>
                    <li>Phone: 562-480-0598</li>
                    <li>Email: kenkaiser19@gmail.com</li>
                </ul>
                </div>
            </article>
        </section>


    </main>
</body>
    );
}

export default portfolioPage;
