import React from 'react'
import { SafeAreaView,Text,StyleSheet,View, ImageBackground } from 'react-native'
import {Feather } from "@expo/vector-icons"
import IconText from '../components/IconText'
import moment from 'moment'

const City=({weatherData})=>{
    
    const {imagelayout,cityText,cityName,countryName,container,populationWrapper,riseSetWrapper,riseSetText,populationText}=styles
    const{name,country,population,sunrise,sunset}=weatherData
    return(
        <SafeAreaView style={container}>
            <ImageBackground 
            source={require('../../asset/lagosImage.jpg')}
            style={imagelayout} 
            >
            <Text style={[cityName,cityText]}>{name}</Text>
            <Text style={[countryName,cityText]}>{country}</Text>
            <View style={populationWrapper}>
                <IconText  iconName={'user'}  iconColor={'blue'}  bodyText={`[Population: ${population}]`} bodyTextStyles={populationText}/>
            </View>
            <View  style={riseSetWrapper}>
                <IconText  iconName={'sunrise'} iconColor={'white'} bodyText={moment(sunrise).format('h:mm:ss  a')} bodyTextStyles={riseSetText}/>
                <IconText  iconName={'sunset'} iconColor={'white'} bodyText={moment(sunset).format('h: mm :ss a')} bodyTextStyles={riseSetText}/>
                
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
container:{
    flex:1,
},
imagelayout:{
    flex:1,
},
cityName:{
    fontSize:40,
},
countryName:{
   
    fontSize:30,


},
cityText:{
    justifyContent:'center',
    alignSelf: 'center',
    fontWeight:'bold',
    color:'white',
    fontWeight:'bold',
},
populationWrapper:{
flexDirection:'row',
alignItems: 'center',
justifyContent:'center',
marginTop:30
},
populationText:{
fontSize:25,
marginLeft:7,
color:'blue',

},
riseSetWrapper: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-around',
    marginTop:30,
},
riseSetText: {
    fontSize:20,
    color:'white',
    
}

})
export default City