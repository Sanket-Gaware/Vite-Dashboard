import { AddCircleRounded, Message, Phone } from "@mui/icons-material";
import {
  MuiAvatar,
  MuiBox,
  MuiButton,
  MuiCard,
  MuiDivider,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import SearchComponent from "../../Dashboard/AppBar/SearchComponent";
import { Box, Grid, useTheme } from "@mui/material";
import { ContactsData } from "../../../Data/JsonData/EmployeeData";
import SearchBar from "./SearchBar";
import {
  CurrentPage,
  CurrentPage2,
  ReturnHomeCard,
} from "../Common/ReturnHome";

const groupContactsByLetter = (contacts) => {
  return contacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {});
};

const ContactsList = () => {
  const theme = useTheme();
  const groupedContacts = groupContactsByLetter(ContactsData);

  const sortedLetters = Object.keys(groupedContacts).sort();

  return (
    <div className="container-fluid">
      <div className="row">
        <ReturnHomeCard>
          <CurrentPage> Contacts List</CurrentPage>
          <CurrentPage2>List</CurrentPage2>
        </ReturnHomeCard>
        <MuiCard sx={{ width: "100%", p: 0 }}>
          <MuiBox className="d-flex justify-content-between mb-3 mt-3 px-3">
            <SearchBar />
            <MuiButton variant="contained" className="fw-bold">
              <AddCircleRounded className="me-1 fw-bold" /> Add
            </MuiButton>
          </MuiBox>
          <Grid container spacing={2} className="p-4">
            {sortedLetters.map((letter) => {
              return (
                <Grid item xs={12} key={letter}>
                  <MuiTypography
                    variant="h6"
                    className="fw-bold d-flex"
                    sx={{ textTransform: "uppercase", color: "#5e35b1" }}
                  >
                    {letter}
                  </MuiTypography>
                  {groupedContacts[letter].map((data, i) => (
                    <div className="mb-1">
                      <MuiDivider sx={{ my: 2 }} />

                      <Box
                        key={i}
                        className="d-flex align-items-center justify-content-between"
                      >
                        <Box className="d-flex gap-4 align-items-center">
                          <MuiAvatar src={data.image} />
                          <MuiBox className="text-start">
                            <MuiTypography className="fw-bold">
                              {data.name}
                            </MuiTypography>
                            <MuiTypography
                              sx={{
                                fontSize: "small",
                                color: "gray",
                                [theme.breakpoints.down("sm")]: {
                                  fontSize: "x-small",
                                },
                              }}
                            >
                              {data.role}
                            </MuiTypography>
                          </MuiBox>
                        </Box>
                        <Box
                          sx={{ gap: { xs: 1 } }}
                          className="d-flex justify-content-end"
                        >
                          <MuiButton
                            variant="outlined"
                            sx={{
                              marginRight: 2,
                              [theme.breakpoints.down("sm")]: {
                                marginRight: "0px",
                                padding: "4px 8px",
                                fontSize: "0.75rem",
                              },
                            }}
                          >
                            <Message
                              sx={{ fontSize: { xs: "small", md: "x-large" } }}
                            />
                          </MuiButton>
                          <MuiButton
                            variant="outlined"
                            color="secondary"
                            sx={{
                              marginRight: 2,
                              [theme.breakpoints.down("sm")]: {
                                marginRight: "0px",
                                padding: "5px 1px 5px 1px",
                                fontSize: "0.75rem",
                                width: "70%",
                              },
                            }}
                          >
                            <Phone
                              sx={{ fontSize: { xs: "small", md: "x-large" } }}
                            />
                          </MuiButton>
                        </Box>
                      </Box>
                    </div>
                  ))}
                </Grid>
              );
            })}
          </Grid>
        </MuiCard>
      </div>
    </div>
  );
};

export default ContactsList;
