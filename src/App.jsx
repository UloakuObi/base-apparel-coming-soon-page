import btnArrowIcon from "../images/icon-arrow.svg"


export default function App() {

    return (
        <main>

            {/* Left column Desktop */}
            
            <header>
                <div className="logo-wrapper">
                    <img src="../images/logo.svg" alt="brand logo"/>
                </div>
            </header>

            <section className="main-content">
                <div className="signup-msg">
                    <h1><span>We're</span> Coming Soon!</h1>
                    <p className="welcome-msg">
                        Hello fellow shoppers! We're currently building our new fashion store. 
                        Add your email below to stay up-to-date with announcements and our launch deals.
                    </p>
                    <div className="email-box">
                        <input type="email" name="email" placeholder="Email Address"/>
                        <button> 
                            <img src={btnArrowIcon} alt="icon" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Right Column Desktop */}
            <section className="hero-img">
                <picture>
                        {/* -- Mobile image --*/}
                        <source media="(max-width: 867px)" srcset="../images/hero-mobile.jpg" />
                        
                        {/* -- Desktop image -- */}
                        <source media="(min-width: 868px)" srcset="../images/hero-desktop.jpg" />
                        
                        {/* -- Fallback (in case browser doesn’t support <picture>) -- */}
                        <img src="../images/hero-desktop.jpg" alt="Hero image" />
                </picture>
                {/* <img src="" alt="#"/> */}
            </section>
        </main>
    )
}