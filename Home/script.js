function dados() {
    const cardItens = [
        {
            id: 1,
            text: 'teste',
            url: '#',
        },
        {
            id: 2,
            text: 'teste2',
            url: '#',
        },
        {
            id: 3,
            text: 'teste3',
            url: '#',
        },
        {
            id: 4,
            text: 'teste4',
            url: '#',
        },
        {
            id: 5,
            text: 'teste5',
            url: '#',
        },
        {
            id: 6,
            text: 'teste6',
            url: '#',
        },
    ];

    if (!localStorage.getItem("cardItens")) {
        localStorage.setItem("cardItens", JSON.stringify([cardItens]));
    }
}

dados();