import React from 'react';
function Profile(){
    return (
       <aside class="w-6/12 sm:w-4/12">
            <div class="sm:w-full mx-3 my-3 border border-sm rounded-lg">
                <div class="p-3 flex">
                    <img src="./src/assets/iroha.jpg" alt="profilePic" class="sm:w-4/12 mx-4 border rounded-full object-center"/>
                    <div>
                        <p class="pt-5">Kazama Iroha</p>
                        <p class="text-xs text-gray-400">@kazamairohach</p>
                    </div>
                </div>
                <hr />
                <div class="px-10 py-4 text-justify">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse magnam, in assumenda accusamus cumque similique saepe, dignissimos deserunt eligendi sequi nisi quia voluptatibus, atque itaque tempora fugiat beatae quo neque.</p>
                </div>
            </div>
            <div className='sm:w-full mx-3 my-3 border border-sm rounded-lg'>
                <h2 class="p-3 text-center">About Me</h2>
                <hr />
                <div class="px-10 py-4 text-justify">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel porro ducimus dolores magni quis quibusdam quidem asperiores sequi dolore.</p>
                </div>
            </div>
       </aside>
    )
}

export default Profile;