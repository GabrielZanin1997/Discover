const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amout: -50000,
        date: '23/01/2021',
    },

    {
        id: 2,
        description: 'Criação de website',
        amout: 500000,
        date: '23/01/2021',
    },

    {
        id: 3,
        description: 'Internet',
        amout: -20000,
        date: '23/01/2021',
    },
]

const Transaction = {
    incomes() {

    },
    expence() {

    },
    total() {

    }
}

const DOM = {

    addTransaction(transaction, index) {
        console.log("cheguei aqui")
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
    },

     innerHTMLTransaction() {
        const html = `
            <td class="description">Luz</td>
            <td class="expense">R$ 500,00</td>
            <td class="date">23/01/2021</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
         `

         return html
    }
}

DOM.addTransaction()