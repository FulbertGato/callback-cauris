import { Request, Response, NextFunction } from 'express';

interface ErrorHandler extends Error {
    code?: number;
}

const errorHandler = (err: ErrorHandler, req: Request, res: Response, next: NextFunction): Response => {
    console.error(err.stack);
    const code = err.code || 500;
    return res.status(code).json({
        code: code,
        message: err.message || 'Internal server error',
    });
};

const notFoundHandler = (req: Request, res: Response, next: NextFunction): Response => {
    return res.status(404).json({
        code: 404,
        message: 'Not found',
    });
};

export { errorHandler, notFoundHandler };
