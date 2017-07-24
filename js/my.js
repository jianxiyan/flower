var React = require('react');
var Link = require('react-router').Link;
var Mycomp = React.createClass({
	getInitialState:function(){
		return{
			'name':'请输入您的昵称。。。',
			'sign':'请输入您的个性签名。。。',
			'follower':'0',
			'follower':'0'
		}
	},
	render:function(){
		var sty1 = {'color':'#333'};
		var sty2 = {'color':'#fff','font-size':'0.12rem','margin':'0'};
		var sty3 = {'font-size':'0.12rem','color':'#999','padding':'0','margin':'0'}
		var sty4 = {'padding':'0.08rem'}
		var sty5 = {'width':'25%','float':'left','font-size':'0.12rem','color':'#999','text-align':'center','padding':'0.15rem 0','list-style':'none'}
		var sty6 = {'width':'0.7rem','height':'0.7rem','border':'1px solid #999','border-radius':'50%','position':'relative','margin':'0 auto'}
		return(
			<div style={{'width':'100vw','height':'100vh', 'background':'url(imgs/1.jpg) no-repeat left top','background-size': 'cover'}}>
				<div style={{'width':'100vw','height':'100vh','background':'rgba(99,99,99,0.4)','position':'absolute','left':'0','top':'0'}}>
					<header className="mui-bar mui-bar-nav" style={{'background':'rgba(255,255,255,0.6)'}}>
						<a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style={sty1}></a>
					    <h1 className="mui-title">我的</h1>
					    <Link to='/info'>
					    	<a className="mui-icon mui-icon-gear mui-icon-right-nav mui-pull-right" style={sty1}></a>
						</Link>
					</header>
					<div style={{'padding':'1.4rem 0 0.4rem','text-align':'center'}}>
						
						<img src='imgs/2.jpg' style={{'width':'1rem','height':'1rem','border-radius':'50%'}}/>
						
						<p style={sty2}>昵称:那些花儿</p>
						<div style={{'margin-top':'0.12rem'}}>
							<p style={sty2}>Waiting for a ghost town,with a heart</p>
							<p style={sty2}>等着一座城,守着一颗心</p>
						</div>
					</div>
					
					<div style={{'overflow':'hidden'}}>
						<span style={{'color':'#fff','font-size':'0.12rem','float':'right','margin-right':'0.1rem'}}>关注:24</span>
						<span style={{'color':'#fff','font-size':'0.12rem','float':'right','margin-right':'0.1rem'}}>粉丝:0</span>
					</div>
					
					<div style={{'overflow':'hidden','border-top':'1px dashed #fff','border-bottom':'1px dashed #fff','padding':'0.16rem 0'}}>
						<a className="mui-icon mui-icon-chatboxes mui-pull-left" style={{'color':'#fff','margin-left':'0.08rem'}}></a>
						<span style={{'font-size':'0.12rem','color':'#fff','float':'left','margin-left':'0.08rem'}}>我的订单</span>
						<a className="mui-icon mui-icon-arrowright mui-icon-right-nav mui-pull-right" style={{'color':'#fff'}}></a>
					</div>
					
					<div style={{'padding':'0.2rem'}}>
						<div style={{'background':'#fff','overflow':'hidden'}}>
							<ul>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon mui-icon-download" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.12rem'}}>待付款</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon mui-icon-trash" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.12rem'}}>待收货</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon mui-icon-chatboxes" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.12rem'}}>待评价</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon mui-icon-spinner mui-spin" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.12rem'}}>退换</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon iconfont icon-gouwuchekong" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.12rem'}}>购物车</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon iconfont icon-renminbi" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.12rem'}}>钱包</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon iconfont icon-libao" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.12rem'}}>礼包</span>
								</li>
								<li style={sty5}>
									<div style={sty6}>
										<span className="mui-icon iconfont icon-qiandao" style={{'margin':'auto','top':'0','left':'0','bottom':'0','right':'0','position':'absolute','height':'0.45rem','font-size':'0.4rem'}}></span>
									</div>
									<span style={{'font-size':'0.12rem'}}>签到</span>
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
			</div>
		)
	}
})
module.exports = Mycomp;