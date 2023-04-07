import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg d-flex justify-content-around navbar-light mb-4" style={{ backgroundColor: "#e3f2fd" }}>
                <Link className='navbar-brand' to='/aforism'>Aforism.net</Link>
                <Link className='link-info text-decoration-none' to='/aforism'>Цитаты</Link>
                <Link className='link-info text-decoration-none' to='/facts'>Факты</Link>
                <Link className='link-info text-decoration-none' to='/advice'>Советы</Link>
                <Link className='link-info text-decoration-none' to='/jokes'>Шутки</Link>
            </nav>
        </header>
    )
}

export default Header