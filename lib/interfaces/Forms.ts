export interface FormDataProps {
  whatsapp: string;
  country: string;
  gender: string;
  state: string;
  city: string;
  dob: string;
  arrival_date: string;
  departure_date: string;
  likelihood: string;
}
export interface AccommodationProps {
  arrival_date: string;
  departure_date: string;
  jain_food: string;
  emergency_contact: string;
  emergency_relationship: string;
  emergency_name: string;
  medical_issues: string | null;
  pwd: string;
  pwd_certificate: File | null;
  outside_india: string;
  passport: File | null;
}
export interface formOptionsProps {
  value: string;
  label: string;
  code: string;
}
