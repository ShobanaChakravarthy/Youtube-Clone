import { Avatar } from '@material-ui/core'
import { Apps, Menu, Notifications, Search, VideoCall } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
    const [inp, setInp] = useState(""); 
    return (
        <div className="header">
            <div className="header__left">
                <Menu/>
                <Link to="/">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                        alt="Youtube logo" 
                        className="header__image"
                    />
                </Link>
            </div>
            <div className="header__middle">
                <input onChange={e=>setInp(e.target.value)} value={inp} placeholder="Search" type="text"/>
                <Link to={`/search/${inp}`}>
                    <Search className="header__inputButton"/>
                </Link>
            </div>
            <div className="header__right">
                <VideoCall className="header__icon"/>
                <Apps className="header__icon"/>
                <Notifications className="header__icon"/>
                <Avatar
                    alt="Shobana Chakravarthy"
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-SU7EwK0UpoGiqfh7PPHBKzxMP4qlVTBKzyxXf=s32-c-mo"
                />
            </div>
        </div>
    )
}

export default Header
