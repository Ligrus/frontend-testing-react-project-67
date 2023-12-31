import fs from 'fs/promises';
import { resolve } from 'path'

export const storeFile = async (fileDest, data, resourceUrl) => {
    const fileName = getOutputFileName(resourceUrl)
    try {
        const filePath = getFilePath(resolveDestPath(fileDest), fileName)
        await fs.writeFile(filePath, data);
        console.log(filePath)
        return { filePath }
    } catch (error) {
        console.error(`There is error while writing the file: ${error.message}`)
    }
}

export const getOutputFileName = (resourceUrl) => {
    return resourceUrl.replace(/^https?:\/\//, "").replace(/[./]/g, '-') + '.html'
}

const getFilePath = (fileDest, fileName) => {
    return `${fileDest}/${fileName}`
}

const resolveDestPath = (fileDest) => {
    return resolve(fileDest)
}