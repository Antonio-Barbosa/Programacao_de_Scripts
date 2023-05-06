import { Provider } from "./contexts";
import './App.css'
import { Principal } from "./components/Principal/Principal";



function App() {

  return (
    <Provider>
      <Principal />
    </Provider>
  )
}

export default App;
