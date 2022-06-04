import React from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/homepage.jsx'
import Work from './pages/workpage.jsx'
import Contact from './pages/contactpage.jsx'

const App = () => {
  const [onShow, setOnShow] = React.useState('home')

  if (onShow === 'home') { return <Home setOnShow={setOnShow} /> }

  if (onShow === 'work') { return <Work setOnShow={setOnShow} /> }
    
  if (onShow === 'contact') { return <Contact setOnShow={setOnShow} /> }
    

  return (
    <div>
      <Home />
    </div>
		
  )
}

// Render
const getRoot = () => { return document.getElementById('root') }
createRoot(getRoot()).render(<App />)
