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
	('transdisciplinary-innovation', 'Transdisciplinary Innovation', 'Transdisciplinary research and teaching draws on multiple disciplines to provide the knowledge base to address complex problems in society.');

INSERT INTO course (CO_FA, CO_Code, CO_Name, CO_Description, CO_LowestAtar, CO_Duration)
	VALUES
	(1, '10276', 'Bachelor of Music and Sounds Design', 'This course is designed to develop practitioners in music and sound design with a strong base of artistic, professional and theoretical skills. The UTS Bachelor of Music and Sound Design combines the domains of music, sound and screens (film, TV, internet, games, online) with subjects that focus on developing real-world skills for the digital sound industry. Students graduate with a portfolio of sound works demonstrating their creativity and professionalism. The course also involves input from leading industry figures, including sound designers, songwriters, producers and other professionals from the creative industries. The course appeals to students with an interest in popular music, sound design, creative arts, or interactive multimedia. It offers a contemporary music and sound design degree that focuses on the production and analysis of sound for various media, including interactive environments.', 60 , 3 ),
	(1, '09047', 'Bachelor of Communication (Honours)', 'The Bachelor of Communication (Honours) offers graduates the opportunity to pursue advanced-level study in communication, social sciences, cultural studies and creative arts. It prepares graduates for higher degree research and professional activity. Emphasis is placed on interdisciplinary approaches and the integration of scholarship with contemporary issues in society and culture. An honours degree in communication provides an excellent opportunity for students to develop their creative practice, research and communication skills. Supported by leading researchers, teachers and creative practitioners, students undertake a program of advanced coursework and produce a project relevant to their academic, professional and/or creative major.', 65 , 1 ),
	(1, '10361', 'Bachelor of Communication (Journalism)', 'Journalism education at UTS is based on the principle that journalism exists as a public good to inform people based on their right to know. This degree develops professional skills across all media and critically engages with the intellectual, ethical and political foundations of journalism, in the context of disruptive technological development and its impact on journalism in the digital era. This course is designed to meet the essential practical skills and theoretical knowledge needed for a career in journalism. Students gain a crucial understanding of the role that journalists play in creating a democratic public sphere, providing a forum for debate and giving voice to diverse communities. The course equips students with advanced research, writing, reporting and analytical skills for online, audio, television, video, print and social media; and knowledge of the intellectual, ethical and political foundations of journalism.', 70 , 3 ),
	(1, '10264', 'Bachelor of Global Studies', 'The UTS Bachelor of Global Studies is a highly versatile, professionally oriented arts degree that takes globalisation in its political, economic and cultural manifestations as its core subject of inquiry. Students draw connections between global phenomena and concrete local practices in work and life, seeing the opportunities and constraints that exist for different groups of people. The course engages students in complex problem-solving regarding global processes and events. Students select a major in business, management, communications, health or legal studies and integrate the perspectives and skills from their professional major into their core subjects. Students may choose to study overseas on session?long exchange or short?term work and/or study placements, or to learn another language. Students undertake either a domestic or international work placement. This course prepares graduates for careers and contributions in a world of social and cultural diversity being transformed by globalisation, allowing students to draw connections between global phenomena and local practices in work and life.', 70 , 3 ),

	(2, '10235', 'Bachelor of Accounting', 'The Bachelor of Accounting is a cooperative education program in accounting. It is an intensive course offered in conjunction with major employers. Students complete a compulsory first major in accounting and receive a scholarship and full-time work training. This course is a specialist degree for high-achieving students who view an accounting career as an excellent foundation for future business leadership. All students in the course receive a scholarship of up to $51,500 (including $8000 recruitment incentive at the end of the program) over three years and a year of full-time industry experience, and are encouraged to complete a second major or sub-major in another business discipline. Historically the course has a graduate employment rate greater than 95 per cent.', 79 , 4 ),
	(2, '10026', 'Bachelor of Business', 'The Bachelor of Business offers students a sound background in all areas of business through eight common core subjects undertaken in first year, followed by in-depth knowledge in one or more chosen areas of interest through the completion of a mix of majors, extended majors, sub-majors and electives. Students have the flexibility to select a course structure and major(s) after first year. This means they have the opportunity to use Year 1 to explore all areas of business and ultimately guide their chosen specialisation in Year 2 and 3. Students choose from 10 majors and 34 sub-majors, as well as four extended majors, giving them the flexibility to study a broad range of specialisations; or do an in-depth study of a specialisation of their choosing. In some degree configurations, students have the choice of four electives. This is an opportunity to deepen expertise with additional business subjects, or add breadth by enrolling in subjects from other university faculties.', 73 , 3.5),
	(2, '10340', 'Bachelor of Business Administration', 'The Bachelor of Business Administration focuses on applying theories to business practice and the overall management of an organisation. The course takes into account cultural diversity, experiences and aspirations of community members, and ethical standards for managing enterprise initiatives. Students learn how a multidisciplinary perspective can be used to address economic, financial and social issues, including those relevant to the Indigenous community. This course prepares students for a career in business management by providing a thorough understanding of the core functions of management and business administration. Students are given the opportunity to explore various divisions and responsibilities of an organisation and how to operate effectively in a dynamic global business environment. An emphasis is placed on decision-making and problem-solving, cognitive analytical skills to synthesise organisational knowledge in diverse contexts, and clearly communicating the ideas and solutions developed through a creative process.', 72 , 3 ),
	(2, '10348', 'Bachelor of Economics', 'The Bachelor of Economics offers students the analytical and quantitative skills required for an in-depth understanding of key economic principles. The degree complements this knowledge with the option of majors across selected business disciplines. The course includes training in econometrics, macroeconomics and microeconomics with an emphasis on practical policy. A capstone subject synthesises knowledge from game theory, experimental economics and industrial organisation to study policy-making in real-world settings.', 78 , 3),
	(2, '09101', 'Bachelor of Entrepreneurship (Honours)', 'The Bachelor of Entrepreneurship (Honours) is a one-year, full-time program that provides students with an undergraduate qualification of advanced entrepreneurship skills and knowledge. The program is open to graduates from all disciplines and is designed to help qualified and motivated students develop their own entrepreneurial proposal. The degree is aimed at a diverse cohort of students with a desire to develop (or continue to develop) an entrepreneurial project or start-up venture. Students of all disciplines graduating from undergraduate degrees at UTS, other Australian universities or international institutions can apply.', 82 , 4.5),

	(3, '10004', 'Bachelor of Design in Architecture', 'The Bachelor of Design in Architecture is the first of two degrees needed to become an architect. Students wishing to qualify for professional recognition as architects must also complete the Master of Architecture (C04235). Through the Bachelor of Design in Architecture, students learn what it means to be an architect in a globalised world. This is achieved with a focus on how the profession can shape global cities through complex spatial thinking. The first step is to deprogram preconceived ideas of architecture. Such an approach lays the foundations for creative spatial and material awareness, pushing the boundaries of traditional architectural practice. UTS takes a hands-on approach to digital design and fabrication: students learn the software, material and model-making skills required to translate thought into form, right from the start. They have the opportunity to work on real-life projects and engage with stakeholders such as the Powerhouse Museum, ABC, Sydney Harbour Foreshore Authority (SHFA), and Sydney Olympic Park Authority. Students are globally connected, with opportunities to study in, work in or visit cities such as Berlin, Los Angeles, New York and Tokyo. They hear from international experts through guest lectures and are connected to global competitions and scholarships like the Costenino Design Challenge or Frank Gehry internship program. UTS Architecture is a young and vibrant architectural school, working from one of Australias newest, leading-edge campuses. Its staff are actively engaged in the industry as practitioners and commentators, while its 24-hour studios are always abuzz with students who live and breathe architecture.', 75 , 3 ),
	(3, '10214', 'Bachelor of Construction Project Management', 'The Bachelor of Construction Project Management delivers the management, technology and process skills required to work in a variety of well-paid roles across the full spectrum of construction projects. Students are taught a wide range of project management methodologies with a strong focus on applying these to real-world projects. The emphasis on the utilisation of digital technologies, such as building information modelling, ensures that students understand the leading-edge advances that are being implemented in the industry. This knowledge can be applied in other industry sectors, providing further employment opportunities. All students are required to complete a minimum of 200 days industry experience during the course, providing essential professional exposure. For the vast majority of students this entails paid employment in the industry with contractors and consultants (typically called cadetships). To broaden their personal and professional outlook, students can also choose electives or a sub-major in a range of disciplines outside construction project management, including business accounting, environmental studies and Aboriginal studies.', 80 , 3.5),
	(3, '10271', 'Bachelor of Design in Interior Architecture', 'The Bachelor of Design in Interior Architecture helps students to re-imagine interior environments and public spaces in local and global contexts. With a strong emphasis on peoples experiences of spatial design, this degree equips students with the critical skills required to interrogate and transgress the traditional boundaries of commercial interior design. Students learn to engage with public and urban spaces alongside internal environments. Contemporary societies and city environments are changing rapidly, and this course promotes the ability to adapt to this change and shape the way people experience interior and public spaces. Through a strong emphasis on practice and research, students develop the ability to think conceptually and understand the complex contexts in which they are designing. Through intensive collaborative design studios, students work to develop, discuss and debate ideas as they would in industry. With skills in analogue and digital design and fabrication, they are able to tackle real-world projects in the studios as well as through competitions with stakeholders such as the Art Gallery of NSW, Object Gallery, the City of Sydney and Zumtobel Lighting. International connections and focus encourage recognition of UTS graduates abroad. UTS academics lead yearly international design studios in cities such as Berlin, Hong Kong, Athens, Prague and Venice. International guest lectures and workshops, as well as a wide range of exchange opportunities, enrich students learning and expose them to different cultures of design.', 81 , 3 ),
	(3, '10273', 'Bachelor of Design in Animation', 'The Bachelor of Design in Animation gives students with a passion for visual arts, drawing and storytelling the knowledge and hands-on experience required to create animation work that stands out in a global industry. Graduates from this degree are image-makers, critical thinkers and storytellers in equal measure. They are equipped to be industry leaders with an ability to develop, pitch and defend ideas, creating original content for TV, film, advertising and other media. Students learn how to observe the world around them, drawing directly from life to gain inspiration for characters and stories. They discover how to think creatively and develop ideas through multiple stages, focusing on character development, narrative and performance. They also learn fundamental 2D and 3D animation skills to bring their stories to life. At UTS, students also benefit from outstanding industry connections. Across the degree, students have the opportunity to work with live projects, such as VIVID or collaborations with the Australia Piano Quartet. UTS also has strong relationships with leading industry players such as Flying Bark Productions and Animal Logic. The academic team understands that teamwork is at the heart of the animation industry. A studio-led approach creates a high-intensity environment where students learn how to work with their peers in a professional and collaborative atmosphere.', 70 , 3 ),

	(4, '09067', 'Bachelor of Engineering (Honours) Diploma in Professional Engineering Practice', 'This program is a comprehensive preparation for careers in the professional practice of engineering. Students learn to deal with complex systems and manage large-scale projects using the most appropriate emerging technologies. The course offers an authentic, professionally focused and practice-based education program with two sessions of internship (normally paid) in a real workplace setting. A number of the areas of study are available with explicit specialisations. For example, Civil Engineering is available with specialisations in Structures and Construction. Students can also focus on or broaden their studies by completing electives. By appropriate choice of electives, students can gain knowledge in a second engineering discipline, obtain a sub-major in a different field or study postgraduate-level subjects and apply for credit towards an engineering masters degree. The concept has been strongly endorsed in wide-ranging industry consultations. Interaction between work experience and academic curriculum is very strong, giving the program a depth that no other full-time academic course can match.', 83 , 5 ),
	(4, '10066', 'Bachelor of Engineering Science', 'This course is an engineering technologist-level program which is similar in nature to the Bachelor of Engineering (Honours) (C09066) but does not provide full professional engineering status. This course provides students with the skills required at an engineering technologist level – and hence the ability to work with professional engineers – without developing full professional engineering competencies.', 81 , 4 ),
	(4, '09119', 'Bachelor of Computing Science (Honours)', 'This course offers a sound education in all aspects of computing science and information technology. It is intended for students who aspire to become researchers or who want a career in a more scientific-oriented computing area. As such it provides a pathway to postgraduate research study. This course adopts a practice-based approach to computing science education and the course content is a mix of theory and practice, with a stronger focus on the mathematics appropriate for computing science and research projects. As well as gaining strong technical skills in computing science and IT, students gain skills in problem-solving, teamwork and communication. Students undertake research projects with UTS researchers. Employers look for graduates with strong computing science skills and, in this course, students are exposed to real research problems in computing science and IT. UTS: Information Technology continues to support part-time study and some subjects can be taken in the evening as well as during the day.', 78 , 4 ),
	(4, '10143', 'Bachelor of Information Technology', 'This is a cooperative education scholarship program in computer information systems, developed by UTS in cooperation with a group of leading organisations. It differs from other cooperative education courses in that, during the industry-based sessions, students follow a structured program designed jointly by UTS and the employer group, including formal coursework delivered by industry. There are a limited number of places available in this course according to the number of industry sponsors each year. If selected for this course, students receive a total scholarship of around $49,500 for the duration of the course. This intensive course includes two six-month industry-based sessions with different industry sponsors. Industry sponsors are heavily involved in the curriculum design to ensure graduates are not only highly qualified but also have the knowledge and skills relevant to the needs of industry. Students normally secure graduate employment before completion of the course. Sponsors also actively recruit graduates from the course but students are not obliged to take up employment with a sponsor.', 79 , 3 ),
	(4, '10395', 'Bachelor of Information Systems', 'The Bachelor of Information Systems (BIS) is an undergraduate coursework offering aimed at meeting emerging demands for a new generation of technology professionals ready to deal with the challenges of complex systems. Students study complex systems such as enterprises, their services for different stakeholders (customers/patients/citizens/other organisations and stakeholders), and their internal processes conducted by people (with knowledge, skills and social capital) using data, information and IT-enabled services. Bachelor of Information Systems (BIS) graduates are highly sought after to meet the job demands of an increasingly digital world of the future. BIS graduates are able to work in and create value from the financial, environmental and social nature of any type of organisation. With future-focussed specialisations including Systems Analytics, Smart Infrastructure and Sustainable Enterprises, BIS graduates are well positioned to serve local Australian and international job markets.', 79 , 3 ),
	
	(5, '10122', 'Bachelor of Nursing', 'The UTS Bachelor of Nursing course prepares students for the exciting and challenging role of the Registered Nurse. This course is comprised of a comprehensive range of theoretical and clinical nursing subjects that together provide the knowledge, skills and professional values graduates require to provide safe, effective and compassionate nursing care. Our graduates are well prepared for clinical practice and are highly sought after for employment in a wide range of healthcare settings across Australian and internationally. The School of Nursing & Midwifery at UTS is ranked number 1 in Australia and seventh in the world. (QS World University Rankings by Subject 2020). We shape the future of healthcare through clinically relevant and research-inspired teaching and learning. The Bachelor of Nursing course is taught by high profile award-winning educators and researchers as well as experienced practicing clinicians. We use a blend of e-learning and face-to-face approaches to engage, inspire and challenge students and our clinical simulation facilities and the diverse clinical placements experiences provided ensure that students develop high level clinical and critical thinking skills. A wide choice of elective third year subjects allows students to sample different nursing specialties including emergency nursing, theatre, paediatrics, community and primary healthcare, aged care and mental health.', 76 , 3 ),
	(5, '10225', 'Bachelor of Midwifery', 'This course incorporates midwifery theory, science and clinical practice in a range of health facilities. Graduates of the course are competent midwives who have the skills, knowledge and confidence to practise midwifery according to the international definition of the role and scope of practice of the midwife. This course was the first Bachelor of Midwifery to be introduced in New South Wales. It provides the opportunity to apply for registration as a midwife with the Nursing and Midwifery Board of Australia without having to become a registered nurse beforehand.', 71 , 3 ),
	(5, '10300', 'Bachelor of Sport and Exercise Science', 'The Bachelor of Sport and Exercise Science meets the demand for professionals able to provide physical activity services to all sectors of the community. The course provides students with a strong understanding of the processes and mechanisms underlying sport and exercise science, and with the knowledge and skills necessary to manage and plan sport and exercise activities in health, exercise science, sport, event and exercise therapy contexts. Students who complete the Exercise Therapy major (MAJ06234) (not available to international students) are guaranteed entry to the UTS Master of Physiotherapy (C04306) (subject to maintaining a credit average and a successful internal interview). The Master of Physiotherapy leads to eligibility for registration as a physiotherapist in Australia.', 72 , 3 ),
	(5, '10360', 'Bachelor of Health Science', 'The Bachelor of Health Science is a flexible and innovative degree that equips graduates with qualifications to help improve the health of individuals and populations. It’s a broad field of practice, based on the application of scientific principles in governmental and non-governmental health services and the wider industry. This transdisciplinary degree is characterised by a strong emphasis on the social model of health and combines health-specific content with a mix of professional and scientific subjects. In majors, students can gain an in-depth understanding of Indigenous health or health promotion. Alternatively, students can develop their knowledge of global and international health priorities to contribute to overseas health initiatives and aid organisations. Students who complete this course with the required pathway and grade point average also meet current entry criteria for the UTS Master of Physiotherapy.', 76, 3 ),

	(6, '10124', 'Bachelor of Laws', 'The Bachelor of Laws is one of Sydneys leading law degrees. It has been developed to help students build foundational knowledge in the practice of law, as well as the soft skills (problem solving, analytical thinking, spoken and written communication) required to succeed in a legal career. Students gain a fundamental understanding of the Australian legal system, as well as essential knowledge of common law principles. The course meets the academic requirements for admission to practise as a lawyer in NSW. Elective subjects enable students to tailor their degree to areas of personal interest – these include law electives, such an environmental law, human rights law, a major in legal futures and technology, or electives from other disciplines – and develop a complementary skill set that enhance their professional prospects.', 86 , 4 ),
	(6, '09083', 'Bachelor of Laws (Honours)', 'This course provides students with a coherent and advanced knowledge of the underlying principles and concepts in the discipline of law and equips them with advanced research skills. UTS Law graduates are increasingly in demand in the legal profession and in other employment sectors where legal knowledge and skills are valued. Todays law graduates are employed in a wide range of roles and responsibilities, including to advise and counsel parties, act as negotiators, manage project teams and resolve disputes. Students must successfully complete both of the research subjects: 76090 Research Methodology and 76040 Research Thesis. Strong research skills are valued highly in contemporary professional practice. This course provides full-time or part-time study for students wishing to obtain a professional legal qualification that satisfies the requirements for admission as a lawyer. Students have the opportunity to engage in deeper study of the law by studying 76090 Research Methodology and undertaking 76040 Research Thesis. This course can be a pathway to higher degree research programs.', 89 , 5 ),

	(7, '10115', 'Bachelor of Biomedical Science', 'The Bachelor of Biomedical Science provides a strong professional and industry focus. Students obtain a solid foundation in both biological and medical sciences, and practical experimentation through extensive theoretical knowledge and advanced laboratory skills. This course provides in-depth understanding of how the body works at the cellular level, what causes disease and the techniques of laboratory diagnosis of disease, including the expanding area of molecular-based diagnostic techniques. Students gain the underpinning knowledge and laboratory skills required to participate in research aimed at the prevention or treatment of disease. The opportunity is also there for students to undertake an internship as part of their course, either on campus in UTS research laboratories or externally, to gain first-hand work experience in the field of Biomedical Science.', 81 , 4 ),
	(7, '10184', 'Bachelor of Medical Science', 'The Bachelor of Medical Science is designed for careers in medical and health-related sciences. It aims to produce professional medical scientists with highly adaptable and practical scientific skills accompanied by a thorough grounding in theory. It specialises in the human bodys structure, function and disease processes at the cellular and whole organ level. Students gain a good understanding of the human bodys structure, function and disease processes at the cellular and whole organ level. The course provides the foundation knowledge and skills for students who wish to go on to postgraduate programs such as medicine, dentistry, pharmacy, public health and health administration. Pharmaceutical companies look to medical science graduates to work in areas such as drug registration and clinical trials.', 89 , 5 ),
	(7, '10242', 'Bachelor of Science', 'The Bachelor of Science gives students a solid foundation in scientific knowledge and practice while allowing them to specialise in an area of interest. Students may follow any of the nine different majors leading to the award of a degree naming the chosen major, e.g. Bachelor of Science in Nanotechnology, or Bachelor of Science in Medical Science, or any of the majors available. Majors are chosen at the end of first year when students have experienced a range of disciplines and are more equipped to choose their preferred path. Students may also choose not to follow a major, but to select a range of second- and third-year subjects to tailor their study according to their interests and graduate with a cross-disciplinary degree. The flexibility of this course allows students to either specialise in a specific professional area or to develop skills and knowledge in a range of scientific disciplines. All majors aim to produce professional scientists with a thorough grounding in theory and highly adaptable and practical scientific, experimental and computational skills relevant to the discipline chosen.', 76 , 3 ),
	(7, '10346', 'Bachelor of Biomedical Physics', 'The Bachelor of Biomedical Physics is a multi-disciplinary degree that combines both biomedical science with physics applications. Some of the most challenging and rewarding applications of physics are in the area of biomedical physics. There is a broad range of applications for biomedical physics in areas such as radiation oncology, medical imaging and radiation safety. Knowledge of biomedical physics can be applied to instrument development, from magnetic resonance imaging (MRI) to simple glucose monitors or therapeutic agents based on nanoparticles. This course provides students with skills and expertise that equip them to participate in the rapidly growing area at the interface between physics and biomedicine. Students gain advanced experimental, analytical and computational skills as well as an understanding of how the body works at a cellular and organ level. Students explore the biomedical applications of physics, ranging from the use of nanoparticles as diagnostic and therapeutic agents to medical imaging and diagnostic instrumentation.', 90 , 5 ),
	(7, '10384', 'Bachelor of Science in Analytics', 'The Bachelor of Science in Analytics focuses on the analytical skills and technical knowledge that underpin the sophisticated data analysis tools on which key aspects of business activity rely. These tools enable industry to capitalise on big data by gaining insights through expert interpretation of results of statistical and other quantitative analyses. In this course students study key areas of business activity and develop a broad range of mathematical, statistical, computational and data management skills, as well as experience in the use of the information technology required for modern data analysis. Business and other organisations require skills that provide competitive advantage in todays dynamic marketplace. Innovation in industry depends on the ability to quickly test ideas and strategies against evidence. This evidence is often embedded in a firms big data, and decision-making is driven by the application of predictive modelling and optimisation strategies to this data. Data science and analytics are keys to success in knowledge-based industries and in delivering high-value data products. This program equips students to practise as data science and analytics professionals, developing information technology skills, expertise in statistics and mathematics, and familiarity with key areas of business and policy development.', 77 , 3.5),
	(7, '10387', 'Bachelor of Forensic Science', 'The Bachelor of Forensic Science prepares students for professional and specialist work in the discipline of forensic science. Students build a solid foundation of skills and knowledge in the enabling sciences, complemented by an in-depth understanding of forensic science in the context of their chosen discipline. Development of critical thinking and problem-solving skills is a focus of the degree, with graduates in high demand from a diverse range of industries and organisations. This course provides students with a thorough understanding of how forensic science can solve and prevent crime. This is a hands-on course using world-class facilities that are modelled on operational laboratories. The aim is to produce professional forensic scientists with highly adaptable scientific skills accompanied by a thorough grounding in theory and practice. This is a well-regarded course with strong links to industries such as the federal and state police services, national and international forensic institutions, and government laboratories.', 81 , 3.5),
	
	(8, '10390', 'Bachelor of Technology and Innovation', 'This new degree is a direct response to industry demand for graduates equipped to work at the intersection of technology, creativity and innovation. Graduates of this course can engage in a broad range of technology-related careers. The course is also for students who have the desire to eventually become strategic influencers in technology-related roles. Taking a transdisciplinary approach, the Bachelor of Technology and Innovation engages students with open, complex and networked problems and in doing so, enables them to develop the technological knowledge, practices, perspectives and strategies drawn from a diverse range of discipline areas. Extending their industry engagement, all students have the opportunity to undertake a carefully selected internship in the second year of the program, creating a tangible connection between the university learning environment and their future career aspirations.', 70 , 3 ),
	(8, '20060', 'Diploma in Innovation', 'The Diploma in Innovation is a new undergraduate degree with half the credit points of double bachelors. It was created as a direct response to industry demand for graduates to work at the intersection of creativity, innovation and entrepreneurship. The Diploma is an exciting opportunity to stand out among graduates from your discipline by learning how to collaborate across disciplines to address complex problems. It is available to students undertaking almost any UTS undergraduate degree. This course can be taken alongside your core degree, allowing you to achieve two qualifications in the same time that it will take you to obtain one. Accelerated pathways through the diploma are available, too. The first of its kind in Australia, this course allows students to gain exposure to real-world problems and collaborate with a diverse group of students, academics and industry partners, consolidating the course aims in their chosen area of study while developing the creativity, innovation and entrepreneurship skills sought by government, employers and society alike.', 65 , 2 ),
	(8, '09122', 'Bachelor of Creative Intelligence and Innovation (Honours)', 'The Bachelor of Creative Intelligence and Innovation (Honours) offers training in research to prepare students for further postgraduate research study in the transdisciplinary innovation area. This course provides students opportunities to be exposed to professional practice through engagement with industry and community mentors as well as to work on research that addresses real-world challenges. Honours also provides a pathway for students interested in pursuing postgraduate studies at masters and PhD level, and enhances graduates career and study options. This degree empowers its graduates to recognise and respond to real-world challenges which take a global, cultural and social justice perspective and potentially shape future workforce opportunities through contribution to knowledge. Students in this course will engage with cutting-edge creative practices through UTS’s academic mentors to explore concepts, methods, techniques and technologies across disciplinary boundaries with the intention of provoking insights and generating knowledge in new transdisciplinary contexts.', 78 , 4 );
	
INSERT INTO user_tag (UT_US_User, UT_TG_Tag)
	VALUES
	(1,7),
	(1,9),
	(1,12),
	(1,14),
	(1,18),
	(1,20),
	(1,23);

INSERT INTO course_tag (CT_CO_Course, CT_TG_Tag)
	VALUES
	(1,3),
	(1,8),
	(1,12),
	(2,4),
	(2,5),
	(2,7),
	(2,15),
	(2,24),
	(4,4),
	(4,5),
	(4,7),
	(4,15),
	(4,24),
	(5,6),
	(5,7),
	(5,12),
	(5,13),
	(5,16),
	(5,17),
	(5,18),
	(5,19),
	(5,23),
	(5,29),
	(5,30),
	(6,6),
	(6,7),
	(6,12),
	(6,13),
	(6,16),
	(6,17),
	(6,18),
	(6,19),
	(6,23),
	(6,29),
	(6,30),
	(8,6),
	(8,7),
	(8,12),
	(8,13),
	(8,16),
	(8,17),
	(8,18),
	(8,19),
	(8,23),
	(8,29),
	(8,30),
	(9,1),
	(9,2),
	(9,3),
	(9,10),
	(9,11),
	(9,16),
	(9,18),
	(9,20),
	(10,8),
	(11,2),
	(11,4),
	(11,10),
	(11,11),
	(11,14),
	(13,3),
	(13,8),
	(13,27),
	(15,7),
	(15,9),
	(15,12),
	(15,14),
	(15,18),
	(15,20),
	(15,23),
	(16,7),
	(16,9),
	(16,12),
	(16,14),
	(16,18),
	(16,20),
	(16,23),
	(17,7),
	(17,9),
	(17,12),
	(17,14),
	(17,18),
	(17,20),
	(17,23),
	(21,4),
	(21,12),
	(21,24),
	(21,25),
	(22,4),
	(22,12),
	(22,24),
	(22,25),
	(24,4),
	(24,14),
	(24,17),
	(24,24),
	(24,28),
	(25,4),
	(25,14),
	(25,17),
	(25,24),
	(25,28),
	(32,1),
	(32,2),
	(33,3),
	(33,4),
	(33,8),
	(33,15);
