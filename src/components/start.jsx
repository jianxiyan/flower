
var React = require('react');
var ReactDOM = require('react-dom')
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var $ = require('jquery')
var browserHistory = require('react-router').browserHistory
var IndexRoute = require('react-router').IndexRoute



var Start = React.createClass({
	render:function(){
		
		
		var pic1 = {'background':'url(img/7-1.jpg) no-repeat center','width': '100vw','height': '100vh',   'backgroundSize':'cover'}
		var pic2 = {'background':'url(img/7-9.jpg) no-repeat center','width': '100vw','height': '100vh',   'backgroundSize':'cover'}
		var pic3 = {'background':'url(img/7-10.jpg) no-repeat center','width': '100vw','height': '100vh',   'backgroundSize':'cover'}
		var pic5 = {'background':'url(img/7-8.jpg) no-repeat center','backgroundSize':'cover','width': '100vw','height': '100vh'   }
		var pic4 = {'background':'url(img/7-2.jpg) no-repeat center','backgroundSize':'cover','width': '100vw','height': '100vh'  }
		var sty1_1 = {
			"width":"100vw",
			"height":"100vh",
			"background":"rgba(80,80,80,.5)",
			"position":"absolute",
			"left":"0","top":"0"
		}
		var logo = {
			'display': 'block',
			'width':'1.4rem',
			'height':'1.4rem',
			'margin': '0 auto',
			'margin-top': '2.2rem',
			'margin-bottom':'.5rem'
		}
		var p1 = {
			'color': '#fff',
			'font-size': '.35rem',
			'text-align': 'center',
			'line-height': '.5rem'
		}
		
		var btn1 = {
			'display': 'block',
			"width":"3rem",
			"height":".7rem",
			"border":"2px solid #fff",
			"border-radius":"0.4rem",
			"text-align": "center",
			"line-height": "0.6rem",
			"font-size": "0.3rem",
			"margin":"0 auto",	
			"background":"none",				
			'color': '#fff',
			'margin-top': '3.2rem'
		}
		
		
		return(
			<div className="swiper-container" style={{'width':'100vw','height':'100vh','overflow': 'hidden'}}>
			    <div className="swiper-wrapper">
			        <div className="swiper-slide" style={pic1}></div>
			        <div className="swiper-slide" style={pic2}></div>
			        <div className="swiper-slide" style={pic3}></div>
			        <div className="swiper-slide" style={pic5}></div>
			        <div className="swiper-slide" style={pic4}>
			        	<div style={sty1_1}>
			        		<a style={logo}><img src="img/logo_1.png" style={{'width':'1.4rem','height':'1.4rem'}}/></a>
			        		<p style={p1}>花店</p>
			        		<p style={p1}>Serect message</p>
			        		<button style={btn1}><Link to='/app' style={{color:'#fff'}}>开始体验吧</Link></button>   				       
			        	</div>
			        </div>
			    </div>
			    <div className="swiper-pagination"></div>
			</div>
		)
	},
	componentDidMount:function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: false,
			pagination: '.swiper-pagination', 
  		})        
	}
})	







module.exports = Start;