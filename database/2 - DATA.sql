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


INSERT INTO tag (TG_NAME)
	VALUES
	('Emotional Intelligence'), ('Flexibility'), ('Motivation'), --3 (last ones id)
	('Communication'), ('Public Speaking'), ('Problem Solving'), --6
	('Analytics'), ('Creativity'), ('Programming Skills'), --9
	('Leadership'), ('Management'), ('Willingness to Learn'), --12
	('Customer Service'), ('Attention to Detail'), ('Empathy'), --15
	('Decision Making'), ('Organisation'), ('Time Management'), --18
	('Teamwork'), ('Strategic Planning'), ('Public Speaking'), --21
	('Critical Thinking'), ('Mathematics'), ('English'), --24
	('Biology'), ('History'), ('Geography'), --27
	('Law'), ('Economics'), ('Business'); --30

INSERT INTO faculty (FA_Identifier, FA_DisplayName, FA_Description)
	VALUES
	('arts-and-social-sciences', 'Arts and Social Sciences', 'The Faculty of Arts and Social Sciences (FASS) leads positive global change and advances social justice through our teaching, research and collaboration with industry and the community.'),
	('business', 'Business', 'Advancing knowledge with impact through integrative thinking for next generation leaders in a globalising world.'),
	('design-architecture-building', 'Design, Architecture and Building', 'The UTS Faculty of Design, Architecture and Building contributes to the transformation of urban life, contemporary design culture and the built environment through our research, education and engagement with the professions.'),
	('engineering-and-it', 'Engineering and IT', 'Delivering rigorous, practical and industry-focused education and research that encourages disruptive technologies and cultivates exceptional engineering and information technology professionals.'),
	('health', 'Health', 'Innovative, practice-oriented and globally relevant education and research in a broad range of health disciplines.'),
	('law', 'Law', 'A dynamic and innovative law school, achieving great success for the quality of its legal education and research.'),
	('sciences', 'Sciences', 'UTS Science is research-driven, relevant, innovative and practical, achieving success and impact for its quality teaching and research.'),
	('transdisciplinary-innovation', 'Transdisciplinary Innovation', 'Transdisciplinary research and teaching draws on\nmultiple disciplines to provide the knowledge base to\naddress complex problems in society.');

INSERT INTO course (CO_FA, CO_Code, CO_Name, CO_Description, CO_LowestAtar, CO_Duration)
	VALUES
	(1, '10276', 'Bachelor of Music and Sounds Design', 'This course is designed to develop practitioners in music and sound design with a strong base of artistic, professional and theoretical skills. The UTS Bachelor of Music and Sound Design combines the domains of music, sound and screens (film, TV, internet, games, online) with subjects that focus on developing real-world skills for the digital sound industry.\nStudents graduate with a portfolio of sound works demonstrating their creativity and professionalism. The course also involves input from leading industry figures, including sound designers, songwriters, producers and other professionals from the creative industries.\nThe course appeals to students with an interest in popular music, sound design, creative arts, or interactive multimedia. It offers a contemporary music and sound design degree that focuses on the production and analysis of sound for various media, including interactive environments.', 60.0, 3.0),
	(1, '09047', 'Bachelor of Communication (Honours)', 'The Bachelor of Communication (Honours) offers graduates the opportunity to pursue advanced-level study in communication, social sciences, cultural studies and creative arts. It prepares graduates for higher degree research and professional activity. Emphasis is placed on interdisciplinary approaches and the integration of scholarship with contemporary issues in society and culture.\nAn honours degree in communication provides an excellent opportunity for students to develop their creative practice, research and communication skills. Supported by leading researchers, teachers and creative practitioners, students undertake a program of advanced coursework and produce a project relevant to their academic, professional and/or creative major.', 65.0, 1.0),
	(1, '10361', 'Bachelor of Communication (Journalism)', 'Journalism education at UTS is based on the principle that journalism exists as a public good to inform people based on their right to know. This degree develops professional skills across all media and critically engages with the intellectual, ethical and political foundations of journalism, in the context of disruptive technological development and its impact on journalism in the digital era.\nThis course is designed to meet the essential practical skills and theoretical knowledge needed for a career in journalism. Students gain a crucial understanding of the role that journalists play in creating a democratic public sphere, providing a forum for debate and giving voice to diverse communities. The course equips students with advanced research, writing, reporting and analytical skills for online, audio, television, video, print and social media; and knowledge of the intellectual, ethical and political foundations of journalism.', 70.0, 3.0),
	(1, '10264', 'Bachelor of Global Studies', 'The UTS Bachelor of Global Studies is a highly versatile, professionally oriented arts degree that takes globalisation in its political, economic and cultural manifestations as its core subject of inquiry. Students draw connections between global phenomena and concrete local practices in work and life, seeing the opportunities and constraints that exist for different groups of people. The course engages students in complex problem-solving regarding global processes and events.\nStudents select a major in business, management, communications, health or legal studies and integrate the perspectives and skills from their professional major into their core subjects. Students may choose to study overseas on session?long exchange or short?term work and/or study placements, or to learn another language. Students undertake either a domestic or international work placement.\nThis course prepares graduates for careers and contributions in a world of social and cultural diversity being transformed by globalisation, allowing students to draw connections between global phenomena and local practices in work and life.', 70.0, 3.0),

	(2, '10235', 'Bachelor of Accounting', '', 79.0, 4.0),
	(2, '10026', 'Bachelor of Business', '', 73.0, 3.5),
	(2, '10340', 'Bachelor of Business Administration', '', 72.0, 3.0),
	(2, '10348', 'Bachelor of Economics', '', 78.0, 3),
	(2, '09101', 'Bachelor of Entrepreneurship (Honours)', '', 82.0, 4.5),

	(3, '10004', 'Bachelor of Design in Architecture', '', 75.0, 3.0),
	(3, '10214', 'Bachelor of Construction Project Management', '', 80.0, 3.5),
	(3, '10271', 'Bachelor of Design in Interior Architecture', '', 81.0, 3.0),
	(3, '10273', 'Bachelor of Design in Animation', '', 70.0, 3.0),

	(4, '09067', 'Bachelor of Engineering (Honours) Diploma in Professional Engineering Practice', '', 83.0, 5.0),
	(4, '10066', 'Bachelor of Engineering Science', '', 81.0, 4.0),
	(4, '09119', 'Bachelor of Computing Science (Honours)', '', 78.0, 4.0),
	(4, '10143', 'Bachelor of Information Technology', '', 79.0, 3.0),
	(4, '10395', 'Bachelor of Information Systems', '', 79.0, 3.0),
	
	(5, '10122', 'Bachelor of Nursing', '', 76.0, 3.0),
	(5, '10225', 'Bachelor of Midwifery', '', 71.0, 3.0),
	(5, '10300', 'Bachelor of Sport and Exercise Science', '', 72.0, 3.0),
	(5, '10360', 'Bachelor of Health Science', '', 76, 3.0),

	(6, '10124', 'Bachelor of Laws', '', 86.0, 4.0),
	(6, '09083', 'Bachelor of Laws (Honours)', '', 89.0, 5.0),

	(7, '10115', 'Bachelor of Biomedical Science', '', 81.0, 4.0),
	(7, '10184', 'Bachelor of Medical Science', '', 89.0, 5.0),
	(7, '10242', 'Bachelor of Science', '', 76.0, 3.0),
	(7, '10346', 'Bachelor of Biomedical Physics', '', 90.0, 5.0),
	(7, '10384', 'Bachelor of Science in Analytics', '', 77.0, 3.5),
	(7, '10387', 'Bachelor of Forensic Science', '', 81.0, 3.5),
	
	(8, '10390', 'Bachelor of Technology and Innovation', '', 70.0, 3.0),
	(8, '20060', 'Diploma in Innovation', '', 65.0, 2.0),
	(8, '09122', 'Bachelor of Creative Intelligence and Innovation (Honours)', '', 78.0, 4.0);
	

