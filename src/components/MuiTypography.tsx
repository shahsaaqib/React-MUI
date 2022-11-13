import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1"> H1 Heading </Typography>
      <Typography variant="h2"> H2 Heading </Typography>
      <Typography variant="h3"> H3 Heading </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        {" "}
        H4 Heading{" "}
      </Typography>
      <Typography variant="h5"> H5 Heading </Typography>
      <Typography variant="h6"> H6 Heading </Typography>

      <Typography variant="subtitle1"> subtitle 1 Heading </Typography>
      <Typography variant="subtitle2"> subtitle 2 Heading </Typography>

      <Typography variant="body1">
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
        reiciendis vero odit illo sit error quisquam porro obcaecati ipsum ut
        deleniti vel nostrum maxime, dolore sapiente temporibus optio! Est,
        assumenda.
      </Typography>
      <Typography variant="body2">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quae?
        Hic nesciunt illo fugiat error neque reiciendis ratione ab perspiciatis?
        Facere alias, sunt nisi ullam illum eos vitae explicabo qui!
      </Typography>
    </div>
  );
};
