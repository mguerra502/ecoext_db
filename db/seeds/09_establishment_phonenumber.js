exports.seed = function (knex, Promise) {

  let establishment_id = -1;
  let phonenumber_id = -1;

  return knex('establishment_phonenumber').del()
    .then(function () {
      return knex("establishment")
      .select("establishment_id")
      .first()
    }).then((establishment) => {
      establishment_id = establishment.establishment_id;
      console.log(establishment.establishment_id)
      return knex('phonenumber')
        .select('phonenumber_id')
        .first()
    }).then(function (phonenumber) {
      phonenumber_id = phonenumber.phonenumber_id;
    }).then(function (phonenumber) {
      return knex('establishment_phonenumber')
      .insert({
        establishment_id: establishment_id,
        phonenumber_id: phonenumber_id 
      })
    })
};
