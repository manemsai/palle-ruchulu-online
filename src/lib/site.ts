export const WHATSAPP_NUMBER = "919848803193";
export const WHATSAPP_DISPLAY = "+91 98448 03193";

export function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
