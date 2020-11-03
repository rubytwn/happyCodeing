import React, { useState, useEffect } from 'react'
import '../member.css'

function OrderItemTable(props) {
  const {
    Order_Picture,
    Order_Detail_name,
    Order_Detail_amount,
    Order_Detail_price,
  } = props
  return (
    <>
      <tr>
        <th scope="row">
          <div className="orderItemImg">
            <img src={Order_Picture} alt="" />
          </div>
        </th>
        <td>{Order_Detail_name}</td>
        <td>{Order_Detail_amount}</td>
        <td>{Order_Detail_price}</td>
        <td>
          <button href="">查看商品詳細頁</button>
        </td>
      </tr>
    </>
  )
}

export default OrderItemTable
