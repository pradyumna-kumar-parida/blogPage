import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Blog_form from "./frontend/Blog_form";
import { Nav } from "./frontend/Nav";
import BlogData from "./frontend/BlogData";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav/>
  {/* <BlogData/> */}
  </StrictMode>
);
