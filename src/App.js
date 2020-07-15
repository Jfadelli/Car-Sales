import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// import {createStore } from 'redux'

// const store = createStore(reducer)
// function reducer(){
//   return{
//     title: 'hello world! I\'m in the Redux store!',
//   }
// }


// state.whatever.filter(arg) => {arg.id.look for something not in or in payload}   IMPORTANT NOTES FROM CORI
const App = (props) => {


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.state.additionalFeatures} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
