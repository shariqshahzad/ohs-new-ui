const getRandomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};


export const getRandomVisitData = (): any[] => {
    const arrayOfObjects = [];

    for (let i = 0; i < 5; i++) {
        arrayOfObjects.push({
            EstablishmentName: `Estabishment ${i + 1}`,
            VisitStatus: Math.random() < 0.5 ? 'VISIT' : 'NOT VISIT',
            EstablishmentEconomicActivity: Math.random() < 0.5 ? 'Football' : 'Cricket',
            VisitDate: getRandomDate().toISOString().slice(0, 10),
        } as any);
    }
    return arrayOfObjects;
}



