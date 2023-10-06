import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BetadayzerovercelappByHtm from "./pages/BetadayzerovercelappByHtm";
import { useEffect } from "react";
import Login  from "./components/Login"


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BetadayzerovercelappByHtm />} />
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
  );
}
export default App;
