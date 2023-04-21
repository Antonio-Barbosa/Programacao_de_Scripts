import { Provider } from "./contexts";
import Principal from "./pages/Principal";
import './App.css'



function App() {

  return (
    <Provider>
      <Principal />
    </Provider>
  )
}

export default App;
