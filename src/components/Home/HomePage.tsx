import React from 'react';
import Header from './Header';
import TopRated from './TopRated';
import Footer from './Footer';
import { useEffect, useState } from "react"

function HomePage() {
    const [users, setUsers] = useState([])
    const jeff = ''
    
    const fetchUserData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }

    useEffect(() => {fetchUserData()}, [])
    
    return (
    <>
        <Header />
        <TopRated users={jeff} />
        <Footer />
    </>
    )
}

export default HomePage;