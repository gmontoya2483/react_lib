import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {

    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5, spanish: 'Naranja'},
        {name: 'Apple', color: 'bg-red-500', score: 3, spanish: 'Manzana'},
        {name: 'Banana', color: 'bg-yellow-500', score: 1, spanish: 'Banana'},
        {name: 'Lime', color: 'bg-green-500', score: 4, spanish: 'Lima'},
    ]

    // render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
    const config = [
        {
            label: "Name",
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: "Color",
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,

        },
        {
            label: "Score",
            render: (fruit) => fruit.score,
            header: () => <th>Score</th>,
            sortValue: (fruit) => fruit.score
        },
        {
            label: "Spanish",
            render: (fruit) => fruit.spanish,
            header: () => <th>In spanish</th>
        },
    ]

    const keyFn = (fruit) => {
        return fruit.name;

    }

    return (
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-20'>
            <div>
                <Table config={config} data={data} keyFn={keyFn}/>
            </div>
            <div>
                <SortableTable config={config} data={data} keyFn={keyFn}/>
            </div>
        </div>
);

}

export default TablePage;
