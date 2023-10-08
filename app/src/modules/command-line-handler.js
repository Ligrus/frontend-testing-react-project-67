import { program } from "commander";

export const getCommandLineArgs = () => {
    program
        .option('-o, --output <string>')
        .option('-u, --url <string>')

    program.parse(process.argv);

    const passedOptions = program.opts()

    return {
        fileDest: passedOptions.output,
        pageUrl: passedOptions.url
    }
}