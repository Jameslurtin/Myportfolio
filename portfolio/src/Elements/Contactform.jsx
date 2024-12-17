import React from 'react'

function Contactform({ Visible,onclose }) {
    if (!Visible) return null;
    return (
        <div>
            <div className='flex flex-col pt-7 bg-black text-white p-7 rounded-3xl bg-opacity-90 font-semibold  '>
                Emali:jameslurtin@gmail.com <br></br>
                phone no : 337808299271<br></br>
                whatsapp no: 9952271426<br></br>
                github link:
                <a
                    href="https://github.com/Jameslurtin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mt-2 block"
                >
                    https://github.com/Jameslurtin
                </a>

                Linked in :
                <a
                    href="https://www.linkedin.com/in/jameslurtin-veeraraj-a439231a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mt-2 block"
                >
                    https://www.linkedin.com/in/jameslurtin-veeraraj-a439231a7/
                </a><br></br>
                <div>
                    <button onClick={onclose} className='bg-red-600 p-2 pt-1 text-white rounded-2xl'>Close</button>
                </div>
            </div>

        </div>
    )
}

export default Contactform