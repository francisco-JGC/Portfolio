import './index.scss'
import BackgroundLayout from '../backgroundLayout'

export default function DefaultLayout ({ children }) {
    return (
        <BackgroundLayout>
            <div className="default-layout">
                {children}
            </div>
        </BackgroundLayout>
    )
}