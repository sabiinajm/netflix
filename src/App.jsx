import { Route, Routes } from "react-router-dom"
import Main from "./components/homepage/Main"
import HomeLayout from "./layouts/HomeLayout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  )
}
export default App