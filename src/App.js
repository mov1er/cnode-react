import React, { Component } from 'react';
import { Menu, ActivityIndicator, NavBar, Drawer, List, Icon } from 'antd-mobile';
import logo from './assets/images/Category.svg';
import account from './assets/images/account.svg';

const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];

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
    console.log(e)
    this.setState({ open: !this.state.open });
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }

  render() {
    const { initData, show } = this.state;
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb={account}
            multipleLine
          >登陆</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    return (
      <div className={show ? 'single-menu-active' : ''}>
        <div>
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
            sidebar={sidebar}
            open={this.state.open}
            onOpenChange={this.onOpenChange}
          >
            Click upper-left corner123123
          </Drawer>
        </div>
      </div>
    );
  }
}

export default App;
