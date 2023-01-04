import './index.scss'
import BackgroundLayout from '../backgroundLayout'
import Header from '../header'

export default function DefaultLayout ({ children }) {
    return (
        <BackgroundLayout>
            <Header />
            <div className="default-layout">
                {children}
            </div>
        </BackgroundLayout>
    )
}