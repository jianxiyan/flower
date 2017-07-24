import React from 'react';
import {Link} from 'react-router';
export default class Serch extends React.Component{
	render(){
		const data=[
			{	title:'爱情鲜花',				
				title2:'love flower',	
				img:'img/ce3ecb082903beec5e8c91c3b4d73f88.jpg',
				link:'lessonDetail'
			},
			{	title:'友情鲜花',
				title2:'Friendship bouquet',
				img:'img/1a4ddbe064edda665e6f7cab747e289ac28e92ef9c003-R0b90C_fw658.jpg',
				link:'lessonDetail'
			},
			{	title:'回报老师',
				title2:'Feels grateful teachert',
				img:'img/35d8a6c2d3e747e2698016d7cd623f19.jpg',
				link:'lessonDetail'
			},
			{	title:'节日鲜花',
				title2:'Friendship bouquet',
				img:'img/539d6cd0a8bb1659ccc6fe74a04a7881c4b134644d270-kZ9IAn_fw658.jpg',
				link:'lessonDetail'
			},
			{	title:'感恩长辈',
				title2:'Feels grateful teachert',
				img:'img/b601030b370202c300cc7edf7c07f3d7.jpg',
				link:'lessonDetail'
			}
		];
		return(
			<div className='serch' style={{'margin-bottom':'1.1rem'}}>
				<ul>				
				{data.map((d,item)=>{
					return <li className='list_img' style={{background:'url('+d.img+') no-repeat 0 -50px','backgroundSize':'cover'}}>
							<Link to='/productList'>
								<a href={d.link} key={item}>
									<p className='pp'>{d.title}</p>
									<p className="ppp">{d.title2}</p>
								</a>
							</Link>	
							</li>
					
				})}
			
				</ul>
			
			</div>			
		)
		
	}	
}