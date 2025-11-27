import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Box from '@mui/material/Box'

//importando o caminho da foto da pasta assets
import FotoAutor from '../assets/imgAutor.jpg'

export default function Sobre() {
  //Define o estado 'likes' usando lazy initialization.
  const [likes, setLikes] = useState(() => {
    const salvou = window.localStorage.getItem('likes')
    //Se houver valor salvo no localStorage, converte para Number; caso contrário, inicia com 0
    return salvou ? Number(salvou) : 0
  })
  //useEffect utilizado para persistência de dados
  useEffect(() => {
    window.localStorage.setItem('likes', likes)
  }, [likes])

  function curtir() {
    setLikes(likes + 1)
  }

  return (
    //Foi coloca marginTop -30px e marginLeft -10px para ficar um alinhamento mais proximo do
    //que está na imagem dos itens da prova, foi colocado negativo para recuar um pouco pois 
    //a pagina ja possuia uma margin padrão
    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '-30px', marginLeft: '-10px'}}>
      
      {/*Titulo que se localizada fora do card */}
      <Typography variant="h4" gutterBottom>
        Sobre o autor
      </Typography>

      {/*Colocando um tamanho maximo para o card*/}
      <Card sx={{ maxWidth: 300 }}>
        
        {/*parte onde se localiza a foto do autor*/}
        <CardMedia          
          sx={{ height: 250 }} 
          image={FotoAutor}
          title="Foto de perfil do Autor"
        />
        
        <CardContent>
          {/*parte que se localiza o nome*/}
          <Typography gutterBottom variant="h5" component="div">
            Domingos Ferreira Alves
          </Typography>
          
          {/*Local onde se localiza o pequeno texto sobre o autor*/}
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sou estudante de Análise e Desenvolvimento de Sistemas, atualmente no 4° semestre. Apaixonado por tecnologia, com interesses em desenvolvimento de software e análise de dados, estou sempre em busca de novos desafios que me ajudem a aprender, evoluir profissionalmente e contribuir com soluções criativas e eficientes.
          </Typography>
        </CardContent>

        {/*CardActions com o botão*/}
        <CardActions>
          <Button 
            size="small" 
            variant="contained" 
            color="error"
            startIcon={<FavoriteIcon />} 
            onClick={curtir}
          >
            Curtir ({likes})
          </Button>
        </CardActions>

      </Card>
    </Box>
  )
}