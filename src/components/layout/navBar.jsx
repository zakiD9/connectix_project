import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import Button from '../button';
import RoundedInput from '../roundedinput';
import { searchUsers } from '../../services/userService';
import { useSearchStore } from '../../store/searchStore';
import { useEffect } from 'react';

const NavBar = () => {
const {query,setResults,setError,setLoading,setQuery}=useSearchStore();

 useEffect(() => {
    const delay = setTimeout(async () => {
      if (query.trim().length === 0) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const data = await searchUsers(query, 1, 10);
        setResults(data);
        setError("");
        console.log(data);
      } catch (err) {
        setError(err);
        setResults([]);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, 500); // Debounce delay

    return () => clearTimeout(delay);
  }, [query]);

  return(
  <nav className="w-full border-b flex items-center justify-between px-8 py-4 bg-white">
    {/* Search box */}
    <div className="flex  items-center w-1/2 max-w-md">
      <div className="relative w-full">
        <RoundedInput onChange={(e) => setQuery(e.target.value)} placeholder="Search for friends, groups, pages" />
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-700 absolute right-4 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
  </nav>
  )
};

export default NavBar;