import express from 'express';
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from '../controllers/test.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const testRoute = express.Router();

testRoute.post('/should-be-logged-in', verifyToken, shouldBeLoggedIn);

testRoute.post('/should-be-admin', shouldBeAdmin);

export default testRoute;
