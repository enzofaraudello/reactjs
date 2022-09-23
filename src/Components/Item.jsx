import { Text, Button, Image, VStack} from '@chakra-ui/react'

const Item= ({ product}) => {

    return(
        <VStack>
        <Text>{product.products}</Text>
        <Image src={product.image}/>
        <Text>${product.price}</Text>
        <Button>Ver Detalle</Button>
        </ VStack>

    )
}
export { Item }