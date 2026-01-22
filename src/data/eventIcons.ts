
import CheersIcon from "../assets/icons/CheersIcon.astro";
import ChurchIcon from "../assets/icons/ChurchIcon.astro";
import DinnerIcon from "../assets/icons/DinnerIcon.astro";
import GiftIcon from "../assets/icons/GiftIcon.astro";
import LocationIcon from "../assets/icons/LocationIcon.astro";
import PartyIcon from "../assets/icons/PartyIcon.astro";
import RingsIcon from "../assets/icons/RingsIcon.astro";

export const eventIcons = {
  cheers: CheersIcon,
  church: ChurchIcon,
  location: LocationIcon,
  rings: RingsIcon,
  dinner: DinnerIcon,
  party: PartyIcon,
  gift: GiftIcon
} as const;

export type EventIconKey = keyof typeof eventIcons;
