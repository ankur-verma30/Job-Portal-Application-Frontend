import { Badge, Tabs } from "@mantine/core"
import JobDesc from "../JobDescription/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDescription = () => {
    return (
        <div className="mt-5 w-3/4 px-5">
            <div className="text-2xl font-semibold flex items-center">Software Engineer
                <Badge variant="light" color="brightSun.4" size="sm" ml="sm">Full Time</Badge>
            </div>
            <div className="text-mine-shaft-300 mb-5 font-medium">New York </div>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="overview">
                    <Tabs.List className="[&_button]:text-lg! [&_button]:font-semibold! [&_button[data-active='true']]:text-bright-sun-400! mb-5 ">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="overview" className="[&>div]:w-full">
                        <JobDesc edit/>
                    </Tabs.Panel>
                    <Tabs.Panel value="applicants">
                       <div className="flex flex-wrap mt-10 gap-5 mb-5 justify-around">
                        {
                            talents.map((talent, index) => (
                               index<4 && <TalentCard key={index} {...talent} posted />
                            ))
                        }
                       </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">
                         <div className="flex flex-wrap mt-10 gap-5 mb-5 justify-around">
                        {
                            talents.map((talent, index) => (
                               index<4 && <TalentCard key={index} {...talent} invited />
                            ))
                        }
                       </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default PostedJobDescription