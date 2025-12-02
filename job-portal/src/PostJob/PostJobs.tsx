import { Button, Select, TagsInput } from "@mantine/core"
import { fields } from "../Data/PostJob"
import RichEditor from "./RichEditor"
import { IconArrowLeft } from "@tabler/icons-react"

const PostJobs = () => {
    const select = fields
    return (
        <div className="w-4/5 mx-auto">
            <div className="font-2xl font-semibold" >Post a Job</div>
            <div className="mt-4 flex flex-col gap-5 [&_input]:font-medium">
                <div className="flex gap-10 *:w-1/2">
                    <Select data={select[0].options.map((option: string) => ({ value: option, label: option }))} label="Job Title" placeholder="Select Job Title" withAsterisk maxDropdownHeight={108} />
                    <Select
                        data={select[1].options.map((option: string) => ({
                            value: option,
                            label: option,
                        }))}
                        label="Company"
                        placeholder="Enter Company Name"
                        withAsterisk maxDropdownHeight={108}
                    />
                </div>
                <div className="flex gap-10 *:w-1/2">
                    <Select data={select[2].options.map((option: string) => ({ value: option, label: option }))} label="Job Title" placeholder="Select Job Title" withAsterisk maxDropdownHeight={108} />
                    <Select
                        data={select[3].options.map((option: string) => ({
                            value: option,
                            label: option,
                        }))}
                        label="Company"
                        placeholder="Enter Company Name"
                        withAsterisk maxDropdownHeight={108}
                    />
                </div>

                <div className="flex gap-10 *:w-1/2">
                    <Select data={select[4].options.map((option: string) => ({ value: option, label: option }))} label="Job Title" placeholder="Select Job Title" withAsterisk maxDropdownHeight={108} />
                    <Select
                        data={select[5].options.map((option: string) => ({
                            value: option,
                            label: option,
                        }))}
                        label="Company"
                        placeholder="Enter Company Name"
                        withAsterisk maxDropdownHeight={108}
                    />
                </div>
                <TagsInput label="Skills" placeholder="Enter Skills" clearable acceptValueOnBlur splitChars={[',', ' ', '|']} withAsterisk />
                <div className="[&_button[data-active='true']]:text-bringht-sun-400! [&_button[data-active='true']]:bg-bright-sun-400/20!">
                    <div className="text-sm font-medium">Job Description</div>
                    <RichEditor />
                </div>
                <div className="flex gap-4">
                    <Button color="brightSun.4" variant="light" >Publish Job</Button>

                    <Button color="brightSun.4" variant="outline" >Save as Draft</Button>
                </div>
            </div>
        </div>
    )
}

export default PostJobs