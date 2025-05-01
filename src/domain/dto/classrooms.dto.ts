import { ClassroomEntity } from "../entities";

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