import Header from "./components/Header";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import { Route, Routes } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
  return (
    <FeedbackProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </FeedbackProvider>
  );
}

export default App;
