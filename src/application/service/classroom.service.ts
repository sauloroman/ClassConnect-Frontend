import { ClassroomRepository } from "../../domain/repositories/classroom.repository";
import { CreateClassroomDto, CreateClassroomDtoResponse } from '../../domain/dto/classrooms.dto';

interface ClassroomServiceOptions {
  classroomRepo: ClassroomRepository
}

export class ClassroomService {

  private readonly classroomRepo: ClassroomRepository

  constructor({ classroomRepo }: ClassroomServiceOptions){
    this.classroomRepo = classroomRepo
  }

  async createClassroom( createClassroomDto: CreateClassroomDto ): Promise<CreateClassroomDtoResponse> {
    try {
      const data = await this.classroomRepo.createClassroom( createClassroomDto )
      return data
    } catch (error: any) {
      const errorMessage = error.response?.data.error ?? 'No fue posible crear el aula'
      throw errorMessage
    }
  }

  async getClassrooomsOfInstructorId( instructorId: string, page: number, limit: number ) {
    try {
      const data = await this.classroomRepo.getClassroomByInstructorId( instructorId, page, limit )
      return data
    } catch (error: any) {
      const errorMessage = error.respones?.data.error ?? 'No se pudieron obtener tus aulas'
      return errorMessage
    }
  }

}