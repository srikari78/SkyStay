import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '../../components/GlobalStyles/PageStyles'
import Loader from '../../components/Loaders/Loader'
import SearchBar from '../../components/SearchBar/SearchBar'
import ListHeader from './ListHeader'
import ListItem from "./ListItem"

const Container = styled.div`
    margin-top: 20px;

`

const RoomsList = (props) => {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const listItems = ['Image', 'Room Name', 'Description', "Price", 'Occupancy', 'Ratings', 'Added On', 'Actions']
    let rooms = props.rooms.filter(r => {
        return r.name.toLowerCase().includes(query.toString().toLowerCase())
    })

    return (
        <Container>
            <SearchBar
                query={query}
                setQuery={setQuery}
                placeholder="Search rooms by names..." />

            <ListHeader list={listItems} />
            {!loading ? rooms.map(room =>
                <ListItem key={room.id} data={room}
                    setRoomModal={props.setRoomModal}
                    setLoading={setLoading} />)
                : <Loader />}
            {rooms.length === 0 &&
                <Text className="small" style={{ textAlign: 'center', marginTop: '20px' }}>No Rooms</Text>}
        </Container>
    )
}

export default RoomsList
