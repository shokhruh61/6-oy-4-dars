import React from 'react'

import './index.css'

import Darkor from '../images/darkor.svg';

function Header() {
    return (
        <div>

            <header>
                <div className="container header__container">

                    <div className="header__icons">
                        <img src={Darkor} alt="" />
                    </div>

                    <nav>
                        <ul className="nav--list">
                            <li className="nav--item"><a href="#">Vakansiyalar</a></li>
                            <li className="nav--item"><a href="#">Kandidatlar</a></li>
                            <li className="nav--item"><a href="#">Kompaniyalar</a></li>
                            <li className="nav--item"><a href="#">Xizmatlar</a></li>
                            <li className="nav--item"><a href="#">Ta’lim</a></li>
                        </ul>
                    </nav>

                    <div className="header__right">
                        <select >
                            <option value="o'zb">o'zb</option>
                            <option value="rus">rus</option>
                            <option value="eng">eng</option>
                            <option value="tad">tad</option>
                        </select>
                        <button>Boshlash</button>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header;
