import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from './../../../constants';
import styles from './WaysToUse.module.sass';
function Box (props) {
  const { icon, title, text, linkto, link } = props.item;
  return (
    <li className={styles.item}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/${icon}.svg`} alt={title} />
      <h6>{title}</h6>
      <p>{text}</p>
      <Link to={linkto} className={styles.link}>
        {link}
        <span
          style={{
            backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}icon-arrow-long-right.svg`,
          }}
        ></span>
      </Link>
    </li>
  );
}
export default Box;
