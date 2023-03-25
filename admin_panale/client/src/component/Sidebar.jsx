import React from 'react'
import { Box,Divider,
Drawer,
IconButton,
List,
ListItem,
ListItemButton,
ListItemIcon,
ListItemText,
Typography,
useTheme } from '@mui/material';
import {
    SettingOutlined,
    ChevronLeft,
    ChevroRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups20Outlined,
    ReceipLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined, 
    TodayOutlined,
    CalendarMonthOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
    AdminPanelSettingsOutlined

} from "@mui/icons-material";
import {useState,useEffect } from "react"
import FlexBetween, {useLocation ,useNavigate} from "./FlexBetween"
import profileImage from "assets/avatars.png"
import { isObject } from '@mui/x-data-grid/internals';

const navItems=[
  {
    text:"Dashboard",
    icon:<HomeOutlined/>
  },
  {
    text:"Client Facing",
    icon:null,
  },
  {
    text:"Products",
    icon:<ShoppingCartOutlined/>
  },
  {
    text:"Customers",
    icon:<Groups20Outlined/>
  },
  {
    text:"Transactions",
    icon:<ReceipLongOutlined/>
  },
  {
    text:"Geography",
    icon:<PublicOutlined/>
  },
  {
    text:"Sales",
    icon:null
  },
  {
    text:"Overview",
    icon:<PointOfSaleOutlined/>
  },
  {
    text:"Daily",
    icon:<TodayOutlined/>
  },
  {
    text:"Monthly",
    icon:<CalendarMonthOutlined/>
  },
  {
    text:"Breakdown",
    icon:<PieChartOutlined/>
  },
  {
    text:"Management",
    icon:<null/>
  },
  {
    text:"Admins",
    icon:<AdminPanelSettingsOutlined/>
  },
  {
    text:"Performances",
    icon:<TrendingUpOutlined/>
  },


]
 const Sidebar=({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,})=> {
    const{pathname}=useLocation();
    const [active,setActive]=useState("");
    const navigate =useNavigate();
    const theme=useTheme();

    useEffect(()=>{
      setActive(pathname.substring(1));

    },[pathname])
  
  return <Box component="nav">
    {isSidebarOpen && (
    <Drawer
      open={isSidebarOpen}
      onClose={()=> setIsSidebarOpen(false)}
      variant="persistent"
      anchor="left"
      sx={{
        width:drawerWidth,
        "&.MuiDrawer-paper":{
          color:theme.palette.secondary[200],
          backgroundColor:theme.palette.background.alt,
          boxSixing:"border-box",
          borderWidth:isNonMobile ? 0:"2px",
          width:drawerWidth

        }
      }}
      >
        <Box width="100%">
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography variant="h4" fontWeight="bold">
                  Rovister

                </Typography>
              </Box>
                {!isNonMobile && (
                  <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft/>
                  </IconButton>
                )}
            </FlexBetween>
          </Box>
          <List>
            {navItems.map(({text,icon})=>{
                if(!icon){
                  return(
                    <Typography key={text} sx={{m:"2.25rem 0 1rem 3rem"}}>
                      {text}
                    </Typography>
                  )
                }
                const lcText=text.toLowerCase();
                return (
                  <ListItem key ={text} disablePadding>
                    <ListItemButton
                    onClick={()=>{
                      navigate(`/${lcText}`);
                      setActive(lcText);
                    }}>

                    </ListItemButton>
                  </ListItem>
                )
              }
            }
          </List>
        </Box>
      </Drawer>
      )}
  </Box>;
}

export default Sidebar