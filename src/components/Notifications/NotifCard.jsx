export default function NotificationCard(){
    return(
        <div className="flex px-4 py-3">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="justify-between flex">

                <p className="text-sm">
                  <strong>Zaki DA9an</strong> commented in
                  <span className="text-primary"> Dashboard V2</span>
                </p>
                </div>
                
                <p className="text-xs text-gray-400">Apr 14 · 21 comments</p>
              </div>
            </div>
    )
}