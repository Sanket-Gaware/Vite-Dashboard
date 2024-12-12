import { mockDataTeam } from "../../../Data/JsonData/EmployeeData";
import Box from "@mui/material/Box";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";
const UsersTable = () => {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100000,
    editable: true,
  });

  return (
    <>
      <div className="container-fluid">
        <Box sx={{ height: 520, width: "100%" }}>
          <DataGridPro
            {...data}
            loading={loading}
            rowHeight={38}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </>
  );
};
export default UsersTable;
