import {
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

const Loading = () => {
  return (
    <Box pt={2.5} pb={2.5}>
        <Container>
          <Box>
            <Typography
              mt={2}
              mb={2}
              variant="h3"
              align="center"
              sx={{
                color: '#111',
                fontWeight: 600,
                fontSize: 20,
              }}
            >
              LATEST PRODUCTS
            </Typography>
          </Box>
          <Stack mt={2} mb={8}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: '262px',
                    height: '262px',
                  }}
                ></Skeleton>
              </Grid>
              <Grid item xs={3}>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: '262px',
                    height: '262px',
                  }}
                ></Skeleton>
              </Grid>
              <Grid item xs={3}>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: '262px',
                    height: '262px',
                  }}
                ></Skeleton>
              </Grid>
              <Grid item xs={3}>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: '262px',
                    height: '262px',
                  }}
                ></Skeleton>
              </Grid>
            </Grid>
          </Stack>
        </Container>
    </Box>
  );
};

export default Loading;
