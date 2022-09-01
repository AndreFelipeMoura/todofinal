import * as C from "@chakra-ui/react";

const FormPersonalDetails = () => {
  return (
    <C.VStack spacing={5}>
      <C.Input
        type="date"
        borderColor="yellow.700"
        placeholder="Data de Nascimento"
      />
      <C.Input type="number" borderColor="yellow.700" placeholder="CPF" />
      <C.Input
        type="number"
        borderColor="yellow.700"
        placeholder="Renda Mensal"
      />
    </C.VStack>
  );
};

export default FormPersonalDetails