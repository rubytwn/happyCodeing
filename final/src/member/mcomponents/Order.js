import React, { useState, useEffect } from 'react'
import '../member.css'

function Order() {
  //用localStoragex裡的id判斷是哪個帳號登入
  const localStorageInfo = localStorage.getItem('memberLogInInfo')
  const localStorageId = JSON.parse(localStorageInfo).id

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
          setOrderState(row[0].Order_State)
          setOrderCode(row[0].Order_code)
          setMemberName(row[0].Member_name)
          setOrderName(row[0].Order_name)
          setOrderMobile(row[0].Order_mobile)
          setOrderDeliverType(row[0].Order_deliver_type)
          setOrderDeliverStore(row[0].Order_deliver_store)
          setOrderPackageId(row[0].Order_package_id)
          setOrderAddress(row[0].Order_address)
          setOrderPay(row[0].Order_pay)
        })
        .catch((error) => {})
    }
  }, [])

  //判斷取貨方式
  switch (OrderDeliverType) {
    case 'a':
      const a = '全家'
      setOrderDeliverType(a)
      break
    case 'b':
      const b = '7-11'
      setOrderDeliverType(b)
      break
    case 'c':
      const c = 'ok'
      setOrderDeliverType(c)
      break
    case 'd':
      const d = '萊爾富'
      setOrderDeliverType(d)
      break
    case 'e':
      const e = '郵寄'
      setOrderDeliverType(e)
      break
    default:
      break
  }

  //判斷付款狀態
  // const OrderPayState = OrderPay.slice(1, 3)
  // switch (OrderPayState) {
  //   case 'a10':
  //     const newOrderPay1 = ' 信用卡未付'
  //     setOrderPay(newOrderPay1)
  //     break
  //   case '20':
  //     const newOrderPay2 = ' 信用卡已付'
  //     setOrderPay(newOrderPay2)
  //     break
  //   case '30':
  //     const newOrderPay3 = ' 轉帳未付'
  //     setOrderPay(newOrderPay3)
  //     break
  //   case '40':
  //     const newOrderPay4 = ' 轉帳已付'
  //     setOrderPay(newOrderPay4)
  //     break
  //   case '50':
  //     const newOrderPay5 = ' 超商取貨付款'
  //     setOrderPay(newOrderPay5)
  //     break

  //   default:
  //     break
  // }

  //訂單商品的收合狀態
  const [orderDetail, setOrderDetail] = useState(false)
  //訂單商品的詳細
  const orderDetailTable = (
    <>
      <div className="row align-items-center">
        <h5 className="col-8">共3件</h5>
        <h3 className="col-2">$3000</h3>
        <button
          className="col-2 order-btn"
          onClick={() => setOrderDetail(true)}
        >
          收合
        </button>
      </div>
      <div className="row order-detail">
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">商品圖</th>
              <th scope="col">名稱</th>
              <th scope="col">數量</th>
              <th scope="col">價格</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>洗髮精</td>
              <td>1</td>
              <td>$1000</td>
              <td>
                <button href="">查看商品詳細頁</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>洗髮精</td>
              <td>1</td>
              <td>$1000</td>
              <td>
                <button href="">查看商品詳細頁</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>洗髮精</td>
              <td>1</td>
              <td>$1000</td>
              <td>
                <button href="">查看商品詳細頁</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
  const nonOrderDetail = (
    <>
      <div className="row align-items-center">
        <h5 className="col-8">共3件</h5>
        <h3 className="col-2">$3000</h3>
        <button
          className="col-2 order-btn"
          onClick={() => setOrderDetail(false)}
        >
          展開
        </button>
      </div>
    </>
  )

  //  const c = function  () {if (window.location.pathnamee === '/order'){
  //     document.querySelector('.nav-link ').addEventListener.addClass('active')
  //   }else{
  //     document.querySelector('.nav-link ').addEventListener.reMoveClass('active')
  //   }}
  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>購買訂單</h4>
        </div>
        <div className="row right-nav">
          <h5 className="right-nav-item-l nav-link">尚未付款</h5>
          <h5 className="right-nav-item nav-link">處理中</h5>
          <h5 className="right-nav-item nav-link under-line">待收貨</h5>
          <h5 className="right-nav-item nav-link">已完成</h5>
          <h5 className="right-nav-item nav-link">已取消</h5>
        </div>
        <div>
          <div className="row order-part">
            <p className="order-title">
              訂單編號
              <span className="odrder-code">{OrderCode}</span>
            </p>
          </div>
          <div className="order-info">
            <p className="order-s-title">訂單資訊</p>
            <p className="order-content">
              訂購人： <span>{MemberName}</span>
            </p>
            <p className="order-content">
              收件人： <span>{OrderName}</span>
            </p>
            <p className="order-content">
              收件人電話： <span>{OrderMobile}</span>
            </p>
            <hr />
            <p className="order-s-title">運送資訊</p>
            <p className="order-content">
              {OrderDeliverType} {Order_deliver_store}
            </p>
            <p className="order-content">
              包裹查詢號碼： <span>{OrderPackageId}</span>
            </p>
            <p className="order-content">
            付款方式： <span>{OrderPay}</span>
            </p>
            <p className="order-content">
              收貨地址： <span>台北市大安區00路00號0樓</span>
            </p>
            <hr />

            {orderDetail ? nonOrderDetail : orderDetailTable}
          </div>
        </div>
      </div>
    </>
  )
}

export default Order
