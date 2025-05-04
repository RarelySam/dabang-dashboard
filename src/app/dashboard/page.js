import {SidebarItem} from "@/app/dashboard/SidebarItem";

export default function Home() {
    return (
        <div className="flex min-h-screen font-poppins">
            <aside className="w-64 bg-white p-6 text-indigo-950">
                <div
                    className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-lg p-2 hover:bg-gray-100">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="inline size-10"
                    />
                    <h1 className="inline text-2xl font-semibold">Dabang</h1>
                </div>
                <div className='flex flex-col justify-center gap-8'>
                    <nav className="mt-8 flex flex-col gap-3 px-2">
                        <SidebarItem Name='Dashboard' Icon='/dashboard.svg' Selected={true}/>
                        <SidebarItem Name='Leaderboard' Icon='/leaderboard.svg'/>
                        <SidebarItem Name='Order' Icon='/order.svg'/>
                        <SidebarItem Name='Products' Icon='/products.svg'/>
                        <SidebarItem Name='Sales Report' Icon='/sales-report.svg'/>
                        <SidebarItem Name='Messages' Icon='/messages.svg'/>
                        <SidebarItem Name='Settings' Icon='/settings.svg'/>
                        <SidebarItem Name='Sign Out' Icon='/sign-out.svg'/>
                    </nav>
                    <div
                        className="font-poppins py-8 text-white bg-[url(/pro-background.svg)] content-between bg-cover bg-no-repeat bg-center w-full h-56 rounded-2xl text-center mt-8 items-center justify-center flex flex-col gap-3">
                        <div className='flex w-full flex-col items-center justify-center'>
                            <img src="/pro-logo.svg" alt="pro-logo"/>
                            <div className='py-2 font-semibold'>Dabang Pro</div>
                            <div className='px-12 font-medium text-[10px]'>Get access to all features on Dabang</div>
                        </div>
                        <button
                            className='mt-2 cursor-pointer rounded-lg bg-white px-8 py-2 font-semibold text-indigo-500'>Get
                            Pro
                        </button>
                    </div>
                </div>
            </aside>

            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="flex items-center justify-between bg-white p-6 py-3 shadow-md text-indigo-950">
                    <div className='text-2xl font-semibold'>Dashboard</div>
                    <div className='flex w-full items-center justify-end gap-10'>
                        <div className='flex gap-2 rounded-xl bg-gray-50 p-2 px-4'><img src="/magnifier.svg"
                                                                                        alt="search"
                                                                                        className='inline'/> <input
                            type="text"
                            placeholder='Search here...'
                            className='inline placeholder-slate-500 focus:outline-none'/>
                        </div>
                        <div className='cursor-pointer rounded-xl p-3 font-semibold hover:bg-gray-50'><img
                            src="/United.svg" alt="en-us"
                            className='mx-2 inline'/> Eng (US) <img
                            src="/chevron-down.svg" alt="down" className='ml-2 inline'/></div>
                        <div className='flex'><img src="/notifications.svg" alt="notifications"
                                                   className='inline cursor-pointer rounded-xl'/>
                            <div
                                className='ml-3 flex cursor-pointer items-center justify-end gap-5 rounded-xl p-3 px-4 hover:bg-gray-50'>
                                <img src="https://i.ibb.co.com/1BdGN83/account-image.png" alt="profile picture"
                                     className='inline rounded-lg size-12'/>
                                <div className='font-poppins'>
                                    <div className='font-medium text-indigo-950'>Name</div>
                                    <div className='font-normal text-slate-500'>Rank</div>
                                </div>
                                <img src="/down-account.svg" alt="open" className='inline pl-6'/>
                            </div>
                        </div>
                    </div>
                </header>
                <main
                    className="flex-1 bg-gray-50 p-6 font-poppins">
                    <div
                        className="grid gap-6 overflow-scroll p-6 text-violet-950 grid-cols-8">
                        <div className="col-span-5 rounded-lg bg-gray-50 px-6 py-4 shadow-sm">
                            <div className='flex w-full'>
                                <div className='w-full'>
                                    <h2 className="mb-2 text-lg font-semibold">Today's Sales</h2>
                                    <h3 className='text-sm text-slate-500'>Sales Summery</h3></div>
                                <div className='flex w-full justify-end p-1 pr-6'>
                                    <button
                                        className='cursor-pointer rounded-lg border-2 border-slate-300 px-4 py-0 font-medium hover:bg-gray-100'>
                                        <img src="/export.svg" alt="icon" className='inline pr-1'/> Export
                                    </button>
                                </div>
                            </div>
                            <div className='grid grid-cols-4 gap-4 py-4'>
                                <div className='flex w-full flex-col gap-2 rounded-xl bg-rose-100 p-6'><img
                                    src="/sales-icon.svg" alt="icon" className='mb-2 size-12'/>
                                    <div className='text-2xl font-semibold text-indigo-950'>$1k</div>
                                    <div className='text-lg font-medium text-gray-600'>Total Sales</div>
                                    <div className='font-medium text-blue-500'>+8% from yesterday</div>
                                </div>
                                <div className='flex w-full flex-col gap-2 rounded-xl bg-orange-100 p-6'><img
                                    src="/order-icon.svg" alt="icon" className='mb-2 size-12'/>
                                    <div className='text-2xl font-semibold text-indigo-950'>300</div>
                                    <div className='text-lg font-medium text-gray-600'>Total Orders</div>
                                    <div className='font-medium text-blue-500'>+5% from yesterday</div>
                                </div>
                                <div className='flex w-full flex-col gap-2 rounded-xl bg-green-100 p-6'><img
                                    src="/product-icon.svg" alt="icon" className='mb-2 size-12'/>
                                    <div className='text-2xl font-semibold text-indigo-950'>5</div>
                                    <div className='text-lg font-medium text-gray-600'>Products Sold</div>
                                    <div className='font-medium text-blue-500'>+1.2% from yesterday</div>
                                </div>
                                <div className='flex w-full flex-col gap-2 rounded-xl bg-purple-100 p-6'><img
                                    src="/customer-icon.svg" alt="icon" className='mb-2 size-12'/>
                                    <div className='text-2xl font-semibold text-indigo-950'>8</div>
                                    <div className='text-lg font-medium text-gray-600'>New Customers</div>
                                    <div className='font-medium text-blue-500'>+0.5% from yesterday</div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-3 flex flex-col content-between gap-6 rounded-lg bg-gray-50 p-6 shadow-sm">
                            <h2 className="mb-2 text-lg font-semibold">Visitor Insights</h2>
                            <img src="/insights-graph.svg" alt="graph" className='h-full w-full'/>
                        </div>
                        <div
                            className="flex flex-col gap-6 rounded-lg bg-gray-50 p-6 shadow-sm col-span-4">
                            <h2 className="mb-2 text-lg font-semibold">Total Revenue</h2>
                            <img src="/sales-chart.svg" alt="graph" className='h-full w-full'/>
                        </div>
                        <div
                            className="flex flex-col gap-6 rounded-lg bg-gray-50 p-6 shadow-sm col-span-2">
                            <h2 className="mb-2 text-lg font-semibold">Customer Satisfaction</h2>
                            <img src="/satisfaction-graph.svg" alt="graph" className='h-full w-full'/>
                        </div>
                        <div
                            className="flex flex-col gap-6 rounded-lg bg-gray-50 p-6 shadow-sm col-span-2">
                            <h2 className="mb-2 text-lg font-semibold">Target vs Reality</h2>
                            <img src="/targetvsreality-chart.svg" alt="graph" className='h-full w-full'/>
                        </div>
                        <div
                            className="flex flex-col gap-6 rounded-lg bg-gray-50 p-6 shadow-sm col-span-4">
                            <h2 className="mb-2 text-lg font-semibold">Top Products</h2>
                            <img src="/products-chart.svg" alt="graph" className='h-full w-full'/>
                        </div>
                        <div
                            className="flex flex-col gap-6 rounded-lg bg-gray-50 p-6 shadow-sm col-span-2">
                            <h2 className="mb-2 text-lg font-semibold">Sales Mapping by Country</h2>
                            <img src="/country-graph.svg" alt="graph" className='h-full w-full'/>
                        </div>
                        <div
                            className="flex flex-col gap-6 rounded-lg bg-gray-50 p-6 shadow-sm col-span-2">
                            <h2 className="mb-2 text-lg font-semibold">Volume vs Service Level</h2>
                            <img src="/volumevsservice-chart.svg" alt="graph" className='h-full w-full'/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
