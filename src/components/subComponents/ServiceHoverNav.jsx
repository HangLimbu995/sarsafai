import React from 'react'
import NavItemsComponent from '../helpers/NavItemsComponent'



const ServiceHoverNav = () => {
    const serviceData = Services[0]

    return (
        <div className='service-dropdown w-full max-h-[70vh] absolute top-[50px] left-0 flex justify-center p-4 bg-white' style={{zIndex:9}}>
            <div className='w-[80%] py-4 px-6  flex justify-between gap-4 '>
                <div className='w-full '>
                    <div className='text-[20px] m-2 font-[700] capitalize'>
                        commercial cleaning service
                    </div>
                    <div className='mt-6 ml-3'>
                    
                        {serviceData && serviceData.commercial && (
                            serviceData.commercial.map((item, index) => (
                                <NavItemsComponent key={item + index} item={item} />
                            ))
                        )}
                    </div>
                </div>
                <div className='w-full'>
                    <div className='text-[20px] m-2 font-[700] capitalize'>residetial cleaning service</div>
                    <div className='mt-6 ml-3'>
                    {serviceData && serviceData.residential && (
                        serviceData.residential.map((item, index) => (
                            <NavItemsComponent key={item + index} item={item} />
                        ))
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Services = [
    {
        commercial: [
            'office regular & one time cleaning', 'mediacl cleaning services', 'school cleaning services', 'hospitality cleaning services','restaurant cleaning services','bank cleaning services'
        ],
        residential: ['House deep cleaning','sofa cleaning','carpet / galaicha cleaning','mattress cleaning','mave in / out cleaning','apartment deep cleaning']
    }
]

export default ServiceHoverNav