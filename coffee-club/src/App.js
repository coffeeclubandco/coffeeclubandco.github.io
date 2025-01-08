import React from 'react'
import './styles.css'
import Menu from './components/Menu'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Coffee Club</h1>
      </header>
      <main>
        <Menu />
        <FeedbackForm />
      </main>
    </div>
  )
}

export default App