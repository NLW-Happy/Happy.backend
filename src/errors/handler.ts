import { ErrorRequestHandler } from 'express';
import { ValidationError, Request, Response, NextFunction } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (
  error: Error, 
  request: Request, 
  response: Response, 
  next: NextFunction
) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'validation fails', errors });
  }
  console.error(error);
  return response.status(500).json({ message: 'Iternal server error!' });
};

export default errorHandler;
