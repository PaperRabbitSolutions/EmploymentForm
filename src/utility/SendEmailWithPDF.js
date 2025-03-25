import emailjs from "@emailjs/browser";

const SendEmailWithPDF = async (pdfFile) => {
  try {
    // ✅ Step 1: Convert PDF to Base64
    const reader = new FileReader();
    reader.readAsDataURL(pdfFile);
    reader.onload = async () => {
      const base64PDF = reader.result.split(",")[1]; // Remove metadata

      // ✅ Step 2: Send Email with Base64 Attachment
      const response = await emailjs.send(
        "", // Service ID
        "", // Template ID
        {
          to_email: "mishraadarshkumar2000@gmail.com",
          message: "Please find the attached PDF file.",
          attachment: base64PDF, // ✅ Base64 converted PDF
        },
        "" // Public Key
      );

      alert("✅ Email Sent Successfully!");
      console.log("Email Sent Successfully:", response);
    };

    reader.onerror = (error) => {
      console.error("Error Converting PDF to Base64:", error);
    };
  } catch (error) {
    console.error("Email Sending Failed:", error);
  }
};

export default SendEmailWithPDF;
