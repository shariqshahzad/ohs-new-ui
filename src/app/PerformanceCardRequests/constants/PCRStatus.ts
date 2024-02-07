export const statuses = [
    { nameEn: 'All', nameAr: 'الجميع' },
    { nameEn: 'Unassigned', nameAr: 'لم يتم تعيين مدقق' },
    { nameEn: 'Card Issued', nameAr: 'تم إصدار البطاقة ' },
    { nameEn: 'Rejected', nameAr: 'مرفوض' },
    { nameEn: 'Auditor Assigned', nameAr: "تم تعيين مدقق", },
    { nameEn: 'Auditor Finished', nameAr: "انتهى المدقق" },
    { nameEn: 'Inspector Assigned', nameAr: "تم تعيين مفتش" },
    { nameEn: 'Inspector Finished', nameAr: "المفتش انتهى" },
    { nameEn: 'Supervised', nameAr: "إشراف" }
];


export const statusesForSelect = () => statuses.map((status) =>
({
    option: status.nameEn,
    value: status.nameEn
}))