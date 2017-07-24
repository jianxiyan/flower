import React from 'react';
var Link = require('react-router').Link
var ProductList=React.createClass({
	getInitialState:function(){
		return{
			res:[]		
		}
	},
	componentWillMount:function(){
		var _this=this;
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:3000",
			async:true,
			data:{name:'list'},
			success:function(data){	
				_this.setState({res:JSON.parse(data)})
			}
		});
	},
	render:function(){
		console.log(this.state.res);
		var zz={
			background:'#f2f2f2'
		}
		var li2={
			listStyle: 'none',
			width: '47%',
			margin: '1%',
			float: 'left',
			border:'1px solid #FFFFFF',
			borderBottom: '2px solid #52be9c',
			background: '#fff',
			color:'#333'
		}
		var img2={
			width: '100%',
			height: '4rem'
		}
		var p={
			fontSize: '.35rem',
			textAlign: 'center',
			height: '.5rem',
			lineHeight: '0.5rem',
			height:'0.5rem'
		}
		var p1={
			float: 'left',
			fontSize: '.3rem',
			'margin-left':'0.05rem',
			color:'#c93704'
		}
		var p2={
			float: 'right',
			fontSize: '.3rem',
			color:'#cecece'
		}
		var b1={
			fontSize: '.35rem',
			color: '#c93704',
			
		}
		var i1={
			fontStyle: 'normal',
			fontSize: '.3rem',
			color:'#333',
			'margin-right':'0.05rem'
		}
		return(
			<div style={zz}>
					{this.state.res.map(function(v,i){
						return(
							<li key={i} style={li2}>
								<a><img style={img2} src={v.imgUrl} /></a>
								<Link to="/particular/0"><p style={p}>{v.title}</p></Link>
								<p style={p}><span style={p1}>￥<span style={b1}>{v.price}</span></span><span style={p2}>销量：<i style={i1}>{v.sales}</i></span></p>
							</li>
						)
					})}
			</div>	
		)
	}
})
export default ProductList;