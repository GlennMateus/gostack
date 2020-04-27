import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

/**
 * routes.use('/path') ::
 * redirects the call to the route you define after the path
 * and so on you don't need to specify tha "path" in the next
 * file.
 * In other words :: use('path') already defines the root path to
 * use when calling this resource.
 */
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
