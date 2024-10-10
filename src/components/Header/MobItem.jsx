import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Header.module.sass';
function MobItem ({ item }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className={cx(styles['menu-item'], { [styles.visible]: isActive })}>
      <p onClick={() => setIsActive(!isActive)}>
        {item.title}
        {item.subTitles ? <span></span> : null}
      </p>
      {item.subTitles ? (
        <>
          {isActive && (
            <ul>
              {item.subTitles?.map(subItem => (
                <li>
                  <Link to='/'>{subItem}</Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : null}
    </li>
  );
}
export default MobItem;
