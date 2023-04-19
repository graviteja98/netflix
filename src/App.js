import { Typography,Grid,Box } from '@mui/material';
import './App.css';

import Centerpage from './components/Centerpage'; 
import Navhead from './components/Navhead';
function App() {

  const myaray = [{"title":"Anna Madelina (Ngon na ma dak lin na)","time":"7/12/2022","description":"Comedy|Romance"},
  {"title":"Prometheus","time":"2/24/2023","description":"Action|Horror|Sci-Fi|IMAX"},
  {"title":"Cop","time":"5/10/2022","description":"Thriller"},
  {"title":"Spy in Black, The","time":"6/6/2022","description":"Thriller|War"},
  {"title":"Disco Godfather","time":"9/26/2022","description":"Action|Crime|Drama"},
  {"title":"Hurry Sundown","time":"7/11/2022","description":"Drama"},
  {"title":"Conformist, The (Conformista, Il)","time":"12/4/2022","description":"Drama"},
  {"title":"Midsummer Night's Party, A (Midsummer of Love, A) (Sommaren med Göran)","time":"2/22/2023","description":"Comedy"},
  {"title":"Hollywood Knights, The","time":"12/23/2022","description":"Comedy"},
  {"title":"Star Trek","time":"11/7/2022","description":"Action|Adventure|Sci-Fi|IMAX"},
  {"title":"Dead Ringer","time":"3/10/2023","description":"Drama|Thriller"},
  {"title":"Platform (Zhantai)","time":"11/13/2022","description":"Drama"},
  {"title":"Satyricon","time":"5/9/2022","description":"Drama"},
  {"title":"Hand, The (Ruka)","time":"4/29/2022","description":"Animation"},
  {"title":"Force 10 from Navarone","time":"10/27/2022","description":"Action|Drama|War"},
  {"title":"The Man Who Could Cheat Death","time":"10/21/2022","description":"Horror|Sci-Fi"},
  {"title":"Wristcutters: A Love Story","time":"9/20/2022","description":"Drama|Fantasy|Romance"},
  {"title":"Chennai Express","time":"4/6/2023","description":"Action|Adventure|Comedy"},
  
 ]
  console.log(myaray[0].title)
  return (
    <>
    <Navhead/>
    <Box sx={{ flexGrow: 1 }}>
   <Grid container spacing={1} >
{
    myaray.map(a => <Grid item xs={3}><Centerpage title={a.title} content={a.time} message={a.description}/></Grid>)
    }
   </Grid>
   </Box></>
  );
}

export default App;
