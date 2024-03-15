// Send a JSON response indicating that the API is working
export const test = (req, res) => {
    res.json({ messaege: 'API is working!'});
};