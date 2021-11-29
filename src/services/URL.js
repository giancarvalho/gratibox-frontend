const URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://apigratibox.herokuapp.com";

export default URL;
