import React from 'react';
import { List } from 'antd-mobile';
import all from '../assets/images/all.svg';
import bags from '../assets/images/bags.svg';
import help from '../assets/images/help.svg';
import good from '../assets/images/good.svg';
import skip from '../assets/images/skip.svg';
import account from '../assets/images/account.svg';
import information from '../assets/images/information.svg';

const list = [{
  name: '登陆',
  thumb: account
},{
  name: '全部',
  thumb: all
},{
  name: '精华',
  thumb: good
},{
  name: '分享',
  thumb: skip
},{
  name: '问答',
  thumb: information
},{
  name: '招聘',
  thumb: bags
},{
  name: '关于',
  thumb: help
}]
const sidebar = ({onClick}) => (
  <List>
    {
      list.map((item, k) => {
        return (<List.Item key={k} thumb={item.thumb} onClick={() => onClick(item.name)}>{item.name}</List.Item>)
      })
    }
  </List>
)
export default sidebar;
