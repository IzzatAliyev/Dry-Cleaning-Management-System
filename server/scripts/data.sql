INSERT INTO `cleaner`.`filials` (name, location) VALUES
('FreshClean Dry Cleaners', '123 Main Street, Cityville'),
('EcoPress Cleaners', '456 Oak Avenue, Townsville'),
('QuickSteam Laundry', '789 Elm Boulevard, Villageton'),
('PureFabric Dry Cleaning', '101 Pine Lane, Hamletsville'),
('CrystalClear Garment Care', '202 Maple Street, Suburbia');

INSERT INTO `cleaner`.`serviceType` (name) VALUES
('Dry Cleaning'),
('Laundry'),
('Alterations'),
('Pressing');

INSERT INTO `cleaner`.`customers` (firstName, lastName, surName, isRepeatCustomer, orderCount) VALUES
('John', 'Doe', 'Sr.', 0, 1),
('Alice', 'Smith', 'Jr.', 0, 1),
('Bob', 'Johnson', 'III', 0, 1),
('Emily', 'Williams', ' ', 0, 1),
('David', 'Jones', ' ', 0, 1);

INSERT INTO `cleaner`.`services` (name, typeId, cost) VALUES
('Suit Dry Cleaning', 1, 25.99),
('Dress Laundry', 2, 15.99),
('Pants Alterations', 3, 10.50),
('Shirt Pressing', 4, 5.99),
('Coat Dry Cleaning', 1, 35.99);

INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(1, 1, 2, 50.20, '2024-02-15', '2024-02-20'),
(2, 3, 3, 60.30, '2024-02-16', '2024-02-18'),
(3, 2, 5, 39.50, '2024-02-17', '2024-02-22'),
(4, 4, 1, 42.99, '2024-02-18', '2024-02-21'),
(5, 5, 4, 65.30, '2024-02-19', '2024-02-24');

INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(1, 1, 2, 50.20, '2022-01-02', '2024-01-20'),
(2, 3, 3, 60.30, '2024-02-16', '2024-02-18');

-- February 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(3, 2, 5, 39.50, '2024-02-17', '2024-02-22'),
(4, 4, 1, 42.99, '2024-02-18', '2024-02-21');

-- March 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(5, 5, 4, 65.30, '2024-02-19', '2024-02-24'),
(1, 1, 2, 55.40, '2022-03-05', '2022-03-10');

-- April 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(2, 3, 3, 45.60, '2022-04-12', '2022-04-18'),
(3, 2, 5, 33.25, '2022-04-15', '2022-04-20');

-- May 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(4, 4, 1, 28.75, '2022-05-08', '2022-05-15'),
(5, 5, 4, 60.00, '2022-05-12', '2022-05-20');

-- June 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(1, 1, 2, 50.20, '2022-06-02', '2024-06-20'),
(2, 3, 3, 60.30, '2024-06-16', '2024-06-18');

-- July 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(3, 2, 5, 40.20, '2022-07-05', '2022-07-10'),
(4, 4, 1, 55.60, '2022-07-12', '2022-07-18');

-- August 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(5, 5, 4, 30.80, '2022-08-08', '2022-08-15'),
(1, 1, 2, 45.90, '2022-08-16', '2022-08-22');

-- September 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(2, 3, 3, 38.75, '2022-09-05', '2022-09-10'),
(3, 2, 5, 62.40, '2022-09-12', '2022-09-18');

-- October 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(4, 4, 1, 49.20, '2022-10-08', '2022-10-15'),
(5, 5, 4, 28.30, '2022-10-16', '2022-10-22');

-- November 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(1, 1, 2, 35.60, '2022-11-05', '2022-11-10'),
(2, 3, 3, 42.90, '2022-11-12', '2022-11-18');

-- December 2022
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(3, 2, 5, 55.20, '2022-12-08', '2022-12-15'),
(4, 4, 1, 48.75, '2022-12-16', '2022-12-22');

-- January 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(5, 5, 4, 37.50, '2023-01-05', '2023-01-10'),
(1, 1, 2, 43.20, '2023-01-12', '2023-01-18');

-- February 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(2, 3, 3, 60.80, '2023-02-08', '2023-02-15'),
(3, 2, 5, 28.90, '2023-02-16', '2023-02-22');

-- March 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(4, 4, 1, 48.75, '2023-03-05', '2023-03-10'),
(5, 5, 4, 52.40, '2023-03-12', '2023-03-18');

-- April 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(1, 1, 2, 40.20, '2023-04-08', '2023-04-15'),
(2, 3, 3, 35.90, '2023-04-16', '2023-04-22');

-- May 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(3, 2, 5, 25.60, '2023-05-05', '2023-05-10'),
(4, 4, 1, 42.30, '2023-05-12', '2023-05-18');

-- June 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(5, 5, 4, 37.20, '2023-06-08', '2023-06-15'),
(1, 1, 2, 46.80, '2023-06-16', '2023-06-22');

-- July 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(2, 3, 3, 55.40, '2023-07-05', '2023-07-10'),
(3, 2, 5, 40.80, '2023-07-12', '2023-07-18');

-- August 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(4, 4, 1, 30.90, '2023-08-08', '2023-08-15'),
(5, 5, 4, 48.75, '2023-08-16', '2023-08-22');

-- September 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(1, 1, 2, 37.20, '2023-09-05', '2023-09-10'),
(2, 3, 3, 42.60, '2023-09-12', '2023-09-18');

-- October 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(3, 2, 5, 58.30, '2023-10-08', '2023-10-15'),
(4, 4, 1, 34.50, '2023-10-16', '2023-10-22');

-- November 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(5, 5, 4, 42.90, '2023-11-05', '2023-11-10'),
(1, 1, 2, 52.20, '2023-11-12', '2023-11-18');

-- December 2023
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(2, 3, 3, 45.60, '2023-12-08', '2023-12-15'),
(3, 2, 5, 38.75, '2023-12-16', '2023-12-22');

-- January 2024
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(4, 4, 1, 55.20, '2024-01-05', '2024-01-10'),
(5, 5, 4, 40.80, '2024-01-12', '2024-01-18');

-- February 2024
INSERT INTO `cleaner`.`orders` (customerId, serviceId, filialId, sum, receiveDate, returnDate) VALUES
(1, 1, 2, 33.90, '2024-02-01', '2024-02-03'),
(2, 3, 3, 48.75, '2024-02-03', '2024-02-08');