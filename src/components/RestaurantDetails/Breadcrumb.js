const Breadcrumb=({data})=>{
  const {name, areaName, city}=data
    return(
        <nav className="w-full rounded-sm text-[10px] text-gray-400 font-semibold">
        <ol className="list-reset flex">
          <li>
            <a
              href="#"
              className="hover:text-black"
            >
              Home
            </a>
          </li>
          <li>
            <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black"
            >
              {city}
            </a>
          </li>
          <li>
            <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black"
            >
              {areaName}
            </a>
          </li>
          <li>
            <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
          </li>
          <li className="text-gray-900">{name}</li>
        </ol>
      </nav>
    )
   
}

export default Breadcrumb;