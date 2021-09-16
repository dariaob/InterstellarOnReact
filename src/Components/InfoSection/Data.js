const movieData = [
    {
        columnName: 'Год',
        columnData: '2014'
    },
    {
        columnName: 'Страна',
        columnData: 'США, Великобритания, Канада'
    },
    {
        columnName: 'Жанр',
        columnData: 'Фантастика, драма, приключения'
    },
    {
        columnName: 'Слоган',
        columnData: '"Следующий шаг человечества станет величайшим"'
    },
    {
        columnName: 'Режиссёр',
        columnData: 'Кристофер Нолан'
    },
    {
        columnName: 'Сценарий',
        columnData: 'Джонатан Нолан, Кристофер Нолан'
    },
    {
        columnName: 'Продюсер',
        columnData: 'Кристофер Нолан, Линда Обст, Эмма Томас'
    },
    {
        columnName: 'Оператор',
        columnData: 'Хойте Ван Хойтема'
    },
    {
        columnName: 'Композитор',
        columnData: 'Ханс Циммер'
    },
    {
        columnName: 'Художник',
        columnData: 'Нэйтан Краули, Кенделл Эллиотт, Эггерт Кетилссон'
    },
    {
        columnName: 'Монтаж',
        columnData: 'Ли Смит'
    },
    {
        columnName: 'Бюджет',
        columnData: '$165 000 000'
    },
    {
        columnName: 'Сборы в мире',
        columnData: '$677 896 797'
    },
    {
        columnName: 'Сборы в России',
        columnData: '$26 192 066'
    },
    {
        columnName: 'Возраст',
        columnData: '16+'
    }
]

// eslint-disable-next-line array-callback-return
let movData = movieData.map((items) => {
   return <p>
       {/* eslint-disable-next-line react/style-prop-object */}
       <span className='columnName'>{items.columnName}</span>
       {/* eslint-disable-next-line react/style-prop-object */}
       <span className='columnData'>{items.columnData}</span>
   </p>


})


export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'О фильме',
    headLine: 'О фильме',
    description: movData,
    buttonLabel: 'На главную',
    imgStart: false,
    img: require('../../images/Interstellar_2014.jpg'),
    alt: 'Постер фильма',
    dark: true,
    primary: true,
    darkText: false
}