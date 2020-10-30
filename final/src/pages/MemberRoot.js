import React from 'react'
import { Link, Switch, useParams, withRouter, Redirect } from 'react-router-dom'
import MemberMain from '../member/mcomponents/MemberMain'

import MemberNav from '../member/mcomponents/MemberNav'



function MemberRoot (props){
  const {isLogin} = props
  console.log(props)
  if (isLogin === false) return <Redirect to="/" />

    return(
      <MemberMain>
          <MemberNav />
      </MemberMain>
    )
}

export default withRouter(MemberRoot)