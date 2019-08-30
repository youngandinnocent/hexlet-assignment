/*
* Task:
*    Реализуйте функцию, которая принимает на вход директорию, приводит имена всех файлов в этой и
*    во всех вложенных директориях к нижнему регистру. Результат в виде обработанной директории
*    возвращается наружу. Экспортируйте по умолчанию функцию.
*
*    const tree = mkdir('/', [
*    mkdir('eTc', [
*        mkdir('NgiNx'),
*        mkdir('CONSUL', [
*        mkfile('config.json'),
*        ]),
*    ]),
*    mkfile('hOsts'),
*    ]);
*
*    downcaseFileNames(tree);
*    {
*    name: '/',
*    type: 'directory',
*    meta: {},
*    children: [
*        {
*        name: 'eTc',
*        type: 'directory',
*        meta: {},
*        children: [
*            {
*            name: 'NgiNx',
*            type: 'directory',
*            meta: {},
*            children: [],
*            },
*            {
*            name: 'CONSUL',
*            type: 'directory',
*            meta: {},
*            children: [{ name: 'config.json', type: 'file', meta: {} }],
*            },
*        ],
*        },
*        { name: 'hosts', type: 'file', meta: {}, },
*    ],
*    }
*/


// Soluiton:

const downcaseFileNames = (node) => {
    if (node.type === 'directory') {
        return { ...node, children: node.children.map(downcaseFileNames) };
    }
    return { ...node, name: node.name.toLowerCase() };
};
  
export default downcaseFileNames;
