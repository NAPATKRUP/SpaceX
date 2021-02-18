import React from 'react'
import Header from '../components/Header'

const LaunchDetail = props =>{
    
    const data = props.location.state?.data
    
    console.log(data.mission_name)

    return(
        <div>
            <Header />
            {/* {mission_name} */}
        </div>
    )
}

export default LaunchDetail;