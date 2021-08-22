import Rotas from './Rotas';
import './App.css'

import { AuthProvider } from './Context/AuthContext'
import { AuthEstacionamento } from './Context/AuthEstacionamentoContext'

function App() {
  return (
    
    <AuthProvider>
      <AuthEstacionamento>
        <div className="App">
          <Rotas />
        </div>
      </AuthEstacionamento>
    </AuthProvider>
  );
}

export default App;
