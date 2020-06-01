const fs = require('fs');
let side = [];
let route = "";
const suffix = /(\.md|\.vue)$/

const blogPath = './src/blogs/';
const sidePath = './src/config/side.js';
const routesPath = './src/config/routes.js';

let redirect = true;

let imp = '';
let epo = 'export default [\n';
let componentIndex = 0;

function getTree() {
    try {
        let files = fs.readdirSync(blogPath);
        files.forEach(file => {
            let t = {
                name: file,
                head: true
            }
            let curPath = blogPath + file;
            if (suffix.test(file)) {
                t.href = getHref(curPath);
                imp += getImp(getComponentPath(curPath));
                epo += getEpo(t.href);
            } else {
                t.children = getLeaf(curPath);
            }
            side.push(t);
        })
    } catch (err) {
        console.log('读取blogs根目录失败！')
    }
}

function getLeaf(path) {
    let children = [];
    try {
        let files = fs.readdirSync(path);
        files.forEach(file => {
            let t = {
                name: file
            }
            let curPath = path + "/" + file;
            if (suffix.test(file)) {
                t.href = getHref(curPath);
                imp += getImp(getComponentPath(curPath));
                epo += getEpo(t.href);
            } else {
                t.children = getLeaf(curPath);
            }
            children.push(t);
        })
        return children;
    } catch (err) {
        console.log("读取 " + curPath + " 目录失败！")
    }
}

function getHref(path) {
    path = path.substring(5);
    path = path.replace(/\/|(?:\.md$)/g,'');
    path = '/' + path;
    return path;
}

function getComponentPath(path){
    return path.substring(5);
}

function writeToSide() {
    let str = 'export default ' + JSON.stringify(side, null, '  ');
    try {
        fs.writeFileSync(sidePath, str);
    } catch (err) {
        console.log(err);
    }
}

function writeToRoutes() {
    epo += "]";
    try {
        fs.writeFileSync(routesPath, imp + epo);
    } catch (err) {
        console.log('write to routes 失败！')
    }
}

function getImp(path) {
    let ret = "import component" + componentIndex + " from '.." + path + "';\n";
    return ret;
}

function getEpo(path) {
    let ret = '';
    if (redirect) {
        ret += "\t\t{\n";
        ret += "\t\t\t\tpath: '/',\n";
        ret += "\t\t\t\tredirect: '" + path + "'\n\t\t},\n";
        redirect = false;
    }
    ret += "\t\t{\n";
    ret += "\t\t\t\tpath: '" + path + "',\n";
    ret += "\t\t\t\tname: 'component" + componentIndex + "',\n";
    ret += "\t\t\t\tcomponent: component" + componentIndex + "\n\t\t},\n";
    componentIndex++;
    return ret
}

function writeToComponents(){
    let fromPath = './src/blogComponents';
    let toPath = './src/config/components.js';
    let components = [];
    let regx = /\.vue$/;
    let importStr = '';
    let exportStr = 'export default {\n';
    read(fromPath, '');
    components.forEach(component => {
        importStr += 'import ' + component.name + ' from "' + component.path.replace(/\.\/src/,'..') + '";\n';
        exportStr += '\t' + component.name + ',\n';
    });
    exportStr += '}'
    fs.writeFileSync(toPath, importStr + exportStr);
    function read(prefix, name){
        try{
            let path;
            if(name !== ''){
                path = prefix + '/' + name;
            }else {
                path = prefix;
            }
            let files = fs.readdirSync(path);
            files.forEach(file => {
                if(regx.test(file)){
                     let component = {
                         name : file.replace(regx, ''),
                         path : path + '/' + file
                     };
                     components.push(component);
                } else {
                    read(path, file);
                }
            })
        }catch(err){
            console.log(err)
        }
    }
}

getTree();
writeToSide();
writeToRoutes();
writeToComponents();
