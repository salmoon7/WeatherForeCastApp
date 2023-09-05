import React,{useState,useEffect} from 'react'
import * as Location from 'expo-location'
import {WEATHER_KEY_API} from '@env'



export const useGetWeather=()=>{
  const[loading,setLoading]=useState(true)
  const[location,setLocation]=useState(null)
  const[error,setError]=useState(null)
  const [weather,setWeather] =useState([])
  const[lat,setLat]=useState([])
  const[lon,setLon]=useState([])


  const fetchWeatherData = async () => {
    try{
      const res =await fetch (`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY_API}&units=metric`)
     const data=await res.json()
    setWeather(data)
   console.log(data)
    }catch(e){
      setError("Could not fetc Weather")
    } finally {
      setLoading(false)
    }
    

  }

  useEffect(() =>{
    ;(async()=>{
      const {status}=await Location.requestForegroundPermissionsAsync()
      if(status !== 'granted'){
        setError('Permission to access location was denied');
        return;
      }
      const location=await Location.getCurrentPositionAsync({})
      console.log('Location:',location.coords)
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    
    })()
  },[lat,lon])
return[loading,error,weather]
}