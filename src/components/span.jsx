export default function Span({ children, }) {
    return(
        <span className={`text-xs bg-blue-50 text-primary px-2 py-0.5 border border-gray-400 rounded-full`}>
            {children}
        </span>
    )
}