import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { ApiService } from "../../service/api";
import Videos from '../videos/Videos'
import ChannelCard from '../channel-card/ChannelCard'

const Channel = () => {
    const {id} = useParams()
    const [channelInfo, setChannelInfo] = useState()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const channelData = await ApiService.fetching(`channels?part=snippet&id=${id}`)
                setChannelInfo(channelData.items[0])
                console.log(channelData)
                const videoData = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
                setVideos(videoData?.items)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [id])
    return (
        <Box minHeight={'95vh'} mt={'10vh'}>
            <Box>
                <Box 
                width={'100%'}
                height={'200px'}
                zIndex={10}
                sx={{background: `url(${channelInfo?.brandingSettings?.image?.bannerExternalUrl})`, backgroundPosition: 'center', backgroundSize: 'cover', objectFit: 'cover', backgroundRepeat: 'no-repeat'}}
                ></Box>
                <ChannelCard marginTop={'-100px'} video={channelInfo}/>
            </Box>
            <Container maxWidth={'90%'}>
                <Videos videos={videos}/>
            </Container>
        </Box>
    );
}

export default Channel;