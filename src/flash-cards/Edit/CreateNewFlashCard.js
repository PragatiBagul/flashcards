import { Card, CardContent, CardActions,CardHeader, TextField, Button, Stack, Switch,FormControl,RadioGroup,FormControlLabel,Radio, Typography } from "@mui/material";
import { useState } from "react";

const CreateNewFlashCard = ({ title, setTitle, description, setDescription, saveFlashCard, mode, setMode }) => {
        const [isPublic, setIsPublic] = useState(true);
        const [label, setLabel] = useState("Publish to all");
        const changeMode = (e) => {
                if (e.target.checked)
                {
                        setIsPublic(true);        
                        setMode("public");
                        setLabel("Publish to all");
                }
                else
                {
                        setIsPublic(false);        
                        setMode("private");
                        setLabel("Keep private");
                }
        }
    return (
            <Card>
                    <CardContent>
                        <TextField id="title" label="Title" variant="standard" value={title} onChange={e => setTitle(e.target.value)} fullWidth required />
                        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
                            variant="standard"
                             fullWidth required 
        />
                </CardContent>
                    <CardActions>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" onClick={saveFlashCard}>Save</Button>
                                    
                                    <FormControl>
                                    <FormControlLabel control={<Switch checked={isPublic} />} onChange={(e) => changeMode(e)} label={"Publish to all" } />
    </FormControl>
                                    
                                    </Stack>
                </CardActions>
        </Card>);
}
 
export default CreateNewFlashCard;