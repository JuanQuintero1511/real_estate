const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define (
        "Contact",

        {   
            id_contact: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                rimaryKey: true,
                allowNull: false
            },
            
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                  len: [3, 50] // Establece que la longitud máxima es de 250 caracteres
                }
            },

            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                valide: {
                    len: [10, 50] // Establece que la longitud maxima es de 50 caracteres
                }
            },


            Phone: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                  len: [10, 20] // Establece que la longitud máxima es de 500 caracteres
                }
            },

            comment: {
                type: DataTypes.STRING,
                allowNull: false,
                valide: {
                    len: [20, 500] // Establece que la longitud maxima es de 500 caracteres. 
                }
            }

        },
        {
            paranoid: true, // Habilita soft deletes
            timestamps: false,
        }
    );
};