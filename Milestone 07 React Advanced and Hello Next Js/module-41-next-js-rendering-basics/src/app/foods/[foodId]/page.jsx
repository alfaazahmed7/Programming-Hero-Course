import Image from "next/image";

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const { id, image_link, dish_name, main_ingredients } = data.data;

    return (
        <div className="w-10/12 mx-auto">
            <h4>Food Data: {foodId}</h4>
            <h4>{dish_name}</h4>
            <Image
                src={image_link}
                alt={dish_name}
                width={300}
                height={300}
            ></Image>

            <h2 className="text-2xl">Ingradients</h2>
            <ol className="list-disc">
                {
                    main_ingredients.map((ingradient, index) => (
                        <li key={index}>{ingradient}</li>))
                }
            </ol>
        </div>
    );
};

export default FoodDetailPage;