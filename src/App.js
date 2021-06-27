import Rotas from './Rotas';
import './App.css'

import { AuthProvider } from './Context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Rotas />
      </div>
    </AuthProvider>
  );
}

export default App;
