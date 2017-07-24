
var React = require('react');


var Link = require('react-router').Link
var browserHistory = require('react-router').browserHistory
var IndexRoute = require('react-router').IndexRoute



var Dlzc = React.createClass({
	render : function(){
		var bj = {
			'width': '100vw',
			'height': '100vh', 
			'background':'url(img/7-5.jpg) no-repeat center',
			'backgroundSize':'cover'
		}
		var sty1_1 = {
			"width":"100vw",
			"height":"100vh",
			"background":"rgba(70,70,70,.2)",
			"position":"absolute",
			"left":"0","top":"0"
		}
		var logo = {
			'display': 'block',
			'width':'1.4rem',
			'height':'1.4rem',
			'margin': '0 auto',
			'margin-top': '2rem',
			'margin-bottom':'.5rem'
		}
		var p1 = {
			'color': '#fff',
			'font-size': '.35rem',
			'text-align': 'center',
			'line-height': '.5rem'
		}
		var btns = {
			'margin-top': '3.2rem'
		}
		var btn1 = {
			'display': 'block',
			"width":"2.8rem",
			"height":"0.6rem",
			"border":"2px solid #fff",
			"border-radius":"0.4rem",
			"text-align": "center",
			"line-height": "0.5rem",
			"font-size": "0.3rem",
			"margin":"0 auto",	
			"background":"none",				
			'color': '#fff',
			'margin-bottom': '.2rem'
		}
		var sty3={
				"font-size":"0.35rem",
				"margin-left":"0.5rem",
				"cursor":"pointer",
				display:'block',
				height:'1rem',
				'line-height':'1rem',
				'position':'absolute'
			}
		return(
			<div style = {bj}>
				<div style={sty1_1}>
				<span style = {sty3} onClick={function(){history.back()}}>Back</span>
			        <a style={logo}><img src="img/logo_1.png" style={{'width':'1.4rem','height':'1.4rem'}}/></a>
			        <p style={p1}>花店</p>
			        <p style={p1}>Serect message</p>
	        		<div style={btns}>
	        			<button style={btn1}><Link to='/login' style={{color:'#fff'}}>登录</Link></button>
	        			<button style={btn1}><Link to='/register' style={{color:'#fff'}}>注册</Link></button>
	        		</div>			        		
	        	</div>
			</div>
		)
	}
})





module.exports = Dlzc;