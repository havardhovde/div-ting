import React from 'react';
import Header from "./components/Header"
import Infobox from "./components/Infobox"
import Notepad from "./components/Notepad"
import Reader from "./components/Reader"
import Footer from "./components/Footer"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Infobox />
        <Notepad />
        <Reader />
        <Footer />
      </div>
    )
  }
}
