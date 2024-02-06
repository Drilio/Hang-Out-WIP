CREATE TABLE Student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(60),
    student_age INT
);

INSERT INTO Student (student_name, student_age) VALUES
('Shubham verma', 21),
('Utkarsh verma', 23);

CREATE TABLE myUser (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(60),
    user_firstName VARCHAR(60),
    user_nickName VARCHAR(60),
    user_mail VARCHAR(60) UNIQUE,
    user_isManager TINYINT
);

INSERT INTO myUser (user_name, user_firstName, user_nickName, user_mail, user_isManager) VALUES
('Toto', 'Morico', 'leKingDu69', 'toto@mail.com', 1),
('Bill', 'Gates', 'tmtcHight', 'ouaismaisbon@mail.com', 0);

CREATE TABLE Place (
    place_id INT PRIMARY KEY AUTO_INCREMENT,
    place_name VARCHAR(60),
    place_description TEXT,
    place_Notation INT,
    place_opening_time DATETIME
);

CREATE TABLE Event (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(60),
    event_date DATETIME,
    event_description TEXT,
    event_opening_time DATETIME
);

CREATE TABLE Tag (
    tag_id INT PRIMARY KEY AUTO_INCREMENT,
    tag_name VARCHAR(60)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;

