import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    // JS-based validation fallback
    const name = formData.get("name")?.trim()
    const email = formData.get("email")?.trim()
    const message = formData.get("message")?.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name || !email || !message) {
      setResult("Please fill in all fields.")
      return
    }

    if (!emailPattern.test(email)) {
      setResult("Please enter a valid email address.")
      return
    }

    setResult("Sending...")

    formData.append("access_key", "2fa34d4d-f54f-4e04-bcb9-0ab7aec655d6")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message || "Something went wrong.")
    }
  }

  return (
    <div id='contact' className='Contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <p>I'm open to internship opportunities, freelance projects, or collaborative work that challenges me and helps me grow. Whether you have an idea, a project, or just want to say hi — feel free to reach out!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>solankikunaal6@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91 9022037147</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your E-mail' name='email' required />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <div className="submit-row">
          <button type="submit" className="contact-submit">Submit Now</button>
          {result && <p className="form-result">{result}</p>} </div>
        </form>
      </div>

    </div>
  )
}

export default Contact
