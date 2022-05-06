import LoginPage from '../ligin-pages/login-page';
import style from './app.module.css';
import Feed from '../feed/feed';
import Header from '../header/header';

const App = () => {
  return (
    <div className={style['app-page']}>
      <Header />
      <div className={style.body}>
        <LoginPage />
        <Feed />
      </div>
    </div>
  );
};

export default App;
