// TIPOS DE DADOS

// boolean (true/false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", 'foo')
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ["foo", "bar"]

let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
    white = "#fff",
    black = "#000",
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any;
coisa = [1];

// void (vazio)
function logger(): void {
    console.log('foo')
}

// null | undefined
let variable: null // não recomendado
type Bla = string | undefined

// never
function error(): never { // não tem retorno nenhum
    throw new Error("error");
}

// object (tudo aquilo que não é string, booleano ou número)
let cart: object

cart = {
    key: "fi"
}