import React from 'react';

import styles from './LoaderBlock.module.css';
import Loader from 'react-loader-spinner';

const LoaderBlock = () => {
  return (
    <div className={styles.LoaderBlock}>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderBlock;
