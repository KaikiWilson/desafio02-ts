import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from '../services/login';
import { Layout } from './Layout';

export const Card = () => {
  return(
    <ChakraProvider>
      <Layout>
        <Box minHeight='35vh' 
        backgroundColor='#9413dc' 
        padding='25px' display='flex' 
        justifyContent='center'
        margin='0'
        >
          <Box backgroundColor='#FFFFFF' 
          borderRadius='25px' 
          padding='15px' 
          width='max-content' 
          height='max-content' 
          >
            
            <Center padding='10px' margin='0px'>
              <h1>Faça o login</h1>
            </Center>
            
            <Input placeholder="email" type='email'/>
            <Input placeholder="password" type='password' />
            
            <Center>
              <Button textAlign='center' 
              onClick={login} 
              colorScheme='teal' 
              size='sm' 
              width='100%' 
              marginTop='5px'
              id='getButton'
              >
                Login
              </Button>
            </Center>
          
          </Box>
        </Box>
      </Layout>
    </ChakraProvider>
  )
}