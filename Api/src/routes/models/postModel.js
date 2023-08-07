const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define (
        "Post",

        {   
            id_post: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                rimaryKey: true,
                allowNull: false
            },
            
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                  len: [3, 250] // Establece que la longitud máxima es de 250 caracteres
                }
            },

            img: {
                type: DataTypes.JSONB,
                allowNull: true
            },

            body: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                  len: [10, 500] // Establece que la longitud máxima es de 500 caracteres
                }
            },

            details: {
                type: DataTypes.STRING,   
                allowNull: false,
                valide: {
                    len: [10, 500] // Establece que la longitud maxima es de 500 caracteres. 
                }
            },

            characteristics: {
                type: DataTypes.STRING,
                allowNull: false,
                valide: {
                    len: [10, 500] // Establece que la longitud maxima es de 500 caracteres. 
                }
            },

            description: {
                type: DataTypes.STRING,
                allowNull: false,
                valide: {
                    len: [20, 500] // Establece que la longitud maxima es de 500 caracteres. 
                }
            }

        }
    ) 
}