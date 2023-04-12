const { exec } = require('child_process');

// Empacota as dependências em um único arquivo
exec('npm pack', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  console.log(`Dependencies packed: ${stdout}`);
});

// Executa testes automatizados
exec('npm test', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  console.log(`Tests executed: ${stdout}`);
});

// Gera código otimizado
exec('npm run build', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  console.log(`Code optimized: ${stdout}`);
});
