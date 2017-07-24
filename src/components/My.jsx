var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');
var Mycomp = React.createClass({
	getInitialState:function(){
		return{
			'name':'请输入您的昵称。。。',
			'sign':'请输入您的个性签名。。。',
			'follower':'0',
			'follower':'0'
		}
	},
	componentWillMount:function(){
		var userid = localStorage.getItem('userid');
		var userid1 = userid?userid:'';
		var _this = this;
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:3000/",
			async:true,
			data:{method:'findinfo',userid:userid},
			success:function(data){
				console.log(data);
				data = JSON.parse(data)[0];
				_this.setState({name:data.name});
				_this.setState({sign:data.sign});
				
			}
		});
	},
	render:function(){
		var sty1 = {'color':'#333','font-size':'0.4rem',"height":'0.9rem','line-height':'0.7rem','color':'blue',left:'0.2rem'};
		var sty2 = {'color':'#fff','font-size':'0.24rem','margin':'0','line-height':'0.5rem'};
		var sty3 = {'font-size':'0.24rem','color':'#999','padding':'0','margin':'0'}
		var sty4 = {'padding':'0.2rem',}
		var sty5 = {'width':'25%','float':'left','font-size':'0.24rem','color':'#999','text-align':'center','padding':'0.15rem 0','list-style':'none'}
		var sty6 = {'width':'0.7rem','height':'0.7rem','border':'1px solid #999','border-radius':'50%','position':'relative','margin':'0 auto'}
		var sty7 = {'color':'#333','font-size':'0.4rem',"height":'0.9rem','line-height':'0.7rem','color':'blue',right:'0.3rem'};
		return(
			
			<div style={{'width':'100vw','height':'100vh', 'background':'url(img/1.jpg) no-repeat left top','background-size': 'cover'}}>
				<header className="mui-bar mui-bar-nav" style={{'background':'rgba(255,255,255,1)','height':'0.9rem'}}>
						<a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style={sty1} onClick={function(){history.back()}}></a>
					    <h1 className="mui-title" style={{'font-size':'0.35rem',height:'0.9rem','line-height':'0.9rem'}}>我的</h1>
					    
				    	<a className="mui-icon mui-icon-gear mui-icon-right-nav mui-pull-right" style={sty7}></a>
						
					</header>
				<div style={{'width':'100vw','height':'100vh','background':'rgba(99,99,99,0.4)','position':'absolute','left':'0','top':'0','margin-top':'0.9rem'}}>
				
					<div style={{'padding':'1.4rem 0 0.4rem','text-align':'center'}}>
						<Link to='/info'>
						<img src='img/2.jpg' style={{'width':'1rem','height':'1rem','border-radius':'50%'}}/>
						</Link>
						<p style={sty2}>昵称:{this.state.name}</p>
						<div style={{'margin-top':'0.12rem'}}>
							<p style={sty2}>{this.state.sign}</p>
						</div>
					</div>
					
					<div style={{'overflow':'hidden','height':'0.4rem'}}>
						<span style={{'color':'#fff','font-size':'0.24rem','float':'right','margin-right':'0.2rem'}}>关注:24</span>
						<span style={{'color':'#fff','font-size':'0.24rem','float':'right','margin-right':'0.2rem'}}>粉丝:0</span>
					</div>
					
					<div style={{'overflow':'hidden','border-top':'1px dashed #fff','border-bottom':'1px dashed #fff','padding':'0.32rem 0'}}>
						<a className="mui-icon mui-icon-chatboxes mui-pull-left" style={{'color':'#fff','margin-left':'0.16rem'}}></a>
						<span style={{'font-size':'0.24rem','color':'#fff','float':'left','margin-left':'0.16rem'}}>我的订单</span>
						<a className="mui-icon mui-icon-arrowright mui-icon-right-nav mui-pull-right" style={{'color':'#fff'}}></a>
					</div>
					
					<div style={{'padding':'0.4rem'}}>
						<div style={{'background':'#fff','overflow':'hidden'}}>
							<ul>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon mui-icon-download" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.24rem'}}>待付款</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon mui-icon-trash" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.24rem'}}>待收货</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon mui-icon-chatboxes" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.24rem'}}>待评价</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon mui-icon-spinner mui-spin" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.24rem'}}>退换</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon iconfont icon-gouwuchekong" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.24rem'}}>购物车</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon iconfont icon-renminbi" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.24rem'}}>钱包</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon iconfont icon-libao" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.24rem'}}>礼包</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon iconfont icon-qiandao" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.24rem'}}>签到</span>
								</li>
								
							</ul>
							
						</div>
						<div style={{'background':'#fff','margin-top':'0.08rem'}}>
							<ul className="mui-table-view">
						        <li className="mui-table-view-cell" style={sty4}>
						            <a className="mui-navigate-right" style={sty3}>
						                我的分享
						            </a>
						        </li>
						        <li className="mui-table-view-cell" style={sty4}>
						            <a className="mui-navigate-right" style={sty3}>
						                 我的喜欢
						            </a>
						        </li>
						        <li className="mui-table-view-cell" style={sty4}>
						            <a className="mui-navigate-right" style={sty3}>
						                 我的收藏
						            </a>
						        </li>
						    </ul>
						</div>
					</div>
				</div>
				<nav className="mui-bar mui-bar-tab" style={{'height':'1.05rem','padding-bottom':'0.15rem'}}>
						    <a className="mui-tab-item mui-active" >
						    	<Link to='/home' style={{'color':'#333'}}>
						        <span className="mui-icon mui-icon-home" style={{'width':'0.5rem','height':'0.5rem','font-size':'0.5rem'}}></span>
						        <span className="mui-tab-label" style={{'font-size':'0.25rem','margin-top':'0.05rem'}}>首页</span>
						       </Link> 
						    </a>
						    <a className="mui-tab-item">
							    <Link to='/ss' style={{'color':'#333'}}>
							        <span className="mui-icon mui-icon-search" style={{'width':'0.5rem','height':'0.5rem','font-size':'0.5rem'}}></span>
							        <span className="mui-tab-label" style={{'font-size':'0.25rem','margin-top':'0.05rem'}}>搜索</span>
							        </Link>
							    </a>
							    <a className="mui-tab-item">
							    <Link to='/ss' style={{'color':'#333'}}>
							        <span className="mui-icon mui-icon-trash" style={{'width':'0.5rem','height':'0.5rem','font-size':'0.5rem'}}></span>
							        <span className="mui-tab-label" style={{'font-size':'0.25rem','margin-top':'0.05rem'}}>购物车</span>
							        </Link>
							    </a>
						    <a className="mui-tab-item">
							    <Link to='/fl' style={{'color':'#333'}}>
							        <span className="mui-icon mui-icon-list" style={{'width':'0.5rem','height':'0.5rem','font-size':'0.5rem'}}></span>
							        <span className="mui-tab-label" style={{'font-size':'0.25rem','margin-top':'0.05rem'}}>分类</span>
							     </Link>
						    </a>
						    <a className="mui-tab-item">
							    <Link to={localStorage.getItem('userid')?'/my':'/dlzc'} style={{'color':'#333'}}>
							        <span className="mui-icon mui-icon-contact" style={{'width':'0.5rem','height':'0.5rem','font-size':'0.5rem'}}></span>
							        <span className="mui-tab-label" style={{'font-size':'0.25rem','margin-top':'0.05rem'}}>我的</span>
							     </Link>
						    </a>
						</nav>
			</div>
		)
	}
})
module.exports = Mycomp;