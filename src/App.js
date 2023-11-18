import logo from './logo.svg';
import './App.css';
import React from 'react';
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';

class FullName extends React.Component{
  render(){
    return <p>{this.props.firstName} {this.props.lastName}</p>
  }
}


function App() {
  const user = {firstName:"Junior", lastName:"Mboumba"}
  return (
    <div style={styles.p}>
        <p>Prénom : {user.firstName}</p>
        <p>Nom : {user.lastName}</p>
        <FullName firstName={user.firstName} lastName={user.lastName}/>
    </div>
  );
}

const styles = {
  p:{color:"blue", fontSize:30}
}

export default App;
