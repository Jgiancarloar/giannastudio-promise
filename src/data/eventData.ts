import type { EventIconKey } from "./eventIcons";

export type ItineraryItem = {
  id: string;
  icon: EventIconKey;
  time: string;
  title: string;
  description: String;
};

export type EventsItem = {
  id: string;
  title: string;
  icon: EventIconKey;
  time: string;
  address: string;
  mapUrl: string;
};

function getFutureISO(days = 30, time = "15:30") {
  const [h, m] = time.split(":").map(Number);
  const d = new Date();
  d.setDate(d.getDate() + days);
  d.setHours(h, m, 0, 0);

  return d.toISOString();
}

export const eventData = {

  couple: {
    bride: "Mary",
    groom: "Daniel",
  },

  date: {
    isoDemo: getFutureISO(30, "15:30"),
    iso: "2026-01-24T15:30:00-05:00",
    timezone: "America/Lima",
  },

  itinerary: [
    {
      id: "ceremony",
      icon: "rings",
      time: "15:30",
      title: "Ceremonia",
      description: "El momento más importante: nuestro “sí, acepto”."
    },
    {
      id: "arrival",
      icon: "location",
      time: "20:00",
      title: "Recepción",
      description: "Los esperamos para darles la bienvenida."
    },
    {
      id: "toast",
      icon: "cheers",
      time: "21:30",
      title: "Brindis",
      description: "Levantamos la copa por el amor y la felicidad."
    },
    {
      id: "dinner",
      icon: "dinner",
      time: "22:30",
      title: "Cena",
      description: "Compartimos la mesa y buenos momentos."
    },
    {
      id: "party",
      icon: "party",
      time: "00:00",
      title: "Fiesta",
      description: "La noche continúa… música, baile y celebración."
    },
  ] satisfies ItineraryItem[],

  events: [
    {
      id: "ceremony",
      title: "Ceremonia",
      icon: "church",
      time: "15:30",
      address: "Av. Armendáriz 350, Miraflores",
      mapUrl: "https://maps.app.goo.gl/bjHcxyFu4VKjaNrp9",
    },
    {
      id: "party",
      title: "Fiesta",
      icon: "cheers",
      time: "20:00",
      address: "Av. Armendáriz 350, Miraflores",
      mapUrl: "https://maps.app.goo.gl/bjHcxyFu4VKjaNrp9",
    },
  ] satisfies EventsItem[],

};