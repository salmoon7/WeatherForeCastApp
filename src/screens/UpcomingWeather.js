import { StyleSheet, Text,ImageBackground, View,SafeAreaView,StatusBar, FlatList } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'
import {Feather} from '@expo/vector-icons'



const UpcomingWeather = ({weatherData}) => {
 const {container,image}=styles
  const renderItem=({item})=>(  
    <ListItem  condition={item.weather[0].main} 
     dt_text={item.dt_txt} 
     min={item.main.temp_min} 
     max={item.main.temp_max}
     />
    
  )
  
  return (
    <SafeAreaView style={container}>
      <ImageBackground
      source={require('../../asset/upcomingImage.jpg')}
      style={image}
      >
      <Text>Upcoming Weather</Text>
      <FlatList
      data={weatherData}
      renderItem={renderItem}
      keyExtractor={(item)=>item.dt_txt}
      />
      </ImageBackground>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
container:{
    // marginTop:StatusBar.currentHeight || 0,
    flex:1,
    backgroundColor:'#F4CE6A'
},

image:{
  flex:1,
}

})

export default UpcomingWeather