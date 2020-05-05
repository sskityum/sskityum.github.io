export interface ISentences {
    source: string,
    cardUrl: string,
    likesNumber: number,
    text: string,
    winner: boolean,
    likesOld: number,
    signLikeCounterUpdate?: boolean
}

export const hdCardsData: ISentences[] = [
    {
        source: 'http://bygaga.com.ua',
        cardUrl: '../../vanillajs/img/quotes_pictures/kotik.svg',
        likesNumber: 0,
        text: 'Смешная картинка со смыслом - 1410266806_frazochki-kartinochki-pozitivchik-20.svg',
        winner: false,
        likesOld: 0
    },
    {
        source: 'http://kaifolog.ru',
        cardUrl: '../../vanillajs/img/quotes_pictures/buhgalter.svg',
        likesNumber: 0,
        text: 'Смешная картинка со смыслом - 1410757507_002.svg',
        winner: false,
        likesOld: 0
    },
    {
        source: 'http://kaifolog.ru',
        cardUrl: '../../vanillajs/img/quotes_pictures/peshehodi.svg',
        likesNumber: 0,
        text: 'Смешная картинка со смыслом - 1410757510_007.svg',
        winner: false,
        likesOld: 0
    },
    {
        source: 'https://pressa.tv',
        cardUrl: '../../vanillajs/img/quotes_pictures/izmenit.svg',
        likesNumber: 0,
        text: 'Смешная картинка со смыслом - 1478283714_25qt4fbqss4.svg',
        winner: false,
        likesOld: 0
    },
    {
        source: 'https://pressa.tv',
        cardUrl: '../../vanillajs/img/quotes_pictures/cherchil.svg',
        likesNumber: 0,
        text: 'Смешная картинка со смыслом - 1478283729_e7ciiey7fu4.svg',
        winner: false,
        likesOld: 0
    },
    {
        source: 'https://pressa.tv',
        cardUrl: '../../vanillajs/img/quotes_pictures/zarabotat.svg',
        likesNumber: 0,
        text: 'Смешная картинка со смыслом - 1478283768_0_g6duztxzi.svg',
        winner: false,
        likesOld: 0
    },
    {
        source: 'http://bygaga.com.ua',
        cardUrl: '../../vanillajs/img/quotes_pictures/vezenie.svg',
        likesNumber: 0,
        text: 'Смешная картинка со смыслом - 1350147044_pozitivnie_kartinki_so_smislom_527_29-12.svg',
        winner: false,
        likesOld: 0
    }
]
