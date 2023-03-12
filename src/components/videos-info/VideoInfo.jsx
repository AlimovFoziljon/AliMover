import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api";
import ReactPlayer from "react-player";
import Loader from "../loader/Loader";
import { CheckCircle, Comment, FavoriteOutlined, Visibility } from "@mui/icons-material";
import { colors } from "../../constants/colors";
import Videos from '../videos/Videos'
import { Link } from "react-router-dom";


const VideoInfo = () => {
    const {id} = useParams()
    const [videoInfo, setVideoInfo] = useState(null)
    const [suggestedVideo, setSuggestedVideo] = useState([])

    useEffect(() => {
        const getData = async () =>{
            try {
                const data = await ApiService.fetching(`videos?part=snippet, statistics&id=${id}`)
                setVideoInfo(data.items[0])
                const suggestedData = await ApiService.fetching(`search?part=snippet&relatedVideoId=${id}&type=video`)
                setSuggestedVideo(suggestedData.items)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[id])

    if (!videoInfo?.snippet) return <Loader />

    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display={'flex'} sx={{flexDirection: {xs: 'column', md: 'row'}}}>
                <Box width={{xs: '100%', md: '75%'}}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
                    <Typography variant="h5" fontWeight={'bold'} p={2}>
                        {videoInfo.snippet.title}
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={'bold'} p={2}>
                        {videoInfo.snippet.description}
                    </Typography>
                    <Stack direction='row' gap='20px' alignItems='center' py={1} px={2}>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <Visibility />
                            {parseInt(videoInfo.statistics.viewCount).toLocaleString()} views
                        </Stack>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <FavoriteOutlined />
                            {parseInt(videoInfo.statistics.likeCount).toLocaleString()} likes
                        </Stack>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <Comment />
                            {parseInt(videoInfo.statistics.commentCount).toLocaleString()} comments
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} py={1} px={2}>
                    <Link to={`/channel/${videoInfo?.snippet?.channelId}`}>
                        <Stack direction={'row'} alignItems={'center'} gap={'5px'} marginTop={'5px'}>
                            <Avatar 
                            alt={videoInfo.snippet.channelTitle}
                            src={videoInfo.snippet.thumbnails.default.url}
                            />
                            <Typography variant="subtitle2" color={colors.secondary}>
                                {videoInfo.snippet.channelTitle}
                                <CheckCircle sx={{fontSize: '12px', color: colors.secondary, ml: '5px'}}/>
                            </Typography>
                        </Stack>
                    </Link>
                    </Stack>
                </Box>
                <Box 
                width={{xs: '100%', md: '25%'}}
                px={2}  
                py={{md: 1, xs: 5}}
                justifyContent='center'
                alignItems='center'
                overflow='scroll'
                maxHeight={'100vh'}
                >
                    <Videos videos={suggestedVideo}/>
                </Box>
            </Box>
        </Box>
    );
}

export default VideoInfo;