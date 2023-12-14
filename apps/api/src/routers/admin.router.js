import { Router } from 'express';
import {
    registerAdmin
} from '../controllers/admin.controller'

const adminRouter = Router ();

adminRouter.post('/register-admin', async (req, res) => {
    console.log('ini req body', req.body);
    await registerAdmin(req);
    res.send('admin registered')
});

export {adminRouter};

