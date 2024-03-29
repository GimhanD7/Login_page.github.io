import React ,{ useState} from 'react';
import { LightModeOutlined,DarkModeOutlined,Menu as MenuIcon,Search,SettingOutlined,ArrowDropDownOutlined } from '@mui/icons-material'
import FlexBetween from 'component/FlexBetween'
import { useDispatch } from 'react-redux'
import {setMode} from 'state'
// import profileImage from "assert/avatar.png"
import { useTheme } from '@emotion/react';
import { AppBar, IconButton, InputBase, Toolbar } from '@mui/material';


const Navbar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  return( 
  < AppBar
    sx={{
      position :"static",
      background : "none",
      boxShadow : "none",
    }}
  >
    <Toolbar sx={{
      justifyContent:"space-between",
    }}>
      {/* {left side} */}
      <FlexBetween >
        <IconButton onClick={()=>console.log("open/close sidebar")}>
          <MenuIcon/>
        </IconButton>
        <FlexBetween
          backgroundColor = {theme.palette.background.alt}
          boderRadius="9px"
          gap="3rem"
          p="0.1rem 1.5rem" >
            <InputBase plaseholder="Search..."/>
            <IconButton >
              <Search/>
            </IconButton>
        </FlexBetween>
      </FlexBetween>

    </Toolbar>

  </AppBar>);
}

export default Navbar
