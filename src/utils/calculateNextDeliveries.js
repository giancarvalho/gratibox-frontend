import dayjs from 'dayjs';

function recalcIfWeekend(date) {
  const day = dayjs(date).get('d');

  if (day === 6 || day === 0) return date;

  const sumValue = day === 0 ? '1' : '2';

  return dayjs(date).add(sumValue, 'd');
}

function calculateNextDeliveries(plan) {
  const deliveries = [];
  let referenceDate = plan.timestamp;
  const timeUnit = plan.name === 'mensal' ? 'month' : 'week';

  for (let i = 0; i < 3; i += 1) {
    let delivery = dayjs(referenceDate).add(1, timeUnit);
    delivery = recalcIfWeekend(delivery);
    referenceDate = delivery;
    deliveries.push(delivery.format('DD/MM/YYYY'));
  }

  return deliveries;
}

export default calculateNextDeliveries;
