create table transactions (
	transaction_id INT AUTO_INCREMENT,
    amount DECIMAL(10,2),
    transaction_date DATE,
    description_id VARCHAR(50),
    bank_account_id VARCHAR(50)
);
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-13.70, '2021-05-14', 'GIFTS', '03093658CQ');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-1.20, '2021-05-20', 'MRT', '86826321VV');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-9.00, '2021-04-05', 'FOOD', '86826321VV');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-5.40, '2021-03-27', 'NTUC', '31324841WN');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-2.00, '2021-06-19', 'MRT', '31324841WN');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-0.95, '2021-06-03', 'BUS', '03093658CQ');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-14.30, '2021-05-11', 'GV', '86826321VV');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-8.45, '2021-05-18', 'REDMART', '86826321VV');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-6.50, '2021-03-31', 'GV', '86826321VV');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-6.00, '2021-06-28', 'GIFTS', '03093658CQ');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-13.75, '2021-03-16', 'GRAB', '86826321VV');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-10.50, '2021-04-15', 'ELECTRONICS', 'K1733982QCASH');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-3.50, '2021-05-11', 'FOOD', 'K1733982QCASH');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-19.20, '2021-06-27', 'GIFTS', '03093658CQ');
insert into transactions (amount, transaction_date, description_id, bank_account_id) values (-18.65, '2021-06-21', 'NTUC', 'K1733982QCASH');

alter table transactions AUTO_INCREMENT=1;

DELETE FROM transactions;

DELETE FROM transactions
where transaction_id = 55;