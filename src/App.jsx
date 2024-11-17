import { Route, Routes } from "react-router-dom"
import Main from "./components/intoductionPage/Main"
import IntroLayout from "./layouts/IntroLayout"
import StepsLayout from "./layouts/StepsLayout"
import Step1 from "./components/registration/Step1"

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroLayout />}>
        <Route index element={<Main />} />
      </Route>
      <Route path="/" element={<StepsLayout />}>
        <Route path="/signup/password" element={<Step1 />} />
      </Route>
    </Routes>
  )
}
export default App