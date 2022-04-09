import { Card, CardContent,Typography } from "@mui/material";
const FlashCard = ({flashCard}) => {
    return (<>{flashCard != null && (<Card>
        <CardContent>
            <Typography variant="h3">{flashCard.question}</Typography>
            <Typography variant="h3">{flashCard.answer}</Typography>
        </CardContent>
    </Card>)}
    </>);
}
export default FlashCard;