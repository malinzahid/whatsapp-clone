import React, { useState, useEffect } from 'react'
import { useStateProviderValue } from "./StateProvider";
import SidebarChat from './SidebarChat.js'
import "./Sidebar.css"
import { Avatar, IconButton, FormControl, TextField } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import db from './firebase.js'

function Sidebar() {

    const [rooms, setRooms] = useState([])
    const [{ user }, dispatch] = useStateProviderValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms (snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
        return () => {
            unsubscribe()
        }
    }, [])


return (
<div>
    <div className="sidebar">

        <div className="sidebar__header">
            <Avatar src={user?.photoURL}/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLarge />
                </IconButton>
                <IconButton>
                    <Chat />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>

        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search here" type="text"/>
            </div>
        </div>

        <div className="sidebar__chats">
            <SidebarChat addNewChat/>
            {rooms.map(room => (
               <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
            ))}
        </div>
    </div>
</div>
)
}

export default Sidebar