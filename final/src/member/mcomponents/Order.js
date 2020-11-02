import React, { useState, useEffect } from 'react'
import '../member.css'
import OrderInfo from './OrderInfo'

function Order() {
  //用localStoragex裡的id判斷是哪個帳號登入
  const localStorageInfo = localStorage.getItem('memberLogInInfo')
  const localStorageId = JSON.parse(localStorageInfo).id

  //判斷訂單狀態 「尚未付款0 處理中1 待收貨2 已完成3 已取消4」那邊
  const [viewFilter, setViewFilter] = useState(0)

  //判斷訂單狀態h5有沒有active
  const orderActive = "right-nav-item nav-link under-line"
  const orderNoneActive ="right-nav-item nav-link"

  //從資料庫拿到的訂單們
  const [OrderRows , setOrderRows] = useState([])
  
  //載入畫面時從資料庫讀去把資料set進各個項目裡
  useEffect(() => {
    if (localStorageId !== '') {
      const data = { Member_id: localStorageId }
      fetch('http://localhost:3000/member/orderinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          //console.log(res.json())
          return res.json()
        })
        .then((row) => {
          console.log(row)
          setOrderRows(row)
         })
        .catch((error) => {})
    }
  }, [])

  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>購買訂單</h4>
        </div>
        <div className="row right-nav">
          <h5 className={viewFilter === 0 ? orderActive : orderNoneActive} onClick={()=>setViewFilter(0)}>尚未付款</h5>
          <h5 className={viewFilter === 1 ? orderActive : orderNoneActive} onClick={()=>setViewFilter(1)}>處理中</h5>
          <h5 className={viewFilter === 2 ? orderActive : orderNoneActive} onClick={()=>setViewFilter(2)}>待收貨</h5>
          <h5 className={viewFilter === 3 ? orderActive : orderNoneActive} onClick={()=>setViewFilter(3)}>已完成</h5>
          <h5 className={viewFilter === 4 ? orderActive : orderNoneActive} onClick={()=>setViewFilter(4)}>已取消</h5>
        </div>
        <OrderInfo
        viewFilter={viewFilter}
        OrderRows={OrderRows}
         />
      </div>
    </>
  )
}

export default Order
