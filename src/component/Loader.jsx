import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import '../style/loader.css';

const Loader = () => (
  <div className="loader-container">
   <ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#105e3c"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>
);

export default Loader;

 