import React from 'react'
import twitter from '../public/twitter-logo.png'
import {
    BellIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    HashtagIcon,
    UserIcon,
    HomeIcon
}
    from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
function
    Sidebar() {
    return (
        <div className="flex flex-col col-span-2">

            <img className='h-10 w-10' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png?20211104142029'} alt="" />
            <SidebarRow Icon={BellIcon} title='Notification' />
            <SidebarRow Icon={HashtagIcon} title='Hashtag' />
            <SidebarRow Icon={HomeIcon} title='Home' />
            <SidebarRow Icon={MailIcon} title='Message' />
            <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
            <SidebarRow Icon={CollectionIcon} title='List' />
            <SidebarRow Icon={UserIcon} title='Sign In' />
            <SidebarRow Icon={DotsCircleHorizontalIcon} title='More' />
        </div>
    )
}

export default
    Sidebar