import { ZodError } from 'zod';

export default function formatZodError(error: ZodError): string {
  const formattedErrors = error.format();

  const errors = Object.values(formattedErrors).map((el) => el);
  const errorString = errors
    .filter((item) => Object.prototype.hasOwnProperty.call(item, '_errors'))
    .map((item) => item._errors.join(', '))
    .join('; ');

  return errorString;
}
