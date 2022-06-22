import React, { ReactNode } from "react";

import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    Icon,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MdAccountBalanceWallet } from 'react-icons/md'
import { useLocation } from 'wouter';
import { useActions, useAppState } from "../overmind";
const Links = ['Home', 'Page1'];

const NavLink: React.FC<any> = ({ children, handleClick }: { children: ReactNode, handleClick: any }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('red.200', 'red.300'),
        }}
        onClick={() => handleClick(children)}>
        {children}
    </Link>
);

export const Appbar: React.FC = () => {
    const state = useAppState();
    const actions = useActions()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [location, setLocation] = useLocation();
    const handleClick = (path: string) => {
        setLocation(`/${path.toLowerCase()}`)
    }

    const handleConnectWallet = () => {
        actions.addFunds()
    }
    return (
        <>
            <Box zIndex={900} position={"fixed"} top={0} left={0} width="100%" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack height={"100%"} spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink handleClick={handleClick} key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        {state.currentFunds > 0
                            ? <Button
                                variant={'solid'}
                                colorScheme={'red'}
                                size={'md'}
                                onClick={handleConnectWallet}
                                mr={4}>
                                {state.currentFunds} $
                            </Button>
                            : <Button
                                variant={'solid'}
                                colorScheme={'red'}
                                size={'md'}
                                mr={4}
                                onClick={handleConnectWallet}
                                leftIcon={<Icon as={MdAccountBalanceWallet} />}>
                                No Funds
                            </Button>
                        }
                    </Flex>
                </Flex>

                {
                    isOpen ? (
                        <Box pb={4} display={{ md: 'none' }}>
                            <Stack as={'nav'} spacing={4}>
                                {Links.map((link) => (
                                    <NavLink handleClick={handleClick} key={link}>{link}</NavLink>
                                ))}
                            </Stack>
                        </Box>
                    ) : null
                }
            </Box >
        </>
    );
}