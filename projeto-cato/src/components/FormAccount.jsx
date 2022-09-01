import * as C from "@chakra-ui/react";

const FormAccount = () => {
    return (
        <C.VStack spacing={5}>
           <C.Input type="text" borderColor="blue.700" placeholder="Nome" />
           <C.Input type="text" borderColor="blue.700" placeholder="Sobrenome" />
           <C.Input type="email" borderColor="blue.700" placeholder="Email" />
           <C.Input type="tel" borderColor="blue.700" placeholder="Telefone" />
                    </C.VStack>
    )
}

export default FormAccount;
