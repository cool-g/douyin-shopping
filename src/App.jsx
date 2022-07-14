import React from 'react'
import './App.css'
import RoutesConfig from '@/routes'

function App() {
  
  return (
    <div className="App">
      {/* <Suspense fallback={<div>loading...</div>}> */}
        <RoutesConfig />
      {/* </Suspense> */}
     
    </div>
  )
}

export default App
