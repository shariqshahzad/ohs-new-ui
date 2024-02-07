const getRandomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const getRandomScore = () => Math.floor(Math.random() * 100);

export const getRandomESTData = (): any[] => {
    const arrayOfObjects = [];

    for (let i = 0; i < 5; i++) {
        arrayOfObjects.push({
            issuedOn: `Estabishment ${i + 1}`,
            status:Math.random() < 0.5 ? 'Green' : 'Red',
            createdOn: getRandomDate().toISOString().slice(0, 10),
            expirationDate: getRandomDate().toISOString().slice(0, 10),
            performanceCardZone: getRandomScore()
        } as any);
    }
    return arrayOfObjects;
}



