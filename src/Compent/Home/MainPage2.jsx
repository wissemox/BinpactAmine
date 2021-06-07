import React from 'react'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'

const MainPage2 = () => {
    return (
        <Box style={{backgroundColor:"#F3F4F6"}} className=" flex mt-10">
            <Box className=" mb-10 mt-20p NavBarResposive">
                <img className="w-700" src="Imageda.png"/>
            </Box>
            <Box className="ml-10p">
               <Box   className="text-2xl	w-350   mt-100">
               <Typography  className="font-bold  " variant="p"> Pourquoi essayer le troc de Binpact</Typography>
               <Box>

                <Box style={{fontSize:"15px"}}  className=" w-380	 text-gray-400	">
                <Typography variant="p">Si vous ne trouvez pas votre place , 
                on vous en offre une !</Typography>
                </Box>
                <Box className="mt-20p">
                {/* 1 */}
                    <Box className="flex">
                        <Box className="mt-2 font-semibold">
                        <Typography style={{color:"#F1898C"}} className="text-4xl	" variant="p">1</Typography>
                        </Box>
                        <Box>
                            <Box className="ml-12" >
                        
                            <Typography className="text-sm font-semibold	" variant="p">Econmisez de l'argent</Typography>
                            
                            <Box   className=" w-400">
                                <Typography  className="text-xs	 text-gray-400	" variant="p">vous  allez pas toucher a votre 
                                purtelluile m a votre carte bancaire Vous faites des econimes 
                                les mois nous calcuilios pour vous la parevlue  </Typography>
                            </Box>
                            </Box>
                        </Box> 
                    </Box>

                    <Box className="flex mt-10">
                        <Box className="mt-2 ">
                        <Typography  style={{color:"#F1898C"}}  className="text-4xl font-semibold	" variant="p">2</Typography>
                        </Box>
                        <Box>
                            <Box className="ml-12" >
                        
                            <Typography className="text-sm font-semibold	" variant="p">Troquez avec toute confiance</Typography>
                            
                            <Box   className=" w-400">
                                <Typography  className="text-xs	text-gray-400	" variant="p">Des produits qui 
                                veinement des communutes reconcte des gens que vous 
                                connsainse pest étre qui ne peveés pas vous arnper nous validens qui les poduts
                                 de hauté qualité un scre est affecté a chaque produits et a chaque troueur  </Typography>
                            </Box>
                            </Box>
                        </Box> 
                    </Box>

                    <Box className="flex mt-10 mb-10 ">
                        <Box className="mt-2">
                        <Typography  style={{color:"#F1898C"}} className="text-4xl 	" variant="p">3</Typography>
                        </Box>
                        <Box>
                            <Box className="ml-12" >
                        
                            <Typography className="text-sm font-semibold	" variant="p">Troquez avec toute confiance</Typography>
                            
                            <Box   className=" w-400">
                                <Typography  className="text-xs text-gray-400		" variant="p">Des produits qui 
                                veinement des communutes reconcte des gens que vous 
                                connsainse pest étre qui ne peveés pas vous arnper nous validens qui les poduts
                                </Typography>
                            </Box>
                            </Box>
                        </Box> 
                    </Box>

                    <Box className="flex mt-10 mb-10 ">
                        <Box className="mt-2">
                        <Typography  style={{color:"#F1898C"}} className="text-4xl	" variant="p">4</Typography>
                        </Box>
                        <Box>
                            <Box className="ml-12" >
                        
                            <Typography className="text-sm font-semibold	" variant="p">Troquez avec toute confiance</Typography>
                            
                            <Box   className=" w-400">
                                <Typography  className="text-xs text-gray-400		" variant="p">Des produits qui 
                                veinement des communutes reconcte des gens que vous 
                                connsainse pest étre qui ne peveés pas vous arnper nous validens qui les poduts
                                </Typography>
                            </Box>
                            </Box>
                        </Box> 
                    </Box>

                </Box>
            </Box>
            </Box>
            </Box>
          
        </Box>
    )
}

export default MainPage2
