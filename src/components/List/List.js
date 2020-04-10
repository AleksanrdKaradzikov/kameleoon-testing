import React from 'react';
import Item from './Item';

class List extends React.Component {
  static Item = Item;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, renderItem } = this.props;
    return data.map((item) => renderItem(item));
  }
}

export default List;
