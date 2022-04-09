import { useState } from "react";
import { Stack, Divider } from "@mui/material";
import CreateNewFlashCard from "./CreateNewFlashCard";
import FlashCardEditable from "./FlashCardEditable";
import NewFlashCardThumbnail from "./NewFlashCardThumbnail";
//import { createFlashCard } from "../../utils/RequestEndPoints";
const NewFlashCardSet = ({setView}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [flashCards, setFlashCards] = useState([]);
    const [mode, setMode] = useState("public");
    const saveFlashCard = () => {
        const body = {
          "title": title,
          "description": description,
          "flashCards": flashCards,
          "mode":mode
        };
        
      /*const res = createFlashCard(body).then(() => {
        console.log('new mock test added');*/  
          
        fetch('http://localhost:8000/flashCards/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(() => {
      console.log('new flash cards added');
    })
        setView("default");
      }
    return (<Stack spacing={2}>   
        <CreateNewFlashCard mode={mode} setMode={ setMode} title={title} setTitle={setTitle} description={description} setDescription={ setDescription} saveFlashCard={ saveFlashCard}/>
            <Divider />
            {flashCards.map((questions,index) => (
              <FlashCardEditable id={ index} key={index} flashCards={flashCards} setFlashCards={ setFlashCards}/>
            ))}
        <NewFlashCardThumbnail flashCards={flashCards} setFlashCards={setFlashCards} />
      </Stack> );
}
 
export default NewFlashCardSet;