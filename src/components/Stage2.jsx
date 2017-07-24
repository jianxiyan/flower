import React from 'react';


var Tuijian=React.createClass({
	render(){
		var div1={height:'.8rem',background:'#eeeeee',lineHeight:'.8rem'}
		var a1={float:'left',background:'url(img/icon.png) no-repeat .2rem center'}
		var span1={marginLeft:'.5rem',color:'#616161'}
		var span2={marginRight:'.3rem',color:'#616161'}
		var a2={float:'right'}
		var div2={height:'3rem',background:'url(img/flowe.jpg)'}
		var div3={width:'3rem',height:'3rem',float:'right',textAlign:'center',marginTop:'.8rem'}
		var a3={
			display:'block',
			width:'1.5rem',
			height:'.5rem',
			background:'#56c6a2',
			borderRadius:'.5rem',
			lineHeight:'.5rem',
			textAlign:'center',
			margin:'0 auto',
			color:'#fff'
			}
		var p1={fontSize:'.4rem',height:'.5rem',lineHeight:'.5rem'}
		var p2={height:'.5rem',lineHeight:'.5rem'}
		return(
			<div>
				<div style={div1}>
					<a href="#" style={a1}><span style={span1}>推荐</span></a>
					<a href="#" style={a2}><span style={span2}>更多&gt;</span></a>
				</div>
				<div style={div2}>
						<div style={div3}>
								<p style={p1}>&lt;手捧花&gt;</p>
								<p style={p2}>手捧花-俏新娘必备</p>
								<a href="sort.html" style={a3}>点击详情</a>
						</div>
				</div>
			</div>
			
			
			
		)
	}

});

	
	
	
	



export default Tuijian;