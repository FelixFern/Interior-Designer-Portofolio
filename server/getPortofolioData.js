

function getPortofolioData(dir) {
    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results.push(file);
            results = results.concat(getPortofolioData(file));
        } else results.push(file);

    });

    return results;
}

console.log(getPortofolioData("C:/Users/Aldwin Hardi S/Downloads/PPAB"));