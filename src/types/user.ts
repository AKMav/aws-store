interface ICoordinates {
  lat: number;
  lng: number;
}

interface IFullAddress {
  address: string;
  city: string;
  country: string;
  postalCode: string;
  state: string;
  stateCode: string;
  coordinates: ICoordinates;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  address?: IFullAddress;
}
