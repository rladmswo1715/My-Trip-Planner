import { z } from 'zod';

const RegionSchema = z.object({
  parent: z.string().min(1, '부모 지역을 입력해야 합니다.'),
  child: z.string().min(1, '자식 지역을 입력해야 합니다.'),
});

const PlanDetailSchema = z.object({
  order: z.number().int().min(1, '순서는 1 이상의 숫자여야 합니다.'),
  place: z.string().min(1, '장소명을 입력해야 합니다.'),
  streetAddress: z.string().min(1, '주소를 입력해야 합니다.'),
  latitude: z.number().min(-90).max(90, '유효한 위도를 입력하세요.'),
  longitude: z.number().min(-180).max(180, '유효한 경도를 입력하세요.'),
  planCategoryNameId: z
    .number()
    .int()
    .min(1, '카테고리 ID는 1 이상의 숫자여야 합니다.'),
});

const PlanDaySchema = z.object({
  day: z.number().int().min(1, '날짜는 1 이상의 숫자여야 합니다.'),
  cost: z.number().min(0, '비용은 0원 이상이어야 합니다.'),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, '날짜 형식은 YYYY-MM-DD이어야 합니다.'),
  detail: z
    .array(PlanDetailSchema)
    .min(1, '하루 일정에는 최소 1개의 장소가 있어야 합니다.'),
});

export const PlanSchema = z.object({
  title: z.string().min(1, '제목을 입력해야 합니다.'),
  transportation: z.string().min(1, '교통 수단을 입력해야 합니다.'),
  subtitle: z.string().min(1, '부제목을 입력해야 합니다.'),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, '날짜 형식은 YYYY-MM-DD이어야 합니다.'),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, '날짜 형식은 YYYY-MM-DD이어야 합니다.'),
  category: z
    .array(RegionSchema)
    .min(1, '적어도 하나의 지역을 선택해야 합니다.'),
  people: z.number().int().min(1, '최소 1명 이상의 여행 인원이 필요합니다.'),
  days: z
    .array(PlanDaySchema)
    .min(1, '여행 일정은 최소 1일 이상이어야 합니다.'),
});

export type PlanDataType = z.infer<typeof PlanSchema>;
