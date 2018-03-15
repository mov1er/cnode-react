import React, { Component } from 'react';
import { NavBar, Drawer } from 'antd-mobile';
import logo from './assets/images/category.svg';
import Sidebar from './components/sidebar';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
      open: true
    };
  }

  handleClick = (e) => {
    this.setState({ open: !this.state.open });
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  fuck = (e) => {
    console.log(e);;;;
  }

  render() {
    const { show } = this.state;

    return (
      <div className="container">
        <NavBar
          mode="light"
          icon={<img src={logo} className="am-icon am-icon-md" alt="" />}
          onLeftClick={this.handleClick}
          className="single-top-nav-bar"
        >
          全部
          </NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={<Sidebar onClick={this.fuck}></Sidebar>}
          open={this.state.open}
          onClick={this.fuck}
          onOpenChange={this.onOpenChange}
        >
          Click upper-left corner123123
          </Drawer>
      </div>
    );
  }
}

export default App;
