import { observable, action } from 'mobx'
import { AsyncStorage } from 'react-native'
import b64 from 'base-64'

const latest_url = 'https://mt-server.herokuapp.com/api/v1/latest'
const manga_detail_url = 'https://mt-server.herokuapp.com/api/v1/manga'


export default class MangaAPI {
    @observable mangaLatestList = []
    @observable searchTerm = ''
    @observable isFetchingLatestLoading = false
    @observable isFetchingDetailManga = false
    @observable currentPage = 1
    @observable maxPage = 2
    @observable mangaDetail = {}

    constructor() {
        // await Promise.all([await this.fetchLatestManga()])
        // this.fetchLatestManga()
    }

    @action
    resetMangaDetail() {
        this.isFetchingDetailManga = true
        this.mangaDetail = {}
    }

    @action
    async fetchMangaDetail(title) {
        try {
            let res = await fetch(`${manga_detail_url}/${b64.encode(title)}`)
            let json = await res.json()

            this.mangaDetail = json
            this.isFetchingDetailManga = false
        }
        catch(error) {
            console.error(error)
        }
    }

    @action
    async fetchLatestManga(page = false) {
        try {
            if (this.currentPage === this.maxPage) {
                return
            }
            this.isFetchingLatestLoading = true
            let res = await fetch(`${latest_url}/${page ? this.currentPage + 1 : ''}`)
            let json = await res.json()

            this.maxPage = parseInt(json.page.maxPage, 10)
            this.currentPage = parseInt(json.page.currentPage, 10)
            this.mangaLatestList = page ? this.mangaLatestList : []
            for(let manga of json.data) {
                this.mangaLatestList.push(
                    new MangaLatest(manga.title, manga.url, manga.cover, manga.chapter, manga.date)
                )
            }
            this.isFetchingLatestLoading = false
        }
        catch(error) {
            console.error(error)
        }
    }
}

class MangaLatest {
    @observable title = ''
    @observable url = ''
    @observable cover = ''
    @observable chapter = ''
    @observable date = ''
    @observable key = ''

    constructor(_title, _url, _cover, _chapter, _date) {
        this.chapter = _chapter
        this.cover = _cover
        this.date = _date
        this.url = _url
        this.title = _title
        this.key = Math.random()
    }
}
