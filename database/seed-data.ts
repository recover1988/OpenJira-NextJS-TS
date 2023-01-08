interface SeedData {
    entries: SeedEntry[]
}
interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}



export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiete: Lorem ipsum dolor, sit amet consectetur adipisicing.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'En-Progreso: Lorem ipsum dolor sit amet.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'Terminadas: Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            status: 'finished',
            createdAt: Date.now() - 3000000
        },
    ]
}