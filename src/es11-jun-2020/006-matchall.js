const regex = /\b(Apple)+\b/g; //buscar la palabra apple en el string

const fruit = 'Apple, Banana, Apple, kiwi, orange, etc, etc, etc';

for (const match of fruit.matchAll(regex)){
    console.log(match);
}
/*
[
    'Apple',
    'Apple',
    index: 0,
    input: 'Apple, Banana, Apple, kiwi, orange, etc, etc, etc',
    groups: undefined
]
[
    'Apple',
    'Apple',
    index: 15,
    input: 'Apple, Banana, Apple, kiwi, orange, etc, etc, etc',
    groups: undefined
]
 */