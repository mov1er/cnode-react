import React, { Component } from 'react';
import { NavBar, Drawer } from 'antd-mobile';
import logo from './assets/images/category.svg';
import Sidebar from './components/sidebar.jsx';
import NewsItem from './components/newsItem';

let lists = [];


class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
      open: false,
      fetched: false
    };
  }

  componentWillMount() {
    fetch(`https://cnodejs.org/api/v1/topics?`)
      .then(res => res.json())
      .then(res => {
        lists = res.data;
        this.setState({fetched: true});
      })
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
          
          { this.state.fetched &&
            lists.map((item, k) => {
              return <NewsItem list={item} key={k}/>
            })
          }
        </Drawer>
      </div>
    );
  }
}

export default App;
