import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as route from './routes/Slug'
import {Header} from "./component/Header.jsx";
import {Footer} from "./component/Footer.jsx";
import {Home} from "./pages/home.jsx";
import {Result} from "./pages/result.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Header/>
            <div className={'app-padding py-10'}>
              <Routes>
                <Route path={route.ROOT_PATH} element={<Home/>} />
                <Route path={route.RESULT_PATH} element={<Result/>} />
              </Routes>
            </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
