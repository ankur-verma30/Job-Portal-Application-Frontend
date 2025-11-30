import { Divider, MultiSelect, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import { IconSelector } from "@tabler/icons-react";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <div className="px-6 py-1 ">
            {/* Horizontal Divider ABOVE (optional) */}
            <Divider my="md" />

            <div className="mt-10 flex items-center gap-4 justify-between">
                {dropdownData.map((data, index) => (
                    <div key={index} className="flex items-center w-1/5 gap-4">
                        {/* MultiSelect */}
                        <MultiSelect
                            data={data.options}
                            label={data.title}
                            placeholder={`Select ${data.title}`}
                            variant="unstyled"
                            className="w-full"
                            searchable
                            hidePickedOptions
                            leftSection={
                                <data.icon className="text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full mr-2" />
                            }
                            rightSection={<IconSelector />}
                        />

                        {/* Vertical Divider (not after last item) */}
                        {index !== dropdownData.length - 1 && (
                            <Divider orientation="vertical" size="xs" />
                        )}
                    </div>
                ))}
                <Divider orientation="vertical" size="xs" />
                <div className="w-1/5 [&_.mantine-Slider-label]:translate-y-1!">
                    <div className="flex text-sm justify-between">
                        <div>Salary</div>
                        <div>&#8377;  {value[0]} LPA - &#8377;  {value[1]} LPA</div>
                    </div>
                    <RangeSlider labelTransitionProps={{
                        transition: 'skew-down',
                        duration: 150,
                        timingFunction: 'linear'
                    }}  color="brightSun.4" size="xs" value={value} onChange={setValue}  />
                </div>
            </div>

            {/* Horizontal Divider BELOW */}
            <Divider my="md" size="xs" />
        </div>
    );
};

export default SearchBar;
