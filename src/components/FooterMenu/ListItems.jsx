import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import styles from './FooterMenu.module.sass';
function ListItems ({ list, show }) {
  return (
    <ul className={cx(styles.list, { [styles.visible]: show })}>
      {list.map(item => (
        <li className={styles.item}>
          <Link to='#'>{item}</Link>
        </li>
      ))}
    </ul>
  );
}
export default ListItems;
