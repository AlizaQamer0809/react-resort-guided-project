import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from '../components/loading'


function RoomContainer({context}){
    const{loading,sortedRooms,rooms}=context;
    if(loading){
        return <Loading/>
    }


return(
<div>
room container
<RoomFilter rooms={rooms}/>
<RoomList rooms={sortedRooms}/>
</div>)
}
export default withRoomConsumer(RoomContainer)

