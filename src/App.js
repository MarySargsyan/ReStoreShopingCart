import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
  state = { 
    counters:[
      {id :1, productName: "Iphone 12", img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery1-2021_FMT_WHH?wid=750&hei=778&fmt=jpeg&qlt=90&.v=1617122866000", value :0},
      {id :1, productName: "Airpods pro", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzy4RR9W9eGMKh6uZg5pV5ZEVZjjOXq2pmg&usqp=CAU", value :0},
      {id :1, productName: "Ipad pro", img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/rfb-ipad-pro10in-rosegold-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1582330343120", value :0},
    ]
  } 

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  };

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id != counterId);
      this.setState({counters});
  };

  render (){
    return (
    <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length} />
      <main className='container'>
        <Counters 
        counters = {this.state.counters}
        onReset = {this.handleReset}
        onIncrement = {this.handleIncrement}
        onDelete = {this.handleDelete}/>
      </main>
    </React.Fragment>
  );
}

}

export default App;
