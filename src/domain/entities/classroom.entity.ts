import { ClassroomCategoryEntity } from "./classroom-category.entity";

interface InstructorClassroom {
  id: string,
  firstName: string,
  lastName: string,
}

export interface ClassroomEntity {
  id: string;
  title: string;
  group: string;
  career: string;
  code: string;
  createdAt: Date;
  instructor: InstructorClassroom;
  updatedAt: Date | null;
  description: string | null;
  img: string | null;
  color: string | null;
  qrCode: string | null;
  categories: ClassroomCategoryEntity[]
}