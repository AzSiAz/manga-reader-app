import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react'
import { List, ListItem, Grid, Col } from 'react-native-elements'

const defaultImage = require('../../../assets/images/manga_cover.jpg')

@inject('MangaAPI')
@observer
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this._handleRefresh = this._handleRefresh.bind(this)
        this._handleLoadMore = this._handleLoadMore.bind(this)
        this._renderFooter = this._renderFooter.bind(this)
    }

    async componentWillMount() {
        await this.props.MangaAPI.fetchLatestManga()
    }

    componentDidMount() {}

    render() {
        let manga = this.props.MangaAPI

        return (
            <Grid containerStyle={styles.container}>
                <FlatList
                    numColumns={3}
                    keyExtractor={item => item.key}
                    data={manga.mangaLatestList}
                    onRefresh={this._handleRefresh}
                    refreshing={manga.isFetchingLatestLoading}
                    onEndReached={this._handleLoadMore}
                    onEndReachedThreshold={50}
                    ListFooterComponent={this._renderFooter}
                    renderItem={({ item }) => (
                        <MangaViewSingle
                            navigation={this.props.navigation}
                            manga={item}
                        />
                    )}
                />
            </Grid>
        )
    }

    _renderFooter() {
        if (!this.props.MangaAPI.isFetchingLatestLoading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator color='white' animating size="large" />
            </View>
        );
    }

    async _handleRefresh() {
        await this.props.MangaAPI.fetchLatestManga()
    }

    async _handleLoadMore() {
        await this.props.MangaAPI.fetchLatestManga(true)
    }
}


const MangaViewSingle = observer(({manga, navigation}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('MangaDetail', {manga: manga})}
            style={styles.MangaViewContainer}
        >
            <View style={styles.MangaViewContainer}>
                <Col size={25}>
                    <Image
                        source={{uri: manga.cover}}
                        style={{width: 110, height: 160}}
                    />
                    <Text style={{color: 'white',}} numberOfLines={2}>
                        {manga.title}
                    </Text>
                </Col>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    MangaViewContainer: {
        flex: 1,
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
        width: 100,
        marginTop: 5,
        marginBottom: 10
    },
    container: {
        backgroundColor: '#2c3e50'
        // marginTop: 10,
    },
})

export default Home

// <ListItem
// roundAvatar
// avatar={{ uri: item.cover }}
// title={item.title}
// subtitle={`Chapter ${item.chapter}`}
// />