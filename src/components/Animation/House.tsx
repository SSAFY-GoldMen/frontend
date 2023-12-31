import Lottie from 'lottie-react';

import house from '@/assets/lottie/house.json';

const style = {
  width: '300px',
};

function House() {
  return <Lottie animationData={house} style={style} />;
}

export default House;
