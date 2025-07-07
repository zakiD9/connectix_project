



export default function UserChatComp({isSelected,onClick,chat}){
    return(
        <div onClick={onClick} className={`flex justify-between items-center my-2 px-3 py-2 hover:bg-blue-50 rounded-lg cursor-pointer ${isSelected ? "bg-blue-100" : "hover:bg-gray-100"}`}>
  <div className="flex items-center">
    <img
      src="walo"
      alt="walo"
      className="w-10 h-10 rounded-full mr-3 object-cover border"
    />
    <div className="flex flex-col">
      <h2 className="text-sm font-semibold text-gray-900">Albert Flores</h2>
      <span className="text-xs text-gray-400">awlh gha bien ....</span>
    </div>
  </div>
  <div className="flex flex-col items-end gap-1">
    <span className="text-xs text-gray-500">5:05 pm</span>
    <div className="w-5 h-5 bg-primary text-white text-xs flex items-center justify-center rounded-full">
      3
    </div>
  </div>
</div>

    )
}