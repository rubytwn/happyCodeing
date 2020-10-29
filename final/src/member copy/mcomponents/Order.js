import React, { useState } from 'react'
import '../member.css'


function Order() {
  const [orderDetail, setOrderDetail] = useState(false)
  const orderDetailTable = (
    <>
      <div className="row align-items-center">
        <h5 className="col-8">共3件</h5>
        <h3 className="col-2">$3000</h3>
        <button className="col-2 order-btn" onClick={() => setOrderDetail(true)}>
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
        <button className="col-2 order-btn" onClick={() => setOrderDetail(false)}>
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
            <span className="order-title">訂單編號</span>
            <span className="odrder-code">20043UUHWGGI</span>
          </div>
          <div className="order-info">
            <p className="order-s-title">收件地址</p>
            <p className="order-content">王小明</p>
            <p className="order-content">0911***394</p>
            <p className="order-content">台北市大安區00路00號0樓</p>
            <hr />
            <p className="order-s-title">運送資訊</p>
            <p className="order-content">OK Mart 大安門市</p>
            <p className="order-content">包裹查詢號碼: SALW00291</p>
            <p className="order-content">超商取貨付款</p>
            <hr />

            {orderDetail ? nonOrderDetail : orderDetailTable}
          </div>
        </div>
      </div>
    </>
  )
}

export default Order
