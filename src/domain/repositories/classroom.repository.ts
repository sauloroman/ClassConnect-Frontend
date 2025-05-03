import { CreateClassroomDto, CreateClassroomDtoResponse, GetClassroomsCategoriesResponse, GetClassroomsOfInstructorReponse } from '../dto/classrooms.dto';

export abstract class ClassroomRepository {
  abstract createClassroom( createClassroomDto: CreateClassroomDto ): Promise<CreateClassroomDtoResponse>
  abstract getClassroomByInstructorId( 
    instructorId: string ,
    page: number,
    limit: number,
    category: string,
  ): Promise<GetClassroomsOfInstructorReponse>
  abstract getClassroomsCategories(): Promise<GetClassroomsCategoriesResponse>
}