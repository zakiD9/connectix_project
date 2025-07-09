import SideBarMenu from "../components/layout/sideBarinfo";
import AccountSettings from "../components/SettingsComponent";
import { useAppNavigation } from "../store/navigationApp";
import { usePostStore } from "../store/postStore";


export default function SettingsPage(){
    const { onMenuSelect } = usePostStore();
     const { navigateTo } = useAppNavigation();
     const handleMenuSelect = (menu) => {
    onMenuSelect(menu);
    navigateTo(menu);
  };
    return(
        <div>
            <SideBarMenu onMenuSelect={handleMenuSelect} />
            <AccountSettings />
        </div>
    )
}