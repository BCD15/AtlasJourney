function dados() {
    const cardItens = [
        {
            id: 1,
            text: 'Aventura',
            url: 'images/Aventura.webp',
        },
        {
            id: 2,
            text: 'Campo',
            url: 'images/Campo.webp',
        },
        {
            id: 3,
            text: 'Praias',
            url: 'images/Praias_1.webp',
        },
        {
            id: 4,
            text: 'Nacionais',
            url: 'images/Nacionais.png',
        },
        {
            id: 5,
            text: 'Internacionais',
            url: 'images/Internacionais.png',
        },
        {
            id: 6,
            text: 'Personalize Sua Viagem!',
            url: 'images/esfinge.png',
        },
    ];

    if (!localStorage.getItem("cardItens")) {
        localStorage.setItem("cardItens", JSON.stringify([cardItens]));
    }
}

dados();