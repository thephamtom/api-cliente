let clientes = [];
let id = 1;

exports.getClientes = (req, res) => {
  res.status(200).json(clientes);
};

exports.createCliente = (req, res) => {
  const { nombre, email, telefono } = req.body;

  if (clientes.find(c => c.email === email)) {
    return res.status(409).json({ error: 'Email ya existe' });
  }

  const nuevo = {
    id_cliente: id++,
    nombre,
    email,
    telefono,
    created_at: new Date()
  };

  clientes.push(nuevo);
  res.status(201).json(nuevo);
};

exports.updateCliente = (req, res) => {
  const { id } = req.params;
  const { nombre, email, telefono } = req.body;

  const c = clientes.find(x => x.id_cliente == id);
  if (!c) return res.status(404).json({ error: 'Cliente no encontrado' });

  c.nombre = nombre;
  c.email = email;
  c.telefono = telefono;

  res.status(200).json(c);
};

exports.deleteCliente = (req, res) => {
  const { id } = req.params;

  const idx = clientes.findIndex(x => x.id_cliente == id);
  if (idx === -1) return res.status(404).json({ error: 'Cliente no encontrado' });

  clientes.splice(idx, 1);
  res.status(200).json({ mensaje: 'Cliente eliminado' });
};