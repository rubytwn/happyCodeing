import React from 'react'
import '../member.css'

function FollowTbody(props) {
  const { picture, name, price, deleteMethod } = props

  return (
    <>
      <tr>
        <th scope="row">
          <div className="orderItemImg">
            <img src={picture} alt="" />
          </div>
        </th>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <button className="order-btn" href="">
            加入購物車
          </button>
        </td>
        <td>
          <button className="order-btn" href="" onClick={deleteMethod}>
            移除
          </button>
        </td>
      </tr>
    </>
  )
}

export default FollowTbody
