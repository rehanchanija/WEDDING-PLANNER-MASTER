const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    const razorpay = new Razorpay({
      key_id: "rzp_live_l23slxM6fTRUQf",
      key_secret: "b78v1lWRPM2qLI7lEBsCFuQC",
    });

    const payment_capture = 1;
    const amount = parseFloat(req.body.amount);
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}
