import Dropdown from "../components/Dropdown";
import {useState} from "react";


function DropdownPage () {

    const [selection, setSelected] = useState(null);

    const handleSelect = (newSelection) => {
        setSelected(newSelection);
    }



    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'}
    ]
    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleSelect} />
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    );
}

export default DropdownPage
