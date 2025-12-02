import {  Divider } from "@mantine/core"
import PostJobs from "../PostJob/PostJobs"
const PostJobPage= () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs"/>
            <PostJobs/>
        </div>
    )
}

export default PostJobPage