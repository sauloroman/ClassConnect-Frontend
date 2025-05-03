import { ClassroomEntity } from "../entities";
import { ClassroomCategoryEntity } from "../entities/classroom-category.entity";
import { IPagination } from "../interfaces";

export interface CreateClassroomDto {
  title: string;
  career: string;
  group: string;
  categories: string[];
}

export interface GetClassroomsOfInstructorReponse {
  ok: boolean;
  meta: IPagination;
  items: ClassroomEntity[] | []
}

export interface CreateClassroomDtoResponse {
  ok: boolean;
  msg: string;
  data: GetClassroomsOfInstructorReponse;
}


export interface GetClassroomsCategoriesResponse {
  ok: boolean;
  categories: ClassroomCategoryEntity[]
} 