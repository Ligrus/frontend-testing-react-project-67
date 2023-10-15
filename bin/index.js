#!/usr/bin/env node
import { getCommandLineArgs } from "../app/src/modules/command-line-handler.js";
import pageLoader from "../app/src/index.js";

const { fileDest, pageUrl } = getCommandLineArgs()

pageLoader(pageUrl, fileDest)
