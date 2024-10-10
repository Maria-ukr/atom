import React from 'react';
import CONSTANTS from './../../constants';
import styles from './Steps.module.sass';
function Steps () {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.wrap}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}/present.svg`}
            alt='present'
          />
          <h3>How Do Naming Contests Work?</h3>
          <ul className={styles.list}>
            {CONSTANTS.STEPS.map(item => (
              <li key={item.step}>
                <span>{item.step}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
export default Steps;