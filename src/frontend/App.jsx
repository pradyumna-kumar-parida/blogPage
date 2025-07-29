import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog_form from "./Blog_form";
import BlogData from "./BlogData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog_form />} />
        <Route path="/blogdata" element={<BlogData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
