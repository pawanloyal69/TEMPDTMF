module.exports = async (req, res) => {
  res.setHeader("Content-Type", "text/xml");

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial answerOnBridge="true">+917206597688</Dial>
</Response>`;

  res.status(200).send(twiml);
};
