import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from 'axios';
import { Baseurl } from './utils';

function BlogData() {
  const [resData, setresData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Baseurl() + "getdata");
        setresData(response.data); // ✅ correct way to set array of data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // ✅ call the async function
  }, []);

  return (
    <div className="blog_data">
      <section>
        {resData.map((data, index) => (
          <div key={index}>
            <span>
              <img
                src={data.file}
                alt="blog"
              />
            </span>
            <span>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">
                    {data.title || "Untitled"} {/* assuming data.title exists */}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {data.description || "No description provided."}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </span>
            <span>
              <Fab color="primary" aria-label="delete" id="delete_btn">
                <DeleteIcon />
              </Fab>
              <Fab color="secondary" aria-label="edit" id="edit_btn">
                <EditIcon />
              </Fab>
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default BlogData;
