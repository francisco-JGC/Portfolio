import './index.scss';

export default function Header() {
    const ITEMS_MENU = [
        {
            id: 1,
            name: 'Home',
            url: '/'
        },
        {
            id: 2,
            name: 'Services',
            url: '/services'
        },
        {
            id: 3,
            name: 'My works',
            url: '/works'
        },
        {
            id: 4,
            name: 'Contact me',
            url: '/contact'
        }
    ]

    document.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const headerHeight = header.offsetHeight;

        if (window.scrollY > headerHeight) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0';
        }
    });

    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <a href="/">
                            <h3>Chico Dev</h3>
                        </a>
                    </div>
                    <div className="header__menu">
                        <ul>
                            {ITEMS_MENU.map((item) => (
                                <li key={item.id}> <a href={item.url}>{item.name}</a> </li>
                            ))}
                        </ul>
                    </div>

                    <div className="header__menu-mobile">
                        <div className="header__menu-mobile__icon">
                            <label htmlFor="">
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                        <div className="header__menu-mobile__content">
                            {/* <ul>
                                {ITEMS_MENU.map((item) => (
                                    <li key={item.id}> <a href={item.url}>{item.name}</a> </li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}