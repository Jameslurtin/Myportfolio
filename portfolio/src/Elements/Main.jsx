import React from 'react';
import image from './my profile photo.jpg';

function Main() {
    return (
        <div className="bg-black w-full h-full flex pb-3 gap-20">

            <div className="w-1/2 flex items-center justify-center p-10 ">
                <div className="text-xl text-white font-semibold space-y-4 max-w-md">
                    <p>
                        Hi, I am Jameslurtin Veeraraj. I am pursuing a Master’s in Software Engineering at EPITA School of Engineering, France(Paris).
                    </p>
                </div>
            </div>


            <div className="w-1/2 h-96 p-4 ">
                <img src={image} alt="Profile" className="w-96 h-96 object-cover p-6" />
            </div>

        </div>
    );
}

export default Main;
