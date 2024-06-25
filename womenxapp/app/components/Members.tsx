import React from 'react';

const Members = () => {
    return (
        <div className="bg-pink-600 text-white py-10 mt-16 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">OUR MEMBERS ARE</h2>
            <div className="flex flex-wrap justify-around mt-8 px-4">
                <div className="text-center w-full sm:w-auto px-2 mb-4 sm:mb-0">
                    <p className="text-3xl sm:text-5xl font-bold">70%</p>
                    <p className="mt-2 text-base sm:text-lg">Founders</p>
                </div>
                <div className="text-center w-full sm:w-auto px-2 mb-4 sm:mb-0">
                    <p className="text-3xl sm:text-5xl font-bold">10%</p>
                    <p className="mt-2 text-base sm:text-lg">Investors</p>
                </div>
                <div className="text-center w-full sm:w-auto px-2 mb-4 sm:mb-0">
                    <p className="text-3xl sm:text-5xl font-bold">15%</p>
                    <p className="mt-2 text-base sm:text-lg">Mentors</p>
                </div>
                <div className="text-center w-full sm:w-auto px-2 mb-4 sm:mb-0">
                    <p className="text-3xl sm:text-5xl font-bold">5%</p>
                    <p className="mt-2 text-base sm:text-lg">Students</p>
                </div>
            </div>
        </div>
    );
}

export default Members;
