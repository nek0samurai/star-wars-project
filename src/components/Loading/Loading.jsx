import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import styles from './Loading.module.css';
const Loading = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#fff"
      wrapperStyle={{}}
      wrapperClass={styles.loading}
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};

export default Loading;
