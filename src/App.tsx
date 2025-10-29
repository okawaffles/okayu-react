import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import Home from "./pages/Home.tsx";
import Upload from "./pages/Upload.tsx";
import Login from "./pages/Login.tsx";
import NotFound from "./pages/NotFound.tsx";

// It's October 29th, 2025, and I'm GOING to learn React.
// I've tried in the past, and I've always given up.
// But today that will change. I can't wait to see what the future brings me.
// Good luck, future Millie!

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route element={<RootLayout />}>
                      <Route index element={<Home />} />
                      <Route path={"upload"} element={<Upload />} />
                      <Route path={"login"} element={<Login />} />
                      <Route path={"settings"} element={<Login />} />

                      {/* handle if route is not found by wildcarding. keep at the end! */}
                      <Route path={"*"} element={<NotFound />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
