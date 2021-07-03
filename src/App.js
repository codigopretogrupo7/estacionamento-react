import Rotas from './Rotas';
import './App.css'

import { AuthProvider } from './Context/AuthContext'
import { SubmitCar } from './Context/SubmitCar'

function App() {
  return (
    
    <AuthProvider>
      <SubmitCar>
        <div className="App">
          <Rotas />
        </div>
      </SubmitCar>
    </AuthProvider>
  );
}

export default App;
