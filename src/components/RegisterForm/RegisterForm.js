import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useSelector(state => state.auth);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name: name, email: email, password: password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {error && <h2>An error occurred: {error.message}</h2>}
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Ім'я користувачая
          <input
            className={css.input}
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
          />
        </label>
        <label className={css.label}>
          Емейл
          <input
            className={css.input}
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          />
        </label>
        <label className={css.label}>
          Пароль
          <input
            className={css.input}
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            pattern=".{7,16}"
          />
        </label>
        <button className={css.button} type="submit">
          Зареєструватися
        </button>
      </form>
    </>
  );
};
