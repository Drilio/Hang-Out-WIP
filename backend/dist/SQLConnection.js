"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const pool = (0, promise_1.createPool)({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'test',
});
exports.default = pool;
