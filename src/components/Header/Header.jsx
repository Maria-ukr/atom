import React, { useState } from 'react';
import cx from 'classnames';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import menuItems from './menu.js';
import MenuItem from './MenuItem.jsx';
import MobItem from './MobItem.jsx';
function Header () {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };
  const onSearch = ({ values }) => {
    console.log(values);
  };
  const classMenu = cx(styles.hamburger, { [styles.show]: show === true });
  const mobileNav = (
    <nav>
      <ul className={styles['mobile-menu']}>
        {menuItems &&
          menuItems.map(item => <MobItem item={item} key={item.title} />)}
      </ul>
    </nav>
  );
  return (
    <header className={styles.header}>
      <div className={cx(styles.wrapper, styles.container)}>
        <div className={classMenu} onClick={showMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to='/' className={styles.logo}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}/logo-atom.svg`}
            alt='logo'
          />
        </Link>
        <nav>
          <ul className={styles.menu}>
            {menuItems &&
              menuItems.map(item => <MenuItem item={item} key={item.title} />)}
          </ul>
        </nav>
        <ul className={styles['right-side']}>
          <li className={styles.item}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}/profile-icon.svg`}
              alt='profile-icon'
            />
            <ul>
              <li>
                <span
                  style={{
                    backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}/icon-account.svg`,
                  }}
                ></span>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <span
                  style={{
                    backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}/icon-account.svg`,
                  }}
                ></span>
                <Link to='/registration'>Signup</Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}/call.svg`}
              alt='phone-icon'
            />
            <ul>
              <li>
                <span
                  style={{
                    backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}/phone-icon.svg`,
                  }}
                ></span>
                <Link to='tel:1-877-355-3585'>(877) 355-3585</Link>
              </li>
              <li>
                <span
                  style={{
                    backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}/icon-chat.svg`,
                  }}
                ></span>
                <Link to='/'>Chat</Link>
              </li>
              <li>
                <span
                  style={{
                    backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}/icon-email.svg`,
                  }}
                ></span>
                <Link to='mailto:service@atom.com'>Email</Link>
              </li>
              <li>
                <span
                  style={{
                    backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}/icon-help.svg`,
                  }}
                ></span>
                <Link to='/'>Help Desk</Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}/heart-icon.svg`}
              alt='heart-icon'
            />
          </li>
          <li className={styles.item}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}/search-icon.svg`}
              alt='search-icon'
            />
          </li>
        </ul>
      </div>
      <div className={cx(styles.inner, { [styles.visible]: show === true })}>
        <div className={styles.container}>
          <Formik initialValues={{ search: '' }} onSubmit={onSearch}>
            <Form className={styles.form}>
              <span
                style={{
                  backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}/search-icon.svg`,
                }}
                className={styles['serch-icon']}
              ></span>
              <input
                type='text'
                name='search'
                placeholder='Search Over 200,000+ Premium Names'
              />
              <button type='submit' className={styles.btn}>
                <span
                  style={{
                    backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}/icon-arrow-long-right.svg`,
                  }}
                ></span>
              </button>
            </Form>
          </Formik>
          {mobileNav}
        </div>
      </div>
    </header>
  );
}
export default Header;
