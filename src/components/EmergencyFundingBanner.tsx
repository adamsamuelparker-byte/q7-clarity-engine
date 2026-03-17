import { Zap, MessageCircle } from "lucide-react";

export const EmergencyFundingBanner = () => {
  const whatsappUrl =
    "https://wa.me/447378375160?text=Emergency%20Funding%20-%20Hi%2C%20I%20would%20like%20to%20discuss%20emergency%20business%20funding%20options%20for%20my%20business.";

  return (
    <section className="px-4 sm:px-6 py-6">
      <div
        className="max-w-4xl mx-auto rounded-[10px] p-5 sm:p-6 md:py-5 md:px-7"
        style={{ backgroundColor: "#c0392b" }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Icon + Text */}
          <div className="flex items-center gap-4">
            {/* Lightning icon with semi-transparent box */}
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Zap className="w-6 h-6 text-white" fill="white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">
                Need emergency business funding?
              </h3>
              <p className="text-white/80 text-sm mt-0.5">
                No forms, no waiting — speak to a specialist right now
              </p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white text-sm md:text-base md:w-auto w-full animate-[whatsapp-pulse_2s_ease-in-out_infinite]"
            style={{
              backgroundColor: "#25D366",
              borderRadius: "7px",
            }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp us now
          </a>
        </div>
      </div>

      <style>{`
        @keyframes whatsapp-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50% { box-shadow: 0 0 0 8px rgba(37, 211, 102, 0); }
        }
      `}</style>
    </section>
  );
};
