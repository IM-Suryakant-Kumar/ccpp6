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
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
// constant
const PORT = process.env.PORT;
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: ".", credentials: true }));
app.use((0, morgan_1.default)("tiny"));
// routes
app.get("/api/hello", (req, res) => {
    res.json({ message: "hello" });
});
// error handler
app.use(middlewares_1.notFoundMiddleware);
app.use(middlewares_1.errorHandlerMiddleware);
// app start
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.listen(PORT, () => console.log(`App is running at http://localhost:${PORT}`));
    }
    catch (error) {
        console.error(error);
    }
}))();
