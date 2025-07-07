import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import ListMenu from '../PostMenuList';
import { usePostStore } from '../../store/postStore';

const TopOfPost = ({ avatar="mkanch", name="ras el oued ", role="salowat salowat",SelectedPostList }) => {
  const {setOnEdit}=usePostStore();
  return(<div className="flex items-center border-b  justify-between px-4 pt-4 pb-2">
    <div className="flex items-center">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <div className="font-semibold text-gray-800 text-sm">{name}</div>
        <div className="text-xs text-gray-500">{role}</div>
      </div>
    </div>
   <ListMenu  onClick={() => setOnEdit(SelectedPostList)} />
  </div>);
};

export default TopOfPost;