import React from 'react'
import Header from './component/Header'
import { ChakraProvider } from '@chakra-ui/react'
import "./App.css"
import Hero from './component/Hero'
import '../node_modules/react-modal-video/css/modal-video.css';
import About from './component/About'
import Service from './component/Service'
import Project from './component/Project'
import Cta from './component/Cta'
import Events from './component/Events'
import Footer from './component/Footer'

export default function App() {
  return (
    <ChakraProvider>
      <Header />
      <Hero />
      <About />
      <Service />
      {/* <Project /> */}
      <Cta />
      <Events />
      <Footer />
    </ChakraProvider>
  )
}
