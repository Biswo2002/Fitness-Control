import { StyleSheet } from 'react-native';
import React from 'react';
import {
    Box,
    Center,
    FlatList,
    HStack,
    Icon,
    Image,
    Input,
    Pressable,
    Row,
    Text,
} from 'native-base';
const date = [
    {
        id: '0',
        title: 'Daily',
        name: 'Steps',
        img: 'https://cdn-icons-png.flaticon.com/256/2202/2202112.png'
    },
    {
        id: '1',
        title: 'Weekly',
        name: 'Sleep',
        img: 'https://cdn-icons-png.flaticon.com/256/2202/2202112.png'
    },
    {
        id: '2',
        title: 'Monthly',
        name: 'Heart',
        img: 'https://cdn-icons-png.flaticon.com/256/2202/2202112.png'
    },
    {
        id: '3',
        title: 'Yearly',
        name: 'Calories',
        img: 'https://cdn-icons-png.flaticon.com/256/2202/2202112.png'
    },
];
const Home = () => {
    return (
        <Box bg={'#EFF0F5'} safeAreaTop flex={1}>
            <HStack justifyContent={'space-between'} m={4} alignItems={'center'}>
                <Pressable>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/256/9458/9458876.png',
                        }}
                        size={8}
                        alt="MENU"
                    />
                </Pressable>
                <Pressable>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/256/2202/2202112.png',
                        }}
                        size={8}
                        alt="MENU"
                    />
                </Pressable>
            </HStack>
            <Box m={4}>
                <Text fontSize={'md'} bold fontWeight={800} color={'#000'}>
                    My Activities
                </Text>
                <Input
                    variant={'rounded'}
                    my={4}
                    alignItems={'center'}
                    InputLeftElement={
                        <Icon
                            size={6}
                            ml={6}
                            alignItems={'center'}
                            as={
                                <Image
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/256/3128/3128287.png',
                                    }}
                                    alt="Email"
                                />
                            }
                        />
                    }
                    fontWeight={'bold'}
                    fontSize={'md'}
                    shadow={2}
                    focusOutlineColor={'gray.300'}
                    backgroundColor={'#fff'}
                    placeholderTextColor={'gray.800'}
                    placeholder="Search"
                />
            </Box>
            <Box mx={2}>
                <FlatList
                    data={date}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <Box
                            bg={index === 0 ? {
                                linearGradient: {
                                    colors: ['blue.600', 'gray.900'],
                                    start: [0, 1],
                                    end: [1, 0]
                                }
                            } : '#ffff'}
                            w={24}
                            alignItems={'center'}
                            justifyContent={'center'}
                            mx={2}
                            h={8}
                            rounded={'full'}
                        >
                            <Text fontSize={'sm'} bold fontWeight={800} color={index === 0 ? '#fff' : '#000'}>
                                {item?.title}
                            </Text>
                        </Box>
                    )
                    }
                // 9124042982
                />
            </Box>
            <Box
                mx={1}
                my={6}
            >
                <FlatList
                    data={date}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <Box
                            bg={index === 1 ? {
                                linearGradient: {
                                    colors: ['rose.600', 'blue.700'],
                                    start: [1, 0, 0],
                                    end: [0, 0, 1]
                                }
                            } : {
                                linearGradient: {
                                    colors: ['rose.100', 'blue.200'],
                                    start: [1, 0],
                                    end: [0, 1]
                                }
                            }}
                            w={'45%'}
                            mt={index === 3 ? '-13%' : 2}
                            p={4}
                            m={2}
                            h={index === 0 || index === 3 ? '56' : '40'}
                            rounded={'16'}
                            shadow={4}
                        >
                            <Row
                                justifyContent={'space-between'}
                                alignItems={'center'}
                            >
                                <Text fontSize={'sm'} bold color={index === 1 ? '#fff' : '#000'}>
                                    {item?.name}
                                </Text>
                                <Center
                                    bg={index === 1 ? '#ffff' :
                                        {
                                            linearGradient: {
                                                colors: ['rose.600', 'blue.900'],
                                                start: [1, 0],
                                                end: [0, 1, 0]
                                            }
                                        }
                                    }
                                    size={7}
                                    rounded={'full'}
                                >
                                    <Image
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/256/2202/2202112.png',
                                        }}
                                        size={5}
                                        alt="MENU"
                                    />
                                </Center>
                            </Row>
                            {
                                index === 1 &&
                                <Box mt={8} alignItems={'center'}>
                                    <Text fontSize={'sm'} bold color={'#fff'}>
                                        8:00
                                    </Text>
                                    <Text fontSize={'sm'} bold color={'#fff'}>
                                        Hours
                                    </Text>
                                </Box>
                            }
                            {
                                index === 0 &&
                                <Box mt={16} alignItems={'center'}>
                                    <Text fontSize={'sm'} bold color={'#000'}>
                                        2285
                                    </Text>
                                    <Text fontSize={'sm'} bold color={'#000'}>
                                        Steps
                                    </Text>
                                </Box>
                            }
                            {
                                index === 2 &&
                                <Box mt={8} alignItems={'center'}>
                                    <Text fontSize={'sm'} bold color={'#000'}>
                                        110
                                    </Text>
                                    <Text fontSize={'sm'} bold color={'#000'}>
                                        bpm
                                    </Text>
                                </Box>
                            }
                            {
                                index === 3 &&
                                <Box mt={16} alignItems={'center'}>
                                    <Text fontSize={'sm'} bold color={'#000'}>
                                        357
                                    </Text>
                                    <Text fontSize={'sm'} bold color={'#000'}>
                                        kcal
                                    </Text>
                                </Box>
                            }
                        </Box>
                    )
                    }
                // 9124042982
                />

            </Box >
            <HStack
                bg={'#ffff'}
                alignItems={'center'}
                justifyContent={'space-between'}
                mx={4}
                my={2}
                px={4}
                py={3}
                rounded={'10'}
                shadow={2}
            >
                <Text fontSize={'md'} bold fontWeight={800} color={'#000'}>
                    Daily Meals
                </Text>
                <Image
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/256/2202/2202112.png',
                    }}
                    size={8}
                    alt="MENU"
                />
            </HStack>
            <HStack
                bg={'#ffff'}
                alignItems={'center'}
                justifyContent={'space-between'}
                m={4}
                px={4}
                py={3}
                rounded={'10'}
                shadow={2}
            >
                <Text fontSize={'md'} bold fontWeight={800} color={'#000'}>
                    Other Information
                </Text>
                <Image
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/256/2202/2202112.png',
                    }}
                    size={8}
                    alt="MENU"
                />
            </HStack>
        </Box >
    );
};

export default Home;

const styles = StyleSheet.create({});
