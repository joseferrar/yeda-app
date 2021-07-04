import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Details = (props) => {
    const { data } = props.route.params;
    console.log(data)
    return (
        <View>
            <Text>Details</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})
