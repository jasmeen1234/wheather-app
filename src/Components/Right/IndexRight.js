import React, {useEffect} from 'react'
import axios from "axios";
import cities from '../../Data/in.json'
import { useNavigate } from 'react-router-dom';
import  {UseWeaterAPPContext} from '../../Context/Context';
const Index=()=> {
  const navigate = useNavigate();
  const {state:{city}, dispatch} = UseWeaterAPPContext();
  console.log('UseWeaterAPPContext',UseWeaterAPPContext());
  const handleChange = (e)=>{
    const selectedCity = cities.filter(
        (city) => city.city === e.target.value
    )[0]
    //console.log('selectedCity', selectedCity);
    dispatch({
        type:'SET_CITY',
        payload:{...selectedCity}
    })
  }
    // API VAR
    const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';
    let lat = city && city.lat ? city.lat : '';
    let long = city && city.lng ? city.lng : '';
    let exclude = 'hourly,minutely';
    
    const URL =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`
    // const URL = `http://maps.openweathermap.org/maps/2.0/weather/${PAR0}/{z}/{x}/{y}?appid=${APIKEY}`;
    const fetchData = ()=>{
      axios(URL).then((data)=>{
          let _daily = data.data.daily
       
          dispatch({
              type:'SET_DAILY',
              payload:_daily,
             
          })  
          console.log('data',data.data)   
        })
      }
      useEffect(()=>{
        fetchData();
        if(!localStorage.getItem("name")){
          console.log("Already Login")
          navigate("/")
        };
     // eslint-disable-next-line
  }, [city])
  return (
    <div className="stateWrap">
      <select className="statemenu" defaultValue={city} onChange={handleChange}>
        
           {
            cities && cities.length> 0 && cities.map((city)=>{
              return(
                <option key={`${city.population}${city.lat}`} value={city.city}>
                  {city.city}-{city.admin_name}
                </option>

              )
            })
           }
        
      </select>
    </div>
  )
}

export default Index
