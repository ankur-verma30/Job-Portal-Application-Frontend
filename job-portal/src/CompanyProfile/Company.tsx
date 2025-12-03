import { Avatar, AvatarGroup, Divider, Tabs } from "@mantine/core"
import { IconMapPin } from "@tabler/icons-react"
import AboutComponent from "./AboutComponent"
import JobComponent from "./JobComponent"
import CompanyEmployeesComponent from "./CompanyEmployeesComponent"

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img className="rounded-t-2xl" src="JobPortalResources/Profile/banner.jpg" alt="banner" />
        <img className="rounded-3xl h-36 w-36 absolute  bg-mine-shaft-950 border-mine-shaft-950 border-8 -bottom-1/4 left-5 p-2" src="JobPortalResources/Icons/Google.png" alt="avatar" />
      </div>
      <div className="px-3 mt-12">
        <div className="text-3xl font-semibold flex justify-between">Google
          <AvatarGroup>
            <Avatar src="JobPortalResources/avatar.png" alt="it's me" />
            <Avatar src="JobPortalResources/avatar1.png" alt="it's me" />
            <Avatar src="JobPortalResources/avatar2.png" alt="it's me" />
            <Avatar>+10k</Avatar>
          </AvatarGroup>
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> San Francisco, CA
        </div>
        <Divider my="xl" />
        <div>
          <Tabs variant="outline" radius="lg" defaultValue="about">
            <Tabs.List className="[&_button]:text-lg! [&_button]:font-semibold! [&_button[data-active='true']]:text-bright-sun-400! mb-5 ">
              <Tabs.Tab value="about">About</Tabs.Tab>
              <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
              <Tabs.Tab value="employees">Employees</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="about"><AboutComponent /></Tabs.Panel>
            <Tabs.Panel value="jobs"><JobComponent/></Tabs.Panel>
            <Tabs.Panel value="employees"><CompanyEmployeesComponent/></Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Company