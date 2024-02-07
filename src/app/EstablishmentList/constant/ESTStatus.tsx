export const statuses = [
    { nameEn: 'ALL',nameEr: 'ALL' },
    { nameEn: 'RED',nameEr: 'RED' },
    { nameEn: 'GREEN',nameEr: 'GREEN' },
    { nameEn: 'YELLOW',nameEr: 'YELLOW' },
];


export const statusesForESTSelect = () => statuses.map((status) =>
({
    option: status.nameEn,
    value: status.nameEn
}))