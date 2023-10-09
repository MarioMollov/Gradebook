import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { IconProps } from "../types";

const SignOutIcon = ({ className, onClick }: IconProps) => (
  <FontAwesomeIcon icon={faSignOut} className={className} onClick={onClick} />
);

export default SignOutIcon;
