import React, { useState, useEffect } from 'react'
import '../member.css'
import FollowTbody from './FollowTbody'

function Follow() {

  const [memberFollowindItems,setMemberFollowindItems] = useState(
    [
      {
        "id": "a001",
        "name": "海倫鮮度絲清爽洗髮精",
        "price": 1000
      },
      {
        "id": "b001",
        "name": "多芬保濕洗髮精",
        "price": 2000
      },
      {
        "id": "b001",
        "name": "花王植萃洗髮精",
        "price": 1500
      }
    ]
  )
  // const localStorageItems = localStorage.getItem('memberFollowindItems')
  // const localStorageMemberFollowindItems = JSON.parse(localStorageItems)
  // setMemberFollowindItems(localStorageMemberFollowindItems)

  const handleDelete = (id) => {
    const newMemberFollowindItems = memberFollowindItems.filter((item, index) => item.id !== id)

      setMemberFollowindItems(newMemberFollowindItems)
  }

  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>追蹤商品</h4>
        </div>
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
            {memberFollowindItems.map((item, index) => {
              return(
              <FollowTbody
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                deleteMethod={() => handleDelete(item.id)}
               />
            )})}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Follow
