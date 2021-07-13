/* CREATE NEW DATABASE */
create database b11_group3;

/* DISPLAY DATABASE */
select * from users;
select * from bank_accounts;
select * from transactions;
select * from category;

describe users;
describe bank_accounts;
describe transactions;
describe category;

/*SET PRIMARY KEY */
ALTER TABLE users
ADD PRIMARY KEY (user_id);

/*CREATE FOREIGN KEY CONSTRAINT*/
ALTER bank_accounts
ADD FOREIGN KEY (user_id) REFERENCES user (user_id);

ALTER TABLE transactions
ADD FOREIGN KEY (bank_account_id) REFERENCES bank_account (bank_account_id);

ALTER TABLE category
ADD PRIMARY KEY (description_id);

ALTER TABLE transactions
ADD FOREIGN KEY (description_id) REFERENCES category (description_id); 

/* CREATE a Transaction */
INSERT INTO
    transactions (amount, transaction_date, description_id, bank_account_id)
values
    (250, '2021-07-05', 'Income', 'Cash');


/* READ a list of Transactions by Category */
select t.*, date_format(t.transaction_date,'%d/%m/20%y')as transaction_date, c.category, b.user_id
from transactions as t
right join category as c
on t.description_id = c.description_id
left join bank_accounts as b
on t.bank_account_id = b.bank_account_id
where category = 'Transport' and user_id = 'K1733982Q';


/* READ amount by Category Excl Income */
select b.user_id, c.category, abs(sum(t.amount))
from transactions as t
right join category as c
on t.description_id = c.description_id
left join bank_accounts as b
on t.bank_account_id = b.bank_account_id
where user_id = 'K1733982Q' AND t.amount < 0
group by category
order by category;


/* UPDATE a Transaction */
UPDATE transactions
set amount = "150"
where transaction_id = 16 and bank_account_id = 'K1733982QCASH';


/* DELETE a Transaction */
DELETE FROM transactions
where transaction_id = 16;


/* READ totals of invidual Categories w/o Income */
select c.category, abs(sum(t.amount)) as total
from transactions as t
right join category as c
on t.description_id = c.description_id
left join bank_accounts as b
on t.bank_account_id = b.bank_account_id
where user_id = 'K1733982Q' AND t.amount > 0 
group by category
order by category;

/* READ totals of Income */
select c.category, abs(sum(t.amount)) as total
from transactions as t
right join category as c
on t.description_id = c.description_id
left join bank_accounts as b
on t.bank_account_id = b.bank_account_id
where t.amount > 0
group by category
order by category;