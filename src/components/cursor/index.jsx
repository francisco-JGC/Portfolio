import './index.scss'

export default function Cursor () {
    document.addEventListener('mousemove', (e) => {

        if (window.innerWidth < 768) {return document.querySelector('.cursor').style.display = 'none' }


        let x = e.pageX
        let y = e.pageY
        const cursor = document.querySelector('.cursor')

        cursor.style.top = y + 'px'
        cursor.style.left = x + 'px'
    })

    document.addEventListener('mouseout', () => document.querySelector('.cursor').style.display = 'none')
    document.addEventListener('mouseover', () => {
        if (window.innerWidth < 768) {return document.querySelector('.cursor').style.display = 'none' }
        document.querySelector('.cursor').style.display = 'block'
    })

    document.addEventListener('click', () => {
        const cursor = document.querySelector('.cursor')
        cursor.classList.add('cursor--click')

        setTimeout(() => {
            cursor.classList.remove('cursor--click')
        }, 200)
    })

    // delete cursor on mobile

    return (
        <div className="cursor"></div>
    )
}