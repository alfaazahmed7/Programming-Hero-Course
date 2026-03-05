function calculateElectronicsBudget (laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopCost = 35000;
    const tabletCost = 15000;
    const mobileCost = 20000;

    const laptopTotalCost = laptopQuantity * laptopCost;
    const tabletTotalCost = tabletQuantity * tabletCost;
    const mobileTotalCost = mobileQuantity * mobileCost;

    const totalMoneyRequired = laptopTotalCost + tabletTotalCost + mobileTotalCost;

    return totalMoneyRequired;
}

const budget = calculateElectronicsBudget(2, 3, 2);
console.log(budget);