

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');


const fruitsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
  });


const Fruit = mongoose.model('Fruit', fruitsSchema);

// const mango = new Fruit({
//      name: 'Mango',
//      rating: 9,
//      review:'So fucking good.'
//      });

// mango.save()


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitsSchema
  });

const Person = mongoose.model('Person', personSchema);

// const person = new Person({
//     name: 'Tamara',
//     age: 17,
//     favouriteFruit: pineapple
// });

// person.save()

// const kiwi = new Fruit({
//     name: 'Kiwi',
//     rating: 10,
//     review: 'The best fruit'
// })

// const banana = new Fruit({
//     name: 'Banana',
//     rating: 7,
//     review: 'Tasty but short experience'
// })

// const orange = new Fruit({
//     name: 'Orange',
//     rating: 3,
//     review: "It's very sour"
// })


//CREATE OPERATIONS USING MONGOOSE

// Fruit.insertMany([kiwi, orange, banana])
//     .then(function() {
//         console.log('Successfully saved to database');
//     })
//     .catch(function (err) {
//         console.log(err);
//     });



//READ OPERATIONS USING MONGOOSE
Fruit.find({}).then((fruits) => {

    mongoose.connection.close(); // THIS IS GOOD PRACTICE

    fruits.forEach((fruit) => {
        console.log(fruit.name);
    })

}).catch((err) => {
    console.log(err);
})

// UPDATE OPERATIONS USING MONGOOSE
// Person.updateOne({name: 'John'}, {favouriteFruit: mango})
//     .then(function() {

//         mongoose.connection.close();

//         console.log('Successfully updated to database');
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// DELETE OPERATIONS USING MONGOOSE
// Person.deleteOne({ _id: "6446755395dd85cc347da80e" })
//     .then(function() {
//         mongoose.connection.close();

//         console.log('Successfully deleted database');
//      })
//     .catch(function (err) {
//         console.log(err);
//      });





  



    