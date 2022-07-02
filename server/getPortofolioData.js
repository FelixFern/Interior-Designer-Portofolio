
var path = require("path");

function getPortofolioData(dir) {
    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results.push(path.basename(file));
            results.push(getPortofolioData(file));
        } else results.push(file);

    });

    return results;
}

console.log(getPortofolioData((path.resolve(__dirname,".."))+"/assets/Portofolio"));