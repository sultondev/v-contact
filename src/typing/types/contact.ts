export interface Contact {
  name: string;
  phone: string;
  email: string;
  tags: ContactTagProps[];
}

export interface ContactTagProps {
  label: string;
  value: string;
}

export interface TagTypes {
  value: string;
  id: string;
}