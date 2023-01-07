import './index.scss'

export default function CardMyService(){
    const ITEMS_SERVICES = [
        {
            icon: 'fas fa-server',
            title: 'Full Stack',
            description: 'backend and frontend development, construction of the entire stack database for the construction of a web application and in charge of continuous system improvements'
        },
        {
            icon: 'fas fa-code',
            title: 'Back End',
            description: '100% safe, efficient and error-free backend development, building it with the latest technologies and using the best development practices'
        },
        {
            icon: 'fas fa-laptop-code',
            title: 'Front End',
            description: 'I have experience building websites from scratch. I can help you build a beautiful and functional website.'
        }
    ]

    return (
        <div className="content-my-services">
            <div className="title">
                <h2>My Services</h2>
            </div>
            {
                ITEMS_SERVICES.map((item, index) => (
                    <div className={`service service-${item.title.toLowerCase().replace(' ', '_')}`} key={index}>
                        <div className="icon">
                            <i className={item.icon}></i>
                        </div>
                        
                        <h2>{item.title}</h2>

                        <div className="description">
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}