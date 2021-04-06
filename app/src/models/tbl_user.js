module.exports = (sequelize, DataTypes) => {
    console.log("작동중");
    const User = sequelize.define('tbl_user', {
        u_email: {
            type: DataTypes.STRING(320),
            //allowNull: false,
            // unique: true,
        },
        u_nm: {
            type: DataTypes.STRING(50),
            //allowNull: false,
        },
        u_pwd: {
            type: DataTypes.STRING(200),
            //allowNull: false,
        },
        u_mobile_no: {
            type: DataTypes.STRING(15),
        },
        reg_dt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('now()'),
        },
        mod_dt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('now()'),
        },
        last_login_dt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('now()'),
        },

    }, { timestamps: false, });

    return User;
};