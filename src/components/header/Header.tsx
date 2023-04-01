import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg d-flex justify-content-around navbar-light mb-4" style={{ backgroundColor: "#e3f2fd" }}>

                <Link className='navbar-brand' to='/'>Aforism.net</Link>
                <Link className='link-info text-decoration-none' to='/'>Цитаты</Link>
                <Link className='link-info text-decoration-none' to='/advice'>Советы</Link>
                <Link className='link-info text-decoration-none' to='/jokes'>Шутки</Link>
                <Link className='link-info text-decoration-none' to='/facts'>Факты</Link>
                <form className="form-inline d-flex flex-row">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success ms-2" type="submit">Поиск</button>
                </form>
            </nav>
        </header>
    )
}

export default Header