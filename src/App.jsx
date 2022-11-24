import './App.css'
import Navigation from './components/navigation'
import Profile from './components/profile'
import Content from './components/content'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div class="flex p-10">
        <Profile />
        <Content/>
      </div>
      <Footer />  
    </div>
  )
}

export default App
