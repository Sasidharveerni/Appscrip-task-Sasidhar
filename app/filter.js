import React, { useState } from 'react';
import styles from './filter.module.css';

const Filter = ({ text, option1, option2, option3 }) => {
  const [showCheckboxes, setShowCheckboxes] = useState(false);

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  return (
    <>
      <div onClick={toggleCheckboxes}>
        <h5 style={{cursor: 'pointer'}}>{text}</h5>
        <p>ALL</p>
      </div>
      {showCheckboxes && (
        <div className={styles.filters}>
            <div>

          <input type="checkbox" id="customizable1"  />
          <label htmlFor="customizable1" >{option1}</label>
            </div>
         <div>

          <input type="checkbox" id="customizable2"  />
          <label htmlFor="customizable2" >{option2}</label>
         </div>
         <div>

          <input type="checkbox" id="customizable3"  />
          <label htmlFor="customizable3" >{option3}</label>
         </div>
        </div>
      )}
    </>
  );
};

export default Filter;
