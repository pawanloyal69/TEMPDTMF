module.exports = async (req, res) => {
  res.setHeader("Content-Type", "text/xml");

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather numDigits="1"
          action="/api/gather"
          method="POST">
    <Say>Please press 1 to continue.</Say>
  </Gather>
  <Say>No input received. Goodbye.</Say>
</Response>`;

  res.status(200).send(twiml);
};
