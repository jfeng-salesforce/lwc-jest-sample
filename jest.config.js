const { jestConfig } = require('@salesforce/lwc-jest/config');
const path = require('path');
const { getModulePaths } = require('@salesforce/lwc-jest/src/utils/project.js');

function getAllLwcCoveragePaths() {
    let paths = [];
    const modulePaths = getModulePaths();
    
    modulePaths.forEach((p) => {
        var pathLoc = path.join(p, '**/*.js');
        pathLoc = "**/" + pathLoc;
        paths.push(pathLoc);
         console.log('Adding coverage location: ' + pathLoc);
    });
    paths.push("**/force-app/**/*.js");
    paths.push("**/force-app/**/lwc/**/*.js");
    paths.push("../force-app/**/lwc/**/*.js");
    paths.push("**/*.js");
    return paths;
}

module.exports = {
    ...jestConfig,
    // add any custom configurations here
    collectCoverageFrom: getAllLwcCoveragePaths()
};
