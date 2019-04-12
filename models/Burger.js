
module.exports = function(sequelize, DataTypes ){
    var Burger = sequelize.define("Burger", {
        burger_Name: {
            type: DataTypes.STRING
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
return Burger;
}