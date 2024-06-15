import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

function Auth() {
    return (
        <main>
            <div className="window">
                <div className="window-create-account">
                    <p>Авторизация</p>
                    <div className="fields-input">
                        <form action="" method="post">
                            <label for="email"></label>
                            <input type="text" id="email" name="email" placeholder="Email" autocomplete="off"/>
            
                            <label for="password"></label>
                            <input type="text" id="password" name="password" placeholder="Пароль" autocomplete="off"/>
            
                            <button type="submit">Войти</button>
                        </form>
                    </div>
                    <div class="auth-link"><Link class="link-auth" to="/create_account">Создать аккаунт</Link></div>
                </div>
            </div>
        </main>
    );
}

export default Auth;
