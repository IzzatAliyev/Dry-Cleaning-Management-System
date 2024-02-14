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

INSERT INTO `cleaner`.`customers` (firstName, lastName, surName, isRepeatCustomer, discount, orderCount) VALUES
('John', 'Doe', 'Sr.', 1, 3, 3),
('Alice', 'Smith', 'Jr.', 0, 0, 0),
('Bob', 'Johnson', 'III', 0, 0, 2),
('Emily', 'Williams', ' ', 0, 0, 0),
('David', 'Jones', ' ', 1, 9, 5);

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