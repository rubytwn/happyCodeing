import React, { useState } from 'react'
import '../member.css'
//import OrderInfoDetail from './OrderInfoDetail'

function OdrerInfo(props) {
  //判斷訂單狀態
  const { OrderRows } = props

  //資料庫裡的資訊
  //const [OrderState, setOrderState] = useState() //包裹狀態
  //const [OrderCode, setOrderCode] = useState() //訂單編號
  //   const [MemberName, setMemberName] = useState() //下訂的會員name
  //   const [OrderName, setOrderName] = useState() //收件人name
  //   const [OrderMobile, setOrderMobile] = useState() //收件人mobile
  //   const [OrderDeliverType, setOrderDeliverType] = useState() //運送的超商
  //   const [Order_deliver_store, setOrderDeliverStore] = useState() //運送的門市
  //   const [OrderPackageId, setOrderPackageId] = useState() //包裹查詢號碼
  //   const [OrderAddress, setOrderAddress] = useState() //宅配地址
  //   const [OrderPay, setOrderPay] = useState() //付款狀態

  //   setOrderState(OrderRows.Order_State)
  //   setOrderCode(OrderRows.Order_code)
  //   setMemberName(OrderRows.Member_name)
  //   setOrderName(OrderRows.Order_name)
  //   setOrderMobile(OrderRows.Order_mobile)
  //   setOrderDeliverType(OrderRows.Order_deliver_type)
  //   setOrderDeliverStore(OrderRows.Order_deliver_store)
  //   setOrderPackageId(OrderRows.Order_package_id)
  //   setOrderPay(OrderRows.Order_pay)

  //訂單商品的收合狀態
  const [orderDetail, setOrderDetail] = useState(false)
  //資料庫裡的資訊
  // const {
  //   OrderCode,
  //   MemberName,
  //   OrderName,
  //   OrderMobile,
  //   OrderDeliverType,
  //   setOrderDeliverType,
  //   Order_deliver_store,
  //   OrderPackageId,
  //   OrderPay,
  // } = props

  //判斷取貨方式
  // switch (OrderDeliverType) {
  //   case 'a':
  //     const a = '全家'
  //     setOrderDeliverType(a)
  //     break
  //   case 'b':
  //     const b = '7-11'
  //     setOrderDeliverType(b)
  //     break
  //   case 'c':
  //     const c = 'ok'
  //     setOrderDeliverType(c)
  //     break
  //   case 'd':
  //     const d = '萊爾富'
  //     setOrderDeliverType(d)
  //     break
  //   case 'e':
  //     const e = '郵寄'
  //     setOrderDeliverType(e)
  //     break
  //   default:
  //     break
  // }

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

  return (
    <>
      {OrderRows.map((item, index) => {
        return (
          <div key = {item.Order_id}>
            <div className="row order-part">
              <p className="order-title">
                訂單編號
                <span className="odrder-code">{item.Order_code}</span>
              </p>
            </div>
            <div className="order-info">
              <p className="order-s-title">訂單資訊</p>
              <p className="order-content">
                訂購人： <span>{item.Member_name}</span>
              </p>
              <p className="order-content">
                收件人： <span>{item.Order_name}</span>
              </p>
              <p className="order-content">
                收件人電話： <span>{item.Order_mobile}</span>
              </p>
              <hr />
              <p className="order-s-title">運送資訊</p>
              <p className="order-content">
                {item.Order_deliver_type} {item.Order_deliver_store}
              </p>
              <p className="order-content">
                包裹查詢號碼： <span>{item.Order_package_id}</span>
              </p>
              <p className="order-content">
                付款方式： <span>{item.Order_pay}</span>
              </p>
              <p className="order-content">
                收貨地址： <span>台北市大安區00路00號0樓</span>
              </p>
              <hr />

              {orderDetail ? nonOrderDetail : orderDetailTable}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default OdrerInfo
