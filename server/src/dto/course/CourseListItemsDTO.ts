import { CourseListItemDTO } from "./CourseListItemDTO";

export class CourseListItemsDTO {
	constructor(faculty: string, facultyDescription: string, courses: CourseListItemDTO[]) {
		this.faculty = faculty;
		this.facultyDescription = facultyDescription;
		this.courses = courses;
	}

	readonly faculty: string;
	readonly facultyDescription: string;
	readonly courses: CourseListItemDTO[];
  }
  