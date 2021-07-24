import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title'

const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomFilter({rooms}) {
  const context=useContext(RoomContext)
  const{
      handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
  }=context

  //get unique types
  let types=getUnique(rooms,'type')
  //add all
  types=["all",...types]
  //map to jsx
  types=types.map((item,index)=>{
      return <option value={item} key={index}>{item}</option>
  })

  let people=getUnique(rooms,'capacity')
 
  //map to jsx
  people=people.map((item,index)=>{
      return <option value={item} key={index}>{item}</option>
  })
    return (
       <section className="filter-container">
           <Title title="search Rooms"></Title>
           <form className="filter-form">
                {/*type*/}
               <div className="form-group">
               <label htmlFor="type">roomtype</label>
               <select name="type" id="type"
                value={type}
                 className="form-control"
                 onChange={handleChange}>{types}</select>
               </div>
                {/*type*/}

               {/*guets*/}
               <div className="form-group">
               <label htmlFor="capacity">Guests</label>
               <select name="capacity" id="capacity"
                value={capacity}
                 className="form-control"
                 onChange={handleChange}>{people}</select>
               </div>
               {/*guets*/}

               {/*price*/}
               <div className="form-control">
               <label htmlFor="price">Room Price ${price}</label>
              <input type="range"  name="price" min={minPrice} 
              max={maxPrice} value={price} id="price" className="form-control"
              onChange={handleChange}></input>
               </div>
               {/*price*/}


                 {/*size*/}
                 <div className="form-group">
                     <label htmlFor="size"> Room size</label>
                     <div className="size-inputs">
                     <input type="number"  name="minSize" value={minSize} 
                     id="size" className="size-input"
              onChange={handleChange}></input>
               <input type="number"  name="maxSize" value={maxSize} 
                     id="size" className="size-input"
              onChange={handleChange}></input>
              </div>
                 </div>
                   {/*size*/}

                     {/*extras*/}
                     <div className="form-group">
                         <div className="single-extra">
                             <input type="checkbox" name="breakfast" 
                             id="breakfast" onChange={handleChange} checked={breakfast}></input>
                             <label htmlFor="breakfast">Breakfast</label>
                         </div>
                         <div className="single-extra">
                             <input type="checkbox" name="pets" 
                             id="pets" onChange={handleChange} checked={pets}></input>
                             <label htmlFor="pets">Pets</label>
                         </div>
                     </div>
                       {/*extras*/}

           </form>
       </section>
    )
}
