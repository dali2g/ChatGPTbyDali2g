module.exports = async (req, res) => {
  const data = await getDataFromDatabase();
  res.json({ data });
};
