import { Route, Routes } from "react-router-dom"
import Main from "./components/intoduction/Main"
import IntroLayout from "./layouts/IntroLayout"
import StepsLayout from "./layouts/StepsLayout"
import Step2 from "./components/registration/Step2"
import Planform from "./components/registration/Planform"
import Step3 from "./components/registration/Step3"
import Step1 from "./components/registration/Step1"
import Registration from "./components/registration/Registration"
import Creditoption from "./components/registration/Creditoption"
import Login from "./components/intoduction/Login"

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroLayout />}>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<StepsLayout />}>
        <Route path="/signup/password" element={<Step1 />} />
        <Route path="/signup/registration" element={<Registration />} />
        <Route path="/signup" element={<Step2 />} />
        <Route path="/signup/planform" element={<Planform />} />
        <Route path="/signup/paymentPicker" element={<Step3 />} />
        <Route path="/signup/creditoption" element={<Creditoption />} />
      </Route>
    </Routes>
  )
}
export default App