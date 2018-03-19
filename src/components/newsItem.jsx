import React from 'react';

const NewsItem = ({list}) => (
  <div className="newsItem">
    <div className="title" title={list.tab}>{list.title}</div>
    <div className="content flexBox">
      <div>
        <img className="avatar" src={list.author.avatar_url} alt=""/>
      </div>
      <div className="detail flexBox">
        <div className="flexBox">
          <div>{list.author.loginname}</div>
          <div><span className="feedbacks">{list.reply_count}</span>/{list.visit_count}</div>
        </div>
        <div className="flexBox">
          <div>{list.create_at}</div>
          <div>{list.last_reply_at}</div>
        </div>
      </div>
    </div>
  </div>
)

export default NewsItem;