import { CreateClassroomDto, CreateClassroomDtoResponse } from '../dto/classrooms.dto';

export abstract class ClassroomRepository {
  abstract createClassroom( createClassroomDto: CreateClassroomDto ): Promise<CreateClassroomDtoResponse>
}