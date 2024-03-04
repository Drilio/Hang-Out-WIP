"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../controllers/user"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/signup', user_1.default.signup);
// router.post('/local', userCtrl.login);
//
// router.get('/me', userCtrl.me)
//
// router.post('/change-password', userCtrl.changePassword)
//
// router.post('/isconnect', userCtrl.isconnect)
exports.default = router;
