const connection = require("./connection.js");

let orm = {
    selectAll: function(cb) {
        let query = "SELECT * FROM burgers";
        connection.query(query,function(err,res) {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function(burgername,devour,cb) {
        let query = "INSERT INTO burgers (burger_name,devoured) VALUES (?,?)";
        connection.query(query, [burgername, devour],function(err,res) {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function (updateColumn, updateValue, filterColumn, filtervalue,cb) {
        let query = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
        connection.query(query,[updateColumn,updateValue,filterColumn, filtervalue],function(err,res) {
            if (err) throw err;
            cb(res);
         })
    }
};

module.exports = orm;