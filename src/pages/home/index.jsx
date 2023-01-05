import './index.scss'
import DefaultLayout from "../../components/defaultLayout"
import backgroundHome from "../../assets/img/background-home.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HombePage () {
  return (
    <DefaultLayout>
        <div className="home-page">
            <div className="content-home-page">
              <div className="content-left">
                  <small>Hi, There!</small>
                  <h1>I'm <span className="dev">Francisco Garcia</span> <br /> Full Stack Web Developer</h1>
                  <br />
                  <p>
                    I'am a web developer with a passion for creating beautiful and functional websites. I have experience building websites from scratch, as well as maintaining and improving existing websites.
                  </p>
                  <br />
                  {/* download cv button */}
                  <button>
                    Download CV
                  </button>
              </div>

              <div className="content-right">
                <img src={backgroundHome} alt="background-home" />

                <div className="content-info">
                  <div className="info-experence">
                    <i class="fa-solid fa-star"></i>
                    <h4>+2 Years</h4>
                    <small>Experience</small>
                  </div>
                </div>
              </div>
            </div>


        </div>
    </DefaultLayout>
  )
}