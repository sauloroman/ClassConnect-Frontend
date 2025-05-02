import { CreateClassroomDto, CreateClassroomDtoResponse, GetClassroomsOfInstructorReponse } from '../dto/classrooms.dto';

export abstract class ClassroomRepository {
  abstract createClassroom( createClassroomDto: CreateClassroomDto ): Promise<CreateClassroomDtoResponse>
  abstract getClassroomByInstructorId( 
    instructorId: string ,
    page: number,
    limit: number,
  ): Promise<GetClassroomsOfInstructorReponse>
}