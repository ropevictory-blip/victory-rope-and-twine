const TableSection = ({ data }) => {
  const table_data = data.filter((item) => Boolean(item?.value));

  return (
    <table
      className="table table-bordered mt-3"
      data-sal="slide-up"
      data-sal-duration="1200"
    >
      <tbody>
        {table_data.map((item, index) => (
          <tr key={index}>
            <td>{item?.label}</td>
            <td>{item?.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSection;
