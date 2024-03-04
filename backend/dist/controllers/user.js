"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SQLConnection_1 = __importDefault(require("../SQLConnection"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { name, mail, password, firstName, isManager, nickName } = req.body;
    console.log('name', name);
    try {
        const passwordHash = yield (0, bcrypt_1.hash)(password, 10);
        const userData = {
            name: name,
            mail: mail,
            password: passwordHash,
            firstName: firstName,
            nickName: nickName,
            isManager: isManager,
        };
        const newUser = yield SQLConnection_1.default.execute(`INSERT INTO User(user_name, user_firstName, user_nickName, user_mail, user_isManager) VALUES(?,?,?,?,?)`, [name, firstName, nickName, mail, isManager]);
        console.log('newUser', newUser);
        const jwtOptions = {
            expiresIn: '24h',
        };
        const authToken = jsonwebtoken_1.default.sign(userData, process.env.AUTH_TOKEN_KEY, jwtOptions);
        return res.status(200).json({
            success: true,
            user: newUser,
            authToken: authToken,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: ` Internal Error` });
    }
});
// const login = async (req: Request, res: Response) =>{
//     console.log(req.body);
//     try{
//         const user = await User.findOne({mail: req.body.mail})
//         console.log('user :', user);
//         if(user === null){
//             return res.status(401).json({ message: 'Paire identifiant / mot de passe incorecte' });
//         }else{
//             console.log('body data', req.body.password)
//             const passwordCorrect = await compare(req.body.password, user.password);
//             console.log("passwordCorrect",passwordCorrect)
//             if(passwordCorrect){
//                 const jwtOptions = {
//                     expiresIn: '24h',
//                 };
//                 console.log('user after find user', user);
//                 const authToken = jwt.sign(user.toObject(), process.env.AUTH_TOKEN_KEY!, jwtOptions);
//                 return res.status(200).json({
//                     success: true,
//                     user: {
//                         user_id: user.id,
//                         email: user.mail,
//                         name: user.name,
//                         auth_token: authToken,
//                     },
//                 });
//             }else{
//                 console.log('test')
//                 return res.status(400).json({error: 'Invalid Credentials'});
//             }
//         }
//         return res.status(400).json({error: 'Invalid Credentials'});
//     }catch (error){
//         console.error(error);
//         return res.status(500).json({ error: `Server Error` });
//     }
// }
//
// const me = async (req:Request,res:Response,next:NextFunction) => {
//     console.log(req.body)
//     try{
//         const authorization = req.headers.authorization!.split(' ')[1];
//         const decoded = jwt.verify(authorization, process.env.AUTH_TOKEN_KEY!) as IUser
//         console.log(decoded)
//         const userMail = decoded.mail
//         const user = await User.findOne({mail: userMail});
//         if(user == null){
//             res.status(401).json({ message: 'Incorrect Token' });
//         }else{
//             return res.status(200).json({
//                 success: true,
//                 user: {
//                     user_id: user.id,
//                     email: user.mail,
//                     name: user.name,
//                 },
//             });
//         }
//
//     }catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: `Server Error` });
//     }
// }
//
// const changePassword = async (req:Request,res:Response,next:NextFunction) => {
//     try{
//         const authorization = req.headers.authorization!.split(' ')[1];
//         const decoded = jwt.decode(authorization) as IUser
//         const userMail = decoded.mail
//
//         const filter = {mail: userMail}
//         const connectedUser = await User.findOne(filter);
//         if(connectedUser){
//             console.log(req.body, connectedUser.password)
//             const match = await compare(req.body.currentPassword ,connectedUser.password)
//             console.log(connectedUser);
//             console.log(match);
//             if(req.body.password === req.body.passwordConfirmation && match){
//                 const user = await User.findOneAndUpdate(filter, {password: req.body.password},);
//                 res.status(200).json({message:'votre mdp à bien changé !'})
//             }else{
//                 res.status(401).json({ message: 'Invalid informations' });
//             }
//         }else{
//             res.status(401).json({ message: 'User does not exist' });
//         }
//
//     }catch(error){
//         console.error(error);
//         return res.status(500).json({ error: `Server Error` });
//     }
// }
//
// const isconnect = async (req:Request,res:Response,next:NextFunction) => {
//     try{
//         console.log('isconnect test')
//         const authorization = req.headers.authorization!.split(' ')[1];
//         const decoded = jwt.decode(authorization) as IUser
//         const userMail = decoded.mail
//         const filter = {mail: userMail}
//         const connectedUser = await User.findOne(filter);
//         if(connectedUser === null){
//             res.status(401).json({ message: 'l\'utilisateur n\'existe pas' });
//         }else{
//             res.status(200).json({ message: 'Token valide' });
//         }
//     }catch (error) {
//         res.status(200).json({ message: 'Token valide' });
//     }
// }
const controller = {
    signup,
    // login,
    // me,
    // changePassword,
    // isconnect
};
exports.default = controller;
