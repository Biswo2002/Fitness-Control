import {
    Animated,
    FlatList,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    VirtualizedList,
    Easing,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

import {
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
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const HEIGHT = Dimensions.get('window').height;
    const { navigate } = useNavigation<any>();
    const WIDTH = Dimensions.get('window').width;
    const [show, setShow] = useState(false);

    const images = [
        {
            id: '1',
            uri: 'https://img.freepik.com/free-vector/people-gym_52683-4075.jpg?w=996&t=st=1695493886~exp=1695494486~hmac=a3a0ddbc4deeb1465f6ce20523375daf1a07fccbd0bd4d159f1bf46587f142ed',
        },
        {
            id: '2',
            uri: 'https://img.freepik.com/free-vector/social-distance-gym_52683-41748.jpg?w=996&t=st=1695493934~exp=1695494534~hmac=9d43e1550277a944bf90281d15bd31320e570a617514baf72124d7f85c85fc7f',
        },
        {
            id: '3',
            uri: 'https://img.freepik.com/free-vector/young-man-exercising-fitness-gym-room-with-sport-equipment-workouts-guy-training-lifting-dumbbell-sitting-bench_575670-690.jpg?w=826&t=st=1695493990~exp=1695494590~hmac=d98fcf414b2492b6a75491b1659acf6b6494cdff5fdf1f758dba784bd2bbc7dc',
        },
        {
            id: '4',
            uri: 'https://img.freepik.com/premium-vector/people-exercising-fitness-gym-room-with-sport-equipment-workouts-with-woman-walking-treadmill-with-water-man-cycling-bike_575670-843.jpg?w=740',
        },
        {
            id: '5',
            uri: 'https://img.freepik.com/free-vector/couple-with-stroller-walking-suburban-cityscape-scene-modern-town-background-young-happy-man-woman-with-baby-horizontal-outdoor-recreation-scene_575670-2436.jpg?w=740&t=st=1695494042~exp=1695494642~hmac=c59c577ad680c58e42ab8c7cc04bc0831312af57b176a13ada5f40169482e56d',
        },
        // Add more images as needed
    ];
    const [currentPage, setCurrentPage] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList | null>(null);
    const scrollDuration = 1000;

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (flatListRef.current) {
                const newIndex = (currentPage + 1) % images.length;
                setCurrentPage(newIndex);
                flatListRef.current.scrollToIndex({
                    index: newIndex,
                    animated: true,
                });
            }
        }, scrollDuration);

        return () => clearInterval(scrollInterval);
    }, [currentPage]);



    const renderItem = ({ item, index }: { item: any; index: number }) => (
        <Center
            pb={2}
            m={4}
            key={item?.id}
        >
            <Image
                source={{ uri: item?.uri }}
                width={WIDTH / 1.08}
                resizeMode="contain"
                borderRadius={'50'}
                height={HEIGHT / 2.5}
                alt="BackGround"
            />
        </Center>
    );


    return (
        <Box bg={'#EFF0F5'} flex={1} safeAreaTop>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HStack justifyContent={'space-between'} mx={5}>
                    <Box mt={5}>
                        <Heading fontSize={'24'} color={'violet.800'}>
                            Fitness
                        </Heading>
                        <Heading py={1} fontSize={'32'} color={'rose.700'}>
                            You Wanna
                        </Heading>
                        <Heading fontSize={'24'} color={'green.600'}>
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
                <FlatList
                    ref={flatListRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    data={images}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    onScroll={(event) => {
                        const offsetX = event.nativeEvent.contentOffset.x;
                        const newIndex = Math.floor(offsetX / WIDTH / 1.08);
                        setCurrentPage(newIndex);
                    }}
                />

                <Center
                    flexDirection={'row'}
                >
                    {images.map((_, index) => (
                        <View
                            key={index}
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: index === currentPage ? 'blue' : 'gray', // Change colors as needed
                                margin: 4,
                            }}
                        />
                    ))}
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
                                onPress={() => setShow(!show)}
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
                </Box >
                <Pressable
                    _pressed={{
                        opacity: 0.2
                    }}
                    onPress={() => navigate('Home')}
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
            </ScrollView >
        </Box >
    );
};

export default Login;



