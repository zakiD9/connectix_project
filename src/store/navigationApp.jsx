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
      case "followers":
        navigate("/followers");
        break;
      case "messages":
        navigate("/messages");
        break;
      // Add more cases as needed
      default:
        break;
    }
  };

  return { navigateTo };
}