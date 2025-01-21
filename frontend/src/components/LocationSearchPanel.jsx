

// eslint-disable-next-line react/prop-types
const LocationSearchPanel = (props) => {
    console.log(props)
    let smapleLocations = [
        "Address 1",
        "Address 2",
        "Address 3",
        "Address 4",
        "Address 5",
    ]

    return (
        <div>
            {smapleLocations.map((value,index) => {
                return (
                   
                    <div key={index} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start' onClick={()=> props.SetVehicalPanel(true)}>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        {value}
                    </div>
                )
            })}
        </div>
    )
}

export default LocationSearchPanel
