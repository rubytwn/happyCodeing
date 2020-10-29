import React, { useState,useEffect } from 'react'
import '../member.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Favorite from '../images/favorite.svg'
import Svg3 from '../images/3.svg'
import Svg4 from '../images/4.svg'
import Box from '../images/box.svg'

function AboutMe() {
  const [ memberName , setMemberName ]=useState('')
  useEffect(() => {
    let isSub = true;
    fetch("http://localhost:3000/member/setting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        // console.log(res.json());
        return res.json();
      })
      .then(res => {
        if(isSub){
          console.log(res);
          setMemberName(res[0].name);
        }
      })
      .catch(error => {
        console.log(error);
      });
    return () => (isSub = false);
  }, []);
  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>關於我</h4>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6" style={{ padding: '0' }}>
                <div
                  style={{
                    backgroundColor: 'antiquewhite',
                    height: '160px',
                    width: '160px',
                  }}
                ></div>
              </div>
              <div className="col-6">
                <p>{memberName}</p>
                <p>
                  <span>黃金會員 </span>
                  <span> 台灣</span>
                </p>

                <div className="mb-3">
                  <span>目前評價</span>
                  <span>
                    <img
                      src={Favorite}
                      style={{ height: '23px' }}
                      alt=""
                    />
                  </span>
                  <span>
                    <img
                      src={Favorite}
                      style={{ height: '23px' }}
                      alt=""
                    />
                  </span>
                  <span>
                    <img
                      src={Favorite}
                      style={{ height: '23px' }}
                      alt=""
                    />
                  </span>
                </div>
                <Link
                  to="#"
                  className="nav-link edit-avatar"
                  style={{ padding: '0' }}
                >
                  修改大頭貼
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6 mission" style={{ height: '200px' }}>
            <div
              style={{
                marginBottom: '10px',
                padding: '20px',
                border: '1px #d3d3d5 solid',
                borderRadius: '5px',
              }}
            >
              <h6>當年度任務</h6>
              <p>完成以下任二條件，可升級白金會員</p>
              <div style={{ display: 'flex' }}>
                <img
                  src={Svg3}
                  style={{ width: '85px', height: '85px' }}
                  alt=""
                />
                <div style={{ marginLeft: '15px' }}>
                  <div>
                    <img
                      src={Box}
                      style={{ height: '16px' }}
                      alt=""
                    />
                    <span>消費滿3000</span>
                  </div>
                  <div>
                    <img
                      src={Box}
                      style={{ height: '16px' }}
                      alt=""
                    />
                    <span>消費(含)三次以上</span>
                  </div>
                  <div>
                    <img
                      src={Box}
                      style={{ height: '16px' }}
                      alt=""
                    />
                    <span>完成艸小遊戲</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginBottom: '10px',
                padding: '20px',
                border: '1px #d3d3d5 solid',
                borderRadius: '5px',
              }}
            >
              <h6>下年度任務</h6>
              <p>完成以下任二條件，可升級鑽石會員</p>
              <div style={{ display: 'flex' }}>
                <img
                  src={Svg4}
                  style={{ width: '85px', height: '85px' }}
                  alt=""
                />
                <div style={{ marginLeft: '15px' }}>
                  <div>
                    <img
                      src={Box}
                      style={{ height: '16px' }}
                      alt=""
                    />
                    <span>消費滿5000</span>
                  </div>
                  <div>
                    <img
                      src={Box}
                      style={{ height: '16px' }}
                      alt=""
                    />
                    <span>消費(含)五次以上</span>
                  </div>
                  <div>
                    <img
                      src={Box}
                      style={{ height: '16px' }}
                      alt=""
                    />
                    <span>完成艸小遊戲</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
