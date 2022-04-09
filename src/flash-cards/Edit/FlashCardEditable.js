import { TextField } from "@mui/material";
import { useEffect,useState } from "react";

const FlashCardEditable = ({flashCards,setFlashCards,id}) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState(""); 
    const submit = () => {
        var flashCard;
            flashCard = {
                "question": question,
                "answer":answer
            };
        let newArr = [...flashCards]; // copying the old datas array
        newArr[id] = flashCard; // replace e.target.value with whatever you want to change it to
        setFlashCards(newArr);
    }
    const deleteMockTest = async() => {
        setFlashCards(flashCards.filter((mockTest,index) => index != id));
        console.log("Deleted successfully ");
    }
    useEffect(() => {
        submit();
    },[question,answer]);
    return (  
        <>
        <TextField id="question" label="Question" variant="standard" value={question} onChange={e => setQuestion(e.target.value)} fullWidth required/>
        <TextField id="answer" label="Answer" variant="standard" value={answer} onChange={(e) => setAnswer(e.target.value)}  fullWidth required />
    </>  );
}
 
export default FlashCardEditable;