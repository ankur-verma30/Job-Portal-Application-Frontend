import { Button, Divider } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import ExperienceCard from "./ExperienceCard"
import CertificationsCard from "./CertificationsCard"

const Profile = (props: any) => {
    return (
        <div className="w-2/3">
            <div className="relative">
                <img className="rounded-t-2xl" src="JobPortalResources/Profile/banner.jpg" alt="banner" />
                <img className="rounded-full h-48 w-48 -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" src="JobPortalResources/avatar.png" alt="avatar" />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">{props.name}
                    <Button color="brightSun.4" variant="light" >Message</Button>
                </div>
                <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} />{props.role} &bull; {props.company}</div>
                <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
                </div>
            </div>
            <Divider mx="xs" size="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">About</div>
                <div className="text-sm text-mine-shaft-300 text-justify">{props.about}</div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">Skills</div>
                <div className="flex flex-wrap gap-2">
                    {props.skills.map((skill: any, index: number) => (
                        <div key={index} className="bg-bright-sun-300/15 rounded-3xl text-bright-sun-400 px-3 py-1  text-sm font-medium">{skill}</div>

                    ))}
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5">Experience</div>
               <div className="flex flex-col gap-8">
                 {props.experience.map((exp: any, index: number) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
               </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5">Experience</div>
               <div className="flex flex-col gap-8">
                 {props.certifications.map((certifications: any, index: number) => (
                    <CertificationsCard key={index} {...certifications} />
                ))}
               </div>
            </div>
        </div>
    )
}

export default Profile