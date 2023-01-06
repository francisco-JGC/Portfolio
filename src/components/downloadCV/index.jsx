import './index.scss'
import CV from '../../assets/cv/CV-Francisco_Garcia.pdf';

export default function DownloadCV(){
    return (
        <a href={ CV } className="" download="CV-Francisco_Garcia" target="_self">
            <button className="download-cv">
                <span>Download CV</span>
            </button>
        </a>
    )
}