export const ITEM_STATUS = {
  AVAILABLE: "AVAILABLE",
  CLAIMED: "CLAIMED",
} as const;

export const DISTRICTS = [
  "Barguna",
  "Barisal",
  "Bhola",
  "Jhalokati",
  "Patuakhali",
  "Pirojpur",
  "Bandarban",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Comilla",
  "Cox's Bazar",
  "Feni",
  "Khagrachari",
  "Lakshmipur",
  "Noakhali",
  "Rangamati",
  "Dhaka",
  "Faridpur",
  "Gazipur",
  "Gopalganj",
  "Jamalpur",
  "Kishoreganj",
  "Madaripur",
  "Manikganj",
  "Munshiganj",
  "Mymensingh",
  "Narayanganj",
  "Narsingdi",
  "Netrokona",
  "Rajbari",
  "Shariatpur",
  "Sherpur",
  "Tangail",
  "Bagerhat",
  "Chuadanga",
  "Jessore",
  "Jhenaidah",
  "Khulna",
  "Kushtia",
  "Magura",
  "Meherpur",
  "Narail",
  "Satkhira",
  "Bogra",
  "Joypurhat",
  "Naogaon",
  "Natore",
  "Nawabganj",
  "Pabna",
  "Rajshahi",
  "Sirajgonj",
  "Dinajpur",
  "Gaibandha",
  "Kurigram",
  "Lalmonirhat",
  "Nilphamari",
  "Panchagarh",
  "Rangpur",
  "Thakurgaon",
  "Habiganj",
  "Maulvibazar",
  "Sunamganj",
  "Sylhet",
] as const;

export type TItem = {
  _id?: string;
  title: string;
  description: string;
  images?: string[];
  city: (typeof DISTRICTS)[number];
  location: string;
  dateFound: Date;
  status: keyof typeof ITEM_STATUS;
  isReported?: boolean;
  reportCount?: number;
  user: any;
  category: any;
  questions?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};
