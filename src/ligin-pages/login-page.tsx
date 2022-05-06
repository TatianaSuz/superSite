import style from './login-page.module.css';
import cn from 'classnames';
import React, { useState } from 'react';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState(false);
  const inputType = visibility ? 'text' : 'password';

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmitForm = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('password', password);
  };

  return (
    <div className={style['login-form']}>
      <form action="" onSubmit={handleSubmitForm} className={style.form}>
        <label>
          Имя пользователя:
          <input
            type="text"
            name="name"
            placeholder="Введите имя"
            value={name}
            onChange={changeName}
          />
        </label>
        <label className={style['password-label']}>
          Пароль:
          <div className={style['input-container']}>
            <input
              type={inputType}
              name="password"
              placeholder="Введите пароль"
              value={password}
              onChange={changePassword}
            />
            <a
              href="#"
              className={cn(style['password-control'], {
                [style.view]: visibility,
              })}
              onClick={() => {
                setVisibility(!visibility);
              }}
            />
          </div>
        </label>
        <br />
        <input type="submit" value="Login" className={style['login-btn']} />
      </form>
    </div>
  );
};

export default LoginPage;
