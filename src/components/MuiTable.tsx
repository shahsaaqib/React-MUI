import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <>
      <TableContainer sx={{ maxHeight: "300px" }} component={Paper}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Ip Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.ip_address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer sx={{ maxHeight: "400px" }} component={Paper}>
        <Table stickyHeader aria-label="img table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemData.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  <img
                    src={`${row.img}?w=110&h=50&fit=crop&auto=format&dpr=2`}
                    alt={row.title}
                    loading="lazy"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Beret",
    last_name: "Lennard",
    email: "blennard0@pcworld.com",
    gender: "Female",
    ip_address: "213.196.192.52",
  },
  {
    id: 2,
    first_name: "Tera",
    last_name: "Choke",
    email: "tchoke1@theatlantic.com",
    gender: "Male",
    ip_address: "101.152.241.70",
  },
  {
    id: 3,
    first_name: "Lyn",
    last_name: "Bowart",
    email: "lbowart2@odnoklassniki.ru",
    gender: "Male",
    ip_address: "188.127.126.94",
  },
  {
    id: 4,
    first_name: "Bert",
    last_name: "Huckett",
    email: "bhuckett3@tinypic.com",
    gender: "Female",
    ip_address: "247.156.243.148",
  },
  {
    id: 5,
    first_name: "Drew",
    last_name: "Jenicke",
    email: "djenicke4@businessinsider.com",
    gender: "Male",
    ip_address: "0.185.35.172",
  },
  {
    id: 6,
    first_name: "Deloria",
    last_name: "Pepperill",
    email: "dpepperill5@meetup.com",
    gender: "Non-binary",
    ip_address: "101.44.39.120",
  },
  {
    id: 7,
    first_name: "Spense",
    last_name: "Ivashnyov",
    email: "sivashnyov6@hexun.com",
    gender: "Female",
    ip_address: "253.192.252.49",
  },
  {
    id: 8,
    first_name: "Elden",
    last_name: "Chaucer",
    email: "echaucer7@mozilla.com",
    gender: "Agender",
    ip_address: "60.70.120.186",
  },
  {
    id: 9,
    first_name: "Sholom",
    last_name: "Deetch",
    email: "sdeetch8@so-net.ne.jp",
    gender: "Female",
    ip_address: "218.36.95.147",
  },
  {
    id: 10,
    first_name: "Genovera",
    last_name: "Colby",
    email: "gcolby9@dagondesign.com",
    gender: "Non-binary",
    ip_address: "199.140.221.248",
  },
];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
