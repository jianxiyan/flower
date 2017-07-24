
var React = require('react');
var Login = React.createClass({
	render : function(){
		
		var sty = {
			sty1 : {
				"width":"100vw",
				"height":"100vh",
				"background":"url(img/7-4.jpg) no-repeat center",
				"color":"#fff",
				"background-size":"cover"
			},
			sty2 : {
				"width":"100vw",
				"height":"100vh",
				"background":"rgba(70,70,70,.5)",
				"position":"absolute",
				"left":"0","top":"0",
				"overflow":"hidden"
			},
			sty3 : {
				"font-size":"0.35rem",
				"margin-left":"0.5rem",
				"cursor":"pointer",
				display:'block',
				height:'1rem',
				'line-height':'1rem'
			},
			sty4 : {
				"width":"3rem","height":"2.6rem",
				"margin":".6rem auto"
			},
			sty5 : {
				"display": "block",
				"margin": ".2rem auto",
				"width":"1.6rem","height":"1.6rem",
				"border":"1px solid #000",
				"border-radius":"50%"
			},
			sty6 : {
				"display": "block",
				"width":"3rem","height":".5rem",
				"text-align": "center",
				"line-height": "0.5rem",
				"font-size": "0.4rem"
			},
			sty7 : {
				"width":"66vw",
				"height":"40vh",
				"margin":"0 auto"
			},
			sty8 : {
				"width":"66vw",
				"height":"1rem",
				"border-bottom": "3px solid #fff",
				"line-height":"1rem"
			},
			sty9 : {
				"width":"3rem",
				"height":".7rem",
				"border":"1px solid #bfa486",
				"borderRadius":"0.4rem",
				"text-align": "center",
				"line-height": "0.6rem",
				"font-size": "0.3rem",
				"margin":"0 1.1rem",
				"background":"#bfa486",
				"margin-top":"2.7rem"
			},
			sty10:{
				"background": "none",
				"border":"none",
				'height':'0.9rem',
				'color':'#fff',
				'font-size':'0.32rem',
				'text-index':'0.1rem',
				'width':'55vw'
			}
		}
		
		return(
			<div style = {sty.sty1}>
				<div style = {sty.sty2}>	
					<span style = {sty.sty3} onClick={function(){history.back()}} >Back</span>
					<div style = {sty.sty4}>
						<span style = {sty.sty5}></span>
						<span style = {sty.sty6}>Selinna</span>
					</div>
					<form style = {sty.sty7}>
						<div style = {sty.sty8}>
							<label style={{"font-size": "0.32rem",float:'left'}}>账号</label>
							<input type="text" name="" id="userid" defaultvalue="" style={sty.sty10}/>
						</div>
						<div style = {sty.sty8}>
							<label style={{"font-size": "0.32rem",float:'left' }}>密码</label>
							<input type="password" name="" id="pass"  style={sty.sty10}/>
						</div>
						<button type='button' style = {sty.sty9} id='btn'>登录</button>
					</form>
				</div>
			</div>
		)
	},
	componentDidMount:function(){
		
		$('#btn').click(function(){
			
				$.ajax({
				type:"post",
				url:"http://127.0.0.1:3000",
				async:true,
				data:{'type':'login','userid':$('#userid')[0].value,'pass':$('#pass')[0].value},
				success:function(data){
					console.log(data)
					switch(data){
						case '0':
							alert('用户未注册')
						break;
						case '1':
						console.log('aaa')
							localStorage.setItem('userid',$('#userid')[0].value)
							location.href = '/#/app'
							location.reload()					
						break;
						
					}
				}
			});
		})
		
	}
})

module.exports = Login;