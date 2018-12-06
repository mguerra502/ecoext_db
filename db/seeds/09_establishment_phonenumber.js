exports.seed = function (knex, Promise) {

  let establishment_id = -1;
  let phone_number_id = -1;

  return knex('establishment_phone_number').del()
    .then(function () {
      return knex("establishment")
      .select("establishment_id")
      .first()
    }).then((establishment) => {
      establishment_id = establishment.establishment_id;
      return knex('phone_number')
        .select('phone_number_id')
        .first()
    }).then(function (phonenumber) {
      phone_number_id = phonenumber.phone_number_id;
    }).then(function (phonenumber) {
      return knex('establishment_phone_number')
      .insert({
        establishment_id: establishment_id,
        phone_number_id: phone_number_id 
      })
    })
};
