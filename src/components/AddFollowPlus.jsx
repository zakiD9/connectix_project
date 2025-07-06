export default function AddFollowPlus({followed=false}){

    return(
        <div>
        {followed ? (
            <button className=" text-2xl text-gray-400 rounded hover:text-primary-dark">
                +
            </button>):(<button className="ml-2">
                <svg className="w-5 h-5 text-gray-400 hover:text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>) }

        </div>
    )
}