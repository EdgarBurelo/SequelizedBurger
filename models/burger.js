//const orm = require("../config/orm.js");

// var burgers = { 
//     all: function(cb) {
//         orm.selectAll(function(res){
//             cb(res);
//         });
//     },
//     insert: function (burgername, devour,cb) {
//         orm.insertOne(burgername,devour,function(res) {
//             cb(res);
//         });
//     },
//     update: function ( updateValue, filtervalue,cb) {
//         orm.updateOne("devoured", updateValue, "id", filtervalue,(res) => {
//             cb(res);
//         });
//     }
    
// };
// module.exports = burgers;

module.exports = function (sequelize, DataTypes) {

    const burgers = sequelize.define("burgers", {

        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        
    });

    return burgers;

};

