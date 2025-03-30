import { useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";

const warringAlert = ({ message }) => {
  const [inVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return <div>WarningAlert</div>;
};
export default warringAlert;
