let orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });

    }, 
    insertOne: function(name, cb){
        orm.insert("burgers", name, function(res){
            cb(res);
        });

    },
    updateOne: function(devoured, id, cb){
        orm.update("burgers", devoured, id, function(res){
            cb(res);
        })

    }
}
module.exports = burger;