import React from 'react';


const Members = () => {
    return(
        <div className="bg-pink-600 text-white py-10 mt-16 w-full ml-0 mr-0">
        <h2 className="text-3xl font-bold">OUR MEMBERS ARE</h2>
        <div className="flex justify-around mt-8">
        <div className="text-center">
            <p className="text-5xl font-bold">70%</p>
            <p className="mt-2">Founders</p>
        </div>
        <div className="text-center">
            <p className="text-5xl font-bold">10%</p>
            <p className="mt-2">Investors</p>
        </div>
        <div className="text-center">
            <p className="text-5xl font-bold">15%</p>
            <p className="mt-2">Mentors</p>
        </div>
        <div className="text-center">
            <p className="text-5xl font-bold">5%</p>
            <p className="mt-2">Students</p>
        </div>
        </div>
        </div>
    )
}

export default Members;