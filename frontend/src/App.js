import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const App = () => {
  return (
    <>
      {/* Шапка сайта */}
      <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Event CRM
          </Typography>
          <Button color="inherit">Войти</Button>
          <Button color="inherit">Регистрация</Button>
        </Toolbar>
      </AppBar>

      {/* Контент */}
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom align="center" style={{ fontWeight: 'bold', marginBottom: '40px' }}>
          Найдите лучших специалистов для вашего мероприятия
        </Typography>

        <Grid container spacing={4}>
          {/* Карточка Фотографов */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300x140.png?text=Фотографы"
                alt="Фотографы"
              />
              <CardContent>
                <Typography variant="h6">Фотографы</Typography>
                <Typography color="textSecondary">
                  Найдите лучших фотографов для вашего праздника.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Карточка Организаторов */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300x140.png?text=Организаторы"
                alt="Организаторы"
              />
              <CardContent>
                <Typography variant="h6">Организаторы</Typography>
                <Typography color="textSecondary">
                  Профессионалы для создания идеального мероприятия.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Карточка Музыкантов */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300x140.png?text=Музыканты"
                alt="Музыканты"
              />
              <CardContent>
                <Typography variant="h6">Музыканты</Typography>
                <Typography color="textSecondary">
                  Создайте атмосферу с лучшей музыкой.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
