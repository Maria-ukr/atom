import React, { useState } from 'react';
import styles from './FooterMenu.module.sass';
import ListItems from './ListItems.jsx';
function Box ({ item }) {
  const [show, setShow] = useState(false);
  return (
    <div className={`${styles[item.title]}`}>
      <h5 className={styles.title} onClick={() => setShow(!show)}>
        {item.title}
        <span></span>
      </h5>
      <ListItems list={item.items} show={show} />
    </div>
  );
}
export default Box;
