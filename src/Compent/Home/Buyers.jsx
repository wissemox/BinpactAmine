import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'

const Buyers = () => {
    return (
        <Box className="mt-10" style={{backgroundColor:"#F3F4F6" , height:"500px"}}>
            <Box className="font-bold	 text-3xl	text-center	 py-3">
            <Typography variant="p">Buyers about Product</Typography>
            </Box>
            <Box >
                <Box className="text-gray-400 pb-30 font-sans w-600 ml-30p text-center ">
                <Typography variant="p">Lorem ipsum dolor dit mer , consectetur adipisicing elit
                 , sed do iusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                 </Box>
            </Box>
            <Box  className="flex ml-20p  mt-10">
            <img className="mr-60 imageResponsive"  src="im1.png"/>
            <img className="mr-60 imageResponsive" src="im2.png"/>
            <img className="imageResponsive"  src="im3.png"/>
            </Box>
            <Box  className="flex ml-20p mt-10 font-bold pb-3	">
                <Typography className="pr-20" variant="p">James Thoornton </Typography>
                <Typography  className="pr-20" variant="p">James Thoornton </Typography>
                <Typography className="pr-20" variant="p">James Thoornton </Typography>

            </Box>
            <Box  className="flex ml-160 text-gray-400 mb-10 	">
                <Box  className=" text-center w-25	ml-4p f-14 	">
                    <Typography  variant="p"> Design is the method off putting
                        form and contentt together: there is no single deinition.
                        Design can be asethetics</Typography>
                  </Box>
                  <Box className=" pl-22  text-center w-25 ml-4p f-14">
                    <Typography variant="p"> Design is the method off putting
                        form and contentt together: there is no single deinition.
                        Design can be asethetics</Typography>
                  </Box>
                  <Box className=" w-25 text-center ml-70 f-14 	">
                    <Typography variant="p"> Design is the method off putting
                        form and contentt together: there is no single deinition.
                        Design can be asethetics</Typography>
                  </Box>
            </Box>
        </Box>
    )
}

export default Buyers
