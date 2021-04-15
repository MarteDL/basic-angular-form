export class Friend {

  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: bigint | null;
  language: string | null;

  // tslint:disable-next-line:max-line-length
  constructor(firstName: string | null, lastName: string | null, email: string | null, phoneNumber: bigint | null, language: string | null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.language = language;
  }

}
