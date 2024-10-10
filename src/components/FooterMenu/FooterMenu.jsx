import React from 'react';
import styles from './FooterMenu.module.sass';
import footerMenu from './footerMenu.js';
import Box from './Box.jsx';
function FooterMenu () {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.wrap}>
          {footerMenu.map(item => (
            <Box item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default FooterMenu;
