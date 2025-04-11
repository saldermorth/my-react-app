// src/App.jsx
import MusicGroups from './components/MusicGroups'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Music Database</h1>
      </header>
      <main>
        <MusicGroups />
      </main>
    </div>
  )
}

export default App