import React from 'react'
import '../member.css'

function FollowTbody(props){

    const {id ,name, price ,deleteMethod} = props

    return(
        <>
            <tr>
                <td>{id}</td>
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