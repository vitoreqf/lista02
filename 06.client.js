class Client {
  constructor(name, address, cpf, postalCode) {
    this.setName(name);
    this.setAddress(address);
    this.setCpf(cpf);
    this.setPostalCode(postalCode);
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  getCpf() {
    return this.cpf;
  }

  setCpf(cpf) {
    if (/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      this.cpf = cpf;
    } else {
      alert("O formato do CPF é inválido!")
    }

  }

  getPostalCode() {
    return this.postalCode;
  }

  setPostalCode(postalCode) {
    if (/^\d{8}$|^\d{5}-\d{3}$/.test(postalCode)) {
      this.postalCode = postalCode;
    } else {
      console.error("CEP inválido");
    }

  }

  resume() {
    console.log('Nome: ', this.getName())
    console.log('Endereço: ', this.getAddress())
    console.log('CPF: ', this.getCpf())
    console.log('CEP: ', this.getPostalCode())
  }
}