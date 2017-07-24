import React from 'react';
import { hashHistory ,Link} from 'react-router';
import { NavBar, Drawer,Icon,TabBar } from 'antd-mobile';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'app',
      open: false,
      
    };
  }
  render() {
  	
    // console.log(this.props.route, this.props.params, this.props.routeParams);
    return (
      <div className="container" style={{'margin-top':'0.9rem'}}>
        <NavBar mode="light"
          onLeftClick={() => hashHistory.goBack()}
          rightContent={<Icon key="0" type="search" style={{ marginRight: '0.32rem'}} />}
          style={{'position':'fixed','width':'100vw',top:'0',left:'0','z-index':'9999'}}
        >
          {this.state.title}
        </NavBar>

        <div style={{ position: 'relative', height: '100%' }}>
          <Drawer
            position="right"
            sidebar='side content'
            sidebarStyle={{ backgroundColor: '#fff' }}
            open={this.state.open}
            onOpenChange={() => this.setState({ open: !this.state.open })}
          >
            {this.props && this.props.children && React.cloneElement(this.props.children, {
              changeTitle: title => this.setState({ title })
            }) || 'no content'}
          </Drawer>
          
        </div>
				    <nav className="mui-bar mui-bar-tab" style={{'height':'1.05rem','padding-bottom':'0.15rem'}}>
						    <a className="mui-tab-item mui-active" >
						    	<Link to='/home' style={{'color':'#333'}}>
						        <span className="mui-icon mui-icon-home" style={{'width':'0.5rem','height':'0.5rem','font-size':'0.5rem'}}></span>
						        <span className="mui-tab-label" style={{'font-size':'0.25rem','margin-top':'0.05rem'}}>首页</span>
						       </Link> 
						    </a>
						    <a className="mui-tab-item">
							    <Link to='/ss' style={{'color':'#333'}}>
							        <span className="mui-icon mui-icon-search" style={{'width':'0.5rem','height':'0.5rem','font-size':'0.5rem'}}></span>
							        <span className="mui-tab-label" style={{'font-size':'0.25rem','margin-top':'0.05rem'}}>搜索</span>
							        </Link>
							    </a>
							    <a className="mui-tab-item">
							    <Link to='/cart' style={{'color':'#333'}}>
							        <span className="mui-icon mui-icon-trash" style={{'width':'0.5rem','height':'0.5rem','font-size':'0.5rem'}}></span>
							        <span className="mui-tab-label" style={{'font-size':'0.25rem','margin-top':'0.05rem'}}>购物车</span>
							        </Link>
							    </a>
						    <a className="mui-tab-item">
							    <Link to='/fl' style={{'color':'#333'}}>
							        <span className="mui-icon mui-icon-list" style={{'width':'0.5rem','height':'0.5rem','font-size':'0.5rem'}}></span>
							        <span className="mui-tab-label" style={{'font-size':'0.25rem','margin-top':'0.05rem'}}>分类</span>
							     </Link>
						    </a>
						    <a className="mui-tab-item">
							    <Link to={localStorage.getItem('userid')?'/my':'/dlzc'} style={{'color':'#333'}}>
							        <span className="mui-icon mui-icon-contact" style={{'width':'0.5rem','height':'0.5rem','font-size':'0.5rem'}}></span>
							        <span className="mui-tab-label" style={{'font-size':'0.25rem','margin-top':'0.05rem'}}>我的</span>
							     </Link>
						    </a>
						</nav>
        
        <div>
        	
        </div>
      </div>
           
    );
  }

}
