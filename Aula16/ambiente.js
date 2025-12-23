let name = ["maria", "joão", "vitor", "cláudio"];

name.push("aline");

for (let i in name) {
    // i é índice, convertemos para número e somamos 1 para mostrar na contagem normal
    console.log(`O ${Number(i) + 1}° nome é ${name[i]}.`);
}

