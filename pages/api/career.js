import { createRouter } from "next-connect";
import sendResume from "@/utils/sendResume";
import upload from "@/middleware/multer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const router = createRouter();

router.use(upload.single("resume")).post(async (req, res) => {
  //Get the value from request
  const { firstname, lastname, email, phone, applyfor, experience } = req.body;
  const content = req.file.buffer;
  //send email to KazianaMedia
  try {
    await sendResume({
      myemail: process.env.MY_EMAIL,
      subject: `CareerForm: Sent by ${email}`,
      message: `Firstname: ${firstname}\nLastname: ${lastname}\nEmail:${email}\nPhone:${phone}\nApplyFor:${applyfor}\nExperience:${experience}`,
      content:content
    });
    //Send response
    res.status(200).json({
      success: true,
      message: `Email sent successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
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
