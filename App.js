import { useEffect, useState } from "react"
import axios from "axios";
import { Card,  SimpleGrid } from '@mantine/core';
import "./styles.css"

import { useMediaQuery } from '@mantine/hooks';
function App() {
  // const { classes } = useStyles();
  const largeScreen = useMediaQuery('(max-width:900px)');
  const styles = { display: 'inline', width: '100%', height: 130, float: 'left', border:"2px solid grey", padding: 3,backgroundColor:'slateBlue',  marginBottom: 10, marginRight: 10 }
 
  
  const [data, setData] = useState([])

  const [searchimage, setSearchImage] = useState(data)

  const handleSearchImage = (e) => {
    let value = e.target.value.toLowerCase();
    let test = [];
    console.log(value);
    test = data.filter((datas) => { return datas.title.search(value) != -1; });
    setSearchImage(test);
  }


  useEffect(() => {
    {
      axios("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
          console.log(response.data)
          setData(response.data)
          setSearchImage(response.data)
        })
        .catch(error => { console.log('Error data',error) })
    }
  }, [])
  return (
    <div >
    <Card>
  
    
        <label>Search Title : </label>
        <input style={{ width:"40%", marginTop:10,marginBottom:10 }} type="text" onChange={(e) => handleSearchImage(e)} />
        <Card.Section >
    <SimpleGrid cols={largeScreen ? 1: 3}>
     
          {searchimage.map((value) => {

            return (
              <div key={value.id}  style={styles} >
                <img style={{ width:"100%", height:"40%",marginBottom:0,marginTop:0,width:"70px" }} alt="image1" src={value.url} />
                <div>{value.title}</div>
              </div>
            )
          })}

        </SimpleGrid>
      </Card.Section>
 
</Card>
</div>
  );
}

export default App;




//  I import useeffect and usestate from react
//  import axios from axios
//  function component used
// I used 2 state handling because 1st state json data to hold 
// 2nd state ... I used for that second state data to copy the first data in searchdata for search image title
//then handlesearch for onchange method in input field
//first whatever we search in title it converted to lowercase
//we create array for seacrch to the hold data
//return to hold all value in this array
//I used callback functions for each items represents in array
//in state data is allapi values store i use data.filter because i only search image title so using filter to properties name etc..  
//then return array value equal to .search method value is not eqaual to -1 means 
//parameter using to what i search in within the text display
//its state data and filtered data  equal to result it will print
//useEffect using for two state handling in make api request for api call   
//then this function return a response or error
//thorugh the parameter to get response the data keys and values from objects in api from 1 &2 state
//onchange event in pass value to new value in handlesearchimage
//map using for  function calling in an  each element array create new array
//return wrap the div tag to refer url and search title 
