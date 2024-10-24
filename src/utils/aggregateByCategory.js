const aggregateByCategory = (data) => {
  const categoryMap = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = {
        label: item.category,
        value: 0,
      };
    }
    acc[item.category].value += item.amount;
    return acc;
  }, {});

  // Convert the result to an array
  return Object.values(categoryMap);
};

export default aggregateByCategory;