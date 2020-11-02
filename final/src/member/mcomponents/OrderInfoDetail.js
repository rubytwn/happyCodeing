import React, { useState, useEffect } from 'react'
import '../member.css'

function OdrerInfoDetail(props) {
  //訂單商品的收合狀態
  const [orderDetail, setOrderDetail] = useState(false)
  //資料庫裡的資訊
  const {
    OrderCode,
    MemberName,
    OrderName,
    OrderMobile,
    OrderDeliverType,
    setOrderDeliverType,
    Order_deliver_store,
    OrderPackageId,
    OrderPay,
  } = props

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
            訂購人： <span>{OrderRows.Member_name}</span>
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
    </>
  )
}

export default OdrerInfoDetail
