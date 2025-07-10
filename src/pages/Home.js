import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header title="Web Developer"/>
      <About />
      <Projects />
      <Footer name="Benjamin Pritchard"/>
    </div>
  );
}

export default Home;