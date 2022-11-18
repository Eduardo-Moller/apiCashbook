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
exports.MovimentsLista = async (year, month) => {
    return await movimentoModel.listaAnoMes(year, month);
};
exports.movimentsIo = async () => {
    return await movimentoModel.ioModel();
};
exports.cashBalance = async () => {
    return await movimentoModel.cashBalanceModel();
};
exports.put = async (req, res) => {
    return await movimentoModel.put(data, idUser);
};
exports.delete = async (id) => {
    return await movimentoModel.delete(id, idUser);
};
exports.filtro = async(data)=>{
    console.log(data)
    return await movimentoModel.filtro(data);
}
exports.anoMes= async(data)=>{
    return await movimentoModel.anoMes(data);
};
