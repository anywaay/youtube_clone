import {Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video: {id: {videoId}, snippet} }) => {
    // console.log(videoId, snippet);
  return (
    <Card sx={{width: { xs: '100%',sm: '358px', md: '320px'},boxShadow: 'none', borderRadius:'15px', backgroundColor: 'black' }}  >
        <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width: {xs: '100%', sm: '350px', md: '320px'}, height: 180}}
             />
        </Link>
        <CardContent 
            sx={{backgroundColor: 'rgba(20, 20, 20, 0.659)', height: '96px'}}>
            <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight="bold" color="#fff" lineHeight={1.3} marginBottom={1.4}>
                    {snippet?.title.slice(0,60) ||
                    demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelTitle }
                    <CheckCircle sx={{fontSize: 14, color: 'gray', ml:'5px'}} />
                </Typography>
            </Link>
        </CardContent>
        
    </Card>
  )
}

export default VideoCard