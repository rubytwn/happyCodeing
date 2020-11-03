import React, { useState, useEffect } from 'react'
import '../member.css'
import FollowTbody from './FollowTbody'

function Follow() {

  const [memberFollowindItems,setMemberFollowindItems] = useState([])
  // 
  // const localStorageMemberFollowindItems = JSON.parse(localStorageItems)
  // setMemberFollowindItems(localStorageMemberFollowindItems)

   //從localStorage拿追蹤商品
  function getItemFromLocalStorage(){
    const localStorageItems = localStorage.getItem('memberFollowindItems')
    setMemberFollowindItems(JSON.parse(localStorageItems))
  }

  //要傳到<FollowTbody /> 從追蹤清單移除的方法
  const handleDelete = (id) => {
    const newMemberFollowindItems = memberFollowindItems.filter((item, index) => item.id !== id)
    const afterDel =   localStorage.setItem('memberFollowindItems' , JSON.stringify(newMemberFollowindItems))
      setMemberFollowindItems(afterDel)
  }

  useEffect(()=>{
    getItemFromLocalStorage()
  },[memberFollowindItems])


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