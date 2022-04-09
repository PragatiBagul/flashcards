import { useEffect, useState } from "react";
import { Box, Accordion, Grid, AccordionSummary, Typography, AccordionDetails,IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FlashCard from "./FlashCard";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const ViewFlashCard = ({ setView, id }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [flashCards, setFlashCards] = useState([]);
    const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
    useEffect(() => 
    {
        setTimeout(() => {
            fetch('http://localhost:8000/flashCards/'+id)
              .then(res => {
                console.log(res);
                if (!res.ok)
                {
                  throw Error('couldn\'t fetch the data');
                }
                return res.json();
              })
                .then(data => {
                setTitle(data.title);
                  setDescription(data.description);
                  console.log(data.flashCards);
                setFlashCards(data.flashCards);
                setIsPending(false);
                setError(null);
              }).catch((err) => {
                setIsPending(false);
                setError(err.message);
              })  
          }, 1000);
    }, []);
  return (<Box>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
         <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
                <Typography>{ title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {description}
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
            <Grid  item  xs={0.5} sm={0.5} md={0.5} lg={0.5} xl={0.5}>
                <Box><IconButton><ChevronLeftIcon/></IconButton></Box>
            </Grid>
            <Grid  item  xs={11} sm={11} md={11} lg={11} xl={11}>
          <FlashCard flashCard={flashCards[index]}></FlashCard>
            </Grid>
            <Grid  item  xs={0.5} sm={0.5} md={0.5} lg={0.5} xl={0.5} sx={{display:"flex",flexDirection:"column",alignContent:"center"}}>
                <IconButton><ChevronRightIcon/></IconButton>
            </Grid>
        </Grid>
    </Box> );
}
 
export default ViewFlashCard;