import Razorpay from "razorpay";
import crypto from "crypto";

// Razorpay instance create
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Create Order
export const createOrder = async (req, res) => {
  try {
    
    const options = {
      amount: req.body.amount * 100, // paise me bhejna hai (499 Rs = 49900 paise)
      currency: req.body.currency,
      receipt: "receipt_order_" + new Date().getTime(),
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({ order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Verify Payment
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // yaha tum course enrollment logic likhoge
      return res.status(200).json({ success: true, message: "Payment verified ✅" });
    } else {
      return res.status(400).json({ success: false, message: "Payment verification failed ❌" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
