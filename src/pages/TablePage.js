import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  // config describes the table columns
  // label is used to put inside the header
  // render is a function that returns values to put inside the table cells
  // sortValue (optional) is a function that returns a property to sort on
  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <p className="mt-5 mb-5">Table with sorted columns</p>
      <SortableTable data={data} config={config} keyFn={keyFn} />
      <p className="mt-10 mb-5">Simple table without sorting</p>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
