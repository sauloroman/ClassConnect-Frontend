import { ClassroomCategoryEntity } from "./classroom-category.entity";

export interface ClassroomEntity {
  id: string;
  title: string;
  group: string;
  career: string;
  code: string;
  createdAt: Date;
  instructorId: string;
  updatedAt: Date | null;
  description: string | null;
  img: string | null;
  color: string | null;
  qrCode: string | null;
  categories: ClassroomCategoryEntity[]
}