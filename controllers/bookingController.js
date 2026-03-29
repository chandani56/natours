const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');

exports.createBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.create({
    tour: req.body.tour,
    user: req.user.id,
    price: req.body.price,
  });

  res.status(201).json({
    status: 'success',
    data: {
      booking,
    },
  });
});
