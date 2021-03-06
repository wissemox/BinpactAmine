import React from 'react'
import Carousel from 'react-elastic-carousel'
import CarouselMap from './Map/CarouselMap.jsx'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'

const Nouveaute = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 608, itemsToShow: 3 },
        { width: 700, itemsToShow: 4 },
        { width: 800, itemsToShow: 5 },
      ];
      const Array=[{
        Image:"dzadzzd"
      },{
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },]
    return (
        <Box className="m-100">
            <Box className="mt-10 mb-10 ResposiveText text-center	">
                <Typography className="colorBlue text-3xl ResposiveText font-medium" variant="p">Les nouveautés</Typography>
             </Box>
             <Container  className=" flex-center  ">
            <Carousel  breakPoints={breakPoints}>
            {Array.map((el)=><CarouselMap el={el}/>)}
            </Carousel>
            </Container>
        </Box>
    )
}

export default Nouveaute
