import './App.css';
import PersonalData from './components/formDestino';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <span id="headerTitle">Ally Destinos</span>
      </div>
      <div className="Sections">
        <PersonalData />
      </div>
      <div className="Footer">
        <span id="footerText">
          Desenvolvido por Jonatha Botelho para o desafio do processo seletivo
          da Ally Hub. 2022 ©
        </span>
      </div>
    </div>
  );
}

export default App;
