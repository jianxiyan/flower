import React from 'react';

export default class Lei extends React.Component{
	render(){
		const data=[
			{	title:'— 牛 皮 纸 风  —',
				title2:'归源  · 纯 朴还原必备',
				img:'img/lei6.png',
				link:'lessonDetail'
			},
			{	title:'— 自 然 插 花  —',
				title2:'桌花  · 一道靓丽的风景',
				img:'img/lei2.png',
				link:'lessonDetail'
			},
			{	title:'— 手 工 干 花   —',
				title2:'森 系  · 文艺范美女最爱',
				img:'img/lei3.png',
				link:'lessonDetail'
			},
			{	title:'— 郁 金 香   —',
				title2:'纯雅  · 高雅圣洁',
				img:'img/lei4.png',
				link:'lessonDetail'
			},
			{	title:'— 美 式 花 艺  —',
				title2:'复 ·古·田·园',
				img:'img/lei5.png',
				link:'lessonDetail'
			}
	
		];
		const data1=[
		{	title:'花 艺',
			img:'img/Free-Pansy-Vector-B2_07.png',
			link:'lessonDetail'
		},
		{	title:'节 日',
			img:'img/Free-Pansy-Vector-B2_11.png',
			link:'lessonDetail'
		},
		{	title:'干 花',
			img:'img/Free-Pansy-Vector-B2_02.png',
			link:'lessonDetail'
		},
		{	title:'多 肉',
			img:'img/Free-Pansy-Vector_14.png',
			link:'lessonDetail'
		}
		];
		return(			
			<div className='lei'>
			<ul className='fen'>
			{data1.map((a,item)=>{
				return <li className='lei_icon'  style={{background:'url('+a.img+')','backgroundSize':'cover'}}>
				<a href={a.link}>
					<span>{a.title}</span>
				</a>
				
				</li>
				})}
			</ul>
			<a href='' className='lei_a'><span> · 热 门 推 荐</span><span>更多  &gt;</span></a>
			<ul>				
				{data.map((d,item)=>{
					return <li className='lei_img' style={{background:'url('+d.img+')','backgroundSize':'cover','backgroundPosition':'left top'}}>
								<a href={d.link} key={item} className={item%2==0? 'lei_a_right':'lei_a_left'}>
									<p className='pp'>{d.title}</p>
									<p className="pp">{d.title2}</p>
									<p className="ppp">点击详情</p>
								</a>
							</li>
					
				})}
			
				</ul>
	
			</div>			
		)
		
	}	
}