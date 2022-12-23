import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import FooterCom from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>

      <div className="App-main">
        <Main />
      </div>

      <div className="App-footer">
        <FooterCom />
      </div>


    </div>
  );
}

export default App;
