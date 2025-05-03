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
      const errorMessage = error.response?.data.error ?? 'No fue posible crear la clase'
      throw errorMessage
    }
  }

  async getClassrooomsOfInstructorId( instructorId: string, page: number, limit: number, category: string ) {
    try {
      const categoryFilter = category === 'todos' ? '' : category
      const data = await this.classroomRepo.getClassroomByInstructorId( instructorId, page, limit, categoryFilter )
      return data
    } catch (error: any) {
      const errorMessage = error.respones?.data.error ?? 'No se pudieron obtener tus clases'
      return errorMessage
    }
  }

  async getClassroomsCategories() {
    try {
      const data = await this.classroomRepo.getClassroomsCategories()
      return data
    } catch (error: any) {
      const errorMessage = error.respones?.data.error ?? 'No se pudieron las categorias de las clases'
      return errorMessage
    }
  }

}