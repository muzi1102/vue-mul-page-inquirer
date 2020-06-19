const { execSync } = require('child_process');
const { log } = console;
const chalk = require('chalk');
const inquirer = require('inquirer');
const fuzzy = require('fuzzy');

const action = process.argv[2];
// 这里是package.json 里面scripts脚本的命令
console.log(action);

var fn_map  = {
    serve: vueServe,
    build: vueBuild,
}
fn_map[action]();

function vueServe() {

    init();
}

function vueBuild() {
    
}


function inquirerResult() {
    return inquirer.prompt([
        // 设置版本号
        {
          type: 'input',
          name: 'entry',
          message: `请输入需要打包的入口文件:`,
      }
  ]);
}

async function init() {
    let pageName = await inquirerResult();
    log(`${chalk.red.bold('Waiting For Server Start...')}`)
    console.log(pageName.entry);      // 输出
    execSync(`cross-env PAGE_NAME=${pageName.entry} npx webpack-dev-server --inline --progress --config build/webpack.dev.conf.js`, { stdio: 'inherit' })
}

