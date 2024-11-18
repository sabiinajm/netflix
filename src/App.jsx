import { Route, Routes } from "react-router-dom"
import Main from "./components/intoductionPage/Main"
import IntroLayout from "./layouts/IntroLayout"
import StepsLayout from "./layouts/StepsLayout"
import Step1 from "./components/registration/Step1"
import Step2 from "./components/registration/Step2"
import Planform from "./components/registration/Planform"
import Step3 from "./components/registration/Step3"

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroLayout />}>
        <Route index element={<Main />} />
      </Route>
      <Route path="/" element={<StepsLayout />}>
        <Route path="/signup/password" element={<Step1 />} />
        <Route path="/signup" element={<Step2 />} />
        <Route path="/signup/planform" element={<Planform />} />
        <Route path="/signup/paymentPicker" element={<Step3 />} />
      </Route>
    </Routes>
  )
}
export default App