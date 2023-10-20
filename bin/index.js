#!/usr/bin/env node
import { getCommandLineArgs } from "../src/app/modules/command-line-handler.js";
import pageLoader from "../src/app/index.js";

const { fileDest, pageUrl } = getCommandLineArgs()

pageLoader(pageUrl, fileDest)
