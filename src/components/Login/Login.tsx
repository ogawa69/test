import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Login.module.css'

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log(`Authorization success!`);
    navigate('/')
  };

  return (
    <div className={style.login}>
      <form className={style.login__form}>
        <h2 className={style.login__title}>Login</h2>
        <div className={style.login__container}>
          <label className={style.login__label}>Username:</label>
          <input
            className={style.login__input}
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={style.login__container}>
          <label className={style.login__label}>Password:</label>
          <input
            className={style.login__input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={style.login__button} onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;