module.exports = {

    GPD: function (){
        // Importing fs and path
        var path = require('path')
        var fs = require('fs');
        
        // Declaring and initializing variables, constants
        const dir = path.resolve(__dirname,"..")+"/public/project/portfolios";
        var yearProjects, yearPath, project, projectPath, description;
        var returnVal = {
            Years: [],
            result : []
        }


        // Get years
        fs.readdirSync(dir).forEach(function(year) {

            returnVal.Years.push(year)
            yearProjects = {
                Year: year,
                Projects: []
            }
            yearPath = dir+'/'+year;
            
            
            // Get all projects from year
            fs.readdirSync(yearPath).forEach(function(projectName){
                
                // Read Project Desc
                projectPath = yearPath+'/'+projectName;
                description = fs.readFileSync(projectPath+'/description.txt', 'utf-8');
                
                project = {
                    Name: projectName,
                    Desc: description,
                    Pictures: []
                }
                
                // Get all pictures from the project
                fs.readdirSync(projectPath).forEach(function(picture){
                    if(picture != 'description.txt')
                    project.Pictures.push(picture);
                })
                
                //Push every project to the yearProject
                yearProjects.Projects.push(project)
            });
            
            // Push every project of the year
            returnVal.result.push(yearProjects);
        });
        
        // Reverse the returnVal
        returnVal.result.reverse();
        returnVal.Years = returnVal.Years.reverse()
        
        return returnVal;
    },

    getCarousel: function (){
        // Importing fs and path
        var path = require('path')
        var fs = require('fs');

        const crawlingPath = path.resolve(__dirname,"..")+"/public/project/carousel";
        var returnVal = {
            result: []
        }

        
        // Get ALl List of Carousel Pictures
        fs.readdirSync(crawlingPath).forEach(function(picture){
            returnVal.result.push(crawlingPath+'/'+picture)
        })

        return returnVal;
    }
};