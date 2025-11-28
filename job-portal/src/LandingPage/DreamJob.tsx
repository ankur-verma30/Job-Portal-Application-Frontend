import { Avatar, AvatarGroup, TextInput } from "@mantine/core"
import boyImage from "../assets/JobPortalResources/Boy.png"
import { IconSearch } from "@tabler/icons-react"
import Avatar1 from "../assets/JobPortalResources/avatar1.png"
import Avatar2 from "../assets/JobPortalResources/avatar2.png"
import Avatar3 from "../assets/JobPortalResources/avatar.png"
import Google  from "../assets/JobPortalResources/Icons/google.png"
const DreamJob = () => {
    return (
        <div className="flex items-center px-16 ">
            {/* left section */}
            <div className="flex flex-col w-[45%] gap-3" >
                <div className="text-6xl font-bold  leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                    Find your <span>dream</span> <span>job</span> with us
                </div>
                <div className="text-mine-shaft-200 text-lg">
                    Good Life begins with a good company. Start explore thousands of jobs in one place
                </div>
                <div className="flex gap-3 mt-5">
                    <TextInput className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100!"
                        variant="unstyled" label="Job Title" placeholder="Software Engineer" />

                    <TextInput className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft- [&_input]:text-mine-shaft-100!"
                        variant="unstyled" label="Job Type" placeholder="FullTime" />

                    <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch stroke={2} className="h-[85%] w-[85%]" />
                    </div>
                </div>
            </div>
            {/* right section */}
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-120 relative">
                    <img src={boyImage} alt="boy"/>
                        <div className="absolute -right-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md ">
                            <div className="text-center text-mine-shaft-100 mb-1 text-sm">10k+ got job</div>
                            <AvatarGroup>
                                <Avatar src={Avatar1}/>
                                <Avatar src={Avatar2}/>
                                <Avatar src={Avatar3}/>
                                <Avatar>+9k</Avatar>
                            </AvatarGroup>
                        </div>
                        <div className="absolute -left-5 w-fit top-[27%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
                            {/* top section */}
                            <div className="flex gap-2 items-center">
                                {/* image section */}
                                <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                                    <img src={Google} alt="google" />
                                </div>
                                {/* text section */}
                                <div className="text-sm text-mine-shaft-100">
                                    <div>Software Engineer</div>
                                    <div className="text-mine-shaft-200 text-xs">New York</div>
                                </div>
                            </div>
                            {/* normal section */}
                            <div className="flex justify-around gap-2 text-mine-shaft-200 text-xs">
                                <span> 1 day ago</span>
                                <span>120 Applicants</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default DreamJob