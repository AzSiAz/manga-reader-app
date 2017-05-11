import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native'
import { observer, inject } from 'mobx-react'
import { Divider, Text as EText } from 'react-native-elements'


@inject('MangaAPI')
@observer
class Detail extends React.Component {

    async componentWillMount() {
        this.props.MangaAPI.resetMangaDetail()
        await this.props.MangaAPI.fetchMangaDetail(this.props.navigation.state.params.manga.title)
    }

    render() {
        let manga = this.props.MangaAPI.mangaDetail
        let mangaHeader = this.props.navigation.state.params.manga
        if (this.props.MangaAPI.isFetchingDetailManga) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2c3e50'}}>
                    <ActivityIndicator color='white' animating size="large" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.latestContainer}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white',}}>
                            Latest Chapter added: {mangaHeader.chapter}
                        </Text>
                        <Text style={{color: 'white',}}>
                            Date: {mangaHeader.date}
                        </Text>
                    </View>
                </View>
                <Divider style={{ backgroundColor: 'black' }}/>
                <View style={{ backgroundColor: '#2c3e50', height: 550}}>
                    <ScrollView>
                        <View style={styles.detailContainer}>
                            <Image
                                source={{uri: manga.cover}}
                                style={{width: 100, height: 150}}
                            />
                            <Text numberOfLines={3} ellipsizeMode='tail' style={styles.mangaTitle}>
                                {manga.title}
                            </Text>
                        </View>
                        <Divider style={{ backgroundColor: 'black', marginTop: 5, marginBottom: 5 }}/>
                        <View>

                            <Text style={{color: 'white'}}>
                                {manga.author[0].name}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 100,
        // flexDirection: 'column'
    },
    latestContainer: {
        height: 50,
        backgroundColor: '#34495e'
    },
    detailContainer: {
        flex: 1,
        width: 100,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 15
    },
    mangaTitle: {
        fontSize: 20,
        width: 250,
        color: 'white',
        marginLeft: 15
    }
})

export default Detail
