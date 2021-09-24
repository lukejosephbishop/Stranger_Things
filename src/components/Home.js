import React from "react"

const Home = () => {

    return (<div className='home-page-text'>
        <h1>Welcome to Stranger's Things!</h1>
        {/* {user.username ? 
        <div>Currently logged in as <b>{user.username}</b></div>
        : 
        <div>Please login above.</div>} */}
        <img className='home-gif' src="strangersthings.gif" />
    </div>)
}

export default Home