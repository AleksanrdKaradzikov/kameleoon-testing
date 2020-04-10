import React from 'react';
import SearchBar from '../SearchBar';
import UsageBar from '../UsageBar';
import List from '../List';
import data from '../../data/data.json';

const desc = (itemA, itemB) => {
    return itemA.name > itemB.name ? 1 : -1;
}

const asc = (itemA, itemB) => {
  return itemA.name > itemB.name ? -1 : 1;
}


class App extends React.Component {

  state = {
    data: data,
    text: '',
    sort: 'desc',
  };

  changeTextHandler = (event) => {
    const value = event.target.value;
    this.setState({ text: value });
  }

  search(data) {
    const { text } = this.state;
    if (text === '') {
      return data;
    } else {
      return data.filter(({ name }) => {
         return name.toUpperCase().includes(text.toUpperCase());
      })
    }
  }

  changeSortHandler = (event) => {
      const sort  = event.target.dataset.sort;
      this.setState({ sort });
  }

  dataSort(data) {
    const { sort } = this.state;
    if (sort === 'desc') { 
      return data.slice().sort(desc)
    } else { 
      return data.slice().sort(asc);
    }
  }

  render() {
    const { data, text, sort } = this.state;
    const newData = this.search(this.dataSort(data));
    return (
      <div className="container">
         <div className="wrapp">
              <SearchBar value={text} onChange={this.changeTextHandler}/>
              <div className="cards-wrapp shadow-sm">
                <UsageBar changeSortHandler={this.changeSortHandler}
                          sort={sort}/>
                {newData.length > 0 ? (
                   <List  data={newData}
                   renderItem={(item) => {
                     return <List.Item  key={item.name}
                                        item={item} />;
                   }} />
                ): (
                  <div className="no-search">К сожалению по вашему запросу ничего не найдено</div>
                )}
              </div>
           </div>
      </div>
    );
  }
}

export default App;
