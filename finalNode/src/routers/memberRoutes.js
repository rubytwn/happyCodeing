const express = require("express");
const db = require("../member_db_connect");
const router = express.Router();

class User {
  constructor(name) {
    //this.id = 0
    this.name = name;
    // this.email = email
    // this.birth = birth
  }
  MemberEdit() {
    let sql = `UPDATE members SET name="${this.name}" WHERE 1`;
    return sql;
  }
}

router.post("/", (req, res) => {
  db.query("SELECT * FROM `members` WHERE 1").then(([results]) => {
    console.log(results);
    res.json(results);
  });
});
//會員登入
router.post("/login",(req,res)=>{
  const sql = "SELECT * FROM `members` WHERE email = ? AND pwd = ?"
  db.query(sql,[req.body.email,req.body.pwd])
  .then(([results]) => {
    //console.log(results[0].id);
    res.json({id:results[0].id,name:results[0].name});
  });
})


//帳號設定頁面載入時的會員資料
router.post("/getMemberData", async (req, res) => {
  const sql = "SELECT * FROM `members` WHERE id=?"
  await db.query(sql,[req.body.id])
  .then(([results]) => {
    console.log(results);
    return res.json(results);
  });
});

//帳號設定頁面修改會員資料
router.post("/editMemberData", async (req, res) => {
  const sql =
    "UPDATE `members` SET `name`=? , `email`=?, `gender`=? , `birth`=? ,`country`=? WHERE id=?";
  const [result] = await db.query(sql, [
    req.body.name,
    req.body.email,
    req.body.gender,
    req.body.birth,
    req.body.country,
    req.body.id,
  ]);
  console.log(result);
  if (result.changedRows === 1) {
    return res.json({ message: "修改成功" });
  }
  //return res.json(result);
});

//帳號設定頁面修改會員密碼
router.post("/editMemberPwd", async (req, res) => {
  const sql = "UPDATE `members` SET `pwd`=? WHERE id=?";
  const [result] = await db.query(sql, [req.body.pwd,req.body.id]);
  if (result.changedRows === 1) {
    return res.json({ message: "密碼修改成功" });
  }
});

module.exports = router;
