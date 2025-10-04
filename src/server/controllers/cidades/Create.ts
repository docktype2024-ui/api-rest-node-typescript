import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middlewares';

interface ICidade {
    nome: string
    estado: string
};



interface IFiltrer{
    filtrer?: string;
}

export const createValidation = validation({
    body: yup.object().shape({
        nome:yup.string().required().min(3),
        estado:yup.string().required().min(3),
    }),

    query: yup.object().shape({
        filtrer:yup.string().required().min(3),
    })   
});








export const create = async (req:Request <{} , {}, ICidade>, res:Response) => {
   console.log(req.body);
   
    return res.send('Create');
};