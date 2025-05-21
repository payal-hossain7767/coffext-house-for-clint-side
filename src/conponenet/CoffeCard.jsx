import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const CoffeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, price, photo } = coffee;

    const handleDeleteForItem = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${_id}`, {

                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({

                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const rimiingCoffes = coffees.filter(cof => cof._id !== _id)
                            setCoffees(rimiingCoffes)
                        }

                    })

            }
        });
    }
    return (
        <div>
            <div>
                <div className="card card-side p-12 bg-[#ECFAE5] border-2 border-[#1DCD9F]">
                    <figure>
                        <img className='w-36' src={photo} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl">Name:{name}</h2>
                        <h2 className="card-title text-xl">Chaf:{chef}</h2>
                        <h2 className="card-title text-xl">Price:${price}</h2>
                    </div>
                    <div className="card-body space-y-4 ">
                        <div className='bg-[#90D1CA] p-8 m-3 rounded-xl btn'>
                            <Link to={`/coffee/${_id}`}><FaRegEye size={25} /></Link>
                        </div>
                        <div className='bg-[#9B7EBD] p-3 m-3 rounded-xl btn'>
                            <Link to={`/ubdatecoffee/${_id}`}><VscEdit size={25} /></Link>
                        </div>
                        <div onClick={() => handleDeleteForItem(_id)} className='bg-[#6FE6FC] p-3 m-3 rounded-xl btn'>
                            <RiDeleteBin2Fill size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;