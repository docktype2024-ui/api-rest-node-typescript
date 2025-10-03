import { Router } from 'express';

const router = Router();

router.get('/' , (req,res ) => {
    return res.send('ola ');
});

router.get('/teste' , (req,res ) => {
    return res.send('ola dev');
});

export {router};