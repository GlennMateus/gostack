import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

// DTO = Data Transfer Object
// SoC = Separation of Concerns

usersRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute({ name, email, password });

        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default usersRouter;
