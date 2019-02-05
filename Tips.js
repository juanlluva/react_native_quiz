import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class Tips extends React.Component {
    render() {
        return (
            <View style={styles.tips}>
                <Text style={styles.title}> Tips </Text>
                {this.props.tipsList.length > 0 ? (
                    <FlatList
                        style={styles.tiplist}
                        data={this.props.tipsList}
                        keyExtractor = {(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.tip}>{item}</Text>
                            </View>
                        )}
                    />
                ) : (
                        <Text style={styles.defaultMsg}>There are no available tips for this question</Text>
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tips: {
        // flex: 1,
        alignSelf: "stretch",
        justifyContent: "flex-end",
        flexDirection: 'column',
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        alignSelf: 'center',
    },
    tiplist: {
        marginTop: 10,
        // backgroundColor: '#00cec9',
        alignSelf: 'stretch',
        height: 60
    },
    item: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // height: 40,
        // padding: 5
    },
    tip: {
        fontSize: 14,
    },
    defaultMsg: {
    	alignSelf: 'center',
        paddingTop: 10,
        height: 60,
        fontSize: 14
    }
})