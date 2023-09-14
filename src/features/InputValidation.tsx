import { z } from 'zod';

export const loginValidator = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .refine((data) => data.password.length >= 6, {
    message: 'Password must be at least 6 characters long.',
    path: ['password'],
  });
