export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Here, you can connect the backend to an email service to send the appointment info
    console.log(`New appointment: Name: ${name}, Email: ${email}, Phone: ${phone}`);

    // Respond with success
    res.status(200).json({ message: 'Appointment submitted successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
