import React from 'react';
import styles from './HowDoes.module.sass';
function HowDoes () {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <p className={styles.stiker}>World's #1 Naming Platform</p>
            <h1>How Does Atom Work?</h1>
            <p className={styles.text}>
              Atom helps you come up with a great name for your business by
              combining the power of crowdsourcing with sophisticated technology
              and Agency-level validation services.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles['video-wrap']}>
              <iframe
                src='https://iframe.mediadelivery.net/embed/239474/327efcdd-b1a2-4891-b274-974787ae8362?autoplay=false&loop=false&muted=false&preload=true&responsive=true'
                title='How Does Atom Work?'
                allow='accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;'
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HowDoes;
