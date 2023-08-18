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
        <div className={'bg-darkColor font-signikaNegative'}>
          <Header/>
            <div className={'flex justify-center min-h-[calc(100vh-129px)]'}>
              <div className={'w-full lg:w-2/3 px-5 lg:px-0 py-5 lg:py-10 '}>
                <Routes>
                  <Route path={route.ROOT_PATH} element={<Home/>} />
                  <Route path={route.RESULT_PATH} element={<Result/>} />
                </Routes>
              </div>
            </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
