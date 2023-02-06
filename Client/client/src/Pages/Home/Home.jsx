import React from 'react'

import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSide from '../../components/RightSide/RightSide'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
const Home = () => {
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <HomeMainbar />
                <RightSidebar />
                <ProfileSide />
                <PostSide />
                <RightSide />
            </div>
        </div>
    )
}


export default Home
