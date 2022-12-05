import React, { Component } from 'react';
import Footer from "./component/footer";
import Header from "./component/header";
import Service from "./component/service";
// import UploadImageForm from './component/UploadImageForm';
import Dropzone from './component/tt';
import Banner from './component/banner';
import Tech from './component/tech';
import { Container } from "reactstrap";

import './App.css';

class App extends Component {
  state = {
      posts: []
  };

  async componentDidMount() {
      try {
          const res = await fetch('http://127.0.0.1:8000/api/');
          const posts = await res.json();
          this.setState({
              posts
          });
      } catch (e) {
          console.log(e);
      }
  }
  
  render() {
    return (
      <>
       <Banner />
        <Header/>
        <Container style={{margin:"10px"}}>
          <Dropzone/>
        </Container>
        <Container style={{display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
          <Service/>
          <Tech/>
        </Container> 
      
      <Footer/>

      </>
          );
  }
}

export default App;

