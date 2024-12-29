import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent } from '@mui/material';

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Event CRM</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Найдите лучших специалистов для вашего мероприятия
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Фотографы</Typography>
                <Typography>Найдите лучших фотографов для вашего праздника.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Организаторы</Typography>
                <Typography>Профессионалы для создания идеального мероприятия.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Музыканты</Typography>
                <Typography>Создайте атмосферу с лучшей музыкой.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
