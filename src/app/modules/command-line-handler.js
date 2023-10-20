import { program } from "commander";

export const getCommandLineArgs = () => {
    program
        .allowUnknownOption()
        .option('-o, --output <string>')
        .option('-u, --url <string>')
        .parse(process.argv);

    const passedOptions = program.opts()

    return {
        fileDest: passedOptions.output,
        pageUrl: passedOptions.url
    }
}