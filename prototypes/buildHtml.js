/*
* Task:
*    Реализуйте и экспортируйте по умолчанию функцию buildHtml, которая возвращает строковое представление html.
*
*    const data = ['html', [
*    ['meta', [
*        ['title', 'hello, hexlet!'],
*    ]],
*    ['body', { class: 'container' }, [
*        ['h1', { class: 'header' }, 'html builder example'],
*        ['div', [
*        ['span', 'span text2'],
*        ['span', 'span text3'],
*        ]],
*    ]],
*    ]];
*
*    buildHtml(data);
*    <html>
*    <meta><title>hello, hexlet!</title></meta>
*    <body class="container">
*        <h1 class="header">html builder example</h1>
*        <div>
*        <span>span text2</span>
*        <span>span text3</span>
*        </div>
*    </body>
*    </html>
*
*    Подсказки
*        Для объединения массива в строку, используйте метод join(separator).
*        Эту задачу можно решить практически без единой условной конструкции используя полиморфизм на
*        основе объекта (ключ, значения).
*/


// Solution:

const propertyActions = [
    {
        name: 'body',
        check: arg => typeof arg === 'string',
    },
    {
        name: 'children',
        check: arg => arg instanceof Array,
    },
    {
        name: 'attributes',
        check: arg => arg instanceof Object,
    },
];
  
const getPropertyActions = arg => propertyActions.find(({ check }) => check(arg));
  
const buildAttrsAsString = attrs => Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

const buildHtml = (data) => {
    const [first, ...rest] = data;
    const root = {
        name: first,
        attributes: {},
        body: '',
        children: [],
    };
    const tag = rest.reduce((acc, arg) => {
        const { name } = getPropertyActions(arg);
        return { ...acc, [name]: arg };
    }, root);
    
    return [`<${tag.name}${buildAttrsAsString(tag.attributes)}>`,
        `${tag.body}${tag.children.map(buildHtml).join('')}`,
        `</${tag.name}>`].join('');
    };

export default buildHtml;
