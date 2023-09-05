import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';


const CurrentWeather=({weatherData})=> {
  const{wrapper,container,tempStyle,feels,highLowWrapper,highLow,bodyWrapper,description,meassage}=styles
  const{main:{temp,feels_like,temp_max,temp_min},weather}=weatherData
  const weatherCondition=weather[0].main
  return (
    <SafeAreaView style={[wrapper,{backgroundColor:weatherType[weatherCondition].backgroundColor}]}>
    <View style={container}>
    <Feather name={weatherType[weatherCondition].icon} size={100} color="white"/>
    <Text style={tempStyle}>{temp}</Text>
    <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
    <RowText messageOne={`High: ${temp_max}° `}   messageTwo={`Low: ${temp_min}°`} containerStyles={highLowWrapper}  messageOneStyles={highLow}  messageTwoStyles={styles.highLow}/>
   </View>
    
    <RowText messageOne={weather[0].description}  messageTwo={weatherType[weatherCondition].message}  containerStyles={bodyWrapper}  messageOneStyles={description}  messageTwoStyles={meassage}/>
    
    
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor: '#5DA3FA',
  },
  container: {
    flex: 1,
   
    alignItems: 'center',
  
  },
  tempStyle:{
    fontSize:48,
    color:'#000'
  },
  feels:{
    fontSize:30,
    color:'#000000',

  },
  highLow:{
    color:"#000000",
    fontSize:20,
  },
  highLowWrapper:{
    flexDirection:'row',
  },
  bodyWrapper:{
    paddingLeft:25,
    justifyContent:'center',
    alignItems:'flex-start',
    marginBottom:40,
  },
  description:{
    fontSize:48,
  },
  meassage:{
    fontSize:30,
  }
});

export default CurrentWeather
