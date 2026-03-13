export default function User({ user }) {
    const {
        name,
        company: { name: companyName },
        address: { city: cityName }
    } = user;

    return (
        <div style={{ border: "2px solid red", marginBottom: "10px", borderRadius: "30px" }}>
            <h4>Name: {name}</h4>
            <h4>Company Name: {companyName}</h4>
            <h4>Adrees: {cityName}</h4>
        </div>
    );
}