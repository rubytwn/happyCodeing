import React, { useState } from 'react'
import { countries, townships, postcodes } from './TWdata.js'

function TWZipCode(props) {
  //   const [country, setCountry] = useState(-1)
  //   const [township, setTownship] = useState(-1)
  //   //備用，如果需要設定郵遞區號時
  //   const [postcode, setPostcode] = useState('')

  //   const [countryDb, setCountryDb] = useState('')
  // const [townshipDb, setTownshipDb] = useState('')
  // const [townshipDetermine, setTownshipDetermine] = useState('')
  const {
    country,
    setCountry,
    township,
    setTownship,
    postcode,
    setPostcode,
    countryDb,
    setCountryDb,
    townshipDb,
    setTownshipDb,
    addressStringDb,
    setAddressStringDb,
  } = props

  switch (countryDb) {
    case '基隆市':
      setCountry(0)
      break
    case '台北市':
      setCountry(1)
      break
    case '新北市':
      setCountry(2)
      break
    case '宜蘭縣':
      setCountry(3)
      break
    case '新竹市':
      setCountry(4)
      break
    case '新竹縣':
      setCountry(5)
      break
    case '桃園市':
      setCountry(6)
      break
    case '苗栗縣':
      setCountry(7)
      break
    case '台中市':
      setCountry(8)
      break
    case '彰化縣':
      setCountry(9)
      break
    case '南投縣':
      setCountry(10)
      break
    case '嘉義市':
      setCountry(11)
      break
    case '嘉義縣':
      setCountry(12)
      break
    case '雲林縣':
      setCountry(13)
      break
    case '台南市':
      setCountry(14)
      break
    case '高雄市':
      setCountry(15)
      break
    case '屏東縣':
      setCountry(16)
      break
    case '台東縣':
      setCountry(17)
      break
    case '花蓮縣':
      setCountry(18)
      break
    case '金門縣':
      setCountry(18)
      break
    case '連江縣':
      setCountry(20)
      break
    case '澎湖縣':
      setCountry(21)
      break
    default:
      break
  }

  // function aaa(e) {
  //   // 將字串轉成數字
  //   setCountry(+e.target.value)
  //   // 重置township的值
  //   setTownship(-1)
  //   console.log('aaa')
  //   //縣市判斷
  //   switch (+e.target.value) {
  //     case 0:
  //       console.log('bbb ')
  //       setCountry('基隆市')
  //       console.log('ccc')
  //       break
  //     case 1:
  //       setCountry('台北市')
  //       break
  //     case 2:
  //       setCountry('新北市')
  //       break
  //     case 3:
  //       setCountry('宜蘭縣')
  //       break
  //     case 4:
  //       setCountry('新竹市')
  //       break
  //     case 5:
  //       setCountry('新竹縣')
  //       break
  //     case 6:
  //       setCountry('桃園市')
  //       break
  //     case 7:
  //       setCountry('苗栗縣')
  //       break
  //     case 8:
  //       setCountry('台中市')
  //       break
  //     case 9:
  //       setCountry('彰化縣')
  //       break
  //     case 10:
  //       setCountry('南投縣')
  //       break
  //     case 11:
  //       setCountry('嘉義市')
  //       break
  //     case 12:
  //       setCountry('嘉義縣')
  //       break
  //     case 13:
  //       setCountry('雲林縣')
  //       break
  //     case 14:
  //       setCountry('台南市')
  //       break
  //     case 15:
  //       setCountry('高雄市')
  //       break
  //     case 16:
  //       setCountry('屏東縣')
  //       break
  //     case 17:
  //       setCountry('台東縣')
  //       break
  //     case 18:
  //       setCountry('花蓮縣')
  //       break
  //     case 19:
  //       setCountry('金門縣')
  //       break
  //     case 20:
  //       setCountry('連江縣')
  //       break
  //     case 21:
  //       setCountry('澎湖縣')
  //       break
  //     default:
  //       break
  //   }
  // }

  //郵遞區號判斷
  switch (postcode) {
    case '200':
      setCountryDb('基隆市')
      setTownshipDb('仁愛區')
      break
    case '201':
      setCountryDb('基隆市')
      setTownshipDb('信義區')
      break
    case '202':
      setCountryDb('基隆市')
      setTownshipDb('中正區')
      break
    case '203':
      setCountryDb('基隆市')
      setTownshipDb('中山區')
      break
    case '204':
      setCountryDb('基隆市')
      setTownshipDb('安樂區')
      break
    case '205':
      setCountryDb('基隆市')
      setTownshipDb('暖暖區')
      break
    case '206':
      setCountryDb('基隆市')
      setTownshipDb('七堵區')
      break
    case '100':
      setCountryDb('台北市')
      setTownshipDb('中正區')
      break
    case '103':
      setCountryDb('台北市')
      setTownshipDb('大同區')
      break
    case '104':
      setCountryDb('台北市')
      setTownshipDb('中山區')
      break
    case '105':
      setCountryDb('台北市')
      setTownshipDb('松山區')
      break
    case '106':
      setCountryDb('台北市')
      setTownshipDb('大安區')
      break
    case '108':
      setCountryDb('台北市')
      setTownshipDb('萬華區')
      break
    case '110':
      setCountryDb('台北市')
      setTownshipDb('信義區')
      break
    case '111':
      setCountryDb('台北市')
      setTownshipDb('士林區')
      break
    case '112':
      setCountryDb('台北市')
      setTownshipDb('北投區')
      break
    case '114':
      setCountryDb('台北市')
      setTownshipDb('內湖區')
      break
    case '115':
      setCountryDb('台北市')
      setTownshipDb('南港區')
      break
    case '116':
      setCountryDb('台北市')
      setTownshipDb('文山區')
      break
    case '207':
      setCountryDb('新北市')
      setTownshipDb('萬里區')
      break
    case '208':
      setCountryDb('新北市')
      setTownshipDb('金山區')
      break
    case '220':
      setCountryDb('新北市')
      setTownshipDb('板橋區')
      break
    case '221':
      setCountryDb('新北市')
      setTownshipDb('汐止區')
      break
    case '222':
      setCountryDb('新北市')
      setTownshipDb('深坑區')
      break
    case '223':
      setCountryDb('新北市')
      setTownshipDb('石碇區')
      break
    case '224':
      setCountryDb('新北市')
      setTownshipDb('瑞芳區')
      break
    case '226':
      setCountryDb('新北市')
      setTownshipDb('平溪區')
      break
    case '227':
      setCountryDb('新北市')
      setTownshipDb('雙溪區')
      break
    case '228':
      setCountryDb('新北市')
      setTownshipDb('新店區')
      break
    case '231':
      setCountryDb('新北市')
      setTownshipDb('瑞芳區')
      break
    case '232':
      setCountryDb('新北市')
      setTownshipDb('坪林區')
      break
    case '233':
      setCountryDb('新北市')
      setTownshipDb('烏來區')
      break
    case '234':
      setCountryDb('新北市')
      setTownshipDb('永和區')
      break
    case '235':
      setCountryDb('新北市')
      setTownshipDb('中和區')
      break
    case '236':
      setCountryDb('新北市')
      setTownshipDb('土城區')
      break
    case '237':
      setCountryDb('新北市')
      setTownshipDb('三峽區')
      break
    case '238':
      setCountryDb('新北市')
      setTownshipDb('樹林區')
      break
    case '239':
      setCountryDb('新北市')
      setTownshipDb('鶯歌區')
      break
    case '241':
      setCountryDb('新北市')
      setTownshipDb('三重區')
      break
    case '242':
      setCountryDb('新北市')
      setTownshipDb('新莊區')
      break
    case '243':
      setCountryDb('新北市')
      setTownshipDb('泰山區')
      break
    case '244':
      setCountryDb('新北市')
      setTownshipDb('林口區')
      break
    case '247':
      setCountryDb('新北市')
      setTownshipDb('蘆洲區')
      break
    case '248':
      setCountryDb('新北市')
      setTownshipDb('五股區')
      break
    case '249':
      setCountryDb('新北市')
      setTownshipDb('八里區')
      break
    case '251':
      setCountryDb('新北市')
      setTownshipDb('三峽區')
      break
    case '252':
      setCountryDb('新北市')
      setTownshipDb('三芝區')
      break
    case '253':
      setCountryDb('新北市')
      setTownshipDb('石門區')
      break
    case '260':
      setCountryDb('宜蘭縣')
      setTownshipDb('宜蘭市')
      break
    case '261':
      setCountryDb('宜蘭縣')
      setTownshipDb('頭城鎮')
      break
    case '262':
      setCountryDb('宜蘭縣')
      setTownshipDb('礁溪鄉')
      break
    case '263':
      setCountryDb('宜蘭縣')
      setTownshipDb('壯圍鄉')
      break
    case '264':
      setCountryDb('宜蘭縣')
      setTownshipDb('員山鄉')
      break
    case '265':
      setCountryDb('宜蘭縣')
      setTownshipDb('羅東鎮')
      break
    case '266':
      setCountryDb('宜蘭縣')
      setTownshipDb('三星鄉')
      break
    case '267':
      setCountryDb('宜蘭縣')
      setTownshipDb('大同鄉')
      break
    case '268':
      setCountryDb('宜蘭縣')
      setTownshipDb('五結鄉')
      break
    case '269':
      setCountryDb('宜蘭縣')
      setTownshipDb('冬山鄉')
      break
    case '270':
      setCountryDb('蘇澳鎮')
      setTownshipDb('蘇澳鎮')
      break
    case '272':
      setCountryDb('宜蘭縣')
      setTownshipDb('南澳鄉')
      break
    case '290':
      setCountryDb('宜蘭縣')
      setTownshipDb('釣魚台列嶼')
      break
    case '300':
      setCountryDb('新竹市')
      setTownshipDb('全區')
      break
    case '302':
      setCountryDb('新竹縣')
      setTownshipDb('竹北市')
      break
    case '303':
      setCountryDb('新竹縣')
      setTownshipDb('湖口鄉')
      break
    case '304':
      setCountryDb('新竹縣')
      setTownshipDb('新豐鄉')
      break
    case '305':
      setCountryDb('新竹縣')
      setTownshipDb('新埔鎮')
      break
    case '306':
      setCountryDb('新竹縣')
      setTownshipDb('關西鎮')
      break
    case '307':
      setCountryDb('新竹縣')
      setTownshipDb('芎林鄉')
      break
    case '308':
      setCountryDb('新竹縣')
      setTownshipDb('寶山鄉')
      break
    case '310':
      setCountryDb('新竹縣')
      setTownshipDb('竹東鎮')
      break
    case '311':
      setCountryDb('新竹縣')
      setTownshipDb('五峰鄉')
      break
    case '312':
      setCountryDb('新竹縣')
      setTownshipDb('橫山鄉')
      break
    case '313':
      setCountryDb('新竹縣')
      setTownshipDb('尖石鄉')
      break
    case '314':
      setCountryDb('新竹縣')
      setTownshipDb('北埔鄉')
      break
    case '315':
      setCountryDb('新竹縣')
      setTownshipDb('峨眉鄉')
      break

    default:
      break
  }

  return (
    <>
      <div className="row">
        <div className="col-3">
          <input className="form-con" value={postcode} disabled />
          {/* {country > -1 && township > -1 && postcodes[country][township]} */}
        </div>
        <div className="col-4">
          <select
            className="form-con"
            value={country}
            onChange={(e) => {
              // 將字串轉成數字
              setCountry(+e.target.value)
              // 重置township的值
              setTownship(-1)
            }}
            // onChange={aaa}
          >
            <option value={-1}>選擇縣市</option>

            {countries.map((v, i) => (
              <option key={i} value={i} >
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="col-5">
          <select
            className="form-con"
            value={township}
            onChange={(e) => {
              // 將字串轉成數字
              setTownship(+e.target.value)
              setPostcode(postcodes[country][township])
            }}
          >
            <option value={-1}>選擇區域</option>
            {country > -1 &&
              townships[country].map((v, i) => (
                <option key={i} value={i} selected={townshipDb === v}>
                  {v}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <input
            className="form-con"
            type="text"
            placeholder="請輸入地址"
            value={addressStringDb}
            onChange={(e) => {
              const newAddressString = e.target.value
              setAddressStringDb(newAddressString)
              setPostcode(postcodes[country][township])
            }}
          />
        </div>
      </div>
    </>
  )
}

export default TWZipCode
