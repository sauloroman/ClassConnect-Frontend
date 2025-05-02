import { ClassroomEntity } from "../entities";
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