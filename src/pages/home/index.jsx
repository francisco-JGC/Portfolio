import './index.scss'
import DefaultLayout from "../../components/defaultLayout"
import backgroundHome from "../../assets/img/background-home.png"

// component
import DownloadCV from '../../components/downloadCV'
import CardMyService from '../../components/cardsMyServices'
import ContactMeForm from '../../components/contactMeForm'

export default function HombePage () {

  return (
    <DefaultLayout>
        <div className="home-page">
            <div className="content-home-page">
              <div className="content-left">
                  <div className="text">
                    <small>Hi, There!</small>
                    <h1>I'm <span className="dev">Francisco Garcia</span> <br /> Full Stack Web Developer</h1>
                    <br />
                    <p>
                    I am a web developer with a passion for creating beautiful and functional websites. I have experience building websites from scratch.
                    </p>
                  </div>
                  <br />
                  <br />
                  {/* download cv button */}
                  <DownloadCV />
              </div>

              <div className="content-right">
                <img src={backgroundHome} alt="background-home" />
              </div>
            </div>

            {/* my services */}
            <CardMyService />

            {/* contact me */}
            <ContactMeForm />
            
        </div>
    </DefaultLayout>
  )
}