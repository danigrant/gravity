var contract = artifacts.require("GravatarRegistry");

var contract_address = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';

void async function() {
  let instance = await contract.at(contract_address)
  console.log(instance)
}()



module.exports = {}

  // function() {
  //
  //   async function getCertifiedStudentsCount() {
  //     let ins = await contract.at(contract_address);
  //     let res = await ins.getCertifiedStudentsCount();
  //     console.log('no. of passed students is '+res.toString());
  //   }
  //   getCertifiedStudentsCount();
  // }
