import { CreateClassroomDto, CreateClassroomDtoResponse } from "../../domain/dto/classrooms.dto";
import { ClassroomRepository } from "../../domain/repositories/classroom.repository";
import { classconnectApiPrivate } from "../api/classconnect.api";

export class ClassConnectAPIClassroomRepository implements ClassroomRepository {
   
  async createClassroom(createClassroomDto: CreateClassroomDto): Promise<CreateClassroomDtoResponse> {
    const { data } = await classconnectApiPrivate.post<CreateClassroomDtoResponse>('/classrooms', createClassroomDto )
    return data
  }

}