
import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './pages/AppRouter'
import { NavigationBar } from "./pages/NavigationBar"
import { Navigation } from "./pages/Navigation"
import { DynamicNavigation } from "./pages/DynamicNavigation"



function App() {
  return (
    <div>
    <BrowserRouter>
      <DynamicNavigation/>
      <AppRouter/>
    </BrowserRouter>
    </div>
    
  )
}

export default App;


