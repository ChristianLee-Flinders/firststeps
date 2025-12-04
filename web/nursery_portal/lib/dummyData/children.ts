export type Gender = "male" | "female" | "other";
export type ChildStatus = "active" | "inactive" | "waitlist";
export type FundingType = "none" | "15_hours" | "30_hours" | "full_funded";

export interface Child {
    id: string;

    first_name: string;
    last_name: string;
    date_of_birth: string; // ISO date (YYYY-MM-DD)

    gender?: Gender;
    avatar_url?: string;
    nursery_id?: string;
    room: string;
    enrollment_date?: string; // ISO date
    status: ChildStatus; // default: "active"

    parent1_name: string;
    parent1_phone: string;
    parent1_email?: string;

    parent2_name?: string;
    parent2_phone?: string;

    emergency_contact_name?: string;
    emergency_contact_phone?: string;
    emergency_contact_relationship?: string;

    allergies?: string;
    medical_conditions?: string;
    dietary_requirements?: string;

    doctor_name?: string;
    doctor_phone?: string;

    notes?: string;

    funding_type?: FundingType; // default: "none"
}


export const dummyChildren: Child[] = [
  {
    id: "child-1",
    first_name: "Oliver",
    last_name: "Smith",
    date_of_birth: "2020-05-14",
    gender: "male",
    status: "active",
    room: "Toddlers",
    parent1_name: "Laura Smith",
    parent1_phone: "07111 111111",
  },
  {
    id: "child-2",
    first_name: "Amelia",
    last_name: "Johnson",
    date_of_birth: "2019-11-02",
    gender: "female",
    allergies: "Peanuts",
    parent1_phone: "07123 456789",
    parent1_name: "Emma Johnson",
    room: "Toddlers",
    status: "active",
  },
  {
    id: "child-3",
    first_name: "George",
    last_name: "Williams",
    date_of_birth: "2021-01-22",
    status: "waitlist",
    funding_type: "none",
    room: "Toddlers",
    parent1_name: "Mark Williams",
    parent1_phone: "07222 222222",
  },
  {
    id: "child-4",
    first_name: "Isla",
    last_name: "Brown",
    date_of_birth: "2020-07-30",
    gender: "female",
    medical_conditions: "Asthma",
    room: "Preschool",
    parent1_name: "Hannah Brown",
    parent1_phone: "07333 333333",
    status: "active",
  },
  {
    id: "child-5",
    first_name: "Leo",
    last_name: "Jones",
    date_of_birth: "2018-09-18",
    funding_type: "15_hours",
    parent1_name: "Sophie Jones",
    parent1_phone: "07444 444444",
    room: "Preschool",
    status: "active",
  },
  {
    id: "child-6",
    first_name: "Mia",
    last_name: "Garcia",
    date_of_birth: "2021-04-11",
    gender: "female",
    emergency_contact_name: "Aunt May",
    emergency_contact_phone: "07700 900123",
    parent1_name: "Carlos Garcia",
    parent1_phone: "07555 555555",
    room: "Preschool",
    status: "active",
  },
  {
    id: "child-7",
    first_name: "Noah",
    last_name: "Davis",
    date_of_birth: "2020-12-05",
    dietary_requirements: "Vegetarian",
    room: "Toddlers",
    parent1_name: "Olivia Davis",
    parent1_phone: "07666 666666",
    status: "active",
  },
  {
    id: "child-8",
    first_name: "Ava",
    last_name: "Miller",
    date_of_birth: "2019-02-25",
    gender: "female",
    status: "inactive",
    room: "Preschool",
    parent1_name: "Sophie Miller",
    parent1_phone: "07777 777777",
  },
  {
    id: "child-9",
    first_name: "Ethan",
    last_name: "Wilson",
    date_of_birth: "2021-06-19",
    room: "Babies",
    parent1_name: "Rachel Wilson",
    parent1_phone: "07888 888888",
    status: "active",
  },
  {
    id: "child-10",
    first_name: "Grace",
    last_name: "Moore",
    date_of_birth: "2020-10-03",
    parent1_email: "parent@example.com",
    parent1_name: "Daniel Moore",
    parent1_phone: "07999 999999",
    room: "Toddlers",
    status: "active",
  },
  {
    id: "child-11",
    first_name: "Jacob",
    last_name: "Taylor",
    date_of_birth: "2019-12-14",
    doctor_name: "Dr Green",
    doctor_phone: "0115 555 1234",
    parent1_name: "Sarah Taylor",
    parent1_phone: "07000 000001",
    room: "Preschool",
    status: "active",
  },
  {
    id: "child-12",
    first_name: "Charlotte",
    last_name: "Anderson",
    date_of_birth: "2020-03-22",
    gender: "female",
    enrollment_date: "2023-09-01",
    parent1_name: "Lucy Anderson",
    parent1_phone: "07000 000002",
    room: "Preschool",
    status: "active",
  },
  {
    id: "child-13",
    first_name: "Henry",
    last_name: "Thomas",
    date_of_birth: "2018-06-09",
    allergies: "Dairy",
    funding_type: "30_hours",
    parent1_name: "Emily Thomas",
    parent1_phone: "07000 000003",
    room: "Preschool",
    status: "active",
  },
  {
    id: "child-14",
    first_name: "Sophie",
    last_name: "Jackson",
    date_of_birth: "2021-08-15",
    notes: "Very shy at first but warms up quickly.",
    parent1_name: "Laura Jackson",
    parent1_phone: "07000 000004",
    room: "Preschool",
    status: "active",
  },
  {
    id: "child-15",
    first_name: "James",
    last_name: "White",
    date_of_birth: "2020-11-27",
    gender: "male",
    avatar_url: "https://example.com/avatar.jpg",
    parent1_name: "Karen White",
    parent1_phone: "07000 000005",
    room: "Toddlers",
    status: "active",
  }
];


