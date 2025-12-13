import { useState, useRef } from "react";
import ContactInfo from "./ContactInfo";
import { COLORS, ICON_COLORS } from "../Colors";
import emailjs from "@emailjs/browser";
import AOS from "aos";

function Contact() {
  const [buttonHover, setButtonHover] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const SERVICE_ID = "service_th0kz2j";
    const TEMPLATE_ID = "template_zx2i07k";
    const PUBLIC_KEY = "LtPUGefu5pFaIC8Yz";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.current) {
      const formData = new FormData(form.current);
      const emailValue = formData.get("from_email") as string;

      if (!emailRegex.test(emailValue)) {
        alert("Ogiltig e-postadress. Kontrollera att du skrivit rätt.");
        return;
      }

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
          alert("Ditt meddelande har skickats.");
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.log(error.text);
          alert("Något gick fel. Försök igen senare.");
        }
      );
    }
  };

  const inputStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "#f1f5f9",
    borderColor: COLORS.GLASS_BORDER,
  };

  const cardStyle = {
    backgroundColor: COLORS.TEXT_SHADOW,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: COLORS.GLASS_BORDER,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 overflow-hidden">
      <h2
        className="text-4xl font-bold mb-12 text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Kontakta Mig
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="p-8 border rounded-lg shadow-lg"
          data-aos="fade-right"
          data-aos-duration="1000"
          style={cardStyle}
        >
          <h3 className="text-xl font-semibold mb-6 text-center pb-2">
            Skicka ett meddelande
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="Namn"
              className="w-full p-3 border rounded"
              style={inputStyle}
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="E-post"
              className="w-full p-3 border rounded"
              style={inputStyle}
              required
            />
            <textarea
              name="message"
              placeholder="Meddelande..."
              rows={5}
              className="w-full p-3 border rounded"
              style={inputStyle}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 font-semibold rounded"
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              style={{
                backgroundColor: buttonHover
                  ? COLORS.GLASS_BORDER
                  : COLORS.GLASS_HOVER,
                border: COLORS.GLASS_BG_DARK,
                color: "#ffffff",
                backdropFilter: "blur(4px)",
              }}
            >
              Skicka
            </button>
          </form>
        </div>
        <div
          className="p-8 border rounded-lg shadow-lg flex flex-col justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          style={cardStyle}
        >
          <h3 className="text-xl font-semibold mb-6 text-center pb-2">
            Kontaktuppgifter
          </h3>
          <ContactInfo iconSize={24} linkSize={36} />
        </div>
      </div>
    </div>
  );
}
export default Contact;
