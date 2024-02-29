import {Box, Stack, Typography} from '@mui/material'
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{position: 'sticky', backgroundColor: '#000',
    top: 0, justifyContent: 'space-between'}}>
      <Link to="/" style={{display: 'flex' , alignItems: 'center', justifyContent: 'center'}}>
        <img src={logo} alt="logo" height={45} />
        <Typography variant='h4' fontWeight="bold" ml={2} sx={{
          color: 'white', 
        }}>
        You<span style={{color: '#F31503'}}>Tube</span>
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )

export default Navbar