import React from 'react'
import styled from 'styled-components'
import { Image, Text } from '../../components/GlobalStyles/PageStyles'
import HotelIMG from "../../assets/hotel.jpeg";
import RoomDetails from './RoomDetails';
import { useQuery } from '@apollo/client';
import { GET_AVAILABLE_ROOMS } from '../../graphql/queries/roomQueries';
import PageLoader from "../../components/Loaders/PageLoader"
import ComponentError from '../../components/Error/ComponentError';
import HotelIMG2 from "../../assets/hotel2.jpeg"
var images = [HotelIMG, HotelIMG2]
const Details = styled.div`
    border: 0.5px solid #d8d8d8;
    padding: 16px
`

export const ManagerView = (props) => {
    const { hotel, params } = props
    const ratings = !hotel.ratings ? 0.00 : hotel.ratings

    const rooms = hotel.rooms

    return (
        <div>
            <div style={{ display: 'flex', width: '100%' }}>
                <Image style={{ backgroundImage: `url(${hotel.image ? hotel.image : images[Math.floor(Math.random() * images.length)]})`, height: "300px", width: "60%", }} />
                <Details style={{ width: '40%', marginLeft: '20px' }}>
                    <Text className="small">Location: <span>{hotel.location}</span></Text>
                    console.log(ratings);
                    <Text className="small">Rating: <span className="highlight">{ratings}4.5</span></Text>
                    <Text className="small">Price: <span>1500-5960/-</span></Text>
                </Details>
            </div>
            <Details style={{ marginTop: '20px' }}>
                <Text className="clip">{hotel.name}</Text>
                <Text className="clamp small" style={{ marginTop: '12px' }}>{hotel.description}</Text>
            </Details>
            <Details style={{ marginTop: '20px' }}>
                <Text className="clip">Manager Details</Text>
                <Text className="clamp small" style={{ marginTop: '12px' }}>{hotel.manager.name}</Text>
                <Text className="clamp small" style={{ marginTop: '12px' }}>
                    Contact: <span>{hotel.manager.email}</span>
                </Text>
            </Details>
            <Text style={{ marginTop: '20px' }}>Rooms</Text>
            <div style={{ marginTop: '20px' }}>
                {rooms.map(r => (
                    <RoomDetails room={r}
                        roomNumbers={[]}
                        params={params} />
                ))}
            </div>
        </div>
    )
}


const HotelDetails = (props) => {

    const { hotel, params } = props
    let total = Object.values(params.people).reduce((a, b) => a + b)

    const { data, loading, error } = useQuery(GET_AVAILABLE_ROOMS, {
        variables: {
            hotelId: hotel.id,
            from: params.from,
            to: params.to,
            occupancy: total
        }
    })
    const ratings = !hotel.ratings ? 0.00 : hotel.ratings

    if (loading) return <PageLoader />
    if (error) return <ComponentError error={error} />

    const rooms = data.getAvailableRooms

    return (
        <div>
            <div style={{ display: 'flex', width: '100%' }}>
                <Image style={{ backgroundImage: `url(${hotel.image ? hotel.image : images[Math.floor(Math.random() * images.length)]})`, height: "300px", width: "60%", }} />
                <Details style={{ width: '40%', marginLeft: '20px' }}>
                    <Text className="small">Location: <span>{hotel.location}</span></Text>
                    <Text className="small">Ratings: <span className="highlight">{ratings}</span></Text>
                    <Text className="small">Price: <span>1500-5960/-</span></Text>
                </Details>
            </div>
            <Details style={{ marginTop: '20px' }}>
                <Text className="clip">{hotel.name}</Text>
                <Text className="clamp small" style={{ marginTop: '12px' }}>{hotel.description}</Text>
            </Details>
            <Details style={{ marginTop: '20px' }}>
                <Text className="clip">Manager Details</Text>
                <Text className="clamp small" style={{ marginTop: '12px' }}>{hotel.manager.name}</Text>
                <Text className="clamp small" style={{ marginTop: '12px' }}>
                    Contact: <span>{hotel.manager.email}</span>
                </Text>
            </Details>
            <Text style={{ marginTop: '20px' }}>Rooms</Text>
            <div style={{ marginTop: '20px' }}>
                {rooms.map(r => (
                    <RoomDetails room={r.room}
                        roomNumbers={r.roomNumbers}
                        params={params} />
                ))}
            </div>
        </div>
    )
}

export default HotelDetails
