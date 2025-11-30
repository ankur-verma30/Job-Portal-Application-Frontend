import { Divider, Text } from "@mantine/core"
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react"

const JobCard = () => {
    return (
        <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl ">
            <div className="flex justify-between ">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7 " src="/JobPortalResources/Icons/Microsoft.png" alt="" />
                    </div>
                    <div>
                        <div className="font-semibold">Product Designer</div>
                        <div className="text-sm text-mine-shaft-300 ">Meta &#x2022; 25 Applicants</div>
                    </div>
                </div>
                <IconBookmark  className="text-mine-shaft-300 cursor-pointer"/>
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
                <div>Entry Level</div>
                <div>Full Time</div>
                <div>Remote</div>
            </div>
           <Text className="text-xs! text-justify text-mine-shaft-300!" lineClamp={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit consequuntur alias libero laborum aliquam, iste quod debitis accusantium inventore adipisci et.
           </Text>
           <Divider size="xs" color="mineShaft.7"/>
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">
                     &#8377; 24 LPA
                </div>
                <div className="flex gap-1 text-xs text-mine-shaft-400 items-center ">
                    <IconClockHour3 stroke={1.5} className="h-5 w-5"/> 12 days ago
                </div>
            </div>
        </div>
    )
}

export default JobCard