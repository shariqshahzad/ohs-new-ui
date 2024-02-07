export const statuses = [
    { nameEn: 'VISIT', nameEr: 'VISIT' },
    { nameEn: 'NOT VISIT', nameEr: 'NOT VISIT' },
];


export const statusesForVisitSelect = () => statuses.map((status) =>
({
    option: status.nameEn,
    value: status.nameEn
}))