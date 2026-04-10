import FoodPage from "@/components/FoodPage";

const FoodsPage = async () => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const data = await res.json();
    const foods = data.data;
    console.log(foods);

    return (
        <div className="w-10/12 mx-auto">
            <h4>Foods length: {foods.length}</h4>
            <div className="grid lg:grid-cols-3 gap-5">
                {
                    foods.map(food => <FoodPage food={food} key={food.id}></FoodPage>)
                }
            </div>
        </div>
    );
};

export default FoodsPage;