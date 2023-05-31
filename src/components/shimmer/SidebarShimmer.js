export const SidebarShimmer=(props)=>{
    const {loopInSidebar}=props
    return(
        <div className="border border-gray-200 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        {loopInSidebar?.map(item => (
          <div className="animate-pulse flex space-x-4 mt-7 pb-7">
            <div className="rounded-full bg-slate-300 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="h-6 bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

