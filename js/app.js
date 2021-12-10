const ul = document.getElementsByTagName('ul')[0]
let carName = document.getElementById('name')
let model = document.getElementById('model')
let price = document.getElementById('price')
let dealer = document.getElementById('dealer')
const div = document.getElementById('record')
const button = document.getElementsByTagName('button')[0]


const fruits = ['orange', 'banana', 'apple', 'mango', 'pineapple', 'strawberry']

const automobile = [{
        name: 'Nissan',
        model: '2007',
        price: 100500,
        dealer: 'Nsisong',
    },
    {
        name: 'Chevolet',
        model: '2014',
        price: 900000,
        dealer: 'Ediomo',
    },
    {
        name: 'Toyata',
        model: '2017',
        price: 1500000,
        dealer: 'Abasido',
    },
    {
        name: 'Rolls Royce',
        model: '2022',
        price: 150000000,
        dealer: 'Somebody',
    },

]
let position = 0
populateData()

for (let i = 0; i < fruits.length; i++) {
    let list = document.createElement('li')
    ul.appendChild(list)
    list.innerText = fruits[i]
}

button.addEventListener('click', () => {
    console.log("You clicked me!!!")
    populateData()

})

function populateData() {
    carName.innerText = `Name:   ${automobile[position].name}`
    model.innerText = `Model     ${automobile[position].model}`
    price.innerText = ` Price   ${automobile[position].price}`
    dealer.innerText = `Dealer     ${automobile[position].dealer}`
    if (position == 4) {
        div.innerText = "Sorry, you have reached the last record"
    }
    position++
}