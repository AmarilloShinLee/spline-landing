import logo from './logo.svg';
import './App.css';
import { Blob } from './components/spline-landing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{position: 'absolute', width: 560, right: 96}}>
          <h1 style={{color: "#F9FF99"}}>Spline Test</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante libero, eleifend non urna vel, lacinia vehicula ante. In erat lectus, volutpat vel placerat quis, tincidunt ut elit. Integer lorem velit, egestas nec lacus a, porta laoreet nulla. Pellentesque tortor tortor, congue eget ultricies ac, ultricies gravida sem.</p>
        </div>
        <Blob />
      </header>
    </div>
  );
}

export default App;
