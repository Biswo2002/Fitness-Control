import { Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {
    ScrollView,
    Pressable,
    Heading,
    Center,
    HStack,
    Image,
    Input,
    Icon,
    Text,
    Box,
} from 'native-base';
import { IMAGES } from '../../assets';

const Login = () => {
    const HEIGHT = Dimensions.get('window').height;
    const WIDTH = Dimensions.get('window').width;
    const [show, setShow] = useState(false);
    return (
        <Box bg={'#EFF0F5'} flex={1} safeAreaTop>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <HStack
                    justifyContent={'space-between'}
                    mx={5}
                >
                    <Box mt={5} >
                        <Heading
                            fontSize={'24'}
                            color={'violet.800'}
                        >
                            Fitness
                        </Heading>
                        <Heading
                            py={1}
                            fontSize={'32'}
                            color={'rose.700'}
                        >
                            You Wanna
                        </Heading>
                        <Heading
                            fontSize={'24'}
                            color={'green.600'}
                        >
                            Have
                        </Heading>
                    </Box>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/256/6124/6124517.png',
                        }}
                        width={WIDTH / 7}
                        resizeMode="contain"
                        height={HEIGHT / 8}
                        alt="LOGO"
                    />
                </HStack>
                <Center
                    pb={2}
                    my={4}
                >
                    <Image
                        source={IMAGES.BG}
                        width={WIDTH / 1}
                        // resizeMode="contain"
                        borderRadius={'50'}
                        height={HEIGHT / 2.5}
                        alt="LOGO"
                    />
                </Center>
                <Box
                    mx={4}
                    mt={4}
                    mb={8}
                    bg={'#fff'}
                    pb={12}
                    shadow={5}
                    rounded={32}
                >
                    <Text
                        bold
                        fontSize={'28'}
                        color={'#000'}
                        p={5}
                    >
                        Please Login
                    </Text>
                    <Input
                        variant={'underlined'}
                        InputLeftElement={
                            <Icon
                                size={7}
                                mr={4}
                                as={
                                    <Image
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/256/9502/9502813.png'
                                        }}
                                        alt='Email'
                                    />
                                } />
                        }
                        fontWeight={'bold'}
                        fontSize={'md'}
                        mx={5}
                        focusOutlineColor={'gray.300'}
                        backgroundColor={'#fff'}
                    />
                    <Input
                        variant={'underlined'}
                        InputLeftElement={
                            <Icon
                                size={7}
                                mr={4}
                                as={
                                    <Image
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/256/641/641693.png'
                                        }}
                                        alt='Email'
                                    />
                                } />
                        }
                        InputRightElement={
                            <Icon
                                size={7}
                                mr={4}
                                as={
                                    show ?
                                        <Image
                                            source={{
                                                uri: 'https://cdn-icons-png.flaticon.com/256/10812/10812267.png'
                                            }}
                                            alt='Email'
                                        />
                                        :
                                        <Image
                                            source={{
                                                uri: 'https://cdn-icons-png.flaticon.com/256/722/722358.png'
                                            }}
                                            alt='Email'
                                        />
                                } />
                        }
                        fontWeight={'bold'}
                        fontSize={'md'}
                        mx={5}
                        keyboardType='default'
                        keyboardAppearance='dark'
                        my={2}
                        focusOutlineColor={'gray.300'}
                        backgroundColor={'#fff'}
                        secureTextEntry
                    />
                    <HStack
                        justifyContent={'space-between'}
                        px={5}
                        py={2}
                    >
                        <Pressable
                            _pressed={{
                                opacity: 0.4
                            }}
                        >
                            <Text
                                fontSize={'sm'}
                                bold
                                color={'rose.600'}
                            >
                                Forgot Details?
                            </Text>
                        </Pressable>
                        <Pressable
                            _pressed={{
                                opacity: 0.4
                            }}
                        >
                            <Text
                                fontSize={'sm'}
                                bold
                                color={'violet.800'}
                            >
                                Create account
                            </Text>
                        </Pressable>
                    </HStack>
                </Box>
                <Pressable
                    _pressed={{
                        opacity: 0.4
                    }}
                >
                    <Center
                        bg={{
                            linearGradient: {
                                colors: ['blue.500', 'rose.800'],
                                start: [0, 1],
                                end: [1, 0]
                            }
                        }}
                        w={16}
                        h={16}
                        borderRadius={'full'}
                        position={'absolute'}
                        bottom={0}
                        right={16}
                    >
                        <Image
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/256/8213/8213402.png'
                            }}
                            size={'7'}
                            alt='LEFT'
                        />
                    </Center>
                </Pressable>
            </ScrollView>
        </Box>
    );
};

export default Login;

const styles = StyleSheet.create({});
