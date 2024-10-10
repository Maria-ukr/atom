import React, { useState } from 'react';
import cx from 'classnames';
import questions from './questions';
import styles from './Questions.module.sass';
import QuestionsList from './QuestionsList';
function Questions () {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index, id) => {
    setActiveTab(index);
    const toScrollElement = document.getElementById(id);
    toScrollElement.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h3>Frequently Asked Questions</h3>
        <ul className={styles.tabs}>
          {questions.map((item, index) => (
            <li
              key={item.id}
              className={cx(styles.tab, {
                [styles.activ]: activeTab === index,
              })}
              onClick={() => handleClick(index, item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <QuestionsList />
      </div>
    </div>
  );
}
export default Questions;
