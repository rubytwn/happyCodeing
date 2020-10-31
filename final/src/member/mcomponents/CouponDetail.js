import React from 'react'
import Gift from '../images/coupon.svg'

function Coupon(props) {
  const { coupon_name, coupon_rule, coupon_date, coupon_code } = props
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <div className="coupon-svg-div">
                <img src={Gift} className="coupon-svg" alt="" />
              </div>
            </div>
            <div className="col-8">
              <h5 className="card-title">艸艸了事</h5>
              <h6 className="card-title">[{coupon_name}]</h6>
              <p className="card-text">{coupon_rule}</p>
              <p className="card-text">使用期限︰{coupon_date.slice(0, 4)}/{coupon_date.slice(5, 7)}/{coupon_date.slice(8, 10)}前</p>
              <hr />
              <p className="card-text">
                {coupon_code}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coupon
