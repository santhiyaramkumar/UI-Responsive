import React,{useState}from "react";
import { Card, Image, SimpleGrid } from '@mantine/core';
import arrayList from './file'
import { useMediaQuery } from '@mantine/hooks';


const styles = { display: 'inline', width: '100%', height: 130, float: 'left', border:"2px solid grey", padding: 3,backgroundColor:'slateBlue',  marginBottom: 10, marginRight: 10 }


export default function App() {
  const largeScreen = useMediaQuery('(max-width:900px)');
  const [data, setData] = useState(arrayList)

  const [searchimage, setSearchImage] = useState(data)

  const handleSearchImage = (e) => {
    let value = e.target.value.toLowerCase();
    let test = [];
   
    console.log(value);
    test = data.filter((datas) => { return datas.title.search(value) != -1; });
    setSearchImage(test);
  }
  
  return(
    <Card>
      <label>Search Title : </label>
              <input style={{ width:"30%", marginTop:20,marginBottom:20 }} type="text"
              onChange={(data)=>{
                handleSearchImage(data)
              }} />

    <Card.Section inheritPadding mt="sm" pb="md">
    <SimpleGrid style={{ margin:10,marginTop:20}} cols={largeScreen ? 1: 3}>

 
      {searchimage.map((value) => (
        <div  key={value.id}>
      <img style={{ width:"100%", height:"60%",marginBottom:0,marginTop:0,width:"70px" }} src={value.url} radius="sm" />
       {value.title}</div>
   

     
        ))}
      
    </SimpleGrid>
  </Card.Section>
</Card>

  )
}
