export interface ClassroomEntity {
  id: string;
  title: string;
  group: string;
  code: string;
  createdAt: Date;
  instructorId: string;
  updatedAt: Date | null;
  description: string | null;
  img: string | null;
  color: string | null;
  qrCode: string | null;
}