import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const App = () => {
  return (
    <>
      {/* Шапка сайта */}
      <AppBar position="static" style={{ background: 'linear-gradient(90deg, #1976d2, #42a5f5)' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 500 }}>
            Event CRM
          </Typography>
          <Button color="inherit" style={{ marginRight: '10px', textTransform: 'none' }}>Войти</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white', textTransform: 'none' }}>
            Регистрация
          </Button>
        </Toolbar>
      </AppBar>

      {/* Главный блок */}
      <Container style={{ marginTop: '40px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom style={{ fontWeight: 700, marginBottom: '20px' }}>
          Найдите лучших специалистов для вашего мероприятия
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '40px', color: '#555' }}>
          Мы помогаем вам найти профессионалов для любых мероприятий.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Карточки */}
          {['Фотографы', 'Организаторы', 'Музыканты'].map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={`https://via.placeholder.com/300x180.png?text=${category}`}
                  alt={category}
                />
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: 500 }}>{category}</Typography>
                  <Typography variant="body2" style={{ color: '#757575' }}>
                    {category === 'Фотографы' && 'Найдите лучших фотографов для вашего праздника.'}
                    {category === 'Организаторы' && 'Профессионалы для создания идеального мероприятия.'}
                    {category === 'Музыканты' && 'Создайте атмосферу с лучшей музыкой.'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;
