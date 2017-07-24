
var React = require('react')

var Kong = React.createClass({
	render:function(){
		return(
			<div style ={{width:'100vw',height:'100vh'}}>
				{this.props.children}
			</div>
				
		)
	}
})

module.exports = Kong;