import MainBody from "./components/Main/MainBody"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import ErrorPage from "./components/ErrorPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainBody />} />
          <Route path="zakuski" element={<MainBody />} />
          <Route path="hotdogs" element={<MainBody />} />
          <Route path="kombo" element={<MainBody />} />
          <Route path="shaurma" element={<MainBody />} />
          <Route path="pizza" element={<MainBody />} />
          <Route path="vok" element={<MainBody />} />
          <Route path="deserts" element={<MainBody />} />
          <Route path="sauces" element={<MainBody />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
