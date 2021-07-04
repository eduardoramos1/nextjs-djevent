const { events } = require('./data.json');

export default function handler(req, res) {
  const evt = events.filter((ev) => ev.slug === req.query.slug);

  if (req.method === 'GET') {
    res.status(200).json(evt);
  } else {
    // duvida se esse setHeader é realmente necessário
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Métodos ${req.method} não é permitido` });
  }
}
