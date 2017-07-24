import React from 'react';

import { Grid } from 'antd-mobile';

const data = Array.from(new Array(4)).map((_val, i) => ({
  icon: `img/0${i+1}.png`,
  text: `花艺${i}`,
}));
const GridExample = () => (
  <div style={{height:'1rem','margin-top':'0.1rem'}}> 
    <Grid data={data} />   
  </div>
);
export default GridExample;