import {Route, Routes} from "react-router-dom";
import {CartPage, CreatePage, StorePage, TableProductsPage} from "../pages";
import {Header} from "../shared/ui";


function App() {
  return (
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<StorePage/>} />
              <Route path="/table" element={<TableProductsPage/>} />
              <Route path="/create" element={<CreatePage/>} />
              <Route path="/cart" element={<CartPage/>} />
          </Routes>
      </>
  )
}

export default App
