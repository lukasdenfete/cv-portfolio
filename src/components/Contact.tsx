import { useState, useRef } from "react";
import ContactInfo from "./ContactInfo";
import { COLORS, ICON_COLORS } from "../Colors";
import emailjs from "@emailjs/browser";
import AOS from "aos";

type StatusType = { 
  type: "success" | "error" | null;
  message: string;
};

function Contact() {
  const [buttonHover, setButtonHover] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<StatusType>({ type: null, message: "" });

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });
    const SERVICE_ID = "service_th0kz2j";
    const TEMPLATE_ID = "template_zx2i07k";
    const PUBLIC_KEY = "LtPUGefu5pFaIC8Yz";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.current) {
      const formData = new FormData(form.current);
      const emailValue = formData.get("from_email") as string;

      if (!emailRegex.test(emailValue)) {
        setStatus({
          type: "error",
          message: "Ogiltig e-postadress. Kontrollera stavningen.",
        });
        return;
      }
      setIsSending(true);

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
          setStatus({
            type: "success",
            message: "Ditt meddelande har skickats."
          });
          
          (e.target as HTMLFormElement).reset();
          setTimeout(() => {
            setStatus({ type: null, message: ""});
          }, 5000); // visa meddelande i 5 sek

        },
        (error) => {
          console.log(error.text);
          setStatus({
            type: "error",
            message: "Ett fel inträffade. Försök igen senare."
          });
        }
      ).finally(() => { //lås upp knappen oavsett
        setIsSending(false);
      });
    }
  };

  const inputStyle = {
    backgroundColor: COLORS.INPUT_BG,
    color: COLORS.INPUT_TEXT,
    borderColor: `1px solid ${COLORS.GLASS_BORDER}`,
  };

  const cardStyle = {
    backgroundColor: COLORS.TEXT_SHADOW,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: `1px solid ${COLORS.GLASS_BORDER}`,
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
              disabled={isSending}
            />
            <input
              type="email"
              name="from_email"
              placeholder="E-post"
              className="w-full p-3 border rounded"
              style={inputStyle}
              required
              disabled={isSending}
            />
            <textarea
              name="message"
              placeholder="Meddelande..."
              rows={5}
              className="w-full p-3 border rounded"
              style={inputStyle}
              required
              disabled={isSending}
            ></textarea>
            {status.message && (
              <div 
                className={`p-3 rounded text-center text-sm font-medium transition-all duration-300 ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 text-green-100 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-100 border border-red-500/30'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full p-3 font-semibold rounded"
              onMouseEnter={() => !isSending && setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              style={{
                backgroundColor: buttonHover ? COLORS.BUTTON_GLASS_HOVER : COLORS.GLASS_HOVER,
                border: `1px solid ${COLORS.GLASS_BORDER}`,
                color: COLORS.TEXT_LIGHT,
                backdropFilter: "blur(4px)",
                cursor: "pointer"
              }}
            >
              {isSending ? "Skickar.." : "Skicka"}
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
          <ContactInfo iconSize={24} linkSize={28} />
        </div>
      </div>
    </div>
  );
}
export default Contact;
