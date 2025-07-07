export default function SecondaryButton({children,...props }){
    return(
        <button className="bg-gray-100 px-4 py-2 text-primary rounded-full" {...props}>
                {children}
              </button>
    )
}