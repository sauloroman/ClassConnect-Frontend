import { CreateClassroomDto, CreateClassroomDtoResponse, GetClassroomsCategoriesResponse, GetClassroomsOfInstructorReponse } from "../../domain/dto/classrooms.dto";
import { ClassroomRepository } from "../../domain/repositories/classroom.repository";
import { classconnectApiPrivate } from "../api/classconnect.api";

export class ClassConnectAPIClassroomRepository implements ClassroomRepository {
   
  async createClassroom(createClassroomDto: CreateClassroomDto): Promise<CreateClassroomDtoResponse> {
    const { data } = await classconnectApiPrivate.post<CreateClassroomDtoResponse>('/classrooms', createClassroomDto )
    return data
  }

  async getClassroomByInstructorId(
    instructorId: string,
    page: number,
    limit: number
  ): Promise<GetClassroomsOfInstructorReponse> {
    const { data } = await classconnectApiPrivate.get<GetClassroomsOfInstructorReponse>(
      `/classrooms/instructor/${instructorId}?page=${page}&limit=${limit}`
    )
    return data
  }

  async getClassroomsCategories(): Promise<GetClassroomsCategoriesResponse> {
    const { data } = await classconnectApiPrivate.get<GetClassroomsCategoriesResponse>('/classrooms/categories')
    return data
  }

}