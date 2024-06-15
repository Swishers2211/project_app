import React, { useRef, useEffect } from "react";
import "../App.css";
import "../Css/Chat.css";
import { Link } from "react-router-dom";

function Chat() {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // При монтировании и обновлении скроллим к последнему сообщению
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="window">
        <div className="chat-window">
          <div className="header-chat-window">
            <nav className="nav-user">
              <Link className="user-image" to="#">
                <img
                  className="user-image"
                  src="default_user_img.png"
                  alt="Фото пользователя"
                />
              </Link>
              <Link className="username" to="#">
                Sw11shers
              </Link>
            </nav>
          </div>
          <div className="messages" style={{ flexDirection: "column-reverse" }}>
            <div className="first-user-messages">
              <ul className="ul-first-user-msg">
                <li className="li-fisrt-user-msg">
                  <Link className="img-first-user" to="#">
                    <img
                      className="img-first-user"
                      src="default_user_img.png"
                      alt="Фото пользователя"
                    />
                  </Link>
                  <p>Привет, как дела?</p>
                </li>
              </ul>
            </div>
            <div className="second-user-messages">
              <ul className="ul-second-user-msg">
                <li className="li-second-user-msg">
                  <Link className="img-second-user" to="#">
                    <img
                      className="img-second-user"
                      src="default_user_img.png"
                      alt="Фото пользователя"
                    />
                  </Link>
                  <p>Привет, хорошо у тебя как?</p>
                </li>
              </ul>
            </div>
            <div className="second-user-messages">
              <ul className="ul-second-user-msg">
                <li className="li-second-user-msg">
                  <Link className="img-second-user" to="#">
                    <img className="img-second-user" src="default_user_img.png" alt="Фото пользователя"/>
                  </Link>
                  <p>Что делаешь?</p>
                </li>
              </ul>
            </div>
            <div className="second-user-messages">
              <ul className="ul-second-user-msg">
                <li className="li-second-user-msg">
                  <Link className="img-second-user" to="#">
                    <img className="img-second-user" src="default_user_img.png" alt="Фото пользователя"/>
                  </Link>
                  <p>Что делаешь?</p>
                </li>
              </ul>
            </div>
            <div className="second-user-messages">
              <ul className="ul-second-user-msg">
                <li className="li-second-user-msg">
                  <Link className="img-second-user" to="#">
                    <img className="img-second-user" src="default_user_img.png" alt="Фото пользователя"/>
                  </Link>
                  <p>Что делаешь?</p>
                </li>
              </ul>
            </div>
            <div className="second-user-messages">
              <ul className="ul-second-user-msg">
                <li className="li-second-user-msg">
                  <Link className="img-second-user" to="#">
                    <img className="img-second-user" src="default_user_img.png" alt="Фото пользователя"/>
                  </Link>
                  <p>Что делаешь?</p>
                </li>
              </ul>
            </div>
            <div className="second-user-messages">
              <ul className="ul-second-user-msg">
                <li className="li-second-user-msg">
                  <Link className="img-second-user" to="#">
                    <img className="img-second-user" src="default_user_img.png" alt="Фото пользователя"/>
                  </Link>
                  <p>Что делаешь?</p>
                </li>
              </ul>
            </div>
            <div className="second-user-messages">
              <ul className="ul-second-user-msg">
                <li className="li-second-user-msg">
                  <Link className="img-second-user" to="#">
                    <img className="img-second-user" src="default_user_img.png" alt="Фото пользователя"/>
                  </Link>
                  <p>Что делаешь?</p>
                </li>
              </ul>
            </div>
            <div className="second-user-messages">
              <ul className="ul-second-user-msg">
                <li className="li-second-user-msg">
                  <Link className="img-second-user" to="#">
                    <img className="img-second-user" src="default_user_img.png" alt="Фото пользователя"/>
                  </Link>
                  <p>Что делаешь?</p>
                </li>
              </ul>
            </div>
            <div className="second-user-messages">
              <ul className="ul-second-user-msg">
                <li className="li-second-user-msg">
                  <Link className="img-second-user" to="#">
                    <img className="img-second-user" src="default_user_img.png" alt="Фото пользователя"/>
                  </Link>
                  <p>Что делаешь?</p>
                </li>
              </ul>
            </div>
            <div className="second-user-messages">
              <ul className="ul-second-user-msg">
                <li className="li-second-user-msg">
                  <Link className="img-second-user" to="#">
                    <img className="img-second-user" src="default_user_img.png" alt="Фото пользователя"/>
                  </Link>
                  <p>Что делаешь?</p>
                </li>
              </ul>
            </div>
            <div className="first-user-messages">
              <ul className="ul-first-user-msg">
                <li className="li-fisrt-user-msg">
                  <Link className="img-first-user" to="#">
                    <img
                      className="img-first-user"
                      src="default_user_img.png"
                      alt="Фото пользователя"
                    />
                  </Link>
                  <p>Привет, как дела?фыыыыыыфсфыотиисолфсшщфысщшфыстщшфтсшфытстфщшстшщфтсшщфтышщстшщытшщсфтышщстшыфштщс</p>
                </li>
              </ul>
            </div>
            <div ref={messagesEndRef}></div>
          </div>
          <div className="send-message" autoComplete="off">
            <form action="" method="post">
              <label htmlFor="send-message"></label>
              <input
                type="text"
                id="message"
                name="input-message"
                placeholder="Сообщение"
                autoComplete="off"
              />

              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Chat;
