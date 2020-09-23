-- DATA -- 
INSERT INTO "user"
	VALUES
    (1, 'David', '1234', 'David.student@uts.xyz', 'STUDENT'),
	(2, 'Jane', '1234', 'Jane.student@uts.xyz', 'STUDENT'),
	(3, 'Bob', '1234', 'Bob.student@uts.xyz', 'STUDENT'),
	(4, 'Karen', '4321', 'Karen.teacher@uts.xyz', 'TEACHER'),
	(5, 'Joe', '4321', 'Joe.teacher@uts.xyz', 'TEACHER'),
	(6, 'Admin', 'Admin', 'Admin.admin@uts.xyz', 'ADMIN');


INSERT INTO tag
	VALUES
	(1, null, 'Engineering'),
	(2, 1, 'Problem Solving'),
	(3, 1, 'Software / Computer Science'),
	(4, 3, 'Programming'),
	(5, 4, 'C#'),
	(6, 4, 'Javascript'),
	(7, 6, 'NodeJS'),
	(8, 6, 'ReactJS'),
	(9, 5, '.NET Framework'),
	(10, null, 'Management'),
	(11, null, 'Health and Fitness'),
	(12, 11, 'Personal Training'),
	(13, null, 'Business');

INSERT INTO course
	VALUES
	(1, 'Software Engineering', 'Software engineers focus on large, complex, and critical software systems that are interwoven into our daily lives. - Uts.edu.au', 5),
	(2, 'Information Technology (and Business)', 'This is a cooperative education scholarship program in computer information systems, developed by UTS in cooperation with a group of leading organisations. - Uts.edu.au', 3),
	(3, 'Medical Science', 'eh', 10),
	(4, 'Law', 'oo', 7),
	(5, 'Health Science', 'ah', 2);

INSERT INTO course_tag
	VALUES
	--COURSE 1: Software Engineering
	(1, 1, 1), -- TAG: Engineering
	(2, 1, 2), -- TAG: Problem Solving
	(3, 1, 3), -- TAG: Software/ Computer Science
	(4, 1, 4), -- TAG: programming
	--COURSE 2: Information Technology (and Business)
	(5, 2, 3), -- TAG: Software/ Computer Science
	(6, 2, 12), -- TAG: Business
	(7, 2, 10), -- TAG: Management
	--COURSE 3: Medical Science
	(8, 3, 2), -- TAG: Problem Solving
	--COURSE 5: Health Science
	(9, 5, 11), -- TAG: Health and Fitness
	(10, 5, 12); -- TAG: Personal Training