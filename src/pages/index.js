import React from 'react'
import ActiveCampaign from '../components/ActiveCampaign'

import BGImage from '../images/background.jpg'
import StealthLogo from '../images/stealth_logo.png'

function Index() {
  return (
    <div className="page-container" style={{backgroundImage: `url(${BGImage})`}}>

      <div className="content-container">
      <img src={StealthLogo} alt="Stealth Connnections Logo" id="logo" />

      <h1>VIP PARTIES. INVITATION ONLY.</h1>
      <p>Sign up below to get the chance to join the party.</p>




      <ActiveCampaign/>
      </div>



    </div>

    
  )
}

export default Index
