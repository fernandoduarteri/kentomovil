const getUsers = async () => {
    const url = 'http://192.168.0.9:4000/users/getList/'; //192.168.0.9 is the ip address of my computer in mi network home, in this case act as a database server (PostgresSQL)
    const datos = await fetch(url);                       // You must change it and put yours
    return await datos.json();
}

const getLikes = async (id) => {
    const url = 'http://192.168.0.9:4000/users/getLikes/' + id; //192.168.0.9 is the ip address of my computer in mi network home, in this case act as a database server (PostgresSQL)
    const datos = await fetch(url);                             // You must change it and put yours
    return await datos.json();
}

export { getUsers, getLikes }