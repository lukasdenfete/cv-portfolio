import { useState } from "react";
import ContactInfo from "./ContactInfo";
import { COLORS } from "../Colors";

function Contact() {
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold mb-12 text-center">
        Kontakta Mig
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="p-8 border rounded-lg shadow-lg bg-white"
          style={{ backgroundColor: COLORS.AQUA_FOAM }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-700 text-center pb-2">
            Skicka ett meddelande
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Namn"
              className="w-full p-3 border rounded"
              style={{
                backgroundColor: COLORS.AQUA_FOAM,
                color: COLORS.SHADOW_NAVY,
                borderColor: COLORS.SHADOW_NAVY,
              }}
              required
            />
            <input
              type="email"
              placeholder="E-post"
              className="w-full p-3 border rounded"
              style={{
                backgroundColor: COLORS.AQUA_FOAM,
                color: COLORS.SHADOW_NAVY,
                borderColor: COLORS.SHADOW_NAVY,
              }}
              required
            />
            <textarea
              placeholder="Meddelande..."
              rows={5}
              className="w-full p-3 border rounded"
              style={{
                backgroundColor: COLORS.AQUA_FOAM,
                color: COLORS.SHADOW_NAVY,
                borderColor: COLORS.SHADOW_NAVY,
              }}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 text-white font-semibold rounded hover:bg-blue-800 transition-colors"
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              style={{
                backgroundColor: buttonHover
                  ? COLORS.SUNLIGHT_GOLD
                  : COLORS.ELLIS_BUTTER,
                color: COLORS.SHADOW_NAVY,
              }}
            >
              Skicka
            </button>
          </form>
        </div>
        <div
          className="p-8 border rounded-lg shadow-lg flex flex-col justify-center"
          style={{
            backgroundColor: COLORS.AQUA_FOAM,
            color: COLORS.SHADOW_NAVY,
          }}
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
