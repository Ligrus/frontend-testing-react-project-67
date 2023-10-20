import { fileURLToPath } from 'url';
import path from 'path';
import os from 'os';
import fs from 'fs/promises';
import nock from 'nock';
import _ from 'lodash'
import pageLoader from '../app';
import { getOutputFileName } from '../app/modules/files-store';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixtureFile = (fileName) => {
    return `${__dirname}/../__fixtures__/${fileName}`
}

let fixtureData;

const testResource = 'https://ru.hexlet.io';
const testResourceMask = /ru\.hexlet\.io/
const testResourceRoute = '/courses'
const testResourceFullPath = `${testResource}${testResourceRoute}`

const storeDestFolder = os.tmpdir();
const fileName = getOutputFileName(testResourceFullPath);
const resultPath = path.join(storeDestFolder, fileName);

beforeAll(async () => {
    fixtureData = await fs.readFile(getFixtureFile(fileName), 'utf-8');
});

beforeEach(() => {
    nock(testResourceMask)
        .get(testResourceRoute)
        .reply(200, fixtureData);
})

test('downloaded file stored successfully', async () => {
    await pageLoader(testResourceFullPath, storeDestFolder);
    const storedData = await fs.readFile(resultPath, 'utf-8');
    expect(fixtureData).toBe(storedData);
});


test('return correct file name', async () => {
    const { filePath } = await pageLoader(testResourceFullPath, storeDestFolder);
    expect(filePath).toBe(resultPath);
})

afterAll(async () => {
    nock.cleanAll()
    await fs.unlink(resultPath).catch(_.noop);
});