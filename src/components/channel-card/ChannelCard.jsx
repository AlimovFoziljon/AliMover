import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import {Link} from 'react-router-dom'

const ChannelCard = ({video, marginTop}) => {
    return (
        <Box 
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '356px', md: '320px'},
            height: '360px',
            margin: 'auto',
            marginTop: marginTop
        }}>
            <Link to={`/channel/${video?.id.channelId ? video?.id.channelId : video?.id}`}>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <CardMedia sx={{borderRadius: '50%', height: '180px', width: `1800px', mb: 2, border: '1px solid ${colors.secondary}`}} image={video?.snippet?.thumbnails?.default?.url} alt={video?.snippet?.title}/>
                    <Typography variant="h6">
                        {video?.snippet?.title}
                        <CheckCircle sx={{fontSize: '14px', color: colors.secondary, ml: '5px'}}/>
                    </Typography>
                    {video?.statistics?.subscriberCount && (
                        <Typography sx={{fontSize: '15px', fontWeight: 500, color: colors.secondary}}>
                            {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
}

export default ChannelCard;