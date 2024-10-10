import styles from './Topinfo.module.sass';
import { Link } from 'react-router-dom';
function Topinfo () {
  return (
    <div className={styles.container}>
      <a to='https://www.atom.com/how-it-works' className={styles.link}>
        Squadhelp is now Atom
        <span className={styles['sub-text']}> – where everything starts!</span>
        <span className={styles.btn}>Learn More</span>
      </a>
    </div>
  );
}
export default Topinfo;
