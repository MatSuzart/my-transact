const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
    const lightingProducts = [
        {
            id: 1,
            name: 'Low Bay LED 150W',
            price: 320.0,
            image: 'lowbay-150w.jpg',
            receipt: 'Iluminação industrial para áreas de médio pé-direito, alto rendimento luminoso'
        },
        {
            id: 2,
            name: 'Downlight Embutido 18W',
            price: 75.0,
            image: 'downlight-18w.jpg',
            receipt: 'Luminária LED para forros, ideal para escritórios e residências'
        },
        {
            id: 3,
            name: 'Cannon Direcionável 30W',
            price: 130.0,
            image: 'cannon-30w.jpg',
            receipt: 'Refletor LED direcionável, utilizado para realce em vitrines e fachadas'
        },
        {
            id: 4,
            name: 'Perfil de Alumínio 1m LED',
            price: 95.5,
            image: 'perfil-aluminio-1m.jpg',
            receipt: 'Sistema linear de LED para iluminação decorativa e funcional em ambientes internos'
        },
        {
            id: 5,
            name: 'Gas Station LED 200W',
            price: 420.0,
            image: 'gasstation-200w.jpg',
            receipt: 'Iluminação robusta para postos de combustíveis, IP65, alto fluxo luminoso'
        },
        {
            id: 6,
            name: 'Refletor Slim 50W',
            price: 85.0,
            image: 'refletor-slim-50w.jpg',
            receipt: 'Refletor LED compacto e potente, ideal para áreas externas e segurança'
        }
    ];

    for (let product of lightingProducts) {
        await prisma.product.upsert({
            where: { id: product.id },
            update: {},
            create: {
                name: product.name,
                price: product.price,
                image: product.image,
                receipt: product.receipt
            }
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });
