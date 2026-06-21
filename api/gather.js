module.exports = async (req, res) => {
  let digit = "No digit received";

  if (req.body && req.body.Digits) {
    digit = req.body.Digits;
  }

  console.log("DTMF Pressed:", digit);

  res.setHeader("Content-Type", "text/xml");

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Thank you. Your input has been received. Goodbye.</Say>
  <Hangup/>
</Response>`;

  res.status(200).send(twiml);
};
