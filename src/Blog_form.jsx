import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

function Blog_form() {
    const [title, setTitle] = useState('');
  const [desc, setdesc] = useState('');

  const handelsubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3015/userdata", {
        title,
        description: desc,  // ✅ Make sure key name matches backend
      });
      console.log("Submitted:", response.data);
    } catch (err) {
      console.error("Error submitting:", err);
    }
  };

  return (
    <div className="blog_form">
      <h1>blog-section</h1>
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
              // onChange={(e) => setimg(e.target.files[0])}

            />
          </span>
          <span>
            <Button variant="contained" disableElevation id="submit_btn" type="submit">
              Submit
            </Button>
          </span>
        </form>
        <hr />
        <div>
          <Button variant="outlined" id="blog_view">
            Blog view
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Blog_form;
