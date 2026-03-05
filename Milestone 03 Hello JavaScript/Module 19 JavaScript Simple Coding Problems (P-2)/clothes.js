function totalClothes (shirtQuantity, tShirtQuantity, pantQuantity, panjabiQuantity) {
    const shirtCost = 800;
    const tShirtCost = 300;
    const pantCost = 700;
    const panjabiCost = 1500;

    const shirtTotalCost = shirtCost * shirtQuantity;
    const tShirtTotalCost = tShirtCost * tShirtQuantity;
    const pantTotalCost = pantCost * pantQuantity;
    const panjabiTotalCost = panjabiCost * panjabiQuantity;

    const totalClothesCost = shirtTotalCost + tShirtTotalCost + panjabiTotalCost + panjabiTotalCost;
    return totalClothesCost; 
}

const clothesCost = totalClothes(5, 5, 7, 2);
console.log("Total clothes cost is:", clothesCost); 