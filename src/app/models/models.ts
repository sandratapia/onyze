export interface TravelCard {
    passengerInfo: PassengerInfo;
    paymentMethods: PaymentMethod[];
    destination: Destination;
    travelInfo: TravelInfo;
    hiddenTravelInfo: boolean;
}

export interface PassengerInfo {
    profileImage: string;
    completeName: string;
    interactions: number;
    email: string;
    phone: string;
    location: string;
}

export interface PaymentMethod {
    name: string;
    iconClass: string;
    isActive: boolean;
}

export interface Destination {
    origin: string;
    originAddress: string;
    destination: string;
    destinationAddress: string;
}

export interface TravelInfo {
    distance: number;
    time: number;
    price: number;
    energy: number;
}

