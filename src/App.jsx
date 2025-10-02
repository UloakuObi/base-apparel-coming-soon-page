import btnArrowIcon from "../images/icon-arrow.svg"
import mobileHeroImg from "../images/hero-mobile.jpg"
import desktopHeroImg from "../images/hero-desktop.jpg"
import logoImg from "../images/logo.svg"



export default function App() {

    return (
        <main>

            {/* Left column Desktop */}
            
            <header>
                <div className="logo-wrapper">
                    <img src={logoImg} alt="brand logo"/>
                </div>
            </header>

            <section className="main-content">
                <div className="signup-msg">
                    <h1><span>We're</span> Coming Soon</h1>
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
                        <source media="(max-width: 867px)" srcset={mobileHeroImg} />
                        
                        {/* -- Desktop image -- */}
                        <source media="(min-width: 868px)" srcset={desktopHeroImg} />
                        
                        {/* -- Fallback (in case browser doesn’t support <picture>) -- */}
                        <img src={desktopHeroImg} alt="Hero image" />
                </picture>
                {/* <img src="" alt="#"/> */}
            </section>
        </main>
    )
}