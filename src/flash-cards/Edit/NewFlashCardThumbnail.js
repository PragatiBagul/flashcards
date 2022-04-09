import { Grid,Card,CardContent,Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
const NewFlashCardThumbnail = ({ flashCards,setFlashCards }) => {
    const addFlashCard = () => {
        const defaultFlashCard = {
            "id":String(flashCards.length),
            "question": String(flashCards.length),
            "answer":""
        }
        setFlashCards([...flashCards,defaultFlashCard]);
    }
    return (
                <Button variant="outlined" onClick={addFlashCard}>
                <AddIcon/>
                </Button>);
}
 
export default NewFlashCardThumbnail;