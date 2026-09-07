import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

export function getWhatsAppUrl(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function generateInquiryMessage(
  items: Array<{ name: string; quantity: number; notes?: string }>
): string {
  let message = "Hello! I'm interested in the following items:\n\n";
  items.forEach((item) => {
    message += `- ${item.name} (Qty: ${item.quantity})`;
    if (item.notes) message += ` - Note: ${item.notes}`;
    message += "\n";
  });
  message += "\nPlease share the details and pricing. Thank you!";
  return message;
}
