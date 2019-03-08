import styles from './css/main.scss';
import React from 'react';

export default class App extends React.Component {

  displayName: 'App';
  props: any;
  constructor(props){
    super(props);
    this.state = {};
  }

  render () {


    const main =  {
      display: "flex",
      flexWrap: "wrap",
      background: "#FFFFFF",
      width: "100%",
      height: "2600px",
    }

    return (

      <div style = {main} >
      </div>
    );
  }
}
