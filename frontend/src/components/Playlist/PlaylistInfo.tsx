import {
  Flex,
  Heading,
  Box,
  Text,
  Editable,
  EditablePreview,
  EditableInput,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import api from "../../api";
import { PointIcon } from "../Common/PointIcon";
import { FormOption } from "../Register/FormOption";
import { DefaultImage } from "./DefaultImage";

interface PlaylistProps {
  id: string;
  name: string;
  image: string;
  alt: string;
  description: string;
}

export function PlaylistInfo({
  id,
  name,
  image,
  alt,
  description
}: PlaylistProps) {

  const [isEditable, setIsEditable] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const nameRef = React.useRef(null);

  const handleSaveInformation = () => {
    api.patch(`/playlists/${id}`, {name: nameRef.current.value});
    onClose();
  }
  function PlaylistNameModal(){
    return (<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent bgColor="#282828" color="white">
          <ModalHeader>Editar informações</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel fontWeight="bold">Nome da playlist</FormLabel>
            <Input ref={nameRef} ></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='green' onClick={() => handleSaveInformation()}>Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>);
  }
  return (
        <Box backgroundColor="linear-gradient(transparent 0, rgba(0,0,0.5) 100%) #fff">
          <Box
            padding="86px 32px 24px"
            maxWidth="100%"
            backgroundColor="rgb(32, 72, 48)"
            marginTop="-64px"
          >
            <Flex>
              <DefaultImage src={image} alt={alt}/>
              <Box color="white" width="auto" margin="18px 0 0 24px">
                <Text textTransform="uppercase" paddingTop="10px">
                  playlist
                </Text>
                <Heading margin="8px 0 12px" fontSize={["30px", "30px", "30px", "58px", "85px","98px"]} fontWeight="900" onClick={onOpen}>
                  {name}
                </Heading>
                <PlaylistNameModal/>
                <Text color="#b3b3b3">{description}</Text>

                <Text
                  paddingTop="8px"
                  fontSize="14px"
                  display="flex"
                  gap="4px"
                  alignItems="center"
                >
                  Spotify
                  <PointIcon /> {"N"} curtidas <PointIcon /> {"N"} músicas,{"Nh Nmin"}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
  );
}

