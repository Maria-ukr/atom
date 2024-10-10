import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';
function MenuItem ({ item }) {
  return (
    <li className={styles['menu-item']}>
      <Link to='/'>{item.title}</Link>
      {item.subTitles ? (
        <>
          <span></span>
          <ul className={styles['sub-menu']}>
            {item.subTitles?.map(subItem => (
              <li>
                <Link to='/'>{subItem}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </li>
  );
}
export default MenuItem;
