import {
    getUsersService,
    getUserByIdService,
    updateUserService,
    createUserService,
    deleteUserService,
    searchUsersService,
} from './userService.js';

export async function getUsersController(req, res) {
    const users = await getUsersService();
    res.send(users);
}

export async function getUserByIdController(req, res) {
    try {

        const id = req.params.id;
        console.log(id,'******')
        const user = await getUserByIdService(id);
        console.log('****', user);
        console.log('herre');
        res.send(user);
    } catch (error) {
                const id = req.params.id;
        console.log(id)

        console.log(error);
        res.send(error);
    }
}

export async function updateUserController(req, res) {
    const id = req.params.id;
    const user = req.body;
    const updatedUser = await updateUserService(id, user);
    res.send(updatedUser);
}

export async function createUserController(req, res) {
    const user = req.body;
    const newUser = await createUserService(user);
    res.send(newUser);
}

export async function deleteUserController(req, res) {
    const id = req.params.id;
    const deletedUser = await deleteUserService(id);
    res.send(deletedUser);
}

export async function searchUsersController(req, res) {
    try {
        console.log('searchUsersController()')
        const name = req.body.name;
        const id = req.body.id;
        console.log(name, 'name', id, 'id')
        const users = await searchUsersService(name, id);
        res.send(users);
    } catch (error) {
        res.send(error);
    }
}