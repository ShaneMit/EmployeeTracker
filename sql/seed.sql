USE employee_db

INSERT INTO department(name)
VALUES ("Sales"), ("Dev Ops"), ("Engineering"), ("Marketing"), ("Design");

INSERT INTO role(title, salary, department_id)
VALUES ("Sales Agent", 1000000, 1), ("Dev Agent", 1000000, 2), ("Engineer", 1000000, 3), ("Market", 10000000, 4), ("Designer", 2000000, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, 1), ("John", "Doe", 2, 1), ("Jack", "Doe", 3, 1), ("Jill", "Doe", 4, 1), ("Jeremy", "Doe", 5, 1);