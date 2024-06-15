import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Css/Chats.css";

function Chats() {
    return (
        <main className="main-chats">
            <div className="window-chats">
                <div className="list-chats">
                    <Link className="chat-link" to='/chat'>
                        <div className="chat-item">
                            <div className="left-info-group">
                                <img className="chat-img" src="default_user_img.png" alt="User" />
                                <div className="text-info">
                                    <h3 className="nickname-chat">Nickname</h3>
                                    <p className="last-text-message">last Text message</p>
                                </div>
                            </div>
                            <div className="right-info-group">
                                <p className="time">00:00</p>
                                <p className="number-new-messages">1</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="chat-link" to='/chat'>
                        <div className="chat-item">
                            <div className="left-info-group">
                                <img className="chat-img" src="default_user_img.png" alt="User" />
                                <div className="text-info">
                                    <h3 className="nickname-chat">Nickname</h3>
                                    <p className="last-text-message">last Text message</p>
                                </div>
                            </div>
                            <div className="right-info-group">
                                <p className="time">00:00</p>
                                <p className="number-new-messages">1</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="chat-link" to='/chat'>
                        <div className="chat-item">
                            <div className="left-info-group">
                                <img className="chat-img" src="default_user_img.png" alt="User" />
                                <div className="text-info">
                                    <h3 className="nickname-chat">Nickname</h3>
                                    <p className="last-text-message">last Text message</p>
                                </div>
                            </div>
                            <div className="right-info-group">
                                <p className="time">00:00</p>
                                <p className="number-new-messages">1</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="chat-link" to='/chat'>
                        <div className="chat-item">
                            <div className="left-info-group">
                                <img className="chat-img" src="default_user_img.png" alt="User" />
                                <div className="text-info">
                                    <h3 className="nickname-chat">Nickname</h3>
                                    <p className="last-text-message">last Text message</p>
                                </div>
                            </div>
                            <div className="right-info-group">
                                <p className="time">00:00</p>
                                <p className="number-new-messages">1</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="chat-link" to='/chat'>
                        <div className="chat-item">
                            <div className="left-info-group">
                                <img className="chat-img" src="default_user_img.png" alt="User" />
                                <div className="text-info">
                                    <h3 className="nickname-chat">Nickname</h3>
                                    <p className="last-text-message">last Text message</p>
                                </div>
                            </div>
                            <div className="right-info-group">
                                <p className="time">00:00</p>
                                <p className="number-new-messages">1</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="chat-link" to='/chat'>
                        <div className="chat-item">
                            <div className="left-info-group">
                                <img className="chat-img" src="default_user_img.png" alt="User" />
                                <div className="text-info">
                                    <h3 className="nickname-chat">Nickname</h3>
                                    <p className="last-text-message">last Text message</p>
                                </div>
                            </div>
                            <div className="right-info-group">
                                <p className="time">00:00</p>
                                <p className="number-new-messages">1</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="chat-link" to='/chat'>
                        <div className="chat-item">
                            <div className="left-info-group">
                                <img className="chat-img" src="default_user_img.png" alt="User" />
                                <div className="text-info">
                                    <h3 className="nickname-chat">Nickname</h3>
                                    <p className="last-text-message">last Text message</p>
                                </div>
                            </div>
                            <div className="right-info-group">
                                <p className="time">00:00</p>
                                <p className="number-new-messages">1</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="chat-link" to='/chat'>
                        <div className="chat-item">
                            <div className="left-info-group">
                                <img className="chat-img" src="default_user_img.png" alt="User" />
                                <div className="text-info">
                                    <h3 className="nickname-chat">Nickname</h3>
                                    <p className="last-text-message">last Text message</p>
                                </div>
                            </div>
                            <div className="right-info-group">
                                <p className="time">00:00</p>
                                <p className="number-new-messages">1</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="chat-link" to='/chat'>
                        <div className="chat-item">
                            <div className="left-info-group">
                                <img className="chat-img" src="default_user_img.png" alt="User" />
                                <div className="text-info">
                                    <h3 className="nickname-chat">Nickname</h3>
                                    <p className="last-text-message">last Text message</p>
                                </div>
                            </div>
                            <div className="right-info-group">
                                <p className="time">00:00</p>
                                <p className="number-new-messages">1</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="chat-link" to='/chat'>
                        <div className="chat-item">
                            <div className="left-info-group">
                                <img className="chat-img" src="default_user_img.png" alt="User" />
                                <div className="text-info">
                                    <h3 className="nickname-chat">Nickname</h3>
                                    <p className="last-text-message">last Text message</p>
                                </div>
                            </div>
                            <div className="right-info-group">
                                <p className="time">00:00</p>
                                <p className="number-new-messages">1</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Chats;
