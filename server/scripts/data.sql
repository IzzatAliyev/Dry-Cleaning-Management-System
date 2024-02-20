INSERT INTO `cleaner`.`filials` (name, location) VALUES
('Чиста Лінія Хімчистка', 'вул. Головна, Містечко'),
('Еко Прес Чистка', 'вул. Дубова, Містечко'),
('Швидка Пара Пральня', 'вул. Вільхова, Містечко'),
('Чиста Тканина Хімчистка', 'вул. Соснова, Містечко'),
('Кришталево Чистий Догляд за Одягом', 'вул. Кленова, Містечко');

INSERT INTO `cleaner`.`serviceType` (name) VALUES
('Чистка одягу'),
('Фарбування одягу'),
('Чищення та фарбування взуття'),
('Чищення та фарбування шкіри'),
('Хутряні вироби'),
('Чистка домашнього текстилю'),
('Premium чистка'),
('Обробка озоном');

INSERT INTO `cleaner`.`customers` (firstName, lastName, surName, phoneNumber, isRepeatCustomer, orderCount) VALUES
('Іван', 'Петров', 'Іванович', '0939493994', 1, 11),
('Аліса', 'Сміт', 'Іванівна', '0735498694', 1, 11),
('Богдан', 'Йогансон', 'Іванович', '0938393494', 1, 10),
('Емілія', 'Вільямс', 'Петрович', '0979499934', 1, 10),
('Давід', 'Джонс', 'Олегович', '0636493994', 1, 10);

-- Service Type: Чистка одягу (Dry Cleaning)
INSERT INTO `cleaner`.`services` (name, typeId, cost) VALUES
('Чистка костюма', 1, 25.99),
('Чистка сукні', 1, 30.99);

-- Service Type: Фарбування одягу (Clothing Dyeing)
INSERT INTO `cleaner`.`services` (name, typeId, cost) VALUES
('Фарбування сукні', 2, 35.99),
('Фарбування костюма', 2, 40.99);

-- Service Type: Чищення та фарбування взуття (Shoe Cleaning and Dyeing)
INSERT INTO `cleaner`.`services` (name, typeId, cost) VALUES
('Чищення та фарбування чобіт', 3, 18.50),
('Чищення та фарбування кросівок', 3, 12.99);

-- Service Type: Чищення та фарбування шкіри (Leather Cleaning and Dyeing)
INSERT INTO `cleaner`.`services` (name, typeId, cost) VALUES
('Чищення та фарбування шкіряної сумки', 4, 45.99),
('Чищення та фарбування шкіряного пальта', 4, 55.99);

-- Service Type: Хутряні вироби (Fur Services)
INSERT INTO `cleaner`.`services` (name, typeId, cost) VALUES
('Чистка хутра', 5, 60.99),
('Фарбування хутряного жакету', 5, 70.99);

-- Service Type: Чистка домашнього текстилю (Home Textile Cleaning)
INSERT INTO `cleaner`.`services` (name, typeId, cost) VALUES
('Чистка подушок', 6, 15.99),
('Прасування рушників', 6, 8.99);

-- Service Type: Premium чистка (Premium Cleaning)
INSERT INTO `cleaner`.`services` (name, typeId, cost) VALUES
('Premium чистка костюма', 7, 50.99),
('Premium чистка сукні', 7, 55.99);

-- Service Type: Обробка озоном (Ozone Treatment)
INSERT INTO `cleaner`.`services` (name, typeId, cost) VALUES
('Обробка озоном куртки', 8, 20.99),
('Обробка озоном штанів', 8, 12.99);

-- January 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(1, 1, 2, 50.20, 52.50, 3, 4, autoInc(), 4, '2022-01-02', '2022-01-20'),
(2, 3, 3, 60.30, 62.80, 2, 5, autoInc(), 3, '2022-02-16', '2022-02-18');

-- February 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(3, 2, 5, 39.50, 41.00, 1, 3, autoInc(), 2, '2022-02-17', '2022-02-22'),
(4, 4, 1, 42.99, 45.30, 4, 2, autoInc(), 2, '2022-02-18', '2022-02-21');

-- March 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(5, 5, 4, 65.30, 67.80, 2, 4, autoInc(), 3, '2022-02-19', '2022-02-24'),
(1, 1, 2, 55.40, 57.90, 3, 5, autoInc(), 4, '2022-03-05', '2022-03-10');

-- April 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(2, 3, 3, 45.60, 48.10, 1, 2, autoInc(), 1, '2022-04-12', '2022-04-18'),
(3, 2, 5, 33.25, 35.70, 4, 3, autoInc(), 1, '2022-04-15', '2022-04-20');

-- May 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(4, 4, 1, 28.75, 31.20, 2, 5, autoInc(), 4, '2022-05-08', '2022-05-15'),
(5, 5, 4, 60.00, 62.50, 3, 4, autoInc(), 4, '2022-05-12', '2022-05-20');

-- June 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(1, 1, 2, 50.20, 52.70, 1, 3, autoInc(), 4, '2022-06-02', '2022-06-20'),
(2, 3, 3, 60.30, 62.80, 4, 2, autoInc(), 4, '2022-06-16', '2022-06-18');

-- July 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(3, 2, 5, 40.20, 42.70, 2, 5, autoInc(), 3, '2022-07-05', '2022-07-10'),
(4, 4, 1, 55.60, 58.10, 3, 4, autoInc(), 2, '2022-07-12', '2022-07-18');

-- August 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(5, 5, 4, 30.80, 33.30, 1, 3, autoInc(), 2, '2022-08-08', '2022-08-15'),
(1, 1, 2, 45.90, 48.40, 4, 2, autoInc(), 3, '2022-08-16', '2022-08-22');

-- September 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(2, 3, 3, 38.75, 41.25, 2, 4, autoInc(), 4, '2022-09-05', '2022-09-10'),
(3, 2, 5, 62.40, 64.90, 3, 5, autoInc(), 1, '2022-09-12', '2022-09-18');

-- October 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(4, 4, 1, 49.20, 51.70, 1, 2, autoInc(), 4, '2022-10-08', '2022-10-15'),
(5, 5, 4, 28.30, 30.80, 4, 3, autoInc(), 2, '2022-10-16', '2022-10-22');

-- November 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(1, 1, 2, 35.60, 38.10, 2, 5, autoInc(), 3, '2022-11-05', '2022-11-10'),
(2, 3, 3, 42.90, 45.40, 3, 4, autoInc(), 2, '2022-11-12', '2022-11-18');

-- December 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(3, 2, 5, 55.20, 57.70, 1, 3, autoInc(), 1, '2022-12-08', '2022-12-15'),
(4, 4, 1, 48.75, 51.25, 4, 2, autoInc(), 4, '2022-12-16', '2022-12-22');

-- January 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(5, 5, 4, 37.50, 40.00, 2, 4, autoInc(), 3, '2023-01-05', '2023-01-10'),
(1, 1, 2, 43.20, 45.70, 3, 3, autoInc(), 4, '2023-01-12', '2023-01-18');

-- February 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(2, 3, 3, 60.80, 63.30, 1, 2, autoInc(), 3, '2023-02-08', '2023-02-15'),
(3, 2, 5, 28.90, 31.40, 4, 3, autoInc(), 4, '2023-02-16', '2023-02-22');

-- March 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(4, 4, 1, 48.75, 51.25, 2, 5, autoInc(), 4, '2023-03-05', '2023-03-10'),
(5, 5, 4, 52.40, 54.90, 3, 4, autoInc(), 2, '2023-03-12', '2023-03-18');

-- April 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(1, 1, 2, 40.20, 42.70, 1, 3, autoInc(), 4, '2023-04-08', '2023-04-15'),
(2, 3, 3, 35.90, 38.40, 4, 2, autoInc(), 2, '2023-04-16', '2023-04-22');

-- May 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(3, 2, 5, 25.60, 28.10, 2, 5, autoInc(), 2, '2023-05-05', '2023-05-10'),
(4, 4, 1, 42.30, 44.80, 3, 4, autoInc(), 3, '2023-05-12', '2023-05-18');

-- June 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(5, 5, 4, 37.20, 39.70, 1, 2, autoInc(), 4, '2023-06-08', '2023-06-15'),
(1, 1, 2, 46.80, 49.30, 4, 3, autoInc(), 4, '2023-06-16', '2023-06-22');

-- July 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(2, 3, 3, 55.40, 57.90, 2, 5, autoInc(), 2, '2023-07-05', '2023-07-10'),
(3, 2, 5, 40.80, 43.30, 3, 4, autoInc(), 1, '2023-07-12', '2023-07-18');

-- August 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(4, 4, 1, 30.90, 33.40, 1, 3, autoInc(), 2, '2023-08-08', '2023-08-15'),
(5, 5, 4, 48.75, 51.25, 4, 2, autoInc(), 4, '2023-08-16', '2023-08-22');

-- September 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(1, 1, 2, 37.20, 39.70, 2, 4, autoInc(), 4, '2023-09-05', '2023-09-10'),
(2, 3, 3, 42.60, 45.10, 3, 5, autoInc(), 2, '2023-09-12', '2023-09-18');

-- October 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(3, 2, 5, 58.30, 60.80, 1, 2, autoInc(), 2, '2023-10-08', '2023-10-15'),
(4, 4, 1, 34.50, 37.00, 4, 3, autoInc(), 3, '2023-10-16', '2023-10-22');

-- November 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(5, 5, 4, 42.90, 45.40, 2, 5, autoInc(), 4, '2023-11-05', '2023-11-10'),
(1, 1, 2, 52.20, 54.70, 3, 4, autoInc(), 3, '2023-11-12', '2023-11-18');

-- December 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(2, 3, 3, 45.60, 48.10, 1, 3, autoInc(), 4, '2023-12-08', '2023-12-15'),
(3, 2, 5, 38.75, 41.25, 4, 2, autoInc(), 2, '2023-12-16', '2023-12-22');

-- January 2024
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(4, 4, 1, 55.20, 57.70, 2, 4, autoInc(), 2, '2024-01-05', '2024-01-10'),
(5, 5, 4, 40.80, 43.30, 3, 5, autoInc(), 4, '2024-01-12', '2024-01-18');

-- February 2024
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, sbd, urgency, difficulty, ordNum, ordStatus, receiveDate, returnDate) VALUES
(1, 1, 2, 33.90, 36.40, 1, 2, autoInc(), 3, '2024-02-01', '2024-02-03'),
(2, 3, 3, 48.75, 51.25, 4, 3, autoInc(), 3, '2024-02-03', '2024-02-08');
