import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import JobDesc from "../JobDescription/JobDesc"
const  JobDescription= () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs"/>
            <Link className="my-4 inline-block" to='/find-jobs'>
                <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="blue.4">Back</Button></Link>
            <div className="flex gap-5 ">
                <JobDesc/>
          </div>
        </div>
    )
}

export default JobDescription