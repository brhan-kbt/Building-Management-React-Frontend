-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 17, 2023 at 01:26 PM
-- Server version: 5.7.36
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eagleonline`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
CREATE TABLE IF NOT EXISTS `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover_photo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `category`, `description`, `cover_photo`, `created_at`, `updated_at`) VALUES
(8, 'Chapa payment gateway Launched', 'Privately Owned', 'We\'re excited to announce that you can now manage your Chapa business from your phone with the Chapa Merchant App. We are redefining the digital industry by turning your phone into your business. Wait, what does this mean? It means your business Head Quarter is now located on your phone.\r\n\r\nThe convenience of Chapa Merchant\r\n\r\nThanks to its features, the Chapa Merchant App will make it super convenient for anyone to run their business. Let\'s examine how a few use cases will make it super convenient for merchants.\r\n\r\nWith Chapa Merchant App, you can turn your phone into a POS. You can generate QR codes or Payment Links inside the App and share them with anyone via SMS, Socials or AirDrop to pay you. Do you know the limitation of the physical POS that accepts cards only? With Chapa Merchant App, you can accept payments via card, telebirr, PayPal, HelloCash, etc., many times closer to your customers than ever, right? But there is more. Chapa Merchant is not only about getting paid. You can also monitor your sales, customers, transactions, and more. We merged your phone with your business, indeed.\r\n\r\nHow to setup Chapa Merchant\r\n\r\nYou can download it on the Google Playstore and App Store right now.\r\nSign in with your Chapa account as you would on the web.\r\nChoose a business you would like to manage.\r\nHow to use Chapa Merchant?\r\n\r\nWhen you log into the App, swipe right, and it\'d reveal the menu options.\r\n\r\nAll your sub-accounts are displayed first, and you can switch between them by tapping them.\r\nOn the menu screen, \"Home\" keeps you on the overview of your Chapa account, where you can see a simple summary of your transactions and business.\r\n\"Links\" lets you see all your payment links, including donation and event links. You can also filter and share right from there.\r\n\"QR Code\" displays all available QR codes; you can save or share them from there. Your mobile POS is always available to help you accept payments.\r\n\"Customers\" displays a list of your customers, and you can view their details. Now you know who has been paying you more :)))\r\n\"Balance\" displays your ledger and available balances, and you can view balances in the different currencies on your account. There are also Transactions here which allows you to see all your transactions in more detail.\r\nOn the top right is a profile where you can switch between your accounts, see your profile and enable biometrics or FaceId to make you more secure.', 'yeteg_1669412284.jpg', '2022-11-25 10:40:55', '2022-11-25 10:40:55'),
(9, 'አዲስ ነገር – የአሜሪካ የ 55 ቢሊየን ዶላር ድጋፍ እና ሌሎችም መረጃዎች', 'News', '<p>ሩስያ አሜሪካ ለዩክሬን ያቀደችው የሚሳኤል መከላከያ ስርዓትን እንዳትልክ ስትል ሩሲያ አስጠነቀቀች። ዋሽንግተን ለዩክሬን ፓሮት የተባለውን የሚሳኤል መከላከያ ስርአት የምትልክ ከሆነ ከሩስያ ጋር ወደ ቀጥታ ጦርነት ልትገባ እንደምትችል ነው የሩሲያ የውጭ ጉዳይ ሚኒስቴር ያስጠነቀቀው።የሩስያ የውጭ ጉዳይ ሚኒስቴር ቃል አቀባይ ማሪያ ዛካሮቫ ወደ ዩክሬን የሚላኩ ማናቸውንም የጦር መሳርያዎች በቀጥታ ልንመታ እንችላለን ሲሉ መናገራቸውን አናዶሉ ዘግቧል ።<br><br></p>\r\n<p><strong>አሜሪካ</strong> የአሜሪካው ፕሬዝዳንት ጆ ባይደን አሜሪካ አፍሪካን በተጠናከረ ሁኔታ ለመደገፍ ዝግጁ ነች ሲሉ አስታወቁ ።በመካሄድ ላይ ባለው የአሜሪካ አፍሪካ የመሪዎች ጉባኤ ላይ የታደሙት ፕሬዚዳንት ባይደን በሚቀጥሉት 3 አመታት የሚተገበር የ 55 ቢሊየን ዶላር ድጋፍ ይፋ አድርገዋል።ፕሬዚዳንት ባይደን &ldquo;የአፍሪካ ስኬት የአሜሪካም ስኬት ነው &rdquo; ሲሉ በጉባኤው ለታደሙ የአፍሪካ መሪዎች ተናግረዋል።የባይደን አስተዳደር የአሜሪካ እና የአፍሪካ የንግድ ልውውጥ ያጠናክራል ተብሎ ከሚታሰበው የአፍሪካ የነጻ ንግድ ቀጠና ተቋም ጋር ስምምነት ሊደርሱ እንደሆነ ቢቢሲ ዘግቧል።<br><br></p>\r\n<p><strong>#ኔቶ</strong> የሰሜን አትላንቲክ የጦር ቃል ኪዳን ድርጅት &ldquo;ኔቶ &rdquo; አባል አገራት ለድርጅቱ የሚመድቡትን በጀት በ25 ከመቶ መጨመራቸው ተሰምቷል።በአውሮፓ የዩክሬን ጦርነት ባስከተለው የፀጥታ ስጋት ሳቢያ ነው የኔቶ አባል አገራት ከፈረንጆቹ 2023 ጀምሮ የኔቶ ድርጅት አመታዊ በጀት በ25 ከመቶ እንዲጨምር የተስማሙት።የኔቶ ዋና ፀሐፊ ጄንስ ስቶለንበርግ አባል አገራቱ የደረሱት የበጀት ጭማሪ በደስታ የምንቀበለው ነው ማለታቸውን አር ቲ ዘግቧል።<br><br></p>\r\n<p><strong>ጃፓን</strong> ጃፓን አዲስ ልጅ ለሚወልዱ ጥንዶች የማበረታቻ ክፍያ ልትሰጥ መሆኑ ተሰምቷል።በአገሪቱ የህዝብ ቁጥር እድገት በእጅጉ በመቀነሱ ነው የቶኪዮ መንግስት ከአውሮፓውያኑ 2023 ጀምሮ በአገሪቱ ልጆች ለሚወልዱ ጥንዶች በነፍስ ወከፍ 592 ዶላር ለመስጠት ያቀደው።ይሁን እንጂ በጃፓን ካለው የኑሮ ውድነት አንፃር የአሁኑ የመንግስት ማበረታቻ ውጤታማ ላይሆን እንደሚችል መነገሩን የጀርመኑ ዶቸቨለ ዘግቧል።</p>', 'Joe-Biden_1671224548.webp', '2022-12-16 18:02:28', '2022-12-16 18:12:13'),
(10, 'Visualising the FIFA World Cup final', 'Business', '<p><strong><em>Over the World Cup&rsquo;s 92-year history, 13 nations have made it to the finals, with eight being crowned champions<br><br></em></strong></p>\r\n<p>On Sunday, December 18, on the pitch of&nbsp;<a href=\"https://interactive.aljazeera.com/aje/2022/visit-qatar-2022-football-world-cup/#stadiums\" target=\"_blank\" rel=\"noopener\">Lusail Stadium</a>&nbsp;in Qatar, Argentina will take on 2018 defending champions France for football&rsquo;s most coveted trophy.</p>\r\n<p>The&nbsp;<a href=\"https://www.aljazeera.com/qatar-world-cup-2022/\" target=\"_blank\" rel=\"noopener\">FIFA World Cup</a>, now in its 22nd edition, has been held every four years since 1930, except in 1942 and 1946 because of World War II.<br>Over its 92-year history, 79 nations have battled it out for the top prize. Of these, 13 countries have made it to the finals, with eight being crowned champions.</p>\r\n<p>Only European and South American teams have ever reached the finals. With eight appearances, Germany have the highest number of World Cup finals under their belt, followed by Brazil (seven times) and Italy (six times).</p>\r\n<p>Argentina have reached the finals on five separate occasions &ndash; winning two of them &ndash; while France have appeared in three finals, which they have also won twice.</p>\r\n<h2>The highest-scoring World Cup finals</h2>\r\n<p>Historically, World Cup finals have had no shortage of goals. Since 1930, a total of 74 goals have been scored with an average of 3.5 goals per match. The only goalless final match was in 1994 between Brazil and Italy, which the South Americans won following a dramatic penalty shootout.</p>\r\n<p>The most number of goals scored in a World Cup final was back in 1958 when Brazil defeated Sweden, the hosts, by five goals to two.</p>\r\n<p><img src=\"https://www.aljazeera.com/wp-content/uploads/2022/12/INTERACTIVE-Who-win-the-2022-World-Cup.png?w=770&amp;resize=770%2C770&amp;quality=80\" alt=\"INTERACTIVE---Who-win-the-2022-World-Cup\"></p>\r\n<p>Only two nations have ever managed to win consecutive championship titles: the Italians in 1934 and 1938, and the Brazilians in 1958 and 1962. Defending champions France will be hoping to join them.</p>\r\n<h2>How much money do the World Cup winners get?</h2>\r\n<p>For 2022, the International Federation of Football Associations (FIFA) has allocated $42m to the winning team &ndash; an increase of $4m compared with four years ago in Russia.</p>\r\n<p>In addition to the prize money, the winning team will receive a gold-plated bronze replica of the 18-carat gold trophy &ndash; measuring 38cm (15 inches) in height and weighing 6kg (13lbs) &ndash; designed by Italian artist Silvio Gazzaniga.</p>\r\n<h2>How much money will each team receive?</h2>\r\n<p>According to&nbsp;<a href=\"https://www.fifa.com/tournaments/mens/worldcup/qatar2022/news/fifa-president-welcomes-participants-to-team-seminar\" target=\"_blank\" rel=\"noopener\">FIFA</a>, the total prize money for the 32 participating nations at the 2022 World Cup will be $440m.</p>\r\n<p>The breakdown is as follows:</p>\r\n<ol>\r\n<li>Champions: $42m</li>\r\n<li>Runners-up: $30m</li>\r\n<li>Third place: $27m</li>\r\n<li>Fourth place: $25m</li>\r\n<li>5th-8th place: $68m ($17m per team)</li>\r\n<li>9th-16th place: $104m ($13m per team)</li>\r\n<li>17th-32nd place: $144m ($9m per team)</li>\r\n</ol>\r\n<p>In addition, each team would have received $1.5m before the competition to cover preparation costs.</p>\r\n<h2>Who are most likely to win the World Cup?</h2>\r\n<p>Kashef, Al Jazeera&rsquo;s&nbsp;<a href=\"https://www.aljazeera.com/wc2022experience/\">artificial intelligence</a>&nbsp;(AI) robot, has analysed more than 200 metrics, including the number of wins, goals scored and FIFA rankings, from matches played over the past century to see who are most likely to win the World Cup final.</p>\r\n<p>Predicting match results is no easy task. External factors such as team morale or player fitness make a big difference in how the game goes.</p>\r\n<div class=\"wysiwyg wysiwyg--all-content css-ibbk12\" aria-live=\"polite\" aria-atomic=\"true\">\r\n<p>With 62 matches completed, Kashef has a 68 percent accuracy level. Sizing up all the odds, it could not be any closer with only 1 percent separating Argentina and France from each winning their third title.</p>\r\n<p>However, only one team can emerge victorious. Kashef predicts that France, captained by Hugo Lloris, will edge out Argentina on Sunday to win the 2022 World Cup.<strong><em>&nbsp;</em></strong></p>\r\n</div>', 'OIP_1671226365.jpg', '2022-12-16 18:32:45', '2022-12-16 18:49:45');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `book_title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `book_author` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(2550) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover_photo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `book_file` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `book_title`, `book_author`, `description`, `cover_photo`, `book_file`, `created_at`, `updated_at`) VALUES
(1, 'How to Use Your Mind', 'Harry Dexter Kitson', '<p>Educational leaders are seeing with increasing clearness the necessity of teaching students not only the subject-matter of study but also methods of study. The recognition of this condition is taking the form of the movement toward \'\'supervised study,\'\' which attempts to acquaint the student with principles of economy and directness in using his mind. It is generally agreed that there are certain \'\'tricks\'\' which make for mental efficiency, consisting of methods of apperceiving facts, methods of review, devices for arranging work. Some are the fruits of psychological experimentation; others are derived from experience. Many of them can be imparted by instruction, and it is for the purpose of systematizing these and making them available for students that this book is prepared.</p>', 'mind_1671021450.jpg', 'How-to-Use-Your-Mind_1671021450.pdf', '2022-12-14 09:37:30', '2022-12-14 09:37:30'),
(2, 'THE LIFE OF THANKSGIVING', 'H.H. POPE SHENOUDA III', '<p>You have many good things for which you do not give thanks,<br>like health and shelter, as you count them normal, but those<br>who are deprived of them, know its value, and if they receive<br>them, surely they will thank God for them. Let me give you and<br>an example: Perhaps you do not give thanks now for the lights<br>we have during our lecture, but if, for any reason the current is<br>cut off, then you realise the grace you were in.<br>There are many normal matters in our life which need<br>thanksgiving.</p>', 'thanksgiving_1671022813.png', 'The-life-of-Thanksgiving_1671022813.pdf', '2022-12-14 10:00:13', '2022-12-14 10:00:13'),
(3, 'ROMEO AND JULIET', 'William Shakespeare', '<p><strong><em>Jul</em>. </strong>Indeed I never shall be satisfied<br>With Romeo till I behold him- deadIs my poor heart so for a kinsman vex\'d.<br>Madam, if you could find out but a man<br>To bear a poison, I would temper it;<br>That Romeo should, upon receipt thereof,<br>Soon sleep in quiet. O, how my heart abhors<br>To hear him nam\'d and cannot come to him,<br>To wreak the love I bore my cousin Tybalt<br>Upon his body that hath slaughter\'d him!</p>', 'romio_1671023771.jpg', 'romeo-and-juliet_1671023771.pdf', '2022-12-14 10:16:11', '2022-12-14 10:16:11'),
(4, 'The Time Machine', 'H. G. Wells', '<p>The Time Traveller (for so it will be convenient to speak of him) was expounding a<br>recondite matter to us. His pale grey eyes shone and twinkled, and his usually pale face<br>was flushed and animated. The fire burnt brightly, and the soft radiance of the<br>incandescent lights in the lilies of silver caught the bubbles that flashed and passed in<br>our glasses. Our chairs, being his patents, embraced and caressed us rather than<br>submitted to be sat upon, and there was that luxurious after-dinner atmosphere, when<br>thought runs gracefully free of the trammels of precision. And he put it to us in this<br>way&mdash;marking the points with a lean forefinger&mdash;as we sat and lazily admired his<br>earnestness over this new paradox (as we thought it) and his fecundity.<br><br></p>', 'timemachine_1671023836.jpg', 'the-time-machine_1671023836.pdf', '2022-12-14 10:17:16', '2022-12-14 10:17:16');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `post_id`, `event_id`, `name`, `email`, `comment`, `created_at`, `updated_at`) VALUES
(1, 0, 1, 'Berhan Kebito', 'berhanukebito05@gmail.com', 'Good Event Thank You', '2022-11-25 11:08:56', '2022-11-25 11:08:56'),
(2, 4, 0, 'Berhanu Kebito', 'berhanukebito05@gmail.com', 'Good Work!', '2022-11-26 05:30:50', '2022-11-26 05:30:50'),
(3, 0, 2, 'Berhanu Kebito', 'berhanukebito05@gmail.com', 'Good Work', '2022-11-26 05:31:24', '2022-11-26 05:31:24'),
(4, 5, 0, 'Birhanu Kabito Diribsa', 'berhanukebito05@gmail.com', 'fgddgd', '2022-11-26 10:39:39', '2022-11-26 10:39:39');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
CREATE TABLE IF NOT EXISTS `companies` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `company_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_owner` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `business_category` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type_of_company` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `woreda` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sefer` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `specific_location` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gmap` varchar(2555) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fax` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pobox` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alt_mobile` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service` varchar(2555) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pricing` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `company_name`, `company_owner`, `business_category`, `type_of_company`, `city`, `sub_city`, `woreda`, `sefer`, `specific_location`, `gmap`, `company_email`, `website`, `fax`, `pobox`, `telephone`, `mobile`, `alt_mobile`, `service`, `photo`, `user_id`, `pricing`, `status`, `created_at`, `updated_at`) VALUES
(41, 'Massey and Craft Associates', NULL, 'Government Office', 'Privately Owned', 'Consectetur eius dic', 'Neque voluptatem rer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '+1 (871) 993-9402', 'Quibusdam totam veli', 'Adipisci vitae irure', NULL, 'no-image.png', '13', '0', 0, '2023-02-18 11:00:11', '2023-02-18 11:00:11'),
(40, 'Hudson and Henry LLC', NULL, 'Youth Centers', 'Governmental', 'Eaque exercitationem', 'Eos quibusdam harum', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '+1 (282) 954-2707', 'Quaerat incidunt su', 'Veniam sed cupidita', NULL, 'no-image.png', '13', '0', 0, '2023-01-24 07:42:25', '2023-01-24 07:42:25'),
(37, 'Eagle Information Center', 'Mr. Mesfin Efrem', 'Other', 'Privately Owned', 'Addis Ababa', 'Arada', '03', 'Around St. Giorgis Church', 'Infornt of Soramba Building', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.0130338393!2d38.733111192957736!3d9.040796124830425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5bc47099b1%3A0x1f0a0d3be483b698!2zU29yYW1iYSBIb3RlbCBhbmQgV2VsbG5lc3MgQ2VudGVyIHwgUGlhenphIHwg4Yi24Yir4Yid4YmjIOGIhuGJtOGIjSB8IOGNkuGLq-GIsw!5e0!3m2!1sen!2set!4v1671011502989!5m2!1sen!2set', 'eagleinfocenter@gmail.com', 'www.eagleinformationcenter.com', NULL, NULL, '+251973751203', '+251973751203', NULL, '<p><span style=\"text-decoration: underline;\"><em><strong>Eagle Information Center</strong></em></span> is a company that works to provide up-to-date and clean information to the public. <br>It provides the locations of</p>\r\n<ul>\r\n<li>hotels, sports halls, hospitals,</li>\r\n<li>pharmacies, government offices,</li>\r\n<li>various entertainment venues, etc., as well as the services they provide and information about the place.</li>\r\n</ul>\r\n<p>&nbsp;</p>', 'logo s-02_1683287668.png', '1', '1', 1, '2022-12-14 07:04:23', '2023-05-05 08:54:29'),
(38, 'Yodahe Printing', NULL, 'Advertising Organizations', 'Privately Owned', 'Addis Ababa', 'Arada', '03', 'Piassa', 'Sebara Babur On Edget Le Limat Building 1st Floor', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126087.38905083945!2d38.67588800691187!3d9.042689614631819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f58c195e517%3A0x3b95017177ec7f0b!2sSt.%20George!5e0!3m2!1sen!2set!4v1671013258127!5m2!1sen!2set', NULL, NULL, NULL, '109', '+251 911 21 50 23', '+251 912 10 50 70', NULL, '<p>Whether you&rsquo;re looking for a printing service company to print high quality brochures, catalogs, magazines, restaurant menus, or any other small/large projects, there&rsquo;s wide range of professional printing services to choose from! With Yodahe Printing&rsquo;s <a href=\"https://www.soloprinting.com/resources/equipment-list/\">state-of-the-art equipment</a>, we ensure our Yodahe printing&nbsp; will achieve and surpass all your expectations!</p>', '5796469321764026660_120_1671013633.jpg', '1', '1', 1, '2022-12-14 07:27:13', '2022-12-14 07:28:09'),
(39, 'Keradion Designs PLC', NULL, 'IT/Telecome', 'Privately Owned', 'Addis Ababa', 'Arada', '03', 'Piass Giorgis', 'Infornt of Soramba Building', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126087.38905083945!2d38.67588800691187!3d9.042689614631819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f58c195e517%3A0x3b95017177ec7f0b!2sSt.%20George!5e0!3m2!1sen!2set!4v1671013258127!5m2!1sen!2set', 'info@keradiondesgnsplc.com', NULL, NULL, NULL, '+251973751203', '+251905280274', NULL, '<p>We build highly affordable custom software for companies large and small. By applying modern design principles, in conjunction with the latest in cloud, mobile, and desktop technologies, we create tailored solutions that connect co-workers with each other and companies with their customers, simplify and accelerate business processes, and lower costs.</p>', 'no-image.png', '1', '1', 1, '2022-12-14 07:39:16', '2022-12-14 07:41:09');

-- --------------------------------------------------------

--
-- Table structure for table `company_reviews`
--

DROP TABLE IF EXISTS `company_reviews`;
CREATE TABLE IF NOT EXISTS `company_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `company_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `review` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `company_reviews`
--

INSERT INTO `company_reviews` (`id`, `company_id`, `name`, `email`, `review`, `created_at`, `updated_at`) VALUES
(1, 4, 'Guinevere Jackson', 'zixiqep@mailinator.com', 'Et et omnis itaque s', '2022-11-24 10:54:31', '2022-11-24 10:54:31'),
(2, 4, 'Byron Johns', 'sifinynajy@mailinator.com', 'Qui adipisci ab aute', '2022-11-24 11:05:32', '2022-11-24 11:05:32'),
(3, 4, 'Kenneth Branch', 'wadyna@mailinator.com', 'Quo cillum dolor com', '2022-11-24 11:05:44', '2022-11-24 11:05:44'),
(4, 6, 'Berhanu Kebito', 'berhanukebito05@gmail.com', 'Wow', '2022-11-26 05:32:12', '2022-11-26 05:32:12');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `subject`, `email`, `message`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Berhanu Kebito', 'fhgj', 'berhanukebito05@gmail.com', 'tfhgjgjmhk', '1', '2022-11-26 10:00:29', '2022-11-29 09:35:22'),
(2, 'Isadora Gilmore', 'Dolore nostrud sed a', 'raza@mailinator.com', 'Corrupti ut volupta', '1', '2022-11-26 10:55:18', '2022-11-29 09:35:51'),
(3, 'Maynard and Hill Associates', 'Wilder and Daniel Co', '', 'New Company Added', '1', '2022-11-29 09:41:31', '2022-11-29 09:43:59'),
(4, 'New Company Added!', 'Singleton Maxwell Co', '', 'New Company Added', '1', '2022-11-29 09:43:06', '2022-11-29 09:43:34'),
(5, 'New Company Added!', 'Dunlap Snider Co', '', 'Bray Odom LLC', '0', '2022-11-29 09:48:10', '2022-11-29 09:48:10'),
(6, 'New Company Added!', 'Compton Talley Co', '', 'Cleveland Herrera Inc', '0', '2022-11-30 04:49:11', '2022-11-30 04:49:11'),
(7, 'New Company Added!', 'Owner', 'Email', 'hh', '0', '2022-11-30 05:10:06', '2022-11-30 05:10:06'),
(8, 'New Company Added!', 'Owner', 'Email', 'Suarez Cote Co', '1', '2022-12-05 07:43:41', '2022-12-05 07:44:18'),
(9, 'New Company Added!', 'Owner', 'Email', 'Boone Dejesus Co', '0', '2022-12-05 11:37:34', '2022-12-05 11:37:34'),
(10, 'New Company Added!', 'Owner', 'Email', 'Hopkins Moran LLC', '0', '2022-12-05 11:39:58', '2022-12-05 11:39:58'),
(11, 'New Company Added!', 'Owner', 'Email', 'Raymond Williams Co', '0', '2022-12-05 11:40:15', '2022-12-05 11:40:15'),
(12, 'New Company Added!', 'Owner', 'Email', 'Townsend Fry Trading', '0', '2022-12-05 11:40:32', '2022-12-05 11:40:32'),
(13, 'New Company Added!', 'Owner', 'Email', 'Webster Welch LLC', '0', '2022-12-05 11:42:17', '2022-12-05 11:42:17'),
(14, 'New Company Added!', 'Owner', 'Email', 'Wright and Bennett LLC', '0', '2022-12-05 11:46:07', '2022-12-05 11:46:07'),
(15, 'New Company Added!', 'Owner', 'Email', 'Harvey Bond Trading', '0', '2022-12-05 11:46:59', '2022-12-05 11:46:59'),
(16, 'New Company Added!', 'Owner', 'Email', 'Buckley Hubbard Trading', '0', '2022-12-05 16:25:38', '2022-12-05 16:25:38'),
(17, 'New Company Added!', 'Owner', 'Email', 'Eagle Information Center', '0', '2022-12-14 07:04:23', '2022-12-14 07:04:23'),
(18, 'New Company Added!', 'Owner', 'Email', 'Yodahe Printing', '0', '2022-12-14 07:27:13', '2022-12-14 07:27:13'),
(19, 'New Company Added!', 'Owner', 'Email', 'Keradion Designs PLC', '0', '2022-12-14 07:39:16', '2022-12-14 07:39:16'),
(20, 'New Company Added!', 'Owner', 'Email', 'Hudson and Henry LLC', '0', '2023-01-24 07:42:26', '2023-01-24 07:42:26'),
(21, 'New Company Added!', 'Owner', 'Email', 'Massey and Craft Associates', '0', '2023-02-18 11:00:11', '2023-02-18 11:00:11');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(2555) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover_photo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `category`, `description`, `cover_photo`, `created_at`, `updated_at`) VALUES
(1, 'Chapa Payment Galteway Launched', 'Sport', '<p><em><strong>We\'re excited to announce that you can now manage your Chapa business from your phone with the Chapa Merchant App. We are redefining the digital industry</strong></em> by turning your phone into your business. Wait, what does this mean? It means your business Head Quarter is now located on your phone. The convenience of Chapa Merchant Thanks to its features, the Chapa Merchant App will make it super convenient for anyone to run their business. Let\'s examine how a few use cases will make it super convenient for merchants. With Chapa Merchant App, you can turn your phone into a POS. You can generate QR codes or Payment Links inside the App and share them with anyone via SMS, Socials or AirDrop to pay you. Do you know the limitation of the physical POS that accepts cards only? With Chapa Merchant App, you can accept payments via card, telebirr, PayPal, HelloCash, etc., many times closer to your customers than ever, right? But there is more. Chapa Merchant is not only about getting paid. You can also monitor your sales, customers, transactions, and more. We merged your phone with your business, indeed. How to setup Chapa Merchant You can download it on the Google Playstore and App Store right now. Sign in with your Chapa account as you would on the web. Choose a business you would like to manage. How to use Chapa Merchant? When you log into the App, swipe right, and it\'d reveal the menu options. All your sub-accounts are displayed first, and you can switch between them by tapping them. On the menu screen, \"Home\" keeps you on the overview of your Chapa account, where you can see a simple summary of your transactions and business. \"Links\" lets you see all your payment links, including donation and event links. You can also filter and share right from there. \"QR Code\" displays all available QR codes; you can save or share them from there. Your mobile POS is always available to help you accept payments. \"Customers\" displays a list of your customers, and you can view their details. Now you know who has been paying you more :))) \"Balance\" displays your ledger and available balances, and you can view balances in the different currencies on your account. There are also Transactions here</p>', 'yegihon wenz_1669412591.jpg', '2022-11-25 11:00:14', '2022-12-05 07:33:38'),
(2, 'Chapa Payment Galteway Launched', 'Privately Owned', 'We\'re excited to announce that you can now manage your Chapa business from your phone with the Chapa Merchant App. We are redefining the digital industry by turning your phone into your business. Wait, what does this mean? It means your business Head Quarter is now located on your phone. The convenience of Chapa Merchant Thanks to its features, the Chapa Merchant App will make it super convenient for anyone to run their business. Let\'s examine how a few use cases will make it super convenient for merchants. With Chapa Merchant App, you can turn your phone into a POS. You can generate QR codes or Payment Links inside the App and share them with anyone via SMS, Socials or AirDrop to pay you. Do you know the limitation of the physical POS that accepts cards only? With Chapa Merchant App, you can accept payments via card, telebirr, PayPal, HelloCash, etc., many times closer to your customers than ever, right? But there is more. Chapa Merchant is not only about getting paid. You can also monitor your sales, customers, transactions, and more. We merged your phone with your business, indeed. How to setup Chapa Merchant You can download it on the Google Playstore and App Store right now. Sign in with your Chapa account as you would on the web. Choose a business you would like to manage. How to use Chapa Merchant? When you log into the App, swipe right, and it\'d reveal the menu options. All your sub-accounts are displayed first, and you can switch between them by tapping them. On the menu screen, \"Home\" keeps you on the overview of your Chapa account, where you can see a simple summary of your transactions and business. \"Links\" lets you see all your payment links, including donation and event links. You can also filter and share right from there. \"QR Code\" displays all available QR codes; you can save or share them from there. Your mobile POS is always available to help you accept payments. \"Customers\" displays a list of your customers, and you can view their details. Now you know who has been paying you more :))) \"Balance\" displays your ledger and available balances, and you can view balances in the different currencies on your account. There are also Transactions here', 'yegihon wenz_1669452935.jpg', '2022-11-25 11:00:14', '2022-11-26 05:55:35'),
(3, 'Chapa Payment Galteway Launched', 'Privately Owned', 'We\'re excited to announce that you can now manage your Chapa business from your phone with the Chapa Merchant App. We are redefining the digital industry by turning your phone into your business. Wait, what does this mean? It means your business Head Quarter is now located on your phone. The convenience of Chapa Merchant Thanks to its features, the Chapa Merchant App will make it super convenient for anyone to run their business. Let\'s examine how a few use cases will make it super convenient for merchants. With Chapa Merchant App, you can turn your phone into a POS. You can generate QR codes or Payment Links inside the App and share them with anyone via SMS, Socials or AirDrop to pay you. Do you know the limitation of the physical POS that accepts cards only? With Chapa Merchant App, you can accept payments via card, telebirr, PayPal, HelloCash, etc., many times closer to your customers than ever, right? But there is more. Chapa Merchant is not only about getting paid. You can also monitor your sales, customers, transactions, and more. We merged your phone with your business, indeed. How to setup Chapa Merchant You can download it on the Google Playstore and App Store right now. Sign in with your Chapa account as you would on the web. Choose a business you would like to manage. How to use Chapa Merchant? When you log into the App, swipe right, and it\'d reveal the menu options. All your sub-accounts are displayed first, and you can switch between them by tapping them. On the menu screen, \"Home\" keeps you on the overview of your Chapa account, where you can see a simple summary of your transactions and business. \"Links\" lets you see all your payment links, including donation and event links. You can also filter and share right from there. \"QR Code\" displays all available QR codes; you can save or share them from there. Your mobile POS is always available to help you accept payments. \"Customers\" displays a list of your customers, and you can view their details. Now you know who has been paying you more :))) \"Balance\" displays your ledger and available balances, and you can view balances in the different currencies on your account. There are also Transactions here', 'yegihon wenz_1669452958.jpg', '2022-11-25 11:00:14', '2022-11-26 05:55:58'),
(4, 'Chapa Payment Galteway Launched', 'Privately Owned', 'We\'re excited to announce that you can now manage your Chapa business from your phone with the Chapa Merchant App. We are redefining the digital industry by turning your phone into your business. Wait, what does this mean? It means your business Head Quarter is now located on your phone. The convenience of Chapa Merchant Thanks to its features, the Chapa Merchant App will make it super convenient for anyone to run their business. Let\'s examine how a few use cases will make it super convenient for merchants. With Chapa Merchant App, you can turn your phone into a POS. You can generate QR codes or Payment Links inside the App and share them with anyone via SMS, Socials or AirDrop to pay you. Do you know the limitation of the physical POS that accepts cards only? With Chapa Merchant App, you can accept payments via card, telebirr, PayPal, HelloCash, etc., many times closer to your customers than ever, right? But there is more. Chapa Merchant is not only about getting paid. You can also monitor your sales, customers, transactions, and more. We merged your phone with your business, indeed. How to setup Chapa Merchant You can download it on the Google Playstore and App Store right now. Sign in with your Chapa account as you would on the web. Choose a business you would like to manage. How to use Chapa Merchant? When you log into the App, swipe right, and it\'d reveal the menu options. All your sub-accounts are displayed first, and you can switch between them by tapping them. On the menu screen, \"Home\" keeps you on the overview of your Chapa account, where you can see a simple summary of your transactions and business. \"Links\" lets you see all your payment links, including donation and event links. You can also filter and share right from there. \"QR Code\" displays all available QR codes; you can save or share them from there. Your mobile POS is always available to help you accept payments. \"Customers\" displays a list of your customers, and you can view their details. Now you know who has been paying you more :))) \"Balance\" displays your ledger and available balances, and you can view balances in the different currencies on your account. There are also Transactions here', 'yegihon wenz_1669453005.jpg', '2022-11-25 11:00:14', '2022-11-26 05:56:45'),
(5, 'Chapa Payment Galteway Launched', 'Privately Owned', 'We\'re excited to announce that you can now manage your Chapa business from your phone with the Chapa Merchant App. We are redefining the digital industry by turning your phone into your business. Wait, what does this mean? It means your business Head Quarter is now located on your phone. The convenience of Chapa Merchant Thanks to its features, the Chapa Merchant App will make it super convenient for anyone to run their business. Let\'s examine how a few use cases will make it super convenient for merchants. With Chapa Merchant App, you can turn your phone into a POS. You can generate QR codes or Payment Links inside the App and share them with anyone via SMS, Socials or AirDrop to pay you. Do you know the limitation of the physical POS that accepts cards only? With Chapa Merchant App, you can accept payments via card, telebirr, PayPal, HelloCash, etc., many times closer to your customers than ever, right? But there is more. Chapa Merchant is not only about getting paid. You can also monitor your sales, customers, transactions, and more. We merged your phone with your business, indeed. How to setup Chapa Merchant You can download it on the Google Playstore and App Store right now. Sign in with your Chapa account as you would on the web. Choose a business you would like to manage. How to use Chapa Merchant? When you log into the App, swipe right, and it\'d reveal the menu options. All your sub-accounts are displayed first, and you can switch between them by tapping them. On the menu screen, \"Home\" keeps you on the overview of your Chapa account, where you can see a simple summary of your transactions and business. \"Links\" lets you see all your payment links, including donation and event links. You can also filter and share right from there. \"QR Code\" displays all available QR codes; you can save or share them from there. Your mobile POS is always available to help you accept payments. \"Customers\" displays a list of your customers, and you can view their details. Now you know who has been paying you more :))) \"Balance\" displays your ledger and available balances, and you can view balances in the different currencies on your account. There are also Transactions here', 'yeb_1669453034.jpg', '2022-11-25 11:00:14', '2022-11-26 05:57:14'),
(6, 'Chapa Payment Galteway Launched', 'Privately Owned', 'We\'re excited to announce that you can now manage your Chapa business from your phone with the Chapa Merchant App. We are redefining the digital industry by turning your phone into your business. Wait, what does this mean? It means your business Head Quarter is now located on your phone. The convenience of Chapa Merchant Thanks to its features, the Chapa Merchant App will make it super convenient for anyone to run their business. Let\'s examine how a few use cases will make it super convenient for merchants. With Chapa Merchant App, you can turn your phone into a POS. You can generate QR codes or Payment Links inside the App and share them with anyone via SMS, Socials or AirDrop to pay you. Do you know the limitation of the physical POS that accepts cards only? With Chapa Merchant App, you can accept payments via card, telebirr, PayPal, HelloCash, etc., many times closer to your customers than ever, right? But there is more. Chapa Merchant is not only about getting paid. You can also monitor your sales, customers, transactions, and more. We merged your phone with your business, indeed. How to setup Chapa Merchant You can download it on the Google Playstore and App Store right now. Sign in with your Chapa account as you would on the web. Choose a business you would like to manage. How to use Chapa Merchant? When you log into the App, swipe right, and it\'d reveal the menu options. All your sub-accounts are displayed first, and you can switch between them by tapping them. On the menu screen, \"Home\" keeps you on the overview of your Chapa account, where you can see a simple summary of your transactions and business. \"Links\" lets you see all your payment links, including donation and event links. You can also filter and share right from there. \"QR Code\" displays all available QR codes; you can save or share them from there. Your mobile POS is always available to help you accept payments. \"Customers\" displays a list of your customers, and you can view their details. Now you know who has been paying you more :))) \"Balance\" displays your ledger and available balances, and you can view balances in the different currencies on your account. There are also Transactions here', 'yegihon wenz_1669412591.jpg', '2022-11-25 11:00:14', '2022-11-25 11:00:14'),
(7, 'Chapa Payment Galteway Launched', 'Privately Owned', 'We\'re excited to announce that you can now manage your Chapa business from your phone with the Chapa Merchant App. We are redefining the digital industry by turning your phone into your business. Wait, what does this mean? It means your business Head Quarter is now located on your phone. The convenience of Chapa Merchant Thanks to its features, the Chapa Merchant App will make it super convenient for anyone to run their business. Let\'s examine how a few use cases will make it super convenient for merchants. With Chapa Merchant App, you can turn your phone into a POS. You can generate QR codes or Payment Links inside the App and share them with anyone via SMS, Socials or AirDrop to pay you. Do you know the limitation of the physical POS that accepts cards only? With Chapa Merchant App, you can accept payments via card, telebirr, PayPal, HelloCash, etc., many times closer to your customers than ever, right? But there is more. Chapa Merchant is not only about getting paid. You can also monitor your sales, customers, transactions, and more. We merged your phone with your business, indeed. How to setup Chapa Merchant You can download it on the Google Playstore and App Store right now. Sign in with your Chapa account as you would on the web. Choose a business you would like to manage. How to use Chapa Merchant? When you log into the App, swipe right, and it\'d reveal the menu options. All your sub-accounts are displayed first, and you can switch between them by tapping them. On the menu screen, \"Home\" keeps you on the overview of your Chapa account, where you can see a simple summary of your transactions and business. \"Links\" lets you see all your payment links, including donation and event links. You can also filter and share right from there. \"QR Code\" displays all available QR codes; you can save or share them from there. Your mobile POS is always available to help you accept payments. \"Customers\" displays a list of your customers, and you can view their details. Now you know who has been paying you more :))) \"Balance\" displays your ledger and available balances, and you can view balances in the different currencies on your account. There are also Transactions here', 'yegihon wenz_1669412591.jpg', '2022-11-25 11:00:14', '2022-11-25 11:00:14'),
(8, 'Chapa Payment Galteway Launched', 'Privately Owned', 'We\'re excited to announce that you can now manage your Chapa business from your phone with the Chapa Merchant App. We are redefining the digital industry by turning your phone into your business. Wait, what does this mean? It means your business Head Quarter is now located on your phone. The convenience of Chapa Merchant Thanks to its features, the Chapa Merchant App will make it super convenient for anyone to run their business. Let\'s examine how a few use cases will make it super convenient for merchants. With Chapa Merchant App, you can turn your phone into a POS. You can generate QR codes or Payment Links inside the App and share them with anyone via SMS, Socials or AirDrop to pay you. Do you know the limitation of the physical POS that accepts cards only? With Chapa Merchant App, you can accept payments via card, telebirr, PayPal, HelloCash, etc., many times closer to your customers than ever, right? But there is more. Chapa Merchant is not only about getting paid. You can also monitor your sales, customers, transactions, and more. We merged your phone with your business, indeed. How to setup Chapa Merchant You can download it on the Google Playstore and App Store right now. Sign in with your Chapa account as you would on the web. Choose a business you would like to manage. How to use Chapa Merchant? When you log into the App, swipe right, and it\'d reveal the menu options. All your sub-accounts are displayed first, and you can switch between them by tapping them. On the menu screen, \"Home\" keeps you on the overview of your Chapa account, where you can see a simple summary of your transactions and business. \"Links\" lets you see all your payment links, including donation and event links. You can also filter and share right from there. \"QR Code\" displays all available QR codes; you can save or share them from there. Your mobile POS is always available to help you accept payments. \"Customers\" displays a list of your customers, and you can view their details. Now you know who has been paying you more :))) \"Balance\" displays your ledger and available balances, and you can view balances in the different currencies on your account. There are also Transactions here', 'yegihon wenz_1669412591.jpg', '2022-11-25 11:00:14', '2022-11-25 11:00:14');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2022_01_09_185829_create_sessions_table', 1),
(7, '2022_11_17_200924_create_companies_table', 1),
(8, '2022_11_17_200953_create_blogs_table', 1),
(9, '2022_11_17_201054_create_books_table', 1),
(10, '2022_11_20_063103_create_events_table', 1),
(11, '2022_11_23_124220_create_contacts_table', 1),
(12, '2022_11_23_183209_create_comments_table', 1),
(13, '2022_11_24_134725_create_company_reviews_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('berhanukebito05@gmail.com', '$2y$10$NQq0tgju2jK.9tMqubckh.qcKCr3hn/UDbfO3trF6Eo.apGoWjXyS', '2022-12-12 16:09:48');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `roll` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pricing` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profileImg` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `roll`, `status`, `pricing`, `profileImg`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'User', 'user@user.com', '2022-11-03 12:51:44', '$2y$10$h2lCbyIGxzjVyDfWlbhDQO9iGCRr13ZAhHewMZWuS.niSg.SpPTjG', NULL, NULL, 'admin', '1', '1', '5789789994783718857_121_1670253067.jpg', '5HWqPP51uWb8Si0OEuntgiDiUt9OuwvwwAvy1n4qWoP8dIyye9pQifj5qUzm', '2022-11-23 18:09:31', '2022-12-05 12:11:07'),
(2, 'Admin', 'berhanukebito065@gmail.com', '2022-11-02 09:02:49', '$2y$10$uGP6aq./Xe/wWSBdNuahQOKrv5y.66Uzt1lyYJuLbWmmC.tlwQime', NULL, NULL, 'user', '1', '0', NULL, NULL, '2022-11-23 18:10:19', '2022-11-26 05:44:02'),
(8, 'Berhanu Kebito', 'berhanukebito051@gmail.com', '2022-11-25 02:39:12', '$2y$10$C3nANUZbkpXEtn/zLwDNWerY756/LO4k2WldaQFJl4m9mWgA9lXUu', NULL, NULL, 'user', '1', '2', NULL, NULL, '2022-11-25 02:31:26', '2022-11-25 05:00:03'),
(9, 'Berhanu Kebito', 'berhanukebsdsito01@gmail.com', NULL, '$2y$10$v63Iu42NRkapzH/bTXP/T.Laj6zXxMakjRafrELdMq662BgU6670G', NULL, NULL, 'user', '1', NULL, NULL, NULL, '2022-11-26 10:50:17', '2022-11-26 10:50:17'),
(10, 'Berhanu Kebito', 'berhanukebito055@gmail.com', '2022-11-26 10:52:08', '$2y$10$XbmiUxLeDF7RQ4b6zkXs1e66Y.jYOXq/EcH0NOjVS6U3Vt0BorPdy', NULL, NULL, 'admin', '1', '2', NULL, NULL, '2022-11-26 10:51:42', '2022-11-29 09:47:34'),
(11, 'Berhanu Kebito', 'berhanukebito005@gmail.com', '2022-11-30 04:38:20', '$2y$10$UV/yzdZNKWewEfiqpsPp7.wY9mRQvBt/W58iE1pzGR1ZXTyvNM7YW', NULL, NULL, 'user', '1', '2', NULL, NULL, '2022-11-30 04:36:23', '2022-12-04 06:37:28'),
(12, 'Berhanu Kebito', 'berhanukebito105@gmail.com', '2022-12-12 10:18:24', '$2y$10$j3cQKAF/l9AY/JEEwXU3V.cTguJeRCeBp9wuto2FDIQXssHLU2uNy', NULL, NULL, 'user', '1', '0', 'no-image.png', NULL, '2022-12-12 10:17:08', '2022-12-12 10:24:14'),
(13, 'Berhanu Kebito', 'berhanukebito05@gmail.com', '2022-12-12 10:38:29', '$2y$10$c3iMxrd.52gKFpaLg7Ismuc5D/npjSTzrchBCqRJIMuPkUugIGhsu', NULL, NULL, 'user', '1', '0', 'no-image.png', NULL, '2022-12-12 10:38:05', '2022-12-12 11:12:05'),
(14, 'Knox Mann', 'lezydufe@mailinator.com', NULL, '$2y$10$WQWQjiW9p6YkLtT9jDFFOeu8N0BzuelkVNaX5lm/is.Dy.2ULWJeu', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2022-12-12 11:45:55', '2022-12-12 11:45:55'),
(15, 'Fiona Newman', 'zesuvofaqe@mailinator.com', NULL, '$2y$10$WdyFem/05p/JU9iNyw.igeTiNf8BQgA5VW1xlZ.7mq78BcBy1p3ly', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2022-12-12 15:33:27', '2022-12-12 15:33:27'),
(16, 'Melinda Ramirez', 'bijy@mailinator.com', NULL, '$2y$10$23XESc1rNIF.JQMoN3c9KeoaS8hIFoOMGawIw/74FETbEf.Pj9feq', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-02-23 03:36:38', '2023-02-23 03:36:38'),
(17, 'Erica Cohen', 'femutiru@mailinator.com', NULL, '$2y$10$oZqM2zZL.9/3hKSXZdqKr.SrcLwBMrBEmq.vb8hVw8.uaaU7CL8RC', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-03-08 04:09:48', '2023-03-08 04:09:48'),
(18, 'Hadassah Holder', 'bowu@mailinator.com', NULL, '$2y$10$JTmullV4cCj4ZvFJPob92uHeA.Ujq9kK9Y807Zuv5G4XNTgzUYpK6', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-03-08 04:26:31', '2023-03-08 04:26:31'),
(19, 'Reed Berger', 'segag@mailinator.com', NULL, '$2y$10$74nGgBedKb80ifwoF5H3Q.H7YbO/Rj4eUduzxvBcL/tZfkUY3FaS.', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-03-08 04:32:01', '2023-03-08 04:32:01'),
(20, 'Maryam Gilmore', 'zugiziwu@mailinator.com', NULL, '$2y$10$XeyFTj7RAzczsSEj1pQH3.3t3wkKxqp/eF0Nt.rGnq7ti.U6vlgf.', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-03-22 06:24:33', '2023-03-22 06:24:33'),
(21, 'Myles Langley', 'fofyqir@mailinator.com', NULL, '$2y$10$G26JYGfS/.55F7GtTBZOGu9kItxeWiPJoSyCapvI5cNg5Ofh4QsfG', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-03-22 06:40:18', '2023-03-22 06:40:18'),
(22, 'Brooke Welch', 'qizehyl@mailinator.com', NULL, '$2y$10$PE0su2BxnmDtQ94lm77ASu8C2NJPmncEuIGvxg4yECuc36VwnlIJ6', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-04-05 05:29:08', '2023-04-05 05:29:08'),
(23, 'Brenda Rodgers', 'xofez@mailinator.com', NULL, '$2y$10$RiSa8U9lsZNZO452OP6YD.BqeCRCCJKmhxPr1/lHCQSwPmYisRgNe', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-04-05 05:32:06', '2023-04-05 05:32:06'),
(24, 'Octavia Cherry', 'papuzoma@mailinator.com', NULL, '$2y$10$RbH8eori8D6lRFfSYv.1ouB74N67Ln01k6RXSvpCz9zvH7GXtKVMi', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-04-05 05:39:21', '2023-04-05 05:39:21'),
(25, 'Hakeem Mcdaniel', 'xenavasexu@mailinator.com', NULL, '$2y$10$81pw2ihYQsJDkDCi9Mn2R.hJZqjXTrZZxHyTDc.ftcTgGl8iLhKqO', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-04-05 05:43:39', '2023-04-05 05:43:39'),
(26, 'Berhanu Kebito', 'berhanukebito@gmail.com', NULL, '$2y$10$xXgRUsymk9YKrpl7zsyyjurkzlbhZ2329wggJUb6H7nuZ20IARUkm', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-04-05 05:44:49', '2023-04-05 05:44:49'),
(27, 'Berhanu Kebito', 'brhankbt63@gmail.com', '2023-04-05 05:51:52', '$2y$10$8HRLj86z6FvHCISogo2FW.nxo1vbjG4rnVYuD2mcz43GHwNavl6au', NULL, NULL, 'user', '1', NULL, 'no-image.png', NULL, '2023-04-05 05:50:29', '2023-04-05 05:51:52');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
