import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { colors } from "../../constants/colors";
import { ApiService } from "../../service/api";
import Videos from "../videos/Videos";

const Search = () => {
    const [videos, setVideos] = useState([])
    const {id} = useParams()
    
    useEffect(() =>{
        ApiService.fetching(`search?part=snippet&q=${id}`).then(data => setVideos(data.items))
    }, [id])

    console.log(videos)
    return (
        <Box p={2} sx={{height: '90vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant="h4" fontWeight={'bold'} mb={2}>
                    Search results for <span style={{color: colors.primary}}>{id}</span>
                </Typography>
            </Container>
            <Videos videos={videos}/>
        </Box>
    );
}

export default Search;