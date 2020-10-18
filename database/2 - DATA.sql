-- DATA -- 
INSERT INTO "user" (us_name, us_password, us_email, us_type)
	VALUES
  ('David', '1234', 'David.student@uts.xyz', 'STUDENT'),
	('Jane', '1234', 'Jane.student@uts.xyz', 'STUDENT'),
	('Bob', '1234', 'Bob.student@uts.xyz', 'STUDENT'),
	('Karen', '4321', 'Karen.teacher@uts.xyz', 'TEACHER'),
	('Joe', '4321', 'Joe.teacher@uts.xyz', 'TEACHER'),
	('StackOverflow', '4321', 'StackOverflow.teacher@uts.xyz', 'TEACHER'),
	('Admin', 'Admin', 'Admin.admin@uts.xyz', 'ADMIN');


INSERT INTO tag (TG_TG_Parent, TG_NAME)
	VALUES
	(null, 'Engineering'),
	(1, 'Problem Solving'),
	(1, 'Software / Computer Science'),
	(3, 'Programming'),
	(4, 'C#'),
	(4, 'Javascript'),
	(6, 'NodeJS'),
	(6, 'ReactJS'),
	(5, '.NET Framework'),
	(null, 'Management'),
	(null, 'Health and Fitness'),
	(11, 'Personal Training'),
	(null, 'Business');

INSERT INTO course (CO_Name, CO_Description, CO_Duration)
	VALUES
	('Software Engineering', 'Software engineers focus on large, complex, and critical software systems that are interwoven into our daily lives. - Uts.edu.au', 5),
	('Information Technology (and Business)', 'This is a cooperative education scholarship program in computer information systems, developed by UTS in cooperation with a group of leading organisations. - Uts.edu.au', 3),
	('Medical Science', 'eh', 10),
	('Law', 'oo', 7),
	('Health Science', 'ah', 2);

INSERT INTO course_tag (CT_CO_Course, CT_TG_Tag)
	VALUES
	--COURSE 1: Software Engineering
	(1, 1), -- TAG: Engineering
	(1, 2), -- TAG: Problem Solving
	(1, 3), -- TAG: Software/ Computer Science
	(1, 4), -- TAG: programming
	--COURSE 2: Information Technology (and Business)
	(2, 3), -- TAG: Software/ Computer Science
	(2, 12), -- TAG: Business
	(2, 10), -- TAG: Management
	--COURSE 3: Medical Science
	(3, 2), -- TAG: Problem Solving
	--COURSE 5: Health Science
	(5, 11), -- TAG: Health and Fitness
	(5, 12); -- TAG: Personal Training

