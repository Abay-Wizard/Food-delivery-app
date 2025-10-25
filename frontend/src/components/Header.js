const Header = ({ MenuOpener }) => {
  return (
    <div
      className='bg-[url("https://healthnewshub.org/wp-content/uploads/2024/03/Fast-Food-Restaurants.jpg")] 
                 mx-4 sm:mx-10 md:mx-20 lg:mx-40 
                 my-8 sm:my-12 md:my-20 
                 h-64 sm:h-80 md:h-96 
                 relative rounded-xl bg-cover bg-center'
    >
      <div className='absolute top-6 sm:top-10 left-4 sm:left-6 md:left-8 flex flex-col gap-3 sm:gap-4 md:gap-5 animate-fadeIn delay-200'>
  <h1 className='text-purple-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
    Order your favourite food here
  </h1>
  <p className='text-white text-sm sm:text-base md:text-lg lg:text-2xl font-semibold max-w-2xl'>
    You get the most delicious meals in our Restaurant. Go bite at a time.
  </p>
  <button
    onClick={MenuOpener}
    className='bg-rose-500 text-white px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-3xl text-sm sm:text-base md:text-lg w-1/4'
  >
    View Menu
  </button>
</div>

    </div>
  )
}

export default Header
