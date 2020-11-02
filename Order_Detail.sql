-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 11 月 02 日 17:53
-- 伺服器版本： 10.4.14-MariaDB
-- PHP 版本： 7.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `ruby`
--

-- --------------------------------------------------------

--
-- 資料表結構 `Order_Detail`
--

CREATE TABLE `Order_Detail` (
  `OrderDetail_id` int(11) NOT NULL,
  `OrderDetail_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_Detail_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_Item＿product_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_Detail_amount` int(11) NOT NULL,
  `Order_Detail_price` int(11) NOT NULL,
  `Order_Detail_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `Order_Detail`
--

INSERT INTO `Order_Detail` (`OrderDetail_id`, `OrderDetail_code`, `Order_Detail_name`, `Order_Item＿product_id`, `Order_Detail_amount`, `Order_Detail_price`, `Order_Detail_url`) VALUES
(1, '20043UUHWGGI', '竹翠洗髮乳', '4', 2, 980, ''),
(2, '20043UUHWGGI', '杏仁酸亮白煥膚精華15ml', '5', 3, 400, ''),
(3, '20043UUHWGGI', 'Avène雅漾舒護活泉水四入組', '6', 2, 500, ''),
(4, '20043CLDOGIQ', '竹翠洗髮乳潤潤浸保濕洗顏慕絲150ml', '8', 1, 500, ''),
(5, '20043CLDOGIQ', '舒護活泉水三入組', '9', 2, 799, ''),
(6, '20043CLDOGIQ', '陽光智慧舒敏水感護手霜50g', '15', 1, 400, ''),
(7, '20043UUHUROW', '竹翠洗髮乳潤潤浸保濕洗顏慕絲150ml', '8', 3, 500, ''),
(8, '20043UUHUROW', '舒護活泉水三入組', '9', 1, 799, ''),
(9, '20043UUHUROW', '陽光智慧舒敏水感護手霜50g', '15', 2, 400, ''),
(10, '20043CDKCFVR', '竹翠洗髮乳', '4', 1, 980, ''),
(11, '20043CDKCFVR', '杏仁酸亮白煥膚精華15ml', '5', 2, 400, ''),
(12, '20043CDKCFVR', 'Avène雅漾舒護活泉水四入組', '6', 1, 500, '');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `Order_Detail`
--
ALTER TABLE `Order_Detail`
  ADD PRIMARY KEY (`OrderDetail_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `Order_Detail`
--
ALTER TABLE `Order_Detail`
  MODIFY `OrderDetail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
