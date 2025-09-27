import { z } from 'zod';
export const AccountEmailFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  email: z.string(),
  isPrimary: z.boolean(),
  account: z.unknown().optional(),
  accountId: z.string().optional(),
  verification: z.unknown().optional(),
  verificationId: z.string().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});