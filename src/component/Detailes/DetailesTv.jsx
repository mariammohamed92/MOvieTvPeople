/* eslint-disable no-undef */
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailesTv() {
    let[detaliestv,setDetaliesTv]=useState({});

let {id}= useParams();

   async function DetailesApiTv(id) {
        let {data}= await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`)
    console.log(data);
    setDetaliesTv(data)
    
    }

    useEffect(()=>{
        DetailesApiTv(id)  
      },[])
  return <>
  
  <div className="row mt-5">
    <div className="col-md-3">
        <img src={'https://image.tmdb.org/t/p/w500/'+detaliestv.poster_path} className='w-100' alt="" />
    </div>
    <div className="col-md-9">
    <h3 className=' h6  my-2'>{detaliestv.name}</h3>
        <p className=' py-2 '>{detaliestv.tagline}</p>
        <ul className=' list-unstyled d-flex'>
            {detaliestv.genres?.map(genres=>
           <div className=' bg-info p-3 mx-2 rounded-2'>
            {genres.name}
           </div>
          )}
            </ul>
        <p className=' py-2'> vote : {detaliestv?.vote_average?.toFixed(1)}</p>
        <p className=' py-2' > vote count : {detaliestv?.vote_count?.toFixed(1)} </p>
        <p className=' py-2'> popularity :{detaliestv?.popularity?.toFixed(1)} </p>
        <p className=' py-2'> release date :{detaliestv?.release_date} </p>      
          <p className=' py-2 '>{detaliestv.overview}</p>


    </div>
  </div>
  
  
  </>
}
