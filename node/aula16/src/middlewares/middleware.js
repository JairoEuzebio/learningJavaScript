exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};



/*

  if (req.body.nome) {
    req.body.clente = req.body.cliente.replace('Miranda', 'não use Miranda');
    console.log('');
    console.log(`Vi que voce postou ${req.body.nome}`);
    console.log('');

  };
*/