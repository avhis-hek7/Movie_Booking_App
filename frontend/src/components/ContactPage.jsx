
import React, { useState } from "react";
import { contactStyles } from "../assets/dummyStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Mail, MapPin, MessageCircle, Phone, Popcorn, Send, TicketPercent } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits for phone number
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: digits,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone number
    if (formData.phone.length !== 10) {
      toast.error("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    // WhatsApp Message
    const whatsappMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}
    `;

    // Encode Message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    window.open(
      `https://wa.me/8299431275?text=${encodedMessage}`,
      "_blank"
    );

    toast.success("Message sent successfully!");

    // Reset Form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className={contactStyles.pageContainer}>
      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />

      {/* Background */}
      <div className={contactStyles.bgGradient}></div>
      <div className={contactStyles.bgBlob1}></div>
      <div className={contactStyles.bgBlob2}></div>

      {/* Film Strip Top */}
      <div className={contactStyles.filmStripTop}>
        {[...Array(20)].map((_, i) => (
          <div
            key={`top-${i}`}
            className={contactStyles.filmStripSegment}
          ></div>
        ))}
      </div>

      {/* Film Strip Bottom */}
      <div className={contactStyles.filmStripBottom}>
        {[...Array(20)].map((_, i) => (
          <div
            key={`bottom-${i}`}
            className={contactStyles.filmStripSegment}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className={contactStyles.contentContainer}>
        {/* Header */}
        <div className={contactStyles.headerContainer}>
          <div className="inline-flex items-center justify-center mb-4">
            <h1 className={contactStyles.headerTitle}>
              <span className={contactStyles.headerTitleRed}>Contact </span>
              <span className={contactStyles.headerTitleWhite}>Us</span>
            </h1>
          </div>

          <p className={contactStyles.headerSubtitle}>
            Have questions about movie bookings or special events? Our team is
            here to help you.
          </p>
        </div>

        {/* Grid */}
        <div className={contactStyles.gridContainer}>
          <div className={contactStyles.cardRelative}>
            <div className={contactStyles.cardGradient}></div>

            {/* Card */}
            <div className={contactStyles.cardContainer}>
              {/* Badge */}
              <div className={contactStyles.cardBadge}>
                <TicketPercent className={contactStyles.cardIcon} />
                BOOKING SUPPORT
              </div>

              {/* Title */}
              <h2 className={contactStyles.formTitle}>
                <MessageCircle className={contactStyles.formTitleIcon} />
                Send us a Message
              </h2>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className={contactStyles.form}
              >
                {/* Name + Email */}
                <div className={contactStyles.formGrid}>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className={contactStyles.inputGroup}
                    >
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={contactStyles.input}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className={contactStyles.inputGroup}
                    >
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={contactStyles.input}
                      placeholder="your@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className={contactStyles.inputGroup}
                  >
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={contactStyles.input}
                    placeholder="9804167307"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    title="Enter a valid 10-digit phone number"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className={contactStyles.inputGroup}
                  >
                    Subject *
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={contactStyles.select}
                  >
                    <option value="">Select a subject</option>
                    <option value="Ticket Booking">
                      Ticket Booking
                    </option>
                    <option value="Group Events">
                      Group Events
                    </option>
                    <option value="Membership Inquiry">
                      Membership Inquiry
                    </option>
                    <option value="Technical Issue">
                      Technical Issue
                    </option>
                    <option value="Refund Request">
                      Refund Request
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className={contactStyles.inputGroup}
                  >
                    Message *
                  </label>

                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={contactStyles.textarea}
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className={contactStyles.submitButton}
                >
                  Send via WhatsApp
                  <Send className={contactStyles.buttonIcon} />
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className={contactStyles.cardRelative}>
              <div className={contactStyles.cardGradient}></div>
              <div className={contactStyles.cardContainer}>
                <div className={contactStyles.cardBadge}>
                  <Popcorn className={contactStyles.cardIcon} />
                  CINEMA INFO
                </div>
                <h2 className={contactStyles.formTitle}>Contact Information</h2>
                <div className={contactStyles.contactInfo}>
                  <div className={contactStyles.contactItem}>
                    <div className={contactStyles.contactIconContainer}>
                      <Phone className={contactStyles.contactIcon}/>

                    </div>
                    <div>
                      <h3 className={contactStyles.contactText}>
                        Booking Hotline
                      </h3>
                      <p className={contactStyles.contactDetail}>
                        +977 9804167307

                      </p>
                      
                    </div>

                  </div>

                   <div className={contactStyles.contactItem}>
                    <div className={contactStyles.contactIconContainer}>
                      <Mail className={contactStyles.contactIcon}/>

                    </div>
                    <div>
                      <h3 className={contactStyles.contactText}>
                        Email Address
                      </h3>
                      <p className={contactStyles.contactDetail}>
                        booking@contact.com

                      </p>
                      <p className={contactStyles.contactDetail}>
                        support@cineplex.com

                      </p>
                    </div>

                  </div>


                   <div className={contactStyles.contactItem}>
                    <div className={contactStyles.contactIconContainer}>
                      <MapPin className={contactStyles.contactIcon}/>

                    </div>
                    <div>
                      <h3 className={contactStyles.contactText}>
                        Main Theater Location
                      </h3>
                      <p className={contactStyles.contactDetail}>
                        New Rd, Pokhara 33700, Nepal 

                      </p>
                      <p className={contactStyles.contactDetail}>
                        +2 other locations across the city

                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

             <div className={contactStyles.cardRelative}>
              <div className={contactStyles.emergencyCardGradient}></div>
              <div className={contactStyles.emergencyCard}>
                <h3 className={contactStyles.emergencyTitle}>
                  <Phone className={contactStyles.emergencyIcon} />
                  Urgent Show-Related Issues
                </h3>
                <p className={contactStyles.emergencyText}>
                  For urgent issues during a movie screening (sound, projection, etc.)
                </p>
                <div className="flex items-center">
                  <div className={contactStyles.emergencyHotline}>
                    HOTLINE: +977 9804167307
                  </div>
                  <span className={contactStyles.emergencyNote}>Available during showtimes</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;