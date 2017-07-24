import React from 'react';

import { Carousel, WhiteSpace, WingBlank,Grid} from 'antd-mobile';
class GridExample extends React.Component {
  state = {
    data: ['', '', '',''],
    initialHeight: 400,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['0', '1', '2','3'],
      });
    }, 100);
  }
  render() {
  	var sty={"width":"100%",height:'3.5rem'}
  	var sty1={'margin':'0','padding':'0'}
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight} : {};
    return (
    	<div>
      <WingBlank style={sty1}>
        <Carousel
        
          className="my-carousel"
          autoplay={false}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
         
          
        >
          {this.state.data.map(ii => (
           
              <img
              	style={sty}
                src={`img/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                alt="icon"
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            
          ))}
        </Carousel>
      </WingBlank>
      
      </div>
    );
  }
}
export default GridExample;