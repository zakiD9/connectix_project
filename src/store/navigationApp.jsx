import { useNavigate } from "react-router-dom";

export function useAppNavigation() {
  const navigate = useNavigate();

  const navigateTo = (menu) => {
    switch (menu) {
      case "feed":
        navigate("/");
        break;
      case "profile":
        navigate("/profile");
        break;
      case "messages":
        navigate("/messages");
        break;
        case "Support":
        navigate("/Support");
        break;
      default:
        break;
    }
  };

  return { navigateTo };
}