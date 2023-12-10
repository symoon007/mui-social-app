import { AddAPhoto, DateRange, EmojiEmotions, Face5, Image, MoodBad, PersonAdd, SentimentDissatisfied, TagFaces, VideoCameraBack } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled,  } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material"; 

const CustomModal = styled(Modal) ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const UserBox = styled(Box) ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom:'20px'
    
})

const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <CustomModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://i.pinimg.com/originals/11/95/43/119543271d5593cac2c6ef972f708826.jpg"
              aria-label="recipe"
            ></Avatar>
            <Typography fontWeight={500} variant="span">
              Domino's Pizza
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="Write a Post..."
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </CustomModal>
    </>
  );
};

export default Add;
