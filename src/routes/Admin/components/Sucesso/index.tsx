import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react";
import { useRouter } from 'next/router';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeModal: () => void;
  mensagem: string;
}

const Sucesso: React.FC<SuccessModalProps> = ({ isOpen, onClose, closeModal, mensagem }) => {
  const router = useRouter();

  const handleClose = () => {
    onClose();
    closeModal();
    router.push('/');
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered size='lg'>
      <ModalOverlay />
      <ModalContent>
        <ModalBody margin={7}>
          <Box textAlign="center" fontSize="4xl" color="green.500">
            Sucesso!
          </Box>
          <Box textAlign="center" fontSize="lg" mt="4">
            {mensagem}
          </Box>
        </ModalBody>
        <ModalFooter justifyContent="center" marginBottom={6}>
          <Button colorScheme="green" onClick={handleClose} width={120}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Sucesso;
