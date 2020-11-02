import React, { useState, useEffect } from 'react'
import '../member.css'
import OrderInfoDetail from './OrderInfoDetail'

function OdrerInfo(props) {
  //判斷訂單狀態
  const { viewFilter, OrderRows } = props

  //資料庫裡的資訊
  const [OrderState, setOrderState] = useState() //包裹狀態
  const [OrderCode, setOrderCode] = useState() //訂單編號
  const [MemberName, setMemberName] = useState() //下訂的會員name
  const [OrderName, setOrderName] = useState() //收件人name
  const [OrderMobile, setOrderMobile] = useState() //收件人mobile
  const [OrderDeliverType, setOrderDeliverType] = useState() //運送的超商
  const [Order_deliver_store, setOrderDeliverStore] = useState() //運送的門市
  const [OrderPackageId, setOrderPackageId] = useState() //包裹查詢號碼
  const [OrderAddress, setOrderAddress] = useState() //宅配地址
  const [OrderPay, setOrderPay] = useState() //付款狀態

  return (
    <>
      {OrderRows.map((item, index) => {
        if (viewFilter === 0 && item.OrderState > 1) return <></>
        if (viewFilter === 1 && item.OrderState === 1) return <></>
        return (
          <OrderInfoDetail
            OrderCode={OrderCode}
            MemberName={MemberName}
            OrderName={OrderName}
            OrderMobile={OrderMobile}
            OrderDeliverType={OrderDeliverType}
            setOrderDeliverType={setOrderDeliverType}
            Order_deliver_store={Order_deliver_store}
            OrderPackageId={OrderPackageId}
            OrderPay={OrderPay}
          />
        )
      })}
    </>
  )
}

export default OdrerInfo
