import React from 'react';
import blocked from './lock.png';
import './List.css';

const Item = ({ item }) => {

  let elem = null;

  if (item.status === 'disable') {
      elem = <span className="list-item__status-elem--sisabled">off</span>
  } else if (item.status === 'enable') {
      elem = <span className="list-item__status-elem--enable">on</span>
  } else if (item.status === 'blocked') {
      elem = <span className="list-item__status-elem--block"><img src={blocked} alt="Заблокировано"/></span>
  }

  return (
     <div className="list-item">
       <div className="row">
          <div className="col-lg-6">
             <span className="list-item__text">{item.name}</span>
          </div>
          <div className="col-lg-2">
             <span className="list-item__site">{item.sites} site</span>
          </div>
          <div className="col-lg-2">
              <span className="list-item__type">{item.type[0].toUpperCase() + item.type.slice(1)}</span>
          </div>
          <div className="col-lg-2">
              {elem}
          </div>
       </div>
     </div>
  )
};

export default Item;
