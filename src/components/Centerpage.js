import { red } from '@material-ui/core/colors'
import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/styles'';
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    position: "relative",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      zIndex: "-1",
      top: 0,
      bottom: 0,
      width: "10rem",
      background: `linear-gradient(to right, transparent, ${theme.palette.background.default} 50%, ${theme.palette.background.default} 50%, transparent)`,
    },
    "&::before": {
      left: 0,
    },
    "&::after": {
      right: 0,
      transform: "rotateZ(180deg)",
    },
  },
  text: {
    whiteSpace: "nowrap",
    display: "inline-block",
    animation: "$scroll 10s linear infinite",
  },
  "@keyframes scroll": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" },
  },
}));

function Centerpage(props) {
  const classes = useStyles();
  return (
    <>
    <Box sx={{
      borderRadius : 6,
      width: 400,
      padding:2,
      backgroundColor: red[500],
      '&:hover': {
        backgroundColor: red[100],
      }
    
    }} border={1} >
      <Stack direction="column">
    <Typography variant="h4" className={props.title.length <= 15 ? classes.text : ""} fontStyle="italic" fontWeight={700} color="primary" sx={{paddingLeft:2,m:1}}>{ props.title.length <= 15 ? (props.title): props.title.slice(0,15)+"...."}</Typography>
    <Typography  color="primary" sx={{paddingLeft:2,mx:1}} >{props.content}</Typography>
    <Paper elevation={10} sx={{p:2,marginLeft:4}}>{props.message}</Paper>
    </Stack>
    </Box>
    </>
    )
}

export default Centerpage