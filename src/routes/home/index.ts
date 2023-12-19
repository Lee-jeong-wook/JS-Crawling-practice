"use strict"
import { Router } from "express";

const ctrl = require('./home.ctrl');

const router = Router();

router.post('/music', ctrl.post.music);

module.exports= router;