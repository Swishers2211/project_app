import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

function Register() {
    return (
        <main>
            <div className="window">
                <div className="window-create-account">
                    <p>Создание аккаунта</p>
                    <div className="fields-input">
                        <form action="#" method="post">
                            <label for="email"></label>
                            <input type="text" id="email" name="email" placeholder="Email" autocomplete="off"/>
            
                            <label for="password"></label>
                            <input type="text" id="password" name="password" placeholder="Пароль" autocomplete="off"/>
            
                            <button type="submit">Создать аккаунт</button>
                        </form>
                    </div>
                    <div class="auth-link"><Link class="link-auth" to="/auth">Войти</Link></div>
                </div>
            </div>
        </main>
    );
}

export default Register;
