export interface FormData {
  id: string;
  name: string;
  department: string;
  open: boolean;
  max_participants: number;
  is_team_event: boolean;
  rules: string;
  max_team_size: string;
  min_team_size: string;
  header_image: string;
  start_date: number | string;
  end_date: number | string;
  registration_start_date: number | string;
  registration_end_date: number | string;
  fee: number;
  location: string;
  location_link: string;
  description: string;
  rounds: Rounds[];
  some_dudes: People[];
  social_links: Socials[];
  sponsors: Sponsors[];
  faqs: FAQ[];
}

export interface Rounds {
  name: string;
  start_time: string;
  end_time: string;
  location: string;
  location_link: string;
  description: string;
}
export interface People {
  name: string;
  dude_type: string;
  email: string;
  bio?: string;
}

export interface Socials {
  name: string;
  url: string;
}

export interface Sponsors {
  name: string;
  url: string;
  title: string;
  logo: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FormType {
  id: string;
  bg_img: string;
  name: string;
  desc: string;
  blocks: BlockType[];
}

export interface DependencyType {
  id: string;
  block_id: number;
  element_id: number;
  value: string;
}

export interface BlockType {
  id: string;
  position: number;
  title: string;
  elements: ElementType[];
}

export interface InputType {
  id: string;
  value: string;
  required: boolean;
  placeholder: string;
  autocomplete: boolean;
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
}

export interface SelectType {
  id: string;
  value: string;
  required: boolean;
  inputs: string[];
}

export type AllTypes =
  | "text"
  | "select"
  | "radio"
  | "checkbox"
  | "textarea"
  | "number"
  | "url"
  | "datetime-local"
  | "date"
  | "time"
  | "tel"
  | "email";

export interface ElementType {
  id: string;
  position: number;
  block_id: string;
  label: string;
  name: string;
  inputType: AllTypes;
  element: InputType | SelectType | RadioGroupType | CheckboxGroupType;
}

export interface RadioGroupType {
  id: string;
  value: string;
  required: boolean;
  dependency: boolean;
  inputs: string[];
}
export interface CheckboxGroupType {
  id: string;
  values: string[];
  required: boolean;
  inputs: string[];
}

export interface allEventType {
  id: string;
  name: string;
  head: string;
  members: {
    name: string;
    email: string;
    id: string;
  }[];
  status: "approved" | "rejected" | "pending";
  messages: {
    id: string;
    message: string;
    approval_status: {
      id: string;
      approval_status: "approved" | "rejected" | "pending";
    };
    user: string;
  }[];
}
