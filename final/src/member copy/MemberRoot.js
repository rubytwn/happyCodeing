import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import MemberMain from './mcomponents/MemberMain'

import MemberNav from './mcomponents/MemberNav'
import AboutMe from './mcomponents/AboutMe'
import Order from './mcomponents/Order'
import Refund from './mcomponents/Refund'
import Level from './mcomponents/Level'
import Follow from './mcomponents/Follow'
import AccountSetting from './mcomponents/AccountSetting'



function MemberRoot (){
    return(
      <MemberMain>
          <MemberNav />
          <AboutMe />
      </MemberMain>
    )
}

export default MemberRoot