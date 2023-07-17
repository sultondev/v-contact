interface Contact {
  phone: string;
  name: string;
  email: string;
  tags: string[];
  createdAt: Date;
}

const contactsList: Contact[] = [
  {
    phone: "1234567890",
    name: "John Doe",
    email: "john@example.com",
    tags: ["family"],
    createdAt: new Date("2022-01-01"),
  },
  {
    phone: "9876543210",
    name: "Jane Smith",
    email: "jane@example.com",
    tags: ["job"],
    createdAt: new Date("2022-02-02"),
  },
  {
    phone: "4567890123",
    name: "Alice Johnson",
    email: "alice@example.com",
    tags: ["family", "job"],
    createdAt: new Date("2022-03-03"),
  },
  {
    phone: "7890123456",
    name: "Bob Anderson",
    email: "bob@example.com",
    tags: ["friends"],
    createdAt: new Date("2022-04-04"),
  },
  {
    phone: "2345678901",
    name: "Emma Davis",
    email: "emma@example.com",
    tags: ["family"],
    createdAt: new Date("2022-05-05"),
  },
  {
    phone: "8901234567",
    name: "Michael Wilson",
    email: "michael@example.com",
    tags: ["job"],
    createdAt: new Date("2022-06-06"),
  },
  {
    phone: "3456789012",
    name: "Sophia Lee",
    email: "sophia@example.com",
    tags: ["friends"],
    createdAt: new Date("2022-07-07"),
  },
  {
    phone: "9012345678",
    name: "Daniel Taylor",
    email: "daniel@example.com",
    tags: ["family", "job"],
    createdAt: new Date("2022-08-08"),
  },
  {
    phone: "5678901234",
    name: "Olivia Brown",
    email: "olivia@example.com",
    tags: ["friends"],
    createdAt: new Date("2022-09-09"),
  },
  {
    phone: "0123456789",
    name: "David Thomas",
    email: "david@example.com",
    tags: ["job"],
    createdAt: new Date("2022-10-10"),
  },
];


export default contactsList;