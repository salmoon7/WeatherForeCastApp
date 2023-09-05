import React,{useState,useEffect} from 'react'
import {View ,Text,StyleSheet, Button} from 'react-native'

const Counter=()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log(`Our counter is ${count}`)
    })
    return(
        <View style={styles.container}>
           <Text  style={styles.title}>{`count:${count}`}</Text> 
           <Button color={'red'}  title={'Increase th(e count'}
           onPress={()=>{setCount(count+1) 
        console.log(count)
        }  }
           />
           <Button
           color={'green'}
           title={'Decrease the count'}
           onPress={()=>setCount(count-1)
        
        
        }
           
           />
            </View>
  
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange'
    },
    title:{
        alignSelf: 'center',
        fontSize:25,
        marginTop:25
    }
})
export default Counter