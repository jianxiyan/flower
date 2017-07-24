import React from 'react';

import { Link} from 'react-router';


import { Tabs, WhiteSpace } from 'antd-mobile';



const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
class Particulars extends React.Component {
	state(){
		return{
			res:[]		
		}
	}
	componentWillMount(){
		var _this = this
		$.ajax({
			type:'post',
			url:'http://127.0.0.1:3000',
			async:true,
			data:{'type':'goods'},
			success:function(data){
				_this.setState({res:JSON.parse(data)[this.props.params.id]})
			}
		})
	}
	render() {
		var sty = {
			styz: {
				'background': 'white',
				'height': '100%',
			},
			stym: {
				'width': '100%',
				'height': '40vh',
			},
			styc: {
				'width': '100%',
				'height': '10vh',
				'padding': '0.1rem',
				'borderBottom': '2px solid #eee',
			},
			styl: {
				'width': '80%',
				'float': 'left',
			},
			styr: {
				'textAlign': 'center',
				'width': '20%',
				'float': 'right',
			},
			styd:{
				'width': '1.2rem',
				'height': '0.5rem',
				'lineHeight': '0.3rem',
				'padding': '0',
				'borderRadius': '0.08rem',
				'fontSize':'0.3rem',
			},
			styi:{
				'fontSize':'0.3rem',
			},
			styb:{
				'width':'20%',
				'textAlign': 'center',
				'lineHeight': '0.5rem',
				'fontSize':'0.3rem',
			},
			styn: {
				'width': '50%',
				'height': '0.3rem',
				'padding': '0',
				'margin': '0.05rem 0.08rem',
				'textAlign': 'center',
			},
			styq: {
				'height': '100%',
				'padding': '0.2rem 0.1rem',	
				'marginTop':'0.5rem'
			},
			styh: {
				'color': '#007b29',
				'fontSize': '0.35rem',
				'fontWeight':'100'
			},
			styh4: {
				'color': 'orangered',
				'padding': '0.1rem',
			},
			pjnr: {
				'padding': '0.05rem 0',
			},
			liuyan: {
				'width':'90%',
				'height':'100%',
				'padding': '0.1rem',
				'marginTop':'0.5rem'
			},
			texter: {
				'height':'60%',
				'margin': '0.3rem 0',
				'fontSize': '0.35rem',
				'padding': '0.1rem',
			},
			span: {
				'color': 'black',
				'marginRight': '0.1rem',
				'fontSize': '0.35rem'
			},
			
			styp: {
				'fontSize': '0.3rem',
				'margin':'0.2rem 0rem',
				'color': '#999',
			},
			styps:{
				'fontSize': '0.3rem',
				'paddingTop': '0.1rem',
				'lineHeight': '0.4rem',
			},
			styms:{
				'width': '1rem',
				'height':'1rem'
			},
			stypp:{
				'fontSize': '0.20rem',
				'paddingTop': '0.1rem',
				'lineHeight': '0.4rem',
				'marginLeft':'1rem',
			},
			stypl:{
				'margin':'0.2rem'
			},
			stybtn:{
				'width': '1rem',
			
				'fontSize': '0.3rem',
				'margin-left':'70vw',
				background:'none',
				color:'#000',
				borderColor:'#000',
				borderRadius:'0.05rem'
			}
		};
		var sty7 = {'color':'#333','font-size':'0.4rem',"height":'0.9rem','line-height':'0.7rem','color':'blue',right:'0.3rem'};
		return(
			<div className="body" stytle={sty.styz}>
			<header className="mui-bar mui-bar-nav" style={{'background':'rgba(255,255,255,1)','height':'0.9rem'}}>
						<a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style={sty1} onClick={function(){history.back()}}></a>
					    <h1 className="mui-title" style={{'font-size':'0.35rem',height:'0.9rem','line-height':'0.9rem'}}>我的</h1>
					    
				    	<a className="mui-icon mui-icon-search mui-icon-right-nav mui-pull-right" style={sty7}></a>
						
					</header>
       	<div style={{margin:'0.9rem'}}>
					<img src="img/QQ图片20170623102655.jpg" style={sty.stym}/>
				</div>
				<div style={sty.styc}>
					<div style={sty.styl}>
						<h4 style={sty.styh}>{this.state.res[0].title}</h4>
						<p style={sty.styp}>棉花的花语:<span>{this.state.res[0].wuyu}</span></p>
					</div>
			    <div style={sty.styr}>
			   		<p style={{fontSize:'0.4rem',color:'#007b29',margin:'0.09rem 0',fontWeight:'100'}}>{this.state.res[0].price}￥</p>
			   		<div className="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='100' style={sty.styd} >
							  <button className="mui-btn mui-numbox-btn-minus" type="button" style={sty.styb}>-</button>
							  <input className="mui-numbox-input" type="number" style={sty.styi}/>
							  <button className="mui-btn mui-numbox-btn-plus" type="button" style={sty.styb}>+</button>
						</div>	   		   				
			    </div>
	    	</div>  
      <Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick} style={{height:'50vh',background:'white'}}>
		      <TabPane tab="宝贝详情" key="1">
		        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>         		
									<div style={sty.styq}>
										<p style={sty.styps}>宝贝详情</p>
										<p style={sty.styps}>{this.state.res[0].intro}</p>
									</div>
		        </div>
		      </TabPane>
		      <TabPane tab="评论列表" key="2">
		        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
		        	<div style={{'marginTop':'0.6rem'}}>
						   	<div className="mui-card-header mui-card-media" style={sty.stypl}>
									<img src="img/QQ图片20170707195140.jpg" style={sty.styms}/>
									<div className="mui-media-body">
										<p style={sty.stypp}>小M</p>
										<p style={sty.stypp}>评价时间: <span>2016-06-30 15:30</span></p>
									</div>
									<div className="mui-card-content" style={sty.pjnr}>							
										<p style={sty.styps}><span style={sty.span}>评价内容:</span>平台的服务很满意。就是后期花店和快递中间沟通出了些小问题，让朋友空等了好一阵。总感觉这次祝福送的有些缺憾吧。总体来讲还会光顾的</p>
									</div>						
								</div>
							</div>
		        </div>		        
		      </TabPane>
		      <TabPane tab="用户评论" key="3">
		        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
		          <div style={sty.liuyan}>
								<h1 style={{'fontWeight':'100'}}>您的评价:</h1>
								<textarea name="" rows="" cols="" style={sty.texter}></textarea>
								<button type="button" className="mui-btn mui-btn-danger" style={sty.stybtn}>发布</button>
								
							</div>
		        </div>
		      </TabPane>
    	</Tabs> 
    	<WhiteSpace />  
    	<button type='button' className='mui-btn mui-btn-danger' style={{width:'60vw','height':'1rem','fontSize':'0.4rem','margin-left':'20vw','margin-bottom':'0.3rem'}}>加入购物车</button>
     	</div>
     	
		);
	}
}

export default Particulars;