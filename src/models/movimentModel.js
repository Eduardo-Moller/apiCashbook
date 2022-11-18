const mysql = require("./mysqlConnect");

/*get= async (query)=>{
    query = JSON.parse(query);
    sql= "SELECT ";
    if(query.select.date){
        sql+="date, ";
    }
    if(query.select.description){
        sql+="description, ";
    }
    if(query.select.value){
        sql+="value, ";
    }
    if(query.select.type){
        sql+="type, ";
    }
    sql=sql.substring(0, sql.length - 2);//remover dois ultimos caracter da sctring
    sql+=" FROM moviment"
    if(query.where){
        sql+=" WHERE"
        query.where.forEach(item =>{
            sql+=" "+item.campo+" "+item.operador.replace('/', '')+" '"+item.value+"' AND";
        })
        sql=sql.substring(0, sql.length - 3);//remover utilmo segmento 'END' da string
    }
    return await mysql.query(sql);
}*/

get = async () => {
    sql= `SELECT * FROM moviment`;
    return await mysql.query(sql);
}

io= async () => {
    sql = `SELECT sum(value) AS input FROM moviment WHERE type='input'`;
    input = await mysql.query(sql);
    sql = `SELECT sum(value) AS output FROM moviment WHERE type='output'`;
    output = await mysql.query(sql);
    data = {
        input: input[0].input,
        output:output[0].output
    }
    return data;
}

cashbalance= async () => {
    sql = `SELECT sum(value) AS input FROM moviment WHERE type='input'`;
    input = await mysql.query(sql);
    sql = `SELECT sum(value) AS output FROM moviment WHERE type='output'`;
    output = await mysql.query(sql);
    data = input[0].input-output[0].output;
    return data;
}

lista= async (year, month) => {
    sql = `SELECT * FROM moviment WHERE YEAR(date) = ${year} AND MONTH(date) = ${month}`;
    return await mysql.query(sql);
}

post= async (date, idUser)=>{
    //console.log(date);
    sql="INSERT INTO moviment"
    +" (description, date, value, user_id, type)"
    +" VALUES "
    +"('"+date.description+"', '"+date.date+"', "+date.value+", "+idUser+", '"+date.type+"')";
    const result = await  mysql.query(sql);
    console.log(result);
    if(result){
        resp={"status":"OK",insertId:result.insertId};
    }else{
        resp={"status":"Error",insertId:result.insertId};
    }
    return resp;
 }

 put= async (date, idUser)=>{
     sql="UPDATE moviments SET "
     +"description='"+date.description+"', date= '"+date.date+"', value="+date.value+", user_id="+idUser+", type='"+date.type+"'" 
     +" WHERE id= "+date.id
    const result = await  mysql.query(sql);
    resp=null;
    if(result){
        resp={"status":"OK"};
    }
    return resp;
 }

 remove = async (idMov, idUser)=>{
    sql="DELETE INTO moviments"
    +" WHERE id="+idMov;
    const result = await  mysql.query(sql);
    resp=null;
    if(result){
        resp={"status":"OK"};
    }
    return resp;
 }
module.exports= {get,post, put, remove, io, cashbalance, lista}