import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    title: string
}

const SidebarRow: React.FC<Props> = ({ Icon, title }) => {
    return (
        <div className="flex items-center justify-start max-w-fit space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 group cursor-pointer">
            <Icon className="h-5 w-6" />
            <p className="hidden group-hover:text-twitter  md:inline-flex lg:text-xl">{title}</p>
        </div>
    )
}

export default SidebarRow