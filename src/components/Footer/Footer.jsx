import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../constants';
import styles from './Footer.module.sass';
function Footer () {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.copyrights}>
            <p className={styles.rights}>Copyright © 2024 Atom.com</p>
            <p className={styles.dot}></p>
            <Link to='#' className={styles.link}>
              Consent Preferences
            </Link>
          </div>
          <a
            href='https://www.trustpilot.com/review/atom.com'
            className={styles.mark}
            target='_blank'
          >
            <div className={styles.pilot}>
              <p className={styles.strong}>Excellent</p>
              <p className={styles.stars}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </p>
              <p className={styles.subtext}>
                <span></span>Trustpilot
              </p>
            </div>
            <div className={styles.rate}>
              <p className={styles.strong}>4.6 / 5</p>
              <p className={styles.light}>based on 446 ratings</p>
            </div>
          </a>
          <div className={styles.socials}>
            <ul className={styles.list}>
              {CONSTANTS.SOCIALS.map(item => (
                <li key={item.label} className={styles.item}>
                  <Link to={item.link}>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}/${item.label}.svg`}
                      alt={item.label}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
