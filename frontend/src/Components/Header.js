import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

function Header() {
    return (
        <>
            <header className='Header'>
                <div className='left-group'>
                    <nav className='left-nav-btn'>
                        <ul className='left-btn'>
                            <li className='li-btn left-btn'>
                                <Link className='left-btn logo' to='/'>Logo</Link>
                            </li>
                            <li className='li-btn left-btn'>
                                <Link className='left-btn news' to='/news'>Новости</Link>
                            </li>
                            <li className='li-btn left-btn'>
                                <Link className='left-btn services' to='/services'>Сервисы</Link>
                            </li>
                            <li className='li-btn left-btn'>
                                <Link className='left-btn premium' to='/premium'>Premium</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* if user.is_authenticated */}
                <div className='right-group-number-2'>
                    <nav className='right-nav-btn-number-2'>
                        <ul className='right-btn-number-2'>
                            <li className='li-btn-number-2 right-btn-number-2'>
                                <Link className='right-btn-number-2 chats' to='/chats'><img className="right-btn-number-2 chats" src="chats.png" alt='chat' /></Link>
                            </li>
                            <li className='li-btn-number-2 right-btn-number-2'>
                                <Link className='right-btn-number-2 notifications' to='/notifications'><img className="right-btn-number-2 notifications" src="notifications.png" alt='notifications' /></Link>
                            </li>
                            <li className='li-btn-number-2 right-btn-number-2'>
                                <Link className='right-btn-number-2 friends' to='/friends'><img className="right-btn-number-2 friends" src="friends.png" alt='friends' /></Link>
                            </li>
                            <li className='li-btn-number-2 right-btn-number-2'>
                                <Link className='right-btn-number-2 profile' to='/profile'><img className="right-btn-number-2 profile" src="default_user_img.png" alt='user_img' /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* else */}
                {/* <div className='right-group'>
                    <nav className='right-nav-btn'>
                        <ul className='right-btn'>
                            <li className='li-btn right-btn'>
                                <Link className='right-btn auth' to='/auth'>Авторизация</Link>
                            </li>
                            <li className='li-btn right-btn'>
                                <Link className='right-btn create-account' to='/create_account'>Создать аккаунт</Link>
                            </li>
                        </ul>
                    </nav>
                </div> */}
                {/* endif */}
            </header>

        </>
    );
}

export default Header;
