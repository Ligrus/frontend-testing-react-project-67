import { fetchResource } from "./modules/resources-upload.js";
import { storeFile } from "./modules/files-store.js";

const pageLoader = async (pageUrl, fileDest) => {
    const fileData = await fetchResource(pageUrl)
    if (fileDest) {
        return storeFile(fileDest, fileData, pageUrl)
    } else {
        const defaultDest = process.cwd()
        return storeFile(defaultDest, fileData, pageUrl)
    }
}

export default pageLoader


