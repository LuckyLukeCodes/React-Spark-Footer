import {
  IoLocationOutline,
  IoTimeOutline,
  IoPhonePortraitOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
const contact = [
  {
    text: "123 Buckaroo Dr, Jameston, NY 12345",
    icon: <IoLocationOutline className="text-xl" />,
  },
  {
    text: "8:00 AM - 6:30 PM (Monday - Friday)",
    icon: <IoTimeOutline className="text-xl" />,
  },
  {
    text: "(123) 456-7890",
    icon: <IoPhonePortraitOutline className="text-lg" />,
  },
  {
    text: "something@domain.com",
    icon: <IoMailOpenOutline className="text-lg" />,
  },
];

export default contact;
