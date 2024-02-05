CREATE TABLE Student(
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(60),
    student_age INT
);

INSERT INTO Student(student_name, student_age) VALUES
('Shubham verma', 21),
('Utkarsh verma', 23);

CREATE TABLE User(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(60),
    user_firstName VARCHAR(60),
    user_nickName VARCHAR(60),
    user_mail unique VARCHAR(60),
    user_isManager TINYINT,
)

CREATE TABLE Place(
    place_id INT PRIMARY KEY AUTO_INCREMENT,
    place_name VARCHAR(60),
    place_description TEXT,
    place_Notation INT,
    place_opening_time DATETIME,
)

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;