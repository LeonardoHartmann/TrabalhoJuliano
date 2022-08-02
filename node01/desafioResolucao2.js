const getFlagValue = require('./desafioResolucao');

console.log(`Olá, ${getFlagValue('--name')} ${getFlagValue('--greeting')}`);