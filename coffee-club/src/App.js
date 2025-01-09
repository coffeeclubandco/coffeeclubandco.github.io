import React from 'react'
import './styles.css'
import Menu from './components/Menu'
import FeedbackForm from './components/FeedbackForm'
import header from './assets/header.png'
import logo from './assets/logo.png'


const App = () => {
  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Beverages">Beverages</a></li>
            <li className="nav-logo">
              <img src={logo} alt="Logo" className="logo" />
            </li>
            <li><a href="#Food">Food</a></li>
            <li><a href="#Company">Company</a></li>
          </ul>
        </nav> 
        <div className="header-text">
          <h1>Brewed</h1>
          <h1>For</h1>
          <h1>Friends</h1>
        </div>
        <img className="headerImage" src={header} alt="Coffee Club Logo" />
      </header>
      <main>
        <Menu />
        <FeedbackForm />
      </main>
    </div>
  )
}

export default App