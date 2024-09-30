import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Tv() {
let [tv,setTv]=useState([]);

 async function TvTrend() {
    let{data}= await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`)
  console.log(data.results);
  setTv(data.results)
  }

  useEffect(()=>{
    TvTrend()
  },[])
  return <>
   <div className="container mt-5">
    <div className="row">
      {tv.map((ele)=><div className="col-md-3">
        <div className=" position-relative">
        <Link to={`/detailstv/${ele.id}`} className=' text-decoration-none'>
<img src={'https://image.tmdb.org/t/p/w500/'+ele.poster_path} className='w-100' alt="" />
<div className="imgLayer">
  <div className="imginfo">
    <h6>{ele.name}</h6>
  </div>
</div>

<h3>{ele.name}</h3>
{/* Vote */}
{ele.vote_average?
        <div className="bg-info p-2 text-white position-absolute top-0 end-0">
          {ele.vote_average?.toFixed(1)}
          </div>
          :
          ''}


</Link>
</div>
      </div>

    )}
    </div>
  </div>
  </>
}
