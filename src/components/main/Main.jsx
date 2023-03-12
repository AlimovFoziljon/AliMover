import Category from "../category/Category";
import { Stack, Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Videos from "../videos/Videos";
import { ApiService } from "../../service/api";

const Main = () => {
    const [category, setCategory] = useState('New')
    const [videos, setVideos] = useState([])

    const categoryHandler = (category) =>{
        setCategory(category)
    }

    useEffect(() =>{
        ApiService.fetching(`search?part=snippet&q=${category}`).then(data => setVideos(data.items))
    }, [category])

    return (
        <Stack>
            <Category categoryHandler={categoryHandler} category={category} />
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={"90%"}>
                    <Typography variant="h4">
                        {category} Videos
                    </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>
        </Stack>
    );
}

export default Main;