import React, { useEffect, useContext, useState } from 'react'
import { PageContainer } from '../../components/GlobalStyles/PageStyles.js'
import BookingsList from './BookingsList.js'
import { GlobalContext } from "../../utils/Context.js"
import { useQuery } from '@apollo/client'
import { GET_USER_BOOKINGS } from '../../graphql/queries/bookingQueries.js'
import PageLoader from "../../components/Loaders/PageLoader.js"
import PageError from '../../components/Error/PageError.js'
import BookingModal from '../../components/Modals/BookingModal.js'

const Bookings = (props) => {

    const { style, filter = 'user', hotel, bookingsData } = props

    const { setPage } = useContext(GlobalContext)

    useEffect(() => {
        setPage("Bookings")
    }, [])

    const [modal, setModal] = useState({
        state: false,
        title: '',
        param: null,
        action: ''
    })

    const user = JSON.parse(localStorage.getItem('user'))

    const { data, loading, error } = useQuery(GET_USER_BOOKINGS,{variables: {id: user.id}})

    if (loading) return <PageLoader />
    if (error) return <PageError error={error} />

    const bookings = bookingsData ? bookingsData : data.getUserBookings

    return (
        <PageContainer style={style}>
            {modal.state ? <BookingModal
                booking={modal.param}
                setModal={setModal}
                title={modal.title} /> : null}
            <BookingsList
                bookings={bookings}
                setModal={setModal}
                modal={modal} />
        </PageContainer>
    )
}

export default Bookings
