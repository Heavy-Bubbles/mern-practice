import { Box, Heading, Text, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";
import { useProductStore } from "../store/product";

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("gray.800")

    const {deleteProduct} = useProductStore()
    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid)
        if(!success){
            console.log("Success: ", success)
            console.log("Message: ", message)
          } else {
            console.log("Success: ", success)
            console.log("Message: ", message)
          }
    }

  return (
    <Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
		>
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
				{product.name}
			</Heading>

            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
				${product.price}
			</Text>

            <HStack spacing={2}>
				<IconButton colorScheme='blue'>
                    <FaEdit />
                </IconButton>
				<IconButton
					onClick={() => handleDeleteProduct(product._id)}
					colorScheme='red'
				>
                    <MdDelete />
                </IconButton>
			</HStack>
        </Box>
    </Box>
  )
}

export default ProductCard