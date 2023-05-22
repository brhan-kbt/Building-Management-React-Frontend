import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPricing } from '../state';
import { CheckIcon } from './icons/icons';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

const Pricing = () => {
    const dispatch = useDispatch();
    const router=useNavigate();
  
    const handlePricing=(plan)=>{
      dispatch(setPricing(plan));
  
     console.log(dispatch(setPricing(plan)));
  
     router('/register');
    }
    const plans = [
      {level:0, name: "Basic", price: 100000,features:['Property listing and management','Tenant management','Accounting and financial management','Maintenance and work order management','Document management'] },
      {level:1, name: "Advanced", price: 120000,features:['Property listing and management','Tenant management','Advanced accounting and financial management','Maintenance and work order management','Document management','Multiple property management','Customizable dashboards and reports','Lease management','Automated workflows'] },
      {level:2, name: "Enterprise", price: 120000,features:['Property listing and management','Tenant management','Advanced accounting and financial management','Maintenance and work order management','Document management','Multiple property management','Customizable dashboards and reports','Lease management','Automated workflows','Data analytics and insights','Integration with other software','Mobile app'] },
    ];
   
    const level0 = plans.filter(plan => plan.level === 0);
    const level1 = plans.filter((plan) => plan.level === 1);
    const level2 = plans.filter((plan) => plan.level === 2);
  return (
    <>
    <Navbar/>
        <div className="container px-6 py-24 mx-auto bg-white text-dark">

            <section className="mb-32 text-gray-800 relative">

                <div className=" text-center text-black z-0 space-y-5 mb-12">
                <p className="uppercase font-bold">Pricing</p>
                <h2 className="text-2xl md:text-3xl font-bold text-center">Choose the Plan that Works for You</h2>
                <h5 className="text-xl px-6 md:px-[180px] text-center">We offer flexible pricing plans to fit your needs. Select the plan that best suits your business or personal requirements.</h5>
                </div>

                <div className="grid lg:grid-cols-3 px-16 space-x-2 md:px-12 xl:px-32 z-10" >

                    {level0.map((plan, index) => (
                        <div key={index} className="p-0 py-12 flex-1">
                            <div className="block rounded-lg shadow-xl bg-white h-full lg:rounded-tr-none lg:rounded-br-none">
                            <div className="p-6 border-b border-gray-300 text-center">
                            <p className="uppercase mb-4 text-sm">
                                <strong>{plan.name}</strong>
                            </p>
                            <h3 className="text-2xl mb-6">
                                <strong>{plan.price.toLocaleString("en-ET", { style: "currency", currency: "ETB" })}</strong>
                                <small className="text-gray-500 text-sm">/year</small>
                            </h3>
                            <button type="button"   onClick={() => handlePricing(plan)}  className="inline-block px-6 py-2.5 bg-tertiary text-white font-bold text-l leading-tight uppercase rounded hover:text-blue-700 hover:bg-secondary focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-ripple-color="primary">
                                Buy
                            </button>
                            </div>
                            <div className="p-6">
                            <ol className="list-inside">
                                {plan.features.map(feature => (
                                <li className="mb-4 flex items-center" key={feature}>
                                    <CheckIcon className="text-primary w-4 h-4 mr-2" />
                                    {feature}
                                </li>
                                ))}
                        
                            </ol>
                        </div>
                        </div>                 
                        </div>
                    ))}

                    {level2.map((plan, index) => (
                        <div key={index} className="p-0 py-12 flex-1">
                        <div className="block rounded-lg shadow-xl shadow-secondary shadow-lg bg-white h-full">
                            <div className="p-6 border-b border-gray-300 text-center">
                            <p className="uppercase mb-4 text-sm">
                                <strong>{plan.name}</strong>
                            </p>
                            <h3 className="text-2xl mb-6">
                                <strong> {plan.price.toLocaleString("en-ET", { style: "currency", currency: "ETB" })}</strong>
                                <small className="text-gray-500 text-sm">/year</small>
                            </h3>
                            <button type="button"   onClick={() => handlePricing(plan)}  className="inline-block px-6 py-2.5 bg-secondary text-white font-bold text-l leading-tight uppercase rounded hover:text-blue-700 hover:bg-tertiary focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-ripple-color="primary">
                                Buy
                            </button>
                            </div>
                            <div className="p-6">
                            <ol className="list-inside">
                                {plan.features.map(feature => (
                                <li className="mb-4 flex items-center" key={feature}>
                                    <CheckIcon className="text-primary w-4 h-4 mr-2" />
                                    {feature}
                                </li>
                                ))}

                        
                            </ol>
                        </div>
                        </div>                  
                        </div>
                    ))}
                    
                    {level1.map((plan, index) => (
                        <div key={index} className="p-0 py-12 flex-1">
                        <div className="block rounded-lg shadow-xl bg-white h-full lg:rounded-tr-none lg:rounded-br-none">
                            <div className="p-6 border-b border-gray-300 text-center">
                            <p className="uppercase mb-4 text-sm">
                                <strong>{plan.name}</strong>
                            </p>
                            <h3 className="text-2xl mb-6">
                                <strong>{plan.price.toLocaleString("en-ET", { style: "currency", currency: "ETB" })}</strong>
                                <small className="text-gray-500 text-sm">/year</small>
                            </h3>
                            <button type="button"   onClick={() => handlePricing(plan)}  className="inline-block px-6 py-2.5 bg-tertiary text-white font-bold text-l leading-tight uppercase rounded hover:text-blue-700 hover:bg-secondary focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-ripple-color="primary">
                                Buy
                            </button>
                            </div>
                            <div className="p-6">
                            <ol className="list-inside">
                                {plan.features.map(feature => (
                                <li className="mb-4 flex items-center" key={feature}>
                                    <CheckIcon className="text-primary w-4 h-4 mr-2" />
                                    {feature}
                                </li>
                                ))}

                        
                            </ol>
                        </div>
                        </div>                  
                        </div>
                    ))}

                    
                {/* <div className="p-0">
                    <div className="block rounded-lg shadow-secondary shadow-lg bg-white h-full z-10">
                    <div className="p-6 border-b border-gray-300 text-center">
                        <p className="uppercase mb-4 text-sm">
                        <strong>Enterprise</strong>
                        </p>
                        <h3 className="text-2xl mb-6">
                        <strong>$ 499</strong>
                        <small className="text-gray-500 text-sm">/year</small>
                        </h3>

                        <button type="button" className="inline-block bg-secondary hover:bg-tertiary px-6 py-2.5  text-white font-bold text-l leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full">
                        Buy
                        </button>
                    </div>
                    <div className="p-6">
                        <ol className="list-inside">
                        <li className="mb-4 flex items-center">
                        <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                        Unlimited updates
                        </li>
                        <li className="mb-4 flex items-center">
                        <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                        Git repository
                        </li>
                        <li className="mb-4 flex items-center">
                        <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                        npm installation
                        </li>
                        <li className="mb-4 flex items-center">
                        <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                        Code examples
                        </li>
                        <li className="mb-4 flex items-center">
                        <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                        Premium snippets
                        </li>
                        <li className="mb-4 flex items-center">
                        <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                        Premium support
                        </li>
                        <li className="mb-4 flex items-center">
                        <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                        Drag&amp;Drop builder
                        </li>
                        </ol>
                    </div>
                    </div>
                </div> */}

                {/* <div className="p-0 py-12">
                    <div className="block rounded-lg shadow-lg bg-white h-full lg:rounded-tl-none lg:rounded-bl-none">
                    <div className="p-6 border-b border-gray-300 text-center">
                        <p className="uppercase mb-4 text-sm">
                        <strong>Advanced</strong>
                        </p>
                        <h3 className="text-2xl mb-6">
                        <strong>$ 299</strong>
                        <small className="text-gray-500 text-sm">/year</small>
                        </h3>

                        <button type="button" className="inline-block px-6 py-2.5 bg-tertiary text-white font-bold text-l leading-tight uppercase rounded  hover:bg-secondary focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"    data-mdb-ripple="true" data-ripple-color="primary">
                        Buy
                        </button>
                    </div>
                    <div className="p-6">
                        <ol className="list-inside">
                        <li className="mb-4 flex items-center">
                        <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                        Unlimited updates
                        </li>
                        <li className="mb-4 flex items-center">
                            <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                            Git repository
                        </li>
                        <li className="mb-4 flex items-center">
                            <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                            npm installation
                        </li>
                        <li className="mb-4 flex items-center">
                            <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                            Code examples
                        </li>
                        <li className="mb-4 flex items-center">
                            <CheckIcon className="text-primary w-4 h-4 mr-2"/>
                            Premium snippets
                        </li>
                        </ol>
                    </div>
                    </div>
                </div> */}
                </div>
            </section>

        </div>
    <Footer/>
    </>
    
  )
}

export default Pricing