import React from 'react';
import CONSTANTS from './../../../constants';
import styles from './WaysToUse.module.sass';
import Box from './Box';
function WaysToUse () {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.stiker}>Our Services</p>
          <h2>3 Ways To Use Atom</h2>
          <p className={styles.subtext}>
            Atom offers 3 ways to get you a perfect name for your business.
          </p>
          <ul className={styles.list}>
            {CONSTANTS.WAYS_TO_USE_ITEMS.map(item => (
              <Box item={item} key={item.title} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
export default WaysToUse;
