"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Notification_1 = require("./entities/Notification");
const Issue_1 = require("./entities/Issue");
const Counter_1 = require("./entities/Counter");
const CUser_1 = require("./entities/CUser");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "queuedb",
    entities: [User_1.User, Notification_1.Notification, Issue_1.Issue, Counter_1.Counter, CUser_1.Cuser],
    synchronize: true,
    logging: false,
});
//middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//initialize
exports.AppDataSource.initialize()
    .then(() => {
    console.log('db connected');
})
    .catch((error) => console.log(error));
server.listen(8000, () => {
    console.log('app runing on server 8000');
});
//# sourceMappingURL=index.js.map