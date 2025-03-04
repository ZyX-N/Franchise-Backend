export const getMailOne = ({
  firstName = "",
  lastName = "",
  email = "-",
  phoneNumber = "-",
  city = "-",
  currentBusiness = "-",
  preferredBrand = "-",
  investmentRange = "-",
  message = "",
}) => {
  return `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Business Inquiry</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Current Business:</strong> ${currentBusiness}</p>
          <p><strong>Preferred Brand:</strong> ${preferredBrand}</p>
          <p><strong>Investment Range:</strong> ${investmentRange}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <br />
          <p>Best regards,</p>
          <p>YCN</p>
        </body>
      </html>
    `;
};
