import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Добро пожаловать в Event CRM</h1>
      <p>
        Пожалуйста, <Link to="/login">войдите</Link> или{' '}
        <Link to="/register">зарегистрируйтесь</Link>, чтобы продолжить.
      </p>
    </div>
  );
};

export default HomePage;
