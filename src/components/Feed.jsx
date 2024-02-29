import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'

import { Sidebar, Videos} from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory]= useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items));
    // console.log(videos);
    // console.log(typeof(videos));
  }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection: {sx:"column", md: "row"}}}>
      <Box sx={{ height: {sx: 'auto', md: "92vh"}, borderRight: '1px solid #3d3d3d', px:{sx: 0, md: 2}}}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2'
        sx={{mt: 1.5, color: '#fff'}}>
          @ Copyright 2022 Youtube Media          
        </Typography>
      </Box>
      <Box  pt={0} pb={2} pl={3} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight="bold" position='fixed'  pb={2} sx={{
          color: 'white',  backgroundColor: 'black', width: {sx: 'auto', md: "100vw"}
        }}  >
         {selectedCategory}  <span style={{color: '#F31503'}}> Videos </span>
        </Typography>
        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed