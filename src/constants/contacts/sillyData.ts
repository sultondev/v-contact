interface Contact {
  phone: string;
  name: string;
  email: string;
  tags: string[];
}

const contactsList: Contact[] = [
  {
    phone: "1234567890",
    name: "John Doe",
    email: "john@example.com",
    tags: ["family"],
  },
  {
    phone: "9876543210",
    name: "Jane Smith",
    email: "jane@example.com",
    tags: ["job"],
  },
  {
    phone: "4567890123",
    name: "Alice Johnson",
    email: "alice@example.com",
    tags: ["family", "job"],
  },
  {
    phone: "7890123456",
    name: "Bob Anderson",
    email: "bob@example.com",
    tags: ["friends"],
  },
  {
    phone: "2345678901",
    name: "Emma Davis",
    email: "emma@example.com",
    tags: ["family"],
  },
  {
    phone: "8901234567",
    name: "Michael Wilson",
    email: "michael@example.com",
    tags: ["job"],
  },
  {
    phone: "3456789012",
    name: "Sophia Lee",
    email: "sophia@example.com",
    tags: ["friends"],
  },
  {
    phone: "9012345678",
    name: "Daniel Taylor",
    email: "daniel@example.com",
    tags: ["family", "job"],
  },
  {
    phone: "5678901234",
    name: "Olivia Brown",
    email: "olivia@example.com",
    tags: ["friends"],
  },
  {
    phone: "0123456789",
    name: "David Thomas",
    email: "david@example.com",
    tags: ["job"],
  },
];


export default contactsList;