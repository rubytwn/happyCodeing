import React, { useState, useEffect } from 'react'
import '../member.css'
import FollowTbody from './FollowTbody'

function Follow() {


  const [memberFollowingItems,setMemberFollowingItems] = useState([])

  // const localStoragememberFollowingItems = JSON.parse(localStorageItems)
  // setMemberFollowingItems(localStoragememberFollowingItems)

   //從localStorage拿追蹤商品
  function getItemFromLocalStorage(){
    const localStorageItems = localStorage.getItem('memberFollowingItems')
    setMemberFollowingItems(JSON.parse(localStorageItems))
  }

  //要傳到<FollowTbody /> 從追蹤清單移除的方法
  const handleDelete = (id) => {
    const newmemberFollowingItems = memberFollowingItems.filter((item, index) => item.id !== id)
    const afterDel =   localStorage.setItem('memberFollowingItems' , JSON.stringify(newmemberFollowingItems))
      setMemberFollowingItems(afterDel)
  }

  useEffect(()=>{
    getItemFromLocalStorage()
  },[memberFollowingItems])


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
            {memberFollowingItems.map((item, index) => {
              return(
              <FollowTbody
                key={item.id}
                picture={item.picture}
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