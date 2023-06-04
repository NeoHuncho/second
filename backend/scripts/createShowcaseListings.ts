import { PrismaClient } from "@prisma/client";
import repairablePhones from "../static/landingShowcase/showcaseItem/repairablePhones";
const createShowcaseListings = async () => {
  const prisma = new PrismaClient();

  await Promise.all(
    repairablePhones.map(async (listing) => {
      await prisma.showcaseListing.create({
        data: listing,
      });
      if (listing.children) {
        await Promise.all(
          listing.children.map(async (child) => {
            await prisma.showcaseListing.create({
              data: child,
            });
          })
        );
      }
    })
  );
};

createShowcaseListings().finally(() => {
  process.exit(0);
});
