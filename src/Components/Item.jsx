import { Text, Button, Image, VStack} from '@chakra-ui/react'

const Item= ({ product}) => {

    return(
        <>
        <Text>{product.products}</Text>
        <Image src={product.image} width="200px"/>
        <Text>${product.price}</Text>
        <Button>Ver Detalle</Button>
        </>

    )
}
export { Item }