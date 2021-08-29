import {
  Box, Center, ChakraProvider, Grid, HStack, theme, useColorModeValue, VStack
} from "@chakra-ui/react"
import * as React from "react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { CustomButton } from "./components/button"
import { DisplayValue } from "./components/display-value"
import { useCounter } from "./hooks/counter"

export const App = () =>{ 
  const {count, increment, decrement, reset} = useCounter()
  const bg = useColorModeValue("gray.100", "gray.900")
  
  return(
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Center>
        <Box 
        p={6} 
        borderRadius={6}
        borderColor="gray.200" 
        background="bg" 
        borderWidth="1px" 
        maxWidth="2xl">
          <VStack spacing={6}>
          <DisplayValue valueLabel={count}/>
          <HStack spacing={2}>
              <CustomButton callback={decrement} label="Decrement" color="orange"/>
              <CustomButton callback={increment} label="Increment" color="green"/>
          </HStack>
           <CustomButton callback={reset} label="Reset" color="red"/>
           </VStack>
        </Box>
        </Center>
      </Grid>
    </Box>
  </ChakraProvider>
)}
