import React from 'react';
function Footer() {
    return (
        <footer class="p-2 bg-white border rounded-sm md:px-4 md:py-6">
            <div class="sm:flex sm:items-center sm:justify-center px-10 mb-5">
                <span class="block text-black px-10 sm:text-center hover:text-blue-400">Home</span>
                <span class="block text-black px-10 sm:text-center hover:text-blue-400">My Works</span>
                <span class="block text-black px-10 sm:text-center hover:text-blue-400">About Us</span>
                <span class="block text-black px-10 sm:text-center hover:text-blue-400">Contact Us</span>
            </div>
            <div class="sm:flex sm:items-center sm:justify-center">
                <p class="text-black m-2">Powered by:</p>
                <img src="/vite.svg" class="mr-2" alt="Vite logo" />
                <img src="./src/assets/react.svg" class="mr-2" alt="React logo" />
                <img src="./src/assets/logo-vercel.svg" class="w-10 mr-2" alt="Vercel logo" />
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span class="block text-sm text-black sm:text-center">© 2022 <span class="hover:underline">Kanacherry™</span>. All Rights Reserved.</span>
        </footer>
    )
}
 
export default Footer;