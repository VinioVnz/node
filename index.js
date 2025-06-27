import PromptSync from 'prompt-sync';
import chalk from 'chalk';
const prompt = PromptSync()
let nome = prompt('Qual seu nome: ')

console.log(`Seja bem vindo ${nome}`)
console.log(chalk.bgRgb(255,255,0)(nome))
