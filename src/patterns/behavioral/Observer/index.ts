import { DataTransferModel } from '../../../shared/util';
import Client from './client';
import Employee from './employee';
import NewsLetter from './newsLetter';
import Partner from './partner';
import Supplier from './supplier';

function formatArrayToString(arr: string[]): string {
  let result = '';
  arr.forEach(item => {
    result = `${result} \n "${item}",`;
  });

  return result;
}

export default function ObserverResult(): DataTransferModel {
  const newsLetter = new NewsLetter();
  const response: DataTransferModel = {};

  const client = new Client('ABC Company', 'abc@def.com', newsLetter);
  const employee1 = new Employee('John Smith', 'john.smith@gmail.com', newsLetter);
  const employee2 = new Employee('Anna Dias', 'anna.dias@gmail.com', newsLetter);
  const partner = new Partner('PQR Company', 'company@pqr.com', newsLetter);
  const supplier = new Supplier('XYZ Company', 'zyz@gmail.com', newsLetter);

  response.first = formatArrayToString(newsLetter.addMessage('First Email'));

  newsLetter.removeObserver(employee2);
  response.removeEmployee2 = 'Employee 2 removed, Anna Dias will no longer receive emails.';
  response.second = formatArrayToString(newsLetter.addMessage('Second Email'));

  newsLetter.removeObserver(partner);
  response.removePartner = 'Partner removed, PQR Company will no longer receive emails.';
  response.third = formatArrayToString(newsLetter.addMessage('Third Email'));

  newsLetter.registerObserver(employee2);
  response.registerEmployee2 = 'Employee 2 register, Anna Dias will receive new emails.';
  response.fourth = formatArrayToString(newsLetter.addMessage('Fourth Email'));

  response.repeatTheFourth = formatArrayToString(newsLetter.notifyObservers());

  return response;
}
