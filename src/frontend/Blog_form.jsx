import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Baseurl } from "./utils";

function Blog_form() {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [img, setimg] = useState(null);
  const navigate = useNavigate();

  const handelsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("img", img);

    try {
      const response = await axios.post(Baseurl() + "userdata", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      // ✅ After successful submission, navigate to blog view
      navigate("/blogdata");
    } catch (err) {
      console.error("Error submitting:", err);
    }
  };

  return (
    <div className="blog_form">
      <h1>Add-Blog</h1>
      <section>
        <form onSubmit={handelsubmit}>
          <span>
            <label htmlFor="blog_title">Title:</label>
            <input
              type="text"
              id="blog_title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </span>
          <span>
            <label htmlFor="blog_desc">Description:</label>
            <textarea
              name="description"
              id="blog_desc"
              rows="9"
              onChange={(e) => setdesc(e.target.value)}
              required
            ></textarea>
          </span>
          <span>
            <label htmlFor="blog_img">Blog Img:</label>
            <input
              type="file"
              id="blog_img"
              name="blog_img"
              accept="image/*"
              onChange={(e) => setimg(e.target.files[0])}
              required
            />
          </span>
          <span>
            <Button
              variant="contained"
              disableElevation
              id="submit_btn"
              type="submit"
            >
              Submit
            </Button>
          </span>
        </form>
        <hr />
        <div>
          <Button
            variant="outlined"
            id="blog_view"
            onClick={() => navigate("/blogdata")}
          >
            Blog view
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Blog_form;
