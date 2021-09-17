/* eslint-disable react/prop-types */


const movieData = [
    {
        id:1,
        columnName: 'Год',
        columnData: '2014'
    },
    {
        id: 2,
        columnName: 'Страна',
        columnData: 'США, Великобритания, Канада'
    },
    {
        id: 3,
        columnName: 'Жанр',
        columnData: 'Фантастика, драма, приключения'
    },
    {
        id: 4,
        columnName: 'Слоган',
        columnData: '"Следующий шаг человечества станет величайшим"'
    },
    {
        id: 5,
        columnName: 'Режиссёр',
        columnData: 'Кристофер Нолан'
    },
    {
        id: 6,
        columnName: 'Сценарий',
        columnData: 'Джонатан Нолан, Кристофер Нолан'
    },
    {
        id: 7,
        columnName: 'Продюсер',
        columnData: 'Кристофер Нолан, Линда Обст, Эмма Томас'
    },
    {
        id: 8,
        columnName: 'Оператор',
        columnData: 'Хойте Ван Хойтема'
    },
    {
        id: 9,
        columnName: 'Композитор',
        columnData: 'Ханс Циммер'
    },
    {
        id: 10,
        columnName: 'Художник',
        columnData: 'Нэйтан Краули, Кенделл Эллиотт, Эггерт Кетилссон'
    },
    {
        id: 11,
        columnName: 'Монтаж',
        columnData: 'Ли Смит'
    },
    {
        id: 12,
        columnName: 'Бюджет',
        columnData: '$165 000 000'
    },
    {
        id: 13,
        columnName: 'Сборы в мире',
        columnData: '$677 896 797'
    },
    {
        id: 14,
        columnName: 'Сборы в России',
        columnData: '$26 192 066'
    },
    {
        id: 15,
        columnName: 'Возраст',
        columnData: '16+'
    }
]


let movData = movieData.map((items) => {
   return <p key={items.id}>
       <span className='columnName'>{items.columnName}</span>
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
    img: 'https://www.factroom.ru/wp-content/uploads/2015/08/61.png',
    alt: 'Постер фильма',
    dark: true,
    primary: true,
    darkText: false
}