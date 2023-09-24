import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, HStack, Image, Pressable } from 'native-base'

const Home = () => {
    return (
        <Box
            bg={'#EFF0F5'}
            safeAreaTop
            flex={1}
        >
            <HStack
                justifyContent={'space-between'}
                m={4}
            >
                <Pressable>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/256/9458/9458876.png' }}
                        size={8}
                        alt='MENU'
                    />

                </Pressable>
                <Pressable>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/256/2202/2202112.png' }}
                        size={8}
                        alt='MENU'
                    />

                </Pressable>
            </HStack>
        </Box>
    )
}

export default Home

const styles = StyleSheet.create({})