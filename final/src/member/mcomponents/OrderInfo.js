import React, { useState } from 'react'
import '../member.css'
import OrderInfoDetail from './OrderInfoDetail'

function OdrerInfo(props) {
  //判斷訂單狀態
  const { OrderRows } = props

  return (
    <>
      {OrderRows.map((item, index) => {
        return (
            <OrderInfoDetail 
                key={item.Order_id}
                Order_code={item.Order_code}
                Member_name={item.Member_name}
                Order_name={item.Order_name}
                Order_mobile={item.Order_mobile}
                Order_deliver_type={item.Order_deliver_type}
                Order_deliver_store={item.Order_deliver_store}
                Order_package_id={item.Order_package_id}
                Order_pay={item.Order_pay}
            />
        )
      })}
    </>
  )
}

export default OdrerInfo
