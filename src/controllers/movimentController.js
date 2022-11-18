const movimentoModel = require("../models/movimentModel");

exports.post = async (data, idUser) => {
    return await movimentoModel.post(data, idUser);
};

/*exports.get = async (query) => {
    console.log(query);
    return await movimentoModel.get(query);
};*/

exports.get = async () => {
    return await movimentoModel.get();
};
exports.lista = async (year, month) => {
    return await movimentoModel.lista(year, month);
};
exports.io = async () => {
    return await movimentoModel.io();
};
exports.cashbalance = async () => {
    cashbalance = await movimentoModel.cashbalance();
    movimentos = await movimentoModel.io();
    data = {
        saldo:cashbalance,
        movimentos:movimentos
    }
    return data;
};
exports.put = async (req, res) => {
    return await movimentoModel.put(data, idUser);
};
exports.delete = async (id) => {
    return await movimentoModel.delete(id, idUser);
};
