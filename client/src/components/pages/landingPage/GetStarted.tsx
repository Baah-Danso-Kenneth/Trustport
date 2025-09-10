

function GetStarted() {
  return (
    <div className='bg-secondaryColor mx:5  flex flex-col justify-center '>
      <div className='mx-10 py-10 md:mx-10  border-l border-r border-zinc-800'>
       <h1 className="font-bold text-4xl mb-5 dark:bg-custom-gradient font-poltwaski  text-center">Get started </h1>

       
<p className='font-poppins text-[20px] text-darkGrayHue mx-5 md:mx-32 md:inline-block justify-center lg:mx-60 dark:text-light'>
  Ready to simplify global trade? Join businesses and shippers using TrustStack 
  to send and receive payments for goods with speed and security. 
  No middlemen, no delays just seamless blockchain-powered transactions.
</p>

     

  <div className='flex flex-row justify-center mt-5 lg:mt-20'>
  <button 
    className="dark:text-light button-cutout dark:border-light l font-poppins capitalize py-3 sm:py-6 lg:py-3 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[20px] border text-dark border-dark shadow-none bg-primaryColor">
    create free account
  </button>
</div>

 </div>
      </div>
  )
}

export default GetStarted