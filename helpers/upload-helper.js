const path = require('path');
const fs = require('fs')

module.exports = {

    uploadDir: path.join(__dirname, '../'),
    eCommerceUploadDir: path.join(__dirname,'../'),
    /**
     * @param {'res.files.file'} Upload
     * This takes in the uploaded files as arguments
     *  
     * @param {String} subDir 
     * This is the directory where you want your files to be upload.
     * Avoid nested directory creation, instead, lunch the directory creation level by level
     * An example bellow were we want to create the directory structure bellow
     * example: foo/foo1/foo2
     * create first foo
     * then foo/foo1 
     */
    multiImageUplaod: function(Upload, subDir){
        if (!module.exports.isEmpty(Upload)) {
            if(Array.isArray(Upload)){
                let fileNamePathList = []

                // chek if mulltiple of a single files where uploaded
                let imageList = Upload;

                imageList.forEach(element => {
                    var fileName = Date.now() + '-' + element.name;
                    let dirUploads = `./public/${subDir}/`;
                    
                    if (fs.existsSync(path.join(__dirname,`../public/${subDir}`))){

                            element.mv(dirUploads + fileName, err => 
                                { if (err) throw err; });
                                fileNamePathList.push(`${dirUploads + fileName}`)
                    }else{
                        fs.mkdirSync(path.join(__dirname,`../public/${subDir}`))
                        element.mv(dirUploads + fileName, err => { if (err) throw err; });
                        fileNamePathList.push(`${dirUploads + fileName}`)
                    }
                });

                return fileNamePathList;
            }
            else {
                    let fileNamePath ="";
                    var fileName = Date.now() + '-' + Upload.name;
                    let dirUploads = `./public/${subDir}/`;
                    
                    if (fs.existsSync(path.join(__dirname,`../public/${subDir}`))){

                        Upload.mv(dirUploads + fileName, err => 
                                { if (err) throw err; });
                                fileNamePath =`${dirUploads + fileName}`;
                    }else{
                        fs.mkdirSync(path.join(__dirname,`../public/${subDir}`))
                        Upload.mv(dirUploads + fileName, err => { if (err) throw err; });
                        fileNamePath = `${dirUploads + fileName}`;
                    }
                    return fileNamePath;
            }
           
        } else {
            fileName = '';
        }
    },
    isEmpty: function(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
            return true;
        }
    }


}


// console.log(path.join(__dirname,'/bissa'))



