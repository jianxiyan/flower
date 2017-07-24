import React from 'react';
import {Link} from 'react-router'
var Sort=React.createClass({
	render:function(){
		var gg={
			listStyle: 'none',
			height: '4rem',
			
			float: 'left',
			position: 'relative',
			width:'100%',
			position: 'relative'
		}
		var li1={
			listStyle: 'none',
			height: '4rem',
			width: '50%',
			float: 'left',
			position: 'relative',
		}
		var img1={
			width: '100%',
			height: '4rem'
		}
		var div1= {
			width: '100%',
			height:' 4rem',
			position: 'absolute',
			left: '0',
			top: '0',
			background: 'rgba(0,0,0,.2)'
		}
		var div11={
			width: '100%',
			height:' 4rem',
			position: 'absolute',
			left: '0',
			top: '0',
			background: 'rgba(0,0,0,.2)',
			display:'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}
		var a1={
			textAlign:'center',
			color: '#fff',
			display: 'block'
		}
		var a11={
			textAlign:'center',
			color: '#fff',
			display: 'block',
			position:'absolute',
			left:'.45rem',
			bottom:'.45rem'
		}
		var a12={
			textAlign:'center',
			color: '#fff',
			display: 'block',
			position:'absolute',
			right:'.45rem',
			bottom:'.9rem'
		}
		var span1={		
			display: 'block',
			fontSize: '0.35rem',
			height:'0.6rem'
			
		}
		var span2={
			display: 'block',
			fontSize: '0.3rem',
			height:'0.4rem'
		}
		return(	
			<div>
				<ul>
					<li style={gg}>
						<Link to='/productList'>
						<div style={div11}>
							<a style={a1}>
							<span style={span1}>新品上市</span>
							<span style={span2}>New product</span>
							</a>
						</div>
						<img src="img/04b03370cdb6bb1130b0327550d1e7ea.jpg" alt="" style={img1}/>
						</Link>
					</li>
					<li style={li1}>
					<Link to='/productList'>
						<div style={div1}>
							<a style={a11}>
								<span style={span1}>热销</span>
								<span style={span2}>Hot sell</span>
							</a>
						</div>
						<img src="img/907f5b70b55a210ef6a267755c1a42db5e249ad766ed-BHkyEN_fw658.jpg" alt="" style={img1}/>
						</Link>
					</li>
					<li style={li1}>
					<Link to='/productList'>
						<div style={div1}>
							<a style={a12}>
								<span style={span1}>推荐</span>
								<span style={span2}>Recomdation</span>
							</a>
						</div>
						<img src="img/cedd9c40bbe811d52c68e934701eeb2951c432fa6715e-FlUy7b_fw658.jpg" alt="" style={img1}/>
						</Link>
					</li>
					<li style={gg}>
					<Link to='/productList'>
						<div style={div11}>
							<a style={a1}>
							<span style={span1}>更多尤物</span>
							<span style={span2}>More product</span>
							</a>
						</div>
						<img src="img/09bbc3b1206e019391cd4dba267f11c17a99f64921d6c-PI6iGk_fw658.jpg" alt="" style={img1}/>
						</Link>
					</li>
				</ul>
			</div>	
		)
	}
})


export default Sort;