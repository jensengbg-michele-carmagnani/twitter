import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Widgets = () => {
    return (
        <div className="px-2 mt-2 col-span-2 hidden lg:inline" >
            {/* Search*/}
            <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 ">
                <SearchIcon className="w-5 h-5 text-gray-400" />
                <input className="flex-1 outline-none bg-transparent" type="text" placeholder="Search Twitter" />
            </div>
            <TwitterTimelineEmbed

                sourceType="profile"
                screenName="saurabhnemade"
                options={{ height: 400 }}
            />

        </div>
    )
}

export default Widgets