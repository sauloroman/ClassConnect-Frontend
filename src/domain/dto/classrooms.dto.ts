import { ClassroomEntity } from "../entities";
import { ClassroomCategoryEntity } from "../entities/classroom-category.entity";
import { IPagination } from "../interfaces";

export interface CreateClassroomDto {
  title: string;
  group: string;
  categories: string[];
}

export interface CreateClassroomDtoResponse {
  ok: boolean;
  msg: string;
  data: ClassroomEntity;
}

export interface GetClassroomsOfInstructorReponse {
  ok: boolean;
  meta: IPagination;
  items: ClassroomEntity[] | []
}

export interface GetClassroomsCategoriesResponse {
  ok: boolean;
  categories: ClassroomCategoryEntity[]
} 