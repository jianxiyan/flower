var React = require('react');
var $ = require('jquery');
var Cart = React.createClass({
	getInitialState:function(){
		return{
			res:[],
			startMoney:0,
			lastMoney:0,
			allchecked:true,
			num:[],
			check:''
		}
	},
	tap:function(){
		var a = this.state.check ? '' : 'checked';
		var money = this.state.check ? 0 : this.state.lastMoney;
		this.setState({check:a,startMoney:money})	
	},
	minus:function(){
		
		var num = this.refs.ipt.value;	
		if(num>1){
			this.refs.ipt.value--
		}	
	},
	plus:function(){

		this.refs.ipt.value++;
	},
	componentWillMount:function(){	
		var _this = this;
		$.ajax({
			type:"get",
			url:"js/cart.json",
			dataType:'json',
			success:function(data){
				_this.setState({res:data})
				data.map(function(item){
				_this.state.num.push(item.num)
					_this.setState({lastMoney:_this.state.lastMoney+item.price*item.num});
				})
			}
		});	
	},
	
	render:function(){
		var _this = this;
		var li= {'height': '2rem','padding': '.18rem 0 0 .24rem','borderBottom':'1px solid #cecece'}
		var input = {'float': 'left','marginTop':'.88rem'}
		var dt = {'float':'left','margin':'0 .15rem','width':'1.8rem','height': '1.8rem'};
		var img = {'width':'1.8rem','height': '1.8rem'};
		var dd = {'paddingRight': '.3rem','fontSize': '.26rem','float': 'left','width': '3.5rem'}
		var p = {'marginBottom': '.2rem','fontSize':'.25rem'}
		var num = {'float':'right','fontSize':'.2rem','verticalAlign': 'middle','color': '#ff5588'}
		var span = {'verticalAlign': 'middle','color': '#ff5588'};		
		return(
			<div>
			<ul >
				{				
				this.state.res.map(function(item,index){
					return <li style={li} key={index}>
								<input type="checkbox" defaultChecked={_this.state.check} style={input} />
								<dt style={dt}><img src="img/cart01.jpg" style={img}/></dt>
								<dd style={dd}>
									<p className="title" style={p}>{item.title}</p>
									<p className="size" style={p}>花束尺寸：直径*高曰{item.size}cm</p>
									<p className="alertinfo" style={p}>({item.alertinfo})</p>
									<div style={{'lineHeight':'.26rem'}}>
										<span className="price" style={{'verticalAlign': 'middle'}} >￥{item.price}</span>
										<div  style={num}>
											<span className='minus' style={{'verticalAlign': 'middle','fontSize':'.3rem','padding':'0 .2rem','width':'.5rem','textAlign':'center'}} >-</span>
											<input type='text' style={{'verticalAlign': 'middle','width':'.5rem','textAlign':'center'}} defaultValue={item.num} ref='ipt'/>
											<span className='plus' style={{'verticalAlign': 'middle','fontSize':'.3rem','padding':'0 .2rem','width':'.5rem','textAlign':'center'}} onClick={_this.plus}>+</span>
										</div>
									</div>
								</dd>
							</li>
				})
			}
			
			</ul>
			<div style={{'position':'absolute','bottom':'0.95rem','width':'100vw','height':'.9rem','background':'#666','fontSize':'.3rem','color':'#fff','lineHeight':'.9rem'}}><input type='checkbox' style={{'marginLeft':'.24rem'}} onClick={this.tap}/>全选<span style={{'marginLeft':'.4rem',fontSize:'0.3rem'}}>总价:　{this.state.startMoney}元</span><a style={{'width':'1.8rem',height:'0.8rem','lineHeight':'.9rem','textAlign':'center','color':'#fff','background':'#f00','display':'inlineBlock','float':'right',fontSize:'0.3rem'}}>结算</a></div>
			</div>
		)
	},
	
	
	
	componentDidMount:function(){
		var _this = this;
		window.onload=function(){
			var oLi = document.getElementsByClassName('minus');
			console.log(oLi[0]);
		}
		
		{/*$('li').map(function(index,item){
			//	console.log($(this).find('.minus'))
				$(this).find('.minus').on('click',function(){
					var num = $(this).next().value;
					console.log(index)
					var value=_this.state.num[index]--
					console.log(value)
				})
		})*/}
	}
		
	
})


module.exports = Cart;
