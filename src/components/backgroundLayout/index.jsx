import './index.scss'

export default function BackgroundLayout ({ children }) {
  return (
    <div className="background-layout">
        <div className="background-blur">
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
        </div>

        <div className="background-layout-content">
            {children}
        </div>
    </div>
  )
}