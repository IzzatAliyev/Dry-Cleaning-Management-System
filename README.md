# Task
Ви працюєте в хімчистці. 

Вашим завданням є облік наданих послуг клієнтам.

Ваша хімчистка здійснює прийом у населення речей для виведення плям. 

Для наведення порядку Ви, по мірі можливості, складаєте базу даних клієнтів, запамʼятовуючи їх анкетні дані (прізвище, імʼя, по батькові). 
```
register customer
```

Починаючи з 3-го звернення, клієнт переходить у категорію постійних клієнтів і отримує знижку в 3% при чищенні кожної наступної речі. 
```
after 3 orders will be updated customer as regular and each time will be plusing discount of 3%
```

Всі послуги, що надаються Вами, поділяються на види, що мають назву, тип і вартість, яка залежить від складності робіт. 
```
service have type and price
```

Робота з клієнтом спочатку полягає у визначенні обсягу робіт, виду послуги і, відповідно, її вартості. 
```
by adding the new order 
```

Якщо клієнт згоден, він залишає річ (при цьому фіксується послуга, клієнт і дата прийому) і забирає її після обробки (при цьому фіксується дата повернення).
```
order complete

```

У Вашої хімчистки зʼявилася філія, і Ви хотіли б бачити, в тому числі, облік наданих послуг за філіями. 
```
adding orders to filials.
```

Крім того, ви вирішили робити надбавки за терміновість і складність робіт.
```
make additional payment for urgency and complexity of work
```

Сегодня был на консультации. 
Короче сайт должен выглядит примерно так: 

форма идет с данными пациента. 

Дальше внизу выводить список заявок, где написано имя, дата, вид послуги и т.д ) 

И ещё нужно выводить прибыльность нашего предприятия, можно типо за месяц, или хз, какую-то диаграмму .

### Tables
**customers**

**serviceType**

**services**

**orders**

**filials**
```
CREATE TABLE `cleaner`.`customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(60) NOT NULL,
  `lastName` varchar(60) NOT NULL,
  `surName` varchar(60) NOT NULL,
  `phoneNumber` varchar(60) NOT NULL,
  `isRepeatCustomer` tinyint(1) DEFAULT '0',
  `orderCount` int DEFAULT '0',
  PRIMARY KEY (`id`)
);
```

```
CREATE TABLE `cleaner`.`serviceType` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
);
```

```
CREATE TABLE `cleaner`.`services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `typeId` int NOT NULL,
  `cost` float NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`typeId`) REFERENCES `serviceType`(`id`)
);
```

```
CREATE TABLE `cleaner`.`filials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
```

```
CREATE TABLE `cleaner`.`orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customerId` int NOT NULL,
  `serviceId` int NOT NULL,
  `filialId` int NOT NULL,
  `sum` float NOT NULL,
  `sbd` float NOT NULL,
  `urgency` int NOT NULL,
  `difficulty` int NOT NULL,
  `receiveDate` varchar(60) NOT NULL,
  `returnDate` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`),
  FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`),
  FOREIGN KEY (`filialId`) REFERENCES `filials`(`id`)
);
```


> remove volume and images 
> `docker-compose down -v --rmi=all` 

> remove volume and local images 
> `docker-compose down -v --rmi=local` 