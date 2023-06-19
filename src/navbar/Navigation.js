import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="containerNav">
            <div className="navigation">
                
                    <img className="navigation__left" src="/img/logo.png" alt="logo" />

               
                <div className="navigation__right">
                    <ul className="right__menu">
                        <li className="menu"><a href="/">Home</a></li>
                        <li className="menu"><a href="/wisatas">Wisata</a></li>
                        <li className="menu"><a href="/kuliners">Kuliner</a></li>
                        <li className="menu"><a href="/penginapans">Penginapan</a></li>
                    </ul>
                </div>
            </div>
            <div className="botNavbar">
                <div className="botNavbar__home">
                    <i class="fa fa-home"></i>
                    <a className="nodeco" href="/">Home</a>
                </div>
                <div className="botNavbar__wisata">
                <i class="fa fa-image"></i>
                <a className="nodeco" href="/wisatas">Wisata</a>
                </div>
                <div className="botNavbar__kuliner">
                <i class="fa fa-image"></i>
                <a className="nodeco" href="/kuliners">Kuliner</a>
                </div>
                <div className="botNavbar__penginapan">
                <i class="fa fa-image"></i>
                <a className="nodeco" href="/penginapans">penginapan</a>
                </div>
            </div>
        </div>
       
    )
}

export default Navigation
