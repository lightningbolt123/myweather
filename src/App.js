import './App.css';
import Header from './components/Header'
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}

export default App;
