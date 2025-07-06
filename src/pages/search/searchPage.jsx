import NavBar from "../../components/layout/navBar";
import { useSearchStore } from "../../store/searchStore";

const SearchComp = () => {
const {loading,error,results}=useSearchStore();

  return (
    <div className=" items-center ml-80 flex flex-col">
        <NavBar/>

      {loading && <p className="mt-2 text-sm">Loading...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {results.length > 0 && (
        <ul className="mt-3 border rounded-lg divide-y">
          {results.map((user) => (
            <div className="flex items-center py-2 border-b last:border-b-0">
              <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-3" />
              <div className="flex-1">
                <div className="font-medium text-gray-800 text-sm">{user.name}</div>
                <div className="text-xs text-gray-500">{user.username}</div>
              </div>
              <button className="ml-2">
                <svg className="w-5 h-5 text-gray-400 hover:text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComp;
