function dados() {
    const cardItens = [
        {
            id: 1,
            text: 'Aventura',
            url: 'Images/Aventura.webp',
        },
        {
            id: 2,
            text: 'Campo',
            url: 'Images/Campo.webp',
        },
        {
            id: 3,
            text: 'Praias',
            url: 'Images/Praias_1.webp',
        },
        {
            id: 4,
            text: 'Nacionais',
            url: 'Images/Nacionais.png',
        },
        {
            id: 5,
            text: 'Internacionais',
            url: 'Images/Internacionais.png',
        },
        {
            id: 6,
            text: 'Personalize Sua Viagem!',
            url: 'Images/esfinge.png',
        },
    ];

    if (!localStorage.getItem("cardItens")) {
        localStorage.setItem("cardItens", JSON.stringify([cardItens]));
    }
}

dados();
