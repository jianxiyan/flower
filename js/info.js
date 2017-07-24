var React = require('react');
var Myinfo = React.createClass({
	tap:function(){
		var name = prompt('请输入您的昵称');
	},
	tap1:function(){
		var sex = prompt('请输入您的性别');
	},
	tap2:function(){
		var phone = prompt('请输入您的手机号');
	},
	tap3:function(){
		var succ = prompt('请输入您的建议');
	},
	back:function(){
		history.back();
	},
	render:function(){
		var sty1 = {'position':'absolute','font-size':'0.12rem','right':'0.6rem','color':'#999'}
		var sty2 = {'font-size':'0.12rem','position':'relative'}
		var sty3 = {'font-size':'0.12rem'}
		return(
			
			<div style={{'width':'100vw','height':'100vh'}}>
				<header className="mui-bar mui-bar-nav">
					<a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style={{'color':'#333'}} onClick={this.back}></a>
				    <h1 className="mui-title">个人信息</h1>
				</header>
				<section style={{'padding-top':'0.88rem'}}>
					<div style={{'background':'#fff','overflow':'hidden','height':'1.3rem','line-height':'1.3rem','padding':'0 0.4rem','position':'relative'}}>
						<span className='mui-pull-left' style={{'font-size':'0.14rem'}}>头像</span>
						<span className="mui-icon mui-icon-arrowright" style={{'top':'0','bottom':'0','margin':'auto','position':'absolute','right':'0.2rem','height':'0.48rem'}}></span>
						<img src='imgs/2.jpg' className='mui-pull-right' style={{'width':'1.1rem','height':'1.1rem','border-radius':'50%','top':'0','bottom':'0','margin':'auto','position':'absolute','right':'0.62rem'}}/>
					</div>
					<ul className="mui-table-view" style={{'margin-top':'0.2rem'}}>
				        <li className="mui-table-view-cell">
				            <a className="mui-navigate-right" style={sty2} onClick={this.tap}>
				                <span style={sty3}>昵称</span>
				                <span style={sty1}>那些花儿</span>
				            </a>
				        </li>
				        <li className="mui-table-view-cell">
				            <a className="mui-navigate-right" style={sty2} onClick={this.tap1}>
				                <span style={sty3}>性别</span>
				                <span style={sty1}>女</span>
				            </a>
				        </li>
				        <li className="mui-table-view-cell">
				            <a className="mui-navigate-right" style={sty2}>
				                <span style={sty3}>生日</span>
				                <span style={sty1}>2000.12.23</span>
				            </a>
				        </li>
				        <li className="mui-table-view-cell">
				            <a className="mui-navigate-right" style={sty2} onClick={this.tap2}>
				                <span style={sty3}>手机号</span>
				                <span style={sty1}>18503414625</span>
				            </a>
				        </li>
				        <li className="mui-table-view-cell">
				            <a className="mui-navigate-right" style={sty2}>
				                <span style={sty3}>收货所在地</span>
				                <span style={sty1}>北京市海淀区</span>
				            </a>
				        </li>
				    </ul>
				    <ul className="mui-table-view" style={{'margin-top':'0.2rem'}}>
				        <li className="mui-table-view-cell">
				            <a className="mui-navigate-right" style={sty2}>
				                <span style={sty3}>我的二维码</span>
				                <span style={sty1}>那些花儿</span>
				            </a>
				        </li>
				        <li className="mui-table-view-cell">
				            <a className="mui-navigate-right" style={sty2} onClick={this.tap3}>
				                <span style={sty3}>我的建议</span>
				                <span style={sty1}>添加</span>
				            </a>
				        </li>
				    </ul>
				</section>
			</div>
		)
	}
})

module.exports = Myinfo;