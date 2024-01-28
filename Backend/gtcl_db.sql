-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2024 at 07:07 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gtcl_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `companyinfo`
--

CREATE TABLE `companyinfo` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(400) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `mobile` varchar(20) NOT NULL,
  `map_view` varchar(400) NOT NULL,
  `tag_line` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companyinfo`
--

INSERT INTO `companyinfo` (`id`, `email`, `image`, `url`, `address`, `phone`, `mobile`, `map_view`, `tag_line`, `createdAt`, `updatedAt`) VALUES
(33, 'training@glandgroup.com', '8d43b67d65507421a1045d4caeba7357.png', 'http://localhost:8000/images/8d43b67d65507421a1045d4caeba7357.png', 'Amulia Model Town, Demra, Dhaka, Bangladesh', '+880 2 750 2671', ' 	+88017 0999 0858, ', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1826.2004908690924!2d90.4823675!3d23.7330763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7eaebceb547%3A0x4805450ce360b753!2z4KaX4KeN4Kaw4KeA4Kao4Kay4KeN4Kav4Ka-4Kao4KeN4KahIOCmj-CmleCmvuCmoeCnh-CmruCmv-CmlSDgppXgpq7gpqrgp43gprLgp4fgppXgp43gprgg4Kaq4KeN4Kay4KeH4KaX4KeN4Kaw4Ka-4KaJ4Kao4KeN4KahIEdyZWVubGFuZCBBY2FkZW1pYyBDb21wbGV4IFBsYXlncm91bmQ!5e0!3m', '<p>This is Company Info.</p>', '2024-01-25 07:29:46', '2024-01-25 07:29:46');

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `_id` int(11) NOT NULL,
  `_menu` varchar(255) NOT NULL,
  `_heading` varchar(255) DEFAULT NULL,
  `_sub_heading` varchar(500) DEFAULT NULL,
  `_title` varchar(255) DEFAULT NULL,
  `_sub_title` varchar(500) DEFAULT NULL,
  `_description` longtext DEFAULT NULL,
  `_button` tinytext DEFAULT NULL,
  `_link` varchar(500) DEFAULT NULL,
  `_image` varchar(200) NOT NULL,
  `_url` varchar(500) NOT NULL,
  `_serial` int(11) NOT NULL,
  `_status` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`_id`, `_menu`, `_heading`, `_sub_heading`, `_title`, `_sub_title`, `_description`, `_button`, `_link`, `_image`, `_url`, `_serial`, `_status`, `createdAt`, `updatedAt`) VALUES
(24, 'Home', 'This is the Heading', 'This is Sub Heading', 'This is the Title', 'This is the Sub title', 'This is the description', 'Apply Now', 'https://www.github.com/siampathan', '8d43b67d65507421a1045d4caeba7357.png', 'http://localhost:8000/images/8d43b67d65507421a1045d4caeba7357.png', 2, 1, '2024-01-27 11:28:53', '2024-01-27 11:28:53');

-- --------------------------------------------------------

--
-- Table structure for table `counter`
--

CREATE TABLE `counter` (
  `id` int(11) NOT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `sub_heading` varchar(255) DEFAULT NULL,
  `count` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `sub_title` varchar(255) NOT NULL,
  `menu` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `image` varchar(255) NOT NULL,
  `url` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `counter`
--

INSERT INTO `counter` (`id`, `heading`, `sub_heading`, `count`, `title`, `sub_title`, `menu`, `createdAt`, `updatedAt`, `image`, `url`) VALUES
(1, 'This is heading', 'This is sub heading', 2, 'This is Title', 'This is Sub title', '1', '2024-01-18 06:08:41', '2024-01-18 06:08:41', '0cae0bcef99da297e861d8f9e02df7a2.png', 'http://localhost:8000/images/0cae0bcef99da297e861d8f9e02df7a2.png'),
(2, 'About Head', 'About sub heading', 4, 'This is the Title Set', 'This is the Sub title set', '2', '2024-01-18 09:46:43', '2024-01-18 09:46:43', '0cae0bcef99da297e861d8f9e02df7a2.png', 'http://localhost:8000/images/0cae0bcef99da297e861d8f9e02df7a2.png');

-- --------------------------------------------------------

--
-- Table structure for table `footer`
--

CREATE TABLE `footer` (
  `id` int(11) NOT NULL,
  `header` varchar(255) NOT NULL,
  `list` longtext NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `footer`
--

INSERT INTO `footer` (`id`, `header`, `list`, `createdAt`, `updatedAt`) VALUES
(1, 'Impotant Links', '<ul style=\"padding-left: 1.5em;list-style:disc\"><li>Terms and conditions</li><li>Disclaimer and copyright</li><li>Cookie policy</li><li>Privacy policy</li><li>Equality and diversity</li><li>Complaints procedure</li></ul>', '2024-01-24 05:40:50', '2024-01-24 11:46:18'),
(2, 'Site Highlight', '<ul style=\"padding-left: 1.5em;list-style:disc\"><li>Student Videos</li><li>Photo gallery</li><li>TSC prospectus</li><li>Student newsletter</li><li>Student portal</li></ul>', '2024-01-24 08:53:28', '2024-01-24 08:53:28'),
(3, 'Help Center', '<ul style=\"padding-left: 1.5em;list-style:disc\"><li>Courses</li><li>How to apply for admission</li><li>Admission Documents</li><li>Frequently asked questions</li><li>Student accommodation</li><li>Student Jobs</li></ul>', '2024-01-24 11:48:42', '2024-01-24 11:48:42'),
(4, 'Services', '<ul style=\"padding-left: 1.5em;list-style:disc\"><li>Counselling</li><li>Test Preparation</li><li>Admission</li><li>Education Loan</li><li>Visa Processing</li></ul>', '2024-01-24 11:50:52', '2024-01-24 11:50:52'),
(5, 'Location', '<ul style=\"padding-left: 1.5em;list-style:disc\"><li>8502 Preston Rd. Inglewood, Maine Bangladesh</li></ul>', '2024-01-24 11:51:50', '2024-01-25 05:06:44');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `_id` int(11) NOT NULL,
  `_menu` varchar(100) NOT NULL,
  `_parentId` int(11) NOT NULL,
  `_slug` varchar(100) NOT NULL,
  `_sort` int(11) NOT NULL,
  `_active` tinyint(2) NOT NULL,
  `_isTitle` tinyint(2) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`_id`, `_menu`, `_parentId`, `_slug`, `_sort`, `_active`, `_isTitle`, `createdAt`, `updatedAt`) VALUES
(36, 'Home', 1, '', 1, 1, 1, '2024-01-21 04:14:51', '2024-01-24 12:18:09'),
(37, 'About Us', 2, 'about-us', 1, 1, 1, '2024-01-21 06:56:28', '2024-01-21 06:56:28'),
(38, 'Pages', 3, '', 1, 1, 1, '2024-01-21 09:42:56', '2024-01-21 09:42:56'),
(39, 'Blog', 4, '', 1, 1, 1, '2024-01-21 09:43:32', '2024-01-21 09:43:32'),
(40, 'Contact Us', 5, 'contact-us', 1, 1, 1, '2024-01-21 09:43:57', '2024-01-21 09:43:57'),
(41, 'Our Services', 3, 'our-services', 1, 1, 0, '2024-01-25 05:27:47', '2024-01-25 05:44:42');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  `sub_heading` varchar(400) NOT NULL,
  `name` varchar(700) DEFAULT NULL,
  `designation` varchar(300) NOT NULL,
  `description` longtext NOT NULL,
  `menu` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `heading`, `image`, `url`, `sub_heading`, `name`, `designation`, `description`, `menu`, `createdAt`, `updatedAt`) VALUES
(12, 'The Home', '0cae0bcef99da297e861d8f9e02df7a2.png', 'http://localhost:8000/images/0cae0bcef99da297e861d8f9e02df7a2.png', 'sub home', 'Title', 'dev co.', '<p>This is the description.</p>', 'home', '2024-01-16 10:26:36', '2024-01-16 10:26:36'),
(13, 'Second Test', '0cae0bcef99da297e861d8f9e02df7a2.png', 'http://localhost:8000/images/0cae0bcef99da297e861d8f9e02df7a2.png', 'Second Sub heading', 'Siam', 'Sub Dev Co.', '<p>this is the second time <span style=\"color: rgb(230, 0, 0);\">descriptions</span>.</p>', 'About', '2024-01-16 11:01:19', '2024-01-16 11:01:19');

-- --------------------------------------------------------

--
-- Table structure for table `social`
--

CREATE TABLE `social` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `social`
--

INSERT INTO `social` (`id`, `name`, `image`, `url`, `link`, `createdAt`, `updatedAt`) VALUES
(10, 'Siam', '8d43b67d65507421a1045d4caeba7357.png', 'http://localhost:8000/images/8d43b67d65507421a1045d4caeba7357.png', 'https://www.github.com/siampathan', '2024-01-28 05:45:37', '2024-01-28 05:46:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companyinfo`
--
ALTER TABLE `companyinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `counter`
--
ALTER TABLE `counter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social`
--
ALTER TABLE `social`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companyinfo`
--
ALTER TABLE `companyinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `counter`
--
ALTER TABLE `counter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `footer`
--
ALTER TABLE `footer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `social`
--
ALTER TABLE `social`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
