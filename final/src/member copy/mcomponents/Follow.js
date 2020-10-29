import React from 'react'
import '../member.css'

function Follow (){
    return(
        <>
            <div className="member_main">
          <div className="row"><h4>追蹤商品</h4></div>
          <div className="row order-detail">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">商品圖</th>
                  <th scope="col">名稱</th>
                  <th scope="col">價格</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td>洗髮精</td>
                  <td>$1000</td>
                  <td><button className="order-btn" href="">加入購物車</button></td>
                  <td><button className="order-btn" href="">移除</button></td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>洗髮精</td>
                  <td>$1000</td>
                  <td><button className="order-btn" href="">加入購物車</button></td>
                  <td><button className="order-btn" href="">移除</button></td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>洗髮精</td>
                  <td>$1000</td>
                  <td><button className="order-btn" href="">加入購物車</button></td>
                  <td><button className="order-btn" href="">移除</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </>
    )
}

export default Follow