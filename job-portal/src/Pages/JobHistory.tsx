import { Divider } from "@mantine/core"
import History from "../JobHistory/History"

const JobHistory = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs" />
            <div className="my-5">
                <History />
            </div>
        </div>
    )
}

export default JobHistory