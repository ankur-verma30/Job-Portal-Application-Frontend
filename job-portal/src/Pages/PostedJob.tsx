import { Divider } from "@mantine/core";
import PostJob from "../PostedJobs/PostJob";
import PostedJobDescription from "../PostedJobs/PostedJobDescription";

const PostedJob = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
            <Divider size="xs" />
            <div className="flex gap-5 ">
                <PostJob/>
                <PostedJobDescription/>
          </div>
        </div>
    )
}

export default PostedJob