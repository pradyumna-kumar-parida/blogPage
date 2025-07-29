import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
function BlogData() {
  return (
    <div className="blog_data">
      <section>
        <div>
          <span>
            <img
              src="https://images.unsplash.com/photo-1752772318262-00af359abf09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </span>
          <span>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam quos eligendi magni inventore labore fugit odio blanditiis corporis voluptas, nobis fugiat commodi? Totam, reprehenderit libero. Eos maxime doloremque accusamus dolores, deserunt, saepe amet id ex, voluptates modi voluptas error nostrum quam eum aliquam illo. Distinctio consectetur doloribus aut debitis minus esse culpa necessitatibus? Earum libero vero vitae autem ea distinctio! Tenetur quisquam deserunt, nesciunt a aspernatur porro illo minus sed reprehenderit ratione vero, quibusdam corporis incidunt necessitatibus? Reprehenderit necessitatibus adipisci id nostrum ut voluptatum eaque nisi quas cumque quam, iusto autem distinctio sed assumenda hic nemo esse. Culpa, maxime.
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
      </section>
    </div>
  );
}

export default BlogData