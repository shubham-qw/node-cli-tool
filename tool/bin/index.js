#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');
const path = require('path');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start');
const logger = require('../src/logger')('bin');
try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    })

    logger.debug('Received args', args);

    if (args['--start']) {
        // const pkg = require(path.join(process.cwd(), 'package.json'));

        // if (pkg.tool) {
        //     console.log('Found Configuration', pkg.tool);
        // }
        // else {
        //     console.log(chalk.yellow('Could not find configuration, using default'));
        // }

        // console.log(chalk.bgCyanBright('starting the app'));

        const config = getConfig();
        start(config);
    }
}
catch (err) {
    logger.warning(err.message);
    console.log();
    usage();
}

function usage() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
}
