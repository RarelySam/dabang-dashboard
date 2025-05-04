export function SidebarItem({Name, Icon, Selected}) {
    return (
        <div className={`${Selected === true ? 'bg-indigo-500' : 'cursor-pointer text-slate-500 hover:bg-gray-50'} px-5 py-3 rounded-xl flex gap-4 items-center`}>
            <img src={Icon} alt={Icon} className='inline size-6'/>
            <div className={`inline ${Selected === true ? 'text-white font-semibold' : ''} text-sm`}>{Name}</div>
        </div>
    )
}