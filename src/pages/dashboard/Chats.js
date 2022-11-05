import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge } from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { styled, alpha } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import React from 'react';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '&. MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: "",
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));



const ChatElement = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: 60,
                borderRadius: 1,
                backgroundColor: "#fff",
            }}
            p={2}
        >
       <StyledBadge>
          <Avatar src={faker.image.avatar()} />
        </StyledBadge> 
            



        </Box>
    );
};


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: 0,
    width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        //vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",
    },
}));


const Chats = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "100vh",
                width: 320,
                backgroundColor: "#F8FAFF",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            }}
        >
            <Stack p={3} spacing={2}>
                <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent="space-between">
                    <Typography
                        variant="h5"
                        color="#000">
                        Chats
                    </Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>
                <Stack sx={{ width: "100%" }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6" />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search..." />
                    </Search>
                </Stack>
                <Stack spacing={1}>
                    <Stack direction="row" alignItems={"center"} spacing={1.5}>
                        <ArchiveBox size={24} />
                        <Button>
                            Archive
                        </Button>
                    </Stack>
                    <Divider />

                </Stack>
                <Stack direction="column">
                    <ChatElement />
                </Stack>
            </Stack>


        </Box>
    )
}

export default Chats;
