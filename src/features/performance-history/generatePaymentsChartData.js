const generatePaymentsChartData = (paymentHistory, propertyInfo) => {
  const chartData = [];

  paymentHistory.forEach(tenant => {
    const property = propertyInfo.find(p => p.property_id === tenant.property_id);
    
    tenant.payments.forEach(payment => {
      const existingEntry = chartData.find(entry => entry.date === payment.date);
      if (existingEntry) {
        existingEntry[property.streetAddress] = (existingEntry[property.streetAddress] || 0) + payment.amount;
      } else {
        const newEntry = { date: payment.date, [property.streetAddress]: payment.amount };
        chartData.push(newEntry);
      }
    });
  });

  return chartData;
};




export default generatePaymentsChartData;