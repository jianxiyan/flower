var React = require('react');
var $ = require('jquery');
var Myinfo = React.createClass({
	getInitialState:function(){
		return{
			name:'未设置',
			sign:'未设置',
			sex:'未设置',
			birthday:'未设置',
			phone:'未设置',
			dress:'未设置'
		}
	},
	tap:function(){
		var name1 = prompt('请输入您的昵称');
		this.setState({name:name1});
	},
	tap1:function(){
		var sex1 = prompt('请输入您的性别');
		this.setState({sex:sex1});
	},
	tap2:function(){
		var phone1 = prompt('请输入您的手机号');
		this.setState({phone:phone1});
	},
	tap3:function(){
		var succ = prompt('请输入您的建议');
	},
	tap5:function(){
		var sign1 = prompt('请输入您的个性签名');
		this.setState({sign:sign1});
	},
	tap6:function(){
		var birth = prompt('请输入您的生日');
		this.setState({birthday:birth});
	},
	tap7:function(){
		var dress = prompt('请输入您的收货地');
		this.setState({dress:dress});
	},
	tap8:function(){
		localStorage.removeItem('userid');
		location.href = '/#/app'
		location.reload()
	},
	tap4:function(){
		
		var userid1 = localStorage.getItem('userid');
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:3000/",
			async:true,
			data:{method:'updateinfo',userid:userid1,name:this.state.name,sign:this.state.sign,sex:this.state.sex,birthday:this.state.birthday,phone:this.state.phone,dress:this.state.dress},
			success:function(data){
				history.back();
			}
		})
	},
	back:function(){
		history.back();
	},
	componentWillMount:function(){
		var userid = localStorage.getItem('userid');
		var userid1 = userid?userid:'';
		var _this = this;
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:3000/",
			async:true,
			data:{method:'findinfo',userid:userid1},
			success:function(data){
				console.log(data)
				data = JSON.parse(data)[0];
				data.name?_this.setState({name:data.name}):_this.setState({name:'未设置'});
				data.sign?_this.setState({sign:data.sign}):_this.setState({sign:'未设置'});
				data.sex?_this.setState({sex:data.sex}):_this.setState({sex:'未设置'});
				data.birthday?_this.setState({birthday:data.birthday}):_this.setState({birthday:'未设置'});
				data.phone?_this.setState({phone:data.phone}):_this.setState({phone:'未设置'});
				data.dress?_this.setState({dress:data.dress}):_this.setState({dress:'未设置'});
			}
		});
	},
	render:function(){
		var sty1 = {'position':'absolute','font-size':'0.24rem','right':'0.6rem','color':'#999'}
		var sty2 = {'font-size':'0.24rem','position':'relative'}
		var sty3 = {'font-size':'0.24rem'}
		var sty4 = {'padding-top':'0.2rem','padding-bottom':'0.2rem'}
		return(
			
			<div style={{'width':'100vw','height':'100vh'}}>
				
				<section style={{'padding-top':'0.1rem'}}>
					<div style={{'background':'#fff','overflow':'hidden','height':'2rem','line-height':'2rem','padding':'0 0.2rem','position':'relative'}}>
						<span className='mui-pull-left' style={{'font-size':'0.28rem'}}>头像</span>
						<span className="mui-icon mui-icon-arrowright" style={{'top':'0','bottom':'0','margin':'auto','position':'absolute','right':'0.4rem','height':'0.96rem'}}></span>
						<img src='img/2.jpg' className='mui-pull-right' style={{'width':'1.5rem','height':'1.5rem','border-radius':'50%','top':'0','bottom':'0','margin':'auto','position':'absolute','right':'0.9rem'}}/>
					</div>
					<ul className="mui-table-view" style={{'margin-top':'0.3rem'}}>
				        <li className="mui-table-view-cell" style={sty4}>
				            <a className="mui-navigate-right" style={sty2} onClick={this.tap}>
				                <span style={sty3}>昵称</span>
				                <span style={sty1}>{this.state.name}</span>
				            </a>
				        </li>
				        <li className="mui-table-view-cell" style={sty4}>
				            <a className="mui-navigate-right" style={sty2} onClick={this.tap1}>
				                <span style={sty3}>性别</span>
				                <span style={sty1}>{this.state.sex}</span>
				            </a>
				        </li>
				        <li className="mui-table-view-cell" style={sty4}>
				            <a className="mui-navigate-right" style={sty2} onClick={this.tap6}>
				                <span style={sty3}>生日</span>
				                <span style={sty1}>{this.state.birthday}</span>
				            </a>
				        </li>
				        <li className="mui-table-view-cell" style={sty4}>
				            <a className="mui-navigate-right" style={sty2} onClick={this.tap2}>
				                <span style={sty3}>手机号</span>
				                <span style={sty1}>{this.state.phone}</span>
				            </a>
				        </li>
				        <li className="mui-table-view-cell" style={sty4}>
				            <a className="mui-navigate-right" style={sty2} onClick={this.tap7}>
				                <span style={sty3}>收货所在地</span>
				                <span style={sty1}>{this.state.dress}</span>
				            </a>
				        </li>
				    </ul>
				    <ul className="mui-table-view" style={{'margin-top':'0.3rem'}}>
				        <li className="mui-table-view-cell" style={sty4}>
				            <a className="mui-navigate-right" style={sty2} style={sty2} onClick={this.tap5}>
				                <span style={sty3}>个性签名</span>
				                <span style={sty1}>{this.state.sign}</span>
				            </a>
				        </li>
				        <li className="mui-table-view-cell" style={sty4}>
				            <a className="mui-navigate-right" style={sty2} onClick={this.tap3}>
				                <span style={sty3}>我的建议</span>
				                <span style={sty1}>添加</span>
				            </a>
				        </li>
				    </ul>
				    <div style={{'padding':'0 1rem'}}>
					    <button type="button" className="mui-btn mui-btn-red" style={{'margin':'0.4rem auto 0','font-size':'0.24rem','width':'1.5rem','height':'0.7rem','border-radius':'0.08rem','float':'left'}} onClick={this.tap4}>保存</button>
					    <button type="button" className="mui-btn mui-btn-green" style={{'margin':'0.4rem auto 0','font-size':'0.24rem','width':'1.5rem','height':'0.7rem','border-radius':'0.08rem','float':'right'}} onClick={this.tap8}>取消登录</button>
						
				    </div>
				    
				</section>
			</div>
		)
	}
})

module.exports = Myinfo;