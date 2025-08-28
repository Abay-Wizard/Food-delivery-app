const Header = ({MenuOpener}) => {
  return (
    <div className='bg-[url("https://healthnewshub.org/wp-content/uploads/2024/03/Fast-Food-Restaurants.jpg")] mx-40 my-20 h-96 relative border-none rounded-xl'>
        <div className='absolute top-10 left-5 flex items-start flex-col gap-5 animate-fadeIn delay-200'>
            <h1 className='text-green-500 text-5xl font-bold'>Order your favourite  food here</h1>
            <p className='text-white text-2xl font-semibold'>You get the most delicious meals in our Restaurant. Go bite at a time.</p>
            <button onClick={MenuOpener} className='bg-rose-500 text-white p-3 rounded-3xl'>View Menu</button>
        </div>
    </div>
  )
}

export default Header