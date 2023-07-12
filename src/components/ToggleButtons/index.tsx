import { ToggleButtonGroup, ToggleButton } from "@mui/material"
import { useState } from "react"


const ToggleButtons: React.FC = () => {
    const [units, setUnits] = useState('celsius');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        units: string,
    ) => {
        if (units !== null) {
            setUnits(units);
        }
    };

    return (
        <ToggleButtonGroup
            onChange={handleChange}
            value={units}
            aria-label="Units"
            size="small"
            exclusive
        >
            <ToggleButton value={'celsius'}>C°</ToggleButton>
            <ToggleButton value={'fahrenheit'}>F°</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ToggleButtons