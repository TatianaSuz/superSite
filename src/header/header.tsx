import style from './header.module.css';

const Header = () => {
  const tegA = () => {
    return <a href="#">Me</a>;
  };
  return (
    <div className={style.headerWrap}>
      <div className={style.header}>
        <h1 className={style['site-name']}>SuperSite</h1>
        {tegA()}
      </div>
    </div>
  );
};

export default Header;
