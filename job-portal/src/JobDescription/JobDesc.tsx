import { ActionIcon, Button, Divider } from "@mantine/core"
import { IconBookmark } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { card, desc, skills } from "../Data/JobDescData"
import DOMPurify from "dompurify";

const JobDesc = (props: any) => {
    const data = DOMPurify.sanitize(desc);
    return (
        <div className="w-2/3">
            <div className="flex justify-between ">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14 " src={`/JobPortalResources/Icons/${props.company}.png`} alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-2xl">{props.jobTitle}</div>
                        <div className="text-lg text-mine-shaft-300 ">{props.company} &bull; 3 days ago &bull; {props.applicants} Applicants</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Link to="/apply-job">
                        <Button color="brightSun.4" size="sm" variant="light">Apply Now</Button>
                    </Link>
                    <IconBookmark stroke={1.5} className="text-bright-sun-400 cursor-pointer" />
                </div>
            </div>
            <Divider my="xl" />
            <div className="flex justify-between">
                {card.map((data: any, index: number) => (
                    <div key={index} className="flex flex-col items-center gap-1">
                        <ActionIcon color="brightSun.4" variant="light" radius="xl" aria-label="Settings" className="h-12! w-12!">
                            <data.icon className="h-4/5 w-4/5" stroke={1.5} />
                        </ActionIcon>
                        <div className="text-sm text-mine-shaft-300">{data.name}</div>
                        <div className="font-semibold">{data.value}</div>
                    </div>
                ))}
            </div>
            <Divider my="xl" />
            <div>
                <div className="text-xl font-semibold mb-5">Required Skills</div>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <ActionIcon key={index} color="brightSun.4" variant="light" radius="xl" p="xs" aria-label="Settings" className=" font-medium text-sm! h-fit! w-fit!">
                            {skill}
                        </ActionIcon>

                    ))}
                </div>
            </div>
            <Divider my="xl" />
            <div className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify **:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1" dangerouslySetInnerHTML={{ __html: data }}>
            </div>
            <Divider my="xl" />
            <div>
                <div className="text-xl font-semibold mb-5">
                    About Company
                </div>
                <div className="flex justify-between ">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-8 " src={`/JobPortalResources/Icons/${props.company}.png`} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-medium text-lg">Google</div>
                            <div className="text-base text-mine-shaft-300 ">10k+ Employees</div>
                        </div>
                    </div>
                        <Link to="">
                            <Button color="brightSun.4" size="sm" variant="light">Company Page</Button>
                        </Link>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur asperiores fuga, dolore ipsum necessitatibus eaque quia modi sunt pariatur in quos rerum distinctio odit quod voluptatum. Culpa praesentium nobis modi, harum tenetur placeat aspernatur?</div>
                </div>
            </div>
    )
}

export default JobDesc