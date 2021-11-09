import React, { useContext } from 'react';
import { AuthContext } from "../context";

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <form onSubmit={login} className="border border-primary" style={{padding: '20px'}}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Введите email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className ="form-text">Вводите что угодно в обоих полях(не реализован на бэке)</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" class="form-label">Введите пароль</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className ="form-check-label" for="exampleCheck1">Запомнить</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Login;