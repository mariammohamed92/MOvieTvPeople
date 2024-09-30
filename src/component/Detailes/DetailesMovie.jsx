/* eslint-disable no-undef */
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailesMovie() {
    let[detaliesmovie,setDetaliesmovie]=useState({});

let {id}= useParams();

   async function DetailesApi(id) {
        let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`)
    console.log(data);
    setDetaliesmovie(data)
    
    }

    useEffect(()=>{
        DetailesApi(id)
    },[])
  return <>
  
  <div className="row mt-5">
    <div className="col-md-3">
        <img src={'https://image.tmdb.org/t/p/w500/'+detaliesmovie.poster_path} className='w-100' alt="" />
    </div>
    <div className="col-md-9">
    <h3 className=' h6  my-2'>{detaliesmovie.title}</h3>
        <p className=' py-2 '>{detaliesmovie.tagline}</p>
        <ul className=' list-unstyled d-flex'>{detaliesmovie.genres?.map(genres=>
           <div className=' bg-info p-3 mx-2 rounded-2'>
            {genres.name}
           </div>
          )}
            </ul>
        <p className=' py-2'> vote : {detaliesmovie?.vote_average?.toFixed(1)}</p>
        <p className=' py-2' > vote count : {detaliesmovie?.vote_count?.toFixed(1)} </p>
        <p className=' py-2'> popularity :{detaliesmovie?.popularity?.toFixed(1)} </p>
        <p className=' py-2'> release date :{detaliesmovie?.release_date} </p>      
          <p className=' py-2 '>{detaliesmovie.overview}</p>


    </div>
  </div>
  
  
  </>
}
