import React from 'react';
import Swal from 'sweetalert2';

const Addcoffee = () => {

    const handleOnFormSubmit = (e) => {
        e.preventDefault();
        // const form = e.target;
        // const formData = new FormData(form)
        // const coffeeData = Object.fromEntries(formData.entries())
        // console.log(coffeeData)


        const name = e.target.name.value
        const supplier = e.target.supplier.value
        const category = e.target.category.value
        const chef = e.target.chef.value
        const taste = e.target.taste.value
        const price = e.target.price.value
        const photo = e.target.photo.value
        const newCoffees = { name, supplier, category, chef, taste, price, photo }
        
        // send server
        fetch(`http://localhost:3000/coffees`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffees)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        title: "coffee add successfull",
                        icon: "success",
                        draggable: true
                    });
                }
            })


    }
    return (
        <div className='p-24 border-2 border-pink-300 bg-[#ECFAE5]'>
            <div className='p-12 text-center border-2 border-amber-500 space-y-4'>
                <h1 className="text-5xl">ADD NEW COFFEE</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <section className="p-2 dark:text-gray-800 rounded-xl">
                <form onSubmit={handleOnFormSubmit} className=" w-full  p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">

                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 bg-[#ECFAE5] '>
                        <div >
                            <div>
                                <label htmlFor="name" className="block mb-1 ml-1 ">Name</label>
                                <input id="name" type="text" placeholder="Enter coffee name" required="" className="block w-full p-2  border-1 border-gray-500 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="supplier" className="block mb-1 ml-1">Quantity</label>
                                <input id="supplier" type="text" placeholder="Enter coffee supplier" required="" className="block w-full p-2   border-1 border-gray-500 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-1 ml-1">Category</label>
                                <input id="category" type="text" placeholder="Enter coffee Category" required="" className="block w-full p-2 border-1 border-gray-500 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </div>
                        </div>
                        {/*  */}
                        <div >
                            <div>
                                <label htmlFor="chef" className="block mb-1 ml-1">Chef</label>
                                <input id="chef" type="text" placeholder="Enter coffee chef" required="" className="block w-full p-2  border-1 border-gray-500 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="taste" className="block mb-1 ml-1">Taste</label>
                                <input id="taste" type="text" placeholder="Enter coffee taste" required="" className="block w-full p-2  border-1 border-gray-500 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-1 ml-1">Price</label>
                                <input id="price" type="text" placeholder="Enter coffee price" required="" className="block w-full p-2   border-1 border-gray-500 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </div>

                        </div>

                    </div>
                    <div className='bg-[#ECFAE5] my-8 '>
                        <label htmlFor="photo" className="block mb-1 ml-1">photo</label>
                        <input id="photo" type="text" placeholder="photo url" required="" className="block w-full p-2   border-1 border-gray-500 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div className='bg-[#ECFAE5]'>
                        <input type="submit" value='Add Coffee' className="block w-full  p-2 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 dark:bg-[#D2B48C]" />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Addcoffee;