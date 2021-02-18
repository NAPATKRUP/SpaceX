import React from 'react'
import Header from '../components/Header'

const LaunchDetail = props =>{
    
    const { mission_name } = props.location.state

    return(
        <div>
            <Header />
            {mission_name}
        </div>
    )
}

export default LaunchDetail;