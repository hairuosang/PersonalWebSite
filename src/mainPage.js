import styles from './css/main.scss';
import React from 'react';

export default class MainPage extends React.Component {

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
      width: "300px",
      height: "600px",
      border: "solid black 1px",
      marginTop: "100px",
    }

    return (

      <div style = {main} >

      </div>

    );
  }
}
