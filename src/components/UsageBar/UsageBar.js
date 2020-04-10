import React from 'react';
import './UsageBar.css';

const UsageBar = ({ sort, changeSortHandler }) => {
  return (
    <div className="usage-bar ">
        <div className="row">
          <div className="col-lg-6">
            <span className="usage-bar__sort-text">
                <span>Tool Name</span>
                <span className="sort-arrow">
                    <span  onClick={changeSortHandler}
                           data-sort="desc"
                           className={`${sort === 'desc' ? "active" : ""}`}>▲</span>
                    <span onClick={changeSortHandler}
                          data-sort="asc"
                          className={`${sort === 'asc' ? "active" : ""}`}>▼</span>
                </span>
            </span>
          </div>
          <div className="col-lg-2">
            <span className="usage-bar__text">Used on</span>
          </div>
          <div className="col-lg-2">
            <span className="usage-bar__text">Type</span>
          </div>
          <div className="col-lg-2">
          <span className="usage-bar__text">Status</span>
          </div>
        </div>
    </div>
  );
};

export default UsageBar;


