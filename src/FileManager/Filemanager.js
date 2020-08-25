const fs = require('fs');
const p = require('path');
const fsExtra = require('fs-extra')
    //const rimraf = require("rimraf");
    //const test = require("test.js");
const rootDIR = p.join(__dirname, '/root');
createDirectory(rootDIR, "test");
createRootDirectory(rootDIR);
//deleteDirectory(rootDIR);
console.log(fileCreatedDate(rootDIR));
//emptyDirectory(rootDIR);

function createDirectory(path, name) {
    let dir = p.join(path, "/" + name);
    //set dir to database
    console.log('creating file ');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log('Directory ' + name + ' created');
    } else {
        console.log('Directory with name "' + name + '" exists in path"' + path + '"');
    }
}

function createRootDirectory() {
    let dir = p.join(__dirname, '/root');

    console.log("creating file " + dir); //set to save in database
    let date_ob = new Date(); //get current time to work
    const columns = ['root', rootDIR, 1, '', ''];
    //insert('directory', columnnames, values);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log('root directory created');
    } else {
        console.log('root directory exists');
    }
}

function emptyDirectory(path) {

    fsExtra.emptyDirSync(path)

}

function rename(file, rename) {
    fs.rename();
}

function createfile() {
    fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function fileCreatedDate(file) {
    const { birthtime } = fs.statSync(file)
    return birthtime
}