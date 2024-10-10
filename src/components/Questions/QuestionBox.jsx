import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Questions.module.sass';
function QuestionBox ({ children }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className={cx(styles.item, { [styles.open]: open })}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
export default QuestionBox;
