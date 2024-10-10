import React from 'react';
import { Form, Formik, Field } from 'formik';
import { Link } from 'react-router-dom';
import CONSTANTS from './../../constants';
import styles from './SearchBlock.module.sass';
function SearchBlock () {
  const handleSearch = ({ values }) => {
    console.log('values', values);
  };
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.wrap}>
          <Formik initialValues={{ search: '' }} onSubmit={handleSearch}>
            <Form className={styles.form}>
              <span
                style={{
                  backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}/search-icon.svg`,
                }}
                className={styles['serch-icon']}
              ></span>
              <Field
                className={styles.input}
                name='search'
                type='text'
                placeholder='Search Over 200,000+ Premium Names'
              />
              <button type='submit' className={styles.btn}>
                <span
                  style={{
                    backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}/icon-arrow-long-right.svg`,
                  }}
                ></span>
              </button>
            </Form>
          </Formik>
          <div className={styles.tags}>
            <span>Popular searches</span>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to='/'>Tech</Link>
              </li>
              <li className={styles.item}>
                <Link to='/'>Clothing</Link>
              </li>
              <li className={styles.item}>
                <Link to='/'>Finance</Link>
              </li>
              <li className={styles.item}>
                <Link to='/'>Real Estate</Link>
              </li>
              <li className={styles.item}>
                <Link to='/'>Crypto</Link>
              </li>
              <li className={styles.item}>
                <Link to='/'>Short</Link>
              </li>
              <li className={styles.item}>
                <Link to='/'>One Word</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SearchBlock;
