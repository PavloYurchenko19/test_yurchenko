import './App.css'
import {Route, Routes} from "react-router-dom";
import {StorePage} from "../pages/StorePage";
import {Header} from "../shared/ui";


function App() {
  return (
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<StorePage/>} />
          </Routes>
      </>
  )
}

export default App
