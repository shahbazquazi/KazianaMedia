import { createRouter } from "next-connect";
import sendContact from "@/utils/sendContact";

const router = createRouter();

router.post(async (req, res) => {
  //Get the value from request
  const { firstname, lastname, email, phone, website, budget, revenue } =
    req.body;

  //send email to KazianaMedia

  try {
    await sendContact({
      myemail: process.env.MY_EMAIL,
      subject: `ContactForm: Sent by ${email}`,
      message: `Firstname: ${firstname}\nLastname: ${lastname}\nEmail:${email}\nPhone:${phone}\nWebsite:${website}\nMarketing budget:${budget}\nRevenue:${revenue}`,
    });
    //Send response
    res.status(200).json({
      success: true,
      message: `Email sent successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

export default router.handler({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});
